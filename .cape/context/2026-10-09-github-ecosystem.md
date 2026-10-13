# GitHub Organization & Ecosystem Landscape

**Date:** 2026-10-09  
**Status:** Active Baseline  
**Organization:** [`radical-transparency-net`](https://github.com/radical-transparency-net)  

---

## 1. Ecosystem Repository Taxonomy & Naming Governance

Repository naming across the `radical-transparency-net` organization is governed by functional taxonomy markers rather than ad-hoc names.

### Naming Conventions & Role Categories

All repo names should be using kebab style and stick to lower-case.

Depending onm purpose we suggest: 

| Category | Naming Pattern | Purpose / Role | Current Name | Planned Canonical Name |
| :--- | :--- | :--- | :--- | :--- |
| **Gateway / Portal** | `*.github.io` | Canonical landing portal, theory, documentation, triage hub | `radical-transparency-net.github.io` | `radical-transparency-net.github.io` |
| **Executable Tools** | `*-tool` | Standalone CLI or interactive client tools for extraction, analysis, editing | `wrx`<br>`webmap-ER` | `wrx-tool`<br>`webmap-er-tool` |
| **Reference Demonstrators** | `docker-*-demo` | Standalone containerized testbeds demonstrating RT patterns and RDF publication | `lod_docker_webserver` | `docker-rt-patterns-demo` |
| **Libraries / SDKs** | `*-lib` / `*-sdk` | Reusable protocol parsers, validators, and client SDKs | *(Planned)* | `rt-core-lib` |

> [!NOTE]
> Renaming existing external repositories will be executed deliberately in a planned migration window (documented in `.cape/plan/2026-10-09-setup.md`). The key principle is that naming must reflect architectural function.

---

## 2. Repository Roles & Responsibilities

```
┌────────────────────────────────────────────────────────────────────────┐
│                        External Incubator                              │
│         eosc-semantic-interop / if-solutions-proposals                 │
│         (Proposals, Position Paper, Linkset Patterns RT-P01..10)       │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ Graduated into dedicated org
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  radical-transparency-net (Organization)               │
├──────────────────────────────────┬─────────────────────────────────────┤
│ 1. radical-transparency-net.     │ Public gateway, landing portal,     │
│    github.io                     │ theory, developer hub, and roadmap. │
├──────────────────────────────────┼─────────────────────────────────────┤
│ 2. wrx (planned: wrx-tool)       │ Web resource extraction engine      │
│                                  │ (JS/Bun CLI) for automated cascades.│
├──────────────────────────────────┼─────────────────────────────────────┤
│ 3. lod_docker_webserver          │ Reference demonstrator testbed      │
│    (planned: docker-*-demo)      │ (150 pages, 30 discovery patterns). │
├──────────────────────────────────┼─────────────────────────────────────┤
│ 4. webmap-ER                     │ Visual browser-based editor for     │
│    (planned: webmap-er-tool)     │ detecting & bridging pattern gaps.  │
└──────────────────────────────────┴─────────────────────────────────────┘
```

### 1. `radical-transparency-net.github.io` (Portal Gateway)
* **Role:** The canonical web portal and gateway (`https://radical-transparency.net` / `https://radical-transparency-net.github.io`).
* **Audience:** Researchers, data stewards, software engineers, ontologists, and policy funders.
* **Key Components:** Persona triage doors, architectural theory, interactive CLI simulator, and capacity-building playbooks.

### 2. `wrx` $\rightarrow$ `wrx-tool` (Web Resource Extraction)
* **Role:** Lightweight client library and command-line extraction tool (JS/Bun).
* **Function:** Executes cascading RDF metadata discovery across HTTP resources:
  1. Content Negotiation (`Accept: application/ld+json, text/turtle`)
  2. FAIR Signposting headers (`rel="describedby"`, `rel="profile"`)
  3. RFC 9264 Linksets (`rel="linkset"`)
  4. Embedded HTML scripts (`<script type="application/ld+json">`)
  5. Sitemap & DCAT fallbacks.

### 3. `lod_docker_webserver` $\rightarrow$ `docker-rt-patterns-demo` (Reference Demonstrator)
* **Role:** Containerized reference implementation demonstrating RT patterns and RDF publication.
* **Function:** Generates and serves a deterministic matrix of 150 simulated resources testing 30 distinct metadata delivery methods across a 2x2 taxonomy (Resource vs. Domain level, Direct vs. Inferenced RDF). Serves as the ground-truth testbed for crawler tools like `wrx-tool`.

### 4. `webmap-ER` $\rightarrow$ `webmap-er-tool` (Pattern Visual Editor)
* **Role:** Visual, didactic browser application.
* **Function:** Assists end-users and data stewards in visually inspecting an asset's web linking topology, detecting missing RT declarations, and interactively weaving conforming linksets.

---

## 3. Upstream Relationship: The Incubator

* **Origin:** [`eosc-semantic-interop/if-solutions-proposals`](https://github.com/eosc-semantic-interop/if-solutions-proposals) (`proposals/radical-transparency`).
* **Role:** Developed within the EOSC Semantic Interoperability and SAGE / Green Deal Dataspace context by VLIZ and partners. This is where the 10 Linkset Usage Patterns (`RT-P01` to `RT-P10`) and foundational position papers were drafted.
* **Transition Plan:** The finalized patterns and reference documentation are transitioning from the incubator into this canonical organization.

---

## 4. Local Development Convenience: The `../parent-org` Symlink

To facilitate co-development across related repositories without complex multi-repo tooling, contributors can maintain sibling git clones in a common parent directory. 

A local symbolic link named `parent-org` pointing to `../` allows quick local access to sibling repositories:
```bash
# Example local directory structure
├── parent-directory/
│   ├── radical-transparency-net.github.io/
│   ├── wrx/                      # (planned: wrx-tool)
│   ├── lod_docker_webserver/     # (planned: docker-rt-patterns-demo)
│   ├── webmap-ER/                # (planned: webmap-er-tool)
│   └── if-solutions-proposals/
```
* **Git Policy:** The `parent-org` symlink is strictly ignored in `.gitignore` to prevent committing machine-dependent local path assumptions.
