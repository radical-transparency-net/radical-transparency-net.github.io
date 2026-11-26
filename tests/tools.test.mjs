import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTsModule } from './helpers.mjs';

test('toolsData registers the 3 beta tools with valid pattern cross-links', async () => {
  const { toolsBetaNotice, toolsData, getToolById } = await loadTsModule('src/data/tools.ts');
  const { getPatternById } = await loadTsModule('src/data/patterns.ts');

  assert.deepEqual(
    toolsData.map((t) => t.id),
    ['webmap-er', 'lod-docker-webserver', 'wrx'],
  );

  assert.match(toolsBetaNotice.message, /beta|not yet fully released/i);

  for (const tool of toolsData) {
    assert.equal(tool.status, 'Beta — Not Fully Released');
    assert.match(tool.repoUrl, /^https:\/\/github\.com\/radical-transparency-net\//);
    assert.ok(tool.capabilities.length >= 3);
    assert.ok(tool.quickstartSnippet.length > 10);
    for (const pid of tool.relatedPatternIds) {
      assert.ok(getPatternById(pid), `Missing related pattern ${pid} on tool ${tool.id}`);
    }
  }

  assert.equal(getToolById('WEBMAP-ER')?.name, 'webmap-ER');
  assert.equal(getToolById('unknown'), undefined);
  assert.equal(
    getToolById('webmap-er')?.liveUrl,
    'https://radical-transparency-net.github.io/webmap-ER/',
  );
  assert.equal(
    getToolById('wrx')?.liveUrl,
    'https://radical-transparency-net.github.io/wrx/',
  );
});
