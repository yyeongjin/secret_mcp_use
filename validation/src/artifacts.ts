import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { sha256 } from "./hash.ts";
import type {
  EvidenceReference,
  ImportedArtifact,
  RequestContractReference,
  SectionId,
  TriggerSnapshot,
} from "./types.ts";

async function exists(pathname: string): Promise<boolean> {
  try {
    await access(pathname);
    return true;
  } catch {
    return false;
  }
}

function sectionFragment(content: string, sectionId: SectionId): string | null {
  const number = Number(sectionId.slice(1));
  const heading = new RegExp(`^#{1,6}\\s+${number}\\.\\s+`, "m");
  const match = heading.exec(content);
  if (!match) return null;
  const rest = content.slice(match.index);
  const next = /^#{1,6}\s+\d+\.\s+/gm;
  next.lastIndex = match[0].length;
  const nextMatch = next.exec(rest);
  return rest.slice(0, nextMatch?.index ?? rest.length).trim();
}

export async function requestContractForSection(
  repositoryRoot: string,
  trigger: TriggerSnapshot,
  sectionId: SectionId,
): Promise<RequestContractReference | null> {
  const id = trigger.referenceId;
  const candidates = [
    `trigger/request-contracts/${id}.md`,
    `trigger/request-contracts/${id}.json`,
    `trigger/${id}.request-contract.md`,
    `trigger/REQUEST_CONTRACT_${id}.md`,
  ];
  for (const relativePath of candidates) {
    const absolutePath = path.join(repositoryRoot, relativePath);
    if (!(await exists(absolutePath))) continue;
    const content = await readFile(absolutePath, "utf8");
    const fragment = relativePath.endsWith(".json")
      ? JSON.stringify((JSON.parse(content) as Record<string, unknown>)[sectionId] ?? null)
      : sectionFragment(content, sectionId);
    if (!fragment || fragment === "null") return null;
    return { path: relativePath, contentHash: sha256(fragment), fragment };
  }
  return null;
}

function evidenceIds(fragment: string): Set<string> {
  return new Set(fragment.match(/\bE-[A-Z][A-Z0-9-]*\b/g) ?? []);
}

async function walk(root: string, relativeDirectory: string): Promise<string[]> {
  const absoluteDirectory = path.join(root, relativeDirectory);
  if (!(await exists(absoluteDirectory))) return [];
  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  const result: string[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(root, relativePath)));
    if (entry.isFile()) result.push(relativePath);
  }
  return result;
}

export async function evidenceForSection(args: {
  repositoryRoot: string;
  trigger: TriggerSnapshot;
  fragment: string;
}): Promise<EvidenceReference[]> {
  const wanted = evidenceIds(args.fragment);
  const s02 = args.trigger.sections.get("S02")?.fragment ?? "";
  const roots = [`trigger/evidence/${args.trigger.referenceId}`, `trigger/evidence`];
  const files = [...new Set((await Promise.all(roots.map((root) => walk(args.repositoryRoot, root)))).flat())];
  const references: EvidenceReference[] = [];
  for (const evidenceId of [...wanted].sort()) {
    const matchingFile = files.find((file) => path.basename(file).toUpperCase().includes(evidenceId.toUpperCase()));
    if (matchingFile) {
      const absolutePath = path.join(args.repositoryRoot, matchingFile);
      const bytes = await readFile(absolutePath);
      const extension = path.extname(matchingFile).toLowerCase();
      references.push({
        evidenceId,
        kind: [".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(extension) ? "image" : "metadata",
        contentHash: sha256(bytes),
        localRef: matchingFile,
        byteLength: (await stat(absolutePath)).size,
      });
      continue;
    }
    const metadata = s02.split("\n").filter((line) => line.includes(evidenceId)).join("\n").trim() || evidenceId;
    references.push({
      evidenceId,
      kind: "metadata",
      contentHash: sha256(metadata),
      localRef: `${args.trigger.path}#${evidenceId}`,
    });
  }
  return references;
}

export async function importedArtifacts(
  repositoryRoot: string,
  trigger: TriggerSnapshot,
): Promise<ImportedArtifact[]> {
  const result: ImportedArtifact[] = [{
    producer: "secret_mcp",
    kind: "design-index",
    referenceId: trigger.referenceId,
    path: trigger.path,
    contentHash: trigger.documentHash,
  }];
  const contractCandidates = [
    `trigger/request-contracts/${trigger.referenceId}.md`,
    `trigger/request-contracts/${trigger.referenceId}.json`,
    `trigger/${trigger.referenceId}.request-contract.md`,
    `trigger/REQUEST_CONTRACT_${trigger.referenceId}.md`,
  ];
  const contractPath = (await Promise.all(contractCandidates.map(async (candidate) => (
    (await exists(path.join(repositoryRoot, candidate))) ? candidate : null
  )))).find((candidate): candidate is string => candidate !== null);
  if (contractPath) {
    const bytes = await readFile(path.join(repositoryRoot, contractPath));
    result.push({
      producer: "secret_mcp",
      kind: "request-contract",
      referenceId: trigger.referenceId,
      path: contractPath,
      contentHash: sha256(bytes),
    });
  }
  for (const evidencePath of await walk(repositoryRoot, `trigger/evidence/${trigger.referenceId}`)) {
    result.push({
      producer: "secret_mcp",
      kind: "evidence",
      referenceId: trigger.referenceId,
      path: evidencePath,
      contentHash: sha256(await readFile(path.join(repositoryRoot, evidencePath))),
    });
  }
  return result;
}
