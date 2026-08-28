# DESIGN_INDEX Bottom-up 독립 검증 및 DAG 기반 PR 자동 보정 파이프라인

> **V4 최우선 규칙:** S01-S19는 결과 집계용 부모 노드다. 모델이 Section 전체를 먼저 읽고 누락 후보를 선택하게 해서는 안 된다. Specification과 DESIGN_INDEX의 모든 비구조 원문 source span을 결정적 코드가 leaf Requirement로 만들고, 모든 leaf를 별도 NVIDIA 요청으로 검사한 뒤 자식 결과를 bottom-up으로 합산해야 한다. 검사되지 않은 leaf, 원문에 연결되지 않은 leaf, `UNKNOWN` leaf가 하나라도 있으면 Section과 작품 전체를 `PASS`로 만들 수 없다. 이 규칙과 충돌하는 아래 V3 설명은 구현 이력일 뿐 규범으로 사용할 수 없다.

> **절대 차단 금지 규칙:** `dependsOn`, 선행 Section의 `PASS` 여부, 선행 PR의 병합 여부, 같은 파일의 write-set 중복은 `PATCH_REQUIRED` Section의 patch API 호출이나 PR 생성을 차단하는 조건으로 사용할 수 없다. DAG와 write-set은 전체 correction을 결정적으로 직렬화하고 각 PR의 `baseBranch`와 `baseCommit`을 고르는 입력이다. 2차 감사에서 근거 있는 `PATCH_REQUIRED`로 판정된 모든 Requirement는 같은 실행 안에서 별도 preflight와 patch 요청을 받으며, 검증된 실제 코드 diff마다 하위 PR을 생성한다. 하위 PR은 최대 5개 단위로 가장 깊은 자식부터 Section 브랜치까지 자동 병합하고 삭제하며, 최종 `S0x` 대표 draft PR만 사람의 병합 결정을 위해 남긴다. 대표 PR을 `main` 또는 이전 Section 대표 브랜치로 자동 병합하는 것은 금지한다. `PATCH_WAITING_DEPENDENCY`, `WAITING_DEPENDENCY`, `WAITING_WRITE_LOCK`으로 수정 필요 항목을 보류하는 구현은 이 문서의 위반이다.

## 규범 문서 우선순위

이 파일이 `secret_mcp_use` 검증·수정·PR 파이프라인의 유일한 규범 설계 문서다. README, 과거 실행 artifact, PR 본문, Issue, 대화 요약 또는 코드 주석이 이 파일과 충돌하면 이 파일을 따른다. 특히 다른 문서에 과거의 dependency wait 또는 write lock 설명이 남아 있어도 patch scheduler 구현 근거로 사용할 수 없다.

변경 승인 조건:

1. `PATCH_REQUIRED` Section 수를 `N`이라 할 때, 각 Section은 같은 실행에서 최소 하나의 독립 patch 요청 흐름을 시작해야 한다.
2. 검증된 실제 diff가 있는 Section은 선행 PASS나 사람의 merge를 기다리지 않고 하위 PR과 Section 대표 draft PR을 생성해야 한다.
3. 같은 파일을 수정하는 후속 Requirement는 직전 검증 commit을 base로 입력과 fingerprint를 다시 만들고 하위 PR을 생성해야 한다. 최대 5개의 하위 PR이 완성되면 깊이 우선 역순으로 Section 브랜치에 자동 병합한 뒤 다음 묶음을 시작한다.
4. `runPatches`에 dependency wait, write-set wait 또는 `claimedPaths` 기반 중단을 다시 도입하는 변경은 CI invariant test가 거부해야 한다.
5. 이 규칙을 바꾸려면 먼저 이 파일의 절대 차단 금지 규칙과 해당 CI test를 명시적으로 함께 변경해야 하며, README만 바꿔 동작을 변경할 수 없다.
6. 1차 `DOCUMENT_GAP` Section 수가 `D`이면 Section별 원문 보고서 하위 PR `D`개를 생성하고 최대 5개씩 report 대표 브랜치로 자동 병합해야 한다. 최종 출력은 원문을 결정적으로 이어 붙인 통합 문서 draft PR 하나와 작품별 대표 GitHub Issue 하나다.
7. 2차 상위 감사와 Requirement별 독립 preflight 뒤 `PATCH_REQUIRED`로 확정된 Section 수가 `N`이면 최종적으로 열린 Section 대표 PR도 `N`개여야 한다. 19개 Section이 모두 실제 코드 누락이면 S01-S19 대표 PR 19개가 남는다.
8. 한 Section에 Requirement ID가 여러 개면 `SXX-1...SXX-K`로 재귀 분할하고 Requirement마다 별도 NVIDIA 호출과 일시적인 하위 PR을 만든다. 하위 PR은 최대 5개씩 역순 자동 병합하므로 호출 수와 생성 이력은 Requirement 수만큼 늘어도 최종 사람이 검토할 열린 PR은 Section당 하나다. 환경변수로 묶음 크기를 조정할 수 있지만 1~10만 허용한다.
9. 원문 parser는 heading, fence, 표 구분선과 공백을 구조 span으로 기록하고 나머지 모든 문단 줄, 목록 항목, 표 행과 code payload를 감사 leaf로 기록한다. 모든 byte는 구조 span 또는 leaf span에 귀속되어야 하며 미귀속 범위가 있으면 provider 호출 전에 실패한다.
10. 1차와 2차의 호출 수는 19로 고정하지 않는다. 1차는 Specification leaf 전체, 2차는 DESIGN_INDEX leaf 전체를 각각 독립 호출한다. 19개 Section 호출은 V4에서 모델 호출 단위가 아니라 집계 단위다.
11. 1차 Section 보고서와 통합 문서는 모델이 요약하지 않는다. 원문 leaf 결과, request ID, source span과 hash를 Section 번호순으로 이어 붙이며, GitHub 본문 한도를 넘으면 같은 대표 Issue의 순번 댓글로 나누고 재결합 hash를 검증한다.
12. `NVIDIA_RPM_LIMIT`는 최초 요청뿐 아니라 network, HTTP 429와 HTTP 5xx transport 재시도를 포함한 모든 물리 HTTP 시작에 적용한다. worker 동시성이나 재시도 loop가 공용 시작 제한기를 우회하면 안 된다.
13. HTTP 429의 `Retry-After`는 모든 worker가 공유하는 cooldown이다. 이미 rate limiter queue에 들어간 worker도 전송 직전에 cooldown을 다시 확인하며 더 긴 cooldown을 짧은 간격 값으로 덮어쓰지 않는다.
14. 1차 Section에 `UNKNOWN` 또는 `FAILED_SCHEMA`가 하나라도 있으면 Section report 하위 PR, 대표 report PR과 대표 Issue를 하나도 발행하지 않고 workflow를 실패시킨다. 미판정 결과를 문서 누락 보고서로 공개해서는 안 된다.
15. GitHub가 막 생성된 child PR의 mergeability를 계산하는 동안 반환하는 405 `Pull Request is not mergeable`은 제한된 횟수로 다시 조회·병합한다. 보호 규칙 실패처럼 실제로 병합할 수 없는 오류는 재시도 대상으로 넓히지 않는다.

## 문서 상태

- 상태: V4 Bottom-up 전수 leaf 감사와 1차 통합 문서 PR/대표 Issue 로컬 구현·검증 완료, GitHub 원격 E2E 검증 대기
- 실행 대상 저장소: `secret_mcp_use` 하나만 사용
- 상위 생성기: `secret_mcp`는 작품별 `DESIGN_INDEX`, Request Contract와 Evidence를 생성해 전달하는 역할만 담당
- 입력: `secret_mcp`가 생성한 작품별 `DESIGN_INDEX`, 공통 Specification, 작품별 Request Contract, Evidence와 `secret_mcp_use`의 프론트엔드 소스
- 출력: 1차 문서 누락의 Section 원문 보고서 하위 PR, 통합 문서 대표 PR과 작품별 대표 Issue 하나, 2차 코드 누락의 동적 최소 수정 하위 PR과 Section 대표 PR, 모든 leaf의 독립 증명서
- 핵심 변경: S01-S19는 집계 DAG로만 유지한다. 모든 원문 leaf가 독립 검증된 뒤 Section 상태를 계산하며, 1차 문서 PR과 2차 코드 PR의 하위 노드는 최대 5개씩 깊은 자식부터 대표 브랜치로 자동 병합한다.

## V4 전체 실행 구조

```text
Specification 원문 -> 모든 source span -> 모든 leaf 독립 감사
        -> Section 원문 보고서 PR -> 최대 5개씩 자동 병합
        -> DOCUMENT_GAPS.md 대표 draft PR -> 작품별 대표 Issue 하나

DESIGN_INDEX 원문 -> 모든 source span -> 모든 leaf 독립 구현 감사
        -> 실제 누락 leaf별 patch/검증/하위 PR
        -> 최대 5개씩 자동 병합 -> Section 대표 draft PR
```

Section 최종 상태는 결정적 집계기만 계산한다. 모든 자식이 PASS일 때만 부모가 PASS이며, 모델 응답 하나가 다른 leaf를 생략하거나 부모 상태를 덮어쓸 수 없다. 1차 보고서 결합은 byte 보존 assembler가 수행하고, 과거 revision의 원문과 hash를 수정하지 않는다.

## Provider 호출과 게시 안전성

논리 leaf 요청과 물리 HTTP 시도는 별도로 기록한다. 동일 leaf의 transport 재시도는 새 Requirement 감사가 아니지만 실제 provider rate limit을 소비하므로 매 시도마다 공용 시작 제한기를 거쳐야 한다.

```text
logical leaf request
  -> shared RPM start slot
  -> physical HTTP attempt
       -> success: schema 검사와 leaf 판정
       -> 429: shared Retry-After cooldown 갱신 -> shared RPM start slot부터 재시도
       -> network/5xx: bounded backoff -> shared RPM start slot부터 재시도
```

- 기본 transport 재시도 횟수는 `NVIDIA_MAX_RETRIES=8`이며 논리 leaf 독립 재시도 예산인 `PIPELINE_AUDIT_ATTEMPTS`와 구분한다.
- rate limiter는 최초 호출과 모든 transport 재시도를 합친 전체 물리 시작 횟수를 `NVIDIA_RPM_LIMIT` 이하로 직렬화한다.
- 429가 발생하면 현재 실행의 모든 worker가 가장 긴 활성 cooldown을 공유한다.
- transport 및 schema 재시도를 소진한 leaf는 `UNKNOWN`이다. Stage 1에 이런 leaf가 있으면 보고서 PR과 Issue를 생성하지 않으며, Stage 2에 있으면 code PR을 생성하지 않고 전체 workflow를 실패시킨다.
- Stage 1 게시가 시작된 뒤 GitHub mergeability 계산이 늦는 경우 child PR을 다시 조회하고 제한적으로 병합을 재시도한다. 최대 횟수를 소진하면 대표 PR이나 Issue를 만들지 않고 실패시킨다.

## V4 입력 계약

작품 하나의 실행 입력은 다음 다섯 묶음이다.

```text
DESIGN_INDEX_SPECIFICATION.md
trigger/DESIGN_INDEX_gdweb-<id>.md
trigger/request-contracts/<work>/...
trigger/evidence/<work>/...
frontend/**
```

- Specification은 1차 감사에서만 요구사항 원문으로 사용한다.
- `trigger/DESIGN_INDEX_gdweb-<id>.md`는 1차의 검사 대상이고 2차의 요구사항 원문이다.
- frontend는 2차의 검사 대상이며 1차 요청에는 절대 포함하지 않는다.
- Request Contract와 Evidence는 해당 작품과 해당 Section의 보조 근거로만 전달한다.
- trigger와 두 Specification은 읽기 전용이다. report PR과 code PR 어느 쪽도 이 파일을 수정할 수 없다.
- `## Page P-01`처럼 번호가 없는 같은 깊이의 페이지 heading은 `## 6. Page-by-Page Specifications`의 자식이다. 다음 `## 7.`처럼 1~19 번호가 붙은 heading만 다음 Section 경계다.

## V4 source span과 leaf 생성

Markdown parser는 원문을 실제 byte offset과 line으로 inventory한다.

```json
{
  "requirementId": "S06-IMPL-U0037-R001",
  "stage": "implementation",
  "sectionId": "S06",
  "sourcePath": "trigger/DESIGN_INDEX_gdweb-26357.md",
  "sourceKind": "section",
  "startOffset": 12345,
  "endOffset": 12411,
  "startLine": 271,
  "endLine": 271,
  "statement": "- Hero height: 674 px.",
  "sourceHash": "sha256:...",
  "fingerprint": "sha256:..."
}
```

결정 규칙:

1. heading, code fence marker, 표 구분선, thematic break와 공백은 구조 span으로 기록한다.
2. 문단 줄, 목록 항목, 표 데이터 행과 fenced code payload는 모두 leaf다.
3. 각 fragment의 첫 byte부터 마지막 byte까지 span이 연속되어야 한다.
4. `coveredBytes !== totalBytes` 또는 `uncoveredRanges.length > 0`이면 NVIDIA 호출 전에 실패한다.
5. 공통 Specification 전역 규칙은 작품 전체 DESIGN_INDEX와 한 번씩 비교하며 S01 root에 귀속한다. 이를 S01-S19마다 19번 중복 호출하지 않는다.
6. Specification의 번호 Section leaf는 같은 번호 DESIGN_INDEX Section과 비교한다.
7. DESIGN_INDEX의 번호 Section leaf는 같은 Section이 소유한 frontend source slice와 비교한다.
8. leaf fingerprint는 Section fingerprint, source path, source hash와 validator contract hash에 의해 결정된다.

## 1차 문서 감사 입력과 출력

1차의 모델 요청 하나는 Specification leaf 하나만 소유한다.

```json
{
  "task": "stage-1-audit-one-atomic-specification-leaf-for-document-completeness",
  "ownedRequirementId": "S06-DOC-U0012-R001",
  "specificationLeaf": "원문 한 항목",
  "designIndexBoundary": "같은 Section 또는 전역 규칙이면 작품 전체 문서",
  "sourceCodeIncluded": false,
  "includeContext": "none"
}
```

허용 출력은 다음뿐이다.

```text
PASS
DOCUMENT_GAP
BLOCKED_MISSING_EVIDENCE
BLOCKED_CONTRACT_CONFLICT
UNKNOWN
```

- 모델은 다른 leaf를 발견하거나 같이 보고하면 안 된다.
- finding의 Requirement ID는 소유 leaf ID와 같아야 한다.
- 값, 색상, 좌표, 폰트와 breakpoint를 추측해 제안하면 안 된다.
- frontend 파일명, 소스 코드와 diff를 출력하면 안 된다.
- `UNKNOWN`은 최소 5회의 같은 leaf 독립 재시도 뒤에도 해소되지 않으면 실행 실패다.

### 1차 bottom-up 집계

```text
leaf outputs -> Section aggregate -> work aggregate
```

- 모든 leaf가 PASS일 때만 Section이 PASS다.
- `DOCUMENT_GAP` leaf 하나라도 있으면 Section은 DOCUMENT_GAP이다.
- `BLOCKED_*` 또는 `UNKNOWN`은 더 높은 실패 우선순위로 보존한다.
- 모델에게 child 결과를 다시 주고 요약시키지 않는다.
- 집계기는 child 수, PASS 수, 각 Requirement ID와 상태를 기계적으로 기록한다.

### 1차 report PR 트리

Section 비-PASS 결과가 14개인 예시는 다음과 같다.

```text
report-root branch
  batch 1: S01 -> S02 -> S03 -> S04 -> S05
           S05부터 S01까지 deepest-first 자동 병합
  batch 2: S06 -> S07 -> S08 -> S09 -> S10
           S10부터 S06까지 deepest-first 자동 병합
  batch 3: S11 -> S12 -> S13 -> S14 -> DOCUMENT-GAPS
           DOCUMENT-GAPS부터 S11까지 deepest-first 자동 병합
  final: report-root -> main draft PR 1개
```

- Section report child PR 하나는 `reports/document-gaps/<target>/<hash>/sections/SXX.md` 하나만 추가한다.
- `DOCUMENT-GAPS` child는 `DOCUMENT_GAPS.md`와 `manifest.json`을 추가한다.
- child PR은 최대 5개씩 자동 병합하고 child branch를 삭제한다.
- 대표 report draft PR은 자동 병합하지 않는다.
- `DOCUMENT_GAPS.md`는 Section report bytes를 Section 번호순으로 BEGIN/END marker 사이에 그대로 이어 붙인다.
- Section report는 검증된 normalized JSON을 그대로 담고 원문 hash와 byte length를 기록한다.
- 대표 Issue는 작품당 하나만 연다. 본문 한도를 넘으면 최대 55,000 UTF-8 byte 단위 댓글로 나누며 댓글 payload를 순서대로 연결하면 원본 `DOCUMENT_GAPS.md`가 복원되어야 한다.
- 기존 V3 Section Issue는 본문을 바꾸지 않는다. 대표 Issue에 기존 본문을 verbatim block으로 복제하고 hash를 남긴 뒤, 기존 Issue에 대표 Issue 포인터 댓글을 추가하고 닫는다.

## 2차 구현 감사 입력과 출력

2차의 primary 모델 요청 하나는 DESIGN_INDEX leaf 하나만 소유한다.

```json
{
  "task": "stage-2-audit-one-atomic-design-index-leaf-against-implementation",
  "ownedRequirementId": "S09-IMPL-U0041-R001",
  "designIndexLeaf": "--color-primary: #4169F5",
  "implementation": ["해당 Section 소유 source slice"],
  "specificationTextIncluded": false,
  "includeContext": "none"
}
```

허용 출력은 다음뿐이다.

```text
PASS
PATCH_REQUIRED
BLOCKED_MISSING_EVIDENCE
BLOCKED_CONTRACT_CONFLICT
UNKNOWN
```

- 정확한 leaf 값 또는 동작이 코드에 없거나 틀릴 때만 `PATCH_REQUIRED`다.
- DESIGN_INDEX 자체에 값이 없으면 code patch로 만들지 않는다.
- 현재 코드가 동등한 방식으로 이미 충족하면 PASS다.
- `implementationRefs`는 실제 repository-relative path만 허용한다.
- 모든 primary leaf가 판정된 뒤에만 Section 상태를 집계한다.

## 2차 재귀 patch와 PR

