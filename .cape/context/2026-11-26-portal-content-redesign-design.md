# Portal Content Redesign & Ecosystem Alignment Specification

**Date:** 2026-11-26  
**Status:** Active Baseline  
**Summary:** Architectural design for replacing portal lorem-ipsum/draft content with RT-Patterns (RT-P01–RT-P10), beta tools, semantic assets, v1.0 branding, and preserved legacy components.

---

## 1. Intent, Scope & Constraints

### 1.1 Objectives
- Replace all placeholder `Lorem Ipsum` copy, `(DRAFT)` prefixes, speculative metrics/events, and external prototype image URLs across `radical-transparency-net.github.io` with factual content grounded in the active `radical-transparency-net` repositories.
- Center the portal on the **Radical Transparency Linkset Usage Patterns (`RT-P01`–`RT-P10`)**, providing both an overview and dedicated detail pages.
- Showcase the three ecosystem tools (`webmap-ER`, `lod_docker_webserver`, `wrx`) with an overview and dedicated detail pages, explicitly marked as **beta development (not yet fully released)**.
- Add a **Semantic Assets** page presenting ontologies and vocabularies from `semantic-assets` (`rtwl:` `v0.1.0-draft`), stating ongoing development and linking to its documentation and GitHub repository.
- Adopt the finalized `v1.0` *Brugse Schelprand* logo and favicons from `visuals-branding-design`.
- Register the repository-to-portal mapping in `.cape/context/2026-11-26-portal-repo-triage.md`.

### 1.2 Architectural Constraints
- **Stack Preserved:** React 18, TypeScript, Vite 5+, Tailwind CSS (`Open Science Interop` theme), `react-router-dom` `HashRouter`, and strict content decoupling in `src/data/*.ts`.
- **Component Preservation:** Existing components in `src/components/` (`RoleFinder`, `theory/*`, `developer/*`, `community/*`) must remain intact on disk and compile cleanly under `tsc -b` for future reuse.
- **Single Normative Source of Truth:** `spec-linkset-usage-patterns` (live ReSpec) remains the normative pattern specification. Portal pattern pages provide structured summaries, copied SVG diagrams, primary encoding examples, and direct links to ReSpec and GitHub Markdown sources.
- **Style & Tone:** Follow `.cape/context/2026-10-11-style-and-sensitivity.md` — factual, concise English, zero AI fluff or marketing hyperbole, accurate RFC/W3C terminology.

---

## 2. Routing & Navigation Architecture

### 2.1 `HashRouter` Route Table (`src/App.tsx`)
- `/` → `HomePage`
- `/patterns` → `PatternsPage` (Overview + all 10 patterns)
- `/patterns/:id` → `PatternDetailPage` (`rt-p01` through `rt-p10`)
- `/tools` → `ToolsPage` (Overview + beta notice + 3 tools)
- `/tools/:id` → `ToolDetailPage` (`webmap-er`, `lod-docker-webserver`, `wrx`)
- `/semantic-assets` → `SemanticAssetsPage`
- `/community` → `CommunityPage` (rewritten with factual participation, VLIZ stewardship, and links)
- `/theory` → `<Navigate to="/patterns" replace />` (legacy route compatibility)
- `/developer` → `<Navigate to="/tools" replace />` (legacy route compatibility)
- `*` → `NotFoundPage` (concise catch-all linking back to `/` and `/patterns`)

A lightweight `ScrollToTop` component inside `HashRouter` resets `window.scrollTo(0, 0)` on pathname changes so detail pages always open at the top.

### 2.2 Top-Level Navigation
Five navigation items in `siteConfig.navLinks`:
1. **Home** (`/`)
2. **Patterns** (`/patterns`)
3. **Tools** (`/tools`)
4. **Semantic Assets** (`/semantic-assets`)
5. **Community** (`/community`)

---

## 3. Branding & Application Shell (`Header`, `Footer`, `index.html`)

### 3.1 Logo & Favicon Integration (`visuals-branding-design`)
Copy verbatim from `radical-transparency-net/visuals-branding-design/logo/` into `public/assets/branding/`:
- `rt-logo.svg`
- `rt-logo-inverse.svg`
- `favicon.svg`
- `favicon.ico`
- `apple-touch-icon.png`

