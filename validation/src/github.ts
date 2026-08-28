import { sha256 } from "./hash.ts";
import {
  chunkVerbatimReport,
  type DocumentGapReportBundle,
} from "./document-reports.ts";
import { runCommand } from "./process.ts";
import type { GuardedPatch } from "./patch.ts";
import type {
  AuditFinding,
  DocumentAuditOutput,
  NodeAuditInput,
  NodeAuditOutput,
  PipelineConfig,
  PullRequestManifest,
  Sha256,
} from "./types.ts";

interface PullRequestResponse {
  number: number;
  html_url: string;
  state: string;
  body?: string | null;
  merged_at?: string | null;
  mergeable?: boolean | null;
  mergeable_state?: string;
  head?: { ref: string; sha: string };
  base?: { ref: string; sha: string };
}

interface PullRequestMergeResponse {
  sha: string;
  merged: boolean;
  message: string;
}

interface IssueCommentResponse {
  body?: string | null;
}

interface IssueResponse {
  number: number;
  html_url: string;
  state: string;
  title: string;
  body?: string | null;
  pull_request?: unknown;
}

interface GitReferenceResponse {
  object: { sha: string };
}

interface GitCommitResponse {
  sha: string;
  tree: { sha: string };
}

interface GitObjectResponse {
  sha: string;
}

type CheckConclusion = "success" | "neutral" | "failure";

interface NodeCheckSummary {
  sectionId: string;
  name: string;
  fingerprint: string | null;
  documentFingerprint?: string | null;
  documentAuditStatus?: string;
  documentAuditAttempts?: number;
  documentFindings?: AuditFinding[];
  documentOutput?: DocumentAuditOutput | null;
  auditStatus: string;
  executionState: string;
  auditAttempts: number;
  requirementIds: string[];
  findings: AuditFinding[];
  patch: {
    status: string;
    reason: string;
    addressedRequirementIds?: string[];
    unresolvedRequirementIds?: string[];
    pullRequest?: { number: number; url: string; branch: string };
    childPullRequests?: Array<{
      patchNodeId: string;
      number: number;
      url: string;
      branch: string;
      baseBranch: string;
      mergeBatch?: number;
      mergedIntoSection?: boolean;
    }>;
  } | null;
}

function documentCheckConclusion(node: NodeCheckSummary): CheckConclusion {
  if (node.documentAuditStatus === "FAILED_SCHEMA") return "failure";
  if (node.documentAuditStatus === "PASS") return "success";
  return "neutral";
}

function buildDocumentNodeCheckOutput(args: {
  summary: TargetCheckSummary;
  node: NodeCheckSummary;
}): { title: string; summary: string; text: string } {
  return {
    title: `${args.node.sectionId} Stage 1 ${args.node.documentAuditStatus ?? "NOT_RUN"}`.slice(0, 255),
    summary: [
      `- Target: \`${args.summary.targetId}\``,
      `- Trigger: \`${args.summary.triggerPath}\``,
      `- Comparison: \`Specification -> DESIGN_INDEX\``,
      `- Status: \`${args.node.documentAuditStatus ?? "NOT_RUN"}\``,
      `- Provider calls: \`${args.node.documentAuditAttempts ?? 0}\``,
      `- Fingerprint: \`${args.node.documentFingerprint ?? "unavailable"}\``,
      `- Independent request prefix: \`${args.summary.runId}:document-audit:${args.node.sectionId}:<leaf-id>\``,
      "- Source code included: `false`",
      "- Frontend writes: `forbidden`",
      `- Verbatim report publication: \`${args.node.documentAuditStatus === "DOCUMENT_GAP" ? "included in representative report PR and Issue" : "not required"}\``,
    ].join("\n"),
    text: [
      "## Document completeness findings",
      "",
      renderFindings(args.node.documentFindings ?? []),
      "",
      "Stage 1 cannot edit DESIGN_INDEX or frontend code. Non-PASS Section outputs are preserved verbatim in report-only child PRs, one representative report PR, and one representative Issue per work.",
    ].join("\n"),
  };
}

interface TargetCheckSummary {
  runId: string;
  targetId: string;
  triggerPath: string;
  documentReport?: DocumentGapReportBundle;
  nodes: NodeCheckSummary[];
}

const CHILD_MERGE_MAX_ATTEMPTS = 8;

class GitHubApiError extends Error {
  constructor(
    readonly method: string,
    readonly route: string,
    readonly status: number,
    responseText: string,
  ) {
    super(`GitHub API ${method} ${route} failed with ${status}: ${responseText.slice(0, 1000)}`);
  }
}

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function isRetryableChildMergeError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /GitHub API PUT .*\/pulls\/\d+\/merge failed with (?:405|409):/.test(message) &&
    /Base branch was modified|Pull Request is not mergeable|mergeability|try the merge again/i.test(message);
}

