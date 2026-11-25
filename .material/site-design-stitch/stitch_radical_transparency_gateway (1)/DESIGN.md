---
name: Open Science Interop
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  badge-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the ethos of open science infrastructure: authoritative, rigorously engineered, and uncompromisingly clear. Designed for the European Open Science Cloud (EOSC) Semantic Interoperability ecosystem, the UI prioritizes semantic density and legibility over ornamentation, evoking institutional trust, technical competence, and modern European research sovereignty.

The design movement blends **Modern Academic Engineering** with **Systematic Minimalism**:
- **High-Fidelity Structure:** Grid-aligned, precise architectural framing that communicates data integrity, schema consistency, and FAIR (Findable, Accessible, Interoperable, Reusable) principles.
- **Radical Transparency:** Surfaces use crisp outlines, calibrated contrast ratios, and purposeful semantic accents rather than decorative effects. Code, metadata, and URIs are treated as primary visual citizens alongside high-level summaries.
- **Audiences Served:** Calibrated to switch fluidly between high-level policy or research triage (for principal investigators, EU policy officers, and educators) and syntax-level machine validation (for ontology engineers, data stewards, and backend developers).

## Colors

The color palette is built around an authoritative deep slate base, driven by high-energy cobalt and teal accents to denote computational execution, semantic validation, and transparency states.

### Core Roles
- **Primary (`#0F172A` - Slate 900):** Represents structural authority, dominant headers, primary interactive states, and core navigational anchors.
- **Secondary (`#2563EB` - Royal Cobalt):** Action driver for hyperlinked persistent identifiers (DOIs, ORCIDs, PURLs), active states, graph nodes, and interactive controls. Paired with Indigo (`#4F46E5`) for state transitions and federated network elements.
- **Tertiary (`#0D9488` - Deep Teal):** The "Radical Transparency" and verification accent. Signifies cryptographic validation, schema compliance, open-access status, and clean health indicators.
- **Neutral (`#64748B` - Slate 500):** Secondary metadata, inactive indicators, dimensional labels, and schema property keys.

### Surface & Border Hierarchy
- **Canvas Base:** `#F8FAFC` (Slate 50) establishes a clean, glare-free research backdrop.
- **Surface Elevation 1 (Cards, Tables):** `#FFFFFF` (Pure White) with definitive `#E2E8F0` (Slate 200) structural boundaries.
- **Surface Elevation 2 (Code/Inspector Panels):** `#0F172A` (Slate 900) or `#F1F5F9` (Slate 100) depending on semantic context.
- **Semantic Feedback:** Success/Verified (`#10B981`), Warning/Deprecated (`#F59E0B`), Error/Schema Violation (`#EF4444`).

## Typography

The typographic strategy balances humanistic, geometric prose with strict, monospaced tabular data display.

- **Primary Typeface (Plus Jakarta Sans):** Selected for its geometric clarity, contemporary vertical proportions, and legible stroke terminals. It renders complex multi-syllabic academic and technical terminology with high readability at all sizes.
- **Monospace Typeface (JetBrains Mono):** Dedicated to semantic interoperability entities: RDF triplets, OWL schemas, SPARQL queries, JSON-LD context payloads, and hash values. Used at micro sizes (`10px`–`13px`) with elevated letter tracking to maintain legibility.
- **Proportion & Optical Tracking:** Negative tracking is applied to headers above 20px (`-0.01em` to `-0.03em`) to prevent visual drift on wide displays. Monospace tokens and badges use uppercase expanded tracking (`0.08em`) for rapid categorization scanning.

## Layout & Spacing

The layout philosophy follows a **Mathematical Strict Grid** anchored to an 8px base rhythm (with 4px micro-subdivisions for dense data surfaces).

### Grid Structure
- **Desktop (≥ 1280px):** 12-column responsive layout, capped at a maximum width of `1440px`. Column gutters are fixed at `2rem` (`32px`) with outer canvas margins of `3rem` (`48px`). Complex metadata inspectors utilize an asymmetric 3:9 or 8:4 column split.
- **Tablet (768px – 1279px):** 8-column fluid layout with `1.5rem` (`24px`) gutters and `2rem` (`32px`) margins. Sidebar filters collapse into an overlay sheet or sticky top horizontal bar.
- **Mobile (< 768px):** 4-column layout with `1rem` (`16px`) gutters and `1rem` (`16px`) margins. Multi-metric comparison matrices collapse into vertically stacked, horizontal-scrolling semantic cards.

### Spacing Application
- Component internal padding strictly utilizes `space-sm` (`8px`) for compact badges and inputs, `space-md` (`16px`) for standard cards and table cells, and `space-lg` (`24px`) for elevated container boundaries.
- Section spacing between disparate research domains or interoperability matrices requires `space-xl` (`40px`) to prevent visual crowding.

## Elevation & Depth

This design system avoids exaggerated, diffused drop shadows to prevent an ungrounded or casual aesthetic. Visual depth is established via **Architectural Tonal Layering** and **Low-Contrast Structural Outlines**.

