import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadTsModule } from './helpers.mjs';

test('siteConfig exposes canonical 5-route navigation and clean metadata', async () => {
  const { siteConfig } = await loadTsModule('src/data/siteConfig.ts');
  assert.deepEqual(
    siteConfig.navLinks.map((n) => n.path),
    ['/', '/patterns', '/tools', '/semantic-assets', '/community'],
  );
  assert.equal(siteConfig.githubUrl, 'https://github.com/radical-transparency-net');
  assert.equal(
    siteConfig.respecUrl,
    'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/',
  );
  for (const field of [siteConfig.title, siteConfig.tagline, siteConfig.description]) {
    assert.doesNotMatch(field, /\(DRAFT\)|lorem|ipsum/i);
  }
});

test('Header and Footer use v1.0 branding and factual links without stubs', () => {
  const header = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
  assert.match(header, /\.\/assets\/branding\/rt-logo\.svg/);
  assert.doesNotMatch(header, /type="search"/);
  assert.doesNotMatch(header, /\(DRAFT\)|lorem|ipsum/i);

  const footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
  assert.match(footer, /\.\/assets\/vliz-logo\.png/);
  assert.match(footer, /https:\/\/vliz\.be\/en\/legal-notice/);
  assert.match(footer, /#\/patterns/);
  assert.match(footer, /#\/tools/);
  assert.match(footer, /#\/semantic-assets/);
  assert.match(footer, /#\/community/);
  assert.doesNotMatch(footer, /<form/i);
  assert.doesNotMatch(footer, /\(DRAFT\)|lorem|ipsum/i);
});
