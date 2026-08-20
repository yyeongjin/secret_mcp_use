export const SECTION_IDS = Array.from(
  { length: 19 },
  (_, index) => `S${String(index + 1).padStart(2, "0")}`,
) as SectionId[];

export type SectionId = `S${
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"}`;

export type Sha256 = `sha256:${string}`;

export interface MarkdownSection {
  id: SectionId;
  number: number;
  heading: string;
  fragment: string;
  hash: Sha256;
  startOffset: number;
  endOffset: number;
}

export interface SpecificationSnapshot {
  path: string;
  documentHash: Sha256;
  globalRules: string;
  globalRulesHash: Sha256;
  sections: Map<SectionId, MarkdownSection>;
}

export interface TriggerSnapshot {
  path: string;
  referenceId: `gdweb-${string}`;
  documentHash: Sha256;
  sections: Map<SectionId, MarkdownSection>;
}

export interface ImpactNode {
  name: string;
  dependsOn: SectionId[];
  reads: string[];
  writes: string[];
}

export interface ImpactManifest {
  schemaVersion: "design-validation/impact-manifest/v1";
  immutableInputGlobs: string[];
  globalAllowedWriteGlobs: string[];
  nodes: Record<SectionId, ImpactNode>;
}

export interface ImplementationFile {
  path: string;
  contentHash: Sha256;
  byteLength: number;
  encoding: "utf8" | "binary";
  content: string | null;
}

export interface EvidenceReference {
  evidenceId: string;
  kind: "metadata";
  contentHash: Sha256;
  localRef: string;
}

export interface NodeAuditInput {
  schemaVersion: "design-validation/audit-input/v2";
  run: {
    runId: string;
    targetId: string;
    repository: string;
    baseCommit: string;
    requestedAt: string;
  };
  node: {
    sectionId: SectionId;
    name: string;
    fingerprint: Sha256;
    dependsOn: SectionId[];
  };
  contract: {
    specificationSource: {
      path: string;
      documentHash: Sha256;
      globalRulesHash: Sha256;
      sectionHash: Sha256;
      sectionHeading: string;
    };
    specificationGlobalRules: string;
    specificationFragment: string;
    designIndexSource: {
      path: string;
      referenceId: `gdweb-${string}`;
      documentHash: Sha256;
      sectionHash: Sha256;
      sectionHeading: string;
    };
    designIndexFragment: string;
  };
  evidence: EvidenceReference[];
  implementation: {
    files: ImplementationFile[];
    runtimeFacts: {
      assets: Array<{ path: string; contentHash: Sha256; byteLength: number }>;
    };
  };
  policy: {
    allowedReadGlobs: string[];
    allowedWriteGlobs: string[];
    immutableInputGlobs: string[];
    forbiddenOperations: string[];
    maxChangedFiles: number;
    maxChangedLines: number;
  };
}

export type AuditStatus =
  | "PASS"
  | "PATCH_REQUIRED"
  | "BLOCKED_MISSING_EVIDENCE"
  | "BLOCKED_CONTRACT_CONFLICT"
  | "UNKNOWN";

export interface AuditFinding {
  requirementId: string;
  pageId: string | null;
  componentId: string | null;
  status: "MISSING" | "INSUFFICIENT_EVIDENCE" | "UNKNOWN";
  finding: string;
  evidenceRefs: string[];
  implementationRefs: string[];
  proposedValue: null;
}

export interface NodeAuditOutput {
  schemaVersion: "design-validation/audit-output/v2";
  sectionId: SectionId;
  fingerprint: Sha256;
  status: AuditStatus;
  findings: AuditFinding[];
  publicOutput: Record<string, string | number | boolean | string[] | null>;
}

export interface FileSetEntry {
  path: string;
  baseHash: Sha256;
}

export interface NodePatchOutput {
  schemaVersion: "design-validation/patch-output/v2";
  sectionId: SectionId;
  fingerprint: Sha256;
  status: "PATCH" | "BLOCKED_MISSING_VALUE" | "BLOCKED_PATCH_TOO_LARGE";
  requirementIds: string[];
  evidenceRefs: string[];
  readSet: FileSetEntry[];
  writeSet: FileSetEntry[];
  reason: string;
  diff: string;
}

export interface PassAttestation {
  schemaVersion: "design-validation/attestation/v2";
  targetId: string;
  sectionId: SectionId;
  fingerprint: Sha256;
  triggerSource: {
    path: string;
    documentHash: Sha256;
    fragmentHash: Sha256;
  };
  specificationSource: {
    path: string;
    documentHash: Sha256;
    globalRulesHash: Sha256;
    fragmentHash: Sha256;
  };
  status: "PASS";
  baseCommit: string;
  source: "fresh-audit";
  dependencyAttestations: Partial<Record<SectionId, Sha256>>;
  publicOutput: NodeAuditOutput["publicOutput"];
  publicDigest: Sha256;
  validator: {
    id: string;
    contractHash: Sha256;
  };
  tests: Array<{ id: string; status: "PASS"; artifactHash: Sha256 }>;
  createdAt: string;
  attestationHash: Sha256;
}

export interface CachedNode {
  status: "CACHED_PASS";
  output: NodeAuditOutput;
  attestation: PassAttestation;
}

export interface FreshNode {
  status: "FRESH";
  output: NodeAuditOutput;
  rawResponseHash: Sha256;
}

export type ResolvedNode = CachedNode | FreshNode;

export interface PipelineConfig {
  repositoryRoot: string;
  repository: string;
  baseCommit: string;
  specificationPath: string;
  impactManifestPath: string;
  triggerPaths: string[];
  outputRoot: string;
  stateRoot: string;
  forceFullAudit: boolean;
  dryRun: boolean;
  createPrs: boolean;
  mock: boolean;
  maxChangedFiles: number;
  maxChangedLines: number;
  nvidia: {
    apiKey: string;
    baseUrl: string;
    model: string;
    contextWindowTokens: number;
    maxInputTokens: number;
    maxOutputTokens: number;
    enableThinking: boolean;
    reasoningBudget: number;
    temperature: number;
    topP: number;
    rpmLimit: number;
    concurrency: number;
    timeoutMs: number;
    maxRetries: number;
  };
  github: {
    token: string;
    apiUrl: string;
    serverUrl: string;
    actor: string;
  };
}
