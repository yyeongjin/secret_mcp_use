import { setTimeout as delay } from "node:timers/promises";
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

function parseJsonContent(content: string): unknown {
  const trimmed = content.trim();
  const fenced = /^```(?:json)?\s*([\s\S]*?)\s*```$/i.exec(trimmed);
  const candidate = fenced ? fenced[1] : trimmed;
  if (candidate === "PASS") return candidate;
  return JSON.parse(candidate);
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

function normalizeFindings(value: unknown): unknown {
  if (!Array.isArray(value)) return value;
  return value.map((candidate) => {
    const finding = asRecord(candidate);
    if (!finding) return candidate;
    return {
      requirementId: finding.requirementId,
      pageId: finding.pageId,
      componentId: finding.componentId,
      status: finding.status,
      finding: finding.finding,
      evidenceRefs: finding.evidenceRefs,
      implementationRefs: finding.implementationRefs,
      proposedValue: null,
    };
  });
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
    return {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId,
      fingerprint,
      status: source.status,
      findings: normalizeFindings(source.findings),
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

function mockAudit(sectionId: SectionId, fingerprint: Sha256, patched: boolean): unknown {
  const patchSections = new Set(
    (process.env.NVIDIA_MOCK_PATCH_SECTIONS ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
  if (patchSections.has(sectionId) && !patched) {
    return {
      schemaVersion: "design-validation/audit-output/v2",
      sectionId,
      fingerprint,
      status: "PATCH_REQUIRED",
      findings: [
        {
          requirementId: `${sectionId}-MOCK-001`,
          pageId: null,
          componentId: null,
          status: "MISSING",
          finding: `Mock omission for ${sectionId}.`,
          evidenceRefs: [],
          implementationRefs: ["frontend/index.html"],
          proposedValue: null,
        },
      ],
      publicOutput: { mock: true },
    };
  }
  return {
    schemaVersion: "design-validation/audit-output/v2",
    sectionId,
    fingerprint,
    status: "PASS",
    findings: [],
    publicOutput: { mock: true },
  };
}

function mockPatch(sectionId: SectionId, fingerprint: Sha256, userPrompt: string): unknown {
  const validPatchSections = new Set(
    (process.env.NVIDIA_MOCK_VALID_PATCH_SECTIONS ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
  if (validPatchSections.has(sectionId)) {
    const request = JSON.parse(userPrompt) as {
      files: Array<{ path: string; contentHash: Sha256; content: string | null }>;
      findings: Array<{ requirementId: string }>;
    };
    const file = request.files.find((candidate) => candidate.path.endsWith("app.js") && candidate.content);
    if (!file?.content) throw new Error(`${sectionId} mock patch requires frontend/app.js.`);
    const firstLine = file.content.split("\n", 1)[0];
    const diff = [
      "diff --git a/frontend/app.js b/frontend/app.js",
      "--- a/frontend/app.js",
      "+++ b/frontend/app.js",
      "@@ -1,1 +1,2 @@",
      `+// Grounded mock patch for ${sectionId}.`,
      ` ${firstLine}`,
      "",
    ].join("\n");
    return {
      schemaVersion: "design-validation/patch-output/v2",
      sectionId,
      fingerprint,
      status: "PATCH",
      requirementIds: request.findings.map((finding) => finding.requirementId),
      evidenceRefs: [],
      readSet: [{ path: file.path, baseHash: file.contentHash }],
      writeSet: [{ path: file.path, baseHash: file.contentHash }],
      reason: "Deterministic integration-test patch.",
      diff,
    };
  }
  return {
    schemaVersion: "design-validation/patch-output/v2",
    sectionId,
    fingerprint,
    status: "BLOCKED_MISSING_VALUE",
    requirementIds: [`${sectionId}-MOCK-001`],
    evidenceRefs: [],
    readSet: [],
    writeSet: [],
    reason: "Mock mode does not invent source patches.",
    diff: "",
  };
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
    if (this.config.mock) {
      const parsed = args.kind === "patch"
        ? mockPatch(args.sectionId, args.fingerprint, args.userPrompt)
        : mockAudit(args.sectionId, args.fingerprint, args.kind === "reaudit");
      const raw: ChatCompletionResponse = {
        id: `mock-${args.requestId}`,
        choices: [{ message: { content: JSON.stringify(parsed) }, finish_reason: "stop" }],
        usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
      };
      return {
        parsed,
        raw,
        rawHash: sha256(JSON.stringify(raw)),
        requestId: args.requestId,
        usage: raw.usage,
      };
    }

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
    const seed = Number.parseInt(hashHex(args.fingerprint).slice(0, 8), 16);
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
      try {
        parsed = normalizeCompletionOutput(
          args.kind,
          parseJsonContent(content),
          args.sectionId,
          args.fingerprint,
        );
      } catch (error) {
        throw new Error(
          `${args.requestId} returned invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
      return {
        parsed,
        raw,
        rawHash: sha256(JSON.stringify(raw)),
        requestId: args.requestId,
        usage: raw.usage,
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
