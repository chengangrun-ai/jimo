import * as __mod_42174 from './42174';
import * as __mod_52572 from './52572';
/**
 * 内部辅助模块 52124（next/dynamic 的 loadable 实现）
 *
 * 原始 webpack 形态用 Object.defineProperty(t, ...) 挂导出、e.exports 收尾，
 * 那是 CJS 写法。这里转成等价 ESM：保留核心函数定义，直接具名导出。
 */

const n = __mod_42174._(__mod_52572);

function l(e: any, t: any) {
  const r: any = {};
  if (typeof e === 'function') r.loader = e;
  const merged = { ...r, ...t };
  return (0, n.default)({ ...merged, modules: merged.loadableGenerated?.modules });
}

export { n as default, n, l };
