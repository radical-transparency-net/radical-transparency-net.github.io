# .CAPE + Superpowers Multi-Agent Collaboration Implementation Plan

**Date:** 2026-10-19  
**Status:** Complete  
**Summary:** Implementation plan for .cape and superpowers integration, deterministic indexing, and universal agent directives.  

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Harmonized Protocol between `.cape` and the Superpowers agent ecosystem: build a deterministic CLI indexer (`npm run cape:index`), establish the universal root agent entrypoint (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`), align skill path defaults, record the evolutionary ADR, and verify the entire pre-flight pipeline.

**Architecture:** A lightweight Node.js script parses metadata from all `.cape/{context,ambition,plan,evolution}/*.md` files and deterministic Markdown tables sorted descending by date into their respective `index.md` files. Universal agent directives at the repository root direct all AI harnesses to `.cape/context/` before proposing changes, while Superpowers skills route specs to `.cape/context/` and plans to `.cape/plan/`.

**Tech Stack:** Node.js (ESM), TypeScript, Vite, Markdown, Git, Bash / PowerShell.

**Spec:** [`.cape/context/2026-10-19-cape-superpowers-integration-design.md`](../context/2026-10-19-cape-superpowers-integration-design.md)

## Global Constraints

- Zero external npm dependencies added for `.cape` indexing (pure standard library Node.js `fs`, `path`).
- Scripts must run cleanly across both Windows and POSIX environments.
- `npm run verify` must pass with zero TypeScript errors (`tsc -b`), successful Vite bundle build (`vite build`), and clean index synchronization.
- Spikes and Bounded tasks remain zero-overhead (no `.cape` file creation).
- All `.agents/skills/` modifications must maintain compatibility with Antigravity, Claude Code, Gemini CLI, and Cursor.

## Review Focus

1. **Deterministic Index Ordering:** Files with the same date prefix (or varying date formats) must sort consistently without flipping table rows on successive runs.
2. **Preservation of Static Index Introductions:** Generating tables in `index.md` must preserve the top narrative description in each category folder.
3. **Cross-Platform Path Normalization:** Paths in `index.md` markdown links must always use forward slashes (`/`), even when run on Windows.
4. **Agent Instruction Non-Interference:** `AGENTS.md` must clearly state that Bounded changes do not require `.cape` files, avoiding agent analysis paralysis.
5. **Git Hygiene & Skill Tracking:** All 15 Superpowers skills must be staged cleanly without capturing local ignore patterns (`.agents/rules/local-*`).

---

### Task 1: Deterministic Indexing Script (`scripts/update-cape-index.mjs`)

**Files:**
- Create: `scripts/update-cape-index.mjs`
- Test: `node scripts/update-cape-index.mjs`

**Interfaces:**
- Consumes: `.cape/{context,ambition,plan,evolution}/*.md` files.
- Produces: Updated `.cape/{context,ambition,plan,evolution}/index.md` files with sorted Markdown tables.

- [x] **Step 1: Write `scripts/update-cape-index.mjs`**

Implement ESM script that:
1. Iterates over the 4 categories: `context`, `ambition`, `plan`, `evolution`.
2. Reads existing `index.md` to extract everything before the table marker (`| Date | Document |` or `| Date |`).
3. Reads all non-index `.md` files matching `YYYY-MM-DD-*.md`.
4. Parses `# <Title>` (or first heading), `**Status:**`, `**Category:**`, and extracts a 1-line summary.
5. Sorts files descending by date prefix.
6. Writes out the formatted Markdown table with standard columns:
   `| Date | Document | Summary | Status / Category |`
7. Normalizes link paths with forward slashes.

- [x] **Step 2: Run script and inspect generated `index.md` files**

Run: `node scripts/update-cape-index.mjs`  
Expected: All 4 `index.md` files updated with sorted tables and clean column padding.

- [x] **Step 3: Commit indexing script**

```bash
git add scripts/update-cape-index.mjs
git commit -m "feat(cape): add deterministic index generator script"
```

---

### Task 2: Package.json Scripts & Verification Pipeline

**Files:**
- Modify: `package.json:10-25`

**Interfaces:**
- Consumes: `scripts/update-cape-index.mjs`
- Produces: `npm run cape:index` and updated `npm run verify`

- [x] **Step 1: Add `cape:index` and `verify` scripts to `package.json`**

Add scripts:
- `"cape:index": "node scripts/update-cape-index.mjs"`
- `"verify": "npm run cape:index && tsc -b && vite build"`

- [x] **Step 2: Run `npm run verify` to test build and index generation**

Run: `npm run verify`  
Expected: TypeScript compiles cleanly (`tsc -b`), Vite production build completes in `dist/`, and `.cape` indices are regenerated.

- [x] **Step 3: Commit `package.json` updates**

```bash
git add package.json
git commit -m "chore: add cape:index and verify scripts to package.json"
```

---

### Task 3: Universal Root Agent Directives (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`)

**Files:**
- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Create: `GEMINI.md`

**Interfaces:**
- Consumes: Specifications from `.cape/context/2026-10-19-cape-superpowers-integration-design.md`
- Produces: Cross-harness configuration directing all agents to `.cape/context/`, `.cape/plan/`, and zero-overhead bounded task rules.

- [x] **Step 1: Create `AGENTS.md`**

Include:
1. **Pre-flight Ingestion:** Mandatory reading of `.cape/context/2026-10-09-architecture.md`, `2026-10-09-repo-structure.md`, and `2026-10-11-style-and-sensitivity.md`.
2. **Proportional Gating:** Spikes & Bounded tasks resolved in chat with TDD without `.cape` docs; Architectural tasks require full `/brainstorming` and `.cape` artifacts.
3. **Routing Standards:** Design specs $\rightarrow$ `.cape/context/`, plans $\rightarrow$ `.cape/plan/`, retrospectives $\rightarrow$ `.cape/evolution/`.
4. **Verification Protocol:** Mandatory `npm run verify` before PR submission.

- [x] **Step 2: Create `CLAUDE.md` and `GEMINI.md` with transparent pointers to `AGENTS.md`**

Ensure Claude Code and Gemini CLI automatically load `AGENTS.md`.

- [x] **Step 3: Commit root agent instruction files**

```bash
git add AGENTS.md CLAUDE.md GEMINI.md
git commit -m "feat(agents): add universal harness-agnostic agent directives"
```

---

### Task 4: Superpowers Skills Path Realignment & Tracking

**Files:**
- Modify: `.agents/skills/brainstorming/SKILL.md:130-140`
- Modify: `.agents/skills/writing-plans/SKILL.md:15-20`
- Modify: `.agents/skills/cape-keeper/SKILL.md:40-60`
- Track: All untracked skills in `.agents/skills/`

**Interfaces:**
- Consumes: `.cape` path conventions.
- Produces: Ready-to-run Superpowers skills pointing to `.cape/` out of the box.

- [x] **Step 1: Update `brainstorming/SKILL.md` default spec path**

Replace `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md` with `.cape/context/YYYY-MM-DD-<topic>-design.md`.

- [x] **Step 2: Update `writing-plans/SKILL.md` default plan path**

Replace `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md` with `.cape/plan/YYYY-MM-DD-<feature-name>.md`.

- [x] **Step 3: Update `cape-keeper/SKILL.md` to run `npm run cape:index`**

Instruct agents to run `npm run cape:index` rather than manual markdown table surgery.

- [x] **Step 4: Stage and commit all skills in `.agents/skills/`**

Verify git status excludes `.agents/rules/local-*` and commit all skills.

```bash
git add .agents/skills/
git commit -m "feat(skills): realign superpowers skills to .cape and track shared toolkit"
```

---

### Task 5: Record Architectural Decision Record in `.cape/evolution/`

**Files:**
- Create: `.cape/evolution/2026-10-19-cape-superpowers-integration.md`

**Interfaces:**
- Consumes: Brainstorming rationale and decisions.
- Produces: Permanent ADR documenting why and how Superpowers and `.cape` converged.

- [x] **Step 1: Author `.cape/evolution/2026-10-19-cape-superpowers-integration.md`**

Document:
- Context of PR #1 and commit `9b514a9`.
- Decision: Superpowers as Engine, `.cape` as Memory.
- Proportional task sizing rationale (zero `.cape` overhead for bounded tasks).
- Tooling decision: `scripts/update-cape-index.mjs`.

- [x] **Step 2: Regenerate indices**

Run: `npm run cape:index`  
Expected: `.cape/evolution/index.md` captures the new record.

- [x] **Step 3: Commit evolution record and index updates**

```bash
git add .cape/evolution/ .cape/context/index.md .cape/plan/index.md
git commit -m "doc(evolution): record cape and superpowers integration ADR"
```

---

### Task 6: Full Verification & GitHub PR #1 Comment Preparation

**Files:**
- Reference: `C:\Users\cedricd\.gemini\antigravity-ide\brain\562cf160-0ced-4e93-97c5-cdbc96aa0746\pr_1_update_and_alignment_log.md`

- [ ] **Step 1: Run full verification suite**

Run: `npm run verify`  
Expected: Clean exit code 0, all TypeScript types checked, bundle created, indices in sync.

- [ ] **Step 2: Verify git status and branch cleanliness**

Run: `git status`  
Expected: Branch `feat/cape-init` is clean with all commits organized and no unintended files.

- [ ] **Step 3: Review PR comment draft in side artifact**

Review `pr_1_update_and_alignment_log.md` and present final instructions/summary to post on GitHub PR #1.
