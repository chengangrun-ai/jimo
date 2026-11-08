import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_86049 from "../_helpers/86049";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Rising Ink
 * Letters that lift off the page in 3D near the cursor
 * slug: rising-ink
 * category: text
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = ["#B19EEF", "#3A1DB8"],
  p = [[1, 0], [-1, 0], [0, 1], [0, -1], [.71, .71], [-.71, .71], [.71, -.71], [-.71, -.71]],
  u = (e, t, n) => Math.min(n, Math.max(t, e)),
  h = e => {
    let t = window.matchMedia("(prefers-reduced-motion: reduce)");
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  c = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
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
  m = {
    position: "relative",
    display: "inline-block",
    isolation: "isolate"
  },
  x = {
    whiteSpace: "pre-wrap"
  },
  v = {
    display: "inline-block",
    whiteSpace: "nowrap"
  },
  g = {
    position: "relative",
    display: "inline-block"
  },
  y = {
    position: "absolute",
    inset: 0,
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    willChange: "transform"
  },
  b = {
    position: "relative",
    display: "inline-block",
    willChange: "transform"
  },
  w = (0, React.forwardRef)(function ({
    text: e = "Raise the standard.",
    as: t = "span",
    color: n = "currentColor",
    colors: i = d,
    extrusion: o = "solid",
    plates: s = 7,
    lift: w = .5,
    radius: S = 1.4,
    view: F = "pointer",
    perspective: j = 1.3,
    angle: C = 35,
    stiffness: M = 1,
    damping: A = .5,
    pop: k = 1,
    shadow: E = .6,
    intro: I = !0,
    area: $ = "parent",
    paused: P = !1,
    className: B,
    style: z
  }, R) {
    let N = (0, React.useRef)(null),
      T = (0, React.useRef)(null),
      D = (0, React.useRef)(null),
      L = (0, React.useSyncExternalStore)(h, c, () => !1) || P,
      W = (0, React.useMemo)(() => e.split(/(\s+)/).filter(e => e.length > 0).map(e => ({
        value: e,
        space: /^\s+$/.test(e),
        glyphs: "undefined" == typeof Intl || void 0 === Intl.Segmenter ? Array.from(e) : Array.from(new Intl.Segmenter(void 0, {
          granularity: "grapheme"
        }).segment(e), e => e.segment)
      })), [e]),
      H = i.join("|"),
      U = (0, React.useMemo)(() => {
        var e;
        let t, n;
        return t = (e = H ? H.split("|") : d)[0] ?? d[0], n = e[1] ?? e[0] ?? d[1], Array.from({
          length: 24
        }, (e, a) => {
          let r = Math.round(a / 23 * 100);
          return `color-mix(in oklch, ${t} ${100 - r}%, ${n})`;
        });
      }, [H]),
      q = {
        extrusion: o,
        plates: s,
        lift: w,
        radius: S,
        view: F,
        perspective: j,
        angle: C,
        stiffness: M,
        damping: A,
        pop: k,
        shadow: E,
        intro: I,
        area: $,
        palette: U,
        near: i[0] ?? d[0],
        far: i[1] ?? i[0] ?? d[1]
      },
      O = (0, React.useRef)(q);
    return (0, React.useEffect)(() => {
      O.current = q;
    }), (0, React.useEffect)(() => {
      var e;
      let t,
        n,
        a,
        r,
        i,
        o,
        s,
        l,
        d,
        h,
        c,
        f,
        m,
        x,
        v,
        g,
        y,
        b,
        w,
        S,
        F,
        j,
        C,
        M,
        A = N.current,
        k = T.current;
      if (!A || !k || L) return;
      let E = (e = () => O.current, t = Array.from(k.querySelectorAll("[data-rising-letter]")).map(e => ({
        node: e,
        body: e.querySelector("[data-rising-body]"),
        face: e.querySelector("[data-rising-face]"),
        x: 0,
        y: 0,
        h: 0,
        v: 0
      })), n = 16, a = 0, r = 0, i = !1, o = -1, s = !1, l = 0, d = 0, h = !1, c = () => {
        n = Number.parseFloat(getComputedStyle(k).fontSize) || 16;
        let e = k.offsetWidth,
          a = k.offsetHeight;
        for (let n of t) n.x = n.node.offsetLeft + n.node.offsetWidth / 2 - e / 2, n.y = n.node.offsetTop + n.node.offsetHeight / 2 - a / 2;
      }, f = () => {
        let i = e(),
          o = Math.max(i.lift, 0) * n,
          s = 4.5 * n,
          l = i.angle * Math.PI / 180,
          d = i.palette,
          h = u(i.shadow, 0, 1);
        for (let e of t) {
          let t,
            c,
            f,
            m,
            x,
            v = Math.max(e.h, 0);
          if (v < .05) {
            e.body.style.transform = "", e.body.style.textShadow = "", e.body.style.zIndex = "", e.face.style.transform = "", e.face.style.zIndex = "";
            continue;
          }
          let g = s / Math.max(s - Math.min(v, 1.6 * o), .35 * s);
          if ("fixed" === i.view) {
            let e = Math.cos(l),
              n = Math.sin(l),
              a = v * u(i.perspective, 0, 4) * .75;
            x = 1 + (g - 1) * .35, t = -e * a * .18, c = -n * a * .18, f = e * a, m = n * a;
          } else {
            let n = (g - 1) * u(i.perspective, 0, 4);
            x = g, t = (e.x - a) * n, c = (e.y - r) * n - .18 * v, f = -t, m = -c;
          }
          let y = Math.hypot(f, m),
            b = [];
          if ("stack" === i.extrusion) {
            let e = Math.round(u(i.plates, 1, 16)),
              t = 1 / x,
              n = Math.round(100 * u((y - 1.5) / 5, 0, 1)),
              a = n >= 100 ? i.near : `color-mix(in srgb, ${i.near} ${n}%, transparent)`,
              r = Math.max(1, Math.min(e, Math.round(y / 2.5)));
            if (n > 0) for (let e = 1; e <= r; e++) {
              let n = e / r,
                o = f * n / x,
                s = m * n / x;
              for (let [e, n] of (b.push(`${o.toFixed(2)}px ${s.toFixed(2)}px 0 ${i.far}`), p)) b.push(`${(o + e * t).toFixed(2)}px ${(s + n * t).toFixed(2)}px 0 ${a}`);
            }
          } else {
            let e = Math.min(56, Math.ceil(y / .7));
            for (let t = 1; t <= e; t++) {
              let n = t / e,
                a = d[Math.min(d.length - 1, Math.round(n * (d.length - 1)))];
              b.push(`${(f * n / x).toFixed(2)}px ${(m * n / x).toFixed(2)}px 0 ${a}`);
            }
          }
          if (h > 0) {
            let e = v / Math.max(o, 1);
            b.push(`${(f / x).toFixed(2)}px ${(m / x + .04 * n).toFixed(2)}px ${(.12 * n * e).toFixed(2)}px rgba(0, 0, 0, ${(.45 * h * u(e, 0, 1)).toFixed(3)})`);
          }
          let w = `translate3d(${t.toFixed(2)}px, ${c.toFixed(2)}px, 0) scale(${x.toFixed(4)})`,
            S = Math.round(4 * v);
          e.body.style.transform = w, e.body.style.textShadow = b.join(", "), e.body.style.zIndex = String(1 + S), e.face.style.transform = w, e.face.style.zIndex = String(2e3 + S);
        }
      }, m = (s, l) => {
        let d = e(),
          p = Math.max(d.lift, 0) * n,
          h = Math.max(d.radius, .1) * n,
          c = 2 * Math.PI * 2.4 * u(d.stiffness, .1, 5),
          f = u(d.damping, .05, 2);
        if (o >= 0) {
          let e = (l - o) / 1600;
          if (e >= 1) o = -1;else if (!i) {
            let t = k.offsetWidth / 2 + 1.5 * h;
            a = -t + e * e * (3 - 2 * e) * t * 2, r = 0, m = !0;
          }
        }
        let x = !1;
        for (let e of t) {
          let t = Math.hypot(e.x - a, e.y - r) / h,
            n = i ? p * Math.exp(-t * t) : 0,
            i = c * c * (n - e.h) - 2 * f * c * e.v;
          e.v += i * s, e.h += e.v * s, (Math.abs(e.v) > .5 || Math.abs(n - e.h) > .05) && (x = !0);
        }
        return x || o >= 0;
      }, x = e => {
        let n = Math.min(Math.max((e - d) / 1e3, 0), .05);
        d = e;
        let a = Math.max(1, Math.ceil(n / (1 / 240))),
          r = !1;
        for (let t = 0; t < a; t++) r = m(n / a, e) || r;
        if (f(), r) l = requestAnimationFrame(x);else if (h = !1, !i) {
          for (let e of t) e.h = 0, e.v = 0;
          f();
        }
      }, v = () => {
        h || (h = !0, d = performance.now(), l = requestAnimationFrame(x));
      }, g = (e, t) => {
        let n = k.getBoundingClientRect();
        a = e - (n.left + n.width / 2), r = t - (n.top + n.height / 2);
      }, y = () => {
        c(), o = performance.now(), v();
      }, b = (a, r) => {
        let i = e(),
          o = u(i.pop, 0, 4);
        if (o <= 0) return;
        let s = k.getBoundingClientRect(),
          l = (a ?? s.left + s.width / 2) - (s.left + s.width / 2),
          d = (r ?? s.top + s.height / 2) - (s.top + s.height / 2),
          p = Math.max(i.radius, .1) * n * 1.3;
        for (let e of t) {
          let t = Math.hypot(e.x - l, e.y - d) / p;
          e.v += o * n * 9 * Math.exp(-t * t);
        }
        v();
      }, w = "parent" === e().area ? A.parentElement ?? A : A, S = e => {
        "touch" !== e.pointerType && (i = !0, g(e.clientX, e.clientY), v());
      }, F = () => {
        i = !1, v();
      }, j = e => {
        g(e.clientX, e.clientY), b(e.clientX, e.clientY);
      }, w.addEventListener("pointermove", S, {
        passive: !0
      }), w.addEventListener("pointerleave", F, {
        passive: !0
      }), w.addEventListener("pointerdown", j, {
        passive: !0
      }), C = "undefined" == typeof ResizeObserver ? null : new ResizeObserver(() => c()), C?.observe(k), M = "undefined" == typeof IntersectionObserver ? null : new IntersectionObserver(([t]) => {
        t.isIntersecting && !s && (s = !0, e().intro && window.setTimeout(y, 250));
      }, {
        threshold: .4
      }), M?.observe(A), c(), {
        wave: y,
        pop: b,
        destroy: () => {
          for (let e of (cancelAnimationFrame(l), C?.disconnect(), M?.disconnect(), w.removeEventListener("pointermove", S), w.removeEventListener("pointerleave", F), w.removeEventListener("pointerdown", j), t)) {
            for (let t of [e.body, e.face]) t.style.transform = "", t.style.zIndex = "";
            e.body.style.textShadow = "";
          }
        }
      });
      return D.current = E, () => {
        E.destroy(), D.current === E && (D.current = null);
      };
    }, [e, L, $]), (0, React.useImperativeHandle)(R, () => ({
      wave: () => D.current?.wave(),
      pop: (e, t) => D.current?.pop(e, t)
    }), []), <t ref={N} className={(0, __mod_90650.cn)("relative inline-block", B)} style={z}><span style={f}>{e}</span><span aria-hidden="true" ref={T} style={{
        ...m,
        color: n
      }}>{W.map((e, t) => e.space ? <span style={x}>{e.value}</span> : <span style={v}>{e.glyphs.map((e, t) => <span data-rising-letter="" style={g}><span data-rising-body="" style={y}>{e}</span><span data-rising-face="" style={b}>{e}</span></span>)}</span>)}</span></t>;
  }),
  S = {
    violet: {
      color: "#FFFFFF",
      near: "#B19EEF",
      far: "#3A1DB8",
      extrusion: "solid",
      view: "pointer"
    },
    stack: {
      color: "#FFFFFF",
      near: "#5EEAD4",
      far: "#0A0A0A",
      extrusion: "stack",
      view: "fixed"
    },
    blueprint: {
      color: "#EAF6FF",
      near: "#60A5FA",
      far: "#0A0A0A",
      extrusion: "stack",
      view: "pointer"
    },
    ember: {
      color: "#FFF4E8",
      near: "#FFB86B",
      far: "#9A2D0A",
      extrusion: "solid",
      view: "pointer"
    },
    mono: {
      color: "#FFFFFF",
      near: "#A1A1AA",
      far: "#27272A",
      extrusion: "solid",
      view: "fixed"
    },
    ink: {
      color: "#0A0A0A",
      near: "#B19EEF",
      far: "#5227FF",
      extrusion: "solid",
      view: "pointer"
    },
    paper: {
      color: "#0A0A0A",
      near: "#5227FF",
      far: "#FAFAFA",
      extrusion: "stack",
      view: "fixed"
    }
  },
  F = [{
    label: "Violet",
    value: "violet"
  }, {
    label: "Stack",
    value: "stack"
  }, {
    label: "Blueprint",
    value: "blueprint"
  }, {
    label: "Ember",
    value: "ember"
  }, {
    label: "Mono",
    value: "mono"
  }, {
    label: "Ink",
    value: "ink"
  }, {
    label: "Paper",
    value: "paper"
  }],
  j = [{
    label: "Solid",
    value: "solid"
  }, {
    label: "Stack",
    value: "stack"
  }],
  C = [{
    label: "Pointer",
    value: "pointer"
  }, {
    label: "Fixed",
    value: "fixed"
  }],
  M = [{
    label: "Parent",
    value: "parent"
  }, {
    label: "Self",
    value: "self"
  }],
  A = [{
    label: "Semibold",
    value: "600"
  }, {
    label: "Bold",
    value: "700"
  }, {
    label: "Black",
    value: "800"
  }],
  k = [{
    name: "text",
    type: "string",
    default: '"Raise the standard."',
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
    description: "Colour of the letter faces. Defaults to the surrounding text colour."
  }, {
    name: "colors",
    type: "string[]",
    default: '["#B19EEF", "#3A1DB8"]',
    description: "Two colours for the extrusion. Solid: a gradient from the edge nearest the letter to the deepest point. Stack: the outline of each plate, then its fill."
  }, {
    name: "extrusion",
    type: '"solid" | "stack"',
    default: '"solid"',
    description: "A smooth solid extrusion, or a stack of separate outlined plates."
  }, {
    name: "plates",
    type: "number",
    default: "7",
    description: "Maximum number of plates in the stack at full lift, from 1 to 16."
  }, {
    name: "lift",
    type: "number",
    default: "0.5",
    description: "How high the letters under the pointer rise, relative to the font size."
  }, {
    name: "radius",
    type: "number",
    default: "1.4",
    description: "Size of the area around the pointer that lifts, relative to the font size."
  }, {
    name: "view",
    type: '"pointer" | "fixed"',
    default: '"pointer"',
    description: "Pointer: the letters are seen in perspective from above the pointer, so the sides you see change as it moves. Fixed: every letter extrudes in the same direction, set by angle."
  }, {
    name: "perspective",
    type: "number",
    default: "1.3",
    description: "Strength of the perspective, which sets how long the extrusions get."
  }, {
    name: "angle",
    type: "number",
    default: "35",
    description: "Direction the extrusions point in fixed view, in degrees. 0 points right, 90 points down."
  }, {
    name: "stiffness",
    type: "number",
    default: "1",
    description: "Stiffness of the springs lifting each letter. Higher values respond faster."
  }, {
    name: "damping",
    type: "number",
    default: "0.5",
    description: "Damping of the springs. Lower values overshoot and bounce more."
  }, {
    name: "pop",
    type: "number",
    default: "1",
    description: "Strength of the jump a click gives the letters around it. 0 turns it off."
  }, {
    name: "shadow",
    type: "number",
    default: "0.6",
    description: "Soft contact shadow under raised letters, from 0 to 1."
  }, {
    name: "intro",
    type: "boolean",
    default: "true",
    description: "A lift sweeps once through the text the first time it scrolls into view."
  }, {
    name: "area",
    type: '"parent" | "self"',
    default: '"parent"',
    description: "Where the pointer is followed: anywhere over the parent element, or only over the text."
  }, {
    name: "paused",
    type: "boolean",
    default: "false",
    description: "Holds the letters flat. Reduced-motion users always get this."
  }, {
    name: "ref",
    type: "{ wave, pop }",
    default: "—",
    description: "Imperative controls: sweep a lift through the text, or make the letters jump from a point."
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
  E = () => {
    let [e, t] = (0, __mod_90761.I)(),
      n = (0, __mod_86049.Y)(),
      [l, d] = (0, React.useState)(null),
      p = l ?? ("dark" === n ? "violet" : "ink"),
      [u, h] = (0, React.useState)({}),
      c = {
        ...(S[p] ?? S.violet),
        ...u
      },
      [f, m] = (0, React.useState)("Raise the standard."),
      [x, v] = (0, React.useState)(96),
      [g, y] = (0, React.useState)("700"),
      [b, E] = (0, React.useState)(7),
      [I, $] = (0, React.useState)(.5),
      [P, B] = (0, React.useState)(1.4),
      [z, R] = (0, React.useState)(1.3),
      [N, T] = (0, React.useState)(35),
      [D, L] = (0, React.useState)(1),
      [W, H] = (0, React.useState)(.5),
      [U, q] = (0, React.useState)(1),
      [O, X] = (0, React.useState)(.6),
      [Y, V] = (0, React.useState)("parent"),
      [_, G] = (0, React.useState)(!0),
      [J, K] = (0, React.useState)(!1),
      [Q, Z] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={500} enableResponsive={!0}><div className="flex h-full w-full items-center justify-center px-6 py-12 text-center sm:px-10"><w as="h2" text={f} color={c.color} colors={[c.near, c.far]} extrusion={c.extrusion} plates={b} lift={I} radius={P} view={c.view} perspective={z} angle={N} stiffness={D} damping={W} pop={U} shadow={O} intro={_} area={Y} paused={Q} style={{
                fontSize: `min(${x}px, 12vw)`,
                fontWeight: Number(g),
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                textTransform: J ? "uppercase" : void 0
              }} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Preset" value={p} options={F} onChange={e => {
              d(e), h({});
            }} /><__mod_56388.UD title="Text" value={f} onChange={m} /><__mod_56388.W7 title="Color" value={c.color} onChange={e => h(t => ({
              ...t,
              color: e
            }))} /><__mod_56388.W7 title="Near" value={c.near} onChange={e => h(t => ({
              ...t,
              near: e
            }))} /><__mod_56388.W7 title="Far" value={c.far} onChange={e => h(t => ({
              ...t,
              far: e
            }))} /><__mod_56388.yt title="Font Size" min={24} max={180} step={1} value={x} valueUnit="px" onChange={v} /><__mod_56388.bg title="Weight" value={g} options={A} onChange={y} /><__mod_56388.bg title="Extrusion" value={c.extrusion} options={j} onChange={e => h(t => ({
              ...t,
              extrusion: e
            }))} /><__mod_56388.yt title="Plates" min={1} max={16} step={1} value={b} onChange={E} /><__mod_56388.bg title="View" value={c.view} options={C} onChange={e => h(t => ({
              ...t,
              view: e
            }))} /><__mod_56388.yt title="Lift" min={0} max={1.5} step={.01} value={I} onChange={$} /><__mod_56388.yt title="Radius" min={.3} max={5} step={.05} value={P} onChange={B} /><__mod_56388.yt title="Perspective" min={0} max={3} step={.05} value={z} onChange={R} /><__mod_56388.yt title="Angle" min={0} max={360} step={1} value={N} valueUnit="\xb0" onChange={T} /><__mod_56388.yt title="Stiffness" min={.2} max={3} step={.05} value={D} onChange={L} /><__mod_56388.yt title="Damping" min={.1} max={1.5} step={.01} value={W} onChange={H} /><__mod_56388.yt title="Pop" min={0} max={3} step={.05} value={U} onChange={q} /><__mod_56388.yt title="Shadow" min={0} max={1} step={.01} value={O} onChange={X} /><__mod_56388.bg title="Area" value={Y} options={M} onChange={e => V(e)} /><__mod_56388.tl title="Intro" checked={_} onChange={G} /><__mod_56388.tl title="Uppercase" checked={J} onChange={K} /><__mod_56388.tl title="Paused" checked={Q} onChange={Z} /></__mod_56388.IH><__mod_56388.Ub data={k} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default E;
