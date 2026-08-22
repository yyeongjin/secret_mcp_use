import assert from "node:assert/strict";
import test from "node:test";
import { augmentAuditWithExactCssFindings, buildPatchScope } from "../src/patch-scope.ts";
import type { NodeAuditInput, NodeAuditOutput, Sha256 } from "../src/types.ts";

const fingerprint = `sha256:${"1".repeat(64)}` as Sha256;

function finding(requirementId: string, property: string, value: string, alpha?: string) {
  return {
    requirementId,
    pageId: null,
    componentId: null,
    status: "MISSING" as const,
    finding: `Token \`${property}\` with value \`${value}\`${alpha ? ` and alpha \`${alpha}\`` : ""} is required but not found in the supplied CSS.`,
    evidenceRefs: [`${requirementId}-FACT`],
    implementationRefs: ["frontend/styles.css"],
    proposedValue: null,
  };
}

function auditInput(css: string): NodeAuditInput {
  return {
    node: { sectionId: "S09", fingerprint },
    contract: {
      designIndexFragment: [
        "## 9. Tokens",
        "",
        "| Token | Role |",
        "|---|---|",
        "| `--color-success` | Optional; not visible |",
        "",
        "```css",
        ":root {",
        "  --color-primary: #4169f5;",
        "  --color-primary-hover: #3157dd;",
        "  --color-primary-pressed: #2748be;",
        "  --color-overlay: rgb(0 0 0 / 52%);",
        "  --color-disabled: #bbb;",
        "}",
        "```",
      ].join("\n"),
    },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: fingerprint,
        byteLength: Buffer.byteLength(css),
        encoding: "utf8",
        content: css,
      }],
    },
  } as NodeAuditInput;
}

function auditOutput(): NodeAuditOutput {
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId: "S09",
    fingerprint,
    status: "PATCH_REQUIRED",
    findings: [
      finding("S09-PRIMARY", "--color-primary", "#4169F5"),
      finding("S09-HOVER", "--color-primary-hover", "#3157DD"),
      finding("S09-PRESSED", "--color-primary-pressed", "#2748BE"),
      finding("S09-OVERLAY", "--color-overlay", "#000000", ".52"),
      finding("S09-DISABLED", "--color-disabled", "#BBBBBB"),
      finding("S09-SUCCESS", "--color-success", "#1B7F4B"),
    ],
    publicOutput: {},
  };
}

test("patch scope keeps only exact contract tokens that are genuinely absent", () => {
  const result = buildPatchScope(auditInput([
    ":root {",
    "  --color-primary: #4169f5;",
    "  --color-primary-pressed: #2748be;",
    "  --color-overlay: rgb(0 0 0 / 52%);",
    "}",
  ].join("\n")), auditOutput());

  assert.deepEqual(result.includedRequirementIds, ["S09-HOVER", "S09-DISABLED"]);
  assert.deepEqual(result.excluded.map((item) => [item.requirementId, item.reason]), [
    ["S09-PRIMARY", "ALREADY_SATISFIED"],
    ["S09-PRESSED", "ALREADY_SATISFIED"],
    ["S09-OVERLAY", "ALREADY_SATISFIED"],
    ["S09-SUCCESS", "CONTRACT_NOT_PATCHABLE"],
  ]);
  assert.deepEqual(result.feedbackOutput.findings.map((item) => item.requirementId), [
    "S09-HOVER",
    "S09-DISABLED",
    "S09-SUCCESS",
  ]);
});

test("patch scope preserves a token finding when the implementation value is wrong", () => {
  const result = buildPatchScope(auditInput([
    ":root {",
    "  --color-primary: #000;",
    "  --color-primary-hover: #3157dd;",
    "  --color-primary-pressed: #2748be;",
    "  --color-overlay: rgb(0 0 0 / 52%);",
    "  --color-disabled: #bbb;",
    "}",
  ].join("\n")), auditOutput());

  assert.deepEqual(result.includedRequirementIds, ["S09-PRIMARY"]);
});

