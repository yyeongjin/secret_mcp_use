import assert from "node:assert/strict";
import test from "node:test";
import {
  buildNodeCheckOutput,
  buildPullRequestBody,
  needsFeedbackIssue,
  pullRequestTitle,
} from "../src/github.ts";
import type {
  NodeAuditInput,
  NodeAuditOutput,
  PullRequestManifest,
  Sha256,
} from "../src/types.ts";

const hash = `sha256:${"a".repeat(64)}` as Sha256;
const auditOutput: NodeAuditOutput = {
  schemaVersion: "design-validation/audit-output/v2",
  sectionId: "S05",
  fingerprint: hash,
  status: "PATCH_REQUIRED",
  findings: [{
    requirementId: "S05-NAV-ACTIVE-001",
    pageId: "P-01",
    componentId: "primary-navigation",
    status: "MISSING",
    finding: "The current navigation item does not expose the documented active state.",
    evidenceRefs: ["E-D01"],
    implementationRefs: ["frontend/index.html"],
    proposedValue: null,
  }],
  publicOutput: {},
};

const input = {
  run: { targetId: "target", baseCommit: "base" },
  node: { sectionId: "S05", fingerprint: hash },
} as NodeAuditInput;

const manifest: PullRequestManifest = {
  schemaVersion: "design-validation/pr-manifest/v2",
  prKey: hash,
  targetId: "target",
  sectionId: "S05",
  fingerprint: hash,
  triggerSource: {
    path: "trigger/DESIGN_INDEX_gdweb-26357.md",
    documentHash: hash,
    sectionHeading: "5. Navigation and Header",
  },
  baseCommit: "base",
  baseBranch: "main",
  requirementIds: ["S05-NAV-ACTIVE-001"],
  evidenceRefs: ["E-D01"],
  patchHash: hash,
  readSet: [{ path: "frontend/index.html", baseHash: hash }],
  writeSet: [{ path: "frontend/index.html", baseHash: hash }],
  affectedPassAttestations: [],
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
  runId: "run-123",
  runUrl: "https://example.test/run-123",
};

test("a code PR leads with exact feedback and the verified unified diff", () => {
  const body = buildPullRequestBody({
    input,
    auditOutput,
    patch: {
      sectionId: "S05",
      diff: [
        "diff --git a/frontend/index.html b/frontend/index.html",
        "--- a/frontend/index.html",
        "+++ b/frontend/index.html",
        "@@ -1 +1 @@",
        "-<a href=\"/games\">Games</a>",
        "+<a href=\"/games\" aria-current=\"page\">Games</a>",
        "",
      ].join("\n"),
      changedPaths: ["frontend/index.html"],
      additions: 1,
      deletions: 1,
      patchHash: hash,
    },
    manifest,
    patchAttempt: 3,
  });

  assert.match(body, /## Review findings/);
  assert.match(body, /The current navigation item does not expose the documented active state/);
  assert.match(body, /## Proposed code diff/);
  assert.match(body, /\+<a href="\/games" aria-current="page">Games<\/a>/);
  assert.match(body, /run-123:patch:S05:attempt:3/);
  assert.doesNotMatch(body, /attempt:<n>/);
  assert.equal(pullRequestTitle("S05", auditOutput), "fix(s05): address S05-NAV-ACTIVE-001 omission");
});

test("a blocked node publishes exact verbal feedback instead of an empty PR", () => {
  const node = {
    sectionId: "S05",
    name: "Navigation and Header",
    fingerprint: hash,
    auditStatus: "PATCH_REQUIRED",
    executionState: "PATCH_WAITING_DEPENDENCY",
    auditAttempts: 1,
    requirementIds: ["S05-NAV-ACTIVE-001"],
    findings: auditOutput.findings,
    patch: {
      status: "WAITING_DEPENDENCY",
      reason: "S04 has not passed.",
    },
  };
  assert.equal(needsFeedbackIssue(node), true);
  const output = buildNodeCheckOutput({
    summary: {
      runId: "run-123",
      targetId: "target",
      triggerPath: "trigger/DESIGN_INDEX_gdweb-26357.md",
      nodes: [node],
    },
    node,
    feedbackIssue: { number: 7, url: "https://example.test/issues/7" },
  });
  assert.match(output.text, /The current navigation item does not expose the documented active state/);
  assert.match(output.text, /S04 has not passed/);
  assert.match(output.summary, /issue #7/);
});

test("PASS nodes create neither feedback issues nor correction PR language", () => {
  const node = {
    sectionId: "S05",
    name: "Navigation and Header",
    fingerprint: hash,
    auditStatus: "PASS",
    executionState: "PASS",
    auditAttempts: 1,
    requirementIds: [],
    findings: [],
    patch: { status: "NOT_REQUIRED", reason: "PASS" },
  };
  assert.equal(needsFeedbackIssue(node), false);
  const output = buildNodeCheckOutput({
    summary: { runId: "run-123", targetId: "target", triggerPath: "trigger/input.md", nodes: [node] },
    node,
  });
  assert.match(output.summary, /No correction PR or feedback issue is required/);
});
