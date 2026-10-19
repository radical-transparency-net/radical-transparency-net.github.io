# ADR & Retrospective: Harmonizing .CAPE with Superpowers Multi-Agent Architecture

**Date:** 2026-10-19  
**Status:** Complete  
**Category:** Evolution / ADR  
**Summary:** Harmonizes the .cape persistent memory ontology with Superpowers execution engine, automated indexing, and root agent entrypoints.  

---

## 1. Context & Motivation

Pull Request [#1](https://github.com/radical-transparency-net/radical-transparency-net.github.io/pull/1) created the `.cape` (Context, Ambition, Plan, Evolution) framework to solve the ephemeral nature of AI chat sessions and build a persistent, shared narrative across human contributors and AI coding assistants. In commit `9b514a9`, Marc Portier migrated Cedric's early Vite portal design specs and scaffolding plans from `docs/superpowers/` directly into `.cape/context/` and `.cape/plan/`, deleting the `docs/` folder to eliminate duplicate truth.

However, standardizing on `.cape` exposed operational friction points when operating with agentic workflows (Superpowers):
1. **Path Divergence:** Superpowers skills defaulted to `docs/superpowers/specs/` and `docs/superpowers/plans/`. Without explicit realignment, agents would attempt to recreate the deleted `docs/` folder.
2. **Noise vs. Signal (Macro vs. Micro Plans):** `.cape/plan/` holds macro-migration roadmaps (e.g., linksets, repository taxonomy). If every granular, ephemeral TDD task plan (5–10 unit testing steps) were dumped into `.cape/plan/index.md`, the index would suffer from table bloat and git merge conflicts.
3. **Multi-Harness Agnosticism:** Contributors use different agent environments (Antigravity IDE / `agy`, Claude Code, Gemini CLI, Cursor, Codex). The repository lacked a universal, harness-agnostic entrypoint to instruct all agents to respect `.cape` conventions.
4. **Task Granularity Ambiguity:** Unclear whether `.cape` required a document for every minor change.

---

## 2. Key Decisions

### Decision 1: Separation of Engine vs. Ontology
- **Superpowers = Execution Engine:** Manages how agents triage tasks, execute TDD cycles, review code, and verify builds before PRs.
- **`.cape` = Persistent Shared Memory:** Houses the authoritative, version-controlled repository knowledge across human team members and agents.

### Decision 2: Proportional Gating (Zero Overhead for Small Tasks)
- **Spikes & Bounded Changes:** Resolved directly in chat through TDD with **zero `.cape` overhead**. Everyday small bugfixes or minor component edits do not pollute `.cape/` with transient files or cause `index.md` merge conflicts.
- **Architectural Initiatives:** Full `/brainstorming` produces a formal design spec in `.cape/context/YYYY-MM-DD-<topic>-design.md`, followed by an implementation plan in `.cape/plan/YYYY-MM-DD-<feature>-plan.md`.

### Decision 3: Single Agnostic Root Entrypoint (`AGENTS.md`)
- Added a centralized `AGENTS.md` (with transparent pointers in `CLAUDE.md` and `GEMINI.md`) so **any** agent immediately discovers:
  1. Mandatory baseline context (`.cape/context/` architecture, repo structure, and style/sensitivity guidelines).
  2. The `.cape` file routing conventions (specs to `context/`, plans to `plan/`, retrospectives to `evolution/`).
  3. Pre-flight verification expectations via `npm run verify` (`pr-preparation`).

### Decision 4: Deterministic Indexing Tooling (`npm run cape:index`)
- Added `scripts/update-cape-index.mjs` that regenerates `.cape/*/index.md` tables in reverse chronological order automatically. Agents and developers run `npm run cape:index` (or invoke `cape-keeper`) to keep all indices synchronized without manual markdown formatting errors.
- Wired `npm run verify` to execute `cape:index`, TypeScript typecheck (`tsc -b`), and Vite bundle build (`vite build`).

### Decision 5: Shared Skills Toolkit Committed
- Realigned paths in `brainstorming/SKILL.md` and `writing-plans/SKILL.md` to point to `.cape/`.
- Committed the curated `.agents/skills/` toolkit to git so all team members have immediate access to identical capabilities.

---

## 3. Consequences & Outcomes

- **Zero Dual Truth:** `docs/superpowers/` is eliminated, and all durable architectural decisions live natively in `.cape/`.
- **Zero Merge Conflict Indexing:** Table generation is deterministic and automated via `npm run cape:index`.
- **Fast Agent Velocity:** Bounded tasks proceed with rapid TDD without documenting bureaucracy.
