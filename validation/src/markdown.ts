import { readFile } from "node:fs/promises";
import path from "node:path";
import { fromMarkdown } from "mdast-util-from-markdown";
import type { Content, Heading, PhrasingContent, Root } from "mdast";
import { sha256 } from "./hash.ts";
import type {
  MarkdownSection,
  SectionId,
  SpecificationSnapshot,
  TriggerSnapshot,
} from "./types.ts";

function nodeText(node: Content | PhrasingContent): string {
  if ("value" in node && typeof node.value === "string") {
    return node.value;
  }
  if ("children" in node && Array.isArray(node.children)) {
    return node.children.map((child) => nodeText(child)).join("");
  }
  return "";
}

function numberedHeading(heading: Heading): { number: number; text: string } | null {
  const text = nodeText(heading).trim();
  const match = /^(\d{1,2})\.\s+(.+)$/.exec(text);
  if (!match) return null;
  return { number: Number(match[1]), text };
}

function headingOffsets(heading: Heading): { start: number; end: number } {
  const start = heading.position?.start.offset;
  const end = heading.position?.end.offset;
  if (start === undefined || end === undefined) {
    throw new Error("Markdown parser did not return source offsets for a heading.");
  }
  return { start, end };
}

function utf8Offset(source: string, characterOffset: number): number {
  return Buffer.byteLength(source.slice(0, characterOffset));
}

export function extractNumberedSections(
  source: string,
  expectedDepth: 2 | 3,
): { sections: Map<SectionId, MarkdownSection>; ranges: Array<{ start: number; end: number }> } {
  const tree: Root = fromMarkdown(source);
  const headings = tree.children.filter((node): node is Heading => node.type === "heading");
  const candidates = headings
    .map((heading, index) => ({ heading, index, parsed: numberedHeading(heading) }))
    .filter(
      (entry): entry is { heading: Heading; index: number; parsed: { number: number; text: string } } =>
        entry.heading.depth === expectedDepth && entry.parsed !== null,
    );

  const sections = new Map<SectionId, MarkdownSection>();
  const ranges: Array<{ start: number; end: number }> = [];

  for (const candidate of candidates) {
    const { number, text } = candidate.parsed;
    if (number < 1 || number > 19) continue;

    const id = `S${String(number).padStart(2, "0")}` as SectionId;
    if (sections.has(id)) {
      throw new Error(`Duplicate numbered Markdown Section: ${number}`);
    }

    const { start } = headingOffsets(candidate.heading);
    const nextBoundary = headings
      .slice(candidate.index + 1)
      .find((heading) => {
        if (heading.depth < expectedDepth) return true;
        if (heading.depth !== expectedDepth) return false;
        const parsed = numberedHeading(heading);
        return parsed !== null && parsed.number >= 1 && parsed.number <= 19;
      });
    const end = nextBoundary ? headingOffsets(nextBoundary).start : source.length;
    const fragment = source.slice(start, end);

    sections.set(id, {
      id,
      number,
      heading: text,
      fragment,
      hash: sha256(fragment),
      startOffset: utf8Offset(source, start),
      endOffset: utf8Offset(source, end),
      startLine: candidate.heading.position?.start.line ?? 1,
      endLine: nextBoundary?.position?.start.line
        ? Math.max(candidate.heading.position?.start.line ?? 1, nextBoundary.position.start.line - 1)
        : (candidate.heading.position?.start.line ?? 1) + fragment.split("\n").length - 1,
    });
    ranges.push({ start, end });
  }

  const expected = Array.from({ length: 19 }, (_, index) =>
    `S${String(index + 1).padStart(2, "0")}`,
  );
  const actual = [...sections.keys()].sort();
  if (actual.length !== 19 || expected.some((id, index) => actual[index] !== id)) {
    throw new Error(
      `FAILED_TRIGGER_STRUCTURE: expected S01-S19 exactly once, found ${actual.join(", ") || "none"}.`,
    );
  }

  return { sections, ranges: ranges.sort((a, b) => a.start - b.start) };
}

function sourceLineAtOffset(source: string, offset: number): number {
  return source.slice(0, offset).split("\n").length;
}

function withoutRanges(
  source: string,
  ranges: Array<{ start: number; end: number }>,
): Array<{ source: string; startOffset: number; endOffset: number; startLine: number }> {
  const fragments: Array<{ source: string; startOffset: number; endOffset: number; startLine: number }> = [];
  let cursor = 0;
  for (const range of ranges) {
    if (range.start > cursor) {
      fragments.push({
        source: source.slice(cursor, range.start),
        startOffset: utf8Offset(source, cursor),
        endOffset: utf8Offset(source, range.start),
        startLine: sourceLineAtOffset(source, cursor),
      });
    }
    cursor = Math.max(cursor, range.end);
  }
  if (cursor < source.length) {
    fragments.push({
      source: source.slice(cursor),
      startOffset: utf8Offset(source, cursor),
      endOffset: Buffer.byteLength(source),
      startLine: sourceLineAtOffset(source, cursor),
    });
  }
  return fragments;
}

export async function readSpecification(
  repositoryRoot: string,
  relativePath: string,
): Promise<SpecificationSnapshot> {
  const source = await readFile(path.join(repositoryRoot, relativePath), "utf8");
  const { sections, ranges } = extractNumberedSections(source, 3);
  const globalFragments = withoutRanges(source, ranges);
  const globalRules = globalFragments.map((fragment) => fragment.source).join("");
  return {
    path: relativePath,
    documentHash: sha256(source),
    source,
    globalRules,
    globalRulesHash: sha256(globalRules),
    globalFragments,
    sections,
  };
}
export async function readTrigger(
  repositoryRoot: string,
  relativePath: string,
): Promise<TriggerSnapshot> {
  const normalized = relativePath.split(path.sep).join("/");
  if (!/^trigger\/DESIGN_INDEX_gdweb-[A-Za-z0-9_-]+\.md$/.test(normalized)) {
    throw new Error(`Trigger path is outside the immutable input contract: ${relativePath}`);
  }
  const referenceMatch = /DESIGN_INDEX_(gdweb-[A-Za-z0-9_-]+)\.md$/.exec(normalized);
  if (!referenceMatch) throw new Error(`Cannot derive GDWEB reference ID from ${relativePath}`);

  const source = await readFile(path.join(repositoryRoot, relativePath), "utf8");
  const { sections, ranges } = extractNumberedSections(source, 2);
  return {
    path: normalized,
    referenceId: referenceMatch[1] as `gdweb-${string}`,
    documentHash: sha256(source),
    source,
    preambleFragments: withoutRanges(source, ranges),
    sections,
  };
}
