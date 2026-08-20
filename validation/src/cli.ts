#!/usr/bin/env node
import { loadConfig } from "./config.ts";
import { runPipeline } from "./orchestrator.ts";

async function main(): Promise<void> {
  const config = await loadConfig();
  const summaries = await runPipeline(config);
  process.stdout.write(`${JSON.stringify(summaries, null, 2)}\n`);
  if (summaries.some((summary) => summary.errors.length > 0)) process.exitCode = 1;
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
  process.exitCode = 1;
});
