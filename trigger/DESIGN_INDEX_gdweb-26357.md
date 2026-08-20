# DESIGN_INDEX_gdweb-26357.md

**Schema:** `secret-mcp/design-index/v2`  
**Reference ID:** `gdweb-26357`  
**Title:** 카카오게임즈  
**Registered:** 2026-01-08  
**Award:** WINNER PRIZE  
**Primary-color metadata:** WHITE  
**Evidence scope:** One long corporate homepage, represented by four overlapping desktop crops and one complete mobile screenshot.

---

## 1. Reconstruction Goal and Scope

### 1.1 Goal

- **OBSERVED — HIGH confidence:** Reconstruct the single visible Kakao Games corporate homepage with fidelity to the supplied desktop and mobile screenshots.
- **MEASURED — HIGH confidence:** The canonical desktop reference is a `1920 × 8219 px` source image, supplied as a `1200 × 5137 px` prepared canvas at `0.625` scale.
- **MEASURED — HIGH confidence:** The canonical mobile evidence is a complete `243 × 1040 px` screenshot at `1:1` scale.
- **INFERRED — MEDIUM confidence:** The implementation should support ordinary browser viewports rather than reproducing the unusually narrow `243 px` capture only.
- **INFERRED — HIGH confidence:** All geometry should be authored responsively in CSS while matching the canonical prepared-image coordinates at `1200 px` desktop and `243 px` mobile.

### 1.2 Supported page inventory

- **OBSERVED — HIGH confidence:** Exactly one long page is visible: the corporate homepage.
- **UNKNOWN — HIGH confidence:** Destination pages referenced by navigation and buttons are not shown and are outside implementation scope.
- **INFERRED — MEDIUM confidence:** Recommended route for the reconstructed page: `/`.
- **OBSERVED — HIGH confidence:** Page sections, in order, are:
  1. Transparent global header over hero
  2. Hero
  3. Sustainability/ESG showcase
  4. Latest news
  5. Live games
  6. Crew stories
  7. Recruitment call-to-action
  8. Global footer

### 1.3 Fidelity targets

- **INFERRED — HIGH confidence:** Match major section edges within `±4 px` at the prepared `1200 px` desktop width.
- **INFERRED — HIGH confidence:** Match repeated spacing within `±2 px`.
- **INFERRED — HIGH confidence:** Match flat UI colors to `DeltaE 2000 ≤ 3`.
- **INFERRED — HIGH confidence:** Match type size within `±1 px`, line height within `±2 px`, and rendered line breaks where evidence is legible.
- **INFERRED — HIGH confidence:** Permit photographic differences only when original copyrighted assets are unavailable; preserve crop, luminance distribution, focal point, and aspect ratio.
- **INFERRED — HIGH confidence:** No horizontal document overflow at any supported width.

### 1.4 Framework-independent requirements

- **INFERRED — HIGH confidence:** Use semantic HTML landmarks, CSS Grid/Flexbox, responsive images, keyboard-operable controls, and centralized design tokens.
- **INFERRED — HIGH confidence:** Do not bake the full page into one bitmap.
- **INFERRED — HIGH confidence:** Use replaceable content data for news, games, crew stories, footer links, and navigation.
- **INFERRED — HIGH confidence:** Preserve the sparse white composition and unusually large vertical intervals.

### 1.5 Non-goals

- **UNKNOWN — HIGH confidence:** Internal destination-page layouts.
- **UNKNOWN — HIGH confidence:** Exact original animation choreography.
- **UNKNOWN — HIGH confidence:** Exact proprietary fonts, source video, and original asset filenames.
- **INFERRED — HIGH confidence:** Do not reproduce copyrighted brand imagery unless authorization exists; use licensed or newly created equivalents with matching visual roles.

---

## 2. Evidence Inventory and Coordinate System

### 2.1 Evidence table

| Status | Evidence ID | Kind/part | Source | Prepared canvas | Attached crop | Source-mapped crop | Scale | Visible range | Limitations |
|---|---|---|---:|---:|---:|---:|---:|---|---|
| MEASURED | E-D01 | Desktop 1/4 | `1920×8219` | `1200×5137` | `x0 y0 w1200 h1600` | `x0 y0 w1920 h2560` | `0.625` | Header, hero, sustainability heading/media | Bottom section continues |
| MEASURED | E-D02 | Desktop 2/4 | `1920×8219` | `1200×5137` | `x0 y1520 w1200 h1600` | `x0 y2432 w1920 h2560` | `0.625` | Sustainability actions, news, games beginning | Overlaps E-D01 by `80 px`; games continues |
| MEASURED | E-D03 | Desktop 3/4 | `1920×8219` | `1200×5137` | `x0 y3040 w1200 h1600` | `x0 y4864 w1920 h2560` | `0.625` | Games end, crew stories, recruitment CTA | Overlaps E-D02 by `80 px`; CTA continues |
| MEASURED | E-D04 | Desktop 4/4 | `1920×8219` | `1200×5137` | `x0 y4560 w1200 h577` | `x0 y7296 w1920 h923` | `0.625` | CTA tail and footer | Overlaps E-D03 by `80 px` |
| MEASURED | E-M01 | Mobile 1/1 | `243×1040` | `243×1040` | `x0 y0 w243 h1040` | Same | `1.0` | Entire homepage | Very small capture makes exact text metrics less reliable |

### 2.2 Canonical coordinates

- **MEASURED — HIGH confidence:** Desktop prepared origin is the top-left of the `1200 × 5137 px` assembled canvas.
- **MEASURED — HIGH confidence:** Desktop source coordinates are calculated as `sourceX = preparedX / 0.625` and `sourceY = preparedY / 0.625`.
- **MEASURED — HIGH confidence:** Mobile origin is the top-left of E-M01.
- **MEASURED — HIGH confidence:** E-D02 local coordinates receive a `+1520 px` global-y offset.
- **MEASURED — HIGH confidence:** E-D03 local coordinates receive a `+3040 px` global-y offset.
- **MEASURED — HIGH confidence:** E-D04 local coordinates receive a `+4560 px` global-y offset.
- **MEASURED — HIGH confidence:** The `80 px` overlap between adjacent desktop crops is evidence duplication and is counted once.

### 2.3 Measurement reliability

- **MEASURED — HIGH confidence:** Canvas dimensions, crop offsets, scale factors, and supplied palettes are exact evidence metadata.
- **OBSERVED — MEDIUM confidence:** Section edges and content bounds are visually estimated from the raster evidence.
- **INFERRED — MEDIUM confidence:** Recommended CSS values regularize raster estimates onto reusable spacing and container tokens.
- **INFERRED — HIGH confidence:** Unless otherwise stated, desktop QA tolerance is `±4 px` and mobile tolerance is `±3 px`.

---

## 3. Site Map and Page/Route Inventory

| Status | Page ID | Route/name | Purpose | Evidence | Shell | Desktop | Mobile | Confidence |
|---|---|---|---|---|---|---|---|---|
| OBSERVED | P-01 | `/` — Kakao Games corporate homepage | Introduce company, ESG work, news, games, culture, and recruitment | E-D01–E-D04, E-M01 | Transparent-over-hero header; white footer | Yes | Yes | HIGH |
| UNKNOWN | U-01 | Company introduction destinations | Targets of “소개” and hero button | Navigation/button labels only | Unknown | Not shown | Not shown | HIGH |
| UNKNOWN | U-02 | Business/game/news/investor/ESG/careers destinations | Navigation and card targets | Labels only | Unknown | Not shown | Not shown | HIGH |

- **OBSERVED — HIGH confidence:** P-01 is the default page.
- **OBSERVED — MEDIUM confidence:** No desktop navigation item is visibly underlined or otherwise marked active.
- **INFERRED — MEDIUM confidence:** Treat the logo/home link as the active-page indicator using `aria-current="page"` without adding a visible underline absent from evidence.

---

## 4. Shared Application Shell

### 4.1 Global canvas

- **MEASURED — HIGH confidence:** Desktop prepared page: `1200 × 5137 px`.
- **MEASURED — HIGH confidence:** Mobile page: `243 × 1040 px`.
- **OBSERVED — HIGH confidence:** Dominant page surface is white.
- **INFERRED — HIGH confidence:** Use `body { margin: 0; background: #FFFFFF; color: #111111; }`.
- **OBSERVED — HIGH confidence:** Sections are primarily full-width white bands containing centered content.
- **INFERRED — MEDIUM confidence:** Desktop content max-width: `1012 px`, leaving approximately `94 px` gutters at `1200 px`.
- **INFERRED — MEDIUM confidence:** Narrow editorial content max-width: `826 px`.
- **INFERRED — HIGH confidence:** Fluid width rule: `width: min(calc(100% - 48px), 1012px)`.
- **INFERRED — MEDIUM confidence:** At widths below `768 px`, side gutters become `16 px`; E-M01 visually compresses these to approximately `7–10 px`.

