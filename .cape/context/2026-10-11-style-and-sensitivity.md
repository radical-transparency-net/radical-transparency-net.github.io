# Writing Style, Professional Tone & Sensitivity Guidelines

**Date:** 2026-10-11  
**Target:** `.cape/` documentation, public deliverables, and agent collaboration  
**Status:** Active Policy  

---

## 1. Context & Purpose

The `.cape` framework serves as the shared, persistent narrative for both human contributors and AI agents working on the Radical Transparency ecosystem. Because this repository is a public open-source project hosted on GitHub, all committed content is part of a permanent, publicly readable git history.

This document establishes clear guidelines for writing style, professional framing, security boundaries, and information sensitivity.

---

## 2. Writing Style: Factual, Rigorous & Citable

### Core Principles
1. **Fact-Driven & Precise:** Focus on architecture, protocol semantics, verifiable decisions, and concrete engineering constraints. Avoid speculation, vague promises, and marketing hyperbole.
2. **Zero AI Fluff:** Omit artificial pleasantries ("Certainly!", "Great question!"), excessive adjectives, and patronizing affirmations. Jump directly into the substance of the issue.
3. **Intellectual & Academic Rigor:**
   - Preserve accurate technical attributions and citations (e.g., IETF RFC numbers, W3C Recommendations, Anscombe 1959 for Wittgenstein's sunrise anecdote).
   - Adhere strictly to formal protocol terminology (e.g., distinguishing semantic profile composition `schema:hasPart` from structural hierarchy `rel="collection"` / `rel="item"`).
4. **Language Policy:**
   - **Default Language (Strictly English):** English is the default language across all documentation, code comments, pull requests, issues, and `.cape/` documents. Because the team, European partners (EOSC, SAGE, DSSC), and the broader open-science community interact here, everything written into the repository must be in English.
   - **Conversational Exception (Opportunistic Dutch):** Dutch is used opportunistically and strictly during direct, ephemeral chats with some members of the core VLIZ team (e.g. Marc) for matters and brainstorming that do not need to be committed or shared further with the wider team.

---

## 3. Security & Zero-Trust Boundaries

As a public repository:
* **Zero Credentials / Tokens:** NEVER commit secrets, API keys, personal access tokens (PATs), webhook signing secrets, or private certificates into any branch or document under `.cape/` or elsewhere.
* **Internal URLs & Infrastructures:** Do not leak non-public IP addresses, internal VPN endpoints, or staging credentials.
* **Environment Variables:** All deployment secrets must remain strictly managed through GitHub Repository Secrets or local `.env` files explicitly covered by `.gitignore`.

---

## 4. Sensitivity & Personal Profiling

### Public vs. Private Framing
* **Team Roles & Expertise (`2026-10-09-team-roles.md`):** Focus on domain expertise, organizational roles (e.g., Data Engineer, Project Manager, Lead Architect), technical contributions, and objective collaboration preferences.
* **Respectful & Constructive Content:** Maintain an inclusive, professional standard suitable for public review by consortium partners (EOSC, SAGE, DSSC, OGC) and external contributors.
* **Personal Prompting & Quirks:** Detailed personal prompt-engineering guides, intimate behavioral reflections, or internal organizational dynamics belong in local developer tooling (e.g., local IDE configurations `~/.gemini/config`, private system prompts, or git-ignored local rules), **not** in permanent public git commits. Additionally we've excluded from git (through `.gitignore`) any files matching `.agents/local/**` and `.agents/rules/local-*` allowing for people to also express personal agent directives and keep them local.

---

## 5. File Naming & Organization Conventions

* **Strict Kebab-Case with Date Prefix:** All documents within `.cape/{context|ambition|plan|evolution}/` must follow the format:
  ```text
  YYYY-MM-DD-<topic-in-kebab-case>.md
  ```
* **No Spaces in File Paths:** Avoid whitespace in filenames to guarantee seamless CLI, git, and web linking traversal.
* **Category Separation:**
  * `context/`: Background knowledge, architecture, tooling, and team conventions.
  * `ambition/`: Strategic goals, roadmap visions, and stakeholder personas.
  * `plan/`: Concrete, time-bound, actionable task lists and scaffolding records.
  * `evolution/`: Retrospectives, milestone logs, and architectural decision records (ADRs).
