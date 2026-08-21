import { appendFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { createFreshAttestations, resolveCachedPasses } from "./cache.ts";
import { sha256 } from "./hash.ts";
import { publishPatchPullRequest } from "./github.ts";
import {
  buildAuditInputs,
  modelContractHash,
  targetIdFor,
  validatorContractHash,
} from "./input.ts";
import { readImpactManifest, topologicalSections } from "./manifest.ts";
import { readSpecification, readTrigger } from "./markdown.ts";
import {
  NvidiaClient,
  quarantineAuditOutput,
  runWithConcurrency,
  type CompletionResult,
} from "./nvidia.ts";
import {
  guardPatch,
  isRepairablePatchFormatError,
  normalizeUnifiedDiffMechanics,
  type GuardedPatch,
} from "./patch.ts";
import {
  AUDIT_SYSTEM_PROMPT,
  PATCH_REPAIR_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  auditUserPrompt,
  patchRepairUserPrompt,
  patchUserPrompt,
} from "./prompts.ts";
import {
  assertAuditOutput,
  assertPatchOutput,
  loadValidators,
  type JsonSchema,
} from "./schema.ts";
import type {
  FreshNode,
  NodeAuditInput,
  NodeAuditOutput,
  NodePatchOutput,
  PassAttestation,
  PipelineConfig,
  ResolvedNode,
  SectionId,
} from "./types.ts";
import { SECTION_IDS } from "./types.ts";
import { createPatchedWorktree, verifyPatchedWorktree } from "./worktree.ts";

interface AuditCallSuccess {
  ok: true;
  sectionId: SectionId;
  completion: CompletionResult;
  output: NodeAuditOutput;
}

interface AuditCallFailure {
  ok: false;
  sectionId: SectionId;
  error: string;
  completion?: CompletionResult;
}

type AuditCallResult = AuditCallSuccess | AuditCallFailure;

interface PatchRecord {
  sectionId: SectionId;
  status:
    | "NOT_REQUIRED"
    | "WAITING_DEPENDENCY"
    | "VALIDATION_ONLY"
    | "BLOCKED_MODEL"
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
  pullRequest?: { number: number; url: string; branch: string };
}

interface WorkRunSummary {
  runId: string;
  targetId: string;
  triggerPath: string;
  mode: "full" | "incremental" | "forced-full";
  expectedSections: number;
  cachedPasses: number;
  auditCalls: number;
  patchCalls: number;
  reauditCalls: number;
  statusCounts: Record<string, number>;
  patchStatusCounts: Record<string, number>;
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

function countStatuses(values: string[]): Record<string, number> {
  return values.reduce<Record<string, number>>((counts, status) => {
    counts[status] = (counts[status] ?? 0) + 1;
    return counts;
  }, {});
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

async function callAudit(args: {
  client: NvidiaClient;
  input: NodeAuditInput;
  kind: "audit" | "reaudit";
  requestId: string;
  validate: Parameters<typeof assertAuditOutput>[0];
  outputSchema: JsonSchema;
}): Promise<AuditCallResult> {
  const sectionId = args.input.node.sectionId;
  let completion: CompletionResult;
  try {
    completion = await args.client.completeJson({
      kind: args.kind,
      sectionId,
      fingerprint: args.input.node.fingerprint,
      requestId: args.requestId,
      systemPrompt: AUDIT_SYSTEM_PROMPT,
      userPrompt: auditUserPrompt(args.input),
      outputSchema: args.outputSchema,
    });
  } catch (error) {
    return { ok: false, sectionId, error: errorMessage(error) };
  }
  try {
    assertAuditOutput(
      args.validate,
      completion.parsed,
      sectionId,
      args.input.node.fingerprint,
    );
    return { ok: true, sectionId, completion, output: completion.parsed };
  } catch (error) {
    const warning = `${errorMessage(error)} The response was quarantined as UNKNOWN.`;
    const output = quarantineAuditOutput(sectionId, args.input.node.fingerprint);
    assertAuditOutput(args.validate, output, sectionId, args.input.node.fingerprint);
    return {
      ok: true,
      sectionId,
      completion: { ...completion, parsed: output, warning },
      output,
    };
  }
}

async function saveAuditCall(
  nodesDirectory: string,
  input: NodeAuditInput,
  result: AuditCallResult,
): Promise<void> {
  const nodeDirectory = path.join(nodesDirectory, input.node.sectionId);
  await mkdir(nodeDirectory, { recursive: true });
  await writeJson(path.join(nodeDirectory, "audit-input.json"), input);
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

async function patchedInputs(args: {
  originalConfig: PipelineConfig;
  worktreePath: string;
  triggerPath: string;
  runId: string;
  manifest: Awaited<ReturnType<typeof readImpactManifest>>;
  auditSchemaHash: ReturnType<typeof sha256>;
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
    args.auditSchemaHash,
    `${args.runId}:patched`,
    new Date().toISOString(),
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
  patchOutputSchema: JsonSchema;
  auditOutputSchema: JsonSchema;
  auditSchemaHash: ReturnType<typeof sha256>;
  runDirectory: string;
  triggerPath: string;
  runId: string;
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

    const patchRequestId = `${args.runId}:patch:${sectionId}`;
    patchCalls += 1;
    let patchCompletion: CompletionResult;
    let patchOutput: NodePatchOutput;
    try {
      patchCompletion = await args.client.completeJson({
        kind: "patch",
        sectionId,
        fingerprint: input.node.fingerprint,
        requestId: patchRequestId,
        systemPrompt: PATCH_SYSTEM_PROMPT,
        userPrompt: patchUserPrompt({ auditInput: input, auditOutput: resolved.output }),
        outputSchema: args.patchOutputSchema,
      });
      assertPatchOutput(
        args.validatePatch,
        patchCompletion.parsed,
        sectionId,
        input.node.fingerprint,
      );
      patchOutput = patchCompletion.parsed;
      await writeJson(path.join(scratchDirectory, sectionId, "patch-api-response.json"), patchCompletion.raw);
      await writeJson(path.join(scratchDirectory, sectionId, "patch-output.json"), patchOutput);
    } catch (error) {
      records.push({ sectionId, status: "BLOCKED_MODEL", reason: errorMessage(error) });
      continue;
    }
    if (patchOutput.status !== "PATCH") {
      records.push({ sectionId, status: "BLOCKED_MODEL", reason: patchOutput.reason });
      continue;
    }
    const normalizedInitialDiff = normalizeUnifiedDiffMechanics(patchOutput.diff);
    if (normalizedInitialDiff !== patchOutput.diff) {
      patchOutput = { ...patchOutput, diff: normalizedInitialDiff };
      await writeJson(
        path.join(scratchDirectory, sectionId, "patch-normalized-output.json"),
        patchOutput,
      );
    }

    let guarded: GuardedPatch;
    try {
      guarded = await guardPatch({
        config: args.config,
        manifest: args.manifest,
        auditInput: input,
        patchOutput,
        scratchDirectory,
      });
    } catch (error) {
      const initialGuardError = errorMessage(error);
      if (!isRepairablePatchFormatError(error)) {
        records.push({ sectionId, status: "BLOCKED_GUARD", reason: initialGuardError });
        continue;
      }

      patchCalls += 1;
      let repairCompletion: CompletionResult;
      let repairOutput: NodePatchOutput;
      try {
        repairCompletion = await args.client.completeJson({
          kind: "patch",
          sectionId,
          fingerprint: input.node.fingerprint,
          requestId: `${patchRequestId}:repair:1`,
          systemPrompt: PATCH_REPAIR_SYSTEM_PROMPT,
          userPrompt: patchRepairUserPrompt({
            auditInput: input,
            auditOutput: resolved.output,
            rejectedOutput: patchOutput,
            guardError: initialGuardError,
          }),
          outputSchema: args.patchOutputSchema,
        });
        assertPatchOutput(
          args.validatePatch,
          repairCompletion.parsed,
          sectionId,
          input.node.fingerprint,
        );
        repairOutput = repairCompletion.parsed;
        await writeJson(
          path.join(scratchDirectory, sectionId, "patch-repair-api-response.json"),
          repairCompletion.raw,
        );
        await writeJson(
          path.join(scratchDirectory, sectionId, "patch-repair-output.json"),
          repairOutput,
        );
      } catch (repairError) {
        records.push({
          sectionId,
          status: "BLOCKED_MODEL",
          reason: `Unified-diff syntax repair request failed: ${errorMessage(repairError)}`,
        });
        continue;
      }
      if (repairOutput.status !== "PATCH") {
        records.push({
          sectionId,
          status: "BLOCKED_MODEL",
          reason: `Unified-diff syntax repair declined: ${repairOutput.reason}`,
        });
        continue;
      }
      const normalizedRepairDiff = normalizeUnifiedDiffMechanics(repairOutput.diff);
      if (normalizedRepairDiff !== repairOutput.diff) {
        repairOutput = { ...repairOutput, diff: normalizedRepairDiff };
        await writeJson(
          path.join(scratchDirectory, sectionId, "patch-repair-normalized-output.json"),
          repairOutput,
        );
      }
      patchOutput = repairOutput;
      try {
        guarded = await guardPatch({
          config: args.config,
          manifest: args.manifest,
          auditInput: input,
          patchOutput,
          scratchDirectory,
        });
      } catch (repairGuardError) {
        records.push({
          sectionId,
          status: "BLOCKED_GUARD",
          reason: `Initial diff syntax error: ${initialGuardError} One repair attempt was rejected: ${errorMessage(repairGuardError)}`,
        });
        continue;
      }
    }
    const conflicts = guarded.changedPaths.filter((changedPath) => claimedPaths.has(changedPath));
    if (conflicts.length > 0) {
      records.push({
        sectionId,
        status: "BLOCKED_CONFLICT",
        reason: `Another patch in this run owns: ${conflicts.join(", ")}.`,
        patchHash: guarded.patchHash,
        changedPaths: guarded.changedPaths,
      });
      continue;
    }

    const worktree = await createPatchedWorktree(args.config, guarded);
    try {
      try {
        const checks = await verifyPatchedWorktree(args.config, worktree.path);
        await writeJson(path.join(scratchDirectory, sectionId, "verification.json"), checks);
      } catch (error) {
        records.push({
          sectionId,
          status: "FAILED_TEST",
          reason: errorMessage(error),
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        });
        continue;
      }

      const nextInputs = await patchedInputs({
        originalConfig: args.config,
        worktreePath: worktree.path,
        triggerPath: args.triggerPath,
        runId: args.runId,
        manifest: args.manifest,
        auditSchemaHash: args.auditSchemaHash,
      });
      const nextInput = nextInputs.get(sectionId);
      if (!nextInput) throw new Error(`Patched input is missing ${sectionId}.`);
      reauditCalls += 1;
      const reaudit = await callAudit({
        client: args.client,
        input: nextInput,
        kind: "reaudit",
        requestId: `${args.runId}:reaudit:${sectionId}`,
        validate: args.validateAudit,
        outputSchema: args.auditOutputSchema,
      });
      await saveAuditCall(path.join(scratchDirectory, sectionId, "reaudit"), nextInput, reaudit);
      if (!reaudit.ok || reaudit.output.status !== "PASS") {
        records.push({
          sectionId,
          status: "FAILED_REAUDIT",
          reason: reaudit.ok ? `Patched code remained ${reaudit.output.status}.` : reaudit.error,
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        });
        continue;
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
            };
          }
          const result = await callAudit({
            client: args.client,
            input: regressionInput,
            kind: "reaudit",
            requestId: `${args.runId}:regression:${sectionId}:${regressionSectionId}`,
            validate: args.validateAudit,
            outputSchema: args.auditOutputSchema,
          });
          await saveAuditCall(
            path.join(scratchDirectory, sectionId, "regressions"),
            regressionInput,
            result,
          );
          return result;
        },
      );
      reauditCalls += regressionResults.length;
      const regressionFailures = regressionResults.filter(
        (result) => !result.ok || result.output.status !== "PASS",
      );
      if (regressionFailures.length > 0) {
        records.push({
          sectionId,
          status: "FAILED_REAUDIT",
          reason: `Patch regressed previously PASS Sections: ${regressionFailures
            .map((result) => result.sectionId)
            .join(", ")}.`,
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        });
        continue;
      }

      for (const changedPath of guarded.changedPaths) claimedPaths.add(changedPath);
      if (!args.config.createPrs) {
        records.push({
          sectionId,
          status: "PATCH_VERIFIED",
          reason: args.config.dryRun
            ? "Patch passed all guards and re-audit; dry-run prevented publication."
            : "Patch passed all guards; PR creation is disabled.",
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        });
        continue;
      }

      let pull: Awaited<ReturnType<typeof publishPatchPullRequest>>;
      try {
        pull = await publishPatchPullRequest({
          config: args.config,
          worktreePath: worktree.path,
          input,
          patch: guarded,
        });
      } catch (error) {
        records.push({
          sectionId,
          status: "FAILED_PUBLISH",
          reason: errorMessage(error),
          patchHash: guarded.patchHash,
          changedPaths: guarded.changedPaths,
        });
        continue;
      }
      records.push({
        sectionId,
        status: pull.reused ? "PR_REUSED" : "PR_CREATED",
        reason: pull.reused ? "Reused the existing idempotent draft PR." : "Created a verified draft PR.",
        patchHash: guarded.patchHash,
        changedPaths: guarded.changedPaths,
        pullRequest: { number: pull.number, url: pull.url, branch: pull.branch },
      });
    } finally {
      await worktree.cleanup();
    }
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
  auditSchemaHash: ReturnType<typeof sha256>;
}): Promise<WorkRunSummary> {
  const trigger = await readTrigger(args.config.repositoryRoot, args.triggerPath);
  const runId = safeRunId(trigger.referenceId);
  const runDirectory = path.join(args.config.outputRoot, "runs", runId);
  const nodesDirectory = path.join(runDirectory, "nodes");
  const requestedAt = new Date().toISOString();
  await mkdir(nodesDirectory, { recursive: true });

  const inputs = await buildAuditInputs(
    args.config,
    args.manifest,
    args.specification,
    trigger,
    args.auditSchemaHash,
    runId,
    requestedAt,
  );
  if (inputs.size !== 19 || SECTION_IDS.some((id) => !inputs.has(id))) {
    throw new Error("Audit fan-out manifest is not the exact S01-S19 set.");
  }

  const contractHash = validatorContractHash(
    args.config,
    args.manifest,
    args.auditSchemaHash,
  );
  const cached = await resolveCachedPasses(args.config, args.manifest, inputs, contractHash);
  const pending = SECTION_IDS.filter((sectionId) => !cached.has(sectionId));
  const mode = args.config.forceFullAudit
    ? "forced-full"
    : cached.size === 0
      ? "full"
      : "incremental";
  await writeJson(path.join(runDirectory, "audit-batch-manifest.json"), {
    schemaVersion: "design-validation/audit-batch/v2",
    runId,
    targetId: targetIdFor(args.config.repository, trigger.referenceId),
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
      status: cached.has(sectionId) ? "CACHED_PASS" : "PENDING",
      inputPath: `nodes/${sectionId}/audit-input.json`,
      outputPath: `nodes/${sectionId}/audit-output.json`,
    })),
  });

  for (const sectionId of SECTION_IDS) {
    const input = inputs.get(sectionId);
    if (!input) throw new Error(`Missing ${sectionId} input.`);
    await writeJson(path.join(nodesDirectory, sectionId, "audit-input.json"), input);
    const cachedNode = cached.get(sectionId);
    if (cachedNode) {
      await writeJson(path.join(nodesDirectory, sectionId, "audit-output.json"), cachedNode.output);
      await writeJson(path.join(nodesDirectory, sectionId, "cache-hit.json"), {
        status: "CACHED_PASS",
        fingerprint: input.node.fingerprint,
        attestationHash: cachedNode.attestation.attestationHash,
      });
    }
  }

  const callResults = await runWithConcurrency(
    pending,
    args.config.nvidia.concurrency,
    async (sectionId): Promise<AuditCallResult> => {
      const input = inputs.get(sectionId);
      if (!input) return { ok: false, sectionId, error: `Missing ${sectionId} input.` };
      const result = await callAudit({
        client: args.client,
        input,
        kind: "audit",
        requestId: `${runId}:audit:${sectionId}`,
        validate: args.validators.audit,
        outputSchema: args.validators.auditSchema,
      });
      await saveAuditCall(nodesDirectory, input, result);
      return result;
    },
  );

  const failures = callResults.filter((result): result is AuditCallFailure => !result.ok);
  const resolved = new Map<SectionId, ResolvedNode>();
  for (const [sectionId, item] of cached) resolved.set(sectionId, item);
  for (const result of callResults) {
    if (!result.ok) continue;
    const fresh: FreshNode = {
      status: "FRESH",
      output: result.output,
      rawResponseHash: result.completion.rawHash,
    };
    resolved.set(result.sectionId, fresh);
  }

  const orderedOutputs = SECTION_IDS.map((sectionId) => resolved.get(sectionId)?.output).filter(
    (output): output is NodeAuditOutput => output !== undefined,
  );
  await writeJson(path.join(runDirectory, "audit-matrix.json"), {
    schemaVersion: "design-validation/audit-matrix/v2",
    runId,
    sections: orderedOutputs,
    errors: failures,
  });
  await writeJson(
    path.join(runDirectory, "gap-report.json"),
    orderedOutputs.flatMap((output) => output.findings).sort((a, b) => a.requirementId.localeCompare(b.requirementId)),
  );

  if (failures.length > 0 || resolved.size !== 19) {
    await writeGapReport(path.join(runDirectory, "GAP_REPORT.md"), orderedOutputs, []);
    return {
      runId,
      targetId: targetIdFor(args.config.repository, trigger.referenceId),
      triggerPath: trigger.path,
      mode,
      expectedSections: 19,
      cachedPasses: cached.size,
      auditCalls: pending.length,
      patchCalls: 0,
      reauditCalls: 0,
      statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
      patchStatusCounts: {},
      errors: failures.map((failure) => `${failure.sectionId}: ${failure.error}`),
    };
  }

  const attestations = await createFreshAttestations({
    config: args.config,
    manifest: args.manifest,
    inputs,
    resolved,
    validatorContractHash: contractHash,
    outputDirectory: path.join(args.config.outputRoot, "attestations"),
  });

  const patchResult = await runPatches({
    config: args.config,
    client: args.client,
    manifest: args.manifest,
    inputs,
    resolved,
    attestations,
    validatePatch: args.validators.patch,
    validateAudit: args.validators.audit,
    patchOutputSchema: args.validators.patchSchema,
    auditOutputSchema: args.validators.auditSchema,
    auditSchemaHash: args.auditSchemaHash,
    runDirectory,
    triggerPath: trigger.path,
    runId,
  });
  await writeJson(path.join(runDirectory, "patch-matrix.json"), patchResult.records);
  await writeGapReport(path.join(runDirectory, "GAP_REPORT.md"), orderedOutputs, patchResult.records);

  const summary: WorkRunSummary = {
    runId,
    targetId: targetIdFor(args.config.repository, trigger.referenceId),
    triggerPath: trigger.path,
    mode,
    expectedSections: 19,
    cachedPasses: cached.size,
    auditCalls: pending.length,
    patchCalls: patchResult.patchCalls,
    reauditCalls: patchResult.reauditCalls,
    statusCounts: countStatuses(orderedOutputs.map((output) => output.status)),
    patchStatusCounts: countStatuses(patchResult.records.map((record) => record.status)),
    errors: [],
  };
  await writeJson(path.join(runDirectory, "batch-summary.json"), summary);
  return summary;
}

