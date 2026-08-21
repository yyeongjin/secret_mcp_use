import { readFile } from "node:fs/promises";
import { importedArtifacts } from "./artifacts.ts";
import { hashJson, sha256 } from "./hash.ts";
import { matchesAnyPath } from "./manifest.ts";
import { runCommand } from "./process.ts";
import type { ChangeEvent, ChangedFile, ImpactManifest, PipelineConfig, TriggerSnapshot } from "./types.ts";

async function gitOutput(config: PipelineConfig, args: string[]): Promise<string> {
  const result = await runCommand("git", args, { cwd: config.repositoryRoot });
  return result.stdout.trim();
}

async function objectHash(config: PipelineConfig, commit: string, file: string): Promise<ChangeEvent["changedFiles"][number]["afterHash"]> {
  if (!commit) return null;
  const result = await runCommand("git", ["rev-parse", `${commit}:${file}`], { cwd: config.repositoryRoot, allowFailure: true });
  return result.exitCode === 0 ? sha256(result.stdout.trim()) : null;
}

function status(value: string): ChangedFile["status"] {
  if (value.startsWith("A")) return "added";
  if (value.startsWith("D")) return "deleted";
  if (value.startsWith("R")) return "renamed";
  return "modified";
}

async function changedFiles(config: PipelineConfig, before: string | null, after: string): Promise<ChangedFile[]> {
  if (!before) return [];
  const output = await gitOutput(config, ["diff", "--name-status", "--find-renames", "-z", before, after]);
  if (!output) return [];
  const values = output.split("\0").filter(Boolean);
  const result: ChangedFile[] = [];
  for (let index = 0; index < values.length;) {
    const code = values[index++];
    const beforePath = values[index++];
    const renamed = code.startsWith("R");
    const afterPath = renamed ? values[index++] : beforePath;
    result.push({
      path: afterPath,
      status: status(code),
      ...(renamed ? { beforePath } : {}),
      beforeHash: code.startsWith("A") ? null : await objectHash(config, before, beforePath),
      afterHash: code.startsWith("D") ? null : await objectHash(config, after, afterPath),
    });
  }
  return result.sort((a, b) => a.path.localeCompare(b.path));
}

async function eventPayload(config: PipelineConfig): Promise<Record<string, unknown>> {
  if (!config.eventPath) return {};
  return JSON.parse(await readFile(config.eventPath, "utf8")) as Record<string, unknown>;
}

export async function buildChangeEvent(
  config: PipelineConfig,
  manifest: ImpactManifest,
  triggers: TriggerSnapshot[],
): Promise<ChangeEvent> {
  const payload = await eventPayload(config);
  const pullRequest = payload.pull_request as Record<string, unknown> | undefined;
  const merged = pullRequest?.merged === true;
  const headCommit = payload.head_commit as Record<string, unknown> | undefined;
  const headMessage = typeof headCommit?.message === "string" ? headCommit.message : "";
  const automationMerge = (
    /^Merge pull request\b/.test(headMessage) ||
    /^\[S\d{2}\] Apply grounded DESIGN_INDEX omissions/.test(headMessage) ||
    /^fix\(s\d{2}\): satisfy DESIGN_INDEX requirements/.test(headMessage)
  );
  const source: ChangeEvent["source"] = config.eventName === "workflow_dispatch"
    ? "manual"
    : merged || automationMerge
      ? "merge"
      : "push";
  const eventBefore = typeof payload.before === "string" && !/^0+$/.test(payload.before) ? payload.before : null;
  let beforeCommit = eventBefore;
  if (!beforeCommit) {
    const parent = await runCommand("git", ["rev-parse", `${config.baseCommit}^`], { cwd: config.repositoryRoot, allowFailure: true });
    beforeCommit = parent.exitCode === 0 ? parent.stdout.trim() : null;
  }
  const changes = await changedFiles(config, beforeCommit, config.baseCommit);
  const triggerChanged = changes.some((file) => file.path.startsWith("trigger/DESIGN_INDEX_gdweb-"));
  const importedArtifactChanged = changes.some((file) => (
    file.path.startsWith("trigger/DESIGN_INDEX_gdweb-") ||
    file.path.startsWith("trigger/request-contracts/") ||
    file.path.startsWith("trigger/evidence/") ||
    file.path.includes(".request-contract.") ||
    file.path.startsWith("trigger/REQUEST_CONTRACT_")
  ));
  const validatorChanged = changes.some((file) => (
    file.path.startsWith("validation/src/") ||
    file.path.startsWith("validation/schemas/") ||
    file.path === "validation/impact-manifest.yml"
  ));
  const unknownSource = changes.some((file) => (
    matchesAnyPath(file.path, manifest.sourceGlobs) &&
    !matchesAnyPath(file.path, manifest.ignoredChangeGlobs) &&
    !file.path.startsWith("trigger/request-contracts/") &&
    !file.path.startsWith("trigger/evidence/") &&
    !file.path.includes(".request-contract.") &&
    !file.path.startsWith("trigger/REQUEST_CONTRACT_") &&
    !Object.values(manifest.nodes).some((node) => matchesAnyPath(file.path, node.reads))
  ));
  const forceFullAudit = config.forceFullAudit || triggerChanged || validatorChanged || unknownSource;
  const artifacts = (await Promise.all(
    triggers.map((trigger) => importedArtifacts(config.repositoryRoot, trigger)),
  )).flat();
  return {
    schemaVersion: "design-validation/change-event/v2",
    eventId: `change-${hashJson({ source, beforeCommit, afterCommit: config.baseCommit, changes }).slice(7, 23)}`,
    source: importedArtifactChanged ? "design-index-import" : source,
    repository: config.repository,
    beforeCommit,
    afterCommit: config.baseCommit,
    changedFiles: changes,
    importedArtifacts: artifacts,
    options: {
      forceFullAudit,
      allowCachedPass: !forceFullAudit,
      reason: forceFullAudit
        ? "Full audit required by trigger, validator, unknown source, or explicit force change."
        : "Incremental impact calculation is safe for the changed paths.",
    },
  };
}

export function directDirtySections(event: ChangeEvent, manifest: ImpactManifest): Set<string> {
  const dirty = new Set<string>();
  if (event.options.forceFullAudit) return new Set(Object.keys(manifest.nodes));
  for (const changed of event.changedFiles) {
    for (const [sectionId, node] of Object.entries(manifest.nodes)) {
      if (matchesAnyPath(changed.path, node.reads)) dirty.add(sectionId);
    }
  }
  return dirty;
}
