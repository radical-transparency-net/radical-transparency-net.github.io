# Linkset Usage Patterns (RT-P01 to RT-P10): Migration, Alignment & Publication Backlog

**Date:** 2026-11-25  
**Status:** In Progress  
**Summary:** Actionable backlog tracking pattern migration, `rtwl:` hosting via `w3id.org` + `semantic-assets`, domain/CORS/sitemap dogfooding, external alignment, Zenodo publication, and future RT x AI triage.  

---

## Context & Preconditions

Foundational pattern drafts (`00-linkset-patterns.md` through `10-detached-local-storage.md`) originated in `eosc-semantic-interop/if-solutions-proposals`. During November 2026 execution, work pivoted from bundling patterns directly into the portal SPA toward a dedicated multi-repo architecture (`spec-linkset-usage-patterns`, `semantic-assets`, `w3id.org`, `visuals-branding-design`), while `RT-DPP` (Position Paper) was published separately under `vliz-be-opsci/papers`. See `.cape/evolution/2026-11-26-multi-repo-ecosystem-and-automation.md`.

---

## Workstream 1: Ecosystem Migration & Incubator Graduation

- [x] **Migrate canonical pattern suite (`spec-linkset-usage-patterns`):** Published normalized `rt-patterns-overview.md` and `rt-p01-*` through `rt-p10-*` docs, SVG/PNG diagrams, and ReSpec `index.html`.
- [x] **Sync portal data & diagrams:** Integrated pattern summaries and verified SVG diagrams into `radical-transparency-net.github.io` (`/patterns`, `/patterns/:id`, `/semantic-assets`).
- [x] **Publish Position Paper (`RT-DPP`):** Managed and published via `vliz-be-opsci/papers` (`https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf`), cross-linked from overview and portal.
- [x] **Archive local resources & clean incubator repo:** Preserved untracked resources/slides in local `MATERIAL/from-if-solutions-proposals/` and replaced legacy incubator drafts in `eosc-semantic-interop/if-solutions-proposals` with a graduation placeholder pointing to `https://radical-transparency.net/`.
- [ ] **Publish PR / commit cleanup:** Commit and push finalized changes across `semantic-assets`, `if-solutions-proposals`, and `radical-transparency-net.github.io`.

---

## Workstream 2: Host `rtwl:` Vocabulary (`https://w3id.org/rt/ns/weblink#`), Domain Cutover & Dogfooding

- [x] **Author formal vocabulary:** Defined `rtwl:WebLink`, `rtwl:TargetAttribute`, `rtwl:anchor`, `rtwl:rel`, `rtwl:href`, `rtwl:attribute`, `rtwl:key`, and `rtwl:value` (`v0.1.0-draft`) in `semantic-assets/weblink/weblink.ttl` + observed link examples.
- [x] **Build deterministic source-only pipeline:** Created `Makefile` + PEP 723 `uv` generator (`scripts/build.py`), `.gitignore`d derived artifacts, and wired `.github/workflows/build-and-deploy.yml` (`make all && make check` + GitHub Actions Pages deploy) with default `BASE_URL` = `https://radical-transparency.net/semantic-assets`.
- [x] **Draft `w3id.org` conneg & `RT-P03` headers:** Split `ids/rt/.htaccess` and `ids/rt/ns/.htaccess` and verified against 42 `w3id-check` rules.
- [ ] **Point `w3id.org` directly to `radical-transparency.net` & submit upstream PR:** Update `ids/rt/ns/.htaccess` rewrite targets from `radical-transparency-net.github.io/semantic-assets` to `https://radical-transparency.net/semantic-assets` (avoiding double redirect), evaluate adding `Access-Control-Expose-Headers: Link`, and open upstream PR to `perma-id/w3id.org`.
- [ ] **Stage clean `_site/` artifact in `semantic-assets`:** Refine `semantic-assets/.github/workflows/build-and-deploy.yml` to upload only web deliverables (`_site/` + `.nojekyll`), excluding `Makefile`, `scripts/`, and `.agents/`.
- [ ] **Complete `RT-P06` root dogfooding on `radical-transparency.net`:** Add `public/sitemap-index.xml` and `public/robots.txt` on the root portal pointing to `https://radical-transparency.net/semantic-assets/sitemap-semantic-assets.xml` (and future sitemaps for `spec-linkset-usage-patterns`).

---

## Workstream 3: Cross-Organizational Alignment & Feedback Incorporation

See full alignment dossier in `.cape/context/2026-11-26-external-alignment-dossier.md`.

- [ ] **Audit gaps & extensions:** Compare partner mechanisms against `RT-P01`–`RT-P10` (OGC `/conformance` + `26-021`, CDIF `cdifbook#14`/`#15` & `profile` parameter, Signposting `signmaps` XMLNS / `RT-P04` / `rel="service-doc"`, ODIS sitemaps, FIP, DSSC/SIMPL).
- [ ] **Track external feedback:** Record technical review comments from Cyrielle, OGC, CDIF, and Signposting contacts (logging semantics-changing outcomes as `.cape/evolution/` entries).
- [ ] **Incorporate accepted revisions:** Update ReSpec Markdown/SVG diagrams accordingly; evaluate documenting `Access-Control-Expose-Headers: Link` in `RT-P03`.

---

## Workstream 4: Formal Publication & Persistent Archiving (`RT-P09` Dogfooding)

- [ ] **Zenodo release (`spec-linkset-usage-patterns`):** Add complete `CITATION.cff` metadata, tag a release of `RT-P01`–`RT-P10` (Markdown, SVGs, ReSpec snapshot), and archive on **Zenodo** to mint a persistent versioned DOI.
- [ ] **Cite & cross-link:** Embed the Zenodo DOI and `RT-P09` version navigation links across `spec-linkset-usage-patterns`, `semantic-assets`, and `radical-transparency.net`.

---

## Workstream 5: Strategic Horizons, RT × AI Benchmark & Tooling Triage

Captured without premature filtering in `.cape/ambition/2026-11-26-strategic-ideas-and-ai-reality-check.md` for upcoming prioritization:

- [ ] **Triage & scope next sprint:** Prioritize across the **RT × AI `Quantify` A/B benchmark** (measuring accuracy, hallucination reduction, latency, and token savings), **RT-MCP Bridge** (`wrx` + `grmp` exposed as MCP tools), **RT-Core 5-minute starter profile**, **online inspector/validator**, **non-RDF profile examples** (STAC, Croissant, Frictionless, GeoParquet), and companion tools/notes (`cpurr`, `grmp`, `stitch`, `rdf-webcomponents`, `RT-D14`–`D16`).
