# Stage 1 DOCUMENT_GAPS

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section reports: `17`

Every embedded Section report is preserved verbatim between its BEGIN and END markers. This file contains no LLM-generated summary.
<!-- BEGIN VERBATIM S01 sha256:07f6c80a207fc041dd2803f8b545395dcda40e0cb663b528dd4305794ff899b5 136581 -->
# S01 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:55bafe8030af12513aa4d6710760a9cdce593e976fe61f718591c4aeadd76596`
- Normalized output SHA-256: `sha256:b3f83591681b93119ef999df51813c47893b56c89eaac16b7bbc4c691a15db8e`
- Leaf records: `86`
- Leaf records SHA-256: `sha256:fa48d7aa119c95a1c6287ef12a7b889f9acf4aad921b089d6c9386a842137318`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S01",
  "fingerprint": "sha256:55bafe8030af12513aa4d6710760a9cdce593e976fe61f718591c4aeadd76596",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S01-DOC-G1-0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement for output filename pattern `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md` is not stated in DESIGN_INDEX section S01.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the exact Specification leaf statement '- Reference ID: `gdweb-{{REFERENCE_NUMBER}}`'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the exact GDWEB URL placeholder '- GDWEB URL: `{{GDWEB_URL}}`' as specified in the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain the registered date value.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any mention of an award value. The specification requires '- Award: {{AWARD_OR_NA}}', but no award is stated or implied in the DESIGN_INDEX.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define the placeholder Concept: {{CONCEPT_OR_NA}}.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf states: '- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`'. DESIGN_INDEX section '1. Reconstruction Goal and Scope' does not contain this exact statement.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0024-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No mention of request context or includeContext behavior in DESIGN_INDEX.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0027-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement '7. Write the complete document in the language requested by the user.' is not represented in DESIGN_INDEX Section S01.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0033-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not mention creating a block for every attached image before requesting analysis.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0038-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0039-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '  - prepared canvas: {{PREPARED_CANVAS_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0040-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '  - scale: x={{SCALE_X}}, y={{SCALE_Y}}' is not represented in the DESIGN_INDEX section '1. Reconstruction Goal and Scope'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0043-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement matching the pattern 'measured representative palette: {{HEX}} / {{RGB}} / {{HSL}} / {{PIXEL_COVERAGE_PERCENT}}'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0044-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the encoded byte count for the reconstruction goal and scope.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0061-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain the global rule: 'Prefix every material claim or table row with one of the following labels.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0072-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement requiring concrete numbers and units for geometry values.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G1-0078-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX does not address collage route screenshots or separate page identification.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain the statement '- Evidence-linked pixel measurements'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any representation of the '- Asset and crop rules' global specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX contains a Section 18 titled 'Page-Specific Acceptance Criteria' with detailed subsections, but the leaf '- Page-specific acceptance criteria' is not a standalone atomic specification; it is a section heading. The assigned leaf requires an atomic specification leaf, and the DESIGN_INDEX does not contain an atomic leaf matching this exact statement. Therefore, the requirement is missing from the DESIGN_INDEX.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Explicit uncertainty records",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-G2-0025-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement 'When this contract is used through an MCP client that supports sampling, use the following behavior:'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- List target viewports.' has no corresponding content in DESIGN_INDEX section '1. Reconstruction Goal and Scope'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S01-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not state which original copy, logos, trademarks, photos, and brand assets must be replaced.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 86,
    "passLeafCount": 61
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0001-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0001-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7839525841f1ac4cb4b880654f22b262f8c558d9d9c445599f059c1f9b9e0808",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d4be7e512e89179fc5990c3b5ea1403438867fa878f22c7a79990e4c7eaeef3b",
    "rawResponseHash": "sha256:0f81676ac6b5d54b3bee56c7113d95074610c33e7ff6b3f0add5972383e60208"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:9c4a5b26297f4a5f9ff535a50979d9c5dbfd0eaa1c347cafbfbb5e1111a43b2c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6d35f491e8dd9ead5ebb252ecdad71cdcd7862b98d195e59d9e70c4e98a54233",
    "rawResponseHash": "sha256:e947a623c85c8b3f688dac103a41506d6d5801086fa2aa4a32e3186fff36d0a1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:95d101605b8b15bed427b1ff86db5e5d71d4b470209dac1678a76cafd38fff72",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement for output filename pattern `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md` is not stated in DESIGN_INDEX section S01.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5d1961ae8cbdf75c5e4166011c45b5174f479ffb98bb2abca8bdffb72c48ca09",
    "rawResponseHash": "sha256:931b614bfb5154835660968de725a6e6364eb6999daf8a0c520dbdb63f4a2be8"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:dc32cf5996f67ce877c4b7aa5cdba29355074041139ba503e612c78f8c5808bf",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the exact Specification leaf statement '- Reference ID: `gdweb-{{REFERENCE_NUMBER}}`'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8bbd2cb3d3ec8f5bfc956e326c08739b272401c534e1c8716c7ebd0f9d506bf5",
    "rawResponseHash": "sha256:86743777542ac21fb1d10983707deef0ef57a3c32e72971824e5b8319b4d9f88"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:11ee142501d6097a0b7de51b4c020f1b653d2b354a385a13b1fa6b499149696d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a1e560072158476768091164496996ed019c3f3b591c22ebe58d7f5905e5b9b1",
    "rawResponseHash": "sha256:9e94ba6023a940d8f8000d031270235cc284fbb70ab43ebe7766a8d6280ea305"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:f4b7a8b38b164f4efa2f9ac1814c557de60c0131f365ccb88595ff1deb2409b4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the exact GDWEB URL placeholder '- GDWEB URL: `{{GDWEB_URL}}`' as specified in the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6db43b4fffd507a204b80a661191d5c67c9eb1ac4937263962c16178ca99f0d4",
    "rawResponseHash": "sha256:35a2fd135b1d1c480e7e873a3508f9f1f4c1d6c4b315695f6c6bbdf5c4dbe6ec"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:4c03d15271912a854444dd0a8377491878a9414160d35351d8ad1a022f2babc4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain the registered date value.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c72e1cfdd4c76ec6a74baf0b5a6e814befd845ff6433395a884c86d319497f94",
    "rawResponseHash": "sha256:08dbf31e00493a624bf2c44af3eb95b6717494ce99642cb2bd3371e76b54c4ce"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:671bd305e1725e1a9db8dea3099ba26885ee2025baddcdb8e75c4b756b49e5e7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any mention of an award value. The specification requires '- Award: {{AWARD_OR_NA}}', but no award is stated or implied in the DESIGN_INDEX.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1ceb5b2b0ec9bf2d83b781d3d75d860c2f4d793389b401616e105b0e43d102ba",
    "rawResponseHash": "sha256:026c43f1a6f365664d14c4ca1f4157e9e4ffdc177aea857f1c6a32defa79bf54"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d30376a0bc5a85c581cac92cc03b2ea0911c99ff171f1ba18441dc52924793e5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define the placeholder Concept: {{CONCEPT_OR_NA}}.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:92cc98bce2ed40e2bb553d1783a46135b17f99c235b71f58a984003b4fef4f5e",
    "rawResponseHash": "sha256:2c611f2cebca3fe47af9d9b6570ee5ff627e312a0defae022cf0484ad5995f16"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:50cb39fcc2057c2a666f0a2ef6a524a0375b36617b0a7dae21c735e6747c481a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf states: '- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`'. DESIGN_INDEX section '1. Reconstruction Goal and Scope' does not contain this exact statement.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:780a8fc11e80c2f8068b1831bec1d5cbd22c6c792ba207108e9eaac7085092d2",
    "rawResponseHash": "sha256:2ced62d6f9e469b67a7e919fe74547300fa8edba60f3cc283941580126441b30"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ca8bf131fdbde5dc34ec93f261422d6687027e0cd5409cbdbb30f2be715ac4f3",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2b519d3e017057d8e420f1d8ed7eddf3c75036ab4c43af332203a66d134d8cc1",
    "rawResponseHash": "sha256:89b51571beb4a31eb2e6d73b5854eed205bcbe54bb98fc5f20447fcb9b809651"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:efcdca3e66fcc849d8313447e7b434e8660ebcbe0054cd27a902c4c169cfe5fc",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e66d9382b64ad28f20b0badd77aa889d192912401d60f411d0f32bdcecfbecae",
    "rawResponseHash": "sha256:7f4a4404ef6854a39e536d24402973e13633e904592e32e6586805e1898e3038"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0021-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:622603eedf46aa58e1d8f361d296cdb3ef04533cdc7b400bf7fe43fd758fabd4",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6a8ba33ee8531b0a8eabae6b52b9fd4d5b2214ada79745a969f266454181db02",
    "rawResponseHash": "sha256:5861419cb4572b2154575530f00674d9e56b1e96f2dca60f15d536dc09e2812f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0022-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:10f55822e95fa45936dfc2ea8de80cb92df454f2e9f48c6e6895a0742d5e14db",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b313b80aafd1c778c7d9b65c6266ba4b84b39d4479e4b4c1754be7ba9ea8d3e8",
    "rawResponseHash": "sha256:b1372ecf1b20b66229643f550999f053269335393dd50c77e0c0a14967d72edd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0023-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:33711cb289e9adbb96ee0111b3378ad893f6946cb4eea936a0d3f872041cb840",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6ad688e88799aa7306023d125a75d310a13d2ec4b888befe036815931d03d252",
    "rawResponseHash": "sha256:938fa430ab0a3cde61137b147f841456b6e4a0c0cfee291d141c35ac4df0640c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0024-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e134b48b4c651ef624b68b3adeef5117220cfedf1023a792d768e9ccfe180cce",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0024-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No mention of request context or includeContext behavior in DESIGN_INDEX.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:695b7f320e8c584b3abcbf9f64e8ef90e97af88c8f8e358a52c26f91c0598631",
    "rawResponseHash": "sha256:fa84634173b955459755e076d420ef75dcd5a16bd78eab3e82065fe71cb95141"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0025-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e3e36f2364a1b38ebe35278d55beaaa5a82876183f87023966760100746fbab8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:641fe88b643d725ec3fc01864c6d7a30cfdf77460bbb38a2f514035c5fc23d63",
    "rawResponseHash": "sha256:6eb7c7c8d00cbd3de028862e8e08efb23cdd9b814d961a49ddbd501b92d4b31e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0026-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0026-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a7827948080a25c95f944901507388499de2f74034a7b098bd17f8030e928c00",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f266e2476b6d80f1551a5ce11a078ededbfd02bbd11c8327c2884f84d4bf9b00",
    "rawResponseHash": "sha256:b3097a5d3d75411971fb1013e1ce9ddfadc2a3e7a5114790d3d18383efd16751"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0027-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0027-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:952d28ce4b93a378c343cefd8b309a97782d4469ff48ba3b4dc72270de6e6179",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0027-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement '7. Write the complete document in the language requested by the user.' is not represented in DESIGN_INDEX Section S01.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:040f4830c63ce8ec1f6f3ccaf140c746f65b360f8872506809b055701e9711e1",
    "rawResponseHash": "sha256:2c372df947d15a8e98860ed2a7b6f1b64423064eeeb6f85873e2a72bd90b030a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0028-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c1b496822e1f13d924f0ffd4a5ce658074e4dc01600342565dd5d1b08f8a237a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e2c60c4b3a84f7075f4266180ac5ac2bd30dbefaf291eea77fab55c90ddc9b06",
    "rawResponseHash": "sha256:3de02d6ec01cf7d9687141f1a0e3ef2c49b8439081655bc58a61650ed2ed0c51"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0029-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:92fdc8e897585410c11089a14e3f910d9778c373b8532a8963c4f24a7ad6e031",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3d4c2c39cdbddabf70310528061a9296bc74e5ce5114f1dbf03af96c0c90a886",
    "rawResponseHash": "sha256:7bc6ae61b8acdc8d2afea9f9cd322b324356a3bdc47cb3d87a549814073e5be1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0033-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:18e5c9d74d3564d7591ec9f04e1e24bcb0208a4225b8812eca69062796293bda",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0033-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention creating a block for every attached image before requesting analysis.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cdc42bd2f28747ce15bfd2c8797ed3be11dcee13842c0e67f139425e64acd89c",
    "rawResponseHash": "sha256:c4fb4a73a33cfea616b31c705b881b9cf86c4e25d6290c4f8a2cf3c46bf8bff1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0036-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:629fb86fa32562ca99ea9074f40393f4bd3ee17abc34c61eb3c67368b662892d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:55f4f4fea91a7f85be67bd0497645349be90dd8ad894a1b9c8007c18b90b2991",
    "rawResponseHash": "sha256:4f99750e52d376648b2e6db7a55e7f16c5ad99c3bcda6c9adc2e9c53c28fda08"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0037-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0037-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:339824d574d9d4592284fa1fc9d965c61ea621911ee4062a9cda907c711fe1e1",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:eb8ba4b643b5980deb2152a18c61245f6bf373fe0e90a0fe936952e511f27c02",
    "rawResponseHash": "sha256:62740742341a8bf2fe0276be1f20d2d0b25e6a7e5ebcd9294e919f477d98371c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0038-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0038-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a667f94252e82ddaffcb8b12ac11a339e4c264580e9affac81e0d398f1409295",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0038-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:df0e5fa9f012d9517c4ccb64f4c744943d1df6775875ca108ead37eba2d82d3b",
    "rawResponseHash": "sha256:6ed0858150b011967902951a552d494ca1bf07996f40b8a4a3556ce940585162"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0039-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0039-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:57f375e0ffdac9eb7670e8ebe6cedce137c3785914423f6b498416df07b51f30",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0039-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '  - prepared canvas: {{PREPARED_CANVAS_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:158bf50872e5f7e044619faba4cf6fd8b3ee590303fcc2a4301313160d0dde91",
    "rawResponseHash": "sha256:6e6ede676fa056db6b9aa736f83a0025689cfbadc6b2debe4d6e01c732d7c003"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0040-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0040-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:96e793ea3728040b17de26ba7cbe00b5181e8a7a03fcf5a1345e7fbc66fd3947",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0040-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '  - scale: x={{SCALE_X}}, y={{SCALE_Y}}' is not represented in the DESIGN_INDEX section '1. Reconstruction Goal and Scope'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:80afd0e6906755acfd3b7341c4e74dcc9820093b25554e734d3dae0791b06d93",
    "rawResponseHash": "sha256:b20717d0d6dac32571843201bc4237873229d7916fad5a4b6d47e49ea9de6557"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0041-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0041-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a54f07d298787ad3b9a06ba00ccc6ff46283ad9ed65d1e1e5e80e4c7a2fbd89e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ef9a1be061fd54e7b1d6f739e52b794866c0f0ac03938583165402becb1adbcb",
    "rawResponseHash": "sha256:2eae460acdc947828ee6dc82eb4ed030aaf3f44c54db42565218fd15e31833ed"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0042-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0042-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bfeaba9fdb25e92482abe1461c13e5ad4caf1a4e54ed58edeab9f636d55aeed5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fc0246abe7090bd025088ccdc92c5d1ce81f92ace12fa6ebf3e082cb3e14f154",
    "rawResponseHash": "sha256:884659a4b8949ea251ce5ea8ef81a4d69018ed55e0eaeddebb92ebac06b9f3c2"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0043-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0043-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d322f3b40788748373bb0813e452109f4891539bb885fef3bf0a8a26ca9ff9e7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0043-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement matching the pattern 'measured representative palette: {{HEX}} / {{RGB}} / {{HSL}} / {{PIXEL_COVERAGE_PERCENT}}'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:def1b8f6acfe93ea37b53e4e9e365178e09a25814a56636f184de221cb5229c7",
    "rawResponseHash": "sha256:c069f77c695fcae5a818c9a7cd62b04ad6daa05d32d9e2185fb309be5139f898"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0044-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0044-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e7471c00c1a51d91cd1fb8b0c955a1bb069c3f79d741b5e92a34d18ba37c0e62",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0044-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the encoded byte count for the reconstruction goal and scope.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d99af1efd4e15018d97d45f8124a073f537f0de41bb9b2f50819d286e1d7b682",
    "rawResponseHash": "sha256:50da8add23af34e155f7d86a3a4eefe45a4e562f80130df210c4efee267d33d6"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0047-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0047-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c8f6999aed3c03ede1194a754a5172e4d1971bcccf15fe2db4930b75f30c4f6a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c5c6b4654bb3eddf170bf11b259fdead372c7013bfa34bbff85e0d2e53547705",
    "rawResponseHash": "sha256:cb003f5f39df417843998b4c52a31665dc08436285d05dfa9253de33ab20bb77"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0051-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0051-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7c2900d4b060c6f61b444fc0593dff912556abbd525e135f14a389c8ddbbdc5b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3a914aa802fe1ba456f0fe204ce0be7e98b46b2ad6fd31dce341b7535cd6bff2",
    "rawResponseHash": "sha256:f31d463ccc2c8fc441dee290a497bad8141cdc41891142c0512290ce94666be2"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0053-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0053-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:9e86aed803e615042ea1a9f62b0e9bb1fecdbfc19e3f671af83256c80f15cc38",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0aa9f3865d88361c8f14f204e22f51a430fccc64b280ed40d6e3a92cbf4a8094",
    "rawResponseHash": "sha256:d447f5aa3a62936a03a32937e9a4b35eab21ad82a61c7d7465410a9e5d78901a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0055-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0055-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:a5729c99c154035f4a2dec075dbffef8fca8bac2e9afc842f416ef8cb7327710",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fcfee7db8792ecc4936934fcc65902742a339a4bde335517b9bf681262f7d406",
    "rawResponseHash": "sha256:bb632c9258c125fa11aaf5f9c3f855e44cd481461f889a219aecae8135afb741"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0061-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0061-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3ecbf5a21b063dc18c49e95ceb84b63d02d49c87fd4dbb90aed0aae1cc99e592",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0061-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain the global rule: 'Prefix every material claim or table row with one of the following labels.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:82d17363d55a84b0e811a9a241519b216234088de30ae1e84498585974151a09",
    "rawResponseHash": "sha256:52382566db083ae88bc2e75128998ad5bfd898e788be8119d1305c3173f8e868"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0063-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0063-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b4ade820884ef55785e64c586ae59baa950d23736d142f68b695b12572a391d2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b1cccb83351691bc4fcf2e9f8bc239c1fc638cd739c3690a9fbb00c236f0d4b6",
    "rawResponseHash": "sha256:91c61ab0cb448b3edb97c5fe65eed1b2a3dd19cf2a59179cdbea90bc5c1807bd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0065-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0065-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:44e70a77e137380b5cd5d7c705501a029d819dde88aeaf2e47699a10ec357109",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8ead49131222d1acefe36c8cc78a364ba7d05e9fa0409ec1dd3bddb6e98ebe2a",
    "rawResponseHash": "sha256:24cf4f1f0884b9ad420c26b2145f33caa83f8989f0bca8b6127ad435431bd808"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0066-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0066-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:2bdf188d1c0f3a228c691477a2177e2bfb8a2184d1f2e70272d34636c4f840aa",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6789306eb2d8ba02fd8b2e4f4e2080ffc0455c602b8b49e163490e77642bf265",
    "rawResponseHash": "sha256:983380d7f776aefab655ee8f75af61f6f2148070cf32ef0ad0f6b7c71194c3bb"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0067-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0067-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7fbac7ba800b68263f5b6ed28d9e00c4633253a5a1ecb0edf406543eb06f6d6b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:478e72854b59d2e4cb8132bfde7bac68a332d23ca34eb584fe6130eab866100e",
    "rawResponseHash": "sha256:7ac9035f0066fb82092dab25062c5f17cbf660c56b30389b46ed34383c1007c0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0068-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0068-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:04a363084b2f4a7e732c1181626e9c871d4d363cf55b3ddf5a7bac21b70d1def",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0eb8d19e4e51e228da22cc595c5f1cb895a2bcb495d93fbbab6e9332b3b252df",
    "rawResponseHash": "sha256:9088c46567ecc6041b089d30a2746ae34d8767c999bf8c80d9d3df32b5b13ce5"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0072-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0072-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c3b186b07bb71116e8559a2656ab96d87fedd7d714e82763be7486a9addf4bc3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0072-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement requiring concrete numbers and units for geometry values.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b26ba26c3865417a51c602b127e5e776a2828d3e3a18399e079fda63f99514b3",
    "rawResponseHash": "sha256:6d514da9dd92af01a4e192b6e7978fe93b2afa509a866777297d4d53fc3bd562"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0073-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0073-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:6517ddbdabc57bcd8a16277cd5d02f1e0ae78690947f90f67c211fa7af8069bf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2350ed999a979b0c4d5ef914bd59b04d421241a58d2d7b158de524c5ba41baa3",
    "rawResponseHash": "sha256:062b1679ac31173cd2af23cc46d57c28f261e234be244b3586b9dab81acb2363"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0074-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0074-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d1ec905e105b4f3f7b0249c9f41b6aa7670d7df94640d355e7e681f2e8cd7058",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b8712ff8dc58862d4709c4ff57e53543562c08d2e293c7c4b0aec9144515d112",
    "rawResponseHash": "sha256:a4b79ebd9e4fbbcca67b77946a735d04863786bc383696015b406270bdd4d9d5"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0075-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0075-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7d61d0ca9c716a262217cccb0fe72c7d96001d3bb79142f6f6242b8b64ba92c5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a3de2ed0d007fce4e793346b682a782adf86a45817a60123ba715e98748f10b2",
    "rawResponseHash": "sha256:3ce2ede2b1f211497ee4f50ec8e20853a0cb1016f94176d31befa047a480743c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0076-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0076-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:09070fa96ea0edd2a7a1601ad9c4fce5c85f0aa38521b3eee9fb947ebae5978a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:59853eab8e9d9ad09c3431357e0eb54772b68849a13da757bf5d42f4c9867361",
    "rawResponseHash": "sha256:b3151e03af4c76c198141559ba3b06a101185454ff28f1440a3db73c4b93dede"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0077-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0077-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:9d7e58929a206a378893fe10efca3fdd62e0c626f5a7184b3dedcb03ab9efc25",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:50efc947044f03c9b3f1be45dc7aef5cb815ba0ce5e54a0a5c3b654ac5707f4d",
    "rawResponseHash": "sha256:4310cdaa6d97b7594112051ab5a658163eb008aa88d3a63d0b9c560cc8940b74"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0078-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0078-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7773758997d7d0ced4f5927b3c60b05833edd42ccd4c9b147e7f03ecc5f351f4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G1-0078-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX does not address collage route screenshots or separate page identification.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:632f156e4f0fba3a2586a4c5722644af05c17e1f3adc3a8e3838946e350f446d",
    "rawResponseHash": "sha256:bccbc50110ea09eed5eb25988b2b4dbf315c487fe14bb1d9a064a2bd7d23c668"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0079-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0079-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:2d437b21fed80ee9c8fe716f4d360bc171caca4d33ada30390ddc33ca97baf06",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:557cccad6590d97a58768e0072c0c817c4c6c6e6df9350569229a380a5ae1fb4",
    "rawResponseHash": "sha256:26221ee3f68b8f603f10928dfa7890ca2cc429e138e165129e869e9607d6be3c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0080-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0080-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d4325d381535848996832474d146feb5cff740e950440876d2be8df8c1bc08ea",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d8b3d6d46de6cddd000412af3c13ef57035efdef0b129d2640e3f74b7229d04f",
    "rawResponseHash": "sha256:5e743584d9adf42fe2330cb76b0a364e0bd5477e17e3a69bbef40b829bd6c902"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0081-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0081-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ad3dc610a91d45cfb77ecd110140b2c92f5092f6dc370f884ccbc594ded8380d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ae8d69589ab1e2f2e01b2527f8699c21b6bd20ba0edd994e45ee2ddc67aeb2b5",
    "rawResponseHash": "sha256:28b232b48027a3491ab0872a9fd9ce9c4f7329a320047eff84dd2b4dabeeddc1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0082-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0082-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b8d3656d469d29a5d4b440dbc9e8ebda8c8c90e82f1529cb36621c7fc91508ab",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1a7a821979bad94c89b9fc98f48aa1feaba0ed98535bfd022091f3b0fdbbb2a2",
    "rawResponseHash": "sha256:157d4c4e3a5f8315a3c9128344a4af7c027af70550d8a2c61c90e6a9cd262da3"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0086-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G1-0086-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:975c3524a7343b7fc98a0b8bfa505c5f986c836425f788b19da9de159d50fda7",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1138396b47d02f0b337a73e4362a1ccdcd1b98c4259a049fc0fa1c4d6aeb7405",
    "rawResponseHash": "sha256:d40f2df9db63548dfdc41de0e81e51b41b739e478c85b43bb1c2375ad86af1a7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:66d766b4299065c4cb5a8f54b2ca1b12b77e5ef7636319fc8a7451275f470907",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:334f9b689f3d9b3559f15672cd1d985372b4fb36b0bccebf56858703fbeb8f7c",
    "rawResponseHash": "sha256:8dc30e2b18e3d29fa51f6f4a2a27cdd0dd53b45ba6ea4ad3785a5ea55b8ede54"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d2ec0677a790b887db36afefa799eac1d65ab1dff0607bb012aa4bc7801982fb",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1cfacf7c15b3344216e4d9cfa3c61aaf7ec937dfb080ea822421dc4e53564aa0",
    "rawResponseHash": "sha256:63aee11bc7a1dc68f2f0ace39f4174f9f22dcf34780277f769fdef8d39fcf42f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b461765c906132bcd0e3e3314977f516d707942512cb9aa608fe091b6ef289f8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f90629096006bf4cad4ff5a9a112176a301160d83432db139c75363ffbc55965",
    "rawResponseHash": "sha256:96508f5d964f657181ae3250f84ad23d4537d4a9e388d5d4e4b35b81c9a30362"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:299cc5ccc78b09148404d6b3048daf2c90482d277e113141df4681af399392df",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- List target viewports.' has no corresponding content in DESIGN_INDEX section '1. Reconstruction Goal and Scope'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:21bfcc73cfe4f9db8f6955b244deac362e3e1b829c66cef7f51005061739afd3",
    "rawResponseHash": "sha256:2a45f4127b59d53af22fda8c1bcd898534c4cab2c6343cf93c813d8d0a68c88b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:1d5af941227152eef62f237d20779943047513ee4e8ae4a65580d337688bfb31",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:53f29bdd5110c0ba03c493f13a4370de1c7ac016f619948aee2dedd2dfb6b743",
    "rawResponseHash": "sha256:3bdc2f9a6554962adf32acaf3c248b16e33184e3cdc703d2077344221975d20b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:bb58de83244edbfdfb4e40f0f1444e4395ebd19aa7d36a7a6004e4ddf982584b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:74ddc5df517e9e7736ae929c981ee628708e78294da94087f744be0104b23d78",
    "rawResponseHash": "sha256:bb0cd304410871772405c5b20a9c96cfe246ff396b7d063ee5660d720d420f5e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:08e3bc7374c761e89c0831aec63506a257fa9908bd688aeb143aed531dff5859",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:599e1bf48b47c3385cc771be42f6d307f66c59632e9299f5b3d0e16f2f3954cc",
    "rawResponseHash": "sha256:223bc6f865b45d854a9ca57dd0bcd6c04991d6c7108056972c4d4807a955a102"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:03c0b67c72bc8b30a254f07e3f55e1e82f2e0ae312fa7cbdc40473895bf4300c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not state which original copy, logos, trademarks, photos, and brand assets must be replaced.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:26d591e13da1dbf6cb7121c66c06ad8c1f06324586872e25a9862564aacbb8cd",
    "rawResponseHash": "sha256:4f6d510deb6efc5ae0c69cbe5c2d3d9fa998a68e853d6761805c2962cbf10b2c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:27b1ea364452a68a04ef5d51bd0df01dc5d23c10c799ca4b684e2e619c06be1c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:dc9740779b4785217e0ed3879b154487e622cf15ffeff4ad2d924cf6154f5441",
    "rawResponseHash": "sha256:9fef1ee1ff337df253c47e0ba7afcb5e68abd6d78c11d3a6f81348a64fe709ac"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:0d694032dab3b7092332f374271a1845e0f19de9937a3e5c1efe4830fcc51398",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3232c1f64a61a83e0cb922507b23211f4add693c1dd54c642ea586060dd2e65e",
    "rawResponseHash": "sha256:ca77fe7db052abf596ba7a5a249f0d93cc21d9b909713cec3b8c6444dd10b869"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:2bdf76176e07183a8d24527d9cee229fa3faa01aacc94121a6be8059060afe9d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:973f1dce937005eacb3955df68a822c0cad84e63b8a6c1f26ec89707ed19c584",
    "rawResponseHash": "sha256:3b89051b3bd959d661cd3648dc3d562d08428da84b68541f6f740d0015dddee5"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:3bfaeed04aaf7049fd6b8f23bf84169cce7392c9e6536d927792f74fcc6433ff",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9dbc604a3ef87e9b89c2d7be41e6992b918f9651b83cd2cc109a4e6d2e794129",
    "rawResponseHash": "sha256:62f00f4fe10031fac4925781b80675a48fc9cdba787d63e7d1ab4537b4c89496"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:1086910581e3934f116fdda7dd1b67e8f5679276a85d4aadddb374a9127fb90e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain the statement '- Evidence-linked pixel measurements'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e6db91ddcc32ad8c4a3f054f0a8f7ce0bbafa07926c652d737a37403f521536b",
    "rawResponseHash": "sha256:94236c7b12c88d8e2f63a2feae445e584d35cc8d81b7ee0b84db91d92fa0e2c4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:992459ec6a1009daf19d78eb8e44ee13cd0c93e032c719f62c80002bfce0a198",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5dd8956db79ab5c2292ca951a7cb22833e636a86fe71ffb1630915ff6f6ea5ae",
    "rawResponseHash": "sha256:16af34eb4419cc13df0089b34512e72f36f0cf3c6ebea3658fbd6bc164b064e0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:93c6d73f49bb3fa4bcd689ec0eb27484711f88684e5935a579bc233f2729ac06",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:86e2851c5fea50f41d3fb710746343c9f9fb4069553f97d9d1267c2bdc6764e8",
    "rawResponseHash": "sha256:84f54009f71e0b4ec2d9f4df0bd4fcabbc12f50751e90fb3bbebb5959f462fc1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7bf65693d8f2392869ceb79d3f4d626ca9945a9bfd805952fe4230d593d44249",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:def57605438eb981832c5bb1bd3a8f6021aaf51f6dfc1528bb730da84cdbbafe",
    "rawResponseHash": "sha256:642d0d4bdba2abaf65db8ba44954e8a5b2adc09123d2242e0ae554767f3db579"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:8395a4ead47e32b0f8b3ae05ac1fadae5b905ada264b073c8d152f38ac5723cf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d997cc6277a74b649f9fb9e70730694bb2d5c0c10737aa837ee49627089260f2",
    "rawResponseHash": "sha256:770e89b104c4771e9372484816c4b94ea419644b1217a64ec32b97e304c24cec"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:01e7f16b8a0a1259d8a99f5c6ba493f7ceb283b36063f6f90abf6378f19835df",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any representation of the '- Asset and crop rules' global specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:895fd405a7507ecdc8e6f2735d79514678c1379b2365623d79d2adb38f98461c",
    "rawResponseHash": "sha256:a3717e122caf3850017015d9913cd409bfe5a603d166332e3e5383668f5c151c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:d2cd3f43c28900b99acf1bb924e8c45d3a20a9c4bdaa1d0c61f643069f2545ab",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4019dd7f651e391ee7a9d39024df9e0292b2787005c1f1943adc7fe3c191b24f",
    "rawResponseHash": "sha256:64ea95d6402e371f29bf6147b16138f3a923a067e1def4d55e4ba7a65a56b6a7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:9e1ea1121aa49af0ed4522cde2f355d9e1b143ca3e8328114209b62da5240fee",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:beb24119d7dc5842a56d6709fc3e2cd0fec3822662c6a676972731a41a50ef60",
    "rawResponseHash": "sha256:dd0917fc1baaf35e67897ee99882ae7f819e8ce8b7d6849b0cc4ccdc6365a057"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:e3b214a374f97861139d7cd56eec37a9adfb21dedea986c783ef1b9677d81c88",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:393d06516fda7e2dc20f30b9fbe57514f1245f9a0ca04c924354632700d86b02",
    "rawResponseHash": "sha256:7378d43436fd22d57981b7a8faab87cca033f4fe9c227b6aa0f2c3c07dd1f7bb"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:c8ba36bfb18e7f35b81c939de6b619e3f26d84d1c8a4c6929ccbb3f50dcbf51e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e1d7165cebedc188ac2259b3bddd2dc4e15fb0e4c44b822661646099c8dc23d6",
    "rawResponseHash": "sha256:a462e0fd9df1a9c1ad66a59650bad5ac4724c308efc0cff767ac3884d67413c9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:dd513d28c4da11a1e7421c5c22bb8a0e3efe44dcf0101a3eb2139d5301360ff4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX contains a Section 18 titled 'Page-Specific Acceptance Criteria' with detailed subsections, but the leaf '- Page-specific acceptance criteria' is not a standalone atomic specification; it is a section heading. The assigned leaf requires an atomic specification leaf, and the DESIGN_INDEX does not contain an atomic leaf matching this exact statement. Therefore, the requirement is missing from the DESIGN_INDEX.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e5d148531b2cc2068bea7e0c9d9a93c04d93dd9c4aa86de0386702d33c5d4545",
    "rawResponseHash": "sha256:8c287f9a12574a9145705ba50659018b4a0d88008100d4d65740ba935f2704a7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:7195487cccd53b46c755015994312acca5d951c8107b1ea63ea2df6b10846991",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Explicit uncertainty records",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1e6d4d6cbbc9c8925af6391ed0a60adfb02ea8e929ef24695ef9152189a6fc77",
    "rawResponseHash": "sha256:07e4593a1a2ce874151d5ab2e525c4020ab235d34e8f204d14f3b8f4d7567a7c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0021-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b5c859f52c98f80bc542ed461a0c8ac87fbe79c15beead9d72b336f8ac4590e6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:569e7bcf0a9184d5b98448b17c2a9ec2effe9b6c0de88f5153752bdd701cda33",
    "rawResponseHash": "sha256:31198df73d3b41fd6527ff9d388bb8b50663a3978c7a57f81443e3d3de13154a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0025-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:ee1cf2d6994f247a29530d3c6e4a687586bd818385fd9a09904bf3217dfc89ec",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S01-DOC-G2-0025-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement 'When this contract is used through an MCP client that supports sampling, use the following behavior:'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:777a73231530c26c146cd91ee238ed4033e8032706afc0dbcfbda02e69316708",
    "rawResponseHash": "sha256:2d2dda7b26da83b87b339ab5118076e4b860773fcd6fab68a240f726cf38e4c9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0028-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:b3f967a8217bda73c992766d3abf80277df7ff0d7dc91429eade04865764795d",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ba55452e88bdaaaa7ca77adaa8af33aa31519baa77c46d7e1073de85c076051e",
    "rawResponseHash": "sha256:a4d58076dcc7b272534c58b1ce1ee9e66aeec3d9ac4202f8654ffc5648a31e23"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0029-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:be211b1acb5215ea6de9527f7614bd38bc6fb0715564d7565d5d878d35acca35",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8c643b9583ad08facf09d1161c27f71a0cc9056dc031b3d98b1bd8bbbb7dc084",
    "rawResponseHash": "sha256:a55dedcfca8dd9d20394e2e4285e93de16496090794c520d57389d250da4c2fe"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0030-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0030-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:5aa1b33fe3abbdcfeb52fb36f1266657e9a7289018cec419c4b31e48b17ba48c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:84f0ddc8a29a05735fad4ee9f0be21f622d666c5b26d940648d379483fa04d52",
    "rawResponseHash": "sha256:9ee40d7a9f88752d9e67a17d173212c1171a7792c0a5c37180f245e2c7232053"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0031-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0031-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:be0ec5772a9dd44386d6324df24a458dff0fa4aba06a3e688986d28c4a01fab8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8216462897407bb74195d90c8191243e4cb6017d98af44cfff77035764043287",
    "rawResponseHash": "sha256:6741472d57849778f51d04e2dc237fa007c071bd4ce39ad50290e9350f71cc9e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0032-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0032-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:647e4eb282d4d5006741c0b4d256655beacc86e2ae0d433b0cbeffce25aa06c0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:bdf0c979841f58232a5cabb73f42400135328c42b1052743b9be1ed7e956b06d",
    "rawResponseHash": "sha256:9d7f931ac0ebf6203d5a11aaa0333b59ef06da32cd56dc1c8df71d173eac748e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0033-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:361d9649b974954fcdbab73e2a490cbd95abd4c1e77b9f42f16dff7dcf8f9283",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:49828c0387005525608112344af2c22490345bca760d3693ab59cb20f74c0d1a",
    "rawResponseHash": "sha256:7e7ccd7e9c89fddad9625554c8827e316ca14a402aecccc556eb7f53048fa77d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0036-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S01:S01-DOC-G2-0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S01",
      "fingerprint": "sha256:00bfb819ed25f7034d7a06506576d2255596c72047faec3cc5e228e162d85532",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:092200eb0483d3f1e47c18e5afcf61e55cdca628de801ccf87ac841b8bc0dbed",
    "rawResponseHash": "sha256:4a3e59aed511c448c56af948fb7518bde185f91442e64b8dce10e5663a40c8b8"
  }
]
```
<!-- END VERBATIM S01 -->

<!-- BEGIN VERBATIM S03 sha256:6e058cafcdfc1d1db172b7ee27fb422d286262db26188e64124b23261bfef709 27241 -->
# S03 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:5b99d5427f3a32051078da328f9328f1c47756470e83639ecbc2b1edf243b0ee`
- Normalized output SHA-256: `sha256:b1e6583b86570a7a3d7ff08e81bb4280710e76d1ef36ecc6bd450d9f3d360b4d`
- Leaf records: `15`
- Leaf records SHA-256: `sha256:e345e61c57ef22dfa87875e48fd37a7d55160bac41802ebfc05e564993f88995`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S03",
  "fingerprint": "sha256:5b99d5427f3a32051078da328f9328f1c47756470e83639ecbc2b1edf243b0ee",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S03-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S03 does not contain a statement or requirement to identify the active navigation item on every page, as specified in the atomic Specification leaf S03-DOC-U0006-R001.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '| Field | Required value |' is not present in the DESIGN_INDEX section content.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification leaf requires a column for 'Visible route, screen name, or an explicit UNKNOWN target' in the site map table, but the DESIGN_INDEX section does not include this column in its table headers.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the column 'Shared shell' or any description of shell variant used by the page as specified in the Specification leaf.",
      "evidenceRefs": [
        "E-D01",
        "E-D04",
        "E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The Specification leaf '| Desktop | Availability and supporting evidence |' is not represented in the DESIGN_INDEX Section '3. Site Map and Page/Route Inventory'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification requires a 'Mobile | Availability and supporting evidence |' column in the Site Map table, but the DESIGN_INDEX section only includes 'Mobile' as a standalone column header without the 'Availability and supporting evidence' subheader or any corresponding evidence content.",
      "evidenceRefs": [
        "E-D01",
        "E-D04",
        "E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S03-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the specification leaf '| Active navigation | Active item and state |'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 15,
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:eb8d11ae2d5ba374b25da98b3e05fbf1251d78a346b6c775f1fc591c79cb653b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3be599e77c41de8ca01f00639de62710416c9aae4e02db9d9941c40db826e54f",
    "rawResponseHash": "sha256:7df36f47a9c7208af1a6697dfaf73e3c4d210a9525603525e96f8acd6b1f3630"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:34d8c1fd7ae90fc29637c69eb9c6bbb2ec6299ffb29f4645146f4551835b206a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:59cbf840cffc2f50b6501a4d898cb958609ac7cf4d55a856517f362300b32fc2",
    "rawResponseHash": "sha256:44fab4aa890f0ca7a70773ba0a5491b007c4b28b4dea2778f08fe89700828e34"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:73652ee5fb2885489912c432307be9d14e47d118b603192df053662b261c8d53",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3933c5b68bb94c3fb9996f6405ed04017e1a360344d7da3bdf3d884d58830a0d",
    "rawResponseHash": "sha256:40985f959379f2b5536ce08c3ecbeedfb2f02ec0949dc51c7a5488cb2e6c623b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:7cb77131cce4753b32241729d3a008eff3dd36610ce90680dfa2b26714e21e6f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S03 does not contain a statement or requirement to identify the active navigation item on every page, as specified in the atomic Specification leaf S03-DOC-U0006-R001.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1b3f298532e3db72a352efdc14027afc048610e9d6b00902c417c859883d5a58",
    "rawResponseHash": "sha256:96c0553cf43614491b9ff3d4b1df3c7c8b5fc0fe78460dc7dcc607050dc1862a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:50832689aea199411c4419988833da4a2eb18d73bf84a61889b1b798cf28f0db",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4c5632edf972353ba31bda95426d8b027a7ee840a3133384c4e093035aecf4e7",
    "rawResponseHash": "sha256:9147de5f98ab323ca81a4328500aac3fefe1bae8c394571c02a9efac3d802b20"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:6284cf32eafc95602c03f31f4b118b16b19b2592231584fc6ef0a5f71e6b6ddb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '| Field | Required value |' is not present in the DESIGN_INDEX section content.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4501de470a3fd81d3835c23b5713c3cdad2e7c205fd73b86885c72ce479842a8",
    "rawResponseHash": "sha256:5956079f43ecf78e87efe79489e8347fb8425c8f2073d59795d127c9771d9024"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:a3b4616f153817583b69b23ca2543a04524633eb65f435c267b6ab33f8551db2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7313b225ac98eebf7925367fb49cc8b1bf75bedef5bc8c7472b4499d75dd88a0",
    "rawResponseHash": "sha256:1762c1914ef432404495602e90c9342db203b0e1042e18995c3d263b52568f7c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:604f8a96f32189dd796bc3c5f69aa832fea17365a0e3c6e23382a75363544d6c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification leaf requires a column for 'Visible route, screen name, or an explicit UNKNOWN target' in the site map table, but the DESIGN_INDEX section does not include this column in its table headers.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:06464056e6a85dd6d2034eb3c7f605814afa0ec036bc9ff48da57dae69782ea3",
    "rawResponseHash": "sha256:9171e99f2c6277ef69ab4ea0d91d90b996df12fb6518de0e6fd9136672a0b91b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:9ebb890549694f0915e35fa228e59132378367517934af85f5fada686011b171",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f4577bf280b1badf401cae35b6bfc90846b87cce3fe3932c687570099fd89795",
    "rawResponseHash": "sha256:f5f056a6f3d1d8a979f9338dd1fc4e85db5b83296479b9f4822609a7bf247f27"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:6eac16a456dbd576d23eb7a4d6d5b09b4a7654598b40cb7a90f824cf944f05b0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6809086b2b2e6e4b35ff84226ce3efa453912781ae24733732a535d2a5dc8c2d",
    "rawResponseHash": "sha256:dd7e6135f6ab70b557cc831e189fdf217ec759173b39b941ac0e760e39af0ae2"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:dfd562e7bbec3de53ad3b93112b7b3c1ee917c86bd09107be70b631e0ff37dc5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the column 'Shared shell' or any description of shell variant used by the page as specified in the Specification leaf.",
          "evidenceRefs": [
            "E-D01",
            "E-D04",
            "E-M01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8aa5d4fbe228a76cb2c46b5e352ac5d2a9a0b192a77bfc3f6f6eb086e65295f8",
    "rawResponseHash": "sha256:505ec63f939a6d2ddff2ba41ab92260e62856e826ffe854979c0c9806a3884d2"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:4626edb56a59467dc7105986a642c3c89b6d2d19325ec3cdd48c569709fd9cb6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The Specification leaf '| Desktop | Availability and supporting evidence |' is not represented in the DESIGN_INDEX Section '3. Site Map and Page/Route Inventory'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a475b517aff5eab62f65e1471a8886f60b7b1a86e639ccc5fd64c2333ef04268",
    "rawResponseHash": "sha256:ed68e109cd3d1edc4a1d670ec116155e83d86754e925b1172d3d1e41d1e31df9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:63eaaa65a9f093af5fc73ca4c3947cc1c215efbde73a570b725feaadc43e09ab",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification requires a 'Mobile | Availability and supporting evidence |' column in the Site Map table, but the DESIGN_INDEX section only includes 'Mobile' as a standalone column header without the 'Availability and supporting evidence' subheader or any corresponding evidence content.",
          "evidenceRefs": [
            "E-D01",
            "E-D04",
            "E-M01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4d4585ac07a8ba59a89a8bacc21512391c681159a9aaaa4ec1ac5be5e5040201",
    "rawResponseHash": "sha256:901f523c7fe9572fb9d1587af8001914a3d08871e5541ffb94443bde3178a728"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:fcce3da6e3d445bb9f2cd9d87f4b07d04daba59a979c606d350ad060da1e5652",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S03-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the specification leaf '| Active navigation | Active item and state |'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cecef63b7df8b61d27b22b219ce6b6582fd0801642219aef5eedb05e4d3e753c",
    "rawResponseHash": "sha256:62120af1a6d303bf0a2442b6bc9142447c730bd25861cde34c0d3b517f9db562"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S03:S03-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S03",
      "fingerprint": "sha256:cee322d54afde413408fc21bdc9a01dd31447176bac6cf534d2c80f3078ed584",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1435b4c882b03cb5d9045897ae4949ba4712ac81fc2bfceb21b75f063561815a",
    "rawResponseHash": "sha256:a7be0a0301bf8f099776474b2237e3cf7669959829870938a6179318636262ac"
  }
]
```
<!-- END VERBATIM S03 -->

<!-- BEGIN VERBATIM S04 sha256:feaf7caefe6c506fceae4c1cccd924bcbb3715c675df82e3099be464d5b6bf01 14782 -->
# S04 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:a3cf569c20cc3a3292ae33aa90daa918068dde791aa9aae38e05227d287e61d4`
- Normalized output SHA-256: `sha256:3eb19567c9cc8722b57655db785d7efbdeea25cf21ee45e2605a2652b2f63bee`
- Leaf records: `8`
- Leaf records SHA-256: `sha256:ea24e91a566d4592877661e318a5581f034e9bddd740edbfd0d29cdf86e8b30c`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S04",
  "fingerprint": "sha256:a3cf569c20cc3a3292ae33aa90daa918068dde791aa9aae38e05227d287e61d4",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S04-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain an explicit statement defining shared container widths and global gutters as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement about separating global primitives from page-specific composition.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S04 does not define shell variants or the pages that use each variant.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S04-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No mention of recording global overflow or page-height behavior in DESIGN_INDEX Section S04.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:56cfeb56f6ed22974bb00d5c48f9c785192dec9fc62396c65dbcd3a30399cc87",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3cc9b16368a4101931ab8a16654f534b4fce97a372ad6598cbc26a46ea72e490",
    "rawResponseHash": "sha256:d90e9bac28e09cda7e19ad2739d6f3f3a7e43ca9cf4d52c0abd9bdec242407cc"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:143670efc78e2cfacf9ed67c23ca6f2c6f97c34ff1cff6a70c1dce7c28e1baa8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d13805be183fa8acd1d018de1620132582523a08327d67f99218567301cf24f0",
    "rawResponseHash": "sha256:7dcc410ab15aeeb1529d6e2a234900e02f892f2dfa1e59c5c156d8cfc55fd69e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:7046717db3ccf5b6aef603fb87b11d3cbec471af4957c66e73d783cd5b5055fb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain an explicit statement defining shared container widths and global gutters as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:160a21fe983faf21d31ed1754b9f3f250de1c57c03f64a2e0bbff96dc74e68e2",
    "rawResponseHash": "sha256:76e873e9746f1801ee52f9132d4e1e9c65336183d1ec201d41c495410072e3b4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:376b8055c7ade33115f4db9a7b9e08b656f4d65ae9cdb25f198fcf7813790344",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:45355342d048f436fdce1bd621fb812cf72d07a8c49a7d7246c36a370ac77c1c",
    "rawResponseHash": "sha256:a1c96dca4005123fc9a93e61bc53679aa5ac68d8677dae5c439802889eedc041"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:cb8314107c8785e0d17912d024543e7fda09924d02a2e3d3f509aa2eba771bc9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0326831434e6cf0ace8ee41f504dcdec3e30cfb57677aa29b23af053d2b46b5a",
    "rawResponseHash": "sha256:0a40ea5869ad72804e599276f2b1f914aca84d91e18a82303e5151c9fd400864"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:611f3bd75da840f2a4b8ea426d18a635a11637de01dc334df5d1310d36896f5f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement about separating global primitives from page-specific composition.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f17fa1258cc408798fd52a04851d41aceca7b2fc411331f12a689164e34df8fe",
    "rawResponseHash": "sha256:ba103a1fb77330fe78f0408219bb17adceb89d6e099bfbe7ac125c7ebb83c36b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:fa2182271d90e4da2c5d484c22462e2c5b3155b1dffe42b6fa6ba78748906902",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S04 does not define shell variants or the pages that use each variant.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:eabebe13a753feed6947066acd114bef300a93f6c437ad137c98952f6e97b86b",
    "rawResponseHash": "sha256:0c472a3bb0a6478dee2b9f20929471ce81bb1c5b8f1e4a0e2717ee08c1f1ae15"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S04:S04-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S04",
      "fingerprint": "sha256:88efbf6a822acbae9e28191ae86b77e5fc1195f062d4beae056ef86290c40a6c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S04-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No mention of recording global overflow or page-height behavior in DESIGN_INDEX Section S04.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7d3f2f8e5d9b3bf3096270fc48a06584dc82110338faf9c0b3e0761eb410f1a7",
    "rawResponseHash": "sha256:178c7c36fc7f856c2d0d33ee607793284f228a321b402fa271a9870ddae94945"
  }
]
```
<!-- END VERBATIM S04 -->

<!-- BEGIN VERBATIM S05 sha256:7205faf9f9ac6745c5ad1a39daa0c1cf582e4e9d91ad64d7f0ab917faf37f68f 68316 -->
# S05 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:745006179d09bdae427de423c43972f99e4bcc70724be4cc7529842edae364b7`
- Normalized output SHA-256: `sha256:fb82c707053497acd273dd40505a155c745efcea8d5c75a74e58dd76c88ac22f`
- Leaf records: `38`
- Leaf records SHA-256: `sha256:e74a0a37da54a6f569d622bfb65adb224736a92610153ff19a8d929c864b550b`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S05",
  "fingerprint": "sha256:745006179d09bdae427de423c43972f99e4bcc70724be4cc7529842edae364b7",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S05-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the exact phrase 'Provide exact values for:' from the assigned Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX contains no statement matching '- Total header height'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain any statement matching the Specification leaf '- Utility-bar height'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain explicit values for logo x, y, width, and height as required by the Specification leaf.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Item width or horizontal padding' is not addressed in DESIGN_INDEX Section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the requirement '- Item gap'.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Text baseline' is not found in the DESIGN_INDEX section S05.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section S05 contains no mention of 'Icon size and bounds' as required by specification leaf S05-DOC-U0018-R001.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not specify an exact value for Action-area width. Only inferred or conditional references exist (e.g., 'Action area | 68 px | Right locale region'), but no definitive width is stated.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0021-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any description or specification for the header background, despite the atomic Specification leaf requiring it.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0022-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain any specification for 'Position mode'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0023-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Atomic Specification leaf '- Sticky or fixed offset' is not represented in the DESIGN_INDEX section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0028-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No exact values are provided for any property in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0030-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Bar height' is not represented in the DESIGN_INDEX section S05.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0031-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "DESIGN_INDEX does not contain the specification leaf '- Side padding'",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-M01"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0032-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Logo bounds' is not found in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0033-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf 'Menu-control bounds' is not present or verifiable in the DESIGN_INDEX section S05.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0036-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S05 does not contain any specification for panel width and height.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0037-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Row height' is not present in the DESIGN_INDEX section S05.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0040-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Overlay color and opacity not specified in DESIGN_INDEX section S05",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0042-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Body scroll locking' is not represented in the DESIGN_INDEX section",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0049-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not specify exact text color, background, border, underline or indicator, opacity, transform, and timing for every state (e.g., Hover, Focus-visible, Pressed, Active, Active, Disabled, Scrolled, Menu-open, Submenu-open).",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S05-DOC-U0050-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not state whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:062e7620706e9a9d823245b7e49a0c7f71a953e872d616ac4547556ea45c6859",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6f0a1e31a07717bf340a0e7a4d4949e6ad147d26c0a3f8180ca4dc76a59eef24",
    "rawResponseHash": "sha256:7d187664af7eb245afb976a5c1f181a94be5eeff6aa3922911bbcf6e416182fd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:424ce543af80eee8aa4b3389be4f22a1d1d583647289a5be71b4cfb384cee8d9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the exact phrase 'Provide exact values for:' from the assigned Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:888f27c5ba3feba10e37ac1e713161c9cd15ce4edf425124288c262eb4a6a755",
    "rawResponseHash": "sha256:7fef6da340c5196f60b9112d2a7929f27db022d06ed75d7530833165569baacf"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:0d8e93ce8cd11a34809139470ad06c68c6ee1f38068dfffdf07eb561537e2623",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX contains no statement matching '- Total header height'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ccdbe8598d8aa98918b8e8b021ed9427a316c8e4d31312cfb680e31cd375bb8a",
    "rawResponseHash": "sha256:cbd64375fd0d5b7c9bac9f8d0a8c128a7e49f707730ab2506728916d1c663629"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:b11cdb164c0080f0db9d1f71f2e9981ba977e08cd1293a869a376992ad33a5bb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain any statement matching the Specification leaf '- Utility-bar height'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2340104139c540d6c518486d0d024ec52646b83f8a9bcdf37776f76cf55c9372",
    "rawResponseHash": "sha256:99697f9edaabc3a9bd677b6d472cf3207fef7a9060932d3814f8b037ea29ffdd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:23651001a171714999ba188a5f6132c8e0b7ebd39d5e83b3d2402c866abdd1ad",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7605e80bb9963950fc5b570606da09e83ef0ada99a09976568438511b84e19fa",
    "rawResponseHash": "sha256:24bcd181eeb732e831416add5fd77be2ee7e39ff866f64578d63c54116000ae9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:3a765057c94d44b0f58174069ab44b97d86fb1dba3319e776779e3b7b360811c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:64887123881458aaaeaf3bdc202a69f57d778ba68942be48a4d0a0ff69bd3478",
    "rawResponseHash": "sha256:df75cc49dc0c410d2f1c21a4a8c8ee1e820055f5dd003598262a17e9ec76fbdf"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:ddde1b1baa4fbe01f277e9a2b7f17c2bdf235ab06e46b9bdfe50e5f515e39e6e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain explicit values for logo x, y, width, and height as required by the Specification leaf.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1a78eaad93ab5f69fc45e56746ce4bca783a369612b3d7808ce08379cf252996",
    "rawResponseHash": "sha256:df283f07dedafc852e237b48228efd0a6c2ce46263934583cb1b9a493474b6e5"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:b7d98f81fe2d2dc812412e80c7fce7e705759a9fe9b39f744a873bc37791a5d5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7803fa7c009d10f7d767da0acc5e67e153bf9f5a8c5beac6b2bbd51e598a55ee",
    "rawResponseHash": "sha256:2f78acc0d16a2a21b5a018a1cd5e63c8000192a79222384e761ee489f42968e0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:e4427189d31987b04d8aead252d262d3a20d5b1b9eb4285a8074b8be0f9c6a6f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Item width or horizontal padding' is not addressed in DESIGN_INDEX Section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e86bf8899307c06392460358da7b317b448fe793fdb42ba4266d6fb462fe979c",
    "rawResponseHash": "sha256:4fab3fd40553923c3f0e43dde22cd6daac9676eebb8dced65915b35f92be7d36"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:164ea8e6dd3dac6145460fff62e6883786485159b2554c006452b7e41c573836",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the requirement '- Item gap'.",
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
    "outputHash": "sha256:66e4d2060ed82743e6750882b1bd136c998868a8f5b9d5cad83bc36ae9e4ed8e",
    "rawResponseHash": "sha256:d06d04f92dafc1c3d15ee02358e94a2851b1533a592fd087043258ed2c46308f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:503cb20d10671c06a19814657c631f2c1fd5394f51e880a986f8d4ac4d300f35",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Text baseline' is not found in the DESIGN_INDEX section S05.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a104251f71348d61439b1d404f41734d2459c55fdb8f131201a51e297c192e61",
    "rawResponseHash": "sha256:99545412b1e58e7f35acb6055fb5ce62665970daec1787d7801908600f50e75b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:b19078fc5d2c38fe21fed9ecc690c4fa7722c90276bdbcf358d7688498a764eb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section S05 contains no mention of 'Icon size and bounds' as required by specification leaf S05-DOC-U0018-R001.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f435c6df72e88a0784e9f5d2b25165102ff109ae296b144707a26a2ba5a82743",
    "rawResponseHash": "sha256:a751733164b855ddd0dc768260ccba9e733e49f7ba1aa9dde00c7a247c8640a3"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:8f91f70ccdc41f0e021ee4cecae93460cdff8bdb2180fc25d9e5f9cc8fb3b367",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not specify an exact value for Action-area width. Only inferred or conditional references exist (e.g., 'Action area | 68 px | Right locale region'), but no definitive width is stated.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:987f2f04d746f0f831bfb6e483247ca67fda5efb9ea1ea5c87c4202c57fcf1c6",
    "rawResponseHash": "sha256:9557854a3fe31db4b6edc31e191c638de0a92f23a81a479abf43b281bad77984"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:c987947558522a17310d3b185d554d15815ca6fc3fb0bf7576d9a11e4deb79d9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:bab6ac4463e6a3098ca969a5a2be6aae14dcfcf7a27b5b5ee7a4d1171cadbee4",
    "rawResponseHash": "sha256:be13f3d6a3942f4466d74a204cf7c6fc1d469e2d1a2fa5ff7f0d533869bcefa4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:acda36c9dabc7812d60dfc35ed546dda113c60b0cca9008c6a907a4a7b7f203b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0021-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any description or specification for the header background, despite the atomic Specification leaf requiring it.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e591df377a9caa2b1d03cb8b342932e5fcd8577f28e5c19f8ed62a675e8bdc85",
    "rawResponseHash": "sha256:f9a2988eeefa6dc2b2ce163c5673c5e9f6b3274f4a5f40664bc31f9b4db53a97"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:8bb62e1eb48d7ed7ba9238e20a6b9aaee1a779716f114083a208341b1b2d67b5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0022-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain any specification for 'Position mode'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ff264c80c9c735e0fec87e6eef468a2daf6c9eb2980e0ae3e41b4ddfc5754165",
    "rawResponseHash": "sha256:88f63c9c793b4cdc0cb7aedf61deab75e85dcc0bf2c65df2d5fac1c0bbd11b8c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:75ae99de955b9dcaeb7e3afefea0a14a5f62a411650c971179c3cc26743fb25c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0023-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Atomic Specification leaf '- Sticky or fixed offset' is not represented in the DESIGN_INDEX section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c938b9e3a6f035567f7b15fe9efc5c219c48f1b5fa97f345ae5076be048c1723",
    "rawResponseHash": "sha256:71c4873ef507f70a2157e9b830cfc3fcf4f6dd69fae714cf2357ce377a5a8875"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0024-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:454f64c136450d566940987ec8c881fdbfd650a47db88d8784cc48ef400965b6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3a551e6f89e76acd561c0dbde1c824e2cc9ffe4b68456c7cfe90f2ddbdc7913c",
    "rawResponseHash": "sha256:cf8ad5268a1da4a8a18d038e42dc89161e6811e18eb263831a0d5258c702e641"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0028-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:19867adeb5c337a16430127c614333c8976633d0bf707adea7d2e3827c417c83",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0028-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No exact values are provided for any property in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c212f22ad9f34eb7405e2ed016cf7913e89a3085b5eb7650fccb79c0bea31e75",
    "rawResponseHash": "sha256:9c02717437a44e6336fa80c2b5185dc67986a299a5b54f358dc83b65b9e45767"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0030-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0030-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:e315bdedcf2212fb85c47a6457be5342e0decde07565277bc2b3708c0a2b114e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0030-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Bar height' is not represented in the DESIGN_INDEX section S05.",
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
    "outputHash": "sha256:71e0b479480cc89c75976eb46781e5caa605930390a6d46174e8e1bcae1eb471",
    "rawResponseHash": "sha256:90b29fb3ebf0b0f8e2bb0ad7d8a221e980cb5ee99675460e824694a78d5e6a55"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0031-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0031-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:3ae120858a3c4cd82a98a7303fe4ec6f311d5d2f9668a4446872a6065a292dad",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0031-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "DESIGN_INDEX does not contain the specification leaf '- Side padding'",
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
    "outputHash": "sha256:fd460212e6fa3dc2f8e7f41764008e5134096c7acca72d6be7dfc22d303e37b6",
    "rawResponseHash": "sha256:45a8f88a117289e3ebf60ec6a7a7ac17df62ca8afafa533443c89f08e677cd2f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0032-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0032-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:c04062f81723eea4cb3058b4fe3ddec88f66998434d7342055b116e15bb050da",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0032-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Logo bounds' is not found in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2072d2f2c7dba10131f3c6d930642f2a08ff6c2dcc2fa91b356ad59651e30e9d",
    "rawResponseHash": "sha256:4d22ad32a4c2a38f62e466ee37e65b956e16d309f878e76e13d4a6cdbee7f88e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0033-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0033-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:ccab71029a5167cddef6adc70015d8993461a5d9997e1657385e92d27b027251",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0033-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf 'Menu-control bounds' is not present or verifiable in the DESIGN_INDEX section S05.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1e2e1f670ecc43a7a2b9fafab68886e0756b12c62f8220cf881462a4c36a3b5f",
    "rawResponseHash": "sha256:bf84235cd7ab905290f6359902f329d43dce06d9f5abd2431d574204f2335853"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0034-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0034-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:e5968556c61f8d51499fdcf57161386da3faeae5a645aa6236a63b9dc3841f99",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b747d02d39af249689d8e48c5ec7683b2ab1f829a5b80aeb5166fe21df2c32cc",
    "rawResponseHash": "sha256:82205187fded79aa8e7b2a31605c926d950044cf64a7c1746853d24bee7227c1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0035-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0035-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:5d5f5b9c75dd40490b8d28529016484abe23f8a5153fe60d9ad2ac248b8e906a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1fbe63637cf363e17ecce4977d6ee5a55038a8d55dd3d67b5d3ca457e58cedbd",
    "rawResponseHash": "sha256:b5e8856f0c5a0a7609127779b5c5f4f072127cf93eff59708dd722eb1068a3f7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0036-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0036-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:7916c3bcfe5b69264694db1c707f721e793981609cc4cddc435d7cc8447492ac",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0036-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S05 does not contain any specification for panel width and height.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d05ccceb3b84a88b53ab7a4d3a75bbbd9881d6814212c4a3bd8fd57bc73691cb",
    "rawResponseHash": "sha256:ce155390d334cdd5fb51d825f5daafa657e9652c315fd46e28c73c836c4eca89"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0037-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0037-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:025e80a690b64c0e0e54b60728da6aa87187a59c0a74299a4749281f2a25d2ee",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0037-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Row height' is not present in the DESIGN_INDEX section S05.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e3bea227897239a084a4ada21486c51461084b99996d47dd5adb2db87b076df5",
    "rawResponseHash": "sha256:8df4beb3b10c6f8f9b9ce64a9a63490520ce16a836d0c852e5448b06ef0155c4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0038-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0038-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:383a62919b879ee2f5c885b7be18e0b18accf43e9fd02528b31249b7d18b4dd8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:512907244f60cf67113f682910d8fbd690f3e196b64af2fa90055d25a5d494ad",
    "rawResponseHash": "sha256:9fc84476272cb96235ffa1d2fb7628b01e392e08bc3baa9f2acc37382a7b7030"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0039-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0039-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:e4e1e32b7ddfa9b99c33e35719ab29872e4766622e1d874c439d983552a17c62",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:04f978191294c583776e905c343e0f139ffeaf885dbe6d2072e04e9e5501262b",
    "rawResponseHash": "sha256:f196a68becf9c4a267fff91fc7e1f20f43db136f73614babe110d203123c3c26"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0040-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0040-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:88f5dacfef3086962b64cca21de312188879cda4e06a8df95d2edb9992c07def",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0040-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Overlay color and opacity not specified in DESIGN_INDEX section S05",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:2d2800a573fc3dff3d81a4c580dca40776a5636049d08b9a00676dc282800f25",
    "rawResponseHash": "sha256:51ca26c799ca51ce09d723be324a80527790957491773da47a1febb4a8a48224"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0041-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0041-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:a0369f1b0ab0e9654904b53f5924ffdc4765cfb634f38c01a86b4cbb6a568a93",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f0057f6587ef4a9e4eae57294bf1e848e166549a29323e0c409bcb7c9cf8365f",
    "rawResponseHash": "sha256:d13833d4d0fdcea24e541d7a6bb93a82befef1a7d03598d62f22737d0f837233"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0042-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0042-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:092a1dd5f22cb4bfbccd8ae3b2c2b535363eb29922047993217ce4a57b74e142",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0042-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Body scroll locking' is not represented in the DESIGN_INDEX section",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:cb90e6b698e0c82fa40af4dbfbf8a2f090e62a403840a1062f55916aab419bcf",
    "rawResponseHash": "sha256:5e36be718b5620f75f9b56256f1a98daea3f6edb6a6b9f5197e834938a2721cb"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0046-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0046-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:60d39b2b541dd5f8578308eca39bf82d1e440152c8103e2564a396a62598b9c1",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e98d60bd4d99a99d97b673c7437ca4300d6b9c4e65bed9f9793f6db724955393",
    "rawResponseHash": "sha256:c8559f6ef2c0ddfeafb885ea885a2acb47d3c2841fe4c04b0d9c0f84c1cae2c5"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0047-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0047-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:c16221314be4e534903da85fe601e45959840b6daa867fcfad84c21b8b332988",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2c6e76765c39334f5cd6659602989534ebda1e345586aebb1068130d2e165022",
    "rawResponseHash": "sha256:15750c336a9a8c567528899e51711fb96656dfde3300f55461651b668c6d7f08"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0048-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0048-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:cb107402b3fef19a6f3607a467a09ad62f53182fe6c442588e3e5b65027b6042",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5c88cc159b4cfb1a60c97008fd6fe57da9ab3000a4b585c918156f8b306a61d8",
    "rawResponseHash": "sha256:f7a8006470d4ee904a109d2b9f117ca38ad8892c2204006906a3eb3cb7b8b0be"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0049-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0049-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:dcaba1ec1bb6867ccd289c36e193ba2be51dc586cd5a4e9e7080fc83c5b0022e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0049-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not specify exact text color, background, border, underline or indicator, opacity, transform, and timing for every state (e.g., Hover, Focus-visible, Pressed, Active, Active, Disabled, Scrolled, Menu-open, Submenu-open).",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7e71605a3053fb022228ded482b2c3701b75a567a7d5652a5d524291a0c64170",
    "rawResponseHash": "sha256:23dd9e98b2e6c794850aa03b4caf93ac8d0adbeedc0072b560210f519aac2e07"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0050-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0050-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:31ac1dde74759169b045e9fce12335d531cb71b381f3e0d2d987f1dfc530d7cf",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S05-DOC-U0050-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not state whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f752cbf5b18c8ebe95122b8e381bb410ea1c6232ef4f06b2d990339f079545c6",
    "rawResponseHash": "sha256:9556789c032de9cddbd6bc483a5bbd8bb0df307c972ee62f24f9ea5df40898ae"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0051-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S05:S05-DOC-U0051-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S05",
      "fingerprint": "sha256:b9fe06c60a3460f469a21bbcdc02fa40e09035eabeea0ddd97b61e3af82c01ba",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e7f4958833f5e33a7b2cd0d7520597812586cc80398e68c47a988827652d781c",
    "rawResponseHash": "sha256:11b89ef9866fe26a8b5e964044f3fd79978a9deb95fb1e4adbc7ca9396300a74"
  }
]
```
<!-- END VERBATIM S05 -->

<!-- BEGIN VERBATIM S06 sha256:3e0e27bd01f558dbabcf68020348667c060a09171f2bbbc03362d670a070b1fb 40515 -->
# S06 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:2f150b69a3f86b250ac9c3539eeac3eb4411f5a4b0e765304bb878e3547e4c3b`
- Normalized output SHA-256: `sha256:675657c6ff2946baab1556d653f9fbec1710947fb97d95e8bc8a2a783aecc29b`
- Leaf records: `22`
- Leaf records SHA-256: `sha256:3bd560284a3e0839aa278881f7e5693ff8e81f5e4c4399b373aac5960257374f`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S06",
  "fingerprint": "sha256:2f150b69a3f86b250ac9c3539eeac3eb4411f5a4b0e765304bb878e3547e4c3b",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S06-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S06 does not contain any statement or specification requiring that 'Every page subsection must include:' as specified in the assigned atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not mention or specify Page-specific components, data, states, interactions, responsive transitions, accessibility, assets, and acceptance checks.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not specify that every page's ordered section-geometry table must contain any particular elements or structure; the requirement is absent.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for the atomic leaf '| Field | Required value |'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0018-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain a table header specifying stable page-scoped Section IDs such as P01-S03.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0020-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement matching the specification leaf: '| Bounds | `x`, `y`, width, and height in evidence pixels |'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0023-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No explicit statement of layout values (`block`, `flex`, `grid`, `absolute`, `sticky`, or `fixed`) with columns or tracks is present in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0024-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement defining outer margin, section padding, child gap, row gap, or column gap values.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0025-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement about alignment, main axis, cross axis, text alignment, or baseline behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0026-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not specify exact color, gradient or image, border, radius, shadow, or opacity for any surface.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0028-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Atomic specification leaf '| Responsive | Desktop-to-mobile transformation and breakpoint |' is not represented in the DESIGN_INDEX section S06.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S06-DOC-U0029-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement defining the Evidence level classification system (MEASURED, OBSERVED, INFERRED, UNKNOWN) with confidence modifiers.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 22,
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:8d66381c3aa2f9115813890d00eb5bdb9293fc49208cf30db8b1cd5512af9c76",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d30faed98976afb9c933d555d551f24351ebdae323676cca0f5aa525362a2630",
    "rawResponseHash": "sha256:2dd17f4821f875fa527be286fb7f40263e8cffe44f8ac7cedfeb6ca445029c52"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:aa53ac240f1056b2a0aaeab3d21201c00989b8b675da32e8a5b69e30d1c4d620",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S06 does not contain any statement or specification requiring that 'Every page subsection must include:' as specified in the assigned atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:3cd99daa6d2e1b2d92e815d7fab9cd5cdb714b33d81efb755b2dd5113b8e9f83",
    "rawResponseHash": "sha256:86b971f2c3decbc22284ce5a215ee81832a987bad3b11229383270f64d63c973"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:3b9f21ed5c34eff6ee53352a45815eff95e757e1243d14ff2c3a03b2bc071667",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:15215e3ca9c2175f3f101fc25ec26fc50890191f570fa56339a62ec4ab76a07e",
    "rawResponseHash": "sha256:f7b571ef4e84bbba1c9bd390d505fb637b3bebe61e2d06febf8888e3723937a0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:9dac38f2b4b6965d4c195820ae07fae8ada172d762a6e45299c2d2c1627a8354",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c4f03c13d80ac628627b7d98538b640194ec3b607be47ad2c20a3ae27abb0958",
    "rawResponseHash": "sha256:7f444bffda7e211033b2eef875d2f6f58e5be825916eee0dcd17331cc817fedf"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:5f7fe35962dc051885769591a64f189ab1a5449ef8bd83a4ce52358341c1ff3c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:697c59625454e8a730e98cb10609a911ca7f0db3b0cf0d20a1bc2c9764454ef8",
    "rawResponseHash": "sha256:21ae24437a7adafa4079da04964980a8684060090ce3bea28424b078dbf3aa68"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:80a244b566becd9426e1f717489aa41b445b3edcc98f052997ca40e63837ff01",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:90dc9c5a081ef376e40c9687854249be41157cb10d62b4ef3aaf2e4f5b1d0379",
    "rawResponseHash": "sha256:7b99e5b5ce66f1adce5e3e30b1f8677191000e8964778b5b471d3869142a8281"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:ad13809a933ab3a8a45e9e8f07857f9322a0f5a648b2831fbb8bb780b8661732",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:07d8b10e400a9d7a6c48f149c0fe51c9cdd9359a3298d1a23de4c21494ddba4b",
    "rawResponseHash": "sha256:47b63d14d16f1bb7cbb92c8ea846426d44127f7db75fcdbb6bb5ffee2f513e7f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:9869933fa771dd3f9654f17e21cd56bb36c8454cc1d8018256da924f4e6e099c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention or specify Page-specific components, data, states, interactions, responsive transitions, accessibility, assets, and acceptance checks.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a5a3e12f3eee433d60c7c3c456719b272cdc3de4c1560ef8ce15fe36e713e24a",
    "rawResponseHash": "sha256:c7e58d76137bdc384bc5dde78a6e8635dbea772e6765905871a2deed69143cc8"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:f33caf249b2442f5918e3b9a3707675227aaade1229f8adbcfb9dfa91df258aa",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not specify that every page's ordered section-geometry table must contain any particular elements or structure; the requirement is absent.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:25b58d5218f421877c9ac0c467ba7a2ed162f9ebe83bcd7574137732a5274a23",
    "rawResponseHash": "sha256:f3f91e4a260b27fc229cdafe3bc9e2f10cc67f04e298b395fe1d9dfb1bb19d7c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:4791a782cbe5455b8ae5e4f51c022c751f0be2f851a3a0edbdae143b20be327e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for the atomic leaf '| Field | Required value |'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:12cc54e2eb12af2f0333825080f2ae7e3aaa4fb434f658fb79344d5e50cccc8e",
    "rawResponseHash": "sha256:73a9302b00efbb6d269895710c26970a801f8b860ea0d2bbf701f17765b4a0b6"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:b6a548cc55290b60345f94a9f12a51258567e5489491c967d1d2e6b27eda8506",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0018-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain a table header specifying stable page-scoped Section IDs such as P01-S03.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:20e837453dcacde092ac5b26ee6a74f259e5b7682c35b0ffaa1374c0d416b7e8",
    "rawResponseHash": "sha256:1bafdd6545f9ac075637029b8cc10b2ac647392326b1de63ac1db09290788836"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:77ca2ab80149a7a2fda445285e8a124ef13a84357080935ed0c708e41b5bb6a9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:35d35ba84f29cd4fca31ab5b342893fa518ede450161b3ec6c60f3b71909457c",
    "rawResponseHash": "sha256:70810647ef7eac1177cf709b704d688b77e73b86b12e6373cb992ce0f8a48742"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:1ada6079319dbae8c63efbb81dc8fb95bcedfdd2eaf814849ed19920710efd7f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0020-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement matching the specification leaf: '| Bounds | `x`, `y`, width, and height in evidence pixels |'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fc37b759f8f5394fa5b0fabe7ae078609835169a33dc9e5625d0473eec82f476",
    "rawResponseHash": "sha256:7fb114f0c6f519210df2682f0bc96f811c39f221c91dad96be65bfc411f03464"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:0058109842c8d8e77ff0a400a73b9fc79ff09c032f0a2efacb28c4276a2b81c2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c5ed77e992c32237a2a4d26944e99cdde493622e437c6401630be5ea0902ee35",
    "rawResponseHash": "sha256:f9fe5795d60dd1f5f9a88e0fde5e41ebb8f2b4b49d90a96feb0ab9876a8021e0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:755dc943a32d4441883105dbaf68f64f27041dd840c6456ae6475d7e0af0a6b2",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5834e919baf5b8579940c61f147a34213423d95c69b309b482195070bcbd5f88",
    "rawResponseHash": "sha256:8b74c4767b0d32b02b42bb91d62c1ac6ad1a6c3bad1ae6699486b226d738f964"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:09ad7bc934bbc80d010b6fac38f8d182744481fdb8df408b9c7abfbb69419211",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0023-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No explicit statement of layout values (`block`, `flex`, `grid`, `absolute`, `sticky`, or `fixed`) with columns or tracks is present in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:85ca9ba0aa7f43f382bfa80eef702b29e849525ca87131060b5997a984179d01",
    "rawResponseHash": "sha256:07abdfd836862f33e97a5f5c2b392d9192413d00427a1c8c6d55f1ea7b52e1ef"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0024-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0024-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:3d44ebeb0e7a30397e64815e211d19210d79dc3dcea6dedef972948003bd69c0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0024-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement defining outer margin, section padding, child gap, row gap, or column gap values.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:248861e80c89ac9eed49b47a35c9ac93f08269cf66fa11c931c91c5c9bafd8db",
    "rawResponseHash": "sha256:52f1714a38ba12605c38693c2540a47a9090d7f6d6f27cffcac4d395fa94ac9e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0025-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:7c9f762fac770d443b5e2acfb2f1926e1a2c6433b33a689c97949d268d8f88bf",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0025-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement about alignment, main axis, cross axis, text alignment, or baseline behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4ffe1f5faf7811bb2e09aaedc4ffc820b412e6d51d111d4b30e3487684fc757d",
    "rawResponseHash": "sha256:b0b08dceae4737263ee4aacca993cbae69b56283424401c73c8f956def22e2c8"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0026-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0026-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:3e7fab11a7eecaa978325fdf0f915672de1adda043283b11788be1603e85d81f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0026-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not specify exact color, gradient or image, border, radius, shadow, or opacity for any surface.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9caf29173e4d0c5b78311be29b91a359138c816dcc420c0e58353fd984792cdd",
    "rawResponseHash": "sha256:2a7e5bdd97b6e2171b1fc23fee5cab75c204aab469351f1a0d8736a8205bba58"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0027-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0027-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:9feeb93e96817ad3cbaf28591833417350ded77c6cc8d0ba261d9d4d6fa1bae6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8f9c051fd02cd64de04083f0ae31bae4ccd26e7554b92197e88785eb521c36b5",
    "rawResponseHash": "sha256:bdb73ca1382ddd69a19d7c22b78cb48576ec4c818d8f9d352d31f78a858ba877"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0028-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0028-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:dc1e8af2bb07189f0c9b026d9188b4755fbbb55cc3a0310500ce1cfbb9fd3428",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0028-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Atomic specification leaf '| Responsive | Desktop-to-mobile transformation and breakpoint |' is not represented in the DESIGN_INDEX section S06.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b1444c9dc287a584138bf22e79d0e4a8b4379351d4fb7c1d747671a9aa0daeaa",
    "rawResponseHash": "sha256:aeb38456d6efdce43653286feccca024642e9b7d2dfb713a6dcf26299da4d5a6"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0029-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S06:S06-DOC-U0029-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S06",
      "fingerprint": "sha256:78d730169d12d5dc96489d5e6218046dbd36ff9c5a13c72b9921cb7c9bf45893",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S06-DOC-U0029-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement defining the Evidence level classification system (MEASURED, OBSERVED, INFERRED, UNKNOWN) with confidence modifiers.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:47c881071b47dfd28ca86153926b5a41b1235a9a851ad981341548dd9a2aff8d",
    "rawResponseHash": "sha256:e85772bf349a406bf59f873611634d8c0484336190e06fff1f1bae3650aeb910"
  }
]
```
<!-- END VERBATIM S06 -->

<!-- BEGIN VERBATIM S07 sha256:b8898ecb0a792b2eda5ea63a533a5b5f508e986b2cd7e1175bdf9eed385fa4f8 25532 -->
# S07 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:456e213f6f93523071e814c2175f757d11489919c369a488a74477f8db17c5f9`
- Normalized output SHA-256: `sha256:b4624986831ce1bdf7c83d0f5c58ecccc53baa495bf698673e04da5d6e81f0c8`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:a6224c8974e12a1c6e808fc4647d4deb8568b5876cc247938748c686b4a3cf23`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S07",
  "fingerprint": "sha256:456e213f6f93523071e814c2175f757d11489919c369a488a74477f8db17c5f9",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S07-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any DOM hierarchy information for page sections.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not specify the exact CSS layout model (e.g., Flexbox, Grid, Block, Inline) for any section or component.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification requires recording flex direction, wrapping, growth, shrink, and basis, but DESIGN_INDEX section S07 contains no explicit documentation of these properties for any layout component.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S07 contains no instruction to record aspect ratios.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Record overflow and clipping.' is not represented in DESIGN_INDEX Section S07.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement to record sticky offsets is not addressed in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any statement or instruction to record absolute anchors and transforms.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S07-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not mention or imply the requirement to record z-index relationships.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 14,
    "passLeafCount": 6
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:1cd63f36be9afe05854081fef320a2e865fd1b86811c4c1d3f9b9438bdd1dc4d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any DOM hierarchy information for page sections.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:31ca4f5d3961426d2dd47fd56127a86d552c28e25dbf3c9e8b52960be203e64a",
    "rawResponseHash": "sha256:5f58700aded9b12863f5b54e6bba1e10ae6b4cd7885b222ff39eb238f68add76"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:cf1a25fc4573ff0622b18a6a377d6101500d0052ec3fd5f32ad00ad4668f23e9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not specify the exact CSS layout model (e.g., Flexbox, Grid, Block, Inline) for any section or component.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:0594e2073d1d340fcada456f12f82d0a5a9a6f2b832eccf16d24b1b5b71fb145",
    "rawResponseHash": "sha256:b423c6c54706164e39d3e0482756e94f6688ed61055999b23d46bac4a660e89e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:0c10684a048c6cb26ff07c703b7cc5440d1f8b19fcab5285fe4da39393d3fb8a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fc64b4dcc3e4f3e5293ef23f0886d89e4da53a83e96e7f712456f14722775235",
    "rawResponseHash": "sha256:6f19b5ba22aef098edcd9fc536efda7e673e3496cc3576aa49e1f393797dd937"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:7ceb909c5ed063fef7cb0e78d8fde0292c62f9626cb7f207e083a9d3ef2c5fc5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification requires recording flex direction, wrapping, growth, shrink, and basis, but DESIGN_INDEX section S07 contains no explicit documentation of these properties for any layout component.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6b971eeee40ec43d2b80eb95fa4965b77458e9cf9fa3f3aa9a4f9d66b603f99c",
    "rawResponseHash": "sha256:fd2a492d9900ad525efd8c5aae0f213e7b404d2908726e503056d943a6e55e4c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:a6e4a94d1e1f91fc7eb6f5201ad082512456f6b67d81cefc034935ce60078d35",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7bc8c95db6aae6515894366c310504fc5b76f81f366eb63a03b6449b0aa55da1",
    "rawResponseHash": "sha256:8bcd809073a9ca1cb376eccd3df2f952c487fa25519bfd343c1fbe6bb054a271"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:57413bc2eb56b49a55f62858c67b36668ac2b05463dd65ca1933c0925668156b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S07 contains no instruction to record aspect ratios.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:1fe89126ff46c48c59a226a38f9e8e6065e0eff771f3888405ddbf5a188a661a",
    "rawResponseHash": "sha256:e316e4f03b1d55ebcfa0fe6315bc5f32fa239b5cad054e56658021834b5010e0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:ae2abaff4846d8952ee06123da6ad9d95567be38974db8d30e0b724fb4813394",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4204b237fccc09db139254be7189d010b7549b0efe14aaa87acc2dd40f50141c",
    "rawResponseHash": "sha256:20f411a42ae8eb55b77e8ee01a52b2cbdcdd8ca63ec2744e106eddb8edbb1bea"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:383adfd51e65bfedd3f3b427275fbe4e290ce1670c31ed0d73610e7417471fe7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Record overflow and clipping.' is not represented in DESIGN_INDEX Section S07.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:df96294ade47941c0a9a34c4fcf7b8c8fc5e48b24fe4add989d00e48d6053d7c",
    "rawResponseHash": "sha256:5da17b82385c2ea2ef65a8dcf714961ecb7e602152443301563c476542f9de8c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:ef100075574c3c5fb016b888f668060c3e7d6d288e0e0ba87ed4089ec649fa75",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement to record sticky offsets is not addressed in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e45c9dd2507b11ae65072567f5458ac62530c534284d6182af1fc9bea08e61ba",
    "rawResponseHash": "sha256:4e9827471bd56d7ecebc8d4a8e71070f36ff79496a8f61fc6fc311edac772cff"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:73ba67114f4013bc7bedd29ad51a3e7fa3cedfd68b1cd6f80699f78b37d12932",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any statement or instruction to record absolute anchors and transforms.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7835323924ec3f916de47427cf255b1cb888c7348dac9b96526b5fef43a8d0d1",
    "rawResponseHash": "sha256:82c9c99e572afc05e3c4623c4f6c54b9f3ed0a5f0bdaa724b588b0ade7f852dd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:140ed07e15e44416470740297780b210f946e9daa9f4821cea02be906bc9421c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S07-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not mention or imply the requirement to record z-index relationships.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e6193e35f635192c71c86edb10afaee086b3bad86505903b72d0fce5d228d393",
    "rawResponseHash": "sha256:7ca92de415e4d4dccdf971fd27f48dafd1de205280e5f10f525d039e124a0022"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:ea46066c91f3946ae5924fd1c29336e1a217c0061fd16f9f88b715da90f42336",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:0a220e10450c73778eb462a09f744d1f630a405445add9ea71ac543b81ea2077",
    "rawResponseHash": "sha256:773ef4ea61a86bb16baeb6015390ffc2b38d51a1387c40aa702fd410368664ce"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:f110de8c2b6fa6334878689cd4fe5c1ab06603aff7a86d2ced3ecdcd611ccfe0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:022cf5ad248948c6e6bc96fad6d3b345a51f099243044047e2d9f576afab6e3d",
    "rawResponseHash": "sha256:b3200560db3805394f27c0902648c861b552aea59306d626227b481fbce3502c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S07:S07-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S07",
      "fingerprint": "sha256:0670e6e754d916cdcdca5823ddc95add01b43846bde81b9d4054f69c62ce1936",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:103dd5656f5c8c3fd3dfdc7a937937b09bdeda4c6cd42522ef867ec2555905e9",
    "rawResponseHash": "sha256:568d8654aad655d20bb654fc17e92786eaabec06b0bf9fc9ef85dc844a829c7d"
  }
]
```
<!-- END VERBATIM S07 -->

