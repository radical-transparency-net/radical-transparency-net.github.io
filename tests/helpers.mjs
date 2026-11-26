import { buildSync } from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

/**
 * Compile and dynamically import a TypeScript module from the repository root
 * using Vite's bundled esbuild, with zero external test runner dependencies.
 */
export async function loadTsModule(relPath) {
  const entry = path.resolve(REPO_ROOT, relPath);
  const result = buildSync({
    entryPoints: [entry],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    logLevel: 'silent',
  });
  const code = result.outputFiles[0].text;
  const encoded = Buffer.from(code, 'utf8').toString('base64');
  return import(`data:text/javascript;base64,${encoded}`);
}
