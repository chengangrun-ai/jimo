import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Signal Type
 * A headline that flickers on like a neon sign
 * slug: signal-type
 * category: text
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = (e, t, l) => Math.min(l, Math.max(t, e)),
  d = e => {
    let t = (0x5bd1e995 ^ Math.floor(7919 * e)) >>> 0;
    return () => {
      let e = t = t + 0x6d2b79f5 >>> 0;
      return e = Math.imul(e ^ e >>> 15, 1 | e), (((e ^= e + Math.imul(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 0x100000000;
    };
  },
  c = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  p = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  h = e => u(.45 * e, 0, 1),
  f = {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
  },
  g = {
    position: "absolute",
    width: 0,
    height: 0,
    overflow: "hidden",
    pointerEvents: "none"
  },
  m = {
    whiteSpace: "pre-wrap"
  },
  v = {
    display: "inline-block",
    whiteSpace: "nowrap"
  },
  y = {
    position: "relative",
    display: "inline-block"
  },
  w = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    userSelect: "none",
    WebkitUserSelect: "none"
  },
  b = (e, t, l, n) => {
    let o = [],
      i = Math.round(l * (.4 + .9 * e()));
    for (let t = 0; t < i; t++) {
      let t = (.02 + .06 * e()) / n,
        l = (.035 + .13 * e()) / n,
        i = .3 > e() ? .28 + .32 * e() : .7 + .3 * e();
      o.push({
        at: t,
        level: i,
        flash: .55
      }), o.push({
        at: t + t,
        level: 0
      }), a += t + l;
    }
    return o.push({
      at: t,
      level: 1,
      flash: 1
    }), o;
  },
  x = (e, t, l) => {
    let n = [],
      o = 0,
      a = l ? 2 + Math.floor(3 * e()) : 1 + Math.floor(2 * e());
    for (let i = 0; i < a; i++) {
      let r = ((l ? .04 : .025) + e() * (l ? .12 : .05)) / t,
        s = (.02 + .05 * e()) / t;
      n.push({
        at: o,
        level: 0
      }), o += r;
      let u = i === a - 1;
      n.push({
        at: o,
        level: u ? 1 : .45 > e() ? .35 + .3 * e() : 1,
        flash: u ? .7 : .45
      }), o += s;
    }
    return n;
  },
  C = (0, React.forwardRef)(function ({
    text: e = "Open to possibility",
    as: t = "span",
    color: l = "currentColor",
    glowColor: a = "#8B5CF6",
    unlit: i = "outline",
    outlineWidth: r = 1,
    outlineOpacity: C = .28,
    glow: S = .6,
    glowSize: j = 1,
    flash: F = 1,
    flickers: k = 3,
    speed: E = 1,
    stagger: M = .045,
    delay: I = .15,
    order: T = "random",
    trigger: L = "view",
    interference: N = 1,
    interferenceRadius: R = 90,
    clickCycle: U = !0,
    instability: A = .3,
    loop: D = !1,
    loopDelay: O = 6,
    seed: W = 0,
    paused: B = !1,
    onComplete: P,
    className: z,
    style: H
  }, $) {
    let G = (0, React.useRef)(null),
      X = (0, React.useRef)(null),
      Y = `signal-outline-${(0, React.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`,
      _ = (0, React.useSyncExternalStore)(c, p, () => !1) || B,
      q = (0, React.useMemo)(() => e.split(/(\s+)/).filter(e => e.length > 0).map(e => ({
        value: e,
        space: /^\s+$/.test(e),
        glyphs: "undefined" == typeof Intl || void 0 === Intl.Segmenter ? Array.from(e) : Array.from(new Intl.Segmenter(void 0, {
          granularity: "grapheme"
        }).segment(e), e => e.segment)
      })), [e]),
      V = {
        glow: S,
        flash: F,
        flickers: k,
        speed: E,
        stagger: M,
        delay: I,
        order: T,
        trigger: L,
        interference: N,
        interferenceRadius: R,
        clickCycle: U,
        instability: A,
        loop: D,
        loopDelay: O,
        seed: W,
        onComplete: P
      },
      Z = (0, React.useRef)(V);
    (0, React.useEffect)(() => {
      Z.current = V;
    }), (0, React.useEffect)(() => {
      var e;
      let t,
        l,
        n,
        o,
        a,
        i,
        r,
        s,
        c,
        p,
        f,
        g,
        m,
        v,
        y,
        w,
        C,
        S,
        j,
        F,
        k,
        E,
        M,
        I,
        T,
        L = G.current;
      if (!L || _) return;
      let N = (e = () => Z.current, t = Array.from(L.querySelectorAll("[data-signal-glyph]")).map(e => ({
        node: e,
        base: e.querySelector("[data-signal-base]"),
        fill: e.querySelector("[data-signal-fill]"),
        glow: e.querySelector("[data-signal-glow]"),
        level: 0,
        busyUntil: 0,
        x: 0,
        y: 0
      })), l = new Set(), n = Math.random, o = !0, a = !1, i = !1, r = 0, s = 0, c = 0, p = 0, f = (e, t) => {
        let n = window.setTimeout(() => {
          l.delete(n), e();
        }, Math.max(0, 1e3 * t));
        l.add(n);
      }, g = () => {
        if (o) for (let e of (o = !1, t)) {
          let t = e.node.getBoundingClientRect();
          e.x = t.left + t.width / 2, e.y = t.top + t.height / 2;
        }
      }, m = (t, l, n = .45) => {
        let o, a, i;
        if (0 === l.length) return 0;
        let r = e(),
          s = h(r.glow),
          d = u(r.flash, 0, 3),
          c = Number.parseFloat(getComputedStyle(t.fill).opacity) || 0,
          p = Number.parseFloat(getComputedStyle(t.glow).opacity) || 0;
        for (let e of [t.base, t.fill, t.glow]) e.getAnimations().forEach(e => e.cancel());
        let f = l[l.length - 1].level,
          g = Math.max(l[l.length - 1].at + (f > 0 ? n : .05), .05),
          m = ((e, t, l) => {
            let n = [{
              opacity: e,
              offset: 0
            }];
            for (let e of t) {
              let t = u(e.at / l, 0, 1);
              n.push({
                opacity: e,
                offset: t
              }), n.push({
                opacity: e.level,
                offset: t
              }), o = e.level;
            }
            return n.push({
              opacity: e,
              offset: 1
            }), n;
          })(c, l, g);
        return t.base.style.opacity = String(1 - f), t.fill.style.opacity = String(f), t.glow.style.opacity = String(f * s), t.base.animate(m.map(e => ({
          ...e,
          opacity: 1 - Number(e.opacity)
        })), {
          duration: 1e3 * g,
          easing: "linear"
        }), t.fill.animate(m, {
          duration: 1e3 * g,
          easing: "linear"
        }), t.glow.animate((o = [{
          opacity: p,
          offset: 0
        }], a = p, l.forEach((e, t) => {
          let n = t + 1 < l.length ? l[t + 1].at : g,
            i = u(e.at / g, 0, 1);
          if (o.push({
            opacity: a,
            offset: i
          }), e.level <= 0) {
            o.push({
              opacity: 0,
              offset: i
            }), a = 0;
            return;
          }
          let r = e.level * s,
            c = u(r + e.level * d * .55 * (e.flash ?? 1), 0, 1);
          for (let t of (o.push({
            opacity: c,
            offset: i
          }), a = c, [.03, .07, .13, .22, .36])) {
            if (e.at + t >= n) break;
            a = r + (c - r) * Math.exp(-t / .09), o.push({
              opacity: a,
              offset: u((e.at + t) / g, 0, 1)
            });
          }
        }), i = l[l.length - 1], o.push({
          opacity: i ? i.level * s : a,
          offset: 1
        }), o), {
          duration: 1e3 * g,
          easing: "linear"
        }), t.level = f, t.busyUntil = performance.now() + 1e3 * g, g;
      }, v = e => {
        let l = t.length;
        if ("random" === e.order) {
          let n = d(e.seed + .37),
            o = t.map((e, t) => t);
          for (let e = o.length - 1; e > 0; e--) {
            let t = Math.floor(n() * (e + 1));
            [o[e], o[t]] = [o[t], o[e]];
          }
          let a = Array(l);
          return o.forEach((e, t) => {
            a[e] = t;
          }), a;
        }
        return t.map((t, n) => "end" === e.order ? l - 1 - n : "center" === e.order ? Math.abs(n - (l - 1) / 2) : n);
      }, y = () => {
        window.clearTimeout(p);
        let l = e();
        if (l.instability <= 0) return;
        let o = -Math.log(1 - n()) * (5 / u(l.instability, .05, 3));
        p = window.setTimeout(() => {
          let l = performance.now();
          if (i && a && "visible" === document.visibilityState) {
            let o = t.filter(e => e.level >= 1 && e.busyUntil < l),
              a = o[Math.floor(n() * o.length)];
            a && m(a, x(n, e().speed, !0), .3);
          }
          y();
        }, 1e3 * o);
      }, w = () => {
        let l = e(),
          n = d(l.seed),
          o = v(l),
          a = u(l.speed, .1, 5),
          r = u(l.stagger, 0, 1),
          s = 0;
        i = !0, t.forEach((e, t) => {
          let i = u(l.delay, 0, 30) + o[t] * r + n() * r * .8;
          s = Math.max(s, m(e, b(n, i, u(l.flickers, 0, 12), a)));
        }), f(() => {
          e().onComplete?.(), e().loop && f(() => C(), u(e().loopDelay, .5, 60));
        }, s);
      }, C = (l, n) => {
        let o = e(),
          a = d(o.seed + performance.now()),
          r = u(o.speed, .1, 5);
        g();
        let s = l ?? (t[0]?.x ?? 0) - 1,
          c = n ?? t[0]?.y ?? 0,
          p = 0;
        i = !0, t.forEach(e => {
          let t = Math.hypot(e.x - s, e.y - c) / 1600 / r,
            l = (.12 + .22 * a()) / r,
            n = [{
              at: t,
              level: 0
            }, ...b(a, t + l, .7 * u(o.flickers, 0, 12), r)];
          p = Math.max(p, m(e, n));
        }), f(() => {
          e().loop && f(() => C(), u(e().loopDelay, .5, 60));
        }, p);
      }, S = () => {
        let l = e(),
          n = d(l.seed + 11.3),
          o = v(l),
          a = u(l.speed, .1, 5),
          r = .5 * u(l.stagger, 0, 1);
        i = !1, t.forEach((e, t) => {
          let l = o[t] * r + n() * r;
          m(e, .5 > n() ? [{
            at: l,
            level: 0
          }, {
            at: l + .05 / a,
            level: .45,
            flash: .3
          }, {
            at: l + .09 / a,
            level: 0
          }] : [{
            at: l,
            level: 0
          }]);
        });
      }, j = l => {
        let o = e(),
          a = performance.now(),
          d = Math.max((a - c) / 1e3, 1 / 240),
          p = c > 0 ? Math.hypot(l.clientX - r, l.clientY - s) / d : 0;
        if (r = l.clientX, s = l.clientY, c = a, !i || o.interference <= 0 || "touch" === l.pointerType) return;
        g();
        let h = Math.max(o.interferenceRadius, 4);
        for (let e of t) {
          if (e.level < 1 || e.busyUntil > a) continue;
          let t = Math.hypot(e.x - r, e.y - s) / h;
          if (t >= 1) continue;
          let l = (1 - t) * (1 - t),
            i = o.interference * l * u(p / 900, 0, 1.6) * .35;
          n() < i && m(e, x(n, o.speed, !1), .3);
        }
      }, F = () => {
        o = !0, c = 0, "hover" === e().trigger && w();
      }, k = () => {
        c = 0, "hover" === e().trigger && S();
      }, E = t => {
        e().clickCycle && i && (o = !0, C(t.clientX, t.clientY));
      }, M = () => {
        o = !0;
      }, I = "undefined" == typeof IntersectionObserver ? null : new IntersectionObserver(([t]) => {
        (a = t.isIntersecting) && !i && "view" === e().trigger && w();
      }, {
        threshold: .25
      }), I?.observe(L), I || (a = !0), L.addEventListener("pointermove", j, {
        passive: !0
      }), L.addEventListener("pointerenter", F, {
        passive: !0
      }), L.addEventListener("pointerleave", k, {
        passive: !0
      }), L.addEventListener("pointerdown", E, {
        passive: !0
      }), window.addEventListener("scroll", M, {
        passive: !0,
        capture: !0
      }), window.addEventListener("resize", M, {
        passive: !0
      }), "mount" !== (T = e().trigger) && ("view" !== T || I) || w(), y(), {
        ignite: w,
        cycle: C,
        powerDown: S,
        refresh: () => {
          let l = h(e().glow),
            n = performance.now();
          for (let e of t) e.busyUntil < n && (e.glow.style.opacity = String(e.level * l));
        },
        destroy: () => {
          for (let e of (I?.disconnect(), window.clearTimeout(p), l.forEach(e => window.clearTimeout(e)), l.clear(), L.removeEventListener("pointermove", j), L.removeEventListener("pointerenter", F), L.removeEventListener("pointerleave", k), L.removeEventListener("pointerdown", E), window.removeEventListener("scroll", M, {
            capture: !0
          }), window.removeEventListener("resize", M), t)) for (let t of [e.base, e.fill, e.glow]) t.getAnimations().forEach(e => e.cancel());
        }
      });
      return X.current = N, () => {
        N.destroy(), X.current === N && (X.current = null);
      };
    }, [e, _, L, i]), (0, React.useEffect)(() => {
      X.current?.refresh();
    }, [S]), (0, React.useImperativeHandle)($, () => ({
      ignite: () => X.current?.ignite(),
      cycle: () => X.current?.cycle(),
      powerDown: () => X.current?.powerDown()
    }), []);
    let J = `color-mix(in srgb, ${l} ${Math.round(100 * u(C, 0, 1))}%, transparent)`,
      K = u(j, 0, 4),
      Q = "outline" === i ? {
        WebkitTextFillColor: "#000",
        filter: `url(#${Y})`,
        opacity: +!_
      } : {
        WebkitTextFillColor: "dim" === i ? J : "transparent",
        opacity: +!_
      },
      ee = {
        ...w,
        WebkitTextFillColor: "transparent",
        textShadow: `0 0 ${(.05 * K).toFixed(3)}em ${a}, 0 0 ${(.24 * K).toFixed(3)}em ${a}`,
        opacity: _ ? h(S) : 0
      },
      et = {
        ...w,
        color: l,
        opacity: +!!_
      };
    return <t ref={G} className={(0, __mod_90650.cn)("relative inline-block", z)} style={H}><span style={f}>{e}</span>{"outline" === i ? <svg aria-hidden="true" width="0" height="0" focusable="false" style={"currentColor" === l ? g : {
        ...g,
        color: l
      }}><filter id={Y} x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB"><feMorphology in="SourceAlpha" operator="dilate" radius={u(r, 0, 8)} result="grown" /><feComposite in="grown" in2="SourceAlpha" operator="out" result="ring" /><feFlood floodColor="currentColor" floodOpacity={u(C, 0, 1)} /><feComposite in2="ring" operator="in" /></filter></svg> : null}<span aria-hidden="true">{q.map((e, t) => e.space ? <span style={m}>{e.value}</span> : <span style={v}>{e.glyphs.map((e, t) => <span style={y} data-signal-glyph=""><span data-signal-base="" style={Q}>{e}</span><span data-signal-glow="" style={ee}>{e}</span><span data-signal-fill="" style={et}>{e}</span></span>)}</span>)}</span></t>;
  }),
  S = {
    signal: {
      color: "#FFFFFF",
      glowColor: "#8B5CF6",
      glow: .6,
      flash: 1
    },
    neon: {
      color: "#FF9FFC",
      glowColor: "#5227FF",
      glow: 1.1,
      flash: 1.2
    },
    tungsten: {
      color: "#FFF1DC",
      glowColor: "#FF7A27",
      glow: .8,
      flash: 1
    },
    ice: {
      color: "#EAF6FF",
      glowColor: "#2F6BFF",
      glow: .8,
      flash: 1
    },
    mono: {
      color: "#FFFFFF",
      glowColor: "#FFFFFF",
      glow: 0,
      flash: .5
    },
    ink: {
      color: "#0A0A0A",
      glowColor: "#8B5CF6",
      glow: 0,
      flash: .3
    },
    violet: {
      color: "#5227FF",
      glowColor: "#B19EEF",
      glow: .5,
      flash: .7
    }
  },
  j = [{
    label: "Signal",
    value: "signal"
  }, {
    label: "Neon",
    value: "neon"
  }, {
    label: "Tungsten",
    value: "tungsten"
  }, {
    label: "Ice",
    value: "ice"
  }, {
    label: "Mono",
    value: "mono"
  }, {
    label: "Ink",
    value: "ink"
  }, {
    label: "Violet",
    value: "violet"
  }],
  F = [{
    label: "Outline",
    value: "outline"
  }, {
    label: "Dim",
    value: "dim"
  }, {
    label: "None",
    value: "none"
  }],
  k = [{
    label: "Random",
    value: "random"
  }, {
    label: "Start",
    value: "start"
  }, {
    label: "Center",
    value: "center"
  }, {
    label: "End",
    value: "end"
  }],
  E = [{
    label: "In View",
    value: "view"
  }, {
    label: "Mount",
    value: "mount"
  }, {
    label: "Hover",
    value: "hover"
  }],
  M = [{
    label: "Regular",
    value: "400"
  }, {
    label: "Medium",
    value: "500"
  }, {
    label: "Semibold",
    value: "600"
  }, {
    label: "Bold",
    value: "700"
  }, {
    label: "Black",
    value: "800"
  }],
  I = [{
    name: "text",
    type: "string",
    default: '"Open to possibility"',
    description: "Text to display. Words wrap as whole units and whitespace is preserved."
  }, {
    name: "as",
    type: '"span" | "div" | "p" | "h1" | … | "h6"',
    default: '"span"',
    description: "Element to render. The component inherits font, size and alignment from its parent."
  }, {
    name: "color",
    type: "string",
    default: '"currentColor"',
    description: "Colour of a lit letter. Defaults to the surrounding text colour."
  }, {
    name: "glowColor",
    type: "string",
    default: '"#8B5CF6"',
    description: "Colour of the halo around lit letters and of the flash when a letter strikes on."
  }, {
    name: "unlit",
    type: '"outline" | "dim" | "none"',
    default: '"outline"',
    description: "How a letter looks before it lights: a hairline outline like an unlit tube, a faint ghost fill, or nothing at all."
  }, {
    name: "outlineWidth",
    type: "number",
    default: "1",
    description: "Width of the unlit outline, in pixels."
  }, {
    name: "outlineOpacity",
    type: "number",
    default: "0.28",
    description: "Opacity of the unlit outline or ghost fill, from 0 to 1."
  }, {
    name: "glow",
    type: "number",
    default: "0.6",
    description: "Strength of the steady halo once a letter is lit. 0 turns it off."
  }, {
    name: "glowSize",
    type: "number",
    default: "1",
    description: "Reach of the halo, relative to the font size."
  }, {
    name: "flash",
    type: "number",
    default: "1",
    description: "Brightness of the brief flash each time a letter strikes on."
  }, {
    name: "flickers",
    type: "number",
    default: "3",
    description: "Average number of false starts before a letter stays lit. 0 lights each letter cleanly."
  }, {
    name: "speed",
    type: "number",
    default: "1",
    description: "Pace of every flicker. Higher values make the sign stutter faster."
  }, {
    name: "stagger",
    type: "number",
    default: "0.045",
    description: "Seconds between one letter starting and the next."
  }, {
    name: "delay",
    type: "number",
    default: "0.15",
    description: "Seconds to wait before the first letter starts."
  }, {
    name: "order",
    type: '"random" | "start" | "center" | "end"',
    default: '"random"',
    description: "The order in which letters start: shuffled, left to right, from the middle out, or right to left."
  }, {
    name: "trigger",
    type: '"view" | "mount" | "hover" | "manual"',
    default: '"view"',
    description: "When the sign powers on: the first time it scrolls into view, as soon as it mounts, while hovered (it powers down on leave), or only through the ref's ignite()."
  }, {
    name: "interference",
    type: "number",
    default: "1",
    description: "How easily a moving pointer disturbs the lit letters it passes over, making them stutter. Faster movement disturbs more. 0 turns it off."
  }, {
    name: "interferenceRadius",
    type: "number",
    default: "90",
    description: "Reach of the pointer's disturbance, in pixels."
  }, {
    name: "clickCycle",
    type: "boolean",
    default: "true",
    description: "Clicking power-cycles the sign: letters go dark in a wave from the click point, then strike back on."
  }, {
    name: "instability",
    type: "number",
    default: "0.3",
    description: "How often, left alone, a lit letter briefly loses power, like a loose connection. 0 keeps it steady."
  }, {
    name: "loop",
    type: "boolean",
    default: "false",
    description: "Power-cycle the whole sign again after every run."
  }, {
    name: "loopDelay",
    type: "number",
    default: "6",
    description: "Seconds between runs when looping."
  }, {
    name: "seed",
    type: "number",
    default: "0",
    description: "Changes the flicker pattern and the random start order."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Shows the sign fully lit with no motion. Reduced-motion users always get this."
  }, {
    name: "onComplete",
    type: "() => void",
    default: "—",
    description: "Called once every letter has lit."
  }, {
    name: "ref",
    type: "{ ignite, cycle, powerDown }",
    default: "—",
    description: "Imperative controls: light the sign, power-cycle it, or switch it off."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element, for example font size and weight."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }],
  T = () => {
    let [e, t] = (0, __mod_90761.I)(),
      l = (0, __mod_86049.Y)(),
      [s, u] = (0, React.useState)(null),
      d = s ?? ("dark" === l ? "signal" : "ink"),
      [c, p] = (0, React.useState)({}),
      h = {
        ...(S[d] ?? S.signal),
        ...c
      },
      [f, g] = (0, React.useState)("Open to possibility"),
      [m, v] = (0, React.useState)(88),
      [y, w] = (0, React.useState)("600"),
      [b, x] = (0, React.useState)("outline"),
      [T, L] = (0, React.useState)(1),
      [N, R] = (0, React.useState)(.28),
      [U, A] = (0, React.useState)(1),
      [D, O] = (0, React.useState)(3),
      [W, B] = (0, React.useState)(1),
      [P, z] = (0, React.useState)(.045),
      [H, $] = (0, React.useState)(.15),
      [G, X] = (0, React.useState)("random"),
      [Y, _] = (0, React.useState)("view"),
      [q, V] = (0, React.useState)(1),
      [Z, J] = (0, React.useState)(90),
      [K, Q] = (0, React.useState)(.3),
      [ee, et] = (0, React.useState)(6),
      [el, en] = (0, React.useState)(0),
      [eo, ea] = (0, React.useState)(!0),
      [ei, er] = (0, React.useState)(!1),
      [es, eu] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500} enableResponsive={!0}><div className="flex h-full w-full items-center justify-center px-6 py-12 text-center sm:px-10"><C as="h2" text={f} color={h.color} glowColor={h.glowColor} glow={h.glow} unlit={b} outlineWidth={T} outlineOpacity={N} glowSize={U} flash={h.flash} flickers={D} speed={W} stagger={P} delay={H} order={G} trigger={Y} interference={q} interferenceRadius={Z} clickCycle={eo} instability={K} loop={ei} loopDelay={ee} seed={el} paused={es} style={{
                fontSize: `min(${m}px, 13vw)`,
                fontWeight: Number(y),
                letterSpacing: "-0.035em",
                lineHeight: 1.05
              }} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={d} options={j} onChange={e => {
              u(e), p({});
            }} /><__mod_56388.UD title="Text" value={f} onChange={g} /><__mod_56388.W7 title="Color" value={h.color} onChange={e => p(t => ({
              ...t,
              color: e
            }))} /><__mod_56388.W7 title="Glow Color" value={h.glowColor} onChange={e => p(t => ({
              ...t,
              glowColor: e
            }))} /><__mod_56388.yt title="Font Size" min={24} max={180} step={1} value={m} valueUnit="px" onChange={v} /><__mod_56388.bg title="Weight" value={y} options={M} onChange={w} /><__mod_56388.bg title="Unlit" value={b} options={F} onChange={e => x(e)} /><__mod_56388.yt title="Outline Width" min={.5} max={4} step={.25} value={T} valueUnit="px" onChange={L} /><__mod_56388.yt title="Outline Opacity" min={0} max={1} step={.01} value={N} onChange={R} /><__mod_56388.yt title="Glow" min={0} max={2} step={.05} value={h.glow} onChange={e => p(t => ({
              ...t,
              glow: e
            }))} /><__mod_56388.yt title="Glow Size" min={.2} max={3} step={.05} value={U} onChange={A} /><__mod_56388.yt title="Flash" min={0} max={2} step={.05} value={h.flash} onChange={e => p(t => ({
              ...t,
              flash: e
            }))} /><__mod_56388.yt title="Flickers" min={0} max={8} step={1} value={D} onChange={O} /><__mod_56388.yt title="Speed" min={.25} max={3} step={.05} value={W} onChange={B} /><__mod_56388.yt title="Stagger" min={0} max={.3} step={.005} value={P} valueUnit="s" onChange={z} /><__mod_56388.yt title="Delay" min={0} max={2} step={.05} value={H} valueUnit="s" onChange={$} /><__mod_56388.bg title="Order" value={G} options={k} onChange={e => X(e)} /><__mod_56388.bg title="Trigger" value={Y} options={E} onChange={e => _(e)} /><__mod_56388.yt title="Interference" min={0} max={3} step={.05} value={q} onChange={V} /><__mod_56388.yt title="Interference Radius" min={20} max={300} step={5} value={Z} valueUnit="px" onChange={J} /><__mod_56388.yt title="Instability" min={0} max={2} step={.05} value={K} onChange={Q} /><__mod_56388.yt title="Loop Delay" min={1} max={20} step={.5} value={ee} valueUnit="s" onChange={et} /><__mod_56388.yt title="Seed" min={0} max={20} step={1} value={el} onChange={en} /><__mod_56388.tl title="Click Cycle" checked={eo} onChange={ea} /><__mod_56388.tl title="Loop" checked={ei} onChange={er} /><__mod_56388.tl title="Paused" checked={es} onChange={eu} /></__mod_56388.IH><__mod_56388.Ub data={I} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default T;