async function githubRequest<T>(
  config: PipelineConfig,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  route: string,
  body?: unknown,
): Promise<T> {
  if (!config.github.token) throw new Error("GITHUB_TOKEN is required for GitHub publication.");
  const response = await fetch(`${config.github.apiUrl}${route}`, {
    method,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${config.github.token}`,
      "content-type": "application/json",
      "x-github-api-version": "2022-11-28",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) {
    throw new GitHubApiError(method, route, response.status, await response.text());
  }
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function pullRequestKey(args: {
  targetId: string;
  sectionId: string;
  patchNodeId?: string;
  fingerprint: Sha256;
  patchHash: Sha256;
}): Sha256 {
  return sha256(`${args.targetId}${args.sectionId}${args.patchNodeId ?? args.sectionId}${args.fingerprint}${args.patchHash}`);
}

export function branchName(input: NodeAuditInput, patchNodeId: string = input.node.sectionId): string {
  const target = input.run.targetId.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 100);
  const fingerprint = input.node.fingerprint.slice("sha256:".length, "sha256:".length + 12);
  return `auto/${target}/${patchNodeId}/${fingerprint}`;
}

export function sectionBranchName(input: NodeAuditInput): string {
  return branchName(input, input.node.sectionId);
}

export function nodeCheckConclusion(node: Pick<NodeCheckSummary, "auditStatus" | "executionState" | "patch">): CheckConclusion {
  if (
    node.auditStatus === "FAILED_SCHEMA" ||
    node.executionState.startsWith("FAILED_") ||
    node.patch?.status.startsWith("FAILED_")
  ) return "failure";
  if (
    node.auditStatus === "BLOCKED_MISSING_EVIDENCE" ||
    node.auditStatus === "BLOCKED_CONTRACT_CONFLICT" ||
    node.auditStatus === "UNKNOWN" ||
    node.patch?.status.startsWith("BLOCKED_")
  ) return "neutral";
  if (
    node.executionState === "PASS" ||
    node.executionState === "CACHED_PASS"
  ) return "success";
  return "neutral";
}

function nodeDisplayStatus(node: NodeCheckSummary): string {
  if (node.patch && node.patch.status !== "NOT_REQUIRED") return node.patch.status;
  return node.executionState;
}

function markdownText(value: string): string {
  return value
    .replaceAll("\r", " ")
    .replaceAll("\n", " ")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("`", "'")
    .trim();
}

function codeItems(values: string[]): string {
  return values.length > 0 ? values.map((value) => `\`${markdownText(value)}\``).join(", ") : "none";
}

export function renderFindings(findings: AuditFinding[]): string {
  if (findings.length === 0) return "No omissions were reported by this isolated Section audit.";
  return findings.map((finding, index) => [
    `### ${index + 1}. \`${markdownText(finding.requirementId)}\``,
    "",
    `- Result: \`${finding.status}\``,
    `- Missing or uncertain item: ${markdownText(finding.finding)}`,
    `- Page: ${finding.pageId ? `\`${markdownText(finding.pageId)}\`` : "not specified"}`,
    `- Component: ${finding.componentId ? `\`${markdownText(finding.componentId)}\`` : "not specified"}`,
    `- Evidence: ${codeItems(finding.evidenceRefs)}`,
    `- Implementation: ${codeItems(finding.implementationRefs)}`,
  ].join("\n")).join("\n\n");
}

function documentReportMarker(targetId: string): string {
  return `<!-- design-validation-document-gap-report: ${targetId} -->`;
}

function documentReportHashMarker(reportHash: Sha256): string {
  return `<!-- design-validation-document-gap-report-hash: ${reportHash} -->`;
}

function reportBranchSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

async function createGitCommitWithFiles(args: {
  config: PipelineConfig;
  parentCommit: string;
  message: string;
  files: Array<{ path: string; content: string }>;
}): Promise<string> {
  const parent = await githubRequest<GitCommitResponse>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/git/commits/${args.parentCommit}`,
  );
  const treeEntries = await Promise.all(args.files.map(async (file) => {
    const blob = await githubRequest<GitObjectResponse>(
      args.config,
      "POST",
      `/repos/${args.config.repository}/git/blobs`,
      { content: Buffer.from(file.content).toString("base64"), encoding: "base64" },
    );
    return { path: file.path, mode: "100644", type: "blob", sha: blob.sha };
  }));
  const tree = await githubRequest<GitObjectResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/git/trees`,
    { base_tree: parent.tree.sha, tree: treeEntries },
  );
  const commit = await githubRequest<GitCommitResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/git/commits`,
    { message: args.message, tree: tree.sha, parents: [args.parentCommit] },
  );
  return commit.sha;
}

async function createAutomationBranch(args: {
  config: PipelineConfig;
  branch: string;
  commit: string;
}): Promise<void> {
  const existing = await githubRequest<GitReferenceResponse>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/git/ref/heads/${encodeURIComponent(args.branch)}`,
  ).catch((error: unknown) => {
    if (error instanceof GitHubApiError && error.status === 404) return null;
    throw error;
  });
  if (existing) {
    if (existing.object.sha !== args.commit) {
      throw new Error(`REPORT_BRANCH_EXISTS: ${args.branch} is at ${existing.object.sha}, expected ${args.commit}.`);
    }
    return;
  }
  await githubRequest(
    args.config,
    "POST",
    `/repos/${args.config.repository}/git/refs`,
    { ref: `refs/heads/${args.branch}`, sha: args.commit },
  );
}

function reportRepositoryPath(bundle: DocumentGapReportBundle): string {
  const fingerprint = bundle.combinedHash.slice("sha256:".length, "sha256:".length + 16);
  return `reports/document-gaps/${reportBranchSlug(bundle.targetId)}/${fingerprint}`;
}

function reportChildBody(args: {
  bundle: DocumentGapReportBundle;
  reportPath: string;
  childId: string;
  contentHash: Sha256;
}): string {
  return [
    "## Stage 1 verbatim report child",
    "",
    `- Target: \`${args.bundle.targetId}\``,
    `- Child: \`${args.childId}\``,
    `- Report path: \`${args.reportPath}\``,
    `- Content hash: \`${args.contentHash}\``,
    "",
    "This internal child PR adds only deterministic Stage 1 report bytes. It is automatically merged upward in a batch of at most five children and is not a human merge boundary.",
    "",
    documentReportHashMarker(args.bundle.combinedHash),
  ].join("\n");
}

async function publishReportChild(args: {
  config: PipelineConfig;
  bundle: DocumentGapReportBundle;
  reportPath: string;
  childId: string;
  baseBranch: string;
  baseCommit: string;
  files: Array<{ path: string; content: string }>;
  contentHash: Sha256;
}): Promise<MergeableChildPullRequest & { commit: string }> {
  const branch = `auto/${reportBranchSlug(args.bundle.targetId)}/document-report-${reportBranchSlug(args.childId)}/${args.contentHash.slice(7, 19)}`;
  const commit = await createGitCommitWithFiles({
    config: args.config,
    parentCommit: args.baseCommit,
    message: `docs(${args.childId.toLowerCase()}): add verbatim Stage 1 report`,
    files: args.files,
  });
  await createAutomationBranch({ config: args.config, branch, commit });
  const pull = await githubRequest<PullRequestResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/pulls`,
    {
      title: `docs(${args.childId.toLowerCase()}): preserve Stage 1 report`,
      head: branch,
      base: args.baseBranch,
      body: reportChildBody(args),
      draft: false,
    },
  );
  return {
    patchNodeId: args.childId,
    number: pull.number,
    url: pull.html_url,
    branch,
    baseBranch: args.baseBranch,
    commit,
  };
}

function representativeReportBody(args: {
  bundle: DocumentGapReportBundle;
  reportPath: string;
  children: MergeableChildPullRequest[];
}): string {
  return [
    "## Stage 1 consolidated document-gap report",
    "",
    `- Target: \`${args.bundle.targetId}\``,
    `- Trigger: \`${args.bundle.triggerPath}\``,
    `- Verbatim Section reports: \`${args.bundle.sectionReports.length}\``,
    `- Consolidated report: \`${args.reportPath}/DOCUMENT_GAPS.md\``,
    `- Report hash: \`${args.bundle.combinedHash}\``,
    `- Internal child PRs: \`${args.children.length}\``,
    "- Maximum children merged per batch: `5`",
    "",
    "Every Section report is embedded byte-for-byte in DOCUMENT_GAPS.md. No LLM summary or paraphrase is used. Internal child PRs were merged deepest-first into this branch; this draft PR is the only human merge boundary.",
    "",
    ...args.children.map((child) => `- [${child.patchNodeId} PR #${child.number}](${child.url})`),
    "",
    documentReportMarker(args.bundle.targetId),
    documentReportHashMarker(args.bundle.combinedHash),
  ].join("\n");
}

