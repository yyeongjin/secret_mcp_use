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
  manifestContent: string;
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

function exactTextBlock(args: {
  label: "SPECIFICATION SOURCE" | "GAP FINDING";
  requirementId: string;
  content: string;
}): string {
  return [
    `<!-- BEGIN EXACT ${args.label} ${args.requirementId} ${sha256(args.content)} -->`,
    args.content,
    `<!-- END EXACT ${args.label} ${args.requirementId} -->`,
  ].join("\n");
}

export function buildDocumentSectionReport(args: {
  targetId: string;
  triggerPath: string;
  output: DocumentAuditOutput;
  leafRecords?: DocumentLeafReportRecord[];
}): DocumentSectionReport {
  const leafRecords = [...(args.leafRecords ?? [])]
    .sort((left, right) => (
      left.leaf.startOffset - right.leaf.startOffset ||
      left.leaf.requirementId.localeCompare(right.leaf.requirementId)
    ));
  const gapEntries = leafRecords.flatMap((record) => (
    record.output.status === "PASS"
      ? []
      : record.output.findings.map((finding) => ({ record, finding }))
  ));
  const aggregateFindingIds = new Set(args.output.findings.map((finding) => finding.requirementId));
  const reportFindingIds = new Set(gapEntries.map(({ finding }) => finding.requirementId));
  const missingFindingIds = [...aggregateFindingIds].filter((requirementId) => !reportFindingIds.has(requirementId));
  if (missingFindingIds.length > 0) {
    throw new Error(
      `PLAIN_REPORT_SOURCE_MISSING: ${args.output.sectionId} has no source leaf for ${missingFindingIds.join(", ")}.`,
    );
  }
  const content = [
    `# ${args.output.sectionId} 1차 문서 누락 보고서`,
    "",
    `- 대상: \`${args.targetId}\``,
    `- 입력 문서: \`${args.triggerPath}\``,
    `- Section 상태: \`${args.output.status}\``,
    `- Section fingerprint: \`${args.output.fingerprint}\``,
    `- 누락 항목: \`${gapEntries.length}\``,
    "",
    "아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.",
    "",
    ...gapEntries.flatMap(({ record, finding }, index) => [
      `## ${index + 1}. ${finding.requirementId}`,
      "",
      `- 판정: \`${record.output.status}\` / \`${finding.status}\``,
      `- 원문 위치: \`${record.leaf.sourcePath}:${record.leaf.startLine}\``,
      `- 원본 source span SHA-256: \`${record.leaf.sourceHash}\``,
      `- 표시 원문 SHA-256: \`${sha256(record.leaf.statement)}\``,
      `- 판정 SHA-256: \`${sha256(finding.finding)}\``,
      "",
      "### 명세서 원문",
      "",
      exactTextBlock({
        label: "SPECIFICATION SOURCE",
        requirementId: finding.requirementId,
        content: record.leaf.statement,
      }),
      "",
      "### 누락 판정 원문",
      "",
      exactTextBlock({
        label: "GAP FINDING",
        requirementId: finding.requirementId,
        content: finding.finding,
      }),
      "",
    ]),
  ].join("\n");
  return {
    sectionId: args.output.sectionId,
    status: args.output.status,
    fingerprint: args.output.fingerprint,
    content,
    contentHash: sha256(content),
    byteLength: Buffer.byteLength(content),
    leafCount: gapEntries.length,
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
    "각 Section 보고서는 명세서 원문과 누락 판정 원문을 JSON 없이 읽을 수 있는 Markdown 평문으로 보존합니다. 모델에게 통합 요약을 요청하지 않습니다.",
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
  const manifestContent = [
    "# Stage 1 문서 누락 보고서 목록",
    "",
    `- 대상: \`${args.targetId}\``,
    `- 입력 문서: \`${args.triggerPath}\``,
    `- 통합 보고서 SHA-256: \`${combinedHash}\``,
    "",
    "| Section | 상태 | 누락 항목 | 보고서 SHA-256 | UTF-8 bytes |",
    "| --- | --- | ---: | --- | ---: |",
    ...sectionReports.map((report) => (
      `| ${report.sectionId} | ${report.status} | ${report.leafCount} | ${report.contentHash} | ${report.byteLength} |`
    )),
    "",
  ].join("\n");
  return {
    targetId: args.targetId,
    triggerPath: args.triggerPath,
    runId: args.runId,
    sectionReports,
    combinedContent,
    combinedHash,
    manifestContent,
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
