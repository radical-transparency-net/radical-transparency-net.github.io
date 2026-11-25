# Radical Transparency Network — Vite Web Portal Specification

**Status:** Approved  
**Date:** 2026-10-08  
**Repository Target:** `radical-transparency-net.github.io`  
**Primary Baseline:** [eosc-semantic-interop/if-solutions-proposals](https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency)  
**Mockup Baseline:** `.material/site-design-stitch/` (`stitch_radical_transparency_gateway (1)` through `(4)`)

---

## 1. Executive Summary & Vision

The **Radical Transparency Network** portal serves as the primary gateway into the Radical Transparency (RT) open science ecosystem. It bridges theoretical foundations, software tooling, and community mobilization:
1. **Theory & Rationale:** Why radical transparency is required to replace fragile, closed crosswalks with auditable provenance and machine-actionable declarations.
2. **Tooling & Specifications:** Ready-to-run tooling, conformity profiles, linksets, and validation playgrounds.
3. **Training & Mobilization:** Playbooks for institutions, domain scientists, and champions, plus strategic communications and release roadmaps.

To ensure long-term maintainability while honoring the mockups provided in `.material/site-design-stitch/`, all UI structures are strictly componentized, with content and placeholders (Lorem Ipsum) completely decoupled into typed data modules.

---

## 2. Technology Stack & Design System

### 2.1 Core Technologies
- **Framework:** React 18+ with TypeScript
- **Bundler:** Vite 5+
- **Styling:** Tailwind CSS with custom theme extensions
- **Routing:** `react-router-dom` using `HashRouter` (ensures zero 404/rewrite issues when deployed on GitHub Pages)
- **Deployment:** GitHub Pages via GitHub Actions workflow

### 2.2 Design System Tokens (`Open Science Interop`)
- **Typography:**
  - Headings & Prose: `Plus Jakarta Sans` (Google Fonts)
  - Code, Badges, Hashes, Schemas: `JetBrains Mono` (Google Fonts)
  - Icons: Google Material Symbols Outlined
- **Color Palette:**
  - `background`: `#f8f9ff` (Glaze Canvas)
  - `on-background` / `on-surface`: `#0b1c30` (Slate 900 base)
  - `on-surface-variant`: `#45464d`
  - `secondary`: `#0051d5` (Royal Cobalt accent)
  - `on-tertiary-container`: `#0c9488` (Deep Teal transparency accent)
  - `surface-container-lowest`: `#ffffff` (Elevated White Cards)
  - `surface-container`: `#e5eeff` (Slate Tint Container)
  - `surface-container-low`: `#eff4ff`
  - `surface-container-high`: `#dce9ff`
  - `primary-container`: `#131b2e` (Code/Terminal background)
  - `error`: `#ba1a1a`

---

## 3. Architecture & Project Layout

```text
radical-transparency-net.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated build & deploy action
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/                 # Strongly typed schemas for all data models
    │   └── index.ts
    ├── data/                  # Decoupled content & placeholders
    │   ├── siteConfig.ts      # Global metadata, links, social channels
    │   ├── roles.ts           # 5 Personas & action profiles for Role Finder
    │   ├── spotlight.ts       # Proposal spotlights & pulse metrics
    │   ├── theory.ts          # 4 Tenets, Comparison Matrix, Turtle demo
    │   ├── tooling.ts         # Specifications, mock SDKs, CLI snippets
    │   └── community.ts       # Playbooks, live events, roadmap milestones
    ├── components/
    │   ├── layout/            # Header, Footer, PageWrapper
    │   ├── common/            # Badge, Card, CodeBlock, TerminalBox, Button
    │   ├── home/              # HeroBanner, TriageDoors, RoleFinder, PulseStats, SpotlightGrid
    │   ├── theory/            # TheoryHero, SystemDiagram, PillarsGrid, ComparisonMatrix, LineageInspector
    │   ├── developer/         # DevHubHero, CliTerminal, SpecsGrid, ValidatorPlayground, SdkCards, ContributionSteps
    │   └── community/         # CommunityHero, PlaybookTracks, EventCards, RoadmapTimeline, ChannelsGrid
    └── pages/
        ├── HomePage.tsx       # Route: / (Entrypoint & Triage Hub)
        ├── TheoryPage.tsx     # Route: /theory (The Paradigm of Radical Transparency)
        ├── DeveloperPage.tsx  # Route: /developer (Developer Hub: Linksets & Tooling)
        └── CommunityPage.tsx  # Route: /community (Community & Strategic Communication)
```

