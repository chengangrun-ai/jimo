import * as __mod_90650 from "../_helpers/90650";
import * as __mod_45949 from "../_helpers/45949";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Loupe Image
 * A loupe that glides over a photo and magnifies its finest details
 * slug: loupe-image
 * category: image
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = ["lens", "inline"],
  c = ["circle", "rounded"],
  u = ["none", "hairline", "glass", "solid"],
  h = ["none", "dot", "cross", "corners"],
  m = ["pinch", "wheel", "off"],
  g = (e, t, a) => Math.min(a, Math.max(t, e)),
  b = (e, t) => Number.isFinite(e) ? e : t,
  f = "/demo-media/effect-loupe-waldo-preview.webp",
  v = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  x = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  y = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0
  },
  w = (e, t) => ({
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: t,
    background: e,
    WebkitMaskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
    WebkitMaskClip: "content-box, border-box",
    WebkitMaskComposite: "xor",
    maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
    maskClip: "content-box, border-box",
    maskComposite: "exclude",
    pointerEvents: "none"
  }),
  S = (e, t) => ({
    position: "absolute",
    background: t,
    boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.35)",
    pointerEvents: "none",
    ...e
  }),
  C = (e, t, a) => ({
    position: "absolute",
    width: "clamp(10px, 15%, 26px)",
    height: "clamp(10px, 15%, 26px)",
    borderStyle: "solid",
    borderColor: a,
    borderTopWidth: 1.5 * !!t[0],
    borderRightWidth: 1.5 * !!t[1],
    borderBottomWidth: 1.5 * !!t[2],
    borderLeftWidth: 1.5 * !!t[3],
    filter: "drop-shadow(0 0 0.5px rgb(0 0 0 / 0.5))",
    pointerEvents: "none",
    ...e
  }),
  k = (0, React.forwardRef)(function ({
    src: e = f,
    zoomSrc: t,
    alt: a = "Where’s Waldo? illustrated crowd scene",
    aspectRatio: r = "auto",
    fit: n = "cover",
    focusX: l = 50,
    focusY: s = 50,
    radius: k = 18,
    mode: j = "lens",
    zoom: F = 2,
    minZoom: M = 1.25,
    maxZoom: E = 4,
    boost: W = 2,
    wheelZoom: R = "pinch",
    lensSize: z = 180,
    lensAspect: L = 1,
    shape: I = "circle",
    lensRadius: T = 18,
    rim: A = "glass",
    rimWidth: $ = 3,
    rimColor: P = "#FFFFFF",
    backgroundColor: O = "transparent",
    shadow: Z = .6,
    dim: H = .25,
    reticle: N = "none",
    showZoom: B = !0,
    smoothing: D = .35,
    overhang: U = !1,
    hideCursor: Y = !0,
    touchOffset: V = 72,
    onZoomChange: X,
    className: G,
    style: _
  }, q) {
    let K = (0, React.useRef)(null),
      J = (0, React.useRef)(null),
      Q = (0, React.useRef)(null),
      ee = (0, React.useSyncExternalStore)(v, x, () => !1),
      et = (0, React.useId)(),
      [ea, ei] = (0, React.useState)(null),
      eo = p.includes(j) ? j : "lens",
      er = c.includes(I) ? I : "circle",
      en = u.includes(A) ? A : "glass",
      el = h.includes(N) ? N : "none",
      es = m.includes(R) ? R : "pinch",
      ed = t ?? (e === f ? "/demo-media/effect-loupe-waldo.webp" : e),
      ep = {
        mode: eo,
        zoom: F,
        minZoom: M,
        maxZoom: E,
        boost: W,
        wheelZoom: es,
        lensSize: z,
        lensAspect: L,
        shape: er,
        lensRadius: T,
        radius: k,
        dim: H,
        showZoom: B,
        smoothing: D,
        overhang: U,
        hideCursor: Y,
        touchOffset: V,
        reduced: ee
      },
      ec = (0, React.useRef)(ep),
      eu = (0, React.useRef)(e => {
        X?.(e);
      });
    (0, React.useEffect)(() => {
      ec.current = ep, eu.current = e => {
        X?.(e);
      }, Q.current?.sync();
    }), (0, React.useEffect)(() => {
      let e,
        t,
        a,
        i,
        o,
        r,
        n,
        l,
        s,
        d,
        p,
        c,
        u,
        h,
        m,
        f,
        v,
        x,
        y,
        w,
        S,
        C,
        k,
        j,
        F,
        M,
        E,
        W,
        R,
        z,
        L,
        I,
        T,
        A,
        $,
        P,
        O,
        Z,
        H,
        N,
        B,
        D,
        U,
        Y,
        V,
        X,
        G,
        _,
        q,
        J,
        ee,
        et,
        ea,
        ei,
        eo,
        er,
        en,
        el,
        es,
        ed,
        ep,
        eh,
        em,
        eg,
        eb,
        ef,
        ev,
        ex,
        ey,
        ew,
        eS,
        eC,
        ek = K.current;
      if (!ek) return;
      let ej = (e = ek.ownerDocument.defaultView ?? window, a = (t = e => ek.querySelector(`[data-loupe="${e}"]`))("lens"), i = t("veil"), o = t("chip"), r = [], n = [], l = new Map(), s = 0, d = 0, p = 0, c = 0, u = 0, h = 0, m = !1, f = 0, v = 1, x = 1, y = !1, w = 0, S = 0, C = 0, k = 0, j = 0, F = 0, M = 0, E = !1, W = null, R = null, z = null, L = !1, I = NaN, T = "", A = "", $ = () => {
        let e = ec.current,
          t = y ? g(b(e.boost, 2), 1, 4) : 1;
        return g(v * t, 1, 40);
      }, P = e => {
        let t = ek.getBoundingClientRect(),
          a = t.width > 0 && s > 0 ? t.width / s : 1,
          i = t.height > 0 && d > 0 ? t.height / d : 1;
        return {
          x: (e.clientX - t.left) / a,
          y: (e.clientY - t.top) / i
        };
      }, O = () => {
        let e = ec.current;
        if ("inline" === e.mode) S = s, C = d, ek.style.setProperty("--loupe-r", `${Math.max(0, b(e.radius, 18))}px`);else {
          let t = g(b(e.lensAspect, 1), .25, 4),
            a = g(b(e.lensSize, 180), 40, 900),
            i = a * t,
            o = Math.min(1, Math.max(40, .62 * s) / i, Math.max(40, .62 * d) / a);
          S = i * o, C = a * o;
          let r = "circle" === e.shape ? Math.min(S, C) / 2 : Math.min(Math.max(0, b(e.lensRadius, 18)), Math.min(S, C) / 2);
          ek.style.setProperty("--loupe-r", `${r.toFixed(2)}px`);
        }
        for (let e of [a, i]) e && (e.style.width = `${S.toFixed(2)}px`, e.style.height = `${C.toFixed(2)}px`);
        w = 0;
      }, Z = (e, t, a, i, o) => {
        let n = Math.max(e, $(), 1);
        if (w < n - .001 || w > 1.6 * n) for (let e of (w = Math.ceil(2 * n) / 2, r)) e.style.width = `${(s * w).toFixed(1)}px`, e.style.height = `${(d * w).toFixed(1)}px`;
        let l = `translate3d(${(i - t * e).toFixed(2)}px,${(o - a * e).toFixed(2)}px,0) scale(${(e / w).toFixed(5)})`;
        for (let e of r) e.style.transform = l;
      }, H = (e, t, a) => {
        if (!o) return;
        if ("inline" === ec.current.mode) {
          o.style.transform = `translate3d(${(s - 12).toFixed(1)}px,${(d - 12).toFixed(1)}px,0) translate(-100%,-100%)`;
          return;
        }
        let i = t + C / 2 * a + 10,
          r = i + 30 > d && t - C / 2 * a - 10 > 30,
          n = r ? t - C / 2 * a - 10 : i;
        o.style.transform = `translate3d(${e.toFixed(1)}px,${n.toFixed(1)}px,0) translate(-50%,${r ? "-100%" : "0"})`;
      }, N = () => {
        if (!a || s <= 0 || d <= 0) return;
        let e = ec.current,
          t = f * f * (3 - 2 * f);
        if ("inline" === e.mode) {
          let e = 1 + (x - 1) * t;
          a.style.transform = "translate3d(0px,0px,0)", a.style.opacity = t.toFixed(4), i && (i.style.opacity = "0"), Z(e, u, h, u, h), H(0, 0, 1);
          return;
        }
        e.overhang || (o = g(u, Math.min(S / 2, s / 2), Math.max(s - S / 2, s / 2)), r = g(h, Math.min(C / 2, d / 2), Math.max(d - C / 2, d / 2)));
        let n = .84 + .16 * t,
          l = `translate3d(${(u - S / 2).toFixed(2)}px,${(h - C / 2).toFixed(2)}px,0) scale(${n.toFixed(4)})`;
        a.style.transform = l, a.style.opacity = t.toFixed(4), i && (i.style.transform = l, i.style.opacity = (t * g(b(e.dim, .25), 0, 1)).toFixed(4));
        if (!e.overhang) {
          let e = S / (2 * x),
            t = C / (2 * x);
          p = g(u, Math.min(e, s / 2), Math.max(s - e, s / 2)), c = g(h, Math.min(t, d / 2), Math.max(d - t, d / 2));
        }
        Z(x, u, h, S / 2, C / 2), H(u, h, n);
      }, B = () => {
        let e = +!!m;
        return .05 > Math.abs(p - u) && .05 > Math.abs(c - h) && f === e && x === $();
      }, D = e => {
        if (k = 0, L) return;
        let t = j && e - j < 100 ? Math.min(Math.max((e - j) / 1e3, 0), .05) : 1 / 60;
        j = e;
        let a = ec.current,
          i = a.reduced ? 0 : .012 + .2 * g(b(a.smoothing, .35), 0, 1),
          o = i > 0 ? 1 - Math.exp(-t / i) : 1;
        u += (p - u) * o, h += (c - h) * o, .05 > Math.abs(p - u) && (u = p), .05 > Math.abs(c - h) && (h = c);
        let r = +!!m,
          n = a.reduced ? 1 : 1 - Math.exp(-t / (m ? .085 : .12));
        f += (r - f) * n, .002 > Math.abs(r - f) && (f = r);
        let l = $(),
          s = a.reduced ? 1 : 1 - Math.exp(-t / .13);
        x = Math.exp(Math.log(x) + (Math.log(l) - Math.log(x)) * s), 8e-4 > Math.abs(l - x) && (x = l), N(), B() || document.hidden ? j = 0 : k = requestAnimationFrame(D);
      }, U = () => {
        k || L || (k = requestAnimationFrame(D));
      }, Y = () => {
        let t = ec.current;
        if (!o || !t.showZoom) return;
        let a = $(),
          i = `${a < 9.95 ? a.toFixed(1) : Math.round(a)}\xd7`;
        i !== A && (A = i, o.textContent = i), o.style.opacity = "1", e.clearTimeout(F), F = e.setTimeout(() => {
          o && (o.style.opacity = "0");
        }, 900);
      }, V = () => {
        let e = ec.current;
        ek.style.cursor = m && e.hideCursor && "lens" === e.mode ? "none" : "inline" === e.mode ? m ? "zoom-out" : "zoom-in" : "";
      }, X = (e, t, a = !1) => {
        let i = ec.current.overhang ? .5 * Math.max(S, C) : 0;
        p = g(e, -i, s + i), c = g(t, -i, d + i), (a || f < .01) && (u = p, h = c), U();
      }, G = () => {
        e.clearTimeout(M), m || (m = !0, V()), U();
      }, _ = () => {
        e.clearTimeout(M), m && (m = !1, y = !1, V(), e.clearTimeout(F), o && (o.style.opacity = "0")), U();
      }, q = t => {
        e.clearTimeout(M), M = e.setTimeout(() => {
          E || null !== W || R?.active || _();
        }, t);
      }, J = (e, t = !0) => {
        let a = ec.current,
          i = g(b(a.minZoom, 1.25), 1, 40),
          o = Math.max(i, g(b(a.maxZoom, 4), 1, 40)),
          r = g(e, i, o);
        1e-4 > Math.abs(r - v) || (v = r, m && Y(), t && eu.current(v), U());
      }, ee = e => {
        if (e.naturalWidth <= 0) return;
        let t = () => {
          e.hasAttribute("data-loupe-hi") && (e.style.opacity = "1");
        };
        "function" == typeof e.decode ? e.decode().then(t, t) : t();
      }, et = e => ee(e.currentTarget), ea = () => {
        for (let e of (a = t("lens"), i = t("veil"), o = t("chip"), r = a ? Array.from(a.querySelectorAll("[data-loupe-layer]")) : [])) n.includes(e) || (n.push(e), e.addEventListener("load", et)), e.complete && e.naturalWidth > 0 && ee(e);
        O(), N();
      }, ei = () => {
        let e = ek.clientWidth,
          t = ek.clientHeight;
        if (e <= 0 || t <= 0 || .5 > Math.abs(e - s) && .5 > Math.abs(t - d)) return;
        let a = s > 0 ? u / s : .5,
          i = d > 0 ? h / d : .5;
        s = e, d = t, p = u = a * s, c = h = i * d, O(), N();
      }, eo = e => {
        if ("touch" === e.pointerType) return;
        E = !0;
        let t = P(e);
        X(t.x, t.y, !m), G();
      }, er = t => {
        if ("touch" === t.pointerType) {
          if (l.has(t.pointerId) && l.set(t.pointerId, P(t)), z && l.size >= 2) {
            let [e, t] = Array.from(l.values()),
              a = Math.hypot(e.x - t.x, e.y - t.y);
            J(z.level * (a / Math.max(1, z.distance))), X((e.x + t.x) / 2, (e.y + t.y) / 2 - el());
            return;
          }
          if (!R || t.pointerId !== R.id) return;
          let a = P(t);
          if (!R.active) {
            Math.hypot(a.x - R.x, a.y - R.y) > 8 && (e.clearTimeout(R.timer), R = null);
            return;
          }
          X(a.x, a.y - el());
          return;
        }
        E = !0;
        let a = P(t);
        X(a.x, a.y), m || G();
      }, en = e => {
        "touch" !== e.pointerType && (E = !1, null === W && _());
      }, el = () => {
        let e = ec.current;
        return "inline" === e.mode ? 0 : Math.max(0, b(e.touchOffset, 72));
      }, es = () => {
        R && (R.active = !0, X(R.x, R.y - el(), !0), G());
      }, ed = t => {
        let a = ec.current;
        if ("touch" === t.pointerType) {
          if (l.set(t.pointerId, P(t)), 2 === l.size && (R?.active || m)) {
            let [e, t] = Array.from(l.values());
            z = {
              distance: Math.hypot(e.x - t.x, e.y - t.y),
              level: v
            }, R && (R.active = !0);
            return;
          }
          if (R || !t.isPrimary) return;
          let a = P(t);
          R = {
            id: t.pointerId,
            x: a.x,
            y: a.y,
            time: performance.now(),
            active: !1,
            timer: e.setTimeout(es, 160)
          };
          return;
        }
        if (0 !== t.button || null !== W) return;
        W = t.pointerId, ek.setPointerCapture(t.pointerId);
        let i = P(t);
        E = !0, X(i.x, i.y, !m), G(), "lens" === a.mode && b(a.boost, 2) > 1.001 && (y = !0, Y(), U());
      }, ep = (t, a) => {
        if ("touch" === t.pointerType) {
          if (l.delete(t.pointerId), z && l.size < 2 && (z = null), !R || t.pointerId !== R.id) return;
          e.clearTimeout(R.timer);
          let i = !R.active && performance.now() - R.time < 320,
            o = R.active,
            r = {
              x: R.x,
              y: R.y
            };
          if (R = null, a) {
            o && _();
            return;
          }
          o ? q(650) : i && (X(r.x, r.y - el(), !0), G(), q(1600));
          return;
        }
        if (W !== t.pointerId) return;
        W = null, ek.hasPointerCapture(t.pointerId) && ek.releasePointerCapture(t.pointerId), y && (y = !1, Y(), U());
        let i = ek.getBoundingClientRect();
        (!(t.clientX >= i.left && t.clientX <= i.right && t.clientY >= i.top && t.clientY <= i.bottom) || a) && (E = !1, _());
      }, eh = e => ep(e, !1), em = e => ep(e, !0), eg = e => {
        (R?.active || z) && e.cancelable && e.preventDefault();
      }, eb = e => {
        (R?.active || z) && e.preventDefault();
      }, ef = e => {
        let t = ec.current;
        if (!m || "off" === t.wheelZoom || "pinch" === t.wheelZoom && !e.ctrlKey) return;
        e.preventDefault();
        let a = g(1 === e.deltaMode ? 16 * e.deltaY : e.deltaY, -60, 60);
        J(v * Math.exp(-(.006 * a)));
      }, ev = e => {
        if (e.target !== ek) return;
        let t = (e.shiftKey ? .12 : .04) * Math.max(s, d),
          a = {
            ArrowLeft: [-t, 0],
            ArrowRight: [t, 0],
            ArrowUp: [0, -t],
            ArrowDown: [0, t]
          }[e.key];
        if (a) {
          e.preventDefault(), m || X(p || s / 2, c || d / 2, !0), X(g(p + a[0], 0, s), g(c + a[1], 0, d)), G();
          return;
        }
        if ("+" === e.key || "=" === e.key) {
          e.preventDefault(), G(), J(1.25 * v);
          return;
        }
        if ("-" === e.key || "_" === e.key) {
          e.preventDefault(), G(), J(v / 1.25);
          return;
        }
        "Escape" === e.key && _();
      }, ex = () => {
        let e = !0;
        try {
          e = ek.matches(":focus-visible");
        } catch {
          e = !0;
        }
        e && !m && (X(s / 2, d / 2, !0), G());
      }, ey = () => {
        E || null !== W || R || _();
      }, ew = () => {
        j = 0, document.hidden || B() || U();
      }, eS = new ResizeObserver(ei), ek.addEventListener("pointerenter", eo), ek.addEventListener("pointermove", er), ek.addEventListener("pointerleave", en), ek.addEventListener("pointerdown", ed), ek.addEventListener("pointerup", eh), ek.addEventListener("pointercancel", em), ek.addEventListener("touchmove", eg, {
        passive: !1
      }), ek.addEventListener("contextmenu", eb), ek.addEventListener("wheel", ef, {
        passive: !1
      }), ek.addEventListener("keydown", ev), ek.addEventListener("focus", ex), ek.addEventListener("blur", ey), document.addEventListener("visibilitychange", ew), eC = e => [e.mode, e.lensSize, e.lensAspect, e.shape, e.lensRadius, e.radius].join(","), ei(), eS.observe(ek), x = v = g(b(ec.current.zoom, 2), 1, 40), I = ec.current.zoom, T = eC(ec.current), ea(), {
        sync: () => {
          let e = ec.current;
          e.zoom !== I ? (I = e.zoom, J(b(e.zoom, 2), !1)) : J(v, !1);
          let i = eC(e);
          if (i !== T) T = i, ea();else {
            let e = a ? Array.from(a.querySelectorAll("[data-loupe-layer]")) : [];
            (t("lens") !== a || e.length !== r.length || e.some((e, t) => e !== r[t])) && ea();
          }
          "inline" === e.mode && y && (y = !1), V(), N(), U();
        },
        show: (e, t) => {
          X((void 0 === e ? .5 : g(e, 0, 1)) * s, (void 0 === t ? .5 : g(t, 0, 1)) * d, !m), G();
        },
        hide: _,
        setZoom: e => J(e),
        destroy: () => {
          for (let t of (L = !0, cancelAnimationFrame(k), e.clearTimeout(F), e.clearTimeout(M), R && e.clearTimeout(R.timer), eS.disconnect(), ek.removeEventListener("pointerenter", eo), ek.removeEventListener("pointermove", er), ek.removeEventListener("pointerleave", en), ek.removeEventListener("pointerdown", ed), ek.removeEventListener("pointerup", eh), ek.removeEventListener("pointercancel", em), ek.removeEventListener("touchmove", eg), ek.removeEventListener("contextmenu", eb), ek.removeEventListener("wheel", ef), ek.removeEventListener("keydown", ev), ek.removeEventListener("focus", ex), ek.removeEventListener("blur", ey), document.removeEventListener("visibilitychange", ew), n)) t.removeEventListener("load", et);
          ek.style.cursor = "";
        }
      });
      return Q.current = ej, () => {
        ej.destroy(), Q.current = null;
      };
    }, []), (0, React.useEffect)(() => {
      let e = J.current;
      if ("auto" !== r || !e) return;
      let t = () => {
        e.naturalWidth > 0 && e.naturalHeight > 0 && ei(e.naturalWidth / e.naturalHeight);
      };
      return t(), e.addEventListener("load", t), () => e.removeEventListener("load", t);
    }, [r, e]), (0, React.useImperativeHandle)(q, () => ({
      show: (e, t) => Q.current?.show(e, t),
      hide: () => Q.current?.hide(),
      setZoom: e => Q.current?.setZoom(e)
    }), []);
    let eh = "auto" === r ? ea ?? 1.5 : g(b(r, 1.5), .2, 5),
      em = O.trim().toLowerCase(),
      eg = "transparent" === em || "" === em ? void 0 : O,
      eb = `${g(b(l, 50), 0, 100)}% ${g(b(s, 50), 0, 100)}%`,
      ef = g(b(Z, .6), 0, 1),
      ev = g(b($, 3), .5, 24),
      ex = "lens" === eo,
      ey = e => `color-mix(in oklch, ${P} ${e}%, transparent)`,
      ew = {
        position: "absolute",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        maxWidth: "none",
        objectFit: n,
        objectPosition: eb,
        transformOrigin: "0 0",
        willChange: "transform",
        pointerEvents: "none",
        userSelect: "none"
      };
    return <div ref={K} role="group" tabIndex={0} aria-label={a} aria-describedby={et} className={(0, __mod_90650.cn)("relative isolate w-full select-none outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color-mix(in_oklch,currentColor_45%,transparent)]", G)} style={{
      aspectRatio: eh,
      borderRadius: Math.max(0, b(k, 18)),
      touchAction: "pan-y",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      ..._
    }}><div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        borderRadius: "inherit",
        background: eg
      }}><img ref={J} src={e} alt={a} draggable={!1} decoding="async" style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: n,
          objectPosition: eb,
          pointerEvents: "none",
          userSelect: "none"
        }} />{ex ? <div data-loupe="veil" aria-hidden="true" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderRadius: "var(--loupe-r, 50%)",
          boxShadow: "0 0 0 300vmax rgb(0 0 0 / 0.62)",
          opacity: 0,
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
          pointerEvents: "none"
        }} /> : null}</div><div data-loupe="lens" aria-hidden="true" style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        width: 0,
        height: 0,
        overflow: "hidden",
        borderRadius: "var(--loupe-r, 50%)",
        background: eg,
        boxShadow: ex && ef > 0 ? `0 1px 2px rgb(0 0 0 / ${(.25 * ef).toFixed(3)}), 0 10px 24px -6px rgb(0 0 0 / ${(.35 * ef).toFixed(3)}), 0 28px 60px -18px rgb(0 0 0 / ${(.5 * ef).toFixed(3)})` : "none",
        opacity: 0,
        transformOrigin: "50% 50%",
        willChange: "transform, opacity",
        pointerEvents: "none"
      }}><img data-loupe-layer="" src={e} alt="" draggable={!1} decoding="async" style={ew} />{ed !== e ? <img data-loupe-layer="" data-loupe-hi="" src={ed} alt="" draggable={!1} decoding="async" style={{
          ...ew,
          opacity: 0,
          transition: "opacity 0.35s ease"
        }} /> : null}{ex && "glass" === en ? <><span style={w(`linear-gradient(150deg, ${ey(95)} 0%, ${ey(38)} 28%, ${ey(12)} 52%, ${ey(30)} 78%, ${ey(70)} 100%)`, ev)} /><span style={{
            position: "absolute",
            inset: ev,
            borderRadius: `calc(var(--loupe-r, 50%) - ${ev}px)`,
            boxShadow: "inset 0 2px 9px rgb(0 0 0 / 0.38), inset 1.5px 2px 0 -0.5px rgb(255 255 255 / 0.35), inset -1px -1.5px 0 -0.5px rgb(0 0 0 / 0.3)",
            pointerEvents: "none"
          }} /></> : null}{ex && "solid" === en ? <><span style={w(P, ev)} /><span style={{
            position: "absolute",
            inset: ev,
            borderRadius: `calc(var(--loupe-r, 50%) - ${ev}px)`,
            boxShadow: "inset 0 1px 6px rgb(0 0 0 / 0.3)",
            pointerEvents: "none"
          }} /></> : null}{ex && "hairline" === en ? <span style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          boxShadow: `inset 0 0 0 1px ${ey(72)}, inset 0 1px 7px rgb(0 0 0 / 0.25)`,
          pointerEvents: "none"
        }} /> : null}{ex && "dot" === el ? <span style={S({
          left: "50%",
          top: "50%",
          width: 5,
          height: 5,
          borderRadius: "50%",
          transform: "translate(-50%,-50%)"
        }, P)} /> : null}{ex && "cross" === el ? <><span style={S({
            left: "calc(36% - 6px)",
            top: "50%",
            width: "14%",
            height: 1,
            transform: "translateY(-50%)"
          }, P)} /><span style={S({
            left: "calc(50% + 6px)",
            top: "50%",
            width: "14%",
            height: 1,
            transform: "translateY(-50%)"
          }, P)} /><span style={S({
            top: "calc(36% - 6px)",
            left: "50%",
            height: "14%",
            width: 1,
            transform: "translateX(-50%)"
          }, P)} /><span style={S({
            top: "calc(50% + 6px)",
            left: "50%",
            height: "14%",
            width: 1,
            transform: "translateX(-50%)"
          }, P)} /></> : null}{ex && "corners" === el ? <><span style={C({
            left: "16%",
            top: "16%"
          }, [!0, !1, !1, !0], P)} /><span style={C({
            right: "16%",
            top: "16%"
          }, [!0, !0, !1, !1], P)} /><span style={C({
            right: "16%",
            bottom: "16%"
          }, [!1, !0, !0, !1], P)} /><span style={C({
            left: "16%",
            bottom: "16%"
          }, [!1, !1, !0, !0], P)} /></> : null}</div><div data-loupe="chip" aria-hidden="true" style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 2,
        padding: "4px 8px",
        borderRadius: 8,
        background: "rgb(10 10 10 / 0.7)",
        color: "#FFFFFF",
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
        fontSize: 12,
        lineHeight: "16px",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        opacity: 0,
        transition: "opacity 0.2s ease",
        pointerEvents: "none"
      }} /><span id={et} style={y}>Move the pointer or use the arrow keys to move the loupe. Plus and minus change the zoom.</span></div>;
  });
