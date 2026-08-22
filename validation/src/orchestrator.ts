import { access, appendFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { createFreshAttestations, resolveCachedPassForNode } from "./cache.ts";
import { buildChangeEvent, directDirtySections } from "./change.ts";
import { sha256 } from "./hash.ts";
import {
  publishActionableFeedbackIssues,
  publishNodeCheckRuns,
  publishPatchPullRequest,
  pullRequestKey,
  reconcileStaleAutomationPullRequests,
} from "./github.ts";
import {
  assertIsolatedAuditInput,
  buildAuditInputs,
  modelContractHash,
  targetIdFor,
  validatorContractHash,
} from "./input.ts";
import { matchesAnyPath, readImpactManifest, topologicalSections } from "./manifest.ts";
import { readSpecification, readTrigger } from "./markdown.ts";
import {
  NvidiaClient,
  quarantineAuditOutput,
  runWithConcurrency,
  type CompletionResult,
} from "./nvidia.ts";
import {
  canonicalizePatchOutput,
  guardPatch,
  isRetryablePatchCandidateError,
  type GuardedPatch,
} from "./patch.ts";
import {
  AUDIT_SYSTEM_PROMPT,
  PATCH_REAUDIT_SYSTEM_PROMPT,
  PATCH_RETRY_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  REGRESSION_AUDIT_SYSTEM_PROMPT,
  auditUserPrompt,
  patchRetryUserPrompt,
  patchReauditUserPrompt,
  patchUserPrompt,
  regressionAuditUserPrompt,
} from "./prompts.ts";
import {
  assertAuditOutput,
  assertContract,
  assertPatchOutput,
  loadValidators,
  type JsonSchema,
} from "./schema.ts";
import type {
  ChangeEvent,
  NodeAuditInput,
  NodeAuditOutput,
  NodePatchOutput,
  PassAttestation,
  PipelineConfig,
  PullRequestManifest,
  ResolvedNode,
  SectionId,
} from "./types.ts";
import { SECTION_IDS } from "./types.ts";
import { createAuditWorktree, createPatchedWorktree, verifyPatchedWorktree } from "./worktree.ts";

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

interface AuditCallAttempt {
  attempt: number;
  requestId: string;
  completion?: CompletionResult;
  output?: NodeAuditOutput;
  error?: string;
}

interface PatchAttemptRecord {
  attempt: number;
  status:
    | "BLOCKED_MODEL"
    | "BLOCKED_MISSING_VALUE"
    | "BLOCKED_PATCH_TOO_LARGE"
    | "BLOCKED_AUDIT_CONFLICT"
    | "BLOCKED_GUARD"
    | "BLOCKED_CONFLICT"
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
    | "WAITING_DEPENDENCY"
    | "VALIDATION_ONLY"
    | "BLOCKED_MODEL"
    | "BLOCKED_MISSING_VALUE"
    | "BLOCKED_PATCH_TOO_LARGE"
    | "BLOCKED_AUDIT_CONFLICT"
    | "BLOCKED_GUARD"
    | "BLOCKED_CONFLICT"
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
  unresolvedRequirementIds?: string[];
  pullRequest?: { number: number; url: string; branch: string };
  attempts?: PatchAttemptRecord[];
}

export interface NodeRunSummary {
  sectionId: SectionId;
  name: string;
  fingerprint: string | null;
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
  inputs: Map<SectionId, NodeAuditInput>;
  outputs: NodeAuditOutput[];
  nodeStates: Array<{ sectionId: SectionId; state: string }>;
  auditAttempts: Map<SectionId, number>;
  patches: PatchRecord[];
}): NodeRunSummary[] {
  const outputs = new Map(args.outputs.map((output) => [output.sectionId, output]));
  const states = new Map(args.nodeStates.map((node) => [node.sectionId, node.state]));
  const patches = new Map(args.patches.map((patch) => [patch.sectionId, patch]));
  return SECTION_IDS.map((sectionId) => {
    const output = outputs.get(sectionId);
    const input = args.inputs.get(sectionId);
    return {
      sectionId,
      name: args.manifest.nodes[sectionId].name,
      fingerprint: input?.node.fingerprint ?? null,
      auditStatus: output?.status ?? "FAILED_SCHEMA",
      executionState: states.get(sectionId) ?? "FAILED_SCHEMA",
      auditAttempts: args.auditAttempts.get(sectionId) ?? 0,
      requirementIds: output?.findings.map((finding) => finding.requirementId) ?? [],
      findings: output?.findings ?? [],
      patch: patches.get(sectionId) ?? null,
    };
  });
}

