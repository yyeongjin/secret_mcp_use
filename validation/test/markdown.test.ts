import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { extractNumberedSections, readSpecification, readTrigger } from "../src/markdown.ts";

const root = process.cwd();

test("current Specification and trigger expose exactly S01-S19", async () => {
  const specification = await readSpecification(root, "DESIGN_INDEX_SPECIFICATION.md");
  const trigger = await readTrigger(root, "trigger/DESIGN_INDEX_gdweb-26357.md");
  assert.equal(specification.sections.size, 19);
  assert.equal(trigger.sections.size, 19);
  assert.match(specification.globalRules, /Request Isolation and Output Rules/);
  assert.equal(trigger.referenceId, "gdweb-26357");
});

test("a Specification Section content change changes only that extracted fragment hash", () => {
  const before = Array.from({ length: 19 }, (_, index) => `### ${index + 1}. Rule ${index + 1}\n\nValue ${index + 1}.`).join("\n\n");
  const after = before.replace("Value 5.", "Changed value 5.");
  const beforeSections = extractNumberedSections(before, 3).sections;
  const afterSections = extractNumberedSections(after, 3).sections;
  for (const [sectionId, section] of beforeSections) {
    if (sectionId === "S05") assert.notEqual(section.hash, afterSections.get(sectionId)?.hash);
    else assert.equal(section.hash, afterSections.get(sectionId)?.hash);
  }
});

test("duplicate or missing numbered Sections fail before any API work", () => {
  const source = Array.from({ length: 18 }, (_, index) => `## ${index + 1}. Section\nBody`).join("\n");
  assert.throws(() => extractNumberedSections(source, 2), /expected S01-S19/);
});

test("trigger source remains unchanged by parser reads", async () => {
  const triggerPath = path.join(root, "trigger/DESIGN_INDEX_gdweb-26357.md");
  const before = await readFile(triggerPath, "utf8");
  await readTrigger(root, "trigger/DESIGN_INDEX_gdweb-26357.md");
  const after = await readFile(triggerPath, "utf8");
  assert.equal(after, before);
});
