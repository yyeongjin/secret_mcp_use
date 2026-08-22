import assert from "node:assert/strict";
import test from "node:test";
import {
  auditExecutionState,
  auditOutputNeedsIndependentRetry,
  blockedConflictContradictsExactFinding,
  callAudit,
  enforcePatchGrounding,
  groundOwnedNewImplementationPaths,
  incompletePatchSectionIds,
  nextPatchRequirementFindings,
  patchOutputNeedsIndependentRetry,
  rejectedPatchSummaryForRetry,
} from "../src/orchestrator.ts";
import { quarantineAuditOutput } from "../src/nvidia.ts";
import type { NvidiaClient } from "../src/nvidia.ts";
import type {
  NodeAuditInput,
  NodeAuditOutput,
  NodePatchOutput,
  Sha256,
} from "../src/types.ts";
import { SECTION_IDS } from "../src/types.ts";

const fingerprint = `sha256:${"1".repeat(64)}` as Sha256;

test("PATCH_REQUIRED is scheduled even when a DAG dependency is not PASS", () => {
  assert.equal(auditExecutionState("PATCH_REQUIRED", false), "PATCH_REQUIRED");
  assert.equal(auditExecutionState("PASS", false), "PASS_PENDING_DEPENDENCY");
});

function groundingInput(writes: string[]): NodeAuditInput {
  return {
    node: { sectionId: "S18", fingerprint },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: fingerprint,
        byteLength: 0,
        encoding: "utf8",
        content: "",
      }],
    },
    policy: { allowedWriteGlobs: writes },
  } as NodeAuditInput;
}

function patchRequired(implementationRefs: string[]): NodeAuditOutput {
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId: "S18",
    fingerprint,
    status: "PATCH_REQUIRED",
    findings: [{
      requirementId: "S18-TEST",
      pageId: null,
      componentId: null,
      status: "MISSING",
      finding: "A grounded implementation requirement is missing.",
      evidenceRefs: [],
      implementationRefs,
      proposedValue: null,
    }],
    publicOutput: {},
  };
}

test("a validation-only Section cannot enter the patch pipeline", () => {
  const result = enforcePatchGrounding(groundingInput([]), patchRequired([]));
  assert.equal(result.output.status, "BLOCKED_CONTRACT_CONFLICT");
  assert.match(result.warning ?? "", /without an owned application write path/);
});

test("PATCH_REQUIRED must identify a supplied file or a safe owned text file", () => {
  const missingReference = enforcePatchGrounding(
    groundingInput(["frontend/styles.css"]),
    patchRequired([]),
  );
  assert.equal(missingReference.output.status, "BLOCKED_MISSING_EVIDENCE");

  const valid = enforcePatchGrounding(
    groundingInput(["frontend/styles.css"]),
    patchRequired(["frontend/styles.css"]),
  );
  assert.equal(valid.output.status, "PATCH_REQUIRED");
  assert.equal(valid.warning, undefined);

  const newOwnedFile = enforcePatchGrounding(
    groundingInput(["frontend/tests/**"]),
    patchRequired(["frontend/tests/home.spec.ts"]),
  );
  assert.equal(newOwnedFile.output.status, "PATCH_REQUIRED");

  const unsafeNewFile = enforcePatchGrounding(
    groundingInput(["frontend/**"]),
    patchRequired(["frontend/../trigger/rewrite.md"]),
  );
  assert.equal(unsafeNewFile.output.status, "BLOCKED_MISSING_EVIDENCE");
});

test("an owned missing acceptance test receives a deterministic new implementation path", () => {
  const output = patchRequired([]);
  output.findings[0].finding = "No page-specific acceptance test files exist for the documented page.";
  const grounded = groundOwnedNewImplementationPaths(
    groundingInput(["frontend/tests/**"]),
    output,
  );
  assert.deepEqual(grounded.addedRequirementIds, ["S18-TEST"]);
  assert.deepEqual(
    grounded.output.findings[0].implementationRefs,
    ["frontend/tests/design-index-s18.spec.ts"],
  );
  assert.equal(enforcePatchGrounding(groundingInput(["frontend/tests/**"]), grounded.output).output.status, "PATCH_REQUIRED");
});

