import { readFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";
import { SECTION_IDS, type ImpactManifest, type SectionId } from "./types.ts";

export function matchesPath(pathname: string, pattern: string): boolean {
  const normalizedPath = pathname.replaceAll("\\", "/");
  const normalizedPattern = pattern.replaceAll("\\", "/");
  if (normalizedPattern.endsWith("/**")) {
    const prefix = normalizedPattern.slice(0, -3);
    return normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`);
  }
  return normalizedPath === normalizedPattern;
}

export function matchesAnyPath(pathname: string, patterns: string[]): boolean {
  return patterns.some((pattern) => matchesPath(pathname, pattern));
}

export function topologicalSections(manifest: ImpactManifest): SectionId[] {
  const visited = new Set<SectionId>();
  const visiting = new Set<SectionId>();
  const ordered: SectionId[] = [];

  function visit(id: SectionId): void {
    if (visited.has(id)) return;
    if (visiting.has(id)) throw new Error(`Impact manifest contains a dependency cycle at ${id}.`);
    visiting.add(id);
    for (const dependency of manifest.nodes[id].dependsOn) visit(dependency);
    visiting.delete(id);
    visited.add(id);
    ordered.push(id);
  }

  for (const id of SECTION_IDS) visit(id);
  return ordered;
}

export async function readImpactManifest(
  repositoryRoot: string,
  relativePath: string,
): Promise<ImpactManifest> {
  const raw = await readFile(path.join(repositoryRoot, relativePath), "utf8");
  const parsed = parse(raw) as ImpactManifest;
  if (parsed.schemaVersion !== "design-validation/impact-manifest/v1") {
    throw new Error(`Unsupported impact manifest schema: ${String(parsed.schemaVersion)}`);
  }
  for (const id of SECTION_IDS) {
    if (!parsed.nodes[id]) throw new Error(`Impact manifest is missing ${id}.`);
    for (const dependency of parsed.nodes[id].dependsOn) {
      if (!SECTION_IDS.includes(dependency)) {
        throw new Error(`${id} has unknown dependency ${dependency}.`);
      }
    }
    for (const writePattern of parsed.nodes[id].writes) {
      if (!parsed.globalAllowedWriteGlobs.some((allowed) => writePattern === allowed || matchesPath(writePattern.replace('/**', '/x'), allowed))) {
        throw new Error(`${id} write pattern is outside global ownership: ${writePattern}`);
      }
      if (parsed.immutableInputGlobs.some((immutable) => writePattern === immutable)) {
        throw new Error(`${id} attempts to own immutable input ${writePattern}.`);
      }
    }
  }
  topologicalSections(parsed);
  return parsed;
}
