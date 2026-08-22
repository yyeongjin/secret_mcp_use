import assert from "node:assert/strict";
import test from "node:test";
import {
  AUDIT_SYSTEM_PROMPT,
  PATCH_PREFLIGHT_SYSTEM_PROMPT,
  PATCH_REAUDIT_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  auditUserPrompt,
  patchPreflightUserPrompt,
  patchReauditUserPrompt,
  patchRetryUserPrompt,
  patchUserPrompt,
} from "../src/prompts.ts";
import type { NodeAuditInput, NodeAuditOutput, NodePatchOutput, Sha256 } from "../src/types.ts";

const fingerprint = `sha256:${"1".repeat(64)}` as Sha256;
const cssHash = `sha256:${"2".repeat(64)}` as Sha256;
const htmlHash = `sha256:${"3".repeat(64)}` as Sha256;
const auditInput = {
  node: { sectionId: "S10", fingerprint },
  contract: {},
  evidence: [],
  implementation: {
    files: [
      {
        path: "frontend/index.html",
        contentHash: htmlHash,
        byteLength: 14,
        encoding: "utf8",
        content: "<main></main>\n",
      },
      {
        path: "frontend/styles.css",
        contentHash: cssHash,
        byteLength: 23,
        encoding: "utf8",
        content: "body { color: black; }\n",
      },
    ],
  },
  policy: { maxChangedLines: 120 },
} as unknown as NodeAuditInput;
const auditOutput = {
  findings: [{
    requirementId: "S10-COLOR",
    componentId: "body",
    finding: "The `body` color is missing.",
    evidenceRefs: [],
    implementationRefs: ["frontend/styles.css"],
  }],
} as unknown as NodeAuditOutput;

test("audit output requires exact repository paths instead of source excerpts", () => {
  assert.match(AUDIT_SYSTEM_PROMPT, /implementationRefs item is a repository-relative file path/);
  assert.match(AUDIT_SYSTEM_PROMPT, /Literal UNKNOWN, TBD, N\/A/);
  const prompt = JSON.parse(auditUserPrompt(auditInput)) as {
    implementationRefContract: { exactSuppliedPaths: string[]; forbiddenExamples: string[] };
  };
  assert.deepEqual(prompt.implementationRefContract.exactSuppliedPaths, [
    "frontend/index.html",
    "frontend/styles.css",
  ]);
  assert.ok(prompt.implementationRefContract.forbiddenExamples.includes("source excerpt"));
});

test("patch prompt includes only finding-referenced files and exact physical lines", () => {
  assert.match(PATCH_SYSTEM_PROMPT, /exactly the one supplied Requirement ID/);
  const prompt = JSON.parse(patchUserPrompt({ auditInput, auditOutput })) as {
    files: Array<{
      path: string;
      canonicalLines: Array<{ line: number; text: string }>;
      targetLineHints: Array<{ line: number; text: string }>;
    }>;
    maxDiffLines: number;
  };
  assert.deepEqual(prompt.files.map((file) => file.path), ["frontend/styles.css"]);
  assert.deepEqual(prompt.files[0].canonicalLines[0], { line: 1, text: "body { color: black; }" });
  assert.deepEqual(prompt.files[0].targetLineHints, [{ line: 1, text: "body { color: black; }" }]);
  assert.equal(prompt.maxDiffLines, 120);
});

test("patch preflight independently owns one Requirement ID", () => {
  assert.match(PATCH_PREFLIGHT_SYSTEM_PROMPT, /Do not trust the earlier PATCH_REQUIRED judgment/);
  const prompt = JSON.parse(patchPreflightUserPrompt({ auditInput, auditOutput })) as {
    requiredOutput: { ownedRequirementIds: string[] };
    claimedFinding: Array<{ requirementId: string }>;
    files: Array<{ path: string }>;
  };
  assert.deepEqual(prompt.requiredOutput.ownedRequirementIds, ["S10-COLOR"]);
  assert.deepEqual(prompt.claimedFinding.map((finding) => finding.requirementId), ["S10-COLOR"]);
  assert.deepEqual(prompt.files.map((file) => file.path), ["frontend/styles.css"]);
});

test("retry prompt carries a bounded rejection summary instead of the rejected diff", () => {
  const prompt = JSON.parse(patchRetryUserPrompt({
    auditInput,
    auditOutput,
    rejectedOutput: {
      status: "PATCH",
      requirementIds: ["S10-COLOR"],
      reason: "bad candidate",
      diff: "x".repeat(20_000),
    } as NodePatchOutput,
    failure: { stage: "guard", reason: "patch does not apply" },
  })) as Record<string, unknown>;
  assert.equal("rejectedOutput" in prompt, false);
  assert.deepEqual(prompt.rejectedCandidate, {
    status: "PATCH",
    addressedRequirementIds: ["S10-COLOR"],
    reason: "bad candidate",
    diffLength: 20_000,
  });
});

test("patch re-audit verifies only the Requirement IDs claimed by the diff", () => {
  assert.match(PATCH_REAUDIT_SYSTEM_PROMPT, /PASS is permitted only when every claimed finding/);
  const after = {
    ...auditInput,
    implementation: {
      ...auditInput.implementation,
      files: auditInput.implementation.files.map((file) => file.path === "frontend/styles.css"
        ? { ...file, content: "body { color: white; }\n" }
        : file),
    },
  } as NodeAuditInput;
  const prompt = JSON.parse(patchReauditUserPrompt({
    before: auditInput,
    after,
    auditOutput,
    patchOutput: {
      requirementIds: ["S10-COLOR"],
      writeSet: [{ path: "frontend/styles.css", baseHash: cssHash }],
    } as NodePatchOutput,
    diff: "+body { color: white; }",
  })) as {
    claimedRequirementIds: string[];
    claimedFindings: Array<{ requirementId: string }>;
    beforeImplementation: { files: Array<{ path: string }> };
  };
  assert.deepEqual(prompt.claimedRequirementIds, ["S10-COLOR"]);
  assert.deepEqual(prompt.claimedFindings.map((finding) => finding.requirementId), ["S10-COLOR"]);
  assert.deepEqual(prompt.beforeImplementation.files.map((file) => file.path), ["frontend/styles.css"]);
});
