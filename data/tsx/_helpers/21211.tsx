/**
 * 21211 —— 原站 styled-jsx 运行时片段（组件里通过 c().dynamic(...) 使用）。
 *
 * 关键点：组件写的是「先调用、再取 dynamic」，所以默认导出必须是一个可调用的
 * 函数，且该函数的返回值本身也带 dynamic()。两者都补上，任何调用形态都不报错。
 */
import * as __mod_72498 from './72498';

type Api = { dynamic: (items?: Array<[string, any]>) => string };

function makeCallable(): any {
  const base = ((__mod_72498 as any).default ?? __mod_72498) as any;
  const fn: any = function () {
    return fn;
  };
  fn.dynamic = (items: Array<[string, any]> = []): string => {
    try {
      return (items || []).map(([a, b]) => `${a}${Array.isArray(b) ? '-' + b.length : ''}`).join(' ');
    } catch {
      return '';
    }
  };
  fn.style = () => '';
  fn.styles = () => '';
  fn.toString = () => '';
  // 若原模块本身就有 dynamic，优先用它的实现
  if (base && typeof base.dynamic === 'function') fn.dynamic = base.dynamic.bind(base);
  return fn;
}

const __callable: any = makeCallable();
export const __v = __callable;
export { __v as default, __v as style };