---

## 4. Page & Component Specifications

### 4.1 Global Shell (`components/layout/`)
- **`Header.tsx`**:
  - Sticky header with blur backdrop (`bg-surface/90 backdrop-blur-xl`).
  - Brand Mark: RT Network logo + title "Radical Transparency" + "EOSC Interop" badge.
  - Navigation links:
    - `Triage & Explore` (`#/`)
    - `What is Radical Transparency?` (`#/theory`)
    - `Developer Hub & Tooling` (`#/developer`)
    - `Knowledge & Community` (`#/community`)
  - Search mockup field, GitHub proposal repo link, and "Get Involved" CTA button.
  - Mobile responsive hamburger navigation drawer.
- **`Footer.tsx`**:
  - Mission statement and compliance badges (`EOSC Core Aligned`, `CC-BY 4.0`, `FAIR Verified`).
  - Categorized links (Interoperability, Framework & Governance, Newsletter subscription mockup).
  - Open Access legal attribution notice.

### 4.2 Page 1: Home / Entrypoint (`HomePage.tsx`)
- **`HeroBanner.tsx`**: Institutional breadcrumb (`RT-NET / REF-SPEC-2025 / v2.4-STABLE`), headline, and mission subtitle.
- **`TriageDoors.tsx`**: 3 Consolidated entry doors:
  1. *Theory & Rationale* (links to `#/theory`)
  2. *Tooling & Specs* (links to `#/developer`)
  3. *Training & Mobilization* (links to `#/community`)
- **`RoleFinder.tsx`**: Interactive persona diagnostic:
  - 5 Persona tabs: Data Steward, Ontologist, Software Architect, Research Funder, Citizen Scientist.
  - Dynamic display: Priority kicker, operational title, time estimate, 2 action cards, terminal snippet with 1-click clipboard copy, SVG micro-graph, and curated reading list.
- **`PulseStats.tsx`**: 4-column metric strip (Core Documents, Alignment Protocols, Compliant Linksets, Open Access).
- **`SpotlightGrid.tsx`**: 3 proposal cards populated with placeholder / Lorem Ipsum metadata and status badges.

### 4.3 Page 2: What is Radical Transparency? (`TheoryPage.tsx`)
- **`TheoryHero.tsx`**: Headline and high-level pillar badges (`Cryptographic Signatures`, `Automated Continuous CI`, `FAIR Actionability`).
- **`SystemDiagram.tsx`**: SVG diagram visualizing Domain A -> Radical Linkset Hub -> Domain B, plus Sovereign Data Governance editorial card.
- **`PillarsGrid.tsx`**: The 4 Tenets:
  1. Auditable Provenance (W3C PROV-O)
  2. Declarative Conformity (SHACL Core)
  3. Decentralized Linksets (VoID / DCAT-3)
  4. Continuous Community (Open RFC Mode)
- **`ComparisonMatrix.tsx`**: Split bento table comparing *Traditional Closed Crosswalks* (opaque mappings, silent breakages, single points of failure) vs. *Radical Transparency Model* (public RDF linksets, automated validation runs, peer-audited lineage).
- **`MotivationSection.tsx`**: Synthesis of cross-disciplinary needs, EIF regulatory compliance, and charter manifesto quote.
- **`LineageInspector.tsx`**: Live Turtle/RDF preview block with copyable PURL and validation check badges.

### 4.4 Page 3: Developer Hub & Tooling (`DeveloperPage.tsx`)
- **`DevHubHero.tsx`**: Specs verified and CI benchmark highlights strip.
- **`CliTerminal.tsx`**: Interactive terminal container showing `rt-cli` execution with placeholder flags and copy button.
- **`SpecsGrid.tsx`**: 3 Core Specifications (Conformity Profiles, Linkset Usage Patterns, Alignment Actions Automations).
- **`ValidatorPlayground.tsx`**:
  - Profile standard selector (`EOSC-Semantic-Core`, `SSSOM Strict`, `VoID Federation`).
  - Editable Turtle/RDF code editor.
  - "Run Validation" & "Reset" buttons updating a live report checklist and execution metrics.
