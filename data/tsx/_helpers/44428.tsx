import * as __mod_46314 from "./46314";
/**
 * 内部辅助模块 44428（自动内联）
 * 被页面区块共享使用。
 */


let s = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
function A(t, e, i, r) {
  return t === e && i === r ? __mod_46314.l : n => 0 === n || 1 === n ? n : s(function (t, e, i, n, r) {
    let a,
      o,
      l = 0;
    do (a = s(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(a) > 1e-7 && ++l < 12);
    return o;
  }(n, 0, 1, t, i), e, r);
}

export { s as default, s };
export { A };