Section aggregate가 여러 finding을 가지면 각 Requirement를 다시 leaf 원문에 연결한다.

```text
S09 aggregate
  S09-1: S09-IMPL-U0041-R001
  S09-2: S09-IMPL-U0062-R001
  S09-3: S09-IMPL-U0062-R001-02
```

각 하위 노드의 순서:

```text
현재 누적 parent source 재구성
-> 같은 leaf 하나의 독립 preflight
-> 이미 구현됨: AUDIT_RECLASSIFIED, PR 없음
-> 실제 누락: 같은 leaf와 관련 파일만 patch API로 전달
-> unified diff guard
-> typecheck/unit/Playwright/accessibility
-> 같은 leaf patched-code re-audit
-> 기존 PASS Section regression audit
-> 검증된 child PR
```

- preflight와 patch 생성에 Section 전체 DESIGN_INDEX를 다시 전달하지 않는다.
- 한 leaf 응답에 여러 독립 finding이 있으면 `...-01`, `...-02`로 재귀 분할해 각각 호출한다.
- 한 Requirement 실패가 뒤 Requirement 호출을 막지 않는다.
- 실제 diff가 19개 Section 모두에서 나오면 Section 대표 PR도 19개가 남아야 한다.
- 같은 파일을 연속 수정하면 직전 child commit에서 source slice와 fingerprint를 다시 계산한다.
- 하위 code PR 역시 최대 5개씩 deepest-first Section branch로 자동 병합한다.
- 최종 Section 대표 draft PR만 사람이 병합하거나 거부한다.

## PASS cache와 재실행

정적 PASS 재사용 키에는 최소 다음 값이 들어간다.

```text
stage
target ID
Section ID
Section fingerprint
leaf inventory hash
Specification 또는 DESIGN_INDEX source hash
implementation file hashes
Evidence/Request Contract hashes
model contract hash
validator contract hash
```

- fingerprint가 완전히 같고 이전 Section의 모든 leaf PASS 증명이 있을 때만 Section 전체를 `CACHED_PASS`로 재사용한다.
- Specification 내용이 바뀌면 해당 source hash와 inventory hash가 바뀌므로 1차를 다시 실행한다.
- DESIGN_INDEX가 바뀌면 1차와 2차를 모두 새 leaf 목록으로 실행한다.
- frontend만 바뀌면 1차 PASS는 재사용할 수 있고 영향 Section의 2차만 다시 실행할 수 있다.
- 이전 PASS 증명서가 V4 leaf coverage를 증명하지 못하면 재사용하지 않는다.
- 변경되지 않은 PASS leaf를 정적으로 표시할 수 있지만, 미검사 leaf를 PASS로 간주할 수 없다.

## 실행 완료 조건

다음 조건을 모두 만족해야 workflow가 성공이다.

1. S01-S19 구조가 각각 정확히 한 번 존재한다.
2. 모든 source byte가 structural span 또는 leaf에 귀속된다.
3. 실행 대상으로 선택된 모든 leaf가 API 결과 또는 유효한 V4 PASS cache를 가진다.
4. `UNKNOWN` leaf가 없다.
5. 1차 비-PASS Section이 있으면 Section report child PR, 대표 report PR과 대표 Issue 게시가 완전하다.
6. 2차 `PATCH_REQUIRED` Requirement는 전부 preflight를 받는다.
7. 실제 누락으로 확정된 Requirement는 검증된 diff PR을 가지며, 실패 항목이 있으면 workflow가 실패한다.
8. 모든 child PR은 최대 5개 묶음으로 상위 branch에 정리되고 최종 대표 PR만 열린다.
9. trigger와 Specification diff가 0이다.
10. artifact에 inventory, leaf input/output, request ID, retry, aggregate, report hash, patch guard와 PR manifest가 모두 존재한다.

## 현재 예시 작품의 동적 요청 수

`trigger/DESIGN_INDEX_gdweb-26357.md`와 현재 Specification을 V4 parser로 계산한 값은 다음과 같다.

```text
1차 Specification leaf: 327
2차 DESIGN_INDEX leaf: 761
최소 primary 요청: 1,088
40 RPM 이론상 최소 전송 시간: 약 27.2분
```

이는 고정 계약 수치가 아니다. 문서 내용이 늘거나 줄면 leaf와 요청 수도 자동으로 바뀐다. 재시도, preflight, patch, patched-code re-audit와 regression audit는 1,088회에 추가된다.

## V3 보존 기록 (비규범)

## V3 전체 실행 구조

```text
DESIGN_INDEX + Evidence + Request Contract + frontend 소스 push
        |
        +-> 입력 해시와 S01-S19 Section 분리
        |
        +-> 1차 문서 감사: NVIDIA 독립 요청 19개
        |       |
        |       +-> 문서 누락 -> Section별 GitHub Issue
        |
        +-> 2차 구현 감사: NVIDIA 독립 요청 19개
                |
                +-> PASS -> 정적 PASS 증명서
                |
                +-> PATCH_REQUIRED
                        |
                        +-> Requirement ID별 SXX-1, SXX-2... 재귀 분할
                        +-> Requirement별 독립 preflight와 patch API 호출
                        +-> 최소 diff, guard, test, 재감사, 회귀 검사
                        +-> 검증된 Requirement별 하위 PR
                        +-> 최대 5개씩 deepest-first 자동 병합
                        +-> 하위 PR/branch 정리
                        +-> S0x 대표 draft PR 하나 유지
                        +-> 사용자가 대표 PR 병합 여부 결정
```

`5개씩 묶기`는 모델 요청을 합친다는 뜻이 아니다. Requirement가 40개면 독립 preflight와 patch 호출은 최소 40개이며, 검증된 하위 PR을 정리하는 Git 단계만 `5 + 5 + ...`로 묶는다. 하위 PR 체인이 더 깊어져도 항상 leaf에서 root 방향으로 재귀 병합한다. `PIPELINE_PR_MERGE_BATCH_SIZE` 기본값은 `5`, 허용 범위는 `1~10`이다.

## 결론

이 아이디어는 다음 구조로 구현하는 것이 가장 안전하다.

1. Specification의 19개 영역을 `S01`부터 `S19`까지 독립 노드로 만든다.
2. 최초 전체 검증 또는 강제 전체 검증은 1차 문서 감사 19번과 2차 구현 감사 19번, 총 38개의 NVIDIA primary 요청을 호출한다. 각 Stage의 S01 요청부터 S19 요청까지 한 요청이 한 Section만 담당한다.
3. 각 Stage와 노드는 별도의 NVIDIA stateless 요청, 입력 JSON, 출력 JSON, request ID와 로그를 사용한다. 1차에는 소스코드가 없고 2차에는 Specification 본문이 없다.
4. 하나의 NVIDIA 요청이나 하나의 통합 LLM이 S01-S19 전체를 읽고 19개 결과를 한꺼번에 반환하는 방식은 금지한다.
5. 두 audit fan-out은 DAG 선행 상태와 무관하게 실행한다. 전체 검증에서는 1차 결과가 문서 누락이어도 2차를 포함해 S01-S19의 38개 primary 호출을 모두 완료한다. 단 provider 자체가 호출 불가능한 경우에는 실패를 기록한다.
6. DAG 의존성과 write-set은 patch 적용 순서와 stacked PR의 부모 branch를 정하는 데만 사용하며, patch 요청이나 PR 생성 여부를 결정하는 gate로 사용하지 않는다.
7. 선행 노드의 자연어 응답은 후행 노드에 전달하지 않는다. patch scheduler는 서명된 상태와 공개 출력 해시만 읽는다.
8. 기존 PASS 증명서의 fingerprint가 현재 입력 fingerprint와 같으면 API를 호출하지 않고 `CACHED_PASS`로 종료한다.
9. `PASS`인 노드는 PR을 만들지 않는다. 정적 PASS 증명서만 `validation-state` 브랜치에 기록한다.
10. `PATCH_REQUIRED`인 노드만 별도의 NVIDIA patch 요청으로 최소 unified diff를 생성한다. `SXX-1`, `SXX-2` 각 하위 노드는 Requirement ID 하나만 입력받는 별도 세션이다. 모델 입력과 diff 생성은 절대 합치지 않으며, PR 정리 단계에서만 검증 완료된 하위 PR을 최대 5개씩 Section 브랜치로 합친다.
11. diff가 허용 파일, 기준 해시, 변경 범위, 테스트와 회귀 검사를 모두 통과한 경우 해당 하위 PR을 반드시 만든다. 한 묶음의 첫 하위 PR은 Section 브랜치를, 뒤쪽 하위 PR은 직전 하위 branch를 base로 사용한다. 묶음 완료 후 가장 깊은 자식부터 병합해 Section 브랜치를 갱신한다.
12. 모든 `PATCH_REQUIRED` Section은 topological order로 직렬화한다. 병렬화 최적화는 전체 correction PR 생성 보장이 검증된 이후에만 허용하며 기본 구현에는 사용하지 않는다.
13. 같은 파일을 수정하거나 의존 관계가 있어도 차단하지 않는다. 직전 검증 commit에서 source slice와 fingerprint를 다시 계산한 뒤 그 부모 위에 다음 PR을 쌓는다.
14. 자동 병합은 이번 실행에서 전체 검증을 통과한 하위 PR을 자기 Section 브랜치 방향으로 정리할 때만 허용한다. Section 대표 PR은 최신 부모 기준 검증 대상이며 `main`이나 이전 Section 대표 브랜치로 자동 병합하지 않는다.
15. 모든 비-PASS 결과는 사라지지 않는다. 1차 `DOCUMENT_GAP`은 Section별 Issue로 게시한다. 2차 `PATCH_REQUIRED`는 각 하위 노드에 배정된 finding을 구현하고 검증한 code diff PR로 게시하며, 아직 남은 finding은 다음 하위 노드로 전달한다. 2차 patch chain 하나라도 완성하지 못하면 workflow 전체를 실패 처리한다.
16. 어느 Stage든 독립 재시도를 소진한 뒤 `UNKNOWN`이면 전체 실행을 성공 처리하지 않는다. 모델이 직접 `UNKNOWN`을 반환했는지 schema quarantine warning이 붙었는지와 무관하게 미판정으로 기록하고 workflow를 실패 처리한다.
17. S18에서 정확한 acceptance behavior가 있지만 테스트 파일만 없다는 `BLOCKED_MISSING_EVIDENCE` 응답은 차단으로 두지 않는다. 소유 경로 `frontend/tests/**`의 결정적 파일 경로를 배정해 `PATCH_REQUIRED`로 승격하고 Requirement별 하위 PR로 재귀 처리한다.
18. Section 전체 patch-scope의 제외 항목 하나가 다른 Requirement의 patch·PR 생성을 중단할 수 없다. 2차의 모든 고유 Requirement ID는 현재 누적 부모 소스로 독립 preflight를 받고, PATCH_REQUIRED가 확정된 항목만 자기 child patch로 진행한다.
19. patch 후보들이 `BLOCKED_AUDIT_CONFLICT`로 소진되면 동일 patch 모델의 주장만으로 항목을 닫지 않는다. 별도 NVIDIA conflict preflight가 현재 누적 부모 소스를 다시 검사해 PASS일 때만 `AUDIT_RECLASSIFIED`로 기록하고 다음 Requirement로 진행한다.
20. 동일 Stage·Section의 독립 audit 최대 시도 횟수는 최소 5회다. 환경변수에 더 작은 값을 넣어도 5회 미만으로 낮아지지 않으며, 모든 시도 뒤에도 UNKNOWN이면 workflow를 실패 처리한다.
21. 2차에서 19개 Section이 모두 실제 코드 누락이면 S01-S19 대표 correction PR 19개가 같은 실행에서 남아야 한다. 한 Section에 현재 소스에서도 누락으로 확정된 고유 Requirement ID가 N개면 N개의 독립 하위 patch 호출과 N개의 일시적 stacked PR을 `SXX-1`부터 `SXX-N`까지 생성한다. patch 후보 재시도와 patch 재감사는 각 하위 노드의 추가 독립 호출이며 다른 Requirement ID와 합치지 않는다. 검증된 하위 PR은 최대 5개씩 자동 병합해 대표 PR 하나로 정리한다.
22. `UNKNOWN` 상태, `UNKNOWN` finding, `UNKNOWN`을 포함한 placeholder Requirement ID는 patch 후보나 PR 큐에 절대 넣지 않는다. 같은 Stage·Section만 새 request ID와 seed로 독립 재시도하고, 최소 5회 뒤에도 안정적인 Requirement ID와 `MISSING` 판정을 얻지 못하면 해당 실행을 실패 처리한다. 이 실패가 다른 Section이나 다른 Requirement ID의 patch 호출 및 PR 생성을 생략하는 조건이 되어서는 안 된다.
23. 한 Requirement의 preflight, patch 후보, test, re-audit 또는 PR 게시가 최종 실패해도 같은 Section의 뒤쪽 Requirement ID를 건너뛰지 않는다. 실패 ID만 unresolved로 기록하고 변경되지 않은 마지막 검증 parent에서 다음 `SXX-N`을 계속 호출한다. 따라서 한 Section에 고유 Requirement ID가 40개면 앞선 일부가 실패하더라도 40개 모두 독립 preflight를 받아야 하며, 검증된 항목의 하위 PR들은 5개씩 정리되어 Section 대표 PR에 누적된다.
24. 모델이 근거 있는 finding을 반환했지만 Requirement ID에 할당 Section 접두사를 빠뜨린 경우 판단 전체를 UNKNOWN으로 폐기하지 않는다. 오케스트레이터가 `SXX-<원본 ID>`로 결정적으로 소유권을 보정한 뒤 같은 finding과 status를 보존한다. 이 보정은 다른 Section으로 이동하거나 여러 finding을 합치는 작업이 아니며, 빈 ID와 `UNKNOWN` placeholder는 기존 격리 규칙을 따른다.
25. 2차 감사가 허용된 새 frontend 텍스트 파일 경로를 정확히 지목하면 preflight, patch 요청과 저장 artifact 모두 그 경로를 `0 byte` 빈 기준 파일로 전달한다. 모델이 `writeSet` 메타데이터를 빠뜨려도 감사 finding이 지목한 동일 경로의 실제 diff는 허용 경로·확장자·변경량 검사를 통과할 수 있어야 한다.
26. 1차가 `DOCUMENT_GAP`이고 2차 finding에도 코드에 넣을 정확한 값이나 Evidence가 없으며 기존 파일 위치만 지목된 경우, patch 후보를 모두 소진한 항목은 코드 누락으로 꾸며 PR을 만들지 않는다. 해당 항목은 같은 Section의 1차 Issue가 소유한다. 단, 정확한 acceptance behavior로부터 새 테스트 파일을 만들 수 있는 경우에는 이 규칙으로 재분류하지 않고 2차 코드 correction을 계속한다.
27. 모델이 실제 추가 코드와 원본의 연속 문맥을 작성했지만 unified diff의 `+` 표식만 빠뜨린 경우, 오케스트레이터는 원본 파일에서 정확히 한 번만 일치하는 연속 anchor를 찾았을 때에만 나머지 모델 작성 줄의 추가 표식을 기계적으로 복원할 수 있다. 전체 hunk가 원본과 같거나 anchor가 없거나 둘 이상이면 복원하지 않고 후보를 거부한다. 이 복원은 모델이 작성하지 않은 코드나 값을 새로 만드는 작업이 아니다.
28. patch 후보 하나가 `BLOCKED_AUDIT_CONFLICT`를 반환하면 마지막 patch 시도까지 기다리거나 뒤의 형식 오류 후보로 그 주장을 덮어쓰지 않는다. 해당 finding, 현재 전체 focused source와 충돌 사유만 받는 별도의 NVIDIA conflict arbiter를 즉시 호출한다. arbiter가 semantic CSS 조합, 계산식, media query 또는 동등 구현을 확인해 `PASS`한 경우에만 `AUDIT_RECLASSIFIED`로 종료하고, 그렇지 않으면 남은 독립 patch 후보를 계속 호출한다.
29. patch 입력에는 finding의 selector, component ID와 `1024px` 같은 수치가 일치한 물리 줄뿐 아니라 앞뒤의 정확한 source window를 함께 제공한다. 누락된 CSS custom property가 소스에 한 번도 등장하지 않으면 같은 property family를 찾고, family도 없으면 정확한 `:root` 선언 블록을 삽입 문맥으로 제공한다. 모델이 context가 없는 unified diff를 반환해도 선언된 base hash가 현재 파일과 완전히 같을 때만 `--unidiff-zero` 검사와 적용을 허용하며, 이후 해당 Requirement 재감사와 기존 PASS 회귀 검사를 생략하지 않는다. 이 기계적 적용 허용은 잘못된 media query나 selector 변경을 PASS로 간주하는 규칙이 아니다.
30. deepest-first 하위 PR 병합으로 부모 PR의 head branch가 갱신되면 GitHub가 다음 PR의 mergeability를 비동기로 다시 계산할 수 있다. 오케스트레이터는 매 단계 최신 PR head SHA와 base shape를 다시 읽고, `Base branch was modified` 재계산 경합만 최대 8회 제한 재시도한다. 실제 merge conflict, 자동화 트리 밖 branch 또는 `main` 대상 병합은 재시도하지 않고 실패한다. 이 GitHub 정리 재시도는 NVIDIA 호출을 합치거나 생략하지 않는다.
31. README, 일반 문서, 스크린샷 또는 workflow 설명처럼 감사 입력·frontend 구현·validator 계약을 바꾸지 않는 push는 이 workflow를 시작하지 않는다. GitHub `paths` 경계는 `trigger/**`, 두 Specification, `frontend/**`, `validation/src/**`, `validation/schemas/**`, impact manifest와 실행 package 설정만 허용한다. 무관한 문서 push로 1차·2차 NVIDIA 호출, 기존 Issue 갱신, 새 하위 PR 또는 새 Section 대표 PR을 만드는 것은 금지한다.

`19개 항목`은 상위 검증 격리 단위이지 API 호출이나 일시적인 하위 PR 생성 이력의 상한이 아니다. 한 실행에서 17개가 PASS이고 2개가 누락되었더라도 각 누락 범위가 크면 두 Section 아래에 여러 하위 patch 요청과 stacked PR이 생긴다. 정리 완료 후 열린 검토 PR은 해당 두 Section의 대표 PR 두 개다.

### 고정된 2단계 감사 계약

