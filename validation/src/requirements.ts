import { hashJson, sha256 } from "./hash.ts";
import type {
  AtomicRequirementLeaf,
  DocumentAuditInput,
  DocumentAuditOutput,
  MarkdownSection,
  MarkdownSourceFragment,
  NodeAuditInput,
  NodeAuditOutput,
  RequirementInventory,
  RequirementSourceSpan,
  RequirementStage,
  SectionId,
  Sha256,
} from "./types.ts";

interface SourceFragment {
  sourcePath: string;
  sourceKind: RequirementSourceSpan["sourceKind"];
  source: string;
  baseOffset: number;
  baseLine: number;
  idPrefix: string;
}

function lineSegments(source: string): Array<{ start: number; end: number; raw: string }> {
  if (source.length === 0) return [];
  const result: Array<{ start: number; end: number; raw: string }> = [];
  let start = 0;
  while (start < source.length) {
    const newline = source.indexOf("\n", start);
    const end = newline < 0 ? source.length : newline + 1;
    result.push({ start, end, raw: source.slice(start, end) });
    start = end;
  }
  return result;
}

function contentKind(raw: string, inFence: boolean): RequirementSourceSpan["contentKind"] {
  const text = raw.replace(/\r?\n$/, "");
  const trimmed = text.trim();
  if (trimmed === "") return "whitespace";
  if (/^(?:```|~~~)/.test(trimmed)) return "fence";
  if (inFence) return "leaf";
  if (/^#{1,6}\s+/.test(trimmed)) return "heading";
  if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(trimmed)) return "thematic-break";
  if (/^\|?(?:\s*:?-{3,}:?\s*\|)+(?:\s*:?-{3,}:?\s*)?$/.test(trimmed)) return "table-separator";
  return "leaf";
}

function fragmentSpans(sectionId: SectionId, fragment: SourceFragment): RequirementSourceSpan[] {
  const spans: RequirementSourceSpan[] = [];
  let inFence = false;
  let line = fragment.baseLine;
  let unit = 1;
  for (const segment of lineSegments(fragment.source)) {
    const kind = contentKind(segment.raw, inFence);
    const trimmed = segment.raw.trim();
    spans.push({
      sourceUnitId: `${sectionId}-${fragment.idPrefix}${String(unit).padStart(4, "0")}`,
      sectionId,
      sourcePath: fragment.sourcePath,
      sourceKind: fragment.sourceKind,
      contentKind: kind,
      startOffset: fragment.baseOffset + Buffer.byteLength(fragment.source.slice(0, segment.start)),
      endOffset: fragment.baseOffset + Buffer.byteLength(fragment.source.slice(0, segment.end)),
      startLine: line,
      endLine: line,
      raw: segment.raw,
      contentHash: sha256(segment.raw),
    });
    if (kind === "fence" && /^(?:```|~~~)/.test(trimmed)) inFence = !inFence;
    line += 1;
    unit += 1;
  }
  return spans;
}

function assertFragmentCoverage(fragment: SourceFragment, spans: RequirementSourceSpan[]): void {
  const expectedStart = fragment.baseOffset;
  const expectedEnd = fragment.baseOffset + Buffer.byteLength(fragment.source);
  let cursor = expectedStart;
  for (const span of spans) {
    if (span.startOffset !== cursor) {
      throw new Error(`UNCOVERED_SOURCE_RANGE: ${fragment.sourcePath}:${cursor}-${span.startOffset}.`);
    }
    cursor = span.endOffset;
  }
  if (cursor !== expectedEnd) {
    throw new Error(`UNCOVERED_SOURCE_RANGE: ${fragment.sourcePath}:${cursor}-${expectedEnd}.`);
  }
}

function leafId(stage: RequirementStage, span: RequirementSourceSpan): string {
  const stageCode = stage === "document" ? "DOC" : "IMPL";
  return `${span.sectionId}-${stageCode}-${span.sourceUnitId.split("-").slice(1).join("-")}-R001`;
}