<!-- BEGIN VERBATIM S08 sha256:56b43c7e3753c97204a43abbc3f2d2bdb2df132f14b47fc5d802f4e15290c725 22174 -->
# S08 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:d14ea2c98a6ee54cd68c6acaff75c3fd078598bb7e36b4b153786c42c07c2650`
- Normalized output SHA-256: `sha256:60b0a7b94dba6021bad5c2634a12fdc886157289684c25c3daa2075210dcc589`
- Leaf records: `12`
- Leaf records SHA-256: `sha256:19a8c9d99206b9f69a6f7b1d9458b93a2a754fcdf6f923758aa86c59d2401dfb`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S08",
  "fingerprint": "sha256:d14ea2c98a6ee54cd68c6acaff75c3fd078598bb7e36b4b153786c42c07c2650",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S08-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8 does not explicitly state that every component must define its responsibility and reusable boundary.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8.2 Contracts does not define props with types for any component.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define variants and slots for components as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Requirement to define emitted events and user actions is not addressed in DESIGN_INDEX Section S08.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain the statement '- Define data dependencies.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not define loading, empty, error, disabled, selected, and success states for components as required.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S08-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No mapping of components to page and section IDs is present in the DESIGN_INDEX section.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:f99e94883dd94f7535bcc943e84385e0e4d380df738e3287e4db8f8f2bed4efe",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a796eb6900d30d5d2c68edc5db099d1a4fb903997600d5981d91fee3ba2d6b37",
    "rawResponseHash": "sha256:e0469c4a6c464353a7ff0313fe81e7e5cba631cc432cc7094f383bccada7fec1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:5976c419759b6b7ba3d2e1fbd43af4a4cfc43e34c1a1dd68a71d96415ee8fc4f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8 does not explicitly state that every component must define its responsibility and reusable boundary.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ade4a159cdd7962da0033779d1468352cfc34f3d2b5c6a44cf838e49f9015715",
    "rawResponseHash": "sha256:52efb70ccff6e88b3519dafe6db58c3ea364fa24bc05291bfa37673b152df36d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:17c44ab823b3e09cc5383c278a73bc4e0f35ccb75ed904a040fec07a5c352718",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8.2 Contracts does not define props with types for any component.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a54c4dcdc4ebe40b3209593bc5489b10c858d32bfac8d6510168fa3794271d6c",
    "rawResponseHash": "sha256:64cb758968016692af36af26a3a4342a2c0efb9186abcaf41557d516d55c0115"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:71264b794b87f441bb142e427bb53b8c852de21fbe39db91e5ac2770d9c47b71",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define variants and slots for components as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:dff5ebaebe8ef36dcf33a7688ecd7e7a21af7f5c9d7ca820208bbe08d66b07ae",
    "rawResponseHash": "sha256:8180edfec7396e000797d48faa498c9f6062f6670487108c9756b3251b92316e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:34eab7bca4d47c6fc243601e623fda0bc398c838b039a4e39f2e2acb633e713a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4cc7c9c390dbcbc1fb1ac402256d5e42e07835085af604d3873b67bf737a10c4",
    "rawResponseHash": "sha256:a1ee7dfcd1013b492c61f3e61f307aabd7ac1375d7133a48009ecfee20e0cbf8"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:d18a7abfd2fe24e46a9103333429295eabc46843bc9e7d2505a665b12bfa6b1c",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Requirement to define emitted events and user actions is not addressed in DESIGN_INDEX Section S08.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:19033d801e68316d140ef0a14daa35e9c43669b3e9e54d12d8552394cc14c729",
    "rawResponseHash": "sha256:b5031227e49fc3a60a6b380f19c2c6f3500f6dfc711bc1cd9478f4ecd83ba65e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:41cd310ddcc10887782626ff15a17a586b5884afff2ab9a26f15082afe6ab3e8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 8. Component Abstraction does not contain the statement '- Define data dependencies.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b1d125196ef8164984cf10a3320393f4b063471cdc31cf4f3f5e8bcdc4333a27",
    "rawResponseHash": "sha256:a2854dca15a8a3eaa32108901f87a1d6bd5b7be5668e5afa3fa9d78af170df63"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:7e4ac0fc60ef62797183fd5ce7d82091a17d7891b99017bc6dd8c4d89be27154",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not define loading, empty, error, disabled, selected, and success states for components as required.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:bafd437531226296461900b7d9c7a2054309e1d7d8c26cf6ffb83d11a33ea74e",
    "rawResponseHash": "sha256:82048dcd8fd75af3497acfdfabb0046c68d5adbe72091a0f74abc885123dbd9b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:52c3c733a5e639bc70e2ae57fc455379df5c0f7d238a583158afc953d1638aa8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ba9d5a1b629c7a5cc78df8ec9259b44a4c7d41b423df5421a722ffdc1f68f806",
    "rawResponseHash": "sha256:457520714f321729705b279dcae1253fd14d3029e5d74cc8d81b350ac27e4fd0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:ff97aa82acdd74dc333ddacf800c7705ba13dccd20d73ae8b5ae0128bf6850a5",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S08-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No mapping of components to page and section IDs is present in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c3e4eb4377248d87f927ab54ec76bfd3fc4d215c95992e850779e7a6f624a7e4",
    "rawResponseHash": "sha256:188e080f4e9b2d3dd287e4c73b27bae33171f88c0c34cfceb402c799df892d12"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:079f080f494b8fe5aed05ad730ce7d685181b0e9da1ce5528cb266b4056929b5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4242f52c5eadb98a3def1fa2f5f0e1b9c4a2fd4c1b52834412502f26861088bb",
    "rawResponseHash": "sha256:9bf59e044fdf27384eee5aba217ca85315d0a0a2f73e05ae2cf2479c68a79ada"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S08:S08-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S08",
      "fingerprint": "sha256:88981b3d7e80fa39de2f87b3127dd4a6e84f602cf3ec1417d33eb4cb652628c1",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:080975137752812aff2b5a317896cfa4f3a1b9ea386a8e5ad774845e9a6afc0e",
    "rawResponseHash": "sha256:6c9895ad34ff17ec128a7192a1602fa6418345d8b8dd0cbf90309f2256f49da3"
  }
]
```
<!-- END VERBATIM S08 -->

<!-- BEGIN VERBATIM S10 sha256:ab6c7f689fa2d9108d17379cd00c35a05479f71d336381a21f3de50d97e31da2 29444 -->
# S10 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:e8253da9c6653afd767e5f66a8d0a086ab521bc03d382826c0813db235d93120`
- Normalized output SHA-256: `sha256:20f18c6b28e121cdbe0f4ada496873bfacb3afcdea946bfd335de09d18ea0464`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:db29254c9a4f684fedd11caa037f784fe80e63b7cdef12d68db6dfb4a8664dd9`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S10",
  "fingerprint": "sha256:e8253da9c6653afd767e5f66a8d0a086ab521bc03d382826c0813db235d93120",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S10-DOC-U0003-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define any visible text roles or their attributes. The requirement to 'Define the following for every visible text role:' is not satisfied by any content in the DESIGN_INDEX Section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a specification for 'Font family and fallback' as required by the atomic Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the requirement '- Font-source strategy'.",
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
      "finding": "The DESIGN_INDEX section does not mention line height in both px and unitless forms as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Letter spacing specification is present in the leaf but not defined as an atomic requirement in DESIGN_INDEX Section S10; only inferred values appear in the table, not an explicit specification for letter spacing as a standalone atomic leaf.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#sha256:a9bd84befc2b8669ba57f9a588a4ab7a33e9f8770b9a9e46b2fa424f0895c002"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Casing' is not present or represented in the DESIGN_INDEX section '10. Typography Matrix'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Atomic Specification leaf '- Decoration' is not represented in DESIGN_INDEX Section S10.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 10 does not contain any specification for the requirement '- Alignment'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Maximum width' is not represented in the DESIGN_INDEX section. No maximum width values are defined for any role in the typography matrix.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for 'Wrapping or truncation'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S10-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S10 does not contain any statement or table entry specifying that typographic values must be responsive at every canonical viewport. The requirement '- Responsive value at every canonical viewport' is absent from the Typography Matrix section.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:f49cc90aabc72a2108d6cf3c8b5a070bb988e8324d45217d003e2db255d7630e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0003-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define any visible text roles or their attributes. The requirement to 'Define the following for every visible text role:' is not satisfied by any content in the DESIGN_INDEX Section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:949c5692fde39eb2aee9c00b50cad0d8db40bad50b3862dedcd40437eff4e4b5",
    "rawResponseHash": "sha256:6d646a8e01ab2cd0acd1f8421d0c46c5cc910c431e87e3a978c88f9ed0ae67d2"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:7cf17c31e99817f2aadb5f1c51cbab3d81f1246886a4ed33ba4afd7a28c64f45",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a specification for 'Font family and fallback' as required by the atomic Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ce26212a7b01214d93f27ba25897ae2507c171ff44f94f3151382808820f9e38",
    "rawResponseHash": "sha256:0ae369234200f7fa71012b2b55b7341b43b1653e3954bd5c30239bc0b6e2876e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:bb8b480a64a128b6b5bd8d591bfd1e0dc5d83dbb501c42f261c0287eed703e1d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the requirement '- Font-source strategy'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:74d05dbfa019bce373658ff5724f24df99b387697b6ddc5618377bc167010f38",
    "rawResponseHash": "sha256:5d26a27b4344fba53334170192465ef5c57d0d7d61a2218635ff2eeb95ca85ff"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:b8355f94ec24f41ab2f2ada2e366bf2f4e5b36e747456e10bcfb19b3ae408ec0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:dd9f3988db1e740a84b9842b162bd5ba55e4bb5dab34e828e1140a5c24637148",
    "rawResponseHash": "sha256:1abb60ec5cf10a51ff08c49eb048d17bdd426ac37187143513f3be8a7d02f083"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:38d3436727ba1c4759f41afc66c7cd6990c703a4a3de6acc30f1031558b23656",
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
    "outputHash": "sha256:3408e97eefe49c741bada52fae9852a89805408e10e58f6fdc1dbd2ee5a52595",
    "rawResponseHash": "sha256:7ceb7769970622a0bccc8b534b8caf94429de022b5524a42c148007d7fdbab74"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:d199db7bd3adfcbc61d3b55a26ddb044a50d892ef8193d9f43f7e0e121b7f5da",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not mention line height in both px and unitless forms as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:364f7f817f4523884354db4f25235aa1badf9ca65c1b102d525d38376efbd57c",
    "rawResponseHash": "sha256:151709f8b9b59ce5f27c824f43a732024dcdb357a8970d6e79f883ebf9ba1751"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:371f104d99dd91aced18838457a10011460ace039b110513be83b95175258caf",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Letter spacing specification is present in the leaf but not defined as an atomic requirement in DESIGN_INDEX Section S10; only inferred values appear in the table, not an explicit specification for letter spacing as a standalone atomic leaf.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#sha256:a9bd84befc2b8669ba57f9a588a4ab7a33e9f8770b9a9e46b2fa424f0895c002"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8210eb0c3b784f78b8d725ac1a1e5e85faee69b29f72e89f1fe4fa75a9bff8ef",
    "rawResponseHash": "sha256:1c3919bdaece0f96fe5a983ca3539fcc46932e3f4f8a7084b6c17d0cbbe2e068"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:013595961cad7207dcd080f1c2bdddc5f6fc4c7fbe1a1ab4e2e889bd89dbfe6e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Casing' is not present or represented in the DESIGN_INDEX section '10. Typography Matrix'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c960dcce962614616d3c56591d5b88330a19b1e1336634679aaadc5b4f7d39a3",
    "rawResponseHash": "sha256:e82521bd02c09f7dc4b98d6c1b2dff75bdd982e783e73dcb16c9d3f5be93f2d3"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:1a9ce9b952c633cf1abd3233c10172a3ec4799eb2018ff40cc9876083d060aaf",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Atomic Specification leaf '- Decoration' is not represented in DESIGN_INDEX Section S10.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7a330b764237ed9eb71159a2d3856ef1cca43ae36a0987d80ee4318cf09feb21",
    "rawResponseHash": "sha256:958ec7a2896a7d7e3f0fbea60be6b5e3a9928d91e4c0710b5d873e019bb07739"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:383ce2f3fbb7a1c6abe2e4339ed066f6506ab5ddce34d37ff593ffded7933bc0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 10 does not contain any specification for the requirement '- Alignment'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:58766e23cc556b76f7da61e0941d21585faf33f520859ace748b9fa74e88cbe0",
    "rawResponseHash": "sha256:6ec3fd680eaac7fed875127fa9ae4b30e7a03409378ec17a1ff062587a225c7f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:11dbbb22ee3fcd1c7f439ef820af5b2f6443e20a24c75aa60051b93cd2286622",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Maximum width' is not represented in the DESIGN_INDEX section. No maximum width values are defined for any role in the typography matrix.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b510e44cf78c3cfacbd2ffa82a0bb64119beb4f66c99188f6062edcab1f4dd3b",
    "rawResponseHash": "sha256:8422a7c2dc25bf95a9e52b11bded5320ed7e6ea4f8babdc2c3bfa24d6f18f18b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:c28f57486980268c080b2d03cef37b412d20a963558113dea3e4065f3449af50",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for 'Wrapping or truncation'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:03e76d17f5f103778b480c338a7311970f0624c647c7b07f8d0b7b635a4e71f3",
    "rawResponseHash": "sha256:31c9067d5f2798f1921a79a10857fccc5c45ae943a40d6dede297622af514e04"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:53a9d5b385c2d05b8a356829a653a714e5c1d3519f760d70b6da25235e563db8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S10-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S10 does not contain any statement or table entry specifying that typographic values must be responsive at every canonical viewport. The requirement '- Responsive value at every canonical viewport' is absent from the Typography Matrix section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:27887003366e35eb5c84d3fdc1bce0b7f272e919be9938dcabb2ac89de3e2df3",
    "rawResponseHash": "sha256:4dfd2d45a05c21a92d379c43ba3b93ad90f803db9180d90ca763d72a46ef16e0"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S10:S10-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S10",
      "fingerprint": "sha256:cf94f062f34d1b7b208c14a7d5153f16c4388e03ee8851c937efa16e46ab313b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:960cc457cc34b3bfad2b1215a48e5abcbd3c9c77bbd46e1b0f701a132ded5143",
    "rawResponseHash": "sha256:01bf1ece14aab8a7942d51a1a6a71ffcb85d3d14090e761d4e47cfc5635418d3"
  }
]
```
<!-- END VERBATIM S10 -->

