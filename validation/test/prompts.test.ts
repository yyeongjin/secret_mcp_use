import assert from "node:assert/strict";
import test from "node:test";
import {
  AUDIT_SYSTEM_PROMPT,
  PATCH_CONFLICT_PREFLIGHT_SYSTEM_PROMPT,
  PATCH_PREFLIGHT_SYSTEM_PROMPT,
  PATCH_REAUDIT_SYSTEM_PROMPT,
  PATCH_SYSTEM_PROMPT,
  auditUserPrompt,
  patchConflictPreflightUserPrompt,
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

test("a grounded owned new test path is supplied as an empty synthetic file", () => {
  const input = {
    ...auditInput,
    node: { sectionId: "S18", fingerprint },
    implementation: { files: [] },
    policy: { maxChangedLines: 120, allowedWriteGlobs: ["frontend/tests/**"] },
  } as unknown as NodeAuditInput;
  const output = {
    ...auditOutput,
    sectionId: "S18",
    findings: [{
      ...auditOutput.findings[0],
      requirementId: "S18-TEST-001",
      implementationRefs: ["frontend/tests/design-index-s18.spec.ts"],
    }],
  } as NodeAuditOutput;
  const prompt = JSON.parse(patchUserPrompt({ auditInput: input, auditOutput: output })) as {
    files: Array<{ path: string; byteLength: number; content: string }>;
  };
  assert.deepEqual(prompt.files.map((file) => file.path), ["frontend/tests/design-index-s18.spec.ts"]);
  assert.equal(prompt.files[0].byteLength, 0);
  assert.equal(prompt.files[0].content, "");
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
  assert.deepEqual(prompt.files[0].targetLineHints, [
    { line: 1, text: "body { color: black; }" },
    { line: 2, text: "" },
  ]);
  assert.equal(prompt.maxDiffLines, 120);
});

test("patch hints include exact surrounding context for selectors and viewport values", () => {
  const content = [
    "@media (max-width: 1024px) {",
    "  .hero { height: 580px; }",
    "}",
    "",
    "@media (max-width: 768px) {",
    "  .main-container { width: calc(100% - 32px); }",
    "}",
    "",
  ].join("\n");
  const input = {
    ...auditInput,
    node: { sectionId: "S12", fingerprint },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: cssHash,
        byteLength: content.length,
        encoding: "utf8",
        content,
      }],
    },
  } as NodeAuditInput;
  const output = {
    ...auditOutput,
    sectionId: "S12",
    findings: [{
      ...auditOutput.findings[0],
      requirementId: "S12-CONTAINER-1024",
      componentId: "main-container",
      finding: "Main container width at 1024px should be `calc(100%-64px)`.",
    }],
  } as NodeAuditOutput;
  const prompt = JSON.parse(patchUserPrompt({ auditInput: input, auditOutput: output })) as {
    files: Array<{ targetLineHints: Array<{ line: number; text: string }> }>;
  };
  assert.ok(prompt.files[0].targetLineHints.some(({ line }) => line === 1));
  assert.ok(prompt.files[0].targetLineHints.some(({ line }) => line === 6));
});

test("a missing custom property receives the exact root declaration block as its insertion context", () => {
  const content = [
    "@layer tokens {",
    "  :root {",
    "    --color-primary: #4169f5;",
    "    --focus: 0 0 0 3px rgb(65 105 245 / 32%);",
    "    --ease: cubic-bezier(.2, .8, .2, 1);",
    "  }",
    "}",
    "",
    "@layer base {",
    "  body { min-width: 320px; }",
    "}",
    "",
  ].join("\n");
  const input = {
    ...auditInput,
    node: { sectionId: "S09", fingerprint },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: cssHash,
        byteLength: content.length,
        encoding: "utf8",
        content,
      }],
    },
  } as NodeAuditInput;
  const output = {
    ...auditOutput,
    sectionId: "S09",
    findings: [{
      ...auditOutput.findings[0],
      requirementId: "S09-BP-XL",
      componentId: "--bp-xl",
      finding: "Token `--bp-xl` with value `1280px` is required but missing.",
    }],
  } as NodeAuditOutput;
  const prompt = JSON.parse(patchUserPrompt({ auditInput: input, auditOutput: output })) as {
    files: Array<{ targetLineHints: Array<{ line: number; text: string }> }>;
  };
  const hints = prompt.files[0].targetLineHints;
  assert.ok(hints.some(({ text }) => text.includes(":root")));
  assert.ok(hints.some(({ text }) => text.includes("--focus")));
  assert.ok(hints.some(({ text }) => text.includes("--ease")));
  assert.equal(hints.some(({ text }) => text.includes("body {")), false);
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

test("patch conflict arbitration receives the candidate reason in a separate request", () => {
  assert.match(PATCH_CONFLICT_PREFLIGHT_SYSTEM_PROMPT, /max-width, margins, formulas/);
  const prompt = JSON.parse(patchConflictPreflightUserPrompt({
    auditInput,
    auditOutput,
    conflictOutput: {
      schemaVersion: "design-validation/patch-output/v2",
      sectionId: "S10",
      fingerprint,
      status: "BLOCKED_AUDIT_CONFLICT",
      requirementIds: [],
      evidenceRefs: [],
      readSet: [],
      writeSet: [],
      reason: "The max-width already computes the required outer gutter.",
      diff: "",
    },
  })) as {
    task: string;
    candidateConflict: { status: string; reason: string };
    requiredOutput: { ownedRequirementIds: string[] };
  };
  assert.equal(prompt.task, "independently-arbitrate-one-patch-audit-conflict");
  assert.match(prompt.candidateConflict.reason, /max-width/);
  assert.deepEqual(prompt.requiredOutput.ownedRequirementIds, ["S10-COLOR"]);
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
