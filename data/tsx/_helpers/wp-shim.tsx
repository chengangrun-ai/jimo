/**
 * webpack `require.n` 的等价实现：取模块的默认导出。
 * 反编译产物里残留的 `r.n(x)` 会指向未定义变量，统一换成这里。
 */
export function wpN(mod: any): any {
  if (mod == null) return mod;
  if (typeof mod === 'object' || typeof mod === 'function') {
    if ('default' in mod) return (mod as any).default;
    if ((mod as any).__esModule && (mod as any).default !== undefined) return (mod as any).default;
  }
  return mod;
}
