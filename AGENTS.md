# AI Agent Guidelines & Repository Directives (`AGENTS.md`)

Welcome to the **Radical Transparency Network** portal repository (`radical-transparency-net.github.io`). This file establishes the universal rules and behavioral guardrails for all AI coding assistants (Antigravity IDE, Claude Code, Gemini CLI, Cursor, Copilot, Codex).

---

## 1. Mandatory Pre-Flight Context Ingestion

Before answering questions, exploring implementations, or editing code, you **MUST** read the following authoritative baseline documents:

1. [`.cape/context/2026-10-09-architecture.md`](.cape/context/2026-10-09-architecture.md): React 18, TypeScript, Vite, Tailwind CSS, and `HashRouter` (`/#/`) routing conventions.
2. [`.cape/context/2026-10-09-repo-structure.md`](.cape/context/2026-10-09-repo-structure.md): Repository taxonomy (`.cape/`, `.material/`, `src/`) and content decoupling (`src/data/*.ts`).
3. [`.cape/context/2026-10-11-style-and-sensitivity.md`](.cape/context/2026-10-11-style-and-sensitivity.md): **Strict style guardrails** — Zero AI fluff, no hyperbole, intellectual peer tone, English language default, and zero credentials in public commits.

---

## 2. Proportional Task Sizing & `.cape` Gating

Do not create unnecessary documentation overhead for routine development tasks. Match the process to the task:

| Task Scope | Definition | Workflow | `.cape` Footprint |
| :--- | :--- | :--- | :--- |
| **Spike** | Feasibility inquiry, throwaway probe | 2–3 sentence chat pitch $\rightarrow$ human nod $\rightarrow$ quick probe $\rightarrow$ recommendation | **Zero `.cape` files** (chat only) |
| **Bounded** | Well-scoped fix or feature in existing code (1–3 files) | Clarifying question $\rightarrow$ short in-chat design $\rightarrow$ human nod $\rightarrow$ TDD execution | **Zero `.cape` files** (code & tests only) |
| **Architectural** | New subsystems, schema changes, multi-file interfaces, major redesigns | Full `/brainstorming` $\rightarrow$ written spec $\rightarrow$ `/writing-plans` $\rightarrow$ TDD $\rightarrow$ verify | **Full `.cape` lifecycle** |

---

## 3. Artifact Routing & Naming Standards

When an architectural task produces persistent documentation, route files strictly into `.cape/`:

- **Design Specifications:** `.cape/context/YYYY-MM-DD-<topic>-design.md`
- **Implementation Plans:** `.cape/plan/YYYY-MM-DD-<feature>-plan.md`
- **Retrospectives & ADRs:** `.cape/evolution/YYYY-MM-DD-<topic>-retro.md`

All files must follow the strict `YYYY-MM-DD-<kebab-case>.md` naming pattern.

---

## 4. Deterministic Indexing & Verification

Whenever you add or update a file in `.cape/`, you must update the category index:

```bash
# Automatically regenerate and sort all .cape/*/index.md tables
npm run cape:index
```

### Pre-PR Verification
Before claiming any task is complete or preparing a branch for pull request:
```bash
# Runs cape:index, TypeScript typechecking, and production bundle build
npm run verify
```
All verification steps must pass with zero errors.

---

## 5. Shared Skills Toolkit

Shared agent skills live in [`.agents/skills/`](.agents/skills/):
- **`cape-keeper`**: Maintenance and convention enforcement for `.cape`.
- **`pr-preparation`**: Pre-flight verification cycle before branch pushes.
- **`brainstorming`**: Interactive requirements elicitation and design spec authoring.
- **`writing-plans`**: Granular, test-driven implementation plan authoring.
- **`executing-plans` / `subagent-driven-development`**: Task-by-task execution engines.
