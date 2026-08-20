[English](DESIGN_INDEX_SPECIFICATION.md) | **한국어**

# GDWEB 재구현 명세 계약

## 계약 식별 정보

- 스키마: `secret-mcp/design-index/v2`
- 출력 파일명: `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md`
- 레퍼런스 ID: `gdweb-{{REFERENCE_NUMBER}}`
- 제목: `{{TITLE}}`
- GDWEB URL: `{{GDWEB_URL}}`
- 등록일: `{{REGISTERED_DATE}}`
- 수상: `{{AWARD_OR_NA}}`
- 콘셉트: `{{CONCEPT_OR_NA}}`
- GDWEB 주색상 메타데이터: `{{PRIMARY_COLOR_OR_NA}}`
- 제작사: `{{PRODUCTION_COMPANY_OR_NA}}`
- 원본 근거: `{{SOURCE_KIND}}={{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}`

## 요청 격리와 출력 규칙

1. 하나의 LLM 요청에서는 정확히 하나의 GDWEB 레퍼런스만 처리합니다.
2. 요청에는 해당 작품의 메타데이터, 명세 계약과 준비된 근거 이미지만 포함합니다.
3. 다른 작품의 ID, 메타데이터, 이미지, 계약, 생성 문서 또는 이전 요청의 컨텍스트를 포함하지 않습니다.
4. 클라이언트가 지원하면 `includeContext: none`과 동등한 방식으로 요청 컨텍스트를 비웁니다.
5. 검색 결과가 여러 개라면 순차 처리하며, 현재 작품의 문서를 저장한 뒤에만 다음 요청을 시작합니다.
6. 요청 하나마다 정확히 하나의 작품별 `DESIGN_INDEX` 문서를 생성합니다.
7. 사용자가 요청한 언어로 전체 문서를 작성합니다.
8. 완성된 Markdown 문서만 반환합니다. 설명, 요약 또는 여러 레퍼런스 비교로 감싸지 않습니다.
9. 첨부 이미지와 좌표 메타데이터가 해당 요청에서 사용할 수 있는 근거의 전체 경계입니다.

## 준비된 근거 좌표표

분석을 요청하기 전에 첨부 이미지마다 다음 블록을 생성합니다.

```text
- {{SOURCE_KIND}} part {{PART_NUMBER}}/{{TOTAL_PARTS}}
  - Evidence ID: {{EVIDENCE_ID}}
  - source: {{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}px at {{SOURCE_URL}}
  - prepared canvas: {{PREPARED_CANVAS_WIDTH}}x{{PREPARED_CANVAS_HEIGHT}}px
  - scale: x={{SCALE_X}}, y={{SCALE_Y}}
  - attached crop in prepared coordinates: x={{CROP_LEFT}}, y={{CROP_TOP}}, width={{CROP_WIDTH}}, height={{CROP_HEIGHT}}
  - mapped source crop: x={{SOURCE_CROP_LEFT}}, y={{SOURCE_CROP_TOP}}, width={{SOURCE_CROP_WIDTH}}, height={{SOURCE_CROP_HEIGHT}}
  - measured representative palette: {{HEX}} / {{RGB}} / {{HSL}} / {{PIXEL_COVERAGE_PERCENT}}
  - encoded bytes: {{BYTE_LENGTH}}
```

대표 팔레트는 이미지 정규화 후 축소된 스크린샷 픽셀에서 측정합니다. 이는 객관적인 스크린샷 근거이지만 원본 CSS 토큰을 증명하지는 않습니다. 원본 메타데이터가 확인해 주지 않는 한 샘플 색상은 `MEASURED`, 제안한 CSS 토큰은 `INFERRED`로 다룹니다.

## 필수 다음 작업

첨부된 모든 근거 이미지를 검사하고, 사용자가 요청한 언어로 완전한 `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md` 문서 하나를 작성합니다.

출력은 하나의 작품에만 해당하는 문서입니다. 문서 내부에서 근거에 보이는 모든 페이지 또는 라우트를 먼저 목록화하고, 페이지마다 서로 분리된 완전한 명세를 작성합니다.

