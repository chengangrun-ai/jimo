import * as __mod_81106 from "../_helpers/81106";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Speeding Text
 * Numbers or words that change with a speed blur
 * slug: speeding-text
 * category: text
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = (e, t, n) => Math.min(n, Math.max(t, e)),
  c = (e, t) => {
    let n = [],
      a = ",",
      r = "",
      i = "";
    for (let l of e.formatToParts(t)) "group" === l.type ? (a = l.value, n.push(r), r = "") : "integer" === l.type ? r += l.value : "minusSign" === l.type || "plusSign" === l.type ? r = l.value + r : ("decimal" === l.type || "fraction" === l.type) && (i += l.value);
    return n.push(r + i), {
      body: n,
      mark: a
    };
  },
  p = ({
    value: e = 2e4,
    from: t = 0,
    words: n,
    duration: i = 2200,
    interval: l = 1400,
    swapDuration: s = 520,
    travel: p = 90,
    decimals: m = 0,
    locale: h = "en-US",
    prefix: f = "",
    suffix: x = "",
    blurStrength: g = 1,
    maxBlur: y = 14,
    showSeparator: v = !0,
    fontSize: b = 96,
    fontWeight: w = 700,
    italic: j = !0,
    textColor: S = "#0a0a0a",
    backgroundColor: C = "transparent",
    align: M = "center",
    startOnView: k = !0,
    loop: F = !1,
    loopDelay: D = 900,
    paused: I = !1,
    width: T = "100%",
    height: A = "100%",
    className: N,
    style: E
  }) => {
    let W = (0, React.useId)().replace(/:/g, ""),
      P = (0, React.useRef)(null),
      B = (0, React.useRef)([]),
      R = (0, React.useRef)([]),
      $ = (0, React.useRef)([]),
      z = (0, React.useRef)(null),
      H = (0, React.useRef)(null),
      U = (0, __mod_81106.W)(P, {
        once: !0,
        margin: "-64px"
      }),
      G = !k || U,
      V = (0, React.useMemo)(() => (n ?? []).filter(e => e.length > 0), [n]),
      q = V.length > 1,
      X = (0, React.useMemo)(() => new Intl.NumberFormat(h, {
        minimumFractionDigits: d(m, 0, 8),
        maximumFractionDigits: d(m, 0, 8)
      }), [h, m]),
      {
        lanes: L,
        glyph: _
      } = (0, React.useMemo)(() => {
        if (q) return {
          lanes: 1,
          glyph: ","
        };
        let n = c(X, Math.max(Math.abs(e), Math.abs(t), 1));
        return {
          lanes: n.body.length,
          glyph: n.mark
        };
      }, [q, e, t, X]),
      O = (0, React.useCallback)((e, t) => {
        let {
            body: n
          } = c(X, e),
          a = L - n.length;
        for (let e = 0; e < L; e++) {
          let r = B.current[e],
            i = R.current[e],
            l = $.current[e],
            s = e - a,
            o = s >= 0;
          if (r && (r.textContent = o ? n[s] : "", r.style.opacity = o ? "1" : "0"), i && (i.style.opacity = o && v ? "1" : "0"), l) {
            let n = d(t / Math.pow(1e3, L - 1 - e) * g / 1e3, 0, y);
            l.setAttribute("stdDeviation", `${n.toFixed(2)},0`);
          }
        }
      }, [X, L, v, g, y]);
    return (0, React.useEffect)(() => {
      if (q || !G) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || I || i <= 0) return void O(e, 0);
      let n = 0,
        a = 0,
        r = 0,
        l = Math.abs(e - t),
        s = o => {
          r || (r = o);
          let u = d((o - r) / i, 0, 1);
          O(t + (e - t) * (1 - Math.pow(1 - u, 4)), 4 * Math.pow(1 - u, 3) * l * 1e3 / i), u < 1 ? n = requestAnimationFrame(s) : (O(e, 0), F && (a = window.setTimeout(() => {
            r = 0, n = requestAnimationFrame(s);
          }, D)));
        };
      return n = requestAnimationFrame(s), () => {
        cancelAnimationFrame(n), window.clearTimeout(a);
      };
    }, [q, G, I, e, t, i, F, D, O]), (0, React.useEffect)(() => {
      if (!q) return;
      let e = z.current,
        t = H.current;
      if (!e) return;
      let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        a = 0;
      if (e.textContent = V[0], e.style.transform = "translateX(0px)", e.style.opacity = "1", t?.setAttribute("stdDeviation", "0,0"), n || I) return;
      let r = 0,
        i = 0,
        o = () => {
          let n = 0,
            u = !1,
            c = m => {
              n || (n = m);
              let h = d((m - n) / s, 0, 1),
                f = h < .5 ? 2 * h : (h - .5) * 2;
              h >= .5 && !u && (u = !0, a = (a + 1) % V.length, e.textContent = V[a]);
              let x = h < .5 ? f * p : -p * (1 - f),
                v = h < .5 ? 1 - f : f,
                b = y * g * (h < .5 ? f : 1 - f);
              e.style.transform = `translateX(${x.toFixed(2)}px)`, e.style.opacity = v.toFixed(3), t?.setAttribute("stdDeviation", `${d(b, 0, y).toFixed(2)},0`), h < 1 ? r = requestAnimationFrame(c) : (e.style.transform = "translateX(0px)", e.style.opacity = "1", t?.setAttribute("stdDeviation", "0,0"), i = window.setTimeout(o, l));
            };
          r = requestAnimationFrame(c);
        };
      return i = window.setTimeout(o, l), () => {
        cancelAnimationFrame(r), window.clearTimeout(i);
      };
    }, [q, V, I, l, s, p, y, g]), <div ref={P} className={(0, __mod_90650.cn)("relative overflow-hidden", N)} style={{
      width: T,
      height: A,
      backgroundColor: C,
      color: S,
      display: "flex",
      alignItems: "center",
      justifyContent: "left" === M ? "flex-start" : "right" === M ? "flex-end" : "center",
      ...E
    }}><svg aria-hidden={!0} style={{
        position: "absolute",
        width: 0,
        height: 0
      }}><defs>{q ? <filter id={`${W}-w`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur ref={H} in="SourceGraphic" stdDeviation="0,0" /></filter> : Array.from({
            length: L
          }, (e, t) => <filter id={`${W}-${t}`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur ref={e => {
              $.current[t] = e;
            }} in="SourceGraphic" stdDeviation="0,0" /></filter>)}</defs></svg><div style={{
        display: "flex",
        alignItems: "center",
        fontSize: b,
        fontWeight: w,
        fontStyle: j ? "italic" : "normal",
        lineHeight: 1.1,
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "pre"
      }}>{f ? <span>{f}</span> : null}{q ? <span ref={z} style={{
          display: "inline-block",
          filter: `url(#${W}-w)`,
          willChange: "transform, opacity, filter"
        }} /> : Array.from({
          length: L
        }, (e, t) => <span style={{
          display: "flex",
          alignItems: "center"
        }}>{t > 0 ? <span ref={e => {
            R.current[t] = e;
          }} style={{
            opacity: 0,
            transition: "opacity 140ms ease"
          }}>{_}</span> : null}<span ref={e => {
            B.current[t] = e;
          }} style={{
            display: "inline-block",
            minWidth: t > 0 ? "3ch" : void 0,
            textAlign: "right",
            filter: `url(#${W}-${t})`,
            willChange: "filter"
          }} /></span>)}{x ? <span>{x}</span> : null}</div></div>;
  },
  m = () => () => {},
  h = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: n
      } = (0, __mod_30701.D)(),
      o = (0, React.useSyncExternalStore)(m, () => !0, () => !1) && "dark" === n,
      [u, d] = (0, React.useState)(null),
      [c, h] = (0, React.useState)(null),
      f = (0, React.useMemo)(() => null !== u ? u : o ? "#0a0a0a" : "#ffffff", [o, u]),
      x = (0, React.useMemo)(() => null !== c ? c : o ? "#fafafa" : "#0a0a0a", [o, c]),
      [g, y] = (0, React.useState)("number"),
      [v, b] = (0, React.useState)(2e4),
      [w, j] = (0, React.useState)(2200),
      [S, C] = (0, React.useState)(0),
      [M, k] = (0, React.useState)(""),
      [F, D] = (0, React.useState)(""),
      [I, T] = (0, React.useState)(1),
      [A, N] = (0, React.useState)(14),
      [E, W] = (0, React.useState)(!0),
      [P, B] = (0, React.useState)(96),
      [R, $] = (0, React.useState)(700),
      [z, H] = (0, React.useState)(!0),
      [U, G] = (0, React.useState)("center"),
      [V, q] = (0, React.useState)(1400),
      [X, L] = (0, React.useState)(520),
      [_, O] = (0, React.useState)(90),
      [K, J] = (0, React.useState)(!0),
      [Q, Y] = (0, React.useState)(!1),
      Z = (0, React.useMemo)(() => ["faster", "sharper", "smoother", "bolder"], []);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><PView value={v} words={"words" === g ? Z : void 0} duration={w} interval={V} swapDuration={X} travel={_} decimals={S} prefix={M} suffix={F} blurStrength={I} maxBlur={A} showSeparator={E} fontSize={P} fontWeight={R} italic={z} textColor={x} backgroundColor={f} align={U} loop={K} paused={Q}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Mode" value={g} onChange={y} options={[{
              value: "number",
              label: "Number"
            }, {
              value: "words",
              label: "Words"
            }]} /><__mod_56388.bg title="Align" value={U} onChange={G} options={[{
              value: "left",
              label: "Left"
            }, {
              value: "center",
              label: "Center"
            }, {
              value: "right",
              label: "Right"
            }]} /><__mod_56388.yt title="Value" min={0} max={1e5} step={1e3} value={v} onChange={b} /><__mod_56388.yt title="Duration" min={300} max={6e3} step={50} value={w} onChange={j} /><__mod_56388.yt title="Blur Strength" min={0} max={4} step={.05} value={I} onChange={T} /><__mod_56388.yt title="Max Blur" min={0} max={40} step={1} value={A} onChange={N} /><__mod_56388.yt title="Decimals" min={0} max={3} step={1} value={S} onChange={C} /><__mod_56388.yt title="Font Size" min={24} max={200} step={2} value={P} onChange={B} /><__mod_56388.yt title="Font Weight" min={300} max={900} step={100} value={R} onChange={$} /><__mod_56388.yt title="Word Interval" min={300} max={4e3} step={50} value={V} onChange={q} /><__mod_56388.yt title="Swap Duration" min={120} max={1600} step={20} value={X} onChange={L} /><__mod_56388.yt title="Travel" min={0} max={300} step={5} value={_} onChange={O} /><__mod_56388.UD title="Prefix" value={M} onChange={k} /><__mod_56388.UD title="Suffix" value={F} onChange={D} /><__mod_56388.W7 title="Text" value={x} onChange={h} /><__mod_56388.W7 title="Background" value={f} onChange={d} /><__mod_56388.tl title="Italic" checked={z} onChange={H} /><__mod_56388.tl title="Show Separator" checked={E} onChange={W} /><__mod_56388.tl title="Loop" checked={K} onChange={J} /><__mod_56388.tl title="Paused" checked={Q} onChange={Y} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "value",
            type: "number",
            default: "20000",
            description: "Number the counter travels to."
          }, {
            name: "from",
            type: "number",
            default: "0",
            description: "Value the counter starts from."
          }, {
            name: "words",
            type: "string[]",
            default: "-",
            description: "Words cycled in place instead of counting."
          }, {
            name: "duration",
            type: "number",
            default: "2200",
            description: "Milliseconds the counter takes to reach the value."
          }, {
            name: "interval",
            type: "number",
            default: "1400",
            description: "Milliseconds each word is held before the next swap."
          }, {
            name: "swapDuration",
            type: "number",
            default: "520",
            description: "Milliseconds a word swap takes."
          }, {
            name: "travel",
            type: "number",
            default: "90",
            description: "Horizontal distance a swapping word travels, in pixels."
          }, {
            name: "decimals",
            type: "number",
            default: "0",
            description: "Decimal places kept on the counter."
          }, {
            name: "locale",
            type: "string",
            default: '"en-US"',
            description: "Locale used for digit grouping."
          }, {
            name: "prefix",
            type: "string",
            default: '""',
            description: "Text placed before the value."
          }, {
            name: "suffix",
            type: "string",
            default: '""',
            description: "Text placed after the value."
          }, {
            name: "blurStrength",
            type: "number",
            default: "1",
            description: "Multiplier on how readily speed turns into blur."
          }, {
            name: "maxBlur",
            type: "number",
            default: "14",
            description: "Upper bound on the blur radius in pixels."
          }, {
            name: "showSeparator",
            type: "boolean",
            default: "true",
            description: "Fade the group separators in as digits arrive."
          }, {
            name: "fontSize",
            type: "number",
            default: "96",
            description: "Font size in pixels."
          }, {
            name: "fontWeight",
            type: "number",
            default: "700",
            description: "Font weight."
          }, {
            name: "italic",
            type: "boolean",
            default: "true",
            description: "Slant the glyphs."
          }, {
            name: "textColor",
            type: "string",
            default: '"#0a0a0a"',
            description: "Colour of the glyphs."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"transparent"',
            description: "Colour behind the glyphs."
          }, {
            name: "align",
            type: '"left" | "center" | "right"',
            default: '"center"',
            description: "Horizontal placement inside the box."
          }, {
            name: "startOnView",
            type: "boolean",
            default: "true",
            description: "Hold the run until the element scrolls into view."
          }, {
            name: "loop",
            type: "boolean",
            default: "false",
            description: "Restart once the run finishes."
          }, {
            name: "loopDelay",
            type: "number",
            default: "900",
            description: "Milliseconds to wait before a looped restart."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Freeze the animation."
          }, {
            name: "width",
            type: "string | number",
            default: '"100%"',
            description: "Width of the container."
          }, {
            name: "height",
            type: "string | number",
            default: '"100%"',
            description: "Height of the container."
          }, {
            name: "className",
            type: "string",
            default: "-",
            description: "Extra classes for the container."
          }, {
            name: "style",
            type: "CSSProperties",
            default: "-",
            description: "Inline styles for the container."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const PView: any = p;

export default h;
