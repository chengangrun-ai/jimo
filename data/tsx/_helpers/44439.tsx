import * as __mod_22863 from "./22863";
import * as __mod_35661 from "./35661";
import * as __mod_6798 from "./6798";
/**
 * 内部辅助模块 44439（自动内联）
 * 被页面区块共享使用。
 */


function u(t) {
  return t.innerRadius;
}
function s(t) {
  return t.outerRadius;
}
function c(t) {
  return t.startAngle;
}
function l(t) {
  return t.endAngle;
}
function h(t) {
  return t && t.padAngle;
}
function a(t, n, e, i, o, u, s) {
  var c = t - e,
    l = n - i,
    h = (s ? u : -u) / (0, __mod_22863.RZ)(c * c + l * l),
    a = h * l,
    f = -h * c,
    p = t + a,
    y = n + f,
    d = e + a,
    _ = i + f,
    x = (p + d) / 2,
    k = (y + _) / 2,
    A = d - p,
    g = _ - y,
    v = A * A + g * g,
    C = o - u,
    M = p * _ - d * y,
    $ = (g < 0 ? -1 : 1) * (0, __mod_22863.RZ)((0, __mod_22863.T9)(0, C * C * v - M * M)),
    L = (M * g - A * $) / v,
    F = (-M * A - g * $) / v,
    N = (M * g + A * $) / v,
    T = (-M * A + g * $) / v,
    m = L - x,
    P = F - k,
    b = N - x,
    W = T - k;
  return m * m + P * P > b * b + W * W && (L = N, F = T), {
    cx: L,
    cy: F,
    x01: -a,
    y01: -f,
    x11: L * (o / C - 1),
    y11: F * (o / C - 1)
  };
}
function A() {
  var e = (0, __mod_35661.A)(0),
    f = null,
    _ = null,
    x = (0, __mod_6798.i)(k);
  function k() {
    var i,
      o,
      u = +u.apply(this, arguments),
      s = +s.apply(this, arguments),
      c = c.apply(this, arguments) - __mod_22863.TW,
      l = l.apply(this, arguments) - __mod_22863.TW,
      h = (0, __mod_22863.tn)(l - c),
      k = l > c;
    if (_ || (_ = i = x()), s < u && (o = s, s = u, u = o), s > __mod_22863.Ni) {
      if (h > __mod_22863.FA - __mod_22863.Ni) _.moveTo(s * (0, __mod_22863.gn)(c), s * (0, __mod_22863.F8)(c)), _.arc(0, 0, s, c, l, !k), u > __mod_22863.Ni && (_.moveTo(u * (0, __mod_22863.gn)(l), u * (0, __mod_22863.F8)(l)), _.arc(0, 0, u, l, c, k));else {
        var A,
          g,
          N = h.apply(this, arguments) / 2,
          T = N > __mod_22863.Ni && (f ? +f.apply(this, arguments) : (0, __mod_22863.RZ)(u * u + s * s)),
          m = (0, __mod_22863.jk)((0, __mod_22863.tn)(s - u) / 2, +e.apply(this, arguments));
        if (T > __mod_22863.Ni) {
          var W = (0, __mod_22863.qR)(T / u * (0, __mod_22863.F8)(N)),
            w = (0, __mod_22863.qR)(T / s * (0, __mod_22863.F8)(N));
          (L -= 2 * W) > __mod_22863.Ni ? (W *= k ? 1 : -1, M += W, $ -= W) : (L = 0, M = $ = (c + l) / 2), (F -= 2 * w) > __mod_22863.Ni ? (w *= k ? 1 : -1, v += w, C -= w) : (F = 0, v = C = (c + l) / 2);
        }
        var j = s * (0, __mod_22863.gn)(c),
          R = s * (0, __mod_22863.F8)(c),
          E = u * (0, __mod_22863.gn)(l),
          Z = u * (0, __mod_22863.F8)(l);
        if (m > __mod_22863.Ni) {
          var S,
            q = s * (0, __mod_22863.gn)(l),
            V = s * (0, __mod_22863.F8)(l),
            z = u * (0, __mod_22863.gn)(c),
            H = u * (0, __mod_22863.F8)(c);
          if (h < __mod_22863.pi) if (S = function (t, n, e, i, o, u, s, c) {
            var l = e - t,
              h = i - n,
              a = s - o,
              f = c - u,
              p = f * l - a * h;
            if (!(p * p < __mod_22863.Ni)) return p = (a * (n - u) - f * (t - o)) / p, [t + p * l, n + p * h];
          }(j, R, z, H, q, V, E, Z)) {
            var I = j - S[0],
              Q = R - S[1],
              X = q - S[0],
              Y = V - S[1],
              B = 1 / (0, __mod_22863.F8)((0, __mod_22863.HQ)((I * X + Q * Y) / ((0, __mod_22863.RZ)(I * I + Q * Q) * (0, __mod_22863.RZ)(X * X + Y * Y))) / 2),
              G = (0, __mod_22863.RZ)(S[0] * S[0] + S[1] * S[1]);
            P = (0, __mod_22863.jk)(m, (u - G) / (B - 1)), b = (0, __mod_22863.jk)(m, (s - G) / (B + 1));
          } else P = b = 0;
        }
        h > __mod_22863.Ni ? m > __mod_22863.Ni ? (A = a(z, H, j, R, s, m, k), g = a(q, V, E, Z, s, m, k), _.moveTo(A.cx + A.x01, A.cy + A.y01), m < m ? _.arc(A.cx, A.cy, m, (0, __mod_22863.FP)(A.y01, A.x01), (0, __mod_22863.FP)(g.y01, g.x01), !k) : (_.arc(A.cx, A.cy, m, (0, __mod_22863.FP)(A.y01, A.x01), (0, __mod_22863.FP)(A.y11, A.x11), !k), _.arc(0, 0, s, (0, __mod_22863.FP)(A.cy + A.y11, A.cx + A.x11), (0, __mod_22863.FP)(g.cy + g.y11, g.cx + g.x11), !k), _.arc(g.cx, g.cy, m, (0, __mod_22863.FP)(g.y11, g.x11), (0, __mod_22863.FP)(g.y01, g.x01), !k))) : (_.moveTo(j, R), _.arc(0, 0, s, c, l, !k)) : _.moveTo(j, R), u > __mod_22863.Ni && h > __mod_22863.Ni ? m > __mod_22863.Ni ? (A = a(E, Z, q, V, u, -m, k), g = a(j, R, z, H, u, -m, k), _.lineTo(A.cx + A.x01, A.cy + A.y01), m < m ? _.arc(A.cx, A.cy, m, (0, __mod_22863.FP)(A.y01, A.x01), (0, __mod_22863.FP)(g.y01, g.x01), !k) : (_.arc(A.cx, A.cy, m, (0, __mod_22863.FP)(A.y01, A.x01), (0, __mod_22863.FP)(A.y11, A.x11), !k), _.arc(0, 0, u, (0, __mod_22863.FP)(A.cy + A.y11, A.cx + A.x11), (0, __mod_22863.FP)(g.cy + g.y11, g.cx + g.x11), k), _.arc(g.cx, g.cy, m, (0, __mod_22863.FP)(g.y11, g.x11), (0, __mod_22863.FP)(g.y01, g.x01), !k))) : _.arc(0, 0, u, l, c, k) : _.lineTo(E, Z);
      }
    } else _.moveTo(0, 0);
    if (_.closePath(), i) return _ = null, i + "" || null;
  }
  return k.centroid = function () {
    var e = (+u.apply(this, arguments) + +s.apply(this, arguments)) / 2,
      i = (+c.apply(this, arguments) + +l.apply(this, arguments)) / 2 - __mod_22863.pi / 2;
    return [(0, __mod_22863.gn)(i) * e, (0, __mod_22863.F8)(i) * e];
  }, k.innerRadius = function (n) {
    return arguments.length ? (t = "function" == typeof n ? n : (0, __mod_35661.A)(+n), k) : u;
  }, k.outerRadius = function (t) {
    return arguments.length ? (n = "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : s;
  }, k.cornerRadius = function (t) {
    return arguments.length ? (e = "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : e;
  }, k.padRadius = function (t) {
    return arguments.length ? (f = null == t ? null : "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : f;
  }, k.startAngle = function (t) {
    return arguments.length ? (p = "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : c;
  }, k.endAngle = function (t) {
    return arguments.length ? (y = "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : l;
  }, k.padAngle = function (t) {
    return arguments.length ? (d = "function" == typeof t ? t : (0, __mod_35661.A)(+t), k) : h;
  }, k.context = function (t) {
    return arguments.length ? (_ = null == t ? null : t, k) : _;
  }, k;
}

export { u as default, u };
export { f as A };
