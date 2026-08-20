**English** | [한국어](DESIGN_INDEX_SPECIFICATION.ko.md)

# GDWEB Reconstruction Specification Contract

## Contract Identity

- Schema: `secret-mcp/design-index/v2`
- Output filename: `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md`
- Reference ID: `gdweb-{{REFERENCE_NUMBER}}`
- Title: `{{TITLE}}`
- GDWEB URL: `{{GDWEB_URL}}`
- Registered date: `{{REGISTERED_DATE}}`
- Award: `{{AWARD_OR_NA}}`
- Concept: `{{CONCEPT_OR_NA}}`
- GDWEB primary color metadata: `{{PRIMARY_COLOR_OR_NA}}`
- Production company: `{{PRODUCTION_COMPANY_OR_NA}}`
- Original evidence: `{{SOURCE_KIND}}={{SOURCE_WIDTH}}x{{SOURCE_HEIGHT}}`

## Request Isolation and Output Rules

1. Process exactly one GDWEB reference in one LLM request.
2. Include only that work's metadata, specification contract, and prepared evidence images.
3. Do not include another work's ID, metadata, images, contract, generated document, or previous-request context.
4. Set the request context to none when the client supports an equivalent of `includeContext: none`.
5. When multiple search results exist, process them sequentially and start the next request only after the current work's document has been saved.
6. Produce exactly one artwork-specific `DESIGN_INDEX` document per request.
7. Write the complete document in the language requested by the user.
8. Return only the complete Markdown document. Do not wrap it in commentary, a summary, or a multi-reference comparison.
9. The attached images and coordinate metadata are the complete evidence boundary for the request.

## Prepared Evidence Coordinate Map

Create the following block for every attached image before requesting analysis.

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

The representative palette is measured from downsampled screenshot pixels after image normalization. It is objective screenshot evidence, but it is not proof of the original CSS token. Treat a sampled value as `MEASURED` and a proposed CSS token as `INFERRED` unless source metadata confirms it.

## Mandatory Next Action

Inspect every attached evidence image and write one complete `DESIGN_INDEX_gdweb-{{REFERENCE_NUMBER}}.md` document in the user's requested language.

The output is one artwork-specific document. Inside that document, inventory every page or route visible in the evidence and write a separate, complete specification for each page.

Do not combine this reference with another artwork. Do not produce a mood board, a brief summary, or a generic style guide.

## Evidence and Measurement Rules

### Evidence labels

Prefix every material claim or table row with one of the following labels.

| Label | Meaning |
| --- | --- |
| `MEASURED` | Derived from the supplied pixel coordinate map, image dimensions, crop metadata, or sampled palette. |
| `OBSERVED` | Directly visible in an attached GDWEB screenshot or supplied metadata but not numerically measured. |
| `INFERRED` | A concrete implementation decision required to reproduce the evidence but not directly visible or measurable. |
| `UNKNOWN` | A value or behavior that static evidence does not reveal. Never state it as fact. |

### Measurement requirements

- Every geometry value must have a concrete number and unit.
- Prefer `px` for screenshot geometry, `rem` for implementation equivalents, percentages for fluid ratios, and `ms` for motion.
- When exact source CSS is unknown, provide one recommended implementation value, its evidence basis, confidence (`HIGH`, `MEDIUM`, or `LOW`), and a visual-QA tolerance. Do not provide only a broad range.
- Measure attached crops in prepared-coordinate space. Use the crop offsets and scale values to map points to the full prepared canvas or original source image.
- Tile overlap is duplicated evidence, not repeated page content. Deduplicate sections using prepared `y` coordinates.
- A long scrolling screenshot is one page with many sections. Split it into multiple pages only when the evidence clearly shows distinct routes, screens, or page canvases.
- When a collage contains multiple route screenshots, identify each route as a separate page and record the crop that supports it.
- Preserve visible hierarchy and relationships. Adapt copyrighted copy and brand assets unless the user owns them or explicitly authorizes their use.
- Treat desktop and mobile evidence as separate primary evidence. Explain every responsive transformation between them.
- Vague adjectives such as `large`, `modern`, `clean`, `spacious`, or `dynamic` are invalid unless followed by measurable values.
- Never hide missing evidence by presenting an inferred value as measured or observed.

## Required Document Structure

The completed document must contain all 19 numbered sections below.

### 1. Reconstruction Goal and Scope

- Record the reference identity and work title.
- Define the fidelity target.
- List supported pages and routes.
- List target viewports.
- Separate framework-independent requirements from implementation recommendations.
- State explicit non-goals.
- State whether the evidence represents one long page, multiple pages, or an ambiguous collage.
- State which original copy, logos, trademarks, photos, and brand assets must be replaced.