async function publishRepresentativeDocumentIssue(args: {
  config: PipelineConfig;
  bundle: DocumentGapReportBundle;
  pull: PullRequestResponse;
  reportPath: string;
}): Promise<{ number: number; url: string; reused: boolean }> {
  const issues = (await githubRequest<IssueResponse[]>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/issues?state=all&per_page=100`,
  )).filter((issue) => !issue.pull_request);
  const marker = documentReportMarker(args.bundle.targetId);
  const legacyIssues = issues.filter((issue) => (
    issue.body?.includes(`<!-- design-validation-document-gap: ${args.bundle.targetId}:`)
  ));
  const title = `[Stage 1] Consolidated DESIGN_INDEX gaps for ${args.bundle.targetId}`.slice(0, 256);
  const chunks = chunkVerbatimReport(args.bundle.combinedContent);
  const body = [
    "## Consolidated Stage 1 result",
    "",
    `- Target: \`${args.bundle.targetId}\``,
    `- Trigger: \`${args.bundle.triggerPath}\``,
    `- Representative report PR: [#${args.pull.number}](${args.pull.html_url})`,
    `- Repository report: \`${args.reportPath}/DOCUMENT_GAPS.md\``,
    `- Exact report hash: \`${args.bundle.combinedHash}\``,
    `- Verbatim chunks below: \`${chunks.length}\``,
    `- Migrated legacy Section Issues: \`${legacyIssues.length}\``,
    "",
    "The following comments preserve the consolidated report as exact UTF-8 chunks. Concatenating chunk payloads in index order reproduces DOCUMENT_GAPS.md and its SHA-256 hash. Nothing is summarized.",
    "",
    marker,
    documentReportHashMarker(args.bundle.combinedHash),
  ].join("\n");
  const existing = issues.find((issue) => issue.state === "open" && issue.body?.includes(marker));
  const issue = existing
    ? await githubRequest<IssueResponse>(
      args.config,
      "PATCH",
      `/repos/${args.config.repository}/issues/${existing.number}`,
      { title, body },
    )
    : await githubRequest<IssueResponse>(
      args.config,
      "POST",
      `/repos/${args.config.repository}/issues`,
      { title, body },
    );
  const comments = await githubRequest<IssueCommentResponse[]>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/issues/${issue.number}/comments?per_page=100`,
  );
  for (const chunk of chunks) {
    const chunkMarker = `<!-- design-validation-verbatim-chunk: ${args.bundle.combinedHash}:${chunk.index}/${chunk.total}:${chunk.contentHash} -->`;
    if (comments.some((comment) => comment.body?.includes(chunkMarker))) continue;
    await githubRequest(
      args.config,
      "POST",
      `/repos/${args.config.repository}/issues/${issue.number}/comments`,
      { body: `${chunkMarker}\n${chunk.content}` },
    );
  }
  for (const legacy of legacyIssues) {
    const originalBody = legacy.body ?? "";
    const originalHash = sha256(originalBody);
    const migrationMarker = `<!-- design-validation-legacy-issue-copy: ${legacy.number}:${originalHash} -->`;
    if (!comments.some((comment) => comment.body?.includes(migrationMarker))) {
      await githubRequest(
        args.config,
        "POST",
        `/repos/${args.config.repository}/issues/${issue.number}/comments`,
        {
          body: [
            migrationMarker,
            `<!-- BEGIN VERBATIM LEGACY ISSUE #${legacy.number} ${originalHash} -->`,
            originalBody,
            `<!-- END VERBATIM LEGACY ISSUE #${legacy.number} -->`,
          ].join("\n"),
        },
      );
    }
    const legacyComments = await githubRequest<IssueCommentResponse[]>(
      args.config,
      "GET",
      `/repos/${args.config.repository}/issues/${legacy.number}/comments?per_page=100`,
    );
    const pointerMarker = `<!-- design-validation-migrated-to: ${issue.number}:${args.bundle.combinedHash} -->`;
    if (!legacyComments.some((comment) => comment.body?.includes(pointerMarker))) {
      await githubRequest(
        args.config,
        "POST",
        `/repos/${args.config.repository}/issues/${legacy.number}/comments`,
        {
          body: [
            `This Section Issue was preserved verbatim in representative Issue #${issue.number}.`,
            "",
            pointerMarker,
          ].join("\n"),
        },
      );
    }
    await githubRequest(
      args.config,
      "PATCH",
      `/repos/${args.config.repository}/issues/${legacy.number}`,
      { state: "closed", state_reason: "completed" },
    );
  }
  return { number: issue.number, url: issue.html_url, reused: Boolean(existing) };
}

export interface PublishedDocumentGapReport {
  targetId: string;
  reportHash: Sha256;
  reportPath: string;
  pullRequest: { number: number; url: string; branch: string };
  issue: { number: number; url: string; reused: boolean };
  childPullRequests: Array<{ number: number; url: string; childId: string }>;
}

