import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Label Orbit
 * A label that becomes the cursor and trails a 3D stack
 * slug: label-orbit
 * category: cursor
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = 1 / 240,
  h = 'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]):not([type="file"]):not([type="image"]):not([type="hidden"]),textarea,[contenteditable]:not([contenteditable="false"]),[data-cursor="native"]',
  u = (e, t, n) => Math.min(n, Math.max(t, e)),
  c = e => {
    let t = u(e, 0, 1);
    return t * t * (3 - 2 * t);
  },
  p = new Map(),
  m = e => {
    let t = e.trim(),
      n = p.get(t);
    if (n) return n;
    let a = [0, 0, 0],
      l = t.replace("#", "");
    if (/^[0-9a-f]{3}$/i.test(l) || /^[0-9a-f]{6}$/i.test(l)) {
      let e = 3 === l.length ? l.replace(/./g, e => e + e) : l;
      a = [Number.parseInt(e.slice(0, 2), 16), Number.parseInt(e.slice(2, 4), 16), Number.parseInt(e.slice(4, 6), 16)];
    } else if ("undefined" != typeof document) {
      let e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      let n = e.getContext("2d", {
        willReadFrequently: !0
      });
      if (n) {
        n.fillStyle = "#000", n.fillStyle = t, n.fillRect(0, 0, 1, 1);
        let e = n.getImageData(0, 0, 1, 1).data;
        a = [e[0], e[1], e[2]];
      }
    }
    return p.set(t, a), a;
  },
  f = (e, t, n) => `rgb(${Math.round(e[0] + (t[0] - e[0]) * n)}, ${Math.round(e[1] + (t[1] - e[1]) * n)}, ${Math.round(e[2] + (t[2] - e[2]) * n)})`,
  x = e => {
    let t = e.match(/rgba?\(([^)]+)\)/);
    if (!t) return null;
    let n = t[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return n.length < 3 || n.some(e => Number.isNaN(e)) ? null : (n.length > 3 ? n[3] : 1) > .5 ? (([e, t, n]) => (.2126 * e + .7152 * t + .0722 * n) / 255)([n[0], n[1], n[2]]) : null;
  },
  v = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  y = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  g = new Float64Array(2),
  b = (e, t, n, a, l, r) => {
    for (; r > 1e-6;) {
      let e = Math.min(d, r);
      s -= e, i += (a * a * (n - e) - 2 * l * a * t) * e, o += t * e;
    }
    g[0] = e, g[1] = t;
  },
  w = (0, React.forwardRef)(function ({
    phrases: e = ["Explore", "Create", "Ship"],
    interval: t = 2.4,
    color: n = "#FAFAFA",
    textColor: r = "#0A0A0A",
    accentColor: i = "#5227FF",
    fontSize: o = 15,
    fontWeight: d = 500,
    fontFamily: p = "inherit",
    radius: w = 6,
    handles: F = !0,
    trail: C = .4,
    depth: M = .8,
    taper: A = .4,
    tilt: S = 1,
    follow: E = .06,
    clickToCycle: j = !0,
    hideCursor: k = !0,
    autoplay: T = !1,
    autoplaySpeed: L = 1,
    idleDelay: R = 1.5,
    interactive: I = !0,
    className: N,
    style: V,
    children: P
  }, $) {
    let X,
      Y = (0, React.useId)(),
      D = (0, React.useRef)(null),
      W = (0, React.useRef)(null),
      B = (0, React.useRef)(null),
      H = {
        phrases: e,
        interval: t,
        color: n,
        textColor: r,
        accentColor: i,
        fontSize: o,
        fontWeight: d,
        fontFamily: p,
        radius: w,
        handles: F,
        trail: C,
        depth: M,
        taper: A,
        tilt: S,
        follow: E,
        clickToCycle: j,
        hideCursor: k,
        autoplay: T,
        autoplaySpeed: L,
        idleDelay: R,
        interactive: I,
        reduced: (0, React.useSyncExternalStore)(v, y, () => !1)
      },
      z = (0, React.useRef)(H);
    return (0, React.useEffect)(() => {
      z.current = H, B.current?.sync();
    }), (0, React.useEffect)(() => {
      let e = D.current,
        t = W.current;
      if (!e || !t) return;
      let n = ((e, t, n) => {
        let a = e.ownerDocument,
          l = a.defaultView ?? window,
          r = t.getContext("2d");
        if (!r) return null;
        let i = l.matchMedia("(pointer: fine)"),
          o = 0,
          s = 0,
          d = 0,
          p = !1,
          v = !0,
          y = 1,
          w = 1,
          F = 1,
          C = "",
          M = "",
          A = 14,
          S = 9,
          E = 34,
          j = 8,
          k = 5,
          T = 6,
          L = [250, 250, 250],
          R = [10, 10, 10],
          I = [82, 39, 255],
          N = [0, 0, 0],
          V = 0,
          P = !1,
          $ = "none",
          X = !1,
          Y = "",
          D = null,
          W = 0,
          B = 0,
          H = 20 * Math.random(),
          z = 0,
          U = new Map(),
          O = new Float32Array(360),
          _ = new Float32Array(360),
          q = new Float32Array(360),
          G = new Float32Array(360),
          J = new Float64Array(360),
          K = Array(360).fill(""),
          Q = 0,
          Z = 0,
          ee = {
            x: 0,
            y: 0,
            clientX: 0,
            clientY: 0,
            inside: !1,
            seen: !1,
            leftAt: -1e9,
            pressed: !1
          },
          et = {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            rot: 0,
            rotV: 0,
            scale: 0,
            scaleV: 0,
            width: 0,
            widthV: 0,
            text: "",
            previous: "",
            flipAt: -1e9,
            placed: !1,
            sampleX: 0,
            sampleY: 0
          },
          en = () => {
            let e = n.current.phrases.map(e => e.trim()).filter(Boolean);
            return e.length ? e : ["Explore"];
          },
          ea = e => {
            let t = U.get(e);
            if (!t) {
              let n;
              t = {
                width: (r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.font = M, n = r.measureText(e).width, r.restore(), Math.ceil(n) + 2 * A),
                sprites: Array(8).fill(null)
              }, U.set(e, t);
            }
            return t;
          },
          el = (e, t) => {
            let l = ea(e),
              r = l.sprites[t];
            if (!r) {
              r = a.createElement("canvas");
              let e = 1.3 * F;
              r.width = Math.ceil((l.width + 2 * T) * e), r.height = Math.ceil((E + 2 * T) * e);
              let i = r.getContext("2d");
              if (i) {
                i.setTransform(e, 0, 0, e, (l.width / 2 + T) * e, (E / 2 + T) * e);
                let a = t / 7 * .62 * u(n.current.depth, 0, 1),
                  r = l.width,
                  s = Math.min(j, E / 2);
                i.beginPath(), i.roundRect(-r / 2, -E / 2, r, E, s), i.fillStyle = f(L, N, a), i.fill(), i.lineWidth = 1, i.strokeStyle = f(L, N, Math.min(1, a + .16)), i.beginPath(), i.roundRect(-r / 2 + .5, -E / 2 + .5, r - 1, E - 1, Math.max(0, s - .5)), i.stroke();
              }
              l.sprites[t] = r;
            }
            return r;
          },
          er = () => {
            let t = n.current,
              a = u(t.fontSize, 8, 64),
              r = t.fontFamily && "inherit" !== t.fontFamily ? t.fontFamily : l.getComputedStyle(e).fontFamily || "system-ui, sans-serif",
              i = u(100 * Math.round(t.fontWeight / 100), 100, 900),
              o = `${i} ${a}px ${r}`;
            A = Math.round(.95 * a), S = Math.round(.62 * a), E = Math.round(a + 2 * S), j = u(t.radius, 0, 64), T = k = Math.max(3, Math.round(.34 * a)), L = m(t.color), R = m(t.textColor), I = m(t.accentColor), N = ei() ? [0, 0, 0] : [255, 255, 255];
            let s = [o, F, j, t.handles, t.depth, t.color, t.textColor, t.accentColor, N[0]].join("|");
            s !== C && (C = s, M = o, U.clear(), et.text && (et.width = ea(et.text).width));
          },
          ei = () => {
            for (; e;) {
              let e = x(l.getComputedStyle(e).backgroundColor);
              if (null !== e) return e < .45;
              t = e.parentElement;
            }
            return l.matchMedia("(prefers-color-scheme: dark)").matches;
          },
          eo = () => {
            let n = e.getBoundingClientRect();
            y = Math.max(1, n.width), w = Math.max(1, n.height);
            let a = Math.min(l.devicePixelRatio || 1, 2);
            t.width = Math.round(y * a), t.height = Math.round(w * a), a !== F && (F = a, C = ""), er(), em();
          },
          es = t => {
            t !== P && (P = t, t ? e.setAttribute("data-active", "") : e.removeAttribute("data-active"));
          },
          ed = () => n.current.interactive && i.matches,
          eh = (e, t) => {
            e !== et.text && (et.previous = et.text, et.text = e, et.flipAt = n.current.reduced || !et.previous ? -1e9 : t, et.previous || (et.width = ea(e).width));
          },
          eu = (e, t) => {
            et.x = e, et.y = t, et.vx = 0, et.vy = 0, et.rot = 0, et.rotV = 0, et.sampleX = e, et.sampleY = t, et.placed = !0, Z = 0;
          },
          ec = (e, t, n, a, l) => {
            O[Q = (Q + 1) % 360] = e, _[Q] = t, q[Q] = n, G[Q] = a, J[Q] = l, K[Q] = et.text, Z = Math.min(Z + 1, 360);
          },
          ep = e => ({
            x: y * (.5 + .3 * Math.sin(.83 * e) + .08 * Math.sin(2.1 * e + .4)),
            y: w * (.5 + .24 * Math.sin(1.31 * e + .8) + .07 * Math.cos(2.9 * e + .3))
          }),
          em = () => {
            p || !v || o || (o = l.requestAnimationFrame(ef));
          };
        function ef(e) {
          if (o = 0, p) return;
          let a = n.current,
            i = d ? u((e - d) / 1e3, 0, .05) : 1 / 60;
          d = e;
          let h = performance.now() / 1e3;
          h - V > 1.5 && (V = h, er());
          let m = a.autoplay && !a.reduced,
            x = h - ee.leftAt,
            v = "none";
          if (ed() && ee.inside ? v = "pointer" : m && (!ed() || !ee.seen || x > a.idleDelay) && (v = "ghost"), v !== $) {
            if ("pointer" === v && eu(ee.x, ee.y), "ghost" === v) {
              let e = ep(H);
              eu(e.x, e.y), z = 0;
            }
            "none" !== v && (et.scale = .55, et.scaleV = 0), $ = v;
          }
          es(a.hideCursor && ed() && ee.seen);
          let C = et.x,
            A = et.y;
          if ("pointer" === $) C = ee.x, A = ee.y;else if ("ghost" === $) {
            z = Math.min(1, z + i / .5);
            let e = ep(H += i * u(a.autoplaySpeed, 0, 5) * Math.max(1, 520 / Math.max(Math.min(y, w), 1)));
            C = e.x, A = e.y;
          }
          let S = en(),
            P = Math.max(.3, a.interval);
          "none" !== $ && !D && !("pointer" === $ && Y) && S.length > 1 && h - B > P && (W = (W + 1) % S.length, B = h), eh((() => {
            if (D) return D;
            if ("pointer" === $ && Y) return Y;
            let e = en();
            return e[W % e.length];
          })(), h);
          let U = 2 / u(a.follow, .005, .5);
          a.reduced ? (et.x = C, et.y = A, et.vx = 0, et.vy = 0) : (b(et.x, et.vx, C, U, 1, i), et.x = g[0], et.vx = g[1], b(et.y, et.vy, A, U, 1, i), et.y = g[0], et.vy = g[1]);
          let ei = a.reduced ? 0 : .16 * u(et.vx / 2200, -1, 1) * u(a.tilt, 0, 2);
          b(et.rot, et.rotV, ei, 16, .5, i), et.rot = g[0], et.rotV = g[1];
          let eo = ("pointer" === $ ? +!X : "ghost" === $ ? z : 0) * (ee.pressed && "pointer" === $ ? .92 : 1);
          b(et.scale, et.scaleV, eo, 30, .62, i), et.scale = g[0], et.scaleV = g[1];
          let ef = ea(et.text || S[0]).width;
          a.reduced ? (et.width = ef, et.widthV = 0) : (b(et.width, et.widthV, ef, 22, .78, i), et.width = g[0], et.widthV = g[1]);
          let ex = a.reduced ? 0 : u(a.trail, 0, 2),
            ev = u(et.scale, 0, 1.2);
          if (ex > 0 && ev > .05 && "none" !== $) {
            let e = et.x - et.sampleX,
              t = et.y - et.sampleY,
              n = Math.hypot(e, t);
            if (n >= 2) {
              let a = Math.min(Math.floor(n / 2), 48);
              for (let n = 1; n <= a; n++) {
                let l = n / a;
                ec(et.sampleX + e * l, et.sampleY + t * l, et.rot, ev, h - i * (1 - l));
              }
              et.sampleX = et.x, et.sampleY = et.y;
            }
          } else et.sampleX = et.x, et.sampleY = et.y;
          for (; Z > 0;) {
            let e = (Q - Z + 1 + 360) % 360;
            if (ex > 0 && h - J[e] <= ex) break;
            Z--;
          }
          r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, t.width, t.height);
          let ey = u(a.taper, 0, 1);
          for (let e = Z - 1; e >= 0; e--) {
            let t = (Q - e + 360) % 360,
              n = (h - J[t]) / Math.max(ex, .001);
            if (n >= 1) continue;
            let a = G[t] * (1 - .55 * ey * Math.pow(n, .8)),
              l = 1 - c((n - .55) / .45);
            if (l <= .01 || a <= .02) continue;
            let i = K[t],
              o = el(i, Math.min(7, Math.round(7 * c(1.1 * n)))),
              s = ea(i),
              d = Math.cos(q[t]) * a * F,
              u = Math.sin(q[t]) * a * F;
            r.setTransform(d, u, -u, d, O[t] * F, _[t] * F), r.globalAlpha = l, r.drawImage(o, -s.width / 2 - T, -E / 2 - T, s.width + 2 * T, E + 2 * T);
          }
          if (r.globalAlpha = 1, ev > .01) {
            let e = Math.cos(et.rot) * ev * F,
              t = Math.sin(et.rot) * ev * F;
            r.setTransform(e, t, -t, e, et.x * F, et.y * F);
            let a = u((h - et.flipAt) / .42, 0, 1),
              l = 1 - Math.pow(1 - a, 3),
              i = a < 1 && et.previous ? [{
                text: et.previous,
                offset: -l * E * .72,
                alpha: 1 - c(1.6 * a)
              }, {
                text: et.text,
                offset: (1 - l) * E * .72,
                alpha: c(1.4 * a)
              }] : [{
                text: et.text,
                offset: 0,
                alpha: 1
              }];
            ((e, t, a, l) => {
              let r = n.current,
                o = -t / 2,
                s = -E / 2;
              for (let n of (e.beginPath(), e.roundRect(o, s, t, E, Math.min(j, E / 2)), e.fillStyle = f(L, N, 0), e.fill(), e.save(), e.clip(), e.font = M, e.textBaseline = "middle", e.textAlign = "center", l)) n.alpha <= .001 || (e.globalAlpha = n.alpha, e.fillStyle = f(R, N, 0), e.fillText(n.text, 0, n.offset + .035 * E));
              if (e.restore(), e.globalAlpha = 1, e.lineWidth = 1, e.strokeStyle = f(I, N, 0), e.beginPath(), e.roundRect(o + .5, s + .5, t - 1, E - 1, Math.max(0, Math.min(j, E / 2) - .5)), e.stroke(), r.handles) {
                e.fillStyle = f(I, N, 0);
                let n = k / 2;
                for (let a of [o, o + t]) for (let t of [s, s + E]) e.fillRect(a - n, t - n, k, k);
              }
            })(r, et.width, 0, i);
          }
          let eg = Math.abs(et.x - C) > .05 || Math.abs(et.y - A) > .05 || Math.abs(et.rotV) > .001 || Math.abs(et.rot - ei) > .001 || Math.abs(et.scaleV) > .001 || Math.abs(et.scale - eo) > .001 || Math.abs(et.widthV) > .01 || Math.abs(et.width - ef) > .05 || h - et.flipAt < .45 || Z > 0,
            eb = "none" !== $ && S.length > 1 && !D,
            ew = m && ed() && ee.seen && !ee.inside && x <= a.idleDelay + .05;
          "ghost" === $ || eg || ew ? em() : eb && !s && (s = l.setTimeout(() => {
            s = 0, em();
          }, Math.max(16, (B + P - h) * 1e3)));
        }
        let ex = t => {
            let n = t && 1 === t.nodeType ? t : null,
              a = n?.closest(h);
            X = !!a && e.contains(a);
            let l = n?.closest("[data-cursor-label]");
            Y = l && e.contains(l) ? (l.getAttribute("data-cursor-label") ?? "").trim() : "";
          },
          ev = t => {
            if ("touch" === t.pointerType || !ed()) return;
            let a = e.getBoundingClientRect();
            ee.x = t.clientX - a.left, ee.y = t.clientY - a.top, ee.clientX = t.clientX, ee.clientY = t.clientY, ee.inside = !0, ee.seen = !0, n.current.hideCursor && es(!0), ex(t.target), em();
          },
          ey = () => {
            ee.inside && (ee.inside = !1, ee.pressed = !1, ee.leftAt = performance.now() / 1e3, X = !1, Y = "", em());
          },
          eg = () => {
            let e = en();
            W = (W + 1) % e.length, B = performance.now() / 1e3, em();
          },
          eb = e => {
            "touch" !== e.pointerType && ed() && !(e.button > 0) && (ev(e), ee.pressed = !0, !n.current.clickToCycle || X || Y || D || eg(), em());
          },
          ew = () => {
            ee.pressed && (ee.pressed = !1, em());
          },
          eF = () => {
            if (!ee.inside) return;
            let t = e.getBoundingClientRect();
            ee.x = ee.clientX - t.left, ee.y = ee.clientY - t.top, ex(a.elementFromPoint(ee.clientX, ee.clientY)), em();
          },
          eC = () => {
            i.matches || (ey(), es(!1)), em();
          };
        e.addEventListener("pointermove", ev, {
          passive: !0
        }), e.addEventListener("pointerover", ev, {
          passive: !0
        }), e.addEventListener("pointerdown", eb, {
          passive: !0
        }), e.addEventListener("pointerleave", ey), e.addEventListener("pointercancel", ey), l.addEventListener("pointerup", ew, {
          passive: !0
        }), l.addEventListener("blur", ey), l.addEventListener("scroll", eF, {
          passive: !0,
          capture: !0
        }), i.addEventListener("change", eC);
        let eM = new ResizeObserver(eo);
        eM.observe(e);
        let eA = "undefined" == typeof IntersectionObserver ? null : new IntersectionObserver(([e]) => {
          (v = e.isIntersecting) ? (d = 0, em()) : o && (l.cancelAnimationFrame(o), o = 0);
        });
        return eA?.observe(e), B = performance.now() / 1e3, eo(), eh(en()[0], performance.now() / 1e3), {
          sync: () => {
            er(), n.current.hideCursor && ed() || es(!1);
            let e = en();
            W >= e.length && (W = 0), em();
          },
          next: () => {
            p || eg();
          },
          say: e => {
            p || ((D = e && e.trim() ? e.trim() : null) || (B = performance.now() / 1e3), em());
          },
          destroy: () => {
            p = !0, o && l.cancelAnimationFrame(o), s && l.clearTimeout(s), eM.disconnect(), eA?.disconnect(), e.removeEventListener("pointermove", ev), e.removeEventListener("pointerover", ev), e.removeEventListener("pointerdown", eb), e.removeEventListener("pointerleave", ey), e.removeEventListener("pointercancel", ey), l.removeEventListener("pointerup", ew), l.removeEventListener("blur", ey), l.removeEventListener("scroll", eF, {
              capture: !0
            }), i.removeEventListener("change", eC), es(!1), U.clear();
          }
        };
      })(e, t, z);
      return B.current = n, () => {
        n?.destroy(), B.current = null;
      };
    }, []), (0, React.useImperativeHandle)($, () => ({
      next: () => B.current?.next(),
      say: e => B.current?.say(e)
    }), []), <div ref={D} data-label-orbit={Y} className={(0, __mod_90650.cn)("relative isolate h-full min-h-[240px] w-full", N)} style={V}><style>{(X = `[data-label-orbit="${Y}"][data-active]`, `${X},${X} *{cursor:none!important}${X} :is(${h}),${X} :is(${h}) *{cursor:auto!important}`)}</style>{P}<canvas ref={W} aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2147483e3
      }} /></div>;
  });