### 2. Evidence Inventory and Coordinate System

- Create one row per attached image.
- Required fields: evidence ID, kind, part number, source dimensions, prepared dimensions, crop rectangle, source-mapped rectangle, scale, visible page or section range, and limitations.
- Define the canonical `x/y` origin.
- Explain how overlapping tiles were deduplicated.
- Map every later measurement to an evidence ID and coordinate or visible region.
- Distinguish source-image pixels, prepared-canvas pixels, crop-local pixels, and target CSS pixels.
- Record any resizing, JPEG normalization, cropping, or aspect-ratio change that may affect measurements.

### 3. Site Map and Page/Route Inventory

- List every directly visible page or route before describing components.
- Do not invent unseen routes. Record likely but unseen routes as `UNKNOWN` and keep them outside the implementation scope.
- Identify the default page.
- Identify the active navigation item on every page.

Required columns:

| Field | Required value |
| --- | --- |
| Page ID | Stable ID such as `P-01` |
| Route or name | Visible route, screen name, or an explicit `UNKNOWN` target |
| Purpose | Page goal and primary user task |
| Evidence | Supporting evidence IDs and crop regions |
| Shared shell | Shell variant used by the page |
| Desktop | Availability and supporting evidence |
| Mobile | Availability and supporting evidence |
| Active navigation | Active item and state |
| Confidence | `HIGH`, `MEDIUM`, or `LOW` with evidence label |

### 4. Shared Application Shell

- Specify viewport background.
- Specify full-width and max-width behavior.
- Define shared container widths and global gutters.
- Define global page chrome, announcement bars, utility bars, overlays, cookie UI, floating controls, and scroll-to-top controls.
- Define stacking contexts and shared `z-index` layers.
- Separate global primitives from page-specific composition.
- Define shell variants and the pages that use each variant.
- Record global overflow and page-height behavior.

### 5. Navigation and Header Specification

This section is mandatory even when the header appears simple.

#### Desktop navigation geometry

Provide exact values for:

- Total header height
- Utility-bar height
- Content width or max-width
- Left and right padding
- Logo `x`, `y`, width, and height
- Menu start `x`
- Item width or horizontal padding
- Item gap
- Text baseline
- Icon size and bounds
- Action-area width
- Border
- Background
- Position mode
- Sticky or fixed offset
- `z-index`

#### Mobile navigation geometry

Provide exact values for:

- Bar height
- Side padding
- Logo bounds
- Menu-control bounds
- Minimum touch target
- Open-panel origin
- Panel width and height
- Row height
- Nested-item indentation
- Divider
- Overlay color and opacity
- Close behavior
- Body scroll locking

#### Navigation content and states

- List every visible navigation item in exact order.
- Map each item to a route or an explicit `UNKNOWN` target.
- Define `default`, `hover`, `focus-visible`, `pressed`, `active`, `disabled`, `scrolled`, `menu-open`, and `submenu-open` states.
- For every state, specify exact text color, background, border, underline or indicator, opacity, transform, and timing.
- State whether the header is static, sticky, fixed, transparent over the hero, or transformed after scrolling.
- Mark screenshot-invisible transitions as `INFERRED` or `UNKNOWN`.

### 6. Page-by-Page Specifications

Create one `Page P-XX: <name>` subsection for every page in the route inventory. Never replace page subsections with one global section list.

Every page subsection must include:

1. Route, purpose, entry points, shared-shell variant, active navigation state, and supporting evidence.
2. Desktop canvas model: reference viewport, full page height, content max-width, gutters, columns, and page background.
3. Mobile canvas model: reference viewport, full page height when visible, side padding, stacking order, and overflow behavior.
4. An ordered section-geometry table from header to footer.
5. A detailed section specification for every row in the geometry table.
6. Page-specific components, data, states, interactions, responsive transitions, accessibility, assets, and acceptance checks.

Every page's ordered section-geometry table must contain:

| Field | Required value |
| --- | --- |
| Section ID | Stable page-scoped ID such as `P01-S03` |
| Evidence | Image ID and `x/y` region |
| Bounds | `x`, `y`, width, and height in evidence pixels |
| Semantic role | `header`, `hero`, `nav`, `main`, `section`, `aside`, `footer`, `dialog`, etc. |
| Container | Full bleed or max-width, including exact width and gutters |
| Layout | `block`, `flex`, `grid`, `absolute`, `sticky`, or `fixed`, including columns and tracks |
| Spacing | Outer margin, section padding, child gap, row gap, and column gap |
| Alignment | Main axis, cross axis, text alignment, and baseline behavior |
| Surface | Exact color, gradient or image, border, radius, shadow, and opacity |
| Content | Visible text roles, controls, media, and repeated-item count |
| Responsive | Desktop-to-mobile transformation and breakpoint |
| Evidence level | `MEASURED`, `OBSERVED`, `INFERRED`, or `UNKNOWN`, plus confidence |

