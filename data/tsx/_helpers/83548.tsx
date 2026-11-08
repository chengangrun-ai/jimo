import * as __mod_62879 from "./62879";
import * as __mod_47952 from "./47952";
import * as __mod_93858 from "./93858";
import * as __mod_46314 from "./46314";
import * as __mod_22506 from "./22506";
import * as __mod_59667 from "./59667";
import * as __mod_62369 from "./62369";
/**
 * 内部辅助模块 83548（自动内联）
 * 被页面区块共享使用。
 */


function G(t, e, {
  clamp: i = !0,
  ease: d,
  mixer: c
} = {}) {
  let p = t.length;
  if ((0, __mod_62879.V)(p === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === p) return () => e[0];
  if (2 === p && e[0] === e[1]) return () => e[1];
  let m = t[0] === t[1];
  t[0] > t[p - 1] && (t = [...t].reverse(), e = [...e].reverse());
  let f = function (t, e, i) {
      let a = [],
        o = i || __mod_47952.W.mix || __mod_93858.j,
        l = t.length - 1;
      for (let i = 0; i < l; i++) {
        let n = o(t[i], t[i + 1]);
        if (e) {
          let t = Array.isArray(e) ? e[i] || __mod_46314.l : e;
          n = (0, __mod_22506.F)(t, n);
        }
        a.push(n);
      }
      return a;
    }(e, d, c),
    v = f.length,
    g = i => {
      if (m && i < t[0]) return e[0];
      let n = 0;
      if (v > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
      let s = (0, __mod_59667.q)(t[n], t[n + 1], i);
      return f[n](s);
    };
  return i ? e => g((0, __mod_62369.q)(t[0], t[p - 1], e)) : g;
}

export { G as default, G };