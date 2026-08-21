import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { sha256 } from "./hash.ts";
import { matchesAnyPath } from "./manifest.ts";
import { runCommand } from "./process.ts";
import type {
  ImpactManifest,
  NodeAuditInput,
  NodeAuditOutput,
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

export function isRetryablePatchCandidateError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  if (
    message === "Malformed unified diff file headers." ||
    message === "Patch contains no changed files." ||
    message === "Patch writeSet does not exactly match unified diff paths." ||
    message.startsWith("Stale or incorrect base hash for ")
  ) {
    return true;
  }
  const duplicatedFrontendPath = /^S\d{2} does not own (frontend\/\S*\/frontend\/\S+)\.$/.exec(message);
  if (duplicatedFrontendPath) return true;
  return message.includes("git apply --check");
}

export function normalizeUnifiedDiffMechanics(diff: string): string {
  const rawLines = diff.replaceAll("\r\n", "\n").split("\n");
  const lines: string[] = [];
  let hasFileHeader = false;

  for (let index = 0; index < rawLines.length; index += 1) {
    const line = rawLines[index];
    if (line.startsWith("index ")) continue;
    if (line.startsWith("diff --git ")) {
      const header = /^diff --git (\S+) (\S+)$/.exec(line);
      if (!header) return diff;
      const oldPath = normalizedDiffPath(header[1]);
      const newPath = normalizedDiffPath(header[2]);
      const changedPath = newPath ?? oldPath;
      if (!changedPath) return diff;
      lines.push(`diff --git a/${changedPath} b/${changedPath}`);
      hasFileHeader = true;
      continue;
    }
    if (line.startsWith("--- ") && rawLines[index + 1]?.startsWith("+++ ")) {
      const oldPath = normalizedDiffPath(line.slice(4));
      const newPath = normalizedDiffPath(rawLines[index + 1].slice(4));
      const changedPath = newPath ?? oldPath;
      if (!changedPath) return diff;
      if (!hasFileHeader) lines.push(`diff --git a/${changedPath} b/${changedPath}`);
      lines.push(
        oldPath === null ? "--- /dev/null" : `--- a/${oldPath}`,
        newPath === null ? "+++ /dev/null" : `+++ b/${newPath}`,
      );
      hasFileHeader = false;
      index += 1;
      continue;
    }
    lines.push(line);
  }
  if (lines.at(-1) === "") lines.pop();
  const normalized: string[] = [];
  let changedHunks = 0;

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
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

    const meaningfulBody: string[] = [];
    for (let bodyIndex = 0; bodyIndex < body.length;) {
      if (!body[bodyIndex].startsWith("-")) {
        meaningfulBody.push(body[bodyIndex]);
        bodyIndex += 1;
        continue;
      }
      const removed: string[] = [];
      while (bodyIndex < body.length && body[bodyIndex].startsWith("-")) {
        removed.push(body[bodyIndex].slice(1));
        bodyIndex += 1;
      }
      const added: string[] = [];
      while (bodyIndex < body.length && body[bodyIndex].startsWith("+")) {
        added.push(body[bodyIndex].slice(1));
        bodyIndex += 1;
      }
      if (removed.length > 0 && JSON.stringify(removed) === JSON.stringify(added)) {
        meaningfulBody.push(...removed.map((sourceLine) => ` ${sourceLine}`));
      } else {
        meaningfulBody.push(...removed.map((sourceLine) => `-${sourceLine}`));
        meaningfulBody.push(...added.map((sourceLine) => `+${sourceLine}`));
      }
    }

    const additions = meaningfulBody.filter((bodyLine) => bodyLine.startsWith("+")).length;
    const deletions = meaningfulBody.filter((bodyLine) => bodyLine.startsWith("-")).length;
    if (additions === 0 && deletions === 0) continue;
    const oldCount = meaningfulBody.filter(
      (bodyLine) => bodyLine.startsWith(" ") || bodyLine.startsWith("-"),
    ).length;
    const newCount = meaningfulBody.filter(
      (bodyLine) => bodyLine.startsWith(" ") || bodyLine.startsWith("+"),
    ).length;
    normalized.push(
      `@@ -${header[1]},${oldCount} +${header[2]},${newCount} @@${header[3]}`,
      ...meaningfulBody,
    );
    changedHunks += 1;
  }

  return changedHunks > 0 ? `${normalized.join("\n")}\n` : "";
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined;
}

function declaredPaths(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((candidate) => {
    const record = asRecord(candidate);
    return typeof record?.path === "string" ? [record.path] : [];
  });
}

export function canonicalizePatchOutput(args: {
  value: unknown;
  auditInput: NodeAuditInput;
  auditOutput: NodeAuditOutput;
}): NodePatchOutput {
  const source = asRecord(args.value);
  if (!source) throw new Error("Patch candidate is not an object.");
  const status = source.status;
  if (status !== "PATCH" && status !== "BLOCKED_MISSING_VALUE" && status !== "BLOCKED_PATCH_TOO_LARGE") {
    throw new Error(`Unsupported patch status: ${String(status)}.`);
  }

  const rawDiff = typeof source.diff === "string" ? source.diff : "";
  const diff = status === "PATCH" ? normalizeUnifiedDiffMechanics(rawDiff) : rawDiff;
  const fileByPath = new Map(args.auditInput.implementation.files.map((file) => [file.path, file]));
  let changedPaths: string[] = [];
  if (status === "PATCH" && diff.trim() !== "") {
    changedPaths = inspectUnifiedDiff(diff).changedPaths;
  }
  for (const changedPath of changedPaths) {
    if (!fileByPath.has(changedPath)) {
      throw new Error(`Patch references an implementation file outside the isolated input: ${changedPath}.`);
    }
  }

  const findingPaths = args.auditOutput.findings.flatMap((finding) => finding.implementationRefs);
  const readPaths = [...new Set([
    ...declaredPaths(source.readSet),
    ...findingPaths,
    ...changedPaths,
  ])].filter((candidate) => fileByPath.has(candidate)).sort();
  const reason = typeof source.reason === "string" && source.reason.trim() !== ""
    ? source.reason.trim().slice(0, 2000)
    : status === "PATCH"
      ? "Minimal isolated patch for the assigned findings."
      : "No grounded patch candidate was produced.";

  return {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId: args.auditInput.node.sectionId,
    fingerprint: args.auditInput.node.fingerprint,
    status,
    requirementIds: [...new Set(args.auditOutput.findings.map((finding) => finding.requirementId))],
    evidenceRefs: [...new Set(args.auditOutput.findings.flatMap((finding) => finding.evidenceRefs))],
    readSet: readPaths.map((candidate) => ({
      path: candidate,
      baseHash: fileByPath.get(candidate)!.contentHash,
    })),
    writeSet: changedPaths.map((candidate) => ({
      path: candidate,
      baseHash: fileByPath.get(candidate)!.contentHash,
    })),
    reason,
    diff,
  };
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
