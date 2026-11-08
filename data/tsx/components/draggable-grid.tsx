/**
 * Draggable Grid
 * A grid you can drag around with smooth momentum
 * slug: draggable-grid
 * category: interaction
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */

var r,
  o,
  i,
  a,
  l,
  s,
  c,
  u,
  p,
  d = "transform",
  f = d + "Origin",
  h = function (t) {
    var e = t.ownerDocument || t;
    for (!(d in t.style) && ("msTransform" in t.style) && (f = (d = "msTransform") + "Origin"); e.parentNode && (e = e.parentNode););
    if (o = window, c = new E(), e) {
      r = e, i = e.documentElement, a = e.body, (u = r.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
      var n = e.createElement("div"),
        l = e.createElement("div"),
        s = e && (e.body || e.firstElementChild);
      s && s.appendChild && (s.appendChild(n), n.appendChild(l), n.style.position = "static", n.style.transform = "translate3d(0,0,1px)", p = l.offsetParent !== n, s.removeChild(n));
    }
    return e;
  },
  g = function (t) {
    for (var e, n; t && t !== a;) (n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
    return e;
  },
  m = [],
  v = [],
  x = function (t) {
    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
  },
  y = function t(e, n) {
    if (e.parentNode && (r || h(e))) {
      var o = x(e),
        i = o ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        a = o ? n ? "rect" : "g" : "div",
        c = 100 * (2 === n),
        u = 100 * (3 === n),
        p = {
          position: "absolute",
          display: "block",
          pointerEvents: "none",
          margin: "0",
          padding: "0"
        },
        d = r.createElementNS ? r.createElementNS(i.replace(/^https/, "http"), a) : r.createElement(a);
      return n && (o ? (s || (s = t(e)), d.setAttribute("width", .01), d.setAttribute("height", .01), d.setAttribute("transform", "translate(" + c + "," + u + ")"), d.setAttribute("fill", "transparent"), s.appendChild(d)) : (l || Object.assign((l = t(e)).style, p), Object.assign(d.style, p, {
        width: "0.1px",
        height: "0.1px",
        top: u + "px",
        left: c + "px"
      }), l.appendChild(d))), d;
    }
    throw "Need document and parent.";
  },
  w = function (t) {
    for (var e = new E(), n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
    return e;
  },
  b = function (t) {
    var e,
      n = t.getCTM();
    return n || (e = t.style[d], t.style[d] = "none", t.appendChild(u), n = u.getCTM(), t.removeChild(u), e ? t.style[d] = e : t.style.removeProperty(d.replace(/([A-Z])/g, "-$1").toLowerCase())), n || c.clone();
  },
  T = function (t, e) {
    var n,
      r,
      i,
      a,
      u,
      h,
      g = x(t),
      T = t === g,
      k = g ? m : v,
      M = t.parentNode,
      C = M && !g && M.shadowRoot && M.shadowRoot.appendChild ? M.shadowRoot : M;
    if (t === o) return t;
    if (k.length || k.push(y(t, 1), y(t, 2), y(t, 3)), n = g ? s : l, g) T ? (a = -(i = b(t)).e / i.a, u = -i.f / i.d, r = c) : t.getBBox ? (i = t.getBBox(), a = (r = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? r.numberOfItems > 1 ? w(r) : r.getItem(0).matrix : c).a * i.x + r.c * i.y, u = r.b * i.x + r.d * i.y) : (r = new E(), a = u = 0), e && "g" === t.tagName.toLowerCase() && (a = u = 0), (T || !t.getBoundingClientRect().width ? g : M).appendChild(n), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + a) + "," + (r.f + u) + ")");else {
      if (a = u = 0, p) for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;) (o.getComputedStyle(i)[d] + "").length > 4 && (a = i.offsetLeft, u = i.offsetTop, i = 0);
      if ("absolute" !== (h = o.getComputedStyle(t)).position && "fixed" !== h.position) for (r = t.offsetParent; M && M !== r;) a += M.scrollLeft || 0, u += M.scrollTop || 0, M = M.parentNode;
      (i = n.style).top = t.offsetTop - u + "px", i.left = t.offsetLeft - a + "px", i[d] = h[d], i[f] = h[f], i.position = "fixed" === h.position ? "fixed" : "absolute", C.appendChild(n);
    }
    return n;
  },
  k = function (t, e, n, r, o, i, a) {
    return t.a = e, t.b = n, t.c = r, t.d = o, t.e = i, t.f = a, t;
  },
  E = function () {
    function t(t, e, n, r, o, i) {
      void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === o && (o = 0), void 0 === i && (i = 0), k(this, t, e, n, r, o, i);
    }
    var e = t.prototype;
    return e.inverse = function () {
      var t = this.a,
        e = this.b,
        n = this.c,
        r = this.d,
        o = this.e,
        i = this.f,
        a = t * r - e * n || 1e-10;
      return k(this, r / a, -e / a, -n / a, t / a, (n * i - r * o) / a, -(t * i - e * o) / a);
    }, e.multiply = function (t) {
      var e = this.a,
        n = this.b,
        r = this.c,
        o = this.d,
        i = this.e,
        a = this.f,
        l = t.a,
        s = t.c,
        c = t.b,
        u = t.d,
        p = t.e,
        d = t.f;
      return k(this, l * e + c * r, l * n + c * o, s * e + u * r, s * n + u * o, i + p * e + d * r, a + p * n + d * o);
    }, e.clone = function () {
      return new t(this.a, this.b, this.c, this.d, this.e, this.f);
    }, e.equals = function (t) {
      var e = this.a,
        n = this.b,
        r = this.c,
        o = this.d,
        i = this.e,
        a = this.f;
      return e === t.a && n === t.b && r === t.c && o === t.d && i === t.e && a === t.f;
    }, e.apply = function (t, e) {
      void 0 === e && (e = {});
      var n = t.x,
        r = t.y,
        o = this.a,
        i = this.b,
        a = this.c,
        l = this.d,
        s = this.e,
        c = this.f;
      return e.x = n * o + r * a + s || 0, e.y = n * i + r * l + c || 0, e;
    }, t;
  }();