### 4.2 Global chrome

- **OBSERVED — HIGH confidence:** No announcement bar, cookie banner, modal, or persistent bottom navigation is visible.
- **OBSERVED — HIGH confidence:** A circular back-to-top control appears near the bottom-right above the footer.
- **INFERRED — MEDIUM confidence:** Back-to-top control is fixed at `right: 18 px; bottom: 18 px`, `38 × 38 px` desktop and `28 × 28 px` mobile.
- **INFERRED — MEDIUM confidence:** Shell stacking:
  - base content: `z-index: 0`
  - decorative media: `z-index: 1`
  - section content: `z-index: 2`
  - header: `z-index: 100`
  - mobile overlay: `z-index: 190`
  - mobile panel: `z-index: 200`
  - focus/skip link: `z-index: 300`

---

## 5. Navigation and Header Specification

### 5.1 Desktop geometry

Coordinates below reference E-D01.

| Status | Property | Value | Evidence/basis | Confidence | QA |
|---|---|---:|---|---|---|
| MEASURED | Total header height | `68 px` prepared / `109 px` source | E-D01 `y0–68` | MEDIUM | `±4 px` |
| OBSERVED | Utility bar | `0 px` | No separate utility row | HIGH | exact |
| INFERRED | Content width | `1144 px` | `28 px` outer inset | MEDIUM | `±6 px` |
| MEASURED | Left/right padding | `28 px` / `20 px` | Visible logo and locale capsule | MEDIUM | `±4 px` |
| MEASURED | Logo bounds | `x27 y17 w83 h12 px` | E-D01 | MEDIUM | `±3 px` |
| MEASURED | Menu start | `x367 px` | First label “소개” | MEDIUM | `±4 px` |
| INFERRED | Menu item padding | `0 17 px` | Seven-label spread | MEDIUM | `±3 px` |
| INFERRED | Menu gap | `17 px` | Centered label distribution | MEDIUM | `±3 px` |
| MEASURED | Menu baseline | `y26 px` | E-D01 label line | MEDIUM | `±2 px` |
| MEASURED | Locale control | `x1133 y12 w48 h24 px` | E-D01 | MEDIUM | `±3 px` |
| INFERRED | Globe icon | `12 × 12 px` | Locale capsule | MEDIUM | `±2 px` |
| INFERRED | Action area | `68 px` | Right locale region | MEDIUM | `±4 px` |
| OBSERVED | Border | `0 px` | No visible separator over hero | HIGH | exact |
| OBSERVED | Background | Transparent | Hero visible through header | HIGH | `DeltaE n/a` |
| INFERRED | Position | `absolute; top:0` | Header overlays hero | MEDIUM | visual |
| INFERRED | z-index | `100` | Required overlay ordering | HIGH | exact |

### 5.2 Mobile geometry

E-M01 indicates the desktop information hierarchy remains extremely compact. Exact menu affordance is not legible.

| Status | Property | Recommended value | Evidence/basis | Confidence | QA |
|---|---|---:|---|---|---|
| INFERRED | Bar height | `34 px` | Hero/header proportion in E-M01 | LOW | `±4 px` |
| INFERRED | Side padding | `7 px` at `243 px`; `16 px` at `360+ px` | E-M01 | MEDIUM | `±3 px` |
| INFERRED | Logo bounds | `x7 y6 w33 h6 px` at 243 | Tiny visible mark | LOW | `±2 px` |
| UNKNOWN | Menu-control visibility | Not conclusively legible | E-M01 | HIGH | n/a |
| INFERRED | Production menu button | `40 × 40 px` touch target at `360+ px` | Accessibility requirement | HIGH | exact |
| INFERRED | Icon bounds | `20 × 20 px` | Standard accessible control | HIGH | `±1 px` |
| INFERRED | Open-panel origin | `top:0; right:0` | Recommended mobile behavior | LOW | n/a |
| INFERRED | Panel size | `min(88vw, 360px) × 100dvh` | Recommended behavior | LOW | `±4 px` |
| INFERRED | Row height | `52 px` | Accessible navigation | MEDIUM | `±2 px` |
| INFERRED | Submenu indentation | `20 px` | Hierarchy | LOW | `±2 px` |
| INFERRED | Divider | `1 px solid #EEEEEE` | Palette/evidence | MEDIUM | `DeltaE≤3` |
| INFERRED | Overlay | `rgba(0,0,0,.52)` | Accessible panel separation | LOW | alpha `±.05` |
| INFERRED | Close behavior | Close button, Escape, overlay click, route selection | Accessibility | HIGH | functional |
| INFERRED | Scroll locking | Lock document while open | Accessibility | HIGH | functional |

### 5.3 Visible navigation order

| Status | Order | Label | Target |
|---|---:|---|---|
| OBSERVED | 1 | 소개 | UNKNOWN |
| OBSERVED | 2 | 사업소개 | UNKNOWN |
| OBSERVED | 3 | 게임 | UNKNOWN |
| OBSERVED | 4 | 뉴스룸 | UNKNOWN |
| OBSERVED | 5 | 투자정보 | UNKNOWN |
| OBSERVED | 6 | 지속가능경영 | UNKNOWN |
| OBSERVED | 7 | 인재영입 | UNKNOWN |
| OBSERVED | 8 | KR locale control | UNKNOWN locale selector |

### 5.4 Header state contract

| Status | State | Exact implementation |
|---|---|---|
| INFERRED | Default | White labels/logo, transparent surface, opacity `1` |
| INFERRED | Hover | Text opacity `.72`; `160 ms cubic-bezier(.2,.8,.2,1)` |
| INFERRED | Focus-visible | `2 px solid #4169F5`, `3 px` offset, radius `4 px` |
| INFERRED | Pressed | opacity `.55`, transform `translateY(1px)`, `80 ms` |
| INFERRED | Active | White text, weight `700`; no new underline |
| INFERRED | Disabled | opacity `.35`, pointer events disabled |
| UNKNOWN | Scrolled | Screenshot does not reveal scroll transformation |
| INFERRED | Recommended scrolled | White `rgba(255,255,255,.96)` surface, black text, `1 px #EEEEEE` border, `180 ms` transition |
| INFERRED | Menu-open | Mobile overlay/panel active; button `aria-expanded=true` |
| UNKNOWN | Submenu-open | Submenus are not visible |
| INFERRED | Recommended submenu-open | Rotate chevron `180deg` over `160 ms`; reveal nested rows |

---

## 6. Page-by-Page Specifications

## Page P-01: Kakao Games Corporate Homepage

### 6.1 Route and purpose

- **INFERRED — HIGH confidence:** Route: `/`.
- **OBSERVED — HIGH confidence:** Purpose: corporate introduction and pathways into company, ESG, news, game portfolio, culture, and recruitment content.
- **OBSERVED — HIGH confidence:** Entry points include logo, seven top navigation items, locale control, hero CTA, ESG CTAs, card links, list links, recruitment CTA, footer links, social links, and back-to-top.
- **OBSERVED — HIGH confidence:** Shell variant is transparent header over a dark photographic hero.
- **INFERRED — MEDIUM confidence:** Active navigation is represented by the home logo, not a text item.
- **OBSERVED — HIGH confidence:** Supporting evidence: E-D01–E-D04 and E-M01.

### 6.2 Desktop canvas model

- **MEASURED — HIGH confidence:** Reference prepared canvas: `1200 × 5137 px`.
- **MEASURED — HIGH confidence:** Reference source canvas: `1920 × 8219 px`.
- **INFERRED — MEDIUM confidence:** Main container max-width: `1012 px`.
- **MEASURED — MEDIUM confidence:** Typical content gutters: `94 px`.
- **INFERRED — MEDIUM confidence:** Narrow centered headings use max-width `760 px`.
- **OBSERVED — HIGH confidence:** Background is primarily `#FFFFFF`.
- **OBSERVED — HIGH confidence:** Layout uses one-column full-width sections, with three- or four-column content inside selected sections.

### 6.3 Mobile canvas model

- **MEASURED — HIGH confidence:** Reference mobile canvas: `243 × 1040 px`.
- **MEASURED — HIGH confidence:** Full visible page height: `1040 px`.
- **INFERRED — MEDIUM confidence:** Side padding at the evidence width: `7 px`.
- **INFERRED — HIGH confidence:** Side padding at implementation widths `360–390 px`: `16 px`.
- **OBSERVED — MEDIUM confidence:** Most content remains compact and some repeated media remains in horizontal rows rather than becoming full-width single cards.
- **INFERRED — MEDIUM confidence:** At `360–767 px`, news and crew cards should use a horizontally scrollable track to preserve the screenshot’s visual density.
- **INFERRED — HIGH confidence:** Document overflow-x is hidden; only designated carousels may scroll horizontally.

### 6.4 Ordered section geometry

