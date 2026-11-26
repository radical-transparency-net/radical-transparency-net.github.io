# External Alignment Dossier & Foundational Framing

**Date:** 2026-11-26  
**Status:** Active Baseline  
**Summary:** Consolidated external alignment notes (OGC, CDIF, FAIR Signposting, ODIS, EOSC, DSSC/SIMPL, FIP) and foundational adoption arguments migrated from the incubator repository.  

---

## 1. Purpose

This document consolidates external standards alignment hooks, open upstream issues, and foundational adoption arguments originally gathered in `eosc-semantic-interop/if-solutions-proposals` (`alignment-actions/*.md`, `motivation.md`, and `todo-wip-thoughts.md`) prior to incubator graduation.

---

## 2. Partner & Standards Alignment Hooks

### 2.1 Open Geospatial Consortium (OGC)
- **Key tension:** `/conformance` endpoint convention vs. HTTP header/link-relation discovery (`rel="profile"` per RFC 6906 + `rel="linkset"` per RFC 9264 vs. OGC `rel="http://www.opengis.net/def/rel/ogc/1.0/conformance"`).
- **References:**
  - [OGC API — Features / Conformance (`18-062r2`)](https://docs.ogc.org/is/18-062r2/18-062r2.html#toc16)
  - [OGC Technical Paper `26-021`](https://docs.ogc.org/techpaper/26-021.pdf)

### 2.2 CODATA / Cross-Domain Interoperability Framework (CDIF)
- **Alignment questions:**
  - Direction of Profile URI adoption in CDIF profiles.
  - Distinction vs. functional equivalence between media-type `profile` parameter and `rel="profile"` links.
  - Alignment trajectory with CDIF v1.1.
- **Tracked upstream issues:**
  - `Cross-Domain-Interoperability-Framework/cdifbook#14`
  - `Cross-Domain-Interoperability-Framework/cdifbook#15`

### 2.3 FAIR Signposting
- **Alignment questions:**
  - `signmaps` XML namespace choice vs. `xhtml:link` embedding conventions.
  - Design trade-offs around `RT-P04` (*No-Landing-Page Solution*).
  - Profile link-relation choice: `rel="service-doc"` vs. RFC 6906 `rel="profile"`.
  - Pattern gaps in Signposting around APIs, subsetting (`RT-P05`), and multi-variant navigation.
- **Coordination channel:** Academic Signposting contacts (e.g., UGent ecosystem).

### 2.4 Ocean Data and Information System (ODIS / IODE)
- **Alignment hook:** Extending existing ODIS sitemap/Schema.org harvesting workflows with explicit profile hints (`RT-P06`) and lightweight linkset patterns.

### 2.5 EOSC & CEDS / DSSC / SIMPL
- **EOSC channels:** EOSC Interoperability Framework WG / Winter School, EOSC-Marine connections, EOSC Technical Interoperability Group (TIG), and related ecosystem reports.
- **Dataspaces (CEDS / DSSC / SIMPL):** No direct profile-hook specification committed yet; primary bridge runs through SAGE / Green Deal Dataspace contacts toward SIMPL and domain dataspaces.
- **Related standards groups to track:**
  - [W3C Dataspaces Community Group](https://w3c-cg.github.io/dataspaces/)
  - [SDS26](https://dbis.rwth-aachen.de/SDS26/)

### 2.6 FAIR Implementation Profiles (FIP)
- **Complementary scope:** [FIP](https://fip.fair-wizard.com/wizard) captures human-governed, community-declared FAIR enabling resources (including non-automated practices). Radical Transparency complements FIP by expanding automated, transport-layer conformity declaration and harvesting at web scale.

---

## 3. Foundational Framing & Positioning Arguments

- **No-regrets `LVL0` economics:** Because immediate single-actor ROI is modest, adoption must remain near-zero cost ("Maximum Boredom" reuse of existing RFCs). `LVL1` (human-readable profile docs) and `LVL2` (machine-verifiable conformance contracts) illustrate long-term upside without raising entry requirements.
- **Privacy & access-control boundary:** Radical Transparency addresses *how* shared assets are structured and declared, never *what* must be opened. Restricted or personal data remains gated; where accessed or described, declared profiles clarify expectations cleanly.
- **Modest positioning of `rtwl:`:** Keep `rtwl:` positioned as an internal reification/harvester vocabulary (ready when graph persistence of RFC 8288 target attributes is required by `wrx`/`grmp`), rather than presenting a custom RDF ontology as a prerequisite for data producers.
