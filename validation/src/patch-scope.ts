import { fromMarkdown } from "mdast-util-from-markdown";
import postcss from "postcss";
import type { AuditFinding, NodeAuditInput, NodeAuditOutput } from "./types.ts";

export type PatchScopeExclusionReason =
  | "ALREADY_SATISFIED"
  | "CONTRACT_CONFLICT"
  | "CONTRACT_NOT_PATCHABLE"
  | "DUPLICATE_EXACT_FINDING"
  | "OPTIONAL_NOT_REQUIRED";

export interface PatchScopeExclusion {
  requirementId: string;
  reason: PatchScopeExclusionReason;
  detail: string;
}

export interface PatchScopeResult {
  auditOutput: NodeAuditOutput;
  feedbackOutput: NodeAuditOutput;
  includedRequirementIds: string[];
  excluded: PatchScopeExclusion[];
}

interface ColorValue {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

interface TokenExpectation {
  property: string;
  value: string;
  alpha?: string;
}

function walkMarkdown(node: unknown, visit: (node: Record<string, unknown>) => void): void {
  if (typeof node !== "object" || node === null || Array.isArray(node)) return;
  const record = node as Record<string, unknown>;
  visit(record);
  if (Array.isArray(record.children)) {
    for (const child of record.children) walkMarkdown(child, visit);
  }
}

function contractCustomProperties(fragment: string): Map<string, string[]> {
  const declarations = new Map<string, string[]>();
  const tree = fromMarkdown(fragment);
  walkMarkdown(tree, (node) => {
    if (node.type !== "code" || String(node.lang ?? "").toLowerCase() !== "css") return;
    if (typeof node.value !== "string") return;
    try {
      postcss.parse(node.value, { from: undefined }).walkDecls(/^--/, (declaration) => {
        const values = declarations.get(declaration.prop) ?? [];
        values.push(declaration.value);
        declarations.set(declaration.prop, values);
      });
    } catch {
      // An unparseable contract block cannot establish a safe application value.
    }
  });
  return declarations;
}

function implementationCustomProperties(input: NodeAuditInput): Map<string, string[]> {
  const declarations = new Map<string, string[]>();
  for (const file of input.implementation.files) {
    if (!file.path.endsWith(".css") || file.content === null) continue;
    try {
      postcss.parse(file.content, { from: file.path }).walkDecls(/^--/, (declaration) => {
        const values = declarations.get(declaration.prop) ?? [];
        values.push(declaration.value);
        declarations.set(declaration.prop, values);
      });
    } catch {
      // Keep the finding patchable when the current CSS cannot be proven equivalent.
    }
  }
  return declarations;
}

function implementationCustomPropertyReferences(input: NodeAuditInput): Map<string, Set<string>> {
  const references = new Map<string, Set<string>>();
  for (const file of input.implementation.files) {
    if (!file.path.endsWith(".css") || file.content === null) continue;
    try {
      postcss.parse(file.content, { from: file.path }).walkDecls((declaration) => {
        for (const match of declaration.value.matchAll(/var\(\s*(--[A-Za-z0-9_-]+)/g)) {
          const paths = references.get(match[1]) ?? new Set<string>();
          paths.add(file.path);
          references.set(match[1], paths);
        }
      });
    } catch {
      // Invalid CSS cannot establish a deterministic reference fact.
    }
  }
  return references;
}

function sourceFacts(input: NodeAuditInput): Array<{ factId: string; text: string }> {
  const candidates = input.payload?.sourceFacts;
  if (!Array.isArray(candidates)) return [];
  return candidates.flatMap((candidate) => {
    if (typeof candidate !== "object" || candidate === null || Array.isArray(candidate)) return [];
    const record = candidate as Record<string, unknown>;
    return typeof record.factId === "string" && typeof record.text === "string"
      ? [{ factId: record.factId, text: record.text }]
      : [];
  });
}

function isOptionalInvisibleFinding(
  finding: AuditFinding,
  factsById: ReadonlyMap<string, string>,
): boolean {
  return finding.evidenceRefs.some((factId) => {
    const text = factsById.get(factId) ?? "";
    return /\bOptional\b/i.test(text) && /\bNot visible\b/i.test(text);
  });
}

function tokenExpectation(finding: string): TokenExpectation | null {
  const match = /\bToken\s+`(--[A-Za-z0-9_-]+)`\s+with value\s+`([^`]+)`(?:\s+and alpha\s+`([^`]+)`)?\s+is required but not found\b/i.exec(finding);
  if (!match) return null;
  return { property: match[1], value: match[2], ...(match[3] ? { alpha: match[3] } : {}) };
}

function tokenProperty(finding: string): string | null {
  return tokenExpectation(finding)?.property ?? /(--[A-Za-z0-9_-]+)/.exec(finding)?.[1] ?? null;
}

function htmlRegionAlreadyLabelled(input: NodeAuditInput, finding: AuditFinding): boolean {
  if (
    !/role\s*=?\s*["']?region\b/i.test(finding.finding) ||
    !/aria-label/i.test(finding.finding)
  ) {
    return false;
  }
  const className = /\b([a-z][a-z0-9_-]+)\s+elements?\b/i.exec(finding.finding)?.[1];
  if (!className) return false;

  const referencedFiles = input.implementation.files.filter((file) => (
    finding.implementationRefs.includes(file.path) && file.path.endsWith(".html") && file.content !== null
  ));
  if (referencedFiles.length === 0) return false;

  let matchedTag = false;
  for (const file of referencedFiles) {
    const tags = [...file.content!.matchAll(/<[a-z][^>]*>/gi)]
      .map((match) => match[0])
      .filter((tag) => {
        const classValue = /\bclass\s*=\s*["']([^"']*)["']/i.exec(tag)?.[1] ?? "";
        return classValue.split(/\s+/).includes(className);
      });
    if (tags.length === 0) return false;
    matchedTag = true;
    if (!tags.every((tag) => (
      /\brole\s*=\s*["']region["']/i.test(tag) &&
      /\baria-label\s*=\s*["'][^"']+["']/i.test(tag)
    ))) {
      return false;
    }
  }
  return matchedTag;
}

function exactRequirementIds(output: NodeAuditOutput): Set<string> {
  const value = output.publicOutput.exactContractRequirementIds;
  return new Set(Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []);
}

function parseAlpha(raw: string | undefined): number | null {
  if (raw === undefined) return 1;
  const value = raw.trim();
  const numeric = Number(value.endsWith("%") ? value.slice(0, -1) : value);
  if (!Number.isFinite(numeric)) return null;
  const alpha = value.endsWith("%") ? numeric / 100 : numeric;
  return alpha >= 0 && alpha <= 1 ? alpha : null;
}

function parseHexColor(raw: string, explicitAlpha?: string): ColorValue | null {
  const match = /^#([0-9a-f]{3,8})$/i.exec(raw.trim());
  if (!match || ![3, 4, 6, 8].includes(match[1].length)) return null;
  const expanded = match[1].length <= 4
    ? [...match[1]].map((character) => `${character}${character}`).join("")
    : match[1];
  const alpha = explicitAlpha === undefined
    ? expanded.length === 8 ? Number.parseInt(expanded.slice(6, 8), 16) / 255 : 1
    : parseAlpha(explicitAlpha);
  if (alpha === null) return null;
  return {
    red: Number.parseInt(expanded.slice(0, 2), 16),
    green: Number.parseInt(expanded.slice(2, 4), 16),
    blue: Number.parseInt(expanded.slice(4, 6), 16),
    alpha,
  };
}

function parseRgbColor(raw: string): ColorValue | null {
  const match = /^rgba?\((.*)\)$/i.exec(raw.trim());
  if (!match) return null;
  const [channelSource, alphaSource] = match[1].split("/", 2);
  const channels = channelSource.replaceAll(",", " ").trim().split(/\s+/).map(Number);
  if (channels.length !== 3 || channels.some((channel) => !Number.isFinite(channel) || channel < 0 || channel > 255)) {
    return null;
  }
  const alpha = parseAlpha(alphaSource?.trim());
  if (alpha === null) return null;
  return { red: channels[0], green: channels[1], blue: channels[2], alpha };
}

function parseColor(raw: string, explicitAlpha?: string): ColorValue | null {
  return parseHexColor(raw, explicitAlpha) ?? (explicitAlpha === undefined ? parseRgbColor(raw) : null);
}

function valuesEquivalent(left: string, right: string, leftAlpha?: string): boolean {
  const leftColor = parseColor(left, leftAlpha);
  const rightColor = parseColor(right);
  if (leftColor && rightColor) {
    return leftColor.red === rightColor.red &&
      leftColor.green === rightColor.green &&
      leftColor.blue === rightColor.blue &&
      Math.abs(leftColor.alpha - rightColor.alpha) <= 0.005;
  }
  if (leftAlpha !== undefined) return false;
  const normalize = (value: string) => value.trim().toLowerCase().replaceAll(/\s+/g, " ");
  return normalize(left) === normalize(right);
}

export function augmentAuditWithExactCssFindings(
  input: NodeAuditInput,
  output: NodeAuditOutput,
): { output: NodeAuditOutput; addedRequirementIds: string[] } {
  if (input.node.sectionId !== "S09") return { output, addedRequirementIds: [] };

  const contractTokens = contractCustomProperties(input.contract.designIndexFragment);
  const implementationTokens = implementationCustomProperties(input);
  const references = implementationCustomPropertyReferences(input);
  const facts = sourceFacts(input);
  const knownRequirementIds = new Set(input.node.requirementIds);
  const existingRequirementIds = new Set(output.findings.map((finding) => finding.requirementId));
  const deterministicFindings: AuditFinding[] = [];

  for (const [property, referencedPaths] of references) {
    const contractValues = contractTokens.get(property) ?? [];
    if (contractValues.length === 0) continue;
    const actualValues = implementationTokens.get(property) ?? [];
    if (actualValues.some((actual) => contractValues.some((expected) => valuesEquivalent(expected, actual)))) {
      continue;
    }
    const sourceFact = facts.find((fact) => fact.text.trim().startsWith(`${property}:`));
    if (!sourceFact) continue;
    const requirementId = sourceFact.factId.replace("-FACT-", "-REQ-");
    if (!knownRequirementIds.has(requirementId) || existingRequirementIds.has(requirementId)) continue;
    const expectedValue = contractValues[0];
    deterministicFindings.push({
      requirementId,
      pageId: null,
      componentId: property,
      status: "MISSING",
      finding: actualValues.length === 0
        ? `Token \`${property}\` with value \`${expectedValue}\` is required but not found in the supplied CSS.`
        : `Token \`${property}\` must use exact contract value \`${expectedValue}\`; the supplied CSS uses a different value.`,
      evidenceRefs: [sourceFact.factId],
      implementationRefs: [...referencedPaths].sort(),
      proposedValue: null,
    });
  }

  if (deterministicFindings.length === 0) return { output, addedRequirementIds: [] };
  const findings = output.status === "PATCH_REQUIRED"
    ? [...output.findings, ...deterministicFindings]
    : deterministicFindings;
  const addedRequirementIds = deterministicFindings.map((finding) => finding.requirementId);
  return {
    output: {
      ...output,
      status: "PATCH_REQUIRED",
      findings,
      publicOutput: {
        ...output.publicOutput,
        exactContractRequirementIds: addedRequirementIds,
      },
    },
    addedRequirementIds,
  };
}

export function buildPatchScope(input: NodeAuditInput, output: NodeAuditOutput): PatchScopeResult {
  if (output.status !== "PATCH_REQUIRED") {
    return { auditOutput: output, feedbackOutput: output, includedRequirementIds: [], excluded: [] };
  }

  const contractTokens = contractCustomProperties(input.contract.designIndexFragment);
  const implementationTokens = implementationCustomProperties(input);
  const implementationReferences = implementationCustomPropertyReferences(input);
  const factsById = new Map(sourceFacts(input).map((fact) => [fact.factId, fact.text]));
  const exactIds = exactRequirementIds(output);
  const exactProperties = new Set(output.findings.flatMap((finding) => (
    exactIds.has(finding.requirementId) && typeof finding.componentId === "string" && finding.componentId.startsWith("--")
      ? [finding.componentId]
      : []
  )));
  const included = [];
  const excluded: PatchScopeExclusion[] = [];
  const includedByOriginal = new Map<AuditFinding, AuditFinding>();
  const nonActionableFindings = new Set<AuditFinding>();
  const synthesizedExactIds = new Set<string>();

  for (const finding of output.findings) {
    if (htmlRegionAlreadyLabelled(input, finding)) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "ALREADY_SATISFIED",
        detail: "Every referenced region already has role=region and a non-empty aria-label in the supplied HTML.",
      });
      nonActionableFindings.add(finding);
      continue;
    }
    const expected = tokenExpectation(finding.finding);
    const property = tokenProperty(finding.finding);
    if (!property) {
      included.push(finding);
      continue;
    }

    if (!exactIds.has(finding.requirementId) && exactProperties.has(property)) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "DUPLICATE_EXACT_FINDING",
        detail: `${property} is covered by a structurally grounded exact-contract finding.`,
      });
      nonActionableFindings.add(finding);
      continue;
    }

    const contractValues = contractTokens.get(property) ?? [];
    if (isOptionalInvisibleFinding(finding, factsById)) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "OPTIONAL_NOT_REQUIRED",
        detail: `${property} is explicitly optional and not visible in the assigned DESIGN_INDEX evidence.`,
      });
      nonActionableFindings.add(finding);
      continue;
    }
    if (contractValues.length === 0) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "CONTRACT_NOT_PATCHABLE",
        detail: `${property} is not declared in a CSS code block in the assigned DESIGN_INDEX Section.`,
      });
      continue;
    }
    if (expected && !contractValues.some((value) => valuesEquivalent(expected.value, value, expected.alpha))) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "CONTRACT_CONFLICT",
        detail: `${property} finding value does not match the assigned DESIGN_INDEX CSS declaration.`,
      });
      continue;
    }
    if ((implementationTokens.get(property) ?? []).some((value) => (
      contractValues.some((contractValue) => valuesEquivalent(contractValue, value))
    ))) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "ALREADY_SATISFIED",
        detail: `${property} already has the exact DESIGN_INDEX value in the supplied implementation.`,
      });
      nonActionableFindings.add(finding);
      continue;
    }
    if (!expected && !exactIds.has(finding.requirementId) && !implementationReferences.has(property)) {
      if (finding.status === "MISSING" && contractValues.length === 1) {
        const exactFinding = {
          ...finding,
          componentId: finding.componentId ?? property,
          finding: `Token \`${property}\` with value \`${contractValues[0]}\` is required but not found in the supplied CSS.`,
        };
        included.push(exactFinding);
        includedByOriginal.set(finding, exactFinding);
        synthesizedExactIds.add(finding.requirementId);
        continue;
      }
      excluded.push({
        requirementId: finding.requirementId,
        reason: "CONTRACT_NOT_PATCHABLE",
        detail: `${property} is not referenced by the supplied implementation and has no single exact contract value.`,
      });
      continue;
    }
    included.push(finding);
    includedByOriginal.set(finding, finding);
  }

  const exactContractRequirementIds = [...new Set([
    ...exactIds,
    ...synthesizedExactIds,
  ])];

  return {
    auditOutput: {
      ...output,
      findings: included,
      publicOutput: {
        ...output.publicOutput,
        ...(exactContractRequirementIds.length > 0 ? { exactContractRequirementIds } : {}),
      },
    },
    feedbackOutput: {
      ...output,
      findings: output.findings.flatMap((finding) => (
        nonActionableFindings.has(finding)
          ? []
          : [includedByOriginal.get(finding) ?? finding]
      )),
    },
    includedRequirementIds: included.map((finding) => finding.requirementId),
    excluded,
  };
}
