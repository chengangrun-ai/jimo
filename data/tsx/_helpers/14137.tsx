import * as __mod_74288 from "./74288";
import * as __mod_97706 from "./97706";
/**
 * 内部辅助模块 14137（自动内联）
 * 被页面区块共享使用。
 */


function r(t, e, i) {
  let {
      style: r
    } = t,
    a = {};
  for (let o in r) ((0, __mod_74288.S)(r[o]) || e.style && (0, __mod_74288.S)(e.style[o]) || (0, __mod_97706.z)(o, t) || i?.getValue(o)?.liveStyle !== void 0) && (a[o] = r[o]);
  return a;
}

export { r as x };