이 레퍼런스를 다른 작품과 결합하지 않습니다. 무드보드, 짧은 요약 또는 일반적인 스타일 가이드를 만들지 않습니다.

## 근거와 측정 규칙

### 근거 표시

모든 주요 판단 또는 표의 행 앞에는 다음 중 하나를 표시합니다.

| 표시 | 의미 |
| --- | --- |
| `MEASURED` | 제공된 픽셀 좌표표, 이미지 크기, crop 메타데이터 또는 측정 팔레트에서 도출한 값 |
| `OBSERVED` | 첨부된 GDWEB 스크린샷 또는 제공된 메타데이터에서 직접 보이지만 수치로 측정하지 않은 내용 |
| `INFERRED` | 근거와 같은 결과를 재현하는 데 필요하지만 직접 보거나 측정할 수 없는 구체적인 구현 결정 |
| `UNKNOWN` | 정적 근거로 확인할 수 없는 값이나 동작. 사실처럼 단정하지 않음 |

### 측정 요구사항

- 모든 기하 값에는 구체적인 숫자와 단위를 붙입니다.
- 스크린샷 기하에는 `px`, 구현 대응값에는 `rem`, 유동 비율에는 백분율, 모션에는 `ms`를 우선 사용합니다.
- 원본 CSS의 정확한 값을 알 수 없으면 권장 구현값 하나, 근거, 신뢰도(`HIGH`, `MEDIUM`, `LOW`)와 시각 QA 허용 오차를 제시합니다. 넓은 범위만 제시하지 않습니다.
- 준비 좌표계에서 첨부 crop을 측정합니다. crop offset과 scale을 사용해 전체 준비 캔버스 또는 원본 이미지 좌표로 환산합니다.
- 타일 겹침은 반복 콘텐츠가 아니라 중복 근거입니다. 준비 캔버스의 `y` 좌표를 기준으로 섹션 중복을 제거합니다.
- 긴 스크롤 스크린샷은 여러 섹션을 포함한 하나의 페이지입니다. 서로 다른 라우트, 화면 또는 페이지 캔버스가 명확히 보일 때만 여러 페이지로 나눕니다.
- 콜라주에 여러 라우트의 스크린샷이 있으면 각각을 별도 페이지로 식별하고 이를 뒷받침하는 crop을 기록합니다.
- 보이는 계층과 관계를 유지합니다. 사용자가 소유했거나 명시적으로 허가하지 않은 저작권 문구와 브랜드 에셋은 대체합니다.
- 데스크톱과 모바일 근거를 서로 독립적인 1차 근거로 다룹니다. 둘 사이의 모든 반응형 변환을 설명합니다.
- `크다`, `현대적이다`, `깔끔하다`, `여유롭다`, `역동적이다` 같은 모호한 형용사는 측정값이 뒤따르지 않으면 유효하지 않습니다.
- 누락된 근거를 숨기기 위해 추론값을 측정값이나 관찰값으로 표시하지 않습니다.

## 필수 문서 구조

완성 문서는 아래 19개 번호 섹션을 모두 포함해야 합니다.

### 1. 재구현 목표와 범위

- 레퍼런스 식별 정보와 작품 제목을 기록합니다.
- 목표 충실도를 정의합니다.
- 지원 페이지와 라우트를 나열합니다.
- 대상 뷰포트를 나열합니다.
- 프레임워크에 독립적인 요구사항과 구현 권장사항을 구분합니다.
- 명시적인 비목표를 기록합니다.
- 근거가 하나의 긴 페이지인지, 여러 페이지인지, 모호한 콜라주인지 밝힙니다.
- 교체해야 하는 원본 문구, 로고, 상표, 사진과 브랜드 에셋을 명시합니다.

### 2. 근거 목록과 좌표계