<!-- BEGIN VERBATIM S11 sha256:f392e14772e9d3fff06f58e78d8dd212a11f7ec1b67c74771be9d428ef19b0cd 12996 -->
# S11 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:39da195653bcfe0b0190b34845ae1cb56742ef1a0210b48ff395494360f96beb`
- Normalized output SHA-256: `sha256:29609611c14855d4f779037b26113e5eba8d92164ae10505b5e164c561bc1b0c`
- Leaf records: `6`
- Leaf records SHA-256: `sha256:d39273c50b99d1cc3a56eaf317842262a08e03c6ea6913965374239c40660acb`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S11",
  "fingerprint": "sha256:39da195653bcfe0b0190b34845ae1cb56742ef1a0210b48ff395494360f96beb",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S11-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define source aspect ratio for any asset.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S11 does not contain any requirement specifying exact stroke, fill, bounds, and optical alignment for unidentified icons.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D04"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any explicit statement or classification that separates reusable assets from copyrighted or branded assets requiring replacement.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
        "trigger/DESIGN_INDEX_gdweb-26357.md#E-D04"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S11-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not mention recording mobile-specific crops or alternate assets.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:c765181dab2a8077bf7702d974c8e1b082a17b49e60376c49992d007559305b6",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:108293f41ca8e44f3497577390651b4b8107cfc2041b74a1df03f98c8d251232",
    "rawResponseHash": "sha256:f0ab9b2142042a6de7814be1f073ef8813ba65d38f8e037fe75130b8695201e4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:2263065494cc5553f48d05c752b188fcf52d9b32e644aef6174bfc47487e7fee",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define source aspect ratio for any asset.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b66069c9bb6128757c35b57e734b04861bcb86c76577986c5dc7b1a3613f7e10",
    "rawResponseHash": "sha256:51cbeea3503831c26de8b9713874359043d090af9d4ea4794a66343ce95276c6"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:a989e1249a8777dbfc32838e76df5d474cc28bc2df1d4cdc5bc2ca716db8295c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:94b457f3d1bebc6522e89643421c84576572e4f2b6d8de7dfddcff0b0e609154",
    "rawResponseHash": "sha256:80736d9f803a3e6b3ba50a5e9f8da9ef42e31aff15dfeee54a6089a28d8ae98d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:cdc10a705de9a6c5fdc094ff8208827129b7b54c28a4e3f0bb408e5a4207464a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S11 does not contain any requirement specifying exact stroke, fill, bounds, and optical alignment for unidentified icons.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D04"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:249bd1416b13b192c957990a24e78e4ad4f40a2497fb241ab3f0aabd866940db",
    "rawResponseHash": "sha256:bbec4274cf0dacafc6c8dbaae049bbfbe3e1feedfc507fe92ea52d86460b1af9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:6f9eb55bf90f9ab8d4cbef9057e1022e98b71db88d274ce54cf0666a718fe6e6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any explicit statement or classification that separates reusable assets from copyrighted or branded assets requiring replacement.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D01",
            "trigger/DESIGN_INDEX_gdweb-26357.md#E-D04"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:eaec6b1127895f51966237fc7ee7d29812a90856c96417523967e6b5b2857cfb",
    "rawResponseHash": "sha256:2079859dbaf75c16e4a9698bde45d68fa880d10397c555d9166276ff22ad4503"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S11:S11-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S11",
      "fingerprint": "sha256:e64ca46399953bc287a3322c4dddc164c85a5d8bf880727032c6a8c3b4d8f3ca",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S11-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not mention recording mobile-specific crops or alternate assets.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:faed7f7b02a179d0e1d056b5b8d3e55160f486fa46654314df3332ec389a2cca",
    "rawResponseHash": "sha256:1d63b14d41c6bfc32ee176eea59d5d72c187a9ebf026807a7d6ea387735a02fd"
  }
]
```
<!-- END VERBATIM S11 -->

<!-- BEGIN VERBATIM S12 sha256:f6f7c9beb335fb4e9840b5c966e312074c9fd639fd5c6b511e97ac0d5331e5d7 13297 -->
# S12 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:35e6b32184fb6491fb9be9236a613d8d5c0aeb207b734296042b944b66f2dd5f`
- Normalized output SHA-256: `sha256:08635578c807d99d5f05f6f7a9b2608ad2a37b44d032daf921c1e31a3e5788c8`
- Leaf records: `7`
- Leaf records SHA-256: `sha256:a5f5a7ae4038e033414923bfba5541fe62e0fc5127f33d775f835648b3efc364`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S12",
  "fingerprint": "sha256:35e6b32184fb6491fb9be9236a613d8d5c0aeb207b734296042b944b66f2dd5f",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S12-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S12 does not document 'order', 'visibility', 'navigation mode', 'image crop' for every page and major component at each width as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S12-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any statement about defining breakpoint rules as behavioral transitions rather than numbers alone.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S12-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define minimum or maximum sizes for UI elements to prevent dynamic content from resizing fixed-format UI unexpectedly.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:c3bc5c61c7b5210f946cdb5e9555a75bf5776607eba0c43d1eee08e266d9c1d3",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:72007b2c7cb778e7ec1d7d6bb7de3b1b31cd9067af0d06ece8682c08c997535b",
    "rawResponseHash": "sha256:f880365c853a067148c5afd49d39c3004576096dc7519f7eeed49f160ae2e301"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:0a6c1fac373d9ad9c3b7953614e27bcd7b0467f474c2e624ab36617b785eeeb3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S12 does not document 'order', 'visibility', 'navigation mode', 'image crop' for every page and major component at each width as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:b22ff0b65fa673f8f7c9099b5480e1ddef2ef5fb030e06e7f52a6aee5f289c0e",
    "rawResponseHash": "sha256:a008bdf56f63da0bf68bf9ae36884f3950ae4969f3934ad4a5c3b7cba19930db"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:dbbcbb3f64fba5cc6829422a11cfdd7d8cd8e0d6b8dc5fd7b3ffa41e300cbdac",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any statement about defining breakpoint rules as behavioral transitions rather than numbers alone.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:61bff9e2df71fba07feefc8cf0c832a37a351f304659501f2a7efe1066b4f356",
    "rawResponseHash": "sha256:f449ca5dc54cdec6dc071534724959b95360ec3b1dfe1acb2dfbf5877dafd802"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:9e32e3b5c20b8403be8e48174f371852ccfc8dde28c74ac91ef084432efc2167",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1d73a083b2fa517c04b2a870095ee0479ab75fc791a7996e821d15616f158074",
    "rawResponseHash": "sha256:f820a7977e01c4a673d3bbfa97a732b78664b5272a9bd7f59a18d1f354cdd998"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:9ab7a9f281e2a4fac60aea53830aa262e27858262726db95bbb8b76d32fc4f77",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:23783b3c37b6ecba9dc89ed5fd625315953072bf0cb72b1656476d50fb678ba0",
    "rawResponseHash": "sha256:b4ceec16ff2ae2e0196226ade70a671cd8166479a2c01806951cc796edb0c7d9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:18fd08a1d642b1dc70284ae75baf0b956f22ba33f102a7a4b63df609e16bf8a3",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S12-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define minimum or maximum sizes for UI elements to prevent dynamic content from resizing fixed-format UI unexpectedly.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e338bdadf716fdf0afba3a706e4804f34360563abbd26c65bdfddc8e3bddd51b",
    "rawResponseHash": "sha256:19fbe7ba2cfd66868be1a4c9dae2289fa7bf30d616d61720f3bc075161f6cdd1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S12:S12-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S12",
      "fingerprint": "sha256:5459eb6ac01b382e9d4ab2986fb7de4f43b5daf59a77488586958d5446fcadff",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d85ad4bddc477aae3939d6755e49d1d2923a34b86cde81584e3d1bd7f598bac4",
    "rawResponseHash": "sha256:f1bf52e67f63f27d896120dc1b418c6270225daa97d10e86c062d95b716d79b8"
  }
]
```
<!-- END VERBATIM S12 -->

<!-- BEGIN VERBATIM S13 sha256:9f27ecbd6a2d97967313c1225169b4809c9edafbe485c7b57297c5b1577952f9 27932 -->
# S13 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:d096a2e93b0c81eaaa6031f2ec92a8cf07557590ed0031afe3e4b2fb99e30022`
- Normalized output SHA-256: `sha256:ffb6435f5e0aed97dafdd7fc413d21cc3a3e7e4ddbf503238ba6b02ed4ae2281`
- Leaf records: `14`
- Leaf records SHA-256: `sha256:9c4656546d1960f5e61f48f83970ce4aa0fede830bb282c3b06b9348b047b123`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S13",
  "fingerprint": "sha256:d096a2e93b0c81eaaa6031f2ec92a8cf07557590ed0031afe3e4b2fb99e30022",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S13-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf 'For every applicable state, define:' is not represented in the DESIGN_INDEX section. The section contains a table of interaction states but does not include the imperative statement requiring definition for every applicable state.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not specify or enforce the use of exact colors for any interaction or motion state. All color values in the matrix are either inferred or unknown, with no binding requirement for exact color matching.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
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
      "finding": "The atomic specification leaf '- Transform' is not represented in the DESIGN_INDEX section '13. Interaction and Motion State Matrix'. No row, column, or entry corresponds to this transform requirement.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Duration' is not represented in the DESIGN_INDEX section. No duration values are specified for any interaction or motion state in the matrix.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the specification '- Easing'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any specification for keyboard behavior.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the exact requirement '- Pointer behavior'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The requirement for a reduced-motion alternative is not addressed in the DESIGN_INDEX section. No row or entry in the Interaction and Motion State Matrix specifies behavior, timing, or visual adjustments for users preferring reduced motion.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S13-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not include the states 'active', 'loading', 'error', 'empty', and 'success' as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 14,
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:7c495bedd98c48403e69602171e8b72b43aa5ad9a85e6043d37be93b550edf04",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b46f36ecf2e2f42d52e86f2a2f375d5b9cc58b6080eea46b9af91ae353f66301",
    "rawResponseHash": "sha256:9330e24fba7fe9c1acfeb5075f3ef46bc111677bf745a949b25310f70ab74561"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:9fd736c196f4413c8eeda0a814f1a24e57836c9db512400dcefde51838954a04",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf 'For every applicable state, define:' is not represented in the DESIGN_INDEX section. The section contains a table of interaction states but does not include the imperative statement requiring definition for every applicable state.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:df4e0bcf230e8e5e21f531216b1f302c16630cf7b84982b9de554beaab0157e4",
    "rawResponseHash": "sha256:55288271ad958fa095cb6b300cbbdc2088f94f59617ae1e14513e0871960ec33"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:c408cdbbbc72efd29434a2c29f6e843249fa57e63fd9dc45320a7f5fbb9191b5",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ad6ada5e22ad73ee8a57401ad0840ea5be2f72106b662b647ce73c2509dbd067",
    "rawResponseHash": "sha256:16fbb5a9e297f67001da812d5b162ccac5dd3c07edee1b735e5ed3ed0ce8e726"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:42022b64fed2cb3b446e92920b8d9485f6430a98540892d7aa4603317d0f9e06",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:759c648df5b1d81272c09b4bfaba7687766e1c95017d1a6d8b38105add1421be",
    "rawResponseHash": "sha256:93e89c3a01d3bedba5544a527867b0d171382603b1e4f23a78862ef4edfecb7c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:b00beacb6deac20a2c0d3472f26dcf63f97d699ecf8aa29502e4b6f9432e0763",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not specify or enforce the use of exact colors for any interaction or motion state. All color values in the matrix are either inferred or unknown, with no binding requirement for exact color matching.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:0a42611e7fdb9e8ba484b01353b147de884b12c3fbd4635d2489ffee3f793af7",
    "rawResponseHash": "sha256:311b8ee8cf859b5bc3f5e8f07d22fdb2776449362e5ce52a4fef509659d70645"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:a8c10bc6f548cee8447ffd324deaa1370ea4778b167ed9a24b4578ae1e658dea",
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
    "outputHash": "sha256:728ce4ae39a2399708734bea6a791baa0c38856f4728650058102176aa5e6fca",
    "rawResponseHash": "sha256:c4d783c476c1ff3738e542c25490b8352aa373ad8fd5a11df8de57b920321aab"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:254d3ef3756bd831df2d4837a65cae03d47408875d8ecfee1dbe7182fb755c13",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Transform' is not represented in the DESIGN_INDEX section '13. Interaction and Motion State Matrix'. No row, column, or entry corresponds to this transform requirement.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:26cb48dc08acb52a86e31ac32ecb0cab84adb1e38a2109760936b4151fd0a96d",
    "rawResponseHash": "sha256:c2eb82feb5bb32deab53a9feceeceea7e62fd1763dbb83d12fbaf850d995bcea"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:f56303325f9bca6dde05969e5ab4c373359ff6da9b3626c563901a57667723e8",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Duration' is not represented in the DESIGN_INDEX section. No duration values are specified for any interaction or motion state in the matrix.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:c489c08b0b1f4af9fb93dbf7e775e401eaee26e469e625b9c8d49a1d86addb8e",
    "rawResponseHash": "sha256:2953b4ca3365024a808186355534d850f2707a7413e47cf6f166dbdf6e2451b9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:f4bbc08b54f0e61567effb1bba622ea525b4fc28eb8bd1dee905efabce26d0d4",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the specification '- Easing'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fa12355c7d8b85d2554338de7d11b6c182945e82b59561d51ac9187c83107256",
    "rawResponseHash": "sha256:674b3d3237605b86550fc103312a45ccbf7aaa6067f54121d888683f14d20c06"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:eda657d4aa54975ed7fc966268f90944f18af27b781e2a20124a7d45bdb78874",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:761bbdba4a37fe3cd66bd20f77ac8997868dc3ab154657c17764600221a8a245",
    "rawResponseHash": "sha256:085c5b07cd1a0f24de28e8c93a65cfa7b741dafa3ca697baefe70d645342db24"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:42743d7916778f8828fde8ec1c65181a0c322d5c9f923d78eab4b0ebbd1bbbac",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any specification for keyboard behavior.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ce37ee3f8a8579a31d18ba096e9a365a14379099432657f1ccc5cf2b952ca95e",
    "rawResponseHash": "sha256:b34fd8d4c0e7de39a36164c0bf53dfc102f3c66d230b4d718adb20906e5a9834"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:06670784f33e7580d3c45cb13d4f0ce6fb149b26a7ef611beece8c2611b41305",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the exact requirement '- Pointer behavior'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5cbef9399ee3779680b45a7f14753c15a8b603268287c11bc8770dcad1ce3743",
    "rawResponseHash": "sha256:4f1501d4678e58c413652de6afef84257575203488a16c5e10da67ec42746d3c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:d9443259fc7fafd2dbd6f2d02518d1e4e262df01021ecf866169e22a5d398e5f",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The requirement for a reduced-motion alternative is not addressed in the DESIGN_INDEX section. No row or entry in the Interaction and Motion State Matrix specifies behavior, timing, or visual adjustments for users preferring reduced motion.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a3b0a56236b43d9db0bfd3495e516e4de63cd8c43910e9249c01226ee7353ce2",
    "rawResponseHash": "sha256:1d04950b013738060ff376214530bab25ba13ee52de215d46b666922d671240c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S13:S13-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S13",
      "fingerprint": "sha256:d37eab7a510ab137612617d3a896730a5baa5261d9f941c5606f0f4577c9581a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S13-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not include the states 'active', 'loading', 'error', 'empty', and 'success' as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:718627e7997952f840b7eb33f73263b20fa6cea6f8a05a90eb3dbb28ba9ff1fa",
    "rawResponseHash": "sha256:b5951f5de8f277e3e087f04d635b212e426ed0b01cedb74db10fe996229ad9e0"
  }
]
```
<!-- END VERBATIM S13 -->

<!-- BEGIN VERBATIM S14 sha256:13ca8900584641381bde6f6ad2ccd5805e78f7d5688ec131088c2f82405b6503 27827 -->
# S14 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:60b71f2e46cbb629a5e01ecedc8d7e2a756f54f03b1a5fcf14b4009b2a79ffff`
- Normalized output SHA-256: `sha256:a41ade81ac1ebf61f53cf1d713175567994a4ee4b8785baca12252f445c42ab0`
- Leaf records: `15`
- Leaf records SHA-256: `sha256:dc103f65f5d5fc47b8fd092f9b71e584a328e25dca418cd1afaa18d86895b3df`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S14",
  "fingerprint": "sha256:60b71f2e46cbb629a5e01ecedc8d7e2a756f54f03b1a5fcf14b4009b2a79ffff",
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
      "finding": "The DESIGN_INDEX Section S14 does not contain any statement equivalent to '- Define focus-ring tokens.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the requirement to define form labels and descriptions.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a specification defining alt text behavior for images.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf 'Define live regions.' is not represented in the DESIGN_INDEX section. While the DESIGN_INDEX references live regions in inferred items (e.g., game artwork changes using aria-live='polite'), it does not explicitly define live regions as a requirement.",
      "evidenceRefs": [
        "trigger/DESIGN_INDEX_gdweb-26357.md"
      ],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf '- Define error association.' is not represented in the DESIGN_INDEX Section '14. Accessibility Contract'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not define reduced-motion behavior as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0014-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not define zoom and reflow behavior as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S14-DOC-U0017-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S14 does not contain the requirement '- Do not rely on color alone to communicate state.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 15,
    "passLeafCount": 6
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:320776e17a435a47fa73435feafe868fa1afab64e6dfc1fb0117c460e8eccd08",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:8bd237ddc808d7e072222e2c540ba21e9d18a0eab2dbed83f7037b813d0ec955",
    "rawResponseHash": "sha256:16128a5876e9bd7f80fbe0f0f36798f334c88fe8c987b100f2a374d4ba06c528"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:2d9c074efd49215f2806046daf7af80b0e3495b9aa06c0d2a94368ca99f632ff",
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
    "outputHash": "sha256:cb564c2589c586c099c24582f91ec43d7f42dbf1138a102860ce92cabe8c48ba",
    "rawResponseHash": "sha256:069bf6949d2a4465c2815ab0460ca5cd81bf890296e5f03fc7770cb09a1cdeb4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:38a66f413e32e05830564ffa83d011c0baafdc1f0ec19a7665d708d8d088a8a8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:99b8db055456da66944af353563996cc7710b0f3c1dd0df70d74246d6811c84b",
    "rawResponseHash": "sha256:daffc0e08e209c40cf5f0adc3335fcc45b773cff00f54c85340ba3b096cb81fd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:b5cdd394e6468e20d2246f19588eaa4dc2cb2de28c61d0d2d3df00b2202f00ca",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fcfa25fb99cd281091d973dc0b142b26a1987bcd9055a53d723567239bffc4b7",
    "rawResponseHash": "sha256:0b9ac36a88ec188d5929196ff7a6771708900595edc2d656eec5b2d10951312a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:a425ebc7f210bb27a15ca6bc0a5c30fecb4469b56125703248381384a0d5067a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S14 does not contain any statement equivalent to '- Define focus-ring tokens.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:6825c0f773065c0407f8dc2f683ee2ef56c69d38a4b231339bab2a0725864aa3",
    "rawResponseHash": "sha256:1f1726ef238a4a20745a6ba5550fcc1788894b2a5cfc93d701d3b8de4fdc804d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:7de80c383e7b841d07b38fc03b0c1e1baf86d95ffca7b8a8220b4814a66165d6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the requirement to define form labels and descriptions.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5c377550f574f50cd6e8df13749ea786dcf166cedab151cc03fbefdb0cf2f4fd",
    "rawResponseHash": "sha256:20dc089550fa22a37fe8ed3981016dbae83ea80f1ae5b829be2f5ea8d0063737"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:e6eab1e68a9dfd4513eed8cd7d02135e03f6b781dcdb927bd3aaf5d4e32f9944",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a specification defining alt text behavior for images.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ba2ad4f42e6c245e3caa7e50821a0bd06509c2872c1888ecd18fb4cec9730ebe",
    "rawResponseHash": "sha256:64ed061b7180ab06026ea8b6e34f75619c4cdf4c2acca1f9409ff4013050e72b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:2b53e94fec75ab2386e35ced178528ba816939d1cf4c9c3a5190fcdfeb2997e9",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf 'Define live regions.' is not represented in the DESIGN_INDEX section. While the DESIGN_INDEX references live regions in inferred items (e.g., game artwork changes using aria-live='polite'), it does not explicitly define live regions as a requirement.",
          "evidenceRefs": [
            "trigger/DESIGN_INDEX_gdweb-26357.md"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e912b87ff902280c6bd83cbc71da968f25ab27b018d929b29a1e709dcf3e490f",
    "rawResponseHash": "sha256:a1ae4b9206e98eb9c0df0f5447ed6db12ae8b463fb8846c2d375df769c67d6c1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:2c216180a1033f9159097542b4b586da07663fb48deae89d7dd3d7a3e38a0688",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf '- Define error association.' is not represented in the DESIGN_INDEX Section '14. Accessibility Contract'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:55c9461955e00a9c647af8178cfc39b246d37732b90b8c8f659e75ed9f237ad5",
    "rawResponseHash": "sha256:bd12b80ff59db9aeda1ee2ab147ca6fb11f8889f7224da6b3b9af593b7911a6d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:bad62e9b3daf4d75764420cb7d2b4da7322589a23e4c73157b712347429872d1",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4af7ffc12df4f0fbc4ade787c2acf69cfcf3c7c1b6be666c1827735cedcda4a5",
    "rawResponseHash": "sha256:c44101c85a6adffc21e18613e609149d95f9ca3734bf53c8867576ffae2a7eec"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:499d32d4ecbe6e9bc030965543f49a03e177042207a02625f2ba33b5687846da",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not define reduced-motion behavior as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:8fddf952a7fa6589f3d3df6a857d45c18a2ef2a0a594c9e4f485af98741ad71b",
    "rawResponseHash": "sha256:e35385fdf3fe8ecefcb21e8197436d78f1884083ffe6e2955cecc1d9fffd9295"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:bab6e7eb24d8552c6746566867ccb548ffe1bdbe1549d67e04bc68c937a01c1d",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0014-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not define zoom and reflow behavior as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:0161575a08a8de93c824f98c99ae7fb76b3dced38405345458258632746a850e",
    "rawResponseHash": "sha256:ed5be073ee60d77a490b8b4f94d8064355869f86f0f59876828cadf18f858322"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:e75d660b119d4d8f67c1e5e041f782eb239a64c50f4ab4b503ed6293b55656ba",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:4efc148ec556a77fd7d26f4e65320437d985455aa3eda1e3996ce2b8b5ada7df",
    "rawResponseHash": "sha256:1dfcf90d88caad75f0a5f201217690855c5b3ff5a9915a10fe5c48270267f80a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:30409661cdcce4d28edf09f6038e3a03270a5dfebf24332be09966e5dcd7c0e3",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2297709f6b441c8e754e162d6adffc71e35c598979102260cd348fa5db10e6f5",
    "rawResponseHash": "sha256:204539c72e6ca1968e5c85e80d884c7246b2856a662f03379368dea3ff2f994f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0017-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S14:S14-DOC-U0017-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S14",
      "fingerprint": "sha256:b71fdf562ec20fe46d6eae6f8066be050870076a4ade6c814a5478764b9f0ef0",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S14-DOC-U0017-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S14 does not contain the requirement '- Do not rely on color alone to communicate state.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fa4445759e5a7fc838410795c2eeb14b863a9751ccee3f5c16e2dd05658833b9",
    "rawResponseHash": "sha256:fd408db6150b8ea932de8264c599f76f88e355a1924b6f8389917e312c83d18b"
  }
]
```
<!-- END VERBATIM S14 -->

<!-- BEGIN VERBATIM S15 sha256:7abe438f747954076307d4294c5565bcd5d480d6ee3c55ac5c95e4f7384353f4 17317 -->
# S15 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:d314707072ad04aea62c0806c5ab1ed387828fbebdc4e1ab6c486ddfd92e862c`
- Normalized output SHA-256: `sha256:12faf1f375d12fb621c178123ae9562669a5a589b3286797a3ce1be08e6ac7eb`
- Leaf records: `10`
- Leaf records SHA-256: `sha256:4c8e0b9c8cc44e42d882419600fbc41508418305c7d4acf731ed40ef8ad19af0`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S15",
  "fingerprint": "sha256:d314707072ad04aea62c0806c5ab1ed387828fbebdc4e1ab6c486ddfd92e862c",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S15-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "No specification of ordering or grouping behavior for any content type is present in the DESIGN_INDEX section.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any definition of formatting rules as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S15 does not contain any statement defining localization behavior, as required by the Specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S15-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 15 does not contain any sample fixture shapes as required by the specification leaf.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 10,
    "passLeafCount": 6
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:5a448aa7fa8bf9c2aa691afec1356db1cd6278ff11441b8e37c6794044d0c49b",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:30a424e3aea1b4ab4fdf4216fee18acfe03588f95e5f7c8d96ba33f9bd373d6e",
    "rawResponseHash": "sha256:8790c784563b54310048978f34b67feba277e4efee28d3b6761bdef5e4ea9e37"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:550dac32f47495d2f0ac5b94f1cabd64d0d7d7cf733607e118e467f3373e7cd9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:f60ee6c65d7d7ab55c81c09b20a1f568cd4a9ccc6143085c63fe607a196ae7dd",
    "rawResponseHash": "sha256:2c2dd4c0f113e3423b07511aed761c808012f33df084ef95c45b56733d0bb138"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:65ecf2d19ef0755376f5469e77a8ef6e02ecc81e2d09d3918ac711680f8ce62f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:3ee1376fd82707ff0e434e8627ddf55a78eff884e8a7596d9b88a89d86866a91",
    "rawResponseHash": "sha256:17688933f303b266430669f43f4426b4088bb761e3fb39268732ab6a8216a2b3"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:2889cef3fb05550da20b3856ffaf7b7b6306ce180cc41e3f71448e6aaf325683",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "No specification of ordering or grouping behavior for any content type is present in the DESIGN_INDEX section.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9ecd768519cb747d52d1f662a820c8d6f9e35519eec4d8a83e06342e18a559d5",
    "rawResponseHash": "sha256:6994ec6356e07c4d27be7177eced5e706b76123ef1bbde467da3477c5c2f7406"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:89073e092a9242e5d9c9518f69df7f7755b352318c563d57aa218b42a0b408eb",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any definition of formatting rules as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:228d24fe1e4aecbd2dbc354400b29c89f6a8b0edd33db3e38aa7452448473d9f",
    "rawResponseHash": "sha256:1c392b5ab3bb17bc21f4418a74b4b4e9826f85c1283aa41e1e9a43ccf2931f82"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:634665b1816f6e08a7b18ba65863bafebd2c9382af70bef7332493a283954a32",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S15 does not contain any statement defining localization behavior, as required by the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:4f9610ac23a6334017ba4a2afa4bbaae685f2704220bd4b3b86db7518bd0fe7e",
    "rawResponseHash": "sha256:38085e87b1f28cd817f9c029647c134a5d581b55712daa0c5d11c9df4af873af"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:14574fb0841a4ae1e7b2b4068a4a8bab7c8cfe1eb2b2414a7de816b1b3e2b85e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ae261c6624b88c4b89714711f5e1b4996044dd6a6c4ee3a14f3b34f03b45132a",
    "rawResponseHash": "sha256:435d91ca42ee1e4bb848aa2727618b125b9db4b60d06235b82b9ccefa1d805e7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:f546d5647fcf1fa01a14ae7ca11bc56383523c60251471f5db3563085e1a3377",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S15-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 15 does not contain any sample fixture shapes as required by the specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:e06c29b66df05347e1a47372d4dd5e6d0a7d02261464e066509981a3351df814",
    "rawResponseHash": "sha256:bad33b219cfd1ccc5e883daa1f84ea39e2ca9674946e2291391167a13c1c6f19"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:56ad07637b856a2fad708e999402b8fc19d3b8fb71f0b39cff4bdf042edd7557",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:76ba3f4ba9f7f18a39574bcfe72f1ce0ba0b9bac1229c4fc4ecd9f18650b4d2f",
    "rawResponseHash": "sha256:45bd662cb03bfe50ff62cdc8c50a4fdd0f556b3c5b366dc80202a3370884789a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S15:S15-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S15",
      "fingerprint": "sha256:633b1dae349c055bbfc4749e1c19bd507adb222d35d791cbc98373c3b5e3ebc7",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1b044eceabc8eeca4d7786d1bbde5087e614f47f7110f260e04150334d79fa5c",
    "rawResponseHash": "sha256:07e4e6301d95307c09ee5a4c799d0e031abeb895055bb63269457eda2dea4703"
  }
]
```
<!-- END VERBATIM S15 -->

<!-- BEGIN VERBATIM S16 sha256:0049c59bd5564a80f95255f72181b153bdefb3d7aab2af3d0fbb265800589451 21500 -->
# S16 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:b589cb6c28c9fb2adf6fd5ef5d6c90a66338f30910236f4c0768f2e892a4c597`
- Normalized output SHA-256: `sha256:5caa636a7c352bb826d51a5f180d741313907d81b2a6f7fc21550ccd81d7faec`
- Leaf records: `13`
- Leaf records SHA-256: `sha256:07079a6dc3faf97a63d7097433c465bbc5f002cc669bf70b49166ccc91c995ee`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S16",
  "fingerprint": "sha256:b589cb6c28c9fb2adf6fd5ef5d6c90a66338f30910236f4c0768f2e892a4c597",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S16-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not define asset organization.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain any mention of defining data models.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 16 does not define server and client boundaries.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0013-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not define third-party library responsibilities.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S16-DOC-U0015-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX does not contain any statement ensuring that another framework can satisfy the same visual and behavioral contract.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:2e44d2684a59831e125550283b1c07066a301de2cf325fb673d8222f15e723ba",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:b46c944f3fd3eca6a26b9dd8124e136a7129577ff5e3a41dc47ade091e451585",
    "rawResponseHash": "sha256:3698750ee4556af119d1213506a3f0c8a2d9d112029391f79e38da032774453a"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:2701e225a4a1ded43eabe4fe0372d58770a61c4be92fb770e5645a3ba4475d02",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a67e35014e1a8d7c5e26d02312801f3fbd5b49391a0b57b19bb83d5efe4ba124",
    "rawResponseHash": "sha256:02afc03bd8d846533aa37ab2f4a4624105db596867311473fa2eb4f20b7fb3d9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:87a88fa4924bfdab7539b2c3f6512b3ba1aa594180e4e00868553637b4aeae7e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9ef134f94c0809de15ea53319f482441e1cbe1d5700c97e59cb0f35d6a361476",
    "rawResponseHash": "sha256:d191588de36650dd3e2305340666e6909fc757bd22ccf1b0529fda50db77199c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:8b1598a3f43b983316dcc870f94f3a0b71581de3a265ea54ecb78ea425d4abdd",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:16cde771f27585eae368753579df2b00aebffc9f2bc5f2c11ab14fb6996c126f",
    "rawResponseHash": "sha256:51cbe8455ff0e1672bcf98aea103eeef7df4f9c46e473e5e11770b0cc9716a71"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:c3500315d39c4397a769f6b3db2538c71cdf6ee22be63d4c6eb1fcb70742cb2a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:9427e3f66a31983dfa0cbbdf3f7cdebb1e2da08808e63410302e8af524508860",
    "rawResponseHash": "sha256:6b632f76f108522dfacf08a79fd7eaff1c72a81b25a856ecd520679e431956a8"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:1077631637cb8c57f76badd92ce22636b495356dc7fa26bb35f8e5d4e03f3b76",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e02f3858ef06cb4a24d0aba357784a8970a051436b1a0dfdeddf3fb859de227c",
    "rawResponseHash": "sha256:5277ef34b25c87eb53dd4ecec0a563e673be53bed6b55f9474a182058f608f9b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:0c8d99c42582cce9c28d4958dcbc2ff73c323893019104e6ee5281fb6887d954",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not define asset organization.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:d43ac0e2fde83991736a2054a62a1f8354b8758fd6ae438a603afedcecc07800",
    "rawResponseHash": "sha256:bf7ec26bca04b7e30edd445760d9eb66d800c335a5023f06c02f7531a4bdade4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:02c22954e84e02e6a834a2a02e46b194eedfe1e73218230d18dbfaca0c5edffa",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain any mention of defining data models.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:151bfaf84e24fcc1a67410b1c4e7280a182dde9bc29795dfcead714a7eea5cae",
    "rawResponseHash": "sha256:1078bda7d271f23504f38a7abf55fc498f2140381f520075789ac62363b9acf4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:d196fb462d6654912ddbbc61e6ff35296e35536413812a6d6a84391c869eb910",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:d67b077ca5698a6087e706744cea8ee580283538a5359e6a380068961182c287",
    "rawResponseHash": "sha256:fd6572289d3871de1bc0380b11f76289a66f1a3d1a9f9dd656a190e13b3f54e7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:e42fe16bdb4ad89373219de5bdcc06f61129667cd7b7af768637a3adef3c4e5e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 16 does not define server and client boundaries.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:77c45f1421b52ef356b2520d7f69da5e1305abd0317b37dc1d25d0e3525daed2",
    "rawResponseHash": "sha256:24875be68294e2560ec7b7c86bba453254131cb20021097c1565163c83048610"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:73fc55bdaaaec201b8c243b96afd100fb19fb7aef51d1a62a9387ae8f748e8bd",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0013-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not define third-party library responsibilities.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f1e8a1d3f84d4d2186ffa71f0f14c92a9e496b089a052715c42e978426c41d7f",
    "rawResponseHash": "sha256:8b67d2bd8cf7b3fb266aa8e7b8231121bdc243c05b2fed0cfd3862be653e0997"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:8181aa6fb7708067bd32410acfe4684b3725a42915d232af158b3924ba18e318",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5dc5891f07de00611a0f4510817f30d33dabe42432fec253e907399fcae15f3c",
    "rawResponseHash": "sha256:69e09cf5bb82cc1fb1df4713703ac1a56507e03ba8179326d336a8062b953bb4"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0015-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S16:S16-DOC-U0015-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S16",
      "fingerprint": "sha256:b15c298050c34a869b9b0aca587524de6de8533272d5351a1a0419cb0532ed3a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S16-DOC-U0015-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX does not contain any statement ensuring that another framework can satisfy the same visual and behavioral contract.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:09d4e28603c85e05106b2029a8f302fdbe8787ecb07cefe11ca8405c947001f8",
    "rawResponseHash": "sha256:6b3c28720831e1228adc9f339b574d68782c1d52d063e4dfbe426c54f8277ef7"
  }
]
```
<!-- END VERBATIM S16 -->

<!-- BEGIN VERBATIM S17 sha256:beda35324efb1036358fe03d8bfc16783014c13eecea1c7f187e9b45cbf4f051 16346 -->
# S17 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:400c73af41dd0590adadc11ce97e6163360e79c77ec770c12380f666cedcfcf8`
- Normalized output SHA-256: `sha256:88d2b1bd6637d47947c0357ec7c05a40bdcb99498a25bae6f045abfff2a095b9`
- Leaf records: `10`
- Leaf records SHA-256: `sha256:8d1e433d4882c2fc42bea7674030f42ec553614c035aec8a02c063713b94e006`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S17",
  "fingerprint": "sha256:400c73af41dd0590adadc11ce97e6163360e79c77ec770c12380f666cedcfcf8",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S17-DOC-U0007-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain a representation of the Specification leaf statement '- Outputs'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S17-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the specification statement '- Affected page IDs'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S17-DOC-U0012-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the requirement '- Parallelizable groups' from the Specification leaf.",
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:6d8d536d99500a609f26bf6f1fea1426b90adc4377bdc38bdcc06342bba34e8a",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:968b59741c571014c423fc53a7b18530928344b71a4628255d82e73e84003b5b",
    "rawResponseHash": "sha256:e9ea4ed10fd0c3a905d543166c6677d81bf71bdef83da7aec42c176406f5e154"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:93499c3d54e9e0ca48e996650f4aadde44dd2ed413e58f1a01c8b5d6f6821526",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:27b1e453fde5d1f634737350c9bf8efd3cccdde95ba9f1549d05aad76132c4c8",
    "rawResponseHash": "sha256:b4e5e6d218c3c878e90e4ad79e75c2e3f84b4f1d05bee4a38af3ef1647d72b35"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:49cd2b5b44d2e77e4187abcff1f43b8d423a380ccaf32e621a3f08847f7fa077",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:91145dc552450d82f93a2a6b31597e60d1263b9db351b3acd4425bf909653536",
    "rawResponseHash": "sha256:203c9cd5d84ec6e9e1217e086f76cd1cdf6f5c4a2ded47a59094deb506c800ce"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:9de5e988b52deefa2195767ef7c4f6e8c7f400643605d77a76de3e6268191c85",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0007-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain a representation of the Specification leaf statement '- Outputs'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:f25681068f6b5725abf816451e473fb9dd63b5adf6a1e15d6c9d9ae6319e046a",
    "rawResponseHash": "sha256:874f0c60d523daf6973754ebd854cd5138bcbb9aab3b85b37bb3a031c152056c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:42f8ff99ed98760f842e7bfae40a7699725152e9931f44708d958d79b461e630",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the specification statement '- Affected page IDs'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:5ce2ff29c6f2089f009fdea73f8206e31b808a1eaa3515601ffbcf400647cf11",
    "rawResponseHash": "sha256:dbef653ab700183300da62283b978ca53d673082cb4dabea8faa19865cede8f1"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:2f7edb7460a05ae1156c97f20550deb511dd7e3eb4456d84f4700e886eb90258",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:101a2da77f1708d0477916fd6ed5fa6978038609fa627d3c4069fae892fd2b58",
    "rawResponseHash": "sha256:411b6b6069fda36e943b2f4b2ffa5660461655f61cc8e000fda006da91f58770"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:cf819446a82062332c9b56ced9786282b3c7723a8be0e453b4d389cf29ee2fbe",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:997991c1beced7cc0488c0ad8e0e072255496a5102e5900444135ae21181099c",
    "rawResponseHash": "sha256:fc53207b6cacd38f2cce4f6fda885484d7ca166ebc661742760f401ff6062b82"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:ffb782c24cf5fead8a181977dfa5f57dca93fbd5efbb3e4ea223b5a347c38f75",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:a2e36294cf54427f397bbea4b8933b3742865916691f3ae4d060178b195909da",
    "rawResponseHash": "sha256:e26b9691dc28b73abf5a7b1e71b3d5778389b91a4350506520bc5cf6baa4aaac"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:5ccf1a7f38e1a5cbc8a6e90401eb0ffd5f47cd8c7e5953f805a89946219d5022",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S17-DOC-U0012-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the requirement '- Parallelizable groups' from the Specification leaf.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:524d3b64ce5c08f64b664e062de0db13386447c4689cf7c1016c6ef220e7dc99",
    "rawResponseHash": "sha256:81a43773f043c1a081235c92a6885abcae6c94e4d97dbe2788b18bc895e4e4af"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S17:S17-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S17",
      "fingerprint": "sha256:7372d82ece4e0e1d73155d296a1fd409b04af51295ad6b466d8046c6f30fceb9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:fe69740c691de4bc008d580056d281f69e00c1044c28d2085e2b3235847bca8c",
    "rawResponseHash": "sha256:5bda6ef9f0ab6d42786c4e0b738be2cabfeb7bb3071e8f9ee6e262edaf6d1285"
  }
]
```
<!-- END VERBATIM S17 -->

<!-- BEGIN VERBATIM S18 sha256:312d9c89c9f366325c085d2614b731ffd8efbb049cd578ec27fc57a4b731338e 33234 -->
# S18 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:636e8bb270f01fd63248414b68c91b696ea1010a92782b01b8947398c84d448e`
- Normalized output SHA-256: `sha256:a55318cfc293450509d70f8430eb1bcd208b81854c5440d26f0396e0bf414fc1`
- Leaf records: `20`
- Leaf records SHA-256: `sha256:c3759c7173f9b43dd0527d735bce2fe23ff240eac14af4f22d6ffc6c71ad7dc6`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S18",
  "fingerprint": "sha256:636e8bb270f01fd63248414b68c91b696ea1010a92782b01b8947398c84d448e",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S18-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The specification leaf '- Include screenshot-comparison viewports.' is not represented in the DESIGN_INDEX section. No content matches or satisfies this requirement.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0005-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain the statement '- Include section-bound tolerances.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0006-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section does not contain the requirement '- Include container alignment.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0008-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain a statement matching '- Include color difference.'",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0010-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "Specification leaf requires 'Include overflow and text fitting.' but no evidence of overflow handling or text fitting criteria exists in DESIGN_INDEX Section 18.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0011-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any content related to asset loading or crop verification.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0016-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX section does not contain any specification for default tolerance guidance.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S18-DOC-U0019-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The atomic specification leaf '- Repeated spacing rhythm: within `2px`' is not represented in the DESIGN_INDEX section '18. Page-Specific Acceptance Criteria'.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 20,
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:954414d13b2bc7981119e46b8dd206f01f8d4bacb90b3a764b6b552792691d60",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7e92bb987eeada762c398daad3d54662ab5a1faf48cfdf0e83c12af49b42b36d",
    "rawResponseHash": "sha256:97325866f5360933c2aced2d26eadc5d5b190e6db9b12815987177e306e6829d"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:e89b8933990911ad153203fc355efdc4376df5e7195deca1299d6bdb07eb6b2b",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The specification leaf '- Include screenshot-comparison viewports.' is not represented in the DESIGN_INDEX section. No content matches or satisfies this requirement.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9305dd3a67eecd15fdf1b8cfc42f2c46b818aae3b0a97d5a45418cb7e56b2d2b",
    "rawResponseHash": "sha256:322e1bede7a5a9c9b1dd17fd45113fa0625c60a6eebfa936194b85e790a81b29"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:ae2be165406efb4edc6d9b368bfc072fb81e2d738e0e20c0c6b90c93c5b43303",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0005-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain the statement '- Include section-bound tolerances.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:ce5451ffb89da76e748300c3f897d981ad37a765daa23c7ab7ee4becb1a5ae24",
    "rawResponseHash": "sha256:ac2cc1ff4ad5dd4be7a0b5617abce1e78555199cb222e6561961c3947ae1fae7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:e194f3445e4011bd5322429e9e079d91f69c0fd00e22a78620399cd51e9034e6",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0006-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section does not contain the requirement '- Include container alignment.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:60b6901feda625f203ee8bd07c02fba6f39ba2e7c024d2b5a841afac2aaee1e8",
    "rawResponseHash": "sha256:b21e333fea3f174b81dc21e7dff85966fda34b8ec11730801d802876275b766f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:3ad83232ffb28502684d9011a61796edcb9a6c16c79fb834c7820cc6f5865df0",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:06f70d341d6887492154b12ed34cd2a477dfd20bf6024ff799cbfc6ee0d9022e",
    "rawResponseHash": "sha256:8d8f2f69a9e3d58b9a1b78e639cc221b9899421b9054152ca830caaf45256da6"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:95cb2dd428a3cb37b1e025937825250ff1bf99eba86aae2df40dbcfd6b1695df",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0008-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain a statement matching '- Include color difference.'",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9eb8d7d91df12ebd1847f63bbe16377d97578dbdfda4ef7d6c2ddec2516b0041",
    "rawResponseHash": "sha256:be7d827cd2a1e9a711cfef240ab3351dca28bfbbe3cfa355894c7ff296ea774e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:a41dd8700e755844cb278656d4c077e94df4f32234a7cbd934e46d92cbf58963",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:c08a625accf9af93ee7ee6f51186d5dd566f5623bb53fa9174764b1bd84f2fba",
    "rawResponseHash": "sha256:37a03b852287a6afbc1b16f2486fa7d60dc1ff210fa5445458fb656c051bd56e"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0010-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0010-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:9bb1e488fa305d365ce8f8f686b782d44aea6037b8621c6a56dc9f06d89574e7",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0010-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "Specification leaf requires 'Include overflow and text fitting.' but no evidence of overflow handling or text fitting criteria exists in DESIGN_INDEX Section 18.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:fa25f498894eead64ffccfee0dc44b9c5ab2d6f282df997a52ab73b06d836466",
    "rawResponseHash": "sha256:d089c71aeb329f6e86bc0c6e1479785c3b7564b675521f256175b790be418100"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0011-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0011-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:ba3f09140076180ce615a3c3e1496578b724f683c8eb40875c4f2627468a622e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0011-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any content related to asset loading or crop verification.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:a1ac6a2eb01ce67dcfefb894616c53122ee63cde4ba862fc3de7928c0e2c7bb0",
    "rawResponseHash": "sha256:cc78ad31d02c687dd51afa51db60c61349b683ce08d2d0e6bfbc54cce3982cae"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0012-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0012-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:2d09e8569a148f510b67cd23175aedf49c7c045cad79fc946edb5310f84af89c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:ca7e3e4c7921934e40441e0b3cda5c1f6527f00e2c92c26bb2f2fde69151d8ea",
    "rawResponseHash": "sha256:6fa3e45b5c98acd2e539cd23e7a947bfcb96e9b3b8f90a45c9ecf7480a9b1ad9"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0013-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0013-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:3cd8b22689de2d99bcb1b45f47fbd55b07d81540c6b7f2b574c85d72888d7b39",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:6af88a71e2664f72bbd62a330362a8b50e8e9c388dfe14cb55b3f63ab7951c7b",
    "rawResponseHash": "sha256:2fc3f81fdcf6bf7f1d8ebb43b332d294d9cf9a08cf1eaa2ebf81bafeadb9d39f"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0014-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0014-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:67c561aa8ca132911229e29e3c625d97364961265d896179dc6420e431367fbf",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:281e7c38640a6a9c64720fb04a2bed1f815ca1c9122c7a9e2f24f8edaf4c42bf",
    "rawResponseHash": "sha256:73dc819814721f1c3697cc6c1ef4a69b8c9b35fa5be2075987c8eafa170b6959"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0016-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0016-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:598b1d80ecf15d8dc789c3331ee0691a061de90120b34dce970a93cb1117c821",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0016-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX section does not contain any specification for default tolerance guidance.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:168a804ba3be72741feddaddac560c319b2074daa68735159a574441971a5c4c",
    "rawResponseHash": "sha256:510884112dabfd1e05d04994bb22e481f9c24e0ba7bb28b46f666d4ba7e3aba7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0018-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0018-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:cd22c620e42065ef81cfbe1f1694f171d986e7eaf2d980314bffc85889a1d085",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:37a03b4a3bb9d5fed7631aafa51de63893272a857f276d5d37277017349c93f0",
    "rawResponseHash": "sha256:e07a563690d079865139c690d8de40d43083e62fa7de08451aa852ce44173cea"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0019-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0019-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:198ed9af320723c7e888b7320f68d969e27f3d9000c70ab1da3387da2dd2e151",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S18-DOC-U0019-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The atomic specification leaf '- Repeated spacing rhythm: within `2px`' is not represented in the DESIGN_INDEX section '18. Page-Specific Acceptance Criteria'.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:88c3a1aa3c54c61b0b3b2631bbc878798636b4b8c815e2cae89782b59c9e848d",
    "rawResponseHash": "sha256:28e9fdcdb4fdf29cfc60297429fc54c70f100ce04af2901c43cfcaac63c08ebd"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0020-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0020-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:3f16e2f6f6a784cddfe94680defef75b4dd78989429e8f23e760e15f01224b5f",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1c6af9af89a12d7fd1edaaef385458fc6f2baf66504ae91ef58762a181a90265",
    "rawResponseHash": "sha256:5417aa1db986d600ac5287b59b3be60cd15b0851e0098dd185d745a1e0ac9a60"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0021-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0021-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:786dd27da93c93a8e82542c5adf5f1762327aae610624c6b9d78bc224fc5aa16",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:7fcfd7befb6397853826a89fd480343b3ccd5798e05297c89817bb5b3ee3617f",
    "rawResponseHash": "sha256:beaf71f0446676fc414fd9774a284185d86d96ec92be8189e1fb1227c20e8f52"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0022-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0022-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:299730566c4ebe45db5043e1c639a8e73111cc4960bd90b0c3c6af753494fe0e",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:1ced74fa7b8b4f63cbb58f9f54db1a1e0758ac3121a116ab5ae9ac5d2540d50e",
    "rawResponseHash": "sha256:32b5172af5981425bc68c3e61af0c3d62ec9741b6a3cada29a44932cbf7e553c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0023-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0023-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:8c3e7c219cedb09435b36d425ff002b2157a47d46a7c4d042790104e1dcfe80c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:e8c03110e0fcc2bdd44f4df9e30be2d0ab911afb31a27cb8a8226438af49a882",
    "rawResponseHash": "sha256:acd018c61ae047ef84ddd9ef79c06f7017937690ac9d719bff8aee0a4b9d90f3"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0025-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S18:S18-DOC-U0025-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S18",
      "fingerprint": "sha256:524db60564e56a5a8a3cb29b3af5b8421abe8a4e5defec6625f5a88c1548bb29",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:928ea7c3d1abca28f5825d62581360345440f81a0155787796c135d7290d01a9",
    "rawResponseHash": "sha256:93074eca2ddc03ea1b4de8bef17c0bdf27518eda7ce0ecbf681886dfe73bd954"
  }
]
```
<!-- END VERBATIM S18 -->

<!-- BEGIN VERBATIM S19 sha256:5df146fa6a58408bbed7421362688ca32df707f0f6fe2941820c233f3adee24f 12483 -->
# S19 Stage 1 document audit

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Status: `DOCUMENT_GAP`
- Fingerprint: `sha256:d297188f35bc8156c15efed01268f7071c9f73d9161f5fcf3a0a129670f697ce`
- Normalized output SHA-256: `sha256:1b456bc05b0e0d218c767037dca0027d8f7b67580441059b0aa274844b420d94`
- Leaf records: `7`
- Leaf records SHA-256: `sha256:0cafbcd9fa2e9bb36768c4ba39fedde07688feb34b0dccc9b7c93af845afa49e`

## Verbatim normalized Section output

The JSON block below is copied byte-for-byte from the validated normalized Section output. It is not summarized or rewritten.

```json
{
  "schemaVersion": "design-validation/document-audit-output/v1",
  "sectionId": "S19",
  "fingerprint": "sha256:d297188f35bc8156c15efed01268f7071c9f73d9161f5fcf3a0a129670f697ce",
  "status": "DOCUMENT_GAP",
  "findings": [
    {
      "requirementId": "S19-DOC-U0004-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section S19 does not contain any record of concrete implementation decisions selected in place of uncertainties; it only lists uncertainties and alternatives without recording selections.",
      "evidenceRefs": [],
      "implementationRefs": [],
      "proposedValue": null
    },
    {
      "requirementId": "S19-DOC-U0009-R001",
      "pageId": null,
      "componentId": null,
      "status": "MISSING",
      "finding": "The DESIGN_INDEX Section 19 contains only uncertainty records with no evidence of a process to prevent silent omission of unknown values affecting layout, state, accessibility, data, or acceptance testing.",
      "evidenceRefs": [
        "sha256:d87f42cf113743d519f83317c6ee707ae7556cd4535295ad5c33727bc7bae7e7"
      ],
      "implementationRefs": [],
      "proposedValue": null
    }
  ],
  "publicOutput": {
    "auditMode": "bottom-up-leaf-v4",
    "leafCount": 7,
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0003-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0003-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:b43a91e93fe6a2bf2234bb6e3949283e8cc7e7a25dbabcfbd8eba30426038a65",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:85bd7e369c6e1a1daf3ec7e9d98272273266b9b444e333b140132f28aebeadf7",
    "rawResponseHash": "sha256:07f0baa66d8ed797e4e92ecaa1cab76089d09cb54e015a636d3257ef7aeba8ac"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0004-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0004-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:637c782dee158045d951e1a0be204c981b7499e2881929e5561ac4130d4b006e",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S19-DOC-U0004-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section S19 does not contain any record of concrete implementation decisions selected in place of uncertainties; it only lists uncertainties and alternatives without recording selections.",
          "evidenceRefs": [],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:9664e7f679fc94e5cde527d418111a4ced59a292dc62c3d6a9946893712a47c3",
    "rawResponseHash": "sha256:332bc53fca08b6a22584a0810292d639d7fa01a71f198c887020412443af387c"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0005-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0005-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:37c88d7c00a7aa72c1b8edfe586665864c8a3904cda111d627d4b58ae82b9357",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:5f63647e86d11c2c18c8eb0ea2b126c96fe0cf6cfc35091e2d3c60933f41320a",
    "rawResponseHash": "sha256:24a5360e88422da176345b7a7086debafaaacaa8c7d9a6b14b741be0fc10c11b"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0006-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0006-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:bc24127b0520a20ddca2d5fffacf1f083f721cc251fae8190eb9e2a1ae4f56f8",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:761f2e05e0ad2f5341efe6f0fe5349deb5eca391d95f324668696485cedc28ad",
    "rawResponseHash": "sha256:ba93be757ce4e1d249eda8a2467dc78efb0efb0301348174b70768d8788c3e53"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0007-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0007-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:bfe63e963390fbb1e93c4664e34d702dc70d9ecaea3253162c9bbc517b2eecb9",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:2feadaf1d2dc8cf4982e626ab0a08c014be4e9c81f97699aa585280eddeb9a70",
    "rawResponseHash": "sha256:49f88ac0334c3fc1583ff79bcfe601eb5b7ef7d6e6073cd59eb00bd847913fa7"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0008-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0008-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:01b506de44ec6377bdeca80b633416cc259b6feaa6adc84b466963df78b1208c",
      "status": "PASS",
      "findings": [],
      "publicOutput": {}
    },
    "outputHash": "sha256:047bb973cc20f6b5f4773cc3c8e01a8073712e42b995b5a8916cff292fb822c6",
    "rawResponseHash": "sha256:b570322dda53ac80cf695ee326ec2c8e5b5f3cecddfabc8971cef1dfa336b275"
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
    "requestId": "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0009-R001",
    "attemptRequestIds": [
      "run-20260828143120-gdweb-26357-7a29e379:document-audit:S19:S19-DOC-U0009-R001"
    ],
    "output": {
      "schemaVersion": "design-validation/document-audit-output/v1",
      "sectionId": "S19",
      "fingerprint": "sha256:122610e62f3fd81a37b01ddae30629b03b6a56f4868d6f565ae9fe6a1f4a4d7a",
      "status": "DOCUMENT_GAP",
      "findings": [
        {
          "requirementId": "S19-DOC-U0009-R001",
          "pageId": null,
          "componentId": null,
          "status": "MISSING",
          "finding": "The DESIGN_INDEX Section 19 contains only uncertainty records with no evidence of a process to prevent silent omission of unknown values affecting layout, state, accessibility, data, or acceptance testing.",
          "evidenceRefs": [
            "sha256:d87f42cf113743d519f83317c6ee707ae7556cd4535295ad5c33727bc7bae7e7"
          ],
          "implementationRefs": [],
          "proposedValue": null
        }
      ],
      "publicOutput": {}
    },
    "outputHash": "sha256:7a0186db73160147f8704b3219e796ffdd3d2c268c442379a5b567142da6ae9a",
    "rawResponseHash": "sha256:fe710447493969ea0ac53fd68d522d90a0b898f96c8f3739bcfe882cd5a7650c"
  }
]
```
<!-- END VERBATIM S19 -->

