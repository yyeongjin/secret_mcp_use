import assert from "node:assert/strict";
import test from "node:test";
import { unresolvedPatchDependencies } from "../src/orchestrator.ts";
import type { FreshNode, PassAttestation, ResolvedNode, SectionId, Sha256 } from "../src/types.ts";

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