- 첨부 이미지마다 표의 행 하나를 만듭니다.
- 필수 필드: 근거 ID, 종류, 조각 번호, 원본 크기, 준비 크기, crop 사각형, 원본 환산 사각형, 배율, 보이는 페이지 또는 섹션 범위, 한계.
- 기준 `x/y` 원점을 정의합니다.
- 겹치는 타일의 중복을 제거한 방식을 설명합니다.
- 이후의 모든 측정을 근거 ID와 좌표 또는 가시 영역에 연결합니다.
- 원본 이미지 픽셀, 준비 캔버스 픽셀, crop 내부 픽셀과 대상 CSS 픽셀을 구분합니다.
- 측정에 영향을 줄 수 있는 리사이징, JPEG 정규화, crop 또는 종횡비 변화를 기록합니다.

### 3. 사이트 맵과 페이지·라우트 목록

- 컴포넌트를 설명하기 전에 직접 확인되는 모든 페이지와 라우트를 나열합니다.
- 보이지 않는 라우트를 만들지 않습니다. 존재할 가능성은 있지만 보이지 않는 라우트는 `UNKNOWN`으로 기록하고 구현 범위에서 제외합니다.
- 기본 페이지를 식별합니다.
- 페이지마다 활성화되는 내비게이션 항목을 식별합니다.

필수 열:

| 필드 | 필수 값 |
| --- | --- |
| Page ID | `P-01`과 같은 안정적인 ID |
| 라우트 또는 이름 | 보이는 라우트, 화면 이름 또는 명시적인 `UNKNOWN` 대상 |
| 목적 | 페이지 목표와 주요 사용자 작업 |
| 근거 | 뒷받침하는 근거 ID와 crop 영역 |
| 공통 셸 | 페이지가 사용하는 셸 변형 |
| 데스크톱 | 제공 여부와 뒷받침하는 근거 |
| 모바일 | 제공 여부와 뒷받침하는 근거 |
| 활성 내비게이션 | 활성 항목과 상태 |
| 신뢰도 | 근거 표시와 함께 `HIGH`, `MEDIUM`, `LOW` 중 하나 |

### 4. 공통 애플리케이션 셸

- 뷰포트 배경을 명세합니다.
- 전체 폭과 최대 폭 동작을 명세합니다.
- 공통 컨테이너 폭과 전역 거터를 정의합니다.
- 전역 페이지 크롬, 공지 바, 유틸리티 바, 오버레이, 쿠키 UI, 플로팅 컨트롤과 맨 위로 이동 컨트롤을 정의합니다.
- stacking context와 공통 `z-index` 계층을 정의합니다.
- 전역 primitive와 페이지별 구성을 구분합니다.
- 셸 변형과 각 변형을 사용하는 페이지를 정의합니다.
- 전역 overflow와 페이지 높이 동작을 기록합니다.

### 5. 내비게이션과 헤더 명세

헤더가 단순해 보여도 이 섹션은 필수입니다.

#### 데스크톱 내비게이션 기하

다음 항목의 정확한 값을 제공합니다.

- 전체 헤더 높이
- 유틸리티 바 높이
- 콘텐츠 폭 또는 최대 폭
- 왼쪽과 오른쪽 padding
- 로고 `x`, `y`, 너비와 높이
- 메뉴 시작 `x`
- 항목 너비 또는 수평 padding
- 항목 간격
- 텍스트 baseline
- 아이콘 크기와 bounds
- 액션 영역 너비
- border
- 배경
- position 방식
- sticky 또는 fixed offset
- `z-index`

#### 모바일 내비게이션 기하

다음 항목의 정확한 값을 제공합니다.

- 바 높이
- 좌우 padding
- 로고 bounds
- 메뉴 컨트롤 bounds
- 최소 터치 영역
- 열린 패널 원점
- 패널 너비와 높이
- 행 높이
- 하위 항목 들여쓰기
- divider
- 오버레이 색상과 opacity
- 닫기 동작
- body 스크롤 잠금

#### 내비게이션 콘텐츠와 상태

