import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';
import { RenderCache } from './render-cache';

/**
 * 本地渲染编译管线。
 *
 * 目标：把 data/tsx/<kind>/<slug>.tsx（反编译还原的组件源码）打成一个
 * 自包含的浏览器脚本（IIFE），内联 react / react-dom / motion / lucide-react，
 * 这样预览页完全离线，不需要 import map、CDN 或任何网络请求。
 *
 * 编译结果带缓存（按 mtime + 大小判断失效），避免每次请求都重新打包。
 */

const ROOT = process.cwd();
const TSX_DIR = path.join(ROOT, 'data', 'tsx');

export type RenderKind = 'components' | 'blocks' | 'app-ui' | 'free';

export type RenderResult = {
  ok: boolean;
  code: string;
  error?: string;
  /** 依赖清单（组件直接 import 的第三方包名） */
  deps: string[];
};

type CacheEntry = { mtimeMs: number; size: number; helperStamp: number; result: RenderResult };
// Compiled bundles can be several MB each. Retaining the entire catalogue caused
// the production process to exceed its heap limit during full-catalog scans.
// Budget JS strings conservatively as UTF-16 and evict least-recently-used entries.
const cache = new RenderCache<CacheEntry>(128 * 1024 * 1024, (entry) =>
  2 * (entry.result.code.length + (entry.result.error?.length || 0) +
    entry.result.deps.reduce((n, dep) => n + dep.length, 0)) + 512
);

/**
 * 依赖目录的「最新修改时间」。
 *
 * 反编译组件共用 data/tsx/_helpers 下的模块：只按入口文件 mtime 缓存会导致
 * 修了 helper 但入口没动时仍返回旧产物（实测踩过：补了导出还要手动加 ?t= 才生效）。
 * 这里取 helper 目录里所有文件 mtime 的最大值（1 秒内复用结果，避免每次编译都扫盘）。
 */
let stampCache: { at: number; value: number } = { at: 0, value: 0 };
function helperStamp(): number {
  const now = Date.now();
  if (now - stampCache.at < 1000) return stampCache.value;
  let max = 0;
  const walk = (dir: string) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name.includes('.backup') || e.name.includes('after-') || e.name.includes('safe-attempt')) continue;
        walk(p);
      } else if (e.isFile()) {
        try {
          const m = fs.statSync(p).mtimeMs;
          if (m > max) max = m;
        } catch {
          /* 忽略 */
        }
      }
    }
  };
  const base = path.join(TSX_DIR, '_helpers');
  walk(base);
  stampCache = { at: now, value: max };
  return max;
}

/**
 * 源码位置：
 *   components / blocks / app-ui : data/tsx/<kind>/<slug>.tsx（反编译还原版）
 *   free                         : data/code/free/<slug>.txt（原始 TSX，改后缀）
 */
function tsxPath(kind: RenderKind, slug: string): string {
  if (kind === 'free') {
    return path.join(ROOT, 'data', 'code', 'free', `${slug}.txt`);
  }
  return path.join(TSX_DIR, kind, `${slug}.tsx`);
}

/** 从源码里粗略提取第三方依赖名（用于给用户提示缺什么） */
export function extractDeps(code: string): string[] {
  const deps = new Set<string>();
  const re = /from\s+["']([^"']+)["']/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    const spec = m[1];
    if (spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('next/')) continue;
    const pkg = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];
    if (pkg !== 'react' && pkg !== 'react-dom') deps.add(pkg);
  }
  return [...deps].sort();
}

/**
 * 编译单个组件为自包含浏览器脚本。
 */
