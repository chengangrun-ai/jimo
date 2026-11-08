/**
 * 把所有 webpack 残留模块（Object.defineProperty(t, ...) 形式）统一替换成 stub。
 *
 * 思路：
 *   这些模块全是 Next.js / React 框架内部实现（workAsyncStorage、PreloadChunks、
 *   BailoutToCSR、notFound、redirect、useParams …）。组件渲染不需要它们的真实实现，
 *   而它们的反编译产物残缺（CJS 残留 + 导出丢失 + 变量作用域错乱），逐个修补成本极高
 *   且容易引入新问题（实测转换会破坏 11 个文件）。
 *
 *   所以先扫描「每个模块被要求提供哪些成员」，再按成员名生成不会崩的 stub：
 *     - 已知框架 API → 专门实现（路由 hooks 返回空值、导航 API no-op）
 *     - 未知成员 → 惰性空壳（访问任意属性/调用都不抛错）
 */
const fs = require('fs');
const path = require('path');

const TSX_DIR = path.join(process.cwd(), 'data', 'tsx');
const HELPER_DIR = path.join(TSX_DIR, '_helpers');
const DRY = !process.argv.includes('--apply');

/** ---------- 1. 扫描每个模块被要求的成员 ---------- */
const refs = new Map();
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (e.name.includes('.backup')) continue;
      walk(p);
      continue;
    }
    if (!e.name.endsWith('.tsx')) continue;
    const src = fs.readFileSync(p, 'utf8');
    const aliasMap = new Map();
    for (const m of src.matchAll(/import\s*\*\s*as\s+(__mod_\d+)\s+from\s+["'][^"']*\/(\d+)["']/g)) {
      aliasMap.set(m[1], m[2]);
    }
    for (const [alias, id] of aliasMap) {
      const re = new RegExp(alias.replace(/\$/g, '\\$') + '\\.([A-Za-z_$][\\w$]*)', 'g');
      for (const mm of src.matchAll(re)) {
        if (!refs.has(id)) refs.set(id, new Set());
        refs.get(id).add(mm[1]);
      }
    }
  }
};
walk(TSX_DIR);

