import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Circle Stack
 * A tilted stack of circles that cycles through your images
 * slug: circle-stack
 * category: carousel
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
    id: "circle-stack-1",
    image: "/demo-media/abstract-iris-window.webp",
    alt: "Pink rounded arch framing a warm orange gradient on an iris-purple field"
  }, {
    id: "circle-stack-2",
    image: "/demo-media/abstract-citrus-signal.webp",
    alt: "Citrus circle intersected by a hot-pink diagonal bar on saturated violet"
  }, {
    id: "circle-stack-3",
    image: "/demo-media/abstract-rose-petal.webp",
    alt: "Three overlapping raspberry, plum and coral semicircles on a grainy pink field"
  }],
  c = ({
    items: e = o,
    size: t = 410,
    tilt: a = 60,
    stackGap: n = 45,
    interval: s = 4,
    transitionDuration: l = .9,
    paused: c = !1,
    surfaceColor: u = "#FFFFFF",
    borderColor: m = "#000000",
    borderWidth: p = 1,
    className: h,
    style: f,
    onActiveChange: v
  }) => {
    let x = Math.max(1, e.length),
      [b, g] = (0, React.useState)(0);
    (0, React.useEffect)(() => {
      if (c || x <= 1) return;
      let e = window.setInterval(() => {
        g(e => {
          let t = (e + 1) % x;
          return v?.(t), t;
        });
      }, 1e3 * Math.max(.2, s));
      return () => window.clearInterval(e);
    }, [c, x, s]);
    let y = t + (x - 1) * n,
      C = {
        width: t + 80,
        height: y + 40,
        perspective: 8 * t,
        ...f
      },
      j = t * Math.cos(a * Math.PI / 180) * .6;
    return <div className={(0, __mod_90650.cn)("relative flex select-none items-center justify-center", h)} style={C} role="group" aria-label="Disc stack"><div className="relative [transform-style:preserve-3d]" style={{
        width: t,
        height: y
      }}>{e.map((e, r) => {
          let s = r === b,
            d = r * n,
            o = r < b ? d - j : d;
          return <div className="absolute left-1/2 top-1/2 overflow-hidden rounded-full" style={{
            width: t,
            height: t,
            marginLeft: -t / 2,
            marginTop: -t / 2,
            transform: `translateY(${o}px) rotateX(${a}deg)`,
            transformStyle: "preserve-3d",
            zIndex: x - r,
            background: u,
            border: `${p}px solid ${m}`,
            transition: `transform ${l}s cubic-bezier(0.22, 1, 0.36, 1)`
          }}><img src={e.image} alt={e.alt ?? ""} draggable={!1} className="h-full w-full select-none object-cover" style={{
              opacity: +!!s,
              transition: "opacity 0.3s ease"
            }} /></div>;
        })}</div></div>;
  },
  u = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      [d, o] = (0, React.useState)(410),
      [u, m] = (0, React.useState)(60),
      [p, h] = (0, React.useState)(45),
      [f, v] = (0, React.useState)(2),
      [x, b] = (0, React.useState)(4),
      [g, y] = (0, React.useState)(.9),
      [C, j] = (0, React.useState)(!1),
      [w, S] = (0, React.useState)(null),
      [F, k] = (0, React.useState)(null),
      N = (0, React.useMemo)(() => null !== w ? w : "dark" === a ? "#0a0a0a" : "#FFFFFF", [a, w]),
      I = (0, React.useMemo)(() => null !== F ? F : "dark" === a ? "#FFFFFF" : "#000000", [a, F]);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={620}><div className="relative h-full w-full"><CView size={d} tilt={u} stackGap={p} borderWidth={f} interval={x} transitionDuration={g} paused={C} surfaceColor={N} borderColor={I} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Disc Size" min={180} max={480} step={10} value={d} onChange={o} valueUnit="px" /><__mod_56388.yt title="Tilt" min={0} max={85} step={1} value={u} onChange={m} valueUnit="\xb0" /><__mod_56388.yt title="Stack Gap" min={0} max={80} step={1} value={p} onChange={h} valueUnit="px" /><__mod_56388.yt title="Border Width" min={0} max={8} step={1} value={f} onChange={v} valueUnit="px" /><__mod_56388.yt title="Interval" min={1} max={10} step={.5} value={x} onChange={b} valueUnit="s" /><__mod_56388.yt title="Transition Duration" min={.2} max={2} step={.05} value={g} onChange={y} valueUnit="s" /><__mod_56388.tl title="Paused" checked={C} onChange={j} /><__mod_56388.W7 title="Surface Color" value={N} onChange={S} /><__mod_56388.W7 title="Border Color" value={I} onChange={k} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "items",
            type: "CircleStackItem[]",
            default: "3 sample images",
            description: "Discs to render. Each item: { id?, image, alt? }."
          }, {
            name: "size",
            type: "number",
            default: "410",
            description: "Diameter of each disc in pixels."
          }, {
            name: "tilt",
            type: "number",
            default: "60",
            description: "Disc tilt in degrees. 0 = flat circle, 90 = edge-on."
          }, {
            name: "stackGap",
            type: "number",
            default: "45",
            description: "Vertical separation between adjacent discs in pixels."
          }, {
            name: "interval",
            type: "number",
            default: "4",
            description: "Seconds between active-index advances."
          }, {
            name: "transitionDuration",
            type: "number",
            default: "0.9",
            description: "Seconds for the lift / settle transition."
          }, {
            name: "paused",
            type: "boolean",
            default: "false",
            description: "Pause the auto-cycle."
          }, {
            name: "surfaceColor",
            type: "string",
            default: '"#FFFFFF"',
            description: "CSS color for the disc surface (top face)."
          }, {
            name: "borderColor",
            type: "string",
            default: '"#000000"',
            description: "CSS color for the disc border ring."
          }, {
            name: "borderWidth",
            type: "number",
            default: "1",
            description: "Border thickness in pixels."
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Class applied to the root element."
          }, {
            name: "style",
            type: "CSSProperties",
            default: "undefined",
            description: "Inline style applied to the root element."
          }, {
            name: "onActiveChange",
            type: "(index: number) => void",
            default: "undefined",
            description: "Fires when the active disc index changes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const CView: any = c;

export default u;
