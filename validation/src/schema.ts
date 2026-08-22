import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { Ajv2020, type ValidateFunction } from "ajv/dist/2020.js";
import { hashJson } from "./hash.ts";
import type {
  ChangeEvent,
  DocumentAuditInput,
  DocumentAuditOutput,
  NodeAuditInput,
  NodeAuditOutput,
  NodePatchOutput,
  PassAttestation,
  PipelineConfig,
  PullRequestManifest,
  SectionId,
  Sha256,
} from "./types.ts";

export type JsonSchema = Record<string, unknown>;

export interface Validators {
  documentAudit: ValidateFunction<DocumentAuditOutput>;
  documentInput: ValidateFunction<DocumentAuditInput>;
  audit: ValidateFunction<NodeAuditOutput>;
  patch: ValidateFunction<NodePatchOutput>;
  input: ValidateFunction<NodeAuditInput>;
  changeEvent: ValidateFunction<ChangeEvent>;
  passAttestation: ValidateFunction<PassAttestation>;
  prManifest: ValidateFunction<PullRequestManifest>;
  auditSchema: JsonSchema;
  documentAuditSchema: JsonSchema;
  patchSchema: JsonSchema;
  patchCandidateSchema: JsonSchema;
  contractSchemaHash: Sha256;
}

async function sourceContract(root: string, relativeDirectory: string): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  const entries = await readdir(path.join(root, relativeDirectory), { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) Object.assign(result, await sourceContract(root, relativePath));
    if (entry.isFile()) result[relativePath] = (await readFile(path.join(root, relativePath))).toString("utf8");
  }
  return result;
}

export async function loadValidators(config: PipelineConfig): Promise<Validators> {
  const documentAuditSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/document-audit-output.schema.json"),
  );
  const auditSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/audit-output.schema.json"),
  );
  const patchSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/patch-output.schema.json"),
  );
  const patchCandidateSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/patch-candidate-output.schema.json"),
  );
  const auditInputSchema = JSON.parse(await readFile(
    path.join(config.repositoryRoot, "validation/schemas/audit-input.schema.json"),
    "utf8",
  )) as JsonSchema;
  const documentAuditInputSchema = JSON.parse(await readFile(
    path.join(config.repositoryRoot, "validation/schemas/document-audit-input.schema.json"),
    "utf8",
  )) as JsonSchema;
  const changeEventSchema = JSON.parse(await readFile(
    path.join(config.repositoryRoot, "validation/schemas/change-event.schema.json"),
    "utf8",
  )) as JsonSchema;
  const passAttestationSchema = JSON.parse(await readFile(
    path.join(config.repositoryRoot, "validation/schemas/pass-attestation.schema.json"),
    "utf8",
  )) as JsonSchema;
  const prManifestSchema = JSON.parse(await readFile(
    path.join(config.repositoryRoot, "validation/schemas/pr-manifest.schema.json"),
    "utf8",
  )) as JsonSchema;
  const auditSchema = JSON.parse(auditSchemaBytes.toString("utf8")) as JsonSchema;
  const documentAuditSchema = JSON.parse(documentAuditSchemaBytes.toString("utf8")) as JsonSchema;
  const patchSchema = JSON.parse(patchSchemaBytes.toString("utf8")) as JsonSchema;
  const patchCandidateSchema = JSON.parse(patchCandidateSchemaBytes.toString("utf8")) as JsonSchema;
  const validatorSources = await sourceContract(config.repositoryRoot, "validation/src");
  const manifestSource = await readFile(path.join(config.repositoryRoot, config.impactManifestPath), "utf8");
  const packageSource = await readFile(path.join(config.repositoryRoot, "package.json"), "utf8");
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  return {
    documentAudit: ajv.compile<DocumentAuditOutput>(documentAuditSchema),
    documentInput: ajv.compile<DocumentAuditInput>(documentAuditInputSchema),
    audit: ajv.compile<NodeAuditOutput>(auditSchema),
    patch: ajv.compile<NodePatchOutput>(patchSchema),
    input: ajv.compile<NodeAuditInput>(auditInputSchema),
    changeEvent: ajv.compile<ChangeEvent>(changeEventSchema),
    passAttestation: ajv.compile<PassAttestation>(passAttestationSchema),
    prManifest: ajv.compile<PullRequestManifest>(prManifestSchema),
    auditSchema,
    documentAuditSchema,
    patchSchema,
    patchCandidateSchema,
    contractSchemaHash: hashJson({
      auditSchema,
      documentAuditSchema,
      documentAuditInputSchema,
      patchSchema,
      patchCandidateSchema,
      auditInputSchema,
      changeEventSchema,
      passAttestationSchema,
      prManifestSchema,
      validatorSources,
      impactManifest: manifestSource,
      packageContract: packageSource,
    }),
  };
}

