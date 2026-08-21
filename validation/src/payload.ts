import { sha256 } from "./hash.ts";
import type { EvidenceReference, SectionId, TriggerSnapshot } from "./types.ts";

const PAYLOAD_KEYS: Record<SectionId, string[]> = {
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

function materialLines(fragment: string): string[] {
  return fragment
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => (
      line.length > 0 &&
      !line.startsWith("#") &&
      !line.startsWith("```") &&
      !/^\|?\s*:?-{3,}/.test(line)
    ));
}

function explicitRequirementIds(sectionId: SectionId, fragment: string): string[] {
  const pattern = new RegExp(`\\b${sectionId}-[A-Z0-9][A-Z0-9-]*\\b`, "g");
  return [...new Set(fragment.match(pattern) ?? [])].sort();
}

export function requirementIdsForSection(sectionId: SectionId, fragment: string): string[] {
  const explicit = explicitRequirementIds(sectionId, fragment);
  if (explicit.length > 0) return explicit;
  const lines = materialLines(fragment);
  if (lines.length === 0) return [`${sectionId}-SECTION-${sha256(fragment).slice(7, 19).toUpperCase()}`];
  return lines.map((line) => `${sectionId}-REQ-${sha256(line).slice(7, 19).toUpperCase()}`);
}

function matches(fragment: string, expression: RegExp): string[] {
  return [...new Set(fragment.match(expression) ?? [])].sort();
}

function emptyValue(key: string): unknown {
  if (/^(reference|viewportSurface|container|globalGutters|chrome|stickyMode|menuPanel|focusBehavior|componentTree)$/i.test(key)) {
    return {};
  }
  return [];
}

export function buildSectionPayload(args: {
  sectionId: SectionId;
  trigger: TriggerSnapshot;
  fragment: string;
  evidence: EvidenceReference[];
}): Record<string, unknown> {
  const payload: Record<string, unknown> = Object.fromEntries(
    PAYLOAD_KEYS[args.sectionId].map((key) => [key, emptyValue(key)]),
  );
  const pages = matches(args.fragment, /\bP-[A-Z0-9][A-Z0-9-]*\b/g);
  const routes = matches(args.fragment, /`\/(?:[^`\s]*)`/g).map((route) => route.slice(1, -1));
  const viewports = matches(args.fragment, /\b(?:1440|1280|1024|768|390|360)(?:px)?\b/g)
    .map((value) => Number(value.replace("px", "")));

  if (args.sectionId === "S01") {
    payload.reference = { id: args.trigger.referenceId };
    payload.declaredPages = pages;
    payload.declaredRoutes = routes;
    payload.targetViewports = viewports;
  }
  if (args.sectionId === "S02") {
    payload.evidenceManifest = args.evidence.map((item) => ({
      evidenceId: item.evidenceId,
      kind: item.kind,
      contentHash: item.contentHash,
      localRef: item.localRef,
      ...(item.bounds ? { bounds: item.bounds } : {}),
    }));
    payload.coordinateOrigins = matches(args.fragment, /\b(?:source|prepared|crop|css)\b/gi)
      .map((value) => value.toLowerCase());
  }
  if (args.sectionId === "S03" || args.sectionId === "S06" || args.sectionId === "S18") {
    payload.pages = pages.map((pageId) => ({ pageId }));
  }
  if (args.sectionId === "S09") {
    payload.colors = matches(args.fragment, /#[0-9A-Fa-f]{3,8}\b/g).map((hex) => ({ hex }));
    payload.breakpoints = viewports;
  }
  if (args.sectionId === "S12") payload.viewports = viewports;

  payload.sourceFacts = materialLines(args.fragment).map((text) => ({
    factId: `${args.sectionId}-FACT-${sha256(text).slice(7, 19).toUpperCase()}`,
    text,
  }));
  return payload;
}

export function payloadKeys(sectionId: SectionId): string[] {
  return [...PAYLOAD_KEYS[sectionId]];
}
