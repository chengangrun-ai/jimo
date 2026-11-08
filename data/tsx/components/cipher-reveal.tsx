import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Cipher Reveal
 * A headline that decodes out of scrambled characters
 * slug: cipher-reveal
 * category: text
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  d = "abcdefghijklmnopqrstuvwxyz",
  u = "0123456789",
  m = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  h = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  p = (e, t, a) => Math.min(a, Math.max(t, e)),
  f = e => "undefined" == typeof Intl || void 0 === Intl.Segmenter ? Array.from(e) : Array.from(new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  }).segment(e), e => e.segment),
  y = e => {
    let t = 43758.5453 * Math.sin(127.1 * e + 311.7);
    return t - Math.floor(t);
  },
  g = null,
  v = new Map(),
  b = (e, t) => {
    let a = `${t}|${e}`,
      r = v.get(a);
    if (void 0 !== r) return r;
    if (g || (g = document.createElement("canvas").getContext("2d")), !g) return 1;
    g.font = t;
    let n = g.measureText(e).width;
    return v.size > 4e3 && v.clear(), v.set(a, n), n;
  },
  x = (0, React.forwardRef)(function ({
    text: e = "Ideas into reality",
    as: t = "span",
    fontSize: a = "clamp(2.75rem, 8vw, 6.5rem)",
    fontWeight: l = 600,
    letterSpacing: o = "-0.03em",
    lineHeight: i = 1.1,
    align: g = "center",
    color: x,
    scrambleColor: w = "",
    scrambleOpacity: S = .42,
    charset: C = "auto",
    trigger: k = "view",
    order: j = "left",
    from: E = "blank",
    duration: M = 1.4,
    scramble: R = .45,
    rate: T = 14,
    hover: F = "trail",
    hoverRadius: A = .6,
    loop: I = !1,
    interval: $ = 5,
    onComplete: L,
    className: N,
    style: O
  }, z) {
    let H = (0, React.useRef)(null),
      P = (0, React.useRef)(null),
      B = (0, React.useSyncExternalStore)(m, h, () => !1),
      D = (0, React.useMemo)(() => {
        let t;
        return t = 0, e.split(/(\s+)/).filter(Boolean).map(e => {
          let a = /^\s+$/.test(e) ? [] : f(e),
            r = {
              word: e,
              glyphs: a,
              offset: t,
              space: 0 === a.length
            };
          return t += a.length, r;
        });
      }, [e]),
      U = (0, React.useRef)({
        scrambleColor: w,
        scrambleOpacity: S,
        charset: C,
        trigger: k,
        order: j,
        from: E,
        duration: M,
        scramble: R,
        rate: T,
        hover: F,
        hoverRadius: A,
        loop: I,
        interval: $,
        reduced: B,
        onComplete: L
      });
    return (0, React.useEffect)(() => {
      U.current = {
        scrambleColor: w,
        scrambleOpacity: S,
        charset: C,
        trigger: k,
        order: j,
        from: E,
        duration: M,
        scramble: R,
        rate: T,
        hover: F,
        hoverRadius: A,
        loop: I,
        interval: $,
        reduced: B,
        onComplete: L
      }, P.current?.sync();
    }), (0, React.useEffect)(() => {
      let e = H.current;
      if (!e) return;
      let t = ((e, t) => {
        let a = [],
          r = 0,
          n = !1,
          l = !1,
          o = !0,
          i = !1,
          s = 0,
          m = "",
          h = 16,
          g = 0,
          x = {
            x: 0,
            y: 0,
            t: 0
          },
          w = e => {
            e.mask.style.color = t.current.scrambleColor || "";
          },
          S = e => {
            e.state = "hidden", e.face.style.transition = "none", e.face.style.opacity = "0", e.mask.style.transition = "none", e.mask.style.opacity = "0", e.mask.textContent = "", e.shown = "";
          },
          C = e => {
            e.state = "scramble", e.face.style.transition = "none", e.face.style.opacity = "0", e.mask.style.transition = "none";
          },
          k = (e, t) => {
            if (e.state = "plain", e.active = !1, !t) {
              e.face.style.transition = "none", e.face.style.opacity = "1", e.mask.style.transition = "none", e.mask.style.opacity = "0", e.mask.textContent = "", e.shown = "";
              return;
            }
            e.mask.textContent = e.glyph, e.mask.style.transform = "translateX(-50%)", e.shown = e.glyph, e.face.style.transition = "opacity 200ms cubic-bezier(.2,.7,.2,1)", e.mask.style.transition = "opacity 200ms cubic-bezier(.2,.7,.2,1)", e.face.style.opacity = "1", e.mask.style.opacity = "0";
          },
          j = (e, t) => {
            if (t === e.shown) return;
            e.shown = t, e.mask.textContent = t;
            let a = Math.max(b(t, m) + g, 1),
              r = p(e.width / a, .55, 1.6);
            e.mask.style.transform = Math.abs(r - 1) > .004 ? `translateX(-50%) scaleX(${r.toFixed(3)})` : "translateX(-50%)";
          },
          E = (e, a) => {
            let r = t.current,
              n = Math.floor((a + e.phase) * p(r.rate, 2, 60));
            if (n === e.step && e.shown) return;
            if (e.step = n, 0 === e.pool.length) return void j(e, e.glyph);
            let l = Math.floor(e.seed + 5 * n) % e.pool.length;
            e.pool[l] === e.shown && (l = (l + 1) % e.pool.length), j(e, e.pool[l]);
          },
          M = () => {
            let r = t.current,
              n = getComputedStyle(e);
            m = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`, h = parseFloat(n.fontSize) || 16, g = parseFloat(n.letterSpacing) || 0;
            let l = e.getBoundingClientRect(),
              o = Array.from(e.querySelectorAll("[data-cipher]")),
              i = new Map(a.map(e => [e.root, e]));
            return a = o.map((e, t) => {
              let a = e.querySelector("[data-face]"),
                n = e.querySelector("[data-mask]"),
                o = e.dataset.glyph ?? "",
                s = a.getBoundingClientRect(),
                h = i.get(e),
                p = {
                  root: e,
                  face: a,
                  mask: n,
                  glyph: o,
                  pool: ((e, t, a) => {
                    if (t && "auto" !== t) return Array.from(new Set(f(t))).filter(t => t !== e);
                    let r = /^[A-Z]$/.test(e) || /^\p{Lu}$/u.test(e) ? c : /^[0-9]$/.test(e) ? u : /^\p{L}$/u.test(e) ? d : "!?#$%&*+=/<>@",
                      n = Math.max(b(e, a), 1),
                      l = t => Array.from(new Set(Array.from(t))).filter(t => t !== e).map(e => ({
                        item: e,
                        gap: Math.abs(Math.log(Math.max(b(e, a), 1) / n))
                      })).sort((e, t) => e.gap - t.gap),
                      o = l(r).filter(e => e.gap < .2).map(e => e.item);
                    if (o.length >= 4) return o;
                    let i = l(c + d + u),
                      s = i.filter(e => e.gap < .22).map(e => e.item);
                    return s.length >= 3 ? s : i.slice(0, 4).map(e => e.item);
                  })(o, r.charset, m),
                  state: h?.state ?? "plain",
                  active: h?.active ?? !1,
                  appear: h?.appear ?? 0,
                  lock: h?.lock ?? 0,
                  phase: h?.phase ?? y(3.7 * t + 1.3),
                  step: -1,
                  seed: h?.seed ?? Math.floor(997 * y(9.1 * t + 4.2)),
                  shown: "",
                  cooldown: h?.cooldown ?? 0,
                  x: s.left + s.width / 2 - l.left,
                  y: s.top + s.height / 2 - l.top,
                  width: s.width
                };
              return n.style.lineHeight = `${s.height}px`, w(p), p;
            }), o.length;
          },
          R = () => {
            let e,
              r,
              n,
              o,
              s = t.current;
            if (0 === a.length) return;
            if (l = !0, s.reduced) return void a.forEach(e => k(e, !1));
            let c = performance.now() / 1e3,
              d = p(s.duration, .1, 20),
              u = p(s.scramble, .05, 5),
              m = (e = t.current, r = a.length, n = a.map((t, a) => {
                let n = r > 1 ? a / (r - 1) : 0;
                return "right" === e.order ? 1 - n : "center" === e.order ? 2 * Math.abs(n - .5) : "random" === e.order ? y(7.31 * a + .001 * Math.random() + 3.7) : n;
              }).map((e, t) => ({
                value: e,
                i: t
              })).sort((e, t) => e.value - t.value), o = Array(r), n.forEach((e, t) => {
                o[e.i] = r > 1 ? t / (r - 1) : 0;
              }), o),
              h = "blank" === s.from;
            a.forEach((e, t) => {
              let a = m[t] * Math.max(d - u, .35 * d);
              e.active = !0, e.appear = h ? c + a : c, e.lock = c + a + u, e.step = -1, h ? S(e) : (C(e), E(e, c), e.mask.style.opacity = String(.55 * p(s.scrambleOpacity, 0, 1)));
            }), i = !0, F();
          },
          T = e => {
            if (r = 0, n) return;
            let l = t.current,
              s = e / 1e3,
              c = p(l.scrambleOpacity, 0, 1),
              d = !1;
            for (let e of a) {
              if (!e.active) continue;
              if (s >= e.lock) {
                k(e, !0);
                continue;
              }
              if (d = !0, s < e.appear) continue;
              "scramble" !== e.state && C(e), E(e, s);
              let t = p((s - e.appear) / Math.max(e.lock - e.appear, .01), 0, 1);
              e.mask.style.opacity = (c * (.55 + .45 * t)).toFixed(3);
            }
            d && o && !document.hidden ? r = requestAnimationFrame(T) : !d && i && (i = !1, t.current.onComplete?.(), A());
          };
        function F() {
          n || r || (r = requestAnimationFrame(T));
        }
        function A() {
          window.clearTimeout(s);
          let e = t.current;
          e.loop && !e.reduced && (s = window.setTimeout(() => {
            o ? R() : l = !1;
          }, 1e3 * p(e.interval, .5, 60)));
        }
        let I = r => {
            let n = t.current;
            if ("trail" !== n.hover || n.reduced || "touch" === r.pointerType) return;
            let l = e.getBoundingClientRect(),
              o = r.clientX - l.left,
              i = r.clientY - l.top,
              s = performance.now(),
              c = Math.hypot(o - x.x, i - x.y) / Math.max(s - x.t, 1);
            if (x = {
              x: o,
              y: i,
              t: s
            }, c < .08) return;
            let d = s / 1e3,
              u = p(n.hoverRadius, .2, 6) * h,
              m = !1;
            for (let e of a) {
              if (e.active || "plain" !== e.state || d < e.cooldown) continue;
              let t = Math.hypot((e.x - o) / u, (e.y - i) / (.9 * u));
              t > 1 || (e.active = !0, e.appear = d, e.lock = d + .14 + .22 * (1 - t), e.cooldown = e.lock + .4, e.step = -1, C(e), E(e, d), e.mask.style.opacity = (.55 * p(n.scrambleOpacity, 0, 1)).toFixed(3), m = !0);
            }
            m && F();
          },
          $ = e => {
            let r = t.current;
            "replay" !== r.hover || r.reduced || "touch" === e.pointerType || a.some(e => e.active) || R();
          };
        e.addEventListener("pointermove", I), e.addEventListener("pointerenter", $);
        let L = new ResizeObserver(() => M());
        L.observe(e);
        let N = new IntersectionObserver(e => {
          o = e.some(e => e.isIntersecting);
          let a = e[0],
            r = t.current;
          !l && "view" === r.trigger && a && a.intersectionRatio >= .4 && R(), o && F();
        }, {
          threshold: [0, .4, 1]
        });
        N.observe(e), document.fonts?.ready && document.fonts.ready.then(() => {
          n || (v.clear(), M());
        }).catch(() => {}), M();
        let O = t.current;
        return O.reduced || "manual" === O.trigger ? a.forEach(e => k(e, !1)) : a.forEach(e => S(e)), O.reduced || "mount" !== O.trigger || R(), {
          measure: e => {
            M(), e && l && R();
          },
          sync: () => {
            a.forEach(w);
            let e = t.current;
            e.loop ? s || a.some(e => e.active) || A() : (window.clearTimeout(s), s = 0), e.reduced && a.forEach(e => k(e, !1));
          },
          destroy: () => {
            n = !0, cancelAnimationFrame(r), window.clearTimeout(s), e.removeEventListener("pointermove", I), e.removeEventListener("pointerenter", $), L.disconnect(), N.disconnect(), a.forEach(e => k(e, !1));
          },
          replay: () => R()
        };
      })(e, U);
      return P.current = t, () => {
        t.destroy(), P.current = null;
      };
    }, []), (0, React.useEffect)(() => {
      P.current?.measure(!0);
    }, [D, C]), (0, React.useEffect)(() => {
      P.current?.measure(!1);
    }, [a, l, o, i, g]), (0, React.useImperativeHandle)(z, () => ({
      replay: () => P.current?.replay()
    }), []), <t ref={H} className={(0, __mod_90650.cn)("relative inline-block max-w-full", N)} style={{
      fontSize: "number" == typeof a ? `${a}px` : a,
      fontWeight: l,
      letterSpacing: o,
      lineHeight: i,
      textAlign: g,
      color: x,
      whiteSpace: "pre-wrap",
      ...O
    }}>{D.map((e, t) => e.space ? <span>{e.word}</span> : <span style={{
        whiteSpace: "nowrap"
      }}>{e.glyphs.map((t, a) => <span data-cipher={!0} data-glyph={t} style={{
          position: "relative"
        }}><span data-face={!0} style={{
            opacity: B || "manual" === k ? void 0 : 0
          }}>{t}</span><span data-mask={!0} aria-hidden="true" style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            transformOrigin: "50% 50%",
            whiteSpace: "pre",
            opacity: 0,
            pointerEvents: "none"
          }} /></span>)}</span>)}</t>;
  });
x.displayName = "CipherReveal";
let w = {
    auto: "auto",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!?#$%&*+=/<>@",
    binary: "01"
  },
  S = [{
    label: "Auto",
    value: "auto"
  }, {
    label: "Capitals",
    value: "letters"
  }, {
    label: "Symbols",
    value: "symbols"
  }, {
    label: "Binary",
    value: "binary"
  }],
  C = {
    charset: "auto",
    order: "left",
    from: "blank",
    duration: 1.4,
    scramble: .45,
    rate: 14
  },
  k = {
    decrypt: C,
    shuffle: {
      charset: "auto",
      order: "random",
      from: "scrambled",
      duration: 1.6,
      scramble: .6,
      rate: 16
    },
    terminal: {
      charset: "binary",
      order: "left",
      from: "blank",
      duration: 1.6,
      scramble: .3,
      rate: 22
    },
    whisper: {
      charset: "auto",
      order: "center",
      from: "blank",
      duration: 2.2,
      scramble: .8,
      rate: 9
    }
  },
  j = [{
    label: "Decrypt",
    value: "decrypt"
  }, {
    label: "Shuffle",
    value: "shuffle"
  }, {
    label: "Terminal",
    value: "terminal"
  }, {
    label: "Whisper",
    value: "whisper"
  }],
  E = [{
    label: "Left to right",
    value: "left"
  }, {
    label: "Right to left",
    value: "right"
  }, {
    label: "Center out",
    value: "center"
  }, {
    label: "Random",
    value: "random"
  }],
  M = [{
    label: "Blank",
    value: "blank"
  }, {
    label: "Scrambled",
    value: "scrambled"
  }],
  R = [{
    label: "Trail",
    value: "trail"
  }, {
    label: "Replay",
    value: "replay"
  }, {
    label: "None",
    value: "none"
  }],
  T = ["Ideas into reality", "Signal from noise", "Decode the future"],
  F = [{
    name: "text",
    type: "string",
    default: '"Ideas into reality"',
    description: "The headline, set in the page's own font. Changing it decodes the new words in place."
  }, {
    name: "as",
    type: '"span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
    default: '"span"',
    description: "Element to render."
  }, {
    name: "fontSize",
    type: "number | string",
    default: '"clamp(2.75rem, 8vw, 6.5rem)"',
    description: "Font size. Numbers are pixels; strings accept any CSS length."
  }, {
    name: "fontWeight",
    type: "number",
    default: "600",
    description: "Font weight. The font family is inherited from the page."
  }, {
    name: "letterSpacing",
    type: "string",
    default: '"-0.03em"',
    description: "Letter spacing as a CSS length."
  }, {
    name: "lineHeight",
    type: "number",
    default: "1.1",
    description: "Line height for wrapped headlines."
  }, {
    name: "align",
    type: '"left" | "center" | "right"',
    default: '"center"',
    description: "Text alignment."
  }, {
    name: "color",
    type: "string",
    default: "inherited",
    description: "Colour of the decoded text. Leave unset to inherit from the page."
  }, {
    name: "scrambleColor",
    type: "string",
    default: "text colour",
    description: "Colour of the characters while they are still scrambled. Leave unset for a monochrome decode."
  }, {
    name: "scrambleOpacity",
    type: "number",
    default: "0.42",
    description: "Opacity of the scrambled characters, from 0 to 1. They brighten toward full as each letter locks."
  }, {
    name: "charset",
    type: "string",
    default: '"auto"',
    description: 'Characters used while scrambling. "auto" matches each letter with characters of the same case and a similar width. Any other string is used as-is. Every scrambled character is fitted to its letter\'s exact width, so the line never shifts.'
  }, {
    name: "trigger",
    type: '"view" | "mount" | "manual"',
    default: '"view"',
    description: "When the first reveal plays: as the headline scrolls into view, on mount, or only through the ref."
  }, {
    name: "order",
    type: '"left" | "right" | "center" | "random"',
    default: '"left"',
    description: "Order the letters decode in."
  }, {
    name: "from",
    type: '"blank" | "scrambled"',
    default: '"blank"',
    description: "Start from nothing, with letters typed in as cipher, or from a fully scrambled line."
  }, {
    name: "duration",
    type: "number",
    default: "1.4",
    description: "Seconds for the whole headline to decode."
  }, {
    name: "scramble",
    type: "number",
    default: "0.45",
    description: "Seconds each letter scrambles before it locks."
  }, {
    name: "rate",
    type: "number",
    default: "14",
    description: "How many times per second a scrambled character changes."
  }, {
    name: "hover",
    type: '"trail" | "replay" | "none"',
    default: '"trail"',
    description: "trail re-encrypts the letters the pointer moves across, decoding them again behind it. replay decodes the whole headline again when the pointer enters."
  }, {
    name: "hoverRadius",
    type: "number",
    default: "0.6",
    description: "Reach of the hover trail, in em."
  }, {
    name: "loop",
    type: "boolean",
    default: "false",
    description: "Decode again every interval while the headline is on screen."
  }, {
    name: "interval",
    type: "number",
    default: "5",
    description: "Seconds between reveals when loop is on."
  }, {
    name: "onComplete",
    type: "() => void",
    default: "—",
    description: "Called when a reveal finishes."
  }, {
    name: "ref",
    type: "{ replay }",
    default: "—",
    description: "replay() decodes the headline again from code."
  }, {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes for the root element."
  }, {
    name: "style",
    type: "CSSProperties",
    default: "—",
    description: "Inline styles for the root element."
  }],
  A = () => {
    let [e, t] = (0, __mod_90761.I)(),
      a = (0, __mod_86049.Y)(),
      [s, c] = (0, React.useState)(T[0]),
      [d, u] = (0, React.useState)(!1),
      [m, h] = (0, React.useState)("decrypt"),
      [p, f] = (0, React.useState)(C),
      y = e => t => f(a => ({
        ...a,
        [e]: t
      })),
      [g, v] = (0, React.useState)(null),
      b = g ?? ("dark" === a ? "#FFFFFF" : "#0A0A0A"),
      [A, I] = (0, React.useState)(null),
      $ = A ?? b,
      [L, N] = (0, React.useState)(.42),
      [O, z] = (0, React.useState)(80),
      [H, P] = (0, React.useState)("trail"),
      [B, D] = (0, React.useState)(.6),
      [U, X] = (0, React.useState)(!1);
    return (0, React.useEffect)(() => {
      if (!d) return;
      let e = window.setInterval(() => {
        c(e => T[(T.indexOf(e) + 1) % T.length] ?? T[0]);
      }, 3400);
      return () => window.clearInterval(e);
    }, [d]), <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500} enableResponsive={!0}><div className="flex h-full w-full items-center justify-center overflow-hidden px-6 py-16 sm:px-12"><x as="h2" text={s} fontSize={`min(${O}px, 11vw)`} color={b} scrambleColor={$} scrambleOpacity={L} charset={w[p.charset] ?? "auto"} order={p.order} from={p.from} duration={p.duration} scramble={p.scramble} rate={p.rate} hover={H} hoverRadius={B} loop={U} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Text" value={s} onChange={c} /><__mod_56388.bg title="Mode" value={m} options={j} onChange={e => {
              h(e), f(k[e] ?? C), t();
            }} /><__mod_56388.bg title="Charset" value={p.charset} options={S} onChange={y("charset")} /><__mod_56388.bg title="Order" value={p.order} options={E} onChange={e => y("order")(e)} /><__mod_56388.bg title="Start" value={p.from} options={M} onChange={e => y("from")(e)} /><__mod_56388.bg title="Hover" value={H} options={R} onChange={e => P(e)} /><__mod_56388.W7 title="Text" value={b} onChange={v} /><__mod_56388.W7 title="Scramble" value={$} onChange={I} /><__mod_56388.yt title="Font Size" min={24} max={160} step={1} value={O} valueUnit="px" onChange={z} /><__mod_56388.yt title="Duration" min={.2} max={5} step={.05} value={p.duration} valueUnit="s" onChange={y("duration")} /><__mod_56388.yt title="Scramble" min={0} max={2} step={.05} value={p.scramble} valueUnit="s" onChange={y("scramble")} /><__mod_56388.yt title="Rate" min={2} max={60} step={1} value={p.rate} onChange={y("rate")} /><__mod_56388.yt title="Scramble Opacity" min={0} max={1} step={.01} value={L} onChange={N} /><__mod_56388.yt title="Hover Radius" min={.2} max={4} step={.05} value={B} valueUnit="em" onChange={D} /><__mod_56388.tl title="Cycle Phrases" checked={d} onChange={u} /><__mod_56388.tl title="Loop" checked={U} onChange={X} /></__mod_56388.IH><__mod_56388.Ub data={F} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default x;
