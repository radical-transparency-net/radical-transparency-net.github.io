# Portal Content Redesign & Ecosystem Alignment Implementation Plan

**Date:** 2026-11-26  
**Status:** Planned  
**Summary:** Bite-sized implementation plan for syncing v1.0 branding and RT-Pattern SVGs, building Patterns/Tools/Semantic Assets/Community routes, scrubbing lorem ipsum, and verifying build and runtime preview.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all placeholder and lorem-ipsum portal content with factual Radical Transparency content centered on RT-Patterns (`RT-P01`–`RT-P10`), beta tools (`webmap-ER`, `lod_docker_webserver`, `wrx`), semantic assets (`rtwl:`), and `v1.0` *Brugse Schelprand* branding while keeping all existing components intact and compiling.

**Architecture:** Add dedicated feature modules (`src/components/patterns/`, `src/components/tools/`, `src/components/semantic-assets/`) and overview/detail routes under `HashRouter`, backed by strongly typed data files in `src/data/*.ts` and verbatim synced SVG/icon assets under `public/assets/{branding,patterns}/`. Preserve all existing unused components on disk with scrubbed, type-valid data modules so `tsc -b` stays green.

**Tech Stack:** React 18, TypeScript (`strict`, `noUnusedLocals`, `noUnusedParameters`), Vite 5, Tailwind CSS (`Open Science Interop` theme), `react-router-dom` v6 (`HashRouter`), Node 26 built-in `node --test` + `esbuild` (transitive Vite dependency, zero added npm dependencies).

**Spec:** [`.cape/context/2026-11-26-portal-content-redesign-design.md`](../context/2026-11-26-portal-content-redesign-design.md) and [`.cape/context/2026-11-26-portal-repo-triage.md`](../context/2026-11-26-portal-repo-triage.md)

---

## Global Constraints

