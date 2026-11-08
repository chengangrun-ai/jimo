const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const Module = require('node:module');
const esbuild = require('esbuild');
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost/' });
const w = dom.window;
for (const [key, value] of Object.entries({ window: w, document: w.document, navigator: w.navigator, HTMLElement: w.HTMLElement, Element: w.Element, Node: w.Node, getComputedStyle: w.getComputedStyle.bind(w) })) {
  Object.defineProperty(globalThis, key, { value, writable: true, configurable: true });
}
w.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} });
class ResizeObserver { observe() {} disconnect() {} }
w.ResizeObserver = globalThis.ResizeObserver = ResizeObserver;
globalThis.requestAnimationFrame = w.requestAnimationFrame.bind(w);
globalThis.cancelAnimationFrame = w.cancelAnimationFrame.bind(w);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const React = require('react');
const { act } = React;
const { createRoot } = require('react-dom/client');

const entry = path.resolve(__dirname, '../data/tsx/app-ui/ai-chat-5.tsx');
const bundle = esbuild.buildSync({ entryPoints: [entry], bundle: true, platform: 'node', format: 'cjs', write: false, packages: 'external', logLevel: 'silent' });
const compiled = new Module(entry, module);
compiled.filename = entry;
compiled.paths = Module._nodeModulePaths(path.dirname(entry));
compiled._compile(bundle.outputFiles[0].text, entry);
const Component = compiled.exports.components['ai-chat-5'];

function button(container, label) {
  const found = [...container.querySelectorAll('button')].find(b => b.textContent.trim() === label);
  assert.ok(found, `Missing button: ${label}`);
  return found;
}

test('ai-chat-5 renders the original tool and approval components', () => {
  const html = require('react-dom/server').renderToString(React.createElement(Component));
  assert.match(html, /Scanned staging resources/);
  assert.match(html, /Deleted 2 preview databases/);
  assert.match(html, /Needs approval/);
  assert.doesNotMatch(html, /<e\$|<eq(?:\s|>)|<eF(?:\s|>)/);
});

if (process.env.NODE_ENV !== 'production') test('ai-chat-5 shows tools and handles both approval outcomes', async () => {
  for (const [choice, expected, response] of [
    ['Delete keys', 'Approved', 'The staging project is cleaned up.'],
    ['Keep them', 'Skipped, not approved', 'I left the API keys in place.'],
  ]) {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const root = createRoot(host);
    try {
      await act(async () => root.render(React.createElement(Component)));
      assert.match(host.textContent, /Scanned staging resources/);
      assert.match(host.textContent, /Deleted 2 preview databases/);
      assert.match(host.textContent, /Needs approval/);
      await act(async () => button(host, 'Scanned staging resourcesDone0.9s').click());
      assert.match(host.textContent, /db\/preview-fern/);
      await act(async () => button(host, 'Show request').click());
      assert.match(host.textContent, /delete_api_keys/);
      await act(async () => button(host, choice).click());
      await act(async () => new Promise(resolve => setTimeout(resolve, 80)));
      assert.ok(host.textContent.includes(expected));
      assert.ok(host.textContent.includes(response));
      assert.equal([...host.querySelectorAll('button')].some(b => b.textContent.trim() === 'Delete keys'), false);
    } finally {
      await act(async () => root.unmount());
      host.remove();
    }
  }
});
