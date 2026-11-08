import { motion, AnimatePresence } from "motion/react";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_26 from "../_helpers/26";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Tilted Tiles
 * A tilted wall of image columns scrolling past
 * slug: tilted-tiles
 * category: grid
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = ["https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop"],
  f = [[0, 0], [.153, .02], [.171, .035], [.243, .075], [.35, .15], [.5, .3], [1, 1]],
  g = e => {
    let t = Math.imul(0x9e3779b9 ^ e, 0x85ebca6b);
    return t ^= t >>> 13, ((t = Math.imul(t, 0xc2b2ae35)) ^ t >>> 16) >>> 0;
  },
  x = ({
    sources: e,
    progress: t,
    rising: a,
    lead: s,
    gap: i,
    aspect: u,
    radius: p,
    repeats: c
  }) => {
    let d = 100 / c,
      m = (0, __mod_32923.G)(t, e => `${(a ? -e : e - 1) * d}%`),
      h = (0, React.useMemo)(() => Array.from({
        length: c
      }, () => e).flat(), [c, e]);
    return <div className="overflow-hidden" style={{
      paddingTop: `${s}%`
    }}><motion.div className="flex flex-col" style={{
        y: m,
        rowGap: i
      }}>{h.map((e, t) => <div className="w-full shrink-0 bg-neutral-200 bg-cover bg-center bg-no-repeat dark:bg-neutral-800" style={{
          aspectRatio: u,
          borderRadius: p,
          backgroundImage: `url(${e})`
        }} />)}</motion.div></div>;
  },
  b = ({
    images: e = h,
    columns: t = 16,
    tilesPerColumn: a = 5,
    tileAspect: s = 1,
    rowGap: i = 8,
    columnGap: b = 8,
    borderRadius: v = 0,
    perspective: y = 1600,
    rotateX: C = 40,
    rotateY: j = 16,
    rotateZ: w = -20,
    offsetX: S = -40,
    offsetY: M = 0,
    offsetZ: P = 0,
    planeWidth: k = 280,
    planeHeight: G = 260,
    stagger: $ = 20,
    duration: N = 25,
    alternate: R = !0,
    fadeTop: E = 22,
    fadeBottom: H = 0,
    parallax: T = !0,
    parallaxStrength: I = 8,
    pauseOnHover: q = !1,
    saturation: A = 1,
    width: W = "100%",
    height: X = "100%",
    className: D
  }) => {
    let z = (0, __mod_50969.I)() ?? !1,
      Y = (0, __mod_75272.d)(0),
      O = (0, React.useRef)(!1);
    (0, __mod_26.N)((e, t) => {
      if (O.current || z) return;
      let a = Math.max(N, .5),
        n = Y.get() + t / 1e3 / a;
      Y.set(n - Math.floor(n));
    });
    let B = (0, __mod_17192.z)(0, {
        stiffness: 70,
        damping: 18,
        mass: .6
      }),
      F = (0, __mod_17192.z)(0, {
        stiffness: 70,
        damping: 18,
        mass: .6
      }),
      V = (0, __mod_32923.G)(B, e => C + e),
      Q = (0, __mod_32923.G)(F, e => j + e),
      U = (0, React.useCallback)(({
        rotateX: e,
        rotateY: t,
        rotate: a,
        x: n,
        y: r,
        z: s
      }) => `translate(-50%, -50%) rotateX(${e}) rotateY(${t}) rotate(${a}) translate3d(${n}, ${r}, ${s})`, []),
      Z = (0, React.useCallback)(e => {
        if (!T) return;
        let t = e.currentTarget.getBoundingClientRect(),
          a = (e.clientX - t.left) / t.width - .5,
          n = (e.clientY - t.top) / t.height - .5;
        F.set(a * I * 2), B.set(-n * I * 2);
      }, [B, F, T, I]),
      _ = (0, React.useCallback)(() => {
        O.current = !1, B.set(0), F.set(0);
      }, [B, F]),
      L = (0, React.useMemo)(() => {
        let n = e.length ? e : h,
          r = Math.max(a, 2),
          s = (e => {
            let t = (e, a) => a ? t(a, e % a) : e,
              a = [];
            for (let n = 1; n < e; n += 1) 1 === t(n, e) && a.push(n);
            return a.length ? a : [1];
          })(n.length);
        return Array.from({
          length: Math.max(t, 1)
        }, (e, t) => {
          let a = g(t) % n.length,
            i = s[g(2 * t + 1) % s.length];
          return Array.from({
            length: r
          }, (e, t) => n[(a + t * i) % n.length]);
        });
      }, [t, e, a]),
      J = (0, React.useRef)(null),
      [K, ee] = (0, React.useState)({
        column: 0,
        height: 0
      });
    (0, React.useEffect)(() => {
      let e = J.current;
      if (!e) return;
      let a = Math.max(t, 1),
        n = new ResizeObserver(() => {
          ee({
            column: (e.clientWidth - b * (a - 1)) / a,
            height: e.clientHeight
          });
        });
      return n.observe(e), () => n.disconnect();
    }, [b, t]);
    let et = (0, React.useMemo)(() => {
        let e = Math.max(a, 2) * (K.column / Math.max(s, .05) + i);
        return e && K.height ? Math.min(Math.max(Math.ceil(K.height / e) + 1, 2), 10) : 2;
      }, [K.column, K.height, i, s, a]),
      ea = (0, React.useMemo)(() => ((e, t) => {
        if (e <= 0 && t <= 0) return;
        let a = [];
        return e > 0 ? f.forEach(([t, n]) => {
          a.push(`rgb(0 0 0 / ${n}) ${(t * e).toFixed(3)}%`);
        }) : a.push("rgb(0 0 0 / 1) 0%"), t > 0 ? [...f].reverse().forEach(([e, n]) => {
          a.push(`rgb(0 0 0 / ${n}) ${(100 - e * t).toFixed(3)}%`);
        }) : a.push("rgb(0 0 0 / 1) 100%"), `linear-gradient(to bottom, ${a.join(", ")})`;
      })(E, H), [H, E]);
    return <div className={(0, __mod_90650.cn)("relative overflow-hidden", D)} style={{
      width: W,
      height: X,
      perspective: y,
      maskImage: ea,
      WebkitMaskImage: ea,
      filter: 1 === A ? void 0 : `saturate(${A})`
    }} onPointerMove={Z} onPointerEnter={() => {
      q && (O.current = !0);
    }} onPointerLeave={_}><motion.div ref={J} className="absolute left-1/2 top-1/2 grid" transformTemplate={U} style={{
        width: `${k}%`,
        height: `${G}%`,
        gridTemplateColumns: `repeat(${Math.max(t, 1)}, minmax(0, 1fr))`,
        columnGap: b,
        rotateX: V,
        rotateY: Q,
        rotate: w,
        x: S,
        y: M,
        z: P
      }}>{L.map((e, t) => <XView sources={e} progress={Y} rising={!R || t % 2 == 0} lead={$ * (2 - t % 3)} gap={i} aspect={s} radius={v} repeats={et}/>)}</motion.div></div>;
  },
  v = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, o] = (0, React.useState)(16),
      [l, u] = (0, React.useState)(5),
      [p, c] = (0, React.useState)(8),
      [d, m] = (0, React.useState)(8),
      [h, f] = (0, React.useState)(0),
      [g, x] = (0, React.useState)(1600),
      [v, y] = (0, React.useState)(40),
      [C, j] = (0, React.useState)(16),
      [w, S] = (0, React.useState)(-20),
      [M, P] = (0, React.useState)(280),
      [k, G] = (0, React.useState)(20),
      [$, N] = (0, React.useState)(25),
      [R, E] = (0, React.useState)(22),
      [H, T] = (0, React.useState)(1),
      [I, q] = (0, React.useState)(!0),
      [A, W] = (0, React.useState)(!0),
      [X, D] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="relative h-full w-full"><BView columns={a} tilesPerColumn={l} rowGap={p} columnGap={d} borderRadius={h} perspective={g} rotateX={v} rotateY={C} rotateZ={w} planeWidth={M} stagger={k} duration={$} fadeTop={R} saturation={H} alternate={I} parallax={A} pauseOnHover={X}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Columns" min={2} max={24} step={1} value={a} onChange={e => {
              o(e), t();
            }} /><__mod_56388.yt title="Tiles Per Column" min={3} max={10} step={1} value={l} onChange={e => {
              u(e), t();
            }} /><__mod_56388.yt title="Duration" min={5} max={60} step={1} value={$} onChange={N} /><__mod_56388.yt title="Rotate X" min={0} max={75} step={1} value={v} onChange={y} /><__mod_56388.yt title="Rotate Y" min={-45} max={45} step={1} value={C} onChange={j} /><__mod_56388.yt title="Rotate Z" min={-60} max={60} step={1} value={w} onChange={S} /><__mod_56388.yt title="Perspective" min={400} max={2500} step={50} value={g} onChange={x} /><__mod_56388.yt title="Plane Width" min={100} max={400} step={5} value={M} onChange={P} /><__mod_56388.yt title="Stagger" min={0} max={60} step={1} value={k} onChange={G} /><__mod_56388.yt title="Row Gap" min={0} max={40} step={1} value={p} onChange={c} /><__mod_56388.yt title="Column Gap" min={0} max={40} step={1} value={d} onChange={m} /><__mod_56388.yt title="Border Radius" min={0} max={32} step={1} value={h} onChange={f} /><__mod_56388.yt title="Fade Top" min={0} max={60} step={1} value={R} onChange={E} /><__mod_56388.yt title="Saturation" min={0} max={2} step={.05} value={H} onChange={T} /><__mod_56388.tl title="Alternate Direction" checked={I} onChange={q} /><__mod_56388.tl title="Parallax" checked={A} onChange={W} /><__mod_56388.tl title="Pause On Hover" checked={X} onChange={D} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "images",
            type: "string[]",
            default: "10 photos",
            description: "Image sources tiled across the plane."
          }, {
            name: "columns",
            type: "number",
            default: "16",
            description: "Number of scrolling columns."
          }, {
            name: "tilesPerColumn",
            type: "number",
            default: "5",
            description: "Tiles rendered per column before the loop repeats."
          }, {
            name: "tileAspect",
            type: "number",
            default: "1",
            description: "Width divided by height of a single tile."
          }, {
            name: "rowGap",
            type: "number",
            default: "8",
            description: "Vertical space between tiles in pixels."
          }, {
            name: "columnGap",
            type: "number",
            default: "8",
            description: "Horizontal space between columns in pixels."
          }, {
            name: "borderRadius",
            type: "number",
            default: "0",
            description: "Corner radius of each tile in pixels."
          }, {
            name: "perspective",
            type: "number",
            default: "1600",
            description: "Perspective depth of the scene in pixels."
          }, {
            name: "rotateX",
            type: "number",
            default: "40",
            description: "Degrees the plane leans back."
          }, {
            name: "rotateY",
            type: "number",
            default: "16",
            description: "Degrees the plane turns sideways."
          }, {
            name: "rotateZ",
            type: "number",
            default: "-20",
            description: "Degrees the plane spins within its own surface."
          }, {
            name: "offsetX",
            type: "number",
            default: "-40",
            description: "Horizontal shift of the plane in pixels."
          }, {
            name: "offsetY",
            type: "number",
            default: "0",
            description: "Vertical shift of the plane in pixels."
          }, {
            name: "offsetZ",
            type: "number",
            default: "0",
            description: "Depth shift of the plane in pixels."
          }, {
            name: "planeWidth",
            type: "number",
            default: "280",
            description: "Plane width as a percentage of the container."
          }, {
            name: "planeHeight",
            type: "number",
            default: "260",
            description: "Plane height as a percentage of the container."
          }, {
            name: "stagger",
            type: "number",
            default: "20",
            description: "Head start given to alternating columns, as a percentage of column width."
          }, {
            name: "duration",
            type: "number",
            default: "25",
            description: "Seconds a column takes to travel one full loop."
          }, {
            name: "alternate",
            type: "boolean",
            default: "true",
            description: "Send every other column in the opposite direction."
          }, {
            name: "fadeTop",
            type: "number",
            default: "22",
            description: "Height of the top fade as a percentage of the plane."
          }, {
            name: "fadeBottom",
            type: "number",
            default: "0",
            description: "Height of the bottom fade as a percentage of the plane."
          }, {
            name: "parallax",
            type: "boolean",
            default: "true",
            description: "Let the pointer steer the plane."
          }, {
            name: "parallaxStrength",
            type: "number",
            default: "8",
            description: "Maximum degrees the pointer can add to the tilt."
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "false",
            description: "Halt the scroll while the pointer rests on the plane."
          }, {
            name: "saturation",
            type: "number",
            default: "1",
            description: "Saturation of the tiles, where 1 is untouched."
          }, {
            name: "width",
            type: "number | string",
            default: '"100%"',
            description: "Width of the container."
          }, {
            name: "height",
            type: "number | string",
            default: '"100%"',
            description: "Height of the container."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const XView: any = x;
const BView: any = b;

export default v;