| Stage | 독립 요청 수 | 비교 입력 | 명시적으로 제외되는 입력 | 출력의 용도 |
| --- | ---: | --- | --- | --- |
| 1차 `document-audit` | S01-S19, 19개 | 현재 Specification 전역 규칙 + 같은 번호 Specification Section + 같은 번호 DESIGN_INDEX Section + 해당 Evidence/Request Contract | frontend 소스코드, 다른 Section, 다른 Stage 응답 본문 | DESIGN_INDEX에 지침이 빠졌는지 보고. 문서와 코드를 수정하지 않음 |
| 2차 `implementation-audit` | S01-S19, 19개 | 같은 번호 DESIGN_INDEX Section + 같은 번호 1차 결과 fingerprint/output digest + 해당 Evidence + 소유 source slice | Specification 본문, 다른 Section, 다른 Stage의 finding 자연어 | DESIGN_INDEX 대비 코드 누락을 판정. 정확한 근거가 있는 `PATCH_REQUIRED`만 patch 후보로 전달 |

최초·강제 전체 실행의 최소 primary 호출 수는 `19 + 19 = 38`이다. patch 후보, patched-code re-audit, 기존 PASS 회귀 audit와 같은-Stage 재시도는 이 38개 이후의 추가 호출이며 별도로 집계한다. 1차 결과 19개를 하나의 LLM에 합쳐 다시 판단하지 않고, 결정적 오케스트레이터 코드가 같은 Section의 digest만 2차 lineage에 연결한다. 1차 `DOCUMENT_GAP`은 Section별 GitHub Issue로 게시하며 `trigger/DESIGN_INDEX_gdweb-*` 수정 PR이나 frontend 수정 PR을 만들 수 없다.

### 동적 하위 patch 노드 계약

- S01-S19는 항상 상위 감사 노드다. 하위 번호는 patch 단계에서만 만든다.
- 한 상위 Section의 첫 patch 요청은 `SXX-1`이며 정렬된 첫 번째 unresolved Requirement ID 하나와 그 항목의 파일 slice만 받는다.
- 각 하위 노드는 patch 생성 전에 같은 Requirement ID 하나와 현재 누적 부모 소스만 받는 독립 NVIDIA preflight를 수행한다. preflight가 `PATCH_REQUIRED`를 확정한 항목은 반드시 patch·검증·PR로 진행한다.
- preflight가 현재 소스에서 이미 충족된 거짓 양성을 `PASS`로 확인하거나 정확한 구현 원본이 없는 항목을 비-patch 상태로 재분류하면 `AUDIT_RECLASSIFIED` artifact를 남기고 PR을 만들지 않는다. 이는 대기·차단이 아니라 잘못된 상위 판정을 현재 소스로 정정한 최종 결과다.
- 1차 `DOCUMENT_GAP` 때문에 정확한 구현값이 문서에 존재하지 않는 항목은 독립 patch 후보를 모두 확인한 뒤 1차 Issue로 귀속한다. 모델이 값을 발명해 코드 PR을 만드는 것은 금지하지만, 이 항목 때문에 같은 Section의 뒤쪽 Requirement 처리를 중단해서도 안 된다.
- finding이 허용된 새 frontend 텍스트 파일을 요구하면 그 정확한 경로의 빈 파일을 preflight와 patch 입력에 제공한다. 새 파일이라는 이유만으로 `BLOCKED_MISSING_VALUE` 처리하지 않는다.
- 해당 Requirement ID를 완전히 구현하고 guard·test·재감사를 통과하면 그 diff만 `SXX-1` 하위 PR로 게시한다. 다른 Requirement ID의 변경을 같은 NVIDIA 응답이나 하위 PR에 넣지 않는다.
- 남은 Requirement ID가 있으면 게시된 `SXX-1` commit에서 입력과 fingerprint를 다시 계산해 다음 Requirement ID 하나만 담은 `SXX-2`를 호출한다. 이후에도 같은 규칙으로 재귀한다.
- 각 하위 노드는 자신에게 할당된 Requirement ID 하나를 완전히 해결해야 한다. 진전 없는 응답은 같은 하위 노드의 교체 후보로만 재시도한다.
- 하위 노드 수는 해당 Section의 고유 Requirement ID 수와 같다. 따라서 상위 감사는 19회여도 하위 patch 호출과 일시적 PR은 필요한 만큼 늘어난다.
- 한 Section 안에서는 최대 5개 하위 PR이 하나의 검증 사슬을 이룬다. 예: `S09-1 -> S09`, `S09-2 -> S09-1`, ..., `S09-5 -> S09-4`. 다섯 개가 완성되면 `S09-5`부터 `S09-1`까지 역순 병합해 `S09` 브랜치에 누적하고 하위 브랜치를 삭제한다. 다음 묶음은 갱신된 `S09`에서 시작한다.
- 모든 하위 묶음이 정리되면 `S09 -> main` 또는 `S10 -> S09` 형태의 Section 대표 draft PR을 만든다. Section 대표 PR끼리는 stacked 될 수 있지만 자동 병합하지 않는다.
- 하위 PR마다 고유 request ID, fingerprint, patch hash, branch, PR key와 manifest를 가진다. 이전 하위 PR의 자연어 응답은 다음 모델 입력에 넣지 않고 게시된 source state와 남은 Requirement ID만 사용한다.

## 저장소 역할 경계

| 저장소 | 역할 | 이 파이프라인이 할 수 있는 작업 |
| --- | --- | --- |
| `secret_mcp` | GDWEB 검색 결과를 작품별 독립 요청으로 분석하고 `DESIGN_INDEX`, Request Contract와 Evidence 묶음을 생성하는 upstream producer | 생성 결과를 읽어 입력 묶음으로 전달하는 것만 허용 |
| `secret_mcp_use` | 생성된 명세로 프론트엔드를 구현하고 19개 항목을 검증·보정하는 유일한 execution target | DAG 실행, NVIDIA API 호출, PASS 증명서 기록, 임시 branch, 코드 patch, 테스트와 PR 생성 |

강제 규칙:

- `secret_mcp`에는 검증 branch, `validation-state`, 자동 수정 commit 또는 PR을 만들지 않는다.
- `secret_mcp`의 소스 코드를 이 파이프라인의 구현 입력이나 patch 대상으로 전달하지 않는다.
- `secret_mcp`에서 전달받은 산출물은 content hash가 고정된 읽기 전용 입력으로 취급한다.
- `main`, `auto/<target>/<patch-node>/<fingerprint>`, `validation-state`와 모든 자동 PR은 `secret_mcp_use` 저장소에만 존재한다.
- 문서에서 별도 저장소 표기가 없는 `저장소`, `main`, `프론트엔드`, `target repository`는 모두 `secret_mcp_use`를 뜻한다.

## 실행 기준 명세서

이 파이프라인의 실제 구현 기준은 `secret_mcp_use/trigger/` 아래에 커밋된 작품별 `DESIGN_INDEX` 문서다.

현재 예시 target의 기준 문서:

```text
trigger/DESIGN_INDEX_gdweb-26357.md
```

문서별 역할은 다음과 같이 구분한다.

| 입력 | 역할 | 코드 patch 값의 출처가 될 수 있는가? |
| --- | --- | --- |
| `trigger/DESIGN_INDEX_gdweb-<id>.md` | 작품별 페이지, 좌표, 색상, 타이포그래피, 레이아웃, 반응형과 상호작용의 실행 계약 | 예. 코드에 넣을 실제 값의 최우선 출처 |
| `DESIGN_INDEX_SPECIFICATION.md` | 작품별 문서가 반드시 가져야 할 19개 구조와 검증 규칙 | 아니요. 필수 항목과 형식만 정의 |
| 작품별 Request Contract | 요청 경계, reference ID, Evidence 목록과 생성 조건 | 직접 값이 명시된 경우에만 보조 근거 |
| Evidence | trigger 문서의 측정값과 관찰값을 검증하는 원본 근거 | trigger와 일치할 때만 사용 |
| 현재 frontend 코드 | 명세와 비교할 실제 구현 상태 | 기대값이 아니라 검사 대상 |

### 기준 우선순위

1. 오케스트레이터는 공통 Specification으로 필수 Requirement ID와 입력 형식을 결정한다.
2. 각 Requirement의 기대값은 `trigger/DESIGN_INDEX_gdweb-<id>.md`의 같은 번호 Section에서 읽는다.
3. Evidence는 trigger 값의 출처와 신뢰 수준을 확인하는 데 사용한다.
4. frontend 코드는 기대값과 비교할 observed implementation으로만 읽는다.
5. 공통 Specification의 예시 수치나 다른 작품의 trigger 값은 현재 작품 patch에 사용할 수 없다.

Specification, trigger, Request Contract와 Evidence가 서로 충돌하면 어느 하나를 LLM이 임의로 선택하지 않는다. 해당 Requirement를 `BLOCKED_CONTRACT_CONFLICT`로 표시하고 PR을 만들지 않는다.

### S01-S19 추출 규칙

한 작품의 trigger 문서를 Markdown AST로 파싱해 다음처럼 정확히 19개의 입력 fragment를 만든다.

```text
S01 = trigger 문서의 "## 1. ..." 전체
S02 = trigger 문서의 "## 2. ..." 전체
...
S19 = trigger 문서의 "## 19. ..." 전체
```

각 Section의 모든 하위 heading, 표, code block과 페이지별 하위 내용은 해당 fragment에 포함한다. 다음 번호의 `## N.` heading이 시작되는 지점에서 fragment를 종료한다.

강제 규칙:

- trigger 문서 하나는 작품 하나만 나타낸다.
- 작품 하나당 1차 S01-S19 NVIDIA 문서 감사 19개와 2차 S01-S19 구현 감사 19개를 만든다.
- 여러 trigger 문서를 한 target이나 한 요청에 합치지 않는다.
- trigger 문서가 두 개면 작품별 run 두 개와 전체 검증 기준 76개의 독립 primary 요청으로 분리한다.
- 1~19번 중 하나가 없거나 중복되면 NVIDIA 호출 전에 `FAILED_TRIGGER_STRUCTURE`로 중단한다.
- 빠진 trigger Section을 공통 Specification 본문으로 대신 채우지 않는다.
- Section fragment가 비어 있으면 코드 patch를 만들지 않고 먼저 DESIGN_INDEX 문서 누락으로 보고한다.
- audit와 patch prompt에는 현재 Section의 trigger fragment만 전달한다.

### trigger 고정 manifest

모든 run은 분석한 trigger 파일과 hash를 고정한다.

```json
{
  "schemaVersion": "design-validation/trigger-source/v2",
  "repository": "yyeongjin/secret_mcp_use",
  "path": "trigger/DESIGN_INDEX_gdweb-26357.md",
  "referenceId": "gdweb-26357",
  "contentHash": "sha256:...",
  "specificationPath": "DESIGN_INDEX_SPECIFICATION.md",
  "specificationHash": "sha256:...",
  "sectionMap": {
    "S01": "heading:1",
    "S02": "heading:2",
    "S03": "heading:3",
    "S04": "heading:4",
    "S05": "heading:5",
    "S06": "heading:6",
    "S07": "heading:7",
    "S08": "heading:8",
    "S09": "heading:9",
    "S10": "heading:10",
    "S11": "heading:11",
    "S12": "heading:12",
    "S13": "heading:13",
    "S14": "heading:14",
    "S15": "heading:15",
    "S16": "heading:16",
    "S17": "heading:17",
    "S18": "heading:18",
    "S19": "heading:19"
  }
}
```

run 도중 trigger 파일 hash가 바뀌면 실행을 계속하지 않는다. 현재 run을 `STALE_TRIGGER`로 종료하고 새 hash로 S01-S19 입력을 다시 만든다.

### trigger 불변 입력 규칙

`trigger/DESIGN_INDEX_gdweb-*`는 이 파이프라인의 read-only input이다. 파이프라인은 어떤 단계에서도 이 경로를 생성, 수정, 삭제, rename, format 또는 자동 보정할 수 없다.

```yaml
immutableInputGlobs:
  - trigger/DESIGN_INDEX_gdweb-*.md

allowedWriteGlobs:
  - frontend/**
  - validation/**

forbiddenWriteGlobs:
  - trigger/**
  - DESIGN_INDEX_SPECIFICATION.md
  - DESIGN_INDEX_SPECIFICATION.ko.md
```

강제 규칙:

- `secret_mcp` 또는 사람이 trigger 파일을 `secret_mcp_use`에 넣는 행위는 upstream 입력 공급이다.
- 이 DAG 파이프라인의 GitHub token에는 trigger 경로를 수정하는 권한을 주지 않는다.
- 모든 NVIDIA patch output의 write-set에서 `trigger/**`를 무조건 거부한다.
- 자동 PR에 trigger 파일 diff가 한 줄이라도 있으면 PR 생성 전에 전체 patch를 폐기한다.
- trigger 구조나 내용에 누락이 있어도 이 파이프라인은 문서를 고치지 않는다.
- 문서 오류는 Requirement ID와 위치만 보고하고 새로운 입력 버전을 기다린다.
- trigger가 외부 commit으로 변경되면 기존 파일을 이어서 수정한 것으로 처리하지 않고 새로운 content hash의 불변 입력 버전으로 처리한다.

### trigger 유입 이벤트

다음 경로가 GitHub push에서 `added`, `modified` 또는 `renamed` target으로 감지되면 작품별 full audit를 시작한다.

```text
trigger/DESIGN_INDEX_gdweb-*.md
```

trigger 유입 이벤트는 부분 증분 검증을 사용하지 않는다.

```text
trigger file 1개 유입 또는 새 버전 -> 1차 19개 + 2차 19개 = 독립 NVIDIA primary 요청 38개
trigger file 2개 유입 또는 새 버전 -> 작품별 run 2개, 독립 NVIDIA primary 요청 총 76개
frontend code만 변경              -> 영향받은 Section만 증분 audit
```

trigger 문서에서 실제로 바뀐 줄이 S05뿐이어도 새 trigger content hash가 들어온 것이므로 S01-S19 전체를 다시 각각 호출한다. 이는 한 작품 명세서 전체를 하나의 versioned input contract로 취급하기 때문이다.

## 절대 규칙

### 요청 독립성

- 한 API 요청은 정확히 한 작품의 한 Section ID만 담당한다.
- 전체 검증은 `document-audit:S01-S19` 19개와 `implementation-audit:S01-S19` 19개, 총 38개의 primary 요청 ID를 가진다.
- 38개의 요청은 같은 NVIDIA model ID를 사용할 수 있지만 Stage, Section, request context, request ID, 응답, 임시 디렉터리와 로그는 완전히 분리한다.
- `audit:S01-S19`처럼 여러 Section을 나타내는 통합 request ID는 허용하지 않는다.
- 요청마다 새로운 stateless 세션을 사용한다.
- conversation ID, message history, response cache, 임시 작업공간을 재사용하지 않는다.
- 다른 Section의 Specification 본문, DESIGN_INDEX 본문, finding 자연어 문장과 diff를 입력에 넣지 않는다.
- audit 요청에는 선행 노드의 현재 응답을 전달하지 않는다.
- patch scheduler만 선행 상태의 `sectionId`, `status`, `publicDigest`, `attestationHash`를 읽는다.
- 각 Stage의 19개 결과를 하나의 LLM에 다시 넣어 병합하지 않는다. 병합과 Stage 연결은 코드가 수행한다.
- 한 요청의 입력 JSON에 다른 Section ID가 발견되면 NVIDIA를 호출하기 전에 실행을 실패시킨다.
- 한 응답의 `sectionId`가 요청 Section과 다르면 해당 응답을 폐기한다.

### 값 창작 금지

- 문서와 Evidence에 없는 색상, 폰트 크기, 좌표, 간격, breakpoint, 상태를 만들지 않는다.
- 누락 검출 단계는 누락 사실만 반환하며 수정값을 제안하지 않는다.
- patch 단계도 DESIGN_INDEX와 Evidence에 이미 존재하는 값만 사용할 수 있다.
- 근거가 없으면 `BLOCKED_MISSING_EVIDENCE`를 반환한다.

### PR 생성 금지 조건

다음 상태에서는 PR을 생성하지 않는다.

- `PASS`
- `CACHED_PASS`
- `BLOCKED_MISSING_EVIDENCE`
- `BLOCKED_CONTRACT_CONFLICT`
- `BLOCKED_PATCH_TOO_LARGE`
- `BLOCKED_IMMUTABLE_INPUT_WRITE`
- `FAILED_TRIGGER_STRUCTURE`
- `STALE_TRIGGER`
- `ERROR`
- diff가 비어 있는 경우
- 애플리케이션 코드 변경 없이 검증 기록만 있는 경우

PASS 기록을 남기기 위해 빈 PR이나 report-only PR을 만드는 방식은 사용하지 않는다.

1차의 `PR 없음`은 의도된 역할 분리다. `DOCUMENT_GAP`은 Issue로 게시하고 frontend PR을 만들지 않는다. 2차의 근거 있는 `PATCH_REQUIRED`는 선행 상태나 write-set 때문에 대기시키지 않고 즉시 직전 검증 branch 위에서 patch 후보를 호출한다. patch 거부, 불완전 diff 또는 검증 실패는 `PIPELINE_PATCH_ATTEMPTS`까지 같은 하위 노드의 독립 후보를 다시 호출한다. 모든 재시도가 끝난 뒤에도 완전한 correction PR chain을 만들 수 없으면 workflow를 실패 처리한다. 2차 결과를 Issue로 대체할 수 없다.

## 전체 아키텍처

