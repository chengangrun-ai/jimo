/**
 * 内部辅助模块 49365（Next.js 框架 API 替身）
 *
 * 反编译时把 Next.js 的内部模块误当成了组件依赖。原始 webpack 形态是
 * Object.defineProperty(t, ...) + e.exports，直接按 ESM 打包会语法错误。
 * 组件预览不需要 Next 的真实路由实现，这里给不会崩的安全替身。
 */
class ReadonlyURLSearchParams {
  constructor(init) { this._p = init || new URLSearchParams(); }
  get(k) { return this._p.get(k); }
  getAll(k) { return this._p.getAll(k); }
  has(k) { return this._p.has(k); }
  keys() { return this._p.keys(); }
  values() { return this._p.values(); }
  entries() { return this._p.entries(); }
  forEach(fn) { return this._p.forEach(fn); }
  toString() { return this._p.toString(); }
  [Symbol.iterator]() { return this._p[Symbol.iterator](); }
}
const RedirectType = { push: 'push', replace: 'replace' };
const forbidden = () => {};
const notFound = () => {};
const permanentRedirect = () => {};
const redirect = () => {};
const unauthorized = () => {};
const unstable_rethrow = () => {};

export { ReadonlyURLSearchParams, RedirectType, forbidden, notFound, permanentRedirect, redirect, unauthorized, unstable_rethrow };
export default { ReadonlyURLSearchParams, RedirectType, forbidden, notFound, permanentRedirect, redirect, unauthorized, unstable_rethrow };