export function buildRequirementInventory(args: {
  stage: RequirementStage;
  sectionId: SectionId;
  fragments: SourceFragment[];
}): RequirementInventory {
  const spans = args.fragments.flatMap((fragment) => {
    const values = fragmentSpans(args.sectionId, fragment);
    assertFragmentCoverage(fragment, values);
    return values;
  });
  const leaves = spans
    .filter((span) => span.contentKind === "leaf")
    .map((span): AtomicRequirementLeaf => {
      const requirementId = leafId(args.stage, span);
      const statement = span.raw.replace(/\r?\n$/, "");
      return {
        requirementId,
        stage: args.stage,
        sectionId: args.sectionId,
        sourceUnitId: span.sourceUnitId,
        sourcePath: span.sourcePath,
        sourceKind: span.sourceKind,
        startOffset: span.startOffset,
        endOffset: span.endOffset,
        startLine: span.startLine,
        endLine: span.endLine,
        statement,
        sourceHash: span.contentHash,
        fingerprint: hashJson({
          schemaVersion: "design-validation/requirement-leaf/v1",
          stage: args.stage,
          requirementId,
          sourcePath: span.sourcePath,
          sourceHash: span.contentHash,
        }),
      };
    });
  const totalBytes = args.fragments.reduce((total, fragment) => total + Buffer.byteLength(fragment.source), 0);
  const coveredBytes = spans.reduce((total, span) => total + Buffer.byteLength(span.raw), 0);
  if (coveredBytes !== totalBytes) {
    throw new Error(`SOURCE_COVERAGE_MISMATCH: ${args.sectionId} covers ${coveredBytes}/${totalBytes} bytes.`);
  }
  if (leaves.length === 0) throw new Error(`EMPTY_REQUIREMENT_INVENTORY: ${args.sectionId} ${args.stage}.`);
  const inventoryBase = {
    schemaVersion: "design-validation/requirement-inventory/v1" as const,
    stage: args.stage,
    sectionId: args.sectionId,
    sourcePaths: [...new Set(args.fragments.map((fragment) => fragment.sourcePath))],
    spans,
    leaves,
    coveredBytes,
    totalBytes,
    uncoveredRanges: [],
  };
  return { ...inventoryBase, inventoryHash: hashJson(inventoryBase) };
}

export function buildDocumentRequirementInventory(args: {
  sectionId: SectionId;
  specificationPath: string;
  globalRules: string;
  globalFragments?: MarkdownSourceFragment[];
  section: MarkdownSection;
}): RequirementInventory {
  const fragments: SourceFragment[] = [
    ...(args.sectionId === "S01"
      ? (args.globalFragments ?? [{
        source: args.globalRules,
        startOffset: 0,
        endOffset: Buffer.byteLength(args.globalRules),
        startLine: 1,
      }]).map((fragment, index) => ({
        sourcePath: args.specificationPath,
        sourceKind: "global-rule" as const,
        source: fragment.source,
        baseOffset: fragment.startOffset,
        baseLine: fragment.startLine,
        idPrefix: `G${index + 1}-`,
      }))
      : []),
    {
      sourcePath: args.specificationPath,
      sourceKind: "section",
      source: args.section.fragment,
      baseOffset: args.section.startOffset,
      baseLine: args.section.startLine,
      idPrefix: "U",
    },
  ];
  return buildRequirementInventory({
    stage: "document",
    sectionId: args.sectionId,
    fragments: fragments.filter((fragment) => fragment.source.length > 0),
  });
}

export function buildImplementationRequirementInventory(args: {
  sectionId: SectionId;
  triggerPath: string;
  section: MarkdownSection;
  preambleFragments?: MarkdownSourceFragment[];
}): RequirementInventory {
  return buildRequirementInventory({
    stage: "implementation",
    sectionId: args.sectionId,
    fragments: [
      ...(args.sectionId === "S01" ? (args.preambleFragments ?? []).map((fragment, index) => ({
        sourcePath: args.triggerPath,
        sourceKind: "document-preamble" as const,
        source: fragment.source,
        baseOffset: fragment.startOffset,
        baseLine: fragment.startLine,
        idPrefix: `P${index + 1}-`,
      })) : []),
      {
        sourcePath: args.triggerPath,
        sourceKind: "section",
        source: args.section.fragment,
        baseOffset: args.section.startOffset,
        baseLine: args.section.startLine,
        idPrefix: "U",
      },
    ],
  });
}

