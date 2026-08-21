import { setTimeout as delay } from "node:timers/promises";
import { jsonrepair } from "jsonrepair";
import { hashHex, sha256 } from "./hash.ts";
import type { JsonSchema } from "./schema.ts";
import type { PipelineConfig, SectionId, Sha256 } from "./types.ts";

interface ChatCompletionResponse {
  id?: string;
  choices?: Array<{
    message?: {
      content?: string | null;
      reasoning_content?: string | null;
    };
    finish_reason?: string | null;
  }>;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  };
}

export interface CompletionResult {
  parsed: unknown;
  raw: ChatCompletionResponse;
  rawHash: Sha256;
  requestId: string;
  usage: ChatCompletionResponse["usage"];
  warning?: string;
}

export function completionSeed(fingerprint: Sha256, requestId: string): number {
  return Number.parseInt(hashHex(sha256(`${fingerprint}\0${requestId}`)).slice(0, 8), 16);
}

class StartRateLimiter {
  private nextStart = 0;
  private chain = Promise.resolve();
  private readonly intervalMs: number;

  constructor(rpmLimit: number) {
    this.intervalMs = Math.ceil(60_000 / rpmLimit);
  }

  async wait(): Promise<void> {
    const previous = this.chain;
    let release: () => void = () => undefined;
    this.chain = new Promise<void>((resolve) => {
      release = resolve;
    });
    await previous;
    const waitMs = Math.max(0, this.nextStart - Date.now());
    if (waitMs > 0) await delay(waitMs);
    this.nextStart = Date.now() + this.intervalMs;
    release();
  }
}

export function parseJsonContent(content: string): unknown {
  const trimmed = content.trim();
  const fenced = /^```(?:json)?\s*([\s\S]*?)\s*```$/i.exec(trimmed);
  const candidate = fenced ? fenced[1] : trimmed;
  if (candidate === "PASS") return candidate;
  try {
    return JSON.parse(candidate);
  } catch (strictError) {
    try {
      return JSON.parse(jsonrepair(candidate));
    } catch (repairError) {
      throw new Error(
        `Strict JSON parse failed (${strictError instanceof Error ? strictError.message : String(strictError)}); ` +
        `syntax-only repair failed (${repairError instanceof Error ? repairError.message : String(repairError)}).`,
      );
    }
  }
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined;
}

export function bindOutputSchema(schema: JsonSchema, sectionId: SectionId, fingerprint: Sha256): JsonSchema {
  const bound = structuredClone(schema);
  delete bound.$schema;
  delete bound.$id;
  const properties = asRecord(bound.properties);
  if (!properties) throw new Error("Output schema is missing properties.");
  properties.sectionId = { const: sectionId };
  properties.fingerprint = { const: fingerprint };
  return bound;
}

export function structuredOutputControls(
  outputSchema: JsonSchema,
  enableThinking: boolean,
): {
  chat_template_kwargs: { enable_thinking: boolean; force_nonempty_content: true };
  guided_json: JsonSchema;
} {
  return {
    chat_template_kwargs: {
      enable_thinking: enableThinking,
      force_nonempty_content: true,
    },
    guided_json: outputSchema,
  };
}

function normalizePublicOutput(value: unknown): Record<string, string | number | boolean | string[] | null> {
  const source = asRecord(value);
  if (!source) return {};
  return Object.fromEntries(
    Object.entries(source).filter(([, candidate]) => (
      candidate === null ||
      typeof candidate === "string" ||
      typeof candidate === "number" ||
      typeof candidate === "boolean" ||
      (Array.isArray(candidate) && candidate.every((item) => typeof item === "string"))
    )),
  ) as Record<string, string | number | boolean | string[] | null>;
}

function requirementId(value: unknown, sectionId: SectionId, index: number): string {
  if (typeof value !== "string" || value.trim() === "") {
    return `${sectionId}-FINDING-${String(index + 1).padStart(3, "0")}`;
  }
  const trimmed = value.trim();
  if (trimmed.length <= 160) return trimmed;
  return `${trimmed.slice(0, 143)}-${hashHex(sha256(trimmed)).slice(0, 16)}`;
}