```mermaid
flowchart TD
    Producer["secret_mcp: DESIGN_INDEX 입력 묶음 생성"] --> Trigger["외부 입력: secret_mcp_use/trigger에 작품별 명세서 유입"]
    Push["secret_mcp_use main push 또는 수동 실행"] --> Snapshot["입력 스냅샷과 영향 범위 계산"]
    Trigger --> Snapshot
    Snapshot --> DocFingerprint["1차 S01-S19 문서 fingerprint 계산"]
    DocFingerprint --> DocCache{"노드별 동일 문서 PASS 증명서가 있는가?"}
    DocCache -->|예| DocCached["해당 1차 노드는 CACHED_PASS"]
    DocCache -->|아니요| DocAudit["Specification 대 DESIGN_INDEX 독립 호출 19개"]
    DocCached --> DocMerge["코드가 1차 JSON을 결정적으로 병합"]
    DocAudit --> DocMerge
    DocMerge --> ImplFingerprint["같은 Section 1차 digest로 2차 fingerprint 계산"]
    ImplFingerprint --> ImplCache{"노드별 동일 구현 PASS 증명서가 있는가?"}
    ImplCache -->|예| Cached["해당 2차 노드는 CACHED_PASS"]
    ImplCache -->|아니요| Audit["DESIGN_INDEX 대 source 독립 호출 19개"]
    Audit --> Results["2차 S01-S19 개별 JSON 결과"]
    Cached --> Results
    Results --> Merge["코드가 2차 JSON을 결정적으로 병합"]
    Merge --> Verdict{"노드별 검사 결과"}
    Verdict -->|PASS| Attest["validation-state에 PASS 증명서 기록"]
    Verdict -->|BLOCKED| Check["Check와 artifact에 중단 사유 기록"]
    Verdict -->|PATCH_REQUIRED| StackOrder["DAG 순서와 직전 검증 PR base 선택"]
    StackOrder --> Patch["독립 NVIDIA 최소 diff 요청"]
    Patch --> Guard["해시, 소유권, write-set, git apply 검사"]
    Guard --> Verify["build, test, visual, 영향받은 PASS 회귀 검사"]
    Verify --> Safe{"모든 검사가 통과했는가?"}
    Safe -->|아니요| Check
    Safe -->|예| RebaseInput["게시 commit에서 다음 Section 입력/fingerprint 재생성"]
    RebaseInput --> PR["직전 검증 branch 대상 노드 전용 PR 생성"]
    PR --> Queue["merge queue에서 최신 main 재검증"]
    Queue --> Merge["병합"]
    Merge --> Attest
```

## Stage별 19개, 총 38개 NVIDIA primary 호출과 결정적 병합

### 전체 검증 모드

최초 실행, Specification 공통 규칙 변경, validator contract 변경 또는 사용자가 `forceFullAudit: true`를 지정한 실행은 cache와 관계없이 1차 19개와 2차 19개, 정확히 38개의 primary 요청을 만든다. 증분 실행에서는 Stage별 fingerprint와 PASS 증명서를 독립적으로 평가한다.

```text
document-audit:S01 -> NVIDIA request #01 -> nodes/S01/document-audit-output.json
document-audit:S02 -> NVIDIA request #02 -> nodes/S02/document-audit-output.json
...
document-audit:S19 -> NVIDIA request #19 -> nodes/S19/document-audit-output.json
implementation-audit:S01 -> NVIDIA request #20 -> nodes/S01/audit-output.json
...
implementation-audit:S19 -> NVIDIA request #38 -> nodes/S19/audit-output.json
```

이 38개 호출은 한 모델 응답을 논리적으로 나눈 것이 아니다. 실제 HTTP 요청 38개이며 요청마다 Stage와 Section 소유권이 다르다.

- `requestId`
- `sectionId`
- system prompt의 Section 소유권
- 1차: Specification fragment, DESIGN_INDEX fragment, Evidence subset. implementation slice 없음
- 2차: DESIGN_INDEX fragment, 같은 Section 1차 digest, Evidence subset, implementation slice. Specification 본문 없음
- response JSON 파일
- 실행 로그와 token usage

동일해야 하는 값은 schema 버전, target ID, run ID, 기준 commit처럼 실행을 식별하는 최소 metadata뿐이다.

### 증분 검증 모드

일반적인 code push에서는 먼저 S01-S19의 fingerprint를 코드로 계산한다. fingerprint는 LLM이 계산하거나 판단하지 않는다.

- 각 Stage fingerprint가 동일하고 해당 Stage의 유효한 PASS 증명서가 있으면 그 Stage·Section은 `CACHED_PASS`다.
- fingerprint가 달라진 Stage·Section은 각각 NVIDIA 요청 하나를 새로 호출한다.
- 직접 선행 노드의 `publicDigest`가 달라져 무효화된 후행 Section도 각각 별도 NVIDIA 요청을 호출한다.
- 두 Stage에서 각각 변경된 Section이 4개라면 최대 호출은 8개이며 어느 요청도 묶지 않는다.
- 전체 검증을 요구하면 Stage별 19개, 총 38개를 다시 각각 호출한다.

따라서 호출 규칙은 다음과 같다.

```text
fresh full audit       = 1차 19개 + 2차 19개 = 38개의 독립 primary 호출
forced full audit      = 1차 19개 + 2차 19개 = 38개의 독립 primary 호출
incremental audit      = Stage별 dirty Section 수만큼 독립 호출
patch generation       = PATCH_REQUIRED Section마다 SXX-N 하위 노드를 필요한 만큼 만들고, 하위 노드별 독립 후보 1~PIPELINE_PATCH_ATTEMPTS개
merge                  = LLM 호출 0개, 오케스트레이터 코드만 사용
```

### Stage별 19개 요청 manifest

```json
{
  "schemaVersion": "design-validation/document-audit-batch/v1",
  "stage": 1,
  "runId": "run-2026-08-20-001",
  "targetId": "yyeongjin-secret-mcp-use--gdweb-26357",
  "mode": "full",
  "triggerSource": {
    "path": "trigger/DESIGN_INDEX_gdweb-26357.md",
    "documentHash": "sha256:..."
  },
  "expectedSections": [
    "S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10",
    "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19"
  ],
  "requests": [
    {
      "requestId": "run-2026-08-20-001:document-audit:S01",
      "sectionId": "S01",
      "inputPath": "nodes/S01/document-audit-input.json",
      "outputPath": "nodes/S01/document-audit-output.json"
    },
    {
      "requestId": "run-2026-08-20-001:document-audit:S02",
      "sectionId": "S02",
      "inputPath": "nodes/S02/document-audit-input.json",
      "outputPath": "nodes/S02/document-audit-output.json"
    }
  ]
}
```

1차 `document-audit-batch-manifest.json`과 2차 `implementation-audit-batch-manifest.json`의 `requests` 배열은 각각 S01-S19의 19개 행을 가져야 한다. 2차 manifest는 `stage: 2`, `implementation-audit:Sxx`, `audit-input.json`, `audit-output.json`을 사용한다. full mode에서 어느 Stage든 한 행이 없거나 Section ID가 중복되면 해당 Stage API 호출을 시작하지 않는다.

### fan-out 실행 규칙

오케스트레이터는 다음 검사를 한 뒤 각 요청을 독립 queue item으로 보낸다.

1. S01-S19가 정확히 한 번씩 존재하는지 검사한다.
2. 1차 input에 담당 Section 이외의 Specification heading이 없고 source code 필드가 없는지 검사한다.
3. 두 Stage input에 다른 Section의 DESIGN_INDEX 본문이 없는지 검사한다.
4. 2차 input에 Specification 본문이 없고 같은 Section의 1차 output digest만 있는지 검사한다.
5. Evidence reference가 담당 Section allowlist에 포함되는지 검사한다.
6. 2차 implementation file이 담당 노드의 `allowedReadGlobs`에 포함되는지 검사한다.
7. request마다 빈 대화 기록과 새로운 client request ID를 할당한다.
8. rate limiter가 허용하는 범위에서 Stage 순서를 지키며 병렬 호출한다.

### fan-in 병합 규칙

각 Stage의 19개 응답을 합치는 `merge-audit-results`는 일반 프로그램이며 NVIDIA, Codex 또는 다른 LLM을 호출하지 않는다.

```ts
function mergeAuditResults(
  manifest: AuditBatchManifest,
  outputs: NodeAuditOutput[],
): AuditMatrix {
  assertExactSectionSet(manifest.expectedSections, outputs);
  outputs.forEach(validateNodeAuditSchema);
  outputs.forEach(assertRequestSectionMatchesOutput);
  outputs.forEach(assertRequirementOwnership);

  const ordered = outputs.sort(byNumericSectionId);
  const findings = deduplicateByRequirementId(ordered.flatMap((item) => item.findings));

  return {
    runId: manifest.runId,
    sections: ordered.map(toSectionVerdict),
    findings,
    summary: countStatuses(ordered),
  };
}
```

병합 산출물:

```text
audit-matrix.json   S01-S19의 상태와 응답 hash
gap-report.json     Requirement ID 기준 누락 목록
GAP_REPORT.md       고정 Markdown template로 만든 사람이 읽는 목록
batch-summary.json  PASS, PATCH_REQUIRED, BLOCKED, ERROR 개수
```

`GAP_REPORT.md` 문장을 자연스럽게 다듬기 위한 추가 LLM 호출도 금지한다. 자연어 표현이 조금 딱딱하더라도 각 Section 응답의 finding을 고정 template에 넣어 의미 변형을 막는다.

## 저장소와 상태 분리

아래 branch와 artifact는 모두 `secret_mcp_use`에만 만든다. 애플리케이션 코드와 검증 상태를 같은 브랜치에 섞지 않는다.

| 위치 | 역할 |
| --- | --- |
| `main` | DESIGN_INDEX와 프론트엔드 소스의 기준 브랜치 |
| `auto/<target>/<patch-node>/<fingerprint>` | 실제 코드 변경이 있는 `SXX-N` 하위 노드 전용 임시 branch |
| `validation-state` | PASS 증명서와 실행 기록만 저장하는 orphan branch |
| GitHub Actions artifact | 로그, screenshot, 원본 API 응답, 테스트 결과 저장 |
| GitHub Check | 현재 commit에서 노드별 PASS, CACHED_PASS, BLOCKED 상태 표시 |

`validation-state`에는 중앙의 가변 `current.json` 하나를 두지 않는다. 동시에 여러 노드가 완료되어도 같은 파일을 수정하지 않도록 fingerprint별 불변 파일을 추가한다.

```text
attestations/
└── <target-id>/
    ├── S01/<fingerprint>.json
    ├── S02/<fingerprint>.json
    └── ...
runs/
└── <run-id>/
    ├── run.json
    ├── graph.json
    └── summary.json
```

현재 입력의 fingerprint를 계산한 뒤 정확히 같은 경로의 증명서가 존재하는지를 확인하면 되므로 별도 mutable index가 필요 없다.

## 식별자와 fingerprint

### Target ID

```text
<repository-owner>-<repository-name>--<design-index-reference-id>
```

예:

```text
yyeongjin-secret-mcp-use--gdweb-26357
```

### Node fingerprint

각 노드의 fingerprint는 다음 canonical JSON을 RFC 8785 방식으로 정규화한 뒤 SHA-256으로 계산한다.

```json
{
  "schemaVersion": "design-validation/v2",
  "targetId": "yyeongjin-secret-mcp-use--gdweb-26357",
  "sectionId": "S12",
  "triggerPath": "trigger/DESIGN_INDEX_gdweb-26357.md",
  "triggerDocumentHash": "sha256:...",
  "specificationFragmentHash": "sha256:...",
  "designIndexFragmentHash": "sha256:...",
  "evidenceSubsetHash": "sha256:...",
  "implementationSliceHash": "sha256:...",
  "validatorConfigHash": "sha256:...",
  "modelContractHash": "sha256:..."
}
```

fingerprint에 전체 저장소 commit SHA를 직접 넣지 않는다. 무관한 README 수정만으로 19개 노드가 모두 무효화되는 것을 막기 위해 각 노드가 실제로 읽는 구현 조각의 해시만 넣는다.

audit fingerprint에는 선행 노드 응답을 넣지 않는다. 선행 상태는 PASS 증명서의 `dependencyAttestations`에서 별도로 비교한다. 이 분리 덕분에 full audit의 19개 요청이 서로의 응답을 기다리지 않고 독립적으로 실행될 수 있다.

### PASS 재사용 조건

다음 조건이 모두 참일 때만 `CACHED_PASS`로 재사용한다.

- 같은 `targetId`, `sectionId`, `fingerprint`의 PASS 증명서가 존재한다.
- 증명서의 schema와 validator 버전이 현재 허용 목록에 있다.
- 모든 직접 선행 노드가 현재 입력에서 PASS 또는 CACHED_PASS다.
- 선행 노드의 `publicDigest`가 증명서에 기록된 값과 같다.
- 증명서가 취소 목록에 포함되지 않았다.
- 수동 강제 재검증 플래그가 없다.

## 공통 입력 계약

모든 노드는 같은 envelope를 사용하되 `payload`만 Section별로 다르다.

```ts
interface NodeAuditInput<TPayload> {
  schemaVersion: 'design-validation/audit-input/v2';
  run: {
    runId: string;
    targetId: string;
    baseCommit: string;
    requestedAt: string;
  };
  node: {
    sectionId: SectionId;
    requirementIds: string[];
    fingerprint: `sha256:${string}`;
  };
  contract: {
    specificationVersion: string;
    specificationFragment: string;
    designIndexSource: {
      path: `trigger/DESIGN_INDEX_gdweb-${string}.md`;
      referenceId: `gdweb-${string}`;
      documentHash: `sha256:${string}`;
      sectionHeading: string;
    };
    designIndexFragment: string;
  };
  evidence: Array<{
    evidenceId: string;
    kind: 'image' | 'crop' | 'metadata' | 'measurement';
    contentHash: `sha256:${string}`;
    localRef: string;
    bounds?: { x: number; y: number; width: number; height: number };
  }>;
  implementation: {
    files: Array<{
      path: string;
      contentHash: `sha256:${string}`;
      content: string;
    }>;
    runtimeFacts: Record<string, unknown>;
  };
  policy: {
    allowedReadGlobs: string[];
    allowedWriteGlobs: string[];
    immutableInputGlobs: ['trigger/**'];
    forbiddenOperations: string[];
    maxChangedFiles: number;
    maxChangedLines: number;
  };
  payload: TPayload;
}
```

노드 입력 JSON에는 `implementation.files`에 선언되지 않은 저장소 파일을 넣지 않는다. LLM은 로컬 파일 시스템이나 GitHub 저장소에 직접 접근하지 않는다.

## 공통 누락 검사 출력 계약

```ts
interface NodeAuditOutput {
  schemaVersion: 'design-validation/audit-output/v2';
  sectionId: SectionId;
  fingerprint: `sha256:${string}`;
  status: 'PASS' | 'PATCH_REQUIRED' | 'BLOCKED_MISSING_EVIDENCE' | 'BLOCKED_CONTRACT_CONFLICT' | 'UNKNOWN';
  findings: Array<{
    requirementId: string;
    pageId: string | null;
    componentId: string | null;
    status: 'MISSING' | 'INSUFFICIENT_EVIDENCE' | 'UNKNOWN';
    finding: string;
    evidenceRefs: string[];
    implementationRefs: string[];
    proposedValue: null;
  }>;
  publicOutput: Record<string, string | number | boolean | string[] | null>;
}
```

규칙:

- `proposedValue`는 항상 `null`이다.
- `PASS`이면 `findings`는 빈 배열이다.
- `PATCH_REQUIRED`는 값이 DESIGN_INDEX 또는 Evidence에 이미 있고 코드에만 누락된 경우에만 사용한다.
- 문서에도 값이 없으면 `BLOCKED_MISSING_EVIDENCE` 또는 `UNKNOWN`이다.
- `publicOutput`은 후행 노드가 해시로 참조할 정규화된 기계 값만 포함한다. 자연어 finding과 diff는 포함하지 않는다.
- `implementationRefs`의 각 값은 `frontend/...` 또는 `validation/...` 형식의 정확한 저장소 상대 파일 경로다. selector, CSS 선언, 소스 조각, `path:line`, 컴포넌트 이름과 설명문은 허용하지 않는다.
- `PATCH_REQUIRED`의 모든 finding은 supplied writable file 경로 또는 `allowedWriteGlobs`가 허용하는 안전한 새 text file 경로를 하나 이상 가져야 한다. 경로를 특정할 수 없으면 patch 단계로 보내지 않는다.
- finding이 `DESIGN_INDEX`, Specification, contract 또는 source document 자체의 section·table·field·heading 누락을 설명하면 애플리케이션 patch로 바꾸지 않고 `BLOCKED_CONTRACT_CONFLICT`로 기록한다.
- source value가 `UNKNOWN`, `TBD`, `N/A`, unspecified, unavailable, 빈 값이거나 finding 스스로 `no value`라고 밝히면 `PATCH_REQUIRED`를 허용하지 않고 `BLOCKED_MISSING_EVIDENCE`로 기록한다. 이 상태에서 patch API를 반복 호출하지 않는다.
- 주석, marker, TODO, 문서 문자열, hidden metadata 또는 report file만 추가하는 diff는 실제 프론트엔드 구현이 아니므로 `COMMENT_ONLY_PATCH`로 전체 폐기한다. 유효한 애플리케이션 finding이면 같은 Section의 다음 독립 patch 후보를 요청하고, 계약 문서 누락이면 코드 후보 요청 자체를 하지 않는다.

## 공통 patch 입력과 출력 계약

누락 검사와 patch 생성은 같은 대화의 연속 메시지가 아니라 서로 다른 API 요청이다.

```ts
interface NodePatchInput<TPayload> {
  schemaVersion: 'design-validation/patch-input/v2';
  runId: string;
  targetId: string;
  sectionId: SectionId;
  fingerprint: `sha256:${string}`;
  baseCommit: string;
  findings: NodeAuditOutput['findings'];
  designIndexSource: NodeAuditInput<unknown>['contract']['designIndexSource'];
  specificationFragment: string;
  designIndexFragment: string;
  evidence: NodeAuditInput<unknown>['evidence'];
  files: NodeAuditInput<unknown>['implementation']['files'];
  allowedWriteGlobs: string[];
  payload: TPayload;
}

interface NodePatchOutput {
  schemaVersion: 'design-validation/patch-output/v2';
  sectionId: SectionId;
  fingerprint: `sha256:${string}`;
  status: 'PATCH' | 'BLOCKED_MISSING_VALUE' | 'BLOCKED_PATCH_TOO_LARGE' | 'BLOCKED_AUDIT_CONFLICT';
  requirementIds: string[];
  evidenceRefs: string[];
  readSet: Array<{ path: string; baseHash: `sha256:${string}` }>;
  writeSet: Array<{ path: string; baseHash: `sha256:${string}` }>;
  reason: string;
  diff: string;
}
```