test("a DESIGN_INDEX documentation gap cannot become an application patch", () => {
  const output = patchRequired(["frontend/index.html"]);
  output.findings[0].finding = "Design Index section S11 lacks a specification table header.";
  const result = enforcePatchGrounding(groundingInput(["frontend/**"]), output);
  assert.equal(result.output.status, "BLOCKED_CONTRACT_CONFLICT");
  assert.match(result.warning ?? "", /DESIGN_INDEX or Specification gap/);
});

test("an UNKNOWN contract value cannot enter repeated patch generation", () => {
  const output = patchRequired(["frontend/styles.css"]);
  output.findings[0].finding = "The required font family is UNKNOWN and no value is provided.";
  const result = enforcePatchGrounding(groundingInput(["frontend/**"]), output);
  assert.equal(result.output.status, "BLOCKED_MISSING_EVIDENCE");
  assert.match(result.warning ?? "", /unknown or absent source value/);
});

test("an invalid PATCH response becomes bounded same-Section retry context", () => {
  const input = groundingInput(["frontend/styles.css"]);
  const auditOutput = patchRequired(["frontend/styles.css"]);
  const result = rejectedPatchSummaryForRetry({
    value: {
      status: "PATCH",
      addressedRequirementIds: ["S18-TEST"],
      reason: "The candidate had no changed lines.",
      diff: "diff --git a/frontend/styles.css b/frontend/styles.css\n",
    },
    input,
    auditOutput,
  });

  assert.equal(result?.sectionId, "S18");
  assert.equal(result?.status, "PATCH");
  assert.deepEqual(result?.requirementIds, ["S18-TEST"]);
  assert.deepEqual(result?.readSet, []);
  assert.deepEqual(result?.writeSet, []);
});

test("a transport-quarantined provider audit retries only the same isolated Section", async () => {
  const input = groundingInput([]);
  const requests: string[] = [];
  const pass = {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId: "S18",
    fingerprint,
    status: "PASS",
    findings: [],
    publicOutput: {},
  } satisfies NodeAuditOutput;
  const client = {
    async completeJson(args: { requestId: string }) {
      requests.push(args.requestId);
      const first = requests.length === 1;
      return {
        parsed: first ? quarantineAuditOutput("S18", fingerprint) : pass,
        raw: {},
        rawHash: fingerprint,
        requestId: args.requestId,
        usage: {},
      };
    },
  } as unknown as NvidiaClient;
  const validate = Object.assign((value: unknown) => typeof value === "object" && value !== null, {
    errors: null,
  });

  const result = await callAudit({
    client,
    input,
    kind: "audit",
    requestId: "run:audit:S18",
    maxAttempts: 3,
    validate: validate as never,
    outputSchema: {},
  });

  assert.equal(result.ok, true);
  assert.deepEqual(requests, ["run:audit:S18", "run:audit:S18:retry:2"]);
  assert.equal(result.attempts.length, 2);
  if (result.ok) assert.equal(result.output.status, "PASS");
});

test("a schema-valid model-owned UNKNOWN retries only the same isolated Section", async () => {
  const input = groundingInput([]);
  const requests: string[] = [];
  const client = {
    async completeJson(args: { requestId: string }) {
      requests.push(args.requestId);
      const output = requests.length < 3
        ? {
          ...quarantineAuditOutput("S18", fingerprint) as NodeAuditOutput,
          publicOutput: {},
        }
        : {
          schemaVersion: "design-validation/audit-output/v2",
          sectionId: "S18",
          fingerprint,
          status: "PASS",
          findings: [],
          publicOutput: {},
        } satisfies NodeAuditOutput;
      return {
        parsed: output,
        raw: {},
        rawHash: fingerprint,
        requestId: args.requestId,
        usage: {},
      };
    },
  } as unknown as NvidiaClient;
  const validate = Object.assign((value: unknown) => typeof value === "object" && value !== null, {
    errors: null,
  });

  const result = await callAudit({
    client,
    input,
    kind: "audit",
    requestId: "run:audit:S18",
    maxAttempts: 3,
    validate: validate as never,
    outputSchema: {},
  });

  assert.deepEqual(requests, [
    "run:audit:S18",
    "run:audit:S18:retry:2",
    "run:audit:S18:retry:3",
  ]);
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.output.status, "PASS");
});

