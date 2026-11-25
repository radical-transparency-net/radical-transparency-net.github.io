---
name: pr-preparation
description: Enforce a mandatory pre-Pull Request build, test, and verification cycle before pushing branches or opening PRs. Validates TypeScript types, production bundle creation, local preview runtime, git hygiene, and documentation indices.
---

# Pull Request Preparation & Pre-Flight Verification Runbook

Before pushing any feature branch or opening a Pull Request (PR) against `main`, every human contributor and AI agent **MUST** complete and pass this 5-gate verification cycle.

---

## 🚦 The 5 Pre-PR Verification Gates

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    Gate 1    │ ──> │    Gate 2    │ ──> │    Gate 3    │ ──> │    Gate 4    │ ──> │    Gate 5    │
│  Type Check  │     │  Local Smoke │     │ .CAPE Index  │     │ Git & Secret │     │ Standard PR  │
│   & Build    │     │   Runtime    │     │    Audit     │     │   Hygiene    │     │ Description  │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

---

### Gate 1: Type Safety & Production Build

The application must compile with zero TypeScript errors and zero Vite bundling failures.

```bash
# 1. Clean installation check (if dependencies changed)
npm ci || npm install

# 2. Type-check and build production bundle
npm run build
```

**Pass Criteria:**
* `tsc -b` exits with code 0 (zero type errors).
* Vite outputs the optimized bundle in `dist/` with zero warnings.

---

### Gate 2: Local Preview & Route Smoke Test

Verify that the compiled production bundle actually boots and runs without client-side runtime or routing crashes.

```bash
# Start local preview server on a dedicated port
npx vite preview --port 4173
```

**Verification Steps:**
1. Navigate across all core routes:
   * Home / Triage: `http://localhost:4173/#/`
   * Theory & Rationale: `http://localhost:4173/#/theory`
   * Developer Hub: `http://localhost:4173/#/developer`
   * Community & Knowledge: `http://localhost:4173/#/community`
2. Interact with critical state toggles (e.g., Timeline vs. Kanban on the community page, persona tabs in the Role Finder).
3. Check browser console logs:
   * **Zero uncaught exceptions.**
   * **Zero console errors.**
4. Stop the preview server process when verification completes.

---

### Gate 3: Documentation & `.cape` Index Audit

If any documentation, specification, plan, or ADR under `.cape/` was added, renamed, or modified:
1. Verify that the file follows the naming standard: `YYYY-MM-DD-<topic>.md`.
2. Ensure the document is written in English and follows the style in `.cape/context/2026-10-11-style-and-sensitivity.md`.
3. Check that the corresponding category index (`.cape/<category>/index.md`) has been updated in reverse chronological order (newest date on top) via the `cape-keeper` skill.

---

### Gate 4: Git Hygiene & Secret Screening

Ensure the working tree is clean and no unintended files or credentials are staged.

```bash
# Check git status
git status
```

**Pass Criteria:**
* No untracked scratch files, temp artifacts, or stray directories.
* No local private preferences staged (`.agents/rules/local-*` must remain git-ignored).
* No secrets, API keys, private tokens, or internal URLs present in diffs (`git diff HEAD`).
* All commits on the branch follow conventional commit prefixes (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).

---

### Gate 5: Structured PR Description

Generate a clear, factual PR summary using the project template:

```markdown
## Summary of Changes
[1-2 paragraphs detailing what was built, changed, or refactored, and why]

## Verification & Pre-Flight Checks Passed
- [x] `npm run build` passed with zero TypeScript and bundling errors.
- [x] Local `vite preview` verified across all routes with zero console errors.
- [x] Documentation & `.cape` index tables updated and in sync.
- [x] Git workspace clean and screened for secrets/local preferences.

## Next Steps / Review Focus
- [Item 1 to review or test]
- [Item 2 for team feedback]
```