- 보이는 모든 내비게이션 항목을 정확한 순서로 나열합니다.
- 항목마다 라우트 또는 명시적인 `UNKNOWN` 대상을 연결합니다.
- `default`, `hover`, `focus-visible`, `pressed`, `active`, `disabled`, `scrolled`, `menu-open`, `submenu-open` 상태를 정의합니다.
- 상태마다 정확한 글자색, 배경, border, 밑줄 또는 표시기, opacity, transform과 timing을 명세합니다.
- 헤더가 static, sticky, fixed, hero 위의 투명 헤더 또는 스크롤 후 변형되는 헤더인지 밝힙니다.
- 스크린샷에서 보이지 않는 전환은 `INFERRED` 또는 `UNKNOWN`으로 표시합니다.

### 6. 페이지별 명세

라우트 목록의 모든 페이지에 `Page P-XX: <name>` 하위 섹션을 하나씩 만듭니다. 페이지별 하위 섹션을 하나의 전역 섹션 목록으로 대체하지 않습니다.

모든 페이지 하위 섹션은 다음을 포함해야 합니다.

1. 라우트, 목적, 진입점, 공통 셸 변형, 활성 내비게이션 상태와 근거.
2. 데스크톱 캔버스 모델: 기준 뷰포트, 전체 페이지 높이, 콘텐츠 최대 폭, 거터, 열과 페이지 배경.
3. 모바일 캔버스 모델: 기준 뷰포트, 확인 가능한 경우 전체 페이지 높이, 좌우 padding, 쌓임 순서와 overflow 동작.
4. 헤더에서 푸터까지 순서대로 작성한 섹션 기하표.
5. 기하표의 모든 행에 대응하는 상세 섹션 명세.
6. 페이지별 컴포넌트, 데이터, 상태, 상호작용, 반응형 전환, 접근성, 에셋과 인수 검사.

페이지별 순서형 섹션 기하표에는 다음 항목이 반드시 있어야 합니다.

| 필드 | 필수 값 |
| --- | --- |
| Section ID | `P01-S03`과 같은 페이지 범위의 안정적인 ID |
| 근거 | 이미지 ID와 `x/y` 영역 |
| Bounds | 근거 픽셀 기준 `x`, `y`, 너비와 높이 |
| 의미 역할 | `header`, `hero`, `nav`, `main`, `section`, `aside`, `footer`, `dialog` 등 |
| Container | full bleed 또는 max-width, 정확한 너비와 거터 포함 |
| Layout | `block`, `flex`, `grid`, `absolute`, `sticky`, `fixed`, 열과 track 포함 |
| Spacing | 바깥 margin, 섹션 padding, 자식 gap, row gap, column gap |
| Alignment | 주축, 교차축, 텍스트 정렬과 baseline 동작 |
| Surface | 정확한 색상, gradient 또는 이미지, border, radius, shadow, opacity |
| Content | 보이는 텍스트 역할, 컨트롤, 미디어와 반복 항목 수 |
| Responsive | 데스크톱에서 모바일로의 변환과 breakpoint |
| 근거 수준 | `MEASURED`, `OBSERVED`, `INFERRED`, `UNKNOWN`과 신뢰도 |

### 7. 섹션과 레이아웃 상세 분석

- 페이지의 모든 섹션에 DOM 계층을 제공합니다.
- 정확한 CSS 레이아웃 모델을 명세합니다.
- grid template과 track을 기록합니다.
- flex direction, wrap, grow, shrink, basis를 기록합니다.
- min/max width와 intrinsic sizing을 기록합니다.
- 종횡비를 기록합니다.
- padding, gap, alignment와 wrapping을 기록합니다.
- overflow와 clipping을 기록합니다.
- sticky offset을 기록합니다.
- absolute anchor와 transform을 기록합니다.
- `z-index` 관계를 기록합니다.
- 데스크톱, 태블릿과 모바일 값을 따로 기록합니다.
- 설명만으로 모호할 수 있는 기하에는 CSS로 바로 옮길 수 있는 짧은 구현 스케치를 포함합니다.
- 반복 카드나 행은 항목 크기, 한 행의 개수, `minmax` 규칙, gap, 이미지 비율, 텍스트 제한과 마지막 미완성 행의 정렬을 명세합니다.

