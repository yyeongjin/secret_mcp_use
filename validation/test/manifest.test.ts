import assert from "node:assert/strict";
import test from "node:test";
import { matchesPath, readImpactManifest, topologicalSections } from "../src/manifest.ts";

test("impact manifest contains an acyclic 19-node DAG", async () => {
  const manifest = await readImpactManifest(process.cwd(), "validation/impact-manifest.yml");
  const order = topologicalSections(manifest);
  assert.equal(order.length, 19);
  assert.equal(new Set(order).size, 19);
  for (const [sectionId, node] of Object.entries(manifest.nodes)) {
    for (const dependency of node.dependsOn) {
      assert.ok(order.indexOf(dependency) < order.indexOf(sectionId as typeof dependency));
    }
  }
});

test("path ownership recognizes descendants without crossing prefixes", () => {
  assert.equal(matchesPath("frontend/styles.css", "frontend/**"), true);
  assert.equal(matchesPath("frontend/assets/image.jpg", "frontend/assets/**"), true);
  assert.equal(matchesPath("trigger/DESIGN_INDEX_gdweb-1.md", "frontend/**"), false);
  assert.equal(matchesPath("frontend-copy/index.html", "frontend/**"), false);
});