**Embedding rule (per `logo/DESIGN.md`):** Render `rt-logo.svg` via `<img>` (`./assets/branding/rt-logo.svg`) rather than inline `<svg>`, so the SVG's internal `@media` queries evaluate against the rendered image box and select the intended Level-of-Detail (LOD) tier automatically (`S`-tier at `36px` in `Header`, `M`/`XL`-tier in hero displays).

**`index.html` head links:** Wire `./assets/branding/favicon.svg` (`type="image/svg+xml"`), `./assets/branding/favicon.ico`, and `./assets/branding/apple-touch-icon.png`, and keep page title/description factual and free of draft markers.

### 3.2 `Header.tsx`
- Replace the temporary `RT` square div and `(DRAFT)` text with `<img src="./assets/branding/rt-logo.svg" alt="Radical Transparency logo" className="w-9 h-9 shrink-0" />` and the `Radical Transparency` brand label.
- Render the 5 `siteConfig.navLinks` on desktop and in the mobile drawer.
- Remove the non-functional search `<input>` (no search index backs it).
- Right-side actions: GitHub organization link (`https://github.com/radical-transparency-net`) and a primary CTA button linking to `/patterns` ("Explore Patterns").

### 3.3 `Footer.tsx`
- Remove all `Lorem Ipsum` copy, dummy pills (`Lorem Ipsum A/B/C`), dummy bottom links (`Lorem Notice`, `Lorem Accessibility`, `Lorem Statement`), and the non-functional newsletter `<form>`.
- Retain the VLIZ logo (`./assets/vliz-logo.png`), InnovOcean Campus address attribution, and VLIZ Legal Notice & Privacy Policy link (`https://vliz.be/en/legal-notice`).
- Provide three factual navigation columns:
  1. **Specifications:** Patterns Overview (`#/patterns`), Full ReSpec Document (external), Semantic Assets (`#/semantic-assets`).
  2. **Beta Tooling:** Tools Overview (`#/tools`), `webmap-ER` (`#/tools/webmap-er`), `lod_docker_webserver` (`#/tools/lod-docker-webserver`), `wrx` (`#/tools/wrx`).
  3. **Network:** GitHub Organization (`https://github.com/radical-transparency-net`), Community & Origins (`#/community`), Visual Branding Repo (`https://github.com/radical-transparency-net/visuals-branding-design`).

---

## 4. Home Page Composition & Preserved Component Strategy

### 4.1 `HomePage` Sections
`HomePage` renders four clean, factual sections:
1. **`HeroBanner`:** Displays `rt-logo.svg` (`M`/`XL` LOD size alongside the display heading), introduces the **Declare → Verify → Quantify** model from `spec-linkset-usage-patterns`, and offers primary CTAs to `/patterns` and the live ReSpec specification.
2. **`TriageDoors`:** Refactored to read `triageDoorsData` from `src/data/home.ts` instead of hardcoded JSX strings:
   - **01 · Core Specification — Linkset Usage Patterns (`/patterns`):** The 10 *Declare*-layer patterns (`RT-P01`–`RT-P10`) built on RFC 8288, RFC 9264, RFC 6906, and XML sitemaps.
   - **02 · Beta Development — Ecosystem Tooling (`/tools`):** Early-stage tooling (`webmap-ER`, `lod_docker_webserver`, `wrx`), explicitly labeled beta / under active development.
   - **03 · Vocabularies & Ontologies — Semantic Assets (`/semantic-assets`):** Dereferenceable RDF vocabularies starting with `rtwl:` (`v0.1.0-draft`) and links to `semantic-assets`.
3. **`PulseStats`:** Four factual indicators in `src/data/spotlight.ts`:
   - `10` — Linkset Usage Patterns (`RT-P01`–`RT-P10`)
   - `3` — Tools in Beta (`webmap-ER`, `lod_docker_webserver`, `wrx`)
   - `1 Draft` — Published Vocabulary (`rtwl:` `v0.1.0-draft`)
   - `CC-BY 4.0` — Open Specs & Code
4. **`SpotlightGrid`:** Three real highlight cards linking to `/patterns`, `/semantic-assets`, and `/tools` (plus external repo/spec actions).

### 4.2 Preserved Component Strategy
- `RoleFinder.tsx`, `src/components/theory/*`, `src/components/developer/*`, `src/components/community/*`, `TheoryPage.tsx`, and `DeveloperPage.tsx` remain intact in the repository.
- Legacy data modules imported by those preserved files (`src/data/roles.ts`, `src/data/theory.ts`, `src/data/tooling.ts`) must be scrubbed of all `Lorem ipsum`, `@lorem/*`, `(DRAFT)` tags, and prototype `lh3.googleusercontent.com` URLs, replacing them with clean, minimal factual RT fixtures conforming to `src/types/index.ts`. This ensures zero lorem ipsum remains anywhere in `src/` while keeping preserved components compiling cleanly.

