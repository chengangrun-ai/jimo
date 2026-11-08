import * as __mod_5500 from "./5500";
import * as __mod_74288 from "./74288";
/**
 * 内部辅助模块 49629（自动内联）
 * 被页面区块共享使用。
 */


function E(e, ...t) {
  let r = e.length;
  return (0, __mod_5500.j)(t.filter(__mod_74288.S), function () {
    let l = "";
    for (let a = 0; a < r; a++) {
      l += e[a];
      let r = t[a];
      r && (l += (0, __mod_74288.S)(r) ? r.get() : r);
    }
    return l;
  });
}

export { E as default, E };