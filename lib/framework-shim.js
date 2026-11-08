/**
 * 框架内部模块的精确替身。
 *
 * 反编译时把 Next.js / React 的内部模块误当成了组件依赖，引用了不存在的
 * 编号模块（如 10483、64054），导致编译失败。实测这些模块提供给组件的
 * 只有下面这些 API，全部是框架能力，不是组件真正需要的数据。
 *
 * 这里按成员名给它们**有意义的默认实现**，而不是一刀切空对象
 * （空对象会让 useParams() 返回 undefined，组件解构时直接崩）。
 */
const React = require('react');

/** 空参数对象（useParams / useSearchParams 的默认值） */
const EMPTY_PARAMS = {};
const EMPTY_SEARCH = {
  get: () => null,
  getAll: () => [],
  has: () => false,
  keys: () => [][Symbol.iterator](),
  values: () => [][Symbol.iterator](),
  entries: () => [][Symbol.iterator](),
  forEach: () => {},
  toString: () => '',
  [Symbol.iterator]: () => [][Symbol.iterator](),
};

/** Next.js 路由 hooks：渲染预览时没有真实路由，返回安全默认值 */
const useParams = () => EMPTY_PARAMS;
const useSearchParams = () => EMPTY_SEARCH;
const usePathname = () => '/';
const useRouter = () => ({
  push: () => {},
  replace: () => {},
  back: () => {},
  forward: () => {},
  refresh: () => {},
  prefetch: () => {},
});
const useSelectedLayoutSegment = () => null;
const useSelectedLayoutSegments = () => [];
const useServerInsertedHTML = () => {};

/** Next.js 导航 API：预览环境里静默处理，别抛错打断渲染 */
const notFound = () => {};
const redirect = () => {};
const permanentRedirect = () => {};
const forbidden = () => {};
const unauthorized = () => {};
const unstable_rethrow = () => {};
const isRedirectError = () => false;
const RedirectType = { push: 'push', replace: 'replace' };
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';

/** React 调度器常量与函数 */
const scheduler = {
  unstable_scheduleCallback: (priority, cb) => {
    const id = setTimeout(cb, 0);
    return { id };
  },
  unstable_cancelCallback: (task) => {
    if (task && task.id) clearTimeout(task.id);
  },
  unstable_shouldYield: () => false,
  unstable_requestPaint: () => {},
  unstable_now: () => Date.now(),
  unstable_ImmediatePriority: 1,
  unstable_UserBlockingPriority: 2,
  unstable_NormalPriority: 3,
  unstable_IdlePriority: 4,
  unstable_LowPriority: 5,
  log: () => {},
  unstable_setDisableYieldValue: () => {},
  unstable_getCurrentPriorityLevel: () => 3,
};

/** style / styles 这类样式对象 */
const style = {};
const styles = {};

/** process 替身（next 的 process polyfill 模块） */
const processShim = {
  env: { NODE_ENV: 'production' },
  version: 'v18.0.0',
  versions: { node: '18.0.0' },
  emit: () => {},
  on: () => processShim,
  once: () => processShim,
  off: () => processShim,
  cwd: () => '/',
  nextTick: (cb) => setTimeout(cb, 0),
  browser: true,
};

/** AsyncLocalStorage 替身 */
const workAsyncStorageInstance = {
  getStore: () => undefined,
  run: (_store, fn) => fn(),
  exit: (fn) => fn(),
};

/** React root 常量 */
const ConcurrentRoot = 1;
const ContinuousEventPriority = 8;
const DefaultEventPriority = 32;
const DiscreteEventPriority = 2;
const NoEventPriority = 0;
const IdleEventPriority = 32;

/** 通用兜底：被访问任意成员时返回安全空壳 */
function shell() {
  return new Proxy(function () {}, {
    get(t, k) {
      if (k === Symbol.toPrimitive) return () => 0;
      if (k === 'then') return undefined;
      if (k === '__esModule') return true;
      if (k === 'default') return shell();
      return shell();
    },
    apply() { return shell(); },
    construct() { return shell(); },
  });
}

/** BailoutToCSR：Next 的客户端渲染包器，直接渲染 children */
const BailoutToCSR = ({ children }) => React.createElement(React.Fragment, null, children);

const all = {
  // Next 路由
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  useServerInsertedHTML,
  // Next 导航
  notFound,
  redirect,
  permanentRedirect,
  forbidden,
  unauthorized,
  unstable_rethrow,
  isRedirectError,
  RedirectType,
  REDIRECT_ERROR_CODE,
  // 调度器
  ...scheduler,
  // 样式
  style,
  styles,
  // 其它
  process: processShim,
  env: processShim.env,
  version: processShim.version,
  versions: processShim.versions,
  emit: processShim.emit,
  workAsyncStorageInstance,
  ConcurrentRoot,
  ContinuousEventPriority,
  DefaultEventPriority,
  DiscreteEventPriority,
  NoEventPriority,
  IdleEventPriority,
  BailoutToCSR,
};

module.exports = all;
module.exports.__shell = shell;
