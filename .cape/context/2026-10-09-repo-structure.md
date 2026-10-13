# Repository Structure & Directory Anatomy

**Date:** 2026-10-09  
**Status:** Active Baseline  
**Target:** `radical-transparency-net.github.io`  

---

## 1. Directory Tree Overview

```text
radical-transparency-net.github.io/
├── .cape/                      # The shared narrative, planning, and context framework
│   ├── context/                # Technical baseline, architecture, team conventions
│   ├── ambition/               # Long-term goals, stakeholder personas, communications
│   ├── plan/                   # Actionable roadmaps, implementation logs, scaffolding tasks
│   └── evolution/              # Retrospectives, milestones, and architectural decision records
├── .material/                  # Upstream reference assets, mockups, design baselines
│   └── site-design-stitch/     # Stitch design system exports, HTML prototypes, PRD briefs
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/                     # Static browser assets (favicon, partner logos)
├── src/                        # Portal application source code
│   ├── components/             # Reusable UI component modules
│   │   ├── common/             # Atomic widgets (Badge, Card, CodeBlock, TerminalBox, Button)
│   │   ├── layout/             # Application shell (Header, Footer, Navigation)
│   │   ├── home/               # HeroBanner, TriageDoors, RoleFinder, PulseStats, SpotlightGrid
│   │   ├── theory/             # TheoryHero, SystemDiagram, PillarsGrid, ComparisonMatrix, LineageInspector
│   │   ├── developer/          # DevHubHero, CliTerminal, SpecsGrid, ValidatorPlayground, SdkCards
│   │   └── community/          # CommunityHero, PlaybookTracks, EventCards, RoadmapTimeline, ChannelsGrid
│   ├── data/                   # Strongly typed content models (isolated from JSX markup)
│   ├── pages/                  # Page-level route views (HomePage, TheoryPage, DeveloperPage, CommunityPage)
│   ├── types/                  # Core TypeScript interface definitions
│   ├── App.tsx                 # Root layout container & HashRouter routing table
│   ├── main.tsx                # React DOM root initialization
│   └── index.css               # Design system tokens and global Tailwind utility classes
├── index.html                  # Single-page HTML entrypoint with font preconnects
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Open Science Interop theme design tokens
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 2. Rationales for Key Folders

### `.cape/` (Context, Ambition, Plan, Evolution)
* **Purpose:** Serves as the persistent memory bridge between human contributors and AI coding agents.
* **Why a dot-folder?** Keeps the project root uncluttered in file explorers while remaining strictly tracked in git (never ignored).

### `.material/`
* **Purpose:** Preserves upstream design materials, UX mockups, and exported prototype bundles (such as Stitch exports) close to the codebase without polluting production runtime bundles.

### `src/data/` vs. `src/components/`
* **Purpose:** Complete decoupling of editorial content from UI presentation.
* **Advantage:** Content updates, proposal links, and RFC references can be reviewed and edited in isolation without triggering React JSX refactoring or regression risks.
