# Radical Transparency Network Web Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, highly componentized Vite + React + TypeScript web portal styled with Tailwind CSS for `radical-transparency-net.github.io`, implementing all mockups from `material_RT_site/` with decoupled data models and clean Lorem Ipsum placeholders.

**Architecture:** A modular React single-page application routed via `HashRouter` for zero-configuration GitHub Pages hosting. Components are organized into atomic, isolated sections (`layout/`, `common/`, `home/`, `theory/`, `developer/`, `community/`), consuming strongly typed data from `src/data/*.ts` without hardcoding content strings in JSX.

**Tech Stack:** React 18/19, TypeScript, Vite 5+, Tailwind CSS, `react-router-dom`, Google Fonts (`Plus Jakarta Sans`, `JetBrains Mono`), Material Symbols Outlined.

**Spec:** [`docs/superpowers/specs/2026-10-08-vite-rt-site-design.md`](file:///c:/Users/cedricd/Documents/Github/radical-transparency-net.github.io/docs/superpowers/specs/2026-10-08-vite-rt-site-design.md)

## Global Constraints

- Must run and build with `npm run build` with zero TypeScript errors (`tsc -b`).
- Base URL configured as `base: '/'` in `vite.config.ts` for root domain GitHub Pages hosting.
- Client-side navigation powered by `HashRouter` (`/#/`, `/#/theory`, `/#/developer`, `/#/community`).
- Design tokens must strictly match the `Open Science Interop` palette: slate base (`#0b1c30`), cobalt accent (`#0051d5`), teal validation accent (`#0c9488`), and card background (`#f8f9ff` / `#ffffff`).
- All unconfirmed / placeholder content must live inside `src/data/*.ts` using clear Lorem Ipsum strings.

## Review Focus

1. **Routing on refresh on GitHub Pages**: Direct navigation to `/#/theory` or page reloads must render the expected view without a 404 error.
2. **Clipboard copying feedback**: Clicking "Copy" on terminal snippet bars must copy the exact command and show temporary visual confirmation (`Copied!`).
3. **Interactive Role Finder state transitions**: Switching between any of the 5 personas must immediately swap operational kickers, descriptions, action cards, reading lists, and terminal commands without layout shifts.
4. **Validator Playground interactive loop**: Changing the profile dropdown or editing Turtle text and clicking "Run Validation" must update the conformity checklist dynamically.
5. **Roadmap Timeline / Kanban toggle**: Switching between Timeline and Kanban views must render cleanly on mobile, tablet, and desktop viewports.

---

### Task 1: Vite Project Scaffolding & Design System Setup

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/main.tsx`
- Create: `src/App.tsx`

**Interfaces:**
- Consumes: None (initial setup)
- Produces: Runnable Vite development environment and build pipeline with custom Tailwind typography and palette tokens.

- [ ] **Step 1: Create package.json and project configuration**

Write `package.json` with dependencies: `react`, `react-dom`, `react-router-dom`, devDependencies: `typescript`, `@types/react`, `@types/react-dom`, `@vitejs/plugin-react`, `vite`, `tailwindcss`, `postcss`, `autoprefixer`.

- [ ] **Step 2: Create TypeScript configurations and vite.config.ts**

Setup `tsconfig.json`, `tsconfig.node.json`, and `vite.config.ts` (with `plugins: [react()]` and `base: '/'`).

- [ ] **Step 3: Setup Tailwind CSS & index.css with Open Science Interop theme**

Configure `tailwind.config.js` with custom colors (`on-secondary-container`, `surface-container-lowest`, `tertiary-container`, `background`, `secondary`, `on-tertiary-container`, `on-surface`, `primary-container`, etc.), font families (`Plus Jakarta Sans`, `JetBrains Mono`), and `index.html` referencing Google Fonts and Material Symbols Outlined.

- [ ] **Step 4: Install dependencies and verify build**

Run: `npm install`
Run: `npm run build`
Expected: `dist/` directory generated with zero errors.

- [ ] **Step 5: Commit scaffolding**

```bash
git add package.json tsconfig*.json vite.config.ts tailwind.config.js postcss.config.js index.html src/
git commit -m "chore: scaffold vite react project with tailwind and design tokens"
```

---

### Task 2: Core TypeScript Models & Decoupled Data Store

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/siteConfig.ts`
- Create: `src/data/roles.ts`
- Create: `src/data/spotlight.ts`
- Create: `src/data/theory.ts`
- Create: `src/data/tooling.ts`
- Create: `src/data/community.ts`

**Interfaces:**
- Consumes: Spec data schemas
- Produces: `RoleProfile[]`, `Tenet[]`, `ComparisonColumn[]`, `SpecCard[]`, `SdkItem[]`, `ValidationProfile[]`, `PlaybookTrack[]`, `RoadmapPhase[]`, `EventItem[]`, `ChannelItem[]`.

- [ ] **Step 1: Define TypeScript interfaces in `src/types/index.ts`**

Define interfaces: `RoleAction`, `RoleReading`, `RoleProfile`, `Tenet`, `ComparisonColumn`, `SpecCard`, `SdkItem`, `ValidationProfile`, `PlaybookTrack`, `EventItem`, `RoadmapPhase`, `ChannelItem`, `ProposalSpotlight`, `StatItem`.

- [ ] **Step 2: Create `siteConfig.ts`, `roles.ts`, and `spotlight.ts`**

Populate global metadata, 5 personas (Data Steward, Ontologist, Software Architect, Research Funder, Citizen Scientist) with customizable actions, copyable snippets, and pulse metrics. Populate spotlight items with clean Lorem Ipsum proposal cards.

- [ ] **Step 3: Create `theory.ts`, `tooling.ts`, and `community.ts`**

Populate 4 tenets, comparison matrix, sample Turtle preview, specifications, mock SDK packages with Lorem Ipsum descriptions, 3 playbooks with pure Lorem Ipsum bullet points, events with Lorem Ipsum, and 4-phase roadmap milestones.

- [ ] **Step 4: Type check data exports**

Run: `npx tsc --noEmit`
Expected: Zero TypeScript type mismatch errors.

- [ ] **Step 5: Commit data layer**

```bash
git add src/types/ src/data/
git commit -m "feat: implement strongly typed decoupled data layer with placeholders"
```

---

### Task 3: Global Shell & Layout Components

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/common/Badge.tsx`
- Create: `src/components/common/CodeBlock.tsx`
- Create: `src/components/common/Card.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `siteConfig.ts`
- Produces: Global header navigation with active link highlighting, mobile responsive drawer, footer with compliance badges, and router outlet.

- [ ] **Step 1: Implement `Header.tsx`**

Implement sticky header with brand mark, navigation links (`#/`, `#/theory`, `#/developer`, `#/community`), search mockup, external GitHub link, "Get Involved" CTA, and responsive mobile drawer toggle.

- [ ] **Step 2: Implement `Footer.tsx`**

Implement footer with brand summary, compliance badges (`EOSC Core Aligned`, `CC-BY 4.0`, `FAIR Verified`), categorized links, newsletter form mockup, and legal notice.

- [ ] **Step 3: Setup `App.tsx` with `HashRouter` and route placeholder pages**

Configure `HashRouter` with routes: `/`, `/theory`, `/developer`, `/community`. Wrap with `Header` and `Footer`.

- [ ] **Step 4: Verify navigation layout and build**

Run: `npm run build`
Expected: PASS with zero errors.

- [ ] **Step 5: Commit layout components**

```bash
git add src/components/layout/ src/components/common/ src/App.tsx
git commit -m "feat: implement global header, footer, and hash routing"
```

---

### Task 4: Home Page (`/`) Components

**Files:**
- Create: `src/components/home/HeroBanner.tsx`
- Create: `src/components/home/TriageDoors.tsx`
- Create: `src/components/home/RoleFinder.tsx`
- Create: `src/components/home/PulseStats.tsx`
- Create: `src/components/home/SpotlightGrid.tsx`
- Create: `src/pages/HomePage.tsx`

**Interfaces:**
- Consumes: `roles.ts`, `spotlight.ts`, `siteConfig.ts`
- Produces: Home page view with 3 consolidated triage doors, dynamic 5-persona diagnostic selector, pulse stats, and spotlight cards.

- [ ] **Step 1: Implement `HeroBanner.tsx` and `TriageDoors.tsx`**

Create `HeroBanner.tsx` with breadcrumb bar, kicker, headline, and subtitle. Create `TriageDoors.tsx` with the 3 consolidated cards (Theory & Rationale, Tooling & Specs, Training & Mobilization) linking to their respective routes.

- [ ] **Step 2: Implement `RoleFinder.tsx`**

Create interactive component with persona pill buttons. Maintain `activeRole` state. Display priority kicker, title, description, time estimate, 2 sub-action cards, terminal snippet with clipboard copy functionality, SVG micro-graph, and curated reading list.

- [ ] **Step 3: Implement `PulseStats.tsx` and `SpotlightGrid.tsx`**

Create 4-column metric pulse strip. Create 3 spotlight cards rendering Lorem Ipsum proposal items with status badges and links.

- [ ] **Step 4: Assemble `HomePage.tsx` and verify**

Import and assemble components into `HomePage.tsx`.
Run: `npm run build`
Expected: PASS with zero errors.

- [ ] **Step 5: Commit Home page**

```bash
git add src/components/home/ src/pages/HomePage.tsx
git commit -m "feat: implement home page with 3 triage doors and interactive role finder"
```

---

### Task 5: Theory Page (`/theory`) Components

**Files:**
- Create: `src/components/theory/TheoryHero.tsx`
- Create: `src/components/theory/SystemDiagram.tsx`
- Create: `src/components/theory/PillarsGrid.tsx`
- Create: `src/components/theory/ComparisonMatrix.tsx`
- Create: `src/components/theory/MotivationSection.tsx`
- Create: `src/components/theory/LineageInspector.tsx`
- Create: `src/pages/TheoryPage.tsx`

**Interfaces:**
- Consumes: `theory.ts`
- Produces: Theory page view with 4 tenets, comparison matrix, SVG system diagram, and Turtle lineage inspector.

- [ ] **Step 1: Implement `TheoryHero.tsx` and `SystemDiagram.tsx`**

Create hero with pillars status strip. Create `SystemDiagram.tsx` featuring inline SVG graphic (Domain A -> Radical Linkset Hub -> Domain B) and sovereign data governance editorial callout.

- [ ] **Step 2: Implement `PillarsGrid.tsx` and `ComparisonMatrix.tsx`**

Create `PillarsGrid.tsx` rendering the 4 Tenets (Auditable Provenance, Declarative Conformity, Decentralized Linksets, Continuous Community). Create `ComparisonMatrix.tsx` with split bento comparison between traditional closed crosswalks and the RT model.

- [ ] **Step 3: Implement `MotivationSection.tsx` and `LineageInspector.tsx`**

Create EOSC motivation cards and manifesto quote box. Create `LineageInspector.tsx` showing Turtle/RDF preview block, copyable PURL button, and SHACL validation tag.

- [ ] **Step 4: Assemble `TheoryPage.tsx` and verify**

Assemble in `TheoryPage.tsx`.
Run: `npm run build`
Expected: PASS with zero errors.

- [ ] **Step 5: Commit Theory page**

```bash
git add src/components/theory/ src/pages/TheoryPage.tsx
git commit -m "feat: implement theory page with comparison matrix and lineage inspector"
```

---

### Task 6: Developer Hub (`/developer`) Components

**Files:**
- Create: `src/components/developer/DevHubHero.tsx`
- Create: `src/components/developer/CliTerminal.tsx`
- Create: `src/components/developer/SpecsGrid.tsx`
- Create: `src/components/developer/ValidatorPlayground.tsx`
- Create: `src/components/developer/SdkCards.tsx`
- Create: `src/components/developer/ContributionSteps.tsx`
- Create: `src/pages/DeveloperPage.tsx`

**Interfaces:**
- Consumes: `tooling.ts`
- Produces: Developer Hub view with interactive terminal mockup, specifications suite, interactive validator playground, SDK cards, and 3-step RFC contribution flow.

- [ ] **Step 1: Implement `DevHubHero.tsx` and `CliTerminal.tsx`**

Create hero with verified metrics. Create `CliTerminal.tsx` with bash header, `npx @eosc-interop/rt-cli validate` command snippet, output log, and copy button with active feedback.

- [ ] **Step 2: Implement `SpecsGrid.tsx` and `SdkCards.tsx`**

Create 3 core specification cards (Conformity Profiles, Linkset Usage Patterns, Alignment Actions). Create 3 SDK cards (Python, Rust, TypeScript) with placeholder Lorem Ipsum descriptions and copyable install commands.

- [ ] **Step 3: Implement `ValidatorPlayground.tsx` and `ContributionSteps.tsx`**

Create interactive validator playground: profile standard selector, editable Turtle textarea, "Run Validation" button updating checklist items, and "Reset" button. Create 3-step contribution progression and GitHub PR callout card.

- [ ] **Step 4: Assemble `DeveloperPage.tsx` and verify**

Assemble in `DeveloperPage.tsx`.
Run: `npm run build`
Expected: PASS with zero errors.

- [ ] **Step 5: Commit Developer Hub**

```bash
git add src/components/developer/ src/pages/DeveloperPage.tsx
git commit -m "feat: implement developer hub with terminal, sdk cards, and validator playground"
```

---

### Task 7: Community, Mobilization & Roadmap (`/community`) Components

**Files:**
- Create: `src/components/community/CommunityHero.tsx`
- Create: `src/components/community/PlaybookTracks.tsx`
- Create: `src/components/community/EventCards.tsx`
- Create: `src/components/community/RoadmapTimeline.tsx`
- Create: `src/components/community/ChannelsGrid.tsx`
- Create: `src/pages/CommunityPage.tsx`

**Interfaces:**
- Consumes: `community.ts`
- Produces: Community page with 3 playbook tracks, live events, view-toggled roadmap (Timeline vs Kanban), and stakeholder channels.

- [ ] **Step 1: Implement `CommunityHero.tsx` and `PlaybookTracks.tsx`**

Create hero with active cohort badges. Create `PlaybookTracks.tsx` displaying 3 tracks (Institutions, Domain Scientists, Champions) with pure Lorem Ipsum bullet points and access buttons.

- [ ] **Step 2: Implement `EventCards.tsx`**

Create upcoming webinars and sprints cards with Lorem Ipsum descriptions, date badges, and registration actions.

- [ ] **Step 3: Implement `RoadmapTimeline.tsx` and `ChannelsGrid.tsx`**

Create roadmap with interactive view toggle: **Timeline View** vs. **Kanban View**. Render 4 milestone phases with status indicators and milestone checklists. Create stakeholder channels cards and monthly dispatch box.

- [ ] **Step 4: Assemble `CommunityPage.tsx` and verify**

Assemble in `CommunityPage.tsx`.
Run: `npm run build`
Expected: PASS with zero errors.

- [ ] **Step 5: Commit Community page**

```bash
git add src/components/community/ src/pages/CommunityPage.tsx
git commit -m "feat: implement community page with playbooks and roadmap view toggle"
```

---

### Task 8: GitHub Pages CI/CD & End-to-End Verification

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Interfaces:**
- Consumes: Build output in `dist/`
- Produces: Automated deployment to GitHub Pages on push to `main`.

- [ ] **Step 1: Create GitHub Actions deployment workflow**

Write `.github/workflows/deploy.yml` using `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`.

- [ ] **Step 2: Create comprehensive `README.md`**

Document project overview, architectural design, component structure, data customization instructions, local development commands (`npm run dev`), and deployment guidelines.

- [ ] **Step 3: End-to-end production build & verification**

Run: `npm run build`
Expected: Successful compilation to `dist/`, zero lint or type errors.

- [ ] **Step 4: Final commit**

```bash
git add .github/workflows/deploy.yml README.md
git commit -m "ci: add github pages deployment workflow and readme documentation"
```
