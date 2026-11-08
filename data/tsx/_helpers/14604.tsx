import * as __mod_14029 from "./14029";
import * as __mod_39017 from "./39017";
import * as __mod_33361 from "./33361";
/**
 * 内部辅助模块 14604（自动内联）
 * 被页面区块共享使用。
 */


let r = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
let o = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  l = __mod_14029.U.length;
function O(t, e, i) {
  let {
      style: h,
      vars: u,
      transformOrigin: d
    } = t,
    c = !1,
    p = !1;
  for (let t in e) {
    let i = e[t];
    if (__mod_14029.f.has(t)) {
      c = !0;
      continue;
    }
    if ((0, __mod_39017.j)(t)) {
      u[t] = i;
      continue;
    }
    {
      let e = r(i, __mod_33361.W[t]);
      t.startsWith("origin") ? (p = !0, d[t] = e) : h[t] = e;
    }
  }
  if (!e.transform && (c || i ? h.transform = function (t, e, i) {
    let s = "",
      h = !0;
    for (let u = 0; u < l; u++) {
      let l = __mod_14029.U[u],
        d = t[l];
      if (void 0 === d) continue;
      let c = !0;
      if (!(c = "number" == typeof d ? d === +!!l.startsWith("scale") : 0 === parseFloat(d)) || i) {
        let t = r(d, __mod_33361.W[l]);
        if (!c) {
          h = !1;
          let e = o[l] || l;
          s += `${e}(${t}) `;
        }
        i && (e[l] = t);
      }
    }
    return s = s.trim(), i ? s = i(e, h ? "" : s) : h && (s = "none"), s;
  }(e, t.transform, i) : h.transform && (h.transform = "none")), p) {
    let {
      originX: t = "50%",
      originY: e = "50%",
      originZ: i = 0
    } = d;
    h.transformOrigin = `${t} ${e} ${i}`;
  }
}

export { r as default, r };
export { h as O };