export async function publishDocumentGapReports(args: {
  config: PipelineConfig;
  summaries: TargetCheckSummary[];
}): Promise<PublishedDocumentGapReport[]> {
  if (!args.config.github.token || args.config.dryRun || !args.config.createPrs) return [];
  const publications: PublishedDocumentGapReport[] = [];
  for (const summary of args.summaries) {
    const unresolvedSections = summary.nodes.filter((node) => (
      node.documentAuditStatus === "UNKNOWN" || node.documentAuditStatus === "FAILED_SCHEMA"
    ));
    if (unresolvedSections.length > 0) {
      throw new Error(
        `Stage 1 report publication refused unresolved Sections: ${unresolvedSections.map((node) => node.sectionId).join(", ")}.`,
      );
    }
    const bundle = summary.documentReport;
    if (!bundle) {
      throw new Error(`Stage 1 report publication is missing its exact report bundle for ${summary.targetId}.`);
    }
    if (bundle.targetId !== summary.targetId || bundle.triggerPath !== summary.triggerPath) {
      throw new Error(`Stage 1 report publication received a mismatched report bundle for ${summary.targetId}.`);
    }
    if (bundle.sectionReports.length === 0) continue;
    const marker = documentReportHashMarker(bundle.combinedHash);
    const existingPull = (await allAutomationPullRequestsAnyBase(args.config, "all"))
      .find((pull) => pull.body?.includes(marker) && pull.body?.includes(documentReportMarker(bundle.targetId)));
    const reportPath = reportRepositoryPath(bundle);
    if (existingPull) {
      const issue = await publishRepresentativeDocumentIssue({
        config: args.config,
        bundle,
        pull: existingPull,
        reportPath,
      });
      publications.push({
        targetId: bundle.targetId,
        reportHash: bundle.combinedHash,
        reportPath,
        pullRequest: {
          number: existingPull.number,
          url: existingPull.html_url,
          branch: existingPull.head?.ref ?? "unknown",
        },
        issue,
        childPullRequests: [],
      });
      continue;
    }

    const branch = `auto/${reportBranchSlug(bundle.targetId)}/document-report/${bundle.combinedHash.slice(7, 19)}`;
    await createAutomationBranch({ config: args.config, branch, commit: args.config.baseCommit });
    let reportCommit = args.config.baseCommit;
    const allChildren: MergeableChildPullRequest[] = [];
    const reportItems = [
      ...bundle.sectionReports.map((report) => ({
        childId: report.sectionId,
        contentHash: report.contentHash,
        files: [{ path: `${reportPath}/sections/${report.sectionId}.md`, content: report.content }],
      })),
      {
        childId: "DOCUMENT-GAPS",
        contentHash: bundle.combinedHash,
        files: [
          { path: `${reportPath}/DOCUMENT_GAPS.md`, content: bundle.combinedContent },
          { path: `${reportPath}/manifest.json`, content: `${JSON.stringify(bundle.manifest, null, 2)}\n` },
        ],
      },
    ];
    for (let index = 0; index < reportItems.length; index += 5) {
      const batch = reportItems.slice(index, index + 5);
      const pulls: MergeableChildPullRequest[] = [];
      let parentBranch = branch;
      let parentCommit = reportCommit;
      for (const item of batch) {
        const child = await publishReportChild({
          config: args.config,
          bundle,
          reportPath,
          childId: item.childId,
          baseBranch: parentBranch,
          baseCommit: parentCommit,
          files: item.files,
          contentHash: item.contentHash,
        });
        pulls.push(child);
        allChildren.push(child);
        parentBranch = child.branch;
        parentCommit = child.commit;
      }
      const merged = await mergeChildPullRequestBatch({
        config: args.config,
        sectionId: "DOCUMENT-REPORT",
        sectionBranch: branch,
        pulls,
      });
      reportCommit = merged.commit;
    }
    const representative = await githubRequest<PullRequestResponse>(
      args.config,
      "POST",
      `/repos/${args.config.repository}/pulls`,
      {
        title: `docs(stage-1): review ${bundle.sectionReports.length} consolidated document-gap report(s)`,
        head: branch,
        base: args.config.github.baseBranch,
        body: representativeReportBody({ bundle, reportPath, children: allChildren }),
        draft: true,
      },
    );
    const issue = await publishRepresentativeDocumentIssue({
      config: args.config,
      bundle,
      pull: representative,
      reportPath,
    });
    publications.push({
      targetId: bundle.targetId,
      reportHash: bundle.combinedHash,
      reportPath,
      pullRequest: { number: representative.number, url: representative.html_url, branch },
      issue,
      childPullRequests: allChildren.map((child) => ({
        number: child.number,
        url: child.url,
        childId: child.patchNodeId,
      })),
    });
  }
  return publications;
}

export function buildNodeCheckOutput(args: {
  summary: TargetCheckSummary;
  node: NodeCheckSummary;
}): { title: string; summary: string; text: string } {
  const { summary, node } = args;
  const status = nodeDisplayStatus(node);
  const patchReason = node.patch?.reason
    ? markdownText(node.patch.reason).slice(0, 8000)
    : "No patch request was required.";
  const pullRequest = node.patch?.pullRequest;
  const unresolved = node.patch?.unresolvedRequirementIds ?? [];
  const addressedIds = new Set(node.patch?.addressedRequirementIds ?? []);
  const unresolvedIds = new Set(unresolved);
  const addressedFindings = node.findings.filter((finding) => addressedIds.has(finding.requirementId));
  const unresolvedFindings = node.findings.filter((finding) => unresolvedIds.has(finding.requirementId));
  const childPullRequests = node.patch?.childPullRequests ?? [];
  const childPublication = childPullRequests.length > 0
    ? childPullRequests.map((pull) => (
      `- [${pull.patchNodeId} PR #${pull.number}](${pull.url}): batch \`${pull.mergeBatch ?? "unknown"}\`, ${pull.mergedIntoSection ? "merged into Section" : "pending consolidation"}`
    )).join("\n")
    : null;
  const disposition = pullRequest
    ? `Verified code diff: [draft PR #${pullRequest.number}](${pullRequest.url}) on \`${pullRequest.branch}\`.`
    : node.executionState === "PASS" || node.executionState === "CACHED_PASS"
      ? "No correction PR is required."
      : "No safe Stage 2 code PR was published. The implementation result remains in this Check and the run artifact; Stage 2 never creates a GitHub Issue.";
  return {
    title: `${node.sectionId} ${status}`.slice(0, 255),
    summary: [
      `- Target: \`${summary.targetId}\``,
      `- Trigger: \`${summary.triggerPath}\``,
      `- Audit status: \`${node.auditStatus}\``,
      `- Execution state: \`${node.executionState}\``,
      `- Provider audit calls: \`${node.auditAttempts}\``,
      `- Patch status: \`${node.patch?.status ?? "NOT_RUN"}\``,
      `- Fingerprint: \`${node.fingerprint ?? "unavailable"}\``,
      `- Requirement IDs: ${codeItems(node.requirementIds)}`,
      `- Corrected by PR: ${codeItems(node.patch?.addressedRequirementIds ?? [])}`,
      `- Still open: ${codeItems(unresolved)}`,
      `- Patch disposition: ${patchReason}`,
      `- Publication: ${disposition}`,
      "",
      `Stage 1 request: \`${summary.runId}:document-audit:${node.sectionId}\``,
      `Stage 2 request: \`${summary.runId}:implementation-audit:${node.sectionId}\``,
    ].join("\n"),
    text: [
      ...(pullRequest ? [
        "## Corrected by the draft PR",
        "",
        renderFindings(addressedFindings),
        "",
        "## Remaining requirement-level feedback",
        "",
        renderFindings(unresolvedFindings),
      ] : [
        "## Requirement-level feedback",
        "",
        renderFindings(node.findings),
      ]),
      "",
      "## Next action",
      "",
      disposition,
      ...(childPublication ? ["", "## Consolidated child PR history", "", childPublication] : []),
      "",
      patchReason,
    ].join("\n"),
  };
}

