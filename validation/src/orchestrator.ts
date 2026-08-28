import { access, appendFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  createFreshAttestations,
  createFreshDocumentAttestations,
  resolveCachedDocumentPass,
  resolveCachedPassForNode,
} from "./cache.ts";
import { buildChangeEvent, directDirtySections } from "./change.ts";
import { sha256 } from "./hash.ts";
import {
  mergeChildPullRequestBatch,
  prepareSectionBranch,
  publishDocumentGapIssues,
  publishNodeCheckRuns,
  publishPatchPullRequest,
  publishSectionPullRequest,
  pullRequestKey,
  reconcileStaleAutomationPullRequests,
  sectionBranchName,
} from "./github.ts";
import {
  assertIsolatedAuditInput,
  assertIsolatedDocumentAuditInput,
  buildAuditInputs,
  buildDocumentAuditInputs,
  modelContractHash,
  targetIdFor,
  validatorContractHash,
} from "./input.ts";
import { matchesAnyPath, readImpactManifest, topologicalSections } from "./manifest.ts";
import { readSpecification, readTrigger } from "./markdown.ts";
import {
  NvidiaClient,
  isUnknownRequirementId,
  quarantineAuditOutput,
  quarantineDocumentAuditOutput,
  runWithConcurrency,
  type CompletionResult,
} from "./nvidia.ts";
import {
  canonicalizePatchOutput,
  guardPatch,
  isRetryablePatchCandidateError,
  type GuardedPatch,
} from "./patch.ts";
import { augmentAuditWithExactCssFindings, buildPatchScope } from "./patch-scope.ts";
import {
  AUDIT_SYSTEM_PROMPT,
  DOCUMENT_AUDIT_SYSTEM_PROMPT,
  PATCH_CONFLICT_PREFLIGHT_SYSTEM_PROMPT,
  PATCH_PREFLIGHT_SYSTEM_PROMPT,
  PATCH_REAUDIT_SYSTEM_PROMPT,
  PATCH_RETRY_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  REGRESSION_AUDIT_SYSTEM_PROMPT,
  auditUserPrompt,
  documentAuditUserPrompt,
  focusedPatchFiles,
  patchConflictPreflightUserPrompt,
  patchPreflightUserPrompt,
  patchRetryUserPrompt,
  patchReauditUserPrompt,
  patchUserPrompt,
  regressionAuditUserPrompt,
} from "./prompts.ts";
import {
  assertAuditOutput,
  assertContract,
  assertDocumentAuditOutput,
  assertPatchOutput,
  loadValidators,
  type JsonSchema,
} from "./schema.ts";
import type {
  ChangeEvent,
  DocumentAuditInput,
  DocumentAuditOutput,
  NodeAuditInput,
  NodeAuditOutput,
  NodePatchOutput,
  PassAttestation,
  PipelineConfig,
  PullRequestManifest,
  ResolvedNode,
  ResolvedDocumentNode,
  SectionId,
} from "./types.ts";
import { SECTION_IDS } from "./types.ts";
import {
  createAuditWorktree,
  createPatchedWorktree,
  verifyPatchedWorktree,
} from "./worktree.ts";

interface AuditCallSuccess {
  ok: true;
  sectionId: SectionId;
  completion: CompletionResult;
  output: NodeAuditOutput;
  attempts: AuditCallAttempt[];
}

interface AuditCallFailure {
  ok: false;
  sectionId: SectionId;
  error: string;
  completion?: CompletionResult;
  attempts: AuditCallAttempt[];
}

type AuditCallResult = AuditCallSuccess | AuditCallFailure;

interface DocumentAuditCallSuccess {
  ok: true;
  sectionId: SectionId;
  completion: CompletionResult;
  output: DocumentAuditOutput;
  attempts: DocumentAuditCallAttempt[];
}

interface DocumentAuditCallFailure {
  ok: false;
  sectionId: SectionId;
  error: string;
  completion?: CompletionResult;
  attempts: DocumentAuditCallAttempt[];
}

type DocumentAuditCallResult = DocumentAuditCallSuccess | DocumentAuditCallFailure;

interface DocumentAuditCallAttempt {
  attempt: number;
  requestId: string;
  completion?: CompletionResult;
  output?: DocumentAuditOutput;
  error?: string;
}

interface AuditCallAttempt {
  attempt: number;
  requestId: string;
  completion?: CompletionResult;
  output?: NodeAuditOutput;
  error?: string;
}

interface PatchAttemptRecord {
  attempt: number;
  patchNodeId?: string;
  status:
    | "BLOCKED_MODEL"
    | "BLOCKED_MISSING_VALUE"
    | "BLOCKED_PATCH_TOO_LARGE"
    | "BLOCKED_AUDIT_CONFLICT"
    | "BLOCKED_GUARD"
    | "AUDIT_RECLASSIFIED"
    | "FAILED_TEST"
    | "FAILED_REAUDIT"
    | "FAILED_PUBLISH"
    | "PATCH_VERIFIED"
    | "PR_CREATED"
    | "PR_REUSED";
  reason: string;
  patchHash?: string;
  changedPaths?: string[];
}

export interface PatchRecord {
  sectionId: SectionId;
  attempt?: number;
  status:
    | "NOT_REQUIRED"
    | "VALIDATION_ONLY"
    | "BLOCKED_MODEL"
    | "BLOCKED_MISSING_VALUE"
    | "BLOCKED_PATCH_TOO_LARGE"
    | "BLOCKED_AUDIT_CONFLICT"
    | "BLOCKED_GUARD"
    | "AUDIT_RECLASSIFIED"
    | "FAILED_TEST"
    | "FAILED_REAUDIT"
    | "FAILED_PUBLISH"
    | "PATCH_VERIFIED"
    | "PR_CREATED"
    | "PR_REUSED";
  reason: string;
  patchHash?: string;
  changedPaths?: string[];
  addressedRequirementIds?: string[];
  resolvedWithoutPatchRequirementIds?: string[];
  unresolvedRequirementIds?: string[];
  pullRequest?: { number: number; url: string; branch: string };
  childPullRequests?: Array<{
    patchNodeId: string;
    parentPatchNodeId: string | null;
    number: number;
    url: string;
    branch: string;
    baseBranch: string;
    requirementIds: string[];
    mergeBatch: number;
    mergedIntoSection: boolean;
  }>;
  attempts?: PatchAttemptRecord[];
}

export interface NodeRunSummary {
  sectionId: SectionId;
  name: string;
  fingerprint: string | null;
  documentFingerprint: string | null;
  documentAuditStatus: DocumentAuditOutput["status"] | "FAILED_SCHEMA";
  documentAuditAttempts: number;
  documentFindings: DocumentAuditOutput["findings"];
  auditStatus: NodeAuditOutput["status"] | "FAILED_SCHEMA";
  executionState: string;
  auditAttempts: number;
  requirementIds: string[];
  findings: NodeAuditOutput["findings"];
  patch: PatchRecord | null;
}

export interface WorkRunSummary {
  runId: string;
  targetId: string;
  triggerPath: string;
  mode: "full" | "incremental" | "forced-full";
  expectedSections: number;
  cachedPasses: number;
  documentCachedPasses: number;
  documentAuditCalls: number;
  documentAuditRequests: number;
  implementationAuditCalls: number;
  implementationAuditRequests: number;
  totalLogicalAuditRequests: number;
  auditCalls: number;
  auditRequests: number;
  patchCalls: number;
  reauditCalls: number;
  statusCounts: Record<string, number>;
  patchStatusCounts: Record<string, number>;
  nodes: NodeRunSummary[];
  patches: PatchRecord[];
  blocked: Array<{
    sectionId: SectionId;
    status: string;
    requirementIds: string[];
    resumeCondition: string;
  }>;
  errors: string[];
}

function safeRunId(referenceId: string): string {
  const timestamp = new Date().toISOString().replaceAll(/[-:.TZ]/g, "").slice(0, 14);
  const entropy = Math.random().toString(16).slice(2, 10).padEnd(8, "0");
  return `run-${timestamp}-${referenceId}-${entropy}`;
}

export type PrimaryAuditStage = "document-audit" | "implementation-audit";

export function primaryAuditRequestId(
  runId: string,
  stage: PrimaryAuditStage,
  sectionId: SectionId,
): string {
  return `${runId}:${stage}:${sectionId}`;
}

export function fullAuditRequestPlan(runId: string): Array<{
  stage: PrimaryAuditStage;
  sectionId: SectionId;
  requestId: string;
}> {
  return (["document-audit", "implementation-audit"] as const).flatMap((stage) => (
    SECTION_IDS.map((sectionId) => ({
      stage,
      sectionId,
      requestId: primaryAuditRequestId(runId, stage, sectionId),
    }))
  ));
}

