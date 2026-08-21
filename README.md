**English** | [한국어](README.ko.md)

# Secret MCP Use

This repository contains the complete, reusable `DESIGN_INDEX` specification rules extracted from [`yyeongjin/secret_mcp`](https://github.com/yyeongjin/secret_mcp). The rules define how an LLM must turn one GDWEB work and its image evidence into an implementation-ready frontend specification.

The documents preserve the complete `secret-mcp/design-index/v2` contract rather than reducing it to a style summary. They cover request isolation, evidence classification, image coordinates, page and route separation, navigation geometry, section bounds, component contracts, exact colors, typography, assets, responsive behavior, interactions, accessibility, frontend architecture, implementation tasks, visual QA, and uncertainty handling.

## Documents

- [Complete DESIGN_INDEX Specification](DESIGN_INDEX_SPECIFICATION.md)
- [DESIGN_INDEX 전체 명세 규칙](DESIGN_INDEX_SPECIFICATION.ko.md)

## Core Contract

1. One search result is one independent LLM request.
2. One request contains only one work's metadata, contract, and evidence images.
3. One work produces one `DESIGN_INDEX_gdweb-<id>.md` document.
4. Every visible page or route is specified separately inside that work's document.
5. Every material claim is labeled `MEASURED`, `OBSERVED`, `INFERRED`, or `UNKNOWN`.
6. Vague visual descriptions are invalid unless they are followed by measurable values.
7. Another LLM must be able to implement the work from the completed document without reopening GDWEB or silently inventing missing measurements.

## Recommended Use

Provide the specification document to the LLM together with exactly one work's metadata and evidence images. Replace the placeholders in the contract header and evidence map, request the desired output language, and require the response to contain only the completed Markdown document.

The complete rules are maintained in [DESIGN_INDEX_SPECIFICATION.md](DESIGN_INDEX_SPECIFICATION.md). That file is the primary English contract. [DESIGN_INDEX_SPECIFICATION.ko.md](DESIGN_INDEX_SPECIFICATION.ko.md) is its complete Korean counterpart.

## NVIDIA Validation Pipeline Setup

The validation pipeline uses [`nvidia/nemotron-3-super-120b-a12b`](https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b) through the NVIDIA API. A single model ID does not mean a single combined LLM job: one work is split into `S01` through `S19`, and the orchestrator sends 19 stateless requests whose prompts, inputs, outputs, request IDs, logs, and temporary workspaces are isolated from one another.

The complete pipeline contract is documented in [IDEA_VALIDATION_AND_PR_PIPELINE.ko.md](IDEA_VALIDATION_AND_PR_PIPELINE.ko.md).

### 1. Add the API key as a GitHub Actions secret

Open **Settings → Secrets and variables → Actions → Secrets → New repository secret** and add:

```text
NVIDIA_API_KEY=nvapi-...
```

`NVIDIA_API_KEY` must be a secret. Do not add it to repository variables, workflow YAML, source files, committed `.env` files, logs, artifacts, PR bodies, or validation attestations.

The same secret can be configured with GitHub CLI without printing it in the command history:

```bash
read -s NVIDIA_API_KEY
printf '%s' "$NVIDIA_API_KEY" | gh secret set NVIDIA_API_KEY \
  --repo yyeongjin/secret_mcp_use
unset NVIDIA_API_KEY
```

### 2. Add repository variables

Open **Settings → Secrets and variables → Actions → Variables → New repository variable** and add the following values:

| Variable | Recommended value | Purpose |
| --- | --- | --- |
| `NVIDIA_BASE_URL` | `https://integrate.api.nvidia.com/v1` | NVIDIA OpenAI-compatible API base URL |
| `NVIDIA_MODEL` | `nvidia/nemotron-3-super-120b-a12b` | Model used by every isolated Section request |
| `NVIDIA_CONTEXT_WINDOW_TOKENS` | `1000000` | Declared model context window |
| `NVIDIA_MAX_INPUT_TOKENS` | `980000` | Runner-side input budget, leaving space for output and message templates |
| `NVIDIA_MAX_OUTPUT_TOKENS` | `4096` | Maximum output for each independent request |
| `NVIDIA_ENABLE_THINKING` | `false` | Disables reasoning tokens for strict audit JSON on the first test |
| `NVIDIA_REASONING_BUDGET` | `0` | Prevents a separate reasoning budget when thinking is disabled |
| `NVIDIA_TEMPERATURE` | `1.0` | Sampling temperature recommended for this model |
| `NVIDIA_TOP_P` | `0.95` | Top-p value recommended for this model |
| `NVIDIA_RPM_LIMIT` | `40` | Repository-side rate limiter; lower this if the account limit is lower |
| `NVIDIA_AUDIT_CONCURRENCY` | `1` | Safe initial concurrency; request independence does not require parallel execution |
| `PIPELINE_TRIGGER_GLOB` | `trigger/DESIGN_INDEX_gdweb-*.md` | Immutable input documents that start a work-specific run |
| `PIPELINE_FORCE_FULL_AUDIT` | `false` | Preserves valid cached PASS results during ordinary code validation |
| `PIPELINE_DRY_RUN` | `false` | Allows verified patches to be published after temporary-worktree validation |
| `PIPELINE_CREATE_PRS` | `true` | Automatically creates idempotent draft PRs for verified `PATCH_REQUIRED` nodes |

These are runner configuration variables, not all direct NVIDIA request fields. In particular, `NVIDIA_MAX_INPUT_TOKENS` is enforced before the HTTP request is sent. The `980000` limit deliberately keeps approximately 20,000 tokens available for the system message, chat template, and up to 4,096 output tokens instead of filling the entire one-million-token window with input.

The variables can also be configured with GitHub CLI:

```bash
REPO=yyeongjin/secret_mcp_use

gh variable set NVIDIA_BASE_URL --body 'https://integrate.api.nvidia.com/v1' --repo "$REPO"
gh variable set NVIDIA_MODEL --body 'nvidia/nemotron-3-super-120b-a12b' --repo "$REPO"
gh variable set NVIDIA_CONTEXT_WINDOW_TOKENS --body '1000000' --repo "$REPO"
gh variable set NVIDIA_MAX_INPUT_TOKENS --body '980000' --repo "$REPO"
gh variable set NVIDIA_MAX_OUTPUT_TOKENS --body '4096' --repo "$REPO"
gh variable set NVIDIA_ENABLE_THINKING --body 'false' --repo "$REPO"
gh variable set NVIDIA_REASONING_BUDGET --body '0' --repo "$REPO"
gh variable set NVIDIA_TEMPERATURE --body '1.0' --repo "$REPO"
gh variable set NVIDIA_TOP_P --body '0.95' --repo "$REPO"
gh variable set NVIDIA_RPM_LIMIT --body '40' --repo "$REPO"
gh variable set NVIDIA_AUDIT_CONCURRENCY --body '1' --repo "$REPO"
gh variable set PIPELINE_TRIGGER_GLOB --body 'trigger/DESIGN_INDEX_gdweb-*.md' --repo "$REPO"
gh variable set PIPELINE_FORCE_FULL_AUDIT --body 'false' --repo "$REPO"
gh variable set PIPELINE_DRY_RUN --body 'false' --repo "$REPO"
gh variable set PIPELINE_CREATE_PRS --body 'true' --repo "$REPO"
```

Verify only the names and update timestamps. GitHub does not reveal the stored secret value:

```bash
gh secret list --repo yyeongjin/secret_mcp_use
gh variable list --repo yyeongjin/secret_mcp_use
```

### 3. Skip work that has already passed

An NVIDIA request must not be used to decide whether an unchanged Section should be inspected. That would already consume an API call. Before any request, deterministic orchestrator code calculates a fingerprint for each Section from its immutable trigger fragment, relevant common specification fragment, evidence hashes, validator contract and schema version, model configuration, owned frontend source hashes, and direct dependency attestations.

The orchestrator then looks for an immutable PASS attestation with the same `targetId`, `sectionId`, and fingerprint:

```text
matching valid PASS attestation -> CACHED_PASS -> zero NVIDIA calls -> no patch -> no PR
missing or mismatched attestation -> one isolated NVIDIA audit call for that Section
```

A visual similarity guess or the model's memory is never sufficient for a skip. A Section that appears to be implemented but has no valid PASS attestation is audited once. After it passes, the attestation makes later identical runs static and call-free.

The cache is invalidated when any fingerprint input changes, the attestation is missing or revoked, or a dependency attestation is no longer valid. A newly added or externally updated `trigger/DESIGN_INDEX_gdweb-*.md` is a new immutable contract version and therefore starts a full 19-request audit for that work. `PIPELINE_FORCE_FULL_AUDIT=true` also bypasses cached PASS results and must only be used for an intentional complete re-audit. Patch scheduling accepts either a valid persisted PASS attestation or a PASS result produced by that dependency's isolated audit in the current run. A downstream patch is not blocked merely because an upstream PASS has not yet been persisted, while non-PASS dependencies still block it.

The Specification is not compiled into the runner. Every execution parses the current `DESIGN_INDEX_SPECIFICATION.md` with a Markdown AST and extracts the current global rules and numbered S01-S19 fragments. A global rule change invalidates all Section fingerprints. A numbered fragment change invalidates that Section and any downstream cache whose dependency attestation is no longer valid. A previous PASS from another Specification hash is never reused. Missing or duplicate numbered fragments stop the run before any NVIDIA request, and the pipeline never edits the Specification to repair the structure.

### 4. First-run safety settings

The committed push workflow runs with `PIPELINE_DRY_RUN=false` and `PIPELINE_CREATE_PRS=true`. It still cannot publish arbitrary model output: a patch must pass request isolation, response schema validation, immutable-path rejection, base-hash validation, write ownership, diff size limits, `git apply --check`, type checks, unit tests, desktop/mobile browser tests, accessibility regression checks, patched-Section re-audit, affected PASS regression audits, open-PR conflict checks, and idempotency checks. Only then is an unmerged draft PR created. Before `git apply`, deterministic code may remove context-only hunks, restore empty context prefixes, discard untrusted index metadata, and recompute hunk counts; it never changes an added or deleted source line. If the resulting diff is still malformed or does not apply to the supplied base files, the same Section receives one isolated mechanical repair request with a distinct deterministic seed. Security, ownership, evidence, tests, and re-audit failures are never repair-retried, and a second rejected diff is quarantined.

### 5. Run and inspect the pipeline

The complete runner is under [`validation/`](validation/) and [`.github/workflows/validate-design-index.yml`](.github/workflows/validate-design-index.yml) executes it. A push to `main` that changes a trigger, the English Specification, frontend source, validation code, or runner package files starts validation with automatic verified draft PR creation enabled. A manual run is available under **Actions → Validate DESIGN_INDEX and prepare grounded PRs → Run workflow**.

Manual inputs have the following meaning:

- `trigger_path`: exactly one immutable `trigger/DESIGN_INDEX_gdweb-*.md` input. Push runs discover every matching input and skip unchanged works by fingerprint.
- `force_full_audit`: ignores valid PASS cache and sends all 19 audit requests.
- `dry_run`: applies a proposed diff only in an isolated temporary worktree and never publishes it.
- `create_prs`: after every guard, browser test, and patched-code re-audit passes, publishes an idempotent draft PR. This requires `dry_run=false`.
- `mock`: performs deterministic local responses without NVIDIA. Mock attestations are never persisted to `validation-state`.

The end-to-end order is fixed:

```text
parse current Specification and trigger
  -> compute S01-S19 fingerprints
  -> reuse valid immutable PASS attestations before API calls
  -> send one stateless NVIDIA audit request per remaining Section
  -> merge JSON outputs with deterministic code
  -> send a separate patch request only for grounded PATCH_REQUIRED nodes
  -> retry the same Section once only for malformed or non-applying unified diff mechanics
  -> reject trigger/spec writes, stale hashes, excessive diffs, and ownership violations
  -> apply in a temporary worktree
  -> type-check, unit-test, render desktop/mobile, check accessibility
  -> re-audit the patched Section in another stateless request
  -> optionally create one idempotent draft PR for the verified node
```

PASS attestations are written to the orphan `validation-state` branch. Raw isolated inputs, validated outputs, gap reports, patch guards, test results, and re-audit results are uploaded as a 30-day GitHub Actions artifact. The workflow never auto-approves or auto-merges a PR.

For a local call-free integration test:

```bash
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run test:frontend
npm run audit -- --mock --dry-run --trigger trigger/DESIGN_INDEX_gdweb-26357.md
```

The mock run must report `auditCalls: 19` without existing state. Copying its generated attestations into a temporary state directory and repeating the same run is covered by the integration tests and must report `cachedPasses: 19` with `auditCalls: 0`.

## Live Frontend Preview

The implementation generated from [`trigger/DESIGN_INDEX_gdweb-26357.md`](trigger/DESIGN_INDEX_gdweb-26357.md) is stored in [`frontend/`](frontend/). GitHub Pages publishes that directory as a live website, so repository screenshots are not required to inspect the current frontend.

**Live site:** <https://yyeongjin.github.io/secret_mcp_use/>

```mermaid
flowchart LR
    A["Push a frontend change to main"] --> B["GitHub Actions"]
    B --> C["Upload the frontend directory"]
    C --> D["Deploy to GitHub Pages"]
    D --> E["Refresh the live site URL"]
```

### Deployment Structure

- `frontend/`: deployable static HTML, CSS, JavaScript, and local visual assets.
- `.github/workflows/deploy-frontend-pages.yml`: the GitHub Pages deployment workflow.
- `trigger/DESIGN_INDEX_gdweb-26357.md`: the source specification used to reconstruct the current frontend.
- A push to `main` that changes `frontend/**` or the deployment workflow starts a new deployment.
- `workflow_dispatch` also allows a manual deployment from the repository's Actions tab.
- The workflow uploads only `frontend/`; specifications and other repository documents are not included in the public site artifact.
- The first deployment requires **Settings → Pages → Build and deployment → Source → GitHub Actions** to be selected once for the repository.

For local inspection:

```bash
cd frontend
python3 -m http.server 4321
```

Then open <http://127.0.0.1:4321/>.

## Source Baseline

The initial rules in this repository were transferred from `yyeongjin/secret_mcp` at commit `8097977` (`secret-mcp/design-index/v2`).