export async function publishNodeCheckRuns(args: {
  config: PipelineConfig;
  summaries: TargetCheckSummary[];
}): Promise<void> {
  if (!args.config.github.token) return;
  const detailsUrl = args.config.runId
    ? `${args.config.github.serverUrl}/${args.config.repository}/actions/runs/${args.config.runId}`
    : undefined;
  for (const summary of args.summaries) {
    for (const node of summary.nodes) {
      const documentOutput = buildDocumentNodeCheckOutput({ summary, node });
      await githubRequest(args.config, "POST", `/repos/${args.config.repository}/check-runs`, {
        name: `Design Validation / ${node.sectionId} Document`.slice(0, 100),
        head_sha: args.config.baseCommit,
        status: "completed",
        conclusion: documentCheckConclusion(node),
        external_id: `${summary.runId}:${summary.targetId}:${node.sectionId}:document`.slice(0, 255),
        ...(detailsUrl ? { details_url: detailsUrl } : {}),
        output: documentOutput,
      });
      const output = buildNodeCheckOutput({
        summary,
        node,
      });
      await githubRequest(args.config, "POST", `/repos/${args.config.repository}/check-runs`, {
        name: `Design Validation / ${node.sectionId} Implementation`.slice(0, 100),
        head_sha: args.config.baseCommit,
        status: "completed",
        conclusion: nodeCheckConclusion(node),
        external_id: `${summary.runId}:${summary.targetId}:${node.sectionId}:implementation`.slice(0, 255),
        ...(detailsUrl ? { details_url: detailsUrl } : {}),
        output,
      });
    }
  }
}

function keyMarker(key: Sha256): string {
  return `<!-- design-validation-pr-key: ${key} -->`;
}

function manifestMarker(manifest: PullRequestManifest): string {
  return `<!-- design-validation-pr-manifest: ${Buffer.from(JSON.stringify(manifest)).toString("base64url")} -->`;
}

export function manifestFromBody(body: string | null | undefined): PullRequestManifest | null {
  const encoded = body?.match(/<!-- design-validation-pr-manifest: ([A-Za-z0-9_-]+) -->/)?.[1];
  if (!encoded) return null;
  try {
    const value = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as PullRequestManifest;
    return value.schemaVersion === "design-validation/pr-manifest/v2" ? value : null;
  } catch {
    return null;
  }
}

export function isAutomationPullRequestForBase(
  pull: Pick<PullRequestResponse, "head" | "base">,
  baseBranch: string,
): boolean {
  return Boolean(pull.head?.ref.startsWith("auto/") && pull.base?.ref === baseBranch);
}

async function allAutomationPullRequests(config: PipelineConfig, state: "open" | "all"): Promise<PullRequestResponse[]> {
  const pulls = await githubRequest<PullRequestResponse[]>(
    config,
    "GET",
    `/repos/${config.repository}/pulls?state=${state}&per_page=100&sort=updated&direction=desc`,
  );
  return pulls.filter((pull) => isAutomationPullRequestForBase(pull, config.github.baseBranch));
}

async function allAutomationPullRequestsAnyBase(
  config: PipelineConfig,
  state: "open" | "all",
): Promise<PullRequestResponse[]> {
  const pulls = await githubRequest<PullRequestResponse[]>(
    config,
    "GET",
    `/repos/${config.repository}/pulls?state=${state}&per_page=100&sort=updated&direction=desc`,
  );
  return pulls.filter((pull) => Boolean(pull.head?.ref.startsWith("auto/")));
}

async function pullRequestByKey(config: PipelineConfig, key: Sha256): Promise<PullRequestResponse | null> {
  const marker = keyMarker(key);
  const pulls = await allAutomationPullRequestsAnyBase(config, "all");
  return pulls.find((pull) => (
    pull.body?.includes(marker) && (pull.state === "open" || Boolean(pull.merged_at))
  )) ?? null;
}

function automationBranchPrefix(targetId: string, sectionId: string): string {
  const target = targetId.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 100);
  return `auto/${target}/${sectionId}/`;
}

async function openPullRequestForPatchNode(
  config: PipelineConfig,
  targetId: string,
  sectionId: string,
  patchNodeId: string,
): Promise<PullRequestResponse | null> {
  const prefix = automationBranchPrefix(targetId, patchNodeId);
  return (await allAutomationPullRequestsAnyBase(config, "open")).find((pull) => {
    const manifest = manifestFromBody(pull.body);
    return (
      (
        manifest?.targetId === targetId &&
        manifest.sectionId === sectionId &&
        manifest.patchNodeId === patchNodeId
      ) ||
      pull.head?.ref.startsWith(prefix)
    );
  }) ?? null;
}

async function assertBranchAtCommit(
  config: PipelineConfig,
  baseBranch: string,
  baseCommit: string,
): Promise<void> {
  const reference = await githubRequest<GitReferenceResponse>(
    config,
    "GET",
    `/repos/${config.repository}/git/ref/heads/${encodeURIComponent(baseBranch)}`,
  );
  if (reference.object.sha !== baseCommit) {
    throw new Error(`STALE_BASE: expected ${baseCommit}, current ${baseBranch} is ${reference.object.sha}. Re-audit the current parent before publishing or refreshing this PR.`);
  }
}

function staleNoticeMarker(pullNumber: number, baseCommit: string): string {
  return `<!-- design-validation-stale-preserved: ${pullNumber}:${baseCommit} -->`;
}

export function stalePullRequestNotice(args: {
  pullNumber: number;
  previousBase: string;
  currentBase: string;
  hasManifest: boolean;
}): string {
  return [
    args.hasManifest ? "STALE_BASE_REVALIDATION_REQUIRED" : "LEGACY_AUTOMATION_PR_REVALIDATION_REQUIRED",
    "",
    `This draft PR remains open. The automation will not close it or delete its branch because \`main\` changed.`,
    "",
    `- Previous validated base: \`${args.previousBase}\``,
    `- Current base: \`${args.currentBase}\``,
    "- Merge remains blocked while a fresh isolated Section audit runs.",
    "- If a new diff is verified, this same PR number, branch, and review conversation will be updated with `--force-with-lease`.",
    "- If the finding is already satisfied or cannot be patched safely, the PR stays open for a human decision and the pipeline publishes verbal feedback.",
    "",
    staleNoticeMarker(args.pullNumber, args.currentBase),
  ].join("\n");
}