export async function compileRender(kind: RenderKind, slug: string, noCache = false): Promise<RenderResult> {
  const abs = tsxPath(kind, slug);
  if (!fs.existsSync(abs)) {
    return { ok: false, code: '', error: `找不到源码: data/tsx/${kind}/${slug}.tsx`, deps: [] };
  }

  const stat = fs.statSync(abs);
  const key = `${kind}/${slug}`;
  const stamp = helperStamp();
  // 缓存只在「源码没变」「helper 没变」且「不强制刷新」时命中。
  if (!noCache) {
    const hit = cache.get(key);
    if (hit && hit.mtimeMs === stat.mtimeMs && hit.size === stat.size && hit.helperStamp === stamp) {
      return hit.result;
    }
  }

  const source = fs.readFileSync(abs, 'utf8');
  const deps = extractDeps(source);

  /**
   * 导出形态因类别而异：
   *   components / blocks : export default Comp
   *   app-ui              : export { eG as components, eK as heights }，组件在 components[slug] 里
   * 所以 wrapper 先尝试 default，取不到再从 components 映射里按 slug 取。
   */
  const wrapper = `
import * as __mod from ${JSON.stringify('./' + path.basename(abs))};
import * as __React from 'react';
import { renderToStaticMarkup as __markup } from 'react-dom/server';
import { createRoot as __createRoot } from 'react-dom/client';
import __gsap from 'gsap';
import __gsapDraggable from 'gsap/Draggable';

/**
 * 原站这些组件从 window.gsap 取动画库（页面里由 <script> 注入）。
 * 我们本地没有那段注入脚本，所以这里把本地 gsap 挂到 window，
 * 否则内联的 gsap 代码会拿到 undefined，整块渲染直接失败。
 */
try {
  if (typeof window !== 'undefined' && !window.gsap) {
    window.gsap = __gsap;
    try { __gsap.registerPlugin(__gsapDraggable); } catch {}
    if (__gsapDraggable) window.Draggable = __gsapDraggable;
  }
} catch {}

const __pick = () => {
  if (__mod.default) return __mod.default;
  const map = __mod.components || (__mod.default && __mod.default.components);
  if (map && typeof map === 'object') {
    const bySlug = map[${JSON.stringify(slug)}];
    if (bySlug) return bySlug;
    const first = Object.values(map)[0];
    if (first) return first;
  }
  const keys = Object.keys(__mod).filter(k => typeof __mod[k] === 'function');
  if (keys.length) return __mod[keys[0]];
  return null;
};

const __Comp = __pick();

/**
 * 演示用 children。
 *
 * 很多免费组件是「包装器」（AnimatedContent / BlurText / CountUp ……）：
 * 它们只负责包裹和动效，自身没有内容，不传 children 就渲染成空 div。
 * 原站演示页会传示例内容，这里保持一致，给一段通用 demo 文案。
 */
const __DemoChildren = () => __React.createElement(
  'div',
  { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px', textAlign: 'center' } },
  __React.createElement('div', { style: { fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' } }, 'React Bits'),
  __React.createElement('div', { style: { fontSize: '13px', opacity: 0.6 } }, 'Demo content')
);

/**
 * 演示用 props。
 *
 * 另一类组件不是靠 children，而是靠必填 props 才出内容
 * （BlurText / CountUp / TypingText 的 text、number …）。
 *
 * 只放最必要的几个：React 会把不认识的 props 透传到 DOM 变成属性，
 * 塞太多会让页面出现一堆 text="…" label="…" 的脏属性。
 */
/**
 * 演示图片用应用自己的静态文件 /demo.svg，不用 data: URI
 * （实测 data URI 在预览 iframe 里 6 张图全部 naturalWidth=0，加载失败）。
 */
const __DEMO_IMG = '/demo.svg';

const __DemoProps = {
  text: 'React Bits',
  value: 100,
  number: 100,
  /**
   * 单个媒体类组件（logo-loop / bounce-cards / scroll-expand…）要的是
   * src / poster / alt 这些直接属性；不给就渲染一个空 img（看起来像空壳）。
   */
  src: __DEMO_IMG,
  poster: __DEMO_IMG,
  image: __DEMO_IMG,
  alt: 'React Bits demo',
  href: '#',
  url: '#',
  name: 'React Bits',
  title: 'React Bits',
  label: 'React Bits',
  description: 'A local preview of this component.',
  subtitle: 'Local preview',
  eyebrow: 'Preview',
  author: 'React Bits',
  role: 'Demo',
  company: 'React Bits',
  avatar: __DEMO_IMG,
  // CountUp 这类数字组件用 to/from 做必填参数，缺了 endValue=undefined 会渲染空。
  to: 2500,
  from: 0,
  end: 2500,
  start: 0,
  /**
   * 列表类组件（dock / masonry / logo-loop / drift-wall…）要的是「图片对象」，
   * 只给字符串它们会渲染成空。这里给一份带 src/alt/title 的演示数据，
   * 图片用内联 SVG，不依赖外部资源。
   */
  // 更多常见列表型 props：每个元素同时带多种字段，组件按需取用
  cards: [{ id: 'a', title: 'Demo 1', text: 'Demo', src: __DEMO_IMG, alt: 'Demo 1', href: '#' }, { id: 'b', title: 'Demo 2', text: 'Demo', src: __DEMO_IMG, alt: 'Demo 2', href: '#' }],
  links: [{ label: 'Demo 1', href: '#', name: 'Demo 1' }, { label: 'Demo 2', href: '#', name: 'Demo 2' }],
  tabs: [{ id: 'a', label: 'Demo 1', content: 'Demo 1' }, { id: 'b', label: 'Demo 2', content: 'Demo 2' }],
  steps: [{ title: 'Step 1', description: 'Demo', step: 1 }, { title: 'Step 2', description: 'Demo', step: 2 }],
  options: [{ value: 'a', label: 'Demo 1' }, { value: 'b', label: 'Demo 2' }],
  members: [{ name: 'Demo 1', role: 'Demo', src: __DEMO_IMG, alt: 'Demo 1' }, { name: 'Demo 2', role: 'Demo', src: __DEMO_IMG, alt: 'Demo 2' }],
  testimonials: [{ quote: 'Demo quote', name: 'Demo', role: 'Demo', src: __DEMO_IMG, alt: 'Demo' }],
  photos: [{ src: __DEMO_IMG, alt: 'Demo 1' }, { src: __DEMO_IMG, alt: 'Demo 2' }],
  slides: [{ src: __DEMO_IMG, alt: 'Demo 1' }, { src: __DEMO_IMG, alt: 'Demo 2' }],
  socials: [{ name: 'Demo 1', href: '#' }, { name: 'Demo 2', href: '#' }],
  menu: [{ label: 'Demo 1', href: '#' }, { label: 'Demo 2', href: '#' }],
  nav: [{ label: 'Demo 1', href: '#' }, { label: 'Demo 2', href: '#' }],
  data: [{ label: 'Demo 1', value: 40 }, { label: 'Demo 2', value: 60 }],
  rows: [{ id: 'a', name: 'Demo 1', value: 'Demo' }],
  cols: [{ id: 'a', name: 'Demo 1' }],
  services: [{ title: 'Demo 1', description: 'Demo' }, { title: 'Demo 2', description: 'Demo' }],
  pricing: [{ name: 'Demo', price: 19, features: ['Demo'] }],
  faqs: [{ question: 'Demo?', answer: 'Demo.' }],
  texts: ['React', 'Bits', 'Pro'],
  words: ['React', 'Bits', 'Pro'],
  phrases: ['React Bits', 'Local preview'],
  lines: ['React Bits', 'Local preview'],
  items: [
    { id: 'a', src: __DEMO_IMG, alt: 'Demo 1', title: 'Demo 1', label: 'Demo 1' },
    { id: 'b', src: __DEMO_IMG, alt: 'Demo 2', title: 'Demo 2', label: 'Demo 2' },
    { id: 'c', src: __DEMO_IMG, alt: 'Demo 3', title: 'Demo 3', label: 'Demo 3' },
    { id: 'd', src: __DEMO_IMG, alt: 'Demo 4', title: 'Demo 4', label: 'Demo 4' },
    { id: 'e', src: __DEMO_IMG, alt: 'Demo 5', title: 'Demo 5', label: 'Demo 5' },
    { id: 'f', src: __DEMO_IMG, alt: 'Demo 6', title: 'Demo 6', label: 'Demo 6' },
  ],
  images: [
    { id: 'a', src: __DEMO_IMG, alt: 'Demo 1' },
    { id: 'b', src: __DEMO_IMG, alt: 'Demo 2' },
    { id: 'c', src: __DEMO_IMG, alt: 'Demo 3' },
    { id: 'd', src: __DEMO_IMG, alt: 'Demo 4' },
  ],
  logos: [
    { name: 'Demo 1', src: __DEMO_IMG },
    { name: 'Demo 2', src: __DEMO_IMG },
    { name: 'Demo 3', src: __DEMO_IMG },
    { name: 'Demo 4', src: __DEMO_IMG },
  ],
};

// Masonry reads item.img (not item.src) and uses dimensions when laying out cards.
// Keep this adjustment scoped to that component; other components expect other shapes.
if (${JSON.stringify(kind)} === 'free' && ${JSON.stringify(slug)} === 'masonry') {
  __DemoProps.items = __DemoProps.items.map((item) => ({
    ...item, img: item.src, width: 400, height: 300,
  }));
}

// TextType is a typing animation. Without text it renders only the cursor '|',
// which the runner mistakes for real content and never escalates to demo props.
// Start it directly with demo text so the animation has something to type.
if (${JSON.stringify(kind)} === 'free' && ${JSON.stringify(slug)} === 'text-type') {
  __DemoProps.text = ['React Bits', 'Local preview', '中文演示'];
}

/**
 * 静态渲染：同步拿 HTML，用于纯展示（blocks 这类静态布局组件）。
 * motion 动画不会执行，元素会停在 initial 状态，所以清掉内联的
 * visibility:hidden / opacity:0 / transform，直接呈现最终状态。
 */
export function __render() {
  /** 渲染一次并清理动画的初始态 */
  const attempt = (mode) => {
    // mode: 0=原样  1=只补 children  2=补 children + 演示 props
    let el;
    if (mode === 0) el = __React.createElement(__Comp);
    else if (mode === 1) el = __React.createElement(__Comp, null, __React.createElement(__DemoChildren));
    else el = __React.createElement(__Comp, __DemoProps, __React.createElement(__DemoChildren));

    const raw = __markup(el);
    if (typeof document === 'undefined') return raw;
    const box = document.createElement('div');
    box.innerHTML = raw;
    for (const e of box.querySelectorAll('[style]')) {
      const s = e.style;
      if (s.visibility === 'hidden') s.visibility = '';
      if (s.opacity === '0') s.opacity = '';
      if (s.transform) s.transform = '';
      if (!s.cssText.trim()) e.removeAttribute('style');
    }
    return box.innerHTML;
  };

  /** 判断是否「有真实内容」 */
  const rich = h =>
    h.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '').trim().length > 0 ||
    /<canvas|<svg|<img|<video/i.test(h);

  try {
    // 逐级兜底：
    //   0 原样渲染 —— blocks / app-ui 这类自包含组件，塞 children 反而会破坏结构（React #130）
    //   1 补 demo children —— AnimatedContent / ClickSpark 这类包装器
    //   2 再补 demo props —— BlurText / CountUp 这类靠必填 props 出内容的
    for (const mode of [0, 1, 2]) {
      try {
        const html = attempt(mode);
        if (rich(html)) return html;
      } catch {
        /* 这个模式不行，试下一个 */
      }
    }
    // 全都没内容，返回原样结果（至少有结构）
    return attempt(0);
  } catch (e) {
    return {
      __error: String((e && e.message) || e),
      __stack: String((e && e.stack) || '').split('\\n').slice(0, 20).join('\\n'),
    };
  }
}

/**
 * 实时挂载：用产物自带的 React + createRoot 真跑组件（hooks / 动画 / 交互都生效）。
 * 用于 app-ui 这类依赖 DOM 状态、静态渲染会炸的组件。
 */
export function __mount(host) {
  /**
   * 实时挂载。
   *
   * 不能无条件塞 children/props：blocks、app-ui 这类自包含组件被硬塞 props 会
   * 破坏内部结构，直接抛 React #130。所以先按原样挂载，400ms 后如果没出内容，
   * 再依次尝试「补 children」「补 children + props」。
   *
   * 返回 { ok, mode }，调用方据此知道该不该再退回静态渲染。
   */
  const tryRender = (mode) => {
    const el =
      mode === 0
        ? __React.createElement(__Comp)
        : mode === 1
        ? __React.createElement(__Comp, null, __React.createElement(__DemoChildren))
        : __React.createElement(__Comp, __DemoProps, __React.createElement(__DemoChildren));
    root.render(el);
  };

  const root = __createRoot(host);
  let mode = (${JSON.stringify(kind)} === 'free' && ${JSON.stringify(slug)} === 'text-type')
    || (${JSON.stringify(kind)} === 'components' && ${JSON.stringify(slug)} === 'simple-graph') ? 2 : 0;
  try {
    tryRender(mode);
  } catch (e) {
    // 首轮同步抛错（组件强制要求 props/children），直接上最全的参数
    try {
      mode = 2;
      tryRender(2);
    } catch (e2) {
      return { ok: false, error: String((e2 && e2.message) || e2), mode };
    }
  }

  /** 检查 host 里是否真的出现了内容 */
  const hasContent = () => {
    const t = (host.innerText || '').replace(/\s+/g, '').trim();
    return t.length > 0 || !!host.querySelector('canvas,svg,img,video');
  };

  return {
    ok: true,
    mode,
    /**
     * 没内容就升级重试。
     *
     * 顺序用 [2, 1] 而不是 [1, 2]：
     *   - mode 2 = 补 children + 演示 props
     *   - mode 1 = 只补 children
     *
     * 原因：count-up 这类「必填数字 props」组件在 mode 0/1 下会**异步**抛错
     * （to=undefined → toString 崩），而 createRoot 的异步错误不会被 tryRender
     * 的同步 try/catch 捕获。旧顺序 [1,2] 里 mode 1 同步不抛就直接 return 了，
     * 永远升不到带 props 的 mode 2，最终走静态兜底、又因 free 组件没有预览图而全白。
     *
     * 反过来给自包含的 blocks / app-ui 塞多余 props 是安全的（React 忽略未使用
     * 的 props），只有硬塞 children 才可能破坏结构，所以把「带 props」排在前面、
     * 「带 children」排在后面。
     */
    escalate: () => {
      if (hasContent()) return { done: true };
      for (const m of [2, 1]) {
        try {
          tryRender(m);
          return { done: false, mode: m };
        } catch {
          /* 试下一个 */
        }
      }
      return { done: false, mode: -1 };
    },
    hasContent,
  };
}

export default __Comp;
`;

  /**
   * 依赖处理策略：
   *
   * react / react-dom / motion / lucide-react 全部内联进产物，让产物自带一份完整
   * React 运行时。
   *
   * data/tsx/_helpers/ 里混了两类东西：
   *   - 真图标组件（SVG path 数据，477/551 个能正常编译）→ 必须正常打包
   *   - 反编译 webpack 产物时误抓的 Next.js 内部模块残片（74 个，import 了不存在的
   *     Next 内部 chunk，根本编译不了）→ stub 成空对象
   * 所以不能一刀切，要按文件是否存在、能否解析来区分。
   */
  const helperStubPlugin = {
    name: 'stub-broken-helpers',
    setup(buildApi: any) {
      // 反编译残片引用的 Next 内部 chunk 都是 `./数字` 这种形式，且文件不存在。
      // 只要目标文件不存在就 stub，避免整棵依赖树挂掉。
      buildApi.onResolve({ filter: /^\.\.?\/[0-9]+$/ }, (args: any) => {
        const base = args.resolveDir || path.dirname(abs);
        const target = path.resolve(base, args.path);
        const candidates = [`${target}.tsx`, `${target}.ts`, `${target}.js`, target];
        if (candidates.some(p => fs.existsSync(p))) return undefined;
        return { path: 'rb-stub', namespace: 'rb-stub' };
      });
      // _helpers 目录下不存在的模块也 stub
      buildApi.onResolve({ filter: /_helpers\// }, (args: any) => {
        const base = args.resolveDir || path.dirname(abs);
        const target = path.resolve(base, args.path);
        const candidates = [`${target}.tsx`, `${target}.ts`, target];
        if (candidates.some(p => fs.existsSync(p))) return undefined;
        return { path: 'rb-stub', namespace: 'rb-stub' };
      });
      /**
       * 缺失模块 stub。
       *
       * 反编译时把 Next.js / React 的内部模块误当成了组件依赖，引用了不存在的
       * 编号模块（10483、64054、21757…）。实测这些只提供框架能力：
       * useParams / notFound / redirect / unstable_scheduleCallback / style 等。
       *
       * 不能返回空对象 —— useParams() 返回 undefined 会让组件解构时崩。
       * 这里改成「虚拟模块 + 显式具名导出」，每个成员给可用的默认实现。
       */
      buildApi.onLoad({ filter: /.*/, namespace: 'rb-stub' }, () => ({
        contents: `
import * as __R from 'react';

const __EMPTY_PARAMS = {};
const __EMPTY_SEARCH = {
  get: () => null, getAll: () => [], has: () => false,
  keys: () => [][Symbol.iterator](), values: () => [][Symbol.iterator](),
  entries: () => [][Symbol.iterator](), forEach: () => {},
  toString: () => '', [Symbol.iterator]: () => [][Symbol.iterator](),
};
const __noop = () => {};
const __process = { env: { NODE_ENV: 'production' }, version: 'v18.0.0', versions: { node: '18.0.0' }, emit: () => {}, on: () => __process, once: () => __process, off: () => __process, cwd: () => '/', nextTick: (cb) => setTimeout(cb, 0), browser: true };

function __shell() {
  return new Proxy(function () {}, {
    get(t, k) {
      if (k === Symbol.toPrimitive) return () => 0;
      if (k === 'then') return undefined;
      if (k === '__esModule') return true;
      return __shell();
    },
    apply() { return __shell(); },
    construct() { return __shell(); },
  });
}

export const useParams = () => __EMPTY_PARAMS;
export const useSearchParams = () => __EMPTY_SEARCH;
export const usePathname = () => '/';
export const useRouter = () => ({ push: __noop, replace: __noop, back: __noop, forward: __noop, refresh: __noop, prefetch: __noop });
export const useSelectedLayoutSegment = () => null;
export const useSelectedLayoutSegments = () => [];
export const useServerInsertedHTML = __noop;

export const notFound = __noop;
export const redirect = __noop;
export const permanentRedirect = __noop;
export const forbidden = __noop;
export const unauthorized = __noop;
export const unstable_rethrow = __noop;
export const isRedirectError = () => false;
export const RedirectType = { push: 'push', replace: 'replace' };
export const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';

export const unstable_scheduleCallback = (p, cb) => { const id = setTimeout(cb, 0); return { id }; };
export const unstable_cancelCallback = (t) => { if (t && t.id) clearTimeout(t.id); };
export const unstable_shouldYield = () => false;
export const unstable_requestPaint = __noop;
export const unstable_now = () => Date.now();
export const unstable_ImmediatePriority = 1;
export const unstable_UserBlockingPriority = 2;
export const unstable_NormalPriority = 3;
export const unstable_IdlePriority = 4;
export const unstable_LowPriority = 5;
export const log = __noop;
export const unstable_setDisableYieldValue = __noop;
export const unstable_getCurrentPriorityLevel = () => 3;

export const style = {};
export const styles = {};
export const process = __process;
export const env = __process.env;
export const version = __process.version;
export const versions = __process.versions;
export const emit = __process.emit;
export const workAsyncStorageInstance = { getStore: () => undefined, run: (s, fn) => fn(), exit: (fn) => fn() };

export const ConcurrentRoot = 1;
export const ContinuousEventPriority = 8;
export const DefaultEventPriority = 32;
export const DiscreteEventPriority = 2;
export const NoEventPriority = 0;
export const IdleEventPriority = 32;

export const BailoutToCSR = ({ children }) => __R.createElement(__R.Fragment, null, children);

export default __shell();
`,
        loader: 'js' as const,
        resolveDir: ROOT,
      }));

      /**
       * motion/react 用自写的轻量替身。
       * 原站组件是用旧版 motion 的结构反编译还原的，装新版 motion 时
       * AnimatePresence 内部会抛 "is not iterable"。替身保留 DOM 结构和样式，
       * 跳过动画时序，视觉一致。
       */
      buildApi.onResolve({ filter: /^motion\/react$/ }, () => ({
        path: path.join(ROOT, 'lib', 'motion-shim.js'),
      }));
      buildApi.onResolve({ filter: /^framer-motion$/ }, () => ({
        path: path.join(ROOT, 'lib', 'motion-shim.js'),
      }));
      // lucide-react 图标改名兼容（Funnel→Filter 等）。
      // 关键：必须用「虚拟模块 + 显式具名导出」的方式，不能指向一个
      // `module.exports = obj` 的 CJS 文件——esbuild 会把那种当默认导出，
      // 所有具名导入（ArrowUpRight 等）都会变成 undefined，导致 React #130。
      buildApi.onResolve({ filter: /^lucide-react$/ }, () => ({
        path: 'rb-lucide',
        namespace: 'rb-lucide',
      }));

      /**
       * 关于 helper 的导出名错位（实测 1108 处 / 368 种）：
       *
       * 尝试过「把 __mod_X.y 改写成 __rbGet(__mod_X,'y')」的兜底，但会破坏语义
       * （new 构造、class extends、直接当函数调用都会失效），比不放兜底更糟，已放弃。
       *
       * 现状处理：这类受影响的组件（主要是 pro components 里的 WebGL/3D 类）
       * 不走本地实时渲染 —— 它们本来就有原站导出的静态预览图（460 张 webp），
       * 卡片和详情页直接用图，视觉与原站一致。
       * blocks / app-ui / free 的绝大多数组件编译执行正常，走实时渲染。
       */
      buildApi.onLoad({ filter: /.*/, namespace: 'rb-lucide' }, () => {
        /**
         * 关键：不能直接 `require.resolve('lucide-react')` 或
         * `require(path.join(ROOT,'node_modules','lucide-react'))`。
         * next build 时 webpack 会拦截这类调用 —— 前者被静态替换成数字模块 ID
         * （esbuild 就报 "Expected string but found 3027"），后者在生产环境里
         * 解析不到（报 "Cannot find module"）。
         * 用 createRequire 拿一个「真实 Node require」，完全绕开 webpack。
         */
        const { createRequire } = require('module');
        const nodeRequire = createRequire(path.join(ROOT, 'package.json'));
        const lucidePkg = nodeRequire.resolve('lucide-react');
        const lucide = nodeRequire('lucide-react');

        const isIdentifier = (n: string) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(n);
        const names = Object.keys(lucide).filter(n => /^[A-Z]/.test(n) && isIdentifier(n));

        const lines: string[] = [];
        lines.push('import * as __LIB from ' + JSON.stringify(lucidePkg) + ';');
        lines.push('const __L = __LIB;');
        for (const n of names) lines.push(`export const ${n} = __L[${JSON.stringify(n)}];`);

        const aliasMap = {
          Funnel: 'Filter',
          CircleQuestionMark: 'CircleHelp',
          HelpCircle: 'CircleHelp',
          Edit: 'Pencil',
          Edit2: 'PenLine',
          Edit3: 'PenLine',
        };
        for (const [oldName, newName] of Object.entries(aliasMap)) {
          if (!names.includes(oldName) && names.includes(newName)) {
            lines.push(`export const ${oldName} = __L[${JSON.stringify(newName)}];`);
          }
        }
        lines.push('export default __L;');

        return {
          contents: lines.join('\n'),
          loader: 'js' as const,
          resolveDir: ROOT,
        };
      });
      // 免费组件源码引用 ./Xxx.css，文件本身没抓到。样式主要走内联 style/Tailwind，
      // 这些 css 多是动画细节，stub 成空样式，保证编译通过、主体视觉不受影响。
      buildApi.onResolve({ filter: /\.css$/ }, () => ({
        path: 'rb-empty.css',
        namespace: 'rb-css-stub',
      }));
      buildApi.onLoad({ filter: /.*/, namespace: 'rb-css-stub' }, () => ({
        contents: '/* stubbed */',
        loader: 'css' as const,
      }));
    },
  };

  try {
    const out = await build({
      stdin: {
        contents: wrapper,
        resolveDir: path.dirname(abs),
        loader: 'tsx',
        // 注意：sourcefile 不能写成组件文件名，否则 esbuild 会把 stdin 当成那个文件、
        // 造成循环引用，产物被 tree-shake 成空壳（只剩几百字节）。
        sourcefile: 'rb-wrapper.tsx',
      },
      bundle: true,
      /**
       * 不要 tree-shake。
       *
       * 反编译产物的 import 用的是 `import * as __mod_X` 这种命名空间写法，
       * 而 esbuild 的 tree-shaking 会把「只用到某个成员」的命名空间裁掉、把成员内联，
       * 结果个别文件里 `__mod_X` 还留着引用却没声明了，运行时报
       * `__mod_28547 is not defined`（editor-1 就是这样整块空掉）。
       * 关掉树摇动，产物会大一点，但不会再把依赖裁坏。
       */
      treeShaking: false,
      format: 'iife',
      globalName: '__RB_COMPONENT__',
      write: false,
      jsx: 'automatic',
      platform: 'browser',
      target: ['es2020'],
      // free 组件源码存在 data/code/free/<slug>.txt（后缀是 txt，内容是 TSX）
      loader: { '.txt': 'tsx' },
      logLevel: 'silent',
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      outfile: 'out.js',
      plugins: [helperStubPlugin],
      logLimit: 5,
    });
    let code = out.outputFiles[0].text;

    /**
     * 兜底 0：反编译产物里带了 next/link 等客户端代码，它们会读 `process.env`。
     * 浏览器里没有 process，导入阶段就 "process is not defined"，
     * 整个组件直接失败 → 页面只能退回预览图。这里补一个最小 process 垫片。
     */
    code =
      'var process = (typeof globalThis !== "undefined" && globalThis.process) || {' +
      ' env: { NODE_ENV: "production" }, browser: true, title: "browser",' +
      ' version: "", versions: {}, platform: "browser", argv: [], execArgv: [],' +
      ' cwd: function(){ return "/"; }, nextTick: function(f){ return setTimeout(f, 0); },' +
      ' on: function(){ return this; }, once: function(){ return this; },' +
      ' off: function(){ return this; }, emit: function(){ return false; },' +
      ' removeListener: function(){ return this; }, binding: function(){ return {}; }' +
      '};\n' + code;

    /**
     * 兜底：反编译产物里有一部分「调用了一个没导出的成员」，编译后变成
     * `(0, void 0)(...)`，一加载就抛 TypeError，把整个组件带崩。
     * 这些成员多是 Radix 的内部工具（作用域/集合/提示层），拿不到时的合理降级
     * 是「什么都不做」：用 __rbNoop 代替，组件还能渲染出主体内容。
     */
    const before = code;
    code = code.replace(/\(0,\s*void 0\)\s*\(/g, '__rbNoop(').replace(/\(void 0\)\s*\(/g, '__rbNoop(');
    if (code !== before) {
      code =
        'var __rbNoop = (function(){ var p; p = new Proxy(function(){ return p; }, {' +
        'get: function(_t, k){' +
        "if (k === 'resolvedTheme' || k === 'theme') return 'dark';" +
        "if (k === 'children') return null;" +
        "if (k === 'length') return 0;" +
        'if (k === Symbol.iterator) return function(){ return [][Symbol.iterator](); };' +
        "if (k === 'default') return p;" +
        "if (k === 'then') return undefined;" +
        'return p;' +
        '},' +
        'apply: function(){ return p; },' +
        'construct: function(){ return p; }' +
        '}); return p; })();\n' + code;
    }

    /**
     * 兜底 2：反编译里丢了组件的定义（比如模块只留下导出语句，组件本体不见了），
     * 渲染时就变成「JSX 类型是 undefined」，React 直接抛 #130，整块白。
     * 这里包一层 JSX 运行时：遇到 undefined 类型就换成渲染 null 的空组件，
     * 保住同一屏里的其余内容（文字、其他卡片）。
     */
    code = code.replace(
      /var (import_jsx_runtime\d*) = __toESM\(require_jsx_runtime\(\)\);/g,
      (m, name) => `${m}\n  ${name} = Object.assign({}, ${name}, { jsx: __rbWrapJsx(${name}.jsx), jsxs: __rbWrapJsx(${name}.jsxs) });`
    );
    if (code.includes('__rbWrapJsx(')) {
      code =
        'var __rbMissing = function(){ return null; };\n' +
        'function __rbWrapJsx(fn){ return function(t, p){ if (t === undefined || t === null) t = __rbMissing; return fn.apply(null, arguments.length > 2 ? [t, p].concat([].slice.call(arguments, 2)) : [t, p]); }; }\n' +
        code;
    }

    const result: RenderResult = { ok: true, code, deps };
    cache.set(key, { mtimeMs: stat.mtimeMs, size: stat.size, helperStamp: stamp, result });
    return result;
  } catch (e: any) {
    const errs = (e?.errors || []).map((x: any) => `${x.text}${x.location ? ` @${x.location.file}:${x.location.line}` : ''}`);
    const result: RenderResult = {
      ok: false,
      code: '',
      error: errs.join(' | ') || String(e?.message || e),
      deps,
    };
    cache.set(key, { mtimeMs: stat.mtimeMs, size: stat.size, helperStamp: stamp, result });
    return result;
  }
}