| Status | Section | Evidence | Bounds on prepared canvas | Role | Container/layout | Spacing/alignment | Surface/content | Responsive | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| MEASURED | P01-S01 Header | E-D01 `x0 y0–68` | `x0 y0 w1200 h68` | header/nav | Full bleed; inner `1144 px`; flex | `28 px` sides; centered cross-axis | Transparent; logo, 7 links, locale | Collapse/compact below `768 px` | MEDIUM |
| MEASURED | P01-S02 Hero | E-D01 `x0 y0–674` | `x0 y0 w1200 h674` | hero | Full bleed; absolute media; content left | Content `x37 y211`; left aligned | Dark image/video, white copy/CTA | Height `136 px` in E-M01; focal crop retained | MEDIUM |
| INFERRED | P01-S03 Sustainability | E-D01 `y674–1600`, E-D02 global `y1520–1905` | `x0 y674 w1200 h1231` | main section | Full bleed; centered heading; media strip | Top padding `151 px`; large lower whitespace | White; pale lavender decorations; 4-media strip; 2 CTAs | Compact media strip on mobile | MEDIUM |
| MEASURED | P01-S04 Latest News | E-D02 local `y425–1010`, global `y1945–2530` | `x0 y1945 w1200 h585` | section | `1012 px`; 3-column grid | `28 px` gap; centered heading | Three news cards and CTA | Horizontal 3-card track/mobile | MEDIUM |
| MEASURED | P01-S05 Live Games | E-D02 global `y2570–3120`, E-D03 global `y3040–3370` | `x0 y2570 w1200 h800` | section | `1012 px`; 2-column split | Left list/right image; `64 px` gap | Game list, selected game artwork, CTA | Stack title then image/list below `768 px` | MEDIUM |
| MEASURED | P01-S06 Crew Stories | E-D03 global `y3430–4070` | `x0 y3430 w1200 h640` | section | `1012 px`; centered heading; 3 cards | `28 px` columns | White; three culture stories and CTA | Horizontal track/mobile | MEDIUM |
| MEASURED | P01-S07 Recruitment | E-D03 global `y4145–4625`, E-D04 `y4560–4680` | `x0 y4145 w1200 h535` | section/CTA | Centered overlay over decorative form | Centered text/control | White, pale lavender 3D loop, blue CTA | Decoration scaled down | MEDIUM |
| MEASURED | P01-S08 Footer | E-D04 global `y4680–5137` | `x0 y4680 w1200 h457` | footer | Full width; multi-column inner | `35 px` outer inset | White; top border, sitemap, social, logo/legal | Compact grid at mobile | MEDIUM |

### 6.5 Detailed section specifications

#### P01-S01 Header

- **OBSERVED — HIGH confidence:** Header overlays the hero without a separate surface.
- **INFERRED — HIGH confidence:** DOM: `header > nav > a.logo + ul.primary-nav + button.locale`.
- **INFERRED — MEDIUM confidence:** Inner layout: `display:grid; grid-template-columns: 160px 1fr 80px; align-items:center`.
- **INFERRED — HIGH confidence:** Navigation labels use white text and single-line presentation.
- **INFERRED — HIGH confidence:** Logo links to the homepage and has accessible name “Kakao Games home.”
- **UNKNOWN — HIGH confidence:** Dropdown presence and exact target URLs.

#### P01-S02 Hero

- **MEASURED — MEDIUM confidence:** Hero height is approximately `674 px` prepared (`1078 px` source).
- **MEASURED — MEDIUM confidence:** Copy block starts near `x37 y214`.
- **MEASURED — MEDIUM confidence:** Title block measures approximately `500 × 116 px`.
- **OBSERVED — HIGH confidence:** Visible title: “일상이 게임이 되는 세상 / 카카오게임즈”.
- **OBSERVED — HIGH confidence:** Supporting copy occupies two lines.
- **MEASURED — MEDIUM confidence:** CTA bounds approximately `x38 y419 w177 h48`.
- **INFERRED — MEDIUM confidence:** Media uses `object-fit: cover; object-position: 58% 48%`.
- **INFERRED — MEDIUM confidence:** Overlay: linear gradient from `rgba(0,0,0,.70)` left to `rgba(0,0,0,.18)` right, plus `rgba(0,0,0,.14)` overall.
- **OBSERVED — HIGH confidence:** Primary focal subject is a yellow mascot airborne at center-right.
- **INFERRED — MEDIUM confidence:** Desktop content width `540 px`; mobile width `150 px` at E-M01 and `min(82vw, 440px)` at production mobile widths.
- **INFERRED — HIGH confidence:** If video is used, provide poster, muted autoplay only, pause control, and reduced-motion fallback.

#### P01-S03 Sustainability

- **MEASURED — MEDIUM confidence:** Heading baseline region begins near prepared `y833`.
- **OBSERVED — HIGH confidence:** Heading: “지속가능한 미래를 위한 노력”.
- **OBSERVED — HIGH confidence:** Subheading describes positive change through games.
- **MEASURED — MEDIUM confidence:** Media row begins around `y972` and has visible image height near `207 px`.
- **OBSERVED — HIGH confidence:** Four media items are visible; the fourth is clipped by the right edge in E-D01, indicating a carousel/track.
- **INFERRED — MEDIUM confidence:** Track width exceeds viewport; item width `307 px`, gap `29 px`, first item offset `35 px`.
- **INFERRED — MEDIUM confidence:** Use `grid-auto-flow:column; grid-auto-columns:307px`.
- **OBSERVED — HIGH confidence:** First item has a caption beneath the image; other captions may be outside the captured state or visually suppressed.
- **MEASURED — MEDIUM confidence:** Two black actions appear centered around global `y1733`, each approximately `179 × 49 px`, gap `14 px`.
- **OBSERVED — HIGH confidence:** Decorative pale lavender shapes sit behind content and do not convey information.
- **INFERRED — HIGH confidence:** Decorative shapes are `aria-hidden="true"` and must not affect layout.

#### P01-S04 Latest News

- **MEASURED — MEDIUM confidence:** Heading center is around `x600 y1995`.
- **OBSERVED — HIGH confidence:** Heading: “카카오게임즈 최신 뉴스”.
- **MEASURED — MEDIUM confidence:** Card grid begins near global `y2087`.
- **INFERRED — MEDIUM confidence:** Grid container `1012 px`; three columns of `318 px`; gap `29 px`.
- **MEASURED — MEDIUM confidence:** Card image ratio is approximately `318:185` (`1.72:1`).
- **OBSERVED — HIGH confidence:** Exactly three cards are visible.
- **OBSERVED — HIGH confidence:** Each card contains image, title, category, and date.
- **INFERRED — HIGH confidence:** Card titles clamp to two lines desktop and three lines mobile.
- **MEASURED — MEDIUM confidence:** Centered black “보도자료 전체보기” button approximately `178 × 49 px`.
- **INFERRED — HIGH confidence:** Images use `object-fit:cover`; cards have no visible border or shadow.

#### P01-S05 Live Games

- **OBSERVED — HIGH confidence:** Section heading: “서비스 중인 게임”.
- **OBSERVED — HIGH confidence:** Intro copy says games are published across mobile, PC, and console platforms.
- **INFERRED — MEDIUM confidence:** Desktop split uses columns `400 px 548 px` with `64 px` gap.
- **OBSERVED — HIGH confidence:** Visible list:
  - 오딘: 발할라 라이징
  - 아키에이지 워
  - 배틀그라운드
  - 패스 오브 엑자일 2
  - 크로노오디세이
- **OBSERVED — HIGH confidence:** First game is selected, bold, and underlined.
- **MEASURED — MEDIUM confidence:** Artwork occupies approximately `x558–1106`, global `y2814–3277`.
- **INFERRED — MEDIUM confidence:** Artwork ratio `548:463`; crop to `1.18:1`.
- **INFERRED — HIGH confidence:** Game selector should be a semantic tablist only if it changes the artwork in place; otherwise use a link list.
- **INFERRED — MEDIUM confidence:** Selected row uses `font-weight:700`, underline thickness `2 px`, underline offset `5 px`.
- **MEASURED — MEDIUM confidence:** Black “서비스 중인 게임 전체보기” CTA is approximately `179 × 49 px`.
- **INFERRED — HIGH confidence:** Mobile order: heading, intro, selected artwork, game list, CTA.

#### P01-S06 Crew Stories

- **OBSERVED — HIGH confidence:** Heading: “카카오게임즈 크루들의 생생한 이야기”.
- **OBSERVED — HIGH confidence:** Supporting line: “즐겁고 행복하게, 건강하게 일합니다.”
- **INFERRED — MEDIUM confidence:** Grid container `1012 px`, three columns `318 px`, gap `29 px`.
- **OBSERVED — HIGH confidence:** Exactly three cards are visible.
- **MEASURED — MEDIUM confidence:** Card images are approximately `318 × 184 px`.
- **OBSERVED — HIGH confidence:** Each card has image, title, category, and date.
- **INFERRED — HIGH confidence:** Titles clamp to two lines desktop and three mobile.
- **MEASURED — MEDIUM confidence:** Centered black “크루스토리 전체보기” button is approximately `178 × 49 px`.