- **Level 0 (Canvas):** Tone `#F8FAFC`. The foundational backdrop.
- **Level 1 (Default Containers & Workspaces):** Surface `#FFFFFF` enclosed by a 1px solid `#E2E8F0` border. No drop shadow is used; structural separation is achieved entirely via border definition and background contrast.
- **Level 2 (Active Focus & Hover Cards):** Surface `#FFFFFF` with a 1px solid `#CBD5E1` border and a crisp, directional micro-shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Sticky Inspectors, Popovers, Flyouts):** Surface `#FFFFFF` enclosed by a 1px solid `#94A3B8` border with focused elevation: `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`.
- **Level 4 (Modals & Critical Epistemic Warnings):** Background backdrop frosted with 4px Gaussian blur (`backdrop-filter: blur(4px)`) over `rgba(15, 23, 42, 0.4)`. The dialog body sits on `#FFFFFF` with a distinct border and high-authority elevation: `0 20px 25px -5px rgba(15, 23, 42, 0.12)`.

## Shapes

The design system employs a **Soft (`1`)** shape language (`4px` / `0.25rem` standard baseline). 

- **Rationale:** Sharp precision denotes computational rigor, high data density, and technical exactitude. Generous border radiuses (pills or large bubbles) degrade information density and soften the authoritative posture needed for EU scientific infrastructure.
- **Base Components (Inputs, Buttons, Badges, Code Snippets):** Rounded to `0.25rem` (`4px`).
- **Cards, Graph Canvases, Modals:** Rounded to `0.5rem` (`8px` - `rounded-lg`).
- **Pill Exception:** Pure circular or pill treatments (`rounded-full`) are strictly reserved for operational health indicators (e.g., status dots, ping monitors) and numerical counters within navigation items.

## Components

### Buttons
- **Primary:** Background `#0F172A`, text `#FFFFFF`, border `1px solid transparent`, border-radius `4px`. Hover state shifts to `#1E293B` with micro-lift. Active state shifts to `#020617`.
- **Secondary / Interop Action:** Background `#2563EB`, text `#FFFFFF`. Hover state `#1D4ED8`. Used exclusively for key semantic actions (e.g., "Resolve SPARQL", "Export FAIR Data").
- **Tertiary / Outline:** Background `transparent`, text `#0F172A`, border `1px solid #CBD5E1`. Hover: background `#F1F5F9`, border `#94A3B8`.
- **Ghost Code Action:** Background `transparent`, text `#64748B`, JetBrains Mono 12px. Hover: background `#F1F5F9`, text `#0F172A`.

### Semantic Badges & Triage Chips
- Compact height (`22px` to `24px`), font: `JetBrains Mono` 10px uppercase, letter spacing `0.08em`.
- **EOSC Interoperable:** Border `1px solid #99F6E4`, background `#F0FDFA`, text `#0D9488`.
- **Schema Validated:** Border `1px solid #A7F3D0`, background `#ECFDF5`, text `#047857`.
- **Federated Node:** Border `1px solid #BFDBFE`, background `#EFF6FF`, text `#1D4ED8`.
- **Draft / In Review:** Border `1px solid #FED7AA`, background `#FFF7ED`, text `#C2410C`.

### Cards & Data Panels
- Surface `#FFFFFF`, border `1px solid #E2E8F0`, padding `1.5rem` (`24px`).
- Structural header bar featuring a bottom divider `1px solid #F1F5F9`, separating metadata context (e.g., schema version, URI) from the payload.
- Hoverable interactive cards transition their border color to `#93C5FD` without layout shift.

### Form Inputs & Query Fields
- **Text Inputs:** Height `40px`, background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, font `Plus Jakarta Sans` 14px. Focus state triggers `1px solid #2563EB` with an accessible box-shadow ring `0 0 0 3px rgba(37, 99, 235, 0.15)`.
- **Code / SPARQL Query Inputs:** Background `#0B132B`, text `#F8FAFC`, font `JetBrains Mono` 13px, border `1px solid #1E293B`. Syntax highlighted via teal, cobalt, and slate tints.

### Checkboxes & Radios
- Size `16px × 16px`, border `1px solid #94A3B8`, border-radius `3px` (checkbox) or `50%` (radio).
- Checked state: background `#2563EB`, border `#2563EB`, with an absolute white icon mark.

### Domain-Specific Components
- **Persistent URI Inspector:** Inline interactive block displaying complete PURLs/DOIs with a dedicated one-click copy button, schema type indicator, and resolving ping status.
- **Triplestore Linkset Matrix:** Tabular interface with zebra rows (`#FFFFFF` to `#F8FAFC`), column dividers in `#E2E8F0`, and monospaced subject-predicate-object alignment.
- **Provenance Breadcrumbs:** Granular navigation showing repository parentage, federation node origin, and git-commit hashes for schema lineage tracking.