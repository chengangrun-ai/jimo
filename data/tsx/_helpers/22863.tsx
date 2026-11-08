/**
 * 内部辅助模块 22863（自动内联）
 * 被页面区块共享使用。
 */


let i = Math.abs,
  FP = Math.atan2,
  o = Math.cos,
  T9 = Math.max,
  s = Math.min,
  F8 = Math.sin,
  RZ = Math.sqrt,
  Ni = 1e-12,
  a = Math.PI,
  TW = a / 2,
  FA = 2 * a;
function HQ(t) {
  return t > 1 ? 0 : t < -1 ? a : Math.acos(t);
}
function d(t) {
  return t >= 1 ? TW : t <= -1 ? -TW : Math.asin(t);
}

export { d as qR };
export { i as tn };
export { o as gn, s as jk, a as pi };
export { F8, FA, FP, HQ, Ni, RZ, T9, TW };