모델의 patch 후보 응답은 `addressedRequirementIds`를 별도로 반환한다. `PATCH`일 때는 현재 하위 노드에 공급된 단일 Requirement ID를 실제 diff가 완전히 구현했을 때만 그 ID를 적고, 차단 상태에서는 빈 배열이어야 한다. orchestrator는 이 값을 `NodePatchOutput.requirementIds`로 정규화하며 알려지지 않은 ID, 할당되지 않은 추가 ID, 빈 수정 범위를 거부한다. 검증을 통과하면 해당 하위 PR로 게시한 뒤 다음 Requirement ID 하나를 새 하위 노드에 전달한다.

patch 응답은 추가 중심의 최소 unified diff여야 한다. 파일 삭제, 이동, 이름 변경, 전체 포맷, 무관한 리팩터링은 허용하지 않는다. 한 Section에 finding이 여러 개여도 각 후보는 할당된 Requirement ID 하나만 처리하고 완전히 구현해야 한다. 검증된 단일 항목 범위는 독립 하위 PR이 되고, 다음 요청은 그 부모 commit의 코드와 다음 ID 하나만 받는다.

patch 모델 하나가 supplied base code가 audit finding을 이미 충족한다고 판단해 `BLOCKED_AUDIT_CONFLICT`를 반환해도 audit의 근거 있는 누락을 취소하거나 해당 Section을 PASS로 바꿀 수 없다. `BLOCKED_AUDIT_CONFLICT`, `BLOCKED_MISSING_VALUE`, `BLOCKED_PATCH_TOO_LARGE`는 해당 후보의 실패 결과일 뿐이며, 오케스트레이터는 같은 격리 입력과 변경되지 않은 base에서 새 seed와 request ID를 가진 독립 patch 후보를 `PIPELINE_PATCH_ATTEMPTS`까지 호출한다. 후보를 모두 소진해도 검증된 diff를 만들지 못하면 Issue나 대기 상태로 돌리지 않고 전체 시도 기록을 Check와 불변 artifact에 남긴 뒤 workflow를 실패 처리한다. 이 실패는 다른 `PATCH_REQUIRED` Section의 API 호출과 PR 생성을 생략하는 조건으로 사용할 수 없다.

patch 적용 뒤에는 일반 완전성 audit를 다시 실행하지 않는다. 별도의 stateless 재검증 요청이 현재 하위 노드의 `addressedRequirementIds`, 해당 finding, 실제 diff, before/after 구현만 받아 각 주장 항목을 독립적으로 확인한다. 그 하위 노드가 주장한 항목이 after 코드에서 모두 충족될 때만 게시할 수 있다.

## 19개 DAG 노드

### 의존성 그래프

| 노드 | 이름 | 직접 선행 노드 |
| --- | --- | --- |
| S01 | 목표와 범위 | 없음 |
| S02 | 근거와 좌표계 | S01 |
| S03 | 사이트 맵과 라우트 | S01, S02 |
| S09 | 디자인 토큰과 색상 | S02 |
| S10 | 타이포그래피 | S02, S09 |
| S11 | 에셋과 아이콘 | S02, S03 |
| S15 | 데이터와 콘텐츠 | S01, S03 |
| S16 | 프론트엔드 구조 | S01, S03, S15 |
| S04 | 공통 애플리케이션 셸 | S03, S09, S16 |
| S05 | 내비게이션과 헤더 | S03, S04, S09, S10 |
| S06 | 페이지별 명세 | S02, S03, S04, S05, S09, S10, S11, S15 |
| S07 | 섹션과 레이아웃 | S04, S06, S09 |
| S08 | 컴포넌트 추상화 | S06, S07, S15, S16 |
| S12 | 반응형 동작 | S04, S05, S06, S07, S08, S09, S10, S11 |
| S13 | 상호작용과 모션 | S05, S08, S09, S12 |
| S14 | 접근성 | S05, S08, S10, S12, S13 |
| S17 | 구현 작업 그래프 | S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, S16 |
| S18 | 페이지별 인수 조건 | S05, S06, S09, S10, S11, S12, S13, S14 |
| S19 | 불확실성과 결정 | S01-S18 |

이 의존성은 patch와 PR 처리 순서 및 stacked base 선택만 위한 것이며 두 audit Stage의 호출이나 `PATCH_REQUIRED`의 PR 생성을 막지 않는다. 최초·강제 full audit는 1차와 2차에서 S01-S19를 각각 호출해 정확히 38개의 논리 primary 요청을 모두 실행한다. 재시도는 같은 Stage와 Section 안에서만 추가 호출로 집계하며 다른 Section 응답을 전달하지 않는다. 선행 노드가 비-PASS여도 후행 `PATCH_REQUIRED` 결과를 대기 상태로 바꾸지 않는다. topological order에서 먼저 검증된 correction branch를 부모로 사용해 모든 수정 Section의 하위 PR을 같은 실행에서 연다.

### S01 목표와 범위

**전용 입력 `payload`:**

```json
{
  "reference": { "id": "gdweb-26357", "title": "..." },
  "declaredPages": ["P-01"],
  "declaredRoutes": ["/"],
  "targetViewports": [1440, 1280, 1024, 768, 390, 360],
  "nonGoals": [],
  "replacementAssets": []
}
```

**구현 입력:** 앱 entrypoint, package manifest, route 목록, 배포 설정의 요약만 허용한다.

**출력 `publicOutput`:** `pageIds`, `routeIds`, `viewportIds`, `scopeDigest`, `outOfScopeItems`.

**자동 수정 범위:** 원칙적으로 validation-only다. 범위 자체가 모호하면 PR이 아니라 `BLOCKED_MISSING_EVIDENCE`로 종료한다.

### S02 근거와 좌표계

**전용 입력 `payload`:**

```json
{
  "evidenceManifest": [
    {
      "evidenceId": "E-D01",
      "sourceSize": [1920, 2675],
      "preparedSize": [1200, 1672],
      "crop": [0, 0, 1200, 1600],
      "scale": 0.625,
      "pageIds": ["P-01"]
    }
  ],
  "coordinateOrigins": ["source", "prepared", "crop", "css"]
}
```

**구현 입력:** 이미지 manifest, 실제 이미지 크기, hash, crop metadata만 허용한다.

**출력 `publicOutput`:** `evidenceIds`, `coordinateSystemDigest`, `pageEvidenceMap`, `unusableEvidenceIds`.

**자동 수정 범위:** frontend가 별도로 소유한 Evidence adapter metadata만 허용한다. `trigger/**`의 문서, 표와 Evidence manifest는 수정하지 않으며 원본 이미지 픽셀도 추정해서 바꾸지 않는다.

### S03 사이트 맵과 라우트

**전용 입력 `payload`:** `pages[]`에 `pageId`, `route`, `purpose`, `shellVariant`, `activeNavigation`, `evidenceRefs`, `desktopAvailable`, `mobileAvailable`를 넣는다.

**구현 입력:** router 설정, route entry, page module export, 정적 링크 대상만 허용한다.

**출력 `publicOutput`:** `routeMap`, `defaultRoute`, `pageModuleMap`, `missingRoutes`, `orphanRoutes`.

**자동 수정 범위:** route table과 비어 있는 page entry 생성. 보이지 않는 새 route 생성은 금지한다.

### S04 공통 애플리케이션 셸

**전용 입력 `payload`:** `viewportSurface`, `container`, `globalGutters`, `shellVariants`, `chrome`, `overlays`, `zIndexLayers`, `overflowRules`.

**구현 입력:** AppShell, root layout, global wrapper, 공통 surface 스타일만 허용한다.

**출력 `publicOutput`:** `shellVariantIds`, `containerContracts`, `globalLayerMap`, `shellComponentIds`.

**자동 수정 범위:** AppShell과 shell 전용 스타일. 페이지 내부 섹션 수정은 금지한다.

### S05 내비게이션과 헤더

**전용 입력 `payload`:** `desktopGeometry`, `mobileGeometry`, `orderedItems`, `routeTargets`, `stateMatrix`, `stickyMode`, `menuPanel`, `focusBehavior`.

**구현 입력:** header/navigation component, 해당 스타일, navigation test, DOM snapshot과 computed style만 허용한다.

**출력 `publicOutput`:** `navigationItems`, `navigationComponentIds`, `desktopBoundsDigest`, `mobileBoundsDigest`, `stateIds`.

**자동 수정 범위:** navigation 소유 파일. route 구현, page body, 전역 토큰 값 변경은 금지한다.

### S06 페이지별 명세

**전용 입력 `payload`:** 페이지마다 `pageId`, `route`, `canvas.desktop`, `canvas.mobile`, `orderedSections[]`, `entryPoints`, `activeNavigation`, `evidenceRefs`를 넣는다.

`orderedSections[]`의 필수 필드는 `sectionId`, `bounds`, `semanticRole`, `container`, `layout`, `spacing`, `alignment`, `surface`, `content`, `responsive`, `evidenceLevel`이다.

**구현 입력:** S06 요청 하나에 S06이 소유한 모든 Page ID의 page fragment를 넣되 다른 Section 본문은 넣지 않는다. full audit의 정확한 19호출 계약을 지키기 위해 S06 audit를 페이지 수만큼 추가 분할하지 않는다. 응답의 finding은 `pageId`로 분리한다.

**출력 `publicOutput`:** `pageSectionOrder`, `pageCanvasDigests`, `sectionIdsByPage`, `pageFanoutDigest`.

**자동 수정 범위:** 대상 Page ID의 section composition 파일만 허용한다. 공통 component 내부 수정은 S08에서 처리한다.

### S07 섹션과 레이아웃

**전용 입력 `payload`:** `sections[]`에 `sectionId`, `domHierarchy`, `layoutModel`, `tracks`, `flexRules`, `intrinsicSizing`, `aspectRatio`, `spacing`, `overflow`, `anchors`, `zIndex`, `viewportVariants`를 넣는다.

**구현 입력:** 대상 section DOM, section-scoped CSS, computed box tree와 screenshot crop만 허용한다.

**출력 `publicOutput`:** `layoutDigestBySection`, `sectionOwnerFiles`, `overflowExpectations`, `layoutDependencyMap`.

**자동 수정 범위:** section-scoped layout 파일. 토큰 원본값과 component API 변경은 금지한다.

### S08 컴포넌트 추상화

**전용 입력 `payload`:** `componentTree`, `components[]`의 `componentId`, `responsibility`, `props`, `variants`, `slots`, `state`, `events`, `dataDependencies`, `a11y`, `pageIds`, `sectionIds`.

**구현 입력:** component modules, types, 직접 test와 import graph만 허용한다.

**출력 `publicOutput`:** `componentIds`, `componentOwnership`, `componentDependencyMap`, `publicApiDigest`.

**자동 수정 범위:** 담당 component와 직접 test. 다른 component 이름 변경이나 공통화 리팩터링은 금지한다.

### S09 디자인 토큰과 색상

**전용 입력 `payload`:** `colors[]`, `spacing`, `dimensions`, `radii`, `borders`, `shadows`, `opacity`, `zIndex`, `breakpoints`, `containers`, `icons`, `motion`.

색상 항목은 `token`, `hex`, `rgb`, `hsl`, `alpha`, `role`, `pageIds`, `sectionIds`, `evidenceRefs`, `evidenceLevel`, `confidence`, `tolerance`를 모두 가진다.

**구현 입력:** token 파일, CSS custom properties, theme 설정과 computed variables만 허용한다.

**출력 `publicOutput`:** `tokenNames`, `tokenValueDigest`, `tokenConsumerMap`, `missingFormats`.

**자동 수정 범위:** token 소유 파일에 누락 선언 추가. 기존 값 교체는 직접 충돌이 입증된 경우만 허용한다.

### S10 타이포그래피

**전용 입력 `payload`:** `roles[]`에 `roleId`, `fontFamily`, `fallback`, `source`, `px`, `rem`, `weight`, `lineHeightPx`, `lineHeightUnitless`, `letterSpacing`, `case`, `decoration`, `alignment`, `maxWidth`, `wrapping`, `responsiveValues`를 넣는다.

**구현 입력:** font import, typography token, role class, computed typography snapshot만 허용한다.

**출력 `publicOutput`:** `typographyRoleIds`, `fontSourceDigest`, `typographyValueDigest`, `roleConsumerMap`.

**자동 수정 범위:** typography 소유 파일. 측정되지 않은 font metric 추정은 금지한다.

### S11 에셋과 아이콘

**전용 입력 `payload`:** `assets[]`에 `assetId`, `pageId`, `sectionId`, `role`, `evidenceCrop`, `displaySize`, `sourceAspectRatio`, `crop`, `focalPoint`, `objectFit`, `objectPosition`, `responsive`, `priority`, `format`, `altBehavior`, `replacementPolicy`를 넣는다.

**구현 입력:** asset manifest, public asset 경로, image component 호출부와 실제 파일 metadata만 허용한다.

**출력 `publicOutput`:** `assetIds`, `assetPathMap`, `assetUsageDigest`, `replacementRequiredIds`.

**자동 수정 범위:** manifest, 참조 경로, 명시된 대체 asset 연결. 새로운 저작권 이미지 생성은 별도 작업으로 둔다.

### S12 반응형 동작

**전용 입력 `payload`:** `viewports`는 최소 `1440`, `1280`, `1024`, `768`, `390`, `360`을 포함하고, `matrix[]`에 페이지와 component별 `container`, `gutter`, `columns`, `order`, `visibility`, `navigationMode`, `type`, `spacing`, `crop`, `touchTarget`, `transitionRule`, `overflow`를 넣는다.

**구현 입력:** responsive stylesheet, media/container query, viewport별 DOM snapshot, computed style, screenshot만 허용한다.

**출력 `publicOutput`:** `breakpointBehaviorDigest`, `viewportCoverage`, `responsiveOwnerFiles`, `overflowResults`.

**자동 수정 범위:** responsive 소유 파일. 기본 desktop 구조를 재작성하지 않는다.

### S13 상호작용과 모션

**전용 입력 `payload`:** `interactions[]`에 `interactionId`, `componentId`, `trigger`, `states`, `visualChange`, `color`, `opacity`, `transform`, `duration`, `easing`, `focus`, `keyboard`, `pointer`, `reducedMotion`을 넣는다.

**구현 입력:** event handler, state reducer, interaction style, 직접 test와 runtime trace만 허용한다.

**출력 `publicOutput`:** `interactionIds`, `stateTransitionDigest`, `reducedMotionCoverage`, `interactionOwnerFiles`.

**자동 수정 범위:** 대상 interaction handler와 state style. 데이터 모델 변경은 금지한다.

### S14 접근성

**전용 입력 `payload`:** `landmarks`, `headingOrder`, `skipLink`, `tabOrder`, `focusRing`, `labels`, `descriptions`, `altRules`, `liveRegions`, `errors`, `contrastTargets`, `reducedMotion`, `reflow`, `touchTargets`, `navigationSemantics`.

**구현 입력:** 접근성 관련 DOM 속성, focus code, axe 결과, keyboard trace와 computed contrast만 허용한다.

**출력 `publicOutput`:** `landmarkDigest`, `focusOrderDigest`, `a11yRuleResults`, `a11yOwnerFiles`.

**자동 수정 범위:** 명세에 정의된 semantic attribute와 focus 처리. 보이는 UI 구조를 임의로 바꾸지 않는다.

### S15 데이터와 콘텐츠

**전용 입력 `payload`:** `entities[]`, `fields`, `types`, `cardinality`, `optional`, `nullable`, `ordering`, `grouping`, `formatting`, `localization`, `loading`, `empty`, `error`, `success`, `fixtures`.

**구현 입력:** type/schema, fixture, loader와 상태별 renderer만 허용한다.

**출력 `publicOutput`:** `entityIds`, `schemaDigest`, `fixtureDigest`, `contentStateIds`.

**자동 수정 범위:** schema, fixture, 명시된 상태 처리. 외부 API 계약 변경은 금지한다.

### S16 프론트엔드 구조

**전용 입력 `payload`:** `routes`, `layouts`, `directoryPlan`, `pageModules`, `sharedModules`, `stylingStrategy`, `tokenFiles`, `assetOrganization`, `stateOwnership`, `serverClientBoundary`, `thirdPartyResponsibilities`.

**구현 입력:** module graph, directory tree, build 설정과 package manifest만 허용한다.

**출력 `publicOutput`:** `moduleBoundaryDigest`, `ownershipMap`, `frameworkBoundary`, `architectureViolations`.

**자동 수정 범위:** 기본은 validation-only다. 광범위한 파일 이동과 구조 변경은 자동 patch가 아니라 수동 architecture 작업으로 차단한다.

### S17 구현 작업 그래프

**전용 입력 `payload`:** `tasks[]`에 `taskId`, `dependsOn`, `inputs`, `outputs`, `pageIds`, `sectionIds`, `componentIds`, `doneConditions`, `parallelGroup`을 넣는다.

**구현 입력:** 현재 Requirement 상태와 기계 판독 가능한 구현 manifest만 허용한다.

**출력 `publicOutput`:** `taskIds`, `taskGraphDigest`, `unresolvedTaskIds`, `parallelGroups`.

**자동 수정 범위:** validation-only다. 작업 그래프 누락을 이유로 애플리케이션 코드를 직접 고치지 않는다.

### S18 페이지별 인수 조건

**전용 입력 `payload`:** 페이지마다 `viewports`, `sectionBoundsTolerance`, `containerAlignment`, `navigationGeometry`, `colorDeltaE`, `typographyMetrics`, `overflow`, `assetCrop`, `keyboard`, `responsiveStates`, `performance`를 넣는다.

**구현 입력:** test config, Playwright spec, screenshot diff metadata와 실행 결과만 허용한다.

**출력 `publicOutput`:** `acceptanceIds`, `testCoverageDigest`, `pageVerdicts`, `toleranceDigest`.

**자동 수정 범위:** 누락된 인수 test 추가. 실패를 숨기기 위한 tolerance 완화는 금지한다.

### S19 불확실성과 결정

**전용 입력 `payload`:** `uncertainties[]`에 `uncertaintyId`, `pageId`, `sectionId`, `componentId`, `decision`, `alternatives`, `confidence`, `risk`, `requiredEvidence`를 넣는다.

**구현 입력:** S19에 기록된 uncertainty·decision marker와 직접 연결된 구현 파일만 허용한다. S01-S18의 audit 응답, 자연어 보고서나 diff를 넣지 않는다.

**출력 `publicOutput`:** `uncertaintyIds`, `unresolvedIds`, `decisionDigest`, `requiredEvidenceIds`.

