/**
 * 内部辅助模块 52474（Node process polyfill）
 *
 * 原始 webpack 代码在浏览器里回退到 process shim。反编译残留的 e.exports / r.g
 * 在 ESM 环境不存在，这里按真实成员单独导出。
 */
const processShim = {
  env: { NODE_ENV: 'production' },
  version: 'v18.0.0',
  versions: { node: '18.0.0' },
  platform: 'browser',
  browser: true,
  argv: [],
  cwd: () => '/',
  nextTick: (cb: any) => setTimeout(cb, 0),
  on: () => processShim,
  once: () => processShim,
  off: () => processShim,
  emit: () => false,
  removeListener: () => processShim,
  listeners: () => [],
  binding: () => processShim,
};

const env = processShim.env;
const version = processShim.version;
const versions = processShim.versions;
const platform = processShim.platform;
const browser = processShim.browser;
const argv = processShim.argv;
const cwd = processShim.cwd;
const nextTick = processShim.nextTick;

export {
  processShim as default,
  processShim as n,
  processShim as process,
  env,
  version,
  versions,
  platform,
  browser,
  argv,
  cwd,
  nextTick,
};
