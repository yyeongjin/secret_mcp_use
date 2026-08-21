import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { hashHex, hashJson } from "./hash.ts";
import { topologicalSections } from "./manifest.ts";
import type {
  CachedNode,
  ImpactManifest,
  NodeAuditInput,
  NodeAuditOutput,
  PassAttestation,
  PipelineConfig,
  ResolvedNode,
  SectionId,
  Sha256,
} from "./types.ts";

async function exists(pathname: string): Promise<boolean> {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

function attestationHash(attestation: Omit<PassAttestation, "attestationHash">): Sha256 {
  return hashJson(attestation);
}

function validAttestationShape(value: unknown): value is PassAttestation {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<PassAttestation>;
  return (
    item.schemaVersion === "design-validation/attestation/v2" &&
    item.status === "PASS" &&
    typeof item.targetId === "string" &&
    typeof item.sectionId === "string" &&
    typeof item.fingerprint === "string" &&
    Array.isArray(item.requirementIds) &&
    typeof item.dependencyPublicDigests === "object" &&
    typeof item.attestationHash === "string"
  );
}

async function loadCandidates(
  stateRoot: string,
  targetId: string,
  sectionId: SectionId,
  fingerprint: Sha256,
): Promise<PassAttestation[]> {
  const directory = path.join(stateRoot, "attestations", targetId, sectionId);
  if (!(await exists(directory))) return [];
  const prefix = hashHex(fingerprint);
  const entries = (await readdir(directory)).filter(
    (name) => name.startsWith(prefix) && name.endsWith(".json"),
  );
  const candidates: PassAttestation[] = [];
  for (const entry of entries.sort()) {
    const parsed = JSON.parse(await readFile(path.join(directory, entry), "utf8")) as unknown;
    if (!validAttestationShape(parsed)) continue;
    const { attestationHash: claimed, ...unsigned } = parsed;
    if (attestationHash(unsigned) !== claimed) continue;
    if (await exists(path.join(stateRoot, "revocations", `${hashHex(claimed)}.json`))) continue;
    candidates.push(parsed);
  }
  return candidates;
}

function candidateMatches(
  candidate: PassAttestation,
  input: NodeAuditInput,
  dependencies: Map<SectionId, ResolvedNode>,
  expectedValidatorId: string,
  expectedValidatorContractHash: Sha256,
): boolean {
  if (
    candidate.targetId !== input.run.targetId ||
    candidate.sectionId !== input.node.sectionId ||
    candidate.fingerprint !== input.node.fingerprint ||
    candidate.triggerSource.path !== input.contract.designIndexSource.path ||
    candidate.triggerSource.documentHash !== input.contract.designIndexSource.documentHash ||
    candidate.triggerSource.fragmentHash !== input.contract.designIndexSource.sectionHash ||
    candidate.specificationSource.path !== input.contract.specificationSource.path ||
    candidate.specificationSource.documentHash !== input.contract.specificationSource.documentHash ||
    candidate.specificationSource.globalRulesHash !== input.contract.specificationSource.globalRulesHash ||
    candidate.specificationSource.fragmentHash !== input.contract.specificationSource.sectionHash ||
    candidate.validator.id !== expectedValidatorId ||
    candidate.validator.contractHash !== expectedValidatorContractHash
  ) {
    return false;
  }

  for (const dependencyId of input.node.dependsOn) {
    const dependency = dependencies.get(dependencyId);
    if (!dependency || dependency.output.status !== "PASS") return false;
    const currentPublicDigest = hashJson(dependency.output.publicOutput);
    if (candidate.dependencyPublicDigests[dependencyId] !== currentPublicDigest) {
      return false;
    }
  }
  return true;
}

export async function resolveCachedPassForNode(args: {
  config: PipelineConfig;
  input: NodeAuditInput;
  resolvedDependencies: Map<SectionId, ResolvedNode>;
  validatorContractHash: Sha256;
}): Promise<CachedNode | null> {
  if (args.config.forceFullAudit) return null;
  const candidates = await loadCandidates(
    args.config.stateRoot,
    args.input.run.targetId,
    args.input.node.sectionId,
    args.input.node.fingerprint,
  );
  const matches = candidates.filter((candidate) => candidateMatches(
    candidate,
    args.input,
    args.resolvedDependencies,
    `nvidia:${args.config.nvidia.model}`,
    args.validatorContractHash,
  ));
  const publicDigests = new Set(matches.map((candidate) => candidate.publicDigest));
  if (publicDigests.size > 1) {
    throw new Error(`Conflicting immutable PASS attestations found for ${args.input.node.sectionId}.`);
  }
  const candidate = matches[0];
  if (!candidate) return null;
  return {
    status: "CACHED_PASS",
    attestation: candidate,
    output: {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId: args.input.node.sectionId,
      fingerprint: args.input.node.fingerprint,
      status: "PASS",
      findings: [],
      publicOutput: candidate.publicOutput,
    },
  };
}

export async function resolveCachedPasses(
  config: PipelineConfig,
  manifest: ImpactManifest,
  inputs: Map<SectionId, NodeAuditInput>,
  validatorContractHash: Sha256,
): Promise<Map<SectionId, CachedNode>> {
  const cached = new Map<SectionId, CachedNode>();
  if (config.forceFullAudit) return cached;

  for (const sectionId of topologicalSections(manifest)) {
    const input = inputs.get(sectionId);
    if (!input) throw new Error(`Missing input for ${sectionId}.`);
    const candidate = await resolveCachedPassForNode({
      config,
      input,
      resolvedDependencies: cached,
      validatorContractHash,
    });
    if (candidate) cached.set(sectionId, candidate);
  }
  return cached;
}

export async function createFreshAttestations(args: {
  config: PipelineConfig;
  manifest: ImpactManifest;
  inputs: Map<SectionId, NodeAuditInput>;
  resolved: Map<SectionId, ResolvedNode>;
  validatorContractHash: Sha256;
  outputDirectory: string;
  source: PassAttestation["source"];
}): Promise<Map<SectionId, PassAttestation>> {
  const attestations = new Map<SectionId, PassAttestation>();

  for (const sectionId of topologicalSections(args.manifest)) {
    const resolved = args.resolved.get(sectionId);
    const input = args.inputs.get(sectionId);
    if (!resolved || !input) throw new Error(`Cannot attest missing ${sectionId} result.`);
    if (resolved.status === "CACHED_PASS") {
      attestations.set(sectionId, resolved.attestation);
      continue;
    }
    if (resolved.output.status !== "PASS") continue;

    const dependencyAttestations: Partial<Record<SectionId, Sha256>> = {};
    const dependencyPublicDigests: Partial<Record<SectionId, Sha256>> = {};
    let dependenciesComplete = true;
    for (const dependencyId of input.node.dependsOn) {
      const dependency = attestations.get(dependencyId);
      if (!dependency) {
        dependenciesComplete = false;
        break;
      }
      dependencyAttestations[dependencyId] = dependency.attestationHash;
      dependencyPublicDigests[dependencyId] = dependency.publicDigest;
    }
    if (!dependenciesComplete) continue;

    const unsigned: Omit<PassAttestation, "attestationHash"> = {
      schemaVersion: "design-validation/attestation/v2",
      targetId: input.run.targetId,
      sectionId,
      fingerprint: input.node.fingerprint,
      triggerSource: {
        path: input.contract.designIndexSource.path,
        documentHash: input.contract.designIndexSource.documentHash,
        fragmentHash: input.contract.designIndexSource.sectionHash,
      },
      specificationSource: {
        path: input.contract.specificationSource.path,
        documentHash: input.contract.specificationSource.documentHash,
        globalRulesHash: input.contract.specificationSource.globalRulesHash,
        fragmentHash: input.contract.specificationSource.sectionHash,
      },
      status: "PASS",
      baseCommit: args.config.baseCommit,
      source: args.source,
      requirementIds: input.node.requirementIds,
      dependencyAttestations,
      dependencyPublicDigests,
      publicOutput: resolved.output.publicOutput,
      publicDigest: hashJson(resolved.output.publicOutput),
      validator: {
        id: `nvidia:${args.config.nvidia.model}`,
        contractHash: args.validatorContractHash,
      },
      tests: [{ id: "audit-schema", status: "PASS", artifactHash: resolved.rawResponseHash }],
      createdAt: new Date().toISOString(),
    };
    const attestation: PassAttestation = {
      ...unsigned,
      attestationHash: attestationHash(unsigned),
    };
    const directory = path.join(args.outputDirectory, input.run.targetId, sectionId);
    await mkdir(directory, { recursive: true });
    const filename = `${hashHex(input.node.fingerprint)}--${hashHex(attestation.attestationHash)}.json`;
    await writeFile(path.join(directory, filename), `${JSON.stringify(attestation, null, 2)}\n`, {
      flag: "wx",
    });
    attestations.set(sectionId, attestation);
  }
  return attestations;
}

export function resolvedOutput(resolved: ResolvedNode): NodeAuditOutput {
  return resolved.output;
}
