import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTsModule } from './helpers.mjs';

test('semanticAssetsData publishes rtwl vocabulary metadata and dev notice', async () => {
  const { semanticAssetsRepoUrl, semanticAssetsDevNotice, semanticAssetsData } =
    await loadTsModule('src/data/semanticAssets.ts');

  assert.equal(semanticAssetsRepoUrl, 'https://github.com/radical-transparency-net/semantic-assets');
  assert.match(semanticAssetsDevNotice.body, /under.*development/i);

  const rtwl = semanticAssetsData.find((a) => a.prefix === 'rtwl');
  assert.ok(rtwl, 'Missing rtwl vocabulary');
  assert.equal(rtwl.namespaceUri, 'https://w3id.org/rt/ns/weblink#');
  assert.equal(rtwl.docsUrl, 'https://radical-transparency-net.github.io/semantic-assets/weblink/');
  assert.equal(rtwl.version, '0.1.0-draft');
  assert.ok(rtwl.terms.classes.includes('rtwl:WebLink'));
  assert.ok(rtwl.terms.classes.includes('rtwl:TargetAttribute'));
  for (const prop of ['rtwl:anchor', 'rtwl:rel', 'rtwl:href', 'rtwl:attribute', 'rtwl:key', 'rtwl:value']) {
    assert.ok(rtwl.terms.properties.includes(prop), `Missing property ${prop}`);
  }
  assert.ok(rtwl.representations.length >= 4);
});

test('community.ts provides factual resources and scrubbed preserved exports', async () => {
  const community = await loadTsModule('src/data/community.ts');
  assert.ok(Array.isArray(community.communityResourcesData));
  assert.ok(community.communityResourcesData.length >= 3);

  const serialized = JSON.stringify(community);
  assert.doesNotMatch(serialized, /\(DRAFT\)|lorem|ipsum|lh3\.googleusercontent\.com/i);
  assert.ok(Array.isArray(community.playbookTracksData));
  assert.ok(Array.isArray(community.upcomingEventsData));
  assert.ok(Array.isArray(community.roadmapPhasesData));
  assert.ok(Array.isArray(community.stakeholderChannelsData));
});