export function assertDocumentAuditOutput(
  validate: ValidateFunction<DocumentAuditOutput>,
  value: unknown,
  sectionId: SectionId,
  fingerprint: Sha256,
): asserts value is DocumentAuditOutput {
  if (!validate(value)) throw new Error(`Invalid ${sectionId} document audit output: ${schemaError(validate)}`);
  if (value.sectionId !== sectionId || value.fingerprint !== fingerprint) {
    throw new Error(`Document audit response ownership mismatch for ${sectionId}.`);
  }
  if (value.status === "PASS" && value.findings.length !== 0) {
    throw new Error(`${sectionId} document audit returned PASS with findings.`);
  }
  if (value.status !== "PASS" && value.findings.length === 0) {
    throw new Error(`${sectionId} document audit returned ${value.status} without findings.`);
  }
  if (value.findings.some((finding) => finding.proposedValue !== null || finding.implementationRefs.length > 0)) {
    throw new Error(`${sectionId} document audit attempted to propose an implementation change.`);
  }
  if (value.findings.some((finding) => !finding.requirementId.startsWith(`${sectionId}-`))) {
    throw new Error(`${sectionId} document audit returned a foreign Requirement ID.`);
  }
}

export function assertContract<T>(validate: ValidateFunction<T>, value: unknown, label: string): asserts value is T {
  if (!validate(value)) throw new Error(`Invalid ${label}: ${schemaError(validate)}`);
}

function schemaError(validate: ValidateFunction): string {
  return (validate.errors ?? [])
    .map((error) => `${error.instancePath || "/"} ${error.message ?? "is invalid"}`)
    .join("; ");
}

export function assertAuditOutput(
  validate: ValidateFunction<NodeAuditOutput>,
  value: unknown,
  sectionId: SectionId,
  fingerprint: Sha256,
): asserts value is NodeAuditOutput {
  if (!validate(value)) throw new Error(`Invalid ${sectionId} audit output: ${schemaError(validate)}`);
  if (value.sectionId !== sectionId) {
    throw new Error(`Audit response Section mismatch: expected ${sectionId}, received ${value.sectionId}.`);
  }
  if (value.fingerprint !== fingerprint) {
    throw new Error(`Audit response fingerprint mismatch for ${sectionId}.`);
  }
  if (value.status === "PASS" && value.findings.length !== 0) {
    throw new Error(`${sectionId} returned PASS with findings.`);
  }
  if (value.status !== "PASS" && value.findings.length === 0) {
    throw new Error(`${sectionId} returned ${value.status} without findings.`);
  }
  if (value.findings.some((finding) => finding.proposedValue !== null)) {
    throw new Error(`${sectionId} attempted to invent a proposed value.`);
  }
  if (value.findings.some((finding) => !finding.requirementId.startsWith(`${sectionId}-`))) {
    throw new Error(`${sectionId} returned a foreign Requirement ID.`);
  }
}

export function assertPatchOutput(
  validate: ValidateFunction<NodePatchOutput>,
  value: unknown,
  sectionId: SectionId,
  fingerprint: Sha256,
): asserts value is NodePatchOutput {
  if (!validate(value)) throw new Error(`Invalid ${sectionId} patch output: ${schemaError(validate)}`);
  if (value.sectionId !== sectionId || value.fingerprint !== fingerprint) {
    throw new Error(`Patch response ownership mismatch for ${sectionId}.`);
  }
  if (value.status === "PATCH" && value.diff.trim() === "") {
    throw new Error(`${sectionId} returned PATCH with an empty diff.`);
  }
  if (value.status !== "PATCH" && value.diff !== "") {
    throw new Error(`${sectionId} returned a diff while blocked.`);
  }
  if (value.status === "PATCH" && value.requirementIds.length === 0) {
    throw new Error(`${sectionId} returned PATCH without an addressed Requirement ID.`);
  }
  if (value.status !== "PATCH" && value.requirementIds.length !== 0) {
    throw new Error(`${sectionId} claimed addressed Requirement IDs while blocked.`);
  }
}