**자동 수정 범위:** validation-only다. UNKNOWN을 임의 구현값으로 바꾸지 않는다.

## PASS 증명서

PASS와 병합 완료는 다음 정적 증명서로 남긴다.

```json
{
  "schemaVersion": "design-validation/attestation/v2",
  "targetId": "yyeongjin-secret-mcp-use--gdweb-26357",
  "sectionId": "S12",
  "fingerprint": "sha256:...",
  "triggerSource": {
    "path": "trigger/DESIGN_INDEX_gdweb-26357.md",
    "documentHash": "sha256:...",
    "fragmentHash": "sha256:..."
  },
  "status": "PASS",
  "baseCommit": "<main-sha>",
  "source": "fresh-audit",
  "requirementIds": ["S12-BREAKPOINT-390-001"],
  "dependencyAttestations": {
    "S05": "sha256:...",
    "S07": "sha256:..."
  },
  "publicOutput": {
    "viewportCoverage": [1440, 1280, 1024, 768, 390, 360]
  },
  "publicDigest": "sha256:...",
  "validator": {
    "id": "nvidia:<model-id>",
    "contractHash": "sha256:..."
  },
  "tests": [
    { "id": "responsive-playwright", "status": "PASS", "artifactHash": "sha256:..." }
  ],
  "createdAt": "2026-08-20T00:00:00Z",
  "attestationHash": "sha256:..."
}
```

증명서는 불변이다. 잘못된 증명서를 수정하거나 덮어쓰지 않고 `revocations/<attestationHash>.json`을 추가해 취소한다.

## 변경 영향과 정적 skip

### Impact manifest

노드별로 읽는 파일과 산출물 소유권을 정적으로 관리한다.

```yaml
nodes:
  S05:
    reads:
      - src/components/navigation/**
      - src/styles/navigation/**
      - src/tokens/**
    writes:
      - src/components/navigation/**
      - src/styles/navigation/**
    dependsOn: [S03, S04, S09, S10]
  S12:
    reads:
      - src/**/*.css
      - src/components/**
    writes:
      - src/styles/responsive/**
    dependsOn: [S04, S05, S06, S07, S08, S09, S10, S11]
```

### dirty node 계산

1. `baseCommit..headCommit`의 변경 파일을 구한다.
2. 각 노드의 `reads`에 매칭되는 노드만 직접 dirty로 표시한다.
3. 직접 dirty 노드의 `publicDigest`가 바뀐 경우에만 후행 노드를 dirty로 전파한다.
4. DESIGN_INDEX의 S05 조각이 바뀌면 S05 fingerprint만 즉시 바뀐다.
5. Specification의 공통 schema 버전이 바뀌면 영향받는 모든 노드를 dirty로 표시한다.
6. README, unrelated docs, CI comment 변경처럼 읽기 집합에 없는 변경은 모든 기존 PASS를 유지한다.

### 이미 통과한 영역 보호

- PR patch가 기존 PASS 노드의 `reads` 파일을 건드리면 해당 PASS 노드를 PR 내부 회귀 검사로 다시 실행한다.
- 회귀 검사는 통과해도 그 노드 전용 PR을 만들지 않는다.
- 회귀 검사가 실패하면 현재 patch PR을 생성하지 않거나 이미 열렸다면 merge를 차단한다.
- patch 노드는 다른 PASS 노드의 코드를 조용히 함께 수정할 수 없다.
- 재검사 결과의 `publicDigest`가 같으면 기존 후행 PASS는 유지한다.

## code push 입력 계약

GitHub push, PR merge, 수동 실행을 모두 같은 `ChangeEvent` 형식으로 정규화한다.

```ts
interface ChangeEvent {
  schemaVersion: 'design-validation/change-event/v2';
  eventId: string;
  source: 'push' | 'merge' | 'manual' | 'design-index-import';
  repository: 'yyeongjin/secret_mcp_use';
  beforeCommit: string | null;
  afterCommit: string;
  changedFiles: Array<{
    path: string;
    status: 'added' | 'modified' | 'deleted' | 'renamed';
    beforeHash: `sha256:${string}` | null;
    afterHash: `sha256:${string}` | null;
  }>;
  importedArtifacts: Array<{
    producer: 'secret_mcp';
    kind: 'design-index' | 'request-contract' | 'evidence';
    referenceId: string;
    contentHash: `sha256:${string}`;
  }>;
  options: {
    forceFullAudit: boolean;
    allowCachedPass: boolean;
  };
}
```

오케스트레이터는 code diff를 LLM에 통째로 보내지 않는다. `changedFiles`를 impact manifest에 대입해 dirty Section을 계산하고, 각 Section builder가 담당 파일의 필요한 조각만 추출한다.

## 코드 변경 유형별 처리 행렬

아래 표의 `호출`은 항상 Section마다 별도 NVIDIA 요청이라는 뜻이다. `S04, S09, S12 호출`은 세 Section을 한 번에 보내는 요청 하나가 아니라 서로 격리된 요청 세 개다.

| 들어온 변경 | 최초 dirty Section | NVIDIA audit 호출 | PR 동작 |
| --- | --- | --- | --- |
| `README.md`, 일반 문서만 변경 | 없음 | 0개 | PR 없음, 기존 PASS 유지 |
| 새 `trigger/DESIGN_INDEX_gdweb-<id>.md` 추가 | 두 Stage의 S01-S19 | 새 작품 run에서 정확히 38개 독립 primary 호출 | trigger는 수정하지 않고 2차 frontend 누락만 PR |
| 기존 `trigger/DESIGN_INDEX_gdweb-<id>.md`에 새 버전 유입 | 두 Stage의 S01-S19 | 변경 Section 수와 무관하게 정확히 38개 독립 primary 호출 | trigger는 수정하지 않고 새 hash 기준 2차 frontend 누락만 PR |
| trigger 문서의 번호 Section 누락·중복 | 실행 전 구조 오류 | 0개 | `FAILED_TRIGGER_STRUCTURE`, PR 없음 |
| Request Contract 변경 | contract가 소유한 Section | 해당 Section별 독립 호출 | 코드 patch가 필요한 Section만 PR |
| Evidence 이미지 또는 crop metadata 변경 | S02와 Evidence를 직접 읽는 노드 | S02부터 DAG를 따라 별도 호출 | 새 근거로 기존 값이 무효화되면 patch PR |
| route 파일 추가·수정 | S03 | S03 1개 후 digest 변경 시 S04, S05, S06, S11, S15, S16 등 후행 호출 | 누락 route 구현만 S03 PR |
| route 파일 삭제 | S03 | S03 별도 호출 | 문서에 route가 있으면 복구 patch PR, 근거가 없으면 BLOCKED |
| AppShell 또는 root layout 변경 | S04 | S04 1개 후 S05, S06, S07, S12 등 후행 호출 가능 | shell 누락만 S04 PR |
| navigation component 변경 | S05 | S05 1개 후 S06, S12, S13, S14, S17, S18, S19 재평가 가능 | navigation 누락만 S05 PR |
| 페이지 section composition 변경 | S06 | S06 독립 호출 1개, 결과 내부 finding을 Page ID별로 분리 | 해당 page composition PR만 생성 |
| section-scoped layout CSS 변경 | S07 | S07 독립 호출 1개, 결과 내부 finding을 Section ID별로 분리 | layout 누락만 S07 PR |
| component props 또는 variant 변경 | S08 | S08 1개 후 S12-S14 등 후행 호출 가능 | component API 누락만 S08 PR |
| color/token 파일 변경 | S09 | S09 1개 후 S10, S12, S13 등 digest 영향 노드 호출 | 누락 token 선언만 S09 PR |
| font import 또는 typography class 변경 | S10 | S10 1개 후 S05, S06, S12, S14, S18 영향 호출 | typography 누락만 S10 PR |
| 이미지·아이콘 파일 또는 manifest 변경 | S11 | S11 1개 후 S06, S12, S18 영향 호출 | 잘못된 참조 연결만 S11 PR |
| media query 또는 responsive stylesheet 변경 | S12 | S12 1개 후 S13, S14, S17-S19 영향 호출 | 반응형 누락만 S12 PR |
| event handler·state reducer 변경 | S13 | S13 1개 후 S14, S17-S19 영향 호출 | 상호작용 누락만 S13 PR |
| aria, focus, keyboard code 변경 | S14 | S14 1개 후 S17-S19 영향 호출 | 접근성 누락만 S14 PR |
| type, schema, fixture 변경 | S15 | S15 1개 후 S16, S06, S08, S17, S19 영향 호출 | 데이터 상태 누락만 S15 PR |
| module graph, build 설정 변경 | S16 | S16 1개와 영향 graph에 포함된 후행 호출 | 광범위 구조 변경은 validation-only 또는 BLOCKED |
| 구현 manifest 변경 | S17 | S17 1개 후 S19 영향 호출 | 애플리케이션 코드 PR 없음 |
| Playwright, acceptance test 변경 | S18 | S18 1개 후 S19 영향 호출 | 누락 test만 S18 PR, tolerance 완화 PR 금지 |
| uncertainty decision 변경 | S19 | S19 1개 | 애플리케이션 코드 PR 없음 |
| 전역 `styles.css` 하나가 여러 역할을 담당 | S04, S05, S07, S09, S10, S12, S13, S14, S18 | 각 Section을 별도 호출 | 같은 파일 write-set은 직렬 PR 처리 |
| `package.json` 또는 lockfile 변경 | S16과 package consumer 노드 | 영향 manifest에 따른 별도 호출 | 무관한 dependency upgrade는 BLOCKED |
| impact manifest에 없는 source 파일 변경 | 알 수 없음 | 안전 기본값으로 S01-S19 19개 전체 호출 | 판정된 실제 누락만 PR |
| generated build output만 변경 | 없음 또는 정책 오류 | 정상적으로 0개 | 추적 금지 파일이면 Check 경고, PR 없음 |

## 상세 동작 사례

### 사례 A: 완전히 새로운 frontend 코드가 들어온 경우

입력:

```text
frontend/index.html added
frontend/styles.css added
frontend/app.js added
frontend/assets/* added
PASS 증명서 없음
```

동작:

1. 신규 target이므로 1차 S01-S19 문서 input 19개와 2차 S01-S19 구현 input 19개를 순차 생성한다.
2. NVIDIA API를 1차 19번과 2차 19번, 최소 38번 독립 호출한다.
3. 각 응답을 `nodes/SXX/audit-output.json`에 따로 저장한다.
4. 코드 merger가 19개 JSON을 Section 순서로 합친다.
5. PASS Section은 증명서만 기록하고 PR을 만들지 않는다.
6. PATCH_REQUIRED Section은 Section마다 별도의 patch API 요청을 호출한다.
7. 모든 PATCH_REQUIRED Section을 DAG 순서로 직렬화하고, 각 PR의 parent를 직전 검증 PR branch로 지정한다.
8. write-set이 겹치면 차단하지 않고 부모 commit에서 입력을 다시 계산해 다음 PR에서 안전하게 수정한다.

예상 결과:

```text
38 primary audit calls
S01-S08, S11, S15-S17 PASS -> 0 PR
S09 PATCH_REQUIRED -> PR #101 (base: main)
S10 PATCH_REQUIRED -> PR #102 (base: PR #101 branch)
S12 PATCH_REQUIRED -> PR #103 (base: PR #102 branch)
S13-S14 PASS -> 0 PR
S18 PATCH_REQUIRED -> PR #104 (base: PR #103 branch)
S19 BLOCKED_MISSING_EVIDENCE -> 0 PR
```

### 사례 B: README 문장만 수정된 경우

1. changed file이 어떤 노드의 `reads`에도 매칭되지 않는다.
2. 19개 fingerprint가 모두 이전과 같다.
3. 19개 모두 `CACHED_PASS` 또는 기존 blocked 상태를 유지한다.
4. NVIDIA 호출 0개, branch 0개, PR 0개다.

### 사례 C: navigation에 메뉴 항목 하나가 추가된 경우

입력 diff:

```diff
+ <a href="/community">Community</a>
```

동작:

1. `src/components/navigation/**` 변경으로 S05만 직접 dirty다.
2. S05 input에는 navigation 코드, S05 명세, 관련 Evidence만 들어간다.
3. S05 NVIDIA audit 요청을 한 번 호출한다.
4. 문서에도 `/community`가 있으면 상태·모바일 메뉴·active state 누락을 finding으로 만들 수 있다.
5. 문서에 없는 항목이면 모델이 새 route로 인정하지 않고 S03 범위 위반 또는 `UNKNOWN`으로 보고한다.
6. S05가 PATCH_REQUIRED이고 안전한 추가 diff를 만들면 S05 PR을 연다.
7. S05 PR이 병합되기 전 S06, S12-S14 후행 patch PR은 만들지 않는다.
8. 병합 후 S05 `publicDigest`가 바뀐 경우에만 후행 노드를 각각 재호출한다.

### 사례 D: 명세에 있는 모바일 메뉴 CSS가 코드에서 삭제된 경우

입력 diff:

```diff
- @media (max-width: 768px) {
-   .mobile-menu { display: block; }
- }
```

동작:

1. S12 audit가 명세에 존재하지만 코드에 없는 규칙을 `PATCH_REQUIRED`로 판정한다.
2. 별도의 S12 patch 요청이 삭제된 규칙을 복구하는 최소 diff를 반환한다.
3. base hash, write-set과 `git apply --check`를 검사한다.
4. 768, 390, 360px Playwright와 overflow 검사를 실행한다.
5. S05 navigation PASS 회귀 검사도 실행한다.
6. 전부 통과한 경우에만 `fix(S12): restore mobile navigation breakpoint` PR을 연다.

### 사례 E: 코드에 문서 근거가 없는 색상값이 들어온 경우

입력 diff:

```diff
- color: var(--color-primary);
+ color: #7b61ff;
```

동작:

1. S09와 해당 consumer Section이 dirty다.
2. S09 audit는 `#7b61ff`가 DESIGN_INDEX 또는 Evidence에 없음을 확인한다.
3. 근거에 올바른 기존 값이 있으면 최소 교체 patch를 만들 수 있다.
4. 올바른 값도 문서에 없으면 `BLOCKED_MISSING_EVIDENCE`다.
5. 근거 없이 모델이 새로운 색상을 제안하거나 평균값을 계산하는 것은 schema 위반이다.
6. BLOCKED 상태에서는 PR을 만들지 않고 필요한 Evidence ID만 Check에 표시한다.

### 사례 F: 두 독립 코드 변경이 서로 다른 파일에 들어온 경우

입력:

```text
src/tokens/colors.css modified       -> S09
src/data/game.fixture.ts modified    -> S15
```

동작:

1. S09와 S15 audit를 서로 다른 NVIDIA 요청으로 병렬 호출할 수 있다.
2. 둘 다 patch가 필요하면 topological order에서 먼저 온 Section의 검증 PR을 연다.
3. 다음 Section은 그 PR commit을 base로 입력을 다시 만든 뒤 별도 stacked PR을 연다.
4. 각 PR은 자기 Section test와 영향받는 PASS 회귀 검사를 실행한다.

### 사례 G: 두 노드가 같은 `styles.css`를 수정하려는 경우

입력:

```text
S09 patch writeSet = [frontend/styles.css]
S12 patch writeSet = [frontend/styles.css]
```

동작:

1. 두 audit 요청은 독립적으로 실행할 수 있다.
2. 두 patch proposal도 격리된 작업공간에서 생성할 수 있다.
3. DAG상 먼저인 S09 diff를 검증해 `S09-1 -> S09 대표 branch` 하위 PR을 연다.
4. S09 하위 묶음을 깊은 자식부터 S09 대표 branch로 병합한다. S12를 대기 상태로 두지 않고 그 검증 commit의 `styles.css`에서 source slice와 fingerprint를 다시 만든다.
5. S12의 독립 patch 요청과 검증을 수행한다.
6. 새 S12 diff가 검증되면 `S12-1 -> S12 대표 branch` 하위 PR을 같은 실행에서 열고, 정리 후 `S12 대표 PR -> S09 대표 branch`를 남긴다.
7. write-set 중복은 순서와 base만 결정하며 PR 생성을 차단하지 않는다.

### 사례 H: 이미 PASS인 코드를 다른 PR이 건드린 경우

1. patch write-set과 기존 PASS 노드들의 read-set을 교차 검사한다.
2. 교차되는 PASS 노드를 현재 PR의 regression set에 추가한다.
3. 각 regression Section은 별도 NVIDIA audit 요청으로 실행한다.
4. 모두 PASS면 별도 PR 없이 현재 PR check에 증명서를 연결한다.
5. 하나라도 실패하면 현재 PR 생성 또는 merge를 중단한다.

### 사례 I: 열린 자동 PR이 있는 동안 사람이 main에 직접 push한 경우

1. open PR의 `baseCommit`과 현재 main이 달라진다.
2. PR을 `STALE_BASE`로 표시하고 merge queue 진입을 막는다.
3. 기존 diff를 최신 base에 그대로 rebase하지 않고, 최신 main에서 해당 Section audit를 새 요청으로 다시 호출한다.
4. 사람이 이미 누락을 고쳤다면 PASS 증명서와 설명 comment를 남기되 기존 Section 대표 PR은 사람의 판단을 위해 열린 상태로 보존한다. 자동화가 대표 PR을 닫거나 대표 branch를 삭제하지 않는다.
5. 여전히 누락이면 새 fingerprint와 patch hash로 만든 diff를 처음부터 검증한다. 모든 guard를 통과한 경우에만 봇 소유 branch를 `--force-with-lease`로 갱신하고 같은 PR 번호, review 대화, 제목과 본문을 최신 결과로 바꾼다.
6. 새 결과가 차단되거나 안전한 diff를 만들 수 없으면 기존 PR은 열린 상태로 두고 Section Check와 실행 artifact에 현재 결과를 기록한다.

### 사례 J: 같은 push event가 중복 전달된 경우

1. `eventId`, run key와 node idempotency key를 확인한다.
2. 이미 같은 fingerprint를 처리 중이면 두 번째 실행은 기존 실행을 관찰만 한다.
3. 동일한 open PR key가 있으면 새 branch와 PR을 만들지 않는다.
4. 완료된 PASS 증명서가 있으면 CACHED_PASS로 종료한다.

### 사례 K: NVIDIA 응답이 잘렸거나 JSON이 아닌 경우

