import { motion, AnimatePresence } from "motion/react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Page Flip
 * A book-style page flip you can drag through
 * slug: page-flip
 * category: book
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = {
    easeInOut: [.65, 0, .35, 1],
    easeOut: [.16, 1, .3, 1],
    circOut: [0, .55, .45, 1],
    backOut: [.34, 1.56, .64, 1]
  },
  h = [{
    id: "atrium",
    front: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700&auto=format&fit=crop",
    frontAlt: "Glass atrium seen from below",
    backAlt: "Corporate tower against an open sky"
  }, {
    id: "vault",
    front: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=700&auto=format&fit=crop",
    frontAlt: "White concrete facade in daylight",
    backAlt: "Repeating window lattice on a high rise"
  }, {
    id: "terrace",
    front: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=700&auto=format&fit=crop",
    frontAlt: "Terraced building stepping into the sky",
    backAlt: "Row of arches along a shaded walkway"
  }, {
    id: "canopy",
    front: "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=700&auto=format&fit=crop",
    frontAlt: "Steel canopy over a public square",
    backAlt: "Concrete stairwell curving upward"
  }, {
    id: "ridge",
    front: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=700&auto=format&fit=crop",
    frontAlt: "Roofline ridge cutting across the skyline",
    backAlt: "Modern house framed by clean geometry"
  }],
  f = (0, React.memo)(function ({
    index: e,
    total: t,
    front: a,
    back: r,
    frontAlt: o,
    backAlt: s,
    turned: i,
    peek: d,
    delay: p,
    width: h,
    height: f,
    radius: m,
    paper: g,
    turnAngle: b,
    peekAngle: v,
    duration: x,
    curve: y,
    shadow: k,
    interactive: w,
    onSelect: C,
    onReach: j,
    onRelease: S
  }) {
    let O = (0, __mod_75272.d)(0),
      A = (0, __mod_32923.G)(O, a => a < -b / 2 ? t + e + 1 : t - e);
    return <motion.div className="absolute" style={{
      width: h,
      height: f,
      rotateY: O,
      zIndex: A,
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      borderRadius: m,
      cursor: w ? "pointer" : "default",
      boxShadow: k > 0 ? `${Math.round(4 * k)}px ${Math.round(6 * k)}px ${Math.round(34 * k)}px rgba(0,0,0,${Math.min(.75 * k, 1)})` : "none"
    }} animate={{
      rotateY: i ? -b : d ? -v : 0
    }} transition={{
      duration: x,
      delay: p,
      ease: y
    }} onPointerEnter={() => j(e)} onPointerLeave={S} onClick={t => {
      t.stopPropagation(), C(e);
    }} onKeyDown={t => {
      ("Enter" === t.key || " " === t.key) && (t.preventDefault(), C(e));
    }} role={w ? "button" : void 0} aria-pressed={w ? i : void 0} tabIndex={w ? 0 : -1}><img src={a} alt={o} draggable={!1} className="absolute inset-0 h-full w-full object-cover" style={{
        background: g,
        borderRadius: m,
        backfaceVisibility: "hidden"
      }} /><img src={r} alt={s} draggable={!1} className="absolute inset-0 h-full w-full object-cover" style={{
        background: g,
        borderRadius: m,
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg) translateZ(1px)"
      }} /></motion.div>;
  }),
  m = ({
    pages: e = h,
    pageWidth: t = 220,
    pageHeight: a = 320,
    pageRadius: o = 4,
    pageColor: s = "#f4f4f4",
    perspective: i = 1200,
    spineShift: l = 110,
    turnAngle: u = 180,
    peekAngle: m = 10,
    duration: g = .55,
    stagger: b = .08,
    ease: v = "easeInOut",
    shadow: x = .3,
    trigger: y = "click",
    closeOnLeave: k = !0,
    interactive: w = !0,
    className: C,
    style: j
  }) => {
    let S = e.length > 0 ? e : h,
      O = S.length,
      [A, P] = (0, React.useState)(0),
      [E, I] = (0, React.useState)(-1),
      [N, R] = (0, React.useState)(!1),
      q = p[v] ?? p.easeInOut,
      H = (0, React.useCallback)(e => {
        w && (R(!1), P(t => e < t ? e : e + 1));
      }, [w]),
      M = (0, React.useCallback)(e => {
        w && (I(e), "hover" === y && (R(!1), P(e + 1)));
      }, [w, y]),
      L = (0, React.useCallback)(() => {
        I(-1);
      }, []),
      T = (0, React.useCallback)(() => {
        R(!0), P(0);
      }, []);
    return <div className={(0, __mod_90650.cn)("relative flex h-full w-full items-center justify-center overflow-hidden", C)} style={{
      perspective: `${i}px`,
      ...j
    }} onClick={T} onPointerLeave={() => {
      I(-1), k && T();
    }}><motion.div className="relative" style={{
        width: t,
        height: a,
        perspective: `${i}px`,
        transformStyle: "preserve-3d"
      }} animate={{
        x: A > 0 ? l : 0
      }} transition={{
        duration: Math.max(.8 * g, .1),
        ease: "easeOut"
      }}>{S.map((e, r) => {
          let i = r < A;
          return <f index={r} total={O} front={e.front} back={e.back} frontAlt={e.frontAlt ?? ""} backAlt={e.backAlt ?? ""} turned={i} peek={w && !i && E === r && r === A} delay={N && !i ? (O - 1 - r) * b : 0} width={t} height={a} radius={o} paper={s} turnAngle={u} peekAngle={m} duration={g} curve={q} shadow={x} interactive={w} onSelect={H} onReach={M} onRelease={L} />;
        })}</motion.div></div>;
  },
  g = () => () => {},
  b = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: a
      } = (0, __mod_30701.D)(),
      l = (0, React.useSyncExternalStore)(g, () => !0, () => !1) && "dark" === a,
      [u, c] = (0, React.useState)(220),
      [d, p] = (0, React.useState)(320),
      [h, f] = (0, React.useState)(4),
      [b, v] = (0, React.useState)(1200),
      [x, y] = (0, React.useState)(110),
      [k, w] = (0, React.useState)(180),
      [C, j] = (0, React.useState)(10),
      [S, O] = (0, React.useState)(.55),
      [A, P] = (0, React.useState)(.08),
      [E, I] = (0, React.useState)("easeInOut"),
      [N, R] = (0, React.useState)(.3),
      [q, H] = (0, React.useState)("click"),
      [M, L] = (0, React.useState)(!0),
      [T, G] = (0, React.useState)(!0),
      [W, $] = (0, React.useState)(null),
      D = (0, React.useMemo)(() => null !== W ? W : l ? "#171717" : "#f4f4f4", [l, W]);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={520}><div className="relative h-full w-full"><MScene pageWidth={u} pageHeight={d} pageRadius={h} pageColor={D} perspective={b} spineShift={x} turnAngle={k} peekAngle={C} duration={S} stagger={A} ease={E} shadow={N} trigger={q} closeOnLeave={M} interactive={T} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Page Width" min={100} max={400} step={2} value={u} onChange={c} /><__mod_56388.yt title="Page Height" min={140} max={520} step={2} value={d} onChange={p} /><__mod_56388.yt title="Page Radius" min={0} max={40} step={1} value={h} onChange={f} /><__mod_56388.yt title="Perspective" min={400} max={3e3} step={50} value={b} onChange={v} /><__mod_56388.yt title="Spine Shift" min={0} max={260} step={5} value={x} onChange={y} /><__mod_56388.yt title="Turn Angle" min={90} max={200} step={1} value={k} onChange={w} /><__mod_56388.yt title="Peek Angle" min={0} max={40} step={1} value={C} onChange={j} /><__mod_56388.yt title="Duration" min={.15} max={2} step={.05} value={S} onChange={O} /><__mod_56388.yt title="Stagger" min={0} max={.4} step={.01} value={A} onChange={P} /><__mod_56388.yt title="Shadow" min={0} max={1} step={.02} value={N} onChange={R} /><__mod_56388.bg title="Ease" value={E} onChange={e => I(e)} options={[{
              value: "easeInOut",
              label: "Ease In Out"
            }, {
              value: "easeOut",
              label: "Ease Out"
            }, {
              value: "circOut",
              label: "Circ Out"
            }, {
              value: "backOut",
              label: "Back Out"
            }]} /><__mod_56388.bg title="Trigger" value={q} onChange={e => H(e)} options={[{
              value: "click",
              label: "Click"
            }, {
              value: "hover",
              label: "Hover"
            }]} /><__mod_56388.W7 title="Page Color" value={D} onChange={$} /><__mod_56388.tl title="Close On Leave" checked={M} onChange={L} /><__mod_56388.tl title="Interactive" checked={T} onChange={G} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "pages",
            type: "PageFlipLeaf[]",
            default: "5 leaves",
            description: "Leaves of the book. Each entry takes front, back, optional alt text and an id."
          }, {
            name: "pageWidth",
            type: "number",
            default: "220",
            description: "Width of a single leaf in pixels."
          }, {
            name: "pageHeight",
            type: "number",
            default: "320",
            description: "Height of a single leaf in pixels."
          }, {
            name: "pageRadius",
            type: "number",
            default: "4",
            description: "Corner radius of a leaf in pixels."
          }, {
            name: "pageColor",
            type: "string",
            default: '"#f4f4f4"',
            description: "Paper colour showing through while an image loads."
          }, {
            name: "perspective",
            type: "number",
            default: "1200",
            description: "Perspective depth of the scene. Lower values exaggerate the turn."
          }, {
            name: "spineShift",
            type: "number",
            default: "110",
            description: "How far the book slides aside once a leaf is turned."
          }, {
            name: "turnAngle",
            type: "number",
            default: "180",
            description: "Angle a turned leaf rotates through, in degrees."
          }, {
            name: "peekAngle",
            type: "number",
            default: "10",
            description: "Angle an unopened leaf tilts to when the pointer is over it."
          }, {
            name: "duration",
            type: "number",
            default: "0.55",
            description: "Seconds a single turn takes."
          }, {
            name: "stagger",
            type: "number",
            default: "0.08",
            description: "Seconds added per leaf when the whole book closes at once."
          }, {
            name: "ease",
            type: '"easeInOut" | "easeOut" | "circOut" | "backOut"',
            default: '"easeInOut"',
            description: "Easing curve of the turn."
          }, {
            name: "shadow",
            type: "number",
            default: "0.3",
            description: "Drop shadow strength behind each leaf. Set to 0 to remove."
          }, {
            name: "trigger",
            type: '"click" | "hover"',
            default: '"click"',
            description: "Interaction that turns a leaf. Hover riffles through the book."
          }, {
            name: "closeOnLeave",
            type: "boolean",
            default: "true",
            description: "Close every turned leaf when the pointer leaves the scene."
          }, {
            name: "interactive",
            type: "boolean",
            default: "true",
            description: "Enable pointer and keyboard interaction."
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

const MScene: any = m;

export default b;