- **`SdkCards.tsx`**: 3 Client library cards (Python, Rust, TypeScript) with placeholder Lorem Ipsum content and installation commands.
- **`ContributionSteps.tsx`**: 3-step contribution progression (Fork & Template, Pass CI Suite, Peer Consensus) and GitHub PR callout card.

### 4.5 Page 4: Community, Mobilization & Roadmap (`CommunityPage.tsx`)
- **`CommunityHero.tsx`**: Capacity building header and cohort indicators.
- **`PlaybookTracks.tsx`**: 3 Playbook cards (Institutions, Domain Scientists, Champions) with pure Lorem Ipsum bullet points and download CTAs.
- **`EventCards.tsx`**: Upcoming webinars and hackathons with pure Lorem Ipsum descriptions and register actions.
- **`RoadmapTimeline.tsx`**:
  - View toggle: **Timeline View** vs. **Kanban View**.
  - 4 Milestone Phases (Foundation, Pilots, Evangelism, Standardization) with status badges and Lorem Ipsum milestone entries.
- **`ChannelsGrid.tsx`**: Office Hours, GitHub Discussions, Media Kit, Fediverse/Mastodon, and Monthly Newsletter dispatch box.

---

## 5. Data Contracts (`src/types/index.ts`)

```typescript
export interface RoleAction {
  tag: string;
  color: string;
  icon: string;
  title: string;
  body: string;
  cta: string;
  url?: string;
}

export interface RoleReading {
  guide: string;
  color: string;
  title: string;
  desc: string;
  url?: string;
}

export interface RoleProfile {
  id: string;
  name: string;
  kicker: string;
  title: string;
  desc: string;
  timeEstimate: string;
  snippet: string;
  statusText: string;
  actions: RoleAction[];
  reading: RoleReading[];
}

export interface Tenet {
  number: string;
  title: string;
  description: string;
  specLabel: string;
  specValue: string;
  icon: string;
}

export interface ComparisonColumn {
  title: string;
  badge: string;
  badgeType: 'deprecated' | 'standard';
  items: { title: string; description: string }[];
  impactLabel: string;
  impactText: string;
}

export interface SpecCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  targetUri: string;
  specUrl: string;
  icon: string;
}

export interface SdkItem {
  langCode: string;
  name: string;
  version: string;
  description: string;
  installCmd: string;
  docsUrl: string;
  badgeText: string;
}

export interface ValidationProfile {
  id: string;
  name: string;
  defaultCode: string;
  checks: { name: string; detail: string; status: 'pass' | 'fail' }[];
}

export interface PlaybookTrack {
  id: string;
  trackCode: string;
  badge: string;
  title: string;
  description: string;
  imageAlt: string;
  items: { icon: string; title: string; description: string }[];
  ctaText: string;
}

export interface EventItem {
  id: string;
  type: string;
  date: string;
  title: string;
  description: string;
  locationOrStatus: string;
  actionText: string;
}

export interface RoadmapPhase {
  phaseNumber: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'planned';
  statusLabel: string;
  title: string;
  period: string;
  description: string;
  milestones: { title: string; status: 'done' | 'active' | 'pending' | 'locked' }[];
}

export interface ChannelItem {
  icon: string;
  title: string;
  description: string;
  metaText: string;
  ctaText: string;
  url: string;
}
```

---

## 6. Build, Testing & Deployment Plan

1. **Vite Scaffolding**: Setup React + TypeScript + Tailwind CSS project in the repository root.
2. **Design System Integration**: Configure fonts (`Plus Jakarta Sans`, `JetBrains Mono`), Material Symbols Outlined, and custom color variables in `tailwind.config.js` and `index.css`.
3. **Data Layer Implementation**: Populate `src/data/*.ts` using the schemas above, embedding intentional Lorem Ipsum text for unconfirmed copy.
4. **Component Implementation**: Build layout, common widgets, and page-specific components in order (Home -> Theory -> Developer -> Community).
5. **Interactive Testing & Build**: Verify clipboard copying, role swapping, playground validation, view toggling, and clean production build with `npm run build`.
6. **GitHub Pages CI**: Configure `.github/workflows/deploy.yml` for automated static deployment.