---

## 5. Domain Feature Modules, Pages & Data Schemas

### 5.1 Shared Types & Common Widgets
Extend `src/types/index.ts` with interfaces:
- `TriageDoorItem`: `id`, `number`, `category`, `icon`, `title`, `description`, `checkpoints`, `cta`, `ctaPath`, `accentVariant`.
- `PatternItem`: `id` (`"rt-p01"`..`"rt-p10"`), `code` (`"RT-P01"`..`"RT-P10"`), `title`, `shortSummary`, `goal`, `motivation`, `cautionNote?`, `svgPath?`, `textDiagram?`, `encodingTitle`, `encodingLanguage`, `encodingSnippet`, `linkRelations`, `standards`, `relatedPatternIds`, `respecUrl`, `githubSourceUrl`.
- `ToolItem`: `id` (`"webmap-er"` | `"lod-docker-webserver"` | `"wrx"`), `name`, `tagline`, `status` (`"Beta — Not Fully Released"`), `category`, `summary`, `description`, `capabilities`, `quickstartTitle`, `quickstartLanguage`, `quickstartSnippet`, `relatedPatternIds`, `repoUrl`, `liveUrl?`.
- `SemanticAsset`: `id`, `prefix`, `name`, `version`, `status`, `namespaceUri`, `docsUrl`, `repoUrl`, `description`, `terms` (`{ classes: string[]; properties: string[] }`), `representations` (`{ label: string; format: string; url: string }[]`), `notes`.
- `CommunityResource`: `id`, `title`, `category`, `description`, `icon`, `url`, `ctaLabel`, `isExternal`.

Extend `src/components/common/CodeBlock.tsx` to support multi-line snippets cleanly (pre-formatted `<pre><code>` layout when `multiline` is true or when `code.includes('\n')`, preserving existing single-line CLI behavior).

