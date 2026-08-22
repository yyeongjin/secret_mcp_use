import { sha256 } from "./hash.ts";
import { runCommand } from "./process.ts";
import type { GuardedPatch } from "./patch.ts";
import type {
  AuditFinding,
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
  head?: { ref: string; sha: string };
  base?: { ref: string; sha: string };
}

interface PullRequestFileResponse {
  filename: string;
}

interface IssueCommentResponse {
  body?: string | null;
}

interface GitReferenceResponse {
  object: { sha: string };
}

type CheckConclusion = "success" | "neutral" | "failure";

interface NodeCheckSummary {
  sectionId: string;
  name: string;
  fingerprint: string | null;
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
  } | null;
}

interface TargetCheckSummary {
  runId: string;
  targetId: string;
  triggerPath: string;
  nodes: NodeCheckSummary[];
}

async function githubRequest<T>(
  config: PipelineConfig,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  route: string,
  body?: unknown,
): Promise<T> {
  if (!config.github.token) throw new Error("GITHUB_TOKEN is required for PR creation.");
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
    throw new Error(`GitHub API ${method} ${route} failed with ${response.status}: ${(await response.text()).slice(0, 1000)}`);
  }
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function pullRequestKey(args: {
  targetId: string;
  sectionId: string;
  fingerprint: Sha256;
  patchHash: Sha256;
}): Sha256 {
  return sha256(`${args.targetId}${args.sectionId}${args.fingerprint}${args.patchHash}`);
}

