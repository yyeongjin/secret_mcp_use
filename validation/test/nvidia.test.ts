import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { Ajv2020 } from "ajv/dist/2020.js";
import {
  bindOutputSchema,
  completionSeed,
  nvidiaGuidedJsonSchema,
  normalizeCompletionOutput,
  parseJsonContent,
  quarantineAuditOutput,
  structuredOutputControls,
} from "../src/nvidia.ts";
import type { SectionId, Sha256 } from "../src/types.ts";

const sectionId: SectionId = "S05";
const fingerprint = `sha256:${"a".repeat(64)}` as Sha256;

test("audit schema rejects code excerpts in implementationRefs", () => {
  const schema = JSON.parse(readFileSync(
    new URL("../schemas/audit-output.schema.json", import.meta.url),
    "utf8",
  )) as Record<string, unknown>;
  const validate = new Ajv2020({ strict: true }).compile(schema);
  const base = {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "PATCH_REQUIRED",
    findings: [{
      requirementId: "S05-NAV-001",
      pageId: null,
      componentId: null,
      status: "MISSING",
      finding: "The documented navigation state is missing.",
      evidenceRefs: ["S05-FACT-001"],
      implementationRefs: ["frontend/styles.css"],
      proposedValue: null,
    }],
    publicOutput: {},
  };
  assert.equal(validate(base), true);
  assert.equal(validate({
    ...base,
    findings: [{
      ...base.findings[0],
      implementationRefs: [".action { height: 48px; }"],
    }],
  }), false);
});

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

test("forces real NVIDIA structured output without a local provider fallback", () => {
  const schema = {
    type: "object",
    additionalProperties: false,
    required: ["status"],
    properties: { status: { const: "PASS" } },
  };
  assert.deepEqual(structuredOutputControls(schema, false), {
    chat_template_kwargs: {
      enable_thinking: false,
      force_nonempty_content: true,
    },
    guided_json: schema,
  });
});

test("removes only NVIDIA-incompatible uniqueness annotations from the guided grammar", () => {
  const schema = {
    type: "object",
    properties: {
      values: {
        type: "array",
        uniqueItems: true,
        items: { type: "string", minLength: 1 },
      },
    },
  };
  assert.deepEqual(nvidiaGuidedJsonSchema(schema), {
    type: "object",
    properties: {
      values: {
        type: "array",
        items: { type: "string", minLength: 1 },
      },
    },
  });
  assert.equal((schema.properties.values as Record<string, unknown>).uniqueItems, true);
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

test("preserves patch addressedRequirementIds through the trusted transport envelope", () => {
  const normalized = normalizeCompletionOutput("patch", {
    status: "PATCH",
    addressedRequirementIds: ["S05-NAV-001"],
    reason: "Implement the active state.",
    diff: "diff --git a/frontend/index.html b/frontend/index.html\n",
  }, sectionId, fingerprint) as { requirementIds: string[] };
  assert.deepEqual(normalized.requirementIds, ["S05-NAV-001"]);
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

test("each patch candidate receives a deterministic seed distinct from the previous candidate", () => {
  const fingerprint = `sha256:${"a".repeat(64)}` as const;
  assert.equal(completionSeed(fingerprint, "run:patch:S09"), completionSeed(fingerprint, "run:patch:S09"));
  assert.notEqual(
    completionSeed(fingerprint, "run:patch:S09"),
    completionSeed(fingerprint, "run:patch:S09:repair:1"),
  );
});
