# Radical Transparency Network (`radical-transparency-net.github.io`)

> **The Gateway into the Radical Transparency (RT) Ecosystem**  
> Operationalizing European & Global Open Science semantic interoperability, machine-actionable provenance, and cross-border research federation.

---

## 🌐 Overview

The **Radical Transparency Network** serves as the canonical landing portal and entrypoint for researchers, data stewards, software engineers, ontologists, and policy funders navigating the Radical Transparency paradigm.

The portal provides four integrated, componentized tracks:
1. **Gateway (`/#/`)**: High-impact portal door triage, live ecosystem metrics, interactive 5-role persona finder, and spotlight proposals.
2. **Theory & Rationale (`/#/theory`)**: The conceptual foundation, 4 core architectural pillars, comparative legacy vs. RT matrix, FAIR metrics, and interactive lineage provenance inspector.
3. **Developer Hub (`/#/developer`)**: Interactive CLI terminal simulator, specification catalogs, live in-browser JSON-LD/RDF Validator Playground, SDK cards, and RFC contribution pipeline.
4. **Knowledge & Community (`/#/community`)**: Three actionable capacity-building playbooks, upcoming webinars/hackathons, a 4-phase strategic roadmap with **Timeline vs. Kanban** toggle, stakeholder channels, and monthly newsletter dispatch.

---

## 🛠️ Architecture & Tech Stack

- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with tailored `Open Science Interop` design tokens matching Material Design 3 and European Open Science guidelines (Inter typography, JetBrains Mono code, refined slate & cobalt tones)
- **Icons**: Material Symbols Outlined
- **Routing**: `react-router-dom` using `HashRouter` (`/#/`, `/#/theory`, `/#/developer`, `/#/community`), eliminating HTTP 404 rewrite issues on static hosts like GitHub Pages
- **Content Decoupling**: All content, mock data, and placeholder text are decoupled into strongly typed data models (`src/data/*.ts`), ensuring easy updates without editing component markup

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── docs/
│   └── superpowers/
│       ├── specs/              # Formal design spec
│       └── plans/              # Detailed implementation plan
├── src/
│   ├── components/
│   │   ├── common/             # Badges, Cards, CodeBlocks
│   │   ├── community/          # Playbooks, Roadmap, Channels, Events
│   │   ├── developer/          # CLI Terminal, Validator Playground, SDKs
│   │   ├── home/               # Hero, Triage Doors, Role Finder, Pulse Stats
│   │   ├── layout/             # Header, Footer, Navigation
│   │   └── theory/             # System Diagram, Pillars, Lineage Inspector
│   ├── data/                   # Decoupled content stores
│   │   ├── siteConfig.ts       # Global navigation & metadata
│   │   ├── roles.ts            # Persona profiles & checklists
│   │   ├── spotlight.ts        # Proposal spotlights & metrics
│   │   ├── theory.ts           # Architectural pillars & lineage data
│   │   ├── tooling.ts          # CLI commands, specs, validator profiles
│   │   └── community.ts        # Playbooks, events, roadmap, channels
│   ├── pages/                  # Page route containers
│   │   ├── HomePage.tsx
│   │   ├── TheoryPage.tsx
│   │   ├── DeveloperPage.tsx
│   │   └── CommunityPage.tsx
│   ├── types/
│   │   └── index.ts            # Strongly typed TypeScript interfaces
│   ├── App.tsx                 # Root layout & HashRouter configuration
│   ├── index.css               # Design system tokens & utility classes
│   └── main.tsx                # React root mount
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or later, v20+ recommended)
- **npm** (v9.0.0 or later)

> **Windows Note:** If running in a shell where Node is not in the system `PATH` by default, prepend the Node directory:
> ```powershell
> $env:PATH = "C:\Program Files\nodejs;$env:PATH"
> ```
> Or in Git Bash:
> ```bash
> export PATH="/c/Program Files/nodejs:$PATH"
> ```

### Installation

```bash
npm install
```

### Development Server

Start Vite with hot module replacement:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build

Compile TypeScript and build the optimized static asset bundle in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ Customization Guide

Because the mockups originally featured placeholder copy, all text, external links, and milestone items are isolated in `src/data/`:

| File | Purpose | What to Update |
|---|---|---|
| `src/data/siteConfig.ts` | Global branding & navigation | Site title, partner logos, header navigation links, footer copyright |
| `src/data/roles.ts` | Role Finder Personas | Action checklists and quick links for Stewards, Ontologists, Architects, Funders, Citizens |
| `src/data/spotlight.ts` | Proposal Spotlights | Replace placeholder spotlight cards with real EOSC / RT proposals and papers |
| `src/data/theory.ts` | Theory & Principles | Core pillars, legacy vs. RT comparison points, and graph lineage inspector nodes |
| `src/data/tooling.ts` | Developer Specs & Tools | Official CLI commands, validator schema profiles (EIF, DCAT-AP, RO-Crate), and SDK links |
| `src/data/community.ts` | Community & Governance | Real institutional playbook files, webinar schedules, and 4-phase governance roadmap |

---

## 🚢 Continuous Deployment (GitHub Pages)

This repository includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### To Enable GitHub Pages:
1. Navigate to repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every push to the `main` branch will automatically build and publish the site.

---

## 📄 References & Attribution

- **EOSC Semantic Interoperability Proposals**: [eosc-semantic-interop/if-solutions-proposals](https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency)
- **European Open Science Cloud**: [eosc.eu](https://eosc.eu)
