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
  assert.match(runPatches, /PATCH_PREFLIGHT_SYSTEM_PROMPT/);
  assert.match(runPatches, /AUDIT_RECLASSIFIED/);
  assert.match(runPatches, /patch-conflict-preflight/);
  assert.doesNotMatch(runPatches, /unresolvedSectionFindings/);
  assert.match(source, /result\.ok && result\.output\.status === "UNKNOWN"/);
  assert.doesNotMatch(source, /result\.output\.status === "UNKNOWN" &&\s*Boolean\(result\.completion\.warning\)/);
});

test("audit retries cannot be configured below five independent calls", async () => {
  const config = await readFile(new URL("../src/config.ts", import.meta.url), "utf8");
  assert.match(config, /auditAttempts: Math\.max\(integer\(process\.env\.PIPELINE_AUDIT_ATTEMPTS, 5, 1\), 5\)/);
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
});
