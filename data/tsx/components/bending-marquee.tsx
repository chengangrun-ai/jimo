import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Bending Marquee
 * A marquee that bends along a curve as it scrolls
 * slug: bending-marquee
 * category: marquee
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = ["designed in the open", "shipped every week", "built for the web"],
  u = Math.PI / 180,
  p = ({
    items: e,
    separator: t,
    gap: n,
    sway: i,
    spin: s
  }) => <div className="flex shrink-0 items-center" style={{
    gap: n
  }}>{(Array.isArray(e) ? e : d).map((e, r) => <span className="flex shrink-0 items-center whitespace-nowrap" style={{
      gap: n
    }}><span className="inline-block" style={i > 0 ? {
        animation: `${s} 1.6s ease-in-out infinite alternate`,
        animationDelay: `${-.4 * r}s`
      } : void 0}>{t}</span><span>{e}</span></span>)}</div>,
  c = ({
    items: e = d,
    separator: t = "✳︎",
    panelWidth: n = 420,
    panelHeight: s = 520,
    bend: r = 50,
    depth: l = -200,
    perspective: c = 800,
    speed: h = 16,
    direction: m = "left",
    rows: f = 1,
    rowGap: g = 22,
    itemGap: x = 26,
    bandPadding: v = 18,
    fontSize: y = 34,
    fontWeight: b = 600,
    letterSpacing: w = 1,
    color: j = "#fafafa",
    bandColor: S = "#111111",
    markSway: C = 14,
    pauseOnHover: k = !0,
    pauseDamping: N = .7,
    fit: P = !0,
    maxScale: M = 1,
    className: R,
    style: $
  }) => {
    let E = (0, React.useRef)(null),
      D = (0, React.useRef)(null),
      H = (0, React.useRef)(null),
      F = (0, React.useRef)(1),
      T = (0, React.useRef)(0),
      [z, I] = (0, React.useState)(0),
      [W, A] = (0, React.useState)({
        width: 0,
        height: 0
      }),
      G = (0, React.useId)().replace(/[^a-zA-Z0-9]/g, ""),
      O = `bmRun${G}`,
      B = `bmSway${G}`,
      L = (e && e.length > 0) ? e : d,
      U = Math.max(Math.round(f), 1);
    (0, React.useEffect)(() => {
      let e = D.current;
      if (!e) return;
      let t = new ResizeObserver(e => {
        let t = e[0]?.contentRect;
        t && 0 !== t.width && I(t.width + x);
      });
      return t.observe(e), () => t.disconnect();
    }, [x]), (0, React.useEffect)(() => {
      let e = E.current;
      if (!e) return;
      let t = new ResizeObserver(e => {
        let t = e[0]?.contentRect;
        t && A({
          width: t.width,
          height: t.height
        });
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let V = (0, React.useMemo)(() => {
        if (!P || 0 === W.height) return M;
        let e = Math.min(M, W.height / s);
        return Number.isFinite(e) && e > 0 ? e : M;
      }, [P, M, W.height, s]),
      _ = (0, React.useMemo)(() => {
        let e = W.width > 0 ? W.width / 2 : n,
          t = r * u,
          a = Math.cos(t),
          i = Math.sin(t),
          s = c - l,
          o = n / 2 * V,
          d = n,
          p = V * c * a + e * i;
        return p > 0 && (d = (e * s - V * c * o) / p), i > 0 && (d = Math.min(d, .82 * s / i)), Math.min(Math.max(1.12 * d, .5 * n, 120), 6e3);
      }, [W.width, n, r, c, l, V]),
      q = (0, React.useMemo)(() => [{
        id: "west",
        width: _ + 1,
        tilt: r,
        origin: "right center",
        nudge: {
          marginRight: -1
        },
        offset: -_
      }, {
        id: "core",
        width: n,
        tilt: 0,
        origin: "center",
        nudge: {},
        offset: 0
      }, {
        id: "east",
        width: _ + 1,
        tilt: -r,
        origin: "left center",
        nudge: {
          marginLeft: -1
        },
        offset: n - 1
      }], [n, _, r]),
      X = (0, React.useCallback)(e => {
        let t = H.current;
        if (!t) return;
        cancelAnimationFrame(T.current);
        let n = t.getAnimations({
          subtree: !0
        });
        if (0 === n.length) return;
        let a = F.current,
          i = 1e3 * Math.max(N, 0);
        if (0 === i) {
          F.current = e, n.forEach(t => t.playbackRate = e);
          return;
        }
        let s = performance.now(),
          r = t => {
            let l = Math.min((t - s) / i, 1);
            F.current = a + l * l * (3 - 2 * l) * (e - a), n.forEach(e => e.playbackRate = F.current), l < 1 && (T.current = requestAnimationFrame(r));
          };
        T.current = requestAnimationFrame(r);
      }, [N]);
    (0, React.useEffect)(() => () => cancelAnimationFrame(T.current), []);
    let Z = `@keyframes ${O}{to{transform:translate3d(calc(var(--bm-unit) * -1),0,0)}}@keyframes ${B}{from{transform:rotate(${-C}deg)}to{transform:rotate(${C}deg)}}`;
    return <div ref={E} className={(0, __mod_90650.cn)("relative flex h-full w-full items-center justify-center overflow-hidden", R)} style={{
      perspective: `${c}px`,
      ...$
    }} onPointerEnter={() => k && X(0)} onPointerLeave={() => k && X(1)}><style>{Z}</style><div ref={D} className="pointer-events-none absolute flex items-center opacity-0" style={{
        left: -99999,
        top: 0,
        gap: x,
        fontSize: y,
        fontWeight: b,
        letterSpacing: w
      }} aria-hidden={!0}><PScene items={L} separator={t} gap={x} sway={0} spin={B} /></div><div ref={H} className="flex" style={{
        transformStyle: "preserve-3d",
        transform: `scale(${V})`
      }}>{q.map(e => <div className="relative shrink-0 overflow-hidden" style={{
          width: e.width,
          height: s,
          transformOrigin: e.origin,
          transform: `translateZ(${l}px) rotateY(${e.tilt}deg)`,
          ...e.nudge
        }}><div className="flex h-full w-full flex-col justify-center" style={{
            gap: g
          }}>{Array.from({
              length: U
            }).map((n, i) => {
              let s,
                r = i % 2 == 1,
                l = "left" === m ? r ? "right" : "left" : r ? "left" : "right",
                o = h * (1 + .14 * i),
                d = z > 0 ? (s = e.offset, (z > 0 ? (s % z + z) % z : 0) / z) : 0,
                u = z > 0 ? Math.ceil(e.width / z) + 2 : 3;
              return <div className="relative w-full overflow-hidden" style={{
                paddingTop: v,
                paddingBottom: v,
                background: S,
                color: j,
                fontSize: y,
                fontWeight: b,
                letterSpacing: w
              }}><div className="flex w-max items-center" style={{
                  gap: x,
                  paddingLeft: x,
                  "--bm-unit": `${z}px`,
                  animationName: z > 0 ? O : "none",
                  animationDuration: `${o}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDirection: "left" === l ? "normal" : "reverse",
                  animationDelay: `${-o * ("left" === l ? d : 1 - d)}s`,
                  willChange: "transform"
                }}>{Array.from({
                    length: u
                  }).map((e, n) => <PScene items={L} separator={t} gap={x} sway={C} spin={B} />)}</div></div>;
            })}</div></div>)}</div></div>;
  },
  h = () => () => {},
  m = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: n
      } = (0, __mod_30701.D)(),
      o = (0, React.useSyncExternalStore)(h, () => !0, () => !1) && "dark" === n,
      [d, u] = (0, React.useState)("✳︎"),
      [p, m] = (0, React.useState)(420),
      [f, g] = (0, React.useState)(520),
      [x, v] = (0, React.useState)(50),
      [y, b] = (0, React.useState)(-200),
      [w, j] = (0, React.useState)(800),
      [S, C] = (0, React.useState)(16),
      [k, N] = (0, React.useState)("left"),
      [P, M] = (0, React.useState)(1),
      [R, $] = (0, React.useState)(22),
      [E, D] = (0, React.useState)(26),
      [H, F] = (0, React.useState)(18),
      [T, z] = (0, React.useState)(34),
      [I, W] = (0, React.useState)(600),
      [A, G] = (0, React.useState)(1),
      [O, B] = (0, React.useState)(14),
      [L, U] = (0, React.useState)(!0),
      [V, _] = (0, React.useState)(.7),
      [q, X] = (0, React.useState)(!0),
      [Z, Y] = (0, React.useState)(1),
      [J, K] = (0, React.useState)(null),
      [Q, ee] = (0, React.useState)(null),
      et = (0, React.useMemo)(() => null !== J ? J : o ? "#0a0a0a" : "#ffffff", [o, J]),
      en = (0, React.useMemo)(() => null !== Q ? Q : o ? "#fafafa" : "#111111", [o, Q]);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={540}><div className="relative h-full w-full"><CScene separator={d} panelWidth={p} panelHeight={f} bend={x} depth={y} perspective={w} speed={S} direction={k} rows={P} rowGap={R} itemGap={E} bandPadding={H} fontSize={T} fontWeight={I} letterSpacing={A} color={et} bandColor={en} markSway={O} pauseOnHover={L} pauseDamping={V} fit={q} maxScale={Z} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Bend" min={0} max={80} step={1} value={x} onChange={v} /><__mod_56388.yt title="Depth" min={-600} max={0} step={10} value={y} onChange={b} /><__mod_56388.yt title="Perspective" min={300} max={2400} step={50} value={w} onChange={j} /><__mod_56388.yt title="Speed" min={3} max={40} step={.5} value={S} onChange={C} /><__mod_56388.yt title="Panel Width" min={200} max={700} step={10} value={p} onChange={m} /><__mod_56388.yt title="Panel Height" min={200} max={800} step={10} value={f} onChange={g} /><__mod_56388.yt title="Rows" min={1} max={5} step={1} value={P} onChange={M} /><__mod_56388.yt title="Row Gap" min={0} max={80} step={2} value={R} onChange={$} /><__mod_56388.yt title="Item Gap" min={8} max={80} step={2} value={E} onChange={D} /><__mod_56388.yt title="Band Padding" min={0} max={48} step={1} value={H} onChange={F} /><__mod_56388.yt title="Font Size" min={14} max={72} step={1} value={T} onChange={z} /><__mod_56388.yt title="Font Weight" min={300} max={800} step={100} value={I} onChange={W} /><__mod_56388.yt title="Letter Spacing" min={-2} max={8} step={.5} value={A} onChange={G} /><__mod_56388.yt title="Pause Damping" min={0} max={2} step={.05} value={V} onChange={_} /><__mod_56388.yt title="Mark Sway" min={0} max={45} step={1} value={O} onChange={B} /><__mod_56388.yt title="Max Scale" min={.3} max={2} step={.05} value={Z} onChange={Y} /><__mod_56388.bg title="Direction" value={k} onChange={e => N(e)} options={[{
              value: "left",
              label: "Left"
            }, {
              value: "right",
              label: "Right"
            }]} /><__mod_56388.UD title="Separator" value={d} onChange={u} /><__mod_56388.W7 title="Text Color" value={et} onChange={K} /><__mod_56388.W7 title="Band Color" value={en} onChange={ee} /><__mod_56388.tl title="Pause On Hover" checked={L} onChange={U} /><__mod_56388.tl title="Fit" checked={q} onChange={X} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "items",
            type: "string[]",
            default: "3 phrases",
            description: "Phrases repeated along the strip."
          }, {
            name: "separator",
            type: "string",
            default: '"✳"',
            description: "Glyph printed between phrases."
          }, {
            name: "panelWidth",
            type: "number",
            default: "420",
            description: "Width of the flat centre panel in pixels. The folded panels size themselves to reach the container edges."
          }, {
            name: "panelHeight",
            type: "number",
            default: "520",
            description: "Height of every panel in pixels."
          }, {
            name: "bend",
            type: "number",
            default: "50",
            description: "Angle the outer wings fold back by, in degrees."
          }, {
            name: "depth",
            type: "number",
            default: "-200",
            description: "How far the whole triptych sits behind the screen."
          }, {
            name: "perspective",
            type: "number",
            default: "800",
            description: "Perspective depth of the scene, in pixels."
          }, {
            name: "speed",
            type: "number",
            default: "16",
            description: "Seconds the strip takes to travel one full repeat."
          }, {
            name: "direction",
            type: '"left" | "right"',
            default: '"left"',
            description: "Travel direction of the strip."
          }, {
            name: "rows",
            type: "number",
            default: "1",
            description: "Number of stacked bands per panel. Extra bands alternate direction."
          }, {
            name: "rowGap",
            type: "number",
            default: "22",
            description: "Vertical space between bands in pixels."
          }, {
            name: "itemGap",
            type: "number",
            default: "26",
            description: "Horizontal space between phrases in pixels."
          }, {
            name: "bandPadding",
            type: "number",
            default: "18",
            description: "Vertical padding inside a band in pixels."
          }, {
            name: "fontSize",
            type: "number",
            default: "34",
            description: "Font size of the phrases in pixels."
          }, {
            name: "fontWeight",
            type: "number",
            default: "600",
            description: "Font weight of the phrases."
          }, {
            name: "letterSpacing",
            type: "number",
            default: "1",
            description: "Letter spacing of the phrases in pixels."
          }, {
            name: "color",
            type: "string",
            default: '"#fafafa"',
            description: "Text colour."
          }, {
            name: "bandColor",
            type: "string",
            default: '"#111111"',
            description: "Solid fill behind each band."
          }, {
            name: "markSway",
            type: "number",
            default: "14",
            description: "Degrees the separator rocks back and forth."
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "true",
            description: "Ease the strip to a halt while the pointer is over the scene."
          }, {
            name: "pauseDamping",
            type: "number",
            default: "0.7",
            description: "Seconds the strip takes to settle when hover starts or ends."
          }, {
            name: "fit",
            type: "boolean",
            default: "true",
            description: "Scale the triptych so the panels fill the container height."
          }, {
            name: "maxScale",
            type: "number",
            default: "1",
            description: "Upper bound applied to the fit scale."
          }, {
            name: "className",
            type: "string",
            default: "-",
            description: "Optional className applied to the root."
          }, {
            name: "style",
            type: "CSSProperties",
            default: "-",
            description: "Optional inline style applied to the root."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const PScene: any = p;
const CScene: any = c;

export default m;
