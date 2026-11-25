# Gemini CLI Project Directives

Please consult and strictly adhere to the authoritative repository directives defined in [AGENTS.md](AGENTS.md).

Key Directives:
- Mandatory pre-flight context ingestion: `.cape/context/2026-10-09-architecture.md`, `2026-10-09-repo-structure.md`, and `2026-10-11-style-and-sensitivity.md`.
- Proportional task sizing: Do not create `.cape` files for Spikes or Bounded tasks.
- Route architectural specs to `.cape/context/` and implementation plans to `.cape/plan/`.
- Run `npm run verify` (`npm run cape:index && tsc -b && vite build`) to validate before completion.