test("non-token findings remain in the isolated patch scope", () => {
  const output = auditOutput();
  output.findings = [{
    ...output.findings[0],
    requirementId: "S09-FOCUS",
    finding: "The required focus ring is missing from frontend/styles.css.",
  }];
  const result = buildPatchScope(auditInput(":root {}\n"), output);
  assert.deepEqual(result.includedRequirementIds, ["S09-FOCUS"]);
  assert.deepEqual(result.excluded, []);
});

test("exact CSS comparison adds a grounded finding for a referenced missing contract token", () => {
  const input = auditInput([
    ":root {",
    "  --color-primary: #4169f5;",
    "}",
    ".action:hover { background: var(--color-primary-hover); }",
  ].join("\n"));
  input.node.requirementIds = ["S09-REQ-HOVER"];
  input.payload = {
    sourceFacts: [{
      factId: "S09-FACT-HOVER",
      text: "--color-primary-hover: #3157dd;",
    }],
  };
  const pass = { ...auditOutput(), status: "PASS" as const, findings: [] };

  const result = augmentAuditWithExactCssFindings(input, pass);
  assert.deepEqual(result.addedRequirementIds, ["S09-REQ-HOVER"]);
  assert.equal(result.output.status, "PATCH_REQUIRED");
  assert.equal(result.output.findings[0].implementationRefs[0], "frontend/styles.css");
  assert.match(result.output.findings[0].finding, /--color-primary-hover/);
});

test("exact CSS comparison ignores unreferenced optional contract tokens", () => {
  const input = auditInput(":root { --color-primary: #4169f5; }\n");
  input.node.requirementIds = ["S09-REQ-DISABLED"];
  input.payload = {
    sourceFacts: [{ factId: "S09-FACT-DISABLED", text: "--color-disabled: #bbb;" }],
  };
  const pass = { ...auditOutput(), status: "PASS" as const, findings: [] };

  const result = augmentAuditWithExactCssFindings(input, pass);
  assert.deepEqual(result.addedRequirementIds, []);
  assert.equal(result.output.status, "PASS");
});

test("patch scope prefers one exact structural finding over vague duplicate token findings", () => {
  const input = auditInput([
    ":root {",
    "  --color-primary: #4169f5;",
    "  --color-primary-pressed: #2748be;",
    "}",
    ".action:hover { background: var(--color-primary-hover); }",
  ].join("\n"));
  const output = auditOutput();
  output.findings = [
    finding("S09-VAGUE-HOVER", "--color-primary-hover", "#3157DD"),
    {
      ...finding("S09-VAGUE-PRESSED", "--color-primary-pressed", "#2748BE"),
      finding: "Token --color-primary-pressed missing in :root",
    },
    finding("S09-EXACT-HOVER", "--color-primary-hover", "#3157DD"),
  ];
  output.findings[2].componentId = "--color-primary-hover";
  output.publicOutput = { exactContractRequirementIds: ["S09-EXACT-HOVER"] };

  const result = buildPatchScope(input, output);
  assert.deepEqual(result.includedRequirementIds, ["S09-EXACT-HOVER"]);
  assert.deepEqual(result.excluded.map((item) => [item.requirementId, item.reason]), [
    ["S09-VAGUE-HOVER", "DUPLICATE_EXACT_FINDING"],
    ["S09-VAGUE-PRESSED", "ALREADY_SATISFIED"],
  ]);
  assert.deepEqual(result.feedbackOutput.findings.map((item) => item.requirementId), ["S09-EXACT-HOVER"]);
});

test("PR feedback retains unresolved contract problems while omitting satisfied audit noise", () => {
  const output = auditOutput();
  output.findings = [
    finding("S09-PRIMARY", "--color-primary", "#4169F5"),
    finding("S09-SUCCESS", "--color-success", "#1B7F4B"),
  ];
  const result = buildPatchScope(auditInput(":root { --color-primary: #4169f5; }\n"), output);

  assert.deepEqual(result.includedRequirementIds, []);
  assert.deepEqual(result.feedbackOutput.findings.map((item) => item.requirementId), ["S09-SUCCESS"]);
  assert.deepEqual(result.excluded.map((item) => [item.requirementId, item.reason]), [
    ["S09-PRIMARY", "ALREADY_SATISFIED"],
    ["S09-SUCCESS", "CONTRACT_NOT_PATCHABLE"],
  ]);
});