async function exists(pathname: string): Promise<boolean> {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

export function unresolvedPatchDependencies(
  dependencies: SectionId[],
  resolved: Map<SectionId, ResolvedNode>,
  attestations: Map<SectionId, PassAttestation>,
): SectionId[] {
  return dependencies.filter((dependency) => (
    !attestations.has(dependency) && resolved.get(dependency)?.output.status !== "PASS"
  ));
}

export function enforcePatchGrounding(
  input: NodeAuditInput,
  output: NodeAuditOutput,
): { output: NodeAuditOutput; warning?: string } {
  if (output.status !== "PATCH_REQUIRED") return { output };
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
      const grounded = enforcePatchGrounding(args.input, completion.parsed);
      assertAuditOutput(args.validate, grounded.output, sectionId, args.input.node.fingerprint);
      output = grounded.output;
      validatedCompletion = grounded.warning
        ? {
          ...completion,
          parsed: grounded.output,
          warning: [completion.warning, grounded.warning].filter(Boolean).join(" "),
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
    const retryableQuarantine = output.status === "UNKNOWN" && Boolean(validatedCompletion.warning);
    if (retryableQuarantine && attempt < args.maxAttempts) continue;
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
}): Promise<{ records: PatchRecord[]; patchCalls: number; reauditCalls: number }> {
  const records: PatchRecord[] = [];
  const claimedPaths = new Set<string>();
  let patchCalls = 0;
  let reauditCalls = 0;
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
    const missingDependencies = unresolvedPatchDependencies(
      input.node.dependsOn,
      args.resolved,
      args.attestations,
    );
    if (missingDependencies.length > 0) {
      records.push({
        sectionId,
        status: "WAITING_DEPENDENCY",
        reason: `Dependencies are neither current-run PASS nor attested PASS: ${missingDependencies.join(", ")}.`,
      });
      continue;
    }

    const attempts: PatchAttemptRecord[] = [];
    let retryContext: {
      output: NodePatchOutput;
      failure: { stage: "guard" | "test" | "reaudit" | "regression"; reason: string };
    } | undefined;
    let finalRecord: PatchRecord | undefined;

    for (let attempt = 1; attempt <= args.config.patchGenerationAttempts; attempt += 1) {
      const attemptId = `${args.runId}:patch:${sectionId}:attempt:${attempt}`;
      const attemptDirectory = path.join(scratchDirectory, sectionId, `attempt-${attempt}`);
      patchCalls += 1;
      let completion: CompletionResult | undefined;
      let output: NodePatchOutput;
      try {
        const findingPaths = new Set(resolved.output.findings.flatMap((finding) => finding.implementationRefs));
        const patchInputArtifact = {
          schemaVersion: "design-validation/patch-input/v2",
          runId: args.runId,
          targetId: input.run.targetId,
          sectionId,
          fingerprint: input.node.fingerprint,
          baseCommit: input.run.baseCommit,
          findings: resolved.output.findings,
          designIndexSource: input.contract.designIndexSource,
          specificationFragment: input.contract.specificationFragment,
          designIndexFragment: input.contract.designIndexFragment,
          evidence: input.evidence,
          files: input.implementation.files.filter((file) => findingPaths.has(file.path)),
          allowedWriteGlobs: input.policy.allowedWriteGlobs,
          payload: input.payload,
        };
        await writeJson(path.join(attemptDirectory, "patch-input.json"), patchInputArtifact);
        await writeJson(
          path.join(args.runDirectory, "nodes", sectionId, "patch-input.json"),
          patchInputArtifact,
        );
        completion = await args.client.completeJson({
          kind: "patch",
          sectionId,
          fingerprint: input.node.fingerprint,
          requestId: attemptId,
          systemPrompt: retryContext ? PATCH_RETRY_SYSTEM_PROMPT : PATCH_SYSTEM_PROMPT,
          userPrompt: retryContext
            ? patchRetryUserPrompt({
              auditInput: input,
              auditOutput: resolved.output,
              rejectedOutput: retryContext.output,
              failure: retryContext.failure,
            })
            : patchUserPrompt({ auditInput: input, auditOutput: resolved.output }),
          outputSchema: args.patchCandidateOutputSchema,
        });
        await writeJson(path.join(attemptDirectory, "api-response.json"), completion.raw);
        output = canonicalizePatchOutput({
          value: completion.parsed,
          auditInput: input,
          auditOutput: resolved.output,
        });
        assertPatchOutput(
          args.validatePatch,
          output,
          sectionId,
          input.node.fingerprint,
        );
        await writeJson(path.join(attemptDirectory, "output.json"), output);
        await writeJson(path.join(args.runDirectory, "nodes", sectionId, "patch-output.json"), output);
      } catch (error) {
        if (completion) {
          await writeJson(path.join(attemptDirectory, "output-invalid.json"), completion.parsed);
        }
        const attemptRecord: PatchAttemptRecord = {
          attempt,
          status: "BLOCKED_MODEL",
          reason: `Patch candidate ${attempt}/${args.config.patchGenerationAttempts} failed: ${errorMessage(error)}`,
        };
        attempts.push(attemptRecord);
        await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
        const rejectedOutput = completion
          ? rejectedPatchSummaryForRetry({
            value: completion.parsed,
            input,
            auditOutput: resolved.output,
          })
          : null;
        retryContext = rejectedOutput
          ? { output: rejectedOutput, failure: { stage: "guard", reason: errorMessage(error) } }
          : undefined;
        if (attempt < args.config.patchGenerationAttempts) continue;
        finalRecord = { sectionId, ...attemptRecord, attempts };
        break;
      }

      if (output.status !== "PATCH") {
        const attemptRecord: PatchAttemptRecord = {
          attempt,
          status: output.status,
          reason: `Patch candidate ${attempt}/${args.config.patchGenerationAttempts} returned ${output.status}: ${output.reason}`,
        };
        attempts.push(attemptRecord);
        await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
        finalRecord = { sectionId, ...attemptRecord, attempts };
        break;
      }

      let guarded: GuardedPatch;
      try {
        guarded = await guardPatch({
          config: args.config,
          manifest: args.manifest,
          auditInput: input,
          patchOutput: output,
          scratchDirectory: attemptDirectory,
        });
      } catch (error) {
        const reason = `Patch candidate ${attempt}/${args.config.patchGenerationAttempts} was rejected: ${errorMessage(error)}`;
        const attemptRecord: PatchAttemptRecord = { attempt, status: "BLOCKED_GUARD", reason };
        attempts.push(attemptRecord);
        await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
        if (attempt < args.config.patchGenerationAttempts && isRetryablePatchCandidateError(error)) {
          retryContext = { output, failure: { stage: "guard", reason: errorMessage(error) } };
          continue;
        }
        finalRecord = { sectionId, ...attemptRecord, attempts };
        break;
      }

      const conflicts = guarded.changedPaths.filter((changedPath) => claimedPaths.has(changedPath));
      await writeJson(path.join(args.runDirectory, "locks", `${sectionId}-attempt-${attempt}.json`), {
        schemaVersion: "design-validation/write-lock/v2",
        sectionId,
        attempt,
        writeSet: guarded.changedPaths,
        status: conflicts.length > 0 ? "BLOCKED_CONFLICT" : "ACQUIRED",
        conflicts,
      });
      if (conflicts.length > 0) {
        const attemptRecord: PatchAttemptRecord = {
          attempt,
          status: "BLOCKED_CONFLICT",
          reason: `Another verified patch in this run owns: ${conflicts.join(", ")}.`,
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        };
        attempts.push(attemptRecord);
        await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
        finalRecord = { sectionId, ...attemptRecord, attempts };
        break;
      }

      let worktree: Awaited<ReturnType<typeof createPatchedWorktree>>;
      try {
        worktree = await createPatchedWorktree(args.config, guarded);
      } catch (error) {
        const attemptRecord: PatchAttemptRecord = {
          attempt,
          status: "BLOCKED_GUARD",
          reason: `Unable to create an isolated patched worktree: ${errorMessage(error)}`,
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        };
        attempts.push(attemptRecord);
        await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
        finalRecord = { sectionId, ...attemptRecord, attempts };
        break;
      }

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
          await writeJson(path.join(args.runDirectory, "nodes", sectionId, "verification.json"), {
            checks: checks.map((check) => check.id),
            status: "PASS",
          });
        } catch (error) {
          const reason = errorMessage(error);
          const attemptRecord: PatchAttemptRecord = {
            attempt,
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
          originalConfig: args.config,
          worktreePath: worktree.path,
          triggerPath: args.triggerPath,
          runId: args.runId,
          manifest: args.manifest,
          contractSchemaHash: args.contractSchemaHash,
          changeEvent: args.changeEvent,
        });
        const nextInput = nextInputs.get(sectionId);
        if (!nextInput) throw new Error(`Patched input is missing ${sectionId}.`);
        const reaudit = await callAudit({
          client: args.client,
          input: nextInput,
          kind: "reaudit",
          requestId: `${args.runId}:reaudit:${sectionId}:attempt:${attempt}`,
          maxAttempts: args.config.auditAttempts,
          validate: args.validateAudit,
          outputSchema: args.auditOutputSchema,
          systemPrompt: PATCH_REAUDIT_SYSTEM_PROMPT,
          userPrompt: patchReauditUserPrompt({
            before: input,
            after: nextInput,
            auditOutput: resolved.output,
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
          const before = args.inputs.get(candidateId);
          const after = nextInputs.get(candidateId);
          const previousResult = args.resolved.get(candidateId);
          return (
            before !== undefined &&
            after !== undefined &&
            previousResult?.output.status === "PASS" &&
            before.node.fingerprint !== after.node.fingerprint
          );
        });
        const regressionResults = await runWithConcurrency(
          regressionSectionIds,
          args.config.nvidia.concurrency,
          async (regressionSectionId): Promise<AuditCallResult> => {
            const regressionInput = nextInputs.get(regressionSectionId);
            if (!regressionInput) {
              return {
                ok: false,
                sectionId: regressionSectionId,
                error: `Patched regression input is missing ${regressionSectionId}.`,
                attempts: [],
              };
            }
            const result = await callAudit({
              client: args.client,
              input: regressionInput,
              kind: "reaudit",
              requestId: `${args.runId}:regression:${sectionId}:attempt:${attempt}:${regressionSectionId}`,
              maxAttempts: args.config.auditAttempts,
              validate: args.validateAudit,
              outputSchema: args.auditOutputSchema,
              systemPrompt: REGRESSION_AUDIT_SYSTEM_PROMPT,
              userPrompt: regressionAuditUserPrompt({
                before: args.inputs.get(regressionSectionId)!,
                after: regressionInput,
                changedPaths: guarded.changedPaths,
              }),
            });
            await writeJson(
              path.join(attemptDirectory, "regressions", regressionSectionId, "before-input.json"),
              args.inputs.get(regressionSectionId),
            );
            await saveAuditCall(
              path.join(attemptDirectory, "regressions"),
              regressionInput,
              result,
            );
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

        for (const changedPath of guarded.changedPaths) claimedPaths.add(changedPath);
        if (!args.config.createPrs) {
          const attemptRecord: PatchAttemptRecord = {
            attempt,
            status: "PATCH_VERIFIED",
            reason: args.config.dryRun
              ? "Patch passed all guards and re-audits; dry-run prevented publication."
              : "Patch passed all guards and re-audits; PR creation is disabled.",
            patchHash: guarded.patchHash,
            changedPaths: guarded.changedPaths,
          };
          attempts.push(attemptRecord);
          await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
          finalRecord = { sectionId, ...attemptRecord, attempts };
          break;
        }

        try {
          const prKey = pullRequestKey({
            targetId: input.run.targetId,
            sectionId,
            fingerprint: input.node.fingerprint,
            patchHash: guarded.patchHash,
          });
          const affectedPassAttestations = SECTION_IDS
            .filter((candidateId) => candidateId !== sectionId)
            .filter((candidateId) => {
              const candidateInput = args.inputs.get(candidateId);
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
            targetId: input.run.targetId,
            sectionId,
            fingerprint: input.node.fingerprint,
            triggerSource: {
              path: input.contract.designIndexSource.path,
              documentHash: input.contract.designIndexSource.documentHash,
              sectionHeading: input.contract.designIndexSource.sectionHeading,
            },
            baseCommit: args.config.baseCommit,
            baseBranch: args.config.github.baseBranch,
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
          assertContract(args.validatePrManifest, prManifest, `${sectionId} PR manifest`);
          await writeJson(path.join(attemptDirectory, "pr-manifest.json"), prManifest);
          await writeJson(path.join(args.runDirectory, "nodes", sectionId, "pr-manifest.json"), prManifest);
          const pull = await publishPatchPullRequest({
            config: args.config,
            worktreePath: worktree.path,
            input,
            auditOutput: resolved.output,
            patch: guarded,
            manifest: prManifest,
            patchAttempt: attempt,
          });
          const attemptRecord: PatchAttemptRecord = {
            attempt,
            status: pull.reused ? "PR_REUSED" : "PR_CREATED",
            reason: pull.reused ? "Reused the existing idempotent draft PR." : "Created a verified draft PR.",
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
            unresolvedRequirementIds: resolved.output.findings
              .map((finding) => finding.requirementId)
              .filter((requirementId) => !output.requirementIds.includes(requirementId)),
            pullRequest: { number: pull.number, url: pull.url, branch: pull.branch },
          };
          break;
        } catch (error) {
          const attemptRecord: PatchAttemptRecord = {
            attempt,
            status: "FAILED_PUBLISH",
            reason: errorMessage(error),
            patchHash: guarded.patchHash,
            changedPaths: guarded.changedPaths,
          };
          attempts.push(attemptRecord);
          await writeJson(path.join(attemptDirectory, "attempt-result.json"), attemptRecord);
          finalRecord = { sectionId, ...attemptRecord, attempts };
          break;
        }
      } finally {
        await worktree.cleanup();
      }
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

  const inputs = await buildAuditInputs(
    effectiveConfig,
    args.manifest,
    args.specification,
    trigger,
    args.contractSchemaHash,
    runId,
    requestedAt,
    targetChangeEvent,
  );
  if (inputs.size !== 19 || SECTION_IDS.some((id) => !inputs.has(id))) {
    throw new Error("Audit fan-out manifest is not the exact S01-S19 set.");
  }
  for (const [sectionId, input] of inputs) {
    assertContract(args.validators.input, input, `${sectionId} audit input`);
    assertIsolatedAuditInput(input);
  }

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
        expectedFingerprint: scheduledInput.node.fingerprint,
      });
      const result = await callAudit({
        client: args.client,
        input: workspace.input,
        kind: "audit",
        requestId: `${runId}:audit:${sectionId}`,
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

  await writeJson(path.join(runDirectory, "audit-batch-manifest.json"), {
    schemaVersion: "design-validation/audit-batch/v2",
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
      requestId: `${runId}:audit:${sectionId}`,
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
  const nodeStates = SECTION_IDS.map((sectionId) => {
    const item = resolved.get(sectionId);
    if (!item) return { sectionId, state: "FAILED_SCHEMA" };
    if (item.status === "CACHED_PASS") return { sectionId, state: "CACHED_PASS" };
    const dependenciesPassing = inputs.get(sectionId)?.node.dependsOn.every(
      (dependencyId) => resolved.get(dependencyId)?.output.status === "PASS",
    ) ?? false;
    const state = item.output.status === "PASS"
      ? dependenciesPassing ? "PASS" : "PASS_PENDING_DEPENDENCY"
      : item.output.status === "PATCH_REQUIRED"
        ? dependenciesPassing ? "PATCH_REQUIRED" : "PATCH_WAITING_DEPENDENCY"
        : item.output.status;
    return { sectionId, state };
  });
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
      auditRequests: callResults.length,
      auditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
      patchCalls: 0,
      reauditCalls: 0,
      statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
      patchStatusCounts: {},
      nodes: buildNodeRunSummaries({
        manifest: args.manifest,
        inputs,
        outputs: orderedOutputs,
        nodeStates,
        auditAttempts: new Map(callResults.map((result) => [result.sectionId, result.attempts.length])),
        patches,
      }),
      patches,
      blocked: blockedNodes(orderedOutputs),
      errors: failures.map((failure) => `${failure.sectionId}: ${failure.error}`),
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
  });
  await writeJson(path.join(runDirectory, "patch-matrix.json"), patchResult.records);
  await writeGapReport(path.join(runDirectory, "GAP_REPORT.md"), orderedOutputs, patchResult.records);

  const summary: WorkRunSummary = {
    runId,
    targetId,
    triggerPath: trigger.path,
    mode,
    expectedSections: 19,
    cachedPasses: cached.size,
    auditRequests: callResults.length,
    auditCalls: callResults.reduce((count, result) => count + result.attempts.length, 0),
    patchCalls: patchResult.patchCalls,
    reauditCalls: patchResult.reauditCalls,
    statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
    patchStatusCounts: countStatuses(patchResult.records.map((record) => record.status)),
    nodes: buildNodeRunSummaries({
      manifest: args.manifest,
      inputs,
      outputs: orderedOutputs,
      nodeStates,
      auditAttempts: new Map(callResults.map((result) => [result.sectionId, result.attempts.length])),
      patches: patchResult.records,
    }),
    patches: patchResult.records,
    blocked: blockedNodes(orderedOutputs),
    errors: [
      ...callResults
        .filter((result): result is AuditCallSuccess => (
          result.ok &&
          result.output.status === "UNKNOWN" &&
          Boolean(result.completion.warning)
        ))
        .map((result) => `${result.sectionId}: provider/schema failures exhausted isolated audit retries; the final response was quarantined as UNKNOWN.`),
      ...patchResult.records
        .filter((record) => [
          "BLOCKED_MODEL",
          "BLOCKED_GUARD",
          "BLOCKED_CONFLICT",
          "FAILED_TEST",
          "FAILED_REAUDIT",
          "FAILED_PUBLISH",
        ].includes(record.status))
        .map((record) => `${record.sectionId}: ${record.status} - ${record.reason}`),
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

  const closedStalePullRequests = await reconcileStaleAutomationPullRequests(config);
  await writeJson(path.join(config.outputRoot, "change-event.json"), changeEvent);
  await writeJson(path.join(config.outputRoot, "stale-pr-reconciliation.json"), {
    baseCommit: config.baseCommit,
    closedPullRequests: closedStalePullRequests,
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

  const feedbackIssues = await publishActionableFeedbackIssues({
    config,
    summaries,
  });
  await publishNodeCheckRuns({
    config,
    summaries,
    feedbackIssues,
  });

  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = ["## DESIGN_INDEX validation", ""];
    for (const summary of summaries) {
      lines.push(
        `- **${summary.targetId}**: ${summary.cachedPasses} cached, ${summary.auditRequests} scheduled Section audits, ${summary.auditCalls} provider audit calls, ${summary.patchCalls} patch calls, ${summary.reauditCalls} re-audit calls`,
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