function boundedString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed === "") return null;
  return trimmed.length <= maxLength ? trimmed : trimmed.slice(0, maxLength);
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(
    value
      .map((item) => boundedString(item, 300))
      .filter((item): item is string => item !== null),
  )];
}

function unknownFinding(sectionId: SectionId, index = 0): Record<string, unknown> {
  return {
    requirementId: `${sectionId}-UNKNOWN-${String(index + 1).padStart(3, "0")}`,
    pageId: null,
    componentId: null,
    status: "UNKNOWN",
    finding: "The isolated audit returned no grounded requirement-level conclusion.",
    evidenceRefs: [],
    implementationRefs: [],
    proposedValue: null,
  };
}

function normalizeFindings(value: unknown, sectionId: SectionId): Array<Record<string, unknown>> {
  if (!Array.isArray(value)) return [];
  return value.map((candidate, index) => {
    const finding = asRecord(candidate);
    if (!finding) return unknownFinding(sectionId, index);
    return {
      requirementId: requirementId(finding.requirementId ?? finding.requirementid, sectionId, index),
      pageId: boundedString(finding.pageId, 120),
      componentId: boundedString(finding.componentId, 120),
      status: finding.status === "MISSING" || finding.status === "INSUFFICIENT_EVIDENCE"
        ? finding.status
        : "UNKNOWN",
      finding: boundedString(finding.finding, 2000) ??
        "The isolated audit returned a finding without a grounded description.",
      evidenceRefs: normalizeStringArray(finding.evidenceRefs),
      implementationRefs: normalizeStringArray(finding.implementationRefs),
      proposedValue: null,
    };
  });
}

export function quarantineAuditOutput(sectionId: SectionId, fingerprint: Sha256): unknown {
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "UNKNOWN",
    findings: [unknownFinding(sectionId)],
    publicOutput: { transportStatus: "QUARANTINED" },
  };
}

export function normalizeCompletionOutput(
  kind: "audit" | "patch" | "reaudit",
  value: unknown,
  sectionId: SectionId,
  fingerprint: Sha256,
): unknown {
  if ((kind === "audit" || kind === "reaudit") && value === "PASS") {
    return {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId,
      fingerprint,
      status: "PASS",
      findings: [],
      publicOutput: {},
    };
  }
  const source = asRecord(value);
  if (!source) return value;
  if (kind === "audit" || kind === "reaudit") {
    const status = source.status === "PASS" ||
      source.status === "PATCH_REQUIRED" ||
      source.status === "BLOCKED_MISSING_EVIDENCE" ||
      source.status === "BLOCKED_CONTRACT_CONFLICT" ||
      source.status === "UNKNOWN"
      ? source.status
      : "UNKNOWN";
    const findings = normalizeFindings(source.findings, sectionId);
    const patchFindingsAreGrounded = findings.length > 0 && findings.every(
      (finding) => finding.status === "MISSING" &&
        typeof finding.finding === "string" &&
        !finding.finding.startsWith("The isolated audit returned"),
    );
    const normalizedStatus = status === "PASS" && findings.length > 0
      ? "UNKNOWN"
      : status === "PATCH_REQUIRED" && !patchFindingsAreGrounded
        ? "UNKNOWN"
        : status;
    return {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId,
      fingerprint,
      status: normalizedStatus,
      findings: normalizedStatus === "PASS" || findings.length > 0 ? findings : [unknownFinding(sectionId)],
      publicOutput: normalizePublicOutput(source.publicOutput),
    };
  }
  return {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId,
    fingerprint,
    status: source.status,
    requirementIds: source.requirementIds,
    evidenceRefs: source.evidenceRefs,
    readSet: source.readSet,
    writeSet: source.writeSet,
    reason: source.reason,
    diff: source.diff,
  };
}

function retryAfterMs(response: Response, attempt: number): number {
  const header = response.headers.get("retry-after");
  if (header) {
    const seconds = Number(header);
    if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  }
  return Math.min(30_000, 1000 * 2 ** attempt);
}

export class NvidiaClient {
  private readonly limiter: StartRateLimiter;

  constructor(private readonly config: PipelineConfig) {
    this.limiter = new StartRateLimiter(config.nvidia.rpmLimit);
  }