1. 해당 Section 응답만 `FAILED_SCHEMA`로 처리한다.
2. 다른 18개 응답과 PASS 증명서는 폐기하지 않는다.
3. 같은 독립 입력으로 제한된 횟수만 재시도한다.
4. 재시도에도 실패하면 그 Section과 후행 노드만 BLOCKED다.
5. 잘린 응답이나 검증되지 않은 diff를 이어 붙이지 않는다. 완전한 Requirement ID 일부만 담은 유효 diff라면 별도 하위 PR로 검증하고, 나머지는 새 하위 요청으로 처리한다.

### 사례 L: NVIDIA diff가 허용 범위를 벗어난 경우

예:

```text
S05 allowedWriteGlobs = src/components/navigation/**
NVIDIA diff           = src/components/navigation/Nav.tsx + src/pages/Home.tsx
```

동작:

1. scope guard가 전체 diff를 거부한다.
2. 허용 파일 부분만 잘라서 적용하지 않는다.
3. PR을 만들지 않는다.
4. `BLOCKED_CROSS_OWNER_CHANGE`와 위반 경로를 기록한다.
5. 필요한 경우 S06을 별도 dirty 노드로 예약하되 두 Section을 한 요청에 묶지 않는다.

### 사례 M: 코드가 추가됐지만 이미 명세를 만족하는 경우

1. 담당 Section audit 요청은 `PASS`를 반환한다.
2. diff 생성 요청을 호출하지 않는다.
3. branch와 PR을 만들지 않는다.
4. 새 fingerprint의 PASS 증명서만 `validation-state`에 기록한다.

### 사례 N: 코드가 과도하게 추가되어 명세 범위를 침범한 경우

1. 담당 Section은 범위 위반을 finding으로 기록한다.
2. 기본 정책이 누락 추가 중심이므로 대량 삭제 patch를 만들지 않는다.
3. 안전한 한 줄 교체나 직접 위반 줄 제거로 한정할 수 없으면 `BLOCKED_UNSAFE_REMOVAL`로 둔다.
4. PR 대신 사람이 검토할 Section Check와 실행 artifact를 남긴다.

### 사례 O: package dependency가 추가된 경우

1. S16이 dependency 이름, 사용 파일과 lockfile 변화를 검사한다.
2. 해당 package를 import하는 Section을 impact graph로 찾고 각각 독립 호출한다.
3. 사용되지 않는 package 또는 전체 upgrade는 자동 제거·정리하지 않고 BLOCKED로 표시한다.
4. 명세 구현에 필수이고 안전한 경우에도 package 추가 PR은 다른 code patch보다 먼저 병합한다.
5. 병합 뒤 lockfile hash가 바뀌므로 후행 patch는 최신 base에서 다시 생성한다.

### 사례 P: 자동 PR이 병합되지 않고 닫힌 경우

1. 해당 노드를 PASS로 표시하지 않는다.
2. patch proposal과 PR 결과를 실행 이력으로만 남긴다.
3. 다음 code push에서 fingerprint가 같아도 유효한 PASS 증명서가 없으므로 다시 audit한다.
4. 사람이 `do-not-retry` 결정을 기록한 경우에만 수동 차단 상태를 유지한다.

### 사례 Q: 자동 PR이 병합된 경우

1. merge commit에서 담당 Section과 영향받은 PASS Section을 다시 audit한다.
2. 모두 PASS면 새 fingerprint별 증명서를 기록한다.
3. 담당 Section의 `publicDigest`가 달라졌으면 DAG 후행 노드를 dirty로 표시한다.
4. ready 상태가 된 후행 노드는 각자 새로운 NVIDIA 요청으로 실행한다.
5. 이전 PR의 대화 내용이나 diff를 후행 모델 context에 전달하지 않는다.

### 사례 R: 어떤 노드에도 매핑되지 않는 source code가 들어온 경우

1. 누락된 영향 매핑을 안전하게 무시하지 않는다.
2. `UNMAPPED_SOURCE_CHANGE` 경고를 남긴다.
3. 이번 실행은 1차와 2차 각각 S01-S19 전체 독립 audit, 총 38개 primary 요청으로 전환한다.
4. 실행 후 새 파일을 어느 노드가 읽고 쓸지 `impact-manifest.yml` 보정 작업을 만든다.

### 사례 S: `secret_mcp`에서 새 작품 명세서를 trigger에 넣은 경우

입력:

```text
trigger/DESIGN_INDEX_gdweb-30000.md added
```

동작:

1. 파일 이름과 문서 reference ID가 일치하는지 확인한다.
2. Markdown AST로 `## 1`부터 `## 19`까지 정확히 한 번씩 존재하는지 검사한다.
3. gdweb-30000을 기존 작품과 분리된 새 target ID로 만든다.
4. 해당 trigger 문서의 S01-S19 fragment로 1차 NVIDIA 문서 감사 19개를 만들고, 그 결과 digest와 같은 fragment·source slice로 2차 구현 감사 19개를 만든다.
5. 기존 gdweb-26357의 문서, Evidence, 응답과 PASS 증명서는 어느 요청에도 넣지 않는다.
6. 코드 patch는 gdweb-30000 trigger의 값과 Evidence로 증명되는 누락에 대해서만 생성한다.

### 사례 T: trigger 명세서에 S12가 빠진 경우

1. 오케스트레이터의 1~19 heading 검사가 S12 부재를 발견한다.
2. 공통 Specification의 S12 본문을 대신 NVIDIA에 보내지 않는다.
3. frontend 코드를 보고 반응형 값을 추정하지 않는다.
4. NVIDIA audit 호출을 시작하지 않고 전체 run을 `FAILED_TRIGGER_STRUCTURE`로 종료한다.
5. 파이프라인은 trigger를 수정하지 않는다. `secret_mcp` 또는 사람이 완전한 새 입력 버전을 넣었을 때 새 content hash로 다시 실행한다.

## DAG 스케줄러

audit queue와 patch queue의 준비 조건을 분리한다.

- `AUDIT_READY`: node가 dirty이고 같은 target·Section audit가 실행 중이 아니며 NVIDIA rate limit token이 있다. DAG 선행 PASS는 요구하지 않는다.
- `PATCH_READY`: audit가 PATCH_REQUIRED이고 같은 target·Section patch가 실행 중이지 않으며 직전 검증 stacked parent가 확정된 상태다. 선행 PASS나 merge는 요구하지 않는다.
- dependency wait와 write-set wait 상태는 정의하지 않는다. 같은 파일의 기존 correction은 현재 노드의 stacked parent가 된다.

```ts
function auditReady(node: Node, state: State): boolean {
  return node.isDirty
    && !state.auditLocks.has(node.auditLockKey)
    && state.rateLimiter.available();
}

function patchReady(node: Node, state: State): boolean {
  return node.auditStatus === 'PATCH_REQUIRED'
    && !state.patchLocks.has(node.patchLockKey)
    && !state.openPrKeys.has(node.idempotencyKey);
}
```

두 누락 검사 Stage는 read-only이므로 full audit에서 각 Stage의 S01-S19를 모두 queue에 올린다. rate limit 안에서 Stage별 19개를 병렬 또는 순차 전송할 수 있지만 요청은 끝까지 총 38개로 분리한다. patch 적용과 PR 생성 단계만 DAG와 write-set 충돌 그래프로 보수적으로 직렬화한다.

## 충돌 방지

### 1. 작업공간 격리

- 노드마다 새로운 `git worktree` 또는 임시 clone을 만든다.
- branch 이름은 `auto/<target>/<patch-node>/<fingerprint-12>`로 결정적으로 생성한다.
- 다른 노드의 uncommitted 변경이나 임시 파일을 복사하지 않는다.

### 2. 파일 소유권

- `ownership.yml`에서 각 파일 또는 glob의 기본 소유 노드를 선언한다.
- patch는 자기 노드의 `allowedWriteGlobs`만 수정할 수 있다.
- shared 파일은 `sharedOwners`와 lock group을 명시한다.
- 소유권 밖 변경이 필요하면 자동 확장하지 않고 `BLOCKED_CROSS_OWNER_CHANGE`로 중단한다.

### 3. 기준 해시

- patch의 모든 readSet과 writeSet에는 생성 당시 파일 SHA-256이 있어야 한다.
- 현재 파일 해시가 다르면 `git apply`를 시도하지 않고 patch를 폐기한다.
- 최신 `main`에서 새 patch 요청을 생성한다. 오래된 diff를 재사용하지 않는다.

### 4. Stacked write-set 직렬화

- 같은 파일을 수정하는 두 patch는 hunk가 달라도 직전 검증 PR commit 위에 순서대로 쌓는다.
- DAG 선후 관계와 write-set 중복은 다음 PR의 base를 고르지만 선행 Section 대표 PR의 사람 병합을 기다리지 않는다.
- 기본 구현은 Section 내부에서 최대 5개의 하위 PR을 하나의 결정적 stack으로 직렬화하고, 완료된 묶음을 깊은 자식부터 Section 브랜치로 자동 병합한다.
- Section 대표 PR은 이전 Section 대표 브랜치 위에 쌓을 수 있지만 자동 병합하지 않는다.

### 5. 재귀 하위 PR 정리와 사람 merge queue

- 하위 PR은 한 묶음의 모든 검증이 끝난 뒤 가장 깊은 자식부터 부모 방향으로 병합한다. 하위 PR의 base와 head가 예상한 `auto/` 트리인지 매 단계 확인한다.
- 자동 병합 대상의 base가 `main`이면 즉시 실패한다. Section 대표 PR은 자동 병합 함수에 전달하지 않는다.
- 하위 병합이 끝나면 하위 `auto/` branch를 삭제하고 Section 대표 branch만 남긴다.
- 사용자는 Section 대표 PR을 merge queue에서 한 번에 하나씩 최신 `main` 또는 부모 Section에 재배치해 검증한다.
- base commit이 바뀌면 fingerprint, base hashes, 직접 영향 PASS 회귀 검사를 다시 계산한다.
- 재검증이 실패하거나 새 patch를 안전하게 만들 수 없으면 기존 PR을 자동 종료하지 않고 merge를 계속 차단한 채 해당 노드를 다시 예약한다.
- 최신 main에서 새로 생성하고 완전히 검증한 diff만 같은 자동화 PR에 반영할 수 있다. 오래된 NVIDIA diff를 단순 rebase해 재사용하지 않는다.
- 갱신은 봇이 만든 `auto/` branch에만 현재 원격 SHA를 지정한 `--force-with-lease`로 수행한다. lease가 맞지 않으면 중단하며 사람의 수동 commit이나 conflict resolution을 덮어쓰지 않는다.
- PASS, BLOCKED 또는 UNKNOWN 결과는 Section 대표 PR을 자동 종료하거나 대표 branch를 삭제하는 권한으로 사용하지 않는다. 하위 PR과 하위 branch 삭제는 검증된 재귀 병합이 성공한 직후에만 허용한다.

## PR 생성 계약

PR은 다음 조건이 모두 참일 때만 생성한다.

```text
audit.status == PATCH_REQUIRED
patch.status == PATCH
patch.diff != ""
schema validation == PASS
base hashes == current hashes
allowed write paths == PASS
immutable trigger paths untouched == PASS
git apply --check == PASS
scope guard == PASS
build/lint/test == PASS
visual/a11y checks for node == PASS
affected cached PASS regression == PASS
no equivalent open PR
stacked parent branch and commit recorded
child PR base is an auto Section/child branch
Section representative PR is excluded from auto-merge
```

### idempotency key

```text
child: sha256(targetId + sectionId + patchNodeId + fingerprint + patchHash)
Section representative: sha256(targetId + sectionId + sectionId + fingerprint + aggregatePatchHash)
```

PR을 만들기 전에 branch 이름과 PR body의 hidden marker를 검색한다.

```html
<!-- design-validation-pr-key: sha256:... -->
```

같은 key의 open 또는 merged PR이 있으면 새 PR을 만들지 않는다.

### PR manifest

```json
{
  "schemaVersion": "design-validation/pr-manifest/v2",
  "prKey": "sha256:...",
  "targetId": "yyeongjin-secret-mcp-use--gdweb-26357",
  "sectionId": "S12",
  "patchNodeId": "S12-2",
  "parentPatchNodeId": "S12-1",
  "fingerprint": "sha256:...",
  "triggerSource": {
    "path": "trigger/DESIGN_INDEX_gdweb-26357.md",
    "documentHash": "sha256:...",
    "sectionHeading": "12. Responsive Behavior Matrix"
  },
  "baseCommit": "<S12-1-sha>",
  "baseBranch": "auto/yyeongjin-secret-mcp-use--gdweb-26357/S12-1/<fingerprint-12>",
  "requirementIds": ["S12-BREAKPOINT-390-001"],
  "patchHash": "sha256:...",
  "readSet": [{ "path": "...", "baseHash": "sha256:..." }],
  "writeSet": [{ "path": "...", "baseHash": "sha256:..." }],
  "affectedPassAttestations": ["sha256:..."],
  "checks": {
    "schema": "PASS",
    "scope": "PASS",
    "immutableInputs": "PASS",
    "build": "PASS",
    "test": "PASS",
    "regression": "PASS"
  }
}
```

PR branch에는 실제 코드 변경만 둔다. 원본 API 응답, screenshot과 상세 로그는 Actions artifact에 저장하고 PR body에서 링크한다.

### PR 리뷰 본문 계약

PR은 단순히 `검증을 통과했다`고 알리는 상태 봉투가 아니다. 리뷰어가 Actions artifact를 먼저 열지 않아도 누락과 수정 내용을 판단할 수 있어야 하므로 본문 최상단에 다음 항목을 반드시 그대로 제공한다.

1. audit가 반환한 모든 finding의 `requirementId`, 누락 문장, `pageId`, `componentId`, `evidenceRefs`, `implementationRefs`
2. NVIDIA patch 요청이 만든 실제 unified diff
3. 변경 파일과 `+추가/-삭제` 줄 수
4. audit, patch, patched-code re-audit의 서로 다른 request ID
5. scope, immutable input, base hash, build, test, visual, accessibility, regression guard 결과
6. 실행 artifact 링크와 idempotency marker

PR 제목은 최소한 Section과 첫 Requirement ID를 식별해야 한다.

```text
fix(s05): address S05-NAV-ACTIVE-001 omission
```

`[S05] Apply grounded DESIGN_INDEX omissions`처럼 실제 누락을 알 수 없는 일반 제목과, Requirement ID만 나열하고 finding 문장을 생략한 본문은 허용하지 않는다. PR 본문에 `<n>` 같은 자리표시자도 남기지 않고 실제 patch attempt 번호를 기록한다. GitHub의 `Files changed` 탭만 유일한 diff 전달 수단으로 삼지 않으며 본문에도 검증된 diff를 싣는다.

### diff가 없는 결과의 기록 계약

GitHub PR은 branch 간 실제 변경이 있어야 하므로, 안전한 code diff가 없는 상태를 억지로 report 파일 commit이나 빈 PR로 만들지 않는다. 대신 다음 두 출력에만 기록한다.

- Section Check: 현재 commit에 붙는 실행 단위 결과. finding 원문, 근거, 구현 위치, patch 중단 사유와 다음 동작을 표시한다.
- 실행 artifact: Section 입력, 모든 독립 응답, finding, 중단 사유, fingerprint와 재실행 조건을 불변 파일로 보존한다.

GitHub Issue는 1차 `DOCUMENT_GAP`에만 생성한다. 2차 구현 감사, preflight, patch 생성, guard·test·re-audit·publish 실패는 Issue를 만들지 않는다. dependency wait와 write-set wait는 존재하지 않는다. 각 하위 PR은 preflight로 실제 누락이 확정된 Requirement ID 하나를 구현하며, 아직 남은 항목은 Requirement ID별 descendant 하위 PR로 재귀 처리한다. 최대 5개가 완성되면 가장 깊은 자식부터 Section 브랜치로 자동 병합하고, 모든 묶음이 끝나면 Section 대표 draft PR 하나를 남긴다. 확정된 `PATCH_REQUIRED` chain이 미완료이면 Check와 artifact를 남기고 workflow를 실패 처리한다.

S18이 명세에 있는 페이지별 acceptance test의 부재를 찾았는데 새 파일의 `implementationRefs`만 생략한 경우는 근거 부족이 아니다. S18의 소유 경로 `frontend/tests/**`에서 결정적 기본 경로 `frontend/tests/design-index-s18.spec.ts`를 배정하고 독립 patch 요청으로 보낸다. 경로만 오케스트레이터가 결정하며 테스트 내용과 diff는 NVIDIA가 명세 근거로 생성하고 전체 guard를 통과해야 한다.

```markdown
## Validation feedback

The isolated `S13` audit exhausted its independent audit attempts because the exact interaction value is absent from the DESIGN_INDEX evidence boundary.

## Findings

### 1. `S13-INTERACTION-004`

- Result: `INSUFFICIENT_EVIDENCE`
- Missing or uncertain item: The transition duration is not specified in the immutable DESIGN_INDEX input.
- Page: `P-01`
- Component: `build-tabs`
- Evidence: `E-D02`
- Implementation: none

## Why no code PR was opened

- Audit status: `BLOCKED_MISSING_EVIDENCE`
- Execution state: `BLOCKED_MISSING_EVIDENCE`
- Patch status: `NOT_REQUIRED`
- Reason: all isolated audit attempts confirmed that the required value is absent from the immutable contract
```

## PR 동작 예시

### Example 1: S09 누락 token 추가 PR

branch:

```text
auto/gdweb-26357/S09/7f91c3a24b10
```

제목:

```text
fix(s09): address S09-COLOR-SURFACE-004 omission
```

본문:

````markdown
## Corrected by this diff

### 1. `S09-COLOR-SURFACE-004`

- Result: `MISSING`
- Missing or uncertain item: The documented surface color token is absent from the implementation.
- Page: `P-01`
- Component: `design-tokens`
- Evidence: `E-D01`
- Implementation: `frontend/styles/tokens.css`

## Proposed code diff

- Changed files: `frontend/styles/tokens.css`
- Changed lines: `+1 / -0`

```diff
diff --git a/frontend/styles/tokens.css b/frontend/styles/tokens.css
--- a/frontend/styles/tokens.css
+++ b/frontend/styles/tokens.css
@@ -3,4 +3,5 @@
 :root {
   --color-text: #111827;
+  --color-surface: #F5F7FA;
 }
```

## Remaining audit feedback (not changed by this PR)

