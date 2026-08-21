import { mkdtemp, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { runCommand } from "./process.ts";
import type { GuardedPatch } from "./patch.ts";
import type { PipelineConfig } from "./types.ts";

export interface PatchWorktree {
  path: string;
  cleanup: () => Promise<void>;
}

let worktreeMutation = Promise.resolve();

async function serializeWorktreeMutation<T>(operation: () => Promise<T>): Promise<T> {
  const previous = worktreeMutation;
  let release = () => {};
  worktreeMutation = new Promise<void>((resolve) => { release = resolve; });
  await previous;
  try {
    return await operation();
  } finally {
    release();
  }
}

async function detachedWorktree(config: PipelineConfig, label: string): Promise<PatchWorktree> {
  const worktreePath = await mkdtemp(path.join(os.tmpdir(), `secret-mcp-${label}-`));
  await rm(worktreePath, { recursive: true, force: true });
  await serializeWorktreeMutation(() => runCommand(
    "git",
    ["worktree", "add", "--detach", worktreePath, config.baseCommit],
    { cwd: config.repositoryRoot },
  ));
  return {
    path: worktreePath,
    cleanup: async () => {
      await serializeWorktreeMutation(() => runCommand(
        "git",
        ["worktree", "remove", "--force", worktreePath],
        { cwd: config.repositoryRoot, allowFailure: true },
      ));
      await rm(worktreePath, { recursive: true, force: true });
    },
  };
}

export async function createAuditWorktree(
  config: PipelineConfig,
  sectionId: string,
): Promise<PatchWorktree> {
  return detachedWorktree(config, `audit-${sectionId}`);
}

export async function createPatchedWorktree(
  config: PipelineConfig,
  patch: GuardedPatch,
): Promise<PatchWorktree> {
  const worktree = await detachedWorktree(config, `patch-${patch.sectionId}`);
  const worktreePath = worktree.path;
  const patchPath = path.join(worktreePath, ".section.patch");
  await writeFile(patchPath, patch.diff, "utf8");
  await runCommand("git", ["apply", "--whitespace=error-all", patchPath], { cwd: worktreePath });
  await rm(patchPath, { force: true });

  try {
    await symlink(path.join(config.repositoryRoot, "node_modules"), path.join(worktreePath, "node_modules"), "dir");
  } catch {
    // The link can already exist in a reused diagnostic worktree.
  }

  return {
    path: worktreePath,
    cleanup: worktree.cleanup,
  };
}

export async function verifyPatchedWorktree(
  config: PipelineConfig,
  worktreePath: string,
): Promise<Array<{ id: string; output: string }>> {
  const verificationEnv = {
    ...process.env,
    PIPELINE_FORCE_FULL_AUDIT: "false",
  };
  const typecheck = await runCommand("npm", ["run", "typecheck"], {
    cwd: worktreePath,
    env: verificationEnv,
  });
  const tests = await runCommand("npm", ["test"], {
    cwd: worktreePath,
    env: verificationEnv,
  });
  const frontend = await runCommand("npm", ["run", "test:frontend"], {
    cwd: config.repositoryRoot,
    env: {
      ...verificationEnv,
      FRONTEND_ROOT: path.join(worktreePath, "frontend"),
      PLAYWRIGHT_OUTPUT_DIR: path.join(worktreePath, "test-results"),
      CI: "true",
    },
  });
  return [
    { id: "typecheck", output: `${typecheck.stdout}${typecheck.stderr}` },
    { id: "unit", output: `${tests.stdout}${tests.stderr}` },
    { id: "frontend", output: `${frontend.stdout}${frontend.stderr}` },
  ];
}
