import { sha256 } from "./hash.ts";
import type {
  AtomicRequirementLeaf,
  DocumentAuditOutput,
  SectionId,
  Sha256,
} from "./types.ts";

export interface DocumentLeafReportRecord {
  leaf: AtomicRequirementLeaf;
  requestId: string;
  attemptRequestIds: string[];
  output: DocumentAuditOutput;
  outputHash: Sha256;
  rawResponseHash: Sha256;
}

export interface DocumentSectionReport {
  sectionId: SectionId;
  status: DocumentAuditOutput["status"];
  fingerprint: Sha256;
  content: string;
  contentHash: Sha256;
  byteLength: number;
  leafCount: number;
}

export interface DocumentGapReportBundle {
  targetId: string;
  triggerPath: string;
  runId: string;
  sectionReports: DocumentSectionReport[];
  combinedContent: string;
  combinedHash: Sha256;
  manifest: {
    schemaVersion: "design-validation/document-gap-report/v1";
    targetId: string;
    triggerPath: string;
    reportHash: Sha256;
    sections: Array<{
      sectionId: SectionId;
      status: DocumentAuditOutput["status"];
      fingerprint: Sha256;
      contentHash: Sha256;
      byteLength: number;
      leafCount: number;
    }>;
  };
}

export interface VerbatimReportChunk {
  index: number;
  total: number;
  content: string;
  contentHash: Sha256;
  byteLength: number;
}

function normalizedOutput(output: DocumentAuditOutput): string {
  return `${JSON.stringify(output, null, 2)}\n`;
}

export function buildDocumentSectionReport(args: {
  targetId: string;
  triggerPath: string;
  output: DocumentAuditOutput;
  leafRecords?: DocumentLeafReportRecord[];
}): DocumentSectionReport {
  const rawOutput = normalizedOutput(args.output);
  const leafRecords = [...(args.leafRecords ?? [])]
    .sort((left, right) => (
      left.leaf.startOffset - right.leaf.startOffset ||
      left.leaf.requirementId.localeCompare(right.leaf.requirementId)
    ));
  const rawLeafRecords = `${JSON.stringify(leafRecords, null, 2)}\n`;
  const content = [
    `# ${args.output.sectionId} Stage 1 document audit`,
    "",
    `- Target: \`${args.targetId}\``,
    `- Trigger: \`${args.triggerPath}\``,
    `- Status: \`${args.output.status}\``,
    `- Fingerprint: \`${args.output.fingerprint}\``,
    `- Normalized output SHA-256: \`${sha256(rawOutput)}\``,
    `- Leaf records: \`${leafRecords.length}\``,
    `- Leaf records SHA-256: \`${sha256(rawLeafRecords)}\``,
    "",
    "## Verbatim normalized Section output",
    "",
    "The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.",
    "",
    "```json",
    rawOutput.trimEnd(),
    "```",
    "",
    "## Verbatim normalized leaf records",
    "",
    "Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.",
    "",
    "```json",
    rawLeafRecords.trimEnd(),
    "```",
    "",
  ].join("\n");
  return {
    sectionId: args.output.sectionId,
    status: args.output.status,
    fingerprint: args.output.fingerprint,
    content,
    contentHash: sha256(content),
    byteLength: Buffer.byteLength(content),
    leafCount: leafRecords.length,
  };
}

export function buildDocumentGapReportBundle(args: {
  targetId: string;
  triggerPath: string;
  runId: string;
  outputs: DocumentAuditOutput[];
  leafRecords?: DocumentLeafReportRecord[];
}): DocumentGapReportBundle {
  const sectionReports = args.outputs
    .filter((output) => output.status !== "PASS")
    .sort((left, right) => left.sectionId.localeCompare(right.sectionId))
    .map((output) => buildDocumentSectionReport({
      targetId: args.targetId,
      triggerPath: args.triggerPath,
      output,
      leafRecords: args.leafRecords?.filter((record) => record.leaf.sectionId === output.sectionId),
    }));
  const header = [
    "# Stage 1 DOCUMENT_GAPS",
    "",
    `- Target: \`${args.targetId}\``,
    `- Trigger: \`${args.triggerPath}\``,
    `- Section reports: \`${sectionReports.length}\``,
    "",
    "Every embedded Section report is preserved verbatim between its BEGIN and END markers. This file contains no LLM-generated summary.",
    "",
  ].join("\n");
  const combinedContent = `${header}${sectionReports.map((report) => (
    `<!-- BEGIN VERBATIM ${report.sectionId} ${report.contentHash} ${report.byteLength} -->\n` +
    report.content +
    `<!-- END VERBATIM ${report.sectionId} -->\n\n`
  )).join("")}`;
  const combinedHash = sha256(combinedContent);
  const manifestBase = {
    schemaVersion: "design-validation/document-gap-report/v1" as const,
    targetId: args.targetId,
    triggerPath: args.triggerPath,
    reportHash: combinedHash,
    sections: sectionReports.map((report) => ({
      sectionId: report.sectionId,
      status: report.status,
      fingerprint: report.fingerprint,
      contentHash: report.contentHash,
      byteLength: report.byteLength,
      leafCount: report.leafCount,
    })),
  };
  return {
    targetId: args.targetId,
    triggerPath: args.triggerPath,
    runId: args.runId,
    sectionReports,
    combinedContent,
    combinedHash,
    manifest: manifestBase,
  };
}

export function chunkVerbatimReport(content: string, maxBytes = 55_000): VerbatimReportChunk[] {
  if (maxBytes < 1) throw new Error("maxBytes must be positive.");
  const chunks: string[] = [];
  let current = "";
  for (const character of content) {
    if (current && Buffer.byteLength(current + character) > maxBytes) {
      chunks.push(current);
      current = "";
    }
    current += character;
  }
  if (current || content.length === 0) chunks.push(current);
  return chunks.map((value, index) => ({
    index: index + 1,
    total: chunks.length,
    content: value,
    contentHash: sha256(value),
    byteLength: Buffer.byteLength(value),
  }));
}