이 예시에서는 없음. finding이 더 있었다면 이 PR 본문에 남은 Requirement ID를 표시하고, 게시된 현재 branch를 base로 삼는 다음 하위 노드와 PR을 독립적으로 생성한다.

## Scope

- Section: `S09`
- Target: `gdweb-26357`
- Base commit: `<sha>`
- Trigger source: `trigger/DESIGN_INDEX_gdweb-26357.md` section 9
- Trigger document hash: `sha256:...`

## Independent NVIDIA Requests

- Document audit request: `run-...:document-audit:S09`
- Implementation audit request: `run-...:implementation-audit:S09`
- Patch request: `run-...:patch:S09:attempt:1`
- Patched-code audit: `run-...:reaudit:S09:attempt:1`
- No S01-S08 or S10-S19 content was included in either request.

## Patch Guards

- JSON Schema: PASS
- Requirement ownership: PASS
- Base file hashes: PASS
- Allowed paths: PASS
- `git apply --check`: PASS
- Deletion guard: PASS

## Verification

- Build: PASS
- CSS token parser: PASS
- S09 visual color check: PASS
- Affected cached PASS regression: PASS

<!-- design-validation-pr-key: sha256:... -->
````

이 PR에는 S09 이외의 개선, 포맷 변경, 이름 정리와 token 재배치가 들어가면 안 된다. 본문의 `Corrected by this diff`에는 재검증을 통과한 `addressedRequirementIds`만 표시하며, Section audit의 다른 finding을 같은 PR이 해결한 것처럼 쓰지 않는다.

### Example 2: S12 모바일 breakpoint 복구 PR

```text
title: fix(S12): restore 390px navigation layout
branch: auto/gdweb-26357/S12/9a6bd1cc8120
depends-on-attestations: S04, S05, S06, S07, S08, S09, S10, S11
write-set: frontend/styles/responsive.css
verification-viewports: 390, 360
regression-viewports: 768, 1024, 1440
```

동작 과정:

1. S12 audit 요청이 `PATCH_REQUIRED`를 반환한다.
2. S12 patch 요청이 한 파일의 최소 diff를 반환한다.
3. S05, S07, S10의 현재 PASS 증명서를 regression set으로 연결한다.
4. 모바일 viewport와 desktop 회귀 검사를 모두 통과한다.
5. 같은 write-set을 가진 PR이 없을 때만 PR을 연다.
6. review 중 main이 바뀌면 merge 전에 base hash를 다시 검사한다.

### Example 3: PASS이므로 PR을 만들지 않는 결과

GitHub Check 제목:

```text
Design Validation / S05 Navigation: PASS
```

Check summary:

```markdown
The navigation implementation satisfies all S05 requirements for fingerprint `sha256:...`.

- NVIDIA audit requests: 1
- Patch requests: 0
- Application changes: 0
- PR created: no
- Attestation: `attestations/.../S05/<fingerprint>.json`
```

PASS를 눈에 보이게 남기기 위해 빈 commit이나 빈 PR을 만들지 않는다.

### Example 4: CACHED_PASS로 완전히 건너뛴 결과

```text
status: CACHED_PASS
audit API calls: 0
patch API calls: 0
branch created: false
PR created: false
reason: current fingerprint matches immutable PASS attestation
```

GitHub Check에는 어떤 증명서를 재사용했는지와 현재 fingerprint만 표시한다.

### Example 5: Evidence 부족으로 차단되어 Check와 artifact에 기록하는 결과

GitHub Check 제목:

```text
Design Validation / S10 Typography: BLOCKED_MISSING_EVIDENCE
```

Check summary:

```markdown
`S10-HERO-TITLE-003` requires an exact line-height, but neither DESIGN_INDEX nor the provided Evidence contains a measurable value.

- Proposed value: none
- Patch generated: no
- PR created: no
- GitHub issue created: no
- Run artifact: stores the full finding and all independent attempts
- Required Evidence: desktop hero title crop with unscaled text bounds
```

이 상태에서 NVIDIA가 임의의 `1.2` 또는 `64px`을 생성하면 응답 자체를 schema 위반으로 폐기한다.

### Example 6: 허용 파일을 벗어난 patch 차단

```text
section: S05
allowed: frontend/components/navigation/**
returned write-set:
  - frontend/components/navigation/Nav.js
  - frontend/index.html
result: BLOCKED_CROSS_OWNER_CHANGE
PR created: false
```

허용된 첫 번째 파일의 hunk만 잘라 적용하지 않는다. 전체 diff를 폐기한다.

### Example 7: 독립 PR 두 개가 병렬로 열리는 경우

```text
PR #201 S09 write-set = frontend/styles/tokens.css
PR #202 S15 write-set = frontend/data/games.js
dependency path between S09 and S15 = none
```

두 Section은 각각 자기 NVIDIA audit와 patch 요청을 사용한다. PR #201의 검증 commit을 PR #202의 base로 사용하되 PR #201의 자연어 결과는 PR #202 모델에게 전달하지 않는다.

### Example 8: 같은 파일도 후행 stacked PR을 만드는 경우

```text
S09 verified patch -> frontend/styles.css
S12 verified patch -> frontend/styles.css
```

1. S09 diff를 검증해 `S09-1 -> S09 대표 branch` 하위 PR을 연다.
2. S12를 차단하거나 기다리지 않는다.
3. S09 하위 PR을 S09 대표 branch로 정리한 commit에서 S12 입력과 fingerprint를 다시 계산한다.
4. S12의 새 NVIDIA patch 요청과 검증을 실행한다.
5. S12 diff가 검증되면 `S12-1 -> S12 대표 branch` 하위 PR을 열고, 정리 후 `S12 대표 PR -> S09 대표 branch`를 같은 실행에서 연다.

### Example 9: 기존 자동 PR과 같은 수정이 사람이 먼저 들어온 경우

```text
open PR: #203 section S12
manual main push: same 390px rule implemented
```

1. #203을 `STALE_BASE`로 표시한다.
2. 최신 main으로 S12 독립 audit를 실행한다.
3. 결과가 PASS이면 PASS 증명서를 기록한다.
4. #203에 `already satisfied by main <sha>` comment와 검증 근거를 남긴다.
5. 대체 PR을 만들지 않으며 Section 대표 PR #203과 대표 branch는 삭제하지 않는다. 최종 종료 여부는 사람이 결정한다.

### Example 10: 자동 PR이 테스트에서 실패한 경우

```text
audit: PATCH_REQUIRED
patch schema: PASS
git apply --check: PASS
build: PASS
Playwright 390px: FAIL
```

검증 전 branch를 내부 작업공간에 만들 수는 있지만 GitHub PR은 생성하지 않는다. 결과는 `FAILED_TEST` 또는 `FAILED_VISUAL_REGRESSION`으로 기록하고 NVIDIA에 테스트 로그 전체를 넘겨 임의 재수정을 반복하지 않는다. 재시도는 동일 Requirement에 대해 설정된 횟수로 제한한다.

### Example 11: 열린 PR의 base가 오래된 경우

PR 상태 comment:

```markdown
This automated patch is stale because `main` changed from `<old-sha>` to `<new-sha>`.

- This PR remains open and its branch is preserved.
- Original NVIDIA diff will not be rebased or trusted automatically.
- The node has been queued for a fresh isolated audit against `<new-sha>`.
- A fully verified replacement will update this same PR with `--force-with-lease`.
- PASS or blocked results will be reported here without closing the PR.
```

새 audit가 PASS이면 증명서와 comment를 남기고 PR은 열린 상태로 보존한다. `PATCH_REQUIRED`이면 새로운 fingerprint로 patch를 다시 만들고 모든 검증을 통과한 경우에만 같은 PR의 자동화 branch와 본문을 갱신한다. 차단 결과도 피드백으로 남길 뿐 PR을 닫지 않는다. Git이 우연히 rebase에 성공했다는 이유만으로 오래된 NVIDIA diff를 신뢰하지 않는다.

### Example 12: PR이 병합된 후 후행 DAG가 진행되는 경우

```text
PR #204 / S05 merged
S05 post-merge audit -> PASS
S05 publicDigest changed
ready candidates -> S06, S12
```

S06과 S12는 각각 별도의 NVIDIA audit 요청으로 실행된다. S05 PR 본문과 review comment는 두 요청의 context에 들어가지 않는다. 두 노드가 모두 patch를 요구하면 DAG 순서대로 직전 검증 source commit을 base로 각각 PR을 생성한다.

### PR 생성 전후 상태표

| 상태 | branch | PR | 다음 동작 |
| --- | --- | --- | --- |
| PASS | 없음 | 없음 | 증명서 기록 |
| CACHED_PASS | 없음 | 없음 | 즉시 종료 |
| PATCH_REQUIRED | 없음 | 없음 | 독립 patch 요청 |
| PATCH_PROPOSED | 임시 worktree만 | 없음 | guard와 test |
| PATCH_VERIFIED | 있음 | draft PR 필수 | 직전 검증 branch를 base로 즉시 게시 |
| BLOCKED_* | 없음 | 없음 | Check와 artifact |
| PR_OPEN | 있음 | 하나 | review와 merge queue |
| STALE_BASE | 기존 branch 보존 | merge 금지 | 새 audit 후 같은 PR 갱신 또는 피드백, 자동 종료 금지 |
| MERGED | 삭제 가능 | merged | post-merge audit와 증명서 |
| CLOSED_UNMERGED | 삭제 가능 | closed | PASS 처리 금지 |

## 노드 상태 모델

```text
DISCOVERED
  -> CACHED_PASS
  -> AUDIT_READY
  -> AUDITING
  -> PASS
  -> PASS_ATTESTED
  -> PATCH_REQUIRED
  -> PATCH_GENERATING
  -> PATCH_PROPOSED
  -> VERIFYING
  -> PATCH_VERIFIED
  -> PR_OPEN
  -> MERGE_QUEUE
  -> MERGED
  -> POST_MERGE_AUDIT
  -> PASS_ATTESTED
```

중단 상태:

- `BLOCKED_MISSING_EVIDENCE`
- `BLOCKED_MISSING_VALUE`
- `BLOCKED_CONTRACT_CONFLICT`
- `BLOCKED_CROSS_OWNER_CHANGE`
- `BLOCKED_IMMUTABLE_INPUT_WRITE`
- `BLOCKED_PATCH_TOO_LARGE`
- `FAILED_SCHEMA`
- `FAILED_TRIGGER_STRUCTURE`
- `FAILED_SCOPE_GUARD`
- `FAILED_BUILD`
- `FAILED_TEST`
- `FAILED_REGRESSION`
- `STALE_BASE`
- `STALE_TRIGGER`

중단된 노드는 PR을 만들지 않고 GitHub Check에 정확한 Requirement ID와 재개 조건만 표시한다.

## 실행 파일 구조

```text
validation-runs/
└── <run-id>/
    ├── run.json
    ├── graph.json
    ├── impact.json
    ├── nodes/
    │   ├── S01/
    │   │   ├── audit-input.json
    │   │   ├── audit-output.json
    │   │   ├── patch-input.json
    │   │   ├── patch-output.json
    │   │   ├── verification.json
    │   │   └── pr-manifest.json
    │   ├── S02/
    │   └── ...
    ├── locks/
    └── summary.json
```

실행 디렉터리는 Actions artifact 또는 로컬 작업 산출물이며 `main`에 자동 커밋하지 않는다.

## GitHub Actions 구성

실제 구현 파일:

```text
.github/workflows/validate-design-index.yml
validation/impact-manifest.yml
validation/src/
validation/schemas/
validation/test/
validation/browser/
```

```text
discover
  -> compute-impact
  -> resolve-attestations
  -> build-dag
  -> audit-ready-nodes
  -> generate-patches-for-failures
  -> verify-patches
  -> open-prs-for-verified-patches
  -> write-pass-attestations
```

필수 concurrency key:

```yaml
concurrency:
  group: design-validation-${{ target-id }}-${{ section-id }}
  cancel-in-progress: false
```

상태 브랜치 writer는 별도 queue를 사용한다.

```yaml
concurrency:
  group: design-validation-state-writer
  cancel-in-progress: false
```

NVIDIA 호출은 token bucket으로 RPM을 제한한다. Stage별 19개 요청을 무조건 동시에 쏘지 않고 rate limit과 비용 한도에 맞춰 꺼낸다. DAG ready set은 patch·PR 단계에 적용한다.

## 보안과 신뢰 경계

- Markdown, Evidence metadata와 저장소 코드는 신뢰할 수 없는 입력으로 취급한다.
- 문서 안의 명령문은 시스템 지시가 아니라 검사 대상 텍스트다.
- NVIDIA API에는 shell, GitHub write, 파일 시스템 write 권한을 주지 않는다.
- NVIDIA는 JSON과 unified diff만 반환한다.
- 오케스트레이터만 검증된 diff를 임시 worktree에 적용한다.
- API key, 환경 변수, 로컬 절대 경로를 artifact나 PR에 기록하지 않는다.
- PR 생성 권한과 merge 권한을 분리한다.
- 자동 생성 PR은 자동 승인하지 않는다.
- 증명서에는 model 응답 원문 대신 검증된 구조와 hash를 기록한다.

## 전체 구현 구성

### 구성 1: 독립 감사와 정적 PASS

- Specification S01-S19 파서
- Section별 audit input builder
- JSON Schema 검증
- NVIDIA stateless 요청
- PASS attestation 생성
- `validation-state` fingerprint 조회와 CACHED_PASS skip
- GitHub Check 표시

### 구성 2: DAG와 영향 분석

- dependency graph validator와 cycle 검사
- `impact-manifest.yml`
- 변경 파일에서 dirty node 계산
- `publicDigest` 기반 후행 invalidation
- ready set scheduler와 rate limiter

### 구성 3: 안전한 patch

- 실패 노드만 patch input 생성
- allowed globs, base hash, size, deletion guard
- `git apply --check`
- 노드별 build, test, Playwright, axe 검증
- 영향받은 cached PASS 회귀 검사

### 구성 4: 조건부 PR 자동화

- 결정적 branch와 idempotency key
- 중복 PR 검색
- stacked parent chain과 중복 PR key 검사
- 검증된 patch만 PR 생성
- merge queue와 stale base 재검증
- 병합 후 PASS attestation 기록

## 성공 예시

현재 실행 결과가 다음과 같다고 가정한다.

```text
S01 audit PASS
S02 audit PASS
S03 audit PASS
S04 audit PASS
S05 PATCH_REQUIRED -> PATCH_VERIFIED -> PR #41
S06 audit PASS -> PASS_ATTESTED
S07 audit PASS
S08 audit PASS
S09 audit PASS
S10 audit PASS
S11 audit PASS
S12 audit PATCH_REQUIRED -> PATCH_GENERATING -> PATCH_VERIFIED -> PR #42 (base: PR #41 branch)
S13-S18 audit PASS 또는 PATCH_REQUIRED
S19 audit BLOCKED_MISSING_EVIDENCE
1차 문서 audit 논리 요청 수 = 19
2차 구현 audit 논리 요청 수 = 19
전체 primary audit 논리 요청 수 = 38
```

어느 Stage의 S05가 실패했어도 같은 Stage의 S06-S19 호출이나 2차 fan-out을 임의로 생략하지 않는다. 최초·강제 full audit의 논리 primary 요청 수는 정확히 38개이며, 애매한 응답의 같은-Stage·Section 재시도 횟수는 `documentAuditCalls`와 `implementationAuditCalls`에 별도로 기록한다. 2차 결과가 `PATCH_REQUIRED`이면 의존 Section 상태와 관계없이 모두 patch 생성과 PR 게시까지 진행한다. 하나라도 검증된 PR을 게시하지 못하면 실행 전체를 실패 처리하고 성공으로 보고하지 않는다.

S05의 자식 correction PR들은 파이프라인이 가장 깊은 branch부터 S05 대표 branch로 자동 병합한다. 사용자가 S05 대표 PR을 병합하면 새 PASS 증명서를 만들고, 입력 fingerprint가 바뀐 후행 노드는 다음 main 실행에서 각각 다시 감사한다. 다른 `PATCH_REQUIRED` Section은 S05의 사람 병합을 기다리지 않고 자기 대표 PR을 가져야 한다.

## 최종 권장안

가장 중요한 것은 `항목 수`, `API 호출 수`, `PR 수`를 같은 숫자로 취급하지 않는 것이다.

- 상위 감사 항목 수는 항상 19개지만 patch 하위 노드는 각 고유 Requirement ID마다 `SXX-1`, `SXX-2`처럼 하나씩 동적으로 늘어난다.
- 최초·강제 전체 audit의 논리 NVIDIA primary 요청 수는 정확히 38개다. 1차 19개와 2차 19개를 별도 집계하고 `UNKNOWN`·차단·스키마 오류의 같은-Stage·Section 독립 재시도는 별도 실제 호출 수로 추가 기록한다.
- 증분 audit 호출 수는 dirty Section 수만큼이며, 언제나 Section별 별도 요청이다.
- PATCH_REQUIRED 후보가 있으면 primary audit 38개와 별도로 Requirement별 독립 preflight, patch 후보, patch 재감사 요청이 추가되므로 전체 API 호출 수는 38개를 넘을 수 있다.
- 일시적인 하위 PR 생성 수는 실제 누락을 안전하게 구현하고 검증한 하위 노드 수만큼 생긴다. 이들은 최대 5개씩 Section 브랜치로 자동 병합되며, 정리 후 열린 PR 수는 실제 수정 Section 수와 같다.
- 근거 있는 모든 `PATCH_REQUIRED`는 선행 PASS나 병합을 기다리지 않고 같은 실행에서 stacked PR 생성 단계로 진행한다.
- 이미 통과한 노드는 fingerprint가 바뀌지 않는 한 정적으로 PASS 상태를 재사용한다.
- 독립성은 별도 요청과 작업공간으로 보장하고, 일관성은 DAG 증명서와 `publicDigest`로 보장한다.
- 충돌 방지는 file ownership, base hash, 직전 검증 parent commit, merge queue와 영향받은 PASS 회귀 검사로 보장한다. write-set 중복은 차단 조건이 아니다.

이 구조라면 하나의 코딩 에이전트가 전체 코드를 읽고 불필요한 영역까지 수정하는 문제를 피하면서도, 누락된 항목만 NVIDIA API가 작은 diff로 제안하고 GitHub PR로 검토할 수 있다.
