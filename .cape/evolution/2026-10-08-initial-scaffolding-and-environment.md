# Initial Portal Scaffolding & Environment Setup Insights

**Date:** 2026-10-08  
**Author:** Cedric De Cruw / Team Alignment  
**Category:** Evolution / Retrospective  

---

## 1. Context

During the initial scaffolding of the Vite + React 18 single-page application (SPA) based on the Stitch HTML prototypes in `.material/site-design-stitch/`, several operational insights and cross-platform setup requirements were established.

---

## 2. Windows Development Environment Insights

Contributors running under Windows (particularly PowerShell or Git Bash environments where Node.js / npm may not be mapped automatically into every subshell's PATH) encountered build command failures (`node`/`npm` not found).

### Solution & Workaround
Before running `npm install` or `npm run dev`, explicitly prepend the default Node.js installation directory to the active shell session:

* **PowerShell:**
  ```powershell
  $env:PATH = "C:\Program Files\nodejs;$env:PATH"
  ```
* **Git Bash:**
  ```bash
  export PATH="/c/Program Files/nodejs:$PATH"
  ```

This tip was originally noted in early README drafts and is preserved here as part of team onboarding knowledge.

---

## 3. Scaffolding Decisions Preserved

1. **HashRouter for Static Hosting:** Client-side routing was pinned to `HashRouter` (`/#/`, `/#/theory`, etc.) to prevent HTTP 404 rewrite issues on GitHub Pages.
2. **Strict Content Decoupling:** All placeholder strings and preliminary proposal text were decoupled into `src/data/*.ts` so that future copy adjustments can be made without touching React component markup.