### 8. 컴포넌트 추상화

- `AppShell`을 루트로 하고 페이지별로 묶은 전체 컴포넌트 트리를 제공합니다.
- 컴포넌트마다 책임과 재사용 경계를 정의합니다.
- 타입을 포함한 props를 정의합니다.
- variants와 slots를 정의합니다.
- 로컬 상태와 공유 상태를 정의합니다.
- 발생 이벤트와 사용자 액션을 정의합니다.
- 데이터 의존성을 정의합니다.
- 필요한 경우 `loading`, `empty`, `error`, `disabled`, `selected`, success 상태를 정의합니다.
- 접근성 동작을 정의합니다.
- 모든 컴포넌트를 페이지와 섹션 ID에 연결합니다.
- 공통 내비게이션과 푸터는 한 번 정의하고, 페이지별 활성 상태나 변형은 참조로 기록합니다.
- 비슷해 보인다는 이유만으로 서로 다른 섹션을 하나의 컴포넌트로 강제 통합하지 않습니다.

### 9. 디자인 토큰과 정확한 색상 명세

- CSS에 바로 사용할 수 있는 토큰 표를 제공합니다.
- 완전한 `:root` custom property 블록을 제공합니다.
- 색상 행마다 안정적인 토큰 이름, HEX, RGB, HSL, alpha, 의미 역할, 사용 페이지와 섹션, 샘플 근거 ID와 좌표 또는 메타데이터 출처, 근거 수준, 신뢰도와 허용 시각 차이를 포함합니다.
- 존재하는 경우 배경, surface, text, muted text, border, primary, secondary, accent, success, warning, danger, overlay, focus ring, hover, pressed, disabled 색상을 포함합니다.
- 측정 팔레트를 근거로 사용하되 사진 색상과 UI surface·token 색상을 구분합니다.
- spacing, dimension, radius, border, shadow, opacity, `z-index`, breakpoint, container width, icon size, motion duration과 easing을 정확한 값으로 토큰화합니다.
- spacing scale을 제공합니다.
- spacing scale에 맞지 않는 모든 예외를 식별합니다.
- 메타데이터가 증명하지 않는 한 스크린샷 샘플 색상을 원본 CSS 변수라고 단정하지 않습니다.

### 10. 타이포그래피 행렬

보이는 모든 텍스트 역할에 다음을 정의합니다.

- font family와 fallback
- 폰트 소스 전략
- `px`와 `rem` 크기
- weight
- `px`와 단위 없는 line height
- letter spacing
- 대소문자 처리
- decoration
- alignment
- max-width
- wrapping 또는 truncation
- 모든 기준 뷰포트의 반응형 값

해당하는 경우 내비게이션 라벨, 유틸리티 텍스트, hero eyebrow, hero title, hero body, 섹션 제목, 카드 제목, 카드 본문, 메타데이터, 컨트롤, caption, form label, error와 footer text를 포함합니다.

### 11. 에셋과 아이콘 목록

- 페이지별 로고, 사진, 일러스트, 아이콘, 비디오, texture, chart와 장식 미디어를 나열합니다.
- 에셋마다 페이지와 섹션, 역할, 근거 crop, 표시 너비와 높이, 원본 종횡비, crop, focal point, `object-fit`, `object-position`, 반응형 처리, 로딩 우선순위, 포맷, alt 동작과 대체 전략을 정의합니다.
- 식별할 수 있는 익숙한 UI 아이콘은 알려진 라이브러리의 대응 아이콘으로 이름을 기록합니다.
- 아이콘을 식별할 수 없으면 정확한 stroke, fill, bounds와 optical alignment를 명세합니다.
- 재사용 가능한 에셋과 교체해야 하는 저작권·브랜드 에셋을 구분합니다.
- 모바일 전용 crop 또는 대체 에셋을 기록합니다.

### 12. 반응형 동작 행렬

