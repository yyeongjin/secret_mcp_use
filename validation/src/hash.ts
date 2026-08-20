import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import type { Sha256 } from "./types.ts";

export function canonicalJson(value: unknown): string {
  if (value === null || typeof value === "boolean" || typeof value === "number") {
    return JSON.stringify(value);
  }

  if (typeof value === "string") {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(",")}]`;
  }

  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record)
      .filter((key) => record[key] !== undefined)
      .sort();
    return `{${keys
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`)
      .join(",")}}`;
  }

  throw new TypeError(`Unsupported canonical JSON value: ${typeof value}`);
}

export function sha256(value: string | Uint8Array): Sha256 {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

export function hashJson(value: unknown): Sha256 {
  return sha256(canonicalJson(value));
}

export async function hashFile(path: string): Promise<Sha256> {
  return sha256(await readFile(path));
}

export function hashHex(hash: Sha256): string {
  return hash.slice("sha256:".length);
}
