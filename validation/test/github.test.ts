import assert from "node:assert/strict";
import test from "node:test";
import {
  buildDocumentGapIssueBody,
  buildNodeCheckOutput,
  buildPullRequestBody,
  buildSectionPullRequestBody,
  isAutomationPullRequestForBase,
  pullRequestTitle,
  recursiveMergeOrder,
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

test("child PRs are recursively merged deepest-first toward the Section branch", () => {
  const pulls = [1, 2, 3].map((number) => ({
    patchNodeId: `S05-${number}`,
    number,
    url: `https://example.test/pr/${number}`,
    branch: `auto/target/S05-${number}/hash`,
    baseBranch: number === 1 ? "auto/target/S05/hash" : `auto/target/S05-${number - 1}/hash`,
  }));
  assert.deepEqual(
    recursiveMergeOrder(pulls, "auto/target/S05/hash").map((pull) => pull.patchNodeId),
    ["S05-3", "S05-2", "S05-1"],
  );
  assert.throws(
    () => recursiveMergeOrder([{ ...pulls[0], baseBranch: "main" }], "auto/target/S05/hash"),
    /INVALID_CHILD_CHAIN/,
  );
});

test("the Section PR is the only human merge boundary", () => {
  const body = buildSectionPullRequestBody({
    manifest,
    childPullRequests: [{
      patchNodeId: "S05-1",
      number: 41,
      url: "https://example.test/pr/41",
      branch: "auto/target/S05-1/hash",
      baseBranch: "auto/target/S05/hash",
      requirementIds: ["S05-NAV-ACTIVE-001"],
      mergeBatch: 1,
    }],
    batchSize: 5,
  });
  assert.match(body, /Child PRs consolidated: `1`/);
  assert.match(body, /Maximum children per merge batch: `5`/);
  assert.match(body, /deepest descendant toward this Section branch/);
  assert.match(body, /automation must never merge this representative PR/);
});

test("a partial Section correction becomes a child PR with explicit descendant scope", () => {
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
    manifest: {
      ...manifest,
      patchNodeId: "S05-1",
      parentPatchNodeId: null,
    },
    patchAttempt: 1,
    patchNodeId: "S05-1",
  });

  assert.match(body, /Patch node: `S05-1`/);
  assert.match(body, /## Deferred to descendant child PRs/);
  assert.match(body, /S05-NAV-FOCUS-002/);
  assert.match(body, /run-123:patch:S05-1:attempt:1/);
});

test("a Stage 1 document gap produces Section-specific Issue content", () => {
  const node = {
    sectionId: "S05",
    name: "Navigation and Header",
    fingerprint: hash,
    documentFingerprint: hash,
    documentAuditStatus: "DOCUMENT_GAP",
    documentAuditAttempts: 1,
    documentFindings: [{ ...auditOutput.findings[0], implementationRefs: [] }],
    auditStatus: "PASS",
    executionState: "PASS",
    auditAttempts: 1,
    requirementIds: [],
    findings: [],
    patch: { status: "NOT_REQUIRED", reason: "PASS" },
  };
  const body = buildDocumentGapIssueBody({
    summary: { runId: "run-123", targetId: "target", triggerPath: "trigger/input.md", nodes: [node] },
    node,
  });
  assert.match(body, /Missing DESIGN_INDEX instructions/);
  assert.match(body, /run-123:document-audit:S05/);
  assert.match(body, /Frontend source included: `false`/);
  assert.match(body, /design-validation-document-gap: target:S05/);
  assert.match(body, /Stage 2 runs independently and is not blocked/);
});

test("PASS nodes do not request a correction PR", () => {
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
  const output = buildNodeCheckOutput({
    summary: { runId: "run-123", targetId: "target", triggerPath: "trigger/input.md", nodes: [node] },
    node,
  });
  assert.match(output.summary, /No correction PR is required/);
});

test("a blocked Section remains visible in the Check without creating an issue", () => {
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
      status: "BLOCKED_MISSING_VALUE",
      reason: "The complete Section diff could not be generated.",
      addressedRequirementIds: [],
      unresolvedRequirementIds: ["S13-A", "S13-B"],
    },
  };
  const output = buildNodeCheckOutput({
    summary: { runId: "run-123", targetId: "target", triggerPath: "trigger/input.md", nodes: [node] },
    node,
  });
  assert.doesNotMatch(output.summary, /issue #/i);
  assert.match(output.summary, /Still open: `S13-A`, `S13-B`/);
  assert.match(output.text, /Requirement-level feedback[\s\S]*S13-A[\s\S]*S13-B/);
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
