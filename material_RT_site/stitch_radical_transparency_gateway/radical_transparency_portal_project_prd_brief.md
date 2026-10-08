# Product Requirements Document (PRD) & Project Brief
## Radical Transparency Portal — European Open Science Cloud (EOSC) Interoperability Framework

---

### Executive Summary & Project Metadata
- **Project Name:** Radical Transparency Entrypoint & Triage Portal
- **Document Type:** Product Requirements Document (PRD) & Strategic Brief
- **Target Platform:** European Open Science Cloud (EOSC) Semantic Interoperability Task Force
- **Primary Repository Baseline:** [`eosc-semantic-interop/if-solutions-proposals`](https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency)
- **Status:** Approved / Release Baseline v2.4
- **Target Audience:** Cross-disciplinary researchers, ontologists, data stewards, software engineers/architects, institutional leadership, and EU funding bodies.

---

### 1. Problem Statement & Motivation
In European federated research infrastructures, data harmonization traditionally relies on opaque, bespoke translation scripts, ad-hoc ETL mappings, and closed crosswalk tables. When source ontologies or terminology versions change:
1. **Silent Semantic Breakage:** Downstream consumers experience silent query degradation without provenance or regression alerts.
2. **Epistemic Loss & Gatekeeping:** Mappings lack open peer-review, cryptographic verification, or machine-actionable declarations.
3. **Barriers to Scalable Open Science:** Interoperability remains locked within disciplinary silos rather than federating across life sciences, physics, environmental, and social research domains.

**The Radical Transparency Paradigm** addresses this by mandating that all entity crosswalks, URI alignments, and schema transformations are:
- **Provably auditable** via cryptographic provenance standards (W3C PROV-O).
- **Machine-actionable and deterministic** through declarative SHACL/ShEx conformity profiles.
- **Published as public versioned goods** via decentralized W3C VoID linksets.
- **Governed by open consensus** following community RFC pull-request lifecycles.

---

### 2. Product Vision & Core Objectives
The **Radical Transparency Portal** serves as the authoritative digital gateway and triage switchboard for the entire EOSC semantic interoperability initiative.

#### Core Objectives:
1. **Immediate Multi-Persona Triage:** Instantly route visitors (conceptual explorers, engineers, educators/data stewards, or policy stakeholders) to their high-leverage entry pathway within the first screen view.
2. **Cognitive Clarity over Ambiguity:** Contrast traditional closed crosswalk flaws against machine-verified open architectures with interactive comparison matrices.
3. **Self-Service Engineering Enablement:** Provide zero-friction CLI commands, sandboxed in-browser linkset validators, and official client SDKs (Python, Rust, TypeScript).
4. **Community Capacity Building & Outreach:** Supply accredited curriculum modules, institutional audit playbooks, slide decks, and a 4-phase milestone-driven communication roadmap.

---

### 3. User Personas & Journey Mapping

| Persona | Primary Needs & Pain Points | Key Portal Entrypoint | Actionable Deliverable |
| :--- | :--- | :--- | :--- |
| **Data Steward & Repository Lead** | Auditing local metadata against EOSC Core, ensuring FAIR compliance without manual re-tagging. | Instant Role Finder & Community Hub | Step-by-step Audit Playbook, Conformity Profile JSON-LD specs. |
| **Ontologist & Knowledge Engineer** | Avoiding semantic drift and undefined `owl:sameAs` bindings across cross-border triplestores. | Developer Hub & Specs | Linkset Usage Patterns (VoID / SSSOM), SHACL constraints. |
| **Software Architect & DevOps** | Automating pull-request linting, verifying PURL resolution latency, integrating microservices. | Developer Hub & CLI | `rt-cli validate` runner, GitHub Actions CI workflows, SDKs. |
| **Domain Scientist & Working Group** | Proposing cross-domain term reconciliations without writing low-level code. | Foundations & Community Circles | RFC templates, bi-weekly open office hours, co-design hackathons. |
| **Research Funder & Policy Lead** | Tracking ROI, compliance with Horizon Europe data policies, eliminating vendor lock-in. | Communication Roadmap | 4-Phase Roadmap, institutional briefing one-pagers, SLA tracking. |

---

### 4. Architectural Scope & Information Architecture

The portal is architected across four core interactive modules anchored to a unified global shell:

```
[ Radical Transparency Portal ]
├── 1. Triage & Entrypoint Hub (Index)
│    ├── Ambient Masthead & Spec Status (v2.4.0 Live)
│    ├── 4-Door Primary Triage Matrix (Explore, Build, Learn, Campaign)
│    ├── Instant Role Diagnostic Selector (5 Personas)
│    └── Repository Spotlight (motivation.md, conformity-profiles.md, linksets)
│
├── 2. Understanding Radical Transparency (Foundations & Motivation)
│    ├── The 4 Pillars (Auditable Provenance, Declarative Conformity, Decentralized Linksets, Community Alignment)
│    ├── Comparative Analysis Matrix (Closed Crosswalks vs. Radical Transparency)
│    ├── EOSC Motivation & Cross-Discipline Synthesis
│    └── Interactive Lineage & PROV-O Inspector
│
├── 3. Developer Hub & Tooling
│    ├── One-Click Quickstart Terminal & CLI Validator
│    ├── Core Specifications (Conformity Profiles, VoID Linkset Patterns, GitHub Action Bots)
│    ├── In-Browser Interactive Linkset Validator Playground (Rust WASM)
│    ├── Client SDKs (Python, Rust, TypeScript)
│    └── 3-Step RFC Contribution Flow
│
└── 4. Community Education & Strategic Communication Plan
     ├── 3-Track Playbooks (Institutions, Domain Working Groups, Open Science Champions)
     ├── Upcoming Live Cohorts & Hackathons (Demystifying Interop, Linkset Curation)
     ├── 4-Phase Dissemination Roadmap (Foundation, Pilots, Evangelism, Standardization)
     └── Multichannel Engagement (Discord/Matrix Office Hours, GitHub RFCs, Digest)
```

---

### 5. Functional & Technical Requirements

#### 5.1 Immediate Triage Engine
- **Requirement:** The primary 4-door triage selectors must be rendered prominently above the fold without requiring initial scrolling on standard viewports (1440×900).
- **Behavior:** Dynamic role selection pills must instantly update contextual guides, recommendations, and relevant asset links without requiring page refreshes.

#### 5.2 Developer Tooling & Verification Rig
- **Requirement:** Provide copy-pasteable CLI execution syntax for terminal environments:
  `npx @eosc-interop/rt-cli validate --linkset <path> --conformity <profile>`.
- **Requirement:** Sandboxed interactive playground allowing RDF/Turtle manipulation, verifying:
  - Mandatory licensing headers (e.g., CC-BY 4.0).
  - Cryptographic provenance chains and commit hashes.
  - Zero cyclic contradictions across SKOS `exactMatch` assertions.

#### 5.3 Design System & Visual Standard
- **Design Tokens:** Strict adherence to the `Open Science Interop` design system.
  - **Color Palette:** Deep slate neutrals (`#0f172a`), deep cobalt secondary accents (`#0051d5`), teal validation markers (`#0c9488`), clean laboratory surfaces (`#f8f9ff` / `#ffffff`).
  - **Typography:** `Plus Jakarta Sans` for humanist editorial clarity; `JetBrains Mono` for machine code, schemas, and SHACL shapes.
  - **Grid & Layout:** Max container width 1440px with responsive desktop padding and modular cards.

---

### 6. Strategic Communication & Rollout Roadmap

- **Phase 1: Foundation & Awareness (Q1–Q2 2026) [Completed]**
  - Launch open proposal repository on GitHub (`if-solutions-proposals`).
  - Presentation of Radical Transparency whitepaper at the EOSC Symposium plenary.
  - Beta release of `@eosc-interop/rt-cli`.

- **Phase 2: Pilot Adoptions & Early Birds (Q3 2026) [Active In-Flight]**
  - ELIXIR life sciences cluster cross-validation ingestion.
  - Integration of physics astronomy (ESCAPE) linkset triplestores.
  - Launch of automated crosswalk regression testing suite.

- **Phase 3: Multi-Stakeholder Evangelism (Q4 2026) [Upcoming]**
  - Direct policy briefings to national research ministries across 27 EU member states.
  - Rollout of public interactive compliance dashboards.
  - 6-part pan-European webinar series.

- **Phase 4: Standardization & EIF Baseline (2027+) [Target Baseline]**
  - Formal adoption into the mandatory EOSC Interoperability Framework (EIF) baseline.
  - Distributed autonomous PURL resolution mesh with 99.99% SLA.

---

### 7. Governance, Metrics & Success Criteria
1. **Repository & Schema Velocity:**
   - $\ge 95\%$ of submitted community linksets validated via automated CI without human intervention.
   - Response time for open RFC triage on GitHub $< 48$ hours.
2. **Ecosystem Adoption:**
   - Over 1,500 registered data stewards in accredited training pathways by end of Phase 2.
   - Inclusion of Radical Transparency conformance badges across top-tier European research data repositories (Zenodo, B2SHARE, institutional Dataverses).
3. **Fidelity to Open Access:**
   - 100% of specifications, schemas, tooling, and playbooks distributed under CC-BY 4.0 or Apache 2.0 open licenses.