export async function reconcileStaleAutomationPullRequests(config: PipelineConfig): Promise<number[]> {
  if (!config.createPrs || !config.github.token) return [];
  const preserved: number[] = [];
  for (const pull of await allAutomationPullRequests(config, "open")) {
    const manifest = manifestFromBody(pull.body);
    if (manifest?.baseCommit === config.baseCommit && pull.base?.ref === config.github.baseBranch) continue;
    const marker = staleNoticeMarker(pull.number, config.baseCommit);
    const comments = await githubRequest<IssueCommentResponse[]>(
      config,
      "GET",
      `/repos/${config.repository}/issues/${pull.number}/comments?per_page=100`,
    );
    if (!comments.some((comment) => comment.body?.includes(marker))) {
      await githubRequest(config, "POST", `/repos/${config.repository}/issues/${pull.number}/comments`, {
        body: stalePullRequestNotice({
          pullNumber: pull.number,
          previousBase: manifest?.baseCommit ?? "unavailable (legacy PR)",
          currentBase: config.baseCommit,
          hasManifest: manifest !== null,
        }),
      });
    }
    preserved.push(pull.number);
  }
  return preserved;
}

export async function prepareSectionBranch(args: {
  config: PipelineConfig;
  input: NodeAuditInput;
  baseBranch: string;
  baseCommit: string;
}): Promise<{ branch: string; commit: string }> {
  await assertBranchAtCommit(args.config, args.baseBranch, args.baseCommit);
  const branch = sectionBranchName(args.input);
  if (branch === args.config.github.baseBranch || branch === args.baseBranch) {
    throw new Error(`Refusing to use protected parent branch ${branch} as a Section aggregation branch.`);
  }
  const remote = await runCommand("git", ["ls-remote", "--exit-code", "--heads", "origin", branch], {
    cwd: args.config.repositoryRoot,
    allowFailure: true,
  });
  if (remote.exitCode === 0) {
    const commit = remote.stdout.trim().split(/\s+/)[0];
    if (commit !== args.baseCommit) {
      throw new Error(
        `SECTION_BRANCH_EXISTS: ${branch} is already at ${commit}; preserve its representative PR or clean it before a fresh run.`,
      );
    }
    return { branch, commit };
  }
  await runCommand("git", ["push", "--quiet", "origin", `${args.baseCommit}:refs/heads/${branch}`], {
    cwd: args.config.repositoryRoot,
  });
  return { branch, commit: args.baseCommit };
}

export interface MergeableChildPullRequest {
  patchNodeId: string;
  number: number;
  url: string;
  branch: string;
  baseBranch: string;
}

export function recursiveMergeOrder(
  pulls: MergeableChildPullRequest[],
  sectionBranch: string,
): MergeableChildPullRequest[] {
  if (pulls.length === 0) return [];
  for (let index = 0; index < pulls.length; index += 1) {
    const expectedBase = index === 0 ? sectionBranch : pulls[index - 1].branch;
    if (pulls[index].baseBranch !== expectedBase) {
      throw new Error(
        `INVALID_CHILD_CHAIN: ${pulls[index].patchNodeId} targets ${pulls[index].baseBranch}, expected ${expectedBase}.`,
      );
    }
  }
  return [...pulls].reverse();
}

export async function mergeChildPullRequestBatch(args: {
  config: PipelineConfig;
  sectionId: string;
  sectionBranch: string;
  pulls: MergeableChildPullRequest[];
}): Promise<{ commit: string; mergedPullNumbers: number[] }> {
  if (args.sectionBranch === args.config.github.baseBranch) {
    throw new Error(`Refusing to auto-merge ${args.sectionId} children directly into ${args.config.github.baseBranch}.`);
  }
  const mergedPullNumbers: number[] = [];
  for (const expected of recursiveMergeOrder(args.pulls, args.sectionBranch)) {
    let merged = false;
    let lastError: unknown;
    for (let attempt = 1; attempt <= CHILD_MERGE_MAX_ATTEMPTS; attempt += 1) {
      const pull = await githubRequest<PullRequestResponse>(
        args.config,
        "GET",
        `/repos/${args.config.repository}/pulls/${expected.number}`,
      );
      if (pull.merged_at) {
        merged = true;
        break;
      }
      if (pull.state !== "open") {
        throw new Error(`Child PR #${pull.number} is ${pull.state}; recursive consolidation requires an open or merged PR.`);
      }
      if (pull.head?.ref !== expected.branch || pull.base?.ref !== expected.baseBranch) {
        throw new Error(
          `Child PR #${pull.number} changed shape: ${pull.head?.ref ?? "unknown"} -> ${pull.base?.ref ?? "unknown"}.`,
        );
      }
      if (
        expected.baseBranch === args.config.github.baseBranch ||
        !expected.branch.startsWith("auto/") ||
        !expected.baseBranch.startsWith("auto/")
      ) {
        throw new Error(`Refusing to auto-merge child PR #${pull.number} outside the Section automation tree.`);
      }
      if (pull.mergeable === null || pull.mergeable_state === "unknown") {
        await wait(Math.min(5000, attempt * 1000));
        continue;
      }
      try {
        const merge = await githubRequest<PullRequestMergeResponse>(
          args.config,
          "PUT",
          `/repos/${args.config.repository}/pulls/${pull.number}/merge`,
          {
            sha: pull.head.sha,
            merge_method: "merge",
            commit_title: `chore(${args.sectionId.toLowerCase()}): consolidate ${expected.patchNodeId}`,
          },
        );
        if (!merge.merged) throw new Error(`GitHub did not merge child PR #${pull.number}: ${merge.message}`);
        merged = true;
        break;
      } catch (error) {
        lastError = error;
        if (!isRetryableChildMergeError(error) || attempt === CHILD_MERGE_MAX_ATTEMPTS) throw error;
        await wait(Math.min(5000, attempt * 1000));
      }
    }
    if (!merged) {
      throw lastError instanceof Error
        ? lastError
        : new Error(`Child PR #${expected.number} did not become mergeable after ${CHILD_MERGE_MAX_ATTEMPTS} attempts.`);
    }
    mergedPullNumbers.push(expected.number);
    await runCommand("git", ["push", "--quiet", "origin", "--delete", expected.branch], {
      cwd: args.config.repositoryRoot,
      allowFailure: true,
    });
  }
  const reference = await githubRequest<GitReferenceResponse>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/git/ref/heads/${encodeURIComponent(args.sectionBranch)}`,
  );
  await runCommand("git", ["fetch", "--quiet", "origin", `refs/heads/${args.sectionBranch}`], {
    cwd: args.config.repositoryRoot,
  });
  return { commit: reference.object.sha, mergedPullNumbers };
}

function fencedCode(language: string, value: string): string {
  const longest = Math.max(2, ...[...value.matchAll(/`+/g)].map((match) => match[0].length));
  const fence = "`".repeat(longest + 1);
  return `${fence}${language}\n${value.trimEnd()}\n${fence}`;
}

