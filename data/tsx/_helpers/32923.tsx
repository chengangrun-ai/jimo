import * as __mod_37377 from "./37377";
import * as __mod_5500 from "./5500";
import * as __mod_83548 from "./83548";
import * as __mod_24694 from "./24694";
/**
 * 内部辅助模块 32923（自动内联）
 * 被页面区块共享使用。
 */


function G(e, t, r, l) {
  if ("function" == typeof e) {
    let t;
    return __mod_37377.bt.current = [], e(), t = (0, __mod_5500.j)(__mod_37377.bt.current, e), __mod_37377.bt.current = void 0, t;
  }
  let s = "function" == typeof t ? t : function (...e) {
    let t = !Array.isArray(e[0]),
      r = t ? 0 : -1,
      l = e[0 + r],
      a = e[1 + r],
      i = e[2 + r],
      s = e[3 + r],
      o = (0, __mod_83548.G)(a, i, s);
    return t ? o(l) : o;
  }(t, r, l);
  return Array.isArray(e) ? o(e, s) : o([e], ([e]) => s(e));
}
function o(e, t) {
  let r = (0, __mod_24694.M)(() => []);
  return (0, __mod_5500.j)(e, () => {
    r.length = 0;
    let n = e.length;
    for (let t = 0; t < n; t++) r[t] = e[t].get();
    return t(r);
  });
}

// 原始 32923 的导出 G 对应这里的函数 G。
export { G };
