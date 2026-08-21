import assert from "node:assert/strict";
import test from "node:test";
import {
  canonicalizePatchOutput,
  inspectUnifiedDiff,
  isRetryablePatchCandidateError,
  normalizeUnifiedDiffMechanics,
  relocateUnifiedDiffHunks,
} from "../src/patch.ts";
import type { NodeAuditInput, NodeAuditOutput, Sha256 } from "../src/types.ts";

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

test("mechanical normalization adds repository-rooted git headers", () => {
  const normalized = normalizeUnifiedDiffMechanics([
    "--- frontend/styles.css",
    "+++ frontend/styles.css",
    "@@ -1 +1 @@",
    "-body { color: black; }",
    "+body { color: white; }",
    "",
  ].join("\n"));

  assert.equal(normalized, [
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -1,1 +1,1 @@",
    "-body { color: black; }",
    "+body { color: white; }",
    "",
  ].join("\n"));
});

test("mechanical normalization rejects a patch containing only no-op replacements", () => {
  const normalized = normalizeUnifiedDiffMechanics([
    "--- frontend/styles.css",
    "+++ frontend/styles.css",
    "@@ -1 +1 @@",
    "-body { color: black; }",
    "+body { color: black; }",
    "",
  ].join("\n"));
  assert.equal(normalized, "");
});

test("relocates a uniquely matching hunk without changing model-authored lines", () => {
  const diff = [
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -1,2 +1,3 @@",
    "   :root {",
    "+  --color-success: #1B7F4B;",
    "   }",
    "",
  ].join("\n");
  const relocated = relocateUnifiedDiffHunks(diff, new Map([
    ["frontend/styles.css", "@layer tokens {\n  :root {\n  }\n}\n"],
  ]));
  assert.match(relocated, /@@ -2,2 \+2,3 @@/);
  assert.match(relocated, /\+  --color-success: #1B7F4B;/);
});

test("does not guess a hunk location when base context is ambiguous", () => {
  const diff = [
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@ -9,1 +9,2 @@",
    " .item {}",
    "+.new {}",
    "",
  ].join("\n");
  const relocated = relocateUnifiedDiffHunks(diff, new Map([
    ["frontend/styles.css", ".item {}\n.item {}\n"],
  ]));
  assert.match(relocated, /@@ -9,1 \+9,2 @@/);
});

test("repairs a bare hunk header and source-only context whitespace", () => {
  const raw = [
    "diff --git a/frontend/styles.css b/frontend/styles.css",
    "--- a/frontend/styles.css",
    "+++ b/frontend/styles.css",
    "@@",
    "@@",
    " :root {",
    "     --color-black: #000;",
    "+    --color-success: #1B7F4B;",
    "   }",
    "",
  ].join("\n");
  const normalized = normalizeUnifiedDiffMechanics(raw);
  const relocated = relocateUnifiedDiffHunks(normalized, new Map([
    ["frontend/styles.css", "@layer tokens {\n  :root {\n    --color-black: #000;\n  }\n}\n"],
  ]));
  assert.match(relocated, /@@ -2,3 \+2,4 @@/);
  assert.match(relocated, /\n   :root \{\n/);
  assert.match(relocated, /\+    --color-success: #1B7F4B;/);
});

test("patch metadata is derived from the isolated audit input", () => {
  const baseHash = `sha256:${"a".repeat(64)}` as Sha256;
  const fingerprint = `sha256:${"b".repeat(64)}` as Sha256;
  const auditInput = {
    node: { sectionId: "S10", fingerprint },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: baseHash,
        byteLength: 22,
        encoding: "utf8",
        content: "body { color: black; }\n",
      }],
    },
  } as NodeAuditInput;
  const auditOutput = {
    findings: [{
      requirementId: "S10-COLOR",
      evidenceRefs: ["E-D01"],
      implementationRefs: ["frontend/styles.css"],
    }],
  } as NodeAuditOutput;

  const output = canonicalizePatchOutput({
    value: {
      status: "PATCH",
      reason: "Apply the grounded value.",
      diff: [
        "--- frontend/styles.css",
        "+++ frontend/styles.css",
        "@@ -1 +1 @@",
        "-body { color: black; }",
        "+body { color: white; }",
        "",
      ].join("\n"),
      writeSet: [{ path: "frontend/index.html", baseHash: "invalid" }],
    },
    auditInput,
    auditOutput,
  });

  assert.deepEqual(output.requirementIds, ["S10-COLOR"]);
  assert.deepEqual(output.evidenceRefs, ["E-D01"]);
  assert.deepEqual(output.writeSet, [{ path: "frontend/styles.css", baseHash }]);
  assert.deepEqual(output.readSet, [{ path: "frontend/styles.css", baseHash }]);
  assert.match(output.diff, /^diff --git a\/frontend\/styles\.css b\/frontend\/styles\.css/m);
});