export function branchName(input: NodeAuditInput): string {
  const target = input.run.targetId.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 100);
  const fingerprint = input.node.fingerprint.slice("sha256:".length, "sha256:".length + 12);
  return `auto/${target}/${input.node.sectionId}/${fingerprint}`;
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
  const disposition = pullRequest
    ? `Verified code diff: [draft PR #${pullRequest.number}](${pullRequest.url}) on \`${pullRequest.branch}\`.`
    : node.executionState === "PASS" || node.executionState === "CACHED_PASS"
      ? "No correction PR is required."
      : "No safe code PR was published. The result remains in this Check and the run artifact; the pipeline never creates a GitHub Issue.";
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
      `Independent request: \`${summary.runId}:audit:${node.sectionId}\``,
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
      const output = buildNodeCheckOutput({
        summary,
        node,
      });
      await githubRequest(args.config, "POST", `/repos/${args.config.repository}/check-runs`, {
        name: `Design Validation / ${node.sectionId} ${node.name}`.slice(0, 100),
        head_sha: args.config.baseCommit,
        status: "completed",
        conclusion: nodeCheckConclusion(node),
        external_id: `${summary.runId}:${summary.targetId}:${node.sectionId}`.slice(0, 255),
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

async function pullRequestByKey(config: PipelineConfig, key: Sha256): Promise<PullRequestResponse | null> {
  const marker = keyMarker(key);
  const pulls = await allAutomationPullRequests(config, "all");
  return pulls.find((pull) => (
    pull.body?.includes(marker) && (pull.state === "open" || Boolean(pull.merged_at))
  )) ?? null;
}

function automationBranchPrefix(targetId: string, sectionId: string): string {
  const target = targetId.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 100);
  return `auto/${target}/${sectionId}/`;
}

async function openPullRequestForSection(
  config: PipelineConfig,
  targetId: string,
  sectionId: string,
): Promise<PullRequestResponse | null> {
  const prefix = automationBranchPrefix(targetId, sectionId);
  return (await allAutomationPullRequests(config, "open")).find((pull) => {
    const manifest = manifestFromBody(pull.body);
    return (
      (manifest?.targetId === targetId && manifest.sectionId === sectionId) ||
      pull.head?.ref.startsWith(prefix)
    );
  }) ?? null;
}

async function conflictingPullRequest(
  config: PipelineConfig,
  branch: string,
  changedPaths: string[],
): Promise<{ number: number; url: string; paths: string[] } | null> {
  for (const pull of await allAutomationPullRequests(config, "open")) {
    if (pull.head?.ref === branch) continue;
    const files = await githubRequest<PullRequestFileResponse[]>(
      config,
      "GET",
      `/repos/${config.repository}/pulls/${pull.number}/files?per_page=100`,
    );
    const overlap = files.map((file) => file.filename).filter((filename) => changedPaths.includes(filename));
    if (overlap.length > 0) return { number: pull.number, url: pull.html_url, paths: overlap };
  }
  return null;
}

async function assertCurrentBase(config: PipelineConfig): Promise<void> {
  const reference = await githubRequest<GitReferenceResponse>(
    config,
    "GET",
    `/repos/${config.repository}/git/ref/heads/${encodeURIComponent(config.github.baseBranch)}`,
  );
  if (reference.object.sha !== config.baseCommit) {
    throw new Error(`STALE_BASE: expected ${config.baseCommit}, current ${config.github.baseBranch} is ${reference.object.sha}. Re-audit latest main before publishing or refreshing this PR.`);
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
}): string {
  const addressedIds = new Set(args.manifest.requirementIds);
  const addressedFindings = args.auditOutput.findings.filter((finding) => addressedIds.has(finding.requirementId));
  const remainingFindings = args.auditOutput.findings.filter((finding) => !addressedIds.has(finding.requirementId));
  if (remainingFindings.length > 0) {
    throw new Error(`INCOMPLETE_SECTION_PR: ${remainingFindings.map((finding) => finding.requirementId).join(", ")}`);
  }
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
    "",
    "## Scope",
    "",
    `- Target: \`${args.manifest.targetId}\``,
    `- Section: \`${args.manifest.sectionId}\``,
    `- Base: \`${args.manifest.baseCommit}\``,
    `- Trigger: \`${args.manifest.triggerSource.path}\``,
    `- Fingerprint: \`${args.manifest.fingerprint}\``,
    `- Patch hash: \`${args.manifest.patchHash}\``,
    `- Write set: ${args.manifest.writeSet.map((item) => `\`${item.path}\``).join(", ")}`,
    "",
    "## Independent NVIDIA Requests",
    "",
    `- Audit: \`${args.manifest.runId}:audit:${args.input.node.sectionId}\``,
    `- Patch: \`${args.manifest.runId}:patch:${args.input.node.sectionId}:attempt:${args.patchAttempt}\``,
    `- Patched-code audit: \`${args.manifest.runId}:reaudit:${args.input.node.sectionId}:attempt:${args.patchAttempt}\``,
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
    "This draft PR contains an actual verified code correction. It is never auto-approved or auto-merged.",
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
}): Promise<{ branch: string; number: number; url: string; reused: boolean; merged: boolean }> {
  await assertCurrentBase(args.config);
  const generatedBranch = branchName(args.input);
  const keyedPull = await pullRequestByKey(args.config, args.manifest.prKey);
  if (keyedPull) {
    const keyedManifest = manifestFromBody(keyedPull.body);
    if (!keyedPull.merged_at && keyedManifest?.baseCommit !== args.config.baseCommit) {
      // Continue below and refresh the same Section PR against current main.
    } else {
      return {
        branch: keyedPull.head?.ref ?? generatedBranch,
        number: keyedPull.number,
        url: keyedPull.html_url,
        reused: true,
        merged: Boolean(keyedPull.merged_at),
      };
    }
  }
  const existingSectionPull = await openPullRequestForSection(
    args.config,
    args.input.run.targetId,
    args.input.node.sectionId,
  );
  const branch = existingSectionPull?.head?.ref ?? generatedBranch;
  if (existingSectionPull && !existingSectionPull.head?.sha) {
    throw new Error(`Cannot refresh PR #${existingSectionPull.number}: the automation branch SHA is unavailable.`);
  }
  const conflict = await conflictingPullRequest(args.config, branch, args.patch.changedPaths);
  if (conflict) {
    throw new Error(`BLOCKED_CONFLICT: open automation PR #${conflict.number} owns ${conflict.paths.join(", ")}: ${conflict.url}`);
  }

  await runCommand("git", ["switch", "-c", branch], { cwd: args.worktreePath });
  await runCommand("git", ["config", "user.name", "secret-mcp-validation[bot]"], { cwd: args.worktreePath });
  await runCommand("git", ["config", "user.email", "secret-mcp-validation[bot]@users.noreply.github.com"], { cwd: args.worktreePath });
  await runCommand("git", ["add", "--", ...args.patch.changedPaths], { cwd: args.worktreePath });
  await runCommand("git", ["commit", "-m", `fix(${args.input.node.sectionId.toLowerCase()}): satisfy DESIGN_INDEX requirements`], { cwd: args.worktreePath });

  const title = pullRequestTitle(args.input.node.sectionId, args.auditOutput, args.manifest.requirementIds);
  const body = buildPullRequestBody(args);
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
      { title, body, base: args.config.github.baseBranch },
    );
    return {
      branch,
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
    const mergeBase = await runCommand("git", ["merge-base", remoteSha, args.config.baseCommit], {
      cwd: args.worktreePath,
      allowFailure: true,
    });
    if (mergeBase.exitCode !== 0 || mergeBase.stdout.trim() !== args.config.baseCommit) {
      throw new Error(`STALE_BASE: orphan branch ${branch} is not based on current main and will not be reused.`);
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
      base: args.config.github.baseBranch,
      body,
      draft: true,
    },
  );
  return { branch, number: pull.number, url: pull.html_url, reused: false, merged: false };
}
