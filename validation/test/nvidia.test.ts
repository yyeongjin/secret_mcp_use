import assert from "node:assert/strict";
import test from "node:test";
import { bindOutputSchema, normalizeCompletionOutput } from "../src/nvidia.ts";
import type { SectionId, Sha256 } from "../src/types.ts";

const sectionId: SectionId = "S05";
const fingerprint = `sha256:${"a".repeat(64)}` as Sha256;

test("binds request ownership into the trusted output schema", () => {
  const source = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "example",
    type: "object",
    properties: {
      sectionId: { type: "string" },
      fingerprint: { type: "string" },
    },
  };
  const bound = bindOutputSchema(source, sectionId, fingerprint);
  const properties = bound.properties as Record<string, unknown>;
  assert.deepEqual(properties.sectionId, { const: sectionId });
  assert.deepEqual(properties.fingerprint, { const: fingerprint });
  assert.equal("$schema" in bound, false);
  assert.equal("$id" in bound, false);
  assert.equal(source.$id, "example");
});

test("wraps an explicit bare PASS without inventing audit findings", () => {
  assert.deepEqual(normalizeCompletionOutput("audit", "PASS", sectionId, fingerprint), {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "PASS",
    findings: [],
    publicOutput: {},
  });
});

test("normalizes transport metadata while preserving model-owned audit judgments", () => {
  const normalized = normalizeCompletionOutput("audit", {
    schemaVersion: "wrong",
    sectionId: "S19",
    fingerprint: "wrong",
    status: "PATCH_REQUIRED",
    findings: [{
      requirementId: "S05-NAV-001",
      pageId: "P-01",
      componentId: "header",
      status: "MISSING",
      finding: "The required navigation state is missing.",
      evidenceRefs: ["E-D01"],
      implementationRefs: ["frontend/index.html"],
      proposedValue: "must be discarded",
      commentary: "must be discarded",
    }],
    publicOutput: {
      stable: "kept",
      stringList: ["kept"],
      nested: { unsafe: true },
    },
    extra: "must be discarded",
  }, sectionId, fingerprint);

  assert.deepEqual(normalized, {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "PATCH_REQUIRED",
    findings: [{
      requirementId: "S05-NAV-001",
      pageId: "P-01",
      componentId: "header",
      status: "MISSING",
      finding: "The required navigation state is missing.",
      evidenceRefs: ["E-D01"],
      implementationRefs: ["frontend/index.html"],
      proposedValue: null,
    }],
    publicOutput: {
      stable: "kept",
      stringList: ["kept"],
    },
  });
});
