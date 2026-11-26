# Multi-Repo Ecosystem Split, ReSpec Publishing & Source-Only Automation

**Date:** 2026-11-26  
**Status:** Complete  
**Summary:** Milestone log and ADR recording the transition to a multi-repo architecture (ReSpec specs, source-only semantic-assets pipeline, w3id.org routing, v1.0 branding, radical-transparency.net custom domain, and incubator graduation).  

---

## 1. Context & Architectural Pivot

Earlier planning envisioned hosting the Linkset Usage Patterns Markdown/PDF bundle and the `rtwl:` vocabulary directly inside `radical-transparency-net.github.io` (see `.cape/plan/2026-11-25-linkset-patterns-backlog.md`). During execution, responsibilities were split across dedicated single-purpose repositories under `radical-transparency-net` to separate normative specifications, semantic vocabularies, persistent identifiers, branding assets, and the main portal UI.

---

## 2. Decisions & Delivered Milestones

### 2.1 Normative Specification (`radical-transparency-net/spec-linkset-usage-patterns`)
- Migrated `RT-P01` through `RT-P10` and the master overview from the EOSC incubator into a W3C ReSpec publication (`index.html`).
- Normalized filenames to `rt-patterns-overview.md` and `rt-p01-*` through `rt-p10-*` and unified pattern headings under `RT-Pxx :: <Title>`.
- Wired canonical links to `https://w3id.org/rt/ns/weblink#` and the published VLIZ Position Paper PDF (`https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf`, managed in `vliz-be-opsci/papers`).

### 2.2 Semantic Vocabulary Pipeline (`radical-transparency-net/semantic-assets`)
- Authored formal `rtwl:` (`v0.1.0-draft`) in `weblink/weblink.ttl` with observed link examples in `weblink/examples/observed-links.ttl`.
- Adopted a **source-only git policy** (tracked in `.agents/rules/source-of-truth-and-build.md`): `*.ttl`, `scripts/`, `assets/`, `Makefile`, and workflows are committed; derived artifacts (`index.html`, `*/index.html`, `*/*.jsonld`, `*/*.linkset`, `*/*.linkset.json`, `sitemap-semantic-assets.xml`) are `.gitignore`d and generated deterministically via `Makefile` + PEP 723 `uv` (`scripts/build.py` using `rdflib` and `jinja2`).
- Switched GitHub Actions workflow (`build-and-deploy.yml`) to run `make all && make check` on PRs and deploy to GitHub Pages on `main`, with default `BASE_URL` set to `https://radical-transparency.net/semantic-assets`.
- Automated `RT-P03` content-negotiation linksets and `RT-P06` ResourceSync sitemap (`sitemap-semantic-assets.xml`) generation.

### 2.3 Persistent Identifiers (`radical-transparency-net/w3id.org`)
- Split `ids/rt/` routing cleanly into `ids/rt/.htaccess` (top-level `/rt/` entry) and `ids/rt/ns/.htaccess` (`/rt/ns/weblink` and format extensions).
- Scoped `RT-P03` `Link` headers and `Vary: Accept` via Apache `<If>` expressions and verified 42 rules cleanly using `w3id-check`.

### 2.4 Branding & Portal Transition (`visuals-branding-design` & `radical-transparency-net.github.io`)
- Finalized *Brugse Schelprand* `v1.0` deterministic monochrome SVG/PNG/ICO masters in `visuals-branding-design` and synced them to `public/assets/branding/`.
- Overhauled portal routes (`/`, `/patterns`, `/tools`, `/semantic-assets`, `/community`) around the three-step framing (`DECLARE · VERIFY · QUANTIFY`) and began cutover to the custom domain `https://radical-transparency.net/`.

### 2.5 Incubator Graduation (`eosc-semantic-interop/if-solutions-proposals`)
- Replaced legacy pattern drafts under `proposals/radical-transparency/` with a graduation placeholder pointing to `https://radical-transparency.net/`.
- Preserved alignment dossiers, strategic notes, and local archival resources (`MATERIAL/from-if-solutions-proposals/`).