- 근거가 다른 기준 폭을 뒷받침하지 않는 한 최소 `1440`, `1280`, `1024`, `768`, `390`, `360` CSS px 열을 사용합니다.
- 페이지와 주요 컴포넌트마다 각 폭의 컨테이너 너비, 거터, 열, 순서, 노출, 내비게이션 방식, 글자 크기, 간격, 이미지 crop과 터치 영역을 기록합니다.
- breakpoint를 숫자만이 아니라 동작 전환 규칙으로 정의합니다.
- 직접적인 모바일 근거가 없는 값은 `INFERRED`로 표시하고 이유를 작성합니다.
- 콘텐츠가 reflow, stack, wrap, scroll, clip, hide, move되는지 또는 상호작용 방식이 바뀌는지 밝힙니다.
- 동적 콘텐츠가 고정 형식 UI의 크기를 예기치 않게 바꾸지 않도록 최소·최대 크기를 정의합니다.
- 모든 대상 폭에서 의도하지 않은 가로 페이지 overflow가 `0px`여야 합니다.

### 13. 상호작용과 모션 상태 행렬

링크, 내비게이션, 버튼, 메뉴, 탭, 아코디언, 캐러셀, 폼, 모달, 카드와 미디어를 다룹니다.

적용 가능한 상태마다 다음을 정의합니다.

- Trigger
- 시각 변화
- 정확한 색상
- Opacity
- Transform
- Duration
- Easing
- Focus 동작
- 키보드 동작
- 포인터 동작
- Reduced-motion 대안

`hover`, `focus-visible`, `pressed`, `selected`, `active`, `disabled`, `loading`, `error`, `empty`, `success` 상태를 포함합니다. 스크린샷에서 보이지 않는 동작은 `INFERRED` 또는 `UNKNOWN`으로 표시해야 합니다.

### 14. 접근성 계약

- 페이지 landmark를 정의합니다.
- 페이지별 heading 순서를 정의합니다.
- skip link를 정의합니다.
- 키보드와 focus 순서를 정의합니다.
- focus-ring token을 정의합니다.
- form label과 description을 정의합니다.
- alt text 동작을 정의합니다.
- live region을 정의합니다.
- error association을 정의합니다.
- contrast 목표를 정의합니다.
- reduced-motion 동작을 정의합니다.
- zoom과 reflow 동작을 정의합니다.
- 최소 터치 영역을 정의합니다.
- 내비게이션은 해당하는 경우 menu button semantics, expanded state, focus containment, focus restoration, Escape 처리, body scroll 처리와 active page 안내를 포함해야 합니다.
- 상태를 전달할 때 색상에만 의존하지 않습니다.

### 15. 데이터와 콘텐츠 모델

- 페이지별 데이터 entity를 정의합니다.
- field, type과 cardinality를 정의합니다.
- optional과 nullable 값을 정의합니다.
- ordering과 grouping을 정의합니다.
- formatting 규칙을 정의합니다.
- localization 동작을 정의합니다.
- loading, empty, error와 success 콘텐츠를 정의합니다.
- sample fixture shape을 제공합니다.
- 근거에 있는 문구와 교체 가능한 placeholder 문구를 구분합니다.
- 근거가 뒷받침할 때만 반복 항목 제한과 pagination 또는 carousel 동작을 정의하며, 그렇지 않으면 `INFERRED` 또는 `UNKNOWN`으로 표시합니다.

### 16. 프론트엔드 구조

- 라우트와 레이아웃을 명세합니다.
- 권장 디렉터리 구조를 제시합니다.
- 페이지 모듈을 정의합니다.
- 공통 컴포넌트 모듈을 정의합니다.
- 스타일링 전략을 정의합니다.
- 토큰 파일을 정의합니다.
- 에셋 구성을 정의합니다.
- 데이터 모델을 정의합니다.
- 상태 소유권을 정의합니다.
- 서버와 클라이언트 경계를 정의합니다.
- 서드파티 라이브러리 책임을 정의합니다.
- 프레임워크 선택과 재구현 요구사항을 구분합니다.
- 다른 프레임워크도 동일한 시각·동작 계약을 만족할 수 있어야 합니다.