### 5.2 Patterns Overview & Detail (`/patterns`, `/patterns/:id`)
- **Data (`src/data/patterns.ts`):** All 10 patterns (`RT-P01` through `RT-P10`) sourced directly from `radical-transparency-net/spec-linkset-usage-patterns`:
  - `RT-P01`: Profile Conformity Declarations (`rt-p01-profile-declaration.svg`)
  - `RT-P02`: Profile Composition (`rt-p02-profile-composition.svg`)
  - `RT-P03`: Content Negotiation Menu (`rt-p03-content-negotiation-menu.svg`)
  - `RT-P04`: No Landing (Intermediate) Page Solution (`rt-p04-no-landing-page-solution.svg`)
  - `RT-P05`: Subsetting API (`rt-p05-subsetting-api.svg`)
  - `RT-P06`: Hostwide Resource Discovery (`rt-p06-hostwide-discovery.svg`)
  - `RT-P07`: Catalogue Assisted Resource Exposure (`rt-p07-catalog-assistance.svg`)
  - `RT-P08`: Large Linkset Split-up (`rt-p08-large-linksets.svg`)
  - `RT-P09`: Release Linking (`rt-p09-release-links.svg`)
  - `RT-P10`: Detached Local Storage (includes upstream *Reader's caution* callout and detached folder structure diagram; no SVG)
- **Overview Page (`PatternsPage.tsx` + `src/components/patterns/`):**
  - Hero explaining the **Declare → Verify → Quantify** sequence and the foundational role of the 10 patterns, linking to the live ReSpec document and GitHub repository.
  - Architecture diagram card rendering `./assets/patterns/rt-patterns-overview.svg` with a view toggle to `./assets/patterns/rt-patterns-profile-subjects.svg`.
  - Filterable/scannable grid of all 10 pattern cards linking to `/patterns/:id`.
- **Detail Page (`PatternDetailPage.tsx`):**
  - Breadcrumb back to `/patterns`, `RT-PXX` badge, title, external links to the ReSpec anchor and `.md` source file on GitHub.
  - Goal callout, optional Reader's Caution alert (`RT-P10`), and Motivation summary.
  - Architecture diagram (`<img>` for `RT-P01`–`RT-P09`, `CodeBlock` text tree for `RT-P10`).
  - Primary encoding example (`CodeBlock`) showing HTTP `Link` / RFC 9264 Linkset / Sitemap syntax.
  - Link relations & referenced RFC/W3C standards badges, clickable Related Patterns links, and Previous/Next pattern navigation.

### 5.3 Tools Overview & Detail (`/tools`, `/tools/:id`)
- **Beta Development Notice:** Both `/tools` and every `/tools/:id` page display a prominent **Beta Development** badge and notice banner stating clearly that these tools are not yet fully released and remain under active development.
- **Overview Page (`ToolsPage.tsx` + `src/components/tools/`):**
  - Hero + Beta notice + 3 tool cards linking to `/tools/webmap-er`, `/tools/lod-docker-webserver`, and `/tools/wrx`.
- **Detail Page (`ToolDetailPage.tsx`):**
  - Tool-specific detail view for `webmap-er`, `lod-docker-webserver`, and `wrx` featuring:
    - Beta status badge & disclaimer, summary, and full architectural description.
    - Key capabilities list.
    - Quickstart / CLI / Docker snippet (`CodeBlock`).
    - Cross-links to relevant `/patterns/:id` pages.
    - External links to the GitHub repository and live web deployment (`webmap-ER` and `wrx`).

### 5.4 Semantic Assets (`/semantic-assets`)
- **Page (`SemanticAssetsPage.tsx` + `src/components/semantic-assets/` + `src/data/semanticAssets.ts`):**
  - Hero introducing Radical Transparency's dereferenceable RDF vocabularies and ontologies.
  - Explicit **Under Active Development** banner noting that additional vocabularies and ontologies are still being developed and linking directly to `https://github.com/radical-transparency-net/semantic-assets`.
  - Card for the **Radical Transparency Web Linking Vocabulary (`rtwl:`)** (`v0.1.0-draft`):
    - Canonical namespace `https://w3id.org/rt/ns/weblink#` (with `w3id.org` `303 See Other` content-negotiation note) and link to human documentation (`https://radical-transparency-net.github.io/semantic-assets/weblink/`).
    - Listed classes (`rtwl:WebLink`, `rtwl:TargetAttribute`) and properties (`rtwl:anchor`, `rtwl:rel`, `rtwl:href`, `rtwl:attribute`, `rtwl:key`, `rtwl:value`).
    - Direct links to published representations (`index.html`, `weblink.ttl`, `weblink.jsonld`, `weblink.linkset.json`, `examples/observed-links.ttl`) and the GitHub repository.

### 5.5 Community (`/community`)
- **Page (`CommunityPage.tsx` + `src/data/community.ts`):**
  - Concise, factual collaboration page replacing fabricated events, office hours, and placeholder roadmaps with:
    - Open-source collaboration via the `radical-transparency-net` GitHub organization.
    - Institutional stewardship by VLIZ (Flanders Marine Institute) and origin in the EOSC Semantic Interoperability incubator (`eosc-semantic-interop/if-solutions-proposals`).
    - Visual identity and logo guidelines repository (`visuals-branding-design`).

---

## 6. Error Handling, Asset Paths & Verification Plan

### 6.1 Error Handling & Resilience
- Invalid pattern or tool slugs render a clear "Not Found" card with navigation back to `/patterns` or `/tools`.
- Unknown hash routes render `NotFoundPage` with navigation back to `/` and `/patterns`.
- All static assets use `./assets/...` relative paths to remain valid across root and subpath deployments.

### 6.2 Verification Gates
1. **Placeholder & Dead-Link Audit:** Search `src/` and `index.html` to confirm zero occurrences of `lorem`, `ipsum`, `(DRAFT)`, or `lh3.googleusercontent.com`.
2. **Build, Typecheck & Index:** `npm run verify` (`npm run cape:index && tsc -b && vite build`) passes with exit code 0, validating both active pages and preserved unused components.
3. **Runtime Preview Smoke Test:** Serve `dist/` via `npm run preview` and verify across desktop and mobile viewports that the *Brugse Schelprand* logo, favicons, all overview/detail routes (`/`, `/patterns`, `/patterns/rt-p01`–`rt-p10`, `/tools`, `/tools/webmap-er`, `/tools/lod-docker-webserver`, `/tools/wrx`, `/semantic-assets`, `/community`), legacy redirects (`/theory`, `/developer`), and invalid slug fallbacks render with zero console or 404 asset errors.
