import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { hashJson, sha256 } from "./hash.ts";
import { matchesAnyPath } from "./manifest.ts";
import type {
  EvidenceReference,
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

async function walkFiles(root: string, relativeDirectory: string): Promise<string[]> {
  const absoluteDirectory = path.join(root, relativeDirectory);
  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relativePath = path.posix.join(relativeDirectory.replaceAll("\\", "/"), entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(root, relativePath)));
    if (entry.isFile()) files.push(relativePath);
  }
  return files;
}

export async function repositoryFrontendFiles(repositoryRoot: string): Promise<string[]> {
  return walkFiles(repositoryRoot, "frontend");
}

export async function implementationFilesForNode(
  config: PipelineConfig,
  manifest: ImpactManifest,
  sectionId: SectionId,
  allFrontendFiles: string[],
): Promise<{ files: ImplementationFile[]; assets: NodeAuditInput["implementation"]["runtimeFacts"]["assets"] }> {
  const patterns = manifest.nodes[sectionId].reads;
  const selected = allFrontendFiles.filter((file) => matchesAnyPath(file, patterns)).sort();
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

function evidenceIds(fragment: string): string[] {
  return [...new Set(fragment.match(/\bE-[A-Z][A-Z0-9-]*\b/g) ?? [])].sort();
}

function evidenceMetadata(trigger: TriggerSnapshot, evidenceId: string): string {
  const inventory = trigger.sections.get("S02")?.fragment ?? "";
  const lines = inventory
    .split("\n")
    .filter((line) => line.includes(evidenceId))
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines.join("\n") : evidenceId;
}

function buildEvidence(trigger: TriggerSnapshot, fragment: string): EvidenceReference[] {
  return evidenceIds(fragment).map((evidenceId) => {
    const metadata = evidenceMetadata(trigger, evidenceId);
    return {
      evidenceId,
      kind: "metadata",
      contentHash: sha256(metadata),
      localRef: `${trigger.path}#${evidenceId}`,
    };
  });
}

export function validatorContractHash(
  config: PipelineConfig,
  manifest: ImpactManifest,
  auditSchemaHash: Sha256,
): Sha256 {
  return hashJson({
    schemaVersion: "design-validation/validator-contract/v2",
    promptVersion: "audit-system/v2",
    patchPromptVersion: "patch-system/v2",
    auditSchemaHash,
    impactManifest: manifest,
    maxChangedFiles: config.maxChangedFiles,
    maxChangedLines: config.maxChangedLines,
  });
}

export function modelContractHash(config: PipelineConfig): Sha256 {
  return hashJson({
    provider: "nvidia",
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

export async function buildAuditInputs(
  config: PipelineConfig,
  manifest: ImpactManifest,
  specification: SpecificationSnapshot,
  trigger: TriggerSnapshot,
  auditSchemaHash: Sha256,
  runId: string,
  requestedAt: string,
): Promise<Map<SectionId, NodeAuditInput>> {
  const allFrontendFiles = await repositoryFrontendFiles(config.repositoryRoot);
  const validatorHash = validatorContractHash(config, manifest, auditSchemaHash);
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
      allFrontendFiles,
    );
    const evidence = buildEvidence(trigger, designSection.fragment);
    const node = manifest.nodes[sectionId];
    const fingerprint = hashJson({
      schemaVersion: "design-validation/v2",
      targetId,
      sectionId,
      triggerPath: trigger.path,
      triggerDocumentHash: trigger.documentHash,
      specificationGlobalRulesHash: specification.globalRulesHash,
      specificationFragmentHash: specificationSection.hash,
      designIndexFragmentHash: designSection.hash,
      evidenceSubsetHash: hashJson(evidence),
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
      schemaVersion: "design-validation/audit-input/v2",
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
      },
      evidence,
      implementation: {
        files: implementation.files,
        runtimeFacts: { assets: implementation.assets },
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
