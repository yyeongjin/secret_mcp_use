import assert from "node:assert/strict";
import test from "node:test";
import { directDirtySections } from "../src/change.ts";
import { manifestFromBody, nodeCheckConclusion, pullRequestKey } from "../src/github.ts";
import { assertIsolatedAuditInput } from "../src/input.ts";
import { buildSectionPayload, payloadKeys, requirementIdsForSection } from "../src/payload.ts";
import type {
  ChangeEvent,
  ImpactManifest,
  NodeAuditInput,
  PullRequestManifest,
  SectionId,
  Sha256,
  TriggerSnapshot,
} from "../src/types.ts";
import { SECTION_IDS } from "../src/types.ts";

const hash = `sha256:${"a".repeat(64)}` as Sha256;

test("all 19 Sections expose the documented dedicated payload keys", () => {
  const required: Record<SectionId, string[]> = {
    S01: ["reference", "declaredPages", "declaredRoutes", "targetViewports", "nonGoals", "replacementAssets"],
    S02: ["evidenceManifest", "coordinateOrigins"],
    S03: ["pages"],
    S04: ["viewportSurface", "container", "globalGutters", "shellVariants", "chrome", "overlays", "zIndexLayers", "overflowRules"],
    S05: ["desktopGeometry", "mobileGeometry", "orderedItems", "routeTargets", "stateMatrix", "stickyMode", "menuPanel", "focusBehavior"],
    S06: ["pages"],
    S07: ["sections"],
    S08: ["componentTree", "components"],
    S09: ["colors", "spacing", "dimensions", "radii", "borders", "shadows", "opacity", "zIndex", "breakpoints", "containers", "icons", "motion"],
    S10: ["roles"],
    S11: ["assets"],
    S12: ["viewports", "matrix"],
    S13: ["interactions"],
    S14: ["landmarks", "headingOrder", "skipLink", "tabOrder", "focusRing", "labels", "descriptions", "altRules", "liveRegions", "errors", "contrastTargets", "reducedMotion", "reflow", "touchTargets", "navigationSemantics"],
    S15: ["entities", "fields", "types", "cardinality", "optional", "nullable", "ordering", "grouping", "formatting", "localization", "loading", "empty", "error", "success", "fixtures"],
    S16: ["routes", "layouts", "directoryPlan", "pageModules", "sharedModules", "stylingStrategy", "tokenFiles", "assetOrganization", "stateOwnership", "serverClientBoundary", "thirdPartyResponsibilities"],
    S17: ["tasks"],
    S18: ["pages"],
    S19: ["uncertainties"],
  };
  for (const sectionId of SECTION_IDS) assert.deepEqual(payloadKeys(sectionId), required[sectionId]);
});

test("payload facts and generated Requirement IDs remain Section-owned", () => {
  const trigger = {
    path: "trigger/DESIGN_INDEX_gdweb-26357.md",
    referenceId: "gdweb-26357",
    documentHash: hash,
    sections: new Map(),
  } as TriggerSnapshot;
  const fragment = "## 12. Responsive Behavior\n- P-01 uses 1440px and 390px.";
  const ids = requirementIdsForSection("S12", fragment);
  assert.ok(ids.every((id) => id.startsWith("S12-")));
  assert.deepEqual(
    (buildSectionPayload({ sectionId: "S12", trigger, fragment, evidence: [] }).viewports),
    [1440, 390],
  );
});

test("isolated input rejects another numbered Section", () => {
  const input = {
    node: { sectionId: "S12", requirementIds: ["S12-REQ-A"] },
    contract: {
      specificationFragment: "## 12. Responsive\n## 13. Interaction",
      designIndexFragment: "## 12. Responsive",
    },
    implementation: { files: [] },
    policy: { allowedReadGlobs: [] },
  } as unknown as NodeAuditInput;
  assert.throws(() => assertIsolatedAuditInput(input), /another numbered Section/);
});

test("unknown source fallback marks all 19 Sections dirty", () => {
  const nodes = Object.fromEntries(SECTION_IDS.map((sectionId) => [sectionId, {
    name: sectionId,
    dependsOn: [],
    reads: [`frontend/${sectionId}.ts`],
    writes: [],
  }])) as unknown as ImpactManifest["nodes"];
  const manifest = {
    schemaVersion: "design-validation/impact-manifest/v1",
    immutableInputGlobs: ["trigger/**"],
    globalAllowedWriteGlobs: ["frontend/**"],
    sourceGlobs: ["frontend/**"],
    ignoredChangeGlobs: [],
    nodes,
  } satisfies ImpactManifest;
  const event = {
    options: { forceFullAudit: true },
    changedFiles: [{ path: "frontend/unowned.ts" }],
  } as ChangeEvent;
  assert.equal(directDirtySections(event, manifest).size, 19);
});

test("PR keys are deterministic and embedded manifests are recoverable", () => {
  const prKey = pullRequestKey({ targetId: "target", sectionId: "S09", fingerprint: hash, patchHash: hash });
  assert.equal(prKey, pullRequestKey({ targetId: "target", sectionId: "S09", fingerprint: hash, patchHash: hash }));
  const manifest = {
    schemaVersion: "design-validation/pr-manifest/v2",
    prKey,
  } as PullRequestManifest;
  const encoded = Buffer.from(JSON.stringify(manifest)).toString("base64url");
  assert.deepEqual(
    manifestFromBody(`<!-- design-validation-pr-manifest: ${encoded} -->`),
    manifest,
  );
});

test("per-Section checks distinguish final PASS, waiting, blocked, and failed states", () => {
  assert.equal(nodeCheckConclusion({ auditStatus: "PASS", executionState: "PASS", patch: null }), "success");
  assert.equal(nodeCheckConclusion({
    auditStatus: "PATCH_REQUIRED",
    executionState: "PATCH_WAITING_DEPENDENCY",
    patch: { status: "WAITING_DEPENDENCY", reason: "S02 is blocked." },
  }), "neutral");
  assert.equal(nodeCheckConclusion({
    auditStatus: "BLOCKED_MISSING_EVIDENCE",
    executionState: "BLOCKED_MISSING_EVIDENCE",
    patch: null,
  }), "neutral");
  assert.equal(nodeCheckConclusion({
    auditStatus: "PASS",
    executionState: "PASS",
    patch: { status: "FAILED_TEST", reason: "Playwright failed." },
  }), "failure");
});
