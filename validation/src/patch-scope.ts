import { fromMarkdown } from "mdast-util-from-markdown";
import postcss from "postcss";
import type { NodeAuditInput, NodeAuditOutput } from "./types.ts";

export type PatchScopeExclusionReason =
  | "ALREADY_SATISFIED"
  | "CONTRACT_CONFLICT"
  | "CONTRACT_NOT_PATCHABLE";

export interface PatchScopeExclusion {
  requirementId: string;
  reason: PatchScopeExclusionReason;
  detail: string;
}

export interface PatchScopeResult {
  auditOutput: NodeAuditOutput;
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

function tokenExpectation(finding: string): TokenExpectation | null {
  const match = /\bToken\s+`(--[A-Za-z0-9_-]+)`\s+with value\s+`([^`]+)`(?:\s+and alpha\s+`([^`]+)`)?\s+is required but not found\b/i.exec(finding);
  if (!match) return null;
  return { property: match[1], value: match[2], ...(match[3] ? { alpha: match[3] } : {}) };
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

export function buildPatchScope(input: NodeAuditInput, output: NodeAuditOutput): PatchScopeResult {
  if (output.status !== "PATCH_REQUIRED") {
    return { auditOutput: output, includedRequirementIds: [], excluded: [] };
  }

  const contractTokens = contractCustomProperties(input.contract.designIndexFragment);
  const implementationTokens = implementationCustomProperties(input);
  const included = [];
  const excluded: PatchScopeExclusion[] = [];

  for (const finding of output.findings) {
    const expected = tokenExpectation(finding.finding);
    if (!expected) {
      included.push(finding);
      continue;
    }

    const contractValues = contractTokens.get(expected.property) ?? [];
    if (contractValues.length === 0) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "CONTRACT_NOT_PATCHABLE",
        detail: `${expected.property} is not declared in a CSS code block in the assigned DESIGN_INDEX Section.`,
      });
      continue;
    }
    if (!contractValues.some((value) => valuesEquivalent(expected.value, value, expected.alpha))) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "CONTRACT_CONFLICT",
        detail: `${expected.property} finding value does not match the assigned DESIGN_INDEX CSS declaration.`,
      });
      continue;
    }
    if ((implementationTokens.get(expected.property) ?? []).some((value) => (
      contractValues.some((contractValue) => valuesEquivalent(contractValue, value))
    ))) {
      excluded.push({
        requirementId: finding.requirementId,
        reason: "ALREADY_SATISFIED",
        detail: `${expected.property} already has the exact DESIGN_INDEX value in the supplied implementation.`,
      });
      continue;
    }
    included.push(finding);
  }

  return {
    auditOutput: { ...output, findings: included },
    includedRequirementIds: included.map((finding) => finding.requirementId),
    excluded,
  };
}