export function assertWholeDocumentCoverage(args: {
  sourcePath: string;
  source: string;
  inventories: Map<SectionId, RequirementInventory>;
}): { coveredBytes: number; totalBytes: number; spanCount: number } {
  const spans = [...args.inventories.values()]
    .flatMap((inventory) => inventory.spans)
    .filter((span) => span.sourcePath === args.sourcePath)
    .sort((left, right) => left.startOffset - right.startOffset || left.endOffset - right.endOffset);
  let cursor = 0;
  for (const span of spans) {
    if (span.startOffset !== cursor) {
      const kind = span.startOffset < cursor ? "OVERLAPPING_SOURCE_RANGE" : "UNCOVERED_SOURCE_RANGE";
      throw new Error(`${kind}: ${args.sourcePath}:${cursor}-${span.startOffset}.`);
    }
    cursor = span.endOffset;
  }
  const sourceBytes = Buffer.byteLength(args.source);
  if (cursor !== sourceBytes) {
    throw new Error(`UNCOVERED_SOURCE_RANGE: ${args.sourcePath}:${cursor}-${sourceBytes}.`);
  }
  return {
    coveredBytes: Buffer.byteLength(args.source),
    totalBytes: Buffer.byteLength(args.source),
    spanCount: spans.length,
  };
}

export function bindDocumentRequirementInventory(
  base: DocumentAuditInput,
  inventory: RequirementInventory,
): DocumentAuditInput {
  if (inventory.stage !== "document" || inventory.sectionId !== base.node.sectionId) {
    throw new Error(`Document inventory does not belong to ${base.node.sectionId}.`);
  }
  return {
    ...base,
    node: {
      ...base.node,
      fingerprint: hashJson({
        auditMode: "bottom-up-atomic-source-leaf/v4",
        sourceOffsetUnit: "utf8-byte/v1",
        parentFingerprint: base.node.fingerprint,
        inventoryHash: inventory.inventoryHash,
      }),
    },
    payload: {
      ...base.payload,
      requirementInventoryHash: inventory.inventoryHash,
      requirementLeafCount: inventory.leaves.length,
      sourceCoverage: `${inventory.coveredBytes}/${inventory.totalBytes}`,
    },
  };
}

export function bindImplementationRequirementInventory(
  base: NodeAuditInput,
  inventory: RequirementInventory,
): NodeAuditInput {
  if (inventory.stage !== "implementation" || inventory.sectionId !== base.node.sectionId) {
    throw new Error(`Implementation inventory does not belong to ${base.node.sectionId}.`);
  }
  return {
    ...base,
    node: {
      ...base.node,
      fingerprint: hashJson({
        auditMode: "bottom-up-atomic-source-leaf/v4",
        sourceOffsetUnit: "utf8-byte/v1",
        parentFingerprint: base.node.fingerprint,
        inventoryHash: inventory.inventoryHash,
      }),
    },
    payload: {
      ...base.payload,
      requirementInventoryHash: inventory.inventoryHash,
      requirementLeafCount: inventory.leaves.length,
      sourceCoverage: `${inventory.coveredBytes}/${inventory.totalBytes}`,
    },
  };
}

export function documentLeafInput(
  base: DocumentAuditInput,
  leaf: AtomicRequirementLeaf,
  completeDesignIndex?: string,
): DocumentAuditInput {
  return {
    ...base,
    node: {
      ...base.node,
      name: `${base.node.name} / ${leaf.requirementId}`,
      fingerprint: hashJson({ base: base.node.fingerprint, leaf: leaf.fingerprint }),
      leaf,
    },
    contract: {
      ...base.contract,
      specificationGlobalRules: leaf.sourceKind === "global-rule" ? leaf.statement : "",
      specificationFragment: leaf.sourceKind === "section" ? leaf.statement : "",
      designIndexFragment: leaf.sourceKind === "global-rule" && completeDesignIndex
        ? completeDesignIndex
        : base.contract.designIndexFragment,
    },
    payload: {
      requirementLeaf: leaf,
      designIndexSectionHash: base.contract.designIndexSource.sectionHash,
    },
  };
}

