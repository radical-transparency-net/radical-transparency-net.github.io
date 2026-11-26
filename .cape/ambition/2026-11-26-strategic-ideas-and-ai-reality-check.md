# Strategic Ideas, External Reality Check & RT × AI Roadmap

**Date:** 2026-11-26  
**Status:** Open Backlog (Unprioritized)  
**Summary:** Unprioritized strategic ideas, external reality-check observations, RT x AI empirical benchmark concept, MCP complementarity, web infrastructure hardening (CORS), and adoption ergonomics for future triage.  

---

## 1. Purpose

This document captures external reality-check critiques, unprioritized engineering ideas, and migrated incubator tooling concepts in one place for later triage and prioritization.

---

## 2. External Reality-Check Observations (Adoption Risks to Counter)

1. **Agents strip HTTP headers today:** Standard HTTP fetch wrappers in most LLM agent frameworks return body/markdown only and discard `Link` headers. Selling RT on the premise that "agents already read HTTP `Link` headers" fails in practice unless agents are equipped with header- and linkset-aware tools.
2. **Mainstream LLM capability vs. real agent bottlenecks:** LLMs are strong at ad-hoc interpretation of single messy JSON/CSV payloads. The decisive RT advantage is **scale, determinism, and accountability**—preventing silent unit/CRS/schema errors when agents orchestrate across thousands of federated sources and must verify contract compliance programmatically.
3. **Static hosting friction:** Object stores and static hosts (GitHub Pages, S3, R2, Zenodo, Dataverse) rarely support per-resource HTTP `Link` headers or `Accept` content negotiation without a gateway/proxy layer (such as `w3id.org`). File-, HTML `<link>`-, and sitemap-based patterns (`RT-P06`, `RT-P10`) remain vital low-friction paths.
4. **Risk of a `LVL0` URI graveyard:** Without a small shared corpus of machine-verifiable `LVL2` profiles (`cpurr`) and immediate inspection feedback, URI-only declarations yield no immediate reward to data providers.
5. **Mainstream non-Semantic-Web formats:** Outside academic Linked Data circles, developer adoption clusters around **STAC**, **MLCommons Croissant**, **Frictionless Data Packages**, **GeoParquet/Iceberg**, and **OpenAPI**. Framing RT around Turtle-only examples risks pigeonholing the effort.

---

## 3. RT × AI Synergy & Empirical `Quantify` Benchmark

- **Guiding premise:** **RT is not competing against AI — RT + AI reinforces both sides.**
  - *AI builds the RT layer:* AI coding agents accelerate authoring vocabularies, `.htaccess` conneg rules, templates, sitemaps, and validation tooling.
  - *RT makes AI agents better and cheaper:* When AI agents can inspect transport-layer linksets and verifiable profiles instead of blind HTML/payload scraping, they should achieve **higher correctness (fewer hallucinations), lower latency, and lower token usage**.
- **Proposed `Quantify` A/B benchmark experiment:**
  - Compare **Baseline Agent** (standard body-only fetch/scraping) vs. **RT-Enabled Agent** (via `wrx` / MCP bridge exposing `Link` headers, RFC 9264 linksets, and resolved profile contracts) over 20–50 real marine/EOSC datasets (e.g., WoRMS, MarineInfo, Zenodo, ODIS).
  - Measure task completion accuracy, hallucination/unit-mismatch rate, total HTTP round-trips, wall-clock execution time, and token consumption.

---

## 4. Complementary Architecture with MCP (Model Context Protocol)

- **Clean layer separation (do not compete with MCP):**
  - **MCP** standardizes how AI agents invoke tools, read local/API contexts, and discover server capabilities at the agent runtime interface.
  - **Radical Transparency** standardizes how any open-web resource, dataset, or API declares structural/semantic conformity (`RT-P01`–`RT-P10`) independently of specific agent frameworks.
- **Concrete integration paths:**
  - **RT-MCP Bridge Server:** Wrap `wrx` (discovery) and `grmp` (conformance checking) as MCP tools so off-the-shelf AI agents gain direct access to HTTP `Link` headers, linksets, and profile validation without modifying core agent harnesses.
  - **Profiling MCP endpoints & catalogs:** MCP servers and host API catalogs can themselves expose conformity profiles (`RT-P01`) and `/.well-known/api-catalog` (`RFC 9727`) metadata.

---

## 5. Web Infrastructure Hardening

- **CORS exposure of `Link` headers:** Browser `fetch()` blocks cross-origin JavaScript access to `Link` headers unless the origin sends `Access-Control-Expose-Headers: Link`.
  - Evaluate adding `Access-Control-Expose-Headers: Link` in `w3id.org/ids/rt/ns/.htaccess` (and future `/rt/` rules).
  - Document `Access-Control-Expose-Headers: Link` in `RT-P03` / `spec-linkset-usage-patterns` so browser-based linkset clients (`webmap-ER`, `stitch`) do not hit silent CORS failures.
- **Public artifact hygiene in CI deploys:** Update `semantic-assets/.github/workflows/build-and-deploy.yml` to stage only built web outputs into `_site/` (with `.nojekyll`), keeping `Makefile`, `scripts/`, and `.agents/` out of published GitHub Pages roots.

---

## 6. Adoption Ergonomics, Mainstream Examples & Tooling Roadmap

- **"RT-Core (5-Minute Adoption)" entry subset:** Present a minimal starter recipe (e.g., `RT-P01` + `RT-P06` or `RT-P10`) as the default onboarding gate, framing the rest of `RT-P01`–`RT-P10` as optional specialized patterns.
- **Non-RDF worked examples:** Add concrete pattern examples declaring STAC, MLCommons Croissant, Frictionless Data Packages, GeoParquet, and OpenAPI URIs as profiles over plain CSV/JSON/NetCDF/Parquet assets.
- **Live Instant-Gratification Inspector (`radical-transparency.net`):** Hosted UI powered by `wrx` + early `grmp` checks: enter any URL → view discovered linksets and profile declarations, protocol diagnostics (e.g., missing `Vary: Accept`, missing `Access-Control-Expose-Headers: Link`), and public dataset scorecards.
- **Downstream tools & companion notes (migrated from incubator `todo-wip-thoughts.md`):**
  - `cpurr`: lightweight GitHub-backed registry/catalog of reusable profile URIs and `LVL2` descriptors.
  - `grmp`: automated conformance testing, verification, and longitudinal monitoring (`Verify` + `Quantify`).
  - `stitch`: browser extension visualizing webmaps, RDF assertions, and linkset links interactively.
  - `rdf-webcomponents`: frontend components generating decoupled LOD-first UX affordances.
  - Companion technical notes (backlog): `RT-D14` (Mapping & RDF Uplifting across headers/HTML/triples), `RT-D15` (Profile Registry & Description Vision), `RT-D16` (RFC Anthology). *(Note: `RT-DPP` Position Paper is completed and published in `vliz-be-opsci/papers`.)*
