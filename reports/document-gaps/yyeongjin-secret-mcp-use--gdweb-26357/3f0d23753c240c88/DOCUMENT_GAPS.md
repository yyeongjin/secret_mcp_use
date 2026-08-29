# Stage 1 DOCUMENT_GAPS

- Target: `yyeongjin-secret-mcp-use--gdweb-26357`
- Trigger: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section reports: `18`

각 Section 보고서는 명세서 원문과 누락 판정 원문을 JSON 없이 읽을 수 있는 Markdown 평문으로 보존합니다. 모델에게 통합 요약을 요청하지 않습니다.
<!-- BEGIN VERBATIM S01 sha256:d6a78e6f3da84d6e41f0acce438c45b571648d5807a6d4c7c68e070d3597e652 16795 -->
# S01 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:e761ae1ca2f261da5120283152ced96775c980258b67f7a39e9895032cb09093`
- 누락 항목: `16`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S01-DOC-G1-0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:9`
- 원본 source span SHA-256: `sha256:60f017ef803339b4df4af7f4c9e5cbd54a882afe9fba39eb8a22b46e2c821822`
- 표시 원문 SHA-256: `sha256:62f48841c9eb35a7ddb7450632263dcd5b631cbcba4cd014039d01574118fdcf`
- 판정 SHA-256: `sha256:95efd8debcb1f0583542136c676eb1fb8bd9ac885a53a316f79861716c9efed1`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0009-R001 sha256:62f48841c9eb35a7ddb7450632263dcd5b631cbcba4cd014039d01574118fdcf -->
- Reference ID: `gdweb-{{REFERENCE_NUMBER}}`
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0009-R001 sha256:95efd8debcb1f0583542136c676eb1fb8bd9ac885a53a316f79861716c9efed1 -->
Reference ID placeholder `gdweb-{{REFERENCE_NUMBER}}` is not replaced with actual value `gdweb-26357` in DESIGN_INDEX.
<!-- END EXACT GAP FINDING S01-DOC-G1-0009-R001 -->

## 2. S01-DOC-G1-0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:12`
- 원본 source span SHA-256: `sha256:f2deb25044b18d448c728de6323b0c0edac7a03be81e343b4d17660d3fbedbc8`
- 표시 원문 SHA-256: `sha256:2f2eb7d7aeea30a6cf63f013b49be40ff3758d2f208aec678f61328dc251f89c`
- 판정 SHA-256: `sha256:b6449844e08f041f2165a4f6f43312497cb917f36b43c9fbd629f2a56d35727e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0012-R001 sha256:2f2eb7d7aeea30a6cf63f013b49be40ff3758d2f208aec678f61328dc251f89c -->
- Registered date: `{{REGISTERED_DATE}}`
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0012-R001 sha256:b6449844e08f041f2165a4f6f43312497cb917f36b43c9fbd629f2a56d35727e -->
The DESIGN_INDEX does not contain a registered date value; the placeholder `{{REGISTERED_DATE}}` is not resolved to a concrete date.
<!-- END EXACT GAP FINDING S01-DOC-G1-0012-R001 -->

## 3. S01-DOC-G1-0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:13`
- 원본 source span SHA-256: `sha256:6d53b1cb285da4e7fe1cb54fe12af5cece0653a9302c2c8685356dd9959a8f19`
- 표시 원문 SHA-256: `sha256:d77d7c60e66fb8e3e838373b3012ced4ba1cbadb010242a0b914121c1b4a6e61`
- 판정 SHA-256: `sha256:8af3ebd4c66156ef3a36cfeed32ed869570ad31f1a136e016d6ca918fbd087a5`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0013-R001 sha256:d77d7c60e66fb8e3e838373b3012ced4ba1cbadb010242a0b914121c1b4a6e61 -->
- Award: `{{AWARD_OR_NA}}`
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0013-R001 sha256:8af3ebd4c66156ef3a36cfeed32ed869570ad31f1a136e016d6ca918fbd087a5 -->
The DESIGN_INDEX does not contain the specification leaf statement '- Award: `{{AWARD_OR_NA}}`'.
<!-- END EXACT GAP FINDING S01-DOC-G1-0013-R001 -->

## 4. S01-DOC-G1-0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:14`
- 원본 source span SHA-256: `sha256:f883acc56cb6efe5c2c38e196087ca0fe8c99464b165a32888341826b757a5af`
- 표시 원문 SHA-256: `sha256:f3798283bd534be1e4d63ea69e5ddb0d00c1958a283bb2fb227c92f1e9ce563c`
- 판정 SHA-256: `sha256:3559039a6eda3b7c534cfeec352bdb8912d8fa1824e6b92b6105a1a28c4258dc`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0014-R001 sha256:f3798283bd534be1e4d63ea69e5ddb0d00c1958a283bb2fb227c92f1e9ce563c -->
- Concept: `{{CONCEPT_OR_NA}}`
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0014-R001 sha256:3559039a6eda3b7c534cfeec352bdb8912d8fa1824e6b92b6105a1a28c4258dc -->
Specification leaf statement '- Concept: `{{CONCEPT_OR_NA}}`' is not present in DESIGN_INDEX section S01.
<!-- END EXACT GAP FINDING S01-DOC-G1-0014-R001 -->

## 5. S01-DOC-G1-0015-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:15`
- 원본 source span SHA-256: `sha256:b3fcaa41fc28dab96ac0bdeb8aa326a36d54c05ea28b2b42ff686c3f16785f0b`
- 표시 원문 SHA-256: `sha256:68dddc7fea5fe375740c7b81d39e9394ff0646b0e824bbdc46b269c42c9e3f7c`
- 판정 SHA-256: `sha256:697540aa9f28153d3eca940968691f12699b9c329c672ced2de145f34c348250`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0015-R001 sha256:68dddc7fea5fe375740c7b81d39e9394ff0646b0e824bbdc46b269c42c9e3f7c -->
- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0015-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0015-R001 sha256:697540aa9f28153d3eca940968691f12699b9c329c672ced2de145f34c348250 -->
DESIGN_INDEX Section S01 does not contain the exact string '- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`' as required by the Specification leaf.
<!-- END EXACT GAP FINDING S01-DOC-G1-0015-R001 -->

## 6. S01-DOC-G1-0026-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:26`
- 원본 source span SHA-256: `sha256:f30b274496c76199d63e9768f7eaa8944e41f737de88d552dd8df80a2593c0f9`
- 표시 원문 SHA-256: `sha256:e2d6d828b7b4943a65a9b3e3c3394baaf1600e9fe428d098cc305c84ca633b80`
- 판정 SHA-256: `sha256:691515e04e86e132485d5433b8457fc97e8f298f76fd80c1a1edf8183b8a4c80`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0026-R001 sha256:e2d6d828b7b4943a65a9b3e3c3394baaf1600e9fe428d098cc305c84ca633b80 -->
6. Produce exactly one artwork-specific `DESIGN_INDEX` document per request.
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0026-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0026-R001 sha256:691515e04e86e132485d5433b8457fc97e8f298f76fd80c1a1edf8183b8a4c80 -->
The DESIGN_INDEX section does not contain the statement '6. Produce exactly one artwork-specific `DESIGN_INDEX` document per request.'
<!-- END EXACT GAP FINDING S01-DOC-G1-0026-R001 -->

## 7. S01-DOC-G1-0027-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:27`
- 원본 source span SHA-256: `sha256:897805d3a332f62fead1c3b637745b47fc58b974d405c441558f7b327427f3a0`
- 표시 원문 SHA-256: `sha256:db25736e360c29c17bb28b5edad5c7b6442e61033127d66362cfad201a229e71`
- 판정 SHA-256: `sha256:5b6d39d1ab68bd51ca3c8abf91b15f133544d2e9d39eb8d744d22345fa862913`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0027-R001 sha256:db25736e360c29c17bb28b5edad5c7b6442e61033127d66362cfad201a229e71 -->
7. Write the complete document in the language requested by the user.
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0027-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0027-R001 sha256:5b6d39d1ab68bd51ca3c8abf91b15f133544d2e9d39eb8d744d22345fa862913 -->
Specification requires writing the complete document in the language requested by the user, but DESIGN_INDEX section 1 does not mention language selection or multilingual authoring.
<!-- END EXACT GAP FINDING S01-DOC-G1-0027-R001 -->

## 8. S01-DOC-G1-0038-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:38`
- 원본 source span SHA-256: `sha256:dea54fbafa612d717c013398db028c0ce32359d9003574384d93e323ea4d2b4d`
- 표시 원문 SHA-256: `sha256:de629ac12b0db422ce0c9f00e7305c08c3e5daf79e4da1a1d31604e4904eced1`
- 판정 SHA-256: `sha256:f69155d069f8803a733e9b93ed4a1b30cad828fa99a60bb204af3c43296256fb`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0038-R001 sha256:de629ac12b0db422ce0c9f00e7305c08c3e5daf79e4da1a1d31604e4904eced1 -->
  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0038-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0038-R001 sha256:f69155d069f8803a733e9b93ed4a1b30cad828fa99a60bb204af3c43296256fb -->
Specification leaf requires a source URL pattern but DESIGN_INDEX provides no evidence of source dimensions or URL in S01 section.
<!-- END EXACT GAP FINDING S01-DOC-G1-0038-R001 -->

