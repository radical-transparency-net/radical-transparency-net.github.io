---
name: cape-keeper
description: Manage, validate, and maintain the .cape framework (Context, Ambition, Plan, Evolution). Use when creating, updating, or indexing .cape files, enforcing YYYY-MM-DD-*.md naming conventions, updating index.md tables, and auditing style and sensitivity guidelines.
---

# CAPE Keeper: Maintenance Guide & Agent Runbook

The `.cape` framework provides a persistent, shared narrative and planning structure for both human team members and AI coding agents working on the Radical Transparency ecosystem.

This skill ensures that all contributions to `.cape` follow strict taxonomical, naming, and index-maintenance standards.

---

## 1. Directory Structure & Taxonomy

All documents live under `.cape/` in one of four functional categories:

| Category | Folder | Purpose | Examples |
| :--- | :--- | :--- | :--- |
| **Context** | `.cape/context/` | Architectural baselines, standards, contributor profiles, ecosystem maps | Architecture, GitHub taxonomy, Style guidelines |
| **Ambition** | `.cape/ambition/` | Strategic visions, long-term goals, target personas, communication roadmaps | Target audience definitions, long-term milestones |
| **Plan** | `.cape/plan/` | Time-bound actionable task lists, migration plans, scaffolding checklists | Release scopes, pattern migration plans |
| **Evolution** | `.cape/evolution/` | Retrospectives, milestone logs, architectural decision records (ADRs), environment insights | Windows setup pitfalls, retrospective logs |

---

## 2. File Naming Conventions

Every document added to `.cape` must strictly adhere to the following naming pattern:

```text
.cape/{context|ambition|plan|evolution}/**/YYYY-MM-DD-<topic-in-kebab-case>.md
```

### Strict Rules:
1. **ISO-8601 Date Prefix:** Always `YYYY-MM-DD-` with hyphens (e.g., `2026-10-13-`).
2. **Kebab-Case:** Lowercase alphanumeric words separated by hyphens (e.g., `github-ecosystem.md`).
3. **No Whitespace:** Never include spaces in filenames or directory names.
4. **Language:** English is the mandatory language for all committed `.cape/` documents.

---

## 3. Automated Index Maintenance (`index.md`)

Each folder (`context/`, `ambition/`, `plan/`, `evolution/`) maintains a root `index.md` file summarizing its contents in reverse chronological order (newest date first).

### When modifying or creating a `.cape` file, agents MUST:
1. Parse the newly created or updated file's header (`# Title`, `**Date:**`, `**Status:**` or summary).
2. Open the corresponding `.cape/<category>/index.md`.
3. Insert or update the entry in the markdown table.
4. Ensure the table rows remain strictly sorted by date descending (youngest on top).

### Standard Table Schema:
```markdown
| Date | Document | Summary | Status / Category |
| :--- | :--- | :--- | :--- |
| YYYY-MM-DD | [Title](file.md) | 1-line factual summary | Active / Draft / Complete |
```

---

## 4. Style, Sensitivity & Security Guardrails

Agents authoring or modifying `.cape` content must enforce the policies in [`.cape/context/2026-10-11-style-and-sensitivity.md`](../../.cape/context/2026-10-11-style-and-sensitivity.md):

1. **Zero AI Fluff:** No conversational filler ("Certainly!", "Great!"), no hyperbole. Maintain an intellectual peer tone.
2. **Security & Zero Credentials:** Never commit API keys, PAT tokens, private keys, internal IPs, or secrets.
3. **Professional Profiling:** Contributor profiles must focus on technical backgrounds, open-science roles, and verified identities. Personal prompt quirks or informal notes must be placed in local git-ignored configurations (`.agents/rules/local-*`), never in public git commits.

