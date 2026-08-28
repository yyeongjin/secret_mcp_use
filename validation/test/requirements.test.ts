import assert from "node:assert/strict";
import test from "node:test";
import {
  aggregateDocumentLeafOutputs,
  aggregateImplementationLeafOutputs,
  assertWholeDocumentCoverage,
  bindDocumentRequirementInventory,
  bindImplementationRequirementInventory,
  buildDocumentRequirementInventory,
  buildImplementationRequirementInventory,
  buildRequirementInventory,
  documentLeafInput,
  implementationLeafInput,
} from "../src/requirements.ts";
import { sha256 } from "../src/hash.ts";
import type { DocumentAuditInput, NodeAuditInput } from "../src/types.ts";

test("the source inventory assigns every byte to a structural span or audited leaf", () => {
  const source = "## 7. Layout\n\n- Grid: 3 columns\n| width | gap |\n| --- | --- |\n| 1200 | 24 |\n```css\n.card { display: grid; }\n```\n";
  const inventory = buildRequirementInventory({
    stage: "implementation",
    sectionId: "S07",
    fragments: [{
      sourcePath: "trigger/DESIGN_INDEX_gdweb-test.md",
      sourceKind: "section",
      source,
      baseOffset: 120,
      baseLine: 10,
      idPrefix: "U",
    }],
  });
  assert.equal(inventory.coveredBytes, Buffer.byteLength(source));
  assert.equal(inventory.uncoveredRanges.length, 0);
  assert.ok(inventory.leaves.some((leaf) => leaf.statement.includes("Grid: 3 columns")));
  assert.ok(inventory.leaves.some((leaf) => leaf.statement.includes("1200")));
  assert.ok(inventory.leaves.some((leaf) => leaf.statement.includes("display: grid")));
  assert.equal(inventory.spans.find((span) => span.raw.includes("---"))?.contentKind, "table-separator");
});

test("every leaf receives a distinct deterministic fingerprint and single-owner input", () => {
  const inventory = buildRequirementInventory({
    stage: "implementation",
    sectionId: "S09",
    fragments: [{
      sourcePath: "trigger/DESIGN_INDEX_gdweb-test.md",
      sourceKind: "section",
      source: "Color: #fff\nSpacing: 24px\n",
      baseOffset: 0,
      baseLine: 1,
      idPrefix: "U",
    }],
  });
  assert.equal(inventory.leaves.length, 2);
  assert.notEqual(inventory.leaves[0].fingerprint, inventory.leaves[1].fingerprint);
  const base = {
    node: {
      sectionId: "S09",
      name: "Tokens",
      requirementIds: ["S09-LEGACY"],
      fingerprint: sha256("base"),
      dependsOn: [],
    },
    contract: { designIndexFragment: "whole section" },
    payload: {},
    implementation: { files: [] },
  } as unknown as NodeAuditInput;
  const input = implementationLeafInput(base, inventory.leaves[0]);
  assert.deepEqual(input.node.requirementIds, [inventory.leaves[0].requirementId]);
  assert.equal(input.contract.designIndexFragment, inventory.leaves[0].statement);
});

test("a Stage 1 global-rule leaf satisfies the non-empty owned-fragment contract", () => {
  const inventory = buildRequirementInventory({
    stage: "document",
    sectionId: "S01",
    fragments: [{
      sourcePath: "DESIGN_INDEX_SPECIFICATION.md",
      sourceKind: "global-rule",
      source: "**English** | [한국어](DESIGN_INDEX_SPECIFICATION.ko.md)\n",
      baseOffset: 0,
      baseLine: 1,
      idPrefix: "G1-",
    }],
  });
  const base = {
    node: { sectionId: "S01", name: "Scope", fingerprint: sha256("parent") },
    contract: {
      specificationGlobalRules: "all global rules",
      specificationFragment: "### 1. Scope",
      designIndexFragment: "## 1. Scope",
      designIndexSource: { sectionHash: sha256("design") },
    },
    payload: {},
  } as unknown as DocumentAuditInput;
  const input = documentLeafInput(base, inventory.leaves[0], "complete DESIGN_INDEX");
  assert.equal(input.contract.specificationGlobalRules, inventory.leaves[0].statement);
  assert.equal(input.contract.specificationFragment, inventory.leaves[0].statement);
  assert.equal(input.contract.designIndexFragment, "complete DESIGN_INDEX");
});

