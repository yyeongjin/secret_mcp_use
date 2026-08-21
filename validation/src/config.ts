import { execFileSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import path from "node:path";
import type { PipelineConfig } from "./types.ts";

function bool(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === "") return fallback;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new Error(`Expected boolean value, received ${value}.`);
}

function integer(value: string | undefined, fallback: number, minimum: number): number {
  const parsed = value === undefined || value === "" ? fallback : Number(value);
  if (!Number.isInteger(parsed) || parsed < minimum) {
    throw new Error(`Expected integer >= ${minimum}, received ${String(value)}.`);
  }
  return parsed;
}

function decimal(value: string | undefined, fallback: number, minimum: number, maximum: number): number {
  const parsed = value === undefined || value === "" ? fallback : Number(value);
  if (!Number.isFinite(parsed) || parsed < minimum || parsed > maximum) {
    throw new Error(`Expected number between ${minimum} and ${maximum}, received ${String(value)}.`);
  }
  return parsed;
}

function argValues(argv: string[], name: string): string[] {
  const values: string[] = [];
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === name) {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) throw new Error(`${name} requires a value.`);
      values.push(value);
      index += 1;
    }
  }
  return values;
}

function hasArg(argv: string[], name: string): boolean {
  return argv.includes(name);
}

async function discoverTriggers(repositoryRoot: string): Promise<string[]> {
  const entries = await readdir(path.join(repositoryRoot, "trigger"), { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /^DESIGN_INDEX_gdweb-[A-Za-z0-9_-]+\.md$/.test(entry.name))
    .map((entry) => `trigger/${entry.name}`)
    .sort();
}

function currentCommit(repositoryRoot: string): string {
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repositoryRoot,
    encoding: "utf8",
  }).trim();
}

export async function loadConfig(argv = process.argv.slice(2)): Promise<PipelineConfig> {
  const repositoryRoot = path.resolve(process.cwd());
  const triggerArgs = argValues(argv, "--trigger");
  const triggerPaths = triggerArgs.length > 0 ? triggerArgs : await discoverTriggers(repositoryRoot);
  const forceFullAudit = hasArg(argv, "--force-full-audit") || bool(process.env.PIPELINE_FORCE_FULL_AUDIT, false);
  const explicitDryRun = hasArg(argv, "--dry-run");
  const dryRun = explicitDryRun || bool(process.env.PIPELINE_DRY_RUN, true);
  const createPrs = hasArg(argv, "--create-prs") || (!explicitDryRun && bool(process.env.PIPELINE_CREATE_PRS, false));

  if (createPrs && dryRun) {
    throw new Error("PIPELINE_CREATE_PRS=true requires PIPELINE_DRY_RUN=false.");
  }
  if (!process.env.NVIDIA_API_KEY) throw new Error("NVIDIA_API_KEY is required.");

  const contextWindowTokens = integer(process.env.NVIDIA_CONTEXT_WINDOW_TOKENS, 1000000, 1);
  const maxInputTokens = integer(process.env.NVIDIA_MAX_INPUT_TOKENS, 980000, 1);
  const maxOutputTokens = integer(process.env.NVIDIA_MAX_OUTPUT_TOKENS, 4096, 1);
  if (maxInputTokens + maxOutputTokens > contextWindowTokens) {
    throw new Error(
      `NVIDIA input and output budgets exceed the context window: ${maxInputTokens} + ${maxOutputTokens} > ${contextWindowTokens}.`,
    );
  }

  return {
    repositoryRoot,
    repository: process.env.GITHUB_REPOSITORY ?? "yyeongjin/secret_mcp_use",
    baseCommit: currentCommit(repositoryRoot),
    specificationPath: process.env.PIPELINE_SPECIFICATION_PATH ?? "DESIGN_INDEX_SPECIFICATION.md",
    impactManifestPath: process.env.PIPELINE_IMPACT_MANIFEST_PATH ?? "validation/impact-manifest.yml",
    triggerPaths,
    outputRoot: path.resolve(repositoryRoot, process.env.PIPELINE_OUTPUT_ROOT ?? ".validation-runs/current"),
    stateRoot: path.resolve(repositoryRoot, process.env.PIPELINE_STATE_ROOT ?? ".validation-state"),
    eventName: process.env.GITHUB_EVENT_NAME ?? "manual",
    eventPath: process.env.GITHUB_EVENT_PATH ?? null,
    runId: process.env.GITHUB_RUN_ID ?? null,
    runAttempt: process.env.GITHUB_RUN_ATTEMPT ?? null,
    forceFullAudit,
    dryRun,
    createPrs,
    maxChangedFiles: integer(process.env.PIPELINE_MAX_CHANGED_FILES, 5, 1),
    maxChangedLines: integer(process.env.PIPELINE_MAX_CHANGED_LINES, 500, 1),
    auditAttempts: integer(process.env.PIPELINE_AUDIT_ATTEMPTS, 3, 1),
    patchGenerationAttempts: integer(process.env.PIPELINE_PATCH_ATTEMPTS, 8, 1),
    nvidia: {
      apiKey: process.env.NVIDIA_API_KEY ?? "",
      baseUrl: process.env.NVIDIA_BASE_URL ?? "https://integrate.api.nvidia.com/v1",
      model: process.env.NVIDIA_MODEL ?? "nvidia/nemotron-3-super-120b-a12b",
      contextWindowTokens,
      maxInputTokens,
      maxOutputTokens,
      enableThinking: bool(process.env.NVIDIA_ENABLE_THINKING, false),
      reasoningBudget: integer(process.env.NVIDIA_REASONING_BUDGET, 0, 0),
      temperature: decimal(process.env.NVIDIA_TEMPERATURE, 1, 0, 1),
      topP: decimal(process.env.NVIDIA_TOP_P, 0.95, 0, 1),
      rpmLimit: integer(process.env.NVIDIA_RPM_LIMIT, 40, 1),
      concurrency: integer(process.env.NVIDIA_AUDIT_CONCURRENCY, 1, 1),
      timeoutMs: integer(process.env.NVIDIA_TIMEOUT_MS, 900000, 1000),
      maxRetries: integer(process.env.NVIDIA_MAX_RETRIES, 3, 0),
    },
    github: {
      token: process.env.GITHUB_TOKEN ?? "",
      apiUrl: process.env.GITHUB_API_URL ?? "https://api.github.com",
      serverUrl: process.env.GITHUB_SERVER_URL ?? "https://github.com",
      actor: process.env.GITHUB_ACTOR ?? "secret-mcp-validation[bot]",
      baseBranch: process.env.PIPELINE_PR_BASE_BRANCH ?? process.env.GITHUB_REF_NAME ?? "main",
    },
  };
}