export function pullRequestTitle(
  sectionId: string,
  auditOutput: NodeAuditOutput,
  addressedRequirementIds: string[] = auditOutput.findings.map((finding) => finding.requirementId),
): string {
  const requirement = addressedRequirementIds[0] ?? "DESIGN_INDEX requirement";
  return `fix(${sectionId.toLowerCase()}): address ${markdownText(requirement)} omission`.slice(0, 256);
}

export function buildPullRequestBody(args: {
  input: NodeAuditInput;
  auditOutput: NodeAuditOutput;
  patch: GuardedPatch;
  manifest: PullRequestManifest;
  patchAttempt: number;
  patchNodeId?: string;
}): string {
  const addressedIds = new Set(args.manifest.requirementIds);
  const addressedFindings = args.auditOutput.findings.filter((finding) => addressedIds.has(finding.requirementId));
  const remainingFindings = args.auditOutput.findings.filter((finding) => !addressedIds.has(finding.requirementId));
  const patchNodeId = args.patchNodeId ?? args.manifest.patchNodeId ?? args.input.node.sectionId;
  const fullDiff = fencedCode("diff", args.patch.diff);
  return [
    "## Corrected by this diff",
    "",
    renderFindings(addressedFindings),
    "",
    "## Proposed code diff",
    "",
    `- Changed files: ${codeItems(args.patch.changedPaths)}`,
    `- Changed lines: \`+${args.patch.additions} / -${args.patch.deletions}\``,
    "",
    fullDiff,
    ...(remainingFindings.length > 0 ? [
      "",
      "## Deferred to descendant child PRs",
      "",
      renderFindings(remainingFindings),
    ] : []),
    "",
    "## Scope",
    "",
    `- Target: \`${args.manifest.targetId}\``,
    `- Section: \`${args.manifest.sectionId}\``,
    `- Patch node: \`${patchNodeId}\``,
    `- Parent patch node: \`${args.manifest.parentPatchNodeId ?? "main"}\``,
    `- Base: \`${args.manifest.baseCommit}\``,
    `- Base branch: \`${args.manifest.baseBranch}\``,
    `- Trigger: \`${args.manifest.triggerSource.path}\``,
    `- Fingerprint: \`${args.manifest.fingerprint}\``,
    `- Patch hash: \`${args.manifest.patchHash}\``,
    `- Write set: ${args.manifest.writeSet.map((item) => `\`${item.path}\``).join(", ")}`,
    "",
    "## Independent NVIDIA Requests",
    "",
    `- Document audit: \`${args.manifest.runId}:document-audit:${args.input.node.sectionId}\``,
    `- Implementation audit: \`${args.manifest.runId}:implementation-audit:${args.input.node.sectionId}\``,
    `- Patch: \`${args.manifest.runId}:patch:${patchNodeId}:attempt:${args.patchAttempt}\``,
    `- Patched-code audit: \`${args.manifest.runId}:reaudit:${patchNodeId}:attempt:${args.patchAttempt}\``,
    "",
    "The audit, patch generation, patched-code audit, and affected PASS regressions were separate stateless requests. No prior Section response was included in another Section audit.",
    "",
    "## Patch Guards",
    "",
    "Schema, base hashes, immutable inputs, write scope, patch size, build, tests, visual checks, accessibility checks, and regression audits passed.",
    "",
    "## Verification",
    "",
    args.manifest.runUrl ? `Run artifact: ${args.manifest.runUrl}` : `Run ID: \`${args.manifest.runId}\``,
    "",
    "This verified child PR is an internal aggregation node. After its batch is complete, the pipeline merges it from the deepest child toward the Section branch; only the Section representative PR remains for human review.",
    "",
    keyMarker(args.manifest.prKey),
    manifestMarker(args.manifest),
  ].join("\n");
}