test("parent PASS fingerprints are bound to the exact leaf inventory", () => {
  const first = buildRequirementInventory({
    stage: "document",
    sectionId: "S01",
    fragments: [{ sourcePath: "spec.md", sourceKind: "section", source: "A\n", baseOffset: 0, baseLine: 1, idPrefix: "U" }],
  });
  const second = buildRequirementInventory({
    stage: "document",
    sectionId: "S01",
    fragments: [{ sourcePath: "spec.md", sourceKind: "section", source: "A\nB\n", baseOffset: 0, baseLine: 1, idPrefix: "U" }],
  });
  const documentBase = {
    node: { sectionId: "S01", name: "Scope", fingerprint: sha256("parent") },
    payload: {},
  } as unknown as DocumentAuditInput;
  const boundFirst = bindDocumentRequirementInventory(documentBase, first);
  const boundSecond = bindDocumentRequirementInventory(documentBase, second);
  assert.notEqual(boundFirst.node.fingerprint, boundSecond.node.fingerprint);
  assert.equal(boundFirst.payload.requirementInventoryHash, first.inventoryHash);

  const implementation = buildRequirementInventory({
    stage: "implementation",
    sectionId: "S01",
    fragments: [{ sourcePath: "trigger/test.md", sourceKind: "section", source: "A\n", baseOffset: 0, baseLine: 1, idPrefix: "U" }],
  });
  const implementationBase = {
    node: { sectionId: "S01", name: "Scope", fingerprint: sha256("implementation"), requirementIds: [], dependsOn: [] },
    payload: {},
  } as unknown as NodeAuditInput;
  const boundImplementation = bindImplementationRequirementInventory(implementationBase, implementation);
  assert.equal(boundImplementation.payload.requirementInventoryHash, implementation.inventoryHash);
  assert.notEqual(boundImplementation.node.fingerprint, implementationBase.node.fingerprint);
});

test("bottom-up aggregation cannot hide one failing leaf behind parent PASS outputs", () => {
  const inventory = buildRequirementInventory({
    stage: "document",
    sectionId: "S01",
    fragments: [{
      sourcePath: "DESIGN_INDEX_SPECIFICATION.md",
      sourceKind: "section",
      source: "Required A\nRequired B\n",
      baseOffset: 0,
      baseLine: 1,
      idPrefix: "U",
    }],
  });
  const base = {
    node: { sectionId: "S01", name: "Scope", fingerprint: sha256("section") },
    contract: {
      specificationGlobalRules: "",
      specificationFragment: "whole section",
      designIndexSource: { sectionHash: sha256("design") },
    },
    payload: {},
  } as unknown as DocumentAuditInput;
  const first = documentLeafInput(base, inventory.leaves[0]);
  const second = documentLeafInput(base, inventory.leaves[1]);
  const output = aggregateDocumentLeafOutputs({
    sectionId: "S01",
    fingerprint: base.node.fingerprint,
    results: [
      {
        leaf: inventory.leaves[0],
        output: { schemaVersion: "design-validation/document-audit-output/v1", sectionId: "S01", fingerprint: first.node.fingerprint, status: "PASS", findings: [], publicOutput: {} },
      },
      {
        leaf: inventory.leaves[1],
        output: {
          schemaVersion: "design-validation/document-audit-output/v1",
          sectionId: "S01",
          fingerprint: second.node.fingerprint,
          status: "DOCUMENT_GAP",
          findings: [{ requirementId: "S01-any", pageId: null, componentId: null, status: "MISSING", finding: "Required B is absent.", evidenceRefs: [], implementationRefs: [], proposedValue: null }],
          publicOutput: {},
        },
      },
    ],
  });
  assert.equal(output.status, "DOCUMENT_GAP");
  assert.equal(output.findings[0].requirementId, inventory.leaves[1].requirementId);
});

test("implementation aggregation requires every child leaf to pass", () => {
  const inventory = buildRequirementInventory({
    stage: "implementation",
    sectionId: "S12",
    fragments: [{ sourcePath: "trigger/test.md", sourceKind: "section", source: "Desktop\nMobile\n", baseOffset: 0, baseLine: 1, idPrefix: "U" }],
  });
  const outputs = inventory.leaves.map((leaf, index) => ({
    leaf,
    output: index === 0
      ? { schemaVersion: "design-validation/audit-output/v2" as const, sectionId: "S12" as const, fingerprint: leaf.fingerprint, status: "PASS" as const, findings: [], publicOutput: {} }
      : {
        schemaVersion: "design-validation/audit-output/v2" as const,
        sectionId: "S12" as const,
        fingerprint: leaf.fingerprint,
        status: "PATCH_REQUIRED" as const,
        findings: [{ requirementId: "S12-any", pageId: null, componentId: null, status: "MISSING" as const, finding: "Mobile rule is absent.", evidenceRefs: [], implementationRefs: ["frontend/styles.css"], proposedValue: null }],
        publicOutput: {},
      },
  }));
  const aggregate = aggregateImplementationLeafOutputs({ sectionId: "S12", fingerprint: sha256("section"), results: outputs });
  assert.equal(aggregate.status, "PATCH_REQUIRED");
  assert.equal(aggregate.findings[0].requirementId, inventory.leaves[1].requirementId);
});

