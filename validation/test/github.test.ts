import assert from "node:assert/strict";
import test from "node:test";
import { sha256 } from "../src/hash.ts";
import {
  buildNodeCheckOutput,
  buildPullRequestBody,
  isReusableFeedbackIssue,
  isAutomationPullRequestForBase,
  needsFeedbackIssue,
  pullRequestTitle,
  stalePullRequestNotice,
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

test("a new run never reopens a closed feedback issue", () => {
  const targetId = "target";
  const sectionId = "S05";
  const body = `<!-- design-validation-feedback-key: ${sha256(`design-validation-feedback:${targetId}:${sectionId}`)} -->`;
  const openIssue = {
    state: "open",
    body,
  };
  const closedIssue = {
    state: "closed",
    body,
  };

  assert.equal(isReusableFeedbackIssue(openIssue, targetId, sectionId), true);
  assert.equal(isReusableFeedbackIssue(closedIssue, targetId, sectionId), false);
});

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

  assert.match(body, /## Corrected by this diff/);
  assert.match(body, /The current navigation item does not expose the documented active state/);
  assert.match(body, /## Proposed code diff/);
  assert.match(body, /\+<a href="\/games" aria-current="page">Games<\/a>/);
  assert.match(body, /run-123:patch:S05:attempt:3/);
  assert.doesNotMatch(body, /attempt:<n>/);
  assert.equal(pullRequestTitle("S05", auditOutput), "fix(s05): address S05-NAV-ACTIVE-001 omission");
});

test("a partial correction separates the verified diff from unresolved feedback", () => {
  const secondFinding = {
    ...auditOutput.findings[0],
    requirementId: "S05-NAV-FOCUS-002",
    finding: "The navigation focus ring is missing.",
  };
  const body = buildPullRequestBody({
    input,
    auditOutput: { ...auditOutput, findings: [...auditOutput.findings, secondFinding] },
    patch: {
      sectionId: "S05",
      diff: "diff --git a/frontend/index.html b/frontend/index.html\n--- a/frontend/index.html\n+++ b/frontend/index.html\n@@ -1 +1 @@\n-old\n+new\n",
      changedPaths: ["frontend/index.html"],
      additions: 1,
      deletions: 1,
      patchHash: hash,
    },
    manifest,
    patchAttempt: 1,
  });
  assert.match(body, /## Corrected by this diff[\s\S]*S05-NAV-ACTIVE-001/);
  assert.match(body, /## Remaining audit feedback \(not changed by this PR\)[\s\S]*S05-NAV-FOCUS-002/);
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

test("a partial PR still requires a feedback issue for unresolved Requirement IDs", () => {
  const node = {
    sectionId: "S13",
    name: "Interaction and Motion",
    fingerprint: hash,
    auditStatus: "PATCH_REQUIRED",
    executionState: "PATCH_REQUIRED",
    auditAttempts: 1,
    requirementIds: ["S13-A", "S13-B"],
    findings: [
      { ...auditOutput.findings[0], requirementId: "S13-A" },
      { ...auditOutput.findings[0], requirementId: "S13-B" },
    ],
    patch: {
      status: "PR_CREATED",
      reason: "Created a verified partial PR.",
      addressedRequirementIds: ["S13-A"],
      unresolvedRequirementIds: ["S13-B"],
      pullRequest: { number: 13, url: "https://example.test/pull/13", branch: "auto/s13" },
    },
  };
  assert.equal(needsFeedbackIssue(node), true);
  const output = buildNodeCheckOutput({
    summary: { runId: "run-123", targetId: "target", triggerPath: "trigger/input.md", nodes: [node] },
    node,
    feedbackIssue: { number: 14, url: "https://example.test/issues/14" },
  });
  assert.match(output.summary, /draft PR #13/);
  assert.match(output.summary, /issue #14/);
  assert.match(output.summary, /Corrected by PR: `S13-A`/);
  assert.match(output.summary, /Still open: `S13-B`/);
  assert.match(output.text, /Corrected by the draft PR[\s\S]*S13-A/);
  assert.match(output.text, /Remaining requirement-level feedback[\s\S]*S13-B/);
});

test("a stale automation PR stays open and is refreshed in place", () => {
  const notice = stalePullRequestNotice({
    pullNumber: 13,
    previousBase: "old-base",
    currentBase: "new-base",
    hasManifest: true,
  });

  assert.match(notice, /This draft PR remains open/);
  assert.match(notice, /same PR number, branch, and review conversation/);
  assert.match(notice, /--force-with-lease/);
  assert.match(notice, /stays open for a human decision/);
  assert.doesNotMatch(notice, /is being closed|its branch will be deleted/);
  assert.match(notice, /design-validation-stale-preserved: 13:new-base/);
});

test("automation PR locks are isolated by base branch", () => {
  assert.equal(isAutomationPullRequestForBase({
    head: { ref: "auto/target/S09/hash", sha: "head" },
    base: { ref: "pipeline-e2e", sha: "base" },
  }, "pipeline-e2e"), true);
  assert.equal(isAutomationPullRequestForBase({
    head: { ref: "auto/target/S09/hash", sha: "head" },
    base: { ref: "main", sha: "base" },
  }, "pipeline-e2e"), false);
  assert.equal(isAutomationPullRequestForBase({
    head: { ref: "feature/manual", sha: "head" },
    base: { ref: "pipeline-e2e", sha: "base" },
  }, "pipeline-e2e"), false);
});
