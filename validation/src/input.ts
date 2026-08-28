import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { evidenceForSection, requestContractForSection } from "./artifacts.ts";
import { hashJson, sha256 } from "./hash.ts";
import { matchesAnyPath } from "./manifest.ts";
import { buildSectionPayload, requirementIdsForSection } from "./payload.ts";
import { runCommand } from "./process.ts";
import {
  AUDIT_SYSTEM_PROMPT,
  DOCUMENT_AUDIT_SYSTEM_PROMPT,
  PATCH_RETRY_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  REGRESSION_AUDIT_SYSTEM_PROMPT,
} from "./prompts.ts";
import type {
  ChangeEvent,
  DocumentAuditInput,
  DocumentAuditOutput,
  ImpactManifest,
  ImplementationFile,
  NodeAuditInput,
  PipelineConfig,
  SectionId,
  Sha256,
  SpecificationSnapshot,
  TriggerSnapshot,
} from "./types.ts";

const TEXT_EXTENSIONS = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".yml",
  ".yaml",
]);

export async function repositoryInputFiles(repositoryRoot: string): Promise<string[]> {
  const result = await runCommand(
    "git",
    ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
    { cwd: repositoryRoot },
  );
  return result.stdout.split("\0").filter(Boolean).sort();
}

export async function implementationFilesForNode(
  config: PipelineConfig,
  manifest: ImpactManifest,
  sectionId: SectionId,
  allRepositoryFiles: string[],
): Promise<{ files: ImplementationFile[]; assets: NodeAuditInput["implementation"]["runtimeFacts"]["assets"] }> {
  const patterns = manifest.nodes[sectionId].reads;
  const selected = allRepositoryFiles.filter((file) => matchesAnyPath(file, patterns)).sort();
  const files: ImplementationFile[] = [];
  const assets: NodeAuditInput["implementation"]["runtimeFacts"]["assets"] = [];

  for (const relativePath of selected) {
    const absolutePath = path.join(config.repositoryRoot, relativePath);
    const bytes = await readFile(absolutePath);
    const contentHash = sha256(bytes);
    const byteLength = (await stat(absolutePath)).size;
    if (TEXT_EXTENSIONS.has(path.extname(relativePath).toLowerCase())) {
      files.push({
        path: relativePath,
        contentHash,
        byteLength,
        encoding: "utf8",
        content: bytes.toString("utf8"),
      });
    } else {
      files.push({
        path: relativePath,
        contentHash,
        byteLength,
        encoding: "binary",
        content: null,
      });
      assets.push({ path: relativePath, contentHash, byteLength });
    }
  }
  return { files, assets };
}

export function validatorContractHash(
  config: PipelineConfig,
  manifest: ImpactManifest,
  contractSchemaHash: Sha256,
): Sha256 {
  return hashJson({
    schemaVersion: "design-validation/validator-contract/v3",
    auditUnit: "atomic-source-leaf/v4",
    aggregationPolicy: "bottom-up-all-leaves/v1",
    sourceOffsetUnit: "utf8-byte/v1",
    documentAuditPromptHash: sha256(DOCUMENT_AUDIT_SYSTEM_PROMPT),
    auditPromptHash: sha256(AUDIT_SYSTEM_PROMPT),
    patchPromptHash: sha256(PATCH_SYSTEM_PROMPT),
    patchRetryPromptHash: sha256(PATCH_RETRY_SYSTEM_PROMPT),
    regressionAuditPromptHash: sha256(REGRESSION_AUDIT_SYSTEM_PROMPT),
    normalizerVersion: "nvidia-output-normalizer/v10-bottom-up-leaf",
    structuredOutputTransport: "nvidia-guided-json-compatible/v2",
    contractSchemaHash,
    impactManifest: manifest,
    maxChangedFiles: config.maxChangedFiles,
    maxChangedLines: config.maxChangedLines,
    auditAttempts: config.auditAttempts,
    patchGenerationAttempts: config.patchGenerationAttempts,
  });
}

