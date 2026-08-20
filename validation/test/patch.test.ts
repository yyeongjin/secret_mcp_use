import assert from "node:assert/strict";
import test from "node:test";
import { inspectUnifiedDiff, isRepairablePatchSyntaxError } from "../src/patch.ts";

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

test("only unified-diff syntax failures qualify for one-shot repair", () => {
  assert.equal(
    isRepairablePatchSyntaxError(new Error("Malformed unified diff file headers.")),
    true,
  );
  assert.equal(
    isRepairablePatchSyntaxError(
      new Error("git apply --check patch.diff failed with 128: error: corrupt patch at line 9"),
    ),
    true,
  );
  assert.equal(
    isRepairablePatchSyntaxError(
      new Error("git apply --check patch.diff failed with 1: error: patch failed: frontend/app.js:1"),
    ),
    false,
  );
  assert.equal(isRepairablePatchSyntaxError(new Error("Unsafe diff path: ../trigger/a.md")), false);
  assert.equal(isRepairablePatchSyntaxError(new Error("Stale or incorrect base hash")), false);
});
