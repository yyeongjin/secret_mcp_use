import { readFile } from "node:fs/promises";
import path from "node:path";
import { Ajv2020, type ValidateFunction } from "ajv/dist/2020.js";
import type { NodeAuditOutput, NodePatchOutput, PipelineConfig, SectionId, Sha256 } from "./types.ts";

export interface Validators {
  audit: ValidateFunction<NodeAuditOutput>;
  patch: ValidateFunction<NodePatchOutput>;
  auditSchemaBytes: Uint8Array;
}

export async function loadValidators(config: PipelineConfig): Promise<Validators> {
  const auditSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/audit-output.schema.json"),
  );
  const patchSchemaBytes = await readFile(
    path.join(config.repositoryRoot, "validation/schemas/patch-output.schema.json"),
  );
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  return {
    audit: ajv.compile<NodeAuditOutput>(JSON.parse(auditSchemaBytes.toString("utf8"))),
    patch: ajv.compile<NodePatchOutput>(JSON.parse(patchSchemaBytes.toString("utf8"))),
    auditSchemaBytes,
  };
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
}
