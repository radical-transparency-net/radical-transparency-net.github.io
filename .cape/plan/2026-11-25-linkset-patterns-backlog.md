# Linkset Usage Patterns (RT-P01 to RT-P10): Migration, Alignment & Publication Backlog

**Date:** 2026-11-25  
**Status:** Planned  
**Summary:** Actionable backlog for migrating finalized RT patterns from the incubator repo, hosting the rtwl vocabulary, tracking OGC/CDIF/Signposting alignment feedback, and publishing a Zenodo release.  

---

## Context & Preconditions

The foundational Linkset Usage Patterns suite (`00-linkset-patterns.md` through `10-detached-local-storage.md`, SVG/PNG diagrams, and the PDF build toolchain including `mkpdf.sh` and `table-widths.lua`) has been consolidated and committed in the incubator repository (`eosc-semantic-interop/if-solutions-proposals`, under `proposals/radical-transparency/linkset-usage-patterns/`).

Once the `feat/cape-init` Pull Request is reviewed by Marc and Cedric and merged into `main`, the workstreams below transition the patterns into `radical-transparency-net.github.io` and drive external alignment and formal publication.

---

## Workstream 1: Portal Migration (`if-solutions-proposals` $\rightarrow$ `radical-transparency-net.github.io`)

**Dependency:** `feat/cape-init` merged into `main` (per [Project Setup & Next Steps](2026-10-09-setup.md)).

- [ ] **Transfer canonical pattern suite:** Move `00-linkset-patterns.md` through `10-detached-local-storage.md`, `00-profile-subjects.svg`/`.png`, `01`–`09` SVG/PNG diagrams, and `master-links.md` from `eosc-semantic-interop/if-solutions-proposals` into this repository.
- [ ] **Integrate build & PDF pipeline:** Wire `mkln.sh`, `mkpdf.sh`, and `table-widths.lua` into the portal build/release workflow (producing both individual pattern PDFs and `RT-linkset-usage-patterns-complete.pdf`, plus web-accessible HTML/Markdown routes as planned in `2026-10-09-setup.md`).
- [ ] **Connect portal data layer:** Reference the migrated pattern paths and bundle outputs cleanly from `src/data/*.ts` without breaking SPA `HashRouter` navigation.
- [ ] **Deprecate incubator copy:** Replace the moved pattern files in `eosc-semantic-interop/if-solutions-proposals` with a redirect/deprecation notice pointing to `radical-transparency-net.github.io`.
- [ ] **Leave obsolete/deferred items behind:** Keep `conformity-profiles.md` (marked obsolete) out of the migration, and keep `RT-P11` (API-UI & Aggregate Content Parts) and `RT-P12` (Web Manifests) parked until a later iteration.

**Done Criteria:** All 11 active pattern documents and generated PDFs live canonically in `radical-transparency-net.github.io`, `npm run verify` passes, and the incubator repo points cleanly to the new canonical home.

---

## Workstream 2: Host `rtwl:` Reification Vocabulary (`https://radical-transparency.net/ns/weblink#`)

**Dependency:** Workstream 1 portal structure / static hosting under `public/` (or dedicated `ns/weblink` route).

- [ ] **Author formal vocabulary:** Write the lightweight RDF/RDFS vocabulary file defining the terms introduced in Section 5 of `00-linkset-patterns.md`:
  - Classes: `rtwl:WebLink`, `rtwl:TargetAttribute`
  - Properties: `rtwl:anchor`, `rtwl:rel`, `rtwl:href`, `rtwl:attribute`, `rtwl:key`, `rtwl:value`
- [ ] **Publish dereferenceable representations:** Serve Turtle (`text/turtle`), JSON-LD (`application/ld+json`), and human-readable HTML (`text/html`) at `https://radical-transparency.net/ns/weblink` (including `RT-P03` content-negotiation links / variant files compatible with static GitHub Pages hosting).
- [ ] **Self-declare conformity (`RT-P01`):** Ensure the vocabulary resource declares its own profile/metadata links cleanly.

**Done Criteria:** Fetching `https://radical-transparency.net/ns/weblink#` resolves cleanly to machine-actionable RDF and human documentation matching the examples in `00-linkset-patterns.md`.

---

## Workstream 3: Cross-Organizational Alignment & Feedback Incorporation

**Scope:** Active alignment loop with **OGC**, **CODATA / CDIF**, and **FAIR Signposting** (feedback already solicited; `RT-P11`/`RT-P12` remain parked).

- [ ] **Audit gaps & extensions:** Systematically map concrete misalignments, overlaps, and potential extension points between the RT patterns and partner specifications (e.g., OGC `/conformance` vs. RFC 6906 `rel="profile"` + RFC 9264 `rel="linkset"`, CDIF profile descriptors, Signposting `signmaps` vs. `RT-P06`/`RT-P07`) as structured input for alignment discussions.
- [ ] **Track external feedback:** Collect and log technical review comments from OGC, CDIF, and FAIR Signposting contacts (recording architectural decisions as `.cape/evolution/` entries when they change pattern semantics).
- [ ] **Incorporate accepted revisions:** Update the affected pattern Markdown/SVG/PDF sources where external review identifies ambiguities, edge cases, or consensus alignments.

**Done Criteria:** Gap analysis notes exist to guide partner discussions, and external feedback from OGC, CDIF, and Signposting is triaged and reflected in an updated pattern revision.

---

## Workstream 4: Formal Publication & Persistent Archiving

**Dependency:** Post-feedback revision from Workstream 3 (or frozen v1.0 release snapshot).

- [ ] **Zenodo release (baseline):** Package a tagged release of the pattern suite (`00`–`10` Markdown, SVGs/PNGs, and `RT-linkset-usage-patterns-complete.pdf`) with complete author/contributor metadata (`CITATION.cff`) and archive it on **Zenodo** to mint a persistent release DOI (`RT-P09` practice applied to our own spec).
- [ ] **Cite & cross-link:** Add the minted Zenodo DOI to `00-linkset-patterns.md`, the portal `src/data/` entries, and any `cite-as` linksets published by `radical-transparency.net`.
- [ ] **Evaluate secondary formal venues:** Assess whether a companion technical note or standards-track submission (beyond Zenodo) adds value once alignment talks mature.

**Done Criteria:** A citable, versioned Zenodo DOI exists for the Linkset Usage Patterns suite and is linked from the portal.