  async completeJson(args: {
    kind: "audit" | "patch" | "reaudit";
    sectionId: SectionId;
    fingerprint: Sha256;
    requestId: string;
    systemPrompt: string;
    userPrompt: string;
    outputSchema: JsonSchema;
  }): Promise<CompletionResult> {
    const boundOutputSchema = bindOutputSchema(args.outputSchema, args.sectionId, args.fingerprint);
    const trustedSystemPrompt = `${args.systemPrompt}\n\nTRUSTED OUTPUT CONTRACT\nThe JSON Schema below is the complete output contract. Emit exactly one object that satisfies it. Never omit or rename a required field. Use the literal sectionId and fingerprint constants. Do not add top-level or finding fields. For audits, publicOutput should be {} unless a value already fits its schema exactly.\n${JSON.stringify(boundOutputSchema)}`;
    const inputUpperBound = Buffer.byteLength(trustedSystemPrompt) + Buffer.byteLength(args.userPrompt);
    if (inputUpperBound > this.config.nvidia.maxInputTokens) {
      throw new Error(
        `${args.requestId} input upper bound ${inputUpperBound} exceeds ${this.config.nvidia.maxInputTokens}.`,
      );
    }

    await this.limiter.wait();
    const endpoint = `${this.config.nvidia.baseUrl.replace(/\/$/, "")}/chat/completions`;
    const seed = completionSeed(args.fingerprint, args.requestId);
    const body = {
      model: this.config.nvidia.model,
      messages: [
        { role: "system", content: trustedSystemPrompt },
        { role: "user", content: args.userPrompt },
      ],
      temperature: this.config.nvidia.temperature,
      top_p: this.config.nvidia.topP,
      max_tokens: this.config.nvidia.maxOutputTokens,
      reasoning_effort: this.config.nvidia.enableThinking ? "high" : "none",
      reasoning_budget: this.config.nvidia.reasoningBudget,
      ...structuredOutputControls(boundOutputSchema, this.config.nvidia.enableThinking),
      seed,
      stream: false,
    };

    for (let attempt = 0; attempt <= this.config.nvidia.maxRetries; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.config.nvidia.timeoutMs);
      let response: Response;
      try {
        response = await fetch(endpoint, {
          method: "POST",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${this.config.nvidia.apiKey}`,
            "content-type": "application/json",
            "x-client-request-id": args.requestId,
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        });
      } catch (error) {
        clearTimeout(timeout);
        if (attempt < this.config.nvidia.maxRetries) {
          await delay(Math.min(30_000, 1000 * 2 ** attempt));
          continue;
        }
        throw new Error(`${args.requestId} network failure: ${error instanceof Error ? error.message : String(error)}`);
      }
      clearTimeout(timeout);

      if (!response.ok) {
        const message = (await response.text()).slice(0, 1000);
        if ((response.status === 429 || response.status >= 500) && attempt < this.config.nvidia.maxRetries) {
          await delay(retryAfterMs(response, attempt));
          continue;
        }
        throw new Error(`${args.requestId} NVIDIA HTTP ${response.status}: ${message}`);
      }

      const raw = (await response.json()) as ChatCompletionResponse;
      const content = raw.choices?.[0]?.message?.content;
      if (!content) throw new Error(`${args.requestId} returned no message content.`);
      let parsed: unknown;
      let warning: string | undefined;
      try {
        parsed = normalizeCompletionOutput(
          args.kind,
          parseJsonContent(content),
          args.sectionId,
          args.fingerprint,
        );
      } catch (error) {
        if (args.kind === "patch") {
          throw new Error(
            `${args.requestId} returned invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
        warning = `${args.requestId} returned invalid JSON and was quarantined: ${
          error instanceof Error ? error.message : String(error)
        }`;
        parsed = quarantineAuditOutput(args.sectionId, args.fingerprint);
      }
      return {
        parsed,
        raw,
        rawHash: sha256(JSON.stringify(raw)),
        requestId: args.requestId,
        usage: raw.usage,
        warning,
      };
    }
    throw new Error(`${args.requestId} exhausted NVIDIA retries.`);
  }
}

export async function runWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let nextIndex = 0;
  async function runWorker(): Promise<void> {
    while (true) {
      const index = nextIndex;
      nextIndex += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => runWorker()));
  return results;
}