export function modelContractHash(config: PipelineConfig): Sha256 {
  return hashJson({
    provider: "nvidia",
    seedPolicy: "fingerprint-and-request-id/v2",
    baseUrl: config.nvidia.baseUrl,
    model: config.nvidia.model,
    contextWindowTokens: config.nvidia.contextWindowTokens,
    maxOutputTokens: config.nvidia.maxOutputTokens,
    enableThinking: config.nvidia.enableThinking,
    reasoningBudget: config.nvidia.reasoningBudget,
    temperature: config.nvidia.temperature,
    topP: config.nvidia.topP,
  });
}

export function targetIdFor(repository: string, referenceId: string): string {
  const repositorySlug = repository
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${repositorySlug}--${referenceId}`;
}

export async function buildDocumentAuditInputs(
  config: PipelineConfig,
  manifest: ImpactManifest,
  specification: SpecificationSnapshot,
  trigger: TriggerSnapshot,
  contractSchemaHash: Sha256,
  runId: string,
  requestedAt: string,
): Promise<Map<SectionId, DocumentAuditInput>> {
  const validatorHash = validatorContractHash(config, manifest, contractSchemaHash);
  const modelHash = modelContractHash(config);
  const targetId = targetIdFor(config.repository, trigger.referenceId);
  const inputs = new Map<SectionId, DocumentAuditInput>();

  for (const [sectionId, designSection] of trigger.sections) {
    const specificationSection = specification.sections.get(sectionId);
    if (!specificationSection) throw new Error(`Specification is missing ${sectionId}.`);
    const evidence = await evidenceForSection({
      repositoryRoot: config.repositoryRoot,
      trigger,
      fragment: designSection.fragment,
    });
    const requestContract = await requestContractForSection(
      config.repositoryRoot,
      trigger,
      sectionId,
    );
    const node = manifest.nodes[sectionId];
    const fingerprint = hashJson({
      schemaVersion: "design-validation/document-fingerprint/v1",
      targetId,
      sectionId,
      triggerPath: trigger.path,
      triggerDocumentHash: trigger.documentHash,
      specificationGlobalRulesHash: specification.globalRulesHash,
      specificationFragmentHash: specificationSection.hash,
      designIndexFragmentHash: designSection.hash,
      evidenceSubsetHash: hashJson(evidence),
      requestContractHash: requestContract?.contentHash ?? null,
      validatorConfigHash: validatorHash,
      modelContractHash: modelHash,
    });
    const input: DocumentAuditInput = {
      schemaVersion: "design-validation/document-audit-input/v1",
      run: {
        runId,
        targetId,
        repository: config.repository,
        baseCommit: config.baseCommit,
        requestedAt,
      },
      node: { sectionId, name: node.name, fingerprint },
      contract: {
        specificationSource: {
          path: specification.path,
          documentHash: specification.documentHash,
          globalRulesHash: specification.globalRulesHash,
          sectionHash: specificationSection.hash,
          sectionHeading: specificationSection.heading,
        },
        specificationGlobalRules: specification.globalRules,
        specificationFragment: specificationSection.fragment,
        designIndexSource: {
          path: trigger.path,
          referenceId: trigger.referenceId,
          documentHash: trigger.documentHash,
          sectionHash: designSection.hash,
          sectionHeading: designSection.heading,
        },
        designIndexFragment: designSection.fragment,
        requestContract,
      },
      evidence,
      policy: {
        immutableInputGlobs: manifest.immutableInputGlobs,
        forbiddenOperations: [
          "read source code",
          "modify Specification or DESIGN_INDEX",
          "invent missing design values",
          "read another numbered Section",
          "generate a code patch",
        ],
      },
      payload: buildSectionPayload({
        sectionId,
        trigger,
        fragment: designSection.fragment,
        evidence,
      }),
    };
    const conservativeTokenUpperBound = Buffer.byteLength(JSON.stringify(input), "utf8");
    if (conservativeTokenUpperBound > config.nvidia.maxInputTokens) {
      throw new Error(
        `${sectionId} document input upper bound ${conservativeTokenUpperBound} exceeds NVIDIA_MAX_INPUT_TOKENS=${config.nvidia.maxInputTokens}.`,
      );
    }
    inputs.set(sectionId, input);
  }
  return inputs;
}

export function assertIsolatedDocumentAuditInput(input: DocumentAuditInput): void {
  const ownNumber = Number(input.node.sectionId.slice(1));
  const ownedBoundaryHeadings = [
    ...input.contract.specificationFragment.matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
    ...(input.contract.requestContract?.fragment ?? "").matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
  ].map((match) => Number(match[1]));
  const designIndexHeadings = [
    ...input.contract.designIndexFragment.matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
  ].map((match) => Number(match[1]));
  const isGlobalRuleLeaf = input.node.leaf?.sourceKind === "global-rule";
  if (
    ownedBoundaryHeadings.some((number) => number !== ownNumber) ||
    (!isGlobalRuleLeaf && designIndexHeadings.some((number) => number !== ownNumber))
  ) {
    throw new Error(`${input.node.sectionId} document input contains another numbered Section.`);
  }
  if ("implementation" in input) {
    throw new Error(`${input.node.sectionId} document input unexpectedly contains source code.`);
  }
}

export async function buildAuditInputs(
  config: PipelineConfig,
  manifest: ImpactManifest,
  specification: SpecificationSnapshot,
  trigger: TriggerSnapshot,
  contractSchemaHash: Sha256,
  runId: string,
  requestedAt: string,
  changeEvent: ChangeEvent,
  documentOutputs: Map<SectionId, DocumentAuditOutput>,
): Promise<Map<SectionId, NodeAuditInput>> {
  const allRepositoryFiles = await repositoryInputFiles(config.repositoryRoot);
  const validatorHash = validatorContractHash(config, manifest, contractSchemaHash);
  const modelHash = modelContractHash(config);
  const targetId = targetIdFor(config.repository, trigger.referenceId);
  const inputs = new Map<SectionId, NodeAuditInput>();

  for (const [sectionId, designSection] of trigger.sections) {
    const specificationSection = specification.sections.get(sectionId);
    if (!specificationSection) throw new Error(`Specification is missing ${sectionId}.`);
    const implementation = await implementationFilesForNode(
      config,
      manifest,
      sectionId,
      allRepositoryFiles,
    );
    const evidence = await evidenceForSection({
      repositoryRoot: config.repositoryRoot,
      trigger,
      fragment: designSection.fragment,
    });
    const requestContract = await requestContractForSection(
      config.repositoryRoot,
      trigger,
      sectionId,
    );
    const requirementIds = requirementIdsForSection(sectionId, designSection.fragment);
    const documentOutput = documentOutputs.get(sectionId);
    if (!documentOutput) throw new Error(`Document audit is missing ${sectionId}.`);
    const node = manifest.nodes[sectionId];
    const fingerprint = hashJson({
      schemaVersion: "design-validation/implementation-fingerprint/v3",
      targetId,
      sectionId,
      triggerPath: trigger.path,
      triggerDocumentHash: trigger.documentHash,
      designIndexFragmentHash: designSection.hash,
      documentAuditFingerprint: documentOutput.fingerprint,
      documentAuditOutputDigest: hashJson(documentOutput),
      evidenceSubsetHash: hashJson(evidence),
      requestContractHash: requestContract?.contentHash ?? null,
      implementationSliceHash: hashJson(
        implementation.files.map(({ path: filePath, contentHash, byteLength, encoding }) => ({
          path: filePath,
          contentHash,
          byteLength,
          encoding,
        })),
      ),
      validatorConfigHash: validatorHash,
      modelContractHash: modelHash,
    });

    const input: NodeAuditInput = {
      schemaVersion: "design-validation/implementation-audit-input/v3",
      run: {
        runId,
        targetId,
        repository: config.repository,
        baseCommit: config.baseCommit,
        requestedAt,
      },
      node: {
        sectionId,
        name: node.name,
        requirementIds,
        fingerprint,
        dependsOn: node.dependsOn,
      },
      contract: {
        specificationSource: {
          path: specification.path,
          documentHash: specification.documentHash,
          globalRulesHash: specification.globalRulesHash,
          sectionHash: specificationSection.hash,
          sectionHeading: specificationSection.heading,
        },
        designIndexSource: {
          path: trigger.path,
          referenceId: trigger.referenceId,
          documentHash: trigger.documentHash,
          sectionHash: designSection.hash,
          sectionHeading: designSection.heading,
        },
        designIndexFragment: designSection.fragment,
        documentAudit: {
          fingerprint: documentOutput.fingerprint,
          status: documentOutput.status,
          outputDigest: hashJson(documentOutput),
          findingRequirementIds: documentOutput.findings.map((finding) => finding.requirementId),
        },
        requestContract,
      },
      evidence,
      implementation: {
        files: implementation.files,
        runtimeFacts: {
          assets: implementation.assets,
          changeEvent: {
            eventId: changeEvent.eventId,
            source: changeEvent.source,
            changedPaths: changeEvent.changedFiles.map((file) => file.path),
          },
        },
      },
      policy: {
        allowedReadGlobs: node.reads,
        allowedWriteGlobs: node.writes,
        immutableInputGlobs: manifest.immutableInputGlobs,
        forbiddenOperations: [
          "modify immutable inputs",
          "invent missing design values",
          "read another DESIGN_INDEX Section",
          "delete or rename files",
          "perform unrelated refactoring",
        ],
        maxChangedFiles: config.maxChangedFiles,
        maxChangedLines: config.maxChangedLines,
      },
      payload: buildSectionPayload({
        sectionId,
        trigger,
        fragment: designSection.fragment,
        evidence,
      }),
    };

    const conservativeTokenUpperBound = Buffer.byteLength(JSON.stringify(input), "utf8");
    if (conservativeTokenUpperBound > config.nvidia.maxInputTokens) {
      throw new Error(
        `${sectionId} input upper bound ${conservativeTokenUpperBound} exceeds NVIDIA_MAX_INPUT_TOKENS=${config.nvidia.maxInputTokens}.`,
      );
    }
    inputs.set(sectionId, input);
  }
  return inputs;
}

export function assertIsolatedAuditInput(input: NodeAuditInput): void {
  const ownNumber = Number(input.node.sectionId.slice(1));
  const legacySpecificationFragment = (input.contract as NodeAuditInput["contract"] & {
    specificationFragment?: string;
  }).specificationFragment ?? "";
  const numberedHeadings = [
    ...legacySpecificationFragment.matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
    ...input.contract.designIndexFragment.matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
    ...(input.contract.requestContract?.fragment ?? "").matchAll(/^#{1,6}\s+(\d+)\.\s+/gm),
  ].map((match) => Number(match[1]));
  if (numberedHeadings.some((number) => number !== ownNumber)) {
    throw new Error(`${input.node.sectionId} input contains another numbered Section.`);
  }
  if (input.node.requirementIds.some((id) => !id.startsWith(`${input.node.sectionId}-`))) {
    throw new Error(`${input.node.sectionId} input contains a foreign Requirement ID.`);
  }
  const invalidFile = input.implementation.files.find(
    (file) => !matchesAnyPath(file.path, input.policy.allowedReadGlobs),
  );
  if (invalidFile) throw new Error(`${input.node.sectionId} input contains out-of-scope file ${invalidFile.path}.`);
}