- Zero new runtime or test npm dependencies (use Node 26 `node --test` and Vite's transitive `esbuild` for loading TS modules in tests).
- TypeScript `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true` (`tsconfig.json`); `npm.cmd run verify` (`npm run cape:index && tsc -b && vite build`) must exit 0.
- On Windows PowerShell, invoke `npm.cmd` / `npx.cmd` (not `npm.ps1`) and separate commands with `;` instead of `&&`.
- Render `rt-logo.svg` strictly via `<img>` (`./assets/branding/rt-logo.svg`) so internal `@media` LOD queries evaluate against the image box.
- Reference all static assets with `./assets/...` relative paths under `public/assets/{branding,patterns}/`.
- Zero occurrences of `lorem`, `ipsum`, `(DRAFT)`, or `lh3.googleusercontent.com` anywhere in `src/` or `index.html`.
- Preserve all existing components in `src/components/{home/RoleFinder,theory/*,developer/*,community/*}` and `src/pages/{TheoryPage,DeveloperPage}` intact and compiling.
- Write strictly factual English prose per `.cape/context/2026-10-11-style-and-sensitivity.md` (zero hyperbole, zero fabricated events/metrics/credentials).

## Review Focus

1. **Broken or missing SVG / branding asset path on HashRouter deep routes** (`/patterns/rt-p01`, `/tools/wrx`): relative `./assets/...` paths must correspond to real files under `public/assets/{branding,patterns}/` (pinned in Tasks 1 & 3 tests).
2. **Unknown or uppercase detail slugs** (`/patterns/RT-P01`, `/patterns/does-not-exist`, `/tools/unknown`): lookup helpers must normalize case and return `undefined` cleanly so detail pages render an inline Not-Found state instead of throwing (pinned in Tasks 3 & 4 tests).
3. **`RT-P10` missing SVG crash or missing caution notice**: `rt-p10` has no upstream `.svg` file; it must render its structured text diagram and Reader's Caution alert without an `<img src={undefined}>` broken image (pinned in Task 3 test).
4. **Dangling cross-links between patterns and tools** (`relatedPatternIds`): every referenced pattern ID in `patterns.ts` and `tools.ts` must exist in `patternsData`, and every ReSpec URL must use the exact `#rt-p01`–`#rt-p10` anchor verified in `spec-linkset-usage-patterns/index.html` (pinned in Tasks 3 & 4 tests).
5. **Residual lorem ipsum, `(DRAFT)` tags, or `lh3.googleusercontent.com` URLs in preserved data files or `tsc -b` breakage on unmounted components**: automated scan across all of `src/` and `index.html` plus `tsc -b` verifies clean compilation and zero leftover placeholders (pinned in Tasks 6 & 7 tests).

## File Structure Map

- **Assets (`public/assets/`):**
  - Create: `public/assets/branding/{rt-logo.svg,rt-logo-inverse.svg,favicon.svg,favicon.ico,apple-touch-icon.png}`
  - Create: `public/assets/patterns/{rt-patterns-overview.svg,rt-patterns-profile-subjects.svg,rt-p01-profile-declaration.svg,rt-p02-profile-composition.svg,rt-p03-content-negotiation-menu.svg,rt-p04-no-landing-page-solution.svg,rt-p05-subsetting-api.svg,rt-p06-hostwide-discovery.svg,rt-p07-catalog-assistance.svg,rt-p08-large-linksets.svg,rt-p09-release-links.svg}`
  - Preserve: `public/assets/vliz-logo.png`
- **Core App & Shell:**
  - Modify: `index.html`, `src/types/index.ts`, `src/components/common/CodeBlock.tsx`, `src/data/siteConfig.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/App.tsx`
  - Create: `src/components/layout/ScrollToTop.tsx`, `src/pages/NotFoundPage.tsx`
- **Domain Data, Components & Pages:**
  - Patterns: `src/data/patterns.ts`, `src/components/patterns/PatternDiagramViewer.tsx`, `src/components/patterns/PatternCard.tsx`, `src/pages/PatternsPage.tsx`, `src/pages/PatternDetailPage.tsx`
  - Tools: `src/data/tools.ts`, `src/components/tools/BetaNoticeBanner.tsx`, `src/components/tools/ToolCard.tsx`, `src/pages/ToolsPage.tsx`, `src/pages/ToolDetailPage.tsx`
  - Semantic Assets: `src/data/semanticAssets.ts`, `src/components/semantic-assets/SemanticAssetCard.tsx`, `src/pages/SemanticAssetsPage.tsx`
  - Community: `src/data/community.ts` (modify), `src/pages/CommunityPage.tsx` (modify)
  - Home: `src/data/home.ts` (create), `src/data/spotlight.ts` (modify), `src/components/home/{HeroBanner,TriageDoors,SpotlightGrid}.tsx` (modify), `src/pages/HomePage.tsx` (modify)
- **Preserved Components & Scrubbed Legacy Data:**
  - Preserved untouched: `src/components/home/RoleFinder.tsx`, `src/components/theory/*`, `src/components/developer/*`, `src/components/community/*`, `src/pages/TheoryPage.tsx`, `src/pages/DeveloperPage.tsx`
  - Scrubbed (zero lorem ipsum / drafts, schema-compatible): `src/data/roles.ts`, `src/data/theory.ts`, `src/data/tooling.ts`
- **Tests:** `tests/{helpers.mjs,assets.test.mjs,shell-config.test.mjs,patterns.test.mjs,tools.test.mjs,semantic-community.test.mjs,no-placeholders.test.mjs}`

---

### Task 1: Install Dependencies, Sync Upstream Branding & Pattern SVGs, and Update `index.html`

**Files:**
- Create: `tests/assets.test.mjs`
- Create: `public/assets/branding/rt-logo.svg`, `public/assets/branding/rt-logo-inverse.svg`, `public/assets/branding/favicon.svg`, `public/assets/branding/favicon.ico`, `public/assets/branding/apple-touch-icon.png`
- Create: `public/assets/patterns/rt-patterns-overview.svg`, `public/assets/patterns/rt-patterns-profile-subjects.svg`, `public/assets/patterns/rt-p01-profile-declaration.svg` through `public/assets/patterns/rt-p09-release-links.svg` (11 SVG files total)
- Modify: `index.html:1-19`

**Interfaces:**
- Consumes: `package-lock.json`, upstream raw files from `radical-transparency-net/visuals-branding-design` (`logo/*`) and `radical-transparency-net/spec-linkset-usage-patterns` (`*.svg`).
- Produces: Static files under `public/assets/branding/` and `public/assets/patterns/`, plus updated `index.html` icon links (`./assets/branding/favicon.svg`, `./assets/branding/favicon.ico`, `./assets/branding/apple-touch-icon.png`).

- [ ] **Step 1: Install workspace dependencies**

Run: `npm.cmd ci`
Expected: `node_modules/` created, exit code 0.

- [ ] **Step 2: Write the failing test `tests/assets.test.mjs`**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const brandingFiles = [
  'rt-logo.svg',
  'rt-logo-inverse.svg',
  'favicon.svg',
  'favicon.ico',
  'apple-touch-icon.png',
];

const patternSvgs = [
  'rt-patterns-overview.svg',
  'rt-patterns-profile-subjects.svg',
  'rt-p01-profile-declaration.svg',
  'rt-p02-profile-composition.svg',
  'rt-p03-content-negotiation-menu.svg',
  'rt-p04-no-landing-page-solution.svg',
  'rt-p05-subsetting-api.svg',
  'rt-p06-hostwide-discovery.svg',
  'rt-p07-catalog-assistance.svg',
  'rt-p08-large-linksets.svg',
  'rt-p09-release-links.svg',
];

test('branding and pattern assets exist and are non-empty', () => {
  for (const file of brandingFiles) {
    const fullPath = path.join('public', 'assets', 'branding', file);
    assert.equal(fs.existsSync(fullPath), true, `Missing ${fullPath}`);
    assert.ok(fs.statSync(fullPath).size > 0, `Empty ${fullPath}`);
  }
  for (const file of patternSvgs) {
    const fullPath = path.join('public', 'assets', 'patterns', file);
    assert.equal(fs.existsSync(fullPath), true, `Missing ${fullPath}`);
    assert.ok(fs.readFileSync(fullPath, 'utf8').includes('<svg'), `Invalid SVG: ${fullPath}`);
  }
});

test('index.html wires v1.0 favicons without draft or lorem text', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /\.\/assets\/branding\/favicon\.svg/);
  assert.match(html, /\.\/assets\/branding\/favicon\.ico/);
  assert.match(html, /\.\/assets\/branding\/apple-touch-icon\.png/);
  assert.doesNotMatch(html, /\(DRAFT\)|lorem|ipsum/i);
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `node --test tests/assets.test.mjs`
Expected: FAIL (`Missing public\assets\branding\rt-logo.svg` and missing favicon links in `index.html`).

- [ ] **Step 4: Sync branding & pattern assets verbatim and update `index.html`**

Download the 5 branding files verbatim from `https://raw.githubusercontent.com/radical-transparency-net/visuals-branding-design/main/logo/<file>` into `public/assets/branding/` and the 11 SVG files verbatim from `https://raw.githubusercontent.com/radical-transparency-net/spec-linkset-usage-patterns/main/<file>` into `public/assets/patterns/`. Update `index.html` `<head>` to include:
- `<link rel="icon" type="image/svg+xml" href="./assets/branding/favicon.svg" />`
- `<link rel="icon" href="./assets/branding/favicon.ico" sizes="any" />`
- `<link rel="apple-touch-icon" href="./assets/branding/apple-touch-icon.png" />`
- Factual `<title>` (`Radical Transparency Network — Linkset Usage Patterns & Interoperability`) and `<meta name="description">`.

- [ ] **Step 5: Run test to verify it passes**

Run: `node --test tests/assets.test.mjs`
Expected: PASS (2 tests passing).

- [ ] **Step 6: Commit**

```powershell
git add public/assets/branding public/assets/patterns index.html tests/assets.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(assets): sync v1.0 logo, favicons, and pattern SVGs" }
```

---

### Task 2: Shared Types, Multiline `CodeBlock`, and Site Shell (`siteConfig`, `Header`, `Footer`, `ScrollToTop`, `NotFoundPage`)

**Files:**
- Create: `tests/helpers.mjs`, `tests/shell-config.test.mjs`
- Modify: `src/types/index.ts:1-183`
- Modify: `src/components/common/CodeBlock.tsx:1-41`
- Modify: `src/data/siteConfig.ts:1-18`
- Modify: `src/components/layout/Header.tsx:1-123`
- Modify: `src/components/layout/Footer.tsx:1-131`
- Create: `src/components/layout/ScrollToTop.tsx`
- Create: `src/pages/NotFoundPage.tsx`

**Interfaces:**
- Consumes: `src/components/common/Badge.tsx`, `src/components/common/Card.tsx`
- Produces:
  - In `src/types/index.ts`: updated `SiteConfig` (adds `orgUrl: string; respecUrl: string;`), plus new interfaces `TriageDoorItem`, `PatternItem`, `ToolItem`, `SemanticAsset`, `CommunityResource` matching Section 5.1 of the design spec.
  - In `src/components/common/CodeBlock.tsx`: `CodeBlock` accepting `{ code: string; language?: string; multiline?: boolean; className?: string }`.
  - In `src/data/siteConfig.ts`: `siteConfig` with 5 `navLinks` (`/`, `/patterns`, `/tools`, `/semantic-assets`, `/community`), `githubUrl: "https://github.com/radical-transparency-net"`, `respecUrl: "https://radical-transparency-net.github.io/spec-linkset-usage-patterns/"`.
  - In `src/components/layout/`: `Header`, `Footer`, `ScrollToTop`.
  - In `src/pages/NotFoundPage.tsx`: `NotFoundPage`.

- [ ] **Step 1: Create TS loader helper `tests/helpers.mjs` and failing test `tests/shell-config.test.mjs`**

`tests/helpers.mjs` exports `loadTsModule(relPath)` using `esbuild` (`buildSync` with `bundle: true, platform: 'node', format: 'esm', write: false`) and dynamic `import('data:text/javascript;base64,' + ...)` so ESM Node tests can directly import TypeScript files under `src/`.

`tests/shell-config.test.mjs` asserts:
- `siteConfig.navLinks.map((n) => n.path)` deep-equals `['/', '/patterns', '/tools', '/semantic-assets', '/community']`.
- `siteConfig.title`, `siteConfig.tagline`, `siteConfig.description` contain zero `(DRAFT)` or `lorem|ipsum`.
- `siteConfig.githubUrl === 'https://github.com/radical-transparency-net'` and `siteConfig.respecUrl === 'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/'`.
- `Header.tsx` references `./assets/branding/rt-logo.svg` via `<img>`, contains no `type="search"`, and contains no `(DRAFT)`.
- `Footer.tsx` contains `./assets/vliz-logo.png`, `https://vliz.be/en/legal-notice`, links to `#/patterns`, `#/tools`, `#/semantic-assets`, `#/community`, and contains no `<form`, `lorem`, or `ipsum`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/shell-config.test.mjs`
Expected: FAIL (legacy `navLinks` and `(DRAFT)` / `Lorem` strings fail assertions).

- [ ] **Step 3: Implement shared types, `CodeBlock`, `siteConfig`, shell components, and `NotFoundPage`**

1. Extend `src/types/index.ts` keeping all existing interfaces intact for preserved components, adding `orgUrl` and `respecUrl` to `SiteConfig`, and adding `TriageDoorItem`, `PatternItem`, `ToolItem`, `SemanticAsset`, `CommunityResource`.
2. Update `src/components/common/CodeBlock.tsx` so when `multiline || code.includes('\n')`, it renders a `<pre className="... overflow-x-auto whitespace-pre">` block with a top-right copy button, while preserving single-line CLI layout when single-line.
3. Rewrite `src/data/siteConfig.ts` with factual metadata (`title: "Radical Transparency"`, `license: "CC-BY 4.0"`, `githubUrl: "https://github.com/radical-transparency-net"`, `orgUrl: "https://github.com/radical-transparency-net"`, `respecUrl: "https://radical-transparency-net.github.io/spec-linkset-usage-patterns/"`, `proposalsUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency"`, and the 5 `navLinks`).
4. Update `src/components/layout/Header.tsx`: render `<img src="./assets/branding/rt-logo.svg" alt="Radical Transparency logo" className="w-9 h-9 shrink-0" />` + `Radical Transparency`, remove search `<input>`, keep desktop nav + mobile drawer + GitHub link + primary CTA linking to `/patterns`.
5. Update `src/components/layout/Footer.tsx`: remove all lorem ipsum, dummy pills, dummy bottom links, and newsletter `<form>`; preserve VLIZ logo (`./assets/vliz-logo.png`), InnovOcean attribution, and legal link (`https://vliz.be/en/legal-notice`); render 3 columns (`Specifications`, `Beta Tooling`, `Network`).
6. Create `src/components/layout/ScrollToTop.tsx` (`useLocation` effect calling `window.scrollTo(0, 0)` on `pathname` change) and `src/pages/NotFoundPage.tsx` (card with links to `/` and `/patterns`).

- [ ] **Step 4: Run test and TypeScript check to verify they pass**

Run: `node --test tests/shell-config.test.mjs; if ($LASTEXITCODE -eq 0) { npx.cmd tsc -b }`
Expected: PASS (`tests/shell-config.test.mjs` passes and `tsc -b` exits 0).

- [ ] **Step 5: Commit**

```powershell
git add src/types/index.ts src/components/common/CodeBlock.tsx src/data/siteConfig.ts src/components/layout/Header.tsx src/components/layout/Footer.tsx src/components/layout/ScrollToTop.tsx src/pages/NotFoundPage.tsx tests/helpers.mjs tests/shell-config.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(shell): update types, CodeBlock, branding Header, and factual Footer" }
```

---

### Task 3: RT-Patterns Data, Helpers, Overview Page & Detail Pages (`/patterns`, `/patterns/:id`)

**Files:**
- Create: `tests/patterns.test.mjs`
- Create: `src/data/patterns.ts`
- Create: `src/components/patterns/PatternDiagramViewer.tsx`
- Create: `src/components/patterns/PatternCard.tsx`
- Create: `src/pages/PatternsPage.tsx`
- Create: `src/pages/PatternDetailPage.tsx`

**Interfaces:**
- Consumes: `PatternItem` (`src/types/index.ts`), `Card`, `Badge`, `CodeBlock`.
- Produces in `src/data/patterns.ts`:
  - `patternsOverviewMeta`: `{ title: string; subtitle: string; steps: { step: string; title: string; description: string }[]; respecUrl: string; repoUrl: string; overviewSvgPath: string; subjectsSvgPath: string }`
  - `patternsData: PatternItem[]` (10 items ordered `rt-p01` through `rt-p10`)
  - `getPatternById(id: string): PatternItem | undefined`
  - `getAdjacentPatterns(id: string): { prev: PatternItem | null; next: PatternItem | null }`
- Produces components/pages: `PatternDiagramViewer`, `PatternCard`, `PatternsPage`, `PatternDetailPage`.

- [ ] **Step 1: Write the failing test `tests/patterns.test.mjs`**

Assert:
- `patternsData.length === 10` and IDs match `['rt-p01', 'rt-p02', 'rt-p03', 'rt-p04', 'rt-p05', 'rt-p06', 'rt-p07', 'rt-p08', 'rt-p09', 'rt-p10']`.
- `getPatternById('RT-P03')?.code === 'RT-P03'` (case-insensitive) and `getPatternById('missing') === undefined`.
- `getAdjacentPatterns('rt-p01')` has `prev: null` and `next.id === 'rt-p02'`; `getAdjacentPatterns('rt-p10')` has `prev.id === 'rt-p09'` and `next: null`.
- For `rt-p01`–`rt-p09`, `svgPath` starts with `./assets/patterns/` and resolves to an existing `.svg` file under `public/assets/patterns/`.
- For `rt-p10`, `svgPath` is `undefined`, `cautionNote` is non-empty, and `textDiagram` is non-empty.
- Every pattern's `respecUrl` equals `https://radical-transparency-net.github.io/spec-linkset-usage-patterns/#${p.id}` and every ID in `relatedPatternIds` exists in `patternsData`.
- `patternsOverviewMeta.overviewSvgPath` and `subjectsSvgPath` resolve to existing `.svg` files under `public/assets/patterns/`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/patterns.test.mjs`
Expected: FAIL (`Cannot find module .../src/data/patterns.ts`).

- [ ] **Step 3: Fetch upstream pattern specs and implement `src/data/patterns.ts`, components, and pages**

1. Fetch the full Markdown content of `rt-p01-profile-declaration.md` through `rt-p10-detached-local-storage.md` from `https://raw.githubusercontent.com/radical-transparency-net/spec-linkset-usage-patterns/main/` so every pattern's Goal, Motivation, primary HTTP `Link` / RFC 9264 Linkset / Sitemap encoding snippet, link relations, standards, and `RT-P10`'s Reader's Caution + directory layout diagram are transcribed accurately with zero invented encodings.
2. Implement `src/data/patterns.ts` exporting `patternsOverviewMeta`, `patternsData`, `getPatternById` (`patternsData.find((p) => p.id === id.toLowerCase())`), and `getAdjacentPatterns`.
3. Create `src/components/patterns/PatternDiagramViewer.tsx` (supports overview toggle between `rt-patterns-overview.svg` and `rt-patterns-profile-subjects.svg`, single SVG view, or text diagram `CodeBlock` when no `svgPath` is set) and `src/components/patterns/PatternCard.tsx`.
4. Create `src/pages/PatternsPage.tsx` (Declare → Verify → Quantify overview, ReSpec + GitHub links, `PatternDiagramViewer` with toggle, 10-card grid linking to `/patterns/:id`) and `src/pages/PatternDetailPage.tsx` (handles missing slug with Not-Found card linking back to `/patterns`; renders breadcrumb, `RT-PXX` badge, ReSpec/GitHub links, Goal, optional `cautionNote` alert, Motivation, Architecture diagram or `textDiagram`, primary encoding `CodeBlock`, link relations & standards badges, internal Related Patterns links, and Prev/Next links).

- [ ] **Step 4: Run test and TypeScript check to verify they pass**

Run: `node --test tests/patterns.test.mjs; if ($LASTEXITCODE -eq 0) { npx.cmd tsc -b }`
Expected: PASS (`tests/patterns.test.mjs` passes and `tsc -b` exits 0).

- [ ] **Step 5: Commit**

```powershell
git add src/data/patterns.ts src/components/patterns src/pages/PatternsPage.tsx src/pages/PatternDetailPage.tsx tests/patterns.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(patterns): add RT-P01 to RT-P10 overview and detail pages" }
```

---

### Task 4: Beta Tools Data, Helpers, Overview Page & Detail Pages (`/tools`, `/tools/:id`)

**Files:**
- Create: `tests/tools.test.mjs`
- Create: `src/data/tools.ts`
- Create: `src/components/tools/BetaNoticeBanner.tsx`
- Create: `src/components/tools/ToolCard.tsx`
- Create: `src/pages/ToolsPage.tsx`
- Create: `src/pages/ToolDetailPage.tsx`

**Interfaces:**
- Consumes: `ToolItem` (`src/types/index.ts`), `getPatternById` (`src/data/patterns.ts`), `Card`, `Badge`, `CodeBlock`.
- Produces in `src/data/tools.ts`:
  - `toolsBetaNotice: { label: string; title: string; message: string }`
  - `toolsData: ToolItem[]` (`webmap-er`, `lod-docker-webserver`, `wrx`)
  - `getToolById(id: string): ToolItem | undefined`
- Produces components/pages: `BetaNoticeBanner`, `ToolCard`, `ToolsPage`, `ToolDetailPage`.

- [ ] **Step 1: Write the failing test `tests/tools.test.mjs`**

Assert:
- `toolsData.map((t) => t.id)` deep-equals `['webmap-er', 'lod-docker-webserver', 'wrx']`.
- Every tool has `status === 'Beta — Not Fully Released'` and `toolsBetaNotice.message` mentions beta / not fully released.
- `getToolById('WEBMAP-ER')?.name === 'webmap-ER'` and `getToolById('unknown') === undefined`.
- `webmap-er` has `liveUrl === 'https://radical-transparency-net.github.io/webmap-ER/'`; `wrx` has `liveUrl === 'https://radical-transparency-net.github.io/wrx/'`.
- Every `repoUrl` targets `https://github.com/radical-transparency-net/...` and every pattern ID in `relatedPatternIds` resolves via `getPatternById`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/tools.test.mjs`
Expected: FAIL (`Cannot find module .../src/data/tools.ts`).

- [ ] **Step 3: Implement `src/data/tools.ts`, components, and pages**

1. Create `src/data/tools.ts` with factual details verified from the three upstream READMEs/specs:
   - `webmap-er`: browser visual auditor & linkset wizard (Resource-First ER Triage, Pattern-Driven Wizard, built-in presets, URI-fragment session memory, export to `Link` headers / RFC 9264 linksets / sitemaps / `rt-test` YAML / IT tickets).
   - `lod-docker-webserver`: containerized Nginx + generator LOD discovery & compliance testbed (150 simulated pages across 30 discovery strategies in a 2×2 taxonomy: Resource vs. Domain × Direct vs. Inferenced RDF; `.well-known/lod-catalog`, OAI-ORE resource maps, sitemaps, feeds) with Docker Compose quickstart.
   - `wrx`: TypeScript/Bun library and CLI for cascading URI-to-RDF extraction and `extractLinkRelations(uri)` harvesting (`--all`, `--extend-links`, `--profile`, `--output`).
2. Create `src/components/tools/BetaNoticeBanner.tsx` and `src/components/tools/ToolCard.tsx`.
3. Create `src/pages/ToolsPage.tsx` (Hero + `BetaNoticeBanner` + 3 `ToolCard` items linking to `/tools/:id`) and `src/pages/ToolDetailPage.tsx` (inline Not-Found fallback for invalid slugs; `BetaNoticeBanner`, capabilities, `CodeBlock` quickstart, cross-linked `/patterns/:id` badges, GitHub repo + live app CTAs).

- [ ] **Step 4: Run test and TypeScript check to verify they pass**

Run: `node --test tests/tools.test.mjs; if ($LASTEXITCODE -eq 0) { npx.cmd tsc -b }`
Expected: PASS (`tests/tools.test.mjs` passes and `tsc -b` exits 0).

- [ ] **Step 5: Commit**

```powershell
git add src/data/tools.ts src/components/tools src/pages/ToolsPage.tsx src/pages/ToolDetailPage.tsx tests/tools.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(tools): add beta tooling overview and detail pages" }
```

---

### Task 5: Semantic Assets Page (`/semantic-assets`) & Rewritten Community Page (`/community`)

**Files:**
- Create: `tests/semantic-community.test.mjs`
- Create: `src/data/semanticAssets.ts`
- Create: `src/components/semantic-assets/SemanticAssetCard.tsx`
- Create: `src/pages/SemanticAssetsPage.tsx`
- Modify: `src/data/community.ts:1-213`
- Modify: `src/pages/CommunityPage.tsx:1-30`

**Interfaces:**
- Consumes: `SemanticAsset`, `CommunityResource`, `PlaybookTrack`, `EventItem`, `RoadmapPhase`, `ChannelItem` (`src/types/index.ts`), `Card`, `Badge`, `CodeBlock`.
- Produces in `src/data/semanticAssets.ts`: `semanticAssetsRepoUrl`, `semanticAssetsDevNotice`, `semanticAssetsData` (featuring `rtwl:` `v0.1.0-draft`, namespace `https://w3id.org/rt/ns/weblink#`, docs `https://radical-transparency-net.github.io/semantic-assets/weblink/`, classes `rtwl:WebLink`, `rtwl:TargetAttribute`, `rtwl:Linkset`, properties `rtwl:anchor`, `rtwl:href`, `rtwl:rel`, `rtwl:attribute`, `rtwl:key`, `rtwl:value`, `rtwl:link`, and representation links).
- Produces in `src/data/community.ts`: `communityResourcesData: CommunityResource[]` alongside scrubbed `playbookTracksData`, `upcomingEventsData`, `roadmapPhasesData`, `stakeholderChannelsData` (retained with factual placeholder-free arrays/entries so preserved `src/components/community/*` components compile cleanly).
- Produces pages: `SemanticAssetsPage`, `CommunityPage`.

- [ ] **Step 1: Write the failing test `tests/semantic-community.test.mjs`**

Assert:
- `semanticAssetsRepoUrl === 'https://github.com/radical-transparency-net/semantic-assets'` and `semanticAssetsDevNotice.body` states that vocabularies/ontologies are under active development.
- `semanticAssetsData` includes `rtwl:` with `namespaceUri === 'https://w3id.org/rt/ns/weblink#'`, `docsUrl === 'https://radical-transparency-net.github.io/semantic-assets/weblink/'`, `version === '0.1.0-draft'`, `terms.classes` including `'rtwl:WebLink'` and `'rtwl:TargetAttribute'`, and `terms.properties` including `'rtwl:anchor'`, `'rtwl:rel'`, `'rtwl:href'`, `'rtwl:attribute'`, `'rtwl:key'`, `'rtwl:value'`.
- `communityResourcesData.length >= 3` covering the `radical-transparency-net` GitHub org, VLIZ / EOSC incubator origin, and `visuals-branding-design`.
- Retained `src/data/community.ts` exports (`playbookTracksData`, `upcomingEventsData`, `roadmapPhasesData`, `stakeholderChannelsData`) exist and contain zero `lorem`, `ipsum`, `(DRAFT)`, or `lh3.googleusercontent.com`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/semantic-community.test.mjs`
Expected: FAIL (`Cannot find module .../src/data/semanticAssets.ts` and `communityResourcesData` missing).

- [ ] **Step 3: Implement Semantic Assets and rewrite Community**

1. Create `src/data/semanticAssets.ts`, `src/components/semantic-assets/SemanticAssetCard.tsx`, and `src/pages/SemanticAssetsPage.tsx` (Hero + Under Active Development notice linking to `semanticAssetsRepoUrl` + `SemanticAssetCard` for `rtwl:` showing status, W3ID `303 See Other` note, namespace URI, classes/properties, representations `index.html`, `weblink.ttl`, `weblink.jsonld`, `weblink.linkset.json`, `examples/observed-links.ttl`, and docs/repo links).
2. Update `src/data/community.ts` and `src/pages/CommunityPage.tsx` with factual collaboration resources (`radical-transparency-net` GitHub organization, VLIZ stewardship & EOSC incubator provenance, `visuals-branding-design`), keeping scrubbed legacy exports in `src/data/community.ts` so `src/components/community/*` keep compiling cleanly.

- [ ] **Step 4: Run test and TypeScript check to verify they pass**

Run: `node --test tests/semantic-community.test.mjs; if ($LASTEXITCODE -eq 0) { npx.cmd tsc -b }`
Expected: PASS (`tests/semantic-community.test.mjs` passes and `tsc -b` exits 0).

- [ ] **Step 5: Commit**

```powershell
git add src/data/semanticAssets.ts src/components/semantic-assets src/pages/SemanticAssetsPage.tsx src/data/community.ts src/pages/CommunityPage.tsx tests/semantic-community.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(pages): add Semantic Assets page and factual Community page" }
```

---

### Task 6: Home Page Overhaul, Legacy Data Scrubbing & Route Wiring (`App.tsx`)

**Files:**
- Create: `tests/no-placeholders.test.mjs`
- Create: `src/data/home.ts`
- Modify: `src/data/spotlight.ts:1-64`
- Modify: `src/data/roles.ts:1-234`
- Modify: `src/data/theory.ts:1-96`
- Modify: `src/data/tooling.ts:1-129`
- Modify: `src/components/home/HeroBanner.tsx:1-24`
- Modify: `src/components/home/TriageDoors.tsx:1-117`
- Modify: `src/components/home/SpotlightGrid.tsx:1-83`
- Modify: `src/pages/HomePage.tsx:1-20`
- Modify: `src/App.tsx:1-29`

**Interfaces:**
- Consumes: `TriageDoorItem`, `StatItem`, `ProposalSpotlight`, `RoleProfile`, `Tenet`, `ComparisonColumn`, `SpecCard`, `SdkItem`, `ValidationProfile` (`src/types/index.ts`), `siteConfig` (`src/data/siteConfig.ts`), `PatternsPage`, `PatternDetailPage`, `ToolsPage`, `ToolDetailPage`, `SemanticAssetsPage`, `CommunityPage`, `NotFoundPage`, `ScrollToTop`.
- Produces: `triageDoorsData: TriageDoorItem[]` (`src/data/home.ts`), factual `pulseStatsData` and `proposalSpotlightsData` (`src/data/spotlight.ts`), scrubbed legacy data in `roles.ts`/`theory.ts`/`tooling.ts`, updated `HomePage` (`HeroBanner`, `TriageDoors`, `PulseStats`, `SpotlightGrid`), and complete `App.tsx` routing table with `/theory` → `/patterns` and `/developer` → `/tools` redirects and `*` → `NotFoundPage`.

- [ ] **Step 1: Write the failing test `tests/no-placeholders.test.mjs`**

Assert:
- Recursively scan every file in `src/` and `index.html`: zero matches for `/lorem/i`, `/ipsum/i`, `/\(DRAFT\)/`, or `/lh3\.googleusercontent\.com/`.
- Assert all preserved component and page files still exist on disk (`src/components/home/RoleFinder.tsx`, `src/components/theory/{TheoryHero,SystemDiagram,PillarsGrid,ComparisonMatrix,MotivationSection,LineageInspector}.tsx`, `src/components/developer/{DevHubHero,CliTerminal,SpecsGrid,ValidatorPlayground,SdkCards,ContributionSteps}.tsx`, `src/components/community/{CommunityHero,PlaybookTracks,EventCards,RoadmapTimeline,ChannelsGrid}.tsx`, `src/pages/{TheoryPage,DeveloperPage}.tsx`).
- Load `src/data/home.ts` and `src/data/spotlight.ts` and assert `triageDoorsData.map((d) => d.ctaPath)` equals `['/patterns', '/tools', '/semantic-assets']` and `pulseStatsData` has 4 items starting with `'10'` Patterns and `'3'` Beta Tools.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/no-placeholders.test.mjs`
Expected: FAIL (existing `(DRAFT)`, `lorem`, `ipsum`, `lh3.googleusercontent.com` matches and missing `src/data/home.ts`).

- [ ] **Step 3: Implement Home overhaul, scrub legacy data files, and update `App.tsx`**

1. Create `src/data/home.ts` (`triageDoorsData`: RT-Patterns `/patterns`, Beta Tools `/tools`, Semantic Assets `/semantic-assets`) and update `src/components/home/TriageDoors.tsx` to map over `triageDoorsData`.
2. Update `src/components/home/HeroBanner.tsx` (render `./assets/branding/rt-logo.svg` via `<img>` at `w-20 h-20 sm:w-24 sm:h-24` so `M`-tier LOD displays cleanly, Declare → Verify → Quantify copy, CTAs to `/patterns` and `siteConfig.respecUrl`).
3. Update `src/data/spotlight.ts` and `src/components/home/SpotlightGrid.tsx` (factual stats and spotlights linking internally to `/patterns`, `/semantic-assets`, `/tools` and externally to ReSpec/`rtwl:`/GitHub).
4. Update `src/pages/HomePage.tsx` (remove `RoleFinder` import/render while keeping `RoleFinder.tsx` intact on disk).
5. Scrub `src/data/roles.ts`, `src/data/theory.ts`, and `src/data/tooling.ts` of all `Lorem ipsum`, `@lorem/*`, `(DRAFT)`, and prototype URLs, replacing them with factual RT fixtures (e.g., `rtwl:` Turtle example, `wrx` CLI examples) matching `src/types/index.ts`.
6. Update `src/App.tsx` with `ScrollToTop` and routes: `/`, `/patterns`, `/patterns/:id`, `/tools`, `/tools/:id`, `/semantic-assets`, `/community`, `<Route path="/theory" element={<Navigate to="/patterns" replace />} />`, `<Route path="/developer" element={<Navigate to="/tools" replace />} />`, `<Route path="*" element={<NotFoundPage />} />`.

- [ ] **Step 4: Run test and TypeScript check to verify they pass**

Run: `node --test tests/no-placeholders.test.mjs; if ($LASTEXITCODE -eq 0) { npx.cmd tsc -b }`
Expected: PASS (`tests/no-placeholders.test.mjs` passes and `tsc -b` exits 0).

- [ ] **Step 5: Commit**

```powershell
git add src/data/home.ts src/data/spotlight.ts src/data/roles.ts src/data/theory.ts src/data/tooling.ts src/components/home/HeroBanner.tsx src/components/home/TriageDoors.tsx src/components/home/SpotlightGrid.tsx src/pages/HomePage.tsx src/App.tsx tests/no-placeholders.test.mjs; if ($LASTEXITCODE -eq 0) { git commit -m "feat(home,routes): overhaul HomePage, scrub legacy data, and wire new routes" }
```

---

### Task 7: End-to-End Verification, Runtime Preview Smoke Check & `.cape` Status Finalization

**Files:**
- Modify: `.cape/context/2026-11-26-portal-content-redesign-design.md:4`
- Modify: `.cape/plan/2026-11-26-portal-content-redesign-plan.md:4`
- Update via script: `.cape/context/index.md`, `.cape/plan/index.md`

- [ ] **Step 1: Run full automated test suite and `npm.cmd run verify`**

Run: `node --test tests/*.test.mjs; if ($LASTEXITCODE -eq 0) { npm.cmd run verify }`
Expected: All unit/data/placeholder tests pass, `.cape` indices update cleanly, `tsc -b` passes, and `vite build` writes `dist/` with exit code 0.

- [ ] **Step 2: Run production preview and smoke-check all routes, assets, and viewports**

Start `npm.cmd run preview` (background daemon on port `4173`) and verify via headless browser / browser subagent across desktop (`1280×800`) and mobile (`390×844`) viewports:
- `rt-logo.svg` renders cleanly in Header and Home hero; `favicon.svg` loads with HTTP 200.
- All routes render without runtime errors or 404 assets: `/#/`, `/#/patterns`, `/#/patterns/rt-p01`, `/#/patterns/rt-p10` (shows text diagram + caution note), `/#/tools`, `/#/tools/webmap-er`, `/#/tools/lod-docker-webserver`, `/#/tools/wrx`, `/#/semantic-assets`, `/#/community`.
- Legacy redirects (`/#/theory` → `/#/patterns`, `/#/developer` → `/#/tools`) and invalid slug (`/#/patterns/unknown`) behave cleanly.
Stop the background preview server when done.

- [ ] **Step 3: Finalize `.cape` statuses and re-run `npm.cmd run verify`**

Update `**Status:** Approved` / `Active Baseline` in `.cape/context/2026-11-26-portal-content-redesign-design.md` and `**Status:** Completed` in `.cape/plan/2026-11-26-portal-content-redesign-plan.md`, run `npm.cmd run verify`, restore any untouched line-ending-only diffs in `.cape/{ambition,evolution}/index.md`, and commit.

```powershell
git add .cape/context/2026-11-26-portal-content-redesign-design.md .cape/context/index.md .cape/plan/2026-11-26-portal-content-redesign-plan.md .cape/plan/index.md; if ($LASTEXITCODE -eq 0) { git commit -m "docs(cape): mark portal content redesign plan completed" }
```