test("ambiguous audit and blocked patch outputs require independent replacement candidates", () => {
  const audit = patchRequired(["frontend/styles.css"]);
  assert.equal(auditOutputNeedsIndependentRetry({ ...audit, status: "UNKNOWN" }), true);
  assert.equal(auditOutputNeedsIndependentRetry({ ...audit, status: "BLOCKED_MISSING_EVIDENCE" }), true);
  assert.equal(auditOutputNeedsIndependentRetry(audit), false);

  const patch = {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId: "S18",
    fingerprint,
    status: "BLOCKED_AUDIT_CONFLICT",
    requirementIds: [],
    evidenceRefs: [],
    readSet: [],
    writeSet: [],
    reason: "The first candidate disagreed with the audit.",
    diff: "",
  } satisfies NodePatchOutput;
  assert.equal(patchOutputNeedsIndependentRetry(patch), true);
  assert.equal(patchOutputNeedsIndependentRetry({ ...patch, status: "PATCH" }), false);
});

test("every PATCH_REQUIRED Section must publish a complete PR chain", () => {
  const complete = (sectionId: typeof SECTION_IDS[number]) => ({
    sectionId,
    status: "PR_CREATED" as const,
    reason: "published",
    addressedRequirementIds: [`${sectionId}-A`],
    unresolvedRequirementIds: [],
    pullRequest: { number: 1, url: "https://example.test/pr/1", branch: `auto/${sectionId}` },
    childPullRequests: [{
      patchNodeId: `${sectionId}-1`,
      parentPatchNodeId: null,
      number: 1,
      url: "https://example.test/pr/1",
      branch: `auto/${sectionId}`,
      baseBranch: "main",
      requirementIds: [`${sectionId}-A`],
    }],
    attempts: [],
  });
  assert.deepEqual(incompletePatchSectionIds({
    requiredSectionIds: [...SECTION_IDS],
    records: SECTION_IDS.map(complete),
    createPrs: true,
  }), []);
  assert.deepEqual(incompletePatchSectionIds({
    requiredSectionIds: [...SECTION_IDS],
    records: SECTION_IDS
      .filter((sectionId) => sectionId !== "S19")
      .map((sectionId) => sectionId === "S02"
        ? { ...complete(sectionId), unresolvedRequirementIds: ["S02-B"] }
        : complete(sectionId)),
    createPrs: true,
  }), ["S02", "S19"]);
  assert.deepEqual(incompletePatchSectionIds({
    requiredSectionIds: ["S03"],
    records: [{
      sectionId: "S03",
      status: "AUDIT_RECLASSIFIED",
      reason: "Independent child preflight proved the reported omission was already satisfied.",
      addressedRequirementIds: [],
      resolvedWithoutPatchRequirementIds: ["S03-A"],
      unresolvedRequirementIds: [],
      attempts: [],
    }],
    createPrs: true,
  }), []);
});

test("recursive patch children receive exactly one Requirement ID at a time", () => {
  const findings: NodeAuditOutput["findings"] = ["B", "A", "C"].map((suffix) => ({
    requirementId: `S09-${suffix}`,
    pageId: null,
    componentId: null,
    status: "MISSING",
    finding: `Missing ${suffix}`,
    evidenceRefs: [`trigger/DESIGN_INDEX_gdweb-26357.md#${suffix}`],
    implementationRefs: ["frontend/index.html"],
    proposedValue: null,
  }));

  assert.deepEqual(
    nextPatchRequirementFindings(findings, new Set()).map((finding) => finding.requirementId),
    ["S09-A"],
  );
  assert.deepEqual(
    nextPatchRequirementFindings(findings, new Set(["S09-A"])).map((finding) => finding.requirementId),
    ["S09-B"],
  );
  assert.deepEqual(
    nextPatchRequirementFindings(findings, new Set(["S09-A", "S09-B", "S09-C"])),
    [],
  );
});

test("an exact structural omission cannot be dismissed as an audit conflict", () => {
  const audit = patchRequired(["frontend/styles.css"]);
  audit.publicOutput = { exactContractRequirementIds: ["S18-TEST"] };
  const patch: NodePatchOutput = {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId: "S18",
    fingerprint,
    status: "BLOCKED_AUDIT_CONFLICT",
    requirementIds: [],
    evidenceRefs: [],
    readSet: [],
    writeSet: [],
    reason: "The base already satisfies it.",
    diff: "",
  };
  assert.equal(blockedConflictContradictsExactFinding(audit, patch), true);
  assert.equal(blockedConflictContradictsExactFinding({ ...audit, publicOutput: {} }, patch), false);
});
