# Web Portal Architecture & Development Workflow

**Date:** 2026-10-09  
**Status:** Active Baseline  
**Scope:** `radical-transparency-net.github.io`  

---

## 1. Technology Stack & Rationale

The web portal is engineered as a modern, lightweight single-page application (SPA) optimized for static distribution via GitHub Pages.

* **Core Framework:** **React 18** with **TypeScript** for strong typing and predictable component composition.
* **Build Tooling:** **Vite 5+** delivering sub-second Hot Module Replacement (HMR) and optimized rollup production bundles.
* **Styling System:** **Tailwind CSS** with a custom `Open Science Interop` theme adhering to European Open Science and Material Design 3 guidelines:
  * Slate base (`#0b1c30`), Royal Cobalt accent (`#0051d5`), and Deep Teal transparency validation accent (`#0c9488`).
  * Typography: Google Fonts `Plus Jakarta Sans` for body/headings and `JetBrains Mono` for code, RDF triples, and terminal output.
  * Icons: Google Material Symbols Outlined.
* **Routing Strategy:** **`react-router-dom` with `HashRouter` (`/#/`, `/#/theory`, `/#/developer`, `/#/community`)**:
  * *Why HashRouter?* Standard HTML5 `BrowserRouter` triggers HTTP 404 errors when reloading deep URLs on static hosts like GitHub Pages (which lack server-side URL rewrite engines). `HashRouter` guarantees that deep links resolve client-side without requiring custom 404 hack redirects.

---

## 2. Content Decoupling Architecture

To enable domain scientists, data stewards, and ontologists to update site content without modifying React component JSX:
* **All content is isolated in `src/data/*.ts`**:
  * `siteConfig.ts`: Global navigation, branding, links, and footer configuration.
  * `roles.ts`: Persona definitions (Stewards, Ontologists, Architects, Funders, Citizens) and action checklists.
  * `spotlight.ts`: Key proposal highlights and ecosystem pulse statistics.
  * `theory.ts`: Core tenets, comparative legacy vs. RT matrix, and lineage graph definitions.
  * `tooling.ts`: CLI simulation commands, specification catalogs, and validation test profiles.
  * `community.ts`: Capacity-building playbooks, event schedules, and the 4-phase governance roadmap.
* Components consume these data models via strongly typed interfaces defined in `src/types/index.ts`.

---

## 3. Local Development & Contributor Workflow

### Prerequisites
* **Node.js** (v18.0.0 or later, v20+ recommended)
* **npm** (v9.0.0 or later)

### Standard Commands
```bash
# 1. Install dependencies
npm install

# 2. Run local development server with live reload (http://localhost:5173)
npm run dev

# 3. Type-check and compile production bundle to dist/
npm run build

# 4. Preview the compiled production build locally
npm run preview
```

### Contributor Checklist Before Opening a PR
1. **Type Safety:** Run `npm run build` locally. Ensure zero TypeScript (`tsc -b`) or Vite bundling errors.
2. **Visual Inspection:** Verify responsive layouts across desktop, tablet, and mobile viewports.
3. **Data Integrity:** Confirm that any content edits remain isolated within `src/data/*.ts` and conform to the interfaces in `src/types/index.ts`.
4. **Pre-Flight Verification:** Complete the mandatory 5-gate verification cycle defined in [`.agents/skills/pr-preparation/SKILL.md`](../../.agents/skills/pr-preparation/SKILL.md) before opening a Pull Request against `main`.

---

## 4. Continuous Deployment (CI/CD)

* **Deployment Target:** GitHub Pages (`radical-transparency-net.github.io` / `radical-transparency.net`).
* **Automation Workflow:** [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml).
* **Trigger:** Every merge or direct push to the `main` branch automatically:
  1. Checks out the repository.
  2. Sets up Node.js with dependency caching.
  3. Executes `npm ci` and `npm run build`.
  4. Uploads the static `dist/` bundle to GitHub Pages.

---

## 5. Ecosystem Integration & Associated Sites

The web portal acts as the overarching gateway and showcase for the broader ecosystem repositories:
* **Developer Hub CLI:** Simulates and showcases commands from the **`wrx`** web resource extraction engine.
* **Validation Playground:** Demonstrates conformance verification patterns tested at scale against the **`lod_docker_webserver`** testbed.
* **Interactive Tooling:** Provides navigational entry points to visual inspection tools like **`webmap-ER`**.