async function writeJson(pathname: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(pathname), { recursive: true });
  await writeFile(pathname, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function rejectedPatchSummaryForRetry(args: {
  value: unknown;
  input: NodeAuditInput;
  auditOutput: NodeAuditOutput;
}): NodePatchOutput | null {
  if (typeof args.value !== "object" || args.value === null || Array.isArray(args.value)) return null;
  const source = args.value as Record<string, unknown>;
  const status = source.status;
  if (
    status !== "PATCH" &&
    status !== "BLOCKED_MISSING_VALUE" &&
    status !== "BLOCKED_PATCH_TOO_LARGE" &&
    status !== "BLOCKED_AUDIT_CONFLICT"
  ) {
    return null;
  }
  const knownRequirementIds = new Set(args.auditOutput.findings.map((finding) => finding.requirementId));
  const requirementIds = Array.isArray(source.addressedRequirementIds)
    ? [...new Set(source.addressedRequirementIds.filter(
      (value): value is string => typeof value === "string" && knownRequirementIds.has(value),
    ))]
    : [];
  return {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId: args.input.node.sectionId,
    fingerprint: args.input.node.fingerprint,
    status,
    requirementIds,
    evidenceRefs: [...new Set(args.auditOutput.findings
      .filter((finding) => requirementIds.includes(finding.requirementId))
      .flatMap((finding) => finding.evidenceRefs))],
    readSet: [],
    writeSet: [],
    reason: typeof source.reason === "string" ? source.reason.slice(0, 500) : "Rejected patch candidate.",
    diff: typeof source.diff === "string" ? source.diff : "",
  };
}

export function blockedConflictContradictsExactFinding(
  auditOutput: NodeAuditOutput,
  patchOutput: NodePatchOutput,
): boolean {
  if (patchOutput.status !== "BLOCKED_AUDIT_CONFLICT") return false;
  const value = auditOutput.publicOutput.exactContractRequirementIds;
  if (!Array.isArray(value)) return false;
  const exactIds = new Set(value.filter((item): item is string => typeof item === "string"));
  return auditOutput.findings.some((finding) => exactIds.has(finding.requirementId));
}

export function auditOutputNeedsIndependentRetry(output: NodeAuditOutput): boolean {
  return output.status === "UNKNOWN" ||
    output.status === "BLOCKED_MISSING_EVIDENCE" ||
    output.status === "BLOCKED_CONTRACT_CONFLICT";
}

export function patchOutputNeedsIndependentRetry(output: NodePatchOutput): boolean {
  return output.status !== "PATCH";
}

export function isDocumentGapOnlyPatchFailure(
  input: NodeAuditInput,
  auditOutput: NodeAuditOutput,
  patchOutput: NodePatchOutput,
): boolean {
  if (
    patchOutput.status !== "BLOCKED_MISSING_VALUE" ||
    input.contract.documentAudit.status !== "DOCUMENT_GAP"
  ) return false;
  const existingPaths = new Set(input.implementation.files.map((file) => file.path));
  return auditOutput.findings.length > 0 && auditOutput.findings.every((finding) => (
    finding.evidenceRefs.length === 0 &&
    finding.implementationRefs.length > 0 &&
    finding.implementationRefs.every((reference) => existingPaths.has(reference))
  ));
}

export function groundOwnedNewImplementationPaths(
  input: NodeAuditInput,
  output: NodeAuditOutput,
): { output: NodeAuditOutput; addedRequirementIds: string[] } {
  if (output.status !== "PATCH_REQUIRED" && output.status !== "BLOCKED_MISSING_EVIDENCE") {
    return { output, addedRequirementIds: [] };
  }
  const testGlob = input.policy.allowedWriteGlobs.find((glob) => glob.endsWith("/tests/**"));
  if (!testGlob) return { output, addedRequirementIds: [] };
  const defaultTestPath = `${testGlob.slice(0, -3)}/design-index-${input.node.sectionId.toLowerCase()}.spec.ts`;
  const addedRequirementIds: string[] = [];
  const findings = output.findings.map((finding) => {
    if (
      finding.implementationRefs.length > 0 ||
      finding.status !== "MISSING" ||
      !/(?:acceptance|page-specific).{0,80}test|test files?/i.test(finding.finding)
    ) {
      return finding;
    }
    addedRequirementIds.push(finding.requirementId);
    return { ...finding, implementationRefs: [defaultTestPath] };
  });
  const promotedMissingTests = output.status === "BLOCKED_MISSING_EVIDENCE" &&
    findings.length > 0 &&
    addedRequirementIds.length === findings.length;
  return {
    output: {
      ...output,
      status: promotedMissingTests ? "PATCH_REQUIRED" : output.status,
      findings,
    },
    addedRequirementIds,
  };
}

function sanitizeArtifactText(value: string, config: PipelineConfig, worktreePath?: string): string {
  return value
    .replaceAll(config.repositoryRoot, "<repository>")
    .replaceAll(worktreePath ?? "\0", "<isolated-worktree>");
}

function countStatuses(values: string[]): Record<string, number> {
  return values.reduce<Record<string, number>>((counts, status) => {
    counts[status] = (counts[status] ?? 0) + 1;
    return counts;
  }, {});
}

function blockedNodes(outputs: NodeAuditOutput[]): WorkRunSummary["blocked"] {
  return outputs
    .filter((output) => [
      "BLOCKED_MISSING_EVIDENCE",
      "BLOCKED_CONTRACT_CONFLICT",
      "UNKNOWN",
    ].includes(output.status))
    .map((output) => ({
      sectionId: output.sectionId,
      status: output.status,
      requirementIds: output.findings.map((finding) => finding.requirementId),
      resumeCondition: output.status === "BLOCKED_MISSING_EVIDENCE"
        ? "Add the exact missing value or evidence to the immutable DESIGN_INDEX artifact, then run this Section again."
        : output.status === "BLOCKED_CONTRACT_CONFLICT"
          ? "Resolve the conflicting Specification and DESIGN_INDEX contract, then run this Section again."
          : "Run the isolated Section again after the provider returns a schema-valid grounded judgment.",
    }));
}

function buildNodeRunSummaries(args: {
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  documentInputs: Map<SectionId, DocumentAuditInput>;
  documentOutputs: DocumentAuditOutput[];
  documentAuditAttempts: Map<SectionId, number>;
  inputs: Map<SectionId, NodeAuditInput>;
  outputs: NodeAuditOutput[];
  nodeStates: Array<{ sectionId: SectionId; state: string }>;
  auditAttempts: Map<SectionId, number>;
  patches: PatchRecord[];
}): NodeRunSummary[] {
  const documentOutputs = new Map(args.documentOutputs.map((output) => [output.sectionId, output]));
  const outputs = new Map(args.outputs.map((output) => [output.sectionId, output]));
  const states = new Map(args.nodeStates.map((node) => [node.sectionId, node.state]));
  const patches = new Map(args.patches.map((patch) => [patch.sectionId, patch]));
  return SECTION_IDS.map((sectionId) => {
    const output = outputs.get(sectionId);
    const documentOutput = documentOutputs.get(sectionId);
    const input = args.inputs.get(sectionId);
    return {
      sectionId,
      name: args.manifest.nodes[sectionId].name,
      fingerprint: input?.node.fingerprint ?? null,
      documentFingerprint: args.documentInputs.get(sectionId)?.node.fingerprint ?? null,
      documentAuditStatus: documentOutput?.status ?? "FAILED_SCHEMA",
      documentAuditAttempts: args.documentAuditAttempts.get(sectionId) ?? 0,
      documentFindings: documentOutput?.findings ?? [],
      auditStatus: output?.status ?? "FAILED_SCHEMA",
      executionState: states.get(sectionId) ?? "FAILED_SCHEMA",
      auditAttempts: args.auditAttempts.get(sectionId) ?? 0,
      requirementIds: output?.findings.map((finding) => finding.requirementId) ?? [],
      findings: output?.findings ?? [],
      patch: patches.get(sectionId) ?? null,
    };
  });
}

function buildNodeStates(
  inputs: Map<SectionId, NodeAuditInput>,
  resolved: Map<SectionId, ResolvedNode>,
): Array<{ sectionId: SectionId; state: string }> {
  return SECTION_IDS.map((sectionId) => {
    const item = resolved.get(sectionId);
    if (!item) return { sectionId, state: "FAILED_SCHEMA" };
    if (item.status === "CACHED_PASS") return { sectionId, state: "CACHED_PASS" };
    const dependenciesPassing = inputs.get(sectionId)?.node.dependsOn.every(
      (dependencyId) => resolved.get(dependencyId)?.output.status === "PASS",
    ) ?? false;
    const state = auditExecutionState(item.output.status, dependenciesPassing);
    return { sectionId, state };
  });
}

export function auditExecutionState(
  status: NodeAuditOutput["status"],
  dependenciesPassing: boolean,
): string {
  if (status === "PASS") return dependenciesPassing ? "PASS" : "PASS_PENDING_DEPENDENCY";
  if (status === "PATCH_REQUIRED") return "PATCH_REQUIRED";
  return status;
}

export function incompletePatchSectionIds(args: {
  requiredSectionIds: SectionId[];
  records: PatchRecord[];
  createPrs: boolean;
}): SectionId[] {
  const records = new Map(args.records.map((record) => [record.sectionId, record]));
  return args.requiredSectionIds.filter((sectionId) => {
    const record = records.get(sectionId);
    if (!record || (record.unresolvedRequirementIds?.length ?? 0) > 0) return true;
    if (record.status === "AUDIT_RECLASSIFIED") return false;
    if (!args.createPrs) return record.status !== "PATCH_VERIFIED";
    return !(
      (record.status === "PR_CREATED" || record.status === "PR_REUSED") &&
      record.pullRequest &&
      (record.childPullRequests?.length ?? 0) > 0 &&
      record.childPullRequests?.every((pull) => pull.mergedIntoSection)
    );
  });
}

export function nextPatchRequirementFindings(
  findings: NodeAuditOutput["findings"],
  addressedRequirementIds: ReadonlySet<string>,
): NodeAuditOutput["findings"] {
  const nextRequirementId = [...new Set(findings.map((finding) => finding.requirementId))]
    .sort()
    .find((requirementId) => !addressedRequirementIds.has(requirementId));
  return nextRequirementId
    ? findings.filter((finding) => finding.requirementId === nextRequirementId)
    : [];
}

async function exists(pathname: string): Promise<boolean> {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

export function enforcePatchGrounding(
  input: NodeAuditInput,
  output: NodeAuditOutput,
): { output: NodeAuditOutput; warning?: string } {
  if (output.status !== "PATCH_REQUIRED") return { output };
  const ungroundedFinding = output.findings.find((finding) => (
    finding.status !== "MISSING" ||
    isUnknownRequirementId(finding.requirementId) ||
    finding.finding.startsWith("The isolated audit returned")
  ));
  if (ungroundedFinding) {
    return {
      output: { ...output, status: "UNKNOWN" },
      warning: `${input.node.sectionId} returned PATCH_REQUIRED with an ungrounded or UNKNOWN finding: ${ungroundedFinding.requirementId}.`,
    };
  }
  const missingValue = output.findings.find((finding) => (
    /\b(?:UNKNOWN|TBD|TO BE DETERMINED)\b/i.test(finding.finding) ||
    /(?:value|font family|font|measurement|asset|coordinate|breakpoint|duration).{0,80}(?:not provided|not specified|unavailable|has no value|no value)/i.test(finding.finding)
  ));
  if (missingValue) {
    return {
      output: { ...output, status: "BLOCKED_MISSING_EVIDENCE" },
      warning: `${input.node.sectionId} returned PATCH_REQUIRED for an unknown or absent source value: ${missingValue.requirementId}.`,
    };
  }
  const contractGap = output.findings.find((finding) => (
    /(?:design[_ ]index|specification|contract|source document|design document).{0,100}(?:section|table|field|heading|entry|evidence).{0,60}(?:lacks?|missing|absent|not (?:provided|specified|present)|does not (?:contain|include))/i.test(finding.finding)
  ));
  if (contractGap) {
    return {
      output: { ...output, status: "BLOCKED_CONTRACT_CONFLICT" },
      warning: `${input.node.sectionId} described a DESIGN_INDEX or Specification gap as an application patch: ${contractGap.requirementId}.`,
    };
  }
  if (input.policy.allowedWriteGlobs.length === 0) {
    return {
      output: { ...output, status: "BLOCKED_CONTRACT_CONFLICT" },
      warning: `${input.node.sectionId} returned PATCH_REQUIRED without an owned application write path.`,
    };
  }

  const suppliedPaths = new Set(input.implementation.files.map((file) => file.path));
  const findingsAreWritable = output.findings.every((finding) => (
    finding.implementationRefs.length > 0 &&
    finding.implementationRefs.every((reference) => (
      matchesAnyPath(reference, input.policy.allowedWriteGlobs) && (
        suppliedPaths.has(reference) || (
          reference.startsWith("frontend/") &&
          !reference.includes("..") &&
          /\.(?:css|html|js|jsx|json|mjs|ts|tsx)$/.test(reference)
        )
      )
    ))
  ));
  if (!findingsAreWritable) {
    return {
      output: { ...output, status: "BLOCKED_MISSING_EVIDENCE" },
      warning: `${input.node.sectionId} returned PATCH_REQUIRED without grounding every finding in a supplied writable file.`,
    };
  }
  return { output };
}

function assertSafeOutputRoot(config: PipelineConfig): void {
  const relative = path.relative(config.repositoryRoot, config.outputRoot).replaceAll("\\", "/");
  if (relative === "" || relative.startsWith("../") || !relative.startsWith(".validation-runs/")) {
    throw new Error(`Refusing to clear unsafe output path: ${config.outputRoot}`);
  }
}

async function writeGapReport(
  pathname: string,
  orderedOutputs: NodeAuditOutput[],
  patchRecords: PatchRecord[],
): Promise<void> {
  const lines = ["# DESIGN_INDEX Gap Report", "", "Generated deterministically without an LLM merge step.", ""];
  for (const output of orderedOutputs) {
    lines.push(`## ${output.sectionId}: ${output.status}`, "");
    if (output.findings.length === 0) {
      lines.push("- No findings.", "");
      continue;
    }
    for (const finding of output.findings) {
      lines.push(
        `- **${finding.requirementId}**: ${finding.finding}`,
        `  - Page: ${finding.pageId ?? "N/A"}`,
        `  - Component: ${finding.componentId ?? "N/A"}`,
        `  - Evidence: ${finding.evidenceRefs.join(", ") || "none"}`,
        `  - Implementation: ${finding.implementationRefs.join(", ") || "none"}`,
      );
    }
    lines.push("");
  }
  lines.push("# Patch Pipeline", "");
  for (const record of patchRecords) {
    lines.push(`- ${record.sectionId}: **${record.status}** - ${record.reason}`);
  }
  await writeFile(pathname, `${lines.join("\n")}\n`, "utf8");
}

async function writeDocumentGapReport(
  pathname: string,
  outputs: DocumentAuditOutput[],
): Promise<void> {
  const lines = [
    "# Stage 1 DESIGN_INDEX Document Completeness Report",
    "",
    "Each Section below was produced by a separate stateless NVIDIA request. Source code was not included.",
    "",
  ];
  for (const output of outputs) {
    lines.push(`## ${output.sectionId}: ${output.status}`, "");
    if (output.findings.length === 0) {
      lines.push("- No document omissions were reported.", "");
      continue;
    }
    for (const finding of output.findings) {
      lines.push(
        `- **${finding.requirementId}**: ${finding.finding}`,
        `  - Page: ${finding.pageId ?? "N/A"}`,
        `  - Component: ${finding.componentId ?? "N/A"}`,
        `  - Evidence: ${finding.evidenceRefs.join(", ") || "none"}`,
      );
    }
    lines.push("");
  }
  await writeFile(pathname, `${lines.join("\n")}\n`, "utf8");
}

export async function callDocumentAudit(args: {
  client: NvidiaClient;
  input: DocumentAuditInput;
  requestId: string;
  maxAttempts: number;
  validate: Parameters<typeof assertDocumentAuditOutput>[0];
  outputSchema: JsonSchema;
}): Promise<DocumentAuditCallResult> {
  const sectionId = args.input.node.sectionId;
  const attempts: DocumentAuditCallAttempt[] = [];
  let lastError = "Document audit ended without a provider result.";
  for (let attempt = 1; attempt <= args.maxAttempts; attempt += 1) {
    const requestId = attempt === 1 ? args.requestId : `${args.requestId}:retry:${attempt}`;
    let completion: CompletionResult;
    try {
      completion = await args.client.completeJson({
        kind: "document-audit",
        sectionId,
        fingerprint: args.input.node.fingerprint,
        requestId,
        systemPrompt: DOCUMENT_AUDIT_SYSTEM_PROMPT,
        userPrompt: documentAuditUserPrompt(args.input),
        outputSchema: args.outputSchema,
      });
    } catch (error) {
      lastError = errorMessage(error);
      attempts.push({ attempt, requestId, error: lastError });
      if (attempt < args.maxAttempts) continue;
      return { ok: false, sectionId, error: lastError, attempts };
    }
    let output: DocumentAuditOutput;
    let validatedCompletion = completion;
    try {
      assertDocumentAuditOutput(
        args.validate,
        completion.parsed,
        sectionId,
        args.input.node.fingerprint,
      );
      output = completion.parsed;
    } catch (error) {
      output = quarantineDocumentAuditOutput(sectionId, args.input.node.fingerprint) as DocumentAuditOutput;
      assertDocumentAuditOutput(args.validate, output, sectionId, args.input.node.fingerprint);
      validatedCompletion = {
        ...completion,
        parsed: output,
        warning: `${errorMessage(error)} The response was quarantined as UNKNOWN.`,
      };
    }
    attempts.push({ attempt, requestId, completion: validatedCompletion, output });
    if (auditOutputNeedsIndependentRetry(output as unknown as NodeAuditOutput) && attempt < args.maxAttempts) continue;
    return { ok: true, sectionId, completion: validatedCompletion, output, attempts };
  }
  return { ok: false, sectionId, error: lastError, attempts };
}

async function saveDocumentAuditCall(
  nodesDirectory: string,
  input: DocumentAuditInput,
  result: DocumentAuditCallResult,
): Promise<void> {
  const nodeDirectory = path.join(nodesDirectory, input.node.sectionId);
  await mkdir(nodeDirectory, { recursive: true });
  await writeJson(path.join(nodeDirectory, "document-audit-input.json"), input);
  for (const attempt of result.attempts) {
    const attemptDirectory = path.join(nodeDirectory, "document-audit-attempts", `attempt-${attempt.attempt}`);
    await writeJson(path.join(attemptDirectory, "attempt.json"), {
      attempt: attempt.attempt,
      requestId: attempt.requestId,
      status: attempt.error ? "FAILED" : "COMPLETED",
      outputStatus: attempt.output?.status ?? null,
      warning: attempt.completion?.warning ?? null,
      error: attempt.error ?? null,
    });
    if (attempt.completion) {
      await writeJson(path.join(attemptDirectory, "api-response.json"), attempt.completion.raw);
      await writeJson(path.join(attemptDirectory, "document-audit-output.json"), attempt.output);
    }
  }
  if (result.ok) {
    await writeJson(path.join(nodeDirectory, "document-audit-api-response.json"), result.completion.raw);
    await writeJson(path.join(nodeDirectory, "document-audit-output.json"), result.output);
  } else {
    await writeJson(path.join(nodeDirectory, "document-audit-error.json"), {
      sectionId: result.sectionId,
      error: result.error,
    });
  }
}

export async function callAudit(args: {
  client: NvidiaClient;
  input: NodeAuditInput;
  kind: "audit" | "reaudit";
  requestId: string;
  maxAttempts: number;
  validate: Parameters<typeof assertAuditOutput>[0];
  outputSchema: JsonSchema;
  systemPrompt?: string;
  userPrompt?: string;
}): Promise<AuditCallResult> {
  const sectionId = args.input.node.sectionId;
  const attempts: AuditCallAttempt[] = [];
  let lastError = "Audit ended without a provider result.";
  for (let attempt = 1; attempt <= args.maxAttempts; attempt += 1) {
    const requestId = attempt === 1 ? args.requestId : `${args.requestId}:retry:${attempt}`;
    let completion: CompletionResult;
    try {
      completion = await args.client.completeJson({
        kind: args.kind,
        sectionId,
        fingerprint: args.input.node.fingerprint,
        requestId,
        systemPrompt: args.systemPrompt ?? AUDIT_SYSTEM_PROMPT,
        userPrompt: args.userPrompt ?? auditUserPrompt(args.input),
        outputSchema: args.outputSchema,
      });
    } catch (error) {
      lastError = errorMessage(error);
      attempts.push({ attempt, requestId, error: lastError });
      if (attempt < args.maxAttempts) continue;
      return { ok: false, sectionId, error: lastError, attempts };
    }

    let output: NodeAuditOutput;
    let validatedCompletion: CompletionResult;
    try {
      assertAuditOutput(
        args.validate,
        completion.parsed,
        sectionId,
        args.input.node.fingerprint,
      );
      const pathGrounded = groundOwnedNewImplementationPaths(args.input, completion.parsed);
      const initiallyGrounded = enforcePatchGrounding(args.input, pathGrounded.output);
      const augmented = args.kind === "audit"
        ? augmentAuditWithExactCssFindings(args.input, initiallyGrounded.output)
        : { output: initiallyGrounded.output, addedRequirementIds: [] };
      const grounded = enforcePatchGrounding(args.input, augmented.output);
      assertAuditOutput(args.validate, grounded.output, sectionId, args.input.node.fingerprint);
      output = grounded.output;
      const warnings = [
        completion.warning,
        pathGrounded.addedRequirementIds.length > 0
          ? `Assigned owned new test paths for grounded omissions: ${pathGrounded.addedRequirementIds.join(", ")}.`
          : undefined,
        initiallyGrounded.warning,
        augmented.addedRequirementIds.length > 0
          ? `Exact CSS contract comparison added grounded findings: ${augmented.addedRequirementIds.join(", ")}.`
          : undefined,
        grounded.warning,
      ].filter((warning): warning is string => Boolean(warning));
      validatedCompletion = warnings.length > 0
        ? {
          ...completion,
          parsed: grounded.output,
          warning: warnings.join(" "),
        }
        : completion;
    } catch (error) {
      const warning = `${errorMessage(error)} The response was quarantined as UNKNOWN.`;
      output = quarantineAuditOutput(sectionId, args.input.node.fingerprint) as NodeAuditOutput;
      assertAuditOutput(args.validate, output, sectionId, args.input.node.fingerprint);
      validatedCompletion = { ...completion, parsed: output, warning };
    }

    attempts.push({
      attempt,
      requestId,
      completion: validatedCompletion,
      output,
    });
    if (auditOutputNeedsIndependentRetry(output) && attempt < args.maxAttempts) continue;
    return {
      ok: true,
      sectionId,
      completion: validatedCompletion,
      output,
      attempts,
    };
  }
  return { ok: false, sectionId, error: lastError, attempts };
}

async function saveAuditCall(
  nodesDirectory: string,
  input: NodeAuditInput,
  result: AuditCallResult,
): Promise<void> {
  const nodeDirectory = path.join(nodesDirectory, input.node.sectionId);
  await mkdir(nodeDirectory, { recursive: true });
  await writeJson(path.join(nodeDirectory, "audit-input.json"), input);
  for (const attempt of result.attempts) {
    const attemptDirectory = path.join(nodeDirectory, "audit-attempts", `attempt-${attempt.attempt}`);
    await writeJson(path.join(attemptDirectory, "attempt.json"), {
      attempt: attempt.attempt,
      requestId: attempt.requestId,
      status: attempt.error ? "FAILED" : "COMPLETED",
      outputStatus: attempt.output?.status ?? null,
      warning: attempt.completion?.warning ?? null,
      error: attempt.error ?? null,
    });
    if (attempt.completion) {
      await writeJson(path.join(attemptDirectory, "api-response.json"), attempt.completion.raw);
      await writeJson(path.join(attemptDirectory, "audit-output.json"), attempt.output);
    }
  }
  if (result.ok) {
    await writeJson(path.join(nodeDirectory, "api-response.json"), result.completion.raw);
    await writeJson(path.join(nodeDirectory, "audit-output.json"), result.output);
    if (result.completion.warning) {
      await writeJson(path.join(nodeDirectory, "audit-warning.json"), {
        sectionId: result.sectionId,
        warning: result.completion.warning,
      });
    }
  } else {
    if (result.completion) {
      await writeJson(path.join(nodeDirectory, "api-response.json"), result.completion.raw);
      await writeJson(path.join(nodeDirectory, "audit-output-invalid.json"), result.completion.parsed);
    }
    await writeJson(path.join(nodeDirectory, "audit-error.json"), {
      sectionId: result.sectionId,
      error: result.error,
    });
  }
}

async function isolatedAuditInput(args: {
  config: PipelineConfig;
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  contractSchemaHash: ReturnType<typeof sha256>;
  triggerPath: string;
  sectionId: SectionId;
  runId: string;
  requestedAt: string;
  changeEvent: ChangeEvent;
  documentOutputs: Map<SectionId, DocumentAuditOutput>;
  expectedFingerprint: string;
}): Promise<{ input: NodeAuditInput; cleanup: () => Promise<void> }> {
  const worktree = await createAuditWorktree(args.config, args.sectionId);
  try {
    const workspaceConfig: PipelineConfig = {
      ...args.config,
      repositoryRoot: worktree.path,
      outputRoot: path.join(worktree.path, ".validation-runs", "isolated-audit"),
    };
    const specification = await readSpecification(worktree.path, args.config.specificationPath);
    const trigger = await readTrigger(worktree.path, args.triggerPath);
    const inputs = await buildAuditInputs(
      workspaceConfig,
      args.manifest,
      specification,
      trigger,
      args.contractSchemaHash,
      args.runId,
      args.requestedAt,
      args.changeEvent,
      args.documentOutputs,
    );
    const input = inputs.get(args.sectionId);
    if (!input) throw new Error(`Isolated workspace did not build ${args.sectionId}.`);
    if (input.node.fingerprint !== args.expectedFingerprint) {
      throw new Error(`${args.sectionId} isolated workspace fingerprint differs from the scheduler input.`);
    }
    assertIsolatedAuditInput(input);
    return { input, cleanup: worktree.cleanup };
  } catch (error) {
    await worktree.cleanup();
    throw error;
  }
}

async function patchedInputs(args: {
  originalConfig: PipelineConfig;
  worktreePath: string;
  triggerPath: string;
  runId: string;
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  contractSchemaHash: ReturnType<typeof sha256>;
  changeEvent: ChangeEvent;
  documentOutputs: Map<SectionId, DocumentAuditOutput>;
}): Promise<Map<SectionId, NodeAuditInput>> {
  const patchedConfig: PipelineConfig = {
    ...args.originalConfig,
    repositoryRoot: args.worktreePath,
    outputRoot: path.join(args.worktreePath, ".validation-runs", "reaudit"),
    stateRoot: args.originalConfig.stateRoot,
  };
  const specification = await readSpecification(
    patchedConfig.repositoryRoot,
    patchedConfig.specificationPath,
  );
  const trigger = await readTrigger(patchedConfig.repositoryRoot, args.triggerPath);
  return buildAuditInputs(
    patchedConfig,
    args.manifest,
    specification,
    trigger,
    args.contractSchemaHash,
    `${args.runId}:patched`,
    new Date().toISOString(),
    args.changeEvent,
    args.documentOutputs,
  );
}

async function runPatches(args: {
  config: PipelineConfig;
  client: NvidiaClient;
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  inputs: Map<SectionId, NodeAuditInput>;
  resolved: Map<SectionId, ResolvedNode>;
  attestations: Map<SectionId, PassAttestation>;
  validatePatch: Parameters<typeof assertPatchOutput>[0];
  validateAudit: Parameters<typeof assertAuditOutput>[0];
  patchCandidateOutputSchema: JsonSchema;
  auditOutputSchema: JsonSchema;
  validatePrManifest: Awaited<ReturnType<typeof loadValidators>>["prManifest"];
  contractSchemaHash: ReturnType<typeof sha256>;
  runDirectory: string;
  triggerPath: string;
  runId: string;
  changeEvent: ChangeEvent;
  documentOutputs: Map<SectionId, DocumentAuditOutput>;
}): Promise<{ records: PatchRecord[]; patchCalls: number; reauditCalls: number }> {
  const records: PatchRecord[] = [];
  let patchCalls = 0;
  let reauditCalls = 0;
  let stackParentBranch = args.config.github.baseBranch;
  let stackParentCommit = args.config.baseCommit;
  const scratchDirectory = path.join(args.runDirectory, "patches");
  await mkdir(scratchDirectory, { recursive: true });

  for (const sectionId of topologicalSections(args.manifest)) {
    const resolved = args.resolved.get(sectionId);
    const input = args.inputs.get(sectionId);
    if (!resolved || !input) continue;
    if (resolved.output.status !== "PATCH_REQUIRED") {
      records.push({ sectionId, status: "NOT_REQUIRED", reason: resolved.output.status });
      continue;
    }
    if (input.policy.allowedWriteGlobs.length === 0) {
      records.push({
        sectionId,
        status: "VALIDATION_ONLY",
        reason: "This Section owns no application write paths.",
      });
      continue;
    }
    const attempts: PatchAttemptRecord[] = [];
    const addressedRequirementIds = new Set<string>();
    const resolvedWithoutPatchRequirementIds = new Set<string>();
    const failedRequirementIds = new Set<string>();
    const requirementFailures: Array<{ requirementId: string; record: PatchRecord }> = [];
    const childPullRequests: NonNullable<PatchRecord["childPullRequests"]> = [];
    const pendingMergeBatch: NonNullable<PatchRecord["childPullRequests"]> = [];
    const sectionPatchHashes: string[] = [];
    const sectionEvidenceRefs = new Set<string>();
    const sectionReadSet = new Map<string, NodePatchOutput["readSet"][number]>();
    const sectionWriteSet = new Map<string, NodePatchOutput["writeSet"][number]>();
    const sectionAffectedPassAttestations = new Set<ReturnType<typeof sha256>>();
    const sectionBaseBranch = stackParentBranch;
    const sectionBaseCommit = stackParentCommit;
    const aggregationBranch = sectionBranchName(input);
    let currentInput = input;
    let currentInputs = args.inputs;
    let parentBranch = aggregationBranch;
    let parentCommit = sectionBaseCommit;
    let parentPatchNodeId: string | null = null;
    let aggregationBranchPrepared = false;
    let mergeBatch = 1;
    let activeParentWorktree: Awaited<ReturnType<typeof createPatchedWorktree>> | null = null;
    let childIndex = 1;
    let finalRecord: PatchRecord | undefined;
    let allPatchableFindings: NodeAuditOutput["findings"] = [];
    let allPatchableRequirementIds: string[] = [];
    let sectionPull: Awaited<ReturnType<typeof publishSectionPullRequest>> | undefined;

    const consolidateCurrentBatch = async (): Promise<void> => {
      if (pendingMergeBatch.length === 0) return;
      if (!aggregationBranchPrepared) {
        throw new Error(`${sectionId} aggregation branch was not prepared before child consolidation.`);
      }
      const merged = await mergeChildPullRequestBatch({
        config: args.config,
        sectionId,
        sectionBranch: aggregationBranch,
        pulls: pendingMergeBatch,
      });
      const mergedNumbers = new Set(merged.mergedPullNumbers);
      for (const child of childPullRequests) {
        if (mergedNumbers.has(child.number)) child.mergedIntoSection = true;
      }
      pendingMergeBatch.splice(0, pendingMergeBatch.length);
      if (activeParentWorktree) await activeParentWorktree.cleanup();
      parentBranch = aggregationBranch;
      parentCommit = merged.commit;
      parentPatchNodeId = null;
      activeParentWorktree = await createAuditWorktree(
        { ...args.config, baseCommit: merged.commit },
        `${sectionId}-aggregate-${mergeBatch}`,
        merged.commit,
      );
      currentInputs = await patchedInputs({
        originalConfig: { ...args.config, baseCommit: merged.commit },
        worktreePath: activeParentWorktree.path,
        triggerPath: args.triggerPath,
        runId: `${args.runId}:${sectionId}:aggregate:${mergeBatch}`,
        manifest: args.manifest,
        contractSchemaHash: args.contractSchemaHash,
        changeEvent: args.changeEvent,
        documentOutputs: args.documentOutputs,
      });
      const aggregatedInput = currentInputs.get(sectionId);
      if (!aggregatedInput) throw new Error(`Aggregated parent input is missing ${sectionId}.`);
      currentInput = aggregatedInput;
      mergeBatch += 1;
    };

    try {
      if (parentCommit !== args.config.baseCommit) {
        activeParentWorktree = await createAuditWorktree(args.config, `${sectionId}-stack-parent`, parentCommit);
        currentInputs = await patchedInputs({
          originalConfig: { ...args.config, baseCommit: parentCommit },
          worktreePath: activeParentWorktree.path,
          triggerPath: args.triggerPath,
          runId: `${args.runId}:${sectionId}:stack-parent`,
          manifest: args.manifest,
          contractSchemaHash: args.contractSchemaHash,
          changeEvent: args.changeEvent,
          documentOutputs: args.documentOutputs,
        });
        const stackedInput = currentInputs.get(sectionId);
        if (!stackedInput) throw new Error(`Stacked parent input is missing ${sectionId}.`);
        currentInput = stackedInput;
      }

      const patchScope = buildPatchScope(currentInput, resolved.output);
      await writeJson(path.join(args.runDirectory, "nodes", sectionId, "patch-scope.json"), {
        schemaVersion: "design-validation/patch-scope/v1",
        sectionId,
        parentPatchNodeId,
        parentBranch,
        parentCommit,
        originalRequirementIds: resolved.output.findings.map((finding) => finding.requirementId),
        includedRequirementIds: patchScope.includedRequirementIds,
        feedbackRequirementIds: patchScope.feedbackOutput.findings.map((finding) => finding.requirementId),
        excluded: patchScope.excluded,
      });
      // The Section-wide scope is diagnostic only. Every Stage 2 Requirement ID
      // still receives its own current-source preflight before any patch decision.
      allPatchableFindings = resolved.output.findings;
      allPatchableRequirementIds = [...new Set(
        allPatchableFindings.map((finding) => finding.requirementId),
      )].sort();

      while (
        addressedRequirementIds.size + resolvedWithoutPatchRequirementIds.size + failedRequirementIds.size <
        allPatchableRequirementIds.length
      ) {
        const completedRequirementIds = new Set([
          ...addressedRequirementIds,
          ...resolvedWithoutPatchRequirementIds,
          ...failedRequirementIds,
        ]);
        let remainingFindings = nextPatchRequirementFindings(
          allPatchableFindings,
          completedRequirementIds,
        );
        if (remainingFindings.length === 0) break;
        let remainingAuditOutput: NodeAuditOutput = {
          ...resolved.output,
          fingerprint: currentInput.node.fingerprint,
          findings: remainingFindings,
        };
        const patchNodeId = `${sectionId}-${childIndex}`;
        let retryContext: {
          output: NodePatchOutput;
          failure: { stage: "guard" | "test" | "reaudit" | "regression"; reason: string };
        } | undefined;
        let childPublished = false;
        let childResolvedWithoutPatch = false;
        const requirementId = remainingFindings[0].requirementId;

        const preflight = await callAudit({
          client: args.client,
          input: currentInput,
          kind: "reaudit",
          requestId: `${args.runId}:patch-preflight:${patchNodeId}`,
          maxAttempts: args.config.auditAttempts,
          validate: args.validateAudit,
          outputSchema: args.auditOutputSchema,
          systemPrompt: PATCH_PREFLIGHT_SYSTEM_PROMPT,
          userPrompt: patchPreflightUserPrompt({
            auditInput: currentInput,
            auditOutput: remainingAuditOutput,
          }),
        });
        reauditCalls += preflight.attempts.length;
        await saveAuditCall(
          path.join(scratchDirectory, sectionId, patchNodeId, "preflight"),
          currentInput,
          preflight,
        );
        if (!preflight.ok) {
          const attemptRecord: PatchAttemptRecord = {
            attempt: 0,
            patchNodeId,
            status: "BLOCKED_MODEL",
            reason: `${patchNodeId} preflight failed: ${preflight.error}`,
          };
          attempts.push(attemptRecord);
          requirementFailures.push({ requirementId, record: {
            sectionId,
            ...attemptRecord,
            attempts,
          } });
          failedRequirementIds.add(requirementId);
          childIndex += 1;
          continue;
        }
        const preflightRequirementIds = new Set(
          preflight.output.findings.map((finding) => finding.requirementId),
        );
        if (
          preflight.output.status === "UNKNOWN" ||
          (preflight.output.status !== "PASS" && (
            preflightRequirementIds.size !== 1 || !preflightRequirementIds.has(requirementId)
          ))
        ) {
          const attemptRecord: PatchAttemptRecord = {
            attempt: 0,
            patchNodeId,
            status: "BLOCKED_MODEL",
            reason: `${patchNodeId} preflight did not return a final judgment for exactly ${requirementId}.`,
          };
          attempts.push(attemptRecord);
          requirementFailures.push({ requirementId, record: {
            sectionId,
            ...attemptRecord,
            attempts,
          } });
          failedRequirementIds.add(requirementId);
          childIndex += 1;
          continue;
        }
        if (preflight.output.status !== "PATCH_REQUIRED") {
          resolvedWithoutPatchRequirementIds.add(requirementId);
          const attemptRecord: PatchAttemptRecord = {
            attempt: 0,
            patchNodeId,
            status: "AUDIT_RECLASSIFIED",
            reason: `${patchNodeId} independent preflight reclassified ${requirementId} as ${preflight.output.status}.`,
          };
          attempts.push(attemptRecord);
          await writeJson(
            path.join(scratchDirectory, sectionId, patchNodeId, "preflight-result.json"),
            attemptRecord,
          );
          childIndex += 1;
          continue;
        }
        remainingAuditOutput = {
          ...preflight.output,
          fingerprint: currentInput.node.fingerprint,
        };
        remainingFindings = preflight.output.findings;

        for (let attempt = 1; attempt <= args.config.patchGenerationAttempts; attempt += 1) {
          const attemptId = `${args.runId}:patch:${patchNodeId}:attempt:${attempt}`;
          const attemptDirectory = path.join(scratchDirectory, sectionId, patchNodeId, `attempt-${attempt}`);
          patchCalls += 1;
          let completion: CompletionResult | undefined;
          let output: NodePatchOutput;

          try {
            const patchFiles = focusedPatchFiles(currentInput, remainingAuditOutput);
            const patchInputArtifact = {
              schemaVersion: "design-validation/patch-input/v2",
              runId: args.runId,
              targetId: currentInput.run.targetId,
              sectionId,
              patchNodeId,
              parentPatchNodeId,
              fingerprint: currentInput.node.fingerprint,
              baseCommit: parentCommit,
              baseBranch: parentBranch,
              findings: remainingFindings,
              designIndexSource: currentInput.contract.designIndexSource,
              designIndexFragment: currentInput.contract.designIndexFragment,
              documentAudit: currentInput.contract.documentAudit,
              evidence: currentInput.evidence,
              files: patchFiles,
              allowedWriteGlobs: currentInput.policy.allowedWriteGlobs,
              payload: currentInput.payload,
            };
            await writeJson(path.join(attemptDirectory, "patch-input.json"), patchInputArtifact);
            await writeJson(path.join(args.runDirectory, "nodes", sectionId, "patch-input.json"), patchInputArtifact);
            completion = await args.client.completeJson({
              kind: "patch",
              sectionId,
              fingerprint: currentInput.node.fingerprint,
              requestId: attemptId,
              systemPrompt: retryContext ? PATCH_RETRY_SYSTEM_PROMPT : PATCH_SYSTEM_PROMPT,
              userPrompt: retryContext
                ? patchRetryUserPrompt({
                  auditInput: currentInput,
                  auditOutput: remainingAuditOutput,
                  rejectedOutput: retryContext.output,
                  failure: retryContext.failure,
                })
                : patchUserPrompt({ auditInput: currentInput, auditOutput: remainingAuditOutput }),
              outputSchema: args.patchCandidateOutputSchema,
            });
            await writeJson(path.join(attemptDirectory, "api-response.json"), completion.raw);
            output = canonicalizePatchOutput({
              value: completion.parsed,
              auditInput: currentInput,
              auditOutput: remainingAuditOutput,
            });
            assertPatchOutput(args.validatePatch, output, sectionId, currentInput.node.fingerprint);
            await writeJson(path.join(attemptDirectory, "output.json"), output);
            await writeJson(path.join(args.runDirectory, "nodes", sectionId, "patch-output.json"), output);
          } catch (error) {
            if (completion) await writeJson(path.join(attemptDirectory, "output-invalid.json"), completion.parsed);
            const attemptRecord: PatchAttemptRecord = {
              attempt,
              patchNodeId,
              status: "BLOCKED_MODEL",
              reason: `${patchNodeId} candidate ${attempt}/${args.config.patchGenerationAttempts} failed: ${errorMessage(error)}`,
            };
            attempts.push(attemptRecord);
            await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
            const rejectedOutput = completion
              ? rejectedPatchSummaryForRetry({
                value: completion.parsed,
                input: currentInput,
                auditOutput: remainingAuditOutput,
              })
              : null;
            retryContext = rejectedOutput
              ? { output: rejectedOutput, failure: { stage: "guard", reason: errorMessage(error) } }
              : undefined;
            if (attempt < args.config.patchGenerationAttempts) continue;
            finalRecord = { sectionId, ...attemptRecord, attempts };
            break;
          }

          if (blockedConflictContradictsExactFinding(remainingAuditOutput, output)) {
            const reason = `${patchNodeId} contradicted a structurally verified exact-contract omission.`;
            const attemptRecord: PatchAttemptRecord = { attempt, patchNodeId, status: "BLOCKED_MODEL", reason };
            attempts.push(attemptRecord);
            await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
            if (attempt < args.config.patchGenerationAttempts) {
              retryContext = { output, failure: { stage: "guard", reason } };
              continue;
            }
            finalRecord = { sectionId, ...attemptRecord, attempts };
            break;
          }

          if (output.status !== "PATCH") {
            const reason = `${patchNodeId} returned ${output.status}: ${output.reason}`;
            const attemptRecord: PatchAttemptRecord = { attempt, patchNodeId, status: output.status, reason };
            attempts.push(attemptRecord);
            await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
            if (output.status === "BLOCKED_AUDIT_CONFLICT") {
              const conflictResolution = await callAudit({
                client: args.client,
                input: currentInput,
                kind: "reaudit",
                requestId: `${args.runId}:patch-conflict-preflight:${patchNodeId}:candidate:${attempt}`,
                maxAttempts: args.config.auditAttempts,
                validate: args.validateAudit,
                outputSchema: args.auditOutputSchema,
                systemPrompt: PATCH_CONFLICT_PREFLIGHT_SYSTEM_PROMPT,
                userPrompt: patchConflictPreflightUserPrompt({
                  auditInput: currentInput,
                  auditOutput: remainingAuditOutput,
                  conflictOutput: output,
                }),
              });
              reauditCalls += conflictResolution.attempts.length;
              await saveAuditCall(
                path.join(scratchDirectory, sectionId, patchNodeId, `conflict-preflight-attempt-${attempt}`),
                currentInput,
                conflictResolution,
              );
              if (conflictResolution.ok && conflictResolution.output.status === "PASS") {
                resolvedWithoutPatchRequirementIds.add(requirementId);
                const reclassified: PatchAttemptRecord = {
                  attempt: 0,
                  patchNodeId,
                  status: "AUDIT_RECLASSIFIED",
                  reason: `${patchNodeId} independent conflict preflight confirmed ${requirementId} is already satisfied.`,
                };
                attempts.push(reclassified);
                await writeJson(
                  path.join(scratchDirectory, sectionId, patchNodeId, "conflict-preflight-result.json"),
                  reclassified,
                );
                childIndex += 1;
                childResolvedWithoutPatch = true;
                break;
              }
            }
            if (attempt < args.config.patchGenerationAttempts && patchOutputNeedsIndependentRetry(output)) {
              retryContext = { output, failure: { stage: "guard", reason } };
              continue;
            }
            if (
              attempt === args.config.patchGenerationAttempts &&
              isDocumentGapOnlyPatchFailure(currentInput, remainingAuditOutput, output)
            ) {
              resolvedWithoutPatchRequirementIds.add(requirementId);
              const reclassified: PatchAttemptRecord = {
                attempt: 0,
                patchNodeId,
                status: "AUDIT_RECLASSIFIED",
                reason: `${patchNodeId} exhausted independent patch candidates because the exact value is absent from DESIGN_INDEX; the same Section's Stage 1 DOCUMENT_GAP Issue owns this omission.`,
              };
              attempts.push(reclassified);
              await writeJson(
                path.join(scratchDirectory, sectionId, patchNodeId, "document-gap-reclassification.json"),
                reclassified,
              );
              finalRecord = undefined;
              childIndex += 1;
              childResolvedWithoutPatch = true;
              break;
            }
            finalRecord = { sectionId, ...attemptRecord, attempts };
            break;
          }

          const parentConfig: PipelineConfig = {
            ...args.config,
            repositoryRoot: activeParentWorktree?.path ?? args.config.repositoryRoot,
            baseCommit: parentCommit,
          };
          let guarded: GuardedPatch;
          try {
            guarded = await guardPatch({
              config: parentConfig,
              manifest: args.manifest,
              auditInput: currentInput,
              patchOutput: output,
              scratchDirectory: attemptDirectory,
            });
          } catch (error) {
            const reason = `${patchNodeId} was rejected: ${errorMessage(error)}`;
            const attemptRecord: PatchAttemptRecord = { attempt, patchNodeId, status: "BLOCKED_GUARD", reason };
            attempts.push(attemptRecord);
            await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
            if (attempt < args.config.patchGenerationAttempts && isRetryablePatchCandidateError(error)) {
              retryContext = { output, failure: { stage: "guard", reason: errorMessage(error) } };
              continue;
            }
            finalRecord = { sectionId, ...attemptRecord, attempts };
            break;
          }

          await writeJson(path.join(args.runDirectory, "locks", `${patchNodeId}-attempt-${attempt}.json`), {
            schemaVersion: "design-validation/write-lock/v2",
            sectionId,
            patchNodeId,
            attempt,
            writeSet: guarded.changedPaths,
            status: "ACQUIRED_STACKED",
            conflicts: [],
            parentBranch,
            parentCommit,
          });

          let worktree: Awaited<ReturnType<typeof createPatchedWorktree>>;
          try {
            worktree = await createPatchedWorktree(args.config, guarded, parentCommit);
          } catch (error) {
            const attemptRecord: PatchAttemptRecord = {
              attempt,
              patchNodeId,
              status: "BLOCKED_GUARD",
              reason: `Unable to create ${patchNodeId} worktree: ${errorMessage(error)}`,
              patchHash: guarded.patchHash,
              changedPaths: guarded.changedPaths,
            };
            attempts.push(attemptRecord);
            await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
            finalRecord = { sectionId, ...attemptRecord, attempts };
            break;
          }

          let retainAsParent = false;
          try {
            try {
              const checks = await verifyPatchedWorktree(args.config, worktree.path);
              await writeJson(
                path.join(attemptDirectory, "verification.json"),
                checks.map((check) => ({
                  ...check,
                  output: sanitizeArtifactText(check.output, args.config, worktree.path),
                })),
              );
            } catch (error) {
              const reason = errorMessage(error);
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: "FAILED_TEST",
                reason,
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              if (attempt < args.config.patchGenerationAttempts) {
                retryContext = { output, failure: { stage: "test", reason } };
                continue;
              }
              finalRecord = { sectionId, ...attemptRecord, attempts };
              break;
            }

            const nextInputs = await patchedInputs({
              originalConfig: parentConfig,
              worktreePath: worktree.path,
              triggerPath: args.triggerPath,
              runId: `${args.runId}:${patchNodeId}`,
              manifest: args.manifest,
              contractSchemaHash: args.contractSchemaHash,
              changeEvent: args.changeEvent,
              documentOutputs: args.documentOutputs,
            });
            const nextInput = nextInputs.get(sectionId);
            if (!nextInput) throw new Error(`Patched input is missing ${sectionId}.`);
            const addressedFindings = remainingFindings.filter(
              (finding) => output.requirementIds.includes(finding.requirementId),
            );
            const childAuditOutput: NodeAuditOutput = {
              ...remainingAuditOutput,
              findings: addressedFindings,
            };
            const reaudit = await callAudit({
              client: args.client,
              input: nextInput,
              kind: "reaudit",
              requestId: `${args.runId}:reaudit:${patchNodeId}:attempt:${attempt}`,
              maxAttempts: args.config.auditAttempts,
              validate: args.validateAudit,
              outputSchema: args.auditOutputSchema,
              systemPrompt: PATCH_REAUDIT_SYSTEM_PROMPT,
              userPrompt: patchReauditUserPrompt({
                before: currentInput,
                after: nextInput,
                auditOutput: childAuditOutput,
                patchOutput: output,
                diff: guarded.diff,
              }),
            });
            reauditCalls += reaudit.attempts.length;
            await saveAuditCall(path.join(attemptDirectory, "reaudit"), nextInput, reaudit);
            if (!reaudit.ok || reaudit.output.status !== "PASS") {
              const reason = reaudit.ok ? `Patched code remained ${reaudit.output.status}.` : reaudit.error;
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: "FAILED_REAUDIT",
                reason,
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              if (attempt < args.config.patchGenerationAttempts) {
                retryContext = { output, failure: { stage: "reaudit", reason } };
                continue;
              }
              finalRecord = { sectionId, ...attemptRecord, attempts };
              break;
            }

            const regressionSectionIds = SECTION_IDS.filter((candidateId) => {
              if (candidateId === sectionId) return false;
              const before = currentInputs.get(candidateId);
              const after = nextInputs.get(candidateId);
              const previousResult = args.resolved.get(candidateId);
              return Boolean(
                before &&
                after &&
                previousResult?.output.status === "PASS" &&
                before.node.fingerprint !== after.node.fingerprint
              );
            });
            const regressionResults = await runWithConcurrency(
              regressionSectionIds,
              args.config.nvidia.concurrency,
              async (regressionSectionId): Promise<AuditCallResult> => {
                const before = currentInputs.get(regressionSectionId);
                const after = nextInputs.get(regressionSectionId);
                if (!before || !after) {
                  return {
                    ok: false,
                    sectionId: regressionSectionId,
                    error: `Patched regression input is missing ${regressionSectionId}.`,
                    attempts: [],
                  };
                }
                const result = await callAudit({
                  client: args.client,
                  input: after,
                  kind: "reaudit",
                  requestId: `${args.runId}:regression:${patchNodeId}:attempt:${attempt}:${regressionSectionId}`,
                  maxAttempts: args.config.auditAttempts,
                  validate: args.validateAudit,
                  outputSchema: args.auditOutputSchema,
                  systemPrompt: REGRESSION_AUDIT_SYSTEM_PROMPT,
                  userPrompt: regressionAuditUserPrompt({ before, after, changedPaths: guarded.changedPaths }),
                });
                await writeJson(
                  path.join(attemptDirectory, "regressions", regressionSectionId, "before-input.json"),
                  before,
                );
                await saveAuditCall(path.join(attemptDirectory, "regressions"), after, result);
                return result;
              },
            );
            reauditCalls += regressionResults.reduce((count, result) => count + result.attempts.length, 0);
            const regressionFailures = regressionResults.filter(
              (result) => !result.ok || result.output.status !== "PASS",
            );
            if (regressionFailures.length > 0) {
              const reason = `Patch regressed previously PASS Sections: ${regressionFailures
                .map((result) => result.ok ? `${result.sectionId}:${result.output.status}` : `${result.sectionId}:ERROR`)
                .join(", ")}.`;
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: "FAILED_REAUDIT",
                reason,
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              if (attempt < args.config.patchGenerationAttempts) {
                retryContext = { output, failure: { stage: "regression", reason } };
                continue;
              }
              finalRecord = { sectionId, ...attemptRecord, attempts };
              break;
            }

            if (!args.config.createPrs) {
              const unresolvedAfter = remainingFindings.filter(
                (finding) => !output.requirementIds.includes(finding.requirementId),
              );
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: "PATCH_VERIFIED",
                reason: unresolvedAfter.length === 0
                  ? "Patch passed all guards and re-audits; PR creation is disabled."
                  : "A partial child patch passed, but stacked continuation requires PR publication.",
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              finalRecord = {
                sectionId,
                ...attemptRecord,
                attempts,
                addressedRequirementIds: output.requirementIds,
                unresolvedRequirementIds: unresolvedAfter.map((finding) => finding.requirementId),
              };
              break;
            }

            try {
              if (!aggregationBranchPrepared) {
                await prepareSectionBranch({
                  config: args.config,
                  input,
                  baseBranch: sectionBaseBranch,
                  baseCommit: sectionBaseCommit,
                });
                aggregationBranchPrepared = true;
              }
              const prKey = pullRequestKey({
                targetId: currentInput.run.targetId,
                sectionId,
                patchNodeId,
                fingerprint: currentInput.node.fingerprint,
                patchHash: guarded.patchHash,
              });
              const affectedPassAttestations = SECTION_IDS
                .filter((candidateId) => candidateId !== sectionId)
                .filter((candidateId) => {
                  const candidateInput = currentInputs.get(candidateId);
                  return candidateInput?.implementation.files.some((file) => guarded.changedPaths.includes(file.path));
                })
                .map((candidateId) => args.attestations.get(candidateId)?.attestationHash)
                .filter((value): value is NonNullable<typeof value> => value !== undefined);
              const runUrl = args.config.runId
                ? `${args.config.github.serverUrl}/${args.config.repository}/actions/runs/${args.config.runId}`
                : null;
              const prManifest: PullRequestManifest = {
                schemaVersion: "design-validation/pr-manifest/v2",
                prKey,
                targetId: currentInput.run.targetId,
                sectionId,
                patchNodeId,
                parentPatchNodeId,
                fingerprint: currentInput.node.fingerprint,
                triggerSource: {
                  path: currentInput.contract.designIndexSource.path,
                  documentHash: currentInput.contract.designIndexSource.documentHash,
                  sectionHeading: currentInput.contract.designIndexSource.sectionHeading,
                },
                baseCommit: parentCommit,
                baseBranch: parentBranch,
                requirementIds: output.requirementIds,
                evidenceRefs: output.evidenceRefs,
                patchHash: guarded.patchHash,
                readSet: output.readSet,
                writeSet: output.writeSet,
                affectedPassAttestations,
                checks: {
                  schema: "PASS",
                  scope: "PASS",
                  immutableInputs: "PASS",
                  build: "PASS",
                  test: "PASS",
                  visual: "PASS",
                  accessibility: "PASS",
                  regression: "PASS",
                  base: "PASS",
                },
                runId: args.runId,
                runUrl,
              };
              assertContract(args.validatePrManifest, prManifest, `${patchNodeId} PR manifest`);
              await writeJson(path.join(attemptDirectory, "pr-manifest.json"), prManifest);
              const pull = await publishPatchPullRequest({
                config: args.config,
                worktreePath: worktree.path,
                input: currentInput,
                auditOutput: remainingAuditOutput,
                patch: guarded,
                manifest: prManifest,
                patchAttempt: attempt,
                patchNodeId,
                baseBranch: parentBranch,
                baseCommit: parentCommit,
              });
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: pull.reused ? "PR_REUSED" : "PR_CREATED",
                reason: pull.reused
                  ? `Reused ${patchNodeId} and preserved its stacked parent.`
                  : `Created ${patchNodeId} as a verified stacked draft PR.`,
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              childPullRequests.push({
                patchNodeId,
                parentPatchNodeId,
                number: pull.number,
                url: pull.url,
                branch: pull.branch,
                baseBranch: parentBranch,
                requirementIds: output.requirementIds,
                mergeBatch,
                mergedIntoSection: false,
              });
              pendingMergeBatch.push(childPullRequests.at(-1)!);
              sectionPatchHashes.push(guarded.patchHash);
              for (const evidenceRef of output.evidenceRefs) sectionEvidenceRefs.add(evidenceRef);
              for (const entry of output.readSet) sectionReadSet.set(entry.path, entry);
              for (const entry of output.writeSet) sectionWriteSet.set(entry.path, entry);
              for (const attestation of affectedPassAttestations) {
                sectionAffectedPassAttestations.add(attestation);
              }
              for (const requirementId of output.requirementIds) addressedRequirementIds.add(requirementId);
              const previousParentWorktree = activeParentWorktree;
              activeParentWorktree = worktree;
              retainAsParent = true;
              if (previousParentWorktree) await previousParentWorktree.cleanup();
              parentPatchNodeId = patchNodeId;
              parentBranch = pull.branch;
              parentCommit = pull.commit;
              currentInputs = await patchedInputs({
                originalConfig: { ...args.config, baseCommit: pull.commit },
                worktreePath: worktree.path,
                triggerPath: args.triggerPath,
                runId: `${args.runId}:${patchNodeId}:parent`,
                manifest: args.manifest,
                contractSchemaHash: args.contractSchemaHash,
                changeEvent: args.changeEvent,
                documentOutputs: args.documentOutputs,
              });
              const publishedInput = currentInputs.get(sectionId);
              if (!publishedInput) throw new Error(`Published parent input is missing ${sectionId}.`);
              currentInput = publishedInput;
              childIndex += 1;
              childPublished = true;
              break;
            } catch (error) {
              const reason = errorMessage(error);
              const attemptRecord: PatchAttemptRecord = {
                attempt,
                patchNodeId,
                status: "FAILED_PUBLISH",
                reason,
                patchHash: guarded.patchHash,
                changedPaths: guarded.changedPaths,
              };
              attempts.push(attemptRecord);
              await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
              finalRecord = { sectionId, ...attemptRecord, attempts };
              break;
            }
          } finally {
            if (!retainAsParent) await worktree.cleanup();
          }
        }

        if (!args.config.createPrs && finalRecord?.status === "PATCH_VERIFIED") break;
        if (!childPublished && !childResolvedWithoutPatch) {
          const failure = finalRecord ?? {
            sectionId,
            status: "BLOCKED_MODEL" as const,
            reason: `${patchNodeId} ended without a verified patch, reclassification, or published PR.`,
            attempts,
          };
          requirementFailures.push({ requirementId, record: failure });
          failedRequirementIds.add(requirementId);
          finalRecord = undefined;
          childIndex += 1;
        }
        if (childPublished && pendingMergeBatch.length >= args.config.prMergeBatchSize) {
          await consolidateCurrentBatch();
        }
      }
      await consolidateCurrentBatch();

      if (childPullRequests.length > 0) {
        const aggregatePatchHash = sha256(JSON.stringify({
          sectionId,
          childPatchHashes: sectionPatchHashes,
          requirementIds: [...addressedRequirementIds].sort(),
        }));
        const prKey = pullRequestKey({
          targetId: input.run.targetId,
          sectionId,
          fingerprint: input.node.fingerprint,
          patchHash: aggregatePatchHash,
        });
        const runUrl = args.config.runId
          ? `${args.config.github.serverUrl}/${args.config.repository}/actions/runs/${args.config.runId}`
          : null;
        const sectionManifest: PullRequestManifest = {
          schemaVersion: "design-validation/pr-manifest/v2",
          prKey,
          targetId: input.run.targetId,
          sectionId,
          fingerprint: input.node.fingerprint,
          triggerSource: {
            path: input.contract.designIndexSource.path,
            documentHash: input.contract.designIndexSource.documentHash,
            sectionHeading: input.contract.designIndexSource.sectionHeading,
          },
          baseCommit: sectionBaseCommit,
          baseBranch: sectionBaseBranch,
          requirementIds: [...addressedRequirementIds].sort(),
          evidenceRefs: [...sectionEvidenceRefs].sort(),
          patchHash: aggregatePatchHash,
          readSet: [...sectionReadSet.values()].sort((left, right) => left.path.localeCompare(right.path)),
          writeSet: [...sectionWriteSet.values()].sort((left, right) => left.path.localeCompare(right.path)),
          affectedPassAttestations: [...sectionAffectedPassAttestations].sort(),
          checks: {
            schema: "PASS",
            scope: "PASS",
            immutableInputs: "PASS",
            build: "PASS",
            test: "PASS",
            visual: "PASS",
            accessibility: "PASS",
            regression: "PASS",
            base: "PASS",
          },
          runId: args.runId,
          runUrl,
        };
        assertContract(args.validatePrManifest, sectionManifest, `${sectionId} Section PR manifest`);
        await writeJson(path.join(scratchDirectory, sectionId, "section-pr-manifest.json"), sectionManifest);
        sectionPull = await publishSectionPullRequest({
          config: args.config,
          input,
          manifest: sectionManifest,
          sectionBranch: aggregationBranch,
          sectionCommit: parentCommit,
          childPullRequests,
        });
      }
    } finally {
      if (activeParentWorktree) await activeParentWorktree.cleanup();
    }

    const completedRequirementIds = new Set([
      ...addressedRequirementIds,
      ...resolvedWithoutPatchRequirementIds,
    ]);
    if (!finalRecord && failedRequirementIds.size === 0 && completedRequirementIds.size === allPatchableRequirementIds.length) {
      finalRecord = {
        sectionId,
        status: childPullRequests.length === 0
          ? "AUDIT_RECLASSIFIED"
          : sectionPull?.reused ? "PR_REUSED" : "PR_CREATED",
        reason: childPullRequests.length === 0
          ? `Independent child preflights reclassified all ${sectionId} findings against the current source.`
          : `Merged ${childPullRequests.length} verified child PR(s) into ${sectionId} in batches of at most ${args.config.prMergeBatchSize}, then published one Section representative PR; ${resolvedWithoutPatchRequirementIds.size} finding(s) were independently reclassified.`,
        addressedRequirementIds: [...addressedRequirementIds],
        resolvedWithoutPatchRequirementIds: [...resolvedWithoutPatchRequirementIds],
        unresolvedRequirementIds: [],
        ...(sectionPull ? {
          pullRequest: { number: sectionPull.number, url: sectionPull.url, branch: sectionPull.branch },
        } : {}),
        childPullRequests,
        attempts,
      };
    } else if (requirementFailures.length > 0) {
      const lastFailure = requirementFailures.at(-1)!.record;
      finalRecord = {
        ...lastFailure,
        reason: `${failedRequirementIds.size} Requirement ID(s) remained unresolved after every ID in ${sectionId} was independently attempted. Last failure: ${lastFailure.reason}`,
        addressedRequirementIds: [...addressedRequirementIds],
        resolvedWithoutPatchRequirementIds: [...resolvedWithoutPatchRequirementIds],
        unresolvedRequirementIds: [...failedRequirementIds],
        childPullRequests,
        attempts,
        ...(sectionPull
          ? {
            pullRequest: {
              number: sectionPull.number,
              url: sectionPull.url,
              branch: sectionPull.branch,
            },
          }
          : {}),
      };
    } else if (finalRecord) {
      finalRecord = {
        ...finalRecord,
        addressedRequirementIds: [...addressedRequirementIds],
        resolvedWithoutPatchRequirementIds: [...resolvedWithoutPatchRequirementIds],
        unresolvedRequirementIds: allPatchableRequirementIds
          .filter((requirementId) => !completedRequirementIds.has(requirementId)),
        childPullRequests,
        ...(sectionPull
          ? {
            pullRequest: {
              number: sectionPull.number,
              url: sectionPull.url,
              branch: sectionPull.branch,
            },
          }
          : {}),
      };
    }

    if (sectionPull) {
      stackParentBranch = sectionPull.branch;
      stackParentCommit = sectionPull.commit;
    }

    records.push(finalRecord ?? {
      sectionId,
      status: "BLOCKED_MODEL",
      reason: "Patch candidate generation ended without a terminal result.",
      attempts,
    });
  }
  return { records, patchCalls, reauditCalls };
}

async function runTrigger(args: {
  config: PipelineConfig;
  client: NvidiaClient;
  triggerPath: string;
  specification: Awaited<ReturnType<typeof readSpecification>>;
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  validators: Awaited<ReturnType<typeof loadValidators>>;
  contractSchemaHash: ReturnType<typeof sha256>;
  changeEvent: ChangeEvent;
}): Promise<WorkRunSummary> {
  const trigger = await readTrigger(args.config.repositoryRoot, args.triggerPath);
  const runId = safeRunId(trigger.referenceId);
  const runDirectory = path.join(args.config.outputRoot, "runs", runId);
  const nodesDirectory = path.join(runDirectory, "nodes");
  const requestedAt = new Date().toISOString();
  await mkdir(nodesDirectory, { recursive: true });

  const targetId = targetIdFor(args.config.repository, trigger.referenceId);
  const targetHasState = await exists(path.join(args.config.stateRoot, "attestations", targetId));
  const changedPaths = args.changeEvent.changedFiles.map((file) => file.path);
  const globalContractChanged = changedPaths.some((changedPath) => (
    changedPath === args.config.specificationPath ||
    changedPath === "DESIGN_INDEX_SPECIFICATION.ko.md" ||
    changedPath.startsWith("validation/src/") ||
    changedPath.startsWith("validation/schemas/") ||
    changedPath === args.config.impactManifestPath
  ));
  const knownChange = args.changeEvent.changedFiles.every((file) => (
    !matchesAnyPath(file.path, args.manifest.sourceGlobs) ||
    matchesAnyPath(file.path, args.manifest.ignoredChangeGlobs) ||
    Object.values(args.manifest.nodes).some((node) => matchesAnyPath(file.path, node.reads)) ||
    file.path.startsWith("trigger/DESIGN_INDEX_gdweb-") ||
    file.path.startsWith("trigger/request-contracts/") ||
    file.path.startsWith("trigger/evidence/") ||
    file.path.includes(".request-contract.") ||
    file.path.startsWith("trigger/REQUEST_CONTRACT_") ||
    file.path === args.config.specificationPath ||
    file.path === "DESIGN_INDEX_SPECIFICATION.ko.md" ||
    file.path.startsWith("validation/")
  ));
  const fullAudit = (
    args.config.forceFullAudit ||
    !targetHasState ||
    changedPaths.includes(trigger.path) ||
    globalContractChanged ||
    !knownChange
  );
  const targetChangeEvent: ChangeEvent = {
    ...args.changeEvent,
    options: {
      forceFullAudit: fullAudit,
      allowCachedPass: !fullAudit,
      reason: fullAudit
        ? `Full audit required for ${trigger.referenceId} by target input, global contract, unknown source, or explicit force.`
        : `Incremental audit allowed for unchanged target ${trigger.referenceId}.`,
    },
  };
  const effectiveConfig: PipelineConfig = {
    ...args.config,
    forceFullAudit: fullAudit,
  };

  const contractHash = validatorContractHash(
    effectiveConfig,
    args.manifest,
    args.contractSchemaHash,
  );
  const mode = args.config.forceFullAudit
    ? "forced-full"
    : fullAudit
      ? "full"
      : "incremental";
  const directlyDirty = directDirtySections(targetChangeEvent, args.manifest);

  const documentInputs = await buildDocumentAuditInputs(
    effectiveConfig,
    args.manifest,
    args.specification,
    trigger,
    args.contractSchemaHash,
    runId,
    requestedAt,
  );
  if (documentInputs.size !== 19 || SECTION_IDS.some((id) => !documentInputs.has(id))) {
    throw new Error("Stage 1 document audit fan-out is not the exact S01-S19 set.");
  }
  for (const [sectionId, input] of documentInputs) {
    assertContract(args.validators.documentInput, input, `${sectionId} document audit input`);
    assertIsolatedDocumentAuditInput(input);
  }

  const documentCached = new Map<SectionId, ResolvedDocumentNode>();
  const documentResolved = new Map<SectionId, ResolvedDocumentNode>();
  const documentCallResults: DocumentAuditCallResult[] = [];
  const executeDocumentAudit = async (sectionId: SectionId): Promise<DocumentAuditCallResult> => {
    const input = documentInputs.get(sectionId);
    if (!input) return { ok: false, sectionId, error: `Missing ${sectionId} document input.`, attempts: [] };
    const result = await callDocumentAudit({
      client: args.client,
      input,
      requestId: primaryAuditRequestId(runId, "document-audit", sectionId),
      maxAttempts: args.config.auditAttempts,
      validate: args.validators.documentAudit,
      outputSchema: args.validators.documentAuditSchema,
    });
    await saveDocumentAuditCall(nodesDirectory, input, result);
    return result;
  };
  if (fullAudit) {
    documentCallResults.push(...await runWithConcurrency(
      SECTION_IDS,
      args.config.nvidia.concurrency,
      executeDocumentAudit,
    ));
  } else {
    for (const sectionId of SECTION_IDS) {
      const input = documentInputs.get(sectionId)!;
      const cachedDocument = await resolveCachedDocumentPass({
        config: effectiveConfig,
        input,
        validatorContractHash: contractHash,
      });
      if (cachedDocument) {
        documentCached.set(sectionId, cachedDocument);
        documentResolved.set(sectionId, cachedDocument);
        await writeJson(path.join(nodesDirectory, sectionId, "document-audit-input.json"), input);
        await writeJson(path.join(nodesDirectory, sectionId, "document-audit-output.json"), cachedDocument.output);
        await writeJson(path.join(nodesDirectory, sectionId, "document-cache-hit.json"), {
          status: "CACHED_PASS",
          fingerprint: input.node.fingerprint,
          attestationHash: cachedDocument.attestation?.attestationHash ?? null,
        });
      } else {
        documentCallResults.push(await executeDocumentAudit(sectionId));
      }
    }
  }
  for (const result of documentCallResults) {
    const input = documentInputs.get(result.sectionId)!;
    const output = result.ok
      ? result.output
      : quarantineDocumentAuditOutput(result.sectionId, input.node.fingerprint) as DocumentAuditOutput;
    documentResolved.set(result.sectionId, {
      status: "FRESH",
      output,
      rawResponseHash: result.ok ? result.completion.rawHash : sha256(result.error),
    });
    if (!result.ok) {
      await writeJson(path.join(nodesDirectory, result.sectionId, "document-audit-output.json"), output);
    }
  }
  if (documentResolved.size !== 19) {
    throw new Error(`Stage 1 resolved ${documentResolved.size}/19 Sections.`);
  }
  await createFreshDocumentAttestations({
    config: effectiveConfig,
    inputs: documentInputs,
    resolved: documentResolved,
    validatorContractHash: contractHash,
    outputDirectory: path.join(args.config.outputRoot, "document-attestations"),
  });
  const documentOutputs = new Map(
    SECTION_IDS.map((sectionId) => [sectionId, documentResolved.get(sectionId)!.output] as const),
  );

  const inputs = await buildAuditInputs(
    effectiveConfig,
    args.manifest,
    args.specification,
    trigger,
    args.contractSchemaHash,
    runId,
    requestedAt,
    targetChangeEvent,
    documentOutputs,
  );
  if (inputs.size !== 19 || SECTION_IDS.some((id) => !inputs.has(id))) {
    throw new Error("Stage 2 implementation audit fan-out is not the exact S01-S19 set.");
  }
  for (const [sectionId, input] of inputs) {
    assertContract(args.validators.input, input, `${sectionId} implementation audit input`);
    assertIsolatedAuditInput(input);
  }

  await writeJson(path.join(runDirectory, "run.json"), {
    schemaVersion: "design-validation/run/v2",
    runId,
    targetId,
    mode,
    repository: args.config.repository,
    baseCommit: args.config.baseCommit,
    event: targetChangeEvent,
    requestedAt,
  });
  await writeJson(path.join(runDirectory, "graph.json"), {
    schemaVersion: "design-validation/graph/v2",
    nodes: SECTION_IDS.map((sectionId) => ({
      sectionId,
      name: args.manifest.nodes[sectionId].name,
      dependsOn: args.manifest.nodes[sectionId].dependsOn,
      reads: args.manifest.nodes[sectionId].reads,
      writes: args.manifest.nodes[sectionId].writes,
    })),
  });
  await writeJson(path.join(runDirectory, "impact.json"), {
    schemaVersion: "design-validation/impact/v2",
    changeEventId: targetChangeEvent.eventId,
    forceFullAudit: fullAudit,
    directDirtySections: [...directlyDirty].sort(),
    safeFallback: targetChangeEvent.options.forceFullAudit,
    reason: targetChangeEvent.options.reason,
  });
  await mkdir(path.join(runDirectory, "locks"), { recursive: true });

  const cached = new Map<SectionId, Extract<ResolvedNode, { status: "CACHED_PASS" }>>();
  const resolved = new Map<SectionId, ResolvedNode>();
  const callResults: AuditCallResult[] = [];

  const executeAudit = async (sectionId: SectionId): Promise<AuditCallResult> => {
    const scheduledInput = inputs.get(sectionId);
    if (!scheduledInput) return { ok: false, sectionId, error: `Missing ${sectionId} input.`, attempts: [] };
    let workspace: Awaited<ReturnType<typeof isolatedAuditInput>> | undefined;
    try {
      workspace = await isolatedAuditInput({
        config: effectiveConfig,
        manifest: args.manifest,
        contractSchemaHash: args.contractSchemaHash,
        triggerPath: args.triggerPath,
        sectionId,
        runId,
        requestedAt,
        changeEvent: targetChangeEvent,
        documentOutputs,
        expectedFingerprint: scheduledInput.node.fingerprint,
      });
      const result = await callAudit({
        client: args.client,
        input: workspace.input,
        kind: "audit",
        requestId: primaryAuditRequestId(runId, "implementation-audit", sectionId),
        maxAttempts: args.config.auditAttempts,
        validate: args.validators.audit,
        outputSchema: args.validators.auditSchema,
      });
      await saveAuditCall(nodesDirectory, workspace.input, result);
      return result;
    } catch (error) {
      const result: AuditCallFailure = { ok: false, sectionId, error: errorMessage(error), attempts: [] };
      await saveAuditCall(nodesDirectory, scheduledInput, result);
      return result;
    } finally {
      await workspace?.cleanup();
    }
  };

  if (fullAudit) {
    const results = await runWithConcurrency(SECTION_IDS, args.config.nvidia.concurrency, executeAudit);
    callResults.push(...results);
    for (const result of results) {
      if (!result.ok) continue;
      resolved.set(result.sectionId, {
        status: "FRESH",
        output: result.output,
        rawResponseHash: result.completion.rawHash,
      });
    }
  } else {
    for (const sectionId of topologicalSections(args.manifest)) {
      const input = inputs.get(sectionId);
      if (!input) throw new Error(`Missing ${sectionId} input.`);
      const candidate = await resolveCachedPassForNode({
        config: effectiveConfig,
        input,
        resolvedDependencies: resolved,
        validatorContractHash: contractHash,
      });
      if (candidate) {
        cached.set(sectionId, candidate);
        resolved.set(sectionId, candidate);
        await writeJson(path.join(nodesDirectory, sectionId, "audit-input.json"), input);
        await writeJson(path.join(nodesDirectory, sectionId, "audit-output.json"), candidate.output);
        await writeJson(path.join(nodesDirectory, sectionId, "cache-hit.json"), {
          status: "CACHED_PASS",
          fingerprint: input.node.fingerprint,
          attestationHash: candidate.attestation.attestationHash,
          dependencyPublicDigests: candidate.attestation.dependencyPublicDigests,
        });
        continue;
      }
      const result = await executeAudit(sectionId);
      callResults.push(result);
      if (result.ok) {
        resolved.set(sectionId, {
          status: "FRESH",
          output: result.output,
          rawResponseHash: result.completion.rawHash,
        });
      }
    }
  }

  await writeJson(path.join(runDirectory, "document-audit-batch-manifest.json"), {
    schemaVersion: "design-validation/document-audit-batch/v1",
    stage: 1,
    runId,
    targetId,
    mode,
    comparison: "Specification -> DESIGN_INDEX",
    expectedSections: SECTION_IDS,
    requests: SECTION_IDS.map((sectionId) => ({
      requestId: primaryAuditRequestId(runId, "document-audit", sectionId),
      sectionId,
      status: documentCached.has(sectionId) ? "CACHED_PASS" : "COMPLETED",
      inputPath: `nodes/${sectionId}/document-audit-input.json`,
      outputPath: `nodes/${sectionId}/document-audit-output.json`,
    })),
  });
  await writeJson(path.join(runDirectory, "document-audit-matrix.json"), {
    schemaVersion: "design-validation/document-audit-matrix/v1",
    runId,
    sections: SECTION_IDS.map((sectionId) => documentOutputs.get(sectionId)),
    errors: documentCallResults.filter((result) => !result.ok),
  });
  await writeDocumentGapReport(
    path.join(runDirectory, "DOCUMENT_GAP_REPORT.md"),
    SECTION_IDS.map((sectionId) => documentOutputs.get(sectionId)!),
  );

  await writeJson(path.join(runDirectory, "implementation-audit-batch-manifest.json"), {
    schemaVersion: "design-validation/implementation-audit-batch/v1",
    stage: 2,
    runId,
    targetId,
    mode,
    triggerSource: { path: trigger.path, documentHash: trigger.documentHash },
    specificationSource: {
      path: args.specification.path,
      documentHash: args.specification.documentHash,
      globalRulesHash: args.specification.globalRulesHash,
    },
    expectedSections: SECTION_IDS,
    requests: SECTION_IDS.map((sectionId) => ({
      requestId: primaryAuditRequestId(runId, "implementation-audit", sectionId),
      sectionId,
      status: cached.has(sectionId)
        ? "CACHED_PASS"
        : resolved.has(sectionId)
          ? "COMPLETED"
          : "FAILED",
      inputPath: `nodes/${sectionId}/audit-input.json`,
      outputPath: `nodes/${sectionId}/audit-output.json`,
    })),
  });

  const failures = callResults.filter((result): result is AuditCallFailure => !result.ok);

  const orderedOutputs = SECTION_IDS.map((sectionId) => resolved.get(sectionId)?.output).filter(
    (output): output is NodeAuditOutput => output !== undefined,
  );
  let nodeStates = buildNodeStates(inputs, resolved);
  await writeJson(path.join(runDirectory, "audit-matrix.json"), {
    schemaVersion: "design-validation/audit-matrix/v2",
    runId,
    sections: orderedOutputs,
    errors: failures,
  });
  await writeJson(path.join(runDirectory, "node-states.json"), {
    schemaVersion: "design-validation/node-states/v2",
    nodes: nodeStates,
  });
  await writeJson(
    path.join(runDirectory, "gap-report.json"),
    orderedOutputs.flatMap((output) => output.findings).sort((a, b) => a.requirementId.localeCompare(b.requirementId)),
  );

  if (failures.length > 0 || resolved.size !== 19) {
    await writeGapReport(path.join(runDirectory, "GAP_REPORT.md"), orderedOutputs, []);
    const patches: PatchRecord[] = [];
    const failedSummary: WorkRunSummary = {
      runId,
      targetId,
      triggerPath: trigger.path,
      mode,
      expectedSections: 19,
      cachedPasses: cached.size,
      documentCachedPasses: documentCached.size,
      documentAuditRequests: documentCallResults.length,
      documentAuditCalls: documentCallResults.reduce((count, result) => count + result.attempts.length, 0),
      implementationAuditRequests: callResults.length,
      implementationAuditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
      totalLogicalAuditRequests: documentCallResults.length + callResults.length,
      auditRequests: callResults.length,
      auditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
      patchCalls: 0,
      reauditCalls: 0,
      statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
      patchStatusCounts: {},
      nodes: buildNodeRunSummaries({
        manifest: args.manifest,
        documentInputs,
        documentOutputs: [...documentOutputs.values()],
        documentAuditAttempts: new Map(documentCallResults.map((result) => [result.sectionId, result.attempts.length])),
        inputs,
        outputs: orderedOutputs,
        nodeStates,
        auditAttempts: new Map(callResults.map((result) => [result.sectionId, result.attempts.length])),
        patches,
      }),
      patches,
      blocked: blockedNodes(orderedOutputs),
      errors: [
        ...documentCallResults
          .filter((result): result is DocumentAuditCallFailure => !result.ok)
          .map((failure) => `${failure.sectionId} document audit: ${failure.error}`),
        ...failures.map((failure) => `${failure.sectionId} implementation audit: ${failure.error}`),
      ],
    };
    await writeJson(path.join(runDirectory, "summary.json"), failedSummary);
    return failedSummary;
  }

  const attestations = await createFreshAttestations({
    config: effectiveConfig,
    manifest: args.manifest,
    inputs,
    resolved,
    validatorContractHash: contractHash,
    outputDirectory: path.join(args.config.outputRoot, "attestations"),
    source: targetChangeEvent.source === "merge" ? "post-merge-audit" : "fresh-audit",
  });
  for (const [sectionId, attestation] of attestations) {
    assertContract(args.validators.passAttestation, attestation, `${sectionId} PASS attestation`);
  }

  const patchResult = await runPatches({
    config: effectiveConfig,
    client: args.client,
    manifest: args.manifest,
    inputs,
    resolved,
    attestations,
    validatePatch: args.validators.patch,
    validateAudit: args.validators.audit,
    patchCandidateOutputSchema: args.validators.patchCandidateSchema,
    auditOutputSchema: args.validators.auditSchema,
    validatePrManifest: args.validators.prManifest,
    contractSchemaHash: args.contractSchemaHash,
    runDirectory,
    triggerPath: trigger.path,
    runId,
    changeEvent: targetChangeEvent,
    documentOutputs,
  });
  nodeStates = buildNodeStates(inputs, resolved);
  await writeJson(path.join(runDirectory, "node-states.json"), {
    schemaVersion: "design-validation/node-states/v2",
    nodes: nodeStates,
  });
  await writeJson(path.join(runDirectory, "patch-matrix.json"), patchResult.records);
  await writeGapReport(path.join(runDirectory, "GAP_REPORT.md"), orderedOutputs, patchResult.records);
  const incompletePatchSections = incompletePatchSectionIds({
    requiredSectionIds: SECTION_IDS.filter(
      (sectionId) => resolved.get(sectionId)?.output.status === "PATCH_REQUIRED",
    ),
    records: patchResult.records,
    createPrs: effectiveConfig.createPrs,
  });

  const summary: WorkRunSummary = {
    runId,
    targetId,
    triggerPath: trigger.path,
    mode,
    expectedSections: 19,
    cachedPasses: cached.size,
    documentCachedPasses: documentCached.size,
    documentAuditRequests: documentCallResults.length,
    documentAuditCalls: documentCallResults.reduce((count, result) => count + result.attempts.length, 0),
    implementationAuditRequests: callResults.length,
    implementationAuditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
    totalLogicalAuditRequests: documentCallResults.length + callResults.length,
    auditRequests: callResults.length,
    auditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
    patchCalls: patchResult.patchCalls,
    reauditCalls: patchResult.reauditCalls,
    statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
    patchStatusCounts: countStatuses(patchResult.records.map((record) => record.status)),
    nodes: buildNodeRunSummaries({
      manifest: args.manifest,
      documentInputs,
      documentOutputs: [...documentOutputs.values()],
      documentAuditAttempts: new Map(documentCallResults.map((result) => [result.sectionId, result.attempts.length])),
      inputs,
      outputs: orderedOutputs,
      nodeStates,
      auditAttempts: new Map(callResults.map((result) => [result.sectionId, result.attempts.length])),
      patches: patchResult.records,
    }),
    patches: patchResult.records,
    blocked: blockedNodes(orderedOutputs),
    errors: [
      ...documentCallResults
        .filter((result): result is DocumentAuditCallFailure => !result.ok)
        .map((failure) => `${failure.sectionId} document audit: ${failure.error}`),
      ...documentCallResults
        .filter((result): result is DocumentAuditCallSuccess => (
          result.ok && result.output.status === "UNKNOWN"
        ))
        .map((result) => `${result.sectionId} document audit: isolated retries ended without a final grounded judgment.`),
      ...callResults
        .filter((result): result is AuditCallSuccess => (
          result.ok && result.output.status === "UNKNOWN"
        ))
        .map((result) => `${result.sectionId}: isolated implementation-audit retries ended without a final grounded judgment.`),
      ...patchResult.records
        .filter((record) => [
          "BLOCKED_MODEL",
          "BLOCKED_GUARD",
          "FAILED_TEST",
          "FAILED_REAUDIT",
          "FAILED_PUBLISH",
        ].includes(record.status))
        .map((record) => `${record.sectionId}: ${record.status} - ${record.reason}`),
      ...incompletePatchSections.map((sectionId) => (
        `${sectionId}: PATCH_REQUIRED did not produce a complete ${effectiveConfig.createPrs ? "Section representative PR" : "verified patch chain"} in this run.`
      )),
    ],
  };
  await writeJson(path.join(runDirectory, "summary.json"), summary);
  await writeJson(path.join(runDirectory, "batch-summary.json"), summary);
  return summary;
}

export async function runPipeline(config: PipelineConfig): Promise<WorkRunSummary[]> {
  assertSafeOutputRoot(config);
  await rm(config.outputRoot, { recursive: true, force: true });
  await mkdir(config.outputRoot, { recursive: true });

  const specification = await readSpecification(config.repositoryRoot, config.specificationPath);
  const manifest = await readImpactManifest(config.repositoryRoot, config.impactManifestPath);
  const triggers = await Promise.all(
    config.triggerPaths.map((triggerPath) => readTrigger(config.repositoryRoot, triggerPath)),
  );
  const changeEvent = await buildChangeEvent(config, manifest, triggers);
  const validators = await loadValidators(config);
  assertContract(validators.changeEvent, changeEvent, "ChangeEvent");
  const contractSchemaHash = validators.contractSchemaHash;
  const client = new NvidiaClient(config);
  const summaries: WorkRunSummary[] = [];

  const preservedStalePullRequests = await reconcileStaleAutomationPullRequests(config);
  await writeJson(path.join(config.outputRoot, "change-event.json"), changeEvent);
  await writeJson(path.join(config.outputRoot, "stale-pr-reconciliation.json"), {
    baseCommit: config.baseCommit,
    preservedOpenPullRequests: preservedStalePullRequests,
  });

  for (const triggerPath of config.triggerPaths) {
    summaries.push(
      await runTrigger({
        config,
        client,
        triggerPath,
        specification,
        manifest,
        validators,
        contractSchemaHash,
        changeEvent,
      }),
    );
  }

  await writeJson(path.join(config.outputRoot, "pipeline-summary.json"), {
    schemaVersion: "design-validation/pipeline-summary/v2",
    repository: config.repository,
    baseCommit: config.baseCommit,
    specification: {
      path: specification.path,
      documentHash: specification.documentHash,
      globalRulesHash: specification.globalRulesHash,
    },
    validatorContractHash: validatorContractHash(config, manifest, contractSchemaHash),
    modelContractHash: modelContractHash(config),
    changeEvent,
    dryRun: config.dryRun,
    createPrs: config.createPrs,
    summaries,
  });
  const documentGapIssues = await publishDocumentGapIssues({ config, summaries });
  const expectedDocumentGapIssues = summaries.reduce(
    (count, summary) => count + summary.nodes.filter(
      (node) => node.documentAuditStatus === "DOCUMENT_GAP",
    ).length,
    0,
  );
  if (!config.dryRun && config.github.token && documentGapIssues.length !== expectedDocumentGapIssues) {
    throw new Error(
      `Stage 1 publication invariant failed: expected ${expectedDocumentGapIssues} document-gap Issues, published ${documentGapIssues.length}.`,
    );
  }
  await writeJson(path.join(config.outputRoot, "document-gap-issues.json"), documentGapIssues);
  const stateRunId = `${config.runId ?? `local-${Date.now()}`}.${config.runAttempt ?? "1"}`;
  for (const summary of summaries) {
    await writeJson(
      path.join(config.outputRoot, "state-records", stateRunId, `${summary.targetId}.json`),
      {
        schemaVersion: "design-validation/state-run/v2",
        githubRunId: config.runId,
        githubRunAttempt: config.runAttempt,
        repository: config.repository,
        baseCommit: config.baseCommit,
        changeEvent,
        summary,
      },
    );
  }

  await publishNodeCheckRuns({
    config,
    summaries,
  });

  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = ["## DESIGN_INDEX validation", ""];
    for (const summary of summaries) {
      lines.push(
        `- **${summary.targetId}**: Stage 1 document audits ${summary.documentAuditRequests} logical / ${summary.documentAuditCalls} provider calls / ${summary.documentCachedPasses} cached; Stage 2 implementation audits ${summary.implementationAuditRequests} logical / ${summary.implementationAuditCalls} provider calls / ${summary.cachedPasses} cached; total logical audit requests ${summary.totalLogicalAuditRequests}; ${summary.patchCalls} patch calls; ${summary.reauditCalls} re-audit calls`,
        `  - Audit statuses: ${Object.entries(summary.statusCounts).map(([status, count]) => `${status}=${count}`).join(", ") || "none"}`,
        `  - Patch statuses: ${Object.entries(summary.patchStatusCounts).map(([status, count]) => `${status}=${count}`).join(", ") || "none"}`,
      );
      if (summary.errors.length > 0) {
        for (const error of summary.errors) lines.push(`  - Error: ${error}`);
      }
      for (const blocked of summary.blocked) {
        lines.push(
          `  - ${blocked.sectionId} ${blocked.status}: ${blocked.requirementIds.join(", ") || "no Requirement ID"}`,
          `    Resume: ${blocked.resumeCondition}`,
        );
      }
      for (const patch of summary.patches.filter((record) => record.status !== "NOT_REQUIRED")) {
        lines.push(
          `  - ${patch.sectionId} patch ${patch.status}: ${patch.reason}`,
          ...(patch.pullRequest
            ? [`    Draft PR: [#${patch.pullRequest.number}](${patch.pullRequest.url}) on \`${patch.pullRequest.branch}\``]
            : []),
        );
      }
    }
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `${lines.join("\n")}\n`, "utf8");
  }
  return summaries;
}
