import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const brandingFiles = [
  'rt-logo.svg',
  'rt-logo-inverse.svg',
  'favicon.svg',
  'favicon.ico',
  'apple-touch-icon.png',
];

const patternSvgs = [
  'rt-patterns-overview.svg',
  'rt-patterns-profile-subjects.svg',
  'rt-p01-profile-declaration.svg',
  'rt-p02-profile-composition.svg',
  'rt-p03-content-negotiation-menu.svg',
  'rt-p04-no-landing-page-solution.svg',
  'rt-p05-subsetting-api.svg',
  'rt-p06-hostwide-discovery.svg',
  'rt-p07-catalog-assistance.svg',
  'rt-p08-large-linksets.svg',
  'rt-p09-release-links.svg',
];

test('branding and pattern assets exist and are non-empty', () => {
  for (const file of brandingFiles) {
    const fullPath = path.join('public', 'assets', 'branding', file);
    assert.equal(fs.existsSync(fullPath), true, `Missing ${fullPath}`);
    assert.ok(fs.statSync(fullPath).size > 0, `Empty ${fullPath}`);
  }
  for (const file of patternSvgs) {
    const fullPath = path.join('public', 'assets', 'patterns', file);
    assert.equal(fs.existsSync(fullPath), true, `Missing ${fullPath}`);
    assert.ok(fs.readFileSync(fullPath, 'utf8').includes('<svg'), `Invalid SVG: ${fullPath}`);
  }
});

test('index.html wires v1.0 favicons without draft or lorem text', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /\.\/assets\/branding\/favicon\.svg/);
  assert.match(html, /\.\/assets\/branding\/favicon\.ico/);
  assert.match(html, /\.\/assets\/branding\/apple-touch-icon\.png/);
  assert.doesNotMatch(html, /\(DRAFT\)|lorem|ipsum/i);
});
