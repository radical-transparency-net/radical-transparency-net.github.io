import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule } from './helpers.mjs';

function walkFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

test('zero lorem ipsum, draft tags, or prototype image URLs remain in src or index.html', () => {
  const targets = ['index.html', ...walkFiles('src')];
  const forbidden = [/lorem/i, /ipsum/i, /\(DRAFT\)/, /lh3\.googleusercontent\.com/];
  for (const file of targets) {
    const content = fs.readFileSync(file, 'utf8');
    for (const pattern of forbidden) {
      assert.doesNotMatch(content, pattern, `Found forbidden ${pattern} in ${file}`);
    }
  }
});

test('all preserved legacy components remain intact on disk', () => {
  const preserved = [
    'src/components/home/RoleFinder.tsx',
    'src/components/theory/TheoryHero.tsx',
    'src/components/theory/SystemDiagram.tsx',
    'src/components/theory/PillarsGrid.tsx',
    'src/components/theory/ComparisonMatrix.tsx',
    'src/components/theory/MotivationSection.tsx',
    'src/components/theory/LineageInspector.tsx',
    'src/components/developer/DevHubHero.tsx',
    'src/components/developer/CliTerminal.tsx',
    'src/components/developer/SpecsGrid.tsx',
    'src/components/developer/ValidatorPlayground.tsx',
    'src/components/developer/SdkCards.tsx',
    'src/components/developer/ContributionSteps.tsx',
    'src/components/community/CommunityHero.tsx',
    'src/components/community/PlaybookTracks.tsx',
    'src/components/community/EventCards.tsx',
    'src/components/community/RoadmapTimeline.tsx',
    'src/components/community/ChannelsGrid.tsx',
    'src/pages/TheoryPage.tsx',
    'src/pages/DeveloperPage.tsx',
  ];
  for (const file of preserved) {
    assert.equal(fs.existsSync(file), true, `Preserved file missing: ${file}`);
  }
});

test('home triage doors and pulse stats reflect factual ecosystem data', async () => {
  const { triageDoorsData } = await loadTsModule('src/data/home.ts');
  const { pulseStatsData, proposalSpotlightsData } = await loadTsModule('src/data/spotlight.ts');

  assert.deepEqual(
    triageDoorsData.map((d) => d.ctaPath),
    ['/patterns', '/tools', '/semantic-assets'],
  );
  assert.equal(pulseStatsData.length, 4);
  assert.equal(pulseStatsData[0].value, '10');
  assert.equal(pulseStatsData[1].value, '3');
  assert.equal(proposalSpotlightsData.length, 3);
});
