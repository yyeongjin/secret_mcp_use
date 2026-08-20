import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

interface AxeBaselineEntry {
  project: string;
  ruleId: string;
  target: unknown;
}

function baselineKey(entry: AxeBaselineEntry): string {
  return JSON.stringify([entry.project, entry.ruleId, entry.target]);
}

test("renders meaningful content without horizontal overflow", async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("body")).not.toHaveText("");
  const geometry = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyHeight: document.body.getBoundingClientRect().height,
  }));
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.clientWidth + 1);
  expect(geometry.bodyHeight).toBeGreaterThan(400);
  expect(consoleErrors).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath("page.png"), fullPage: true });
});

test("introduces no new serious or critical accessibility violations", async ({ page }, testInfo) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const results = await new AxeBuilder({ page }).analyze();
  const baseline = JSON.parse(
    await readFile(path.join(process.cwd(), "validation/baselines/axe-allowed.json"), "utf8"),
  ) as AxeBaselineEntry[];
  const allowed = new Set(baseline.map(baselineKey));
  const current = results.violations
    .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
    .flatMap((violation) =>
      violation.nodes.map((node) => ({
        project: testInfo.project.name,
        ruleId: violation.id,
        target: node.target,
      })),
    );
  const unexpected = current.filter((entry) => !allowed.has(baselineKey(entry)));
  expect(unexpected).toEqual([]);
});