## 9. S01-DOC-G1-0039-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:39`
- 원본 source span SHA-256: `sha256:535c41e123809bbfc43127b294ef988b1fd4a284a1abb3d14f77c9bd89347e33`
- 표시 원문 SHA-256: `sha256:ab5563286017dc2f3c58c5495dd912ed8602bc2194f2ddd238054b344de188fd`
- 판정 SHA-256: `sha256:6b979e96ecd172fb58c880e276af79b6c439ec45fd174c7f813fdeeb18797161`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0039-R001 sha256:ab5563286017dc2f3c58c5495dd912ed8602bc2194f2ddd238054b344de188fd -->
  - prepared canvas: {{PREPARED_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0039-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0039-R001 sha256:6b979e96ecd172fb58c880e276af79b6c439ec45fd174c7f813fdeeb18797161 -->
Prepared canvas dimensions placeholder not resolved: {{PREPARED_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px
<!-- END EXACT GAP FINDING S01-DOC-G1-0039-R001 -->

## 10. S01-DOC-G1-0041-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:41`
- 원본 source span SHA-256: `sha256:184be8f7ca94466d4da39d50ca0e551cdaf6a55fe7d47e14718855f12505c406`
- 표시 원문 SHA-256: `sha256:213ede5cf53077ba9ce55f1e81bb5e18250eb80f4b0ef275f7d7377f1f02b1b7`
- 판정 SHA-256: `sha256:ec93535568bb94f6a09c30282adabe14e7cd0649182a01358d43f0a79683f7e0`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0041-R001 sha256:213ede5cf53077ba9ce55f1e81bb5e18250eb80f4b0ef275f7d7377f1f02b1b7 -->
  - attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0041-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0041-R001 sha256:ec93535568bb94f6a09c30282adabe14e7cd0649182a01358d43f0a79683f7e0 -->
The DESIGN_INDEX does not contain any statement matching the pattern 'attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}'.
<!-- END EXACT GAP FINDING S01-DOC-G1-0041-R001 -->

## 11. S01-DOC-G1-0061-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:61`
- 원본 source span SHA-256: `sha256:6e59addae9579bd2a938ca938c598d3417b895b9332f23f45c3bd9f1634d5bf5`
- 표시 원문 SHA-256: `sha256:8428f640d6205ee17bab5d20ed5051018bd6f69089891c0f9320e027d1cd5fa3`
- 판정 SHA-256: `sha256:2f0038056beef4c57ceac72bb9f8f52643dff1b494cd2c7b435c8b98f0cadb84`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G1-0061-R001 sha256:8428f640d6205ee17bab5d20ed5051018bd6f69089891c0f9320e027d1cd5fa3 -->
Prefix every material claim or table row with one of the following labels.
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G1-0061-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G1-0061-R001 sha256:2f0038056beef4c57ceac72bb9f8f52643dff1b494cd2c7b435c8b98f0cadb84 -->
Specification requires every material claim or table row to be prefixed with one of the specified labels, but no evidence of such prefixing appears in the DESIGN_INDEX.
<!-- END EXACT GAP FINDING S01-DOC-G1-0061-R001 -->

## 12. S01-DOC-G2-0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:435`
- 원본 source span SHA-256: `sha256:47de3181ff3a42cce89272233ae14e7b772dba44eff7d4bf0808a95f06fd57c9`
- 표시 원문 SHA-256: `sha256:8f8d2b7f069d05f47d315443c233894029f9733bb324493cbe3c924f56442672`
- 판정 SHA-256: `sha256:7923a824bf6d1ad5d2b794daf6bcdc418dce763a41a9ddc6992c51f572e0e53d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G2-0013-R001 sha256:8f8d2b7f069d05f47d315443c233894029f9733bb324493cbe3c924f56442672 -->
- Asset and crop rules
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G2-0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G2-0013-R001 sha256:7923a824bf6d1ad5d2b794daf6bcdc418dce763a41a9ddc6992c51f572e0e53d -->
The DESIGN_INDEX section does not contain the statement '- Asset and crop rules'
<!-- END EXACT GAP FINDING S01-DOC-G2-0013-R001 -->

## 13. S01-DOC-G2-0019-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:441`
- 원본 source span SHA-256: `sha256:377634b6ccf5fe0193ed2fcf684321fe343fe26e523ce56e34a731181906ef27`
- 표시 원문 SHA-256: `sha256:88922aa74ec501e6673e34cfeed5bf652330238f32301a5ec673c2edb266271e`
- 판정 SHA-256: `sha256:5d2783c425bd5f138a395690d5956325cb68eae55930c1d42098021230d3d934`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G2-0019-R001 sha256:88922aa74ec501e6673e34cfeed5bf652330238f32301a5ec673c2edb266271e -->
- Explicit uncertainty records
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G2-0019-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G2-0019-R001 sha256:5d2783c425bd5f138a395690d5956325cb68eae55930c1d42098021230d3d934 -->
Requirement '- Explicit uncertainty records' is not represented in DESIGN_INDEX section S01.
<!-- END EXACT GAP FINDING S01-DOC-G2-0019-R001 -->

## 14. S01-DOC-G2-0031-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:453`
- 원본 source span SHA-256: `sha256:0e71723c0f977ea251fe4aed54f55cca750f448deba94d7aaed52ac3d1df541d`
- 표시 원문 SHA-256: `sha256:c7edfe780d46b387adae908852056b76ab6187471818e53d1d1cd2baff5db3eb`
- 판정 SHA-256: `sha256:4ed05fb62ca86c179cda19f81e44bffc776842a5f25feae56fd84918fe21970a`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-G2-0031-R001 sha256:c7edfe780d46b387adae908852056b76ab6187471818e53d1d1cd2baff5db3eb -->
Temperature: 0.2
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-G2-0031-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-G2-0031-R001 sha256:4ed05fb62ca86c179cda19f81e44bffc776842a5f25feae56fd84918fe21970a -->
Requirement 'Temperature: 0.2' not found in DESIGN_INDEX section S01
<!-- END EXACT GAP FINDING S01-DOC-G2-0031-R001 -->

## 15. S01-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:90`
- 원본 source span SHA-256: `sha256:a190d4cf6f5ab3f83f2a522b835f1619928a3e4937a1af6094b761c7be5c4480`
- 표시 원문 SHA-256: `sha256:8c8b82fef9596e30b0b5ddcc8fe45ecbc529b96a2f5ffaa533bc4a6e582f4f45`
- 판정 SHA-256: `sha256:4a2b03859a9a1c26c9ef5241dd77dcdca4eefac38fc6b223f5e8850bf468d44b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-U0003-R001 sha256:8c8b82fef9596e30b0b5ddcc8fe45ecbc529b96a2f5ffaa533bc4a6e582f4f45 -->
- Record the reference identity and work title.
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-U0003-R001 sha256:4a2b03859a9a1c26c9ef5241dd77dcdca4eefac38fc6b223f5e8850bf468d44b -->
The DESIGN_INDEX section does not contain any statement about recording the reference identity and work title as required by the Specification leaf.
<!-- END EXACT GAP FINDING S01-DOC-U0003-R001 -->

## 16. S01-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:97`
- 원본 source span SHA-256: `sha256:02aa2d0571056999ff1cecff164d200086cdf98d9cc5f75d2c33b11b82fbfe59`
- 표시 원문 SHA-256: `sha256:1308f293e3cfcd1b5e5b1c6f98e3958329f60b689d5aa8bdeaf690e560626ae5`
- 판정 SHA-256: `sha256:077cb3b1cc66fe07af4eeacc8d7aca96e02d1d5cd8029ffd3b10a5fb6cebba80`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S01-DOC-U0010-R001 sha256:1308f293e3cfcd1b5e5b1c6f98e3958329f60b689d5aa8bdeaf690e560626ae5 -->
- State which original copy, logos, trademarks, photos, and brand assets must be replaced.
<!-- END EXACT SPECIFICATION SOURCE S01-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S01-DOC-U0010-R001 sha256:077cb3b1cc66fe07af4eeacc8d7aca96e02d1d5cd8029ffd3b10a5fb6cebba80 -->
The DESIGN_INDEX does not state which original copy, logos, trademarks, photos, and brand assets must be replaced.
<!-- END EXACT GAP FINDING S01-DOC-U0010-R001 -->
<!-- END VERBATIM S01 -->

<!-- BEGIN VERBATIM S02 sha256:1f9b497453e2b5a7297270c188a1fa98e16622d2d9db170bdb9476725fe62cee 1475 -->
# S02 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:3810f83ef89f3a74d1cac80950e447b2ee53257c2008ea9fe77290f6a0cd4b41`
- 누락 항목: `1`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S02-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:101`
- 원본 source span SHA-256: `sha256:83a5f9017057227fb0169f5d3dada1f8fbbcd10dc676b423184089092f61f084`
- 표시 원문 SHA-256: `sha256:e41212aaa2251072de466b68eef828b26845b42534b86e47fe786bf184a04c85`
- 판정 SHA-256: `sha256:96a394b37f9fb417b5b3965e13489045bd73c2a3188d71132861b4f73e82221a`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S02-DOC-U0003-R001 sha256:e41212aaa2251072de466b68eef828b26845b42534b86e47fe786bf184a04c85 -->
- Create one row per attached image.
<!-- END EXACT SPECIFICATION SOURCE S02-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S02-DOC-U0003-R001 sha256:96a394b37f9fb417b5b3965e13489045bd73c2a3188d71132861b4f73e82221a -->
The DESIGN_INDEX section does not contain any statement requiring one row per attached image in the evidence table or elsewhere.
<!-- END EXACT GAP FINDING S02-DOC-U0003-R001 -->
<!-- END VERBATIM S02 -->

<!-- BEGIN VERBATIM S03 sha256:3a53ffda2cf5042c2cf9193c83337331ac40d68a4b7de2835b9b791646382670 5651 -->
# S03 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:d31bf336ca98ad633461e0ebeae92ab3d34f3558a9ada6f76bc7405579852788`
- 누락 항목: `5`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S03-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:116`
- 원본 source span SHA-256: `sha256:8d398529294b2a584f0c79ea84301c5e113911dd391ff95ced00b4683c53731a`
- 표시 원문 SHA-256: `sha256:1a13b48fcd8d1c814722ca72f9789f1ed13890cebdc76bb5a363e8a162444dca`
- 판정 SHA-256: `sha256:f202ffac8da3c4d504a42d405e1e30fc8e379060baa289b2b3c02549527b08e8`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S03-DOC-U0008-R001 sha256:1a13b48fcd8d1c814722ca72f9789f1ed13890cebdc76bb5a363e8a162444dca -->
Required columns:
<!-- END EXACT SPECIFICATION SOURCE S03-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S03-DOC-U0008-R001 sha256:f202ffac8da3c4d504a42d405e1e30fc8e379060baa289b2b3c02549527b08e8 -->
Specification requires 'Required columns:' but DESIGN_INDEX section does not contain this statement.
<!-- END EXACT GAP FINDING S03-DOC-U0008-R001 -->

## 2. S03-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:118`
- 원본 source span SHA-256: `sha256:ae003fd1eed1866e954d9e8a5ef354abd4956b2e3b7c1fb8d3ac415f30cfe1a5`
- 표시 원문 SHA-256: `sha256:7ed8556e713d8ff6aa7b515ad965d8a8b0c071f2c768042b89b457e2fa040a49`
- 판정 SHA-256: `sha256:fbc5071f8d807be9041624e11b0d43a07a9bc9860c0cb03e9b547c78e66093aa`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S03-DOC-U0010-R001 sha256:7ed8556e713d8ff6aa7b515ad965d8a8b0c071f2c768042b89b457e2fa040a49 -->
| Field | Required value |
<!-- END EXACT SPECIFICATION SOURCE S03-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S03-DOC-U0010-R001 sha256:fbc5071f8d807be9041624e11b0d43a07a9bc9860c0cb03e9b547c78e66093aa -->
Atomic Specification leaf '| Field | Required value |' is not represented in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S03-DOC-U0010-R001 -->

## 3. S03-DOC-U0016-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:124`
- 원본 source span SHA-256: `sha256:7bb6da01221f45f1544ba1e4676249bacd45ce3f23e8cc25c5aa036a75fdd241`
- 표시 원문 SHA-256: `sha256:ac3b0ae7d46d30ae8685f9e53569179d30e1803f86edc6222ad62d378f2e959f`
- 판정 SHA-256: `sha256:ae6eea27b13bc68db41f4291b891fc5664dcbff3916f5cceef58532ab4c4a462`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S03-DOC-U0016-R001 sha256:ac3b0ae7d46d30ae8685f9e53569179d30e1803f86edc6222ad62d378f2e959f -->
| Shared shell | Shell variant used by the page |
<!-- END EXACT SPECIFICATION SOURCE S03-DOC-U0016-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S03-DOC-U0016-R001 sha256:ae6eea27b13bc68db41f4291b891fc5664dcbff3916f5cceef58532ab4c4a462 -->
The DESIGN_INDEX Section 3 does not contain the statement '| Shared shell | Shell variant used by the page |' as required by the Specification leaf S03-DOC-U0016-R001.
<!-- END EXACT GAP FINDING S03-DOC-U0016-R001 -->

## 4. S03-DOC-U0018-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:126`
- 원본 source span SHA-256: `sha256:64ddc02834f10748cf5915f93ee37d442abb8039735da0fb9a52596a6aa4ae8b`
- 표시 원문 SHA-256: `sha256:7368cfaeb98c2293f92ad099b73ed878f23d1bf0b9ed287c95ca8aa051977fd6`
- 판정 SHA-256: `sha256:40957460b61f0c0bf64a3f21686357af44f738b45a6d0e96d2c70eb2d06baa3b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S03-DOC-U0018-R001 sha256:7368cfaeb98c2293f92ad099b73ed878f23d1bf0b9ed287c95ca8aa051977fd6 -->
| Mobile | Availability and supporting evidence |
<!-- END EXACT SPECIFICATION SOURCE S03-DOC-U0018-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S03-DOC-U0018-R001 sha256:40957460b61f0c0bf64a3f21686357af44f738b45a6d0e96d2c70eb2d06baa3b -->
Specification leaf '| Mobile | Availability and supporting evidence |' is absent from DESIGN_INDEX section '3. Site Map and Page/Route Inventory'
<!-- END EXACT GAP FINDING S03-DOC-U0018-R001 -->

## 5. S03-DOC-U0019-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:127`
- 원본 source span SHA-256: `sha256:a811b8035d0d2956f9b165db97d3ec196dc3d777c15761292169c67a49a28af3`
- 표시 원문 SHA-256: `sha256:a59e34cb91c76746bed5dcdad025bc28096872e91c58f648b3406d78f8a791cd`
- 판정 SHA-256: `sha256:ae5087f00029aaca692bf321d3537843551018f52acc6e6b60addef307243810`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S03-DOC-U0019-R001 sha256:a59e34cb91c76746bed5dcdad025bc28096872e91c58f648b3406d78f8a791cd -->
| Active navigation | Active item and state |
<!-- END EXACT SPECIFICATION SOURCE S03-DOC-U0019-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S03-DOC-U0019-R001 sha256:ae5087f00029aaca692bf321d3537843551018f52acc6e6b60addef307243810 -->
The DESIGN_INDEX section contains a table with columns for Status, Page ID, Route/name, Purpose, Evidence, Shell, Desktop, Mobile, Confidence, but does not include a column or row that specifies active navigation or active item state as required by the specification leaf '| Active navigation | Active item and state |'.
<!-- END EXACT GAP FINDING S03-DOC-U0019-R001 -->
<!-- END VERBATIM S03 -->

<!-- BEGIN VERBATIM S04 sha256:ec08d86ee7a1e6cfc3c05d1af31fcde872c242c44b96141ba2b5cc0479caef3a 3531 -->
# S04 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:cfd95df24eab19fc5d72e7ffdbe390800f45b11b211df6fd5438c5571ef0ee0d`
- 누락 항목: `3`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S04-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:137`
- 원본 source span SHA-256: `sha256:26d9a16ff72d59448a7ae62c14292ad8b10ba29a0b1f9e07b4fcd1bd7e373ab7`
- 표시 원문 SHA-256: `sha256:e8f710f103aec2cb25258ba54a551edaa6b4e539c3cdd50d4e0bd6398f565bdc`
- 판정 SHA-256: `sha256:76e3a3da49761d12cc33dc2524bfa44a16882259ddceed56df2d1c3d5b7461b1`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S04-DOC-U0008-R001 sha256:e8f710f103aec2cb25258ba54a551edaa6b4e539c3cdd50d4e0bd6398f565bdc -->
- Separate global primitives from page-specific composition.
<!-- END EXACT SPECIFICATION SOURCE S04-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S04-DOC-U0008-R001 sha256:76e3a3da49761d12cc33dc2524bfa44a16882259ddceed56df2d1c3d5b7461b1 -->
DESIGN_INDEX section 4 does not contain a requirement to separate global primitives from page-specific composition.
<!-- END EXACT GAP FINDING S04-DOC-U0008-R001 -->

## 2. S04-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:138`
- 원본 source span SHA-256: `sha256:39e822329e8061789014edd3eb0be5cd0706eeb02cb64ed472024b0c4311b838`
- 표시 원문 SHA-256: `sha256:61665378554b7f66cd5a96e324b9faf00f43d57d23f0b1ff776433c60e5bad81`
- 판정 SHA-256: `sha256:958ea75701928e8348a6163e2bfa8e483a251420b6d3fd5d36e11642b71ed0e6`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S04-DOC-U0009-R001 sha256:61665378554b7f66cd5a96e324b9faf00f43d57d23f0b1ff776433c60e5bad81 -->
- Define shell variants and the pages that use each variant.
<!-- END EXACT SPECIFICATION SOURCE S04-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S04-DOC-U0009-R001 sha256:958ea75701928e8348a6163e2bfa8e483a251420b6d3fd5d36e11642b71ed0e6 -->
Specification leaf requires defining shell variants and pages using each variant; DESIGN_INDEX section describes global canvas and chrome but does not define shell variants or list pages using them.
<!-- END EXACT GAP FINDING S04-DOC-U0009-R001 -->

## 3. S04-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:139`
- 원본 source span SHA-256: `sha256:11f911cc75e4393aac2ab163e4de1cc76f07ee6ef096b9a4bae8fda590ce813c`
- 표시 원문 SHA-256: `sha256:791fe3795308de5d8467c3bdd6af26244799b04e31a41f9d53f394d595c2d2f6`
- 판정 SHA-256: `sha256:a23724c430fb359880f96f719bbf208e184b943bca0d47b49e9a713801cba09e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S04-DOC-U0010-R001 sha256:791fe3795308de5d8467c3bdd6af26244799b04e31a41f9d53f394d595c2d2f6 -->
- Record global overflow and page-height behavior.
<!-- END EXACT SPECIFICATION SOURCE S04-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S04-DOC-U0010-R001 sha256:a23724c430fb359880f96f719bbf208e184b943bca0d47b49e9a713801cba09e -->
The DESIGN_INDEX does not record any global overflow or page-height behavior.
<!-- END EXACT GAP FINDING S04-DOC-U0010-R001 -->
<!-- END VERBATIM S04 -->

<!-- BEGIN VERBATIM S05 sha256:bb2debea172ce225e9f66762e2a45539c284fdb0578b177c040741763faaf936 21459 -->
# S05 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:26f207ebf586e65079380796a9f3872e317090c7908bcfe9abc237cbeccc1bdf`
- 누락 항목: `22`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S05-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:147`
- 원본 source span SHA-256: `sha256:37387f4da7ddde96dcf9267d2a78f6ba0ab1d9ce089b586173ee4dc2d2136fea`
- 표시 원문 SHA-256: `sha256:ab685533d58426cf4755d7b7cc330a36bd7fc476457ed910828a13f39d8c2189`
- 판정 SHA-256: `sha256:e608af7df31553675383fc4945dc60294615cf1b7812a1d6f3d15e8a805734cc`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0007-R001 sha256:ab685533d58426cf4755d7b7cc330a36bd7fc476457ed910828a13f39d8c2189 -->
Provide exact values for:
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0007-R001 sha256:e608af7df31553675383fc4945dc60294615cf1b7812a1d6f3d15e8a805734cc -->
The DESIGN_INDEX section does not contain exact values as required by the specification leaf.
<!-- END EXACT GAP FINDING S05-DOC-U0007-R001 -->

## 2. S05-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:150`
- 원본 source span SHA-256: `sha256:429e2ef7d401059c28dc96d6cb9c95a241eee902c1ab4a004e8c126316c7fe59`
- 표시 원문 SHA-256: `sha256:9331e8523c0a07df88b4a91d2cb4a02f6c23237d9c6174b76f66f8ebdfec31c2`
- 판정 SHA-256: `sha256:f1d1fffa5e4d8c18118928c8109b7fa100671c225b5ab384119ed99b51e87bc1`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0010-R001 sha256:9331e8523c0a07df88b4a91d2cb4a02f6c23237d9c6174b76f66f8ebdfec31c2 -->
- Utility-bar height
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0010-R001 sha256:f1d1fffa5e4d8c18118928c8109b7fa100671c225b5ab384119ed99b51e87bc1 -->
The DESIGN_INDEX section S05 does not contain a specification for utility-bar height.
<!-- END EXACT GAP FINDING S05-DOC-U0010-R001 -->

## 3. S05-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:151`
- 원본 source span SHA-256: `sha256:c417bf970953f98d52bd5185557011599315055db88894391c534b2cdabed3dc`
- 표시 원문 SHA-256: `sha256:03574541045d85af1c115c59006931772b65e47070f5b19ea35e36d8e3de664c`
- 판정 SHA-256: `sha256:cec31ab1437a24a56bf33dce57173cd4ac0b943d221a28e9eebd1a9a022d80fb`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0011-R001 sha256:03574541045d85af1c115c59006931772b65e47070f5b19ea35e36d8e3de664c -->
- Content width or max-width
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0011-R001 sha256:cec31ab1437a24a56bf33dce57173cd4ac0b943d221a28e9eebd1a9a022d80fb -->
The DESIGN_INDEX Section S05 does not contain any statement matching '- Content width or max-width'.
<!-- END EXACT GAP FINDING S05-DOC-U0011-R001 -->

## 4. S05-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:153`
- 원본 source span SHA-256: `sha256:0e9bb1a643f87c79bdf076a654bb8113c22006b246233eb46f90869d55715e0b`
- 표시 원문 SHA-256: `sha256:ca2de4907a4a3a9f82ed20a6222d4dd3d0ccd06e3a4c82e8a3b74da3eaed3ceb`
- 판정 SHA-256: `sha256:b8d99697be6a4cd795cfa91280cf636d3596f3171407edbcf41e7daa4ab08f30`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0013-R001 sha256:ca2de4907a4a3a9f82ed20a6222d4dd3d0ccd06e3a4c82e8a3b74da3eaed3ceb -->
- Logo `x`, `y`, width, and height
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0013-R001 sha256:b8d99697be6a4cd795cfa91280cf636d3596f3171407edbcf41e7daa4ab08f30 -->
The DESIGN_INDEX section does not contain values for Logo x, y, width, and height as specified in the Specification leaf.
<!-- END EXACT GAP FINDING S05-DOC-U0013-R001 -->

## 5. S05-DOC-U0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:154`
- 원본 source span SHA-256: `sha256:71c5ffe0534d68054be9800c79dd423888ac787a4dcb13ae808190ca05b8cc29`
- 표시 원문 SHA-256: `sha256:6af621e4d450ae22a976b0d6beb8241f3f1146cd88c1b62d613418721bee943f`
- 판정 SHA-256: `sha256:449a2d6318b26d49412608e331528a66bff3098e12f40d910f87fffd9eb14f78`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0014-R001 sha256:6af621e4d450ae22a976b0d6beb8241f3f1146cd88c1b62d613418721bee943f -->
- Menu start `x`
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0014-R001 sha256:449a2d6318b26d49412608e331528a66bff3098e12f40d910f87fffd9eb14f78 -->
Specification leaf '- Menu start `x`' is not represented in DESIGN_INDEX section S05.
<!-- END EXACT GAP FINDING S05-DOC-U0014-R001 -->

## 6. S05-DOC-U0016-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:156`
- 원본 source span SHA-256: `sha256:fc637722162fcb7697fdaba53a8900b120fab0cd5e2ac815c838e5583db60e32`
- 표시 원문 SHA-256: `sha256:8eef5bfa0a1f96eb06fe98eb70759b3fdb11c40a3ebef59489946db94ba205d1`
- 판정 SHA-256: `sha256:21c32c5f81f16a03f1251f225e5b9233b5fff0da4a049107ff9683c13f474170`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0016-R001 sha256:8eef5bfa0a1f96eb06fe98eb70759b3fdb11c40a3ebef59489946db94ba205d1 -->
- Item gap
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0016-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0016-R001 sha256:21c32c5f81f16a03f1251f225e5b9233b5fff0da4a049107ff9683c13f474170 -->
The DESIGN_INDEX section does not contain any mention of 'Item gap' as a specification item.
<!-- END EXACT GAP FINDING S05-DOC-U0016-R001 -->

## 7. S05-DOC-U0017-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:157`
- 원본 source span SHA-256: `sha256:40a05cd11e4ffb7899e4e6ecb5bbbbfd95ef3d40abbf1f2e7fed531a799ac256`
- 표시 원문 SHA-256: `sha256:5efd042f97167303ea1cc260a23a0b3a267eb9527b799fab7eed78a1e5ee9d8d`
- 판정 SHA-256: `sha256:1c3cc51bac647ccd03c53c266e20ecd3f3a0acf378683446876d2228792bd058`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0017-R001 sha256:5efd042f97167303ea1cc260a23a0b3a267eb9527b799fab7eed78a1e5ee9d8d -->
- Text baseline
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0017-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0017-R001 sha256:1c3cc51bac647ccd03c53c266e20ecd3f3a0acf378683446876d2228792bd058 -->
The DESIGN_INDEX does not mention or define 'Text baseline' as specified in the atomic Specification leaf.
<!-- END EXACT GAP FINDING S05-DOC-U0017-R001 -->

## 8. S05-DOC-U0018-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:158`
- 원본 source span SHA-256: `sha256:64fa8ae5a8046620ccd7fd3767629067d134b05b3f05955177a579112474d460`
- 표시 원문 SHA-256: `sha256:60f480802d127ce7b3420b548fe82364e905180eb56920370b16b908875487bd`
- 판정 SHA-256: `sha256:02442122e71bfd037f29470c6b5c79ba68f84936c376dc4da6d89d0f2de04316`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0018-R001 sha256:60f480802d127ce7b3420b548fe82364e905180eb56920370b16b908875487bd -->
- Icon size and bounds
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0018-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0018-R001 sha256:02442122e71bfd037f29470c6b5c79ba68f84936c376dc4da6d89d0f2de04316 -->
The atomic specification leaf '- Icon size and bounds' is not represented in the DESIGN_INDEX section S05.
<!-- END EXACT GAP FINDING S05-DOC-U0018-R001 -->

## 9. S05-DOC-U0019-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:159`
- 원본 source span SHA-256: `sha256:b4c25197f037e9e41dd9f805b989a7cdd56723441218f92c44df0cf85c80c508`
- 표시 원문 SHA-256: `sha256:1c475cbe88aa62390de0f7ee90199b817baf23d80ed3db908ee23600a7d5c710`
- 판정 SHA-256: `sha256:9a4923521f1afffb96b3df54d01e89c299cc74eb5b8fafc85c8e6e38ef2cdcb3`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0019-R001 sha256:1c475cbe88aa62390de0f7ee90199b817baf23d80ed3db908ee23600a7d5c710 -->
- Action-area width
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0019-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0019-R001 sha256:9a4923521f1afffb96b3df54d01e89c299cc74eb5b8fafc85c8e6e38ef2cdcb3 -->
The DESIGN_INDEX Section does not contain a specification for 'Action-area width'.
<!-- END EXACT GAP FINDING S05-DOC-U0019-R001 -->

## 10. S05-DOC-U0021-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:161`
- 원본 source span SHA-256: `sha256:36f639a015024e1b77d1cc9dd41763e04d2563b59a665a05f1aff511683b1420`
- 표시 원문 SHA-256: `sha256:46c518131a314cba86ac2a9d51930cc720cf1341fc7d6ac55353c36eee958150`
- 판정 SHA-256: `sha256:48b0c7b884186bd993b9a2a3e45b850460f7666c3f6e51d20b86765276e293b9`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0021-R001 sha256:46c518131a314cba86ac2a9d51930cc720cf1341fc7d6ac55353c36eee958150 -->
- Background
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0021-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0021-R001 sha256:48b0c7b884186bd993b9a2a3e45b850460f7666c3f6e51d20b86765276e293b9 -->
Atomic Specification leaf '- Background' is not represented in DESIGN_INDEX Section S05
<!-- END EXACT GAP FINDING S05-DOC-U0021-R001 -->

## 11. S05-DOC-U0022-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:162`
- 원본 source span SHA-256: `sha256:a349d6620aef759e7a2b005eb83e5ff78f9496f79bd029a87d79e679db279abb`
- 표시 원문 SHA-256: `sha256:72be0dc6e1359c2ada053c29e99d2032c276b804459f70255ca3390c21a21178`
- 판정 SHA-256: `sha256:e7e1ba7548442d93570492f93926578d72e5f3c254248c1bab5b5a32ef469d50`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0022-R001 sha256:72be0dc6e1359c2ada053c29e99d2032c276b804459f70255ca3390c21a21178 -->
- Position mode
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0022-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0022-R001 sha256:e7e1ba7548442d93570492f93926578d72e5f3c254248c1bab5b5a32ef469d50 -->
The DESIGN_INDEX section does not contain any information about 'Position mode'.
<!-- END EXACT GAP FINDING S05-DOC-U0022-R001 -->

## 12. S05-DOC-U0023-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:163`
- 원본 source span SHA-256: `sha256:89feb1ac7ff8010e03b92142574961f8b36b4aa65c67458a090c3a716f1206ad`
- 표시 원문 SHA-256: `sha256:44f7127dbfc05c1e1cdb735bfe716ba323c7ac4c6242c5a15c25f58ede3875d9`
- 판정 SHA-256: `sha256:b73007e77c0badc4c10ec4b13e2cc229aaef3fba8ebd089b0bea3624d932d44c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0023-R001 sha256:44f7127dbfc05c1e1cdb735bfe716ba323c7ac4c6242c5a15c25f58ede3875d9 -->
- Sticky or fixed offset
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0023-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0023-R001 sha256:b73007e77c0badc4c10ec4b13e2cc229aaef3fba8ebd089b0bea3624d932d44c -->
The atomic specification leaf '- Sticky or fixed offset' is not represented in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S05-DOC-U0023-R001 -->

## 13. S05-DOC-U0028-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:168`
- 원본 source span SHA-256: `sha256:37387f4da7ddde96dcf9267d2a78f6ba0ab1d9ce089b586173ee4dc2d2136fea`
- 표시 원문 SHA-256: `sha256:ab685533d58426cf4755d7b7cc330a36bd7fc476457ed910828a13f39d8c2189`
- 판정 SHA-256: `sha256:22b499e60f3aa4ac68e4dbe0c5d00924b2f440a11d035102a080375020fc706f`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0028-R001 sha256:ab685533d58426cf4755d7b7cc330a36bd7fc476457ed910828a13f39d8c2189 -->
Provide exact values for:
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0028-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0028-R001 sha256:22b499e60f3aa4ac68e4dbe0c5d00924b2f440a11d035102a080375020fc706f -->
The DESIGN_INDEX Section does not contain the exact specification statement 'Provide exact values for:' as required by the assigned atomic Specification leaf.
<!-- END EXACT GAP FINDING S05-DOC-U0028-R001 -->

## 14. S05-DOC-U0031-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:171`
- 원본 source span SHA-256: `sha256:a527e87ba4c13eacbce9741736e26982498dc754ca8fb1c538d26d04187496fe`
- 표시 원문 SHA-256: `sha256:988840a5ded8c8b471ab39b20243a77965707e75758f169a5e7d79cc688c11b5`
- 판정 SHA-256: `sha256:5bf5f8fc34da274c2985a80fa87e638084c7627f10bbfb59c23ccbe3d775beb5`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0031-R001 sha256:988840a5ded8c8b471ab39b20243a77965707e75758f169a5e7d79cc688c11b5 -->
- Side padding
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0031-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0031-R001 sha256:5bf5f8fc34da274c2985a80fa87e638084c7627f10bbfb59c23ccbe3d775beb5 -->
The DESIGN_INDEX section does not contain the exact statement '- Side padding' as required by the atomic Specification leaf.
<!-- END EXACT GAP FINDING S05-DOC-U0031-R001 -->

## 15. S05-DOC-U0033-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:173`
- 원본 source span SHA-256: `sha256:4cbcd513a0769e5cfdd2be1591fbc189feebead3182c720cf5bf023fa874233f`
- 표시 원문 SHA-256: `sha256:c64124632718b3919545968a49855d610b22fdb3ef4aeb522a685f13798ffb89`
- 판정 SHA-256: `sha256:34e9dd97f79cfed2afe7c0bbef0837af0e0ca7689248f48639f685befef59624`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0033-R001 sha256:c64124632718b3919545968a49855d610b22fdb3ef4aeb522a685f13798ffb89 -->
- Menu-control bounds
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0033-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0033-R001 sha256:34e9dd97f79cfed2afe7c0bbef0837af0e0ca7689248f48639f685befef59624 -->
No evidence of menu-control bounds specified in DESIGN_INDEX Section S05
<!-- END EXACT GAP FINDING S05-DOC-U0033-R001 -->

## 16. S05-DOC-U0034-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:174`
- 원본 source span SHA-256: `sha256:ac30b16ee3e1bf04fb22fa7f9f5896e505ed555bfeb8a316c1d52225ea30d0f2`
- 표시 원문 SHA-256: `sha256:722b4588392f2482453488a3000aff06effa0f2d5d780a6697358fd1c8401a11`
- 판정 SHA-256: `sha256:c6d83c6b3c3167a6e45b1615e11ef5573ca2ee20d2f1b8282bf5acc9bb339cff`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0034-R001 sha256:722b4588392f2482453488a3000aff06effa0f2d5d780a6697358fd1c8401a11 -->
- Minimum touch target
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0034-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0034-R001 sha256:c6d83c6b3c3167a6e45b1615e11ef5573ca2ee20d2f1b8282bf5acc9bb339cff -->
Specification leaf S05-DOC-U0034-R001: '- Minimum touch target' not found in DESIGN_INDEX section S05
<!-- END EXACT GAP FINDING S05-DOC-U0034-R001 -->

## 17. S05-DOC-U0036-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:176`
- 원본 source span SHA-256: `sha256:50441b417313dd387bd0d84cde3a641199ae30680d6765b4add1798447566919`
- 표시 원문 SHA-256: `sha256:459bc7aa77af7646ac59b54b9cd2146902b87f6c06558acc51a9872f2182148a`
- 판정 SHA-256: `sha256:eae37574d52b792a03084621fbf03385d48647108ddbe847e4a849996f42332b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0036-R001 sha256:459bc7aa77af7646ac59b54b9cd2146902b87f6c06558acc51a9872f2182148a -->
- Panel width and height
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0036-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0036-R001 sha256:eae37574d52b792a03084621fbf03385d48647108ddbe847e4a849996f42332b -->
The DESIGN_INDEX Section S05 does not contain any specification for panel width and height.
<!-- END EXACT GAP FINDING S05-DOC-U0036-R001 -->

## 18. S05-DOC-U0037-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:177`
- 원본 source span SHA-256: `sha256:c5e6e6fee3648fdd997b984420255d35ea2da575b0b8c8ec328355c8f6d41e64`
- 표시 원문 SHA-256: `sha256:a0b13e84ba06a94ece9c75d05332324a55710464172a15a3e8d2799319ef1721`
- 판정 SHA-256: `sha256:c4627e352f7d9f41a10c3bc31819c61d0f916e8d39eb1c3d4691253590b31f43`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0037-R001 sha256:a0b13e84ba06a94ece9c75d05332324a55710464172a15a3e8d2799319ef1721 -->
- Row height
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0037-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0037-R001 sha256:c4627e352f7d9f41a10c3bc31819c61d0f916e8d39eb1c3d4691253590b31f43 -->
Specification leaf '- Row height' is not represented in DESIGN_INDEX Section S05
<!-- END EXACT GAP FINDING S05-DOC-U0037-R001 -->

## 19. S05-DOC-U0039-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:179`
- 원본 source span SHA-256: `sha256:b45787fd0cbeac2df2b95d7d2784e14da66f5e8ae7be1f2e9d2a45f74bc9b196`
- 표시 원문 SHA-256: `sha256:bda89b97020d99cfe5ac6bd2a72f6025e2c138e59950442ea7983a532bccefa7`
- 판정 SHA-256: `sha256:44d367bec00e7d617ca0ec4e5f212a9eb0a743f44b65269ec7110a447237cf4d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0039-R001 sha256:bda89b97020d99cfe5ac6bd2a72f6025e2c138e59950442ea7983a532bccefa7 -->
- Divider
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0039-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0039-R001 sha256:44d367bec00e7d617ca0ec4e5f212a9eb0a743f44b65269ec7110a447237cf4d -->
Specification leaf '- Divider' is not represented in DESIGN_INDEX Section S05
<!-- END EXACT GAP FINDING S05-DOC-U0039-R001 -->

## 20. S05-DOC-U0040-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:180`
- 원본 source span SHA-256: `sha256:400bff5bb7206b2abfedb6b19ec5b5565a293b89b542fe265367f84b19768334`
- 표시 원문 SHA-256: `sha256:7bb5493e2764ada3589020dafcb5a21facd9e03ccedfb608c5571633a471ab2b`
- 판정 SHA-256: `sha256:b968af956c075541e407bc0fd05533e4bef2d9de44e4c4b56906214e7f9ddef8`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0040-R001 sha256:7bb5493e2764ada3589020dafcb5a21facd9e03ccedfb608c5571633a471ab2b -->
- Overlay color and opacity
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0040-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0040-R001 sha256:b968af956c075541e407bc0fd05533e4bef2d9de44e4c4b56906214e7f9ddef8 -->
Specification leaf '- Overlay color and opacity' is not represented in DESIGN_INDEX Section S05.
<!-- END EXACT GAP FINDING S05-DOC-U0040-R001 -->

## 21. S05-DOC-U0042-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:182`
- 원본 source span SHA-256: `sha256:d84b44f443a1d0c1cff5a4ff3cce2d01587c49ee0d76396aac07e2a230419141`
- 표시 원문 SHA-256: `sha256:2266d45430c3db467849415302cc9d208418d3c0925d51125510efa4db70d110`
- 판정 SHA-256: `sha256:d1473ea1a75cee3ddb09312d68a7cc7bc7e752ccb7d8df9619bfd3b63c4859c0`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0042-R001 sha256:2266d45430c3db467849415302cc9d208418d3c0925d51125510efa4db70d110 -->
- Body scroll locking
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0042-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0042-R001 sha256:d1473ea1a75cee3ddb09312d68a7cc7bc7e752ccb7d8df9619bfd3b63c4859c0 -->
Specification leaf '- Body scroll locking' is not represented in DESIGN_INDEX Section S05.
<!-- END EXACT GAP FINDING S05-DOC-U0042-R001 -->

## 22. S05-DOC-U0049-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:189`
- 원본 source span SHA-256: `sha256:b2313e53ce1c26e1eaa991064a47ceb3edf0630f81b3094a368c917bf49649cf`
- 표시 원문 SHA-256: `sha256:116d38faad8e58a1e78bcf019e415f969043bbd963b26c60d7bc91825d1ba1e8`
- 판정 SHA-256: `sha256:02c9504915980d9d8b3890fec7a7ef3fe5321e3a73dd04ccfeee5be02e4d9a7f`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S05-DOC-U0049-R001 sha256:116d38faad8e58a1e78bcf019e415f969043bbd963b26c60d7bc91825d1ba1e8 -->
- For every state, specify exact text color, background, border, underline or indicator, opacity, transform, and timing.
<!-- END EXACT SPECIFICATION SOURCE S05-DOC-U0049-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S05-DOC-U0049-R001 sha256:02c9504915980d9d8b3890fec7a7ef3fe5321e3a73dd04ccfeee5be02e4d9a7f -->
DESIGN_INDEX does not specify exact text color, background, border, underline or indicator, opacity, transform, and timing for every state.
<!-- END EXACT GAP FINDING S05-DOC-U0049-R001 -->
<!-- END VERBATIM S05 -->

<!-- BEGIN VERBATIM S06 sha256:7226ae0749fa2dfc0075bcd8e12928495aa11c4f2cbe82f49eb01715ee6df91e 7710 -->
# S06 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:304444c3a5613809bee8e9a9afb975c948cbfc8f9cb7043eb595d456962dbc41`
- 누락 항목: `7`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S06-DOC-U0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:206`
- 원본 source span SHA-256: `sha256:952b6c858576b1d53dec4a601940c91de09b95b8e4db070a905201243baf50b8`
- 표시 원문 SHA-256: `sha256:029559dfba7abbf944fe2987a4b74a4231366a1ffd5d5a2db830267c3f590c53`
- 판정 SHA-256: `sha256:fd0b6530280b993abfd66a2a368ddb587de46ac8009c26ce09d3d0c68792a328`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0014-R001 sha256:029559dfba7abbf944fe2987a4b74a4231366a1ffd5d5a2db830267c3f590c53 -->
Every page's ordered section-geometry table must contain:
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0014-R001 sha256:fd0b6530280b993abfd66a2a368ddb587de46ac8009c26ce09d3d0c68792a328 -->
DESIGN_INDEX Section S06 does not contain the ordered section-geometry table content required by the Specification leaf; it only provides a header and partial content without the actual table structure or data for any page's sections.
<!-- END EXACT GAP FINDING S06-DOC-U0014-R001 -->

## 2. S06-DOC-U0016-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:208`
- 원본 source span SHA-256: `sha256:ae003fd1eed1866e954d9e8a5ef354abd4956b2e3b7c1fb8d3ac415f30cfe1a5`
- 표시 원문 SHA-256: `sha256:7ed8556e713d8ff6aa7b515ad965d8a8b0c071f2c768042b89b457e2fa040a49`
- 판정 SHA-256: `sha256:e6dc94a90bd881b5316f3c94cd0ded9bec11989f02ba6284bbaa720ea23502a8`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0016-R001 sha256:7ed8556e713d8ff6aa7b515ad965d8a8b0c071f2c768042b89b457e2fa040a49 -->
| Field | Required value |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0016-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0016-R001 sha256:e6dc94a90bd881b5316f3c94cd0ded9bec11989f02ba6284bbaa720ea23502a8 -->
The DESIGN_INDEX Section does not contain any specification for the field 'Field' with required value, as stated in the atomic Specification leaf.
<!-- END EXACT GAP FINDING S06-DOC-U0016-R001 -->

## 3. S06-DOC-U0018-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:210`
- 원본 source span SHA-256: `sha256:924b18973bed29192fff7b55dc6a46fd43f02381acd8b7b40bd34900c2949037`
- 표시 원문 SHA-256: `sha256:7d8f1f2c52fd412f6b18e22b7e8093d001a1d0acd8f3e2e01ee3df24f9ac14d1`
- 판정 SHA-256: `sha256:60b7baad36b8d848c631fe099effdd0664c0e25c3d98c96c8fbc02e965a96596`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0018-R001 sha256:7d8f1f2c52fd412f6b18e22b7e8093d001a1d0acd8f3e2e01ee3df24f9ac14d1 -->
| Section ID | Stable page-scoped ID such as `P01-S03` |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0018-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0018-R001 sha256:60b7baad36b8d848c631fe099effdd0664c0e25c3d98c96c8fbc02e965a96596 -->
The DESIGN_INDEX Section does not contain the specification fragment '| Section ID | Stable page-scoped ID such as `P01-S03` |'
<!-- END EXACT GAP FINDING S06-DOC-U0018-R001 -->

## 4. S06-DOC-U0019-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:211`
- 원본 source span SHA-256: `sha256:d78b1d55cb49cc66194dd735f09508e4c93de5271cc2551a639bc7431c8f833c`
- 표시 원문 SHA-256: `sha256:a1e7bb472f8a0b9f7895054e8341827b7f552b9cce483cfd1d303e740bc457d8`
- 판정 SHA-256: `sha256:c988716e35c0afb8701833cda3dac3f10693441d5f3ccb71b80ab446f05cf5ab`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0019-R001 sha256:a1e7bb472f8a0b9f7895054e8341827b7f552b9cce483cfd1d303e740bc457d8 -->
| Evidence | Image ID and `x/y` region |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0019-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0019-R001 sha256:c988716e35c0afb8701833cda3dac3f10693441d5f3ccb71b80ab446f05cf5ab -->
The DESIGN_INDEX section does not contain the specification leaf '| Evidence | Image ID and `x/y` region |'.
<!-- END EXACT GAP FINDING S06-DOC-U0019-R001 -->

## 5. S06-DOC-U0025-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:217`
- 원본 source span SHA-256: `sha256:e4b8e1e07e9e9ec9b4523b8cd0298cc5de41b8c1465988d89c6863cf9f5b026a`
- 표시 원문 SHA-256: `sha256:55500d15d4078c1ea21213394aee5b863409778085d691c6f2eaf4158b690ccb`
- 판정 SHA-256: `sha256:e3d2334dc2ceebeb27bf334b25e6be8c365d31f9fb5e74036a208001bf63cdd0`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0025-R001 sha256:55500d15d4078c1ea21213394aee5b863409778085d691c6f2eaf4158b690ccb -->
| Alignment | Main axis, cross axis, text alignment, and baseline behavior |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0025-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0025-R001 sha256:e3d2334dc2ceebeb27bf334b25e6be8c365d31f9fb5e74036a208001bf63cdd0 -->
The DESIGN_INDEX section S06 contains no specification for alignment, main axis, cross axis, text alignment, or baseline behavior.
<!-- END EXACT GAP FINDING S06-DOC-U0025-R001 -->

## 6. S06-DOC-U0026-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:218`
- 원본 source span SHA-256: `sha256:978ed10ea473ebb27b806b534cef85cd632a8ad035b9d7ac4bfe0cf8e0bb2818`
- 표시 원문 SHA-256: `sha256:5f43ea0d0234c955e6ad8fa8e15029ce25042e218f52041fefce94cb63fc0477`
- 판정 SHA-256: `sha256:9f1af5fb55d974f6be00bec7de8b6752d0cac3c01a633b081273291cf8ea517c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0026-R001 sha256:5f43ea0d0234c955e6ad8fa8e15029ce25042e218f52041fefce94cb63fc0477 -->
| Surface | Exact color, gradient or image, border, radius, shadow, and opacity |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0026-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0026-R001 sha256:9f1af5fb55d974f6be00bec7de8b6752d0cac3c01a633b081273291cf8ea517c -->
The DESIGN_INDEX Section S06 contains no specification for exact color, gradient, image, border, radius, shadow, or opacity of any surface.
<!-- END EXACT GAP FINDING S06-DOC-U0026-R001 -->

## 7. S06-DOC-U0028-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:220`
- 원본 source span SHA-256: `sha256:8bb5a81ed19cbc2099656f5759495324f61a042a1f9a8f22d3fe2f948c71559e`
- 표시 원문 SHA-256: `sha256:b43df5b28c04719118079d017bb77e666f96cdb707e95b404ce34d7cd222aadf`
- 판정 SHA-256: `sha256:e53b62c0ef5e4bc0189ccdd6e491f02d6ed8c0c2a7790396b223589a663bdd4d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S06-DOC-U0028-R001 sha256:b43df5b28c04719118079d017bb77e666f96cdb707e95b404ce34d7cd222aadf -->
| Responsive | Desktop-to-mobile transformation and breakpoint |
<!-- END EXACT SPECIFICATION SOURCE S06-DOC-U0028-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S06-DOC-U0028-R001 sha256:e53b62c0ef5e4bc0189ccdd6e491f02d6ed8c0c2a7790396b223589a663bdd4d -->
The DESIGN_INDEX Section S06 does not contain any specification for responsive desktop-to-mobile transformation and breakpoint details.
<!-- END EXACT GAP FINDING S06-DOC-U0028-R001 -->
<!-- END VERBATIM S06 -->

<!-- BEGIN VERBATIM S07 sha256:50404d2b24061c923dc299d78171d00c71be55a53e34908ef42cdc3de69e065f 8432 -->
# S07 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:2e71caf2c180eb7fedde71db78b0eddcab316c42c807b4a07c005645e78d8924`
- 누락 항목: `8`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S07-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:225`
- 원본 source span SHA-256: `sha256:2d948ba8822b895321b0d1aebf204f45c0514f040f0608ce14e675c498fe4d86`
- 표시 원문 SHA-256: `sha256:8b55101cc4b7f89ed562c227b973d716587f90f6af2c4bca9fc1418676a40557`
- 판정 SHA-256: `sha256:17c68198adb787152b7ca3b9b1418cbc0c9bbba58d71278c28cd106b43607534`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0003-R001 sha256:8b55101cc4b7f89ed562c227b973d716587f90f6af2c4bca9fc1418676a40557 -->
- Provide the DOM hierarchy for every page section.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0003-R001 sha256:17c68198adb787152b7ca3b9b1418cbc0c9bbba58d71278c28cd106b43607534 -->
The DESIGN_INDEX section does not contain any DOM hierarchy description for page sections.
<!-- END EXACT GAP FINDING S07-DOC-U0003-R001 -->

## 2. S07-DOC-U0004-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:226`
- 원본 source span SHA-256: `sha256:7acdfd5ebf870435d95628d0743c3e0e515b1d6c043bfc68e2d57a530e67058b`
- 표시 원문 SHA-256: `sha256:4600ab3295550eb7915a561258dcc2d67959f9f3d9168adb1f0ce0fb34e7e6ff`
- 판정 SHA-256: `sha256:1b073ea8c23ee76e1fcfa045d54d8b9956c3d6e855bd93a71a4c97c1ff7fa50a`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0004-R001 sha256:4600ab3295550eb7915a561258dcc2d67959f9f3d9168adb1f0ce0fb34e7e6ff -->
- Specify the exact CSS layout model.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0004-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0004-R001 sha256:1b073ea8c23ee76e1fcfa045d54d8b9956c3d6e855bd93a71a4c97c1ff7fa50a -->
No explicit CSS layout model is specified in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S07-DOC-U0004-R001 -->

## 3. S07-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:228`
- 원본 source span SHA-256: `sha256:e7b22b5738122176b4b73ce9ef6bb83fd93319889e7343eec3bb47cdf331b77a`
- 표시 원문 SHA-256: `sha256:30c5a2100c693a33de13f744e8d3c0e0641055ffe61c0e26c7a98daafa8bdc5a`
- 판정 SHA-256: `sha256:443792bef7f08af119fffb8c6d536ae4d7fef4039ac7206f500c49e470197e06`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0006-R001 sha256:30c5a2100c693a33de13f744e8d3c0e0641055ffe61c0e26c7a98daafa8bdc5a -->
- Record flex direction, wrapping, growth, shrink, and basis.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0006-R001 sha256:443792bef7f08af119fffb8c6d536ae4d7fef4039ac7206f500c49e470197e06 -->
The DESIGN_INDEX Section does not record flex direction, wrapping, growth, shrink, or basis for any layout component.
<!-- END EXACT GAP FINDING S07-DOC-U0006-R001 -->

## 4. S07-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:230`
- 원본 source span SHA-256: `sha256:f5e144142be5c243e088464636ec3efe6ff8395632140f8a06b0c71b0d8378a5`
- 표시 원문 SHA-256: `sha256:fbe51a4b94ef46048ab53443b9667a4bac52fcd0f5cea89b0ad418f771648606`
- 판정 SHA-256: `sha256:4a9c90bab62ca42e043014a269912348f91a7e56ff03bd9c04e538dd5e362025`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0008-R001 sha256:fbe51a4b94ef46048ab53443b9667a4bac52fcd0f5cea89b0ad418f771648606 -->
- Record aspect ratios.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0008-R001 sha256:4a9c90bab62ca42e043014a269912348f91a7e56ff03bd9c04e538dd5e362025 -->
The DESIGN_INDEX contains no statement to record aspect ratios.
<!-- END EXACT GAP FINDING S07-DOC-U0008-R001 -->

## 5. S07-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:231`
- 원본 source span SHA-256: `sha256:2b9baf88897c28734057a7c721fafe3c7e6d2dcfe2f0e37c6f7408cf8b0eb367`
- 표시 원문 SHA-256: `sha256:4f4f3b35ef4e422c069b0aa0a5d7d2a57e20099e0edb21918099d0b90992225d`
- 판정 SHA-256: `sha256:56eb335ccc82cb3c85e7a890073b19a6b95cc80bdb7b7e643db5049a7bd5d6c3`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0009-R001 sha256:4f4f3b35ef4e422c069b0aa0a5d7d2a57e20099e0edb21918099d0b90992225d -->
- Record padding, gaps, alignment, and wrapping.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0009-R001 sha256:56eb335ccc82cb3c85e7a890073b19a6b95cc80bdb7b7e643db5049a7bd5d6c3 -->
The DESIGN_INDEX section does not record padding, gaps, alignment, or wrapping as required by the specification leaf. While layout details are present, there is no explicit recording of these properties as stipulated.
<!-- END EXACT GAP FINDING S07-DOC-U0009-R001 -->

## 6. S07-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:233`
- 원본 source span SHA-256: `sha256:a0fce0d47ffb35c6b8b543fe3eb11795a9fcd68f27ca75aef007868ce2e6c5d1`
- 표시 원문 SHA-256: `sha256:50d246df864870fd8c6e01e82afb0e21715826de5a6ecb3a42f742a9aabeaf73`
- 판정 SHA-256: `sha256:797cf6bd3928f1da06a7b7d1f52f250ecfd6a3f1db0c595a9ba68afaa267964c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0011-R001 sha256:50d246df864870fd8c6e01e82afb0e21715826de5a6ecb3a42f742a9aabeaf73 -->
- Record sticky offsets.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0011-R001 sha256:797cf6bd3928f1da06a7b7d1f52f250ecfd6a3f1db0c595a9ba68afaa267964c -->
Specification leaf 'S07-DOC-U0011-R001' with statement '- Record sticky offsets.' is not represented in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S07-DOC-U0011-R001 -->

## 7. S07-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:234`
- 원본 source span SHA-256: `sha256:b5f6bea3c56ee6f8e28e32ce8c4900beb44cb4552c9da63a86d4e29d4c9f357e`
- 표시 원문 SHA-256: `sha256:a469559f1df4f1ba1aff17291ac796b4766610f50458e2263467b6a221e395d9`
- 판정 SHA-256: `sha256:1760ee80c848b3866cc12c9cf25343c909dfb89099dc63eea0a63b4837f60eec`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0012-R001 sha256:a469559f1df4f1ba1aff17291ac796b4766610f50458e2263467b6a221e395d9 -->
- Record absolute anchors and transforms.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0012-R001 sha256:1760ee80c848b3866cc12c9cf25343c909dfb89099dc63eea0a63b4837f60eec -->
Specification leaf requires recording absolute anchors and transforms, but DESIGN_INDEX Section contains no mention of anchors or transforms in any layout subsection (desktop, tablet, mobile, repeated cards).
<!-- END EXACT GAP FINDING S07-DOC-U0012-R001 -->

## 8. S07-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:235`
- 원본 source span SHA-256: `sha256:048a6d362004ba6e5318261b5d7a3f18576ff95f80d14b840b8af7301a4f1fb2`
- 표시 원문 SHA-256: `sha256:ce69eca7893d263eea26c82edb7f524aac3228891a3d115163f306080cececa3`
- 판정 SHA-256: `sha256:9f2fee1b6d497fd59add5ec9a46f6607450067fb3104be3f335eea95030ecafd`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S07-DOC-U0013-R001 sha256:ce69eca7893d263eea26c82edb7f524aac3228891a3d115163f306080cececa3 -->
- Record `z-index` relationships.
<!-- END EXACT SPECIFICATION SOURCE S07-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S07-DOC-U0013-R001 sha256:9f2fee1b6d497fd59add5ec9a46f6607450067fb3104be3f335eea95030ecafd -->
The DESIGN_INDEX section does not mention or imply any requirement to record z-index relationships.
<!-- END EXACT GAP FINDING S07-DOC-U0013-R001 -->
<!-- END VERBATIM S07 -->

<!-- BEGIN VERBATIM S08 sha256:7a7e7b4be124393269ccef175cdcec0b97183b29081f92e4b12c43ee85391d90 8738 -->
# S08 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:b85beddcdeade285dbc2862ec412a0510643be9d4dba4c16d6785260321bd8c5`
- 누락 항목: `8`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S08-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:244`
- 원본 source span SHA-256: `sha256:dafc3668a416a48cacdfd80ac7005e69d60793e6d8a4a51f5ae6a0788ec0116d`
- 표시 원문 SHA-256: `sha256:89161ef9fabc58b074a13a72cc6c3ffb439697f6a1f4bc4c5c11206c955e94ed`
- 판정 SHA-256: `sha256:8a45e4813c72ab09717a644fe972d37fb35e16697d7afe2f8bb715c1e5bc7d65`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0005-R001 sha256:89161ef9fabc58b074a13a72cc6c3ffb439697f6a1f4bc4c5c11206c955e94ed -->
- Define props with types.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0005-R001 sha256:8a45e4813c72ab09717a644fe972d37fb35e16697d7afe2f8bb715c1e5bc7d65 -->
The DESIGN_INDEX Section 8. Component Abstraction does not contain the statement '- Define props with types.'
<!-- END EXACT GAP FINDING S08-DOC-U0005-R001 -->

## 2. S08-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:245`
- 원본 source span SHA-256: `sha256:961dcfb0f3458f04261bd17717c21182ce474164a798daffc3ebbe44f2ce30c2`
- 표시 원문 SHA-256: `sha256:497a8cfff7f29327fca4fec81d5b075991e6b089d5ce0030968ed1695dcf5290`
- 판정 SHA-256: `sha256:aa7aea5a99f33667e07e406b95c7574381a7e4122ca721839987c7ff2d7a1dee`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0006-R001 sha256:497a8cfff7f29327fca4fec81d5b075991e6b089d5ce0030968ed1695dcf5290 -->
- Define variants and slots.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0006-R001 sha256:aa7aea5a99f33667e07e406b95c7574381a7e4122ca721839987c7ff2d7a1dee -->
The requirement to 'Define variants and slots.' is not addressed in the DESIGN_INDEX Section 8. Component Abstraction. Neither the component tree diagram nor the contracts table mentions variants or slots for any component.
<!-- END EXACT GAP FINDING S08-DOC-U0006-R001 -->

## 3. S08-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:246`
- 원본 source span SHA-256: `sha256:d3d115c76a59ef0f7541523b41dadf6c42f3cd0addef2003fb3995a482c86405`
- 표시 원문 SHA-256: `sha256:770b2434d0d3d5a2987614b9f599bf6699ec87118c408abf9e8f9d4f132c4034`
- 판정 SHA-256: `sha256:f02de67f45bd962c0525bf3039b591090ea7270a6fcebbda52d2fe15c256fcf3`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0007-R001 sha256:770b2434d0d3d5a2987614b9f599bf6699ec87118c408abf9e8f9d4f132c4034 -->
- Define local state and shared state.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0007-R001 sha256:f02de67f45bd962c0525bf3039b591090ea7270a6fcebbda52d2fe15c256fcf3 -->
The DESIGN_INDEX Section 8 does not contain any statement about defining local state and shared state.
<!-- END EXACT GAP FINDING S08-DOC-U0007-R001 -->

## 4. S08-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:247`
- 원본 source span SHA-256: `sha256:53b197e4aa0be6e7397a999b0a9c7b11715ad4b425d1e297e308adb8ae573918`
- 표시 원문 SHA-256: `sha256:30f29cffd9e816f71623681d1ec57b1b261527af6a5f138c9c366135ca4193f1`
- 판정 SHA-256: `sha256:ab4bd28a3e8d40220591c4d2bb32fc00e4387c19306296b26e174b82e667894b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0008-R001 sha256:30f29cffd9e816f71623681d1ec57b1b261527af6a5f138c9c366135ca4193f1 -->
- Define emitted events and user actions.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0008-R001 sha256:ab4bd28a3e8d40220591c4d2bb32fc00e4387c19306296b26e174b82e667894b -->
Specification leaf requires defining emitted events and user actions, but DESIGN_INDEX section 8 only provides a component tree and a contracts table with INFERRED status for components; it does not define any emitted events or user actions for any component.
<!-- END EXACT GAP FINDING S08-DOC-U0008-R001 -->

## 5. S08-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:248`
- 원본 source span SHA-256: `sha256:0a367aec5dd9774942465611ed20dd81f64b6a58a92e303ccdb6dd7089a9d002`
- 표시 원문 SHA-256: `sha256:adcfe48293d6fe0709e7d5ca876f28aff495994bdb121cd5edc081ecb09f40c4`
- 판정 SHA-256: `sha256:174c75755c5fc78da09f8afc6d1c900b855310e20f7fad81476815e7abc41ee5`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0009-R001 sha256:adcfe48293d6fe0709e7d5ca876f28aff495994bdb121cd5edc081ecb09f40c4 -->
- Define data dependencies.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0009-R001 sha256:174c75755c5fc78da09f8afc6d1c900b855310e20f7fad81476815e7abc41ee5 -->
Specification leaf requires 'Define data dependencies.' but no equivalent statement appears in DESIGN_INDEX Section 8. Component Abstraction.
<!-- END EXACT GAP FINDING S08-DOC-U0009-R001 -->

## 6. S08-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:249`
- 원본 source span SHA-256: `sha256:27db79149a8b416efad220758b632c0af53a5f34c5243050d94425e884891ba1`
- 표시 원문 SHA-256: `sha256:d5cc6373552e91bc9ea861968957348e5cc12c4dd11a7951ef014c3b7daa3275`
- 판정 SHA-256: `sha256:910eea69fbec6c843dd3d85ec196cd21bdf73b9e483fecd90073f248224aaddb`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0010-R001 sha256:d5cc6373552e91bc9ea861968957348e5cc12c4dd11a7951ef014c3b7daa3275 -->
- Define `loading`, `empty`, `error`, `disabled`, `selected`, and success states where applicable.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0010-R001 sha256:910eea69fbec6c843dd3d85ec196cd21bdf73b9e483fecd90073f248224aaddb -->
The DESIGN_INDEX Section 8.2 Contracts table does not explicitly define loading, empty, error, disabled, selected, and success states for components.
<!-- END EXACT GAP FINDING S08-DOC-U0010-R001 -->

## 7. S08-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:250`
- 원본 source span SHA-256: `sha256:656eef663435377cacbc25c14fd13465cbabd8b22bf7bec469f63e1a7f3751f3`
- 표시 원문 SHA-256: `sha256:2f0ad3854c1c996b4283496024fb1a603d5e5216378665a6db1af8a675ff7ec4`
- 판정 SHA-256: `sha256:d51ecd4b50909f223fab3ecde10a81d28508f851907f9603d0fc5b2b6162184c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0011-R001 sha256:2f0ad3854c1c996b4283496024fb1a603d5e5216378665a6db1af8a675ff7ec4 -->
- Define accessibility behavior.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0011-R001 sha256:d51ecd4b50909f223fab3ecde10a81d28508f851907f9603d0fc5b2b6162184c -->
The DESIGN_INDEX Section 8. Component Abstraction does not contain any statement defining accessibility behavior as required by specification leaf S08-DOC-U0011-R001.
<!-- END EXACT GAP FINDING S08-DOC-U0011-R001 -->

## 8. S08-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:251`
- 원본 source span SHA-256: `sha256:e176e668d9118d40fe53d7829b244571b6d5ea22ae2de855c6d83dd0011584de`
- 표시 원문 SHA-256: `sha256:52978ed91dab581801111a28d5b890d14dd04ad1172a8d59b1ea05f3db0f9f1a`
- 판정 SHA-256: `sha256:e0ec15414d806ce361fee37b248d162dd85a96f15cab2efbc9b5f05a2d5fe6b0`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S08-DOC-U0012-R001 sha256:52978ed91dab581801111a28d5b890d14dd04ad1172a8d59b1ea05f3db0f9f1a -->
- Map every component to page and section IDs.
<!-- END EXACT SPECIFICATION SOURCE S08-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S08-DOC-U0012-R001 sha256:e0ec15414d806ce361fee37b248d162dd85a96f15cab2efbc9b5f05a2d5fe6b0 -->
The DESIGN_INDEX Section 8 does not contain any mapping of components to page and section IDs as required by the specification leaf.
<!-- END EXACT GAP FINDING S08-DOC-U0012-R001 -->
<!-- END VERBATIM S08 -->

<!-- BEGIN VERBATIM S10 sha256:89a258000a3d3d2bec243b5df0113de7ee6d90ce2860a075c17a88416c74f8b1 10499 -->
# S10 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:b0273fee64c9d1d79e2a77fd6dd15b85299da5631ab222eb7fe97944901365d2`
- 누락 항목: `10`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S10-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:269`
- 원본 source span SHA-256: `sha256:a8ad26b7b66f600b0fe14ca1d3a9e712bbacf976cedb4c574a057838d5d34dd9`
- 표시 원문 SHA-256: `sha256:a2557890ef2d3f51cb01ad3f30b549dcfaf9ad606809b81fe8f02435a70308b8`
- 판정 SHA-256: `sha256:f4872a4c71fec151246ada3bb113e35f1bbe021c14e6203dcb99442dde0e667d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0003-R001 sha256:a2557890ef2d3f51cb01ad3f30b549dcfaf9ad606809b81fe8f02435a70308b8 -->
Define the following for every visible text role:
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0003-R001 sha256:f4872a4c71fec151246ada3bb113e35f1bbe021c14e6203dcb99442dde0e667d -->
Leaf statement 'Define the following for every visible text role:' is not satisfied by the DESIGN_INDEX section; the section provides typographic values but does not define what 'every visible text role' entails or enumerate all such roles, leaving the requirement unactionable.
<!-- END EXACT GAP FINDING S10-DOC-U0003-R001 -->

## 2. S10-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:272`
- 원본 source span SHA-256: `sha256:bf98ed6652391e86cb8b178ab02b338318a19b76d4d34cfddc8fe20294bc7afd`
- 표시 원문 SHA-256: `sha256:afe6b4d60133a4e2ac810c736809740bf3d808a366b264632e93641639aedfd6`
- 판정 SHA-256: `sha256:189e7acfa72a6d5d988b23644910119648c8b6bce3325213c1c955a3b6987d3d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0006-R001 sha256:afe6b4d60133a4e2ac810c736809740bf3d808a366b264632e93641639aedfd6 -->
- Font-source strategy
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0006-R001 sha256:189e7acfa72a6d5d988b23644910119648c8b6bce3325213c1c955a3b6987d3d -->
The DESIGN_INDEX Section does not contain any representation of the atomic specification leaf '- Font-source strategy'.
<!-- END EXACT GAP FINDING S10-DOC-U0006-R001 -->

## 3. S10-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:274`
- 원본 source span SHA-256: `sha256:a74a938651889a7f4654f2f6d1a48b391ff0746204bf9ea3f04c9be2274bd248`
- 표시 원문 SHA-256: `sha256:96e29f9c22d31581e6ea99ded5dbcd30d0a40287b81308ba37de8de009387c9d`
- 판정 SHA-256: `sha256:1b5fbdefff4ab0b9045c1e01320f4e926914b2465369dc457405b402434dcc66`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0008-R001 sha256:96e29f9c22d31581e6ea99ded5dbcd30d0a40287b81308ba37de8de009387c9d -->
- Weight
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0008-R001 sha256:1b5fbdefff4ab0b9045c1e01320f4e926914b2465369dc457405b402434dcc66 -->
The DESIGN_INDEX Section does not contain any specification for 'Weight' as required by the atomic Specification leaf.
<!-- END EXACT GAP FINDING S10-DOC-U0008-R001 -->

## 4. S10-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:275`
- 원본 source span SHA-256: `sha256:a672a791ec4299cd1761800719cd80f624c1b13257ffe7c70d53aca330091971`
- 표시 원문 SHA-256: `sha256:648d2c90580c238cf655c26de3ba5bd79c8d01fa178ecb0b175193e66e7b15a9`
- 판정 SHA-256: `sha256:2853b46b0a0c76940b601fd0db3067bb3284784d96abb6f2998bb95acbfb6799`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0009-R001 sha256:648d2c90580c238cf655c26de3ba5bd79c8d01fa178ecb0b175193e66e7b15a9 -->
- Line height in `px` and unitless form
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0009-R001 sha256:2853b46b0a0c76940b601fd0db3067bb3284784d96abb6f2998bb95acbfb6799 -->
The DESIGN_INDEX section does not mention or imply line height in both px and unitless form.
<!-- END EXACT GAP FINDING S10-DOC-U0009-R001 -->

## 5. S10-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:276`
- 원본 source span SHA-256: `sha256:1d23ade7ddcabf105d58bac767e2e613ae3662edeaae9bf97054df77f81b2346`
- 표시 원문 SHA-256: `sha256:9cb6ff1d62bb3149f2c0a9d4751ed34317a8ccdbb51c6fdf26dc35a49f6c8bbb`
- 판정 SHA-256: `sha256:6c84f39b32df35b9514a1bdd0e4728a639f4b363b748ee53ae4c9a0da2974f9e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0010-R001 sha256:9cb6ff1d62bb3149f2c0a9d4751ed34317a8ccdbb51c6fdf26dc35a49f6c8bbb -->
- Letter spacing
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0010-R001 sha256:6c84f39b32df35b9514a1bdd0e4728a639f4b363b748ee53ae4c9a0da2974f9e -->
DESIGN_INDEX section does not contain letter spacing values for any role
<!-- END EXACT GAP FINDING S10-DOC-U0010-R001 -->

## 6. S10-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:277`
- 원본 source span SHA-256: `sha256:85f0c7d701a437488b547ea1a7df7085be84792d17d73d4eb2b0c7dad7dc50a1`
- 표시 원문 SHA-256: `sha256:a9a9076cbfd720144e30d4dc0465ef0f1043b931a83910207f3f53757f8c5bec`
- 판정 SHA-256: `sha256:f9ed144869c7d1289b95b20d7fb7568da1d4978f49e0ebdcb556e315aa15640c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0011-R001 sha256:a9a9076cbfd720144e30d4dc0465ef0f1043b931a83910207f3f53757f8c5bec -->
- Casing
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0011-R001 sha256:f9ed144869c7d1289b95b20d7fb7568da1d4978f49e0ebdcb556e315aa15640c -->
The DESIGN_INDEX Section does not contain any specification for casing rules, which is required by the atomic Specification leaf.
<!-- END EXACT GAP FINDING S10-DOC-U0011-R001 -->

## 7. S10-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:278`
- 원본 source span SHA-256: `sha256:b77c22be7535a0e7432ed0711d55d8c25de4f8343e7f4fbb2f0a551d54260048`
- 표시 원문 SHA-256: `sha256:fb4140a3fb6e689a2f66fda71df8ca5c4f6a4ceeb622e87003c0d5ecd31e720b`
- 판정 SHA-256: `sha256:0ed777a9e982a1c6e82cf4e543f7fc0144137cc8e43c231c77da578ebafa9166`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0012-R001 sha256:fb4140a3fb6e689a2f66fda71df8ca5c4f6a4ceeb622e87003c0d5ecd31e720b -->
- Decoration
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0012-R001 sha256:0ed777a9e982a1c6e82cf4e543f7fc0144137cc8e43c231c77da578ebafa9166 -->
The specification leaf '- Decoration' is not represented in the DESIGN_INDEX section '10. Typography Matrix'. No mention of decoration (e.g., underline, overline, line-through, text-decoration) appears in the typography matrix, font rules, or confidence notes.
<!-- END EXACT GAP FINDING S10-DOC-U0012-R001 -->

## 8. S10-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:279`
- 원본 source span SHA-256: `sha256:96653fdb15ec370ee9612d35a93ed4cec3499f6022fed360bfa6120035af9b28`
- 표시 원문 SHA-256: `sha256:d5d1fc91718f0e135bb5dfc3e51d9569efee298db36bf915974a9d6204314865`
- 판정 SHA-256: `sha256:a57b4ef8643fb5a144124c811ad8db7e280a1871767913bdad6cad893b3057d0`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0013-R001 sha256:d5d1fc91718f0e135bb5dfc3e51d9569efee298db36bf915974a9d6204314865 -->
- Alignment
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0013-R001 sha256:a57b4ef8643fb5a144124c811ad8db7e280a1871767913bdad6cad893b3057d0 -->
The DESIGN_INDEX Section does not contain any specification or statement regarding 'Alignment' as required by the atomic Specification leaf S10-DOC-U0013-R001.
<!-- END EXACT GAP FINDING S10-DOC-U0013-R001 -->

## 9. S10-DOC-U0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:280`
- 원본 source span SHA-256: `sha256:a1be87f651d59f6e897c74c9b782b6a0494d917d79e54c24f2e62e27ee12e6c3`
- 표시 원문 SHA-256: `sha256:1e04efa0ee6d63e6bb608eba13127291c8e819020dbc88f06f2b85f76a878e9a`
- 판정 SHA-256: `sha256:b22f95d38fb95639dc8c8c8518ede0708b9a487224ff65cef2c3412c50c8d316`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0014-R001 sha256:1e04efa0ee6d63e6bb608eba13127291c8e819020dbc88f06f2b85f76a878e9a -->
- Maximum width
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0014-R001 sha256:b22f95d38fb95639dc8c8c8518ede0708b9a487224ff65cef2c3412c50c8d316 -->
The atomic specification leaf '- Maximum width' is not represented in the DESIGN_INDEX Section S10. No mention of maximum width constraints appears in the typography matrix or associated notes.
<!-- END EXACT GAP FINDING S10-DOC-U0014-R001 -->

## 10. S10-DOC-U0015-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:281`
- 원본 source span SHA-256: `sha256:ce9432a126a93f871cfb68339236391306c7ecead34db8bb6ac0e8d0de9ff151`
- 표시 원문 SHA-256: `sha256:3f8effe925f9c0de1d76e1d55c36dfa905a884d2917d7679f47e90d4841d23f2`
- 판정 SHA-256: `sha256:0b1de781bcd5e8e629c67feaf9a17c9e1317d061ed48c5d09d4b580481b4872f`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S10-DOC-U0015-R001 sha256:3f8effe925f9c0de1d76e1d55c36dfa905a884d2917d7679f47e90d4841d23f2 -->
- Wrapping or truncation
<!-- END EXACT SPECIFICATION SOURCE S10-DOC-U0015-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S10-DOC-U0015-R001 sha256:0b1de781bcd5e8e629c67feaf9a17c9e1317d061ed48c5d09d4b580481b4872f -->
The DESIGN_INDEX Section does not contain any statement matching '- Wrapping or truncation'.
<!-- END EXACT GAP FINDING S10-DOC-U0015-R001 -->
<!-- END VERBATIM S10 -->

<!-- BEGIN VERBATIM S11 sha256:5e2ccf27f0636ca70bfce5701f5423fddb87c88d3fc1d9a454abb2b56edb82db 4720 -->
# S11 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:10fe72f58d474a979b3ac6862ebd513c33300a3b497dee7d1488ab49b53c2605`
- 누락 항목: `4`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S11-DOC-U0004-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:289`
- 원본 source span SHA-256: `sha256:1f43b90af2b051be544ea6993b6a2616d2d2b13a3a4fa56876ddd61b8fdd7662`
- 표시 원문 SHA-256: `sha256:1120e461ac962445216f165f99d8e3cba520265bf593330da86e203ca6a544d1`
- 판정 SHA-256: `sha256:60b40a101f098a6aa7c69fed7f98be63a25580a8126ddad8903bab6c01c384ae`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S11-DOC-U0004-R001 sha256:1120e461ac962445216f165f99d8e3cba520265bf593330da86e203ca6a544d1 -->
- For every asset, define page and section, role, evidence crop, displayed width and height, source aspect ratio, crop, focal point, `object-fit`, `object-position`, responsive treatment, loading priority, format, alt behavior, and replacement strategy.
<!-- END EXACT SPECIFICATION SOURCE S11-DOC-U0004-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S11-DOC-U0004-R001 sha256:60b40a101f098a6aa7c69fed7f98be63a25580a8126ddad8903bab6c01c384ae -->
The DESIGN_INDEX does not define source aspect ratio for any asset, as required by the specification leaf.
<!-- END EXACT GAP FINDING S11-DOC-U0004-R001 -->

## 2. S11-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:290`
- 원본 source span SHA-256: `sha256:3eb1df61c1b408a52552e467c058a5daa221773db6eb11a8816bc2739a3e21ab`
- 표시 원문 SHA-256: `sha256:4e697d2f974af3f024df66d7ae249ffdfb07c793759e29382b08b92fa6262ba4`
- 판정 SHA-256: `sha256:91da8bbcb86767cc38477c63f5e8ddef1816b01e97f5ebd056ec564603299f40`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S11-DOC-U0005-R001 sha256:4e697d2f974af3f024df66d7ae249ffdfb07c793759e29382b08b92fa6262ba4 -->
- Name a familiar UI icon using a known library equivalent when it can be identified.
<!-- END EXACT SPECIFICATION SOURCE S11-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S11-DOC-U0005-R001 sha256:91da8bbcb86767cc38477c63f5e8ddef1816b01e97f5ebd056ec564603299f40 -->
The DESIGN_INDEX Section S11 contains no statement about naming familiar UI icons using known library equivalents.
<!-- END EXACT GAP FINDING S11-DOC-U0005-R001 -->

## 3. S11-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:291`
- 원본 source span SHA-256: `sha256:a205dab9b1f4084ed8136d68bebba9503d21b8f47318bc2745170ea7de985130`
- 표시 원문 SHA-256: `sha256:05f2a205a5b1d013c01cd3e9062afd6f5c301b616893dbc2768bf9978a4d39f0`
- 판정 SHA-256: `sha256:2eedaef943b003b1f665127ec9f3d5a1362947598a1651b5dc7759d20ed35604`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S11-DOC-U0006-R001 sha256:05f2a205a5b1d013c01cd3e9062afd6f5c301b616893dbc2768bf9978a4d39f0 -->
- When an icon cannot be identified, specify exact stroke, fill, bounds, and optical alignment.
<!-- END EXACT SPECIFICATION SOURCE S11-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S11-DOC-U0006-R001 sha256:2eedaef943b003b1f665127ec9f3d5a1362947598a1651b5dc7759d20ed35604 -->
The DESIGN_INDEX does not specify exact stroke, fill, bounds, and optical alignment for unidentified icons.
<!-- END EXACT GAP FINDING S11-DOC-U0006-R001 -->

## 4. S11-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:293`
- 원본 source span SHA-256: `sha256:c19592448009a96c52798bfb610c7812130700f2bff60f999208d1ac0df4e467`
- 표시 원문 SHA-256: `sha256:08a30848386f064cfec39f47e1e35097a38dc82f4d87eb61a631e3e45c768ed5`
- 판정 SHA-256: `sha256:72a88d45d758b0789197724b02a58527e6caedabdabd293225b626a510831e4d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S11-DOC-U0008-R001 sha256:08a30848386f064cfec39f47e1e35097a38dc82f4d87eb61a631e3e45c768ed5 -->
- Record mobile-specific crops or alternate assets.
<!-- END EXACT SPECIFICATION SOURCE S11-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S11-DOC-U0008-R001 sha256:72a88d45d758b0789197724b02a58527e6caedabdabd293225b626a510831e4d -->
The DESIGN_INDEX does not mention recording mobile-specific crops or alternate assets for any asset or icon.
<!-- END EXACT GAP FINDING S11-DOC-U0008-R001 -->
<!-- END VERBATIM S11 -->

<!-- BEGIN VERBATIM S12 sha256:6b53b6709871927839212a2367d3558bac19b1844955e797155d9738471b0bcc 2646 -->
# S12 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:8c324b70d33944972d56d32573cc58ff2ccbb5ab104ee584662a4c3691b205c8`
- 누락 항목: `2`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S12-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:299`
- 원본 source span SHA-256: `sha256:43a96adb1a3f6b75383b0d475ee3a52447e6d7a9cfa9f832eeff2495eddbd918`
- 표시 원문 SHA-256: `sha256:3fba5bde3f548f3ffb66c8831fe57c2c7d2add65fb8628f517591650723f85b2`
- 판정 SHA-256: `sha256:1bdd6c57117f8c0b9bb90b3010575c50f1c43660465496ffa59bf8d68ac46670`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S12-DOC-U0005-R001 sha256:3fba5bde3f548f3ffb66c8831fe57c2c7d2add65fb8628f517591650723f85b2 -->
- Define breakpoint rules as behavioral transitions, not numbers alone.
<!-- END EXACT SPECIFICATION SOURCE S12-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S12-DOC-U0005-R001 sha256:1bdd6c57117f8c0b9bb90b3010575c50f1c43660465496ffa59bf8d68ac46670 -->
DESIGN_INDEX section does not define breakpoint rules as behavioral transitions; it only lists numeric widths and static properties without describing behavioral changes or transitions between states.
<!-- END EXACT GAP FINDING S12-DOC-U0005-R001 -->

## 2. S12-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:302`
- 원본 source span SHA-256: `sha256:421f8d0083254a589cf25ae20d9d59c92f01dcc027018f8d90ba5656ebbbdb2b`
- 표시 원문 SHA-256: `sha256:0d282b69747c217239843e237eb310b6e35dca05b2fc73cc8d761c5cd709165c`
- 판정 SHA-256: `sha256:b44258bab2a1035db24f5d120873b6a0093978efb53d71c8aebd623acdf53e15`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S12-DOC-U0008-R001 sha256:0d282b69747c217239843e237eb310b6e35dca05b2fc73cc8d761c5cd709165c -->
- Define minimum and maximum sizes so dynamic content cannot resize fixed-format UI unexpectedly.
<!-- END EXACT SPECIFICATION SOURCE S12-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S12-DOC-U0008-R001 sha256:b44258bab2a1035db24f5d120873b6a0093978efb53d71c8aebd623acdf53e15 -->
The DESIGN_INDEX Section does not define minimum and maximum sizes to prevent dynamic content from resizing fixed-format UI unexpectedly.
<!-- END EXACT GAP FINDING S12-DOC-U0008-R001 -->
<!-- END VERBATIM S12 -->

<!-- BEGIN VERBATIM S13 sha256:39f95bad379b3abb5328314fac186676710784d7f988ff5b3f86b72d42574ddf 13636 -->
# S13 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:f33cf050111b0768ce15a80e3f953566ab181575fc4f545de46858d28eaf9373`
- 누락 항목: `13`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S13-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:307`
- 원본 source span SHA-256: `sha256:9701dd87d8d7686cfbe84fa82d14211100b393d0547903b0f7850ff741ed29c9`
- 표시 원문 SHA-256: `sha256:3410ac8578d0b9f638d0b1fae77562bcc05d7663fa9319d7178517b9484cef78`
- 판정 SHA-256: `sha256:be4e57415dd66010b487c225a0646a46c09a7c919277fbf5c86ef0eecbb77140`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0003-R001 sha256:3410ac8578d0b9f638d0b1fae77562bcc05d7663fa9319d7178517b9484cef78 -->
Cover links, navigation, buttons, menus, tabs, accordions, carousels, forms, modals, cards, and media.
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0003-R001 sha256:be4e57415dd66010b487c225a0646a46c09a7c919277fbf5c86ef0eecbb77140 -->
Requirement to 'Cover links, navigation, buttons, menus, tabs, accordions, carousels, forms, modals, cards, and media' is not demonstrated by any row in the DESIGN_INDEX Section matrix.
<!-- END EXACT GAP FINDING S13-DOC-U0003-R001 -->

## 2. S13-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:309`
- 원본 source span SHA-256: `sha256:c9f46fff7496e33063be7b3b7e9642966353b205d62683f8bd5003ca9a067dde`
- 표시 원문 SHA-256: `sha256:828601f93db8ec3f20ab0df2a60c4d939b1b867f68bb4f9890e867a16ef79da6`
- 판정 SHA-256: `sha256:574e798b340e13340a4ab66f870265aa0c92f903bd4534a28113dbdc4c3e53f7`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0005-R001 sha256:828601f93db8ec3f20ab0df2a60c4d939b1b867f68bb4f9890e867a16ef79da6 -->
For every applicable state, define:
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0005-R001 sha256:574e798b340e13340a4ab66f870265aa0c92f903bd4534a28113dbdc4c3e53f7 -->
The atomic specification leaf 'For every applicable state, define:' is not represented in the DESIGN_INDEX section. The section contains a table of interaction states but does not include a requirement to define states for every applicable state.
<!-- END EXACT GAP FINDING S13-DOC-U0005-R001 -->

## 3. S13-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:311`
- 원본 source span SHA-256: `sha256:315a5553ec6844a8fac52e1745508cf55b223d4b1eaec0c5785da394ed75b311`
- 표시 원문 SHA-256: `sha256:c901fa8774c04e83ef1beaab3712eb9a0c583e0bfed8feefdc4f7ecc1a4631f0`
- 판정 SHA-256: `sha256:a67b3e8fd9e7ed6746ce60a752a66dbb40f107da5e12f63d4d4b1b73d676b5c4`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0007-R001 sha256:c901fa8774c04e83ef1beaab3712eb9a0c583e0bfed8feefdc4f7ecc1a4631f0 -->
- Trigger
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0007-R001 sha256:a67b3e8fd9e7ed6746ce60a752a66dbb40f107da5e12f63d4d4b1b73d676b5c4 -->
The DESIGN_INDEX Section does not contain a 'Trigger' column as required by the Specification leaf.
<!-- END EXACT GAP FINDING S13-DOC-U0007-R001 -->

## 4. S13-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:312`
- 원본 source span SHA-256: `sha256:31c07c52a4871ebb6499007a0b9a8e8e3f33328fb49ccbd82c98af339771ef0f`
- 표시 원문 SHA-256: `sha256:79f1ed84fe8771e555b6d34c5c75a26e342d099d5bb7c6cbfb2bd2dd91986ef5`
- 판정 SHA-256: `sha256:1a681cb67a78a351707f5c90de559984a194e5d55e08aabaa0861e339ff1dc9a`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0008-R001 sha256:79f1ed84fe8771e555b6d34c5c75a26e342d099d5bb7c6cbfb2bd2dd91986ef5 -->
- Visual delta
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0008-R001 sha256:1a681cb67a78a351707f5c90de559984a194e5d55e08aabaa0861e339ff1dc9a -->
Specification leaf '- Visual delta' is not implemented in DESIGN_INDEX; no column or row defines visual delta values for any state.
<!-- END EXACT GAP FINDING S13-DOC-U0008-R001 -->

## 5. S13-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:313`
- 원본 source span SHA-256: `sha256:5a397f0805493a2ee62e18d56c9a69c7bc4446f5775d023a7da3c72b198c524e`
- 표시 원문 SHA-256: `sha256:f1179c8a11887eb40b347ce325e01be5a3d34324938925d3f465e0e4f3f2001d`
- 판정 SHA-256: `sha256:4f3e00a8426cf2b400e01ba2ca098e546bb599dfe7acac30c06a1eb2f418b54c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0009-R001 sha256:f1179c8a11887eb40b347ce325e01be5a3d34324938925d3f465e0e4f3f2001d -->
- Exact colors
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0009-R001 sha256:4f3e00a8426cf2b400e01ba2ca098e546bb599dfe7acac30c06a1eb2f418b54c -->
The requirement '- Exact colors' is not represented in the DESIGN_INDEX section. No exact color values (e.g., hex, rgb) are specified for any element state in the Interaction and Motion State Matrix.
<!-- END EXACT GAP FINDING S13-DOC-U0009-R001 -->

## 6. S13-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:314`
- 원본 source span SHA-256: `sha256:937864e1b18a7becc5a2e64bedde5f64c9ee33703be62b688a05d955f1f42580`
- 표시 원문 SHA-256: `sha256:70c6935bd04a7279d2695974166401d4f9d842f05608367595bd39f554f7e0fa`
- 판정 SHA-256: `sha256:daea94a75fa70c9ca6e9eda0f4880f6ef65366cae9c4f91ee07c60e564f2764c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0010-R001 sha256:70c6935bd04a7279d2695974166401d4f9d842f05608367595bd39f554f7e0fa -->
- Opacity
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0010-R001 sha256:daea94a75fa70c9ca6e9eda0f4880f6ef65366cae9c4f91ee07c60e564f2764c -->
The DESIGN_INDEX section does not contain the requirement '- Opacity' as specified in the atomic Specification leaf.
<!-- END EXACT GAP FINDING S13-DOC-U0010-R001 -->

## 7. S13-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:315`
- 원본 source span SHA-256: `sha256:354782c9d83c1d9aead7bae29526a03c476b57157a4ca905501e2015d2011e6b`
- 표시 원문 SHA-256: `sha256:8e2b10728a33a71759a01b4761cf35ee02876dd70265488e4886c884cb0c30ee`
- 판정 SHA-256: `sha256:b9f4b98f2d9a349257252afac39382ceedcbcdae3ea280f652137adb3ed3239b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0011-R001 sha256:8e2b10728a33a71759a01b4761cf35ee02876dd70265488e4886c884cb0c30ee -->
- Transform
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0011-R001 sha256:b9f4b98f2d9a349257252afac39382ceedcbcdae3ea280f652137adb3ed3239b -->
The DESIGN_INDEX Section does not contain the specification leaf '- Transform'.
<!-- END EXACT GAP FINDING S13-DOC-U0011-R001 -->

## 8. S13-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:316`
- 원본 source span SHA-256: `sha256:27abf14881d14711db61bb2b745d94ff955508d3a5c16c080d2b66a113c2489c`
- 표시 원문 SHA-256: `sha256:089e4a5561c4415fb939dcad77333a6538d9ffec440faf1260f49cd8cccc4f00`
- 판정 SHA-256: `sha256:c1c45221fe18b423f928a685e456450067278974c471802f1366040a088b2a07`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0012-R001 sha256:089e4a5561c4415fb939dcad77333a6538d9ffec440faf1260f49cd8cccc4f00 -->
- Duration
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0012-R001 sha256:c1c45221fe18b423f928a685e456450067278974c471802f1366040a088b2a07 -->
The DESIGN_INDEX Section does not contain any specification or value for the requirement '- Duration'.
<!-- END EXACT GAP FINDING S13-DOC-U0012-R001 -->

## 9. S13-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:317`
- 원본 source span SHA-256: `sha256:f0d5ad3ff9e8cd1f84d1aabcb1ce6061afe9d0f588d671e3d764cae30c8eb64e`
- 표시 원문 SHA-256: `sha256:37f083f24ff79a568d9f6e4c4ca5405ca10db2dfc55cb1ea3af6f8da545fa13e`
- 판정 SHA-256: `sha256:23b1110f8ecb8c6053fcb2517d26705148b82fcb05a9b429ecc7d27cfa178da6`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0013-R001 sha256:37f083f24ff79a568d9f6e4c4ca5405ca10db2dfc55cb1ea3af6f8da545fa13e -->
- Easing
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0013-R001 sha256:23b1110f8ecb8c6053fcb2517d26705148b82fcb05a9b429ecc7d27cfa178da6 -->
Specification leaf '- Easing' is not represented in the DESIGN_INDEX Section S13. The section contains a 'Timing/easing' column with values like '160 ms, standard' and '80 ms', but no explicit definition, rule, or specification for what 'Easing' entails as a standalone requirement.
<!-- END EXACT GAP FINDING S13-DOC-U0013-R001 -->

## 10. S13-DOC-U0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:318`
- 원본 source span SHA-256: `sha256:5cbcaee06a4a7aaa781d08816a3a0d37bba89ad144e2c8494956b215619c5dfb`
- 표시 원문 SHA-256: `sha256:0dc14b8f31a569745a412bcf8164dac3fd03dff282e477b07fb5ae93d5f385ea`
- 판정 SHA-256: `sha256:7a48f454745f982b28605828d872e3f3b44a7ae239f8f0a8ff9c8b9d2d37531c`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0014-R001 sha256:0dc14b8f31a569745a412bcf8164dac3fd03dff282e477b07fb5ae93d5f385ea -->
- Focus behavior
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0014-R001 sha256:7a48f454745f982b28605828d872e3f3b44a7ae239f8f0a8ff9c8b9d2d37531c -->
The DESIGN_INDEX Section does not specify or reference the required focus behavior for interactive elements.
<!-- END EXACT GAP FINDING S13-DOC-U0014-R001 -->

## 11. S13-DOC-U0015-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:319`
- 원본 source span SHA-256: `sha256:006e1a13842e646955296841826edabfc7194b8d566142aee44ba13b1b4b0d33`
- 표시 원문 SHA-256: `sha256:ada4db1040f6ce44055581989f9f8067c52ef033cb8c1847077e6ab186a7c104`
- 판정 SHA-256: `sha256:323cdd0a8e7bad118f0277e7de45bf265ea676d4dfd189716bfd972899d47cda`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0015-R001 sha256:ada4db1040f6ce44055581989f9f8067c52ef033cb8c1847077e6ab186a7c104 -->
- Keyboard behavior
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0015-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0015-R001 sha256:323cdd0a8e7bad118f0277e7de45bf265ea676d4dfd189716bfd972899d47cda -->
The requirement '- Keyboard behavior' is not represented in the DESIGN_INDEX section. No row or entry in the matrix addresses general keyboard behavior.
<!-- END EXACT GAP FINDING S13-DOC-U0015-R001 -->

## 12. S13-DOC-U0016-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:320`
- 원본 source span SHA-256: `sha256:a9053d17b854bb2d7a8047a2e212c494d9193dd610ab410f5ada3cb6e9e33859`
- 표시 원문 SHA-256: `sha256:b955adab0ec5eaf5a455df5f4fd5eeef087ac7862e47d4978f3bff93d0a4781d`
- 판정 SHA-256: `sha256:cd52a0cddc593bad9bb395782aea66ae0ff3a2b6d68fe86ae969f5d281795420`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0016-R001 sha256:b955adab0ec5eaf5a455df5f4fd5eeef087ac7862e47d4978f3bff93d0a4781d -->
- Pointer behavior
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0016-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0016-R001 sha256:cd52a0cddc593bad9bb395782aea66ae0ff3a2b6d68fe86ae969f5d281795420 -->
The atomic specification leaf '- Pointer behavior' is not represented in the DESIGN_INDEX section. The DESIGN_INDEX contains an Interaction and Motion State Matrix with inferred and unknown states but does not document or specify pointer behavior as a standalone requirement.
<!-- END EXACT GAP FINDING S13-DOC-U0016-R001 -->

## 13. S13-DOC-U0017-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:321`
- 원본 source span SHA-256: `sha256:7f72c7d1c23342454eacda364fc08bc23ee882befea20783a78eae1a0729b04a`
- 표시 원문 SHA-256: `sha256:5f64912a0edcb3c7b9f24a1003920ef43f70d903835358711e14ba74d263da6d`
- 판정 SHA-256: `sha256:07eb75b30f2e8e486b73db6fd729d8fc498673cc44d61e961fe486c986bf6882`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S13-DOC-U0017-R001 sha256:5f64912a0edcb3c7b9f24a1003920ef43f70d903835358711e14ba74d263da6d -->
- Reduced-motion alternative
<!-- END EXACT SPECIFICATION SOURCE S13-DOC-U0017-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S13-DOC-U0017-R001 sha256:07eb75b30f2e8e486b73db6fd729d8fc498673cc44d61e961fe486c986bf6882 -->
The DESIGN_INDEX Section does not contain any specification for a reduced-motion alternative.
<!-- END EXACT GAP FINDING S13-DOC-U0017-R001 -->
<!-- END VERBATIM S13 -->

<!-- BEGIN VERBATIM S14 sha256:d61c2b760884ada49822677ba0644d214841239a8e7724f66084cfcd0d1189aa 9146 -->
# S14 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:1af2af71f0a49f709bafbf2dadebc1fa4266fc9c6379539890a8352a31de61c4`
- 누락 항목: `9`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S14-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:327`
- 원본 source span SHA-256: `sha256:72439bbbff1fcce4f285aed690d7ef3410f0e821f29cbdbebc9be2da556f65bb`
- 표시 원문 SHA-256: `sha256:67f344807c23a74527cc9a16533f8a5e190d654861fcde58bcbe14ea8d5ee541`
- 판정 SHA-256: `sha256:ef1e8e7705edd23a35bc7406ad711e88a50a62fbfd07dac86c847ebd2e7fda1d`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0003-R001 sha256:67f344807c23a74527cc9a16533f8a5e190d654861fcde58bcbe14ea8d5ee541 -->
- Define page landmarks.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0003-R001 sha256:ef1e8e7705edd23a35bc7406ad711e88a50a62fbfd07dac86c847ebd2e7fda1d -->
The DESIGN_INDEX Section does not contain the statement '- Define page landmarks.'
<!-- END EXACT GAP FINDING S14-DOC-U0003-R001 -->

## 2. S14-DOC-U0004-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:328`
- 원본 source span SHA-256: `sha256:8af21d853150b489bf36f0c5d966d3e69d90189a226c6368badfbb6d631e398d`
- 표시 원문 SHA-256: `sha256:2f4710ccbacfec1fb09bc04178c667b17ec98d969c08079c2b6a1b93a8d4a8a3`
- 판정 SHA-256: `sha256:1dd12dcfdf04614289119cc1f465f2beaf96b1b31a12dd9afc16041600f34c5e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0004-R001 sha256:2f4710ccbacfec1fb09bc04178c667b17ec98d969c08079c2b6a1b93a8d4a8a3 -->
- Define heading order for every page.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0004-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0004-R001 sha256:1dd12dcfdf04614289119cc1f465f2beaf96b1b31a12dd9afc16041600f34c5e -->
The DESIGN_INDEX Section for S14 does not contain a statement equivalent to 'Define heading order for every page.'
<!-- END EXACT GAP FINDING S14-DOC-U0004-R001 -->

## 3. S14-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:331`
- 원본 source span SHA-256: `sha256:5cf658ea7f1f3dbb746a3e4cc7105b18906b3ddcaad5ac4acbb864deef47c56f`
- 표시 원문 SHA-256: `sha256:5b3d8faf85bdca3cb5c0b13afc0a452a43a0b240f5eb04d19989ca0181195968`
- 판정 SHA-256: `sha256:842f419326e60a1b673a95a949c61e931e18e7feb1986558908398dba9989cf3`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0007-R001 sha256:5b3d8faf85bdca3cb5c0b13afc0a452a43a0b240f5eb04d19989ca0181195968 -->
- Define focus-ring tokens.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0007-R001 sha256:842f419326e60a1b673a95a949c61e931e18e7feb1986558908398dba9989cf3 -->
The DESIGN_INDEX Section does not mention defining focus-ring tokens.
<!-- END EXACT GAP FINDING S14-DOC-U0007-R001 -->

## 4. S14-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:332`
- 원본 source span SHA-256: `sha256:88defed46536c7ae6a0bb533c00e47e41596092ece4f7642222bff3258406555`
- 표시 원문 SHA-256: `sha256:d980a2b56fc039a2e1753de4371f9f2af2ad36bc8c6e14f396de545e6f59bd9a`
- 판정 SHA-256: `sha256:1a368e2e2c8ad43b77dfccfc690007091aab8b6b277aafdcce3ca3fe9d8836a7`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0008-R001 sha256:d980a2b56fc039a2e1753de4371f9f2af2ad36bc8c6e14f396de545e6f59bd9a -->
- Define form labels and descriptions.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0008-R001 sha256:1a368e2e2c8ad43b77dfccfc690007091aab8b6b277aafdcce3ca3fe9d8836a7 -->
The DESIGN_INDEX Section does not contain any statement about defining form labels and descriptions.
<!-- END EXACT GAP FINDING S14-DOC-U0008-R001 -->

## 5. S14-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:334`
- 원본 source span SHA-256: `sha256:81d45a2f4c728ca138db062146eb4ebb8240891372b9bd95eb4964bad1413dc4`
- 표시 원문 SHA-256: `sha256:ed3e431f4e9ed8dbcf90e789fefb7ff226f4134ee0f2c1592bd014b60992bc60`
- 판정 SHA-256: `sha256:eaea933ff6b9c0ee31f51707bde6c059a2358e4cfdd3c93cd7f0218caa833a3e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0010-R001 sha256:ed3e431f4e9ed8dbcf90e789fefb7ff226f4134ee0f2c1592bd014b60992bc60 -->
- Define live regions.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0010-R001 sha256:eaea933ff6b9c0ee31f51707bde6c059a2358e4cfdd3c93cd7f0218caa833a3e -->
The DESIGN_INDEX Section S14 does not contain a specification for defining live regions.
<!-- END EXACT GAP FINDING S14-DOC-U0010-R001 -->

## 6. S14-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:335`
- 원본 source span SHA-256: `sha256:d857dea09e87d35d6f8780d19b965865265823a7f07698068bae406913010804`
- 표시 원문 SHA-256: `sha256:ae2aa7fba0fb596b2719ecf025e2a9058713a960830cbe3934a88b43c5b4f177`
- 판정 SHA-256: `sha256:2f61a3e0e226dbeb8c95de95ad8a830102c130bc31a447c1969fbd6d8d3c2360`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0011-R001 sha256:ae2aa7fba0fb596b2719ecf025e2a9058713a960830cbe3934a88b43c5b4f177 -->
- Define error association.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0011-R001 sha256:2f61a3e0e226dbeb8c95de95ad8a830102c130bc31a447c1969fbd6d8d3c2360 -->
The requirement to define error association is not present in the DESIGN_INDEX Section.
<!-- END EXACT GAP FINDING S14-DOC-U0011-R001 -->

## 7. S14-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:336`
- 원본 source span SHA-256: `sha256:f35ff06504fba8e7f0e3538012f2b6829465ccebc7c30210913d773c7c0951d4`
- 표시 원문 SHA-256: `sha256:5d15a1e3c339f849aa487ab4f3c565863ebc64c7b11a7bedb1de4130814d6639`
- 판정 SHA-256: `sha256:9230f380e76ae14b8d6d5b3a9b67994f3a0673b36555f7651a7f7a18e6c53fac`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0012-R001 sha256:5d15a1e3c339f849aa487ab4f3c565863ebc64c7b11a7bedb1de4130814d6639 -->
- Define contrast targets.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0012-R001 sha256:9230f380e76ae14b8d6d5b3a9b67994f3a0673b36555f7651a7f7a18e6c53fac -->
The DESIGN_INDEX Section 14 does not contain the exact statement '- Define contrast targets.'
<!-- END EXACT GAP FINDING S14-DOC-U0012-R001 -->

## 8. S14-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:337`
- 원본 source span SHA-256: `sha256:1d678dd142202ddcb06bdccc79e856257fdf2555586964d49747c976263c81ed`
- 표시 원문 SHA-256: `sha256:c2214287e50132ee90748f2f463c4a6b4f624c8d1ad70e5348c9d7d32a0c9c50`
- 판정 SHA-256: `sha256:f438785012669da139dfaf90a7cceb9b0f7a1a65550de29383ca6e473809cd73`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0013-R001 sha256:c2214287e50132ee90748f2f463c4a6b4f624c8d1ad70e5348c9d7d32a0c9c50 -->
- Define reduced-motion behavior.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0013-R001 sha256:f438785012669da139dfaf90a7cceb9b0f7a1a65550de29383ca6e473809cd73 -->
Specification leaf requires defining reduced-motion behavior but DESIGN_INDEX only mentions respecting prefers-reduced-motion without defining the behavior itself.
<!-- END EXACT GAP FINDING S14-DOC-U0013-R001 -->

## 9. S14-DOC-U0017-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:341`
- 원본 source span SHA-256: `sha256:43537ce88ca800ca544cb25cc126549bc7fe41f0dc2ab2df79726ad10c5a04b1`
- 표시 원문 SHA-256: `sha256:a787ed8c2158726b150d57004c235d5bfc51a4ace65aadef7750797ba202e014`
- 판정 SHA-256: `sha256:adc363e6472075890e702dfe0fe45df0fbafe210ada69a942c4c43415cb97191`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S14-DOC-U0017-R001 sha256:a787ed8c2158726b150d57004c235d5bfc51a4ace65aadef7750797ba202e014 -->
- Do not rely on color alone to communicate state.
<!-- END EXACT SPECIFICATION SOURCE S14-DOC-U0017-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S14-DOC-U0017-R001 sha256:adc363e6472075890e702dfe0fe45df0fbafe210ada69a942c4c43415cb97191 -->
The DESIGN_INDEX Section S14 does not contain the requirement '- Do not rely on color alone to communicate state.'
<!-- END EXACT GAP FINDING S14-DOC-U0017-R001 -->
<!-- END VERBATIM S14 -->

<!-- BEGIN VERBATIM S15 sha256:113009fff501c9bedc0969dcf48670af5ec50eb970edd0f7464be690f840c4a2 6372 -->
# S15 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:298695875e5d3582dbcdb098d41f3236c46801a2b47d617543d1bd85de6dc344`
- 누락 항목: `6`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S15-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:345`
- 원본 source span SHA-256: `sha256:a6df8888a009e569642571cea28d13c83802c65235a4c06167f9d5901ece0de6`
- 표시 원문 SHA-256: `sha256:ae45e875d3647ede230fa3a1a6582db8de3d1f42ef595cb6e8127423fcb270c0`
- 판정 SHA-256: `sha256:9c0aa5c44c631bac3edfb35e6cdc59c138f0ee5177c8340e94f13b91e295adae`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0003-R001 sha256:ae45e875d3647ede230fa3a1a6582db8de3d1f42ef595cb6e8127423fcb270c0 -->
- Define page-specific data entities.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0003-R001 sha256:9c0aa5c44c631bac3edfb35e6cdc59c138f0ee5177c8340e94f13b91e295adae -->
The DESIGN_INDEX Section does not define page-specific data entities.
<!-- END EXACT GAP FINDING S15-DOC-U0003-R001 -->

## 2. S15-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:347`
- 원본 source span SHA-256: `sha256:c2fdc8d8c8b11da3f1dbeb1cfd99d8e8b42ef82d1c90e012ee2255655df7a193`
- 표시 원문 SHA-256: `sha256:e6fe9b52aafa6272d47b9de5fd20b43344df980d3f22656fde3a87d13a8a07b3`
- 판정 SHA-256: `sha256:a52735a7a78a88625294ce4def7bd61f39bb3cc0b1685f371dee13a1e90b4c5e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0005-R001 sha256:e6fe9b52aafa6272d47b9de5fd20b43344df980d3f22656fde3a87d13a8a07b3 -->
- Define optional and nullable values.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0005-R001 sha256:a52735a7a78a88625294ce4def7bd61f39bb3cc0b1685f371dee13a1e90b4c5e -->
The DESIGN_INDEX Section 15 does not contain a requirement to define optional and nullable values in the data model types.
<!-- END EXACT GAP FINDING S15-DOC-U0005-R001 -->

## 3. S15-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:348`
- 원본 source span SHA-256: `sha256:b7aefcb6578148f372544ea0da18d59587a1202db3f721e262a4616427efe581`
- 표시 원문 SHA-256: `sha256:c90a4544fdf150e2f059cb505d149e6c76c70d37f3aa93c72ab79737b3977ba9`
- 판정 SHA-256: `sha256:7c021b785725ddd41c21ae454956fc98af0a8f3b4bdcf7a1b78b4ac55187b4d6`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0006-R001 sha256:c90a4544fdf150e2f059cb505d149e6c76c70d37f3aa93c72ab79737b3977ba9 -->
- Define ordering and grouping.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0006-R001 sha256:7c021b785725ddd41c21ae454956fc98af0a8f3b4bdcf7a1b78b4ac55187b4d6 -->
The DESIGN_INDEX Section 15 does not define ordering and grouping for data and content model entities as required by the Specification leaf.
<!-- END EXACT GAP FINDING S15-DOC-U0006-R001 -->

## 4. S15-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:349`
- 원본 source span SHA-256: `sha256:638fe4664b09aa4e8db37d405d2ecef518ef71c6595f7b805dbb2e92c8e2e61c`
- 표시 원문 SHA-256: `sha256:de6cc5ea0cef08d03089a138fc1f5f77eadafbd51813bc9ea95d997546a8fbe4`
- 판정 SHA-256: `sha256:e1478fdfca6f0d87cf9769fec8b4a403c68cb9a0c9703c7320205adb95cddfe5`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0007-R001 sha256:de6cc5ea0cef08d03089a138fc1f5f77eadafbd51813bc9ea95d997546a8fbe4 -->
- Define formatting rules.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0007-R001 sha256:e1478fdfca6f0d87cf9769fec8b4a403c68cb9a0c9703c7320205adb95cddfe5 -->
The DESIGN_INDEX section does not contain any specification or rule defining formatting rules for data or content, such as date, number, or string formatting conventions.
<!-- END EXACT GAP FINDING S15-DOC-U0007-R001 -->

## 5. S15-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:350`
- 원본 source span SHA-256: `sha256:d7791a798022a153d5d4aab385793d9969930edf11ad364032334ba194ddd7a1`
- 표시 원문 SHA-256: `sha256:182c51e32d15c46192766f672977c19499f8044602a822473f60b7b30fb570e5`
- 판정 SHA-256: `sha256:e6eb021a3e6c3f65f98de15ca948594611e23bcfffcb06da8a3492a672d97062`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0008-R001 sha256:182c51e32d15c46192766f672977c19499f8044602a822473f60b7b30fb570e5 -->
- Define localization behavior.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0008-R001 sha256:e6eb021a3e6c3f65f98de15ca948594611e23bcfffcb06da8a3492a672d97062 -->
The DESIGN_INDEX section does not define localization behavior as required by the Specification leaf.
<!-- END EXACT GAP FINDING S15-DOC-U0008-R001 -->

## 6. S15-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:352`
- 원본 source span SHA-256: `sha256:53076a8cbd3f9eae616f0fd133d7dfa2dc4550eab59d61272de360ad5fe67ba3`
- 표시 원문 SHA-256: `sha256:1c14a6a497214e561dc4847bd41d23f24b84b106a513e31a4d7e8135d1371350`
- 판정 SHA-256: `sha256:03a68f3f6141e60fe62c54632c359ba8ed9433e0dccf63acf20e600b90186eab`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S15-DOC-U0010-R001 sha256:1c14a6a497214e561dc4847bd41d23f24b84b106a513e31a4d7e8135d1371350 -->
- Provide sample fixture shapes.
<!-- END EXACT SPECIFICATION SOURCE S15-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S15-DOC-U0010-R001 sha256:03a68f3f6141e60fe62c54632c359ba8ed9433e0dccf63acf20e600b90186eab -->
The DESIGN_INDEX section for S15 does not contain any sample fixture shapes as required by the specification leaf.
<!-- END EXACT GAP FINDING S15-DOC-U0010-R001 -->
<!-- END VERBATIM S15 -->

<!-- BEGIN VERBATIM S16 sha256:b455487709614a4115cdaf7e60306122d9d14958f6a3e1d4c0d29cf4070ef7e0 8329 -->
# S16 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:076ef6f0f9c7ac0f9433c312c0939dea055e5af2125a095527bfb1e8575230f7`
- 누락 항목: `8`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S16-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:361`
- 원본 source span SHA-256: `sha256:668d89e4b65789900a78e8d0bf5d766a767e55837c27cada63ecd2b110305e0a`
- 표시 원문 SHA-256: `sha256:99430e715eb1a0202b7aa9af48d1b622c8f0a7720ed0670627eaae7ea1f18ad6`
- 판정 SHA-256: `sha256:bb0699ff0bb736e8eb26f1f22aae2af66bde2d311ade8f2858446ee5fd8f6197`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0006-R001 sha256:99430e715eb1a0202b7aa9af48d1b622c8f0a7720ed0670627eaae7ea1f18ad6 -->
- Define shared-component modules.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0006-R001 sha256:bb0699ff0bb736e8eb26f1f22aae2af66bde2d311ade8f2858446ee5fd8f6197 -->
The DESIGN_INDEX Section does not contain any statement defining shared-component modules.
<!-- END EXACT GAP FINDING S16-DOC-U0006-R001 -->

## 2. S16-DOC-U0008-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:363`
- 원본 source span SHA-256: `sha256:d19e79910ddeb67b7e1aeca2a908e78d2827cbac285549ed854e51bf118b9043`
- 표시 원문 SHA-256: `sha256:b08fd387b98ed73df13600423262bc1e92159099d7304e783c8739a62b278142`
- 판정 SHA-256: `sha256:2a5ea954961464b0f3c1be15e3c0058b2187b481b7be977f757b385dc2197d80`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0008-R001 sha256:b08fd387b98ed73df13600423262bc1e92159099d7304e783c8739a62b278142 -->
- Define token files.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0008-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0008-R001 sha256:2a5ea954961464b0f3c1be15e3c0058b2187b481b7be977f757b385dc2197d80 -->
The DESIGN_INDEX section does not mention defining token files.
<!-- END EXACT GAP FINDING S16-DOC-U0008-R001 -->

## 3. S16-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:364`
- 원본 source span SHA-256: `sha256:19ecc3c1d0e6852e438987bfade15d22e549ee2cc76c93db5b46290ef3379275`
- 표시 원문 SHA-256: `sha256:7c0cfe8e18a3788990a6f02593cb057de4423e2f9c12fe68a97a2734d2e88126`
- 판정 SHA-256: `sha256:0c0884f000e37428a624b283c8791cb450e962bb7be0d8778b2fab6fb9072698`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0009-R001 sha256:7c0cfe8e18a3788990a6f02593cb057de4423e2f9c12fe68a97a2734d2e88126 -->
- Define asset organization.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0009-R001 sha256:0c0884f000e37428a624b283c8791cb450e962bb7be0d8778b2fab6fb9072698 -->
The DESIGN_INDEX Section 16. Frontend Architecture does not define asset organization.
<!-- END EXACT GAP FINDING S16-DOC-U0009-R001 -->

## 4. S16-DOC-U0010-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:365`
- 원본 source span SHA-256: `sha256:155e73f7f819fec0d588b1eff594fd2daa7265909e72daef9345094c36960cf0`
- 표시 원문 SHA-256: `sha256:b0625168e3275645ef88c39a79cd3c3a342298f20943734a856bb554f398157d`
- 판정 SHA-256: `sha256:bc682f96ab7a03370b10777d52aa3d5583eb67574daacc3f9ce073c49fc6609b`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0010-R001 sha256:b0625168e3275645ef88c39a79cd3c3a342298f20943734a856bb554f398157d -->
- Define data models.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0010-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0010-R001 sha256:bc682f96ab7a03370b10777d52aa3d5583eb67574daacc3f9ce073c49fc6609b -->
The DESIGN_INDEX Section 16. Frontend Architecture does not mention defining data models.
<!-- END EXACT GAP FINDING S16-DOC-U0010-R001 -->

## 5. S16-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:367`
- 원본 source span SHA-256: `sha256:2e12b6627d4593268c07169489177fcb748681e74aafbe774e0686be8618a926`
- 표시 원문 SHA-256: `sha256:8a7fcdb7056256abd5ec31f6ca1be92001f102dff08a8001ba8a48a7a645e287`
- 판정 SHA-256: `sha256:92d4dd3c61185db94520d658199810b4682e1acedadec77a9599b2a808f88dfe`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0012-R001 sha256:8a7fcdb7056256abd5ec31f6ca1be92001f102dff08a8001ba8a48a7a645e287 -->
- Define server and client boundaries.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0012-R001 sha256:92d4dd3c61185db94520d658199810b4682e1acedadec77a9599b2a808f88dfe -->
The DESIGN_INDEX Section S16 does not explicitly define server and client boundaries as required by the Specification leaf.
<!-- END EXACT GAP FINDING S16-DOC-U0012-R001 -->

## 6. S16-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:368`
- 원본 source span SHA-256: `sha256:03a834572b2dccea9942d5a87f61de5c31084acf0ffc35e19ae16944140285c7`
- 표시 원문 SHA-256: `sha256:d7cdb781ac9bf878ffa5d0b199219c0254f760f1add327631ea6571ee712fff4`
- 판정 SHA-256: `sha256:edb09751f2dff1912eaf1a1aa6125d04162f87dc62154b97b80f8ebf61920bc9`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0013-R001 sha256:d7cdb781ac9bf878ffa5d0b199219c0254f760f1add327631ea6571ee712fff4 -->
- Define third-party library responsibilities.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0013-R001 sha256:edb09751f2dff1912eaf1a1aa6125d04162f87dc62154b97b80f8ebf61920bc9 -->
The DESIGN_INDEX Section does not contain any statement or inferred responsibility regarding defining third-party library responsibilities.
<!-- END EXACT GAP FINDING S16-DOC-U0013-R001 -->

## 7. S16-DOC-U0014-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:369`
- 원본 source span SHA-256: `sha256:a9b1631bfd94e12a215861c7e60fea2931117ec45335a130deaa7afd6b731d5f`
- 표시 원문 SHA-256: `sha256:8985efa521a35b7f086db118727f2a57c2896aa5b322a8b68ecdc679d9b10ced`
- 판정 SHA-256: `sha256:7647a618ef1e89efeb853da4d5c7bb92e5ae8c8bec1be1f4225d159e744f2934`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0014-R001 sha256:8985efa521a35b7f086db118727f2a57c2896aa5b322a8b68ecdc679d9b10ced -->
- Keep framework choices separate from reconstruction requirements.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0014-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0014-R001 sha256:7647a618ef1e89efeb853da4d5c7bb92e5ae8c8bec1be1f4225d159e744f2934 -->
The DESIGN_INDEX Section does not contain any statement equivalent to '- Keep framework choices separate from reconstruction requirements.'
<!-- END EXACT GAP FINDING S16-DOC-U0014-R001 -->

## 8. S16-DOC-U0015-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:370`
- 원본 source span SHA-256: `sha256:e951f9b40cfce00caf2f064d1c0ae1ce7fce34d245b7d51e9dac75775e5d6c60`
- 표시 원문 SHA-256: `sha256:66442d434a6a9465068c58701ed6bbc5666eb4569edea0df03a7ed22deadd8b1`
- 판정 SHA-256: `sha256:4387482dfc087bb9b9aea5bc45b7be300eca5223175b09244f6da9e812464411`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S16-DOC-U0015-R001 sha256:66442d434a6a9465068c58701ed6bbc5666eb4569edea0df03a7ed22deadd8b1 -->
- Ensure that another framework can satisfy the same visual and behavioral contract.
<!-- END EXACT SPECIFICATION SOURCE S16-DOC-U0015-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S16-DOC-U0015-R001 sha256:4387482dfc087bb9b9aea5bc45b7be300eca5223175b09244f6da9e812464411 -->
The DESIGN_INDEX section does not contain any statement ensuring that another framework can satisfy the same visual and behavioral contract.
<!-- END EXACT GAP FINDING S16-DOC-U0015-R001 -->
<!-- END VERBATIM S16 -->

<!-- BEGIN VERBATIM S17 sha256:74f3a43f5a6391511eb769814b2e2665c4758c802882208fa5a2dc56124dd887 3387 -->
# S17 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:4e3061fd65df5edd449489a97bd18783075e22dbc22f9fd97fe4b3fc4d49b1fd`
- 누락 항목: `3`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S17-DOC-U0003-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:374`
- 원본 source span SHA-256: `sha256:e93203b55f49323b337a8b6f2bbb17928edc05793630c60565514774b185f356`
- 표시 원문 SHA-256: `sha256:a8a3d52dac18646b7e3520a2b4fcbfcabebb0c7d7b14ab93e244fd21c30f3e47`
- 판정 SHA-256: `sha256:fc3d4b57b148dd87bd84a54b2adc76e1fdab654c90dd67c593b57285f3456fd2`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S17-DOC-U0003-R001 sha256:a8a3d52dac18646b7e3520a2b4fcbfcabebb0c7d7b14ab93e244fd21c30f3e47 -->
Produce ordered task IDs with:
<!-- END EXACT SPECIFICATION SOURCE S17-DOC-U0003-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S17-DOC-U0003-R001 sha256:fc3d4b57b148dd87bd84a54b2adc76e1fdab654c90dd67c593b57285f3456fd2 -->
Requirement to 'Produce ordered task IDs with:' is not satisfied by the DESIGN_INDEX Section, which contains a task table but does not explicitly state that it produces ordered task IDs.
<!-- END EXACT GAP FINDING S17-DOC-U0003-R001 -->

## 2. S17-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:377`
- 원본 source span SHA-256: `sha256:f1cb605e5a14c774b3457ee90fc777c62415c1809a014bd2f02138b8ee047e53`
- 표시 원문 SHA-256: `sha256:24f2feba551fab4b584751746f483c32a530adbf370e66792a6a067a36d8c2cf`
- 판정 SHA-256: `sha256:774d6cbf12febc85df039d0589ef06659f04b0802931a43039d3252c439c639f`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S17-DOC-U0006-R001 sha256:24f2feba551fab4b584751746f483c32a530adbf370e66792a6a067a36d8c2cf -->
- Inputs
<!-- END EXACT SPECIFICATION SOURCE S17-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S17-DOC-U0006-R001 sha256:774d6cbf12febc85df039d0589ef06659f04b0802931a43039d3252c439c639f -->
The DESIGN_INDEX Section does not contain any specification for 'Inputs'.
<!-- END EXACT GAP FINDING S17-DOC-U0006-R001 -->

## 3. S17-DOC-U0012-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:383`
- 원본 source span SHA-256: `sha256:7998d15afa65f0ed1c2c3f642732291d5a02d5429e59f7ed07e47550005e0189`
- 표시 원문 SHA-256: `sha256:4220f321e342e96e5a16ce05d25c5b4b4a972648525f233cde710b106a40c7c6`
- 판정 SHA-256: `sha256:c7e3af5ce1a9e761e758f8367aa32d0f5de08d5ba06c4bbcb8c93f1d627d6554`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S17-DOC-U0012-R001 sha256:4220f321e342e96e5a16ce05d25c5b4b4a972648525f233cde710b106a40c7c6 -->
- Parallelizable groups
<!-- END EXACT SPECIFICATION SOURCE S17-DOC-U0012-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S17-DOC-U0012-R001 sha256:c7e3af5ce1a9e761e758f8367aa32d0f5de08d5ba06c4bbcb8c93f1d627d6554 -->
The Specification leaf '- Parallelizable groups' is not represented in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S17-DOC-U0012-R001 -->
<!-- END VERBATIM S17 -->

<!-- BEGIN VERBATIM S18 sha256:263d33d6f4447f1e3c2c6e4c8c22e9df6016957ae96dabff530d4a03cde5ad6f 7463 -->
# S18 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:5d2dc3e95c9845e021e663d33d15eb3b112128d184149da881dc3be20482895d`
- 누락 항목: `7`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S18-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:391`
- 원본 source span SHA-256: `sha256:46e58223563dbcedbae42f2663e4c5cbf7a766327162182e91b1fec639cba9b5`
- 표시 원문 SHA-256: `sha256:a0c06a19f7c84f45df84eca253baa0830b6300d91962f65a852b077b66f8a345`
- 판정 SHA-256: `sha256:3ab426d1b13d3a6d4d2c1107cf63947cfcc3195cb24183da7a72b7b3f097375e`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0005-R001 sha256:a0c06a19f7c84f45df84eca253baa0830b6300d91962f65a852b077b66f8a345 -->
- Include section-bound tolerances.
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0005-R001 sha256:3ab426d1b13d3a6d4d2c1107cf63947cfcc3195cb24183da7a72b7b3f097375e -->
DESIGN_INDEX Section S18 does not contain any statement equivalent to '- Include section-bound tolerances.'
<!-- END EXACT GAP FINDING S18-DOC-U0005-R001 -->

## 2. S18-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:392`
- 원본 source span SHA-256: `sha256:0b45b96c930e5adfba5287a3a70273d5e60a214c860e7b78d4e3a5896c5e017e`
- 표시 원문 SHA-256: `sha256:7ab5604f4c1733ecb3a67e1e9d595912f779015c58420e009c13f282535f05ce`
- 판정 SHA-256: `sha256:f233d1d0499ce4196050fe27787a1c3fe60eae67d41ba233a1378203150a3d99`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0006-R001 sha256:7ab5604f4c1733ecb3a67e1e9d595912f779015c58420e009c13f282535f05ce -->
- Include container alignment.
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0006-R001 sha256:f233d1d0499ce4196050fe27787a1c3fe60eae67d41ba233a1378203150a3d99 -->
The DESIGN_INDEX Section does not contain the statement '- Include container alignment.' from the Specification leaf.
<!-- END EXACT GAP FINDING S18-DOC-U0006-R001 -->

## 3. S18-DOC-U0011-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:397`
- 원본 source span SHA-256: `sha256:ccce02d24d26940b6e0132f080e437e01ec2cdc592a444387e9ae53317aea373`
- 표시 원문 SHA-256: `sha256:ee93a5f1cf9048503ff820ae0eb96d2ff66fd25cff6c111847061cd756325c88`
- 판정 SHA-256: `sha256:a38eabbe624faa0b64a3a247e50287a533e98acca2ad2debb6157d73d290831f`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0011-R001 sha256:ee93a5f1cf9048503ff820ae0eb96d2ff66fd25cff6c111847061cd756325c88 -->
- Include asset loading and crop verification.
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0011-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0011-R001 sha256:a38eabbe624faa0b64a3a247e50287a533e98acca2ad2debb6157d73d290831f -->
The DESIGN_INDEX section lacks any mention of asset loading or crop verification, which is required by the specification leaf.
<!-- END EXACT GAP FINDING S18-DOC-U0011-R001 -->

## 4. S18-DOC-U0013-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:399`
- 원본 source span SHA-256: `sha256:ab57b4c0900eedba3fa62068650fb1fc5d588ca1b8876a3cd9b80134a0b3eecb`
- 표시 원문 SHA-256: `sha256:00cec12a0815c7d3ac1dbb31aad3b654921c25987593760345ff35fc48604684`
- 판정 SHA-256: `sha256:863a042af0d8b2bebe1d4ad27a991399acbbd41ef2f14be59bb41f5c3dcb352a`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0013-R001 sha256:00cec12a0815c7d3ac1dbb31aad3b654921c25987593760345ff35fc48604684 -->
- Include responsive state.
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0013-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0013-R001 sha256:863a042af0d8b2bebe1d4ad27a991399acbbd41ef2f14be59bb41f5c3dcb352a -->
The DESIGN_INDEX section does not contain a requirement or instruction to 'Include responsive state' as specified in the atomic Specification leaf.
<!-- END EXACT GAP FINDING S18-DOC-U0013-R001 -->

## 5. S18-DOC-U0021-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:407`
- 원본 source span SHA-256: `sha256:7ea1844107a3392c790e7a6bc6239ced7784420ce0030fb5659639425fd91861`
- 표시 원문 SHA-256: `sha256:c6f2cfe5d5f5c0f31c460b968cd76231ed5b3965bf97a68fc5848502b60b5e1f`
- 판정 SHA-256: `sha256:8ba14395319fd5a8c7a7303602edcd0b6d24ba408ebb841bf0c62e6358b470f5`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0021-R001 sha256:c6f2cfe5d5f5c0f31c460b968cd76231ed5b3965bf97a68fc5848502b60b5e1f -->
- Horizontal page overflow: `0px`
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0021-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0021-R001 sha256:8ba14395319fd5a8c7a7303602edcd0b6d24ba408ebb841bf0c62e6358b470f5 -->
Specification leaf requires horizontal page overflow to be 0px, but DESIGN_INDEX section does not explicitly state this requirement.
<!-- END EXACT GAP FINDING S18-DOC-U0021-R001 -->

## 6. S18-DOC-U0023-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:409`
- 원본 source span SHA-256: `sha256:638a70856c2c70bca54c7619bd556cae63932da6f34280122024c43187134770`
- 표시 원문 SHA-256: `sha256:46f90d425f4215dee536270102fbafba2ccd4d021c29cf0c003aa5b8b7737962`
- 판정 SHA-256: `sha256:2c52e79314e9414db845cdf03401d45a8a053cc4edbe73eee5ebfa6e113cefab`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0023-R001 sha256:46f90d425f4215dee536270102fbafba2ccd4d021c29cf0c003aa5b8b7737962 -->
- Keyboard-inaccessible interactive controls: none
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0023-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0023-R001 sha256:2c52e79314e9414db845cdf03401d45a8a053cc4edbe73eee5ebfa6e113cefab -->
Requirement 'Keyboard-inaccessible interactive controls: none' is not present in DESIGN_INDEX Section S18.
<!-- END EXACT GAP FINDING S18-DOC-U0023-R001 -->

## 7. S18-DOC-U0025-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:411`
- 원본 source span SHA-256: `sha256:238ff9db32a7e1d4cd2a99f6862c4cdb07975fb3439fb4f2365b9bf25f9ba65a`
- 표시 원문 SHA-256: `sha256:18af02dc7f2b10288b41257b0ca7b19636e842a89a34579ed7de41a41c79e822`
- 판정 SHA-256: `sha256:67271aec94bb12680e420a1cea87e0d78a58fa42fb4acdecebb026070a7f3423`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S18-DOC-U0025-R001 sha256:18af02dc7f2b10288b41257b0ca7b19636e842a89a34579ed7de41a41c79e822 -->
Override a default tolerance only when the document records a concrete reason.
<!-- END EXACT SPECIFICATION SOURCE S18-DOC-U0025-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S18-DOC-U0025-R001 sha256:67271aec94bb12680e420a1cea87e0d78a58fa42fb4acdecebb026070a7f3423 -->
The requirement 'Override a default tolerance only when the document records a concrete reason.' is not found in the DESIGN_INDEX section.
<!-- END EXACT GAP FINDING S18-DOC-U0025-R001 -->
<!-- END VERBATIM S18 -->

<!-- BEGIN VERBATIM S19 sha256:5436302afa4ddb65e10e55e2fe794e0532d1f3f80b965332fea544b122e91dd0 5767 -->
# S19 1차 문서 누락 보고서

- 대상: `yyeongjin-secret-mcp-use--gdweb-26357`
- 입력 문서: `trigger/DESIGN_INDEX_gdweb-26357.md`
- Section 상태: `DOCUMENT_GAP`
- Section fingerprint: `sha256:a84b5368aa56e723ed7578cb1dd7e3147052357eeedbb9bdd6ec543d86a868a4`
- 누락 항목: `5`

아래 내용은 JSON 직렬화나 LLM 요약이 아닙니다. 각 항목의 명세서 원문과 누락 판정 원문을 읽을 수 있는 Markdown 평문으로 그대로 기록합니다.

## 1. S19-DOC-U0004-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:416`
- 원본 source span SHA-256: `sha256:54d7bafcc99c63e24c7d258e4c188e377a2aa3043658a0951263636534bca6df`
- 표시 원문 SHA-256: `sha256:71993dba95cd899e37f0879f1424fab9eb43b12b9a75d6d5597ab515e7f74071`
- 판정 SHA-256: `sha256:36895c14d8b5058368431525cb75b893fd7d105d0555d9a28cc30105975cc412`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S19-DOC-U0004-R001 sha256:71993dba95cd899e37f0879f1424fab9eb43b12b9a75d6d5597ab515e7f74071 -->
- Record the concrete implementation decision selected in its place.
<!-- END EXACT SPECIFICATION SOURCE S19-DOC-U0004-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S19-DOC-U0004-R001 sha256:36895c14d8b5058368431525cb75b893fd7d105d0555d9a28cc30105975cc412 -->
The DESIGN_INDEX Section does not record the concrete implementation decision selected for any uncertainty; it only lists uncertainties and unknowns without decisions.
<!-- END EXACT GAP FINDING S19-DOC-U0004-R001 -->

## 2. S19-DOC-U0005-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:417`
- 원본 source span SHA-256: `sha256:442d7634afa8e87d80578e634eda0fa7432f07cc2a50b750afa41904c40a4f17`
- 표시 원문 SHA-256: `sha256:483ae15c0e332b971375f2069e34b5f812af94ffe7a59753cc67d6938a1a3b09`
- 판정 SHA-256: `sha256:bb2d933638f703c8703de41a4abcbcd1dd116d235454c2f76c5d65506ff665b4`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S19-DOC-U0005-R001 sha256:483ae15c0e332b971375f2069e34b5f812af94ffe7a59753cc67d6938a1a3b09 -->
- Record alternatives considered and rejected.
<!-- END EXACT SPECIFICATION SOURCE S19-DOC-U0005-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S19-DOC-U0005-R001 sha256:bb2d933638f703c8703de41a4abcbcd1dd116d235454c2f76c5d65506ff665b4 -->
The DESIGN_INDEX Section 19 does not record any alternatives considered and rejected.
<!-- END EXACT GAP FINDING S19-DOC-U0005-R001 -->

## 3. S19-DOC-U0006-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:418`
- 원본 source span SHA-256: `sha256:c03ae8f7431e2c68ac920f426efd66de701eba75912164eeab2ac38aeab11a9c`
- 표시 원문 SHA-256: `sha256:d226d3bd2f947ee68ce299a92e1123d978c190bed939efc50c9005e98d9cb26a`
- 판정 SHA-256: `sha256:8b5752998d202a297af4542a45f9117f94d02fd197de00e128d5896aa9580344`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S19-DOC-U0006-R001 sha256:d226d3bd2f947ee68ce299a92e1123d978c190bed939efc50c9005e98d9cb26a -->
- Record confidence.
<!-- END EXACT SPECIFICATION SOURCE S19-DOC-U0006-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S19-DOC-U0006-R001 sha256:8b5752998d202a297af4542a45f9117f94d02fd197de00e128d5896aa9580344 -->
The DESIGN_INDEX Section S19 does not contain a statement requiring to 'Record confidence.' as specified in the atomic Specification leaf S19-DOC-U0006-R001.
<!-- END EXACT GAP FINDING S19-DOC-U0006-R001 -->

## 4. S19-DOC-U0007-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:419`
- 원본 source span SHA-256: `sha256:4f0a2f2799d6ebf02a88054382e17b0ec6620d7b6ca6068b7667b6c184ded0e7`
- 표시 원문 SHA-256: `sha256:898f6307011328afddb6be1b5f1a33593e3004c4c02da801a11ec6945a3a9fb9`
- 판정 SHA-256: `sha256:70a148290232e6e90abd3d4e567db702cabd552135a3777a7122f9472ca2e264`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S19-DOC-U0007-R001 sha256:898f6307011328afddb6be1b5f1a33593e3004c4c02da801a11ec6945a3a9fb9 -->
- Record risk if the decision is wrong.
<!-- END EXACT SPECIFICATION SOURCE S19-DOC-U0007-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S19-DOC-U0007-R001 sha256:70a148290232e6e90abd3d4e567db702cabd552135a3777a7122f9472ca2e264 -->
The DESIGN_INDEX Section does not contain any requirement to record risk if the decision is wrong.
<!-- END EXACT GAP FINDING S19-DOC-U0007-R001 -->

## 5. S19-DOC-U0009-R001

- 판정: `DOCUMENT_GAP` / `MISSING`
- 원문 위치: `DESIGN_INDEX_SPECIFICATION.md:421`
- 원본 source span SHA-256: `sha256:2873abfa69e6e6cf1f1079b3a8c0f1861baf180b3f0bd18f6c51104871638060`
- 표시 원문 SHA-256: `sha256:74d0af586768cf6b6137b8f2ad667806eed32f136f593b240a8f4a706c6986b5`
- 판정 SHA-256: `sha256:2217a81716766ac890ecff5a48ca87fe94a14f0c0716344de90034b512f18f34`

### 명세서 원문

<!-- BEGIN EXACT SPECIFICATION SOURCE S19-DOC-U0009-R001 sha256:74d0af586768cf6b6137b8f2ad667806eed32f136f593b240a8f4a706c6986b5 -->
- Never silently omit an unknown value that affects layout, state, accessibility, data, or acceptance testing.
<!-- END EXACT SPECIFICATION SOURCE S19-DOC-U0009-R001 -->

### 누락 판정 원문

<!-- BEGIN EXACT GAP FINDING S19-DOC-U0009-R001 sha256:2217a81716766ac890ecff5a48ca87fe94a14f0c0716344de90034b512f18f34 -->
The DESIGN_INDEX Section '19. Uncertainties and Decisions' does not contain the requirement '- Never silently omit an unknown value that affects layout, state, accessibility, data, or acceptance testing.' as a stated principle, decision, or guideline. The section lists uncertainties but does not include this prohibition against silent omission.
<!-- END EXACT GAP FINDING S19-DOC-U0009-R001 -->
<!-- END VERBATIM S19 -->