export async function publishPatchPullRequest(args: {
  config: PipelineConfig;
  worktreePath: string;
  input: NodeAuditInput;
  auditOutput: NodeAuditOutput;
  patch: GuardedPatch;
  manifest: PullRequestManifest;
  patchAttempt: number;
  patchNodeId: string;
  baseBranch: string;
  baseCommit: string;
}): Promise<{
  branch: string;
  commit: string;
  number: number;
  url: string;
  reused: boolean;
  merged: boolean;
}> {
  await assertBranchAtCommit(args.config, args.baseBranch, args.baseCommit);
  const generatedBranch = branchName(args.input, args.patchNodeId);
  const keyedPull = await pullRequestByKey(args.config, args.manifest.prKey);
  if (keyedPull) {
    const keyedManifest = manifestFromBody(keyedPull.body);
    if (!keyedPull.merged_at && keyedManifest?.baseCommit !== args.baseCommit) {
      // Continue below and refresh the same child PR against its current parent.
    } else {
      return {
        branch: keyedPull.head?.ref ?? generatedBranch,
        commit: keyedPull.head?.sha ?? args.baseCommit,
        number: keyedPull.number,
        url: keyedPull.html_url,
        reused: true,
        merged: Boolean(keyedPull.merged_at),
      };
    }
  }
  const existingSectionPull = await openPullRequestForPatchNode(
    args.config,
    args.input.run.targetId,
    args.input.node.sectionId,
    args.patchNodeId,
  );
  const branch = existingSectionPull?.head?.ref ?? generatedBranch;
  if (existingSectionPull && !existingSectionPull.head?.sha) {
    throw new Error(`Cannot refresh PR #${existingSectionPull.number}: the automation branch SHA is unavailable.`);
  }
  await runCommand("git", ["switch", "-C", branch, args.baseCommit], { cwd: args.worktreePath });
  await runCommand("git", ["config", "user.name", "secret-mcp-validation[bot]"], { cwd: args.worktreePath });
  await runCommand("git", ["config", "user.email", "secret-mcp-validation[bot]@users.noreply.github.com"], { cwd: args.worktreePath });
  await runCommand("git", ["add", "--", ...args.patch.changedPaths], { cwd: args.worktreePath });
  await runCommand("git", ["commit", "-m", `fix(${args.patchNodeId.toLowerCase()}): satisfy DESIGN_INDEX requirements`], { cwd: args.worktreePath });
  const commit = (await runCommand("git", ["rev-parse", "HEAD"], { cwd: args.worktreePath })).stdout.trim();

  const title = pullRequestTitle(args.patchNodeId, args.auditOutput, args.manifest.requirementIds);
  const body = buildPullRequestBody({ ...args, patchNodeId: args.patchNodeId });
  if (existingSectionPull?.head?.sha) {
    await runCommand("git", [
      "push",
      `--force-with-lease=refs/heads/${branch}:${existingSectionPull.head.sha}`,
      "origin",
      `HEAD:refs/heads/${branch}`,
    ], { cwd: args.worktreePath });
    const refreshed = await githubRequest<PullRequestResponse>(
      args.config,
      "PATCH",
      `/repos/${args.config.repository}/pulls/${existingSectionPull.number}`,
      { title, body, base: args.baseBranch },
    );
    return {
      branch,
      commit,
      number: refreshed.number,
      url: refreshed.html_url,
      reused: true,
      merged: false,
    };
  }

  const remote = await runCommand("git", ["ls-remote", "--exit-code", "--heads", "origin", branch], {
    cwd: args.worktreePath,
    allowFailure: true,
  });
  if (remote.exitCode === 0) {
    const remoteSha = remote.stdout.trim().split(/\s+/)[0];
    await runCommand("git", ["fetch", "origin", remoteSha], { cwd: args.worktreePath });
    const mergeBase = await runCommand("git", ["merge-base", remoteSha, args.baseCommit], {
      cwd: args.worktreePath,
      allowFailure: true,
    });
    if (mergeBase.exitCode !== 0 || mergeBase.stdout.trim() !== args.baseCommit) {
      throw new Error(`STALE_BASE: orphan branch ${branch} is not based on current parent and will not be reused.`);
    }
    const comparison = await runCommand("git", ["diff", "--quiet", remoteSha, "HEAD"], {
      cwd: args.worktreePath,
      allowFailure: true,
    });
    if (comparison.exitCode !== 0) {
      throw new Error(`STALE_BASE: orphan branch ${branch} exists with different content; it will not be overwritten.`);
    }
  } else {
    await runCommand("git", ["push", "origin", `HEAD:refs/heads/${branch}`], { cwd: args.worktreePath });
  }

  const pull = await githubRequest<PullRequestResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/pulls`,
    {
      title,
      head: branch,
      base: args.baseBranch,
      body,
      draft: false,
    },
  );
  return { branch, commit, number: pull.number, url: pull.html_url, reused: false, merged: false };
}

export function buildSectionPullRequestBody(args: {
  manifest: PullRequestManifest;
  childPullRequests: Array<MergeableChildPullRequest & { requirementIds: string[]; mergeBatch: number }>;
  batchSize: number;
}): string {
  const grouped = new Map<number, typeof args.childPullRequests>();
  for (const pull of args.childPullRequests) {
    const values = grouped.get(pull.mergeBatch) ?? [];
    values.push(pull);
    grouped.set(pull.mergeBatch, values);
  }
  const batches = [...grouped.entries()].sort(([left], [right]) => left - right).flatMap(([batch, pulls]) => [
    `### Batch ${batch}`,
    "",
    ...pulls.map((pull) => (
      `- [${pull.patchNodeId} PR #${pull.number}](${pull.url}) merged into the Section branch: ${codeItems(pull.requirementIds)}`
    )),
    "",
  ]);
  return [
    "## Section correction summary",
    "",
    `- Target: \`${args.manifest.targetId}\``,
    `- Section: \`${args.manifest.sectionId}\``,
    `- Trigger: \`${args.manifest.triggerSource.path}\``,
    `- Requirements corrected: ${codeItems(args.manifest.requirementIds)}`,
    `- Child PRs consolidated: \`${args.childPullRequests.length}\``,
    `- Maximum children per merge batch: \`${args.batchSize}\``,
    `- Aggregate patch hash: \`${args.manifest.patchHash}\``,
    "",
    "## Recursive child consolidation",
    "",
    ...batches,
    "Every child was independently preflighted, patched, guarded, tested, re-audited, and regression-checked. The pipeline merged each completed batch from the deepest descendant toward this Section branch and removed the child automation branches.",
    "",
    "## Human review boundary",
    "",
    `This draft PR is the single review boundary for \`${args.manifest.sectionId}\`. Its base is \`${args.manifest.baseBranch}\`; the automation must never merge this representative PR, and a user decides whether to merge it.`,
    "",
    args.manifest.runUrl ? `Run artifact: ${args.manifest.runUrl}` : `Run ID: \`${args.manifest.runId}\``,
    "",
    keyMarker(args.manifest.prKey),
    manifestMarker(args.manifest),
  ].join("\n");
}

export async function publishSectionPullRequest(args: {
  config: PipelineConfig;
  input: NodeAuditInput;
  manifest: PullRequestManifest;
  sectionBranch: string;
  sectionCommit: string;
  childPullRequests: Array<MergeableChildPullRequest & { requirementIds: string[]; mergeBatch: number }>;
}): Promise<{
  branch: string;
  commit: string;
  number: number;
  url: string;
  reused: boolean;
}> {
  await assertBranchAtCommit(args.config, args.manifest.baseBranch, args.manifest.baseCommit);
  if (args.sectionBranch === args.config.github.baseBranch || args.sectionBranch === args.manifest.baseBranch) {
    throw new Error(`Section representative branch must be isolated from ${args.manifest.baseBranch}.`);
  }
  const sectionReference = await githubRequest<GitReferenceResponse>(
    args.config,
    "GET",
    `/repos/${args.config.repository}/git/ref/heads/${encodeURIComponent(args.sectionBranch)}`,
  );
  if (sectionReference.object.sha !== args.sectionCommit) {
    throw new Error(
      `STALE_SECTION_HEAD: expected ${args.sectionCommit}, current ${args.sectionBranch} is ${sectionReference.object.sha}.`,
    );
  }
  const title = `fix(${args.input.node.sectionId.toLowerCase()}): review ${args.manifest.requirementIds.length} consolidated correction(s)`;
  const body = buildSectionPullRequestBody({
    manifest: args.manifest,
    childPullRequests: args.childPullRequests,
    batchSize: args.config.prMergeBatchSize,
  });
  const keyedPull = await pullRequestByKey(args.config, args.manifest.prKey);
  if (keyedPull) {
    if (keyedPull.merged_at) {
      throw new Error(`Section representative PR #${keyedPull.number} is already merged; it cannot be reused as a human review boundary.`);
    }
    const refreshed = await githubRequest<PullRequestResponse>(
      args.config,
      "PATCH",
      `/repos/${args.config.repository}/pulls/${keyedPull.number}`,
      { title, body, base: args.manifest.baseBranch },
    );
    return {
      branch: args.sectionBranch,
      commit: args.sectionCommit,
      number: refreshed.number,
      url: refreshed.html_url,
      reused: true,
    };
  }
  const pull = await githubRequest<PullRequestResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/pulls`,
    {
      title,
      head: args.sectionBranch,
      base: args.manifest.baseBranch,
      body,
      draft: true,
    },
  );
  return {
    branch: args.sectionBranch,
    commit: args.sectionCommit,
    number: pull.number,
    url: pull.html_url,
    reused: false,
  };
}
