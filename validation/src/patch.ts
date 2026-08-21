import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { sha256 } from "./hash.ts";
import { matchesAnyPath } from "./manifest.ts";
import { runCommand } from "./process.ts";
import type {
  ImpactManifest,
  NodeAuditInput,
  NodePatchOutput,
  PipelineConfig,
  SectionId,
  Sha256,
} from "./types.ts";

export interface GuardedPatch {
  sectionId: SectionId;
  diff: string;
  changedPaths: string[];
  additions: number;
  deletions: number;
  patchHash: Sha256;
}

export function isRepairablePatchFormatError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  if (message === "Malformed unified diff file headers.") return true;
  if (!message.includes("git apply --check")) return false;
  return /(?:corrupt patch|patch fragment without header|malformed patch|unexpected end of file|unrecognized input|No valid patches in input|patch failed:|patch does not apply)/i.test(
    message,
  );
}

export function normalizeUnifiedDiffMechanics(diff: string): string {
  const lines = diff.replaceAll("\r\n", "\n").split("\n");
  if (lines.at(-1) === "") lines.pop();
  const normalized: string[] = [];
  let changedHunks = 0;

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    if (line.startsWith("index ")) {
      index += 1;
      continue;
    }
    if (!line.startsWith("@@ ")) {
      normalized.push(line);
      index += 1;
      continue;
    }

    const header = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@(.*)$/.exec(line);
    if (!header) return diff;
    index += 1;
    const body: string[] = [];
    while (index < lines.length && !lines[index].startsWith("@@ ") && !lines[index].startsWith("diff --git ")) {
      if (lines[index].startsWith("--- ") && lines[index + 1]?.startsWith("+++ ")) break;
      const bodyLine = lines[index] === "" ? " " : lines[index];
      if (!/^[ +\\-]/.test(bodyLine) && bodyLine !== "\\ No newline at end of file") return diff;
      body.push(bodyLine);
      index += 1;
    }

    const additions = body.filter((bodyLine) => bodyLine.startsWith("+")).length;
    const deletions = body.filter((bodyLine) => bodyLine.startsWith("-")).length;
    if (additions === 0 && deletions === 0) continue;
    const oldCount = body.filter((bodyLine) => bodyLine.startsWith(" ") || bodyLine.startsWith("-")).length;
    const newCount = body.filter((bodyLine) => bodyLine.startsWith(" ") || bodyLine.startsWith("+")).length;
    normalized.push(`@@ -${header[1]},${oldCount} +${header[2]},${newCount} @@${header[3]}`, ...body);
    changedHunks += 1;
  }

  return changedHunks > 0 ? `${normalized.join("\n")}\n` : diff;
}

