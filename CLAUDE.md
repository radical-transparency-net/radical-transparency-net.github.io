# Claude Code Project Guidelines

Please consult and strictly adhere to the repository directives defined in [AGENTS.md](AGENTS.md).

Key Highlights:
- Always read `.cape/context/2026-10-09-architecture.md`, `2026-10-09-repo-structure.md`, and `2026-10-11-style-and-sensitivity.md` before making code changes.
- Spikes and Bounded tasks are resolved in-chat with TDD (no `.cape` file overhead).
- Architectural specs go to `.cape/context/` and implementation plans go to `.cape/plan/`.
- Run `npm run verify` (`npm run cape:index && tsc -b && vite build`) before committing or opening PRs.
