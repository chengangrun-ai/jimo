/**
 * 72498 —— 原站 styled-jsx 运行时片段的残留。
 *
 * 反编译后是「顶层语句 + 未定义的 exports 变量 t」，`t.style = y` 一执行就
 * "t is not defined"。这里给出等价的最小实现。
 *
 * 注意调用形态：组件里写的是 `c().dynamic([...])`——先调用、再取 dynamic。
 * 所以默认导出必须是一个「调用后返回对象」的函数，该对象同时：
 *   - 有 dynamic() 返回类名字符串；
 *   - toString() 返回空串，这样直接当 className 用也不会渲染出 [object Object]。
 */
function makeApi(): any {
  const api: any = {
    dynamic(items: Array<[string, any]> = []): string {
      try {
        return (items || []).map(([a, b]) => `${a}${Array.isArray(b) ? '-' + b.length : ''}`).join(' ');
      } catch {
        return '';
      }
    },
    style(): string { return ''; },
    styles(): string { return ''; },
    toString(): string { return ''; },
  };
  return api;
}

export function style(): string { return ''; }
export function styles(): string { return ''; }
export function dynamic(items: Array<[string, any]> = []): string { return makeApi().dynamic(items); }

const api: any = makeApi();
export default api;
