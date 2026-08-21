import { sha256 } from "./hash.ts";
import { runCommand } from "./process.ts";
import type { GuardedPatch } from "./patch.ts";
import type { NodeAuditInput, PipelineConfig, PullRequestManifest, Sha256 } from "./types.ts";

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

interface GitReferenceResponse {
  object: { sha: string };
}

type CheckConclusion = "success" | "neutral" | "failure" | "action_required";

interface NodeCheckSummary {
  sectionId: string;
  name: string;
  fingerprint: string | null;
  auditStatus: string;
  executionState: string;
  auditAttempts: number;
  requirementIds: string[];
  patch: {
    status: string;
    reason: string;
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
  ) return "action_required";
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
      const status = nodeDisplayStatus(node);
      const requirements = node.requirementIds.length > 0
        ? node.requirementIds.map((id) => `\`${id}\``).join(", ")
        : "none";
      const patchReason = node.patch?.reason
        ? node.patch.reason.slice(0, 4000)
        : "No patch request was required.";
      const pullRequest = node.patch?.pullRequest;
      const checkSummary = [
        `- Target: \`${summary.targetId}\``,
        `- Trigger: \`${summary.triggerPath}\``,
        `- Audit status: \`${node.auditStatus}\``,
        `- Execution state: \`${node.executionState}\``,
        `- Provider audit calls: \`${node.auditAttempts}\``,
        `- Patch status: \`${node.patch?.status ?? "NOT_RUN"}\``,
        `- Fingerprint: \`${node.fingerprint ?? "unavailable"}\``,
        `- Requirement IDs: ${requirements}`,
        `- Patch reason: ${patchReason}`,
        pullRequest
          ? `- Draft PR: [#${pullRequest.number}](${pullRequest.url}) on \`${pullRequest.branch}\``
          : "- Draft PR: none",
        "",
        `Independent request: \`${summary.runId}:audit:${node.sectionId}\``,
      ].join("\n");
      await githubRequest(args.config, "POST", `/repos/${args.config.repository}/check-runs`, {
        name: `Design Validation / ${node.sectionId} ${node.name}`.slice(0, 100),
        head_sha: args.config.baseCommit,
        status: "completed",
        conclusion: nodeCheckConclusion(node),
        external_id: `${summary.runId}:${summary.targetId}:${node.sectionId}`.slice(0, 255),
        ...(detailsUrl ? { details_url: detailsUrl } : {}),
        output: {
          title: `${node.sectionId} ${status}`.slice(0, 255),
          summary: checkSummary,
        },
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

async function allAutomationPullRequests(config: PipelineConfig, state: "open" | "all"): Promise<PullRequestResponse[]> {
  const pulls = await githubRequest<PullRequestResponse[]>(
    config,
    "GET",
    `/repos/${config.repository}/pulls?state=${state}&base=${encodeURIComponent(config.github.baseBranch)}&per_page=100&sort=updated&direction=desc`,
  );
  return pulls.filter((pull) => pull.head?.ref.startsWith("auto/"));
}

async function pullRequestByKey(config: PipelineConfig, key: Sha256): Promise<PullRequestResponse | null> {
  const marker = keyMarker(key);
  const pulls = await allAutomationPullRequests(config, "all");
  return pulls.find((pull) => (
    pull.body?.includes(marker) && (pull.state === "open" || Boolean(pull.merged_at))
  )) ?? null;
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
    throw new Error(`STALE_BASE: expected ${config.baseCommit}, current ${config.github.baseBranch} is ${reference.object.sha}. Re-audit latest main; do not rebase or force-push this patch.`);
  }
}

export async function reconcileStaleAutomationPullRequests(config: PipelineConfig): Promise<number[]> {
  if (!config.createPrs || !config.github.token) return [];
  const closed: number[] = [];
  for (const pull of await allAutomationPullRequests(config, "open")) {
    const manifest = manifestFromBody(pull.body);
    if (!manifest || manifest.baseCommit === config.baseCommit) continue;
    await githubRequest(config, "POST", `/repos/${config.repository}/issues/${pull.number}/comments`, {
      body: `STALE_BASE: this automation PR was generated from \`${manifest.baseCommit}\`, while current \`${config.github.baseBranch}\` is \`${config.baseCommit}\`. The patch is discarded and its Section must be audited again. No rebase or force-push was performed.`,
    });
    await githubRequest(config, "PATCH", `/repos/${config.repository}/pulls/${pull.number}`, { state: "closed" });
    if (pull.head?.ref.startsWith("auto/")) {
      await githubRequest(
        config,
        "DELETE",
        `/repos/${config.repository}/git/refs/heads/${pull.head.ref.split("/").map(encodeURIComponent).join("/")}`,
      );
    }
    closed.push(pull.number);
  }
  return closed;
}

function pullRequestBody(args: {
  input: NodeAuditInput;
  patch: GuardedPatch;
  manifest: PullRequestManifest;
}): string {
  const findings = args.manifest.requirementIds.map((id) => `- \`${id}\``).join("\n") || "- none";
  const evidence = args.manifest.evidenceRefs.map((id) => `- \`${id}\``).join("\n") || "- none";
  return [
    keyMarker(args.manifest.prKey),
    manifestMarker(args.manifest),
    "## Reason",
    "",
    `A dedicated ${args.input.node.sectionId} NVIDIA audit found implementation omissions grounded in the immutable DESIGN_INDEX input.`,
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
    "## Requirements",
    "",
    findings,
    "",
    "## Evidence",
    "",
    evidence,
    "",
    "## Independent NVIDIA Requests",
    "",
    `- Audit: \`${args.manifest.runId}:audit:${args.input.node.sectionId}\``,
    `- Patch: \`${args.manifest.runId}:patch:${args.input.node.sectionId}:attempt:<n>\``,
    `- Patched-code audit: \`${args.manifest.runId}:reaudit:${args.input.node.sectionId}:attempt:<n>\``,
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
    "This draft PR is never auto-approved or auto-merged.",
  ].join("\n");
}

export async function publishPatchPullRequest(args: {
  config: PipelineConfig;
  worktreePath: string;
  input: NodeAuditInput;
  patch: GuardedPatch;
  manifest: PullRequestManifest;
}): Promise<{ branch: string; number: number; url: string; reused: boolean; merged: boolean }> {
  await assertCurrentBase(args.config);
  const branch = branchName(args.input);
  const keyedPull = await pullRequestByKey(args.config, args.manifest.prKey);
  if (keyedPull) {
    return {
      branch: keyedPull.head?.ref ?? branch,
      number: keyedPull.number,
      url: keyedPull.html_url,
      reused: true,
      merged: Boolean(keyedPull.merged_at),
    };
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
      title: `[${args.input.node.sectionId}] Apply grounded DESIGN_INDEX omissions`,
      head: branch,
      base: args.config.github.baseBranch,
      body: pullRequestBody(args),
      draft: true,
    },
  );
  return { branch, number: pull.number, url: pull.html_url, reused: false, merged: false };
}