#### P01-S07 Recruitment

- **OBSERVED — HIGH confidence:** Centered message: “게임으로 하나되는 세상 / 카카오게임즈 크루를 찾습니다!”
- **MEASURED — MEDIUM confidence:** Blue CTA is approximately `179 × 49 px`.
- **OBSERVED — HIGH confidence:** Large pale lavender loop/ribbon artwork sits behind the message.
- **INFERRED — MEDIUM confidence:** Section uses `position:relative; min-height:535px; display:grid; place-items:center`.
- **INFERRED — MEDIUM confidence:** Decorative artwork width `470 px`, centered at approximately `50% 56%`, opacity `.74`.
- **INFERRED — HIGH confidence:** Copy and CTA remain above decoration at `z-index:2`.
- **INFERRED — HIGH confidence:** Mobile artwork width `130 px` at E-M01 and `260 px` at `390 px`.

#### P01-S08 Footer

- **MEASURED — MEDIUM confidence:** Footer begins near global `y4680` with a `1 px` light divider.
- **INFERRED — MEDIUM confidence:** Inner width `1130 px`, margin `35 px`.
- **OBSERVED — HIGH confidence:** Seven sitemap columns mirror top-level navigation categories.
- **OBSERVED — HIGH confidence:** Social icons appear right-aligned near the sitemap top.
- **OBSERVED — HIGH confidence:** Large black “kakaogames” wordmark appears in the lower-left.
- **OBSERVED — HIGH confidence:** Legal links and copyright sit below the wordmark.
- **OBSERVED — HIGH confidence:** A related-sites selector appears bottom-right.
- **INFERRED — MEDIUM confidence:** Desktop top grid uses `grid-template-columns: repeat(7,minmax(80px,1fr)) 180px`.
- **INFERRED — HIGH confidence:** Mobile uses four compact columns followed by logo/legal and social controls.
- **UNKNOWN — HIGH confidence:** Exact social destinations and related-site options.

### 6.6 Page-specific states and interactions

- **INFERRED — MEDIUM confidence:** Sustainability media row may be draggable/scrollable; static evidence does not reveal controls.
- **INFERRED — MEDIUM confidence:** Game names update the selected artwork without navigation.
- **INFERRED — HIGH confidence:** News and crew cards are whole-card links with one focus target per card.
- **INFERRED — HIGH confidence:** Back-to-top scrolls to document start and restores focus to the skip link or page heading.
- **UNKNOWN — HIGH confidence:** Whether hero media auto-plays.
- **UNKNOWN — HIGH confidence:** Whether cards animate on scroll.

### 6.7 Page-specific accessibility

- **INFERRED — HIGH confidence:** Landmark order: `header`, `main`, section elements, `footer`.
- **INFERRED — HIGH confidence:** One visually dominant `h1` in the hero.
- **INFERRED — HIGH confidence:** Sustainability, latest news, live games, crew stories, and recruitment use `h2`.
- **INFERRED — HIGH confidence:** Card titles and footer column headings use `h3` or semantically equivalent labelled groups.
- **INFERRED — HIGH confidence:** Decorative forms use empty alt text or CSS backgrounds.
- **INFERRED — HIGH confidence:** Meaningful photographs receive concise Korean alt text derived from editorial data.

---

## 7. Section and Layout Deep Dives

### 7.1 Desktop layout sketch

```css
.page {
  min-width: 0;
  overflow-x: clip;
  background: #fff;
}

.container {
  width: min(calc(100% - 48px), 1012px);
  margin-inline: auto;
}

.hero {
  position: relative;
  min-height: 674px;
  overflow: hidden;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 29px;
}

.games-layout {
  display: grid;
  grid-template-columns: 400px 548px;
  gap: 64px;
  align-items: start;
}
```

- **INFERRED — MEDIUM confidence:** Desktop breakpoint behavior applies at `min-width:1024 px`.
- **INFERRED — HIGH confidence:** Cards use intrinsic content height; images retain fixed aspect ratio.
- **INFERRED — HIGH confidence:** Incomplete rows align to the inline start rather than centering.

