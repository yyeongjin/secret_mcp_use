import assert from "node:assert/strict";
import test from "node:test";
import { enforcePatchGrounding, unresolvedPatchDependencies } from "../src/orchestrator.ts";
import type {
  FreshNode,
  NodeAuditInput,
  NodeAuditOutput,
  PassAttestation,
  ResolvedNode,
  SectionId,
  Sha256,
} from "../src/types.ts";

const fingerprint = `sha256:${"1".repeat(64)}` as Sha256;

function fresh(status: FreshNode["output"]["status"]): FreshNode {
  return {
    status: "FRESH",
    rawResponseHash: fingerprint,
    output: {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId: "S02",
      fingerprint,
      status,
      findings: status === "PASS" ? [] : [{
        requirementId: "test",
        pageId: null,
        componentId: null,
        status: "UNKNOWN",
        finding: "test",
        evidenceRefs: [],
        implementationRefs: [],
        proposedValue: null,
      }],
      publicOutput: {},
    },
  };
}

test("current-run PASS satisfies patch DAG dependencies without a persisted attestation", () => {
  const resolved = new Map<SectionId, ResolvedNode>([
    ["S02", fresh("PASS")],
    ["S06", fresh("BLOCKED_MISSING_EVIDENCE")],
  ]);
  const attestations = new Map<SectionId, PassAttestation>();

  assert.deepEqual(
    unresolvedPatchDependencies(["S02", "S06"], resolved, attestations),
    ["S06"],
  );
});

function groundingInput(writes: string[]): NodeAuditInput {
  return {
    node: { sectionId: "S18", fingerprint },
    implementation: {
      files: [{
        path: "frontend/styles.css",
        contentHash: fingerprint,
        byteLength: 0,
        encoding: "utf8",
        content: "",
      }],
    },
    policy: { allowedWriteGlobs: writes },
  } as NodeAuditInput;
}

function patchRequired(implementationRefs: string[]): NodeAuditOutput {
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId: "S18",
    fingerprint,
    status: "PATCH_REQUIRED",
    findings: [{
      requirementId: "S18-TEST",
      pageId: null,
      componentId: null,
      status: "MISSING",
      finding: "A grounded implementation requirement is missing.",
      evidenceRefs: [],
      implementationRefs,
      proposedValue: null,
    }],
    publicOutput: {},
  };
}

test("a validation-only Section cannot enter the patch pipeline", () => {
  const result = enforcePatchGrounding(groundingInput([]), patchRequired([]));
  assert.equal(result.output.status, "BLOCKED_CONTRACT_CONFLICT");
  assert.match(result.warning ?? "", /without an owned application write path/);
});

test("PATCH_REQUIRED must identify a supplied file or a safe owned text file", () => {
  const missingReference = enforcePatchGrounding(
    groundingInput(["frontend/styles.css"]),
    patchRequired([]),
  );
  assert.equal(missingReference.output.status, "BLOCKED_MISSING_EVIDENCE");

  const valid = enforcePatchGrounding(
    groundingInput(["frontend/styles.css"]),
    patchRequired(["frontend/styles.css"]),
  );
  assert.equal(valid.output.status, "PATCH_REQUIRED");
  assert.equal(valid.warning, undefined);

  const newOwnedFile = enforcePatchGrounding(
    groundingInput(["frontend/tests/**"]),
    patchRequired(["frontend/tests/home.spec.ts"]),
  );
  assert.equal(newOwnedFile.output.status, "PATCH_REQUIRED");

  const unsafeNewFile = enforcePatchGrounding(
    groundingInput(["frontend/**"]),
    patchRequired(["frontend/../trigger/rewrite.md"]),
  );
  assert.equal(unsafeNewFile.output.status, "BLOCKED_MISSING_EVIDENCE");
});
