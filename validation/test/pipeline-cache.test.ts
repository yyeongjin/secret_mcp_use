import assert from "node:assert/strict";
import { cp, mkdir, mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { loadConfig } from "../src/config.ts";
import { runPipeline } from "../src/orchestrator.ts";

test("a second identical run performs zero mock API calls through immutable PASS cache", async () => {
  const root = process.cwd();
  const stateRoot = await mkdtemp(path.join(os.tmpdir(), "secret-mcp-state-"));
  const outputParent = path.join(root, ".validation-runs");
  await mkdir(outputParent, { recursive: true });
  const outputRoot = await mkdtemp(path.join(outputParent, "cache-test-"));
  const config = await loadConfig([
    "--mock",
    "--dry-run",
    "--trigger",
    "trigger/DESIGN_INDEX_gdweb-26357.md",
  ]);
  assert.equal(config.dryRun, true);
  assert.equal(config.createPrs, false);
  config.outputRoot = outputRoot;
  config.stateRoot = stateRoot;

  try {
    const first = await runPipeline(config);
    assert.equal(first[0].auditCalls, 19);
    assert.equal(first[0].cachedPasses, 0);
    await cp(path.join(outputRoot, "attestations"), path.join(stateRoot, "attestations"), {
      recursive: true,
    });

    const second = await runPipeline(config);
    assert.equal(second[0].auditCalls, 0);
    assert.equal(second[0].cachedPasses, 19);
  } finally {
    await rm(outputRoot, { recursive: true, force: true });
    await rm(stateRoot, { recursive: true, force: true });
  }
});
