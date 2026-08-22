import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { Ajv2020 } from "ajv/dist/2020.js";
import { fullAuditRequestPlan } from "../src/orchestrator.ts";
import { normalizeCompletionOutput } from "../src/nvidia.ts";
import { auditUserPrompt, documentAuditUserPrompt } from "../src/prompts.ts";
import type { DocumentAuditInput, NodeAuditInput, Sha256 } from "../src/types.ts";

const fingerprint = `sha256:${"9".repeat(64)}` as Sha256;

test("a full run plans 19 independent Stage 1 and 19 independent Stage 2 requests", () => {
  const plan = fullAuditRequestPlan("run-test");
  assert.equal(plan.length, 38);
  assert.equal(plan.filter((item) => item.stage === "document-audit").length, 19);
  assert.equal(plan.filter((item) => item.stage === "implementation-audit").length, 19);
  assert.equal(new Set(plan.map((item) => item.requestId)).size, 38);
  assert.equal(plan[0].requestId, "run-test:document-audit:S01");
  assert.equal(plan[37].requestId, "run-test:implementation-audit:S19");
});

test("Stage 1 prompt contains no source-code payload", () => {
  const input = {
    schemaVersion: "design-validation/document-audit-input/v1",
    run: { runId: "run", targetId: "target", repository: "owner/repo", baseCommit: "abc", requestedAt: "now" },
    node: { sectionId: "S01", name: "scope", fingerprint },
    contract: {
      specificationSource: {},
      specificationGlobalRules: "GLOBAL_RULE_SENTINEL",
      specificationFragment: "## 1. SPEC_SENTINEL",
      designIndexSource: {},
      designIndexFragment: "## 1. DESIGN_SENTINEL",
      requestContract: null,
    },
    evidence: [],
    policy: { immutableInputGlobs: ["trigger/**"], forbiddenOperations: ["read source code"] },
    payload: {},
  } as unknown as DocumentAuditInput;
  const prompt = JSON.parse(documentAuditUserPrompt(input)) as Record<string, unknown>;
  assert.equal(JSON.stringify(prompt).includes("implementation"), false);
  assert.match(JSON.stringify(prompt), /GLOBAL_RULE_SENTINEL/);
  assert.match(JSON.stringify(prompt), /DESIGN_SENTINEL/);
});

test("Stage 2 prompt excludes Specification text and includes source plus Stage 1 lineage", () => {
  const input = {
    node: { sectionId: "S01", fingerprint },
    contract: {
      specificationFragment: "SPECIFICATION_TEXT_MUST_NOT_LEAK",
      designIndexSource: { path: "trigger/DESIGN_INDEX_gdweb-1.md" },
      designIndexFragment: "DESIGN_INDEX_SENTINEL",
      documentAudit: {
        fingerprint,
        status: "PASS",
        outputDigest: fingerprint,
        findingRequirementIds: [],
      },
      requestContract: null,
    },
    evidence: [],
    implementation: { files: [{ path: "frontend/index.html", content: "SOURCE_SENTINEL" }], runtimeFacts: {} },
    policy: { allowedWriteGlobs: ["frontend/**"] },
    payload: {},
  } as unknown as NodeAuditInput;
  const serialized = auditUserPrompt(input);
  assert.doesNotMatch(serialized, /SPECIFICATION_TEXT_MUST_NOT_LEAK/);
  assert.match(serialized, /DESIGN_INDEX_SENTINEL/);
  assert.match(serialized, /SOURCE_SENTINEL/);
  assert.match(serialized, /documentAuditLineage/);
});

test("document audit transport preserves DOCUMENT_GAP without implementation refs", async () => {
  const normalized = normalizeCompletionOutput("document-audit", {
    status: "DOCUMENT_GAP",
    findings: [{
      requirementId: "S01-DOC-001",
      pageId: null,
      componentId: null,
      status: "MISSING",
      finding: "The DESIGN_INDEX omits one required instruction.",
      evidenceRefs: [],
      implementationRefs: ["frontend/index.html"],
      proposedValue: "invented",
    }],
    publicOutput: {},
  }, "S01", fingerprint) as { status: string; findings: Array<{ implementationRefs: string[]; proposedValue: null }> };
  assert.equal(normalized.status, "DOCUMENT_GAP");
  assert.deepEqual(normalized.findings[0].implementationRefs, []);
  assert.equal(normalized.findings[0].proposedValue, null);

  const schema = JSON.parse(await readFile("validation/schemas/document-audit-output.schema.json", "utf8"));
  assert.equal(new Ajv2020({ strict: true }).compile(schema)(normalized), true);
});