### 17. 구현 작업 그래프

다음 항목을 포함한 순서형 작업 ID를 만듭니다.

- 의존성
- 입력
- 출력
- 영향을 받는 페이지 ID
- 영향을 받는 섹션 ID
- 영향을 받는 컴포넌트 ID
- 완료 조건
- 병렬 처리 가능한 그룹

작업 그래프에는 측정 환경 설정, 디자인 토큰, 공통 셸, 내비게이션, 페이지별 구현, 반응형 작업, 상호작용, 접근성, 시각 QA와 성능 검증이 포함되어야 합니다.

### 18. 페이지별 인수 조건

- 페이지마다 별도의 인수 체크리스트를 만듭니다.
- 스크린샷 비교 뷰포트를 포함합니다.
- 섹션 bounds 허용 오차를 포함합니다.
- 컨테이너 정렬을 포함합니다.
- 헤더와 내비게이션 기하를 포함합니다.
- 색상 차이를 포함합니다.
- 타이포그래피 metric을 포함합니다.
- overflow와 텍스트 맞춤을 포함합니다.
- 에셋 로딩과 crop 검증을 포함합니다.
- 키보드 동작을 포함합니다.
- 반응형 상태를 포함합니다.
- 성능 기대값을 포함합니다.

기본 허용 오차 지침:

- 주요 기하 edge: `4px` 이내
- 반복 spacing 리듬: `2px` 이내
- 평면 UI 색상: `deltaE <= 3`
- 가로 페이지 overflow: `0px`
- 텍스트 또는 컨트롤 겹침: 없음
- 키보드로 접근할 수 없는 인터랙티브 컨트롤: 없음

기본 허용 오차를 변경할 때는 문서에 구체적인 이유를 기록합니다.

### 19. 불확실성과 결정

- 모든 `UNKNOWN` 항목을 페이지, 섹션과 컴포넌트별로 나열합니다.
- 대신 선택한 구체적인 구현 결정을 기록합니다.
- 검토하고 제외한 대안을 기록합니다.
- 신뢰도를 기록합니다.
- 결정이 틀렸을 때의 위험을 기록합니다.
- 불확실성을 해결하는 데 필요한 추가 근거를 기록합니다.
- 레이아웃, 상태, 접근성, 데이터 또는 인수 검사에 영향을 주는 미확인 값을 조용히 생략하지 않습니다.

## 완료 판정

다음 중 하나라도 없으면 문서는 미완성입니다.

- 페이지와 라우트 목록
- 보이는 모든 페이지의 서로 분리된 전체 명세
- 데스크톱·모바일 내비게이션 기하와 상태 계약
- 근거에 연결된 픽셀 측정값
- 정확한 색상 형식과 근거 분류
- 페이지별 섹션 bounds
- 컴포넌트 계약
- 타이포그래피 값
- 에셋과 crop 규칙
- 반응형 행렬
- 상호작용과 접근성 계약
- 프론트엔드 구조
- 구현 작업 그래프
- 페이지별 인수 조건
- 명시적인 불확실성 기록

다른 LLM이 GDWEB을 다시 열거나 누락된 측정값을 몰래 지어내지 않고도 완성된 문서만으로 작품을 페이지별로 구현할 수 있어야 합니다.

## 권장 Sampling 설정

sampling을 지원하는 MCP 클라이언트에서 이 계약을 사용할 때 다음 동작을 적용합니다.

```text
System role: senior frontend measurement and specification author
Scope: exactly one GDWEB reference
Context: none
Temperature: 0.2
Output: one complete Markdown DESIGN_INDEX document
Minimum required content: all 19 numbered sections and the completion gate
```

시스템 지시에는 내비게이션 기하, 섹션 bounds, 정확한 색상 형식, 반응형 값, 근거 좌표, 신뢰도와 시각 QA 허용 오차가 필수라는 내용을 명시해야 합니다.
