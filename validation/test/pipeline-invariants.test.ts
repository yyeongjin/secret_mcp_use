import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("PATCH_REQUIRED scheduling cannot regain dependency or write-set wait gates", async () => {
  const source = await readFile(new URL("../src/orchestrator.ts", import.meta.url), "utf8");
  const start = source.indexOf("async function runPatches");
  const end = source.indexOf("async function runTrigger", start);
  assert.notEqual(start, -1);
  assert.notEqual(end, -1);
  const runPatches = source.slice(start, end);

  assert.doesNotMatch(runPatches, /unresolvedPatchDependencies/);
  assert.doesNotMatch(runPatches, /WAITING_DEPENDENCY/);
  assert.doesNotMatch(runPatches, /claimedPaths/);
  assert.doesNotMatch(runPatches, /BLOCKED_CONFLICT/);
  assert.match(runPatches, /stackParentBranch/);
  assert.match(runPatches, /stackParentCommit/);
  assert.match(runPatches, /ACQUIRED_STACKED/);
  assert.match(runPatches, /nextPatchRequirementFindings/);
  assert.match(runPatches, /failedRequirementIds/);
  assert.match(runPatches, /every ID in \$\{sectionId\} was independently attempted/);
  assert.doesNotMatch(runPatches, /if \(finalRecord\) break/);
  assert.doesNotMatch(runPatches, /finalRecord \|\| \(!childPublished/);
  assert.match(runPatches, /PATCH_PREFLIGHT_SYSTEM_PROMPT/);
  assert.match(runPatches, /AUDIT_RECLASSIFIED/);
  assert.match(runPatches, /patch-conflict-preflight/);
  assert.match(runPatches, /PATCH_CONFLICT_PREFLIGHT_SYSTEM_PROMPT/);
  assert.ok(
    runPatches.indexOf('if (output.status === "BLOCKED_AUDIT_CONFLICT")') <
      runPatches.indexOf("patchOutputNeedsIndependentRetry(output)"),
    "an audit-conflict candidate must be independently arbitrated before another patch candidate replaces it",
  );
  assert.match(runPatches, /mergeChildPullRequestBatch/);
  assert.match(runPatches, /prMergeBatchSize/);
  assert.match(runPatches, /publishSectionPullRequest/);
  assert.doesNotMatch(runPatches, /unresolvedSectionFindings/);
  assert.match(source, /result\.ok && result\.output\.status === "UNKNOWN"/);
  assert.match(source, /isUnknownRequirementId\(finding\.requirementId\)/);
  assert.doesNotMatch(source, /result\.output\.status === "UNKNOWN" &&\s*Boolean\(result\.completion\.warning\)/);
  assert.doesNotMatch(source, /PASS_PENDING_DEPENDENCY/);
});

test("audit retries cannot be configured below five independent calls", async () => {
  const config = await readFile(new URL("../src/config.ts", import.meta.url), "utf8");
  assert.match(config, /auditAttempts: Math\.max\(integer\(process\.env\.PIPELINE_AUDIT_ATTEMPTS, 5, 1\), 5\)/);
});

test("recursive child consolidation cannot merge a Section representative into main", async () => {
  const github = await readFile(new URL("../src/github.ts", import.meta.url), "utf8");
  const start = github.indexOf("export async function mergeChildPullRequestBatch");
  const end = github.indexOf("function fencedCode", start);
  const mergeBatch = github.slice(start, end);
  assert.match(mergeBatch, /sectionBranch === args\.config\.github\.baseBranch/);
  assert.match(mergeBatch, /expected\.baseBranch === args\.config\.github\.baseBranch/);
  assert.match(mergeBatch, /recursiveMergeOrder/);
  assert.match(mergeBatch, /CHILD_MERGE_MAX_ATTEMPTS/);
  assert.match(mergeBatch, /pull\.mergeable === null/);
  assert.match(mergeBatch, /sha: pull\.head\.sha/);
  assert.match(mergeBatch, /isRetryableChildMergeError/);
  assert.match(github, /return \[\.\.\.pulls\]\.reverse\(\)/);
});

test("the normative pipeline document permanently forbids dependency blocking", async () => {
  const document = await readFile(
    new URL("../../IDEA_VALIDATION_AND_PR_PIPELINE.ko.md", import.meta.url),
    "utf8",
  );
  assert.match(document, /절대 차단 금지 규칙/);
  assert.match(document, /유일한 규범 설계 문서/);
  assert.match(document, /README만 바꿔 동작을 변경할 수 없다/);
  assert.match(document, /Requirement별 독립 preflight/);
  assert.match(document, /19개 Section이 모두 실제 코드 누락이면 S01-S19 대표 correction PR 19개/);
  assert.match(document, /N개의 독립 하위 patch 호출과 N개의 일시적 stacked PR/);
  assert.match(document, /최대 5개씩 자동 병합해 대표 PR 하나로 정리/);
  assert.match(document, /대표 PR을 `main` 또는 이전 Section 대표 브랜치로 자동 병합하는 것은 금지/);
  assert.match(document, /UNKNOWN` finding.*patch 후보나 PR 큐에 절대 넣지 않는다/);
  assert.doesNotMatch(document, /PASS_PENDING_DEPENDENCY/);
  assert.doesNotMatch(document, /BLOCKED_DEPENDENCY/);
});
