import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Header avoids mobile overflow, handles drawer close on route change, and sets button accessibility', () => {
  const header = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
  assert.match(header, /px-margin-mobile\s+sm:px-margin/);
  assert.match(header, /whitespace-nowrap/);
  assert.match(header, /hidden\s+sm:inline-flex/);
  assert.match(header, /type="button"/);
  assert.match(header, /aria-expanded=\{isMobileMenuOpen\}/);
  assert.match(header, /useLocation/);
});

test('ToolDetailPage heading scales responsively and wraps long identifiers', () => {
  const toolDetail = fs.readFileSync('src/pages/ToolDetailPage.tsx', 'utf8');
  assert.match(toolDetail, /text-headline-lg\s+sm:text-display-hero/);
  assert.match(toolDetail, /break-words/);
});

test('PatternDiagramViewer gives SVG img explicit width so flex layout never collapses viewBox SVGs', () => {
  const viewer = fs.readFileSync('src/components/patterns/PatternDiagramViewer.tsx', 'utf8');
  assert.match(viewer, /className="w-full\s+max-w-full\s+h-auto\s+mx-auto"/);
});
