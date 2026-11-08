import * as __mod_18543 from "./18543";
import * as __mod_18893 from "./18893";
/**
 * 内部辅助模块 56191（自动内联）
 * 被页面区块共享使用。
 */


let Wg = __mod_18543.f5.filter(e => !e.hidden).length,
  i = e => e.reduce((e, t) => e + (t.variants?.length ?? 1), 0),
  o = __mod_18543.Bz.length,
  UQ = i(__mod_18543.Bz),
  Ce = __mod_18543.un.length,
  L4 = i(__mod_18543.un),
  d = __mod_18543.IT.length,
  FW = __mod_18893.K_.length + 1,
  f = __mod_18543.f5.filter(e => !e.hidden && e.isNew).length,
  BZ = __mod_18543.Bz.filter(e => !e.hidden).reduce((e, t) => e + (t.variants?.filter(e => e.isNew).length ?? 0), 0),
  g = __mod_18543.IT.filter(e => !e.hidden && e.isNew).length,
  h = Wg + UQ + L4 + d + FW;

export { Wg as default, Wg };
export { g as _I, d as nk, h as ub, o as xJ, f as xw };
export { BZ, Ce, FW, L4, UQ };
