import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule } from './helpers.mjs';

test('patternsData covers RT-P01 to RT-P10 with valid SVGs, anchors, and cross-links', async () => {
  const { patternsOverviewMeta, patternsData, getPatternById, getAdjacentPatterns } =
    await loadTsModule('src/data/patterns.ts');

  const expectedIds = [
    'rt-p01',
    'rt-p02',
    'rt-p03',
    'rt-p04',
    'rt-p05',
    'rt-p06',
    'rt-p07',
    'rt-p08',
    'rt-p09',
    'rt-p10',
  ];

  assert.equal(patternsData.length, 10);
  assert.deepEqual(
    patternsData.map((p) => p.id),
    expectedIds,
  );

  // Case-insensitive lookup and missing slug behavior
  assert.equal(getPatternById('RT-P03')?.code, 'RT-P03');
  assert.equal(getPatternById('missing'), undefined);

  // Adjacent boundaries
  assert.deepEqual(
    {
      prev: getAdjacentPatterns('rt-p01').prev,
      nextId: getAdjacentPatterns('rt-p01').next?.id,
    },
    { prev: null, nextId: 'rt-p02' },
  );
  assert.deepEqual(
    {
      prevId: getAdjacentPatterns('rt-p10').prev?.id,
      next: getAdjacentPatterns('rt-p10').next,
    },
    { prevId: 'rt-p09', next: null },
  );

  // Overview SVGs exist
  for (const rel of [patternsOverviewMeta.overviewSvgPath, patternsOverviewMeta.subjectsSvgPath]) {
    assert.ok(rel.startsWith('./assets/patterns/'), `Expected relative path: ${rel}`);
    assert.equal(fs.existsSync(path.join('public', rel.slice(2))), true, `Missing ${rel}`);
  }

  const validIds = new Set(expectedIds);
  for (const p of patternsData) {
    assert.equal(
      p.respecUrl,
      `https://radical-transparency-net.github.io/spec-linkset-usage-patterns/#${p.id}`,
    );
    assert.ok(p.goal.length > 20);
    assert.ok(p.motivation.length > 20);
    assert.ok(p.encodingSnippet.length > 10);
    for (const relId of p.relatedPatternIds) {
      assert.equal(validIds.has(relId), true, `Invalid relatedPatternId ${relId} on ${p.id}`);
    }

    if (p.id === 'rt-p10') {
      assert.equal(p.svgPath, undefined);
      assert.ok(p.cautionNote && p.cautionNote.length > 20);
      assert.ok(p.textDiagram && p.textDiagram.length > 20);
    } else {
      assert.ok(p.svgPath?.startsWith('./assets/patterns/'), `Missing svgPath on ${p.id}`);
      const fileOnDisk = path.join('public', p.svgPath.slice(2));
      assert.equal(fs.existsSync(fileOnDisk), true, `Missing SVG on disk: ${fileOnDisk}`);
    }
  }
});
