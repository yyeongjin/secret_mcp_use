import assert from "node:assert/strict";
import test from "node:test";
import {
  bindOutputSchema,
  normalizeCompletionOutput,
  parseJsonContent,
  quarantineAuditOutput,
} from "../src/nvidia.ts";
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

test("normalizes identifier transport defects without changing the finding judgment", () => {
  const longId = "responsive requirement ".repeat(20);
  const normalized = normalizeCompletionOutput("audit", {
    status: "BLOCKED_MISSING_EVIDENCE",
    findings: [
      {
        requirementid: "Typography size",
        status: "INSUFFICIENT_EVIDENCE",
        finding: "No grounded measurement is available.",
      },
      {
        requirementId: longId,
        status: "MISSING",
        finding: "A required behavior is absent.",
      },
    ],
  }, sectionId, fingerprint) as { findings: Array<{ requirementId: string; status: string }> };

  assert.equal(normalized.findings[0].requirementId, "Typography size");
  assert.equal(normalized.findings[0].status, "INSUFFICIENT_EVIDENCE");
  assert.equal(normalized.findings[1].requirementId.length, 160);
  assert.equal(normalized.findings[1].status, "MISSING");
});

test("quarantines an incomplete audit response as UNKNOWN instead of creating a patch", () => {
  assert.deepEqual(normalizeCompletionOutput("audit", { schemaVersion: "" }, sectionId, fingerprint), {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "UNKNOWN",
    findings: [{
      requirementId: "S05-UNKNOWN-001",
      pageId: null,
      componentId: null,
      status: "UNKNOWN",
      finding: "The isolated audit returned no grounded requirement-level conclusion.",
      evidenceRefs: [],
      implementationRefs: [],
      proposedValue: null,
    }],
    publicOutput: {},
  });
});

test("repairs JSON syntax defects before the unchanged schema validation boundary", () => {
  const parsed = parseJsonContent('{"status":"UNKNOWN","finding":"line one\nline two"}') as {
    status: string;
    finding: string;
  };
  assert.equal(parsed.status, "UNKNOWN");
  assert.equal(parsed.finding, "line one\nline two");
});

test("quarantines an unparseable Section without promoting it to PATCH_REQUIRED", () => {
  assert.deepEqual(quarantineAuditOutput(sectionId, fingerprint), {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "UNKNOWN",
    findings: [{
      requirementId: "S05-UNKNOWN-001",
      pageId: null,
      componentId: null,
      status: "UNKNOWN",
      finding: "The isolated audit returned no grounded requirement-level conclusion.",
      evidenceRefs: [],
      implementationRefs: [],
      proposedValue: null,
    }],
    publicOutput: { transportStatus: "QUARANTINED" },
  });
});

test("downgrades an ungrounded PATCH_REQUIRED envelope to UNKNOWN", () => {
  const normalized = normalizeCompletionOutput("audit", {
    status: "PATCH_REQUIRED",
    findings: [{ status: "UNKNOWN" }],
  }, sectionId, fingerprint) as { status: string; findings: unknown[] };
  assert.equal(normalized.status, "UNKNOWN");
  assert.equal(normalized.findings.length, 1);
});
