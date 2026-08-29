# Stage 1 DOCUMENT_GAPS

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section reports: `17`

Every embedded Section report is preserved verbatim between its BEGIN and END markers. This file contains no LLM-generated summary.
<!-- BEGIN VERBATIM S01 sha256:c1028ff7bab3c62f99b28e986148db6c9599f72b7c7dca6d0ba7aab6b66f018b 129973 -->
# S01 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:12d5806aa2bfe6d5fe92a4cb34b0771f74e046fdacc4d4f7e14f129af1154951`
- Normalized output SHA-256: `sha256:3f055ea5887f71859eb938f3828e25128463e8d1565486536f8fed02156f178f`
- Leaf records: `86`
- Leaf records SHA-256: `sha256:983d75689087ea7b3da6a755d023f98c807976610f097bcab63715a6e9a4779f`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S01",
  "fingerprint": "sha256:12d5806aa2bfe6d5fe92a4cb34b0771f74e046fdacc4d4f7e14f129af1154951",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S01-DOC-G1-0001-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain the bilingual statement '**English** | [한국어](DESIGN_INDEX_SPECIFICATION.ko.md)' anywhere in its content.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the exact global rule '- Concept: `{{CONCEPT_OR_NA}}`'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any reference to the primary color metadata token or its value; the leaf requirement for GDWEB primary color metadata is entirely absent.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the production company placeholder requirement.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain the exact statement '- Original evidence: {{SOURCE_KIND}}={{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0024-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not mention setting request context to none based on client support for includeContext: none.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0027-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not mention or imply any requirement to write the document in a language requested by the user.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0038-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the required source specification statement '  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0041-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '  - attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}' as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0043-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf requiring measured representative palette with HEX/RGB/HSL/pixel coverage placeholders not found in DESIGN_INDEX section",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0061-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The requirement to prefix every material claim or table row with one of the labels is not represented in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain a separate full specification for the visible page P-01 as required by the global rule.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any typography values or specifications for the global rule 'Typography values'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement matching '- Asset and crop rules'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Explicit uncertainty records are not documented in DESIGN_INDEX",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain a clear separation between framework-independent requirements and implementation recommendations.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not state which original copy, logos, trademarks, photos, and brand assets must be replaced.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 86,
    "passLeafCount": 69
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0001-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0001",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 0,
      "endOffset": 60,
      "startLine": 1,
      "endLine": 1,
      "statement": "**English** | [한국어](DESIGN_INDEX_SPECIFICATION.ko.md)",
      "sourceHash": "sha256:d90ed252167158797758451403e98c96f53083f0a0962602c51c4a9d7733a782",
      "fingerprint": "sha256:2d841514f2c0deee5d4aa09a596d83909d483cef963de83a60576925cccbcae5"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0001-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0001-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:6ae4a916e79bac46880f19e18195bcb968ba3f786e4d56f63fe037745a3646ff",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0001-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain the bilingual statement '**English** | [한국어](DESIGN_INDEX_SPECIFICATION.ko.md)' anywhere in its content.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:0d2fe98344cfd72b65784de0a5acb8a80ab328d45445b615677f6a81c709d34e",
    "rawResponseHash": "sha256:32f2281b802e0624ba1ab7c7f8b1dd0e280582deff27f88fbab89720ff0ef21f"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0007-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 130,
      "endOffset": 169,
      "startLine": 7,
      "endLine": 7,
      "statement": "- Schema: `secret-mcp/design-index/v2`",
      "sourceHash": "sha256:fd69a8856b056656d80d1b9df56c3cb5bc1c7998342697ccb0779c30ff92ca76",
      "fingerprint": "sha256:252bd992980b7c4f182ccf0964c32f286455d6327dc6cc025a9a7b59a9426924"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bd8ff8f0e8e256272c64470295d802185a300ad86735ddfc1ba40b619617ba5c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8956ab1dc29b91078b88e4eb185b4abced70a85a50689636e55d27d27cdb20ae",
    "rawResponseHash": "sha256:f5dc2fe474669b387137ac5093a9f1a0324694aa8a65ebe14d45d2fb01337f27"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0008-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 169,
      "endOffset": 233,
      "startLine": 8,
      "endLine": 8,
      "statement": "- Output filename: `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md`",
      "sourceHash": "sha256:1c5263b81d594e938558b32d72162c5f1c98bac91821d2b6d1873b15bf7a38bf",
      "fingerprint": "sha256:168beef9041cc9c4c2982b9426261198cb17f8e10f9a1d0b1b55e5db945513dc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:57d0e3c86a023cd5d4ee4cc34559fa9f4e3a6d5150cd865a4fccd2c7fd2431d2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:48283267e1997f637e71b7c721f6f14e1d06a4aa7009f02bd7a686ac34d7d3d3",
    "rawResponseHash": "sha256:0cc8828396e375c52a1d01fccc0290bb34491091fc42f303d2fd0af7a4bbf36b"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0009-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 233,
      "endOffset": 278,
      "startLine": 9,
      "endLine": 9,
      "statement": "- Reference ID: `gdweb-{{REFERENCE_NUMBER}}`",
      "sourceHash": "sha256:60f017ef803339b4df4af7f4c9e5cbd54a882afe9fba39eb8a22b46e2c821822",
      "fingerprint": "sha256:86d630fa93c4656411f277eb619a928a4fc671309b2683d563c1f891162e62b6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:4c1f6fa8086c185f6045da8d8de88ec2c9145ad8a47fb295f8d28891db62d122",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e671823c7306d3982fc48cb871fe5e16d79ab04c40c097df5f03c068e47687f9",
    "rawResponseHash": "sha256:7da06fa6316e8f446320b06943255587b9d797680174664d5d750b0b22cbb235"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0010-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 278,
      "endOffset": 299,
      "startLine": 10,
      "endLine": 10,
      "statement": "- Title: `{{TITLE}}`",
      "sourceHash": "sha256:e8bb53a00e79c339016f0a47e70d3da683c4fc278014dcc55c953f52b82c7ea8",
      "fingerprint": "sha256:3570c131280aad34dc111e1a30f7b3e8079d64a5b8a1f9b1da75dd479ce18f36"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:17fbf6b7f7a520b55d58a422b4a5e74dc4d6adf06f54aa8e8b0815fbbd8b399e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8bbba28ee28af996f3691a004ff04d68d865af047582ee174d7ad876aa686406",
    "rawResponseHash": "sha256:c5ea81f254c8688543333eb63ab74700c31d3af0a75321900a4eedd295fc2611"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0011-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 299,
      "endOffset": 328,
      "startLine": 11,
      "endLine": 11,
      "statement": "- GDWEB URL: `{{GDWEB_URL}}`",
      "sourceHash": "sha256:b1a14b906dfd8454823604a46da156394a81f5e4dd6a6cd6569ae59cab45037b",
      "fingerprint": "sha256:61f72164c78cb1c53aa80a6efaedcf05cb45a11ea2e0c7d7be09140f3ada5d19"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:fa0a4319fb33017d9e009001ac4a1c6d53bb3e0a7b13260a42bf9bb927fab55c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e1adcf3f8d4fe1f01fb5d122c84434c4bde949ab635845a573edd00aa1086e32",
    "rawResponseHash": "sha256:cb5d46ab91b430a46a5ca137b4f5e2efd3531799de43b2cd2299847f8a38f38f"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0012-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 328,
      "endOffset": 369,
      "startLine": 12,
      "endLine": 12,
      "statement": "- Registered date: `{{REGISTERED_DATE}}`",
      "sourceHash": "sha256:f2deb25044b18d448c728de6323b0c0edac7a03be81e343b4d17660d3fbedbc8",
      "fingerprint": "sha256:26d463a82e1de01e5a3565f132ab47baf0893ffad4067910af18e78eaeedca06"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:81127be88ff9e5f67632337e30be7b58b93115022eb13998bf900d128ba3d834",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4186e389e14dc7acad8915b2060cc65bec980830c59f1ae5e3a00bab45cd17e5",
    "rawResponseHash": "sha256:19d933aa6af541de8dbcefaecaec2b2cad7df27e3fc65fecbb8877fbfd6aee01"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0013-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 369,
      "endOffset": 396,
      "startLine": 13,
      "endLine": 13,
      "statement": "- Award: `{{AWARD_OR_NA}}`",
      "sourceHash": "sha256:6d53b1cb285da4e7fe1cb54fe12af5cece0653a9302c2c8685356dd9959a8f19",
      "fingerprint": "sha256:c951b0bf32b6295569e932a158861eca63d54dadde0309873504799fbbed7df5"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:f8f0c5ff474bb95454505bce61c4dd1b8d36fa06b2e3c417b8732384caa9c8a0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3ac4f833fe45583d91f88c5027b82238f23909d6224a3237817aae3c2d2b1054",
    "rawResponseHash": "sha256:b66aef99076676b89b906881dc7d85e92445379afd3d8f9ae2a770da66ea16d5"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0014-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 396,
      "endOffset": 427,
      "startLine": 14,
      "endLine": 14,
      "statement": "- Concept: `{{CONCEPT_OR_NA}}`",
      "sourceHash": "sha256:f883acc56cb6efe5c2c38e196087ca0fe8c99464b165a32888341826b757a5af",
      "fingerprint": "sha256:e839fffb048477fc5c7eba4593f1f032aae07843e7cf5a860b8e19c47814a128"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:0608e144031c58701110f4d2a43baaad4cb703a1ac758d165bd21e35453d8dda",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the exact global rule '- Concept: `{{CONCEPT_OR_NA}}`'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d7d622919a04197380130f762ef7bceab365a716ea3f3f0ec1d1f444ea8751dc",
    "rawResponseHash": "sha256:e0bbcfa3bbbbecdf4af6ccff1e102a81f1015fe453d2010990f0c2a2401283ac"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0015-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 427,
      "endOffset": 485,
      "startLine": 15,
      "endLine": 15,
      "statement": "- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`",
      "sourceHash": "sha256:b3fcaa41fc28dab96ac0bdeb8aa326a36d54c05ea28b2b42ff686c3f16785f0b",
      "fingerprint": "sha256:3fba2e7132e9c6eddcd845561314dd32c4e8626ea49dcbbf96c958e12b5e8707"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c74266b22037b096dfaea2e6442317fce3ec0926eda0c353823c7015da50a4d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any reference to the primary color metadata token or its value; the leaf requirement for GDWEB primary color metadata is entirely absent.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:bb504fe15114029a8dbc669d011dac787b0a6f084a9fc21f99bd7ef3f8bdeaa7",
    "rawResponseHash": "sha256:7f68975fd9560cd81fb9b24709f7e5d106676fce77c7699ce0b0cb8ca5ca6561"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0016-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 485,
      "endOffset": 538,
      "startLine": 16,
      "endLine": 16,
      "statement": "- Production company: `{{PRODUCTION_COMPANY_OR_NA}}`",
      "sourceHash": "sha256:1d692d000eafa64b35a46c41e7489985fa92c3fe01cfe0f2d0a7a62734f83a12",
      "fingerprint": "sha256:4de07b0159cf30d7b34fde1c4c837a0d432d51909183747736e66dd98c0b709e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:8a12deb7291709ebc95760320f6fcf31a6aa3ba3f01de785633623bcfbd947d6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the production company placeholder requirement.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:91d714f58dea19e77eecf005b9da4770736011f2cbc9037d651bd5b1cde9414e",
    "rawResponseHash": "sha256:65c0d146165be96f835b19eedcb26b71fe15e7b120eb70a81bc13399f132a97d"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0017-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 538,
      "endOffset": 612,
      "startLine": 17,
      "endLine": 17,
      "statement": "- Original evidence: `{{SOURCE_KIND}}={{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}`",
      "sourceHash": "sha256:fa171baa330dd4c82c246eda31d6c442ad00a9d7c11857496787cdf92c50aa75",
      "fingerprint": "sha256:3722c02f0f50fa4d03f49de8f4828d5620a85080eb08a5e35c1dba0a8398a9a9"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:95cf840ac1a020fdbb7ce5372573ba68c9674f9a0295f1f267d9a9b2d80cbae1",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain the exact statement '- Original evidence: {{SOURCE_KIND}}={{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f68b29b2f4dd58d892e778a677fa4cc72081b067a17508260bbd45f8ac743ac7",
    "rawResponseHash": "sha256:3e6d86b19b5cd03db36b22d5a39b490be58c6a8d8fa52ddc0b9051ce3bcd1852"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0021-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0021",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 652,
      "endOffset": 711,
      "startLine": 21,
      "endLine": 21,
      "statement": "1. Process exactly one GDWEB reference in one LLM request.",
      "sourceHash": "sha256:19aef066b0826c2898fce3e00a638b06d7c651abd1526df6b46def401a357a0c",
      "fingerprint": "sha256:b637c4b2bf66029110d49ff22855ec7c8755742c4d70c18c959995454820da0c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0021-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:76a2d28d1ab04314af06857a42b8c7b9d697c552a10787c9f8e6d51b437dd3db",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f11d0e6ad3eabe1df97090627dc55e2b7303b93bc848985ec11c70455302d95d",
    "rawResponseHash": "sha256:e1e7d513e82a8b96597bf33569174b1b729ee66c71cee056707ead7caeb76189"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0022-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0022",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 711,
      "endOffset": 803,
      "startLine": 22,
      "endLine": 22,
      "statement": "2. Include only that work's metadata, specification contract, and prepared evidence images.",
      "sourceHash": "sha256:534e3e97c25cd7f05e896f5498ab868a3998dd43c704c39938b9e65cd6166a6d",
      "fingerprint": "sha256:73cb3139d9c6e9d2a048818aa4186a16f7e3da24973ffb18c6fcbf119bb4e7c1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0022-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:988327e9b57dbece8e151ccc8c2cd98127f857c05ef4ee1e3c3589ee1aaddcdd",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:772686555a9d3036691c54793b0497da8fa5fef17816f0ff82477f286f7114e1",
    "rawResponseHash": "sha256:56b0c8d54e69af9b56d3f1d64c3b3fe6264d1a25bdffbe1b154d1f3bba613a08"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0023-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0023",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 803,
      "endOffset": 917,
      "startLine": 23,
      "endLine": 23,
      "statement": "3. Do not include another work's ID, metadata, images, contract, generated document, or previous-request context.",
      "sourceHash": "sha256:971ea4371c4111c0a233003343e6f3142822fe8243648e834f2065a839ef9911",
      "fingerprint": "sha256:7583afe75cc1f8af3c7f46f35cf336462fa2a1ff54e1a23a4888a29dba53c238"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0023-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a4979d741818fcf2c2ea5d91d71d61f18cac2e7bd8db42911429d3f96fad6ff6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9688c1302c2f572da103d5fb50f36bfa6e940bc799cf570365f27c922ab85f66",
    "rawResponseHash": "sha256:0db9b965a0565fca9d8bb06410a924f2130252943768bff16650f42f35df66e2"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0024-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0024",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 917,
      "endOffset": 1018,
      "startLine": 24,
      "endLine": 24,
      "statement": "4. Set the request context to none when the client supports an equivalent of `includeContext: none`.",
      "sourceHash": "sha256:07ec52cb8f542c845d50bdf44a3383b2e542516d7ea7650830fae4d88913c322",
      "fingerprint": "sha256:911a8658a5fe72a18a390d94d810349f07b09cb9679f7bde2df00725e50dbb94"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0024-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b1e7daca1bcde502e8cd2495e57756cae3448d50ae8c1b193c02ff8d7db898b3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0024-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not mention setting request context to none based on client support for includeContext: none.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a55e835ff6728ec4e42f61cb897246ca98290b4b46d96701e1518e7896ec3dd2",
    "rawResponseHash": "sha256:9b775e757d77c287ea815187b24f64162194942bfe69122760876d3623018954"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0025-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0025",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1018,
      "endOffset": 1165,
      "startLine": 25,
      "endLine": 25,
      "statement": "5. When multiple search results exist, process them sequentially and start the next request only after the current work's document has been saved.",
      "sourceHash": "sha256:6a89af06cde09557bdb9444b0059ec56d2fab896f604e3eb591962045f5ed68e",
      "fingerprint": "sha256:a5f70d505483cceb45a1eab58c63c9df0bcc1dcfcbe08512e010a53b788f8a65"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0025-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:571aee399b628f41f60235b5313b38372cc44717e9a3bd87571d0cbb5f09b0a5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c553650dd6e094db542dbde28909e4a38fb47e153af32e19e21181d715cda7b4",
    "rawResponseHash": "sha256:b60742ff16781041b238d6d30ea0f5ff4462cc63bb905fee2966982db77e600e"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0026-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0026",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1165,
      "endOffset": 1242,
      "startLine": 26,
      "endLine": 26,
      "statement": "6. Produce exactly one artwork-specific `DESIGN_INDEX` document per request.",
      "sourceHash": "sha256:f30b274496c76199d63e9768f7eaa8944e41f737de88d552dd8df80a2593c0f9",
      "fingerprint": "sha256:6c55c555e6c526d06666985bebedd6c7ef99d978248463ab0e2fee6a37b5b5df"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0026-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0026-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3b4d37578bd96c23c58063264b457187c9f5c21bab712260655554e239813971",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1763e7dadcba9dea29270e686a3c35caba3ea14b27e323a670e9063995a2dcee",
    "rawResponseHash": "sha256:eece27b200ce97e7ecc2fa4ed863c9cfa5025614c29d2cb5498e382387db7bed"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0027-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0027",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1242,
      "endOffset": 1312,
      "startLine": 27,
      "endLine": 27,
      "statement": "7. Write the complete document in the language requested by the user.",
      "sourceHash": "sha256:897805d3a332f62fead1c3b637745b47fc58b974d405c441558f7b327427f3a0",
      "fingerprint": "sha256:bec3f3ed8b3e6426b73ad701b3a59c6f97410b910b59cce54ac385e365dbcc8d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0027-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0027-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:07a33596c7b9f225a27ba6e84d6672f374d65f03c4962c4157639720574cb04d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0027-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not mention or imply any requirement to write the document in a language requested by the user.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5aa2fe9cce2350565e3f2bde3fdd25a76629a5c4741965369658a999a0e7d7c2",
    "rawResponseHash": "sha256:07fa0df59f940df59fcbf1293f6637c4df11d97ab127992ee25cc286326a1df3"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0028-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0028",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1312,
      "endOffset": 1433,
      "startLine": 28,
      "endLine": 28,
      "statement": "8. Return only the complete Markdown document. Do not wrap it in commentary, a summary, or a multi-reference comparison.",
      "sourceHash": "sha256:44a89a5ddbb32e6ca2a810352b9298676d5ada5ad62729e9fdc9575d22794ac9",
      "fingerprint": "sha256:9a51abf444cfad0167ae3f929d8405a0f5c81aa10d1a846fdea4efc90a9e532b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0028-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d1e999ab9f7a8a465dbc9ea0f03a0e595454c8d9d14394186a0bb480baa7bb00",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0c240b2a56daf16495a3480bb9153458cf60d411d3d6ed8e108d4526b4db5ba6",
    "rawResponseHash": "sha256:12ed683dcfe7a9debbde4c716373aeefcea26a31c6c89d51359fd03e84e369a3"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0029-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0029",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1433,
      "endOffset": 1532,
      "startLine": 29,
      "endLine": 29,
      "statement": "9. The attached images and coordinate metadata are the complete evidence boundary for the request.",
      "sourceHash": "sha256:ea0d6960df39a6dcacd2b3be97a100ac438ca6856e526188a01062436384e393",
      "fingerprint": "sha256:9da64c284ac9134fef7e65b9015d3a3a57fbf89289ac7044ccc770724bad1139"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0029-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:dc2fd6c0c96d5204a70d487f7bc0960a4b642e6f2aa0abaa9ed7a600eb4e2462",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9eb7a6424533a14216cba2d6db452a71eb965419aa5d2659988f3997b224a818",
    "rawResponseHash": "sha256:c7018e586ed15ede142808c1e0e0c3b7ac9f9a67862a6e6bfda2bde80c64def3"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0033-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0033",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1570,
      "endOffset": 1650,
      "startLine": 33,
      "endLine": 33,
      "statement": "Create the following block for every attached image before requesting analysis.",
      "sourceHash": "sha256:01edcf7c2a739b98ed732ffa36a4f431b2b5d4fb63e07ae9ab23e9a14d2e44f9",
      "fingerprint": "sha256:4ded29c5ce15aaf0f5f2d06bacbb13740aceb09c49e1f7529811e5602913d124"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0033-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ca1d552e06b4fd9001e52b0131c2e1716216927fbdfd52f3ce6bccf0c3572e57",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:13a31ddd58d219bfcadfb7cfd1f3299f9724e619fb20e94a7dc48f3978316a27",
    "rawResponseHash": "sha256:45a251bab79bb11df7b907122776a7fb75f02c13c2a3a76001a7242d746326bf"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0036-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0036",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1659,
      "endOffset": 1714,
      "startLine": 36,
      "endLine": 36,
      "statement": "- {{SOURCE_KIND}} part {{PART_NUMBER}}/{{TOTAL_PARTS}}",
      "sourceHash": "sha256:bc23a1d2da17d153f36f9dae145c8a37a930475b261aeb07272f7a3c92fde46e",
      "fingerprint": "sha256:327fb89cf03e985c6e85feb235f794067a9bde5729074a51420311c71bb22609"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0036-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a8963035ee8382c84fb0742796323898928eabef95fd0876a797bfdade12d37b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c3a32993aafc215d85d78f8f8e7a64c4bbb9ccfea6522cb9e87f62aac2dcd581",
    "rawResponseHash": "sha256:869fb6fd8cd5e447f4b8b010e7735e0e2da2d9e47514cfa3f6a005bc76aa100d"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0037-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0037",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1714,
      "endOffset": 1747,
      "startLine": 37,
      "endLine": 37,
      "statement": "  - Evidence ID: {{EVIDENCE_ID}}",
      "sourceHash": "sha256:3dcd5891e73bd56715a9df0c87197072314c6de40574d6cbecb3d7aab9127a1e",
      "fingerprint": "sha256:f85d8e35f06c3a04695fddc21acaf87c39f2ed55557803784360827c04191706"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0037-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0037-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:6c63d2e4b2e83b7e9ae2667da9929f9b896c6fd59e2bae419e7da35d968ec2d1",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:71e27caed51b287739d254f8ce5dd53885f1a87843525ae1716aab0684d3ef0b",
    "rawResponseHash": "sha256:a83a0ed52f234759f4f8a499db678d8aecae9ab46ac9909dabb98e7a8841a780"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0038-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0038",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1747,
      "endOffset": 1814,
      "startLine": 38,
      "endLine": 38,
      "statement": "  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}",
      "sourceHash": "sha256:dea54fbafa612d717c013398db028c0ce32359d9003574384d93e323ea4d2b4d",
      "fingerprint": "sha256:0bcd374d30f07e53b00c7e93f94025f15db221f2723ed786d7ff19e3056ed265"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0038-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0038-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:babae94d5710512d484ea493e99e85a18eed9bb57abbc39208c6db59a40ee2d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0038-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the required source specification statement '  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:19573cf2b9d27c5f47bece2ae0a1644e49bd6e09a1fb2b14c780a65c44a1624a",
    "rawResponseHash": "sha256:02b49048770b1f09272bc260f440a6d2623afdd73aac2549289d968edb1e0792"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0039-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0039",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1814,
      "endOffset": 1890,
      "startLine": 39,
      "endLine": 39,
      "statement": "  - prepared canvas: {{PREPARED_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px",
      "sourceHash": "sha256:535c41e123809bbfc43127b294ef988b1fd4a284a1abb3d14f77c9bd89347e33",
      "fingerprint": "sha256:bb4c3c549d1cbcec454204a72c89a1ff8142ecb330885f0ebecaee943734c1c1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0039-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0039-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:9541e3a57adbd1497adb66e1cf03f75bef8cea829cc0f717766f0793f2044845",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:587ef0fc3ca667f43cb3688ef85c8a6d20afe51f2be8a20e0888ccd890b298a3",
    "rawResponseHash": "sha256:7acebb097c932127973bc721a24da87c8662f78b2abfc6843603d9cd60247268"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0040-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0040",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1890,
      "endOffset": 1930,
      "startLine": 40,
      "endLine": 40,
      "statement": "  - scale: x={{SCALE_X}}, y={{SCALE_Y}}",
      "sourceHash": "sha256:26ef81511c024fa091a3189beca8a411df8f9e87e36f97bc914f0e5f2c7afb15",
      "fingerprint": "sha256:1af70439bd4665a0d2708f56a1ed2f73dc69a9e001f81109d6a4794d63dcf621"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0040-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0040-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:8f234d45258c5fec7835b816760912bc632440e670d71f952bc4e355fa3a1deb",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:719ca5116001045a5a14404ea55c5d7047996585c07f4083fb398600a1a924c8",
    "rawResponseHash": "sha256:2fd23fc530e86ba83102b6e51d694261176162a6b4d218b339f386a89ad8bb5e"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0041-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0041",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 1930,
      "endOffset": 2051,
      "startLine": 41,
      "endLine": 41,
      "statement": "  - attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}",
      "sourceHash": "sha256:184be8f7ca94466d4da39d50ca0e551cdaf6a55fe7d47e14718855f12505c406",
      "fingerprint": "sha256:f485313d7874d7c1ee360721609e0356402bb6c122728757a4cce619d5cdee93"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0041-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0041-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:946c2ba7c446438df1bff7b34296a09d19f6c7b31ca87edd400205071b33518c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0041-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '  - attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}' as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e7a6af25bd7eaf4345b186cdf4c8fac9b2558bdbc11d12eed59138f2a5bb84c2",
    "rawResponseHash": "sha256:ab4ba074fb4204008b62c88d0cd34a8914248f7a4606b9342139c19cad2e8b85"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0042-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0042",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2051,
      "endOffset": 2181,
      "startLine": 42,
      "endLine": 42,
      "statement": "  - mapped source crop: x={{SOURCE_CROP_LEFT}}, y={{SOURCE_CROP_TOP}}, width={{SOURCE_CROP_WIDTH}}, height={{SOURCE_CROP_HEIGHT}}",
      "sourceHash": "sha256:5dcb431a288ad0d09a6cb00dece42586bbd2e186a868ba6303c5e2af335e2510",
      "fingerprint": "sha256:c5009eca2d6189d8b51b20d8a50a995c6e7d03d70459ce19a689e6ab08fa4017"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0042-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0042-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:128d6170a621e15a8e97b1bbf1e528eb6a7811c50afba54db93bab015a5861cf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ae84502fa5859aba020374b90d850b8164cdda72350670e859f6880494a76089",
    "rawResponseHash": "sha256:a981d92bd683824a2c08ad05411a73addfef24502cabd6c391b2c1f20685d614"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0043-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0043",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2181,
      "endOffset": 2275,
      "startLine": 43,
      "endLine": 43,
      "statement": "  - measured representative palette: {{HEX}} / {{RGB}} / {{HSL}} / {{PIXEL_COVERAGE_PERCENT}}",
      "sourceHash": "sha256:907ad16d2e6d85cc3a699692fd465a440130c23b1ecfd739d0596966b909e45a",
      "fingerprint": "sha256:a701d3b6e6ede0dff397076fbbabfda377ce4dde238103884f357cce0828ad0c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0043-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0043-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:f0fd5b37bd6225d5d0265b350365c38d081280990c33bbcbe805a25fc98030dc",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0043-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf requiring measured representative palette with HEX/RGB/HSL/pixel coverage placeholders not found in DESIGN_INDEX section",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fa40b943273de90a331bd4fcd9eab7495ddfe5dc50778c9bad0073a574e60797",
    "rawResponseHash": "sha256:734ae8dd95469879825ac269038cc211021f406d863f796079d41513333976dc"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0044-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0044",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2275,
      "endOffset": 2310,
      "startLine": 44,
      "endLine": 44,
      "statement": "  - encoded bytes: {{BYTE_LENGTH}}",
      "sourceHash": "sha256:c6dab0926771a3d225c600f2a295e7ab5539a819cb66420bda9dace823d995ce",
      "fingerprint": "sha256:6eccae61f681251f3391bbabb0173d189da47c59eeb1fd6a53808d47c55d2aca"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0044-R001:retry:2",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0044-R001",
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0044-R001:retry:2"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:fba14191936bb47501d98b2ad7ee83a6ed07755c4d066ee839ee11aad2299602",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:900f6d3e1c205398b9ede96e5f60564d990a28ca1cfd7bf0bb2ef11e53b71b2f",
    "rawResponseHash": "sha256:6deb058c6c71a69d32d3724b39f470ecc6710a2dd1b0923332d9ff9fd2cafe73"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0047-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0047",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2315,
      "endOffset": 2611,
      "startLine": 47,
      "endLine": 47,
      "statement": "The representative palette is measured from downsampled screenshot pixels after image normalization. It is objective screenshot evidence, but it is not proof of the original CSS token. Treat a sampled value as `MEASURED` and a proposed CSS token as `INFERRED` unless source metadata confirms it.",
      "sourceHash": "sha256:d43472a26b04308d80ce7ba8278e0f1ff773809bd1ff541facafb57cc66b9ed8",
      "fingerprint": "sha256:f6594f78dfe6819f0de2f965dda69b483bbf73ff98ab63d577daee9a6018aef6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0047-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0047-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:739ce8384527de779f75b45a918b6a2eb77e69dad0efac624ee7178e28d60d03",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0419e957435bb2fee9d7f588ce16b9e61f2f2db31b3020c090793b2feaa40bd4",
    "rawResponseHash": "sha256:66fb5f851bcea981e3518a0df71c44bb460a7b8a26bbc0579775b700fd8fdf61"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0051-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0051",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2638,
      "endOffset": 2787,
      "startLine": 51,
      "endLine": 51,
      "statement": "Inspect every attached evidence image and write one complete `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md` document in the user's requested language.",
      "sourceHash": "sha256:67700bed79e03543e3fdaf507d59ffa17ca34f4fed5050a5db54917491408db8",
      "fingerprint": "sha256:c9de2db3d5ba9e61ba93475641bb35f64fe8108b12e99c0463a8bdf5ec3f08f6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0051-R001:retry:2",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0051-R001",
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0051-R001:retry:2"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ed2e7e0b8293b065fc1b49a117fe17c3699a883baed231933ac944866d08a3f8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:680874eca380c983377c5aba5f1d5b70a23273bec316c3f34a3968869c75a7ba",
    "rawResponseHash": "sha256:d79cf24ce7af01455f05d9f634cca45175c775f71cfda8e1b5282cbee52c222c"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0053-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0053",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2788,
      "endOffset": 2969,
      "startLine": 53,
      "endLine": 53,
      "statement": "The output is one artwork-specific document. Inside that document, inventory every page or route visible in the evidence and write a separate, complete specification for each page.",
      "sourceHash": "sha256:fc6d311be60feb8f4696e25d3a0e9070daa6301b34cce015a665362a28134368",
      "fingerprint": "sha256:b67f5f78c7730afd26c73cd49b13b2f69b8b5e1a447e9719a84214323e90c5d6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0053-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0053-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:110497d6a0021db48a4bb5018e5013bcb40cdcea98f18834b78e5d767abac10a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f4ef567808ef862f03fe4689a9a682bdaa024f3ccb677835181b9e9fa34f948d",
    "rawResponseHash": "sha256:dc5ec66f28f047dc28446da1574e04e4d2457f4c90be1e15456b62ed824973c5"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0055-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0055",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 2970,
      "endOffset": 3094,
      "startLine": 55,
      "endLine": 55,
      "statement": "Do not combine this reference with another artwork. Do not produce a mood board, a brief summary, or a generic style guide.",
      "sourceHash": "sha256:48f2dff85ab6662a83b0789642488b3d0dd9c3a5d8aca69312968b62fd97dcbe",
      "fingerprint": "sha256:768aac78220706b223965f53435707cb1c94dcd6bad6001fddd42a148442c8ed"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0055-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0055-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:113ea1eb5604ccad2fde073543b1f3b69fa411f501c4bf896817f4e4f21e3175",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b1776160ac9cf39ed9af5f8850acfe6cd768ec70565eba66a63a3d96584c3422",
    "rawResponseHash": "sha256:c2ccfcbdfce9e35fd72509a78b062ac509c9d3ce7ce188b5f67376f7be558122"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0061-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0061",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3151,
      "endOffset": 3226,
      "startLine": 61,
      "endLine": 61,
      "statement": "Prefix every material claim or table row with one of the following labels.",
      "sourceHash": "sha256:6e59addae9579bd2a938ca938c598d3417b895b9332f23f45c3bd9f1634d5bf5",
      "fingerprint": "sha256:54353aed0aff60ff71670e03b8f943993dd4cdf8eae1e255c3037dc19eaed022"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0061-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0061-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3bb8bf83fcca8b4c32b2cd675f55757531341057b50ea26e510188b8f1e1e689",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0061-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The requirement to prefix every material claim or table row with one of the labels is not represented in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a98fd98e7bb690f0a058349beedf47573677b0ca7aa6f879fac84c8ec6585df9",
    "rawResponseHash": "sha256:bfbf93a676fe30fca978cd0170e7512dc0611887288cafad9081948dbb8ccfdb"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0063-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0063",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3227,
      "endOffset": 3247,
      "startLine": 63,
      "endLine": 63,
      "statement": "| Label | Meaning |",
      "sourceHash": "sha256:bf4894a145d5ecf37743f408681071a28966fb055777349e8ca624ccada8f3ec",
      "fingerprint": "sha256:2d7b4aa4d9e50c1bbf90fb885bae35debebad7b96426fd47993e10a60347c38d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0063-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0063-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:51f666f20e51d98a66aab3603f83dbf90c70ea42bb9e698e53a5ff7162154403",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:37717c0d872b2a70459a2e750d179a68e5b2820dd9ca3cc28a55598dfb628621",
    "rawResponseHash": "sha256:1bd28d81807c02df0026cfbb19b25173e3bdc20d6d36dfa8dd459202edb95093"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0065-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0065",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3261,
      "endOffset": 3379,
      "startLine": 65,
      "endLine": 65,
      "statement": "| `MEASURED` | Derived from the supplied pixel coordinate map, image dimensions, crop metadata, or sampled palette. |",
      "sourceHash": "sha256:b311637d73e8e722142dc0e8e81f2261be4ee964804e8d3ba6602a13464398bb",
      "fingerprint": "sha256:1ab2d97758f980d3b4f52897945a6efa0cfdcd4dd0c1419a2a9b5099b68ebb8d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0065-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0065-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:11b5a3fa9c5fadae62fe1ce1ae77b50d130a75d9f2ecfdb8825d8b245c00927b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4077e5d6d571e5be19334d930d0853fcc61a2f7b4f03721c573de4f0180e09f1",
    "rawResponseHash": "sha256:135f7ca766bf6f3050b010c08001befb0422af64debcf85cb1929da6fbbfe7ab"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0066-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0066",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3379,
      "endOffset": 3496,
      "startLine": 66,
      "endLine": 66,
      "statement": "| `OBSERVED` | Directly visible in an attached GDWEB screenshot or supplied metadata but not numerically measured. |",
      "sourceHash": "sha256:1e7543187dff872e4ca0146f2bb78269e1e1476143554be8a79ed6d81b17284d",
      "fingerprint": "sha256:854199f8e46b6c921d7dfb3c91e494012c7e7e8549642601ff4444fad6be55bc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0066-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0066-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e474470c819f5606e8fb1ea726c57c61f657855ffa566020b97ce20b130e436d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3ae7e7db48d87e4de249ba8fbd3cc8ddb94537287a7d89112ad3662f65d82ca9",
    "rawResponseHash": "sha256:1a44c3af0b39ced457c6d2a9d1a837556053c363dea2b06dc783e2c124a99c3b"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0067-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0067",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3496,
      "endOffset": 3623,
      "startLine": 67,
      "endLine": 67,
      "statement": "| `INFERRED` | A concrete implementation decision required to reproduce the evidence but not directly visible or measurable. |",
      "sourceHash": "sha256:aab8d845234c6655b03e5efa07b75de37d748a4803fe9d3eef5a13cd76a7a489",
      "fingerprint": "sha256:cb64f876930c22cad39c2b7907fd9addae382cf69f7d0d6a1505504a30492580"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0067-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0067-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:0fe2f8f12cf77a51a83f1109f17eeffe80d43f5ef08e7ac1bb897840cf1ee3ae",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d0b64695fc27a23d34e454337b51494e9d862548cdc7ce31bb97b86452ca488f",
    "rawResponseHash": "sha256:b748790d279cbd633d50d9fb4c35962978170b4ccb783845a961bee751a0e634"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0068-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0068",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3623,
      "endOffset": 3721,
      "startLine": 68,
      "endLine": 68,
      "statement": "| `UNKNOWN` | A value or behavior that static evidence does not reveal. Never state it as fact. |",
      "sourceHash": "sha256:f10bd557c73f828f116b351ea30b02c13f0245831190a928709de21d78011ce6",
      "fingerprint": "sha256:b02059bfb1f09d450a66a85162ef171a5ba182638a3752072d8f5b9b949097d3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0068-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0068-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:1f98fa2bc42e74f4a48683d710ba4b5079a445c13a6f5168e66aadf965424b14",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d6a7f170a856c16d1b12c9d259ac71d574d89d021f1ad0df39089604620d8b19",
    "rawResponseHash": "sha256:7c8acda56a3c6e8ebac92dc5552afdf06ab31a3b297478bea3ee2b60bcd4e70e"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0072-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0072",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3752,
      "endOffset": 3813,
      "startLine": 72,
      "endLine": 72,
      "statement": "- Every geometry value must have a concrete number and unit.",
      "sourceHash": "sha256:36e49faa81e5cb18a4eb81fafaa63f1f571a114fd371e8047d3b430703ce184f",
      "fingerprint": "sha256:a33fd52e250a817debce4126637a958192de1d5345dfab780e2bd05948881b92"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0072-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0072-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:0f2943cf7082f030fc6bc1480e1bd6e6c7c0a55a78ca82b24ca3ad3862860c81",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:cb767d75262366377066658bb69a87b83e85b9f7f68c5fddac891b952ddd2bda",
    "rawResponseHash": "sha256:8d11b40923e473a5a048078a589f81a071b7788c973fc079dad7e4ae1416005b"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0073-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0073",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3813,
      "endOffset": 3941,
      "startLine": 73,
      "endLine": 73,
      "statement": "- Prefer `px` for screenshot geometry, `rem` for implementation equivalents, percentages for fluid ratios, and `ms` for motion.",
      "sourceHash": "sha256:95fae881c760f79c07d4e3fafdf8a5c987301a931d7e73e90efd82ff33f19992",
      "fingerprint": "sha256:7ddb1342f4f2b1573fe80828fd26f935b2f937ee7ed4ec1fd40204e0efe26936"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0073-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0073-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5b9905bbdb8262cb75abf473c506bbe54437b4f5df3935e1629f80ca1bbc3e00",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ba81ad426b0f87a68e07a49ae14c444df7627ca667bba8d38ba7a791c039a826",
    "rawResponseHash": "sha256:58a73e51c9eb677ce58477dda3c9c02e01a816c8ef846ccd2361febe6fad6deb"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0074-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0074",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 3941,
      "endOffset": 4146,
      "startLine": 74,
      "endLine": 74,
      "statement": "- When exact source CSS is unknown, provide one recommended implementation value, its evidence basis, confidence (`HIGH`, `MEDIUM`, or `LOW`), and a visual-QA tolerance. Do not provide only a broad range.",
      "sourceHash": "sha256:8fce24ef5ab042bb8b32b3ac45afef234086ac560b01ed93d5505fea32fa4d56",
      "fingerprint": "sha256:0e1424174757341e85caa9fa20c384c0f5f17918f6e18d738429921374762a76"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0074-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0074-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:44fbe2f37f8523458d69096a07fb5750b6090650ee09846dbdb979801d574202",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:aa6719777ccbb367edbe173a9ca2dc60406420e7dad620707e9d719dbe0e2320",
    "rawResponseHash": "sha256:f09af047bb547ddd514c3d301bd697dc23413e59163a5c0d0536c53b2f524a34"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0075-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0075",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4146,
      "endOffset": 4307,
      "startLine": 75,
      "endLine": 75,
      "statement": "- Measure attached crops in prepared-coordinate space. Use the crop offsets and scale values to map points to the full prepared canvas or original source image.",
      "sourceHash": "sha256:54d782371670b9cf7d200fabe38e21978408b0d191df2ada42c9241d08d404c7",
      "fingerprint": "sha256:8a596f01234b0797d2962c287afb5d661ffc57ad2dcea7a88bd3b5cc52c24a46"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0075-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0075-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:1c38e8420457ed1f41ac3cf9aa3833e17d997b2695a98b5a009351e019ac6e2c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9102baf33f9451d5713686e57ee147e62321b56d33c1baeda1906c20d3957e6a",
    "rawResponseHash": "sha256:e120b86dc793096435ac10a69ab70f09831e49220a4aee8f060500e380396b78"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0076-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0076",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4307,
      "endOffset": 4426,
      "startLine": 76,
      "endLine": 76,
      "statement": "- Tile overlap is duplicated evidence, not repeated page content. Deduplicate sections using prepared `y` coordinates.",
      "sourceHash": "sha256:89e712425df28a81d952242d07e2548daa4db5bceba802f1c24c2c41df49508d",
      "fingerprint": "sha256:0fd1e2a4d700948fd1c2af072ef8de85305b1d36f9ab911117968cee6150bccd"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0076-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0076-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:73a7de25d44025c61c7788cede079f7200b803a146abdddf9d22b9fab50c6d24",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:03906c643359a4c76f3967d7f484e23132e6a00ff5f9c445e4d6620e2323759c",
    "rawResponseHash": "sha256:5e1d5dd7f8d1e8b5f3a8a99752f43c2af120f55c4a79cde40ae2f9afc7b09665"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0077-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0077",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4426,
      "endOffset": 4598,
      "startLine": 77,
      "endLine": 77,
      "statement": "- A long scrolling screenshot is one page with many sections. Split it into multiple pages only when the evidence clearly shows distinct routes, screens, or page canvases.",
      "sourceHash": "sha256:32c4a3b847215cbad4a271a8ee0afad72214599bc5f2db60ead56fa55fa9fc0c",
      "fingerprint": "sha256:1a45de0526a34ca18e125cd8aae521cff78df4f5326bf02a0fe87888e9da2edb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0077-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0077-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d8be7226a24251899956d63834538ce6548923a437a73a53eea6480895906567",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:678bc3fca6c47a9230064d0ca65fb9b101f2bcfa84380f07d40c050839cce8db",
    "rawResponseHash": "sha256:c006399552bf2b987119615482da7a12f3f6cb676d17a559bcf7657b84402b34"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0078-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0078",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4598,
      "endOffset": 4729,
      "startLine": 78,
      "endLine": 78,
      "statement": "- When a collage contains multiple route screenshots, identify each route as a separate page and record the crop that supports it.",
      "sourceHash": "sha256:ed4ff0b72ccf7b4bf2fb104864928fedccaf4805403783607f336196dbfef64c",
      "fingerprint": "sha256:454131af1548bc95de2d3c487da8a912ba5e23888d242e72a2e457ff0c9193dd"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0078-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0078-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e9d08a79a3d8ee7fcad78ee69061c7d1d65c75d6762682204f943b43157ed4a0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fcc73e215eb19b489be682198fc5ae8f0f4c30607889c86c1892799ec11c4345",
    "rawResponseHash": "sha256:2ae1983eda63df56fd20093822d41d157922a3b535f72ee9413557f099b51147"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0079-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0079",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4729,
      "endOffset": 4879,
      "startLine": 79,
      "endLine": 79,
      "statement": "- Preserve visible hierarchy and relationships. Adapt copyrighted copy and brand assets unless the user owns them or explicitly authorizes their use.",
      "sourceHash": "sha256:d27b194e8c748e1a9e5c6e8dec73e7922b747aa12ed26d6a938295f4decbf711",
      "fingerprint": "sha256:0df08d1b6ad9e843b89c8a1db80b6705e6e27f3e7440eb39b2060b735eb507de"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0079-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0079-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e3f6efa7b4884072db1dd53662a3b0f6dc0fc0add7e48481846d8cd4159f490b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:27a3686bb8763ffa67326d284b95d5b0fab9fa96f4ee7c909952a5e497e9ee31",
    "rawResponseHash": "sha256:ff8ab4f1a3012cbc3a44b9e98933e1cf680ebc0b96806e392fd67e89d2d06469"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0080-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0080",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4879,
      "endOffset": 4999,
      "startLine": 80,
      "endLine": 80,
      "statement": "- Treat desktop and mobile evidence as separate primary evidence. Explain every responsive transformation between them.",
      "sourceHash": "sha256:6ba0d81fd4c1497718c3605bf26be45265cdbde3d21d0323db5be07cbd1e3b81",
      "fingerprint": "sha256:ac1bf80bb85f06689bac8bdf4afa4bab1b52a4b5f438f7f440790f61d3f97608"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0080-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0080-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:2736921fea17baf61c6e1e7d5d2b5242ecebaec831aff102fb8057bdb92e92bf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6affcd1c7954ba6b1f968704ad8768a2f6c2b4727da744f13118542f502477f3",
    "rawResponseHash": "sha256:7fbbd42863b2e009f22214800dff6bd160c038610d6c73cb90460c06f3ff5ca1"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0081-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0081",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 4999,
      "endOffset": 5129,
      "startLine": 81,
      "endLine": 81,
      "statement": "- Vague adjectives such as `large`, `modern`, `clean`, `spacious`, or `dynamic` are invalid unless followed by measurable values.",
      "sourceHash": "sha256:d2f7b73f962237a653fcf8fcbaca3021c596044c40f6a58bb5bd1e397b69dcad",
      "fingerprint": "sha256:0801a8d15c6d9206cb7cba089ba039c78c22e2199f763008d6e495252bcd199c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0081-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0081-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c32673f0f1507d74d8dfc2977b3f8999ebb64f6862d187df168e8676ea898c19",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:349623968919d6594d12970b9c1952654185f53b732a962d19c017d6f5a39b9b",
    "rawResponseHash": "sha256:cf0894836cdbccd4c098f1e904b3a460281decf83af8b8447d169ed721770c23"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0082-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0082",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 5129,
      "endOffset": 5216,
      "startLine": 82,
      "endLine": 82,
      "statement": "- Never hide missing evidence by presenting an inferred value as measured or observed.",
      "sourceHash": "sha256:4d8660d870ff9fd6e32563368dab4f32c06691206475eb9f463a92da37228932",
      "fingerprint": "sha256:76f36551b2be077740264f1276767988ff8a24788f9fbbe509f55fa26482d67a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0082-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0082-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c61e09eb5ffb4c0b12f4191f80ed4f5332959e0c64184f55e40b6f21e4e4ba6f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:68b1d53e8829d5b48ae92dfe7447de1e643e9b6df68cafbf14a6f0590d552c6e",
    "rawResponseHash": "sha256:93bcf106e958e0eff4e0de23d3b69ae9d43918926993ede4f4060ea06b70c39c"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G1-0086-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G1-0086",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 5249,
      "endOffset": 5317,
      "startLine": 86,
      "endLine": 86,
      "statement": "The completed document must contain all 19 numbered sections below.",
      "sourceHash": "sha256:690846e7e8d097e74fae6f2729c577cc812745505c279c24f63e713278718be9",
      "fingerprint": "sha256:b96590513ac0b04743efcca80b40d5bc6af2092fa3a633597abafa78cd07e9c1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0086-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G1-0086-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:de4a330562c2aaa4a0cc385705d36920504f9ebec0c9f0cb32701af39b218f01",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:46d63b4d87649e2367797e9ec0f272999dddd7d461b4dc671ee3863bec92f7a8",
    "rawResponseHash": "sha256:d16450f72f7e7f3141eaeec490ca937f32f39a4e77cdacf22176a67da1f3c105"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5356,
      "endOffset": 5404,
      "startLine": 90,
      "endLine": 90,
      "statement": "- Record the reference identity and work title.",
      "sourceHash": "sha256:a190d4cf6f5ab3f83f2a522b835f1619928a3e4937a1af6094b761c7be5c4480",
      "fingerprint": "sha256:f823287bc93fca1a359d73506e51fc621eec09c25b2ad33a1dfede670c766c4a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:43688e89b695ceea1a8d2a6f290f02bda784c9d97f82e4ed8f88b6ba1038babd",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d105cf96087bd5d3325d01b6d589258381b29f9601e2aa358e7006a7b1ace522",
    "rawResponseHash": "sha256:aca70bdf2f28df07fffbb2d545252a5ef7c25166d5651758a60705e183472b18"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5404,
      "endOffset": 5434,
      "startLine": 91,
      "endLine": 91,
      "statement": "- Define the fidelity target.",
      "sourceHash": "sha256:3d68ace83036053e71969796bc37ee9b3de10d8e9ed4d8708f6c57b48f95ca2c",
      "fingerprint": "sha256:90a585a2a8da1a0d0e5380b8efaccc314ea7f4315af978062f1b7b6499f7e376"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5e98238bab7a1794fb7b4379951799e7d9e6148f1c1e976475adba4c7e53ceed",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1f921401d4d65a33f8b4f66894fdf38742b443d3013af78e118f8c715d9e7134",
    "rawResponseHash": "sha256:1702231e6f02a16d8aa980a1fc7b86baac7946866e9908961deaf09cdfb234e0"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5434,
      "endOffset": 5469,
      "startLine": 92,
      "endLine": 92,
      "statement": "- List supported pages and routes.",
      "sourceHash": "sha256:be33b4e0c4a181dab796bca2723d8fab68c09a19e2f390e01a6a315992d54189",
      "fingerprint": "sha256:0f1483349e2e4fc6335aa33ca4e5d410048eafbbaa4c04ffa822e1a7dbc84273"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:6170da7edcd16bf3d221a94507bf5efb8af105a2332ab43b08eac90eb849924e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:460e7ec398918e3dd30a70e0902368da4fc9f5c64f25a9f8658abfa8ff43bd2a",
    "rawResponseHash": "sha256:82a3247872cd543ae0e006ad30b44545beae1a954578b749086ccd7cb9af224d"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5469,
      "endOffset": 5494,
      "startLine": 93,
      "endLine": 93,
      "statement": "- List target viewports.",
      "sourceHash": "sha256:5af4cbebc680056cedd2f554e7ca6312b8e63cb24b135518eb95f1a02af903a8",
      "fingerprint": "sha256:64540a2275db2fc70a6db5f330247740c46bb586d1610cf7effe1f94fa2953fa"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5c1e46bc1fbe45854d61e06c56b31d2f0f99b1bc1b33da3f5de88f89a975461d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d878b4a968b707b6c46cf50f2a0b7cd7a483bd4f75764cd498167d378f73b428",
    "rawResponseHash": "sha256:04ac4831d70047e6e44c8a3b984018f4571500eb2ec82b66c9a72c76ac8a5cd7"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5494,
      "endOffset": 5577,
      "startLine": 94,
      "endLine": 94,
      "statement": "- Separate framework-independent requirements from implementation recommendations.",
      "sourceHash": "sha256:d6f4a5c4a53ea130cc62cdd0f4d1998f74d89249433f0a14515c7970aae2717f",
      "fingerprint": "sha256:62127ea6700c14a5ac69e55a51beac4be25aa092aeaf5f542b0660b1f7eca846"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:72485c57359e4fe0940f5ecd968c08599b7f2a01fe9a6794555ee908ba152db6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain a clear separation between framework-independent requirements and implementation recommendations.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:11aa22b8b9a58a4e4425b9e9a63ba6f7f15be2152747c5359355a90936731233",
    "rawResponseHash": "sha256:c87047279f4d75a81d5661da2b5f48d6500cb14c7c826dd4adce5765ad42c478"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5577,
      "endOffset": 5605,
      "startLine": 95,
      "endLine": 95,
      "statement": "- State explicit non-goals.",
      "sourceHash": "sha256:9beb52addd533cfaab6feeeafc9102e605ed5b852b89654f95d994e86aa72f9e",
      "fingerprint": "sha256:1594ee5b75b30d22b3391f1a8841aaa8029771595e9a39e9f42a9f54e4110deb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:dcaba66fb0d3dddcf09cb2465067d667d4d96231ff29d99d58a6f2de6ba47667",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d564bdfd682f43281f8ba79675c40dbcff5cd65634e3898aea5207901f2d898f",
    "rawResponseHash": "sha256:1e33e2df329a5840100482e26a5a1b968cbc960307910723990b30eb1e6abc0c"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5605,
      "endOffset": 5701,
      "startLine": 96,
      "endLine": 96,
      "statement": "- State whether the evidence represents one long page, multiple pages, or an ambiguous collage.",
      "sourceHash": "sha256:0c77f15e62c6e986c9baf88a7efb2afd17c25d8a063e49666bea2b92de80d5e3",
      "fingerprint": "sha256:1dce6ae49dbf7f1cc02501fdb6268a0c98bc2d08e1a6035281a298c7e0580865"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:05630aa50a68e8b21fa8dd09aee6891873d38e532c3f25aca6e13e17948aca8c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d891e0d4af87067639b5cab79b00451143ee635f3cb96b0b671e91518d7714e1",
    "rawResponseHash": "sha256:4db6906068fc773585507b9778b8bcf87befbbe2af305e74ed1cd7368db9b825"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 5701,
      "endOffset": 5792,
      "startLine": 97,
      "endLine": 97,
      "statement": "- State which original copy, logos, trademarks, photos, and brand assets must be replaced.",
      "sourceHash": "sha256:02aa2d0571056999ff1cecff164d200086cdf98d9cc5f75d2c33b11b82fbfe59",
      "fingerprint": "sha256:401a9c3afdd5cbf02eb76f38ce5eba59c9e554b7b7b3129be08859aad73942fd"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5d719fa8568b51a3286106cc4594ead37adf3a8330d50d516261beaad825836a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not state which original copy, logos, trademarks, photos, and brand assets must be replaced.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8be367129cebe52e65dfdd88e156f084b50e82c58336d9c4aa1772da727827d1",
    "rawResponseHash": "sha256:38d8f4ec2ea50d648de73990995db20b1bb346179f9984553c90135508fae9c7"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0003-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19597,
      "endOffset": 19662,
      "startLine": 425,
      "endLine": 425,
      "statement": "The document is incomplete when any of the following is missing:",
      "sourceHash": "sha256:1fbf4c2a4339008fcfc242f979e9ea8fedf89da47afe3e881e7a4991ada41efa",
      "fingerprint": "sha256:56d5b7fe378f1235a032b26905e8d6f8864105d03e6a4b9f07b7f9ce782d0bb2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c6bd35ce93da3723381eb043d959afeb724fe72bbc1198464e21a504c57e1662",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:497bfda649210fa469888b641271cd0fa636efdb48fdb57845c7a66d5015c04e",
    "rawResponseHash": "sha256:a03bcf32ca409e2abe93d66239ac87e96eee5c259d91ac3cdf48ce8167cd0357"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0005-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19663,
      "endOffset": 19692,
      "startLine": 427,
      "endLine": 427,
      "statement": "- A page and route inventory",
      "sourceHash": "sha256:3040967600a6c68307ba37ac765d564790736a940d1106c5b7baae652172def0",
      "fingerprint": "sha256:478c4ad4b20e3850bf14d9aae5722eff92fcefd59a12323270ce397b3e407b66"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e899740f2bbaf83eecb2fed74e4fee5fa3f49adc977a7a5f8afd7ee9c47289bb",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:852796917fcac29177dd2e9003260e62f83ace1b158db9430772f9bcd67dddfd",
    "rawResponseHash": "sha256:e261d8617af215e791f314ef6ea7710023cc1817b63c5fecba0bf0f5dccc68f4"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0006-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19692,
      "endOffset": 19747,
      "startLine": 428,
      "endLine": 428,
      "statement": "- A separate full specification for every visible page",
      "sourceHash": "sha256:360c08fec4035bb00aceb44c77041d2793bb330a3cfb5a2a2a9f9c0b7e41601a",
      "fingerprint": "sha256:99581e9cd29966ea3f533460c5c4c60723efd100221d03300af34acb44078c2b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:32e8f0c1dbbeed1de82f3b06ca86319a2b4bf54734ccb0648810e7c8f4d12ee4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain a separate full specification for the visible page P-01 as required by the global rule.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5187aeb00efdc0770672911f128262f1b6dd8f99d370f9296f922de04a627fd4",
    "rawResponseHash": "sha256:fc52cb5cb1f14ffbc6e53a9ae43d58424758ae2c26e8365df91209e9f3bf312a"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0007-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19747,
      "endOffset": 19809,
      "startLine": 429,
      "endLine": 429,
      "statement": "- A desktop and mobile navigation geometry and state contract",
      "sourceHash": "sha256:bac21c9c5df28709e73c5412ec95e9ce91f91f8e45337ac3ecc0bd2edf744251",
      "fingerprint": "sha256:b05e1d658d0ab16913533ddd296ba624f47376923672a7927cb89d08c2621a2b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:0dd078494e13f3bd343af9b55271fcccf0608f4c4203d4ebae0a354ac4b8ec24",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:44124ee10a234248808b10f5bcffade25ce056a667bebf833c773b1a3a72db8f",
    "rawResponseHash": "sha256:305633b5917111121d91755bc8162ea5448e4850846ac18d3f7257ee22511f80"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0008-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19809,
      "endOffset": 19846,
      "startLine": 430,
      "endLine": 430,
      "statement": "- Evidence-linked pixel measurements",
      "sourceHash": "sha256:deb3694c0882f640e326d28da6d10f376ed59170ef2f4e2518501a08fac76e12",
      "fingerprint": "sha256:ed6006d173780e7c0a2b5c4ae5ce244337c17f4bf8ba546e05d5a463939e11a7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bcd6fdd1a206c020bedba6d52456fad2cf93b507f4c94ef603f3feda3f143c84",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7f0c93a3566e9afdc6a36e5c8b2e2a4534a812959328067b81a0943f52aae182",
    "rawResponseHash": "sha256:3bda268c436ae92012d590b5fe184575478d045c6b87d8dbb9eba41127893039"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0009-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19846,
      "endOffset": 19896,
      "startLine": 431,
      "endLine": 431,
      "statement": "- Exact color formats and evidence classification",
      "sourceHash": "sha256:8bd036937c7ee88bf0b082ff23214d9db697dc62d234ebc4e3404fcd528d6e09",
      "fingerprint": "sha256:71b075816418228d07969fd34005f52a0de312d04cbbb78019063c5e98ce07ad"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3856593ba7437c6c790d85f4cfdac4a207fd29ea374e807e94e46353654428ea",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ba8612da37f151c72b1ef8bb6bbccd8d683b47b51db7cc9339c65781ca989b02",
    "rawResponseHash": "sha256:f646dad36a36961f584abbf3bfeffc366101778418e2bb886a645620dcbe5a13"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0010-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19896,
      "endOffset": 19922,
      "startLine": 432,
      "endLine": 432,
      "statement": "- Per-page section bounds",
      "sourceHash": "sha256:7ee7218097e01d4a5f2350d3668ec833fd3cb38831bc90c528e462bd85ca88e2",
      "fingerprint": "sha256:6c82c7e05fe6b58a50dbd1305ae93a71d55963ef45bdb29d6bad6f0b5af2e089"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:53508c9a7b0d0a023988104097631003c9da0501c31411eff44f6cc576ef8be4",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f00c40db0d453b24f695869b0ae81ed84bf26c0ff39ef55213a2f8f4d5c6d964",
    "rawResponseHash": "sha256:887b5781264cae35c5094e2ec478938f510a6e2748c6f4fa3af7b2aeb7278401"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0011-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19922,
      "endOffset": 19944,
      "startLine": 433,
      "endLine": 433,
      "statement": "- Component contracts",
      "sourceHash": "sha256:8a2c44e810c530a98a5e3164f0f34d70199e3c0acc0714e53c7bbb1e5fd55a21",
      "fingerprint": "sha256:63fbdc24549530f4d572580e067ff803ddec95a6505bd4485d5da72a6c6c7e1c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:98e461e3d64713441152bb1c2be24061a578c8320ed107f776300c40752fb48e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:002c0a9d7dccb88b3ec318f2938b2a7ad7fc42e06c476cde2c5bd7a88cae177a",
    "rawResponseHash": "sha256:6880d4275b8f4fb61484fb670932478b35b6d48d50eb9b796400019554442d34"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0012-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19944,
      "endOffset": 19964,
      "startLine": 434,
      "endLine": 434,
      "statement": "- Typography values",
      "sourceHash": "sha256:3d835242fc731e6b5300088e9dc6c77e5513b98a6573bc907cc6a8fdd341a771",
      "fingerprint": "sha256:06ba715811c30872d09ae3d1fb870ead2ed879ce9326b2e09b4ca842095553f8"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:57e902dc00f8b871fb1e455e8376f95d624932d5421d34d2a7aec3d86b582a7a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any typography values or specifications for the global rule 'Typography values'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:69cbd49044a243a5ec6420b377326e7cd943b1e32535e87990a647cc082c4b02",
    "rawResponseHash": "sha256:f8d6e9db615a22821c6958f8982bc1013797c078c5ea0d0ef727c36fa5f8e43e"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0013-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19964,
      "endOffset": 19987,
      "startLine": 435,
      "endLine": 435,
      "statement": "- Asset and crop rules",
      "sourceHash": "sha256:47de3181ff3a42cce89272233ae14e7b772dba44eff7d4bf0808a95f06fd57c9",
      "fingerprint": "sha256:3a0719bd5fef8029e9163cdd0fbd1ef910382881088da8b786c96f71cb838866"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:2069ef8b9eec64667f2dd88a586b79d869bfb4775c17e511a5eca678351e31c8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement matching '- Asset and crop rules'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fea3f66366628a0c78e1c43109bf3015d09dc5daebf59fab38a87e3764f5db3b",
    "rawResponseHash": "sha256:c2801ef066505de1f0a7ea52163452933fe27a08d812358117cf9b24f613b5cf"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0014-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 19987,
      "endOffset": 20009,
      "startLine": 436,
      "endLine": 436,
      "statement": "- Responsive matrices",
      "sourceHash": "sha256:06486346e2f72a0dbf3ef4e2e78144e4e499c968924f9b2f08ad4c84a280aecf",
      "fingerprint": "sha256:4053a0cd6872d117c15d0393017c811f2f65db60103ce92d634f04c81c6e87bd"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a5f306fa5849d00da34fd60507729468022667a3a3113c9a88fa393d82540679",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:617e9bf3f836a5f169d2bd6f6b611ac38f73c883cdd21cfc2be79f99c04c9609",
    "rawResponseHash": "sha256:f9f5950857bed5a58309f0ede46b89f9eb9633e9c9a8f47a58fc7c612fb5f2c9"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0015-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20009,
      "endOffset": 20051,
      "startLine": 437,
      "endLine": 437,
      "statement": "- Interaction and accessibility contracts",
      "sourceHash": "sha256:835852234cd6732508aeb94657c1dd816af369303133061e81e47263f11c24de",
      "fingerprint": "sha256:1c13b46e276d6e06822a70144dc290ae072a7067bc40498b9e7fce5f8ef387d8"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e14a7dc6a62f30fcdb7d5cf57c10f45ddb1eed68b3c1ed28f6f3da61a2aa6ab6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a299c0b4561781f1b306072bd3f60289d98238d485713a39092358785f63aca7",
    "rawResponseHash": "sha256:2bd01f9edd198268b5743e8ae30dc73ce91563f6c3e8877ab864f13285175758"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0016-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20051,
      "endOffset": 20075,
      "startLine": 438,
      "endLine": 438,
      "statement": "- Frontend architecture",
      "sourceHash": "sha256:7460704a1264cc0b97dc31be22d6ecb1589512b2b4e9b7c5eb5920d147742a21",
      "fingerprint": "sha256:b6aa141fb9c8678fd371281e15a89222d0c51e423a746c7ac38628cff75563a4"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bb656d92076892fff345e7b870f182a101bc4c5ab15bc8f4cd8d82236f4a0a51",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9767c329fbdc7dee700b5122d3de29636e985f4b926baa79cb2027cbe75a257c",
    "rawResponseHash": "sha256:68603ec2d206914f1feb1fbbda93e02a883bd3d423a451e2f8b3275a6d181347"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0017-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20075,
      "endOffset": 20106,
      "startLine": 439,
      "endLine": 439,
      "statement": "- An implementation task graph",
      "sourceHash": "sha256:cf0a8a26c1082b4be1b62b4ca9e509cee9b3fd9580c06f58993363f5ad340752",
      "fingerprint": "sha256:9e661232ef12f8ba500a5a7e4fa333e0907b1e9b84c93ea54804c19e072a0a67"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:69e7beac9bcfc023eeade466832462c9e769b5df71228b2c41531c04ffb05a38",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b68e086460869bcf6adaa67219e0a0606b3f85f876d9ae15fda3c599117e17b7",
    "rawResponseHash": "sha256:e8d73a509f74e75b32bc325d1b4ebeeb7444553df6092546690db2628ffd4278"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0018-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20106,
      "endOffset": 20142,
      "startLine": 440,
      "endLine": 440,
      "statement": "- Page-specific acceptance criteria",
      "sourceHash": "sha256:6272dad13e351a9b590a6597cd8679e7e6d40d4eec481de50fe9fd45daff3c3c",
      "fingerprint": "sha256:0cf9bb60a658d7312d0ded1a6447c204508fa2859af77c8ac5074de9ec5a027c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bd5d10af24b90131281079b42dd3ea704d29e14a15826d91e5b7560911bdc862",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:eca1c9640c7cfef6d29801f5914bebfb4f17f91f05492b76cedd09e2076afdaa",
    "rawResponseHash": "sha256:3a95d0a6e19980eec5b16acf7d0a185b6546b335987638070132c816dad92ff9"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0019-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20142,
      "endOffset": 20173,
      "startLine": 441,
      "endLine": 441,
      "statement": "- Explicit uncertainty records",
      "sourceHash": "sha256:377634b6ccf5fe0193ed2fcf684321fe343fe26e523ce56e34a731181906ef27",
      "fingerprint": "sha256:144355a1b70926a2a48a22b6c53597c38ae81980d20666a8ae2881bfdfafca2d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:48e15cf9612db57b84543fba48f909aced9245cec827c708cdd728c7d5a03fa0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Explicit uncertainty records are not documented in DESIGN_INDEX",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a353983cbacd28d8ccb4d8b15009eef689aae8e56ba39a86ca7625a9ce0fd6e4",
    "rawResponseHash": "sha256:c6453b8bc8653d3e2fd5cd5da479e195c3709850b7ef36825298599da646ae99"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0021-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0021",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20174,
      "endOffset": 20349,
      "startLine": 443,
      "endLine": 443,
      "statement": "Another LLM must be able to implement the artwork page by page from the completed document alone, without reopening GDWEB and without silently inventing missing measurements.",
      "sourceHash": "sha256:3dcd4512baa697d473eb8c2e7199b884a20fd38ee36241bd009ce32cbbae0810",
      "fingerprint": "sha256:b3f99caf84f017fd9ab7a14cdc36517ef37d3825729fb66969bb9cc6b44c0d77"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0021-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:70f6b4773ca000a07f6e0b2b78e216c121e79a5ee1ac41c296486eb7da08fc6f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3d3cb056071e2db7b2625ad2b4a115c3aa876879ca94e7dd53780924fb2b0988",
    "rawResponseHash": "sha256:4ea7d464800ee9d1cf9277616e4b031d6a3305f77790d6d9efc9c3aa02c92eb7"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0025-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0025",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20384,
      "endOffset": 20485,
      "startLine": 447,
      "endLine": 447,
      "statement": "When this contract is used through an MCP client that supports sampling, use the following behavior:",
      "sourceHash": "sha256:12c3c942570bcb3c7b4a64e44ea0e68bf2c782ea9a59d28a83e3325cd997904a",
      "fingerprint": "sha256:9f099d4f924741830337c56f30d17a4cdee572a0fb5258c2cf34bae6542f2c53"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0025-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ea3b890896f2b300ff5e2ee08a1cacf6ab250ad158e6692b9123aead5a4ebef6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:170d82cb8dda85c6fd71640eac79a03824b326c8cfae3dca55b6d01154f5117f",
    "rawResponseHash": "sha256:e30cee29e74480cf6e7334e068780c20f308113c3f423ed3bba2cec58747c4da"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0028-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0028",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20494,
      "endOffset": 20560,
      "startLine": 450,
      "endLine": 450,
      "statement": "System role: senior frontend measurement and specification author",
      "sourceHash": "sha256:6871ca735cd1a5606fc83921c46c136bbcf7dd708b2a5852b5a58291a9bd5cd2",
      "fingerprint": "sha256:c708dd1af3a264c1031e0dc3757e37bf591a28e2f50b261f0194fd965ddb705e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0028-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5c90884aae37e0d5550b0adcf4cd554c7c2d5eeff6a0b82a53173f8411d163e8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e411e22464be4b7353ee7599e970472cd0199987dcc44c98edbdf2b934aea40d",
    "rawResponseHash": "sha256:f90678d4009cb104228b048bd2473a59358376ac73744dd5fcf4379676fe741e"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0029-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0029",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20560,
      "endOffset": 20595,
      "startLine": 451,
      "endLine": 451,
      "statement": "Scope: exactly one GDWEB reference",
      "sourceHash": "sha256:cf2f3e362fffb8deae7752c82f7440a2de4cba54cb52f178f368db3f40adf6c5",
      "fingerprint": "sha256:5b61a2712f0bb6d8d6f35b1ea327675d7c1d05f3cd053e6eecbe77c87e3c9e16"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0029-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3be6e67c6bfaf6bce2ff3fc190082e982b776dfa7e81f2592bdb51f931697247",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f40767f01f711a1e28746279aac0eaa7075a8bbccaa053c827e14bb86b3c03ef",
    "rawResponseHash": "sha256:4906ee6ce4fbd50d8e955ac758d405b715322fbf33f299d56be44c6a10984a7c"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0030-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0030",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20595,
      "endOffset": 20609,
      "startLine": 452,
      "endLine": 452,
      "statement": "Context: none",
      "sourceHash": "sha256:99c7563b29d8d844691a46e175b6dbd89730ebfd4a1cc80eeae6888302afe52c",
      "fingerprint": "sha256:1f01131501a35b8b6e10d9074378ae4f7a7f8f891ba1dc81f9a8de50c7caac61"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0030-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0030-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:68452da0b0704e56b592d620a0f0ffbbd4ce31dcc5b4da3976bd0f3ad3d94cdd",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3b5cd9068df1e2e8a6dc3ddf7a3f51d3c23f3aa0e46e7bcc0f2adebe1b668ad6",
    "rawResponseHash": "sha256:66d6c278aae219a2eca4c0dee18dec3518a05fd6044c03cabd160733e7c516f3"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0031-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0031",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20609,
      "endOffset": 20626,
      "startLine": 453,
      "endLine": 453,
      "statement": "Temperature: 0.2",
      "sourceHash": "sha256:0e71723c0f977ea251fe4aed54f55cca750f448deba94d7aaed52ac3d1df541d",
      "fingerprint": "sha256:d756c7bd87d6d2da2a39520b25bd413fe5442e5c899b5d69b023befa75db2198"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0031-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0031-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:96789410f8e16c33e8eb017b07fd8d6b3c280c66d0ab61e0cf0731be99c191d9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:881a723331fc3fe6253f9be61f460d575e8af856781f675162ca7189d09508fd",
    "rawResponseHash": "sha256:c09334163f877be599ee952fd78250a43dc166ae53d109671e2bdbcaeab1e4d4"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0032-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0032",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20626,
      "endOffset": 20678,
      "startLine": 454,
      "endLine": 454,
      "statement": "Output: one complete Markdown DESIGN_INDEX document",
      "sourceHash": "sha256:82b52fdc480f3d7b1b2e884a5a9e2716fcd971317b122f62babc997ab5c8e170",
      "fingerprint": "sha256:4e947babeb252ee94b3e20b54edcfb0322d78754e9a6999551bccd675db1d98e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0032-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0032-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ababb13427cb33e79eab7e9e3932c03d14e2d567b1127fa8d39df214662b8d43",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:af42a1d36ccb040592b434e2f9def148f2968b36469559404be7920b646c6c72",
    "rawResponseHash": "sha256:88846131f7a99d8bba5e7ee608b6c16ffb01aaac81fee1eac111758f883afdfc"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0033-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0033",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20678,
      "endOffset": 20753,
      "startLine": 455,
      "endLine": 455,
      "statement": "Minimum required content: all 19 numbered sections and the completion gate",
      "sourceHash": "sha256:a0629348468b31ba2bba911287f9bad4b5ea2f4ae08530f1b69a1cefde4f809a",
      "fingerprint": "sha256:44ce104cfad88494f79271d26d1796d625ca88b007cc723e1ee951fdcb7bf90e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0033-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:70fb96641eb4abeb65f1cbc701bae1a0c32513c2b2ead5b3aac264e3134b8caa",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:311bae97f0b0643cb5e35749b46ac9258389d3a2bacbbe1c107febb973d48b37",
    "rawResponseHash": "sha256:aee2268554c8dd7e21c7ee07f95d5d567f88c8e8cbfb11f359c8b37e14a30a15"
  },
  {
    "leaf": {
      "requirementId": "S01-DOC-G2-0036-R001",
      "stage": "document",
      "sectionId": "S01",
      "sourceUnitId": "S01-G2-0036",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "global-rule",
      "startOffset": 20758,
      "endOffset": 20948,
      "startLine": 458,
      "endLine": 458,
      "statement": "The system instruction must state that navigation geometry, section bounds, exact color formats, responsive values, evidence coordinates, confidence, and visual-QA tolerances are mandatory.",
      "sourceHash": "sha256:b78126dee4cb13f6925f7321541aae6d17a932e8fe79b48c834dc884a5661070",
      "fingerprint": "sha256:60543c7adace27aa635f88195dc2e271221a9006472580e25fc0c5ee7f0c3a5b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0036-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S01:S01-DOC-G2-0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:fcabf758fe5aa80d9cedac166826bb72eac03797b7f3461bd6399ed233d26307",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:79b7e1cb020b91e505e1345d27756fa9a6f7f944bc5d5294b97a6e038be07a5a",
    "rawResponseHash": "sha256:0487759bb3e572b37ab5105fd350321651f576dd4199f30d527313614e681da2"
  }
]
```
<!-- END VERBATIM S01 -->

<!-- BEGIN VERBATIM S03 sha256:a123f79827a837227d88a5a8a37667e3f9a565d90089d1c40b7e3d9684d57aa4 24870 -->
# S03 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:2ef2b91fd9efbed5c581b18885bc8acad3d71426f3d67723538df30a995a273a`
- Normalized output SHA-256: `sha256:068090dedd2497c393f978e9519b0e036e8c3686adbe2b9cb608a0e6988407a5`
- Leaf records: `15`
- Leaf records SHA-256: `sha256:b8b79f5dc9328aeac8afbec840a9fedf086cf3a82814de6ab51cd3631618c8e8`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S03",
  "fingerprint": "sha256:2ef2b91fd9efbed5c581b18885bc8acad3d71426f3d67723538df30a995a273a",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S03-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification requires a 'Field | Required value' table in Section S03, but DESIGN_INDEX contains no such table structure for requirement S03-DOC-U0010-R001",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '| Evidence | Supporting evidence IDs and crop regions |' as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification leaf about 'Shared shell' or 'Shell variant used by the page'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any information about Mobile availability or supporting evidence as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for active navigation or active item state beyond the table headers.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 15,
    "passLeafCount": 10
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S03-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6486,
      "endOffset": 6560,
      "startLine": 111,
      "endLine": 111,
      "statement": "- List every directly visible page or route before describing components.",
      "sourceHash": "sha256:a246f1e70ca2587b84483440a1c9ba1f42fa6912cdc53d24aff6bfdee2c9a004",
      "fingerprint": "sha256:27f0d4e2a0c5a16a7abb090f983ca18a83614819b6e54425f522af1e61bd2ddf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:06f5ab98948c0a6901260bc7eb08f6959e93872a8e00ba90001d3d60a2210dc8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a5830f728720cfc1841863c31c99dee05e709d2852fdd3d99e1b28eed1a6a6e5",
    "rawResponseHash": "sha256:ecb82028f01194ae957014ab8e858e697c15d80a411167bf54e0bbf72c5655a6"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6560,
      "endOffset": 6684,
      "startLine": 112,
      "endLine": 112,
      "statement": "- Do not invent unseen routes. Record likely but unseen routes as `UNKNOWN` and keep them outside the implementation scope.",
      "sourceHash": "sha256:edcd47e38fe8167ae5d502e3edcd198da1799c23dd969373f23da39bd3118195",
      "fingerprint": "sha256:e53c5b1968028725df45b911dac73d3dbbf0cad8dcffc87a9d3a989a3047828f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:ba5a648ceb7289898cd3ca521c65d212936416af761ae6105e2c50364489bf0b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:34078217c113ac5336e89e970d76f44e26c88f3a06769909a2a43fc90e35cf1a",
    "rawResponseHash": "sha256:61abe957dbbe4809ed74a8b30abed75ffa92e52be8c786264ee7136b21c16b37"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6684,
      "endOffset": 6713,
      "startLine": 113,
      "endLine": 113,
      "statement": "- Identify the default page.",
      "sourceHash": "sha256:21d20f7e945f24ef85563784bbac294f7e96adba8e4a279c8c0f10114baaf822",
      "fingerprint": "sha256:ba6511f944d49b97398ecb5bcce677569ca89e5a15b043d4d652db0a4b4fa3a7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:de0009bda77d510f0af324a4c33386db1fb3d36c879d82d5e40cc8facd6ef94f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5a8a0f641ab5c5d8d9bc66ee2871fc3d1d82971ea8dae5cf77434413ec399f69",
    "rawResponseHash": "sha256:e96de8092363dea874dec8ee13183c2dfe751c08bc1a489490469a6a16047669"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6713,
      "endOffset": 6766,
      "startLine": 114,
      "endLine": 114,
      "statement": "- Identify the active navigation item on every page.",
      "sourceHash": "sha256:ad8b7c7bd49b2026570e02ede45aeac62a10b27b8671cfd6c2cc355fd834456c",
      "fingerprint": "sha256:09cc5a914d9372f9f32fc07b60b3e11a7db660abb529d174e8b82aa189d20b6c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:a4cf7cfba4eb55493f0bcfc232ead8d4dcb49cb0fd22b105215fd6d0fee7770d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:88665fe251ad57c9566b2b0d21f5a1459707d9964cd8108dfadf8f3581631d6b",
    "rawResponseHash": "sha256:3a1814c966beb068e8e50c372e2cb1582d263311c8086380e2c4c9c35d4978c3"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6767,
      "endOffset": 6785,
      "startLine": 116,
      "endLine": 116,
      "statement": "Required columns:",
      "sourceHash": "sha256:8d398529294b2a584f0c79ea84301c5e113911dd391ff95ced00b4683c53731a",
      "fingerprint": "sha256:37c3304a376708707a4a5b935c48cea153c42966a99e4f16b725607b5757f598"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:979a97ec600f8858c1b7e43914ac03eb75e190b74683c4a921429c7b50cc76a5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9b5e27f4250b45d9eaadc95c1e5cde5d5a245e26c662ac0bf4ebfdc358ddd945",
    "rawResponseHash": "sha256:6e736083837089874d0de123774f21ff1467c33fc00d3291c2e09adda2f95004"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6786,
      "endOffset": 6813,
      "startLine": 118,
      "endLine": 118,
      "statement": "| Field | Required value |",
      "sourceHash": "sha256:ae003fd1eed1866e954d9e8a5ef354abd4956b2e3b7c1fb8d3ac415f30cfe1a5",
      "fingerprint": "sha256:a380a1e817321d39e4b3aac1122d9c76e79870b5e110723b5def9e88d5e0b9a7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:241ee73ef7a4ec02e40660b58aa01723386f56bdc37ddee16c596e5e695af68b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification requires a 'Field | Required value' table in Section S03, but DESIGN_INDEX contains no such table structure for requirement S03-DOC-U0010-R001",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:3274052edde8eceee510e2133c6ec142bcca55162aae693e6b342e30d34f932b",
    "rawResponseHash": "sha256:972067cfe8c3a80fdb63737b4fe68dcaafeb62f306208317f5dbdc3650489170"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6827,
      "endOffset": 6866,
      "startLine": 120,
      "endLine": 120,
      "statement": "| Page ID | Stable ID such as `P-01` |",
      "sourceHash": "sha256:43193bec2275d5c68948776ea686d4797bbf1381f39b0ba9c28f31c1e1c71820",
      "fingerprint": "sha256:709397c9f430d437263a9dd83e7b2160d55946469032cb854a29e5d8d808ef23"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:c8344ef329d7a26e083fac41c2398e184b9d9c15f56779fa078ffaa7ddafeef7",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f09ecd863eedeba7c177d3eb13dc09017fb3fb92cbbe730fccc273f40f485760",
    "rawResponseHash": "sha256:7075912123cd9cf2720a6d978b2006e78564bb049f31364b33b1bd23c825f6bb"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6866,
      "endOffset": 6946,
      "startLine": 121,
      "endLine": 121,
      "statement": "| Route or name | Visible route, screen name, or an explicit `UNKNOWN` target |",
      "sourceHash": "sha256:3e43bb2550d118f3e9c2861e3fef53ec12ed6cfe9d3a0e77a751bf1edc050b33",
      "fingerprint": "sha256:aa4a0340a31e16d37aa79b8d42071d4abe431db39e1fdab4e8c4c55a9f852152"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:cf2b3416483f7add1dde1dfb329db62e66d6f84513f1f076d2e39e5f57259f66",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5a61900cb24430a2f89364d80d914af1098e88a2c42eb50c2abc74ea237aab54",
    "rawResponseHash": "sha256:33b8aae3cf0d1ce996c2ebbfdc27ffbb7035228569e8f2e7070fc1e4abd08939"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6946,
      "endOffset": 6992,
      "startLine": 122,
      "endLine": 122,
      "statement": "| Purpose | Page goal and primary user task |",
      "sourceHash": "sha256:924e0b30c76887f96bf031b94677b00e257b8c45b3243f3cd17776235acc7328",
      "fingerprint": "sha256:0a97a38ba76689c802300a15d34ecc3ad5fd26ec347ed34087a7dcf596970bab"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:8154387326fb3b27947fbe3801835d502989bd002d05fd1ec2598d19a3fe0146",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3e4849534719787a4deea854ec7fb4786a15dc151e63d8dbe97a1513cee50192",
    "rawResponseHash": "sha256:0946f29276e427521d7f7ea1fd0a60fd10da229246ff630b83eca343cf0257fc"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 6992,
      "endOffset": 7048,
      "startLine": 123,
      "endLine": 123,
      "statement": "| Evidence | Supporting evidence IDs and crop regions |",
      "sourceHash": "sha256:9f9bb87d1a007d391e3473a0a42cbb727f158f7fac782d4e90dcf680e10c4221",
      "fingerprint": "sha256:7f561aa22da62ee6d61226c69facec6caf263cdb350f114f8ec399a47b062772"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:776197e3a640dcb050a17312717ed75996af6decf90d041aaa8b50932104c626",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '| Evidence | Supporting evidence IDs and crop regions |' as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:00748410fef693d80476db92769712e18bdd81334df6aef5eec459688458a4e4",
    "rawResponseHash": "sha256:768785748a9d0d0d89cdd1a92cecb101de93457e446df42167bb895d7f5fd0ed"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7048,
      "endOffset": 7098,
      "startLine": 124,
      "endLine": 124,
      "statement": "| Shared shell | Shell variant used by the page |",
      "sourceHash": "sha256:7bb6da01221f45f1544ba1e4676249bacd45ce3f23e8cc25c5aa036a75fdd241",
      "fingerprint": "sha256:4a2e585125912aead5fdff4f18006cf16570d52dd2468cf8d33a4dc5cb32d068"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:554d2977594b0b4cb4ca9dc87e048a926d494a9fe9d7b6e44ff210f4f8123601",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification leaf about 'Shared shell' or 'Shell variant used by the page'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:41380a67e88e764dffc1eb8d371dd3ac5c3c58f68a5b213e4731c78014c74929",
    "rawResponseHash": "sha256:458b51560672d382a3424b00511847f56443b3885f369241a1451e0e1dffea32"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0017-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7098,
      "endOffset": 7149,
      "startLine": 125,
      "endLine": 125,
      "statement": "| Desktop | Availability and supporting evidence |",
      "sourceHash": "sha256:19a53f3fccc1376b3344f64dfa067fe162945a0adb2ca992a887844093c9dd7a",
      "fingerprint": "sha256:77dce301b0372e03f673a9872621077b2f47c6b5e23c84c1b32f7b31724214e3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:cf12dc55a6707640e76731272a58013141e2d44f6e5b977a38f91f52bb48a35a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b415af600b5a1afcc38cc99f734bbf3ef4928701d026af5e3786b133a432ddc3",
    "rawResponseHash": "sha256:1f2e13dadf8e0645ff5781cb0a0b53bbdd1b5bfc5f9e34997cc6c6c92620a8a0"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0018-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7149,
      "endOffset": 7199,
      "startLine": 126,
      "endLine": 126,
      "statement": "| Mobile | Availability and supporting evidence |",
      "sourceHash": "sha256:64ddc02834f10748cf5915f93ee37d442abb8039735da0fb9a52596a6aa4ae8b",
      "fingerprint": "sha256:8be4de4a9c6b47e0248e81c969936fa291fef577db281f78e01e0ceb4a9d70a4"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:259d9fdd5e955d4b987f5d37135a7b9de37f9857e22f9d2833a90529a27573f8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any information about Mobile availability or supporting evidence as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:59086964f9878c0e013f76397defab38b7120c1d5b3b24a5edc837618e46a00a",
    "rawResponseHash": "sha256:a89c667ae4948267203d39b305f9a1fab14b50781c048874994e1fb66a3fe7e3"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0019-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7199,
      "endOffset": 7245,
      "startLine": 127,
      "endLine": 127,
      "statement": "| Active navigation | Active item and state |",
      "sourceHash": "sha256:a811b8035d0d2956f9b165db97d3ec196dc3d777c15761292169c67a49a28af3",
      "fingerprint": "sha256:bbf4079d2c4a3c7011051d38411d4a470f5a1f74a244945ec489894fd707aa1d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:242acb6e24beec16e99b94ff7550b99b20995d5e12510ad19d1bf03862830275",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for active navigation or active item state beyond the table headers.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:08a53c280e3ded39ba9b6811e5691c9a0a4c501f4651430bca8dc4c20c8d2e26",
    "rawResponseHash": "sha256:26921f3bd707fcb2c654eb8aaf99ebf7f4b96e7414c7f4d6f004e5afb6d196eb"
  },
  {
    "leaf": {
      "requirementId": "S03-DOC-U0020-R001",
      "stage": "document",
      "sectionId": "S03",
      "sourceUnitId": "S03-U0020",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7245,
      "endOffset": 7309,
      "startLine": 128,
      "endLine": 128,
      "statement": "| Confidence | `HIGH`, `MEDIUM`, or `LOW` with evidence label |",
      "sourceHash": "sha256:f7d21d5236a40249f1a2783a85fc86297775c413b5897e6981e6d2bf9e0470cf",
      "fingerprint": "sha256:5c7f790926a3ad781c373c13fb0226e4daf1ebf81edc94c2f021b7b40828bb1c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S03:S03-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:f9bc63637bc8c713d24423093aca04ec40550b5d98343f161a5fe478f5ee0aca",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:75ba77065bd5910af096c073401c202b16c3ae22f04c60daf232bce487258f29",
    "rawResponseHash": "sha256:b2bc5dee20fe64dd5516cabeaef2a53c9cc4d95f724c150c386f323e7646a06f"
  }
]
```
<!-- END VERBATIM S03 -->

<!-- BEGIN VERBATIM S04 sha256:9d23de3d5243d76d5ddd0f7af95f78651ae58edcfe9b104bdfe93d9ec7f48210 14702 -->
# S04 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:3deaae63fdb2e2846814b051801f28256401ea76b42816f74be71f85eb75303b`
- Normalized output SHA-256: `sha256:908d1f45270688b546a669eedaa749f4345d077cc49ad4da2517ae06a9cb1c8d`
- Leaf records: `8`
- Leaf records SHA-256: `sha256:e7171e445c4bd8c8a8057e8fba1377274f5be1f6194fafcf591e7e33f7614891`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S04",
  "fingerprint": "sha256:3deaae63fdb2e2846814b051801f28256401ea76b42816f74be71f85eb75303b",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S04-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain an explicit statement specifying the viewport background color.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf 'Separate global primitives from page-specific composition.' is not represented in DESIGN_INDEX Section S04",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define shell variants or list the pages that use each variant.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement about recording global overflow or page-height behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 8,
    "passLeafCount": 4
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S04-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7343,
      "endOffset": 7374,
      "startLine": 132,
      "endLine": 132,
      "statement": "- Specify viewport background.",
      "sourceHash": "sha256:91d64748b381a5f1c5b4228857865f1ce61e8348cdd3ea62483f58b1fc2d81ef",
      "fingerprint": "sha256:9ea535437b187775f053dd165f45d6691f95959fc7789fd6aeb9365304021e25"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:381ac09aa39a514d051faffb9c3a1088a215faeda358f6ce1a8cae74c9374c3d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain an explicit statement specifying the viewport background color.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6192e1d2959290bb2bc41cce835a3a40f12408539a44657b92da50fb9a428789",
    "rawResponseHash": "sha256:d3a64d99551f4792c060490d3c497f59fc478827307f3f29fb09feac772812ec"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7374,
      "endOffset": 7419,
      "startLine": 133,
      "endLine": 133,
      "statement": "- Specify full-width and max-width behavior.",
      "sourceHash": "sha256:6bc55e5bf0b034fe7ecbc9cffb50fe295f7ed34aa79f2b1f9de210d467f4d18e",
      "fingerprint": "sha256:09896d2a02c479674286c12d964d9fdb895c91ce528e75ca20e4a3a597093946"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:af80d1b4e39699689c02aab956b9cd45541f27414f107ffece9c68bf6d37b667",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e52934a310e594ba9ccf9629578388866d2bc60d07d9875caf2db75929502ab6",
    "rawResponseHash": "sha256:0c7fed5cb19746551ad3018d7b8b7b64a9008cdc7aca153e394e57e07840fcc7"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7419,
      "endOffset": 7472,
      "startLine": 134,
      "endLine": 134,
      "statement": "- Define shared container widths and global gutters.",
      "sourceHash": "sha256:a2ba5f0aa75a3aae7fb92b327ef72b94a94203a591f50780f39cb50f8e836171",
      "fingerprint": "sha256:9ad29071b9ca66561091f92335c76b87caf88395a43ffe77fd4a69305a1474ad"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:16f05d16cf7627862b734795760eb296c4f0f081056ef97a19ac425f4002361e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4e2b1cecd56120336f5d5b5f6a5b1de8f45b8811d0565c356ec913c5eb4605b2",
    "rawResponseHash": "sha256:61777bcbc7764a50587f57d666068662523e472a17b1bcb68c4f8ef9a681b481"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7472,
      "endOffset": 7602,
      "startLine": 135,
      "endLine": 135,
      "statement": "- Define global page chrome, announcement bars, utility bars, overlays, cookie UI, floating controls, and scroll-to-top controls.",
      "sourceHash": "sha256:f8032ce6c9bf69368dc5e397ec876f3f8abcd8f7cbefe78094fb4b6f5d1fdd5c",
      "fingerprint": "sha256:c7efff5a3e622678a61675287c72048071855752cc75c14d031514e419891788"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:957a85bd6182be5149681874fbaf24bbd3762d6ad004b6fdb124bd4c51c116b6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:832b890cec55019030327c454fc7a9882689a9eeea27b4c4d7e01d198f9bad64",
    "rawResponseHash": "sha256:7fb538a23b095cdd2494f7d8259fb072e540a45c298b56207a82093e04762443"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7602,
      "endOffset": 7658,
      "startLine": 136,
      "endLine": 136,
      "statement": "- Define stacking contexts and shared `z-index` layers.",
      "sourceHash": "sha256:d06e50aeb7300cc286addcfb76bcc944e8bf35760caaa1664cabd7fe6dd2fa62",
      "fingerprint": "sha256:9b1a30acebb3aac58f846976337cba0c848a946208f22f78b85a7a0d55bd0677"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:d77bdb2aad0e34b0c2fa959b0519628a38525ce5a1e2e71deb2d9e78c40bc1d9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:06b9cb9dae7de2be76e81a073442cef0046f6142bf4c680301e89c80179d8a3f",
    "rawResponseHash": "sha256:c43a84825d9d3bc38f064d6fb778d9da76c6ca63650a9bf6db148bab3ff88d7e"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7658,
      "endOffset": 7719,
      "startLine": 137,
      "endLine": 137,
      "statement": "- Separate global primitives from page-specific composition.",
      "sourceHash": "sha256:26d9a16ff72d59448a7ae62c14292ad8b10ba29a0b1f9e07b4fcd1bd7e373ab7",
      "fingerprint": "sha256:ee38aec326506aa2a61993daf65bae5387d0a94c0c506db942d0edee1cdb37fc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:8699242fef81d1cfe037da0255228f30edae8503f73f8b428b2e3a2e63ef0dfa",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf 'Separate global primitives from page-specific composition.' is not represented in DESIGN_INDEX Section S04",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7021db520eadf6aafd989edccf056d279353c92ba97ab1d4875a0ebcb40db967",
    "rawResponseHash": "sha256:f29b6a72a5ce1c66551dc46a9aea24ab6128e43e4cbc1d0afe20a0dbe9336b1e"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7719,
      "endOffset": 7780,
      "startLine": 138,
      "endLine": 138,
      "statement": "- Define shell variants and the pages that use each variant.",
      "sourceHash": "sha256:39e822329e8061789014edd3eb0be5cd0706eeb02cb64ed472024b0c4311b838",
      "fingerprint": "sha256:34d23f4a952f2b2f2ddc3946dfd19edf3b7ef433df7bbe63e96b02d71142d9e8"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:4e08ef4dd43456fe7805d8d9accccabdac66c3a19eb591df1752ab9548184176",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define shell variants or list the pages that use each variant.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4608e77e7f7f176fd20b7b25b1fd7f72b68d008007fe4b4fd8d298f6e4ccb848",
    "rawResponseHash": "sha256:09c19882673031d7ebbd758cb1089e9f21f4f27f891e62192cdc8c57683d3c33"
  },
  {
    "leaf": {
      "requirementId": "S04-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S04",
      "sourceUnitId": "S04-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7780,
      "endOffset": 7831,
      "startLine": 139,
      "endLine": 139,
      "statement": "- Record global overflow and page-height behavior.",
      "sourceHash": "sha256:11f911cc75e4393aac2ab163e4de1cc76f07ee6ef096b9a4bae8fda590ce813c",
      "fingerprint": "sha256:9b33035e985703253b43b3ab21d945eae6cec16d313023799a449a0d7b4905db"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S04:S04-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:75b8c78e35529fd530f6945818572e75b57b2266c9eb83efbbef65c7c67b7f8b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement about recording global overflow or page-height behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c500b0792c1d0f42b7f4687982bb2dfe665919d33df468d617ffb6f6b4fb0dbf",
    "rawResponseHash": "sha256:931d13ff1374e62cd8fe68ad3b4b5220031683a99d761ac77971ac5e1d521460"
  }
]
```
<!-- END VERBATIM S04 -->

<!-- BEGIN VERBATIM S05 sha256:bfd263b6d17211741b25a08f61d092f49bc3da698862f402a21f1ed9d5707985 67809 -->
# S05 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:413757b15142410dac9466d4720f995267762d1a7c060f4844057c029a22fa25`
- Normalized output SHA-256: `sha256:d8ddefbf0a81572acf77f6a6d5f7e61da4043dbf22fa73252c6b25414b0d2ac5`
- Leaf records: `38`
- Leaf records SHA-256: `sha256:248ae7b236e068737dd4c2fd111bacf55ff86cf2ee4c7502c5ee57fa881df8b9`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S05",
  "fingerprint": "sha256:413757b15142410dac9466d4720f995267762d1a7c060f4844057c029a22fa25",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S05-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any exact values to provide for the requirement 'Provide exact values for:'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Content width or max-width' is not represented in DESIGN_INDEX Section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Logo `x`, `y`, width, and height",
      "evidenceRefs": [
        "E-D01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain the value for 'Menu start x' as specified in the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Item width or horizontal padding' is not addressed in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Item gap' is not found anywhere in the DESIGN_INDEX Section S05 content.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the Specification leaf '- Text baseline'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Icon size and bounds' is not represented in DESIGN_INDEX section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the Specification leaf '- Action-area width'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0021-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Background' is not addressed in DESIGN_INDEX Section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0022-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement about position mode for the header.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0023-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Sticky or fixed offset' not found in DESIGN_INDEX Section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0028-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any exact values as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0030-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The Specification leaf '- Bar height' is not represented in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0031-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Side padding'.",
      "evidenceRefs": [
        "sha256:c1c4b5e2f268d0635eb0144407c06629b3d3c93ffd5eb0c6c562b7114ab10f8a"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0033-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain any specification for 'Menu-control bounds'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0036-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Panel width and height'.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0038-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Nested-item indentation is not specified in the DESIGN_INDEX section.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0040-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification leaf '- Overlay color and opacity' is not represented in the DESIGN_INDEX section. No statement defines overlay color or opacity values.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0041-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain any content matching the atomic specification leaf '- Close behavior'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0042-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 contains no mention of body scroll locking in any state (e.g., menu-open, overlay active) despite the Specification leaf requiring it.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0049-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "For every state, specify exact text color, background, border, underline or indicator, opacity, transform, and timing.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0050-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not state whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 38,
    "passLeafCount": 15
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S05-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7876,
      "endOffset": 7939,
      "startLine": 143,
      "endLine": 143,
      "statement": "This section is mandatory even when the header appears simple.",
      "sourceHash": "sha256:cc7fd05c145b16b3faf08e98e3cb5537a443fc394fbd4479123416745299732b",
      "fingerprint": "sha256:219bb7f2c95c07c47fd5ca6a1e7226d6b7d69b00afa1c841b2d81c958a4b88d9"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:d26698b5f327fff87f1977a604ee127784d09a4b26401acb4b444f44e2551b87",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:15a3fc2d4ad450afebe523987e3bc9e15a33fb5635988e4acdecc6484fc2f0c4",
    "rawResponseHash": "sha256:ab74eb122328e70b0a5d4ffd43bf3a0634e2b2c404d7d872886eb4f7f44f0c62"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 7974,
      "endOffset": 8000,
      "startLine": 147,
      "endLine": 147,
      "statement": "Provide exact values for:",
      "sourceHash": "sha256:37387f4da7ddde96dcf9267d2a78f6ba0ab1d9ce089b586173ee4dc2d2136fea",
      "fingerprint": "sha256:66d7ba7c5bdebc02d79ab610839ad7651eaad6af5c14de582e744caff081224f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:c8169094f4149988b8be116bfd539ed804289c47f4254dec80fa6c7e89cf483f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any exact values to provide for the requirement 'Provide exact values for:'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f9982bec7ba441b2ace2ab4267b0a1bcc8b04af96b556bf9fd538d6ce76fd9cc",
    "rawResponseHash": "sha256:a8dda2b93a8a0e1317798d2b18654076ef3247035d96b20f9f0923c504c67824"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8001,
      "endOffset": 8023,
      "startLine": 149,
      "endLine": 149,
      "statement": "- Total header height",
      "sourceHash": "sha256:76d9bca7ecc0b063eb9665120720c7cf157766ff732b0b62dc4d8f58ba41b0c9",
      "fingerprint": "sha256:406de1196161442e0aaf6c3319f9793c6082df178b7212e9487ecacb02117daf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:1c7a470d4280b0df6a6de70b156d43e2404aba46e8065ecd6259e0680bb47bde",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:11c896fb864721fabbe6339d4e7c47617c820d98dec0492798be8ac33e25f814",
    "rawResponseHash": "sha256:2133b971d56b056194dcad3f3a050d0097612385a1852bb8508bae75a1331c97"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8023,
      "endOffset": 8044,
      "startLine": 150,
      "endLine": 150,
      "statement": "- Utility-bar height",
      "sourceHash": "sha256:429e2ef7d401059c28dc96d6cb9c95a241eee902c1ab4a004e8c126316c7fe59",
      "fingerprint": "sha256:927ed9bcf4a2972917aafbbddf5ab59f03bf58faf667ce55f55796ae09c3db94"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:a07ee5c860fda46fb7d4bbb8f5c74d4734fe59966561db2299350ff364fea46e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3719ffe59e8b0320ba07528a5f0ef8c6ca2cacfb14bbc8d7a25859f9f71ec5b9",
    "rawResponseHash": "sha256:cd52dc1a05ebe6f8c62bfc91a2985076b8bb982fb208a2d20363607930cc735d"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8044,
      "endOffset": 8073,
      "startLine": 151,
      "endLine": 151,
      "statement": "- Content width or max-width",
      "sourceHash": "sha256:c417bf970953f98d52bd5185557011599315055db88894391c534b2cdabed3dc",
      "fingerprint": "sha256:ca3d51d837a0a33bbe980de5e1de91f1f795467a6f0987815a10c9203c235b49"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:7e9bba880ed65c8b888b29c077750ff2b3722fdb60d0f62664add5172b738629",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Content width or max-width' is not represented in DESIGN_INDEX Section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c0ac4032b9b81220a9adba32f46c1747c7f5be9c3dcde6070a7a5ae766e85d24",
    "rawResponseHash": "sha256:337eccc8d60b3d0687e772a96362f02f760a18105be505eae4d564ce10fe7622"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8073,
      "endOffset": 8098,
      "startLine": 152,
      "endLine": 152,
      "statement": "- Left and right padding",
      "sourceHash": "sha256:f349c919aeb6a06d0e1ad8668db0798cebc1cc1d070142798da7752a15f3e9a0",
      "fingerprint": "sha256:0ec98602b37c9794e6a8ac1652c90e253d20e20f4c172fe59612ed295753f507"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:66e110cc88ffa2045a7ce4de11f31dd862d8c04e22dfbb0a0a06424204e1c89a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f8f0fa34bd039268862e85836d12fef69580a8ac4c251befc672bc2dd294e990",
    "rawResponseHash": "sha256:997e470b9f53b49b1dc51a737ad9bc38a19e44140594d3793289be1514109982"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8098,
      "endOffset": 8133,
      "startLine": 153,
      "endLine": 153,
      "statement": "- Logo `x`, `y`, width, and height",
      "sourceHash": "sha256:0e9bb1a643f87c79bdf076a654bb8113c22006b246233eb46f90869d55715e0b",
      "fingerprint": "sha256:8f4cea7f47294b1996a7ac081025ca1423d71fca3023d338cfe3a9797ba85f38"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:f39b13988bde813c0e91edcf7f73f5489778ca690a68f0fb45b56e2433fa34fd",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Logo `x`, `y`, width, and height",
          "evidenceRefs": [
            "E-D01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f17dd286a3eb9af2572ed275f3107ec740e33c341c2310cd0b950b72d68590fa",
    "rawResponseHash": "sha256:64da90db11cffc7e658ef20b3268a822a7160519f1bf089379221e2905ca3aa0"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8133,
      "endOffset": 8150,
      "startLine": 154,
      "endLine": 154,
      "statement": "- Menu start `x`",
      "sourceHash": "sha256:71c5ffe0534d68054be9800c79dd423888ac787a4dcb13ae808190ca05b8cc29",
      "fingerprint": "sha256:297f027a906b1a3292d579cd8eaf39619fb4bbc9650eb8395dd14f6ca95b3c38"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:5ff62631ac8d65ca2e7d7a5ad759254b0701444a01413914b1483b59d36f5c23",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain the value for 'Menu start x' as specified in the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fac13e4dfd76318d1f844ac32f9a34e586d93ed4a2b64c5784660b9128bd659c",
    "rawResponseHash": "sha256:68f9870671616119dd56ad8c8cd9a113a41423aea398fd863a4988bfc4eb306f"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8150,
      "endOffset": 8185,
      "startLine": 155,
      "endLine": 155,
      "statement": "- Item width or horizontal padding",
      "sourceHash": "sha256:0da338a4ad0acd1cc3ea121c06ab6c07012f2f391a802be804becd9c201b7016",
      "fingerprint": "sha256:8b8aee05e82b683d320e5edc6ab25d71c044578faf1d61e7b9ed2051b0465a73"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:2c21e7e879817ccba1b114e192224c5b3410f1ab8fa2840c77d0732a55ae74e3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Item width or horizontal padding' is not addressed in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:34aecd729004065f94a9d9977dea608004c4ed692304b961dd0593f98fc65d3f",
    "rawResponseHash": "sha256:8ae68c9acd857cebc5fa8491def047968a12139ed26db774778a723e9fa475be"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8185,
      "endOffset": 8196,
      "startLine": 156,
      "endLine": 156,
      "statement": "- Item gap",
      "sourceHash": "sha256:fc637722162fcb7697fdaba53a8900b120fab0cd5e2ac815c838e5583db60e32",
      "fingerprint": "sha256:bc681fa902dbd1390c9a15e48dd906abec8c3e86f2465b2219ed8140c51c6158"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:bcdc7ff3f2785d48a223ce7f242e6fd6d1e1b08e7fff5adaf81a50b124ce7011",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Item gap' is not found anywhere in the DESIGN_INDEX Section S05 content.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a26ebd71f6d678f1a24957ac904de7f2bc9856dabefa6df4ed59613ed3f19dc2",
    "rawResponseHash": "sha256:ce6ae52f1ed8faf29fccde690837c203ca4ea424294fd9b439c2953edc6799b8"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0017-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8196,
      "endOffset": 8212,
      "startLine": 157,
      "endLine": 157,
      "statement": "- Text baseline",
      "sourceHash": "sha256:40a05cd11e4ffb7899e4e6ecb5bbbbfd95ef3d40abbf1f2e7fed531a799ac256",
      "fingerprint": "sha256:f3dac9ae082190ed0660aec4472122d47fb369946f12dd46df2f3d4e32376f60"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:99794629c575bfd6435671e7939878dc6d7a9f7ad9b62d84f748fe48bb54820e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the Specification leaf '- Text baseline'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:aed5861f8579ee0dda763eefb7e6465e88fc81a72045e60a562cea43b9b90a6c",
    "rawResponseHash": "sha256:c3dd26fa9e3b638a17fd53b47ced068327c38633d5d93a24d0f10fd08ec772ed"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0018-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8212,
      "endOffset": 8235,
      "startLine": 158,
      "endLine": 158,
      "statement": "- Icon size and bounds",
      "sourceHash": "sha256:64fa8ae5a8046620ccd7fd3767629067d134b05b3f05955177a579112474d460",
      "fingerprint": "sha256:4a9f951fc2c935e4df4616926647f26f9c184ae1770190b130be7a4040b423e0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:5448cf80a88d7bbda89dee24929d7b20bcf3f09306c172ed9d1fb74c1acde5aa",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Icon size and bounds' is not represented in DESIGN_INDEX section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:005329f00db3580a94e7f1f4f8d4c740aac64bd445419b46849049ca65654ef5",
    "rawResponseHash": "sha256:e623d8a4f20e60b6b189e0f666a69e32efd3960f21ac5c92892df2db476330b9"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0019-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8235,
      "endOffset": 8255,
      "startLine": 159,
      "endLine": 159,
      "statement": "- Action-area width",
      "sourceHash": "sha256:b4c25197f037e9e41dd9f805b989a7cdd56723441218f92c44df0cf85c80c508",
      "fingerprint": "sha256:3560d5200674001dbe6be441f21f69c62703d9e74cc1341f8016cfa5016e40bb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:04564497a5828385a746d3515a4efce55bec87250c6c660f647ed0306ba158d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the Specification leaf '- Action-area width'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cf4c296a2c62b0543ab697fe3ee02b5e79c1ee4537d8b7ffc31e58d773cca23b",
    "rawResponseHash": "sha256:46ca3837ee01754cf48fed60f703dee3be3e5d2ee0ee41b797e315149ace185c"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0020-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0020",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8255,
      "endOffset": 8264,
      "startLine": 160,
      "endLine": 160,
      "statement": "- Border",
      "sourceHash": "sha256:e4b0a73a8c26624438a14c94523a06ed2cec9dcf006271325ac524566b917126",
      "fingerprint": "sha256:9a55019737a358e1745262c9fdd89bdd5392ad3e32cb42d55d4bb1f11fee92e6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:dcf46b38a838bf4b334ec9162ff82a979b3d66f14399de790b6ad9847be02499",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f575df220bcd3d582719dcf205b38e22699e49bd85a5749bc3e3b984351c8fdd",
    "rawResponseHash": "sha256:957939987bc5547bade62de677f2a942eda77fb3eba854ced562bbce692e7144"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0021-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0021",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8264,
      "endOffset": 8277,
      "startLine": 161,
      "endLine": 161,
      "statement": "- Background",
      "sourceHash": "sha256:36f639a015024e1b77d1cc9dd41763e04d2563b59a665a05f1aff511683b1420",
      "fingerprint": "sha256:5feca15c9838b6260b5ec5d997fc744a19c86c73c3a5386ab02d2ee29c44a3c1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:fb0c38a52f8eee7d186b7048fa0537ba5fd1e09c916e9f839cd6e75a85fd24a7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0021-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Background' is not addressed in DESIGN_INDEX Section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a1858820e6b748d5ec99817d83d2f7ba0821ee86afb32472348a2e6ef3ff4a8b",
    "rawResponseHash": "sha256:26a0d3828cb5c3efa9c9fb3afb990c9b2638242e706cdb14e8637e562943905d"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0022-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0022",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8277,
      "endOffset": 8293,
      "startLine": 162,
      "endLine": 162,
      "statement": "- Position mode",
      "sourceHash": "sha256:a349d6620aef759e7a2b005eb83e5ff78f9496f79bd029a87d79e679db279abb",
      "fingerprint": "sha256:3e1b9b374316153409f5a47620f6feba18a0e56e506a25b63f4b4891635a195d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:23ca8251faedcb2c17ed69b03602577f7d5a490b4922c676db610a5cb22d7ab4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0022-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement about position mode for the header.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f6a395faa2f0831f2364f2a299b5f3f77288d2c30857a881f9969cff68d9ee1b",
    "rawResponseHash": "sha256:ac714f2742e9dd6bd2a5135f79f38c5863683a36b04ada4739f07496e36861b8"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0023-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0023",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8293,
      "endOffset": 8318,
      "startLine": 163,
      "endLine": 163,
      "statement": "- Sticky or fixed offset",
      "sourceHash": "sha256:89feb1ac7ff8010e03b92142574961f8b36b4aa65c67458a090c3a716f1206ad",
      "fingerprint": "sha256:72f5e516eb9fd568d37c6dac3c0c3d02f3eea188ac7d37ec35b7d67df07ab018"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:6f4fce346987ac4ad4596340eac03c5b63a5a6e047f6ca2d32d8cb8f5e4b0038",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0023-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Sticky or fixed offset' not found in DESIGN_INDEX Section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:681d60859c55c4e8a34f4b880800b00f7686d350badab8607127392dac67e81d",
    "rawResponseHash": "sha256:0bc713a81df7dc3004a50ed29a07c964e429c100d64a49d67175cae6bfa3fdbd"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0024-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0024",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8318,
      "endOffset": 8330,
      "startLine": 164,
      "endLine": 164,
      "statement": "- `z-index`",
      "sourceHash": "sha256:33136a1bac987c64a53e64f6a4983bb2de70518e75dc88ad745f4a15d70f6300",
      "fingerprint": "sha256:562034de7bd9dbbdb87886512d02dec769da335cc44eed9b12cc77e9ffd92a4c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0024-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:194577fd8157abf4eab5e4f8fc12f4657f1843b97f91f9d1673581f0a958a427",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:059c7fd923c90daeaabd656342879dd5028bed2e12684d07451b71fec2777fc3",
    "rawResponseHash": "sha256:900b8014b05c94b96b6230697d8b8b53de67146d0797e118af9f9d3f8d775e44"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0028-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0028",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8364,
      "endOffset": 8390,
      "startLine": 168,
      "endLine": 168,
      "statement": "Provide exact values for:",
      "sourceHash": "sha256:37387f4da7ddde96dcf9267d2a78f6ba0ab1d9ce089b586173ee4dc2d2136fea",
      "fingerprint": "sha256:3d6e69559a1eadb85b1f7a80cfb47333c355989c3afde8759cc5b7f30e8f5c1f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0028-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:5cc4f77ec86563e664cd3ddfbef341fb792ff70c88be3148f06fa34d181d5892",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0028-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any exact values as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a51c2ff61c458c421a3a0f7d6d833b1f6ae495f45f463e98ccb3a86e8de36984",
    "rawResponseHash": "sha256:3841d3981bd30e74806c291a69a88f2b1c8897d4ff06b242979335ff1adde1fe"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0030-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0030",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8391,
      "endOffset": 8404,
      "startLine": 170,
      "endLine": 170,
      "statement": "- Bar height",
      "sourceHash": "sha256:5763a6c34065503fde39bee987126f0b4c565c660f484647ecc3a75468223881",
      "fingerprint": "sha256:23d56f6ec7f134dc9ba74410ec6e915af41d133c3e12c2e51f5a33484ad589f2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0030-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0030-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:f2c7c73e454ce65036ed1a1a3670d682f2faf04cdd633e8983ebea4dd429990e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0030-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The Specification leaf '- Bar height' is not represented in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e0044512ac62ce6f545d178d8d0496a969b832f3e896d0259486de4f52930812",
    "rawResponseHash": "sha256:f7f720a85512d94b8f065b47191fb1fdc77a688b55f811fc983e42e2dd736395"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0031-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0031",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8404,
      "endOffset": 8419,
      "startLine": 171,
      "endLine": 171,
      "statement": "- Side padding",
      "sourceHash": "sha256:a527e87ba4c13eacbce9741736e26982498dc754ca8fb1c538d26d04187496fe",
      "fingerprint": "sha256:144a0eb34d3e1f6734a680bb8ccbe8e232bff94547c5bd435d85a402828a1347"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0031-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0031-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:8090beb97e5339dbdff20920f30242ed4e3ff70f2def534cd6231ee2de95f11a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0031-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Side padding'.",
          "evidenceRefs": [
            "sha256:c1c4b5e2f268d0635eb0144407c06629b3d3c93ffd5eb0c6c562b7114ab10f8a"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:da873e7e1ea11ddcaf3a8800c6b440794fb36af197fb0bdb3a8800014aa83a9b",
    "rawResponseHash": "sha256:238b6efabc9f47923d88059d730b7720b08068f8e1f4a1ddbde7b9dc91695a7c"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0032-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0032",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8419,
      "endOffset": 8433,
      "startLine": 172,
      "endLine": 172,
      "statement": "- Logo bounds",
      "sourceHash": "sha256:cfcbe7e042847ecadbf455b2698a4e768ea96ccbacffaf179821e9ee85247f8a",
      "fingerprint": "sha256:d65dd21e7d00e048658c079101e191e251db77a6f5e6755fff6f6e16ad8d543d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0032-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0032-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:0b26a2eb8f3213a33bca84fbb428cbabc87c4d9db78b30d8e042eafd09c7cfe7",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8596a579dcfca98235b9ee3581c4fedbc806257378fce9e5c51463e79cb33448",
    "rawResponseHash": "sha256:714908734c9e7772b3ccfba9df825b0b5da47321dec6a12112c2731db3d7e181"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0033-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0033",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8433,
      "endOffset": 8455,
      "startLine": 173,
      "endLine": 173,
      "statement": "- Menu-control bounds",
      "sourceHash": "sha256:4cbcd513a0769e5cfdd2be1591fbc189feebead3182c720cf5bf023fa874233f",
      "fingerprint": "sha256:baa8a1cf5041640f2549bc242ab730b04d63c693a61922d59469fd590043c47d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0033-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:620f390bae7eafa11f7d1f4757beaa213d6a99d62f35d7bdabad6dce99c0f9d3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0033-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain any specification for 'Menu-control bounds'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1bd3e3a36851e18e7dd6c2a83ff51c6fadc4e503a65eace4370333b41d59c986",
    "rawResponseHash": "sha256:8f03b529f7fa28dec4a6f8a76e116fd8fa799f35d19bb0283328df4d7308b0c9"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0034-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0034",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8455,
      "endOffset": 8478,
      "startLine": 174,
      "endLine": 174,
      "statement": "- Minimum touch target",
      "sourceHash": "sha256:ac30b16ee3e1bf04fb22fa7f9f5896e505ed555bfeb8a316c1d52225ea30d0f2",
      "fingerprint": "sha256:e7c0355194eb25559f79be5705b2c884997f529be3df34a8cdf780f243017933"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0034-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0034-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:0b4cd7c52a3cd84f1c210a4ebded78a425d2361b778613d62752c69ba0f19d13",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0a47f2547180fd89c678c43ab3bc9c6e29dabc4a2afe0b1ee2282c7b59381505",
    "rawResponseHash": "sha256:e65a84ced8baa3da6ffba39193f402b9ed0eb280d340f15db3ea5cdcd3487583"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0035-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0035",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8478,
      "endOffset": 8498,
      "startLine": 175,
      "endLine": 175,
      "statement": "- Open-panel origin",
      "sourceHash": "sha256:a70f3a331c4dee366f67b513939b167a57422276d62b08a1e4d4de7f047327ca",
      "fingerprint": "sha256:3e4ece92cd46636f4dd6d92fcd70b2b86a8426e2aaf60ad08245f5d4ec371461"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0035-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0035-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:85e4edc417b54e55d0759b7351682eb3f6432ab44aef86017a77ab74994b4040",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d3b28ed6cae20b7384d569bf4530b518a7a2232039cf91aba6822646af4f2574",
    "rawResponseHash": "sha256:d27ca6f4d93f95de06ea42f1abd1735a380a667163d2542017a5f5e9d21093d7"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0036-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0036",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8498,
      "endOffset": 8523,
      "startLine": 176,
      "endLine": 176,
      "statement": "- Panel width and height",
      "sourceHash": "sha256:50441b417313dd387bd0d84cde3a641199ae30680d6765b4add1798447566919",
      "fingerprint": "sha256:6c02f96c6821befcb81a0c06b6db8359db6ce4cd10ddb5041d493a0c77a06723"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0036-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:7be48dd958ba697b6b43fab49914c5a91c2b14da86afb4404d7dba08cd4323eb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0036-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Panel width and height'.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:79d1df87b9547ae35e41c8a513d43627694738786d60a6a361eb75de3a370813",
    "rawResponseHash": "sha256:48cae10f89bb2d8cad55418f8450b2665425ca16b8522af709bcfb807d66f938"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0037-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0037",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8523,
      "endOffset": 8536,
      "startLine": 177,
      "endLine": 177,
      "statement": "- Row height",
      "sourceHash": "sha256:c5e6e6fee3648fdd997b984420255d35ea2da575b0b8c8ec328355c8f6d41e64",
      "fingerprint": "sha256:b6c0475e2015e5946ac5afb875981fdedc56c0009df8ece6d30a294ba8a60674"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0037-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0037-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:55a0e65dfeb4e8fe5ead3ed349c88c5fc0c59480150793d4c25f6cdda1dd0279",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5533852ff4c80b1cf98e554f591293ada1d852823071c7762b1ba5bb0f4e229f",
    "rawResponseHash": "sha256:63a9616ef0ce63ccb04311ac4a6d9c9b18f07d39261ebbce11839611a31f02b0"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0038-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0038",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8536,
      "endOffset": 8562,
      "startLine": 178,
      "endLine": 178,
      "statement": "- Nested-item indentation",
      "sourceHash": "sha256:981a0501513739f3d78150cfb838dce8c71b8d8b2dc00444cac295c0aefb0250",
      "fingerprint": "sha256:9d7eb1d062181cb37b6732658c10b28871dc5ea4366908e070431130efe5e83b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0038-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0038-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:768081ba627814aa77f4f4986e6a92311cf958e291bbec90e1d6ee13b9e94911",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0038-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Nested-item indentation is not specified in the DESIGN_INDEX section.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:889dcd6fd92191ac442059fed91aeec142a61aeff5fa72a7cbe9229f66d3a675",
    "rawResponseHash": "sha256:4f1966c4429ed2c48454de8c3fb380f4dd1b7de79db3d5efdaf129bdd949147a"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0039-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0039",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8562,
      "endOffset": 8572,
      "startLine": 179,
      "endLine": 179,
      "statement": "- Divider",
      "sourceHash": "sha256:b45787fd0cbeac2df2b95d7d2784e14da66f5e8ae7be1f2e9d2a45f74bc9b196",
      "fingerprint": "sha256:ee25fccfd28651332c7a39deb6c2a078f2ac371de54861fa5ede70b3d0181ebb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0039-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0039-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:f0ac56e45d2da802bc725635c02508751f12a6b53cc0b956ae4a8d1a99d88220",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:779054eb5094b5de6d0deb993c69fc999a0ee06d4707252088e723ceab773883",
    "rawResponseHash": "sha256:d5b2da6f085fc0f5a3e6530c77c0437eb235fd313397895831ee3f673ea22481"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0040-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0040",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8572,
      "endOffset": 8600,
      "startLine": 180,
      "endLine": 180,
      "statement": "- Overlay color and opacity",
      "sourceHash": "sha256:400bff5bb7206b2abfedb6b19ec5b5565a293b89b542fe265367f84b19768334",
      "fingerprint": "sha256:de6919b72099376a0fdc118e23361cdf8971f933a05e4d9ee091419a22a7315d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0040-R001:retry:2",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0040-R001",
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0040-R001:retry:2"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:741908858fc18f3dfceb916638291fc177ce15802741b799d4ca984c9e6e15b0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0040-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification leaf '- Overlay color and opacity' is not represented in the DESIGN_INDEX section. No statement defines overlay color or opacity values.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ca1def9d7d4e88ba138b852147ef6d78f31c02ada52b272f942c45818032236b",
    "rawResponseHash": "sha256:bcc27f819bb94ff3141b759df9015ebb8c7996693d3288029a2354ec2ba50ef0"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0041-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0041",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8600,
      "endOffset": 8617,
      "startLine": 181,
      "endLine": 181,
      "statement": "- Close behavior",
      "sourceHash": "sha256:3985341404c66a2e70857e72f624a565e0d270de80af2b9096e260ccfeecc562",
      "fingerprint": "sha256:c84b2cca546c0423c42a034ad8061b315efc01a113f81e9361a47a8b7ddc8657"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0041-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0041-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:da74862637e3b880f401831b4d0b95d7624a87ed04a35f3e075a205ff8239ef6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0041-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain any content matching the atomic specification leaf '- Close behavior'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:75ca43e3c22b3f1ad95b0770aa9a7e5e739b5788d3e4a6cf580035c6c2dafd5c",
    "rawResponseHash": "sha256:5f9d41e576700b2ac4831029084e9f46c2b7300001f8b20ec62a63d7a153aa9c"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0042-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0042",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8617,
      "endOffset": 8639,
      "startLine": 182,
      "endLine": 182,
      "statement": "- Body scroll locking",
      "sourceHash": "sha256:d84b44f443a1d0c1cff5a4ff3cce2d01587c49ee0d76396aac07e2a230419141",
      "fingerprint": "sha256:29a16cf8696c67869a9c82fc828c2cda08db206fd62ce89fad7e9b8ea50cba46"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0042-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0042-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:0c066f0ea68e9b4d75c2d06c2a117eb1a0787f1353b35a5e46d0845a91f34d56",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0042-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 contains no mention of body scroll locking in any state (e.g., menu-open, overlay active) despite the Specification leaf requiring it.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ae16a13931385aa6a582caf87a09ac1fc517929c09895273f9b300c724938ee7",
    "rawResponseHash": "sha256:b374fb05afec825441f9ebae820ac2cf7fac4ec03881f86b8b28f8f0ae8abe8c"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0046-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0046",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8676,
      "endOffset": 8729,
      "startLine": 186,
      "endLine": 186,
      "statement": "- List every visible navigation item in exact order.",
      "sourceHash": "sha256:4bf473c537a7f67ee5a0ebee853b163c96eed9ed601a7462e5a7e65df65998e6",
      "fingerprint": "sha256:173033cb81dd5ba173c9e7b3a80f6c8222572e8f2f2bebf2e81c31e8a686a8f2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0046-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0046-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:7af355f2e3a895066fd46f347ff7c36952089b82902886a439efc5ebc0a70686",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:97fb27f189980473ad8a06351de0f2aed8c557082263e4bc2526fba313ea1f88",
    "rawResponseHash": "sha256:a58e7954690179e6d249da0171f4cbb5e44e957abb149c515aabbcbf0052c4c8"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0047-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0047",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8729,
      "endOffset": 8789,
      "startLine": 187,
      "endLine": 187,
      "statement": "- Map each item to a route or an explicit `UNKNOWN` target.",
      "sourceHash": "sha256:486325ecfac870a00923013fa221f2c5d65eedb09939dc947d2e90e7b45a1f40",
      "fingerprint": "sha256:87b2f63928628b42ef11cf7c405927a0f1be3b0172e0a1223e12597eef1c9e39"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0047-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0047-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:8d298d80ab57dcee3cf137158381f821956eb01762096f337f0afdd2a3513cda",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a98b1248952e0b5bc3a2092681741a286e52c0fb838c2f87aa02514178667a39",
    "rawResponseHash": "sha256:e892907310daf500d9e75e7ead9d690e76edd63d8cd9e95459aec4761d7be33c"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0048-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0048",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8789,
      "endOffset": 8920,
      "startLine": 188,
      "endLine": 188,
      "statement": "- Define `default`, `hover`, `focus-visible`, `pressed`, `active`, `disabled`, `scrolled`, `menu-open`, and `submenu-open` states.",
      "sourceHash": "sha256:ccd1605e0a950a59da72b1d0415d4a7b8ebd13a2edf3c0001d6c29413b30b244",
      "fingerprint": "sha256:f9c1a997c377385f8c4b69fd2921d6d8f1bb57d9e1b6756a245344b2360ef992"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0048-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0048-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:71eddf72baac91291232da84e2a879c5e2740c057c0508bcc6eaef4c16c80424",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:877ce70888094184b9e74980b81158b3e4ca674dd62d70476c985f12d97ccabf",
    "rawResponseHash": "sha256:8e3093bb0ab4112d058316463c0840bb9aa2776410c26475502f9f04be18e693"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0049-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0049",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 8920,
      "endOffset": 9041,
      "startLine": 189,
      "endLine": 189,
      "statement": "- For every state, specify exact text color, background, border, underline or indicator, opacity, transform, and timing.",
      "sourceHash": "sha256:b2313e53ce1c26e1eaa991064a47ceb3edf0630f81b3094a368c917bf49649cf",
      "fingerprint": "sha256:9bf8353ecf1c6290b9285dffa6c3d13f801e131df0c296655994f3c2dc515516"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0049-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0049-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:5474ec8bb4f2d7c0e4153d0b63423ba70963a303d01d57de1f634a38a039c29a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0049-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "For every state, specify exact text color, background, border, underline or indicator, opacity, transform, and timing.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c30372dd8357f9fa0a1b94ee03ca7790108098fae97bcc4db3a6cf0bc67850e0",
    "rawResponseHash": "sha256:56c97c1aaadd3880f7932c506c949ac1fa3a4371474af6b2213a8690ba0078f2"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0050-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0050",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9041,
      "endOffset": 9153,
      "startLine": 190,
      "endLine": 190,
      "statement": "- State whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.",
      "sourceHash": "sha256:0a40d67df773c185c110db12cd1ee5dd2cd9321918bd7848062d372513629a46",
      "fingerprint": "sha256:c703b8bd05c5cedb4ccdfeeb8e3438c8a2a2cff3512786020f8f63e849196053"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0050-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0050-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:799b798c4eabf090431d4992cfda2e972e37669d34bb5d7395600451663a67d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0050-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not state whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ed717f3eec5c64f5d93392683711df893e0382e0d51bae78af3ab4f20583eb75",
    "rawResponseHash": "sha256:8eb74d93aa5ed2a3400e581bf8be4a2ac9f5a848b9aa5ea06063c664ef5ecaf3"
  },
  {
    "leaf": {
      "requirementId": "S05-DOC-U0051-R001",
      "stage": "document",
      "sectionId": "S05",
      "sourceUnitId": "S05-U0051",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9153,
      "endOffset": 9221,
      "startLine": 191,
      "endLine": 191,
      "statement": "- Mark screenshot-invisible transitions as `INFERRED` or `UNKNOWN`.",
      "sourceHash": "sha256:97cfddf86dfaf0de2b1eb78dd511575a175e6e36c819ddf7808da54ce5304d07",
      "fingerprint": "sha256:c9df11c2cd217182820f8cd27e4e9821dfdd5b3a04036b981a39d836216c2b6a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0051-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S05:S05-DOC-U0051-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:9f2ba37029f594cb63d4238354f67b8eb79f9ec8e51b8b84f60c575b3785a0ab",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:406ac02d8131054b0800d9b6d685bf5fe0d3f6c560cccef6b47029dbdf702101",
    "rawResponseHash": "sha256:59b9fe9e6fb377f53491e87638a3020aee97082d1f9f5338045f9570b93b9f66"
  }
]
```
<!-- END VERBATIM S05 -->

<!-- BEGIN VERBATIM S06 sha256:8b18e03aefe1b4f06d7f06bb0e0ebed982f7253b0cace7e65f7aa170fd98e429 38691 -->
# S06 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:1aae4ea3155c4d674d12733cfc5485c4e19263d44373f4b74163d2ef2c3930c6`
- Normalized output SHA-256: `sha256:d5527507a28231b52883d587d74162a2d01b77909500be931ac1e0719bceacfe`
- Leaf records: `22`
- Leaf records SHA-256: `sha256:c5ff4fad60e493dfb67e13394adc5c20de6736bb1061209057b150093e3a1613`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S06",
  "fingerprint": "sha256:1aae4ea3155c4d674d12733cfc5485c4e19263d44373f4b74163d2ef2c3930c6",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S06-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX section does not specify what every page subsection must include.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX section S06 does not specify what the ordered section-geometry table must contain; the requirement statement is incomplete.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a table with column headers 'Field' and 'Required value' as specified in the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification leaf '| Evidence | Image ID and `x/y` region |' is not represented in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0022-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf requires 'Container | Full bleed or max-width, including exact width and gutters' but no equivalent statement exists in DESIGN_INDEX Section S06.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0024-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement about spacing (outer margin, section padding, child gap, row gap, or column gap).",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0025-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any specification for alignment, main axis, cross axis, text alignment, or baseline behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0026-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement specifying exact color, gradient, image, border, radius, shadow, or opacity for surfaces.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0027-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a specification leaf matching the statement '| Content | Visible text roles, controls, media, and repeated-item count |'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0028-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX contains no specification for responsive desktop-to-mobile transformation or breakpoint behavior. The leaf requirement for responsive transformation details is absent.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 22,
    "passLeafCount": 12
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S06-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9258,
      "endOffset": 9400,
      "startLine": 195,
      "endLine": 195,
      "statement": "Create one `Page P-XX: <name>` subsection for every page in the route inventory. Never replace page subsections with one global section list.",
      "sourceHash": "sha256:80c58485f51ced951fa1f3bb41c0879eea68e726e9d3774f077fbe98228fd4b9",
      "fingerprint": "sha256:e8c04960b32c026c2d58e40cade76e2d457f81c0360a5e4ab707184539825085"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:622c6cc38c17c3ac1ab1f8f3dfe839c579c1069c33605d0c70b97715199fa498",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a32e5d6a4dbb0806d914ec1a9fb93977b9e35d9bb953b5951ed55ec4caea121b",
    "rawResponseHash": "sha256:3f629de98e5185fceecd4cf76ba587ffc554ca4ead599280fed25cd4a06fc62a"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9401,
      "endOffset": 9437,
      "startLine": 197,
      "endLine": 197,
      "statement": "Every page subsection must include:",
      "sourceHash": "sha256:fef7af939cf729dea599f8604983a08ed2d407a25e2bf66fe15856473731e24e",
      "fingerprint": "sha256:ea04a47df3b6b7fc00189b03af14d31366e562b7e85e83bf3f888deb24882f96"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:0fa818d03971802bb39e39fd2b2cd19b3b8ed98f8e2583f354f192d6a44009d8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX section does not specify what every page subsection must include.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c009984ac92857b26f6704ec3ba63995ef7a6cd0958f75068116b6e3d7df66b9",
    "rawResponseHash": "sha256:3f871edb804c15790dc144b60b05e57767c819aedce41fda8138969ee101da29"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9438,
      "endOffset": 9543,
      "startLine": 199,
      "endLine": 199,
      "statement": "1. Route, purpose, entry points, shared-shell variant, active navigation state, and supporting evidence.",
      "sourceHash": "sha256:4563c830dee4ccbc04762c53f9a6047089c2a3b6dcaac577aa27c078d54e2920",
      "fingerprint": "sha256:eaf4f7a0b62bde5ace20c73895de9bf3820a8ad16ae3092b138fcb2b79072c4b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:26373681c5aef29e44c7231fd48021779727bb2b86309f8fec8e4e3f8245be66",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:24be7b3250e5f26f2dbc975527b274483b8ca80b6f959b2049a54388c7285ad1",
    "rawResponseHash": "sha256:25826df27ed13461f87d3e29c1efdefecba9aafdf117b639e9a72034e08b57ca"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9543,
      "endOffset": 9664,
      "startLine": 200,
      "endLine": 200,
      "statement": "2. Desktop canvas model: reference viewport, full page height, content max-width, gutters, columns, and page background.",
      "sourceHash": "sha256:a1b371cc5a02db26b321a076ca88cc721ad880b2a587178f21720215440c1fe5",
      "fingerprint": "sha256:122706bc13f2512ccad53ebdb85820674feb68b9a1134269e7f56367358b3dc3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:9f9bde709e3e7a417553c79e22114d6d5501b299edcf98ce2a103fd2bd58c009",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:376b8dc1786e80e3d1f2cdc44a9f0f2a7aec595e27d68ab34e69ccdc855b5eb3",
    "rawResponseHash": "sha256:154bc8ca6d25238ca2857ce2149f72ef87e515979b1352e2c1d46b139ec71c1b"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9664,
      "endOffset": 9792,
      "startLine": 201,
      "endLine": 201,
      "statement": "3. Mobile canvas model: reference viewport, full page height when visible, side padding, stacking order, and overflow behavior.",
      "sourceHash": "sha256:c9ff5d97a36a680ebd55a49a5d07052e1a08e1894e4ec1634a79d06b4e2da68a",
      "fingerprint": "sha256:e91333fadb95ee221df15549ecd64f01b89100e50fd1fe6b1d1cd09d8b1ad136"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:fbeca3a25c015a8cfc1c849c286e8e8f225537ff6a60b0b833a6fd8792340228",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fb77a52e3859a6373f7c3c37a25884c79a1c23d0767ea39847229a9cc6ad91ab",
    "rawResponseHash": "sha256:29087b4123760c16835d345592ffd4ef2f43987b8cf5db168f30dad04b055854"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9792,
      "endOffset": 9852,
      "startLine": 202,
      "endLine": 202,
      "statement": "4. An ordered section-geometry table from header to footer.",
      "sourceHash": "sha256:43370c158a7b1430c54cb764dad35ab26f1e3f979068799a830e5ee2c8039815",
      "fingerprint": "sha256:20380e8180f84aec34bc156537064fb4916255799de778c9d61442f6646fefe3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:700857e9b5b993fa548f95db7967b8a48bd9e0ba98bed09b7917fe8dea94341d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d3c9bdbe74ea931314d07fd2f0a5c8d6cd924372c4db241cb2a6df0d33c88456",
    "rawResponseHash": "sha256:b5e0c1de160fafd16946172ebafbb7f3d3ee200b06e7be26b9ae5c5de42a0290"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9852,
      "endOffset": 9925,
      "startLine": 203,
      "endLine": 203,
      "statement": "5. A detailed section specification for every row in the geometry table.",
      "sourceHash": "sha256:7895ef5369be18277b9a118ecdacc6d7f8a0a3b8aab28ccc8fadae6c49baa401",
      "fingerprint": "sha256:5006396b1a606a6c1ed368eddf1a0e889423b7b576637da30e78492e23ed3472"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:2b203476787e2f256dbf016857b1bc0613c0378195decc7a6b71de9502657285",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3770fdcd0eaced28f261f1f23e371ec1f2e306dbda605849c489d1165f538b94",
    "rawResponseHash": "sha256:75912decedd2214b9c2f4b802321629d68d8e2f7c1aabfaf446f72e9e8dda8e7"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 9925,
      "endOffset": 10052,
      "startLine": 204,
      "endLine": 204,
      "statement": "6. Page-specific components, data, states, interactions, responsive transitions, accessibility, assets, and acceptance checks.",
      "sourceHash": "sha256:894ddfc1f2b26936086648ccb1becac89033632e4fd7d13309b65f22943173d7",
      "fingerprint": "sha256:b501c9a430fd07c304c322481606403ded0a46babc3428c2bbc6c77b1103a8bf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:b21a2499908decd13f7bbcfddb4a859c5dcb2cf729cb7a6eeeb07da42dfbd2b9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:20a9337895d45902441b9da0721b2280167a26719f965b1e23184cb2e686bc97",
    "rawResponseHash": "sha256:191c5909051a8d908db2b24f5f2acdda060db3fd858972d5eaa25d8e6b3ff5f3"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10053,
      "endOffset": 10111,
      "startLine": 206,
      "endLine": 206,
      "statement": "Every page's ordered section-geometry table must contain:",
      "sourceHash": "sha256:952b6c858576b1d53dec4a601940c91de09b95b8e4db070a905201243baf50b8",
      "fingerprint": "sha256:643f847fcd0311620a56207ef5859a18c8845a55c293f9a7a4e4299ab6336fd0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:31eef450241266d7eb14b39038370cf3d3c1298d519e899a5f5dc52caa428643",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX section S06 does not specify what the ordered section-geometry table must contain; the requirement statement is incomplete.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f859d87abefe63fc58d8ba7184879ae73794cc49da7e004a264a1a05548cab4c",
    "rawResponseHash": "sha256:e4fa222a31ac5f5253bffa744ce6a8363b92dea93b110158e7c5a199778dde9b"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10112,
      "endOffset": 10139,
      "startLine": 208,
      "endLine": 208,
      "statement": "| Field | Required value |",
      "sourceHash": "sha256:ae003fd1eed1866e954d9e8a5ef354abd4956b2e3b7c1fb8d3ac415f30cfe1a5",
      "fingerprint": "sha256:69ae3e7d0719fc65b3f02a0a4a5be58564ae4c5e82f00ab7bd96bdc514acac3c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:3d2760662a4691c2179e006addc783ade26f3656073c55aad13ba1f2d37b16b5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a table with column headers 'Field' and 'Required value' as specified in the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c54a35f73eecd0cc6d5d4dcb2db985ca6fa1f28d1d73a49f6656c2563716a153",
    "rawResponseHash": "sha256:87cdf8182c7d03803aa36acf8a054b8219d590df5d64610792e98c400f394f39"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0018-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10153,
      "endOffset": 10210,
      "startLine": 210,
      "endLine": 210,
      "statement": "| Section ID | Stable page-scoped ID such as `P01-S03` |",
      "sourceHash": "sha256:924b18973bed29192fff7b55dc6a46fd43f02381acd8b7b40bd34900c2949037",
      "fingerprint": "sha256:25d2455da9c1f15e861e445264fb6ff416b50c9c00b90cb437bef1fcb74ea1f2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:04da914f95c32edf72034b68b46be794983bc2dc4314f5f5123d31b3536b9ab0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6e79f8d8ff6e1c8854bdf03fe3b546aeffa7495791c132b16fd7d58a1078d4d3",
    "rawResponseHash": "sha256:34cc0af618db5ba05a06ace2394c66b2d0a4ee9d64d9770fead634c9e0f6ced9"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0019-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10210,
      "endOffset": 10251,
      "startLine": 211,
      "endLine": 211,
      "statement": "| Evidence | Image ID and `x/y` region |",
      "sourceHash": "sha256:d78b1d55cb49cc66194dd735f09508e4c93de5271cc2551a639bc7431c8f833c",
      "fingerprint": "sha256:37ed17c09096002bee5d21502a95c8e4d649f79d450e82197809173415e5bcf5"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:2881bc16a66254e56b5d9c7150223a0b0f7e8dd5d6950b1fc00419c4d6e06981",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification leaf '| Evidence | Image ID and `x/y` region |' is not represented in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:66c38d9825d697045d144ff06fbb1119d5f94ba0cc25423da4b30a84a1607696",
    "rawResponseHash": "sha256:589535420ce72cb51a7481a450b1e37dbb62499b3c5d7092fbd580850b9e524f"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0020-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0020",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10251,
      "endOffset": 10311,
      "startLine": 212,
      "endLine": 212,
      "statement": "| Bounds | `x`, `y`, width, and height in evidence pixels |",
      "sourceHash": "sha256:20c3c4216c7692d76231b66778b45db10db16dbc38cbb50aa4fc2c75c8ccdbca",
      "fingerprint": "sha256:918f2834b535f2763cd344585dcce0691acd1d3c6be4c3c3362d743b9deb3b08"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:a231305ea4608bf26052511df57edb34d01da37447c7cd50afc681202de024a5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:21132b029ec964a66cd179d301254ba80cf924063df72ae2061a225e4646537d",
    "rawResponseHash": "sha256:b00d764c3d67b273d9a93d9b38ca7a6c9974bbe15eb4e2890693fc38ad7fbcf5"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0021-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0021",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10311,
      "endOffset": 10409,
      "startLine": 213,
      "endLine": 213,
      "statement": "| Semantic role | `header`, `hero`, `nav`, `main`, `section`, `aside`, `footer`, `dialog`, etc. |",
      "sourceHash": "sha256:7b1e1b9c09f517337819a518fe18acc0b40de5ea01f73e81ff04c64e358c732e",
      "fingerprint": "sha256:01ab737d6c952a227d1783fbb09ee35ea0aec2992382af93063819659247952e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:fe6ce6d35f6702aacb9aceb9389bb270a0ee04bb984496c8c56a951cd61d69ab",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ebd37004fabd29d1e1a2e8086fb66e1a58fc8502621f82982076f52c33a1062f",
    "rawResponseHash": "sha256:badde8bf543d158fb2825469ae223abfca4252a02fc025de98f124897cd7d314"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0022-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0022",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10409,
      "endOffset": 10484,
      "startLine": 214,
      "endLine": 214,
      "statement": "| Container | Full bleed or max-width, including exact width and gutters |",
      "sourceHash": "sha256:50deb636832d71f14c09dc72f963d2626b6aa4e2a4b2253996a3a74275afd186",
      "fingerprint": "sha256:ca94bddff6a0647dfb7bcfc98a429e25af281a63ef30537008a8120d52e7ab3d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:3d7adeee80beef51da8ed5871bf7ddbca3632eac5e2b4adf9aad85cbeed60cce",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0022-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf requires 'Container | Full bleed or max-width, including exact width and gutters' but no equivalent statement exists in DESIGN_INDEX Section S06.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8f60b48021810799abbc3696b3e28f7cf37414056e7eeeacccbd23228143cd82",
    "rawResponseHash": "sha256:9d6d24ed69776a052b7a568a6f52bceccf037d5e106eef5f7f27d51129ee0e08"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0023-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0023",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10484,
      "endOffset": 10585,
      "startLine": 215,
      "endLine": 215,
      "statement": "| Layout | `block`, `flex`, `grid`, `absolute`, `sticky`, or `fixed`, including columns and tracks |",
      "sourceHash": "sha256:e0658a1865237c31e26c409b4ed8020582a048cb464b59b6b097d2baba7c1c00",
      "fingerprint": "sha256:ad1350cc6db96c3ba2a30294d16790e727f6887f20c0ddb334ef3df75952df7a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:0b98dc812ea2a3063d78853eb89213ed59ba84944c6417d2bc2f46959f1c1ddf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b6f84a67661f78160e51e736d52d5e1c837a0de2da9b65728a1988c6c068fc7d",
    "rawResponseHash": "sha256:e961035c6e4a1ec5c72a67ffe97956731b4f9edc8fb03f498e7048c934ca6879"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0024-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0024",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10585,
      "endOffset": 10665,
      "startLine": 216,
      "endLine": 216,
      "statement": "| Spacing | Outer margin, section padding, child gap, row gap, and column gap |",
      "sourceHash": "sha256:c9056a0360a497ee2f510e5548e7dd16cff898ca26becf0ed897e6311e1faaeb",
      "fingerprint": "sha256:8f5e9c0ddd61de562e3d300ea240b08cb7b2bff2de7440304e41dbc06173777b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0024-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:97ad591ba88a17e4fa7176cccd3a799080740073cc1b9e6080f0c47b238a340c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0024-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement about spacing (outer margin, section padding, child gap, row gap, or column gap).",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cb1925a8f208082ad7de82d29cbe9ead89699a0c416c9f9547498e49933269fa",
    "rawResponseHash": "sha256:76b858152be2cf2844452f5c038f8c54b627020ddd4f28bd441b88e540310201"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0025-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0025",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10665,
      "endOffset": 10742,
      "startLine": 217,
      "endLine": 217,
      "statement": "| Alignment | Main axis, cross axis, text alignment, and baseline behavior |",
      "sourceHash": "sha256:e4b8e1e07e9e9ec9b4523b8cd0298cc5de41b8c1465988d89c6863cf9f5b026a",
      "fingerprint": "sha256:1521fe4ac0ebf039f1310635ecc0082f4e13bc5703ea280ae363ed5ba2d6da94"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0025-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:8f58f933c6b9a49fce5b98350a705401e71c9cfeeaa62bf17c432e52d20b47d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0025-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any specification for alignment, main axis, cross axis, text alignment, or baseline behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ec33c0059cb804715f9a58fb17a9ed4d6f933b97e175461d62fcce487d4a340d",
    "rawResponseHash": "sha256:18423017c8c6d334c2d093fb9b806f5b99108943a8b8b2ff50c9fd895b06aac0"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0026-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0026",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10742,
      "endOffset": 10824,
      "startLine": 218,
      "endLine": 218,
      "statement": "| Surface | Exact color, gradient or image, border, radius, shadow, and opacity |",
      "sourceHash": "sha256:978ed10ea473ebb27b806b534cef85cd632a8ad035b9d7ac4bfe0cf8e0bb2818",
      "fingerprint": "sha256:0fedc58975572f330d3e0139167d1b2811a7e5652ef49dd2aca4a42317c90ffa"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0026-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0026-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:970b3d1aba82b1650bf5dbe5dc51f31015e72ecca174ed961cb58a2678356155",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0026-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement specifying exact color, gradient, image, border, radius, shadow, or opacity for surfaces.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:496125f58d4ffc0767f0396a02c242ac8ea2a93ed73e354680f279c085820ce2",
    "rawResponseHash": "sha256:7b0fb7be1484a2c49d13ae45e51da9ad41ffca864baef37c6a9092e07bc4fb0b"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0027-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0027",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10824,
      "endOffset": 10899,
      "startLine": 219,
      "endLine": 219,
      "statement": "| Content | Visible text roles, controls, media, and repeated-item count |",
      "sourceHash": "sha256:5fc9972ae175fe2ebb50e5e52377c89df053d8aee03ef51a4ccbf299eb73a043",
      "fingerprint": "sha256:f22b56f68616730a2157ceaf9a667c155a4d09ee04d573e5a8635d423e09f858"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0027-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0027-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:c33de802bf6fe0ee55400dd16db1e6d61c2b0c4e15df7425b28beec0a846b11a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0027-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a specification leaf matching the statement '| Content | Visible text roles, controls, media, and repeated-item count |'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:377990d66a2f086ccfc614413102fb5db15ee68d824fa0fde9b672cc9b38ee37",
    "rawResponseHash": "sha256:b6b92b3c2cbc53941fdf5dd83bedc0637e74b73adbb5413440c1a4dfa496fbad"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0028-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0028",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10899,
      "endOffset": 10964,
      "startLine": 220,
      "endLine": 220,
      "statement": "| Responsive | Desktop-to-mobile transformation and breakpoint |",
      "sourceHash": "sha256:8bb5a81ed19cbc2099656f5759495324f61a042a1f9a8f22d3fe2f948c71559e",
      "fingerprint": "sha256:26238ec1adf90c546bec8f6b161115ddaeb648025e3cd197ddba1b813a0ac362"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0028-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:d149c390147b50171a6b77c66243fc46abb1108090235d7cdc0cc695d33fa639",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0028-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX contains no specification for responsive desktop-to-mobile transformation or breakpoint behavior. The leaf requirement for responsive transformation details is absent.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:92863a78e7e6ffff70d4698974261370fb9cd08759a3c0a69fc1b33570a7e498",
    "rawResponseHash": "sha256:619656e3fac0a06596edb5cff46043257679cabd5ddaf597fc0cd68f37f124d0"
  },
  {
    "leaf": {
      "requirementId": "S06-DOC-U0029-R001",
      "stage": "document",
      "sectionId": "S06",
      "sourceUnitId": "S06-U0029",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 10964,
      "endOffset": 11051,
      "startLine": 221,
      "endLine": 221,
      "statement": "| Evidence level | `MEASURED`, `OBSERVED`, `INFERRED`, or `UNKNOWN`, plus confidence |",
      "sourceHash": "sha256:ec3e0acb1f4de892fe4aab6d245ea21746471b62effdfdda084a6ee2260b6c81",
      "fingerprint": "sha256:cce2a1c95c3bb692f4cc160c6560b0351bf993077392ffc3543c467ba9674c41"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0029-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S06:S06-DOC-U0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:0f951b4b1a063fe825f4a904deac1577fa25f051b4cef0ad5619b0c80db8cc9b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6dd1ecccd8efafa4564ae51621855a42cde6d95a0700b5d500e8ae142ad41ea1",
    "rawResponseHash": "sha256:4f1c671efbe6a87622794ae26c75655cabf25de143b32496e587adbfdd42b523"
  }
]
```
<!-- END VERBATIM S06 -->

<!-- BEGIN VERBATIM S07 sha256:8b1bf3ef44a8e1d495e8be963363e59ad3faa211f84d7b63efbd92e39d11e0cf 25864 -->
# S07 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:7ed3e55ba379ebf02c59e758879a5b3ef3777742ad0b16511b6816345a201dc5`
- Normalized output SHA-256: `sha256:e2a5f3637079b2ba7604a560876817b84b130dea93148d2902d00d4d94c63b0f`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:33cd108bc8184585ae8a8c5475c9328cf3b4236892ae80bf352e05638cb9a843`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S07",
  "fingerprint": "sha256:7ed3e55ba379ebf02c59e758879a5b3ef3777742ad0b16511b6816345a201dc5",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S07-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not provide any DOM hierarchy for any page section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not specify the exact CSS layout model as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not record flex direction, wrapping, growth, shrink, and basis for any layout component.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement to record min/max widths and intrinsic sizing is not present in DESIGN_INDEX Section S07",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement to record aspect ratios is not addressed in DESIGN_INDEX Section S07.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not record padding, gaps, alignment, or wrapping for any layout.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not mention recording sticky offsets.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not mention recording absolute anchors or transforms.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not mention recording z-index relationships.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 14,
    "passLeafCount": 5
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S07-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11090,
      "endOffset": 11142,
      "startLine": 225,
      "endLine": 225,
      "statement": "- Provide the DOM hierarchy for every page section.",
      "sourceHash": "sha256:2d948ba8822b895321b0d1aebf204f45c0514f040f0608ce14e675c498fe4d86",
      "fingerprint": "sha256:09f39eb67814efc67f29fe2b1f57f3a9b1979a3ba12fa19fa3cb23b3bccaacce"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:87e5585de873bda72e00e05ef51eff2508ecfccc6c622eeb68a9a12dd0542b41",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not provide any DOM hierarchy for any page section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6439206b158b77b3d9eb650bb75ea8e142e71e8e8cc234bf80f2092fb12dce4a",
    "rawResponseHash": "sha256:69c7b64e4c70fe2767a6f719b5c88790c6ca6a86648e66188ba91cd352623f44"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11142,
      "endOffset": 11180,
      "startLine": 226,
      "endLine": 226,
      "statement": "- Specify the exact CSS layout model.",
      "sourceHash": "sha256:7acdfd5ebf870435d95628d0743c3e0e515b1d6c043bfc68e2d57a530e67058b",
      "fingerprint": "sha256:a31577746192a739a996618e85d9a70eb89db0b0bb179eb3ec52647e548f0e80"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:9dc0fd6d2b918fffd1d58e37f94da9ed8a782f601acfd369bcc0a727f47c9359",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not specify the exact CSS layout model as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c0305f615485e08491e28bdd81b71ce2c9e3bb759c3112683253a1fa47199f33",
    "rawResponseHash": "sha256:a06360808aa4bdede9b42b6b665e03e0b135cf24c8166a703eb0f2a1a3c54844"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11180,
      "endOffset": 11216,
      "startLine": 227,
      "endLine": 227,
      "statement": "- Record grid templates and tracks.",
      "sourceHash": "sha256:03c2cbbcc045ad1d6a63010eec22c26c7e9f84b489b15c97bcb9e70a386a9070",
      "fingerprint": "sha256:66c193315ad591374efd5b602569e38648fed70085c15c70c719b29be7501bb9"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:8c99b927c570be6ec6ac4e77f4f4d6075b362982ffa06343597f46fd87460cd8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f3123350573dca7ea2f1e7bda29a9720b44504569e6c4382b6aa7c5860518aa9",
    "rawResponseHash": "sha256:285aae4a5653866de092fcb9176abd35b8a2d79be622b2af16bfc6a6037cd885"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11216,
      "endOffset": 11278,
      "startLine": 228,
      "endLine": 228,
      "statement": "- Record flex direction, wrapping, growth, shrink, and basis.",
      "sourceHash": "sha256:e7b22b5738122176b4b73ce9ef6bb83fd93319889e7343eec3bb47cdf331b77a",
      "fingerprint": "sha256:47a0e011207d160b2092673f909f10c3dab75ca624d9feeb4c6937a2ae34ce24"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:4799ea444eaf71e1124ca19040236f7991f7ace4523c834a4fbe5a1e69e62a64",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not record flex direction, wrapping, growth, shrink, and basis for any layout component.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9324f4c03b83898c372fe27db2d52d0a4fb4d6a9e7230afb0fa0f71da9600f07",
    "rawResponseHash": "sha256:d9a79f6f75cb9b6f3636873d2be4784278deb9b3ac0de05896abb549203d428b"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11278,
      "endOffset": 11324,
      "startLine": 229,
      "endLine": 229,
      "statement": "- Record min/max widths and intrinsic sizing.",
      "sourceHash": "sha256:896eec8f856144350cb1b324dc6ccb0f35c89b407f623bd9199ff2e99c1aecac",
      "fingerprint": "sha256:b9385abdcefde36d4bc7752ba76da2151cf040ffdd04589391788eca66d409ed"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:b73e823b833ede74f85d57e8a9daed4731ed665fbb57b528305785d5bf6f8be3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement to record min/max widths and intrinsic sizing is not present in DESIGN_INDEX Section S07",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7e938bbc99c7ed16e87e212a58b414e6197da175b56be646fc0dd36a0b4d85f2",
    "rawResponseHash": "sha256:535400ed2b5176b9cf8dbefdc0926bb05487cac308a2f3cbb0bc8a7a3390d4e6"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11324,
      "endOffset": 11348,
      "startLine": 230,
      "endLine": 230,
      "statement": "- Record aspect ratios.",
      "sourceHash": "sha256:f5e144142be5c243e088464636ec3efe6ff8395632140f8a06b0c71b0d8378a5",
      "fingerprint": "sha256:7d4dec8ebd50fa3855f0e2dab64f5a5b531dd46fdcc6f66b2dcc76787e0594bf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:e0b29cd94724305f45d74c9186e616e1996e66b04ce47f8946fb9fb671237420",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement to record aspect ratios is not addressed in DESIGN_INDEX Section S07.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4375ccb9a290fbd21028cd13144e18dd64339b43808ae075698159fcb0ef0555",
    "rawResponseHash": "sha256:771b972d81f046b66ef3b31c192595818da5e8d824b9afa6c64047cbae75de03"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11348,
      "endOffset": 11397,
      "startLine": 231,
      "endLine": 231,
      "statement": "- Record padding, gaps, alignment, and wrapping.",
      "sourceHash": "sha256:2b9baf88897c28734057a7c721fafe3c7e6d2dcfe2f0e37c6f7408cf8b0eb367",
      "fingerprint": "sha256:548f9dd3f54d979534d99aea116b5f2b73d5192823370dd4dd3b91092ffcf46a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:b8a29687abc111b2d159601320c76095ec014998113ec3977f4d05e627049cbe",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not record padding, gaps, alignment, or wrapping for any layout.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:33249c79acb6bd18676747f1973a29e40c73429ccc8f99fea44fce227c8d8494",
    "rawResponseHash": "sha256:996c427dcfe7487c2c7bf6d5eed2df8cb43d7328ffceb5d045b56c25861cc84d"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11397,
      "endOffset": 11429,
      "startLine": 232,
      "endLine": 232,
      "statement": "- Record overflow and clipping.",
      "sourceHash": "sha256:7fbbc240c5afa988e190e2dd31aa7da4b40123a0ed9488397b802f0c1a80d3d3",
      "fingerprint": "sha256:b7be93d4168f275aa694065c42eb0576adbd8c2ea88a7d284300356c8848a9ea"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:8d05031f81971dc42a100a372393fa867d942f09b0a4acf3a1ad944a8105a8f8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:31b0ddda7203e7fc46b5f19dbe0f08322211922459a3b62a311fb6cfbbd58716",
    "rawResponseHash": "sha256:b4503b84faaf7229e1f8a66f2ed02d040dc139a4cc26ea5313bb438f09148ff6"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11429,
      "endOffset": 11454,
      "startLine": 233,
      "endLine": 233,
      "statement": "- Record sticky offsets.",
      "sourceHash": "sha256:a0fce0d47ffb35c6b8b543fe3eb11795a9fcd68f27ca75aef007868ce2e6c5d1",
      "fingerprint": "sha256:bca408dea7be8bb17bc4fdc449d8fe6ff6c6f19294fe108ad8f77f229d0b3c03"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:9e98538a706bb2a8a7fc2cac1de7aeb7d7184be6bbfe23fba90e243db66c90b0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention recording sticky offsets.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a5b176e290870d5731957649f6934169a79a402b6710ca52b50296bb709c8cc1",
    "rawResponseHash": "sha256:26a91287de1b1e65ad2821f0a8535f3d450580ffe427b69aa0cb9cd0c113adfb"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11454,
      "endOffset": 11496,
      "startLine": 234,
      "endLine": 234,
      "statement": "- Record absolute anchors and transforms.",
      "sourceHash": "sha256:b5f6bea3c56ee6f8e28e32ce8c4900beb44cb4552c9da63a86d4e29d4c9f357e",
      "fingerprint": "sha256:e076fbcc3dd7c581ede815021577ff62aa0f3c3522e86da9a29f4bc8e7e53856"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:30d69fd31fd20fdad2c1d2b08548360459539fbe0c8b9735113e301f8ca8ba89",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention recording absolute anchors or transforms.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8747fe546a25226c0db5b00c643c8d0540a38804b0d0b9ac71cf4734be0824de",
    "rawResponseHash": "sha256:b1ebbe45158d45274a15a2db3c9c29969b8cc1e9a46697bc4810b756003fd417"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11496,
      "endOffset": 11530,
      "startLine": 235,
      "endLine": 235,
      "statement": "- Record `z-index` relationships.",
      "sourceHash": "sha256:048a6d362004ba6e5318261b5d7a3f18576ff95f80d14b840b8af7301a4f1fb2",
      "fingerprint": "sha256:6e6aebc32b20bf78ce6395a1c12c7741427099483913a4706cb241986d869565"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:f91402fa4b18984ceca97b44efda018cea7f5e30d325501e2a1d350e440838d5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention recording z-index relationships.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a77e26ebf8bd47e165fab048591c1a8a7fb38248722b0276b3fa755158c98b3e",
    "rawResponseHash": "sha256:eb8d2252d5e79b28335f0427d3c5ad87aedf45c8c3c403b36f41861b4b6d4b48"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11530,
      "endOffset": 11586,
      "startLine": 236,
      "endLine": 236,
      "statement": "- Record desktop, tablet, and mobile values separately.",
      "sourceHash": "sha256:2943f96918c33939eb1854dad9cd1fc9cb1e0babfb4be46c71db12d587f83992",
      "fingerprint": "sha256:8a60bcbe4803e16c62e2eee2f0f601b01a87b7e4b83beac1c63a8bae3ac08933"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:e75b30c5e3e041695f6a6a31508ae2d61ba5571e5c3d3be2ceac24f92a356ac9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:08dd7bef2f42423af78d2eb29c6c9ef6706db83d73006aa2220cf5dabc656909",
    "rawResponseHash": "sha256:b4f4da1760477b4d985b656e8a044a534688e52aa40250e4ce3f6fa6969066f3"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11586,
      "endOffset": 11666,
      "startLine": 237,
      "endLine": 237,
      "statement": "- Include a small CSS-ready geometry sketch where prose would remain ambiguous.",
      "sourceHash": "sha256:f384a9576c29ef7d2ba319560a487922e1ba3c4b8442790d81113ad4de7981ee",
      "fingerprint": "sha256:2fe3ed5d2e18d77b48b6a159515026128d9d76ae8b8d452b019d1517b7d4c3ba"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:55c9b293e752239fc42bd01fe30523a53817364b7c36eea550a3d7a83bc84e04",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:13f7264143bd9da5342ac19862fe54c9a5814ce75177388989ec26e34ece343f",
    "rawResponseHash": "sha256:ba983861bf1c1859810a3a8e4bd8d976c8e1def102e761711e9aaef3ff52e189"
  },
  {
    "leaf": {
      "requirementId": "S07-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S07",
      "sourceUnitId": "S07-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11666,
      "endOffset": 11814,
      "startLine": 238,
      "endLine": 238,
      "statement": "- For repeated cards or rows, specify item dimensions, count per row, `minmax` rules, gaps, image ratio, text limits, and incomplete-row alignment.",
      "sourceHash": "sha256:303bfd2d2cebc24a42d9b4c2694f239b124d9c56fafd3c8b3e55fbd1b7891311",
      "fingerprint": "sha256:f2485bf1c866c2e1d7d664eb857d60a0c6fe59d48ec66f043c4361b1d846863e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S07:S07-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:ff7849ae0f7bae63f20266f1be940a62dbb67f985674437d0f74de2d87fbf20a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:df60311083410de76b3a8e31e3f15570e2a577d3b2ffcb5a98e4958acae2315c",
    "rawResponseHash": "sha256:dbe6517173908cddd1d09ec9d785933bc411263773ef4ca15fca47fae34528ed"
  }
]
```
<!-- END VERBATIM S07 -->

<!-- BEGIN VERBATIM S08 sha256:3a76f13948b3f89627f61a7279bf55184c3cc808d9c70ae4ee235b950d4c7c3b 22374 -->
# S08 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:d4a12c76f1944a615da2e7949e2765db2a1b5558bda091ae1ca3da5789c1d540`
- Normalized output SHA-256: `sha256:8ff0b183eafac3080267af571f87a830be62ebb03099c32641d07632cb0ab0ea`
- Leaf records: `12`
- Leaf records SHA-256: `sha256:6f06e682b0e5dc77b4fbd4a70b517ff658d5e4b71835d90c57c386bb8799f2be`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S08",
  "fingerprint": "sha256:d4a12c76f1944a615da2e7949e2765db2a1b5558bda091ae1ca3da5789c1d540",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S08-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The requirement '- Define props with types.' is not addressed in the DESIGN_INDEX section. No prop definitions with types are present in the component contracts or tree.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain the statement '- Define local state and shared state.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8 does not define emitted events and user actions for components.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain any statement or evidence addressing the specification requirement to define data dependencies.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not define loading, empty, error, disabled, selected, and success states where applicable.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a general requirement to 'Define accessibility behavior.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No mapping of components to page and section IDs is present in the DESIGN_INDEX Section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 12,
    "passLeafCount": 5
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S08-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11845,
      "endOffset": 11923,
      "startLine": 242,
      "endLine": 242,
      "statement": "- Provide a complete component tree rooted at `AppShell` and grouped by page.",
      "sourceHash": "sha256:c8c121feb744bb38bb01192cb732c6131cacb16fb67459f3b6cdcfa1ebb350c0",
      "fingerprint": "sha256:16b7039287aa0454aa58db3cb29ca42524124d049f5e5425dae604e9c198cec3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:06164033ac1df47aedc11aa806f9a9fd3afe8e79dccf78c8d185332b9b0eaa9b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:165670ec63236c32b3790810101059d32b6c9465fc7ff4471be98c61fb1b608a",
    "rawResponseHash": "sha256:1de4334dc3357f6219e6120b6991c438ecb9480ee77fc86ccd251ad202b7db02"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11923,
      "endOffset": 11991,
      "startLine": 243,
      "endLine": 243,
      "statement": "- For every component, define responsibility and reusable boundary.",
      "sourceHash": "sha256:b03ed29fe569db4ad27432e5e3cc81314f7a334b842ab994b9c83b8dd7532870",
      "fingerprint": "sha256:70c50a1c80323f942c28c0be2093aae3453fbfc9f09283e923dbc9626edea515"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:f7b1fb5a091aec01a362cd0abc8c2a592d88cfd3cdbd7f2d567eba132c697f86",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:360fbc90a410ce9d00d31dd2ec17676429d3cc64fc7c6d78ad9f01ee531727ce",
    "rawResponseHash": "sha256:754ccafc1c56e7be4004878c7e768cbaa6f8f477afe63f140d37cc52cd42c962"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 11991,
      "endOffset": 12018,
      "startLine": 244,
      "endLine": 244,
      "statement": "- Define props with types.",
      "sourceHash": "sha256:dafc3668a416a48cacdfd80ac7005e69d60793e6d8a4a51f5ae6a0788ec0116d",
      "fingerprint": "sha256:ca75a52f0d3c93d89a8a58c856db52a287320c9373296d69cde37f09bc409163"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:55a98df786a4271632d56d2b3af36e02ef55cd643236a9a39cdeebb95738ead7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The requirement '- Define props with types.' is not addressed in the DESIGN_INDEX section. No prop definitions with types are present in the component contracts or tree.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ab6d620fe91e70b02f3fcce1a74cb4f659d763142404f532b2a334986a09bd69",
    "rawResponseHash": "sha256:9e55491b9f77798b3eccb32810be731b559c3c95dc5d6f73161af4d50fbfb58c"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12018,
      "endOffset": 12047,
      "startLine": 245,
      "endLine": 245,
      "statement": "- Define variants and slots.",
      "sourceHash": "sha256:961dcfb0f3458f04261bd17717c21182ce474164a798daffc3ebbe44f2ce30c2",
      "fingerprint": "sha256:a4d1f8a772ce0357c35816efefb12ca2984d2e5b1a141fe6a68f2770c7bffed9"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:8e441f67994f8b51c3be713b05d05a5a76f9b5abd96085e6348a97bf68fa9ac8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:184be3fcd6376c249666beb6d8186ef42deef1edbf758d899c09c9c3e29561f3",
    "rawResponseHash": "sha256:d69825e37de22a3646212535e5faeb753b6b3d0a59cf710adac412fc669a8d1d"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12047,
      "endOffset": 12086,
      "startLine": 246,
      "endLine": 246,
      "statement": "- Define local state and shared state.",
      "sourceHash": "sha256:d3d115c76a59ef0f7541523b41dadf6c42f3cd0addef2003fb3995a482c86405",
      "fingerprint": "sha256:67911adf43ae3d7912050763351ae1b87ff0edeed6c3ae78e853a3c04f7acc83"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:4c40f94918903ada8097b609cdf6959ed70618a981ec0c0542bbbc267ece2097",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain the statement '- Define local state and shared state.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cc7813eeca6ca5542b44b2daee3861d1729ea672a7fbd8f9c989a20afdd8bf80",
    "rawResponseHash": "sha256:97d86b2f8f2064eb61a5d0de48638097260a86763a11557e70f544d2e7c2e720"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12086,
      "endOffset": 12128,
      "startLine": 247,
      "endLine": 247,
      "statement": "- Define emitted events and user actions.",
      "sourceHash": "sha256:53b197e4aa0be6e7397a999b0a9c7b11715ad4b425d1e297e308adb8ae573918",
      "fingerprint": "sha256:3953a49524b38953d3d7012a86dd8f6a637adf61edfeb816a0331764f2df6e9a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:fbe4059987be5092cb4a38b294684db7d5ecaee802c525736e88c80913165ec4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8 does not define emitted events and user actions for components.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b7c121bd97e7a968296d36573a9d677c2ba739ee36e8bbd801f815f12497e58f",
    "rawResponseHash": "sha256:4c8be4ca9dbd75d5cd99b5e11627b51c84226145476ec824efc043a63846fddf"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12128,
      "endOffset": 12156,
      "startLine": 248,
      "endLine": 248,
      "statement": "- Define data dependencies.",
      "sourceHash": "sha256:0a367aec5dd9774942465611ed20dd81f64b6a58a92e303ccdb6dd7089a9d002",
      "fingerprint": "sha256:2bc13a91b0afbe7cc8cbe44f0adacb1681a945b26b2a04447d6ebf73d1b46dfa"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:f19f514f5ba1d5cf5a4a0fe67025f42cc9c3ccd48f81cdcb4b968024298c06c4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain any statement or evidence addressing the specification requirement to define data dependencies.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c582f989580989648371b920bc6fcfd3397af9a3127ed0f5b84b28181a40abf1",
    "rawResponseHash": "sha256:5a6598598cad66103358f7353e7a09f7382e721b3c495916765b78815a291552"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12156,
      "endOffset": 12255,
      "startLine": 249,
      "endLine": 249,
      "statement": "- Define `loading`, `empty`, `error`, `disabled`, `selected`, and success states where applicable.",
      "sourceHash": "sha256:27db79149a8b416efad220758b632c0af53a5f34c5243050d94425e884891ba1",
      "fingerprint": "sha256:c8ef4bbbcbe6fdb5436de0668081c537597827424db87137c59b4e288d63db3b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:0f344aa99d0902024906ef7efff8c9a4b0aa822cbe42000fb7389d468bb403f0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not define loading, empty, error, disabled, selected, and success states where applicable.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5b1a202c731bc6d593064d5d88d90b45936a823dd792c86fc10594d330e42c11",
    "rawResponseHash": "sha256:96184cc006e3d11804f7a85421dcf71abf4e59b54683011c81442314c8c535e8"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12255,
      "endOffset": 12288,
      "startLine": 250,
      "endLine": 250,
      "statement": "- Define accessibility behavior.",
      "sourceHash": "sha256:656eef663435377cacbc25c14fd13465cbabd8b22bf7bec469f63e1a7f3751f3",
      "fingerprint": "sha256:6e90c88a71a81e2fcda476edb88bf84f69a80e39eea07a99e10ef10cad150ee8"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:3e465633b384d6b11ad8e50b581cef0e5cd7b2e5552134a132a0251793589910",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a general requirement to 'Define accessibility behavior.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:04bd73ecf51553d42e15e019b4ffe29604d991c4f7190cdee5e76295402b0b70",
    "rawResponseHash": "sha256:a6bdca0eec0f062813b454fd5eec8f16fe5c6d94b54bc4bda29e79561492598f"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12288,
      "endOffset": 12335,
      "startLine": 251,
      "endLine": 251,
      "statement": "- Map every component to page and section IDs.",
      "sourceHash": "sha256:e176e668d9118d40fe53d7829b244571b6d5ea22ae2de855c6d83dd0011584de",
      "fingerprint": "sha256:a48e10ee086769b34bb598ce0b5e3e91152ed4cda29eacaead50b4b2a9819ecf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:bce419ba0f585f5269dea6630259fc3504bed1fc4e795152986a19524181b177",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No mapping of components to page and section IDs is present in the DESIGN_INDEX Section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:994d34e6ee6ae79e3d295dc514c85db827df5e3868607d3bba54767c238b1e84",
    "rawResponseHash": "sha256:a0514772980dbcf7bc601b7c7d03302662412401d33d950e0204bd7c2dc55c4f"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12335,
      "endOffset": 12435,
      "startLine": 252,
      "endLine": 252,
      "statement": "- Define shared navigation and footer once, then reference page-specific active states or variants.",
      "sourceHash": "sha256:bab009d4a49db6d8ba7d30471731ef51beb770d464d0fd0a7d1fdd9594f7ab2c",
      "fingerprint": "sha256:fe04da9ef971bc4e7f35c7737768b78576faab4e8d366f113e7b1e234637ca4d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:42a87e6e21d508fa63dfc7d43ee042b8336216efd2175ff2f33acb81500d3c0c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:16049ee7cceb792ce00667e35824315650b549ef9c483ce5a22b7e6944bed945",
    "rawResponseHash": "sha256:e187f83b0a98d47d3040eb1b41dd1aac2bdefdc59d112d5690c61f2a8e75cfe0"
  },
  {
    "leaf": {
      "requirementId": "S08-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S08",
      "sourceUnitId": "S08-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 12435,
      "endOffset": 12519,
      "startLine": 253,
      "endLine": 253,
      "statement": "- Do not force unlike sections into one component merely because they look similar.",
      "sourceHash": "sha256:ccedabbf2728ad4e43f68011a2f2c31a636aa18cbe7c9bf8a1a1343ad2f04822",
      "fingerprint": "sha256:734320baea5d498ebf7eae6ac3aab32e08d022d9261568ead1510df597d2141b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S08:S08-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:f0a96ea53397cc98d6f33be2bdd9b0ac421a069876ea0bcd1d45f95f1fbf8dd6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:21c5d4f04fd4738d8acfef0627b9c8af8f522e6ed9bda7625902ff0c280eed8c",
    "rawResponseHash": "sha256:4a8d73df62d97942a668c8720ee0310a277ebbaa53a52e25ea8978f8d58c6a21"
  }
]
```
<!-- END VERBATIM S08 -->

<!-- BEGIN VERBATIM S10 sha256:dca2d8f8883719c771010270b7d7be553ede8ffaef326de23a916d8d10637869 28422 -->
# S10 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:ea7eafc84f4d870a48441221ff60f95ed8a6bcd7b9f916f99f0ebc8f0db918e9`
- Normalized output SHA-256: `sha256:ec7148eba017073425de484725e169058192e422e87829b95c74bf40ee4848a5`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:bcb4bb521c40cd3b8308f9f29e9093d9495229f387d884a0c9c5739d79e5bb19`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S10",
  "fingerprint": "sha256:ea7eafc84f4d870a48441221ff60f95ed8a6bcd7b9f916f99f0ebc8f0db918e9",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S10-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a definition for every visible text role as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '- Font family and fallback' as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The assigned leaf '- Font-source strategy' is not represented in the DESIGN_INDEX section '10. Typography Matrix'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not mention specifying sizes in both px and rem units as required by the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for 'Weight' as required by the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any specification of line height in px or unitless form for any role.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Letter spacing' as required by the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the specification leaf '- Casing'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any mention of 'Decoration' as a typographic requirement or property.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Maximum width' is not found in the DESIGN_INDEX section S10.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification about wrapping or truncation behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S10 does not contain any statement or requirement equivalent to 'Responsive value at every canonical viewport'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 14,
    "passLeafCount": 2
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S10-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13574,
      "endOffset": 13624,
      "startLine": 269,
      "endLine": 269,
      "statement": "Define the following for every visible text role:",
      "sourceHash": "sha256:a8ad26b7b66f600b0fe14ca1d3a9e712bbacf976cedb4c574a057838d5d34dd9",
      "fingerprint": "sha256:7c1b69faffceaae48eed9693bd0fe17c2919145c49fc78ee60c0b438c06fd323"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:784ed3054b60f9a59ff4ef63385c47774c3a1a65d7fd8ebb2ec6fb9ac749d781",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a definition for every visible text role as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9aa3fbe4be0e5c01d88b6d7edc26c3ce0e3644eda2808c02b72f222b81dd298d",
    "rawResponseHash": "sha256:0e649de7de9425c5de2cba139b90e3d11e855cdafb941991b2c33c65e9fb3755"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13625,
      "endOffset": 13652,
      "startLine": 271,
      "endLine": 271,
      "statement": "- Font family and fallback",
      "sourceHash": "sha256:3cece1395f902d7068841c44b61cd1f314fe4fc05f47148c0cfbcb691719f556",
      "fingerprint": "sha256:e6e937725cb1ef215b718d4e7ae98e24cba5071a89c0a14064835a8820c88248"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:09b907c702ed919ae494684d335b40eded7beaea57b790fb172f7c0e1f060a9d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '- Font family and fallback' as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:0043dee926789b6c892cb796a1ecc5b9c8684c7f8add8b0b12f71852c4a117f6",
    "rawResponseHash": "sha256:8c46c631fa93cce398a3769b4370012701bb47f15bdfde204396717e2bf1a19b"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13652,
      "endOffset": 13675,
      "startLine": 272,
      "endLine": 272,
      "statement": "- Font-source strategy",
      "sourceHash": "sha256:bf98ed6652391e86cb8b178ab02b338318a19b76d4d34cfddc8fe20294bc7afd",
      "fingerprint": "sha256:ce35e7a44da4b1f0d921553f33a47b0060c7221f5042029f18b949a23b905ddf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:8f1708d9f6812098005b16fe4dc3c86dbf449d61c6ff377e9e44ee062e92fc54",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The assigned leaf '- Font-source strategy' is not represented in the DESIGN_INDEX section '10. Typography Matrix'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c3c84a13e48c33bc25d1877db7789dac27bff82741cc988677485df7b6955eef",
    "rawResponseHash": "sha256:13a9b978f806a5c4a2b4019c5f9a9f3fcbac8c05f7799c504c0e366262230539"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13675,
      "endOffset": 13700,
      "startLine": 273,
      "endLine": 273,
      "statement": "- Size in `px` and `rem`",
      "sourceHash": "sha256:24268b0ed7331e7b5ac77487bd34de27eaff4bd16b80008c1a036c0eebcd5b11",
      "fingerprint": "sha256:601f7da50a1ddac836b27267f87ae123611e32db5f53a6a04ec53318ea30725d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:f2da04568bc76322e521caee4814157ec4393ab87cadaa9e933c84a727328414",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not mention specifying sizes in both px and rem units as required by the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c16df41734be47663060a57ccb2d4d6a38fdde9e6c25e8a9407915e11f521a44",
    "rawResponseHash": "sha256:fd5f5a37a30ac7cbc713b2ee2db407933e3fc010e32d25735d3169f860e7a5dc"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13700,
      "endOffset": 13709,
      "startLine": 274,
      "endLine": 274,
      "statement": "- Weight",
      "sourceHash": "sha256:a74a938651889a7f4654f2f6d1a48b391ff0746204bf9ea3f04c9be2274bd248",
      "fingerprint": "sha256:351f3ab44e7c5cf45b173acae1081f82fd5b5763ba103ad75daaa5c530567444"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:e4e9b325ee363b82328ba1cfb64933bdce9f6cc151329daee1c0680732cf4929",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for 'Weight' as required by the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:830e5c2b1e66c663d33b88a500e851f138b9bf46a3a0cb52a245c6c43a8fbae4",
    "rawResponseHash": "sha256:4177a752ab7eef9307c560564405db833ae6af4bf831ee9098b68c201b2e69b7"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13709,
      "endOffset": 13749,
      "startLine": 275,
      "endLine": 275,
      "statement": "- Line height in `px` and unitless form",
      "sourceHash": "sha256:a672a791ec4299cd1761800719cd80f624c1b13257ffe7c70d53aca330091971",
      "fingerprint": "sha256:e052ee5e2101716df863b94826d9db87e52ca696eaf9347a2203ee54d45ca058"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:a6cda131d7958ad1d222150bad007d7098639a47472305e7c75e15319e246911",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any specification of line height in px or unitless form for any role.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4c64fa16448dd69b7978c1188ecd341c9dbf87e8de8965e2b1094087ed7cd9bb",
    "rawResponseHash": "sha256:574159c74430a51d2cdba4f8b0831893d54890d6352b6190f7e29bdb6480e69d"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13749,
      "endOffset": 13766,
      "startLine": 276,
      "endLine": 276,
      "statement": "- Letter spacing",
      "sourceHash": "sha256:1d23ade7ddcabf105d58bac767e2e613ae3662edeaae9bf97054df77f81b2346",
      "fingerprint": "sha256:206bc759c4edfa583e48e3e469bb9b5b4f51dcef3fbff11e85382e651b810fa0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:6263a167876095dbbc2ccc967b22f53d66217cd75c496a4edb4638451e18f7c4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement matching '- Letter spacing' as required by the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2276eed451d4b606ae0ccf6caef9d706f62ed68e0b804669b5f67e6bc114a5fb",
    "rawResponseHash": "sha256:1f09e08d678ccb3ac578f1b0336b0de4306dcc7058a4d09fa330931e0af8f386"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13766,
      "endOffset": 13775,
      "startLine": 277,
      "endLine": 277,
      "statement": "- Casing",
      "sourceHash": "sha256:85f0c7d701a437488b547ea1a7df7085be84792d17d73d4eb2b0c7dad7dc50a1",
      "fingerprint": "sha256:de411d3cbfdc8658a778f6c1944f3d2b2c1927b8d75f523e5b134b22374effc0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:6823b138dbca9588f0efe3f8301073ed02cae8429aef204b276beedf53452369",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the specification leaf '- Casing'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:775871b22e203e31fd2e268cf79d24bf8a7b90a8795873ab2ee7de6625dcb708",
    "rawResponseHash": "sha256:3d20e661db3f417d30002631798d8127f43bf5f3ce4794149c639f2669b380ef"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13775,
      "endOffset": 13788,
      "startLine": 278,
      "endLine": 278,
      "statement": "- Decoration",
      "sourceHash": "sha256:b77c22be7535a0e7432ed0711d55d8c25de4f8343e7f4fbb2f0a551d54260048",
      "fingerprint": "sha256:c2e1b60799d5f09ca30418c5b996073e248815e938fc880b2e5b46f20a772ca2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:81c86a8d034959d4df882c6af736273c6af993bdd4ad4001209fe0f0ab7b587d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any mention of 'Decoration' as a typographic requirement or property.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:89ce2bc8fecf2a0679d7450337034e063ac8eef59a1c154bef78dd4526e7dec7",
    "rawResponseHash": "sha256:2002e63ac7a1ba38930e5091abad886c9eb16c8577e5359695f0083e1075a8fb"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13788,
      "endOffset": 13800,
      "startLine": 279,
      "endLine": 279,
      "statement": "- Alignment",
      "sourceHash": "sha256:96653fdb15ec370ee9612d35a93ed4cec3499f6022fed360bfa6120035af9b28",
      "fingerprint": "sha256:d590a44c1bc355530b92ddf8618dba8726672e9423ed07a240a432d7dd477aa7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:005aa74dd06bb14577c55a28807bbcc479e05e4540d77609a0de8d046e56f144",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f49dd7f9de67c47231296ebbe7a756b9c686806a0a71f49b407ef947bdcf89db",
    "rawResponseHash": "sha256:d7b14f85ff724a061ae96b57beaa9027898af1edba50938cf8eaa5b8758cb096"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13800,
      "endOffset": 13816,
      "startLine": 280,
      "endLine": 280,
      "statement": "- Maximum width",
      "sourceHash": "sha256:a1be87f651d59f6e897c74c9b782b6a0494d917d79e54c24f2e62e27ee12e6c3",
      "fingerprint": "sha256:aabcc72850c6d4d84830617ac0c2b1ff0e97416ed72f223549f5b134e4e884cd"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:ee9e3a7f1a678a5d9810b1e90fd9099d9753a3e9dccc59e6091773d19331ba16",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Maximum width' is not found in the DESIGN_INDEX section S10.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:daed176519a91c9491ad3a0044b18c5c006c212429b2df2cc7b84f7a936cc020",
    "rawResponseHash": "sha256:05e930a25fffbc847f804d7518f28d3c365c8e6cacaf212e88f0af0ef4cd1933"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13816,
      "endOffset": 13841,
      "startLine": 281,
      "endLine": 281,
      "statement": "- Wrapping or truncation",
      "sourceHash": "sha256:ce9432a126a93f871cfb68339236391306c7ecead34db8bb6ac0e8d0de9ff151",
      "fingerprint": "sha256:bcf4cb49d46be7ae8649a907942c8095698c736d520e7e8c049ac4ff381a81ce"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:4688b2664466502eaea0a85e444414dabeeaa9c109952670aba6229422322967",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification about wrapping or truncation behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9f4d615e1eaecaf26e9a75a609ab629ee60f0ed2c7e6f8a8b8e1d7ff20d09ebe",
    "rawResponseHash": "sha256:3022d2c854bf794c938d56227a1046b71f75a2f0a53550487057f588f007df83"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13841,
      "endOffset": 13888,
      "startLine": 282,
      "endLine": 282,
      "statement": "- Responsive value at every canonical viewport",
      "sourceHash": "sha256:b674c4fd2956cd5f8062b999db531b5f5da958cc657d3025993db5bdb3d30179",
      "fingerprint": "sha256:f644716e6f27501c364651ca4126963a797eb5b10ea36a27a03a672918e55c4e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:def8475f68cb2a4bd23ff859564f418c2887ee7af881d84a8c3dc613cf9103a4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S10 does not contain any statement or requirement equivalent to 'Responsive value at every canonical viewport'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:88d144703d2078f080e2f217c6cfed90d967ad100a5adb62c65f34568babd790",
    "rawResponseHash": "sha256:71b52ebd1f3dcb9ffd9fc6e93b8b83692de9f67e8e7fbb10959a076ff52e064f"
  },
  {
    "leaf": {
      "requirementId": "S10-DOC-U0018-R001",
      "stage": "document",
      "sectionId": "S10",
      "sourceUnitId": "S10-U0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 13889,
      "endOffset": 14094,
      "startLine": 284,
      "endLine": 284,
      "statement": "Include navigation labels, utility text, hero eyebrow, hero title, hero body, section headings, card titles, card body, metadata, controls, captions, form labels, errors, and footer text where applicable.",
      "sourceHash": "sha256:c4f79b41b4cf0028cb21e8cd576366ad08e3d53c0c7f9900e6a84a4448e1e478",
      "fingerprint": "sha256:c6e92b864c230aedaca5b0fd69084caef8fbb2053252723aa6e8e6b26e50508b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S10:S10-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:89aa362484ef1b557279b0c25e838988a63a0201bb486e4442c4abbe9db8c532",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e838f24e7e7a67116c9b86b703799574d61161422e2b4cddd1f609d2f01fc644",
    "rawResponseHash": "sha256:41f21057686b1c3dfa2e8de57db46d34147991755d17e5baf6d0e0629dd72e87"
  }
]
```
<!-- END VERBATIM S10 -->

<!-- BEGIN VERBATIM S11 sha256:8a137e5a1e92f95ed0416118c6d1832f5915612b76dd202170afeed020055e0e 12462 -->
# S11 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:4e10377acac1dc80ba800a32210a358a06d04419dd8b0520afdc8e6e699c64d4`
- Normalized output SHA-256: `sha256:fba39f3ca2bbb2723e5ecb6b230738f14c174ccd6dd99db406619bcde70af08c`
- Leaf records: `6`
- Leaf records SHA-256: `sha256:486a0caf313a28dffc9d5b7e62991986e141c5b9f0ba7a0a11e24726a670e7d0`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S11",
  "fingerprint": "sha256:4e10377acac1dc80ba800a32210a358a06d04419dd8b0520afdc8e6e699c64d4",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S11-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX section does not define source aspect ratio for any asset.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 11 contains no guidance to name familiar UI icons using known library equivalents when identifiable.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any requirement specifying exact stroke, fill, bounds, and optical alignment for unidentified icons.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any mention of recording mobile-specific crops or alternate assets.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 6,
    "passLeafCount": 2
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S11-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14128,
      "endOffset": 14233,
      "startLine": 288,
      "endLine": 288,
      "statement": "- Enumerate logos, photos, illustrations, icons, video, textures, charts, and decorative media per page.",
      "sourceHash": "sha256:b153f42f3508e31cb91ec7493b9912a9be3a5fad57af8727d1a4dc0e57a6cc87",
      "fingerprint": "sha256:7c7547aba13d9b6b5b752719623bcd09549da8d8c51e512965b82ce4f5368ee1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:4890437b61f634c3cec15c0dae21341df347608edcb803728993984c67809fcc",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:966f8f80c379c72a5ec9549cc85ebd044e8ed9d64a50593d4a3761bb3f3a7ded",
    "rawResponseHash": "sha256:c32db6f9818eaaadc0a23776514bb56d6665beb04d8df8b13f219e2efec8f97c"
  },
  {
    "leaf": {
      "requirementId": "S11-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14233,
      "endOffset": 14487,
      "startLine": 289,
      "endLine": 289,
      "statement": "- For every asset, define page and section, role, evidence crop, displayed width and height, source aspect ratio, crop, focal point, `object-fit`, `object-position`, responsive treatment, loading priority, format, alt behavior, and replacement strategy.",
      "sourceHash": "sha256:1f43b90af2b051be544ea6993b6a2616d2d2b13a3a4fa56876ddd61b8fdd7662",
      "fingerprint": "sha256:5a9226aa916efbe714fcfe2b0acf6e4fdf273c7b77aa5cf8b993bd3f8d6b71be"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:14820f00fe9c912ced7497b718422d7d663d986a975146e6dec3c69a28c4d19e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX section does not define source aspect ratio for any asset.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d232d44227c7ce8290489a66a71ddbd393c7fe88f2154ed1099ccd954862b4c8",
    "rawResponseHash": "sha256:446b6153c9e3309b45b499d470556934a767e24380ff85bc6e4390a06a2d43d3"
  },
  {
    "leaf": {
      "requirementId": "S11-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14487,
      "endOffset": 14573,
      "startLine": 290,
      "endLine": 290,
      "statement": "- Name a familiar UI icon using a known library equivalent when it can be identified.",
      "sourceHash": "sha256:3eb1df61c1b408a52552e467c058a5daa221773db6eb11a8816bc2739a3e21ab",
      "fingerprint": "sha256:2a689552cf450705dd080dbf89a3752a9792a7bd9f3f9affcec07064b9f118bf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:0ca89e328f3c6143a342c4c92a29649f623a9c19917f68ffe2e0e5975e0c1d7b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 11 contains no guidance to name familiar UI icons using known library equivalents when identifiable.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2719fe5fa5399b9d180497544018a715d3dc1ce3c4c626ea869c2bd9efe318b4",
    "rawResponseHash": "sha256:6b747ab572e21a430df22873e1a62e9713a2cc3d499595bee52e2bf4881d065c"
  },
  {
    "leaf": {
      "requirementId": "S11-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14573,
      "endOffset": 14669,
      "startLine": 291,
      "endLine": 291,
      "statement": "- When an icon cannot be identified, specify exact stroke, fill, bounds, and optical alignment.",
      "sourceHash": "sha256:a205dab9b1f4084ed8136d68bebba9503d21b8f47318bc2745170ea7de985130",
      "fingerprint": "sha256:9883fe7c95538cee7af2ffcfaf77f2be9e05f9f6a5140149cc4b5b877cfe375d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:9c8fdbc30522667811e79b1656aa4f0ecbb5a12a6513a138c78498490d4998e0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any requirement specifying exact stroke, fill, bounds, and optical alignment for unidentified icons.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:83cce6a7775b4bf1a0147320c60ae8b86bace08d3f6b313e7e729f6b6c9d883c",
    "rawResponseHash": "sha256:70202e5bb7405cd5099147a73333eabaeeebdd538ff788742973ac9974ac1b23"
  },
  {
    "leaf": {
      "requirementId": "S11-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14669,
      "endOffset": 14764,
      "startLine": 292,
      "endLine": 292,
      "statement": "- Separate assets that may be reused from copyrighted or branded assets that must be replaced.",
      "sourceHash": "sha256:83914613f4d47a7238ac7cc81bc2427b4ac75db10e4103a69d7db2cdaba2c27a",
      "fingerprint": "sha256:d1664273d5aff90f1e4346bc160fdb47dc97403e459f1360a7f1cbf3b16c7d65"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:72c497bc4cb2a531b16d5bfd30a322682133df3c80553bb522d7abac6970d40f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d2e8e1aa00987fd3629612f278b66e918619e5464c9bb92bf319f87dd522bb5a",
    "rawResponseHash": "sha256:72ed71eae98d4b92ca4e8bca18847731ef1c51c00157012bb76d4f1f21bf073c"
  },
  {
    "leaf": {
      "requirementId": "S11-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S11",
      "sourceUnitId": "S11-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14764,
      "endOffset": 14816,
      "startLine": 293,
      "endLine": 293,
      "statement": "- Record mobile-specific crops or alternate assets.",
      "sourceHash": "sha256:c19592448009a96c52798bfb610c7812130700f2bff60f999208d1ac0df4e467",
      "fingerprint": "sha256:f5e55cc5577404b4e3490ae6649ff0b928056506bf03a8d5da01f9fe449a1c85"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S11:S11-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:0744ea798cdd3932ea880b9446d817389f916372736c7aaeb19824e6a91c3aec",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any mention of recording mobile-specific crops or alternate assets.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f30beff02f8464b6efcfa77f30489ff04f1d40457c04a1a7f574d5b62ec800ef",
    "rawResponseHash": "sha256:ccd550011740509f51fdc7c466c1dc943fa9d4896aeceaeccba31ab2e8c2caf5"
  }
]
```
<!-- END VERBATIM S11 -->

<!-- BEGIN VERBATIM S12 sha256:e2cd1042b7bfbde64211fd79a5c61bf7603816ef4d060856ec48868ebfa0f2de 14131 -->
# S12 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:5db7bf7d76a6f2e694db266d6da0b9c49ffd69ed7a21c1246f1e5d37da1f2366`
- Normalized output SHA-256: `sha256:9beedffca3e4abf7436a944317b036380e61bda4d36b566784f1b1e3a208c2fb`
- Leaf records: `7`
- Leaf records SHA-256: `sha256:4a93a68a10574e178d8f8ff29f20f4d78ca7466cf02391b64660b209c45939e1`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S12",
  "fingerprint": "sha256:5db7bf7d76a6f2e694db266d6da0b9c49ffd69ed7a21c1246f1e5d37da1f2366",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S12-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not document 'order, visibility, navigation mode, image crop' for every page and major component at each width.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S12-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S12 does not contain any statement defining breakpoint rules as behavioral transitions; it only lists numeric breakpoint values and associated layout changes without describing them as behavioral transitions.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S12-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not state whether content reflows, stacks, wraps, scrolls, clips, hides, moves, or changes interaction mode.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S12-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX lacks any definition of minimum or maximum sizes for dynamic content to prevent fixed-format UI resizing.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 7,
    "passLeafCount": 3
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S12-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14853,
      "endOffset": 14992,
      "startLine": 297,
      "endLine": 297,
      "statement": "- Use columns for at least `1440`, `1280`, `1024`, `768`, `390`, and `360` CSS px unless the evidence supports different canonical widths.",
      "sourceHash": "sha256:ced7920c2d7887dc78d0a6870523fb495e255041a6f337c3c3abef5ad6236fcb",
      "fingerprint": "sha256:4bd6d8c554326583282aac52de5092d179b0fad13909e2b789be2e800df970f0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:bccbbb1d9abc33dde744049d498928f556826e8fffd134145205ace354717fce",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2b57fee230e01549abf9cdf67c73c80562c8098cbb3ff9445c7aaa0c24f42609",
    "rawResponseHash": "sha256:a6ed621eb10657416c31aebf02dc6746a8ea808af5f6a5c4c878792a12adca61"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 14992,
      "endOffset": 15174,
      "startLine": 298,
      "endLine": 298,
      "statement": "- For every page and major component, document container width, gutters, columns, order, visibility, navigation mode, type size, spacing, image crop, and touch target at each width.",
      "sourceHash": "sha256:d0f1221f6de30bd765273c950f6f774cbde8c9bc94e6feab415a185fff96647f",
      "fingerprint": "sha256:29e2e73a27f02894cb4321096a1fd4e5bb5bf2fc0981eeeea174c6e2851dab25"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:c3fa310a8ad3e0e70e6d6f637fec9fd1c48b35322d035f1eed7edc49e9d85795",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not document 'order, visibility, navigation mode, image crop' for every page and major component at each width.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7172fc9206880b4fc8d3b118c2b955494c87aa5422a22b96cd587f809eac518f",
    "rawResponseHash": "sha256:393f3bfcbddf44b2c7a3ab1fbcb4ace30b18ebf2892d5c65d44b3b346bdc72f4"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15174,
      "endOffset": 15246,
      "startLine": 299,
      "endLine": 299,
      "statement": "- Define breakpoint rules as behavioral transitions, not numbers alone.",
      "sourceHash": "sha256:43a96adb1a3f6b75383b0d475ee3a52447e6d7a9cfa9f832eeff2495eddbd918",
      "fingerprint": "sha256:6333e18a93ea3c273e8570d511c39cabd9cd0228cfef57a2c0a674c3330a9f0a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:6bb49f1b3b364561811490da5029f67c1bfa77a3e442776a85180213c6408cca",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S12 does not contain any statement defining breakpoint rules as behavioral transitions; it only lists numeric breakpoint values and associated layout changes without describing them as behavioral transitions.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cfd4e9c53d96c0d5b70a9dfd84bee221349f2c7bc25f9d879c4105e692b460f9",
    "rawResponseHash": "sha256:b9a2e531145e7f1bfb9fa1138211d6ca6f094ca2c9b237ac8252eda4072dec0c"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15246,
      "endOffset": 15329,
      "startLine": 300,
      "endLine": 300,
      "statement": "- Mark values without direct mobile evidence as `INFERRED` and provide the reason.",
      "sourceHash": "sha256:e472974771bd95660a7e826b3c38cbf6c0579f81136c040bd8418fb6d9bde64b",
      "fingerprint": "sha256:c5d2d174e3643890ed164adfe33c1efb7f51c41a40323ac294e37f43c5beeb7d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:9cf66a6e6cca5577cbee20841f9a5e9ed0184ce1e50e85ccade5f84428ab82c8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8ffe9268831b6119a4d568d99b795575fd5128734192e750431975ad80442aa1",
    "rawResponseHash": "sha256:f1e539c24f8ed00056818dbe3ec827824c63b5a6f9e9237e17eaec08e2b08a88"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15329,
      "endOffset": 15436,
      "startLine": 301,
      "endLine": 301,
      "statement": "- State whether content reflows, stacks, wraps, scrolls, clips, hides, moves, or changes interaction mode.",
      "sourceHash": "sha256:3c5532c1ffb5d8b3539fa58b63f53f752578841c1d0eb1c4bd8514a19150aacc",
      "fingerprint": "sha256:7bd83ecb1dea17a5d271f01ac6b1c2950fff06cd68ad520b3dc8d485c7c3c4b7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:022a58941d9714c881d1fe395dd7414b6619c759336714ade14cf156f1edc16e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not state whether content reflows, stacks, wraps, scrolls, clips, hides, moves, or changes interaction mode.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5bd0a92c99254aa9e3f932874cae5a33b1d59ee5e6a19ab439bac0109d658082",
    "rawResponseHash": "sha256:c30f4a0bb696dac4955f778c016ad101104d96eabb9ae0bead913ea485ff05aa"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15436,
      "endOffset": 15534,
      "startLine": 302,
      "endLine": 302,
      "statement": "- Define minimum and maximum sizes so dynamic content cannot resize fixed-format UI unexpectedly.",
      "sourceHash": "sha256:421f8d0083254a589cf25ae20d9d59c92f01dcc027018f8d90ba5656ebbbdb2b",
      "fingerprint": "sha256:b64f625cab696f36c90031bb020e711a49c750488bd78bb281a08a610ac5964a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:37ae70cef4c8c287a420b00e76e3a6374d376e3d459a90b16bd7291976416e90",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX lacks any definition of minimum or maximum sizes for dynamic content to prevent fixed-format UI resizing.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:08a60a18db13f183d869f5a5f019fb0001e743c9cb60441a53b049dd645adc5b",
    "rawResponseHash": "sha256:02ed4e54fd7a82b44485442155442855940cca78aeb286431df38165aec753db"
  },
  {
    "leaf": {
      "requirementId": "S12-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S12",
      "sourceUnitId": "S12-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15534,
      "endOffset": 15608,
      "startLine": 303,
      "endLine": 303,
      "statement": "- Require zero unintended horizontal page overflow at every target width.",
      "sourceHash": "sha256:9ab34f331ae8d678efcfb9b5f202ad95dab44dcbb676dd135952a7d9d364d724",
      "fingerprint": "sha256:04e7b7fd8c2225b37665a19353ee6d5fc2a81b708be3076c9a6e724e22788710"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S12:S12-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:8550dfef017cdb79774141b72d6261acbc10438254586220706f40a3735f9410",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:21b5d980375dd3375dfb7c634bafe10c75804fe0d117b99c4b6ed220f695d795",
    "rawResponseHash": "sha256:bed936806d33fef8bb42a699bd84a9e83eb0c3733117d3cb112b70c848c0d56e"
  }
]
```
<!-- END VERBATIM S12 -->

<!-- BEGIN VERBATIM S13 sha256:12fce552f7c48fd52e867849f1a6ae577a0cb3189b777bc4623364b38c03111f 28004 -->
# S13 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:113e847cccc789e8b1fdbb6bbbc57545bcaec49c091cf5ea19f028f7d20d316b`
- Normalized output SHA-256: `sha256:588a0ec03e6dd822065df2b3cf7ec33a5944b3405d984f84047611fab457d999`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:ed84520628144ee8935ec499060e056ca4eb2a54e48c461b5b30741837204599`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S13",
  "fingerprint": "sha256:113e847cccc789e8b1fdbb6bbbc57545bcaec49c091cf5ea19f028f7d20d316b",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S13-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain a specification statement defining what must be specified for every applicable state.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for the requirement '- Visual delta'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the specification leaf '- Opacity' as required by S13-DOC-U0010-R001.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification leaf '- Transform' is not represented in the DESIGN_INDEX section '13. Interaction and Motion State Matrix'. No row or entry corresponds to transform-based visual changes such as scaling, translation, or rotation as implied by the requirement.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a specification for 'Duration' as required by the atomic leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S13 does not define or reference the easing specification '- Easing' as required by the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a specification for focus behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement addressing keyboard behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any specification for pointer behavior. The leaf requirement '- Pointer behavior' is not addressed in the Interaction and Motion State Matrix.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any mention of a reduced-motion alternative for interactive states.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not include all required states: active, loading, error, empty, success are missing from the matrix.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 14,
    "passLeafCount": 3
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S13-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15654,
      "endOffset": 15757,
      "startLine": 307,
      "endLine": 307,
      "statement": "Cover links, navigation, buttons, menus, tabs, accordions, carousels, forms, modals, cards, and media.",
      "sourceHash": "sha256:9701dd87d8d7686cfbe84fa82d14211100b393d0547903b0f7850ff741ed29c9",
      "fingerprint": "sha256:b36f9b79059079ba100bef9001df370c7b9da7394ed236c0094d3b4116c8e8a9"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:4f5ac50238a7d31ad988b0c9c832a635e26be62e9ebac5b549e67c832e8453a3",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:05046a38a5895e9650daabe7739c6d487ddf43d00ea068ef1dff3f868e0d4368",
    "rawResponseHash": "sha256:264745ee9c0a2e60aa7669f7845487af85400bedd43b53ef2c208c527cd5ca15"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15758,
      "endOffset": 15794,
      "startLine": 309,
      "endLine": 309,
      "statement": "For every applicable state, define:",
      "sourceHash": "sha256:c9f46fff7496e33063be7b3b7e9642966353b205d62683f8bd5003ca9a067dde",
      "fingerprint": "sha256:ed0cf8657b3e25ac59c05fba10a126c9847c1b5d2c3b3709594c720fea8cbc92"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:f5d8b9d78094f650cd585f97a701797ed96362bb1a8bdd1d71c5a48985d6e694",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain a specification statement defining what must be specified for every applicable state.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:77b5520884b77083842a8d80c7f374d0a3e5a0161e3f66d6705939d172c6c2be",
    "rawResponseHash": "sha256:faf4ab651c258aa505cd1c4e77b29a61150e71aa47fb8aa1ec0c9f846ffe8803"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15795,
      "endOffset": 15805,
      "startLine": 311,
      "endLine": 311,
      "statement": "- Trigger",
      "sourceHash": "sha256:315a5553ec6844a8fac52e1745508cf55b223d4b1eaec0c5785da394ed75b311",
      "fingerprint": "sha256:0edd5a64fa9fc6d1ae2df17d92ade18cbf9e71c9f0d6a0891f8cb84dd4e0880f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:8058e4f31180d5dad8207be0365be5be47fe028ac8fb1c7e12935ffd59774ebf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a049447b37310488fa583242a8f293e6f47052aecaeec4b2f549742b18f0b204",
    "rawResponseHash": "sha256:dae83025bbf1fafa962e6deae2c7a887582e545c0ced68d51589b5a4487fcda6"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15805,
      "endOffset": 15820,
      "startLine": 312,
      "endLine": 312,
      "statement": "- Visual delta",
      "sourceHash": "sha256:31c07c52a4871ebb6499007a0b9a8e8e3f33328fb49ccbd82c98af339771ef0f",
      "fingerprint": "sha256:5b8a36dc7276e236d93b59bc189a6aebdb8786fd95f62338a6d93b3c61b1d3da"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:8691773ae9b575335b6733912ddcdde7412b221c38d728f88a5fa9088a402545",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for the requirement '- Visual delta'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a006cb9634362928d83dca8a6f1cc21d05aa4506d8f6c54dda8233419c80d1bd",
    "rawResponseHash": "sha256:76787f19296b9997d7b6bad947403b459fc41888eea955774f5df58f2ed50af8"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15820,
      "endOffset": 15835,
      "startLine": 313,
      "endLine": 313,
      "statement": "- Exact colors",
      "sourceHash": "sha256:5a397f0805493a2ee62e18d56c9a69c7bc4446f5775d023a7da3c72b198c524e",
      "fingerprint": "sha256:0d2864a249441ce94660fb67dd4ce659b6337eff3dc04b99f41185eafd70374d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:01bd32568324d0058992bd52d678114348f5c31e6c7d52ad34dba8a29045dfc2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3805762ca8c0873c8b78e6cace9ccdfe9cd47a731086b4998e763f57611c60ab",
    "rawResponseHash": "sha256:efb0543ad8de129fc2abb3b3ffc70c81919ad3d7add26f33b0b9dbc38ebb1817"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15835,
      "endOffset": 15845,
      "startLine": 314,
      "endLine": 314,
      "statement": "- Opacity",
      "sourceHash": "sha256:937864e1b18a7becc5a2e64bedde5f64c9ee33703be62b688a05d955f1f42580",
      "fingerprint": "sha256:99079428889705c1479d78be246ded99e268abc4326a9eb19f66e3cf6549dd7d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:40708d965c821878c6c4be70b8fc136e34c19b7a63ba6acc0c94eb8e265232c9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the specification leaf '- Opacity' as required by S13-DOC-U0010-R001.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f23c934377b8d57ed9759010e28e9377493503e85e9c8141a5cb3684e3f38f77",
    "rawResponseHash": "sha256:94b7fe89b2825b87d9cb74a3f4a3feb78b9142331e24f9b35ed5e1449a27c4a8"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15845,
      "endOffset": 15857,
      "startLine": 315,
      "endLine": 315,
      "statement": "- Transform",
      "sourceHash": "sha256:354782c9d83c1d9aead7bae29526a03c476b57157a4ca905501e2015d2011e6b",
      "fingerprint": "sha256:c06e724998989775b7587cb7c1311aafc55726b5eaed67f8ee608d246b2dcb04"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:46dac7f4b4a0994ffbc813aba6750725bb0cc99cb0b2ba8a8c3250f8d00c8a4a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification leaf '- Transform' is not represented in the DESIGN_INDEX section '13. Interaction and Motion State Matrix'. No row or entry corresponds to transform-based visual changes such as scaling, translation, or rotation as implied by the requirement.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fdc431ce2aceb8b01b093654baeb245fa894108d88f2faf1c715b6b4bdfcce10",
    "rawResponseHash": "sha256:6d1e2fa89ed1286093e26552c0d986129eb54463fcf8b7605674885e7048c334"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15857,
      "endOffset": 15868,
      "startLine": 316,
      "endLine": 316,
      "statement": "- Duration",
      "sourceHash": "sha256:27abf14881d14711db61bb2b745d94ff955508d3a5c16c080d2b66a113c2489c",
      "fingerprint": "sha256:5c37f1e851a189bf6da23e2054ed0fa65fdf73699f5c4c6fcf3f3a76a66e287e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:55d7287228bb8561697595e9201cefa844c611582f3e247b567b506c973fb199",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a specification for 'Duration' as required by the atomic leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ca0a02a7e6de53414475db6185f3625a83d0b6001ff23e1a322cbf46f3043a31",
    "rawResponseHash": "sha256:04b540984f61538bb179f814a5108b095711feb7746026ec4e08028455e74907"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15868,
      "endOffset": 15877,
      "startLine": 317,
      "endLine": 317,
      "statement": "- Easing",
      "sourceHash": "sha256:f0d5ad3ff9e8cd1f84d1aabcb1ce6061afe9d0f588d671e3d764cae30c8eb64e",
      "fingerprint": "sha256:b85e1b8079ebe8ca563f7cb40c84560628355e0ae45ca96e3ed687325ad53384"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:a69198ea5866761a0c075b992d3977ce2ebc7544c68261febf3b1c7d3621ad49",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S13 does not define or reference the easing specification '- Easing' as required by the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:babdbaada64b04c7af231999a80e06841d338fe8b68b97d132070bb44de7b9d2",
    "rawResponseHash": "sha256:4ecd13778646b5a4b4ac4b6adf34d1d8cb62ee755c5d751d33b7f7ff126381b3"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15877,
      "endOffset": 15894,
      "startLine": 318,
      "endLine": 318,
      "statement": "- Focus behavior",
      "sourceHash": "sha256:5cbcaee06a4a7aaa781d08816a3a0d37bba89ad144e2c8494956b215619c5dfb",
      "fingerprint": "sha256:a8bf1a71bbf8df095025cc069378aaab96c3ca6e7919d8cd9f5b74ca373b4028"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:ee7e616b13d1915e07225d2a17a407d19f33c3c507b994cfb43a4dfefb6f4e0e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a specification for focus behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1ebe48e82032665395f9ff4f0e308b59b62421409fc5f6684910ffc8bcc910f6",
    "rawResponseHash": "sha256:7300f5aea2767118ca06c026bfc27d827aab064c0f3f6f4cf9edd8b427b4d5f2"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15894,
      "endOffset": 15914,
      "startLine": 319,
      "endLine": 319,
      "statement": "- Keyboard behavior",
      "sourceHash": "sha256:006e1a13842e646955296841826edabfc7194b8d566142aee44ba13b1b4b0d33",
      "fingerprint": "sha256:59ac5309e3eb5ab41256962dc0f2e94f6bb85e33e42d62372224a1f212189bad"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:8d172e52e9a47138694cf642b6169e7c8c623d73971b6d3707a489a0bc758249",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement addressing keyboard behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:99fdac17ad2e820dd8f3f68caccda210900a0ecf494a25ed28bfbca8cb35337f",
    "rawResponseHash": "sha256:9d2dd7854c98f282137c45e090ece48a2455fe9ad0041d1bde2c9a756edb64ea"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15914,
      "endOffset": 15933,
      "startLine": 320,
      "endLine": 320,
      "statement": "- Pointer behavior",
      "sourceHash": "sha256:a9053d17b854bb2d7a8047a2e212c494d9193dd610ab410f5ada3cb6e9e33859",
      "fingerprint": "sha256:ece3c6066d06802a3a8a23335c80eea2f029ccf42bbb44215da59ae597d8dca1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:b9303d7b43f5615ffe3ac515cfd9fc826cc4790eadf9e73aab02ac451e5c5cd1",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any specification for pointer behavior. The leaf requirement '- Pointer behavior' is not addressed in the Interaction and Motion State Matrix.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e469890c69698497e1abbac5a960e9e2c70221706ab05e7d4a876dfe6cb2475c",
    "rawResponseHash": "sha256:6b2757636ec6fd19bda8da46550dcfd5603d88265c05e57248b5a8ba91037cc0"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0017-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15933,
      "endOffset": 15962,
      "startLine": 321,
      "endLine": 321,
      "statement": "- Reduced-motion alternative",
      "sourceHash": "sha256:7f72c7d1c23342454eacda364fc08bc23ee882befea20783a78eae1a0729b04a",
      "fingerprint": "sha256:b657ae267daf2c208cfe3bfc45039128249ea19fb48e920d6a7489643dd939c7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:fb53e6e89adf208994157293e63fd5a8f35bbe8f65574d2e6cb34799519cc11c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any mention of a reduced-motion alternative for interactive states.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ebed59706f7ddaae73bd3797fd8aea0bd843c2acda152b5028759238b3e31edd",
    "rawResponseHash": "sha256:6ef7af2c7b3d972a4fce7fb0501a40fbaec3fa2a0a1ac8657b519c7a6bacd312"
  },
  {
    "leaf": {
      "requirementId": "S13-DOC-U0019-R001",
      "stage": "document",
      "sectionId": "S13",
      "sourceUnitId": "S13-U0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 15963,
      "endOffset": 16163,
      "startLine": 323,
      "endLine": 323,
      "statement": "Include `hover`, `focus-visible`, `pressed`, `selected`, `active`, `disabled`, `loading`, `error`, `empty`, and `success` states. Screenshot-invisible behavior must be marked `INFERRED` or `UNKNOWN`.",
      "sourceHash": "sha256:860f52acc696fca9eb17091e8c0ac95c42f350a56426a14ec46a5fb75152ef7f",
      "fingerprint": "sha256:43928c6c46de3bd8f4dd755d4eee505e7667617490bafdc7fc3e3255ad841620"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S13:S13-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:fe55f05f288ede19e80ea8f107c7a74288f51fc4f315c5d184444014b16e3cbd",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not include all required states: active, loading, error, empty, success are missing from the matrix.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e605bc0885a1531ffa50862f8dac4ca542e1f9861ef6319f354c7994bbdf0ba8",
    "rawResponseHash": "sha256:4a0e3c93fc1690035a77289a9c10bf51873d2d1ee609712f79df467c8d63f3c6"
  }
]
```
<!-- END VERBATIM S13 -->

<!-- BEGIN VERBATIM S14 sha256:8932865e8d8802ed8776f0543c345f042ddc6e89c44ccee725801e13b6a1d1f1 26829 -->
# S14 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:8e02aaeec1b0f5ab3de4b21f5f8b72660db1a89debfc0084ce4b4b6985b972e2`
- Normalized output SHA-256: `sha256:d25cec9cab27242b4fa76b43e61bcf23e78a800585f7e53629aa385ba2c20f9d`
- Leaf records: `15`
- Leaf records SHA-256: `sha256:66840276e0e2e96537f6b9d1c6bd2f0efc2b6d28b9e552c5af0276c15c16e328`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S14",
  "fingerprint": "sha256:8e02aaeec1b0f5ab3de4b21f5f8b72660db1a89debfc0084ce4b4b6985b972e2",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S14-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S14 does not contain a requirement to 'Define heading order for every page.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 14 does not mention defining focus-ring tokens.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 14 does not contain the requirement 'Define form labels and descriptions.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX section '14. Accessibility Contract' does not contains specific alt text behavior definition for meaningful or decorative images as required by specification leaf 'Define alt text behavior.'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The requirement 'Define live regions.' is not addressed in the DESIGN_INDEX Section S14.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for error association.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S14 does not contain a specification to define reduced-motion behavior.",
      "evidenceRefs": [
        "sha256:4316cae842cdf23012cf5aea808456f9ed4e97aa7d140b5685e9117639fddd32"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S14 contains no statement equivalent to 'Do not rely on color alone to communicate state.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 15,
    "passLeafCount": 7
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S14-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16196,
      "endOffset": 16221,
      "startLine": 327,
      "endLine": 327,
      "statement": "- Define page landmarks.",
      "sourceHash": "sha256:72439bbbff1fcce4f285aed690d7ef3410f0e821f29cbdbebc9be2da556f65bb",
      "fingerprint": "sha256:a66a9087a950d676ea7f41d47675daf04f9f791a9392006589cad958899b3dc6"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:70e3f1f019482d896a44930146b0e826172d3da037eaabc2deb9b361d46a8aff",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4fe4a82dc61764d29a42dec8923075a26137d5ee96ac7b015e96f61ac1a00eca",
    "rawResponseHash": "sha256:b05c6454b6534d152e20c77a19acb1b8db772afb4986f8f271116de000b5b74a"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16221,
      "endOffset": 16260,
      "startLine": 328,
      "endLine": 328,
      "statement": "- Define heading order for every page.",
      "sourceHash": "sha256:8af21d853150b489bf36f0c5d966d3e69d90189a226c6368badfbb6d631e398d",
      "fingerprint": "sha256:c181c217fcd5850f231ccc487378b581d1772936d10118efabdd991ee057fbcc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:e32f1568f3f4268fac30893ac8be10684dd0086d5adfc3096a148c369db454fe",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S14 does not contain a requirement to 'Define heading order for every page.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c9c51692c25a4c85bb6bb583839697d81d479338bbe2c738f1c0172188e9082c",
    "rawResponseHash": "sha256:8c1b5257a70a67772a3b3f2fdba5a3f528edd0edc4efae23bab513fa768fa941"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16260,
      "endOffset": 16282,
      "startLine": 329,
      "endLine": 329,
      "statement": "- Define a skip link.",
      "sourceHash": "sha256:114a2c49271a501dd36dac4db56dd455b05eda0db0981f568c0872de14cadf06",
      "fingerprint": "sha256:1b09b6f3367f9016c5a4651fd8253a40274b0e204273f246aafe8098799c9a99"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:92f0dc1ba46aea2f164f72d81f9532c7da817775cb881d633040682b7194268c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f824413684e91bc89e53ae25c25e7db7756ddbfc90b1c2b0a63688c780e21d75",
    "rawResponseHash": "sha256:07c5e3524d4a87a8f1d9713a2037e1f57ee027bb99e7ee14b1df79e6cbca1854"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16282,
      "endOffset": 16317,
      "startLine": 330,
      "endLine": 330,
      "statement": "- Define keyboard and focus order.",
      "sourceHash": "sha256:155e92997ef957781aa776d260cf760e53d25ce36251877949415e2c8af649cc",
      "fingerprint": "sha256:96994ca9b90ede000ecd9aec9162b47269802287d89040af5cf9a46554819c0a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:7b098b2c5361e944e179c76a16146773a9ac10ffa90780d47265b6011244d4b7",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2b9ad5288bf09ccbb88f50f67e6611de5790f4d22076b36a9e5e1dd88571a937",
    "rawResponseHash": "sha256:9c07c9739425e26781c7e3e51af4a070e9aacb13b0712b12978507a4e32753be"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16317,
      "endOffset": 16345,
      "startLine": 331,
      "endLine": 331,
      "statement": "- Define focus-ring tokens.",
      "sourceHash": "sha256:5cf658ea7f1f3dbb746a3e4cc7105b18906b3ddcaad5ac4acbb864deef47c56f",
      "fingerprint": "sha256:6273c9ba146422495f72406211cd47875e9aec12e46075d1feb8a4dcf8ccb20b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:7011444a0b091debb5f60e9d859cc649a165d6519f6a9da907860d842b6a0db3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 14 does not mention defining focus-ring tokens.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f33a94115d14ccfd4c601331920b3602f107f7813c425fc97905d52a2c1a742f",
    "rawResponseHash": "sha256:df3b69c095a23967ea2d734b151bc2acdbc17bb59faaa298ff01f3f81eb949fa"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16345,
      "endOffset": 16384,
      "startLine": 332,
      "endLine": 332,
      "statement": "- Define form labels and descriptions.",
      "sourceHash": "sha256:88defed46536c7ae6a0bb533c00e47e41596092ece4f7642222bff3258406555",
      "fingerprint": "sha256:e593e0cfc7515257b72f8ceaefb1c19935cf80fa0205959d9c78e0c6785ea9bc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:6ef87e03f5730581d960086f18e6692c2c2d223c8a7a4b4062528a9234be31b3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 14 does not contain the requirement 'Define form labels and descriptions.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5a37695851abe4f6f4a0971ea6b50490ddfdeb9b4ba13add597bdab5561586c5",
    "rawResponseHash": "sha256:e722d2c0b9f4469893b57abf8bfad6f36538d48c03510f39f65479043ec1ba8a"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16384,
      "endOffset": 16412,
      "startLine": 333,
      "endLine": 333,
      "statement": "- Define alt text behavior.",
      "sourceHash": "sha256:457b90f73469da0e396103170d5da89f6603f41a365220cd7af4fa548e388ab1",
      "fingerprint": "sha256:c6b3f98693606c85dc4995a246a6e06e0bef7f4434e96057795ac5b266e6d752"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:0f43e7e8c978400e37edde3f2d364264561551e46f2080e488c008c7234dd2c7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX section '14. Accessibility Contract' does not contains specific alt text behavior definition for meaningful or decorative images as required by specification leaf 'Define alt text behavior.'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:23e11122d6e7bafe2904648d357bed5c274ac5919611477d0311b3c80ccc1d0c",
    "rawResponseHash": "sha256:d4ce9ff905b6d9660bf17412413f35a463444e0720dd7d12d808bc7fe38788fc"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16412,
      "endOffset": 16435,
      "startLine": 334,
      "endLine": 334,
      "statement": "- Define live regions.",
      "sourceHash": "sha256:81d45a2f4c728ca138db062146eb4ebb8240891372b9bd95eb4964bad1413dc4",
      "fingerprint": "sha256:d3c4e64fa6438f5e41323cbf5cc9f6b69a38eef4a3fbecd2370ee338cd648159"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:e71e3a57b932bd486186e85a81892ac8dccd38c5fed43ae8ecc228ae0e868957",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The requirement 'Define live regions.' is not addressed in the DESIGN_INDEX Section S14.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:037b759adf3c34e63c7240285533e360f5e912e850f8c35a905a2966895adba9",
    "rawResponseHash": "sha256:f5a3a9857e1780cfad40f1130943efd8bb99b061a2bb0a52d0150e8d0ddd11d2"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16435,
      "endOffset": 16463,
      "startLine": 335,
      "endLine": 335,
      "statement": "- Define error association.",
      "sourceHash": "sha256:d857dea09e87d35d6f8780d19b965865265823a7f07698068bae406913010804",
      "fingerprint": "sha256:6feb43e5752ccd161ba6ebe6b54a4f6353eb9ad3b29aba6be7a71d10c32e0e7f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:4614fcd9de7b8abb42997ffaf5512a013470d5420a8484f64ea98050381ec6fd",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for error association.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7cdd9723fd351ad66d9c6aa2ebfc46169d8e608590e12278cf90cb3a1514dd44",
    "rawResponseHash": "sha256:f710a5701ba6040aee19c3d68e2279460138fb283e7bece4c3f9fddc2f1616f7"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16463,
      "endOffset": 16490,
      "startLine": 336,
      "endLine": 336,
      "statement": "- Define contrast targets.",
      "sourceHash": "sha256:f35ff06504fba8e7f0e3538012f2b6829465ccebc7c30210913d773c7c0951d4",
      "fingerprint": "sha256:b33eeafef7377ce77c8635c4b649658d1ec9804c533f9536bb02598768df8f15"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:6140b2644be635b3ebf5216345ca4d141e1629ae4387ecf34246021d16bacdf5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7aeb85497cede320a2e65fe40fb840cf41332fb70012b6f57da4051a49ea9bda",
    "rawResponseHash": "sha256:3d567496d49771f9d61352073bf8c00355722779ff6b6699f6fc20f713b4a37c"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16490,
      "endOffset": 16524,
      "startLine": 337,
      "endLine": 337,
      "statement": "- Define reduced-motion behavior.",
      "sourceHash": "sha256:1d678dd142202ddcb06bdccc79e856257fdf2555586964d49747c976263c81ed",
      "fingerprint": "sha256:05d850ec3e8375ad2f3610d22e13b44c0c32db2804ceca00e963d9ea557458fb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:0e5a29cdd544753a4ced668aa3365c854c8f6ba35a047f5a5943877f9b5be794",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S14 does not contain a specification to define reduced-motion behavior.",
          "evidenceRefs": [
            "sha256:4316cae842cdf23012cf5aea808456f9ed4e97aa7d140b5685e9117639fddd32"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:73b329e0e1d4ccfb8c9539d78a2003147e66b2595f5be1d65acf9a35711a5d34",
    "rawResponseHash": "sha256:9fa9f194d470deba7f71ad714701af9a3699783a54f300e0f4f999a10bdf3aec"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16524,
      "endOffset": 16559,
      "startLine": 338,
      "endLine": 338,
      "statement": "- Define zoom and reflow behavior.",
      "sourceHash": "sha256:12c6f03d04a933b68b2d18759e6ce0f120d8daeb02e127010b7ad3500ba7421e",
      "fingerprint": "sha256:aee631c45c209f4e9ab9e4c0080c9c2829b43d75c1b82b04aac5089eb2de0b1f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:3fe539c89672d118f98fb18d88b8544af03ec33fc8763b28ebe89889e305bbfc",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1120d72e8a6c7658740facaea6d6e0b43477ce54c06bf7c344c30aabe757e0d0",
    "rawResponseHash": "sha256:a7ba9fd5fe9fb315ad79eaf352e7cc45b11f07b15fbe26bf2648f8a2391d6322"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16559,
      "endOffset": 16591,
      "startLine": 339,
      "endLine": 339,
      "statement": "- Define minimum touch targets.",
      "sourceHash": "sha256:2b68bfddbaa50d9734fb5ce7a968051e45c94105089501bdcc8d578004a69e91",
      "fingerprint": "sha256:f6f38f96a0e22e5df2fe07b1be93e8ee328f846d06ebb10363adfa5214587249"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:c339904206a7293f915b077c0e93de06b1d976d1e3fbdf70e83c38c959687bbb",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9b5aa661eea13a7146dd8d32636faf0aa4befd42d72617a00bed60109e4e11ca",
    "rawResponseHash": "sha256:fb81d35aaec209cc1926d85b5419e78142fed25665429bb7663371e2e6105aab"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16591,
      "endOffset": 16780,
      "startLine": 340,
      "endLine": 340,
      "statement": "- Navigation must include menu-button semantics, expanded state, focus containment, focus restoration, Escape handling, body-scroll handling, and active-page announcement where applicable.",
      "sourceHash": "sha256:6cda2a49730d5972c7c5098e6df069ceddb1ec6a441fbb524fbb2daab0c511d3",
      "fingerprint": "sha256:febb61b63a446401f2ca11c87936a8a1e4ea410b0f0607c6d5e2c68c1c3869eb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:f8edd5cc019d4c21aa205694ec6f4561db6727f3b052dedfc300d740fe802507",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ab0aab1d738f9ae5a818fddd7f769922b19b91c2c7259f1c25a4bb9529309cec",
    "rawResponseHash": "sha256:51771af7a0a84e03d005b9295b6f121c9aa177152b621e41403414d28cf639d5"
  },
  {
    "leaf": {
      "requirementId": "S14-DOC-U0017-R001",
      "stage": "document",
      "sectionId": "S14",
      "sourceUnitId": "S14-U0017",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16780,
      "endOffset": 16831,
      "startLine": 341,
      "endLine": 341,
      "statement": "- Do not rely on color alone to communicate state.",
      "sourceHash": "sha256:43537ce88ca800ca544cb25cc126549bc7fe41f0dc2ab2df79726ad10c5a04b1",
      "fingerprint": "sha256:4edc95fd4b703a1195336b43e7d881ec3f174b5699f50c424832fd8960f6c8e1"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S14:S14-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:9b9b829de0a453ce08c31a40645657492b5436fd35c1c6ff0c9b693759e88367",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S14 contains no statement equivalent to 'Do not rely on color alone to communicate state.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:12ec39aea8cced9c76dd4767a7467565bcd7dad46495010d86b6898609b5afcd",
    "rawResponseHash": "sha256:7b45184f5fa89720cf9776133f266f2e36d74234dfec170e03f362a57fc0a6e5"
  }
]
```
<!-- END VERBATIM S14 -->

<!-- BEGIN VERBATIM S15 sha256:370a8b3b8df3bed7974df5e259d700de907e47a11460fda331275f01b6137e27 18713 -->
# S15 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:6c57e50bab6e31584406f792a8a2e8b3e0f39a54f1ad30ffb5c82c4fe8f68619`
- Normalized output SHA-256: `sha256:63ceecaeb4e1270003030b1775457efce81a8267ba52250242140714b6c31525`
- Leaf records: `10`
- Leaf records SHA-256: `sha256:8fb1f9cc9b8adf6020ed7ab828c050bb48800b143f674af83ca98fbf7427e5f1`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S15",
  "fingerprint": "sha256:6c57e50bab6e31584406f792a8a2e8b3e0f39a54f1ad30ffb5c82c4fe8f68619",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S15-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 15 does not contain a statement equivalent to '- Define page-specific data entities.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not explicitly define which values are optional or nullable in the data model types.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define ordering or grouping for any content types, despite the specification requiring it.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any formatting rules.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S15 does not contain any statement defining localization behavior as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not define success content is not addressed in the DESIGN_INDEX Section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 10,
    "passLeafCount": 4
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S15-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16864,
      "endOffset": 16902,
      "startLine": 345,
      "endLine": 345,
      "statement": "- Define page-specific data entities.",
      "sourceHash": "sha256:a6df8888a009e569642571cea28d13c83802c65235a4c06167f9d5901ece0de6",
      "fingerprint": "sha256:ae265c693e8f49363f3d45018f5ceea3f640acda519f81fb2002310d2ae2d684"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:02001c1adea331395c35f5413af4919d827fc2b2f1744462ef3074f0e2570e56",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 15 does not contain a statement equivalent to '- Define page-specific data entities.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:dd9a357f7b9646a78c5628ece692a45f605895cffb8ab1b665cf8fe99555f8e4",
    "rawResponseHash": "sha256:4a45c876ab6d47c192fb2f6daae8c16f79de0f5dc299bae645bf227ab7a8a007"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16902,
      "endOffset": 16943,
      "startLine": 346,
      "endLine": 346,
      "statement": "- Define fields, types, and cardinality.",
      "sourceHash": "sha256:25c1ab5d48d666c0a4b1a479cdaa7fc43e6e44004d98f10153c6476e880a8975",
      "fingerprint": "sha256:1c3d7252e1d61760f1460e95e3836e5bb09c77c84c837e13692fef74a4c57185"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:88b8455552f882b1c60e6e3ac19c78c6a3297433e440219c5e6ba2d26918e356",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:bb9ea89814043c6ddfc845377ca55140ed29cb76e80eaf3a3ba4c062633b1e34",
    "rawResponseHash": "sha256:0740501674c260ab301d3f883944c646161ab7a0a196ac9311410f11134e0e56"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16943,
      "endOffset": 16982,
      "startLine": 347,
      "endLine": 347,
      "statement": "- Define optional and nullable values.",
      "sourceHash": "sha256:c2fdc8d8c8b11da3f1dbeb1cfd99d8e8b42ef82d1c90e012ee2255655df7a193",
      "fingerprint": "sha256:54c95d659f247902ccb1ac9310fd54d4a3f2697f6a61478a62e8808dda9770eb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:97505e001145dff69b0f198e5b99e498a056b1dd2f083f912719b4478518ff64",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not explicitly define which values are optional or nullable in the data model types.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:3fad0870feb737d5a9611c8ba97278424050f54df01a4ff7768e0fde8865f1a9",
    "rawResponseHash": "sha256:c9c38627a55c7f8d9292a6ef008287107ae6eef10fb3894c250c38a2720709c8"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 16982,
      "endOffset": 17014,
      "startLine": 348,
      "endLine": 348,
      "statement": "- Define ordering and grouping.",
      "sourceHash": "sha256:b7aefcb6578148f372544ea0da18d59587a1202db3f721e262a4616427efe581",
      "fingerprint": "sha256:7af219b6d5047f23b7fb8d852f3b244dc5ea848d80e12f6c24a08ef16e163921"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:0755f25e5ae012e9b454cacc337887e7fb32cb9174e79e995ab4959ee4470de3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define ordering or grouping for any content types, despite the specification requiring it.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1318a3bca488f47409982b2482f1d1675fa4d26909575cfad64215a095e6c15b",
    "rawResponseHash": "sha256:f00848c352b07215f3463a2c93112fc1e7aa684f8edc20afc07733a8ad7321a6"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17014,
      "endOffset": 17041,
      "startLine": 349,
      "endLine": 349,
      "statement": "- Define formatting rules.",
      "sourceHash": "sha256:638fe4664b09aa4e8db37d405d2ecef518ef71c6595f7b805dbb2e92c8e2e61c",
      "fingerprint": "sha256:3595e6127065e84a522e9c14f798262bcc4acbf0f131bf639f3e5db8be45fe6e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:f7f96ca707b164b7000aa665c9aea994007cfff47756830f766aec086291b377",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any formatting rules.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:da975e36925c5a56372c8b2fa9fab60ec6c36be017694da8eb2134d7cd59a4a9",
    "rawResponseHash": "sha256:5baee2c2eec176add31537cd452228fcafb2c1e0b2b2cdc0a951766a1e669d70"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17041,
      "endOffset": 17073,
      "startLine": 350,
      "endLine": 350,
      "statement": "- Define localization behavior.",
      "sourceHash": "sha256:d7791a798022a153d5d4aab385793d9969930edf11ad364032334ba194ddd7a1",
      "fingerprint": "sha256:2ebc3e2c10292c8d2547bba3f3edff5a2c4b80d3a8c6f981625cd389cae9bbce"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:d21da79fbbbbb1917f46e3ae7ada6a842fdcd51fe4a3a8e1697dc99d92547cd7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S15 does not contain any statement defining localization behavior as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:087536017df4288fece5688807fe473c21232d48869300fb4e1244d3de337166",
    "rawResponseHash": "sha256:7b8da37ee0628fffa3bddf4dae7b5cb245b0d7be52e13be6267ee81063d34cca"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17073,
      "endOffset": 17126,
      "startLine": 351,
      "endLine": 351,
      "statement": "- Define loading, empty, error, and success content.",
      "sourceHash": "sha256:48c0b2e7411fd13dca42755bf0d4312a5620596c5cb845fd912e08b7218d1cc8",
      "fingerprint": "sha256:7ef1703ba53d6bdebc85ec1e6891b4886f7cb0c4e5b9e7feec9e85f09caeb65b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:78becbb0024010c8725ff11f00cde4e3368cf31aa775d36673114a34804e4a7c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not define success content is not addressed in the DESIGN_INDEX Section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:08d26214b3670fe0a1d18bca98bf15dfd2da9f570b9f4389d44c4ff7998087c8",
    "rawResponseHash": "sha256:d0868e6587b882d702d8750f5307a4b866426722d4d19105190330412deaf8ee"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17126,
      "endOffset": 17159,
      "startLine": 352,
      "endLine": 352,
      "statement": "- Provide sample fixture shapes.",
      "sourceHash": "sha256:53076a8cbd3f9eae616f0fd133d7dfa2dc4550eab59d61272de360ad5fe67ba3",
      "fingerprint": "sha256:4af7c99264ec74fcd484326f00485f4eeedd450a8b869b426900837895f8aa7e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:268363694cacbc038703d5baa6b0d58840783c6c771ad782e080dee34239b746",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6687a7c2096579d067325336f7529882c5d2cdcec47445fff6e8ef33e4c955b1",
    "rawResponseHash": "sha256:56ded7f957d5729e8e2e96b2e6b9ef7976350750fedba3070c8f0d618cf0562b"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17159,
      "endOffset": 17219,
      "startLine": 353,
      "endLine": 353,
      "statement": "- Separate evidence copy from replaceable placeholder copy.",
      "sourceHash": "sha256:0c66d1a32e8b7f76f1fb9614413713aa556283d2ea13cc06099a09340a49e17f",
      "fingerprint": "sha256:0962a389ca9e69b5c1d34fcf1c0e812b9add97ac6340d3bc7b02d6da091a35cb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:80d5c4e4e8f4ba0f669debab03ef0174ae94a3468ab91609bad44adb46995db0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:37dc7669b1b5052c4bb875688bf17c7138cfdd883af654fcd0633a267a0085b4",
    "rawResponseHash": "sha256:71b8b2a15e23b2caf512284236df395210576810ccb4c1064666fc8ddee3c331"
  },
  {
    "leaf": {
      "requirementId": "S15-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S15",
      "sourceUnitId": "S15-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17219,
      "endOffset": 17363,
      "startLine": 354,
      "endLine": 354,
      "statement": "- Define repeated-item limits and pagination or carousel behavior only when supported by evidence; otherwise mark them `INFERRED` or `UNKNOWN`.",
      "sourceHash": "sha256:6ce37fe8dfc8c1f088180e3afe802e5de248b47794d64c67f501fd78eeb20b2f",
      "fingerprint": "sha256:917e53da363bd94d825ef8c0b1aafe5c1f8dea112b888d9ba627db00fd51eca7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S15:S15-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:320d43cdfd5b27793f201eb680ed622f0f8070e88eddb31c6e8614271ecc8c63",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:36f1b20da3574909a4ab458f748e50aacf11193f234302c42149bc4da8b024d8",
    "rawResponseHash": "sha256:29acc35fa7c25f9ba7e50577589b6b95f0c2e2b4ff11792b49981f973a35861f"
  }
]
```
<!-- END VERBATIM S15 -->

<!-- BEGIN VERBATIM S16 sha256:610f29325a07e6a3c286003c56bc1db9577e608c55e32a1d138fbedca81832ba 22277 -->
# S16 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:f2cee593b16dcc576799074155e751aca3a7c03ec78e4bfe3f82111cf18d1f2c`
- Normalized output SHA-256: `sha256:f633a924d54c641e20df9d64402400f35ec4b413b6c72c0578a5e0588b986b3e`
- Leaf records: `13`
- Leaf records SHA-256: `sha256:efe28d13e730c27203bcec6c42894a9450d066fdb005d3e9e80b3c2c82590691`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S16",
  "fingerprint": "sha256:f2cee593b16dcc576799074155e751aca3a7c03ec78e4bfe3f82111cf18d1f2c",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S16-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 16. Frontend Architecture does not mention or imply the definition of shared-component modules as required by specification leaf S16-DOC-U0006-R001.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 16 does not mention or imply the specification requirement to define data models.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not explicitly define server and client boundaries. While inferred responsibilities are stated (e.g., navigation and editorial datasets should be server-rendered), no explicit statement defines the boundary.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 16 does not mention or define any third-party library responsibilities.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not mention framework interchangeability or the ability for another framework to satisfy the visual and behavioral contract.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 13,
    "passLeafCount": 8
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S16-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17395,
      "endOffset": 17425,
      "startLine": 358,
      "endLine": 358,
      "statement": "- Specify routes and layouts.",
      "sourceHash": "sha256:49d88c7ffd6e41b891ca5e4e6adafac2c035ea0b48b49f2651d914a0cdb765c3",
      "fingerprint": "sha256:ad8cea8b29b0d958b4e6c41d0844bbc35e2e76673910a05b8559547f38c9f334"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:8e96e76b0a4d6df254685a501d62b98429f8381ef2bbee566377fa312af57e9b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:64e7f2853893b5925effcb885f51fc42de5d02a6d018e7791bba0e08186acdd9",
    "rawResponseHash": "sha256:ea5a173b12afff5b4da28aa75ac3d2b3a2bac8803f1a5259ac224d3342232057"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17425,
      "endOffset": 17460,
      "startLine": 359,
      "endLine": 359,
      "statement": "- Recommend a directory structure.",
      "sourceHash": "sha256:3717171c372a9ab94e8285d6a4f55cf40bc952e85a91c687dab2258e2ced9b25",
      "fingerprint": "sha256:384610be41dc2424336531c9e8f7e17821564715e52a282740efc9d823dd54c3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:88c27cf299432c36c913715c2986ed7f92db03e094d3974762b1cb6462efc930",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:82e95ddf80b8d429074a0d68c86badd9a74b20aac38dd241e0157b374e36d45f",
    "rawResponseHash": "sha256:0fe178118715edcdb9cace8404667ca2de0da4192021dcda0fc749dca58b07e9"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17460,
      "endOffset": 17483,
      "startLine": 360,
      "endLine": 360,
      "statement": "- Define page modules.",
      "sourceHash": "sha256:3767d60b04523794eb79728923639e4861acc6411cb15da82a5ce769305403df",
      "fingerprint": "sha256:a33d91c216d480528a96437cde8ea3774681e35591350cfbef0843889a4893aa"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:daa7a15a99fb1f3acb6a8c6ed58c5c33fb374dd20d35b238626d6ed60b118557",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:23fb327562350ee1354a1c2f34f052602f8281361bda3eabc1a5908ab0dcf93f",
    "rawResponseHash": "sha256:da9313502bf9d57cd919426ee06b836c9ab170587e1ab9a5e4cff7907532d51c"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17483,
      "endOffset": 17518,
      "startLine": 361,
      "endLine": 361,
      "statement": "- Define shared-component modules.",
      "sourceHash": "sha256:668d89e4b65789900a78e8d0bf5d766a767e55837c27cada63ecd2b110305e0a",
      "fingerprint": "sha256:f10d42b0910d5ea92cb4954f05d88c99546264ad8d57ff075c014604afc2d320"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:3c8d0e012ea3eab9634347d9a85bc033aed01315b370b139a39bc95ddff99b60",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 16. Frontend Architecture does not mention or imply the definition of shared-component modules as required by specification leaf S16-DOC-U0006-R001.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6d7fe567f6990328a2d2bb35fd40b243110e2271448ecc2d76c68ead7ad93f30",
    "rawResponseHash": "sha256:2169950e266afa6382ed61f9240a72faa8dc3ed5ca1828139fcda3768e95cadf"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17518,
      "endOffset": 17549,
      "startLine": 362,
      "endLine": 362,
      "statement": "- Define the styling strategy.",
      "sourceHash": "sha256:292f66423f4d35b12cf985cee690806f12070bab0eeb2ce535d7fda9673b8752",
      "fingerprint": "sha256:79d631e01eccbd2dcfd6d68df3dc5ae91d3b762edcf7ef004d9705ec101e4f81"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:6098c6343d6d5c0149f32645b66edf673ca732e6cdf0d3a43a0993ab6b55a041",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e0a87b4e9b6adca07e9bc820be2d424ca055eb2d5699e09a31c879576fb46b5b",
    "rawResponseHash": "sha256:b32961ecb350b0d3add9bee188854010e095390966def3f19fcce89fa544d4f4"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17549,
      "endOffset": 17571,
      "startLine": 363,
      "endLine": 363,
      "statement": "- Define token files.",
      "sourceHash": "sha256:d19e79910ddeb67b7e1aeca2a908e78d2827cbac285549ed854e51bf118b9043",
      "fingerprint": "sha256:ba4344392d31eaba7ea9bd3a376dd62e9df9ced1a7a28a342a741b9f92f39797"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:7764c34d50cd690733a1efbcc46b8c9e294bae249c04371171345cedc6a61c2a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0d02ff846de917e108d2f848f4f68468af2f0a35250b970ed385de2936b22e6b",
    "rawResponseHash": "sha256:df21ed3d3f0c81cbeb89840a8d1a419611874b3ad77c04dae700ec62d0524de2"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17571,
      "endOffset": 17600,
      "startLine": 364,
      "endLine": 364,
      "statement": "- Define asset organization.",
      "sourceHash": "sha256:19ecc3c1d0e6852e438987bfade15d22e549ee2cc76c93db5b46290ef3379275",
      "fingerprint": "sha256:29c848174f948b3c65e3081bcea6e64fa2512f036866ba962ea9284619f3bd42"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:469817ee302e82d8eb4eb539f6cf0ff8a96641eda568e7f4aeaf347c61b5f69f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3c09d3b50c118bc3c97adeb2b0c22295fc7a6d846296f584ef5791d7b9e98661",
    "rawResponseHash": "sha256:ce7ff82002da6d84c0d968572ef96597ee0c5086d43aa431148174f6cf382818"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17600,
      "endOffset": 17622,
      "startLine": 365,
      "endLine": 365,
      "statement": "- Define data models.",
      "sourceHash": "sha256:155e73f7f819fec0d588b1eff594fd2daa7265909e72daef9345094c36960cf0",
      "fingerprint": "sha256:127fb1fbd1017fbd055f6df56908c06404c599ead7f5abc9ac9e1cb5cde9423e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:29143c1925f6d2efd76dd778d9f67a65d2f1f6faa3c908e4eafd986a8eb267f2",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 16 does not mention or imply the specification requirement to define data models.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f6bf39f7d87a46d079a6af98a4adc23eedd48cdf4b9ce429d33bf7728722a577",
    "rawResponseHash": "sha256:999cea01310a2c466448609a6706772669777e47c809abd8d2c605b337409171"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17622,
      "endOffset": 17648,
      "startLine": 366,
      "endLine": 366,
      "statement": "- Define state ownership.",
      "sourceHash": "sha256:a06d7a0ea78d180dc9de8fb61dfd809919bdce79f4a330eb172853e423294acb",
      "fingerprint": "sha256:f17bfb391d00a7ba4ee1f87d1e41fa1d7545314a20e86392560e9e34a0dfe18d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:892c07ffab11647f1bb4c7e0bcac22e9aac37ed50b2e33fc49fda6cd3ffdae9e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4d078ef090f8df5faa347185f7bfb3bdb81ad6a6158b69e806772dc4699ced2b",
    "rawResponseHash": "sha256:04d8f6b68c303af85d3299cf520bbbc716208e82e62dba4951fb7381fd90daf4"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17648,
      "endOffset": 17687,
      "startLine": 367,
      "endLine": 367,
      "statement": "- Define server and client boundaries.",
      "sourceHash": "sha256:2e12b6627d4593268c07169489177fcb748681e74aafbe774e0686be8618a926",
      "fingerprint": "sha256:1148ba53611dc575513b37b74fc79168c81aaacbb9a949e8ba074def10383ff7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:20f7d25dbd170e0a93986e1ccbae8ac29d506101b8cf22e4700bb9cdac1198c4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not explicitly define server and client boundaries. While inferred responsibilities are stated (e.g., navigation and editorial datasets should be server-rendered), no explicit statement defines the boundary.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9af1304824a8d0dd61c960dedbee410c8f222eea9845b5789b36b3890cea584b",
    "rawResponseHash": "sha256:a7b67ef271db668566c69439de344fba72e675df2491182ecf2bf6cb92b3213b"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17687,
      "endOffset": 17734,
      "startLine": 368,
      "endLine": 368,
      "statement": "- Define third-party library responsibilities.",
      "sourceHash": "sha256:03a834572b2dccea9942d5a87f61de5c31084acf0ffc35e19ae16944140285c7",
      "fingerprint": "sha256:c976a3943d16cd2f946e618a8005cdc1264576cb0b9cd512d3bdc03ed0c01a57"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:6247d773a32a4df4a4cd7d275ed4722ea6de18f90a1f546c090e592b7a245b67",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 16 does not mention or define any third-party library responsibilities.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d263f2b544094b401c5d5ac88d6cfef3bf3f50781f5c27b9ce077381ba0c0bb8",
    "rawResponseHash": "sha256:076c068300104d16f9bbed04289618ff6905992ccf711f20578b5fc1fd0bd593"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17734,
      "endOffset": 17802,
      "startLine": 369,
      "endLine": 369,
      "statement": "- Keep framework choices separate from reconstruction requirements.",
      "sourceHash": "sha256:a9b1631bfd94e12a215861c7e60fea2931117ec45335a130deaa7afd6b731d5f",
      "fingerprint": "sha256:8f4da59e4baa25ce9a4be9c9bf9d52d2ec16dbe84ff1cd5c5ab12bffc2296c84"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0014-R001:retry:2",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0014-R001",
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0014-R001:retry:2"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:a1598458192a1f95d82e31eee753f43eddca468537f0b066eb54614df0ac3cad",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:36ae0cbc0aaab2d87a7cdf6e99bf5d04a2cc695723c76968de7704b9d8204cc8",
    "rawResponseHash": "sha256:6fb2e49b09792a2bcbee885333c7120a47cacf316240715885b76cca49b05f65"
  },
  {
    "leaf": {
      "requirementId": "S16-DOC-U0015-R001",
      "stage": "document",
      "sectionId": "S16",
      "sourceUnitId": "S16-U0015",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17802,
      "endOffset": 17887,
      "startLine": 370,
      "endLine": 370,
      "statement": "- Ensure that another framework can satisfy the same visual and behavioral contract.",
      "sourceHash": "sha256:e951f9b40cfce00caf2f064d1c0ae1ce7fce34d245b7d51e9dac75775e5d6c60",
      "fingerprint": "sha256:1e1f69aad0f3ebd7fcebe5949e13adfd482cce65445d0d3f019957540ce7e324"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S16:S16-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:54ec1ed041f1dac90ea9f52f66df1239556e0408c91fce15ab27e6da4d2320f3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not mention framework interchangeability or the ability for another framework to satisfy the visual and behavioral contract.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:03f7f73ef739439b356dd44777a6282a0829980811f75105251fe9d9c52c29b6",
    "rawResponseHash": "sha256:7f1950d2af8f5bc613306882739e8371afa9482e416b703c858d02f61647fdcc"
  }
]
```
<!-- END VERBATIM S16 -->

<!-- BEGIN VERBATIM S17 sha256:2a15bb6204fa845144194ef60536d73b555fdd4e36f1d3b8c09b00ad8317bd33 16456 -->
# S17 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:134f06aa4718423210d077f4734d2e884f8f2953b208e1ce82cd637a7ddfc449`
- Normalized output SHA-256: `sha256:a81a869605fbdb34422651496566e63a2fd18767f63cf443c58c30879009e5c5`
- Leaf records: `10`
- Leaf records SHA-256: `sha256:575bf66ff51d5801d9994e8a37b99e7101561dd668cafff671edf8645fa46b4a`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S17",
  "fingerprint": "sha256:134f06aa4718423210d077f4734d2e884f8f2953b208e1ce82cd637a7ddfc449",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S17-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the required statement '- Affected section IDs' as specified in the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S17-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any description or specification of completion criteria for implementation tasks.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S17-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not mention or define 'Parallelizable groups' as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 10,
    "passLeafCount": 7
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S17-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17923,
      "endOffset": 17954,
      "startLine": 374,
      "endLine": 374,
      "statement": "Produce ordered task IDs with:",
      "sourceHash": "sha256:e93203b55f49323b337a8b6f2bbb17928edc05793630c60565514774b185f356",
      "fingerprint": "sha256:3e4450224c53f6020d33caec6ec12edb3851cb970878ec6dd2b78592473c43fc"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:1596115f26edeee54c0c3b6659a3f8d090baf6b8d9ad3f89e8b908d4a649679b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:612a4682f6b4d0aa3b91b28937aeec6f9b8fb32e0758ae6133f02f2cb6c0ca77",
    "rawResponseHash": "sha256:df2532e3ca89336dd513a042968cce4e1dfd5e8736f3173ef10bcb9849e6c180"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17955,
      "endOffset": 17970,
      "startLine": 376,
      "endLine": 376,
      "statement": "- Dependencies",
      "sourceHash": "sha256:79e9eeeb3f360a5199c704b1a85f4a4e80b63a8deeedc103e39b1b21f5c778e2",
      "fingerprint": "sha256:42982d776a8279c8a3d3a176c248dc373792ec20e46d320a503b6350436c9552"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:ba7743d4098639b1bf200e0a9e834a4829ebd410e65d657a3467c3e449f7ae06",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e9820a48f4043c43a36d74316acf7600daca8c1c4dd7e5216afc392bab207b72",
    "rawResponseHash": "sha256:f73c8df869257340a9cf7465d654b4507202b2c759abe1986acf622cc299ee6e"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17970,
      "endOffset": 17979,
      "startLine": 377,
      "endLine": 377,
      "statement": "- Inputs",
      "sourceHash": "sha256:f1cb605e5a14c774b3457ee90fc777c62415c1809a014bd2f02138b8ee047e53",
      "fingerprint": "sha256:e46b51456c833d2f879a913058173adf2979a71486432c6a63330c29a769a7bf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:5b5b69bebacfc308da959f9b2edf7db61136ba33c94f8d4af72f1ea187564b8e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:67ac815183328327fa80fdea5dd37aae830574a20832559ff29dac7a7ce59fa5",
    "rawResponseHash": "sha256:b18807f26a44ea9dde7b8cf3ffc4d5a7f5d3e3d5cda2086cb471750d2d2b2476"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17979,
      "endOffset": 17989,
      "startLine": 378,
      "endLine": 378,
      "statement": "- Outputs",
      "sourceHash": "sha256:fdef430c0091f34fccc09681bb8b7c92025fdb9a6f3c9005440247b5af81a111",
      "fingerprint": "sha256:ca4865c0630677c7c1e409a2e75e2dff6eea3eeaa66fe72c01725e83ffeb616f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:3053692e49f54ce81145a063b3f4c52fe369d0c344a75c787d2b1e453ac9fee6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:aef9cfd9c1e52f3e4404b2bae1d71d09e6f576d29b05d9044ae9144069f959c5",
    "rawResponseHash": "sha256:f336230300adb3191f8e0af42a6d05b8540885713858ac36f50bc2bf2c8b848b"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 17989,
      "endOffset": 18009,
      "startLine": 379,
      "endLine": 379,
      "statement": "- Affected page IDs",
      "sourceHash": "sha256:c71ee62068bd6675ed5298e6778ec5988565779078c7717f16977fd3e35f452d",
      "fingerprint": "sha256:e799c4510ae765c7a14c2ed82bade8a05f525e1c2191af31e7692f5d35cc57fb"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:0b2eac705eac57f2dfaab70704e17ac029920139de8cb11822751a12a5492ab4",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:602d0b448316d672978861e1a5b4d79d1200ec4d428eb192a95163f3e1a96b72",
    "rawResponseHash": "sha256:9c6b14fda1af146eaa5f0ec91f8337e2e053b9b461e51b0fdf31fdb3a850f994"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18009,
      "endOffset": 18032,
      "startLine": 380,
      "endLine": 380,
      "statement": "- Affected section IDs",
      "sourceHash": "sha256:99c0427c9012f8a57013a2cb8f7a19b287672eb57927a2f587e15746e6e78f2c",
      "fingerprint": "sha256:e0d95f09ee8cedee1bb9171451f129536ebb35361652f759ed736b6eadb7fa35"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:8b30de46ca19b4943ff5538a38460e7e5b05466fe5d6846dff1f9d60c0f233c4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the required statement '- Affected section IDs' as specified in the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ab386a9b576e05def3d5945ff792ad5edb51f6e0671f140ce9b0fe07a6523d95",
    "rawResponseHash": "sha256:860ece3557874406d9f16c7bf3ed13686e0e8bff829bcdc33a70e64b76b80c24"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18032,
      "endOffset": 18057,
      "startLine": 381,
      "endLine": 381,
      "statement": "- Affected component IDs",
      "sourceHash": "sha256:fb7ac23bc51aa9762d9240a2ea13b6065d071373c3d36606124eeaf16f2ef1f9",
      "fingerprint": "sha256:e4f8f6fa673089203d02b282b0a7074699e437318e8d9ad17df324aff345204d"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:68b62dbb7a48020e4830f9ad52ea7a0dc536adeb85f609a7d02bffb122c9b18f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c9e645ae7fed2a1cb13f7c95603dd20e465cbf504bc99bb1629066bd97765a68",
    "rawResponseHash": "sha256:faa22f468ec2e242bd4b7401fdf557abedc00469e464c191f4bb8b3939349357"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18057,
      "endOffset": 18079,
      "startLine": 382,
      "endLine": 382,
      "statement": "- Completion criteria",
      "sourceHash": "sha256:e30de85402fa729070a42a6627849ea3eb033ef9f4d19a71fb5c1ea1371a5714",
      "fingerprint": "sha256:2a24a7425d4515fe1dc434ac1346408dc1c254d1e9c44a5eaa965a990c1e4cd2"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:2ea80ecc12b4f9e091ca07db0734fbce8874f46b21f5d5a4a5b111fd906213b7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any description or specification of completion criteria for implementation tasks.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5e5d49d0a971d8c60464d64a6bf99d122ad7fc10703d64662f1a4b1b3c610a60",
    "rawResponseHash": "sha256:e5602660cc776a528fc41fcc1ba73fe785c50f7a7e93c656fb5a2b5ea5744ea2"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18079,
      "endOffset": 18103,
      "startLine": 383,
      "endLine": 383,
      "statement": "- Parallelizable groups",
      "sourceHash": "sha256:7998d15afa65f0ed1c2c3f642732291d5a02d5429e59f7ed07e47550005e0189",
      "fingerprint": "sha256:7ee1acdb9d5ed3962793604f267eec8f241712653a4810bccb80575a511c4788"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:fb13b74dc1a9f814c6cbe6959091d80f7e0455cb63ca174c6fef662d07e9af5f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not mention or define 'Parallelizable groups' as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:3cf46d7920039711d492c6e446c4e76a582e61b627ef97fc52b02221bde8e81b",
    "rawResponseHash": "sha256:3f3e8af9184ac2ddfa67b0b8d787d7c63a0310d9f35997d9eb327a02bc00d1d6"
  },
  {
    "leaf": {
      "requirementId": "S17-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S17",
      "sourceUnitId": "S17-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18104,
      "endOffset": 18295,
      "startLine": 385,
      "endLine": 385,
      "statement": "The graph must include measurement setup, design tokens, shared shell, navigation, page-by-page builds, responsive work, interactions, accessibility, visual QA, and performance verification.",
      "sourceHash": "sha256:2442f2ecb1bfad7ae1a12a0873f1135f535818977cb79061ffdd0c1dd9ac2bd7",
      "fingerprint": "sha256:9651acd0ec54a2de6d311c50f6f274e89b7be09377102fdbe9ffbbb18b3b0b40"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S17:S17-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:660c83a79b25e298805eaa09e324aca5ee4ef136de7f56c77ea58f854e2cfd25",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:64f1a1d0963a01160f9d03c7c392d8e1318eef967afc630a454fe24e74b6dd30",
    "rawResponseHash": "sha256:10d97cc589b0696feb3683a2b6bd168eb59a9584094b9f5a89e1523b2a308427"
  }
]
```
<!-- END VERBATIM S17 -->

<!-- BEGIN VERBATIM S18 sha256:6c9668a828d7814a92ab43c942f030eafce17960342874b5c8e9dd889b0fd0ca 34859 -->
# S18 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:7a7817e0c77157f739a40d552ed755ed06cf962967f15dce03d7b5af69ae03ce`
- Normalized output SHA-256: `sha256:415bbf49a75c1f5746c6b69b1fa3b72919ca3833817bf1df2582e991730f85d2`
- Leaf records: `20`
- Leaf records SHA-256: `sha256:73f50d0c4ec8d923e6352cd42cd2b778b12ab0773546c91d5939810cf094ff84`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S18",
  "fingerprint": "sha256:7a7817e0c77157f739a40d552ed755ed06cf962967f15dce03d7b5af69ae03ce",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S18-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the statement '- Include section-bound tolerances.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Include color difference.' is not represented in the DESIGN_INDEX section S18.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the requirement '- Include typography metrics.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement equivalent to 'Include overflow and text fitting'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf statement '- Include asset loading and crop verification.' is not represented in DESIGN_INDEX Section 18. Page-Specific Acceptance Criteria",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section contains detailed acceptance criteria but omits the 'Default tolerance guidance:' statement from the assigned Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Repeated spacing rhythm: within `2px`' is not found in DESIGN_INDEX Section S18.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0020-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The assigned atomic specification leaf 'Flat UI colors: deltaE <= 3' is not present in the DESIGN_INDEX section '18. Page-Specific Acceptance Criteria'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0022-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The exact statement '- Text or control overlap: none' is not present in the DESIGN_INDEX Section S18.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0023-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The requirement 'Keyboard-inaccessible interactive controls: none' is not present in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 20,
    "passLeafCount": 10
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S18-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18339,
      "endOffset": 18396,
      "startLine": 389,
      "endLine": 389,
      "statement": "- Create a separate acceptance checklist for every page.",
      "sourceHash": "sha256:48b09e7515a4835880a6d01a1f0da3f9480607096a13093dd3b21e30859f04d0",
      "fingerprint": "sha256:6d1341b8b6dcc4d3240a911abd4a32e5f8910e2cde0e97a2ab0fee00d8e38c92"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0003-R001:retry:2",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0003-R001",
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0003-R001:retry:2"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:800031ad0894bc0c480463efa2133863b0a817e444e3149ebc6f4cd6a3ef7c69",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:98ccb6b4d65d18adabb555ac129174380cadc4166e50195e7f0b163843db08d8",
    "rawResponseHash": "sha256:f37f630e43b6d956fb6a400158921db90f84759f46b25c1f58adf3cda4b3bc61"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18396,
      "endOffset": 18439,
      "startLine": 390,
      "endLine": 390,
      "statement": "- Include screenshot-comparison viewports.",
      "sourceHash": "sha256:cb2fe970d123b9572cefbd50aa0924b7489d6cd9909c3577eb1f045fe989411d",
      "fingerprint": "sha256:9ad125f894428a6c27a83a5680000b588f25dc1e08d40fee5faa02efe832b848"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:e2e7ad153cc9359f8903087902c227b215e03db1c57f669df55dd821ee665ad0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:96534afc043663cfd0be56fe96eb84339cdad82783aa19c30ed42b04742075b2",
    "rawResponseHash": "sha256:198818d4f28f0d56398f3d1715d01090e0efb5ef879fa1dfb04a85b49b920f54"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18439,
      "endOffset": 18475,
      "startLine": 391,
      "endLine": 391,
      "statement": "- Include section-bound tolerances.",
      "sourceHash": "sha256:46e58223563dbcedbae42f2663e4c5cbf7a766327162182e91b1fec639cba9b5",
      "fingerprint": "sha256:cf3a7ecea18a381a1760b3446d6804d7dcf335537012d40460caf9e1e507a03f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:86e84d4693b075c1514a2c1555aded8711e405f8bbb13f72466d90501bca3de9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the statement '- Include section-bound tolerances.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2f16ff7e09f63b8cf878b431e51fd3af3d8b178a9b4feb568bbfc3de2fcaab57",
    "rawResponseHash": "sha256:eb1711e579f06073c153727e87c95b889792c231f0e9923bfada11b1586208fd"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18475,
      "endOffset": 18506,
      "startLine": 392,
      "endLine": 392,
      "statement": "- Include container alignment.",
      "sourceHash": "sha256:0b45b96c930e5adfba5287a3a70273d5e60a214c860e7b78d4e3a5896c5e017e",
      "fingerprint": "sha256:961389453cfc17a6f38f2f08e4c182587fca1643217cd64b686853ff255e483c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:61adea245b5f157dcb945e793f2ae3ae029ec466f428c92bac404078febfb7d8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a5d2735cc384f97021f527a0e650a51c904658ba7941ce8e06e061322d1b4683",
    "rawResponseHash": "sha256:364d0a6b55a3103a6ea0f95a8e96f501f15d3dd076090bca2d2013010e7410b5"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18506,
      "endOffset": 18548,
      "startLine": 393,
      "endLine": 393,
      "statement": "- Include header and navigation geometry.",
      "sourceHash": "sha256:2a447c0df33d0026b93eec1e68e5721344a151488d313e41c55ff42d9cdc6fd8",
      "fingerprint": "sha256:7bb8e9d17b475cf8e26c0b6d1781341613e6bc5a1c541c7f511dfa50ea140b20"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:6d0e317bcec1c650256a1e99fb8a83199e7aed25d6bd17ccb8237d5f407d656a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:874b23f0bbddab44c81bc222d777676c0289e1c7582a16a9b7eea4f54b87793f",
    "rawResponseHash": "sha256:5be0ac0378309dc5427133738b7d7cca6f5c458ee260f2cd697c15208ac01ae8"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18548,
      "endOffset": 18576,
      "startLine": 394,
      "endLine": 394,
      "statement": "- Include color difference.",
      "sourceHash": "sha256:e09394923c837a59512e374c2256a74386a8abc795f7d5748422fcafdd92b11b",
      "fingerprint": "sha256:4848fdc0976e4a1271a06ad822fe2308578f8732de7199bd6e6a121b3454641a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:9ea883fa16f6f3e8b3b85eec4a67f3c0aead3c9984d45c05ecabd67977b18f26",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Include color difference.' is not represented in the DESIGN_INDEX section S18.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:00135f1d17e31b7f515fc4e70e3f463e37d75fca08c3e4b741c6136da7533378",
    "rawResponseHash": "sha256:484acb8da9b701a9f9b5cb43a9662925c8415f0bfd7af223524cfa37938176e6"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18576,
      "endOffset": 18606,
      "startLine": 395,
      "endLine": 395,
      "statement": "- Include typography metrics.",
      "sourceHash": "sha256:a50f82db8ec17730b5e7bd539a64f461b24685f53b11b365d6e4125484d8b823",
      "fingerprint": "sha256:2fb62c11c390b9d8958cb8971bb2d9e0d37550b8bcc6c9c6855ff3c7846ff62f"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:007b492cea044208aa0ee0d57361f8107d22363be107caf1f58f509972a8b228",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the requirement '- Include typography metrics.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fc6a0e56dc56d10221067db3fed1352a8cfe801d05fc648b739dd1fead2eae85",
    "rawResponseHash": "sha256:caa3e2ac5f1efcd953c18184fbc0ba8ef19e78f432248641d4a70321248082a0"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0010-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0010",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18606,
      "endOffset": 18643,
      "startLine": 396,
      "endLine": 396,
      "statement": "- Include overflow and text fitting.",
      "sourceHash": "sha256:2ce4026bbba3718eedae5b5d520c975e5d3ae9b6ced26e9a68d9edff48694458",
      "fingerprint": "sha256:1761237b9fd65933344ee05131d0666e26b095205495b5c69f0fe0d415fbfed3"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:4fa61a52a3eccd041a9ae795ecd84016379b68a89aec75a636a5151ef8a0e959",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement equivalent to 'Include overflow and text fitting'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:da071378bc328db916376206cabc191e45b3074ef5efb60ad08d504d9e7a18a0",
    "rawResponseHash": "sha256:795f4ffcf4db90a935ca0b1c43bba872be0acde718537c40e6c5d51847e73062"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0011-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0011",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18643,
      "endOffset": 18690,
      "startLine": 397,
      "endLine": 397,
      "statement": "- Include asset loading and crop verification.",
      "sourceHash": "sha256:ccce02d24d26940b6e0132f080e437e01ec2cdc592a444387e9ae53317aea373",
      "fingerprint": "sha256:ef949c6943fc04aeada06c17caef0418000aea910abd78ca7f1c34464e1fbd49"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:09af67cee50fbe61b89c05dca0fd1bf99637bb09dbf231afa74644635a3be835",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf statement '- Include asset loading and crop verification.' is not represented in DESIGN_INDEX Section 18. Page-Specific Acceptance Criteria",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a83d90f57ea08202d503dde99778ece4b9347126e3be25f9d2bdff5c3373123c",
    "rawResponseHash": "sha256:83d08ceabcaeda34d1e70b1c73fe9c0fc478744ac99ba1519d7bb3dacbec982c"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0012-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0012",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18690,
      "endOffset": 18719,
      "startLine": 398,
      "endLine": 398,
      "statement": "- Include keyboard behavior.",
      "sourceHash": "sha256:4fe2fc213d1ba67135765bd3907e66ca293843cd662753261a04ddce222b45ad",
      "fingerprint": "sha256:06d835e3b47d67dc8db41786ec2176583d4a239c33429464bae8db69f1eeac1e"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:758ec3f3808a131471358c9fdb0e38d1042bbe09a5c4a69c1eb1195b9d9a063f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:bf0b5264dd7b7cf653b86f3265908583558c6cdbb5212ddf9eababd0bd3bdd65",
    "rawResponseHash": "sha256:d25b0660ad24454292c571aed62f4947011bf6f2abebd96761355c9410d20ed4"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0013-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0013",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18719,
      "endOffset": 18747,
      "startLine": 399,
      "endLine": 399,
      "statement": "- Include responsive state.",
      "sourceHash": "sha256:ab57b4c0900eedba3fa62068650fb1fc5d588ca1b8876a3cd9b80134a0b3eecb",
      "fingerprint": "sha256:01f7e549a7bb592c23d709e6992ad32e43f9a3444d226a032f4a5588f0b5973a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:fe5e0758c5d1ac54d22ffee6357950abd66620d584c99bc0991f4ae304158204",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:bd313a550c996a9095c5636656cb152e78594076248faa17f6c52e48f6c98a60",
    "rawResponseHash": "sha256:7b13da253de3baefc0653042787f0c1156b75c904a518b90ecbb6f570c6c6e04"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0014-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0014",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18747,
      "endOffset": 18783,
      "startLine": 400,
      "endLine": 400,
      "statement": "- Include performance expectations.",
      "sourceHash": "sha256:753379c6bbc3434395fbefab9ef4e18bbf883322d21052b34b0b9c8b24745934",
      "fingerprint": "sha256:b10b092653d820f17e5f858715b5610c19702346a0cb2e37237f074e0ced403b"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:ad081ff504286172d5ea7b026b3cab696f9d636beb73e19cd6df1d68dbb09522",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d268cb99877f5bf650ce94dd0fceb721c595b74fb0287a8151ae861b7ce3b0fc",
    "rawResponseHash": "sha256:8fb1f0725aee117985887826af7b3cc88215ba5921b118a4d985164d8d30720d"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0016-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0016",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18784,
      "endOffset": 18812,
      "startLine": 402,
      "endLine": 402,
      "statement": "Default tolerance guidance:",
      "sourceHash": "sha256:bee45e0403ce4e73c15e67826205071659251e30aa094ba23dfb47adf7d2189c",
      "fingerprint": "sha256:58fb6d3e3bd73dd24c45e35a05f5797c6455b0917f955ac938bb2bb3377efaaf"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:d6c71221812a1ccaba34b5bf7557408820133e7da1eb104cf2ffd043d0464d38",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section contains detailed acceptance criteria but omits the 'Default tolerance guidance:' statement from the assigned Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:53f3731515b67faa3d1e1ead533ec3a62d65869f1903094f7c99fadd03ee0fbc",
    "rawResponseHash": "sha256:9cf6b4433463891069a04017db2befeec497a85401c02b2acc42984bf36b4534"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0018-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0018",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18813,
      "endOffset": 18850,
      "startLine": 404,
      "endLine": 404,
      "statement": "- Major geometry edges: within `4px`",
      "sourceHash": "sha256:0cb7d1e2256de91300ada40476eb4632793b49028d26de1cbfac42f995dad343",
      "fingerprint": "sha256:40c3c908f72d00a24213012648b8cc57903fcd568e1f24922c4f25475395fc43"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:628d4c06e21d4b134ee68fea3f9925142f8feddcf61e91d44bf4dfc549f34a45",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:855ae0ee78c3c4e2fbfb9a6cac3cf34b78886a2b40bbe55c592fbd67dcc74f11",
    "rawResponseHash": "sha256:c6f19a389635972b95bff156096d0ccace827cfb678f4881354354104df5fa93"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0019-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0019",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18850,
      "endOffset": 18890,
      "startLine": 405,
      "endLine": 405,
      "statement": "- Repeated spacing rhythm: within `2px`",
      "sourceHash": "sha256:95d3754b9b9937e3d256d38b308d51c730645f258f8dc501d7e576ead4588368",
      "fingerprint": "sha256:8f6475f18371fd6c28c3b9002f25f5c0167a68775189b75fe8301c5118935daa"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:d9005848aa36615a6cc120067522b08034b97a2aa5c23a39b0dc563a4f099855",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Repeated spacing rhythm: within `2px`' is not found in DESIGN_INDEX Section S18.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6e7c35cde3cddb97bcde14c811af9de4055d1f6b99e02810f29a020edcfa9838",
    "rawResponseHash": "sha256:7f190049df9c304f9c99efb8d5cf812ce091d43832798b74c901aafa70c5a3a4"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0020-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0020",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18890,
      "endOffset": 18922,
      "startLine": 406,
      "endLine": 406,
      "statement": "- Flat UI colors: `deltaE <= 3`",
      "sourceHash": "sha256:985ae4a5cd1b3279d90ce63e20a3a21a97ce5cc20be05c434a94eb12a63fc797",
      "fingerprint": "sha256:e96599267b4b671724197c2920c8bb354d695ec4dd81c5717a3fad5ccc05f5e7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:c522dbcdb0784b0d027a7df0289ee301752fd09d5da5a1a8cd82d084ffae337f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0020-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The assigned atomic specification leaf 'Flat UI colors: deltaE <= 3' is not present in the DESIGN_INDEX section '18. Page-Specific Acceptance Criteria'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:26a1401dd17669eca67cb3c7234643571d74db0c8266013b90ac46fbfc969794",
    "rawResponseHash": "sha256:0096ad98716f4c5fe96cab10451d8e9b8cafcb83ed847fa1bcc4187e1d3a2057"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0021-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0021",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18922,
      "endOffset": 18956,
      "startLine": 407,
      "endLine": 407,
      "statement": "- Horizontal page overflow: `0px`",
      "sourceHash": "sha256:7ea1844107a3392c790e7a6bc6239ced7784420ce0030fb5659639425fd91861",
      "fingerprint": "sha256:2de88ebe18ac0cd51b47738b849429e9935436360af775f989d22dc61976e6d0"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:965d58619b9b24a5f64d7ddfb27cbe3009a2ea5e8d6731d30877d7668cebf279",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:be300b1be978e7e1e37a0c75509fdf0ab386ab38fb276af2368d909c012115bc",
    "rawResponseHash": "sha256:dd4d1206504a11d335fd4d4534b5862957fe672b9d20388b5f39dfcc91511396"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0022-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0022",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18956,
      "endOffset": 18988,
      "startLine": 408,
      "endLine": 408,
      "statement": "- Text or control overlap: none",
      "sourceHash": "sha256:be2243e2896150ea28349cd86ddc0c12d57c524c7b8780a3994961cdf0a64a06",
      "fingerprint": "sha256:44b5777e94230cc93d0db94a645e65f06f2b4ec98fcfb038df287e980c62940c"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:af050d16507344ec507856e7c6b928aecea3167e18dba0089a989822886f0e90",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0022-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The exact statement '- Text or control overlap: none' is not present in the DESIGN_INDEX Section S18.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:03dfbfe147c891fe9ce028aaffa0692e058efb899ec08f0564969eda4de64917",
    "rawResponseHash": "sha256:69c16d1ab79676f4308ebf659170084d02283a8986b45cd46aa6742c2004347c"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0023-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0023",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 18988,
      "endOffset": 19039,
      "startLine": 409,
      "endLine": 409,
      "statement": "- Keyboard-inaccessible interactive controls: none",
      "sourceHash": "sha256:638a70856c2c70bca54c7619bd556cae63932da6f34280122024c43187134770",
      "fingerprint": "sha256:7c1dd4cd2229132891bbb01369ae7a8372bbfa739463f9719f0c529390682d80"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:8d98868120ea6ce56efb8b331ddb7e71e6821044a625b3b29c0ce0a5b7ad6929",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0023-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The requirement 'Keyboard-inaccessible interactive controls: none' is not present in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d0362692a3de96c23a9ce07d4a7a159e9e250f224e0c8066852b51f918b67d65",
    "rawResponseHash": "sha256:20b75c8611347a283b322c58aa219a89474671f77832b42369294c3e4232396e"
  },
  {
    "leaf": {
      "requirementId": "S18-DOC-U0025-R001",
      "stage": "document",
      "sectionId": "S18",
      "sourceUnitId": "S18-U0025",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19040,
      "endOffset": 19119,
      "startLine": 411,
      "endLine": 411,
      "statement": "Override a default tolerance only when the document records a concrete reason.",
      "sourceHash": "sha256:238ff9db32a7e1d4cd2a99f6862c4cdb07975fb3439fb4f2365b9bf25f9ba65a",
      "fingerprint": "sha256:7bf374014129e495435a3df62756c0a14aeedadd4d576de4ee0c12d736341b11"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0025-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S18:S18-DOC-U0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:971795877040c70377117747a6c76f4a1863417cd753e28859b1831a0b02351d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:dd044a73d1bc19ffe0b795bdfead6ddeb8eaf92f0b1e4cef121898bde929f9ab",
    "rawResponseHash": "sha256:1a208700d269f7a1cfba1dc61e9ed0a479f9aecc3c68f7a82807fc78a11a6f8c"
  }
]
```
<!-- END VERBATIM S18 -->

<!-- BEGIN VERBATIM S19 sha256:d50da04f8a0d22a9f672cc1dc855eccf84f8cae6dd8b76e9f43586c58f382e0d 12875 -->
# S19 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:2e4312ef53311d362a271d47d9c0bcfffc4d0ac72617e17fec6de3f3e9a7538b`
- Normalized output SHA-256: `sha256:46e5802602e42828e953155d603437bd4f5bb76b44f37dcf1ad82939b65de344`
- Leaf records: `7`
- Leaf records SHA-256: `sha256:05e445116b3c65c5fdce1dea447f5823ca1a83186d283c8c7a51b60c641b26f1`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S19",
  "fingerprint": "sha256:2e4312ef53311d362a271d47d9c0bcfffc4d0ac72617e17fec6de3f3e9a7538b",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S19-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not record any concrete implementation decisions for uncertainties; it only lists them as UNKNOWN with no selections made.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S19-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any record of alternatives considered and rejected; it only lists uncertainties.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S19-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the requirement '- Record risk if the decision is wrong.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 7,
    "passLeafCount": 4
  }
}
```

## Verbatim normalized leaf records

Each record preserves the owned source span, source hash, request ID, retry lineage, validated leaf output, output hash, and raw response hash. The JSON block is not summarized or rewritten.

```json
[
  {
    "leaf": {
      "requirementId": "S19-DOC-U0003-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0003",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19157,
      "endOffset": 19218,
      "startLine": 415,
      "endLine": 415,
      "statement": "- List every `UNKNOWN` item by page, section, and component.",
      "sourceHash": "sha256:40c9c907a4cf656476ebeeddd745b5550a7aed3168cb86331a0e8f5433b72f14",
      "fingerprint": "sha256:c6291cebfb5b3f54c0f9127761a2b0d0341349ef8329ac6a2aa24b427cc88591"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:fa85e42fef06c56732315fe14a971063f94008d534aff65596ea9a84d4ea6ab9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ccb4f3007b40e4207b87fb4fffbc0c8d95ae0ac888af8428a8d87901771d32c1",
    "rawResponseHash": "sha256:6ee6c29e6b7f3dee9e01371e90d0cf442e18fe2d14dd1fb8a0221b92449a03e9"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0004-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0004",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19218,
      "endOffset": 19287,
      "startLine": 416,
      "endLine": 416,
      "statement": "- Record the concrete implementation decision selected in its place.",
      "sourceHash": "sha256:54d7bafcc99c63e24c7d258e4c188e377a2aa3043658a0951263636534bca6df",
      "fingerprint": "sha256:c75de178d08b64d878321873af629c4b2eed2256acc8be81be1fa5ef969769d7"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:9c2051a753596381461c1aa18020efde23faefe190bdaad7ac067ee5e3496acb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S19-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not record any concrete implementation decisions for uncertainties; it only lists them as UNKNOWN with no selections made.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f869cd510e5de029d9eda0c55ff27db2cea0957d6f656649665f7c170e7eb23c",
    "rawResponseHash": "sha256:1649d6a39f5e77379852b1cc157caad89db4d5268802f90eb0aa4408207f783f"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0005-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0005",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19287,
      "endOffset": 19334,
      "startLine": 417,
      "endLine": 417,
      "statement": "- Record alternatives considered and rejected.",
      "sourceHash": "sha256:442d7634afa8e87d80578e634eda0fa7432f07cc2a50b750afa41904c40a4f17",
      "fingerprint": "sha256:9646dbc09ed4dc99eea63accac8b03f9f68c7cdc4be7c1314f848b78adf82f74"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:82c94eeaebb58853e55ddce5c99b13be3b042f0f7b080a17abb15503f0ba352e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S19-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any record of alternatives considered and rejected; it only lists uncertainties.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:dcd4c5bba6d8b4da586ab93cf6d2ce61faf14acea046fe53f9a0949c595adf89",
    "rawResponseHash": "sha256:d52d0da303406628fcbb90588e57f3865a9348336cc5ff6a161f25ce3795ad66"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0006-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0006",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19334,
      "endOffset": 19355,
      "startLine": 418,
      "endLine": 418,
      "statement": "- Record confidence.",
      "sourceHash": "sha256:c03ae8f7431e2c68ac920f426efd66de701eba75912164eeab2ac38aeab11a9c",
      "fingerprint": "sha256:c1bca4b3b6df180984cc9a39f595029c426857c24573bfc30dc01d30cd454623"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:bbae0d4e59027158597bf64ec5279197b140a38956252653b40823ad06415c66",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ccb4eb782c07d3ca7f38876d23f803d767d1cef91428d1dff3fd5209a3126f9e",
    "rawResponseHash": "sha256:3d3fd4a8b934b119b16e1075c3c3d6d8f85fa25764766c41d5cd4122ee935b98"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0007-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0007",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19355,
      "endOffset": 19395,
      "startLine": 419,
      "endLine": 419,
      "statement": "- Record risk if the decision is wrong.",
      "sourceHash": "sha256:4f0a2f2799d6ebf02a88054382e17b0ec6620d7b6ca6068b7667b6c184ded0e7",
      "fingerprint": "sha256:61b60b5a89508947bb8c3c80887c109fb81eabd70ad47d77d0d1a2471f218f3a"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:232cf55257ee2b293c923c86374ed8c81f9c703d517f2dec383650d682b11bf1",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S19-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the requirement '- Record risk if the decision is wrong.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c720be92bdd73712668af0ede98efde87d8b4bdf7a024d934207aa33b1b3c1b2",
    "rawResponseHash": "sha256:490b289de96a9dbcba3fda51cac7301908a890a3f3f73162d2fc8e32782755fb"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0008-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0008",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19395,
      "endOffset": 19465,
      "startLine": 420,
      "endLine": 420,
      "statement": "- Record the additional evidence required to resolve the uncertainty.",
      "sourceHash": "sha256:6cb671f95e66508e996fdcf584f818e0662a5757f5cc8481b6af48aab3231c79",
      "fingerprint": "sha256:930dc73923e26c1ed02cc523398925eb9a0ff1e76917dccbde7ec75cb6127a93"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:0e9242407aa4f80aec36904fd27352b761bf8b9fb4ecdc077a0a211c379380a5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:becc9cbf879e458f50f26f7e5db97985381c383fc76ec3c6ae6f9d4d81a01be9",
    "rawResponseHash": "sha256:3ff94e88661a8e5dd9f3572db129711ec37bf1c4c6f3321935ee32d55fdbddd5"
  },
  {
    "leaf": {
      "requirementId": "S19-DOC-U0009-R001",
      "stage": "document",
      "sectionId": "S19",
      "sourceUnitId": "S19-U0009",
      "sourcePath": "DESIGN_INDEX_SPECIFICATION.md",
      "sourceKind": "section",
      "startOffset": 19465,
      "endOffset": 19576,
      "startLine": 421,
      "endLine": 421,
      "statement": "- Never silently omit an unknown value that affects layout, state, accessibility, data, or acceptance testing.",
      "sourceHash": "sha256:2873abfa69e6e6cf1f1079b3a8c0f1861baf180b3f0bd18f6c51104871638060",
      "fingerprint": "sha256:96836099d994abc4f7e97fdc7386ccaa0b697de8a1b4386d4c2fc141f5b64375"
    },
    "requestId": "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828192135-gdweb-26357-cd3bf734:document-audit:S19:S19-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:520a61600dea7236d85ee77b3daa10cd7582795005a368d0da3d88578d3e1e0e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:71f4210f5f7fc8d534ff4e9f6cc839dbb47bcdb34e39a2499cc31864f1b83c44",
    "rawResponseHash": "sha256:f240c52b1ae1d64da84dab1fde2384728325a7c994c581532c08096520b180a6"
  }
]
```
<!-- END VERBATIM S19 -->