test("Specification global rules are audited once under the S01 root instead of 19 times", () => {
  const section = {
    id: "S01",
    number: 1,
    heading: "1. Scope",
    fragment: "### 1. Scope\nRequired scope\n",
    hash: sha256("section"),
    startOffset: 100,
    endOffset: 128,
    startLine: 10,
    endLine: 11,
  } as const;
  const s01 = buildDocumentRequirementInventory({
    sectionId: "S01",
    specificationPath: "DESIGN_INDEX_SPECIFICATION.md",
    globalRules: "Global requirement\n",
    section,
  });
  const s02 = buildDocumentRequirementInventory({
    sectionId: "S02",
    specificationPath: "DESIGN_INDEX_SPECIFICATION.md",
    globalRules: "Global requirement\n",
    section: { ...section, id: "S02", number: 2 },
  });
  assert.equal(s01.leaves.filter((leaf) => leaf.sourceKind === "global-rule").length, 1);
  assert.equal(s02.leaves.filter((leaf) => leaf.sourceKind === "global-rule").length, 0);
});

test("whole-document coverage includes the DESIGN_INDEX preamble and every numbered Section", () => {
  const source = "Metadata: value\n\n## 1. Scope\nRequirement A\n\n## 2. Evidence\nRequirement B\n";
  const firstStart = source.indexOf("## 1.");
  const secondStart = source.indexOf("## 2.");
  const sections = new Map([
    ["S01", {
      id: "S01", number: 1, heading: "1. Scope",
      fragment: source.slice(firstStart, secondStart), hash: sha256(source.slice(firstStart, secondStart)),
      startOffset: firstStart, endOffset: secondStart, startLine: 3, endLine: 5,
    }],
    ["S02", {
      id: "S02", number: 2, heading: "2. Evidence",
      fragment: source.slice(secondStart), hash: sha256(source.slice(secondStart)),
      startOffset: secondStart, endOffset: source.length, startLine: 6, endLine: 7,
    }],
  ] as const);
  const inventories = new Map([
    ["S01", buildImplementationRequirementInventory({
      sectionId: "S01",
      triggerPath: "trigger/test.md",
      section: sections.get("S01")!,
      preambleFragments: [{ source: source.slice(0, firstStart), startOffset: 0, endOffset: firstStart, startLine: 1 }],
    })],
    ["S02", buildImplementationRequirementInventory({
      sectionId: "S02",
      triggerPath: "trigger/test.md",
      section: sections.get("S02")!,
    })],
  ]) as Map<"S01" | "S02", ReturnType<typeof buildImplementationRequirementInventory>>;
  const allSections = new Map(inventories) as Parameters<typeof assertWholeDocumentCoverage>[0]["inventories"];
  const coverage = assertWholeDocumentCoverage({ sourcePath: "trigger/test.md", source, inventories: allSections });
  assert.equal(coverage.coveredBytes, Buffer.byteLength(source));
  assert.ok(inventories.get("S01")!.leaves.some((leaf) => leaf.sourceKind === "document-preamble"));
});

test("source spans use exact UTF-8 byte offsets for Korean text", () => {
  const source = "# 머리말\n\n## 1. 개요\n- 색상: 파랑\n";
  const sectionStartCharacters = source.indexOf("## 1.");
  const sectionStartBytes = Buffer.byteLength(source.slice(0, sectionStartCharacters));
  const section = {
    id: "S01" as const,
    number: 1,
    heading: "1. 개요",
    fragment: source.slice(sectionStartCharacters),
    hash: sha256(source.slice(sectionStartCharacters)),
    startOffset: sectionStartBytes,
    endOffset: Buffer.byteLength(source),
    startLine: 3,
    endLine: 4,
  };
  const inventory = buildImplementationRequirementInventory({
    sectionId: "S01",
    triggerPath: "trigger/DESIGN_INDEX_gdweb-test.md",
    section,
    preambleFragments: [{
      source: source.slice(0, sectionStartCharacters),
      startOffset: 0,
      endOffset: sectionStartBytes,
      startLine: 1,
    }],
  });
  assert.equal(inventory.spans.at(-1)?.endOffset, Buffer.byteLength(source));
  assert.equal(inventory.coveredBytes, Buffer.byteLength(source));
  assert.ok(inventory.leaves.some((leaf) => leaf.statement === "- 색상: 파랑"));
});
