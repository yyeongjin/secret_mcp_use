import assert from "node:assert/strict";
import test from "node:test";
import {
  inspectUnifiedDiff,
  isRetryablePatchCandidateError,
  normalizeUnifiedDiffMechanics,
} from "../src/patch.ts";

test("unified diff inspection returns exact frontend write paths", () => {
  const result = inspectUnifiedDiff([
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "index 1111111..2222222 100644",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -1 +1 @@",
    "-body { color: black; }",
    "+body { color: white; }",
    "",
  ].join("\n"));
  assert.deepEqual(result.changedPaths, ["frontend/styles.css"]);
  assert.equal(result.additions, 1);
  assert.equal(result.deletions, 1);
});

test("file deletion and path traversal are rejected", () => {
  assert.throws(
    () => inspectUnifiedDiff("deleted file mode 100644\n--- a/frontend/a.js\n+++ /dev/null\n"),
    /deletion/,
  );
  assert.throws(
    () => inspectUnifiedDiff("--- a/frontend/a.js\n+++ b/../trigger/a.md\n@@ -0,0 +1 @@\n+x\n"),
    /Unsafe diff path/,
  );
  assert.throws(
    () => inspectUnifiedDiff("GIT binary patch\n--- a/frontend/a.png\n+++ b/frontend/a.png\n"),
    /Binary patches/,
  );
  assert.throws(
    () => inspectUnifiedDiff("new file mode 120000\n--- /dev/null\n+++ b/frontend/link\n@@ -0,0 +1 @@\n+target\n"),
    /Unsafe new file mode/,
  );
});

test("only bounded candidate failures qualify for isolated retry", () => {
  assert.equal(
    isRetryablePatchCandidateError(new Error("Malformed unified diff file headers.")),
    true,
  );
  assert.equal(
    isRetryablePatchCandidateError(
      new Error("git apply --check patch.diff failed with 128: error: corrupt patch at line 9"),
    ),
    true,
  );
  assert.equal(
    isRetryablePatchCandidateError(
      new Error("git apply --check patch.diff failed with 1: error: patch failed: frontend/app.js:1"),
    ),
    true,
  );
  assert.equal(
    isRetryablePatchCandidateError(
      new Error("git apply --check patch.diff failed with 1: error: frontend/app.js: patch does not apply"),
    ),
    true,
  );
  assert.equal(
    isRetryablePatchCandidateError(new Error("Patch writeSet does not exactly match unified diff paths.")),
    true,
  );
  assert.equal(
    isRetryablePatchCandidateError(new Error("Stale or incorrect base hash for frontend/app.js.")),
    true,
  );
  assert.equal(isRetryablePatchCandidateError(new Error("Unsafe diff path: ../trigger/a.md")), false);
  assert.equal(
    isRetryablePatchCandidateError(new Error("S15 does not own frontend/styles.css.")),
    false,
  );
  assert.equal(
    isRetryablePatchCandidateError(
      new Error("S07 does not own frontend/styles.css/frontend/styles.css."),
    ),
    true,
  );
});

test("mechanical normalization fixes hunk counts and removes context-only hunks", () => {
  const normalized = normalizeUnifiedDiffMechanics([
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "index old..new 100644",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -1,1 +1,1 @@",
    " :root {",
    "+  --color-focus: #4169f5;",
    " }",
    "@@ -20,2 +21,2 @@",
    " .unchanged {",
    "",
    " }",
    "",
  ].join("\n"));

  assert.equal(normalized, [
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -1,2 +1,3 @@",
    " :root {",
    "+  --color-focus: #4169f5;",
    " }",
    "",
  ].join("\n"));
});
