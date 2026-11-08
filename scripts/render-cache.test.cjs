const { test } = require('node:test');
const assert = require('node:assert/strict');
const { RenderCache } = require('../lib/render-cache.ts');

test('evicts least recently used entries while staying within byte budget', () => {
  const cache = new RenderCache(5, x => x.length);
  cache.set('a', 'aa'); cache.set('b', 'bb');
  assert.equal(cache.get('a'), 'aa');
  cache.set('c', 'cc');
  assert.equal(cache.get('b'), undefined);
  assert.equal(cache.get('a'), 'aa');
  assert.equal(cache.get('c'), 'cc');
  assert.equal(cache.bytes, 4);
});

test('replacement, deletion and oversized entries maintain accounting', () => {
  const cache = new RenderCache(5, x => x.length);
  cache.set('a', 'abc'); cache.set('a', 'q');
  assert.equal(cache.bytes, 1);
  cache.set('a', '123456');
  assert.equal(cache.get('a'), undefined);
  assert.equal(cache.bytes, 0);
  cache.set('b', 'zz'); cache.delete('b'); cache.delete('b');
  assert.equal(cache.size, 0); assert.equal(cache.bytes, 0);
});

test('invalid budget and invalid value size are rejected', () => {
  assert.throws(() => new RenderCache(-1, () => 1));
  const cache = new RenderCache(5, () => -1);
  assert.throws(() => cache.set('a', 'x'));
});