export async function runPipeline(config: PipelineConfig): Promise<WorkRunSummary[]> {
  assertSafeOutputRoot(config);
  await rm(config.outputRoot, { recursive: true, force: true });
  await mkdir(config.outputRoot, { recursive: true });

  const specification = await readSpecification(config.repositoryRoot, config.specificationPath);
  const manifest = await readImpactManifest(config.repositoryRoot, config.impactManifestPath);
  const validators = await loadValidators(config);
  const auditSchemaHash = sha256(validators.auditSchemaBytes);
  const client = new NvidiaClient(config);
  const summaries: WorkRunSummary[] = [];

  for (const triggerPath of config.triggerPaths) {
    summaries.push(
      await runTrigger({
        config,
        client,
        triggerPath,
        specification,
        manifest,
        validators,
        auditSchemaHash,
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
    validatorContractHash: validatorContractHash(config, manifest, auditSchemaHash),
    modelContractHash: modelContractHash(config),
    mock: config.mock,
    dryRun: config.dryRun,
    createPrs: config.createPrs,
    summaries,
  });

  if (process.env.GITHUB_STEP_SUMMARY) {
    const lines = ["## DESIGN_INDEX validation", ""];
    for (const summary of summaries) {
      lines.push(
        `- **${summary.targetId}**: ${summary.cachedPasses} cached, ${summary.auditCalls} audit calls, ${summary.patchCalls} patch calls, ${summary.reauditCalls} re-audit calls`,
      );
      if (summary.errors.length > 0) {
        for (const error of summary.errors) lines.push(`  - Error: ${error}`);
      }
    }
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `${lines.join("\n")}\n`, "utf8");
  }
  return summaries;
}