k.displayName = "LoupeImage";
let j = {
    waldo: __mod_45949.PT.loupeWaldo,
    glass: __mod_45949.PT.loupeGlass
  },
  F = {
    photo: "waldo",
    mode: "lens",
    shape: "circle",
    rim: "glass",
    reticle: "none",
    zoom: 2,
    boost: 2,
    lensSize: 180,
    lensAspect: 1,
    lensRadius: 18,
    rimWidth: 3,
    shadow: .6,
    dim: .25
  },
  M = {
    loupe: F,
    glass: {
      ...F,
      photo: "glass",
      reticle: "cross",
      zoom: 2.5,
      lensSize: 150,
      rimWidth: 6,
      dim: .45
    },
    macro: {
      ...F,
      photo: "waldo",
      rim: "hairline",
      zoom: 2.5,
      lensSize: 230,
      dim: 0
    },
    viewfinder: {
      ...F,
      photo: "glass",
      shape: "rounded",
      rim: "hairline",
      reticle: "corners",
      zoom: 2.5,
      lensSize: 200,
      lensRadius: 22,
      dim: .2
    },
    detail: {
      ...F,
      photo: "glass",
      lensAspect: 2.4,
      lensSize: 120,
      zoom: 2.4,
      dim: .3
    },
    inline: {
      ...F,
      photo: "glass",
      mode: "inline",
      zoom: 2.5
    },
    spotlight: {
      ...F,
      rim: "hairline",
      zoom: 1.8,
      lensSize: 280,
      shadow: .35,
      dim: .65
    }
  },
  E = [{
    label: "Loupe",
    value: "loupe"
  }, {
    label: "Glass",
    value: "glass"
  }, {
    label: "Macro",
    value: "macro"
  }, {
    label: "Viewfinder",
    value: "viewfinder"
  }, {
    label: "Detail",
    value: "detail"
  }, {
    label: "Inline",
    value: "inline"
  }, {
    label: "Spotlight",
    value: "spotlight"
  }],
  W = [{
    label: "Where’s Waldo?",
    value: "waldo"
  }, {
    label: "Iridescent glass",
    value: "glass"
  }],
  R = [{
    label: "Lens",
    value: "lens"
  }, {
    label: "Inline",
    value: "inline"
  }],
  z = [{
    label: "Circle",
    value: "circle"
  }, {
    label: "Rounded",
    value: "rounded"
  }],
  L = [{
    label: "Glass",
    value: "glass"
  }, {
    label: "Hairline",
    value: "hairline"
  }, {
    label: "Solid",
    value: "solid"
  }, {
    label: "None",
    value: "none"
  }],
  I = [{
    label: "None",
    value: "none"
  }, {
    label: "Dot",
    value: "dot"
  }, {
    label: "Cross",
    value: "cross"
  }, {
    label: "Corners",
    value: "corners"
  }],
  T = [{
    label: "Pinch",
    value: "pinch"
  }, {
    label: "Wheel",
    value: "wheel"
  }, {
    label: "Off",
    value: "off"
  }],
  A = [{
    label: "Auto",
    value: "auto"
  }, {
    label: "1:1",
    value: "1"
  }, {
    label: "4:3",
    value: "1.3333"
  }, {
    label: "16:9",
    value: "1.7778"
  }, {
    label: "4:5",
    value: "0.8"
  }],
  $ = [{
    label: "Cover",
    value: "cover"
  }, {
    label: "Contain",
    value: "contain"
  }],
  P = [{
    name: "src",
    type: "string",
    default: "Where’s Waldo?",
    description: "Image shown in the frame."
  }, {
    name: "zoomSrc",
    type: "string",
    default: "src",
    description: "Higher-resolution copy used inside the loupe. It loads in the background and fades in to reveal more detail."
  }, {
    name: "alt",
    type: "string",
    default: '"Where’s Waldo? illustrated crowd scene"',
    description: "Accessible description of the image."
  }, {
    name: "aspectRatio",
    type: 'number | "auto"',
    default: '"auto"',
    description: "Width divided by height of the frame. Auto follows the image once it loads."
  }, {
    name: "fit",
    type: '"cover" | "contain"',
    default: '"cover"',
    description: "How the image fills the frame. The magnified view always matches it exactly."
  }, {
    name: "focusX",
    type: "number",
    default: "50",
    description: "Horizontal crop anchor in percent when the image is cropped."
  }, {
    name: "focusY",
    type: "number",
    default: "50",
    description: "Vertical crop anchor in percent when the image is cropped."
  }, {
    name: "radius",
    type: "number",
    default: "18",
    description: "Corner radius of the frame in pixels."
  }, {
    name: "mode",
    type: '"lens" | "inline"',
    default: '"lens"',
    description: "A loupe over the image, or the whole frame zooming in and panning with the pointer."
  }, {
    name: "zoom",
    type: "number",
    default: "2",
    description: "Magnification."
  }, {
    name: "minZoom",
    type: "number",
    default: "1.25",
    description: "Lowest magnification reachable with pinch, wheel or keys."
  }, {
    name: "maxZoom",
    type: "number",
    default: "4",
    description: "Highest magnification reachable with pinch, wheel or keys."
  }, {
    name: "boost",
    type: "number",
    default: "2",
    description: "Press and hold to bring the loupe closer: magnification multiplies by this while held. 1 turns it off."
  }, {
    name: "wheelZoom",
    type: '"pinch" | "wheel" | "off"',
    default: '"pinch"',
    description: "Change magnification with a trackpad pinch (or Ctrl and the wheel), with the plain wheel, or not at all. Pinch keeps page scrolling untouched."
  }, {
    name: "lensSize",
    type: "number",
    default: "180",
    description: "Height of the loupe in pixels. It shrinks to fit small frames."
  }, {
    name: "lensAspect",
    type: "number",
    default: "1",
    description: "Width divided by height of the loupe. Above 1 gives a wide reading lens."
  }, {
    name: "shape",
    type: '"circle" | "rounded"',
    default: '"circle"',
    description: "A round loupe (a capsule when wide) or a rounded rectangle."
  }, {
    name: "lensRadius",
    type: "number",
    default: "18",
    description: "Corner radius of the rounded loupe in pixels."
  }, {
    name: "rim",
    type: '"none" | "hairline" | "glass" | "solid"',
    default: '"glass"',
    description: "Edge of the loupe: none, a fine line, a lit glass rim, or a solid band."
  }, {
    name: "rimWidth",
    type: "number",
    default: "3",
    description: "Width of the glass or solid rim in pixels."
  }, {
    name: "rimColor",
    type: "string",
    default: '"#FFFFFF"',
    description: "Colour of the rim and the reticle."
  }, {
    name: "backgroundColor",
    type: "string",
    default: '"transparent"',
    description: "Fill behind the image, visible when it is contained."
  }, {
    name: "shadow",
    type: "number",
    default: "0.6",
    description: "Strength of the shadow under the loupe, from 0 to 1."
  }, {
    name: "dim",
    type: "number",
    default: "0.25",
    description: "How much the image around the loupe darkens while it is in use, from 0 to 1."
  }, {
    name: "reticle",
    type: '"none" | "dot" | "cross" | "corners"',
    default: '"none"',
    description: "A fine mark in the loupe: a centre dot, a crosshair or viewfinder corners."
  }, {
    name: "showZoom",
    type: "boolean",
    default: "true",
    description: "Show the magnification beside the loupe for a moment whenever it changes."
  }, {
    name: "smoothing",
    type: "number",
    default: "0.35",
    description: "How much weight the loupe has as it follows the pointer, from 0 (none) to 1."
  }, {
    name: "overhang",
    type: "boolean",
    default: "false",
    description: "Let the loupe hang past the edge of the frame instead of stopping at it."
  }, {
    name: "hideCursor",
    type: "boolean",
    default: "true",
    description: "Hide the system cursor while the loupe is in use."
  }, {
    name: "touchOffset",
    type: "number",
    default: "72",
    description: "On touch, hold to bring up the loupe this many pixels above your finger so it never covers what you inspect. A quick tap peeks."
  }, {
    name: "onZoomChange",
    type: "(zoom) => void",
    default: "—",
    description: "Called when the reader changes the magnification."
  }, {
    name: "ref",
    type: "{ show, hide, setZoom }",
    default: "—",
    description: "show(x?, y?) opens the loupe at a point given in fractions of the frame, hide() closes it, setZoom(zoom) sets the magnification."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the frame. It is as wide as its parent and its height follows the aspect ratio."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the frame."
  }],
  O = () => {
    let [e, t] = (0, __mod_90761.I)(),
      a = (0, __mod_86049.Y)(),
      [n, d] = (0, React.useState)("loupe"),
      [p, c] = (0, React.useState)(M.loupe),
      u = e => t => c(a => ({
        ...a,
        [e]: t
      })),
      [h, m] = (0, React.useState)("#FFFFFF"),
      [g, b] = (0, React.useState)(null),
      [f, v] = (0, React.useState)("pinch"),
      [x, y] = (0, React.useState)("auto"),
      [w, S] = (0, React.useState)("cover"),
      [C, F] = (0, React.useState)(18),
      [O, Z] = (0, React.useState)(.35),
      [H, N] = (0, React.useState)(72),
      [B, D] = (0, React.useState)(!0),
      [U, Y] = (0, React.useState)(!1),
      [V, X] = (0, React.useState)(!0),
      G = g ?? ("dark" === a ? "#0A0A0A" : "#FFFFFF"),
      _ = j[p.photo],
      q = "auto" === x ? 1.5 : Number(x);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560} enableResponsive={!0}><div className="flex h-full w-full items-center justify-center p-6"><div style={{
                width: `min(820px, 100%, ${Math.round(500 * q)}px)`
              }}><k src={_.src.replace(".webp", "-preview.webp")} zoomSrc={_.src} alt={_.alt} aspectRatio={"auto" === x ? "auto" : q} fit={w} radius={C} mode={p.mode} zoom={p.zoom} maxZoom={4} boost={p.boost} wheelZoom={f} lensSize={p.lensSize} lensAspect={p.lensAspect} shape={p.shape} lensRadius={p.lensRadius} rim={p.rim} rimWidth={p.rimWidth} rimColor={h} backgroundColor={G} shadow={p.shadow} dim={p.dim} reticle={p.reticle} showZoom={B} smoothing={O} overhang={U} hideCursor={V} touchOffset={H} onZoomChange={e => u("zoom")(Math.round(100 * e) / 100)} /></div></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={n} options={E} onChange={e => {
              d(e), c(M[e] ?? M.loupe), t();
            }} /><__mod_56388.bg title="Image" value={p.photo} options={W} onChange={e => u("photo")(e)} /><__mod_56388.bg title="Mode" value={p.mode} options={R} onChange={e => u("mode")(e)} /><__mod_56388.bg title="Shape" value={p.shape} options={z} onChange={e => u("shape")(e)} /><__mod_56388.bg title="Rim" value={p.rim} options={L} onChange={e => u("rim")(e)} /><__mod_56388.bg title="Reticle" value={p.reticle} options={I} onChange={e => u("reticle")(e)} /><__mod_56388.bg title="Wheel Zoom" value={f} options={T} onChange={e => v(e)} /><__mod_56388.bg title="Frame" value={x} options={A} onChange={y} /><__mod_56388.bg title="Fit" value={w} options={$} onChange={e => S(e)} /><__mod_56388.W7 title="Rim Color" value={h} onChange={m} /><__mod_56388.W7 title="Background" value={G} onChange={b} /><__mod_56388.yt title="Zoom" min={1.25} max={4} step={.05} value={p.zoom} valueUnit="\xd7" onChange={u("zoom")} /><__mod_56388.yt title="Boost" min={1} max={4} step={.05} value={p.boost} valueUnit="\xd7" onChange={u("boost")} /><__mod_56388.yt title="Lens Size" min={60} max={360} step={1} value={p.lensSize} valueUnit="px" onChange={u("lensSize")} /><__mod_56388.yt title="Lens Aspect" min={.5} max={3} step={.05} value={p.lensAspect} onChange={u("lensAspect")} /><__mod_56388.yt title="Lens Radius" min={0} max={60} step={1} value={p.lensRadius} valueUnit="px" onChange={u("lensRadius")} /><__mod_56388.yt title="Rim Width" min={.5} max={12} step={.5} value={p.rimWidth} valueUnit="px" onChange={u("rimWidth")} /><__mod_56388.yt title="Shadow" min={0} max={1} step={.01} value={p.shadow} onChange={u("shadow")} /><__mod_56388.yt title="Dim" min={0} max={.9} step={.01} value={p.dim} onChange={u("dim")} /><__mod_56388.yt title="Smoothing" min={0} max={1} step={.01} value={O} onChange={Z} /><__mod_56388.yt title="Frame Radius" min={0} max={40} step={1} value={C} valueUnit="px" onChange={F} /><__mod_56388.yt title="Touch Offset" min={0} max={160} step={1} value={H} valueUnit="px" onChange={N} /><__mod_56388.tl title="Show Zoom" checked={B} onChange={D} /><__mod_56388.tl title="Overhang" checked={U} onChange={Y} /><__mod_56388.tl title="Hide Cursor" checked={V} onChange={X} /></__mod_56388.IH><__mod_56388.Ub data={P} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default k;