export function implementationLeafInput(base: NodeAuditInput, leaf: AtomicRequirementLeaf): NodeAuditInput {
  return {
    ...base,
    node: {
      ...base.node,
      name: `${base.node.name} / ${leaf.requirementId}`,
      requirementIds: [leaf.requirementId],
      fingerprint: hashJson({ base: base.node.fingerprint, leaf: leaf.fingerprint }),
      leaf,
    },
    contract: { ...base.contract, designIndexFragment: leaf.statement },
    payload: {
      requirementLeaf: leaf,
      implementationFileHashes: base.implementation.files.map((file) => ({ path: file.path, hash: file.contentHash })),
    },
  };
}

function documentStatus(outputs: DocumentAuditOutput[]): DocumentAuditOutput["status"] {
  const order: DocumentAuditOutput["status"][] = [
    "UNKNOWN",
    "BLOCKED_CONTRACT_CONFLICT",
    "BLOCKED_MISSING_EVIDENCE",
    "DOCUMENT_GAP",
    "PASS",
  ];
  return order.find((status) => outputs.some((output) => output.status === status)) ?? "UNKNOWN";
}

function implementationStatus(outputs: NodeAuditOutput[]): NodeAuditOutput["status"] {
  const order: NodeAuditOutput["status"][] = [
    "UNKNOWN",
    "BLOCKED_CONTRACT_CONFLICT",
    "BLOCKED_MISSING_EVIDENCE",
    "PATCH_REQUIRED",
    "PASS",
  ];
  return order.find((status) => outputs.some((output) => output.status === status)) ?? "UNKNOWN";
}

function ownedFindings<T extends DocumentAuditOutput | NodeAuditOutput>(
  leaf: AtomicRequirementLeaf,
  output: T,
): T["findings"] {
  return output.findings.map((finding, index) => ({
    ...finding,
    requirementId: output.findings.length === 1
      ? leaf.requirementId
      : `${leaf.requirementId}-${String(index + 1).padStart(2, "0")}`,
  })) as T["findings"];
}

export function aggregateDocumentLeafOutputs(args: {
  sectionId: SectionId;
  fingerprint: Sha256;
  results: Array<{ leaf: AtomicRequirementLeaf; output: DocumentAuditOutput }>;
}): DocumentAuditOutput {
  const outputs = args.results.map((result) => result.output);
  const status = documentStatus(outputs);
  return {
    schemaVersion: "design-validation/document-audit-output/v1",
    sectionId: args.sectionId,
    fingerprint: args.fingerprint,
    status,
    findings: status === "PASS"
      ? []
      : args.results.flatMap(({ leaf, output }) => ownedFindings(leaf, output)),
    publicOutput: {
      auditMode: "bottom-up-leaf-v4",
      leafCount: args.results.length,
      passLeafCount: outputs.filter((output) => output.status === "PASS").length,
    },
  };
}

export function aggregateImplementationLeafOutputs(args: {
  sectionId: SectionId;
  fingerprint: Sha256;
  results: Array<{ leaf: AtomicRequirementLeaf; output: NodeAuditOutput }>;
}): NodeAuditOutput {
  const outputs = args.results.map((result) => result.output);
  const status = implementationStatus(outputs);
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId: args.sectionId,
    fingerprint: args.fingerprint,
    status,
    findings: status === "PASS"
      ? []
      : args.results.flatMap(({ leaf, output }) => ownedFindings(leaf, output)),
    publicOutput: {
      auditMode: "bottom-up-leaf-v4",
      leafCount: args.results.length,
      passLeafCount: outputs.filter((output) => output.status === "PASS").length,
    },
  };
}