### 7. Section and Layout Deep Dives

- Provide the DOM hierarchy for every page section.
- Specify the exact CSS layout model.
- Record grid templates and tracks.
- Record flex direction, wrapping, growth, shrink, and basis.
- Record min/max widths and intrinsic sizing.
- Record aspect ratios.
- Record padding, gaps, alignment, and wrapping.
- Record overflow and clipping.
- Record sticky offsets.
- Record absolute anchors and transforms.
- Record `z-index` relationships.
- Record desktop, tablet, and mobile values separately.
- Include a small CSS-ready geometry sketch where prose would remain ambiguous.
- For repeated cards or rows, specify item dimensions, count per row, `minmax` rules, gaps, image ratio, text limits, and incomplete-row alignment.

### 8. Component Abstraction

- Provide a complete component tree rooted at `AppShell` and grouped by page.
- For every component, define responsibility and reusable boundary.
- Define props with types.
- Define variants and slots.
- Define local state and shared state.
- Define emitted events and user actions.
- Define data dependencies.
- Define `loading`, `empty`, `error`, `disabled`, `selected`, and success states where applicable.
- Define accessibility behavior.
- Map every component to page and section IDs.
- Define shared navigation and footer once, then reference page-specific active states or variants.
- Do not force unlike sections into one component merely because they look similar.

### 9. Design Tokens and Exact Color Specification

- Provide CSS-ready token tables.
- Provide a complete `:root` custom-property block.
- Every color row must include stable token name, HEX, RGB, HSL, alpha, semantic role, page and section usage, sampled evidence ID and coordinate or metadata source, evidence level, confidence, and allowed visual-difference tolerance.
- Include background, surface, text, muted text, border, primary, secondary, accent, success, warning, danger, overlay, focus-ring, hover, pressed, and disabled colors when present.
- Use measured palettes as evidence while distinguishing photographic colors from UI surfaces and tokens.
- Tokenize spacing, dimensions, radii, borders, shadows, opacity, `z-index`, breakpoints, container widths, icon sizes, and motion durations and easings with exact values.
- Provide a spacing scale.
- Identify every exception that does not fit the spacing scale.
- Do not claim that a screenshot-sampled color was the source CSS variable unless metadata proves it.

### 10. Typography Matrix

Define the following for every visible text role:

- Font family and fallback
- Font-source strategy
- Size in `px` and `rem`
- Weight
- Line height in `px` and unitless form
- Letter spacing
- Casing
- Decoration
- Alignment
- Maximum width
- Wrapping or truncation
- Responsive value at every canonical viewport

Include navigation labels, utility text, hero eyebrow, hero title, hero body, section headings, card titles, card body, metadata, controls, captions, form labels, errors, and footer text where applicable.

### 11. Asset and Icon Manifest

- Enumerate logos, photos, illustrations, icons, video, textures, charts, and decorative media per page.
- For every asset, define page and section, role, evidence crop, displayed width and height, source aspect ratio, crop, focal point, `object-fit`, `object-position`, responsive treatment, loading priority, format, alt behavior, and replacement strategy.
- Name a familiar UI icon using a known library equivalent when it can be identified.
- When an icon cannot be identified, specify exact stroke, fill, bounds, and optical alignment.
- Separate assets that may be reused from copyrighted or branded assets that must be replaced.
- Record mobile-specific crops or alternate assets.

### 12. Responsive Behavior Matrix

- Use columns for at least `1440`, `1280`, `1024`, `768`, `390`, and `360` CSS px unless the evidence supports different canonical widths.
- For every page and major component, document container width, gutters, columns, order, visibility, navigation mode, type size, spacing, image crop, and touch target at each width.
- Define breakpoint rules as behavioral transitions, not numbers alone.
- Mark values without direct mobile evidence as `INFERRED` and provide the reason.
- State whether content reflows, stacks, wraps, scrolls, clips, hides, moves, or changes interaction mode.
- Define minimum and maximum sizes so dynamic content cannot resize fixed-format UI unexpectedly.
- Require zero unintended horizontal page overflow at every target width.

### 13. Interaction and Motion State Matrix

Cover links, navigation, buttons, menus, tabs, accordions, carousels, forms, modals, cards, and media.