w.displayName = "LabelOrbit";
let F = {
    dark: ["#FAFAFA", "#0A0A0A", "#5227FF"],
    light: ["#0A0A0A", "#FAFAFA", "#5227FF"],
    radius: 6,
    handles: !0,
    trail: .4,
    depth: .8,
    taper: .4,
    tilt: 1
  },
  C = {
    selection: F,
    violet: {
      ...F,
      dark: ["#5227FF", "#FFFFFF", "#FF9FFC"],
      light: ["#5227FF", "#FFFFFF", "#FF9FFC"],
      radius: 8
    },
    paper: {
      ...F,
      dark: ["#F5E7C6", "#1F1A17", "#FF7A27"],
      light: ["#F5E7C6", "#1F1A17", "#FF7A27"],
      radius: 2,
      trail: .5
    },
    minimal: {
      ...F,
      handles: !1,
      radius: 18,
      trail: .3,
      depth: .9,
      taper: .6,
      tilt: .6
    }
  },
  M = [{
    label: "Selection",
    value: "selection"
  }, {
    label: "Violet",
    value: "violet"
  }, {
    label: "Paper",
    value: "paper"
  }, {
    label: "Minimal",
    value: "minimal"
  }],
  A = [{
    name: "phrases",
    type: "string[]",
    default: '["Explore", "Create", "Ship"]',
    description: "Words the label flips through. Each change rolls the old word out and the new one in while the label resizes."
  }, {
    name: "interval",
    type: "number",
    default: "2.4",
    description: "Seconds each phrase holds before the next one rolls in."
  }, {
    name: "color",
    type: "string",
    default: '"#FAFAFA"',
    description: "Fill of the label and of the stack it leaves behind."
  }, {
    name: "textColor",
    type: "string",
    default: '"#0A0A0A"',
    description: "Colour of the label text."
  }, {
    name: "accentColor",
    type: "string",
    default: '"#5227FF"',
    description: "Border and corner handles of the label, like a selected layer in a design tool."
  }, {
    name: "fontSize",
    type: "number",
    default: "15",
    description: "Text size in pixels. The label's padding, height and handles scale with it."
  }, {
    name: "fontWeight",
    type: "number",
    default: "500",
    description: "Weight of the label text."
  }, {
    name: "fontFamily",
    type: "string",
    default: '"inherit"',
    description: "Font of the label. inherit uses the font of the surrounding page."
  }, {
    name: "radius",
    type: "number",
    default: "6",
    description: "Corner radius of the label in pixels."
  }, {
    name: "handles",
    type: "boolean",
    default: "true",
    description: "Show the square handles on the label's corners."
  }, {
    name: "trail",
    type: "number",
    default: "0.4",
    description: "Seconds of motion the stack of labels trails behind. 0 turns the trail off."
  }, {
    name: "depth",
    type: "number",
    default: "0.8",
    description: "How strongly the stack shades into the page as it recedes, from 0 to 1."
  }, {
    name: "taper",
    type: "number",
    default: "0.4",
    description: "How much the stack narrows toward its tail, from 0 to 1."
  }, {
    name: "tilt",
    type: "number",
    default: "1",
    description: "How far the label leans into fast horizontal moves, from 0 to 2."
  }, {
    name: "follow",
    type: "number",
    default: "0.06",
    description: "Seconds the label takes to catch up with the pointer."
  }, {
    name: "clickToCycle",
    type: "boolean",
    default: "true",
    description: "Clicking flips straight to the next phrase."
  }, {
    name: "hideCursor",
    type: "boolean",
    default: "true",
    description: "Hide the native cursor inside this component, so the label becomes the cursor. Text fields keep their caret."
  }, {
    name: "autoplay",
    type: "boolean",
    default: "false",
    description: "Let the label wander on its own while the pointer is away."
  }, {
    name: "autoplaySpeed",
    type: "number",
    default: "1",
    description: "Speed of that wandering."
  }, {
    name: "idleDelay",
    type: "number",
    default: "1.5",
    description: "Seconds after the pointer leaves before the wandering label takes over again."
  }, {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "Let the pointer drive the label. Reduced-motion users get the label without the trail, tilt or wandering."
  }, {
    name: "ref",
    type: "{ next, say }",
    default: "—",
    description: "next() flips to the next phrase. say(text) holds a specific label until you call say(null)."
  }, {
    name: "data-cursor-label",
    type: "attribute",
    default: "—",
    description: 'Put it on any element inside to show that text while the pointer is over it, such as "View" on a project card.'
  }, {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "The content the label moves over."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element. It fills its parent, with a 240px minimum height."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }],
  S = () => {
    let [e, t] = (0, __mod_90761.I)(),
      n = "dark" === (0, __mod_86049.Y)(),
      [s, d] = (0, React.useState)("selection"),
      [h, u] = (0, React.useState)(F),
      c = e => t => u(n => ({
        ...n,
        [e]: t
      })),
      [p, m] = (0, React.useState)(null),
      f = p ?? (n ? h.dark : h.light),
      x = e => t => {
        let n = [...f];
        n[e] = t, m(n);
      },
      [v, y] = (0, React.useState)("Explore, Create, Ship"),
      [g, b] = (0, React.useState)(2.4),
      [S, E] = (0, React.useState)(15),
      [j, k] = (0, React.useState)(500),
      [T, L] = (0, React.useState)(.06),
      [R, I] = (0, React.useState)(!0),
      [N, V] = (0, React.useState)(!0),
      [P, $] = (0, React.useState)(!0),
      [X, Y] = (0, React.useState)(1),
      [D, W] = (0, React.useState)(1.5),
      [B, H] = (0, React.useState)(!0),
      z = v.split(",").map(e => e.trim()).filter(Boolean);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={560} enableResponsive={!0}><div className={`relative h-full w-full ${n ? "bg-[#0A0A0A]" : "bg-white"}`}><w phrases={z.length ? z : ["Explore"]} interval={g} color={f[0]} textColor={f[1]} accentColor={f[2]} fontSize={S} fontWeight={j} radius={h.radius} handles={h.handles} trail={h.trail} depth={h.depth} taper={h.taper} tilt={h.tilt} follow={T} clickToCycle={R} hideCursor={N} autoplay={P} autoplaySpeed={X} idleDelay={D} interactive={B} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={s} options={M} onChange={e => {
              d(e), u(C[e] ?? F), m(null);
            }} /><__mod_56388.UD title="Phrases" value={v} placeholder="Explore, Create" onChange={y} /><__mod_56388.W7 title="Fill" value={f[0]} onChange={x(0)} /><__mod_56388.W7 title="Text" value={f[1]} onChange={x(1)} /><__mod_56388.W7 title="Accent" value={f[2]} onChange={x(2)} /><__mod_56388.yt title="Font Size" min={10} max={32} step={1} value={S} valueUnit="px" onChange={E} /><__mod_56388.yt title="Font Weight" min={300} max={800} step={100} value={j} onChange={k} /><__mod_56388.yt title="Radius" min={0} max={24} step={1} value={h.radius} valueUnit="px" onChange={c("radius")} /><__mod_56388.yt title="Trail" min={0} max={1.2} step={.05} value={h.trail} valueUnit="s" onChange={c("trail")} /><__mod_56388.yt title="Depth" min={0} max={1} step={.05} value={h.depth} onChange={c("depth")} /><__mod_56388.yt title="Taper" min={0} max={1} step={.05} value={h.taper} onChange={c("taper")} /><__mod_56388.yt title="Tilt" min={0} max={2} step={.05} value={h.tilt} onChange={c("tilt")} /><__mod_56388.yt title="Follow" min={.01} max={.3} step={.01} value={T} valueUnit="s" onChange={L} /><__mod_56388.yt title="Interval" min={.6} max={6} step={.1} value={g} valueUnit="s" onChange={b} /><__mod_56388.yt title="Autoplay Speed" min={.2} max={3} step={.05} value={X} onChange={Y} /><__mod_56388.yt title="Idle Delay" min={0} max={6} step={.25} value={D} valueUnit="s" onChange={W} /><__mod_56388.tl title="Handles" checked={h.handles} onChange={c("handles")} /><__mod_56388.tl title="Click To Cycle" checked={R} onChange={I} /><__mod_56388.tl title="Hide Cursor" checked={N} onChange={V} /><__mod_56388.tl title="Autoplay" checked={P} onChange={$} /><__mod_56388.tl title="Interactive" checked={B} onChange={H} /></__mod_56388.IH><__mod_56388.Ub data={A} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default w;
