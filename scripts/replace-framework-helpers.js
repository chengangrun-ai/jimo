/**
 * 把 Next.js 框架内部的 helper 模块替换成内联替身。
 *
 * 这些模块（1594 / 22154 / 28603 / 49365 / 75108 / 75789 / 79748 / 87914 / 95427）
 * 是 Next.js 的路由 hooks 与导航 API，反编译时被当成组件依赖抓了进来。
 * 它们的原始 webpack 形态用 Object.defineProperty(t, ...) + e.exports，
 * 直接当 ESM 打包会语法错。
 *
 * 组件渲染不需要 Next 的真实路由实现，这里给安全替身：
 *   - 路由 hooks 返回空值（不会解构崩溃）
 *   - 导航 API 静默 no-op（不会打断渲染）
 *   - 常量给正确的字面量
 */
const fs = require('fs');
const path = require('path');

const HELPER_DIR = path.join(process.cwd(), 'data', 'tsx', '_helpers');

/** 每个模块需要的成员 */
const NEEDS = {
  1594: ['unauthorized'],
  22154: ['useParams', 'usePathname', 'useRouter', 'useSearchParams'],
  28603: ['isNextRouterError'],
  49365: ['ReadonlyURLSearchParams', 'RedirectType', 'forbidden', 'notFound', 'permanentRedirect', 'redirect', 'unauthorized', 'unstable_rethrow'],
  75108: ['permanentRedirect', 'redirect'],
  75789: ['forbidden'],
  79748: ['unstable_rethrow'],
  87914: ['unstable_rethrow'],
  95427: ['isRedirectError', 'RedirectType', 'REDIRECT_ERROR_CODE'],
};

/** 生成成员实现代码 */
function impl(name) {
  switch (name) {
    case 'useParams':
      return 'const useParams = () => ({});';
    case 'usePathname':
      return "const usePathname = () => '/';";
    case 'useRouter':
      return `const useRouter = () => ({
  push: () => {}, replace: () => {}, back: () => {}, forward: () => {},
  refresh: () => {}, prefetch: () => {},
});`;
    case 'useSearchParams':
      return `const useSearchParams = () => ({
  get: () => null, getAll: () => [], has: () => false,
  keys: () => [][Symbol.iterator](), values: () => [][Symbol.iterator](),
  entries: () => [][Symbol.iterator](), forEach: () => {},
  toString: () => '', [Symbol.iterator]: () => [][Symbol.iterator](),
});`;
    case 'notFound':
      return 'const notFound = () => {};';
    case 'redirect':
      return 'const redirect = () => {};';
    case 'permanentRedirect':
      return 'const permanentRedirect = () => {};';
    case 'forbidden':
      return 'const forbidden = () => {};';
    case 'unauthorized':
      return 'const unauthorized = () => {};';
    case 'unstable_rethrow':
      return 'const unstable_rethrow = () => {};';
    case 'isRedirectError':
    case 'isNextRouterError':
      return `const ${name} = () => false;`;
    case 'RedirectType':
      return "const RedirectType = { push: 'push', replace: 'replace' };";
    case 'REDIRECT_ERROR_CODE':
      return "const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';";
    case 'ReadonlyURLSearchParams':
      return `class ReadonlyURLSearchParams {
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
}`;
    default:
      return `const ${name} = () => {};`;
  }
}

let done = 0;
const log = [];
for (const [id, members] of Object.entries(NEEDS)) {
  const p = path.join(HELPER_DIR, `${id}.tsx`);
  const impls = members.map(impl).join('\n');
  const content = `/**
 * 内部辅助模块 ${id}（Next.js 框架 API 替身）
 *
 * 反编译时把 Next.js 的内部模块误当成了组件依赖。原始 webpack 形态是
 * Object.defineProperty(t, ...) + e.exports，直接按 ESM 打包会语法错误。
 * 组件预览不需要 Next 的真实路由实现，这里给不会崩的安全替身。
 */
${impls}

export { ${members.join(', ')} };
export default { ${members.join(', ')} };
`;
  fs.writeFileSync(p, content, 'utf8');
  done++;
  log.push(`${id}: ${members.length} 个成员`);
}

console.log(`已替换 ${done} 个框架模块为内联替身`);
log.forEach(l => console.log(`  ${l}`));