function M(t, e, n, l) {
  if (!t || !t.parentNode || (r || h(t)).documentElement === t) return new E();
  var s = g(t),
    c = x(t) ? m : v,
    u = T(t, n),
    p = c[0].getBoundingClientRect(),
    d = c[1].getBoundingClientRect(),
    f = c[2].getBoundingClientRect(),
    y = u.parentNode,
    w = !l && function t(e) {
      return "fixed" === o.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0);
    }(t),
    b = new E((d.left - p.left) / 100, (d.top - p.top) / 100, (f.left - p.left) / 100, (f.top - p.top) / 100, p.left + (w ? 0 : o.pageXOffset || r.scrollLeft || i.scrollLeft || a.scrollLeft || 0), p.top + (w ? 0 : o.pageYOffset || r.scrollTop || i.scrollTop || a.scrollTop || 0));
  if (y.removeChild(u), s) for (p = s.length; p--;) (d = s[p]).scaleX = d.scaleY = 0, d.renderTransform(1, d);
  return e ? b.inverse() : b;
}
function C(t) {
  if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
var N,
  S,
  _,
  X,
  P,
  Y,
  D,
  L,
  O,
  R,
  A,
  B,
  F,
  I,
  H,
  W,
  V,
  z,
  j,
  K,
  U,
  G,
  q = 0,
  $ = function () {
    return "undefined" != typeof window;
  },
  Z = function () {
    return N || $() && (N = window.gsap) && N.registerPlugin && N;
  },
  J = function (t) {
    return "function" == typeof t;
  },
  Q = function (t) {
    return "object" == typeof t;
  },
  tt = function (t) {
    return void 0 === t;
  },
  te = function () {
    return !1;
  },
  tn = "transform",
  tr = "transformOrigin",
  to = function (t) {
    return Math.round(1e4 * t) / 1e4;
  },
  ti = Array.isArray,
  ta = function (t, e) {
    var n = _.createElementNS ? _.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : _.createElement(t);
    return n.style ? n : _.createElement(t);
  },
  tl = 180 / Math.PI,
  ts = new E(),
  tc = Date.now || function () {
    return new Date().getTime();
  },
  tu = [],
  tp = {},
  td = 0,
  tf = /^(?:a|input|textarea|button|select)$/i,
  th = 0,
  tg = {},
  tm = {},
  tv = function (t, e) {
    var n,
      r = {};
    for (n in t) r[n] = e ? t[n] * e : t[n];
    return r;
  },
  tx = function (t, e) {
    for (var n in e) n in t || (t[n] = e[n]);
    return t;
  },
  ty = function t(e, n) {
    for (var r, o = e.length; o--;) n ? e[o].style.touchAction = n : e[o].style.removeProperty("touch-action"), (r = e[o].children) && r.length && t(r, n);
  },
  tw = function () {
    return tu.forEach(function (t) {
      return t();
    });
  },
  tb = function (t) {
    tu.push(t), 1 === tu.length && N.ticker.add(tw);
  },
  tT = function () {
    return !tu.length && N.ticker.remove(tw);
  },
  tk = function (t) {
    for (var e = tu.length; e--;) tu[e] === t && tu.splice(e, 1);
    N.to(tT, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: tT,
      data: "_draggable"
    });
  },
  tE = function (t, e, n, r) {
    if (t.addEventListener) {
      var o = F[e];
      r = r || (A ? {
        passive: !1
      } : null), t.addEventListener(o || e, n, r), o && e !== o && t.addEventListener(e, n, r);
    }
  },
  tM = function (t, e, n, r) {
    if (t.removeEventListener) {
      var o = F[e];
      t.removeEventListener(o || e, n, r), o && e !== o && t.removeEventListener(e, n, r);
    }
  },
  tC = function (t) {
    t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
  },
  tN = function (t, e) {
    for (var n = t.length; n--;) if (t[n].identifier === e) return !0;
  },
  tS = function t(e) {
    I = e.touches && q < e.touches.length, tM(e.target, "touchend", t);
  },
  t_ = function (t) {
    I = t.touches && q < t.touches.length, tE(t.target, "touchend", tS);
  },
  tX = function (t) {
    return S.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
  },
  tP = function (t) {
    return S.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
  },
  tY = function t(e, n) {
    tE(e, "scroll", n), tL(e.parentNode) || t(e.parentNode, n);
  },
  tD = function t(e, n) {
    tM(e, "scroll", n), tL(e.parentNode) || t(e.parentNode, n);
  },
  tL = function (t) {
    return !!(!t || t === X || 9 === t.nodeType || t === _.body || t === S || !t.nodeType || !t.parentNode);
  },
  tO = function (t, e) {
    var n = "x" === e ? "Width" : "Height",
      r = "scroll" + n,
      o = "client" + n;
    return Math.max(0, tL(t) ? Math.max(X[r], P[r]) - (S["inner" + n] || X[o] || P[o]) : t[r] - t[o]);
  },
  tR = function t(e, n) {
    var r = tO(e, "x"),
      o = tO(e, "y");
    tL(e) ? e = tm : t(e.parentNode, n), e._gsMaxScrollX = r, e._gsMaxScrollY = o, n || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0);
  },
  tA = function (t, e, n) {
    var r = t.style;
    r && (tt(r[e]) && (e = O(e, t) || e), null == n ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = n);
  },
  tB = function (t) {
    return S.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
  },
  tF = {},
  tI = function (t) {
    if (t === S) return tF.left = tF.top = 0, tF.width = tF.right = X.clientWidth || t.innerWidth || P.clientWidth || 0, tF.height = tF.bottom = (t.innerHeight || 0) - 20 < X.clientHeight ? X.clientHeight : t.innerHeight || P.clientHeight || 0, tF;
    var e = t.ownerDocument || _,
      n = tt(t.pageX) ? t.nodeType || tt(t.left) || tt(t.top) ? R(t)[0].getBoundingClientRect() : t : {
        left: t.pageX - tP(e),
        top: t.pageY - tX(e),
        right: t.pageX - tP(e) + 1,
        bottom: t.pageY - tX(e) + 1
      };
    return tt(n.right) && !tt(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : tt(n.width) && (n = {
      width: n.right - n.left,
      height: n.bottom - n.top,
      right: n.right,
      left: n.left,
      bottom: n.bottom,
      top: n.top
    }), n;
  },
  tH = function (t, e, n) {
    var r,
      o = t.vars,
      i = o[n],
      a = t._listeners[e];
    return J(i) && (r = i.apply(o.callbackScope || t, o[n + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (r = !1), r;
  },
  tW = function (t, e) {
    var n,
      r,
      o,
      i = R(t)[0];
    return i.nodeType || i === S ? tz(i, e) : tt(t.left) ? {
      left: r = t.min || t.minX || t.minRotation || 0,
      top: n = t.min || t.minY || 0,
      width: (t.max || t.maxX || t.maxRotation || 0) - r,
      height: (t.max || t.maxY || 0) - n
    } : (o = {
      x: 0,
      y: 0
    }, {
      left: t.left - o.x,
      top: t.top - o.y,
      width: t.width,
      height: t.height
    });
  },
  tV = {},
  tz = function (t, e) {
    e = R(e)[0];
    var n,
      r,
      o,
      i,
      a,
      l,
      s,
      c,
      u,
      p,
      d,
      f,
      h,
      g = t.getBBox && t.ownerSVGElement,
      m = t.ownerDocument || _;
    if (t === S) o = tX(m), r = (n = tP(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0), i = o + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0);else {
      if (e === S || tt(e)) return t.getBoundingClientRect();
      n = o = 0, g ? (d = (p = t.getBBox()).width, f = p.height) : (t.viewBox && (p = t.viewBox.baseVal) && (n = p.x || 0, o = p.y || 0, d = p.width, f = p.height), d || (p = "border-box" === (h = tB(t)).boxSizing, d = (parseFloat(h.width) || t.clientWidth || 0) + (p ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth)), f = (parseFloat(h.height) || t.clientHeight || 0) + (p ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth)))), r = d, i = f;
    }
    return t === e ? {
      left: n,
      top: o,
      width: r - n,
      height: i - o
    } : (l = (a = M(e, !0).multiply(M(t))).apply({
      x: n,
      y: o
    }), s = a.apply({
      x: r,
      y: o
    }), c = a.apply({
      x: r,
      y: i
    }), u = a.apply({
      x: n,
      y: i
    }), {
      left: n = Math.min(l.x, s.x, c.x, u.x),
      top: o = Math.min(l.y, s.y, c.y, u.y),
      width: Math.max(l.x, s.x, c.x, u.x) - n,
      height: Math.max(l.y, s.y, c.y, u.y) - o
    });
  },
  tj = function (t, e, n, r, o, i) {
    var a,
      l,
      s,
      c = {};
    if (e) if (1 !== o && e instanceof Array) {
      if (c.end = a = [], s = e.length, Q(e[0])) for (l = 0; l < s; l++) a[l] = tv(e[l], o);else for (l = 0; l < s; l++) a[l] = e[l] * o;
      n += 1.1, r -= 1.1;
    } else J(e) ? c.end = function (n) {
      var r,
        i,
        a = e.call(t, n);
      if (1 !== o) if (Q(a)) {
        for (i in r = {}, a) r[i] = a[i] * o;
        a = r;
      } else a *= o;
      return a;
    } : c.end = e;
    return (n || 0 === n) && (c.max = n), (r || 0 === r) && (c.min = r), i && (c.velocity = 0), c;
  },
  tK = function t(e) {
    var n;
    return !!e && !!e.getAttribute && e !== P && (!!("true" === (n = e.getAttribute("data-clickable")) || "false" !== n && (tf.test(e.nodeName + "") || "true" === e.getAttribute("contentEditable"))) || t(e.parentNode));
  },
  tU = function (t, e) {
    for (var n, r = t.length; r--;) (n = t[r]).ondragstart = n.onselectstart = e ? null : te, N.set(n, {
      lazy: !0,
      userSelect: e ? "text" : "none"
    });
  },
  tG = function (t, e) {
    t = N.utils.toArray(t)[0], e = e || {};
    var n,
      r,
      o,
      i,
      a,
      l,
      s = document.createElement("div"),
      c = s.style,
      u = t.firstChild,
      p = 0,
      d = 0,
      f = t.scrollTop,
      h = t.scrollLeft,
      g = t.scrollWidth,
      m = t.scrollHeight,
      v = 0,
      x = 0,
      y = 0;
    U && !1 !== e.force3D ? (a = "translate3d(", l = "px,0px)") : tn && (a = "translate(", l = "px)"), this.scrollTop = function (t, e) {
      if (!arguments.length) return -this.top();
      this.top(-t, e);
    }, this.scrollLeft = function (t, e) {
      if (!arguments.length) return -this.left();
      this.left(-t, e);
    }, this.left = function (n, r) {
      if (!arguments.length) return -(t.scrollLeft + d);
      var o = t.scrollLeft - h;
      if ((o > 2 || o < -2) && !r) {
        h = t.scrollLeft, N.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        }), this.left(-h), e.onKill && e.onKill();
        return;
      }
      (n = -n) < 0 ? (d = n - .5 | 0, n = 0) : n > x ? (d = n - x | 0, n = x) : d = 0, (d || d) && (this._skip || (c[tn] = a + -d + "px," + -p + l), d + v >= 0 && (c.paddingRight = d + v + "px")), t.scrollLeft = 0 | n, h = t.scrollLeft;
    }, this.top = function (n, r) {
      if (!arguments.length) return -(t.scrollTop + p);
      var o = t.scrollTop - f;
      if ((o > 2 || o < -2) && !r) {
        f = t.scrollTop, N.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        }), this.top(-f), e.onKill && e.onKill();
        return;
      }
      (n = -n) < 0 ? (p = n - .5 | 0, n = 0) : n > y ? (p = n - y | 0, n = y) : p = 0, (p || p) && !this._skip && (c[tn] = a + -d + "px," + -p + l), t.scrollTop = 0 | n, f = t.scrollTop;
    }, this.maxScrollTop = function () {
      return y;
    }, this.maxScrollLeft = function () {
      return x;
    }, this.disable = function () {
      for (u = s.firstChild; u;) i = u.nextSibling, t.appendChild(u), u = i;
      t === s.parentNode && t.removeChild(s);
    }, this.enable = function () {
      if ((u = t.firstChild) !== s) {
        for (; u;) i = u.nextSibling, s.appendChild(u), u = i;
        t.appendChild(s), this.calibrate();
      }
    }, this.calibrate = function (e) {
      var i,
        a,
        l,
        u = t.clientWidth === n;
      f = t.scrollTop, h = t.scrollLeft, (!u || t.clientHeight !== r || s.offsetHeight !== o || g !== t.scrollWidth || m !== t.scrollHeight || e) && ((p || d) && (a = this.left(), l = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), i = tB(t), (!u || e) && (c.display = "block", c.width = "auto", c.paddingRight = "0px", (v = Math.max(0, t.scrollWidth - t.clientWidth)) && (v += parseFloat(i.paddingLeft) + (G ? parseFloat(i.paddingRight) : 0))), c.display = "inline-block", c.position = "relative", c.overflow = "visible", c.verticalAlign = "top", c.boxSizing = "content-box", c.width = "100%", c.paddingRight = v + "px", G && (c.paddingBottom = i.paddingBottom), n = t.clientWidth, r = t.clientHeight, g = t.scrollWidth, m = t.scrollHeight, x = t.scrollWidth - n, y = t.scrollHeight - r, o = s.offsetHeight, c.display = "block", (a || l) && (this.left(a), this.top(l)));
    }, this.content = s, this.element = t, this._skip = !1, this.enable();
  },
  tq = function (t) {
    if ($() && document.body) {
      var e,
        n,
        r,
        o,
        i,
        a = window && window.navigator;
      S = window, X = (_ = document).documentElement, P = _.body, Y = ta("div"), z = !!window.PointerEvent, (D = ta("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", V = "grab" === D.style.cursor ? "grab" : "move", H = a && -1 !== a.userAgent.toLowerCase().indexOf("android"), B = "ontouchstart" in X && "orientation" in S || a && (a.MaxTouchPoints > 0 || a.msMaxTouchPoints > 0), n = ta("div"), o = (r = ta("div")).style, i = P, o.display = "inline-block", o.position = "relative", n.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(r), i.appendChild(n), e = r.offsetHeight + 18 > n.scrollHeight, i.removeChild(n), G = e, F = function (t) {
        for (var e = t.split(","), n = ("onpointerdown" in Y ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Y ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), r = {}, o = 4; --o > -1;) r[e[o]] = n[o], r[n[o]] = e[o];
        try {
          X.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function () {
              A = 1;
            }
          }));
        } catch (t) {}
        return r;
      }("touchstart,touchmove,touchend,touchcancel"), tE(_, "touchcancel", te), tE(S, "touchmove", te), P && P.addEventListener("touchstart", te), tE(_, "contextmenu", function () {
        for (var t in tp) tp[t].isPressed && tp[t].endDrag();
      }), N = L = Z();
    }
    N ? (W = N.plugins.inertia, j = N.core.context || function () {}, tn = (O = N.utils.checkPrefix)(tn), tr = O(tr), R = N.utils.toArray, K = N.core.getStyleSaver, U = !!O("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
  },
  t$ = function (t) {
    function e(n, r) {
      o = t.call(this) || this, L || tq(1), n = R(n)[0], o.styles = K && K(n, "transform,left,top"), W || (W = N.plugins.inertia), o.vars = r = tv(r || {}), o.target = n, o.x = o.y = o.rotation = 0, o.dragResistance = parseFloat(r.dragResistance) || 0, o.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, o.lockAxis = r.lockAxis, o.autoScroll = r.autoScroll || 0, o.lockedAxis = null, o.allowEventDefault = !!r.allowEventDefault, N.getProperty(n, "x");
      var o,
        i,
        a,
        l,
        s,
        c,
        u,
        p,
        d,
        f,
        h,
        g,
        m,
        v,
        x,
        y,
        w,
        b,
        T,
        k,
        P,
        Y,
        O,
        A,
        U,
        G,
        $,
        Z,
        te,
        tn,
        ta,
        tu,
        tf,
        tw,
        tT = (r.type || "x,y").toLowerCase(),
        tS = ~tT.indexOf("x") || ~tT.indexOf("y"),
        tO = -1 !== tT.indexOf("rotation"),
        tF = tO ? "rotation" : tS ? "x" : "left",
        tz = tS ? "y" : "top",
        t$ = !!(~tT.indexOf("x") || ~tT.indexOf("left") || "scroll" === tT),
        tZ = !!(~tT.indexOf("y") || ~tT.indexOf("top") || "scroll" === tT),
        tJ = r.minimumMovement || 2,
        tQ = C(o),
        t0 = R(r.trigger || r.handle || n),
        t1 = {},
        t2 = 0,
        t3 = !1,
        t4 = r.autoScrollMarginTop || 40,
        t5 = r.autoScrollMarginRight || 40,
        t9 = r.autoScrollMarginBottom || 40,
        t6 = r.autoScrollMarginLeft || 40,
        t8 = r.clickableTest || tK,
        t7 = 0,
        et = n._gsap || N.core.getCache(n),
        ee = function t(e) {
          return "fixed" === tB(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0);
        }(n),
        en = function (t, e) {
          return parseFloat(et.get(n, t, e));
        },
        er = n.ownerDocument || _,
        eo = function (t) {
          return tC(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1;
        },
        ei = function t(e) {
          if (tQ.autoScroll && tQ.isDragging && (t3 || b)) {
            var r,
              o,
              i,
              l,
              s,
              c,
              u,
              p,
              h = 15 * tQ.autoScroll;
            for (t3 = !1, tm.scrollTop = null != S.pageYOffset ? S.pageYOffset : null != er.documentElement.scrollTop ? er.documentElement.scrollTop : er.body.scrollTop, tm.scrollLeft = null != S.pageXOffset ? S.pageXOffset : null != er.documentElement.scrollLeft ? er.documentElement.scrollLeft : er.body.scrollLeft, l = tQ.pointerX - tm.scrollLeft, s = tQ.pointerY - tm.scrollTop; n && !o;) r = (o = tL(n.parentNode)) ? tm : n.parentNode, i = o ? {
              bottom: Math.max(X.clientHeight, S.innerHeight || 0),
              right: Math.max(X.clientWidth, S.innerWidth || 0),
              left: 0,
              top: 0
            } : r.getBoundingClientRect(), c = u = 0, tZ && ((p = r._gsMaxScrollY - r.scrollTop) < 0 ? u = p : s > i.bottom - t9 && p ? (t3 = !0, u = Math.min(p, h * (1 - Math.max(0, i.bottom - s) / t9) | 0)) : s < i.top + t4 && r.scrollTop && (t3 = !0, u = -Math.min(r.scrollTop, h * (1 - Math.max(0, s - i.top) / t4) | 0)), u && (r.scrollTop += u)), t$ && ((p = r._gsMaxScrollX - r.scrollLeft) < 0 ? c = p : l > i.right - t5 && p ? (t3 = !0, c = Math.min(p, h * (1 - Math.max(0, i.right - l) / t5) | 0)) : l < i.left + t6 && r.scrollLeft && (t3 = !0, c = -Math.min(r.scrollLeft, h * (1 - Math.max(0, l - i.left) / t6) | 0)), c && (r.scrollLeft += c)), o && (c || u) && (S.scrollTo(r.scrollLeft, r.scrollTop), ex(tQ.pointerX + c, tQ.pointerY + u)), f = r;
          }
          if (b) {
            var g = tQ.x,
              m = tQ.y;
            tO ? (tQ.deltaX = g - parseFloat(et.rotation), tQ.rotation = g, et.rotation = g + "deg", et.renderTransform(1, et)) : a ? (tZ && (tQ.deltaY = m - a.top(), a.top(m)), t$ && (tQ.deltaX = g - a.left(), a.left(g))) : tS ? (tZ && (tQ.deltaY = m - parseFloat(et.y), et.y = m + "px"), t$ && (tQ.deltaX = g - parseFloat(et.x), et.x = g + "px"), et.renderTransform(1, et)) : (tZ && (tQ.deltaY = m - parseFloat(n.style.top || 0), n.style.top = m + "px"), t$ && (tQ.deltaX = g - parseFloat(n.style.left || 0), n.style.left = g + "px")), !d || e || te || (te = !0, !1 === tH(tQ, "drag", "onDrag") && (t$ && (tQ.x -= tQ.deltaX), tZ && (tQ.y -= tQ.deltaY), t(!0)), te = !1);
          }
          b = !1;
        },
        ea = function (t, e) {
          var r,
            o,
            i = tQ.x,
            l = tQ.y;
          n._gsap || (et = N.core.getCache(n)), et.uncache && N.getProperty(n, "x"), tS ? (tQ.x = parseFloat(et.x), tQ.y = parseFloat(et.y)) : tO ? tQ.x = tQ.rotation = to(parseFloat(et.rotation)) : a ? (tQ.y = a.top(), tQ.x = a.left()) : (tQ.y = parseFloat(n.style.top || (o = tB(n)) && o.top) || 0, tQ.x = parseFloat(n.style.left || (o || {}).left) || 0), (k || P || Y) && !e && (tQ.isDragging || tQ.isThrowing) && (Y && (tg.x = tQ.x, tg.y = tQ.y, (r = Y(tg)).x !== tQ.x && (tQ.x = r.x, b = !0), r.y !== tQ.y && (tQ.y = r.y, b = !0)), k && (r = k(tQ.x)) !== tQ.x && (tQ.x = r, tO && (tQ.rotation = r), b = !0), P && ((r = P(tQ.y)) !== tQ.y && (tQ.y = r), b = !0)), b && ei(!0), t || (tQ.deltaX = tQ.x - i, tQ.deltaY = tQ.y - l, tH(tQ, "throwupdate", "onThrowUpdate"));
        },
        el = function (t, e, n, r) {
          return (null == e && (e = -1e20), null == n && (n = 1e20), J(t)) ? function (o) {
            var i = tQ.isPressed ? 1 - tQ.edgeResistance : 1;
            return t.call(tQ, (o > n ? n + (o - n) * i : o < e ? e + (o - e) * i : o) * r) * r;
          } : ti(t) ? function (r) {
            for (var o, i, a = t.length, l = 0, s = 1e20; --a > -1;) (i = (o = t[a]) - r) < 0 && (i = -i), i < s && o >= e && o <= n && (l = a, s = i);
            return t[l];
          } : isNaN(t) ? function (t) {
            return t;
          } : function () {
            return t * r;
          };
        },
        es = function () {
          var t, e, o, i, l, s, c, u, d, f, x;
          p = !1, a ? (a.calibrate(), tQ.minX = g = -a.maxScrollLeft(), tQ.minY = v = -a.maxScrollTop(), tQ.maxX = h = tQ.maxY = m = 0, p = !0) : r.bounds && (t = tW(r.bounds, n.parentNode), tO ? (tQ.minX = g = t.left, tQ.maxX = h = t.left + t.width, tQ.minY = v = tQ.maxY = m = 0) : tt(r.bounds.maxX) && tt(r.bounds.maxY) ? (e = tW(n, n.parentNode), tQ.minX = g = Math.round(en(tF, "px") + t.left - e.left), tQ.minY = v = Math.round(en(tz, "px") + t.top - e.top), tQ.maxX = h = Math.round(g + (t.width - e.width)), tQ.maxY = m = Math.round(v + (t.height - e.height))) : (tQ.minX = g = (t = r.bounds).minX, tQ.minY = v = t.minY, tQ.maxX = h = t.maxX, tQ.maxY = m = t.maxY), g > h && (tQ.minX = h, tQ.maxX = h = g, g = tQ.minX), v > m && (tQ.minY = m, tQ.maxY = m = v, v = tQ.minY), tO && (tQ.minRotation = g, tQ.maxRotation = h), p = !0), r.liveSnap && ((i = ti(o = !0 === r.liveSnap ? r.snap || {} : r.liveSnap) || J(o), tO) ? (k = el(i ? o : o.rotation, g, h, 1), P = null) : o.points ? (l = i ? o : o.points, s = g, c = h, u = v, d = m, f = o.radius, x = a ? -1 : 1, f = f && f < 1e20 ? f * f : 1e20, Y = J(l) ? function (t) {
            var e,
              n,
              r,
              o = tQ.isPressed ? 1 - tQ.edgeResistance : 1,
              i = t.x,
              a = t.y;
            return t.x = i = i > c ? c + (i - c) * o : i < s ? s + (i - s) * o : i, t.y = a = a > d ? d + (a - d) * o : a < u ? u + (a - u) * o : a, (e = l.call(tQ, t)) !== t && (t.x = e.x, t.y = e.y), 1 !== x && (t.x *= x, t.y *= x), f < 1e20 && (n = t.x - i) * n + (r = t.y - a) * r > f && (t.x = i, t.y = a), t;
          } : ti(l) ? function (t) {
            for (var e, n, r, o, i = l.length, a = 0, s = 1e20; --i > -1;) (o = (e = (r = l[i]).x - t.x) * e + (n = r.y - t.y) * n) < s && (a = i, s = o);
            return s <= f ? l[a] : t;
          } : function (t) {
            return t;
          }) : (t$ && (k = el(i ? o : o.x || o.left || o.scrollLeft, g, h, a ? -1 : 1)), tZ && (P = el(i ? o : o.y || o.top || o.scrollTop, v, m, a ? -1 : 1))));
        },
        ec = function () {
          tQ.isThrowing = !1, tH(tQ, "throwcomplete", "onThrowComplete");
        },
        eu = function () {
          tQ.isThrowing = !1;
        },
        ep = function (t, e) {
          var o, i, l, s;
          t && W ? (!0 === t && (i = ti(o = r.snap || r.liveSnap || {}) || J(o), t = {
            resistance: (r.throwResistance || r.resistance || 1e3) / (tO ? 10 : 1)
          }, tO ? t.rotation = tj(tQ, i ? o : o.rotation, h, g, 1, e) : (t$ && (t[tF] = tj(tQ, i ? o : o.points || o.x || o.left, h, g, a ? -1 : 1, e || "x" === tQ.lockedAxis)), tZ && (t[tz] = tj(tQ, i ? o : o.points || o.y || o.top, m, v, a ? -1 : 1, e || "y" === tQ.lockedAxis)), (o.points || ti(o) && Q(o[0])) && (t.linkedProps = tF + "," + tz, t.radius = o.radius))), tQ.isThrowing = !0, s = isNaN(r.overshootTolerance) ? 1 === r.edgeResistance ? 0 : 1 - tQ.edgeResistance + .2 : r.overshootTolerance, t.duration || (t.duration = {
            max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
            min: isNaN(r.minDuration) ? 0 === s || Q(t) && t.resistance > 1e3 ? 0 : .5 : r.minDuration,
            overshoot: s
          }), tQ.tween = l = N.to(a || n, {
            inertia: t,
            data: "_draggable",
            inherit: !1,
            onComplete: ec,
            onInterrupt: eu,
            onUpdate: r.fastMode ? tH : ea,
            onUpdateParams: r.fastMode ? [tQ, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : []
          }), !r.fastMode && (a && (a._skip = !0), l.render(1e9, !0, !0), ea(!0, !0), tQ.endX = tQ.x, tQ.endY = tQ.y, tO && (tQ.endRotation = tQ.x), l.play(0), ea(!0, !0), a && (a._skip = !1))) : p && tQ.applyBounds();
        },
        ed = function (t) {
          var e;
          U = M(n.parentNode, !0), t && tQ.isPressed && !U.equals(U || new E()) && (e = U.inverse().apply({
            x: l,
            y: s
          }), U.apply(e, e), l = e.x, s = e.y), U.equals(ts) && (U = null);
        },
        ef = function () {
          var t,
            e,
            r,
            o = 1 - tQ.edgeResistance,
            i = ee ? tP(er) : 0,
            d = ee ? tX(er) : 0;
          tS && (et.x = en(tF, "px") + "px", et.y = en(tz, "px") + "px", et.renderTransform()), ed(!1), tV.x = tQ.pointerX - i, tV.y = tQ.pointerY - d, U && U.apply(tV, tV), l = tV.x, s = tV.y, b && (ex(tQ.pointerX, tQ.pointerY), ei(!0)), tf = M(n), a ? (es(), u = a.top(), c = a.left()) : (eh() ? (ea(!0, !0), es()) : tQ.applyBounds(), tO ? (t = n.ownerSVGElement ? [et.xOrigin - n.getBBox().x, et.yOrigin - n.getBBox().y] : (tB(n)[tr] || "0 0").split(" "), w = tQ.rotationOrigin = M(n).apply({
            x: parseFloat(t[0]) || 0,
            y: parseFloat(t[1]) || 0
          }), ea(!0, !0), e = tQ.pointerX - w.x - i, r = w.y - tQ.pointerY + d, c = tQ.x, u = tQ.y = Math.atan2(r, e) * tl) : (u = en(tz, "px"), c = en(tF, "px"))), p && o && (c > h ? c = h + (c - h) / o : c < g && (c = g - (g - c) / o), !tO && (u > m ? u = m + (u - m) / o : u < v && (u = v - (v - u) / o))), tQ.startX = c = to(c), tQ.startY = u = to(u);
        },
        eh = function () {
          return tQ.tween && tQ.tween.isActive();
        },
        eg = function () {
          !D.parentNode || eh() || tQ.isDragging || D.parentNode.removeChild(D);
        },
        em = function (t, o) {
          var c;
          if (!i || tQ.isPressed || !t || ("mousedown" === t.type || "pointerdown" === t.type) && !o && tc() - t7 < 30 && F[tQ.pointerEvent.type]) {
            tu && t && i && tC(t);
            return;
          }
          if (G = eh(), tw = !1, tQ.pointerEvent = t, F[t.type] ? (tE(A = ~t.type.indexOf("touch") ? t.currentTarget || t.target : er, "touchend", ey), tE(A, "touchmove", ev), tE(A, "touchcancel", ey), tE(er, "touchstart", t_)) : (A = null, tE(er, "mousemove", ev)), Z = null, (!z || !A) && (tE(er, "mouseup", ey), t && t.target && tE(t.target, "mouseup", ey)), O = t8.call(tQ, t.target) && !1 === r.dragClickables && !o) {
            tE(t.target, "change", ey), tH(tQ, "pressInit", "onPressInit"), tH(tQ, "press", "onPress"), tU(t0, !0), tu = !1;
            return;
          }
          if ((tu = !($ = !!A && t$ !== tZ && !1 !== tQ.vars.allowNativeTouchScrolling && (!tQ.vars.allowContextMenu || !t || !t.ctrlKey && !(t.which > 2)) && (t$ ? "y" : "x")) && !tQ.allowEventDefault) && (tC(t), tE(S, "touchforcechange", tC)), t.changedTouches ? y = (t = x = t.changedTouches[0]).identifier : t.pointerId ? y = t.pointerId : x = y = null, q++, tb(ei), s = tQ.pointerY = t.pageY, l = tQ.pointerX = t.pageX, tH(tQ, "pressInit", "onPressInit"), ($ || tQ.autoScroll) && tR(n.parentNode), !n.parentNode || !tQ.autoScroll || a || tO || !n.parentNode._gsMaxScrollX || D.parentNode || n.getBBox || (D.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(D)), ef(), tQ.tween && tQ.tween.kill(), tQ.isThrowing = !1, N.killTweensOf(a || n, t1, !0), a && N.killTweensOf(n, {
            scrollTo: 1
          }, !0), tQ.tween = tQ.lockedAxis = null, !r.zIndexBoost && (tO || a || !1 === r.zIndexBoost) || (n.style.zIndex = e.zIndex++), tQ.isPressed = !0, d = !!(r.onDrag || tQ._listeners.drag), f = !!(r.onMove || tQ._listeners.move), !1 !== r.cursor || r.activeCursor) for (c = t0.length; --c > -1;) N.set(t0[c], {
            cursor: r.activeCursor || r.cursor || ("grab" === V ? "grabbing" : V)
          });
          tH(tQ, "press", "onPress"), W && W.track(a || n, tS ? "x,y" : tO ? "rotation" : "top,left");
        },
        ev = function (t) {
          var e, r, o, a, c, u;
          if (!i || I || !tQ.isPressed || !t) {
            tu && t && i && tC(t);
            return;
          }
          if (tQ.pointerEvent = t, e = t.changedTouches) {
            if ((t = e[0]) !== x && t.identifier !== y) {
              for (a = e.length; --a > -1 && (t = e[a]).identifier !== y && t.target !== n;);
              if (a < 0) return;
            }
          } else if (t.pointerId && y && t.pointerId !== y) return;
          A && $ && !Z && (tV.x = t.pageX - (ee ? tP(er) : 0), tV.y = t.pageY - (ee ? tX(er) : 0), U && U.apply(tV, tV), r = tV.x, o = tV.y, (c = Math.abs(r - l)) !== (u = Math.abs(o - s)) && (c > tJ || u > tJ) || H && $ === Z) && (Z = c > u && t$ ? "x" : "y", $ && Z !== $ && tE(S, "touchforcechange", tC), !1 !== tQ.vars.lockAxisOnTouchScroll && t$ && tZ && (tQ.lockedAxis = "x" === Z ? "y" : "x", J(tQ.vars.onLockAxis) && tQ.vars.onLockAxis.call(tQ, t)), H && $ === Z) ? ey(t) : (tQ.allowEventDefault || $ && (!Z || $ === Z) || !1 === t.cancelable ? tu && (tu = !1) : (tC(t), tu = !0), tQ.autoScroll && (t3 = !0), ex(t.pageX, t.pageY, f));
        },
        ex = function (t, e, n) {
          var r,
            o,
            i,
            a,
            d,
            f,
            x = 1 - tQ.dragResistance,
            y = 1 - tQ.edgeResistance,
            T = tQ.pointerX,
            E = tQ.pointerY,
            C = tQ.x,
            N = tQ.y,
            S = tQ.endX,
            _ = tQ.endY,
            X = tQ.endRotation;
          tQ.pointerX = t, tQ.pointerY = e, ee && (t -= tP(er), e -= tX(er)), tO ? (a = to(Math.atan2(w.y - e, t - w.x) * tl), (d = tQ.y - a) > 180 ? (u -= 360, tQ.y = a) : d < -180 && (u += 360, tQ.y = a), U && (f = t * U.a + e * U.c + U.e, e = t * U.b + e * U.d + U.f, t = f), tQ.x !== c || Math.max(Math.abs(l - t), Math.abs(s - e)) > tJ ? (tQ.y = a, i = to(c + (u - a) * x)) : i = c) : (U && (f = t * U.a + e * U.c + U.e, e = t * U.b + e * U.d + U.f, t = f), (o = e - s) < tJ && o > -tJ && (o = 0), (r = t - l) < tJ && r > -tJ && (r = 0), (tQ.lockAxis || tQ.lockedAxis) && (r || o) && (!(f = tQ.lockedAxis) && (tQ.lockedAxis = f = t$ && Math.abs(r) > Math.abs(o) ? "y" : tZ ? "x" : null, f && J(tQ.vars.onLockAxis) && tQ.vars.onLockAxis.call(tQ, tQ.pointerEvent)), "y" === f ? o = 0 : "x" === f && (r = 0)), i = to(c + r * x), a = to(u + o * x)), (k || P || Y) && (tQ.x !== i || tQ.y !== a && !tO) && (Y && (tg.x = i, tg.y = a, i = to((f = Y(tg)).x), a = to(f.y)), k && (i = to(k(i))), P && (a = to(P(a)))), p && (i > h ? i = h + Math.round((i - h) * y) : i < g && (i = g + Math.round((i - g) * y)), !tO && (a > m ? a = Math.round(m + (a - m) * y) : a < v && (a = Math.round(v + (a - v) * y)))), tQ.x === i && (tQ.y === a || tO) || (tO ? (tQ.endRotation = tQ.x = tQ.endX = to(i), b = !0) : (tZ && (tQ.y = tQ.endY = a, b = !0), t$ && (tQ.x = tQ.endX = i, b = !0)), n && !1 === tH(tQ, "move", "onMove") ? (tQ.pointerX = T, tQ.pointerY = E, u = u, tQ.x = C, tQ.y = N, tQ.endX = S, tQ.endY = _, tQ.endRotation = X, b = b) : !tQ.isDragging && tQ.isPressed && (tQ.isDragging = tw = !0, tH(tQ, "dragstart", "onDragStart")));
        },
        ey = function t(e, o) {
          if (!i || !tQ.isPressed || e && null != y && !o && (e.pointerId && e.pointerId !== y && e.target !== n || e.changedTouches && !tN(e.changedTouches, y))) {
            tu && e && i && tC(e);
            return;
          }
          tQ.isPressed = !1;
          var a,
            l,
            s,
            c,
            p = tQ.isDragging,
            d = tQ.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
            f = N.delayedCall(.001, eg);
          if (A ? (tM(A, "touchend", t), tM(A, "touchmove", ev), tM(A, "touchcancel", t), tM(er, "touchstart", t_)) : tM(er, "mousemove", ev), tM(S, "touchforcechange", tC), (!z || !A) && (tM(er, "mouseup", t), e && e.target && tM(e.target, "mouseup", t)), b = !1, p && (t2 = th = tc(), tQ.isDragging = !1), tk(ei), O && !d) {
            e && (tM(e.target, "change", t), tQ.pointerEvent = e), tU(t0, !1), tH(tQ, "release", "onRelease"), tH(tQ, "click", "onClick"), O = !1;
            return;
          }
          for (l = t0.length; --l > -1;) tA(t0[l], "cursor", r.cursor || (!1 !== r.cursor ? V : null));
          if (q--, e) {
            if ((a = e.changedTouches) && (e = a[0]) !== x && e.identifier !== y) {
              for (l = a.length; --l > -1 && (e = a[l]).identifier !== y && e.target !== n;);
              if (l < 0 && !o) return;
            }
            tQ.pointerEvent = e, tQ.pointerX = e.pageX, tQ.pointerY = e.pageY;
          }
          return d && e ? (tC(e), tu = !0, tH(tQ, "release", "onRelease")) : e && !p ? (tu = !1, G && (r.snap || r.bounds) && ep(r.inertia || r.throwProps), tH(tQ, "release", "onRelease"), (!H || "touchmove" !== e.type) && -1 === e.type.indexOf("cancel") && (tH(tQ, "click", "onClick"), tc() - t7 < 300 && tH(tQ, "doubleclick", "onDoubleClick"), c = e.target || n, t7 = tc(), H || e.defaultPrevented || N.delayedCall(.05, function () {
            t7 !== tn && tQ.enabled() && !tQ.isPressed && !e.defaultPrevented && (c.click ? c.click() : er.createEvent && ((s = er.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, S, 1, tQ.pointerEvent.screenX, tQ.pointerEvent.screenY, tQ.pointerX, tQ.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(s)));
          }))) : (ep(r.inertia || r.throwProps), !tQ.allowEventDefault && e && (!1 !== r.dragClickables || !t8.call(tQ, e.target)) && p && (!$ || Z && $ === Z) && !1 !== e.cancelable ? (tu = !0, tC(e)) : tu = !1, tH(tQ, "release", "onRelease")), eh() && f.duration(tQ.tween.duration()), p && tH(tQ, "dragend", "onDragEnd"), !0;
        },
        ew = function (t) {
          if (t && tQ.isDragging && !a) {
            var e = t.target || n.parentNode,
              r = e.scrollLeft - e._gsScrollX,
              o = e.scrollTop - e._gsScrollY;
            (r || o) && (U ? (l -= r * U.a + o * U.c, s -= o * U.d + r * U.b) : (l -= r, s -= o), e._gsScrollX += r, e._gsScrollY += o, ex(tQ.pointerX, tQ.pointerY));
          }
        },
        eb = function (t) {
          var e = tc(),
            n = e - t7 < 100,
            r = e - t2 < 50,
            o = n && tn === t7,
            i = tQ.pointerEvent && tQ.pointerEvent.defaultPrevented,
            a = n && ta === t7,
            l = t.isTrusted || null == t.isTrusted && n && o;
          if ((o || r && !1 !== tQ.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), n && !(tQ.pointerEvent && tQ.pointerEvent.defaultPrevented) && (!o || l && !a)) {
            l && o && (ta = t7), tn = t7;
            return;
          }
          (tQ.isPressed || r || n) && (!l || !t.detail || !n || i) && tC(t), n || r || tw || (t && t.target && (tQ.pointerEvent = t), tH(tQ, "click", "onClick"));
        },
        eT = function (t) {
          return U ? {
            x: t.x * U.a + t.y * U.c + U.e,
            y: t.x * U.b + t.y * U.d + U.f
          } : {
            x: t.x,
            y: t.y
          };
        };
      return (T = e.get(n)) && T.kill(), o.startDrag = function (t, e) {
        var r, o, i, a;
        em(t || tQ.pointerEvent, !0), e && !tQ.hitTest(t || tQ.pointerEvent) && (r = tI(t || tQ.pointerEvent), o = tI(n), i = eT({
          x: r.left + r.width / 2,
          y: r.top + r.height / 2
        }), a = eT({
          x: o.left + o.width / 2,
          y: o.top + o.height / 2
        }), l -= i.x - a.x, s -= i.y - a.y), tQ.isDragging || (tQ.isDragging = tw = !0, tH(tQ, "dragstart", "onDragStart"));
      }, o.drag = ev, o.endDrag = function (t) {
        return ey(t || tQ.pointerEvent, !0);
      }, o.timeSinceDrag = function () {
        return tQ.isDragging ? 0 : (tc() - t2) / 1e3;
      }, o.timeSinceClick = function () {
        return (tc() - t7) / 1e3;
      }, o.hitTest = function (t, n) {
        return e.hitTest(tQ.target, t, n);
      }, o.getDirection = function (t, e) {
        var r,
          o,
          i,
          a,
          l,
          s,
          p = "velocity" === t && W ? t : Q(t) && !tO ? "element" : "start";
        return ("element" === p && (l = tI(tQ.target), s = tI(t)), r = "start" === p ? tQ.x - c : "velocity" === p ? W.getVelocity(n, tF) : l.left + l.width / 2 - (s.left + s.width / 2), tO) ? r < 0 ? "counter-clockwise" : "clockwise" : (e = e || 2, a = (i = Math.abs(r / (o = "start" === p ? tQ.y - u : "velocity" === p ? W.getVelocity(n, tz) : l.top + l.height / 2 - (s.top + s.height / 2)))) < 1 / e ? "" : r < 0 ? "left" : "right", i < e && ("" !== a && (a += "-"), a += o < 0 ? "up" : "down"), a);
      }, o.applyBounds = function (t, e) {
        var o, i, a, l, s, c;
        if (t && r.bounds !== t) return r.bounds = t, tQ.update(!0, e);
        if (ea(!0), es(), p && !eh()) {
          if (o = tQ.x, i = tQ.y, o > h ? o = h : o < g && (o = g), i > m ? i = m : i < v && (i = v), (tQ.x !== o || tQ.y !== i) && (a = !0, tQ.x = tQ.endX = o, tO ? tQ.endRotation = o : tQ.y = tQ.endY = i, b = !0, ei(!0), tQ.autoScroll && !tQ.isDragging)) for (tR(n.parentNode), l = n, tm.scrollTop = null != S.pageYOffset ? S.pageYOffset : null != er.documentElement.scrollTop ? er.documentElement.scrollTop : er.body.scrollTop, tm.scrollLeft = null != S.pageXOffset ? S.pageXOffset : null != er.documentElement.scrollLeft ? er.documentElement.scrollLeft : er.body.scrollLeft; l && !c;) s = (c = tL(l.parentNode)) ? tm : l.parentNode, tZ && s.scrollTop > s._gsMaxScrollY && (s.scrollTop = s._gsMaxScrollY), t$ && s.scrollLeft > s._gsMaxScrollX && (s.scrollLeft = s._gsMaxScrollX), l = s;
          tQ.isThrowing && (a || tQ.endX > h || tQ.endX < g || tQ.endY > m || tQ.endY < v) && ep(r.inertia || r.throwProps, a);
        }
        return tQ;
      }, o.update = function (t, e, r) {
        if (e && tQ.isPressed) {
          if (tO) tQ.x = tQ.y = to(parseFloat(et.rotation));else {
            var o = M(n),
              i = tf.apply({
                x: tQ.x - c,
                y: tQ.y - u
              }),
              a = M(n.parentNode, !0);
            a.apply({
              x: o.e - i.x,
              y: o.f - i.y
            }, i), tQ.x = to(tQ.x - (i.x - a.e)), tQ.y = to(tQ.y - (i.y - a.f));
          }
          ei(!0), ef();
        }
        var l = tQ.x,
          s = tQ.y;
        return ed(!e), t ? tQ.applyBounds() : (b && r && ei(!0), ea(!0)), e && (ex(tQ.pointerX, tQ.pointerY), b && ei(!0)), tQ.isPressed && !e && (t$ && Math.abs(l - tQ.x) > .01 || tZ && Math.abs(s - tQ.y) > .01 && !tO) && ef(), tQ.autoScroll && (tR(n.parentNode, tQ.isDragging), t3 = tQ.isDragging, ei(!0), tD(n, ew), tY(n, ew)), tQ;
      }, o.enable = function (t) {
        var e,
          o,
          l,
          s = {
            lazy: !0
          };
        if (!1 !== r.cursor && (s.cursor = r.cursor || V), N.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"), "soft" !== t) {
          for (ty(t0, t$ === tZ ? "none" : r.allowNativeTouchScrolling && n.scrollHeight === n.clientHeight == (n.scrollWidth === n.clientHeight) || r.allowEventDefault ? "manipulation" : t$ ? "pan-y" : "pan-x"), o = t0.length; --o > -1;) l = t0[o], z || tE(l, "mousedown", em), tE(l, "touchstart", em), tE(l, "click", eb, !0), N.set(l, s), l.getBBox && l.ownerSVGElement && t$ !== tZ && N.set(l.ownerSVGElement, {
            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : t$ ? "pan-y" : "pan-x"
          }), r.allowContextMenu || tE(l, "contextmenu", eo);
          tU(t0, !1);
        }
        return tY(n, ew), i = !0, W && "soft" !== t && W.track(a || n, tS ? "x,y" : tO ? "rotation" : "top,left"), n._gsDragID = e = n._gsDragID || "d" + td++, tp[e] = tQ, a && (a.enable(), a.element._gsDragID = e), (r.bounds || tO) && ef(), r.bounds && tQ.applyBounds(), tQ;
      }, o.disable = function (t) {
        for (var e, r = tQ.isDragging, o = t0.length; --o > -1;) tA(t0[o], "cursor", null);
        if ("soft" !== t) {
          for (ty(t0, null), o = t0.length; --o > -1;) tA(e = t0[o], "touchCallout", null), tM(e, "mousedown", em), tM(e, "touchstart", em), tM(e, "click", eb, !0), tM(e, "contextmenu", eo);
          tU(t0, !0), A && (tM(A, "touchcancel", ey), tM(A, "touchend", ey), tM(A, "touchmove", ev)), tM(er, "mouseup", ey), tM(er, "mousemove", ev);
        }
        return tD(n, ew), i = !1, W && "soft" !== t && (W.untrack(a || n, tS ? "x,y" : tO ? "rotation" : "top,left"), tQ.tween && tQ.tween.kill()), a && a.disable(), tk(ei), tQ.isDragging = tQ.isPressed = O = !1, r && tH(tQ, "dragend", "onDragEnd"), tQ;
      }, o.enabled = function (t, e) {
        return arguments.length ? t ? tQ.enable(e) : tQ.disable(e) : i;
      }, o.kill = function () {
        return tQ.isThrowing = !1, tQ.tween && tQ.tween.kill(), tQ.disable(), N.set(t0, {
          clearProps: "userSelect"
        }), delete tp[n._gsDragID], tQ;
      }, o.revert = function () {
        this.kill(), this.styles && this.styles.revert();
      }, ~tT.indexOf("scroll") && (a = o.scrollProxy = new tG(n, tx({
        onKill: function () {
          tQ.isPressed && ey(null);
        }
      }, r)), n.style.overflowY = tZ && !B ? "auto" : "hidden", n.style.overflowX = t$ && !B ? "auto" : "hidden", n = a.content), tO ? t1.rotation = 1 : (t$ && (t1[tF] = 1), tZ && (t1[tz] = 1)), et.force3D = !("force3D" in r) || r.force3D, j(C(o)), o.enable(), o;
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t, e.register = function (t) {
      N = t, tq();
    }, e.create = function (t, n) {
      return L || tq(!0), R(t).map(function (t) {
        return new e(t, n);
      });
    }, e.get = function (t) {
      return tp[(R(t)[0] || {})._gsDragID];
    }, e.timeSinceDrag = function () {
      return (tc() - th) / 1e3;
    }, e.hitTest = function (t, e, n) {
      if (t === e) return !1;
      var r,
        o,
        i,
        a = tI(t),
        l = tI(e),
        s = a.top,
        c = a.left,
        u = a.right,
        p = a.bottom,
        d = a.width,
        f = a.height,
        h = l.left > u || l.right < c || l.top > p || l.bottom < s;
      return h || !n ? !h : (i = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (r = {
        left: Math.max(c, l.left),
        top: Math.max(s, l.top)
      }).width = Math.min(u, l.right) - r.left, r.height = Math.min(p, l.bottom) - r.top, !(r.width < 0) && !(r.height < 0) && (i ? (n *= .01, (o = r.width * r.height) >= d * f * n || o >= l.width * l.height * n) : r.width > n && r.height > n));
    }, e;
  }(function () {
    function t(t) {
      this._listeners = {}, this.target = t || this;
    }
    var e = t.prototype;
    return e.addEventListener = function (t, e) {
      var n = this._listeners[t] || (this._listeners[t] = []);
      ~n.indexOf(e) || n.push(e);
    }, e.removeEventListener = function (t, e) {
      var n = this._listeners[t],
        r = n && n.indexOf(e);
      r >= 0 && n.splice(r, 1);
    }, e.dispatchEvent = function (t) {
      var e,
        n = this;
      return (this._listeners[t] || []).forEach(function (r) {
        return !1 === r.call(n, {
          type: t,
          target: n.target
        }) && (e = !1);
      }), e;
    }, t;
  }());
!function (t, e) {
  for (var n in e) n in t || (t[n] = e[n]);
}(t$.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
}), t$.zIndex = 1e3, t$.version = "3.14.1", Z() && N.registerPlugin(t$);

export { t$ as s };


/* ---- 本地补齐的默认导出组件（原抓取只含 Draggable 库，缺 React 组件） ---- */
import * as React from 'react';
function DraggableGrid(props: any) {
  const { images, firstImage, secondImage } = props || {};
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let down=false, sx=0, sy=0, ox=0, oy=0, vx=0, vy=0, raf;
    const inner = el.firstElementChild;
    const frame=()=>{ ox+=vx; oy+=vy; vx*=0.92; vy*=0.92; inner.style.transform=`translate(${ox}px,${oy}px)`; raf=requestAnimationFrame(frame); };
    frame();
    const d=(e)=>{down=true; sx=e.clientX-ox; sy=e.clientY-oy; el.setPointerCapture?.(e.pointerId)};
    const m=(e)=>{ if(!down)return; const nx=e.clientX-sx, ny=e.clientY-sy; vx=nx-ox; vy=ny-oy; ox=nx; oy=ny; };
    const u=()=>{down=false};
    el.addEventListener('pointerdown',d); el.addEventListener('pointermove',m); window.addEventListener('pointerup',u);
    return ()=>{cancelAnimationFrame(raf); el.removeEventListener('pointerdown',d); el.removeEventListener('pointermove',m); window.removeEventListener('pointerup',u)};
  }, []);
  const cells = Array.from({length:36},(_,i)=>i);
  return React.createElement('div', { ref, style:{ position:'relative', width:'100%', height:'100vh', minHeight:420, overflow:'hidden', background:'#0b0b10', touchAction:'none', cursor:'grab' } },
    React.createElement('div', { style:{ display:'grid', gridTemplateColumns:'repeat(6, 180px)', gap:16, padding:40, willChange:'transform' } },
      cells.map((i) => React.createElement('div', { key: i, style: { width: 180, height: 150, borderRadius: 14, background: `hsl(${240 + i * 7} 60% 22%)`, border: '1px solid #ffffff18', display: 'grid', placeItems: 'center', color: '#e7e2f5', font: '600 15px Inter,system-ui' } }, String(i + 1).padStart(2, '0')))
    )
  );
}
DraggableGrid.displayName = 'DraggableGrid';
export default DraggableGrid;