For every applicable state, define:

- Trigger
- Visual delta
- Exact colors
- Opacity
- Transform
- Duration
- Easing
- Focus behavior
- Keyboard behavior
- Pointer behavior
- Reduced-motion alternative

Include `hover`, `focus-visible`, `pressed`, `selected`, `active`, `disabled`, `loading`, `error`, `empty`, and `success` states. Screenshot-invisible behavior must be marked `INFERRED` or `UNKNOWN`.

### 14. Accessibility Contract

- Define page landmarks.
- Define heading order for every page.
- Define a skip link.
- Define keyboard and focus order.
- Define focus-ring tokens.
- Define form labels and descriptions.
- Define alt text behavior.
- Define live regions.
- Define error association.
- Define contrast targets.
- Define reduced-motion behavior.
- Define zoom and reflow behavior.
- Define minimum touch targets.
- Navigation must include menu-button semantics, expanded state, focus containment, focus restoration, Escape handling, body-scroll handling, and active-page announcement where applicable.
- Do not rely on color alone to communicate state.

### 15. Data and Content Model

- Define page-specific data entities.
- Define fields, types, and cardinality.
- Define optional and nullable values.
- Define ordering and grouping.
- Define formatting rules.
- Define localization behavior.
- Define loading, empty, error, and success content.
- Provide sample fixture shapes.
- Separate evidence copy from replaceable placeholder copy.
- Define repeated-item limits and pagination or carousel behavior only when supported by evidence; otherwise mark them `INFERRED` or `UNKNOWN`.

### 16. Frontend Architecture

- Specify routes and layouts.
- Recommend a directory structure.
- Define page modules.
- Define shared-component modules.
- Define the styling strategy.
- Define token files.
- Define asset organization.
- Define data models.
- Define state ownership.
- Define server and client boundaries.
- Define third-party library responsibilities.
- Keep framework choices separate from reconstruction requirements.
- Ensure that another framework can satisfy the same visual and behavioral contract.

### 17. Implementation Task Graph

Produce ordered task IDs with:

- Dependencies
- Inputs
- Outputs
- Affected page IDs
- Affected section IDs
- Affected component IDs
- Completion criteria
- Parallelizable groups

The graph must include measurement setup, design tokens, shared shell, navigation, page-by-page builds, responsive work, interactions, accessibility, visual QA, and performance verification.

### 18. Page-Specific Acceptance Criteria

- Create a separate acceptance checklist for every page.
- Include screenshot-comparison viewports.
- Include section-bound tolerances.
- Include container alignment.
- Include header and navigation geometry.
- Include color difference.
- Include typography metrics.
- Include overflow and text fitting.
- Include asset loading and crop verification.
- Include keyboard behavior.
- Include responsive state.
- Include performance expectations.

Default tolerance guidance:

- Major geometry edges: within `4px`
- Repeated spacing rhythm: within `2px`
- Flat UI colors: `deltaE <= 3`
- Horizontal page overflow: `0px`
- Text or control overlap: none
- Keyboard-inaccessible interactive controls: none

Override a default tolerance only when the document records a concrete reason.

### 19. Uncertainties and Decisions

- List every `UNKNOWN` item by page, section, and component.
- Record the concrete implementation decision selected in its place.
- Record alternatives considered and rejected.
- Record confidence.
- Record risk if the decision is wrong.
- Record the additional evidence required to resolve the uncertainty.
- Never silently omit an unknown value that affects layout, state, accessibility, data, or acceptance testing.

## Completion Gate

The document is incomplete when any of the following is missing:

- A page and route inventory
- A separate full specification for every visible page
- A desktop and mobile navigation geometry and state contract
- Evidence-linked pixel measurements
- Exact color formats and evidence classification
- Per-page section bounds
- Component contracts
- Typography values
- Asset and crop rules
- Responsive matrices
- Interaction and accessibility contracts
- Frontend architecture
- An implementation task graph
- Page-specific acceptance criteria
- Explicit uncertainty records

Another LLM must be able to implement the artwork page by page from the completed document alone, without reopening GDWEB and without silently inventing missing measurements.

## Recommended Sampling Envelope

When this contract is used through an MCP client that supports sampling, use the following behavior:

```text
System role: senior frontend measurement and specification author
Scope: exactly one GDWEB reference
Context: none
Temperature: 0.2
Output: one complete Markdown DESIGN_INDEX document
Minimum required content: all 19 numbered sections and the completion gate
```

The system instruction must state that navigation geometry, section bounds, exact color formats, responsive values, evidence coordinates, confidence, and visual-QA tolerances are mandatory.
