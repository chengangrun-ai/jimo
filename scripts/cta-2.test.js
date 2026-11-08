const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

// Run in a separate process so a synchronous initialization loop is bounded.
test('cta-2 initializes and renders within 20 seconds', () => {
  const root = path.resolve(__dirname, '..');
  const result = spawnSync(process.execPath, [path.join(root, 'scripts/probe-one.js'), 'blocks', 'cta-2'], {
    cwd: root,
    encoding: 'utf8',
    timeout: 20000,
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout.trim().split('\n').at(-1));
  assert.equal(output.ok, true, JSON.stringify(output));
  assert.equal(output.stage, 'ok');
  assert.ok(output.len > 0);
});
