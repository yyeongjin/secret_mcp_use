import { AxeBuilder } from "@axe-core/playwright";
import { chromium } from "@playwright/test";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const root = process.cwd();
const frontendRoot = path.join(root, "frontend");
const port = 4392;
const server = spawn("python3", ["-m", "http.server", String(port)], {
  cwd: frontendRoot,
  stdio: "ignore",
});

async function waitForServer(): Promise<void> {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await delay(200);
  }
  throw new Error("Timed out waiting for the frontend baseline server.");
}

try {
  await waitForServer();
  const browser = await chromium.launch();
  const baseline: Array<{ project: string; ruleId: string; target: unknown }> = [];
  try {
    for (const project of [
      { name: "desktop", viewport: { width: 1440, height: 1000 } },
      { name: "mobile", viewport: { width: 390, height: 844 } },
    ]) {
      const context = await browser.newContext({ viewport: project.viewport });
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page }).analyze();
      for (const violation of results.violations) {
        if (violation.impact !== "serious" && violation.impact !== "critical") continue;
        for (const node of violation.nodes) {
          baseline.push({ project: project.name, ruleId: violation.id, target: node.target });
        }
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
  baseline.sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
  const output = path.join(root, "validation/baselines/axe-allowed.json");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(baseline, null, 2)}\n`, "utf8");
  process.stdout.write(`Recorded ${baseline.length} existing accessibility findings in ${output}.\n`);
} finally {
  server.kill("SIGTERM");
}
