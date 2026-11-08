import * as __mod_32544 from "./32544";
import * as __mod_33293 from "./33293";
import * as __mod_84017 from "./84017";
import * as __mod_62879 from "./62879";
import * as __mod_98611 from "./98611";
import * as __mod_39017 from "./39017";
import * as __mod_60091 from "./60091";
import * as __mod_9779 from "./9779";
import * as __mod_22506 from "./22506";
/**
 * 内部辅助模块 93858（自动内联）
 * 被页面区块共享使用。
 */


function u(t, e, i) {
  return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
}
function c(t, e) {
  return i => i > 0 ? e : t;
}
let m = (t, e, i) => {
    let n = t * t,
      s = i * (e * e - n) + n;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  f = [__mod_32544.u, __mod_33293.B, __mod_84017.V];
function v(t) {
  let e = f.find(e => e.test(t));
  if ((0, __mod_62879.$)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
  let i = e.parse(t);
  return e === __mod_84017.V && (i = function ({
    hue: t,
    saturation: e,
    lightness: i,
    alpha: n
  }) {
    t /= 360, i /= 100;
    let s = 0,
      r = 0,
      a = 0;
    if (e /= 100) {
      let n = i < .5 ? i * (1 + e) : i + e - i * e,
        o = 2 * i - n;
      s = u(o, n, t + 1 / 3), r = u(o, n, t), a = u(o, n, t - 1 / 3);
    } else s = r = a = i;
    return {
      red: Math.round(255 * s),
      green: Math.round(255 * r),
      blue: Math.round(255 * a),
      alpha: n
    };
  }(i)), i;
}
let g = (t, e) => {
    let i = v(t),
      n = v(e);
    if (!i || !n) return c(t, e);
    let s = {
      ...i
    };
    return t => (s.red = m(i.red, n.red, t), s.green = m(i.green, n.green, t), s.blue = m(i.blue, n.blue, t), s.alpha = (0, __mod_98611.k)(i.alpha, n.alpha, t), __mod_33293.B.transform(s));
  },
  y = new Set(["none", "hidden"]);
function x(t, e) {
  return i => (0, __mod_98611.k)(t, e, i);
}
function w(t) {
  return "number" == typeof t ? x : "string" == typeof t ? (0, __mod_39017.p)(t) ? c : __mod_60091.y.test(t) ? g : b : Array.isArray(t) ? T : "object" == typeof t ? __mod_60091.y.test(t) ? g : P : c;
}
function T(t, e) {
  let i = [...t],
    n = i.length,
    s = t.map((t, i) => w(t)(t, e[i]));
  return t => {
    for (let e = 0; e < n; e++) i[e] = s[e](t);
    return i;
  };
}
function P(t, e) {
  let i = {
      ...t,
      ...e
    },
    n = {};
  for (let s in i) void 0 !== t[s] && void 0 !== e[s] && (n[s] = w(t[s])(t[s], e[s]));
  return t => {
    for (let e in n) i[e] = n[e](t);
    return i;
  };
}
let b = (t, e) => {
  let i = __mod_9779.f.createTransformer(e),
    r = (0, __mod_9779.V)(t),
    a = (0, __mod_9779.V)(e);
  if (!(r.indexes.var.length === a.indexes.var.length && r.indexes.color.length === a.indexes.color.length && r.indexes.number.length >= a.indexes.number.length)) return (0, __mod_62879.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), c(t, e);
  if (y.has(t) && !a.values.length || y.has(e) && !r.values.length) return y.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t;
  return (0, __mod_22506.F)(T(function (t, e) {
    let i = [],
      n = {
        color: 0,
        var: 0,
        number: 0
      };
    for (let s = 0; s < e.values.length; s++) {
      let r = e.types[s],
        a = t.indexes[r][n[r]],
        o = t.values[a] ?? 0;
      i[s] = o, n[r]++;
    }
    return i;
  }(r, a), a.values), i);
};
function S(t, e, i) {
  return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, __mod_98611.k)(t, e, i) : w(t)(t, e);
}

export { S as j };
