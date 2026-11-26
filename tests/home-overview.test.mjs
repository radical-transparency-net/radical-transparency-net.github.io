import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTsModule } from './helpers.mjs';

test('home.ts aligns with rt-patterns-overview hero quote, lifecycle, position paper, reading paths, and standards', async () => {
  const {
    homeHeroData,
    homeLifecycleSteps,
    homeProblemStatement,
    homePositionPaper,
    homeReadingPaths,
    homeFoundationalStandards,
  } = await loadTsModule('src/data/home.ts');
  const { getPatternById } = await loadTsModule('src/data/patterns.ts');

  assert.equal(homeHeroData.title, 'Radical Transparency');
  assert.equal(
    homeHeroData.quote,
    '"When public money is invested in interoperability across projects, how can we guide its spending without preventing innovative evolution and objectively demonstrate what has actually been achieved?"',
  );

  assert.deepEqual(
    homeLifecycleSteps.map((s) => s.title),
    ['Declare', 'Verify', 'Quantify'],
  );

  assert.ok(homeProblemStatement.assumedCompatibility.length > 20);
  assert.ok(homeProblemStatement.declareDefinition.length > 20);
  assert.equal(
    homePositionPaper.url,
    'https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf',
  );

  assert.deepEqual(
    homeReadingPaths.map((p) => p.id),
    ['path-a', 'path-b', 'path-c', 'path-d'],
  );
  for (const pathItem of homeReadingPaths) {
    assert.ok(pathItem.steps.length >= 2);
    for (const step of pathItem.steps) {
      assert.ok(getPatternById(step.patternId), `Invalid pattern ${step.patternId} in ${pathItem.id}`);
    }
  }

  const allStandardLabels = homeFoundationalStandards.flatMap((g) => g.items.map((i) => i.label));
  for (const expected of [
    'RFC 8288',
    'RFC 6906',
    'RFC 9264',
    'RFC 9727',
    'OAI ResourceSync',
    'FAIR Signposting',
  ]) {
    assert.ok(
      allStandardLabels.some((lbl) => lbl.includes(expected)),
      `Missing standard ${expected}`,
    );
  }
});
