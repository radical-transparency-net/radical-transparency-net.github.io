# Portal Repository Triage & Asset Mapping Registry

**Date:** 2026-11-26  
**Status:** Active Baseline  
**Summary:** Canonical registry mapping radical-transparency-net repositories to portal routes, src/data modules, public/assets subfolders, and preserved reusable components.

---

## 1. Purpose & Governance

This document is the authoritative registry of how `radical-transparency-net.github.io` triages upstream `radical-transparency-net` repositories, which local subfolders store synced assets or strongly typed data modules, and which portal routes reference each repository.

Whenever a new upstream repository is surfaced on the portal, or an existing repository changes status (e.g., from beta development to stable release), this registry must be updated alongside `src/data/*.ts`.

---

## 2. Upstream Repository Triage Table

| Upstream Repository | Canonical Links | Ecosystem Status | Portal Routes / Pages | Data Module(s) | Synced Asset Subfolder | Sync Policy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `radical-transparency-net/spec-linkset-usage-patterns` | [GitHub](https://github.com/radical-transparency-net/spec-linkset-usage-patterns)<br>[ReSpec](https://radical-transparency-net.github.io/spec-linkset-usage-patterns/) | Active Specification (`RT-P01`–`RT-P10`) | `/`, `/patterns`, `/patterns/:id` (`rt-p01`–`rt-p10`) | `src/data/patterns.ts`, `src/data/home.ts`, `src/data/spotlight.ts` | `public/assets/patterns/` (`rt-patterns-overview.svg`, `rt-patterns-profile-subjects.svg`, `rt-p01-profile-declaration.svg`–`rt-p09-release-links.svg`) | Structured summaries + verbatim SVGs; `RT-P10` uses a text diagram (no upstream SVG). ReSpec remains single normative source. |
| `radical-transparency-net/webmap-ER` | [GitHub](https://github.com/radical-transparency-net/webmap-ER)<br>[Live App](https://radical-transparency-net.github.io/webmap-ER/) | Beta Development (Not fully released) | `/`, `/tools`, `/tools/webmap-er` | `src/data/tools.ts`, `src/data/home.ts`, `src/data/spotlight.ts` | None synced | Metadata, feature overview, and links to live GitHub Pages app and repo. |
| `radical-transparency-net/lod_docker_webserver` | [GitHub](https://github.com/radical-transparency-net/lod_docker_webserver) | Beta Development (Not fully released) | `/`, `/tools`, `/tools/lod-docker-webserver` | `src/data/tools.ts`, `src/data/home.ts`, `src/data/spotlight.ts` | None synced | Metadata, 2×2 discovery taxonomy overview, Docker quickstart, and repo link. |
| `radical-transparency-net/wrx` | [GitHub](https://github.com/radical-transparency-net/wrx)<br>[Companion Site](https://radical-transparency-net.github.io/wrx/) | Beta Development (Not fully released) | `/`, `/tools`, `/tools/wrx` | `src/data/tools.ts`, `src/data/home.ts`, `src/data/spotlight.ts` | None synced | Metadata, cascading discovery summary, CLI/library examples, and links to companion site and repo. |
| `radical-transparency-net/semantic-assets` | [GitHub](https://github.com/radical-transparency-net/semantic-assets)<br>[rtwl: Docs](https://radical-transparency.net/semantic-assets/weblink/)<br>[W3ID Namespace](https://w3id.org/rt/ns/weblink#) | Active Development (`rtwl:` `v0.1.0-draft`, source-only CI) | `/`, `/semantic-assets` | `src/data/semanticAssets.ts`, `src/data/home.ts`, `src/data/spotlight.ts` | None synced | Source-only repo (`Makefile` + `uv` build via GitHub Actions Pages, `BASE_URL` = `https://radical-transparency.net/semantic-assets`). Generates JSON-LD, `RT-P03` linksets, HTML, and `RT-P06` `sitemap-semantic-assets.xml`. |
| `radical-transparency-net/w3id.org` | [GitHub Fork](https://github.com/radical-transparency-net/w3id.org/tree/master/ids/rt) | Draft / Pre-PR (`ids/rt/`, `ids/rt/ns/`) | `/semantic-assets` (namespace reference) | `src/data/semanticAssets.ts` | None synced | Permanent URI `https://w3id.org/rt/ns/weblink` content negotiation and `<If>`-scoped `RT-P03` `Link` headers targeting `perma-id/w3id.org`. |
| `vliz-be-opsci/papers` | [Position Paper PDF](https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf) | Published (`2026-09`) | `/` (`Position Paper`), `/patterns` | `src/data/home.ts`, `src/data/patterns.ts` | None synced | Manages the *Radical Transparency: A Vision for Scalable Interoperability* position paper (`RT-DPP`). |
| `radical-transparency-net/visuals-branding-design` | [GitHub](https://github.com/radical-transparency-net/visuals-branding-design) | Active (`v1.0` *Brugse Schelprand*) | Global (`Header`, `Home`, `/community`, `index.html`) | `src/data/siteConfig.ts`, `src/data/community.ts` | `public/assets/branding/` (`rt-logo.svg`, `rt-logo-inverse.svg`, `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`) | Verbatim copy of generated vector/icon masters from `logo/`. |
| `eosc-semantic-interop/if-solutions-proposals` | [GitHub Incubator](https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency) | Graduated (Placeholder) | *(Not surfaced on portal UI; archived in `.cape`)* | — | None synced | Legacy proposal files cleaned up; placeholder redirects to `https://radical-transparency.net/`. Alignment/motivation notes preserved in `.cape/`. |

---

## 3. Subfolder-to-Page Asset & Data Layout

```text
public/
└── assets/
    ├── vliz-logo.png                         # Referenced by Footer (all routes)
    ├── branding/                             # Synced from visuals-branding-design/logo/
    │   ├── rt-logo.svg                       # Header (all routes), HeroBanner (/)
    │   ├── rt-logo-inverse.svg               # Dark-surface brand variants
    │   ├── favicon.svg                       # index.html
    │   ├── favicon.ico                       # index.html
    │   └── apple-touch-icon.png              # index.html
    └── patterns/                             # Synced from spec-linkset-usage-patterns/
        ├── rt-patterns-overview.svg          # /patterns
        ├── rt-patterns-profile-subjects.svg  # /patterns
        ├── rt-p01-profile-declaration.svg    # /patterns/rt-p01
        ├── rt-p02-profile-composition.svg    # /patterns/rt-p02
        ├── rt-p03-content-negotiation-menu.svg # /patterns/rt-p03
        ├── rt-p04-no-landing-page-solution.svg # /patterns/rt-p04
        ├── rt-p05-subsetting-api.svg         # /patterns/rt-p05
        ├── rt-p06-hostwide-discovery.svg     # /patterns/rt-p06
        ├── rt-p07-catalog-assistance.svg     # /patterns/rt-p07
        ├── rt-p08-large-linksets.svg         # /patterns/rt-p08
        └── rt-p09-release-links.svg          # /patterns/rt-p09

src/
└── data/
    ├── siteConfig.ts                         # Header, Footer, global links & metadata
    ├── home.ts                               # TriageDoors on /
    ├── spotlight.ts                          # PulseStats & SpotlightGrid on /
    ├── patterns.ts                           # /patterns and /patterns/:id
    ├── tools.ts                              # /tools and /tools/:id
    ├── semanticAssets.ts                     # /semantic-assets
    ├── community.ts                          # /community
    ├── roles.ts                              # Retained for preserved RoleFinder component
    ├── theory.ts                             # Retained for preserved theory/* components
    └── tooling.ts                            # Retained for preserved developer/* components
```

---

## 4. Preserved Reusable Component Inventory

The existing UI components listed below remain intact on disk and type-checked under `tsc -b` for future reuse, even when unmounted from active routes:

| Component / Module | Source Path | Backing Data Module | Current Route Status |
| :--- | :--- | :--- | :--- |
| `RoleFinder` | `src/components/home/RoleFinder.tsx` | `src/data/roles.ts` | Unmounted from `/`; kept for future persona workflows |
| `TheoryHero`, `SystemDiagram`, `PillarsGrid`, `ComparisonMatrix`, `MotivationSection`, `LineageInspector` | `src/components/theory/*` | `src/data/theory.ts` | Preserved in `src/pages/TheoryPage.tsx`; `/theory` redirects to `/patterns` |
| `DevHubHero`, `CliTerminal`, `SpecsGrid`, `ValidatorPlayground`, `SdkCards`, `ContributionSteps` | `src/components/developer/*` | `src/data/tooling.ts` | Preserved in `src/pages/DeveloperPage.tsx`; `/developer` redirects to `/tools` |
| `CommunityHero`, `PlaybookTracks`, `EventCards`, `RoadmapTimeline`, `ChannelsGrid` | `src/components/community/*` | `src/data/community.ts` | Preserved on disk for future community/roadmap expansion |
| `TheoryPage`, `DeveloperPage` | `src/pages/TheoryPage.tsx`, `src/pages/DeveloperPage.tsx` | `src/data/theory.ts`, `src/data/tooling.ts` | Preserved on disk; legacy routes redirect cleanly |