### 7.2 Tablet layout

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .container { width: calc(100% - 64px); }
  .card-grid { gap: 20px; }
  .games-layout {
    grid-template-columns: minmax(260px, .8fr) minmax(0, 1.2fr);
    gap: 32px;
  }
}
```

- **INFERRED — MEDIUM confidence:** Header labels reduce padding before switching to mobile navigation.
- **INFERRED — MEDIUM confidence:** Hero height becomes `56vw`, clamped between `480 px` and `600 px`.
- **INFERRED — MEDIUM confidence:** Sustainability media remains horizontally scrollable.

### 7.3 Mobile layout

```css
@media (max-width: 767px) {
  .container {
    width: auto;
    margin-inline: 16px;
  }

  .card-grid,
  .media-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min(78vw, 300px);
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: x mandatory;
    gap: 12px;
  }

  .card-grid > *,
  .media-track > * {
    scroll-snap-align: start;
  }

  .games-layout {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
```

- **OBSERVED — MEDIUM confidence:** E-M01 compresses the entire page into `1040 px`; section heights are proportionally much smaller than desktop.
- **INFERRED — LOW confidence:** The mobile capture may have been generated with page-level scaling or a site-specific compact stylesheet.
- **INFERRED — HIGH confidence:** Production reconstruction should prioritize readable minimum text and accessible controls even if this yields a taller page than `1040 px` at `360–390 px`.
- **INFERRED — MEDIUM confidence:** A special `max-width:280 px` compact mode may scale typography and spacing to match E-M01.

### 7.4 Repeated cards

- **INFERRED — MEDIUM confidence:** Desktop card width `318 px`.
- **INFERRED — MEDIUM confidence:** Desktop image ratio `1.72:1`.
- **INFERRED — HIGH confidence:** Card internal gap: image-to-title `16 px`, title-to-meta `14 px`.
- **INFERRED — HIGH confidence:** Column gap `29 px`.
- **INFERRED — HIGH confidence:** Title line clamp: `2`.
- **INFERRED — HIGH confidence:** Metadata remains one line and may truncate with ellipsis.
- **INFERRED — HIGH confidence:** Card links receive a single `4 px` rounded focus outline; card surface itself remains borderless.

---

## 8. Component Abstraction

### 8.1 Component tree

```text
AppShell
├─ SkipLink
├─ SiteHeader
│  ├─ BrandLogo
│  ├─ PrimaryNavigation
│  │  └─ NavigationItem × 7
│  ├─ LocaleSelector
│  └─ MobileMenu
├─ Main[P-01]
│  ├─ HeroSection[P01-S02]
│  │  ├─ HeroMedia
│  │  ├─ HeroCopy
│  │  └─ ActionButton
│  ├─ SustainabilitySection[P01-S03]
│  │  ├─ SectionHeading
│  │  ├─ EditorialMediaTrack
│  │  ├─ DecorativePlanes
│  │  └─ ActionGroup
│  ├─ NewsSection[P01-S04]
│  │  ├─ SectionHeading
│  │  ├─ EditorialCardGrid
│  │  │  └─ NewsCard × 3
│  │  └─ ActionButton
│  ├─ GamesSection[P01-S05]
│  │  ├─ SectionHeading
│  │  ├─ GameSelector
│  │  ├─ GameArtwork
│  │  └─ ActionButton
│  ├─ CrewStoriesSection[P01-S06]
│  │  ├─ SectionHeading
│  │  ├─ EditorialCardGrid
│  │  │  └─ CrewCard × 3
│  │  └─ ActionButton
│  └─ RecruitmentSection[P01-S07]
│     ├─ DecorativeLoop
│     ├─ RecruitmentCopy
│     └─ PrimaryAction
├─ BackToTop
└─ SiteFooter[P01-S08]
   ├─ SitemapColumns
   ├─ SocialLinks
   ├─ FooterBrand
   ├─ LegalLinks
   └─ RelatedSites
```

### 8.2 Contracts

| Status | Component | Responsibility/props | State/events | Loading/empty/error | Accessibility |
|---|---|---|---|---|---|
| INFERRED | `SiteHeader` | `items: NavItem[]`, `locale`, `theme:'overlay'|'solid'` | `menuOpen`, `scrolled`; emits navigate/toggle | Navigation remains available without JS | `nav` label, current-page state |
| INFERRED | `ActionButton` | `href`, `label`, `variant:'dark'|'primary'|'outline'` | hover/focus/pressed/disabled | Disabled only if action unavailable | Link vs button semantics |
| INFERRED | `EditorialMediaTrack` | `items: MediaItem[]` | optional active index/drag | Empty section hidden with logged error | Labelled region; keyboard scrolling |
| INFERRED | `EditorialCardGrid` | `items`, `kind:'news'|'crew'` | card activation | Skeletons; empty message; retry on error | List semantics |
| INFERRED | `EditorialCard` | image, title, category, date, href | hover/focus | Placeholder image allowed | One descriptive link |
| INFERRED | `GameSelector` | `games`, `selectedId` | emits `select(id)` | First valid game selected | Tablist if in-place switching |
| INFERRED | `GameArtwork` | image, alt, game title | fade on selection | Neutral placeholder | Announce selected game politely |
| INFERRED | `MobileMenu` | `items`, `open` | close/Escape/overlay | n/a | Focus trap/restoration |
| INFERRED | `BackToTop` | visibility threshold | click/keyboard | Hidden near page top | Accessible label |
| INFERRED | `SiteFooter` | groups, social, legal, related sites | related-site toggle | Missing groups omitted | Labelled footer navigation |

---

## 9. Design Tokens and Exact Color Specification

### 9.1 Color tokens

| Status | Token | HEX | RGB | HSL | Alpha | Role/use | Evidence | Confidence | Tolerance |
|---|---|---|---|---|---:|---|---|---|---|
| MEASURED | `--color-white` | `#FFFFFF` | `255 255 255` | `0 0% 100%` | `1` | Page/surface, light text | Metadata; all evidence | HIGH | `ΔE≤3` |
| MEASURED | `--color-black` | `#000000` | `0 0 0` | `0 0% 0%` | `1` | Dark buttons/footer icons | E-D01/D02 palettes | HIGH | `ΔE≤3` |
| MEASURED | `--color-ink` | `#111111` | `17 17 17` | `0 0% 7%` | `1` | Primary text | E-D01/E-M01 palette | HIGH | `ΔE≤3` |
| MEASURED | `--color-ink-2` | `#222222` | `34 34 34` | `0 0% 13%` | `1` | Secondary dark text | E-D01/D02 | MEDIUM | `ΔE≤3` |
| MEASURED | `--color-muted` | `#777777` | `119 119 119` | `0 0% 47%` | `1` | Metadata/footer text | E-D01/E-M01 | HIGH | `ΔE≤3` |
| MEASURED | `--color-muted-dark` | `#666666` | `102 102 102` | `0 0% 40%` | `1` | Supporting text | E-D01/E-M01 | MEDIUM | `ΔE≤3` |
| MEASURED | `--color-border` | `#EEEEEE` | `238 238 238` | `0 0% 93%` | `1` | Footer/dividers | E-D02–D04/E-M01 | HIGH | `ΔE≤3` |
| MEASURED | `--color-border-strong` | `#DDDDDD` | `221 221 221` | `0 0% 87%` | `1` | Controls/dividers | E-D02–D04/E-M01 | MEDIUM | `ΔE≤3` |
| MEASURED | `--color-decoration` | `#EEEEFF` | `238 238 255` | `240 100% 97%` | `1` | Pale recruitment/ESG decoration | E-D03 | MEDIUM | `ΔE≤4` |
| MEASURED | `--color-decoration-alt` | `#DDDDEE` | `221 221 238` | `240 33% 90%` | `1` | Decoration shading | E-D03 | MEDIUM | `ΔE≤4` |
| INFERRED | `--color-primary` | `#4169F5` | `65 105 245` | `226 90% 61%` | `1` | Recruitment CTA/focus | E-D03 visible blue button | MEDIUM | `ΔE≤5` |
| INFERRED | `--color-primary-hover` | `#3157DD` | `49 87 221` | `226 71% 53%` | `1` | Primary hover | Implementation state | MEDIUM | `ΔE≤3` |
| INFERRED | `--color-primary-pressed` | `#2748BE` | `39 72 190` | `227 66% 45%` | `1` | Primary pressed | Implementation state | MEDIUM | `ΔE≤3` |
| INFERRED | `--color-success` | `#1B7F4B` | `27 127 75` | `149 65% 30%` | `1` | Optional success | Not visible; accessible default | LOW | n/a |
| INFERRED | `--color-warning` | `#A86500` | `168 101 0` | `36 100% 33%` | `1` | Optional warning | Not visible | LOW | n/a |
| INFERRED | `--color-danger` | `#C62828` | `198 40 40` | `0 66% 47%` | `1` | Optional error | Not visible | LOW | n/a |
| INFERRED | `--color-overlay` | `#000000` | `0 0 0` | `0 0% 0%` | `.52` | Mobile-menu overlay | Implementation | LOW | alpha `±.05` |
| INFERRED | `--color-disabled` | `#BBBBBB` | `187 187 187` | `0 0% 73%` | `1` | Disabled text/control | Measured palette + state | MEDIUM | `ΔE≤3` |

- **MEASURED — HIGH confidence:** `#887777` is prominent in the hero photographic palette but is not evidence of a UI token.
- **MEASURED — HIGH confidence:** `#FFEEFF` is also likely photographic/decorative sampling rather than an exact CSS surface.
- **INFERRED — HIGH confidence:** Do not use photographic palette colors as controls unless independently visible as flat UI regions.

### 9.2 CSS custom properties

```css
:root {
  --color-white: #fff;
  --color-black: #000;
  --color-ink: #111;
  --color-ink-2: #222;
  --color-muted: #777;
  --color-muted-dark: #666;
  --color-border: #eee;
  --color-border-strong: #ddd;
  --color-decoration: #eeeeff;
  --color-decoration-alt: #ddddee;
  --color-primary: #4169f5;
  --color-primary-hover: #3157dd;
  --color-primary-pressed: #2748be;
  --color-focus: #4169f5;
  --color-overlay: rgb(0 0 0 / 52%);
  --color-disabled: #bbb;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 96px;
  --space-13: 128px;
  --space-14: 160px;

  --container-main: 1012px;
  --container-shell: 1144px;
  --gutter-desktop: 24px;
  --gutter-mobile: 16px;
  --header-desktop: 68px;
  --header-mobile: 56px;
  --button-height: 49px;
  --icon-sm: 12px;
  --icon-md: 20px;
  --touch-min: 44px;

  --radius-none: 0;
  --radius-sm: 4px;
  --radius-pill: 999px;
  --border-thin: 1px;
  --shadow-focus: 0 0 0 3px rgb(65 105 245 / 30%);

  --z-content: 1;
  --z-header: 100;
  --z-overlay: 190;
  --z-panel: 200;
  --z-skip: 300;

  --bp-sm: 360px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1440px;

  --motion-fast: 80ms;
  --motion-normal: 160ms;
  --motion-slow: 280ms;
  --ease-standard: cubic-bezier(.2, .8, .2, 1);
}
```

### 9.3 Dimension exceptions

- **INFERRED — MEDIUM confidence:** `29 px` card gap is a screenshot-specific exception to the spacing scale.
- **INFERRED — MEDIUM confidence:** `1012 px` and `1144 px` are evidence-fit container exceptions.
- **INFERRED — MEDIUM confidence:** `49 px` button height is an evidence-fit exception.
- **INFERRED — MEDIUM confidence:** Hero content left edge `37–38 px` is section-specific and intentionally does not align to the `94 px` editorial container.

---

## 10. Typography Matrix

- **UNKNOWN — HIGH confidence:** Exact proprietary font family.
- **INFERRED — MEDIUM confidence:** Use `"Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", Arial, sans-serif`.
- **INFERRED — HIGH confidence:** Load Korean webfont with `font-display: swap`.

| Status | Role | Desktop size / weight / line | Mobile size | Letter spacing | Alignment/max-width | Wrapping |
|---|---|---|---|---|---|---|
| INFERRED | Header nav | `13 px / 600 / 20 px` | `14 px / 600 / 52 px row` | `-0.01em` | Center | No wrap |
| INFERRED | Locale | `10 px / 500 / 16 px` | `12 px` | `0` | Center | No wrap |
| INFERRED | Hero H1 | `52 px / 700 / 1.18` | `28 px / 700 / 1.2` | `-0.035em` | Left, `540 px` | Preserve 2 lines |
| INFERRED | Hero body | `15 px / 500 / 1.55` | `13 px / 400 / 1.5` | `-0.015em` | Left, `470 px` | 2–4 lines |
| INFERRED | Section H2 | `35 px / 400 / 1.25` | `24 px / 500 / 1.3` | `-0.035em` | Center or section-left | Natural |
| INFERRED | Section intro | `14 px / 400 / 1.6` | `13 px / 400 / 1.55` | `-0.015em` | Max `680 px` | Natural |
| INFERRED | News/crew title | `17 px / 600 / 1.45` | `15 px / 600 / 1.45` | `-0.02em` | Left | Clamp 2/3 |
| INFERRED | Card meta | `11 px / 400 / 1.4` | `11 px` | `0` | Left | One line |
| INFERRED | Game item | `36 px / 700 / 1.8` selected | `22 px / 700 / 1.55` | `-0.04em` | Left | No truncation preferred |
| INFERRED | Button label | `12 px / 600 / 1` | `13 px` | `-0.01em` | Center | One line |
| INFERRED | Recruitment copy | `36 px / 400–700 / 1.3` | `24 px / 400–700` | `-0.04em` | Center, `620 px` | 2 lines |
| INFERRED | Footer heading | `12 px / 700 / 1.5` | `12 px` | `-0.01em` | Left | One line |
| INFERRED | Footer link | `10 px / 400 / 1.85` | `10 px` | `0` | Left | Natural |
| INFERRED | Legal/copyright | `9 px / 400 / 1.6` | `9 px` | `0` | Left | Wrap allowed |

- **INFERRED — HIGH confidence:** Do not synthesize bold weights if the chosen font lacks them.
- **INFERRED — HIGH confidence:** Body copy must remain selectable text.
- **INFERRED — HIGH confidence:** At `200%` zoom, content reflows without clipping or loss.

---

## 11. Asset and Icon Manifest

| Status | Asset ID | Page/section | Role and evidence crop | Display | Crop/focal point | Responsive/loading | Alt/replacement |
|---|---|---|---|---|---|---|---|
| OBSERVED | A-01 | P01-S01/S08 | Kakao Games wordmark; E-D01 top-left, E-D04 lower-left | Header `83×12`; footer approx. `350×58` | Contain | SVG preferred; eager header | “Kakao Games” |
| OBSERVED | A-02 | P01-S02 | Cinematic hero mascot scene; E-D01 `x0 y0 w1200 h674` | Full bleed | Cover; focal `62% 43%` | Hero preload/poster | Descriptive if image; empty if video has adjacent equivalent |
| OBSERVED | A-03–A-06 | P01-S03 | Four ESG editorial images | Approx. `307×207` each | Cover, center | Lazy except first visible | Story-specific alt |
| OBSERVED | A-07–A-09 | P01-S04 | Three news thumbnails | Approx. `318×185` | Cover, center | Lazy, AVIF/WebP | Article-specific alt |
| OBSERVED | A-10 | P01-S05 | Odin selected-game artwork | Approx. `548×463` | Cover; focal center | Lazy; responsive `srcset` | Game title/artwork description |
| OBSERVED | A-11–A-13 | P01-S06 | Three crew-story images | Approx. `318×184` | Cover, center | Lazy | Story-specific alt |
| OBSERVED | A-14 | P01-S07 | Pale 3D loop decoration | Approx. `470×410` | Contain, center | Lazy SVG/WebP | Empty alt |
| OBSERVED | I-01 | Header | Globe icon | `12×12` | Circular stroke | Inline SVG | Hidden from AT if locale label present |
| OBSERVED | I-02 | Footer | Up arrow in black circle | `14×14` within `38×38` | Optical center `1 px` high | Inline SVG | Control label “Back to top” |
| OBSERVED | I-03–I-06 | Footer | Facebook, YouTube, Kakao/Blog-like, Instagram icons | Approx. `27×27` circles | Center | Inline SVG | Platform names |
| OBSERVED | I-07 | Footer | Plus icon for related sites | `12×12` | `2 px` strokes | Inline SVG | Expanded state announced |

- **INFERRED — HIGH confidence:** Licensed replacement imagery must preserve dominant luminance, crop, subject scale, and focal position.
- **INFERRED — HIGH confidence:** Avoid embedding text in replacement images except where the screenshot explicitly shows editorial thumbnail artwork.
- **UNKNOWN — HIGH confidence:** Exact source aspect ratios and filenames.

---

## 12. Responsive Behavior Matrix

### 12.1 Page and shell

| Status | Property | 1440 | 1280 | 1024 | 768 | 390 | 360 |
|---|---|---:|---:|---:|---:|---:|---:|
| INFERRED | Main container | `1012 px` | `1012 px` | `calc(100%-64px)` | `704 px` | `358 px` | `328 px` |
| INFERRED | Outer gutters | `≥214 px` | `≥134 px` | `32 px` | `32 px` | `16 px` | `16 px` |
| INFERRED | Header mode | Full overlay | Full overlay | Full compact | Mobile panel | Mobile panel | Mobile panel |
| INFERRED | Header height | `68 px` | `68 px` | `64 px` | `56 px` | `56 px` | `56 px` |
| INFERRED | Hero height | `674 px` | `674 px` | `580 px` | `500 px` | `420 px` | `400 px` |
| INFERRED | Hero title | `52 px` | `52 px` | `46 px` | `38 px` | `30 px` | `28 px` |
| INFERRED | H2 | `35 px` | `35 px` | `32 px` | `28 px` | `25 px` | `24 px` |

### 12.2 Major components

| Status | Component | 1440 | 1280 | 1024 | 768 | 390 | 360 |
|---|---|---|---|---|---|---|---|
| INFERRED | Sustainability media | 4-item horizontal track | Same | Same, narrower items | Scroll track | `78vw` items | `80vw` items |
| INFERRED | News cards | 3 columns | 3 | 3 | 2 + wrap or track | Horizontal track | Horizontal track |
| INFERRED | Games | `400/548 px` split | Same | Fluid 40/60 | Stacked | Stacked | Stacked |
| INFERRED | Crew cards | 3 columns | 3 | 3 | 2 + wrap or track | Horizontal track | Horizontal track |
| INFERRED | Recruitment decoration | `470 px` | `470 px` | `420 px` | `340 px` | `260 px` | `240 px` |
| INFERRED | Footer sitemap | 7 columns + social | Same | 4 columns | 4 columns | 2 columns | 2 columns |
| INFERRED | Button | `179×49 px` | Same | Same | `168×48 px` | min `160×48 px` | min `160×48 px` |
| INFERRED | Touch target | n/a | n/a | `44 px` | `44 px` | `44 px` | `44 px` |

### 12.3 Evidence-specific compact mode

| Status | Width | Rule |
|---|---:|---|
| MEASURED | `243 px` | E-M01 shows an entire `1040 px` page with drastically compressed type and spacing |
| INFERRED | `≤280 px` | Optional visual-reference mode may apply `font-size:62.5%` to section modules and reduce vertical spaces by approximately `55–70%` |
| INFERRED | `≥360 px` | Accessibility-first mobile layout should not reproduce illegibly small E-M01 labels |
| UNKNOWN | `243 px` browser behavior | Static evidence cannot distinguish a true responsive layout from a scaled full-page renderer |

---

## 13. Interaction and Motion State Matrix

| Status | Element/state | Trigger | Visual delta | Timing/easing | Keyboard/focus | Reduced motion |
|---|---|---|---|---|---|---|
| INFERRED | Text link hover | Pointer hover | opacity `.7` | `160 ms`, standard | No focus movement | Instant |
| INFERRED | Dark button hover | Hover | background `#222222` from `#000000` | `160 ms` | n/a | Instant |
| INFERRED | Dark button pressed | Pointer/key press | `translateY(1px)`, opacity `.85` | `80 ms` | Retain focus | No transform |
| INFERRED | Primary hover | Hover | `#4169F5 → #3157DD` | `160 ms` | n/a | Instant |
| INFERRED | Focus-visible | Keyboard | `2 px #4169F5`, offset `3 px` | Instant | Visible on every interactive item | Same |
| INFERRED | Disabled | App state | `#BBBBBB`, opacity `.55`, no shadow | Instant | Not focusable unless explanation required | Same |
| INFERRED | Mobile menu open | Menu button | panel translates `100%→0`; overlay `0→.52` | `280 ms` | Focus enters panel | Instant show |
| INFERRED | Submenu open | Activate disclosure | Height reveal, chevron `180deg` | `160 ms` | `aria-expanded` updated | Instant |
| INFERRED | Card hover | Hover | image scale `1→1.025` within clip | `280 ms` | Card outline on focus | Disable scale |
| INFERRED | Game selected | Click/Enter/arrow | title bold/underline; artwork crossfade | `280 ms` | Arrow keys if tablist | Instant swap |
| INFERRED | Carousel drag | Swipe/trackpad | Native horizontal scroll/snap | Native | Arrow/Tab access | No smooth scroll |
| INFERRED | Back-to-top | Activate | Smooth scroll to top | `280 ms` max | Restore focus logically | Instant scroll |
| UNKNOWN | Hero playback | Page load | Not determinable | Unknown | Must expose pause if animated | Use poster |
| UNKNOWN | Form states | No form visible | n/a | n/a | n/a | n/a |
| UNKNOWN | Modal/loading/error visuals | Not visible | n/a | n/a | n/a | n/a |

---

## 14. Accessibility Contract

- **INFERRED — HIGH confidence:** Provide a first-focus skip link targeting `#main-content`.
- **INFERRED — HIGH confidence:** Landmark order must be `header`, `main`, and `footer`.
- **INFERRED — HIGH confidence:** Use exactly one `h1`; subsequent primary sections use `h2`.
- **INFERRED — HIGH confidence:** Keyboard order follows visual/document order from header through footer.
- **INFERRED — HIGH confidence:** All actionable controls must have a minimum target of `44 × 44 px`; where visible artwork is smaller, enlarge the invisible hit area.
- **INFERRED — HIGH confidence:** Text contrast target is WCAG AA: `4.5:1` for normal text and `3:1` for large text and UI boundaries.
- **INFERRED — HIGH confidence:** White hero text must retain at least `4.5:1` against every media frame using the overlay.
- **INFERRED — HIGH confidence:** Focus uses `2 px #4169F5` plus `3 px` offset; on blue controls use a white inner ring and dark outer shadow.
- **INFERRED — HIGH confidence:** Mobile menu button uses `aria-controls`, `aria-expanded`, and accessible name changing between open and close.
- **INFERRED — HIGH confidence:** Opening the menu moves focus to the close control; Escape closes; focus is contained while open and restored afterward.
- **INFERRED — HIGH confidence:** Active page is announced using `aria-current="page"`.
- **INFERRED — HIGH confidence:** Images containing meaningful editorial information have alt text; decorative imagery has empty alt.
- **INFERRED — HIGH confidence:** Game artwork changes use an `aria-live="polite"` status naming the selected game, without announcing decorative details repeatedly.
- **INFERRED — HIGH confidence:** Horizontal tracks have region labels and remain keyboard-scrollable.
- **INFERRED — HIGH confidence:** Respect `prefers-reduced-motion: reduce`.
- **INFERRED — HIGH confidence:** At `320 px` CSS width and `400%` zoom, content reflows without two-dimensional scrolling except designated media tracks.
- **UNKNOWN — HIGH confidence:** No form fields, inline validation, dialogs, or live news updates are evidenced.

---

## 15. Data and Content Model

### 15.1 Entities

```ts
type NavItem = {
  id: string;
  label: string;
  href: string | null;
  children?: NavItem[];
};

type EditorialItem = {
  id: string;
  kind: "sustainability" | "news" | "crew";
  title: string;
  summary?: string;
  category?: string;
  publishedAt?: string; // ISO 8601
  image: ResponsiveImage;
  href: string | null;
};

type Game = {
  id: string;
  name: string;
  artwork: ResponsiveImage;
  href?: string | null;
  platforms?: ("mobile" | "pc" | "console")[];
};

type ResponsiveImage = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  focalX?: number; // 0..1
  focalY?: number; // 0..1
};

type FooterGroup = {
  title: string;
  links: Array<{ label: string; href: string | null }>;
};
```

### 15.2 Cardinality and ordering

- **OBSERVED — HIGH confidence:** Primary navigation has `7` items.
- **OBSERVED — HIGH confidence:** Sustainability track shows at least `4` items.
- **OBSERVED — HIGH confidence:** Latest news shows `3` items, ordered newest to oldest by visible dates.
- **OBSERVED — HIGH confidence:** Games list contains `5` visible games.
- **OBSERVED — HIGH confidence:** Crew stories show `3` items.
- **OBSERVED — HIGH confidence:** Footer has `7` primary sitemap categories.
- **INFERRED — HIGH confidence:** Dates should be stored as ISO values and formatted for Korean locale as `YYYY. MM. DD`.
- **INFERRED — HIGH confidence:** Missing summaries are omitted rather than rendered as blank spacing.
- **INFERRED — HIGH confidence:** Missing images use a neutral `#EEEEEE` placeholder with the same aspect ratio.

### 15.3 Loading, empty, and error

- **INFERRED — HIGH confidence:** Loading cards use fixed-ratio skeletons so section geometry does not shift.
- **INFERRED — HIGH confidence:** Empty editorial sections show a concise localized message and omit the “view all” button if there is no destination.
- **INFERRED — HIGH confidence:** Failed image loads use a branded-neutral placeholder and retain alt text.
- **INFERRED — HIGH confidence:** Failed data requests expose a retry control and non-blocking error message.
- **OBSERVED — HIGH confidence:** Evidence copy is Korean and should remain replaceable localization content, not hard-coded into component structure.

---

## 16. Frontend Architecture

### 16.1 Route and module structure

```text
src/
├─ app/
│  ├─ routes/
│  │  └─ home/
│  │     ├─ HomePage
│  │     ├─ home.data
│  │     └─ home.styles
│  └─ AppShell
├─ components/
│  ├─ navigation/
│  │  ├─ SiteHeader
│  │  ├─ PrimaryNavigation
│  │  ├─ MobileMenu
│  │  └─ LocaleSelector
│  ├─ editorial/
│  │  ├─ EditorialCard
│  │  ├─ EditorialCardGrid
│  │  └─ EditorialMediaTrack
│  ├─ games/
│  │  ├─ GameSelector
│  │  └─ GameArtwork
│  ├─ controls/
│  │  ├─ ActionButton
│  │  └─ BackToTop
│  └─ footer/
│     └─ SiteFooter
├─ sections/
│  ├─ HeroSection
│  ├─ SustainabilitySection
│  ├─ NewsSection
│  ├─ GamesSection
│  ├─ CrewStoriesSection
│  └─ RecruitmentSection
├─ styles/
│  ├─ tokens.css
│  ├─ typography.css
│  ├─ reset.css
│  └─ utilities.css
├─ assets/
│  ├─ brand/
│  ├─ hero/
│  ├─ sustainability/
│  ├─ news/
│  ├─ games/
│  ├─ crew/
│  └─ decoration/
├─ data/
│  └─ models.ts
└─ i18n/
   ├─ ko
   └─ index
```

### 16.2 Responsibilities

- **INFERRED — HIGH confidence:** Route-level code owns content fetching and section ordering.
- **INFERRED — HIGH confidence:** `AppShell` owns header, mobile-menu state, footer, skip link, and back-to-top.
- **INFERRED — HIGH confidence:** `GamesSection` owns selected-game state.
- **INFERRED — HIGH confidence:** Navigation and editorial datasets should be server-rendered or statically generated.
- **INFERRED — HIGH confidence:** Only mobile menu, game selector, optional carousels, and back-to-top require client-side state.
- **INFERRED — HIGH confidence:** Styling should use CSS modules, scoped styles, or cascade layers backed by the shared custom-property token file.
- **INFERRED — HIGH confidence:** An image component may handle `srcset`, dimensions, lazy loading, and modern formats.
- **INFERRED — HIGH confidence:** No carousel library is required if native horizontal scrolling meets behavior; if used, it must not replace semantic lists or keyboard access.
- **UNKNOWN — HIGH confidence:** Original CMS and API contracts.

---

## 17. Implementation Task Graph

| Status | Task | Dependencies | Inputs | Outputs/affected IDs | Completion criteria | Parallel group |
|---|---|---|---|---|---|---|
| INFERRED | T-01 Measurement harness | None | Evidence dimensions | Screenshot test setup | Captures 1200, 243, 360, 390, 768, 1024, 1280, 1440 | A |
| INFERRED | T-02 Tokens/reset/type | T-01 | Sections 9–10 | Global CSS | Tokens compile; Korean text renders predictably | A |
| INFERRED | T-03 Asset preparation | None | Section 11 | Responsive assets | Correct ratios, focal metadata, legal replacements | A |
| INFERRED | T-04 AppShell | T-02 | Shell contract | `AppShell`, skip link | No overflow; landmarks correct | B |
| INFERRED | T-05 Header desktop | T-02,T-04 | P01-S01 | Desktop nav | Geometry within tolerance | B |
| INFERRED | T-06 Mobile menu | T-04,T-05 | Nav state contract | Mobile panel | Keyboard, Escape, focus restoration pass | C |
| INFERRED | T-07 Hero | T-02,T-03 | P01-S02 | Hero section | Crop/copy/button match | B |
| INFERRED | T-08 Sustainability | T-02,T-03 | P01-S03 | Media track/actions | Four-item rhythm and decoration match | C |
| INFERRED | T-09 News | T-02,T-03 | P01-S04 | News grid | Three cards, text clamps, CTA match | C |
| INFERRED | T-10 Games | T-02,T-03 | P01-S05 | Selector/artwork | Five items; selected state accessible | C |
| INFERRED | T-11 Crew stories | T-02,T-03 | P01-S06 | Crew grid | Three cards and CTA match | C |
| INFERRED | T-12 Recruitment | T-02,T-03 | P01-S07 | CTA section | Decoration and text layering match | C |
| INFERRED | T-13 Footer | T-02,T-04 | P01-S08 | Footer/back-to-top | Sitemap/social/legal alignment match | C |
| INFERRED | T-14 Responsive integration | T-06–T-13 | Matrix | All widths | Behavioral transitions verified | D |
| INFERRED | T-15 Interaction states | T-06–T-14 | State matrix | Hover/focus/motion | All states deterministic | D |
| INFERRED | T-16 Accessibility audit | T-14,T-15 | A11y contract | Audit fixes | Keyboard, landmarks, contrast, zoom pass | E |
| INFERRED | T-17 Visual regression | T-14 | Evidence | Diff baselines | Major geometry and color tolerances pass | E |
| INFERRED | T-18 Performance pass | T-03,T-14 | Built page | Optimized delivery | Hero prioritized; remaining images lazy; no CLS | E |
| INFERRED | T-19 Final content QA | T-16–T-18 | Fixtures/localization | Release candidate | Korean copy, dates, links, fallbacks verified | F |

---

## 18. Page-Specific Acceptance Criteria

## P-01 Homepage checklist

### Desktop visual comparison

- [ ] **MEASURED:** Capture at `1200 px` width and compare against a `1200 × 5137 px` assembled baseline.
- [ ] **INFERRED:** Header height is `68 px ±4 px`.
- [ ] **INFERRED:** Logo origin and dimensions are within `±3 px`.
- [ ] **INFERRED:** Navigation start, baseline, and right locale capsule are within `±4 px`.
- [ ] **INFERRED:** Hero bottom edge is at `y674 px ±4 px`.
- [ ] **INFERRED:** Hero copy left edge is `x37–38 px ±4 px`.
- [ ] **INFERRED:** Sustainability, news, games, crew, recruitment, and footer major edges are within `±8 px`; the larger tolerance reflects crop-based visual estimation.
- [ ] **INFERRED:** Main editorial grids align to the same `1012 px` container within `±4 px`.
- [ ] **INFERRED:** Three-column card widths differ by no more than `2 px`.
- [ ] **INFERRED:** Repeated card gaps are `29 px ±2 px`.
- [ ] **INFERRED:** Footer begins near `y4680 px ±8 px`.
- [ ] **INFERRED:** No evidence overlap is rendered as repeated content.

### Color and typography

- [ ] **INFERRED:** White, black, ink, muted text, and border colors meet `DeltaE 2000 ≤ 3`.
- [ ] **INFERRED:** Pale lavender decoration meets `DeltaE 2000 ≤ 4`.
- [ ] **INFERRED:** Primary blue CTA meets `DeltaE 2000 ≤ 5` because the exact source token is inferred.
- [ ] **INFERRED:** Text sizes match within `±1 px` and line heights within `±2 px`.
- [ ] **INFERRED:** Hero title preserves the observed two-line hierarchy.
- [ ] **INFERRED:** News and crew titles do not exceed two desktop lines.
- [ ] **INFERRED:** Korean glyphs do not clip at top or bottom.

### Assets and overflow

- [ ] **INFERRED:** Hero focal subject remains center-right and is not obscured by copy.
- [ ] **INFERRED:** All editorial images preserve the specified aspect ratio within `1%`.
- [ ] **INFERRED:** No image distorts; `object-fit` behavior is consistent.
- [ ] **INFERRED:** No horizontal document scrollbar appears from `320–1440 px`.
- [ ] **INFERRED:** Designated horizontal media tracks remain independently scrollable.

### Responsive acceptance

- [ ] **MEASURED:** Compare the evidence-specific compact rendering at `243 × 1040 px`.
- [ ] **INFERRED:** Also compare functional production layouts at `360`, `390`, `768`, `1024`, `1280`, and `1440 px`.
- [ ] **INFERRED:** Header changes to mobile navigation no later than `768 px`.
- [ ] **INFERRED:** Games split becomes a single-column sequence below `768 px`.
- [ ] **INFERRED:** News, sustainability, and crew collections remain usable without page-level overflow.
- [ ] **INFERRED:** All touch controls are at least `44 × 44 px` at `360 px` and wider.
- [ ] **INFERRED:** At `243 px`, reduced visual dimensions may be used, but content must remain technically reachable.

### Keyboard and accessibility

- [ ] **INFERRED:** Skip link is first in focus order and becomes visible on focus.
- [ ] **INFERRED:** Every navigation item, card, CTA, selector, social link, related-sites control, and back-to-top control is keyboard reachable.
- [ ] **INFERRED:** Mobile-menu focus is trapped and restored correctly.
- [ ] **INFERRED:** Escape closes the mobile menu.
- [ ] **INFERRED:** Game selection works with Enter/Space and arrow keys when implemented as tabs.
- [ ] **INFERRED:** Focus indicators never disappear against hero photography or black controls.
- [ ] **INFERRED:** Heading hierarchy and landmarks pass automated and manual checks.
- [ ] **INFERRED:** Reduced-motion mode removes smooth scroll, card scaling, panel sliding, and artwork crossfades.
- [ ] **INFERRED:** Page reflows at `400%` zoom without loss of content.

### Performance

- [ ] **INFERRED:** Hero poster/image is preloaded or given high fetch priority.
- [ ] **INFERRED:** Below-fold imagery uses lazy loading.
- [ ] **INFERRED:** Every image declares intrinsic dimensions to prevent layout shift.
- [ ] **INFERRED:** Target CLS is `<0.1`.
- [ ] **INFERRED:** Target LCP is `<2.5 s` on a representative mobile connection when served from production infrastructure.
- [ ] **INFERRED:** Decorative imagery does not block first contentful paint.

---

## 19. Uncertainties and Decisions

| Status | Page/section | Unknown | Selected implementation decision | Rejected alternative | Confidence | Evidence needed |
|---|---|---|---|---|---|---|
| UNKNOWN | P01-S01 | Exact font | Pretendard/Noto Sans KR stack | Guessing a proprietary family | MEDIUM | CSS/font files or browser inspection |
| UNKNOWN | P01-S01 | Header scroll behavior | Transition to solid white sticky header after hero | Keep transparent over white content | LOW | Scrolled screenshots/video |
| UNKNOWN | P01-S01 | Mobile menu affordance | Accessible hamburger and right-side drawer below `768 px` | Preserve unreadably small seven-item row | MEDIUM | Higher-resolution mobile header crop |
| UNKNOWN | P01-S01 | Navigation targets/dropdowns | Store nullable routes and optional children | Invent URLs/submenus | HIGH | Sitemap/routes |
| UNKNOWN | P01-S02 | Still image versus video | Responsive poster with optional video enhancement | Force autoplay video | MEDIUM | Original DOM or motion capture |
| UNKNOWN | P01-S02 | Exact overlay | Left-to-right black gradient plus uniform veil | Edit source image destructively | MEDIUM | Source asset and CSS |
| UNKNOWN | P01-S03 | Carousel controls | Native horizontal track without visible arrows | Invent arrows/dots absent from evidence | MEDIUM | Interaction recording |
| UNKNOWN | P01-S03 | Fourth-card clipping intent | Preserve overflow track | Force four equal columns into container | MEDIUM | Wider viewport screenshot |
| UNKNOWN | P01-S04 | Card hover behavior | Subtle image scale and focus outline | Add shadow/border absent from screenshot | MEDIUM | Hover capture |
| UNKNOWN | P01-S05 | Game selector semantics | Use tabs when artwork changes in place | Always navigate away | MEDIUM | Interaction recording |
| UNKNOWN | P01-S05 | Non-selected artwork | Provide one artwork per game via data model | Reuse Odin image | HIGH | Asset inventory |
| UNKNOWN | P01-S06 | Exact category/date typography | Use shared card metadata style | Introduce distinct unobserved badges | MEDIUM | Higher-resolution crop |
| UNKNOWN | P01-S07 | Decoration format | SVG/WebP decorative asset | CSS-only approximation | MEDIUM | Original asset |
| UNKNOWN | P01-S08 | Social platform identities | Use labels confirmed during content integration | Infer all icons solely from raster | LOW | Original links/SVGs |
| UNKNOWN | P01-S08 | Related-sites options | Accessible disclosure with injected options | Invent related companies | HIGH | Content data |
| UNKNOWN | P-01 | Exact desktop section edges | Use regularized bounds in Section 6 | Pretend raster estimates are exact source CSS | MEDIUM | Uncompressed screenshot or DOM |
| UNKNOWN | P-01 | Why mobile full page is only `1040 px` tall | Support optional `≤280 px` compact mode while prioritizing readable `360–390 px` layouts | Scale the entire DOM with CSS transform | LOW | Browser viewport/DPR and capture method |
| UNKNOWN | P-01 | Loading/error presentation | Stable skeletons, retry message, neutral placeholder | Leave blank sections | MEDIUM | Product-state designs |
| UNKNOWN | P-01 | Exact copyright ownership | Use licensed substitutes unless authorized | Copy protected media without permission | HIGH | User authorization/source assets |