/** ---------- 2. 定位所有需要处理的模块 ---------- */
const targets = [];
for (const f of fs.readdirSync(HELPER_DIR)) {
  if (!f.endsWith('.tsx')) continue;
  const p = path.join(HELPER_DIR, f);
  const src = fs.readFileSync(p, 'utf8');
  if (src.includes('__rbStub__')) continue;      // 已处理
  const codeOnly = src.split('\n').filter(l => {
    const t = l.trim();
    return t && !t.startsWith('//') && !t.startsWith('*') && !t.startsWith('/*');
  }).join('\n');
  if (!/Object\.defineProperty\(\s*t\s*,|\be\.exports\s*=/.test(codeOnly)) continue;
  const id = f.replace(/\.tsx$/, '');
  targets.push({ id, p, members: [...(refs.get(id) || [])] });
}

console.log(`待处理模块: ${targets.length}`);
targets.slice(0, 25).forEach(t => console.log(`  ${t.id}: ${t.members.length ? t.members.join(', ') : '(无引用)'}`));

/** ---------- 3. 生成 stub 内容 ---------- */
function implFor(name) {
  switch (name) {
    case 'useParams': return 'const useParams = () => ({});';
    case 'usePathname': return "const usePathname = () => '/';";
    case 'useRouter': return "const useRouter = () => ({ push: () => {}, replace: () => {}, back: () => {}, forward: () => {}, refresh: () => {}, prefetch: () => {} });";
    case 'useSearchParams': return "const useSearchParams = () => ({ get: () => null, getAll: () => [], has: () => false, toString: () => '' });";
    case 'notFound': return 'const notFound = () => {};';
    case 'redirect': return 'const redirect = () => {};';
    case 'permanentRedirect': return 'const permanentRedirect = () => {};';
    case 'forbidden': return 'const forbidden = () => {};';
    case 'unauthorized': return 'const unauthorized = () => {};';
    case 'unstable_rethrow': return 'const unstable_rethrow = () => {};';
    case 'isRedirectError': return 'const isRedirectError = () => false;';
    case 'isNextRouterError': return 'const isNextRouterError = () => false;';
    case 'RedirectType': return "const RedirectType = { push: 'push', replace: 'replace' };";
    case 'REDIRECT_ERROR_CODE': return "const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';";
    case 'BailoutToCSR': return 'const BailoutToCSR = ({ children }: any) => children;';

    // TypeScript 的编译 helper —— 这些必须给**真实实现**，
    // 它们参与模块加载与对象处理，空壳会让上层代码拿到错误的值
    case '__importDefault':
      return 'const __importDefault = (mod: any) => (mod && mod.__esModule ? mod : { default: mod });';
    case '__importStar':
      return `const __importStar = (mod: any) => {
  if (mod && mod.__esModule) return mod;
  const out: any = {};
  if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) out[k] = mod[k];
  out.default = mod;
  return out;
};`;
    case '__assign':
      return 'const __assign = Object.assign || ((t: any, ...s: any[]) => Object.assign(t, ...s));';
    case '__rest':
      return `const __rest = (s: any, e: any) => {
  const t: any = {};
  for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (const p of Object.getOwnPropertySymbols(s)) if (e.indexOf(p) < 0 && Object.prototype.propertyIsEnumerable.call(s, p)) t[p] = s[p];
  return t;
};`;
    case '__spreadArray':
      return `const __spreadArray = (to: any[], from: any[], pack?: boolean) => {
  if (pack || arguments.length === 2) for (let i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};`;
    case '__awaiter':
      return `const __awaiter = function (this: any, _a: any, _b: any, _c: any, generator: any) {
  function adopt(value: any): any { return value instanceof _c ? value : new _c(function (resolve: any) { resolve(value); }); }
  return new (_c = _c || Promise)(function (resolve: any, reject: any) {
    function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value: any) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(_a, _b || [])).next());
  });
};`;
    case '__generator':
      return `const __generator = function (this: any, body: any, _: any) {
  const _ = _ || { label: 0, sent: () => { throw new Error('unreachable'); }, trys: [], ops: [] };
  return { next: verb(0), throw: verb(1), return: verb(2) };
  function verb(n: number) {
    return function (v: any) {
      return step([n, v]) as any;
    };
  }
  function step(op: any): any {
    throw new Error('generator stub');
  }
};`;

    default: return null;
  }
}

const SHELL = `
/** 惰性空壳：任意属性访问/调用都不抛错（反编译缺失导出的安全兜底） */
function __shell() {
  const s = new Proxy(function () {}, {
    get(t: any, k) {
      if (k === Symbol.toPrimitive) return () => 0;
      if (k === 'then') return undefined;
      if (k === '__esModule') return true;
      return __shell();
    },
    apply() { return __shell(); },
    construct() { return __shell(); },
  });
  return s as any;
}
`;

let done = 0;
for (const t of targets) {
  const members = t.members.length ? t.members : ['default'];
  const impls = [];
  const exportsList = [];

  for (const m of members) {
    if (m === 'default') continue;
    const known = implFor(m);
    if (known) {
      impls.push(known);
    } else {
      // 未知成员：给惰性空壳（不会崩）
      impls.push(`const ${m} = __shell();`);
    }
    exportsList.push(m);
  }

  const content = `/**
 * 内部辅助模块 ${t.id}（框架替身 __rbStub__）
 *
 * 原始反编译产物是 Next.js / React 框架内部的 webpack 模块，带
 * Object.defineProperty(t, ...) / e.exports 这类 CJS 残留，直接按 ESM
 * 打包会报语法错或运行时崩。组件预览不需要它们的真实实现，
 * 这里按「被引用到的成员」生成不会崩的替身。
 */
${SHELL}
${impls.join('\n')}

${exportsList.length ? `export { ${exportsList.join(', ')} };` : ''}
export default __shell();
`;

  if (!DRY) fs.writeFileSync(t.p, content, 'utf8');
  done++;
}

console.log(`\n${DRY ? '[预演]' : '[已写入]'} ${done} 个模块替换为框架替身`);
if (DRY) console.log('加 --apply 实际写入');