async function exists(pathname: string): Promise<boolean> {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

function normalizedDiffPath(raw: string): string | null {
  const value = raw.split("\t", 1)[0].trim();
  if (value === "/dev/null") return null;
  const withoutPrefix = value.startsWith("a/") || value.startsWith("b/") ? value.slice(2) : value;
  const normalized = path.posix.normalize(withoutPrefix);
  if (
    path.posix.isAbsolute(normalized) ||
    normalized === ".." ||
    normalized.startsWith("../") ||
    normalized.includes("/../")
  ) {
    throw new Error(`Unsafe diff path: ${raw}`);
  }
  return normalized;
}

export function inspectUnifiedDiff(diff: string): {
  changedPaths: string[];
  additions: number;
  deletions: number;
} {
  if (/^deleted file mode /m.test(diff) || /^rename (?:from|to) /m.test(diff)) {
    throw new Error("File deletion and rename are forbidden.");
  }
  if (/^(?:old|new) mode /m.test(diff)) throw new Error("File mode changes are forbidden.");
  if (/^(?:GIT binary patch|Binary files )/m.test(diff)) {
    throw new Error("Binary patches are forbidden.");
  }
  for (const match of diff.matchAll(/^new file mode (\d+)$/gm)) {
    if (match[1] !== "100644") throw new Error(`Unsafe new file mode: ${match[1]}.`);
  }

  const oldPaths: Array<string | null> = [];
  const newPaths: Array<string | null> = [];
  let additions = 0;
  let deletions = 0;
  for (const line of diff.split("\n")) {
    if (line.startsWith("--- ")) oldPaths.push(normalizedDiffPath(line.slice(4)));
    if (line.startsWith("+++ ")) newPaths.push(normalizedDiffPath(line.slice(4)));
    if (line.startsWith("+") && !line.startsWith("+++")) additions += 1;
    if (line.startsWith("-") && !line.startsWith("---")) deletions += 1;
  }
  if (oldPaths.length === 0 || oldPaths.length !== newPaths.length) {
    throw new Error("Malformed unified diff file headers.");
  }
  const changedPaths = [...new Set(newPaths.map((value, index) => value ?? oldPaths[index]).filter(Boolean))] as string[];
  if (changedPaths.length === 0) throw new Error("Patch contains no changed files.");
  return { changedPaths: changedPaths.sort(), additions, deletions };
}

async function currentHash(repositoryRoot: string, relativePath: string): Promise<Sha256> {
  const absolutePath = path.join(repositoryRoot, relativePath);
  if (!(await exists(absolutePath))) return sha256("");
  return sha256(await readFile(absolutePath));
}

export async function guardPatch(args: {
  config: PipelineConfig;
  manifest: ImpactManifest;
  auditInput: NodeAuditInput;
  patchOutput: NodePatchOutput;
  scratchDirectory: string;
}): Promise<GuardedPatch> {
  const inspection = inspectUnifiedDiff(args.patchOutput.diff);
  if (inspection.changedPaths.length > args.config.maxChangedFiles) {
    throw new Error(
      `Patch changes ${inspection.changedPaths.length} files; limit is ${args.config.maxChangedFiles}.`,
    );
  }
  if (inspection.additions + inspection.deletions > args.config.maxChangedLines) {
    throw new Error(
      `Patch changes ${inspection.additions + inspection.deletions} lines; limit is ${args.config.maxChangedLines}.`,
    );
  }

  for (const changedPath of inspection.changedPaths) {
    if (matchesAnyPath(changedPath, args.manifest.immutableInputGlobs)) {
      throw new Error(`BLOCKED_IMMUTABLE_INPUT_WRITE: ${changedPath}`);
    }
    if (!matchesAnyPath(changedPath, args.manifest.globalAllowedWriteGlobs)) {
      throw new Error(`Patch writes outside frontend ownership: ${changedPath}`);
    }
    if (!matchesAnyPath(changedPath, args.auditInput.policy.allowedWriteGlobs)) {
      throw new Error(`${args.auditInput.node.sectionId} does not own ${changedPath}.`);
    }
  }

  const declaredWrites = [...new Set(args.patchOutput.writeSet.map((entry) => entry.path))].sort();
  if (JSON.stringify(declaredWrites) !== JSON.stringify(inspection.changedPaths)) {
    throw new Error("Patch writeSet does not exactly match unified diff paths.");
  }
  for (const entry of [...args.patchOutput.readSet, ...args.patchOutput.writeSet]) {
    if (matchesAnyPath(entry.path, args.manifest.immutableInputGlobs)) {
      throw new Error(`Model included immutable input in file set: ${entry.path}`);
    }
    const actual = await currentHash(args.config.repositoryRoot, entry.path);
    if (actual !== entry.baseHash) throw new Error(`Stale or incorrect base hash for ${entry.path}.`);
  }

  const patchPath = path.join(args.scratchDirectory, `${args.auditInput.node.sectionId}.diff`);
  await writeFile(patchPath, args.patchOutput.diff, "utf8");
  await runCommand("git", ["apply", "--check", "--whitespace=error-all", patchPath], {
    cwd: args.config.repositoryRoot,
  });
  return {
    sectionId: args.auditInput.node.sectionId,
    diff: args.patchOutput.diff,
    changedPaths: inspection.changedPaths,
    additions: inspection.additions,
    deletions: inspection.deletions,
    patchHash: sha256(args.patchOutput.diff),
  };
}
