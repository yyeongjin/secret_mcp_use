import { runCommand } from "./process.ts";
import type { GuardedPatch } from "./patch.ts";
import type { NodeAuditInput, PipelineConfig } from "./types.ts";

interface PullRequestResponse {
  number: number;
  html_url: string;
  state: string;
  head?: { ref: string };
}

interface PullRequestFileResponse {
  filename: string;
}

async function githubRequest<T>(
  config: PipelineConfig,
  method: "GET" | "POST",
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
  return (await response.json()) as T;
}

function branchName(input: NodeAuditInput): string {
  const fingerprint = input.node.fingerprint.slice("sha256:".length, "sha256:".length + 12);
  return `auto/${input.contract.designIndexSource.referenceId}/${input.node.sectionId}/${fingerprint}`;
}

async function existingPullRequest(
  config: PipelineConfig,
  branch: string,
): Promise<PullRequestResponse | null> {
  const owner = config.repository.split("/")[0];
  const pulls = await githubRequest<PullRequestResponse[]>(
    config,
    "GET",
    `/repos/${config.repository}/pulls?state=open&head=${encodeURIComponent(`${owner}:${branch}`)}`,
  );
  return pulls[0] ?? null;
}

async function conflictingPullRequest(
  config: PipelineConfig,
  branch: string,
  changedPaths: string[],
): Promise<{ number: number; url: string; paths: string[] } | null> {
  const pulls = await githubRequest<PullRequestResponse[]>(
    config,
    "GET",
    `/repos/${config.repository}/pulls?state=open&per_page=100`,
  );
  for (const pull of pulls) {
    if (!pull.head?.ref.startsWith("auto/") || pull.head.ref === branch) continue;
    const files = await githubRequest<PullRequestFileResponse[]>(
      config,
      "GET",
      `/repos/${config.repository}/pulls/${pull.number}/files?per_page=100`,
    );
    const overlap = files
      .map((file) => file.filename)
      .filter((filename) => changedPaths.includes(filename));
    if (overlap.length > 0) return { number: pull.number, url: pull.html_url, paths: overlap };
  }
  return null;
}

export async function publishPatchPullRequest(args: {
  config: PipelineConfig;
  worktreePath: string;
  input: NodeAuditInput;
  patch: GuardedPatch;
}): Promise<{ branch: string; number: number; url: string; reused: boolean }> {
  const branch = branchName(args.input);
  const existing = await existingPullRequest(args.config, branch);
  if (existing) {
    return { branch, number: existing.number, url: existing.html_url, reused: true };
  }
  const conflict = await conflictingPullRequest(
    args.config,
    branch,
    args.patch.changedPaths,
  );
  if (conflict) {
    throw new Error(
      `Open automation PR #${conflict.number} already owns ${conflict.paths.join(", ")}: ${conflict.url}`,
    );
  }

  const remoteBranch = await runCommand("git", ["ls-remote", "--exit-code", "--heads", "origin", branch], {
    cwd: args.worktreePath,
    allowFailure: true,
  });
  if (remoteBranch.exitCode === 0) {
    throw new Error(`Remote branch ${branch} exists without an open PR; refusing to overwrite it.`);
  }

  await runCommand("git", ["switch", "-c", branch], { cwd: args.worktreePath });
  await runCommand("git", ["config", "user.name", "secret-mcp-validation[bot]"], {
    cwd: args.worktreePath,
  });
  await runCommand("git", ["config", "user.email", "secret-mcp-validation[bot]@users.noreply.github.com"], {
    cwd: args.worktreePath,
  });
  await runCommand("git", ["add", "--", ...args.patch.changedPaths], { cwd: args.worktreePath });
  await runCommand(
    "git",
    ["commit", "-m", `fix(${args.input.node.sectionId.toLowerCase()}): satisfy DESIGN_INDEX requirements`],
    { cwd: args.worktreePath },
  );
  await runCommand("git", ["push", "origin", `HEAD:refs/heads/${branch}`], {
    cwd: args.worktreePath,
  });

  const title = `[${args.input.node.sectionId}] Apply grounded DESIGN_INDEX omissions`;
  const body = [
    "## Validation contract",
    "",
    `- Target: \`${args.input.run.targetId}\``,
    `- Section: \`${args.input.node.sectionId}\``,
    `- Trigger: \`${args.input.contract.designIndexSource.path}\``,
    `- Trigger hash: \`${args.input.contract.designIndexSource.documentHash}\``,
    `- Fingerprint: \`${args.input.node.fingerprint}\``,
    `- Patch hash: \`${args.patch.patchHash}\``,
    `- Changed files: ${args.patch.changedPaths.map((value) => `\`${value}\``).join(", ")}`,
    "",
    "The audit, patch generation, source guards, tests, and patched-code re-audit ran as isolated steps. This draft PR is never auto-approved or auto-merged.",
  ].join("\n");
  const pull = await githubRequest<PullRequestResponse>(
    args.config,
    "POST",
    `/repos/${args.config.repository}/pulls`,
    { title, head: branch, base: args.config.github.baseBranch, body, draft: true },
  );
  return { branch, number: pull.number, url: pull.html_url, reused: false };
}
