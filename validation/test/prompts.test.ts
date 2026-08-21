import assert from "node:assert/strict";
import test from "node:test";
import { patchRetryUserPrompt, patchUserPrompt } from "../src/prompts.ts";
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
    evidenceRefs: [],
    implementationRefs: ["frontend/styles.css"],
  }],
} as unknown as NodeAuditOutput;

test("patch prompt includes only finding-referenced files and exact physical lines", () => {
  const prompt = JSON.parse(patchUserPrompt({ auditInput, auditOutput })) as {
    files: Array<{ path: string; canonicalLines: Array<{ line: number; text: string }> }>;
    maxDiffLines: number;
  };
  assert.deepEqual(prompt.files.map((file) => file.path), ["frontend/styles.css"]);
  assert.deepEqual(prompt.files[0].canonicalLines[0], { line: 1, text: "body { color: black; }" });
  assert.equal(prompt.maxDiffLines, 160);
});

test("retry prompt carries a bounded rejection summary instead of the rejected diff", () => {
  const prompt = JSON.parse(patchRetryUserPrompt({
    auditInput,
    auditOutput,
    rejectedOutput: {
      status: "PATCH",
      reason: "bad candidate",
      diff: "x".repeat(20_000),
    } as NodePatchOutput,
    failure: { stage: "guard", reason: "patch does not apply" },
  })) as Record<string, unknown>;
  assert.equal("rejectedOutput" in prompt, false);
  assert.deepEqual(prompt.rejectedCandidate, {
    status: "PATCH",
    reason: "bad candidate",
    diffLength: 20_000,
  });
});
