import { motion, AnimatePresence } from "motion/react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Animated List
 * A live feed where new items animate into the list
 * slug: animated-list
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = ({
    x: e,
    y: t,
    onComplete: a
  }) => <motion.span className="absolute rounded-full bg-white/30 pointer-events-none" style={{
    left: e,
    top: t,
    x: "-50%",
    y: "-50%"
  }} initial={{
    width: 0,
    height: 0,
    opacity: .5
  }} animate={{
    width: 300,
    height: 300,
    opacity: 0
  }} transition={{
    duration: .6,
    ease: "easeOut"
  }} onAnimationComplete={a} />,
  x = ({
    item: e,
    itemRenderer: t,
    hoverEffect: a,
    clickEffect: r,
    swipeToDismiss: i,
    onDismiss: c,
    onItemClick: x
  }) => {
    let [h, f] = (0, React.useState)([]),
      [p, b] = (0, React.useState)(!1),
      g = (0, React.useRef)(0),
      y = (0, React.useRef)(null),
      v = (0, __mod_75272.d)(0),
      j = (0, __mod_32923.G)(v, [-150, 0, 150], [0, 1, 0]),
      k = (0, __mod_32923.G)(v, [-150, 0, 150], [-10, 0, 10]),
      w = (0, __mod_32923.G)(v, [-100, -50, 50, 100], [1, 0, 0, 1]);
    return <motion.div ref={y} className={(0, __mod_90650.cn)("relative overflow-hidden rounded-2xl", "bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-neutral-800", x && "cursor-pointer")} drag={!!i && "x"} dragConstraints={{
      left: 0,
      right: 0
    }} dragElastic={.5} onDragEnd={(t, a) => {
      Math.abs(a.offset.x) > 100 && i && c?.(e);
    }} onClick={t => {
      if ("ripple" === r && y.current) {
        let e = y.current.getBoundingClientRect(),
          a = t.clientX - e.left,
          n = t.clientY - e.top,
          s = g.current++;
        f(e => [...e, {
          id: s,
          x: a,
          y: n
        }]);
      }
      x?.(e);
    }} onMouseDown={() => "press" === r && b(!0)} onMouseUp={() => b(!1)} onMouseLeave={() => b(!1)} animate={{
      scale: p ? .97 : 1
    }} whileHover={"scale" === a ? {
      scale: 1.02
    } : void 0} transition={{
      duration: .15
    }}>{i && <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{
        opacity: w
      }}><span className="text-red-500 font-semibold text-sm">Dismiss</span></motion.div>}<motion.div className="p-4" style={i ? {
        x: v,
        opacity: j,
        rotateZ: k
      } : void 0}>{t(e)}</motion.div>{h.map(e => <m x={e.x} y={e.y} onComplete={() => {
        var t;
        return t = e.id, void f(e => e.filter(e => e.id !== t));
      }} />)}</motion.div>;
  },
  h = ({
    items: e,
    duration: t = .4,
    easing: a = [.25, .46, .45, .94],
    autoAddDelay: r = 2e3,
    maxItems: i = 10,
    startFrom: o = "center",
    animationType: d = "slide",
    enterFrom: m = "top",
    pauseOnHover: h = !1,
    hoverEffect: f = "none",
    clickEffect: p = "none",
    fadeEdges: b = !0,
    fadeEdgeSize: g = 80,
    fadeColor: y,
    swipeToDismiss: v = !1,
    onDismiss: j,
    onItemClick: k,
    itemGap: w = 12,
    className: N,
    renderItem: C,
    height: S = "600px"
  }) => {
    let [E, A] = (0, React.useState)(() => e),
      D = (0, React.useRef)(e.length),
      I = (0, React.useRef)(null),
      [M, P] = (0, React.useState)(!1);
    (0, React.useEffect)(() => {
      if (I.current && (clearInterval(I.current), I.current = null), !(r <= 0) && 0 !== e.length) return I.current = setInterval(() => {
        M || A(t => {
          let a = e[D.current % e.length],
            n = {
              id: `${a.id}-${D.current}`,
              content: a.content
            };
          return D.current++, [n, ...t].slice(0, i);
        });
      }, r), () => {
        I.current && clearInterval(I.current);
      };
    }, [r, i, e, M]);
    let T = (0, React.useCallback)(e => {
        A(t => t.filter(t => t.id !== e.id)), j?.(e);
      }, [j]),
      G = C || (e => <div className="text-neutral-900 dark:text-white">{e.content}</div>);
    return <div className={(0, __mod_90650.cn)("w-full relative overflow-hidden", N)} style={{
      height: S
    }}>{b && <><div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{
          height: g,
          background: `linear-gradient(to bottom, ${y || "var(--background, #0a0a0a)"} 0%, transparent 100%)`
        }} /><div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{
          height: g,
          background: `linear-gradient(to top, ${y || "var(--background, #0a0a0a)"} 0%, transparent 100%)`
        }} /></>}<div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide" onMouseEnter={() => h && P(!0)} onMouseLeave={() => h && P(!1)}><ul className={(0, __mod_90650.cn)("p-4", "center" === o ? "pt-[50%]" : "bottom" === o ? "pt-[100%]" : "")} style={{
          display: "flex",
          flexDirection: "column",
          gap: `${w}px`
        }}><__mod_47962.N initial={!1} mode="popLayout">{E.map(e => {
              let s;
              return <motion.li layout={!0} initial={(() => {
                let e = {
                  height: 0,
                  opacity: 0
                };
                switch (m) {
                  case "left":
                    e.x = -50;
                    break;
                  case "right":
                    e.x = 50;
                    break;
                  case "bottom":
                    e.y = 30;
                    break;
                  default:
                    e.y = -30;
                }
                switch (d) {
                  case "scale":
                    e.scale = .8;
                    break;
                  case "blur":
                    e.filter = "blur(10px)";
                }
                return e;
              })()} animate={(() => {
                let e = {
                  height: "auto",
                  opacity: 1,
                  x: 0,
                  y: 0
                };
                switch (d) {
                  case "scale":
                    e.scale = 1;
                    break;
                  case "blur":
                    e.filter = "blur(0px)";
                }
                return e;
              })()} exit={(() => {
                let e = {
                  height: 0,
                  opacity: 0,
                  y: 20
                };
                switch (d) {
                  case "scale":
                    e.scale = .8;
                    break;
                  case "blur":
                    e.filter = "blur(10px)";
                }
                return e;
              })()} transition={(s = {
                duration: t,
                ease: a
              }, "bounce" === d ? {
                ...s,
                type: "spring",
                bounce: .4,
                stiffness: 300,
                damping: 20
              } : s)} style={{
                overflow: "visible",
                willChange: "transform, opacity, height"
              }}><XScene item={e} itemRenderer={G} hoverEffect={f} clickEffect={p} swipeToDismiss={v} onDismiss={T} onItemClick={k} /></motion.li>;
            })}</__mod_47962.N></ul></div><style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style></div>;
  },
  f = [{
    id: 1,
    content: <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-white font-semibold text-sm">JS</div><div className="flex-1"><p className="font-semibold text-sm text-gray-900 dark:text-white">John Smith</p><p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Liked your post about React performance</p><p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2 minutes ago</p></div></div>
  }, {
    id: 2,
    content: <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-white font-semibold text-sm">EM</div><div className="flex-1"><p className="font-semibold text-sm text-gray-900 dark:text-white">Emma Martinez</p><p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Commented on your repository</p><p className="text-xs text-gray-500 dark:text-gray-500 mt-1">5 minutes ago</p></div></div>
  }, {
    id: 3,
    content: <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-white font-semibold text-sm">AJ</div><div className="flex-1"><p className="font-semibold text-sm text-gray-900 dark:text-white">Alex Johnson</p><p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Started following you</p><p className="text-xs text-gray-500 dark:text-gray-500 mt-1">12 minutes ago</p></div></div>
  }, {
    id: 4,
    content: <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-white font-semibold text-sm">SK</div><div className="flex-1"><p className="font-semibold text-sm text-gray-900 dark:text-white">Sarah Kim</p><p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Mentioned you in a comment</p><p className="text-xs text-gray-500 dark:text-gray-500 mt-1">18 minutes ago</p></div></div>
  }, {
    id: 5,
    content: <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-gray-900 dark:text-white font-semibold text-sm">MB</div><div className="flex-1"><p className="font-semibold text-sm text-gray-900 dark:text-white">Michael Brown</p><p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Shared your article</p><p className="text-xs text-gray-500 dark:text-gray-500 mt-1">25 minutes ago</p></div></div>
  }],
  p = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, l] = (0, React.useState)(.4),
      [o, d] = (0, React.useState)(2e3),
      [c, u] = (0, React.useState)(10),
      [m, x] = (0, React.useState)(!0),
      [p, b] = (0, React.useState)("center"),
      [g, y] = (0, React.useState)("slide"),
      [v, j] = (0, React.useState)("top"),
      [k, w] = (0, React.useState)(!1),
      [N, C] = (0, React.useState)("none"),
      [S, E] = (0, React.useState)("none"),
      [A, D] = (0, React.useState)(!0),
      [I, M] = (0, React.useState)(80),
      [P, T] = (0, React.useState)(!1),
      [G, R] = (0, React.useState)(12);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={600}><div className="flex w-full max-w-md items-center justify-center"><HView items={f} duration={a} autoAddDelay={m ? o : 0} maxItems={c} startFrom={p} animationType={g} enterFrom={v} pauseOnHover={k} hoverEffect={N} clickEffect={S} fadeEdges={A} fadeEdgeSize={I} swipeToDismiss={P} onDismiss={e => console.log("Dismissed:", e)} onItemClick={e => console.log("Clicked:", e)} itemGap={G} height="600px"/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Animation Type" value={g} onChange={e => y(e)} options={[{
              label: "Slide",
              value: "slide"
            }, {
              label: "Fade",
              value: "fade"
            }, {
              label: "Scale",
              value: "scale"
            }, {
              label: "Bounce",
              value: "bounce"
            }, {
              label: "Blur",
              value: "blur"
            }]} /><__mod_56388.bg title="Enter From" value={v} onChange={e => j(e)} options={[{
              label: "Top",
              value: "top"
            }, {
              label: "Bottom",
              value: "bottom"
            }, {
              label: "Left",
              value: "left"
            }, {
              label: "Right",
              value: "right"
            }]} /><__mod_56388.bg title="Start From" value={p} onChange={e => b(e)} options={[{
              label: "Top",
              value: "top"
            }, {
              label: "Center",
              value: "center"
            }, {
              label: "Bottom",
              value: "bottom"
            }]} /><__mod_56388.yt title="Duration" value={a} onChange={l} min={.1} max={1} step={.1} /><__mod_56388.yt title="Item Gap" value={G} onChange={R} min={4} max={24} step={2} /><__mod_56388.bg title="Hover Effect" value={N} onChange={e => C(e)} options={[{
              label: "None",
              value: "none"
            }, {
              label: "Scale",
              value: "scale"
            }]} /><__mod_56388.bg title="Click Effect" value={S} onChange={e => E(e)} options={[{
              label: "None",
              value: "none"
            }, {
              label: "Ripple",
              value: "ripple"
            }, {
              label: "Press",
              value: "press"
            }]} /><__mod_56388.tl title="Swipe to Dismiss" checked={P} onChange={T} /><__mod_56388.tl title="Fade Edges" checked={A} onChange={D} />{A && <__mod_56388.yt title="Fade Edge Size" value={I} onChange={M} min={20} max={120} step={10} />}<__mod_56388.tl title="Auto Add" checked={m} onChange={x} />{m && <__mod_56388.yt title="Auto Add Delay (ms)" value={o} onChange={d} min={500} max={5e3} step={100} />}<__mod_56388.yt title="Max Items" value={c} onChange={u} min={3} max={15} step={1} /><__mod_56388.tl title="Pause on Hover" checked={k} onChange={w} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "items",
            type: "AnimatedListItem[]",
            default: "[]",
            description: "Array of items to display with id and content"
          }, {
            name: "duration",
            type: "number",
            default: "0.4",
            description: "Duration of item animation in seconds"
          }, {
            name: "easing",
            type: "[number, number, number, number]",
            default: "[0.25, 0.46, 0.45, 0.94]",
            description: "Animation easing function as cubic bezier values"
          }, {
            name: "autoAddDelay",
            type: "number",
            default: "2000",
            description: "Delay between auto-adding items in ms (0 to disable)"
          }, {
            name: "maxItems",
            type: "number",
            default: "10",
            description: "Maximum number of items to display"
          }, {
            name: "startFrom",
            type: '"top" | "center" | "bottom"',
            default: '"center"',
            description: "Starting position of list items"
          }, {
            name: "animationType",
            type: '"slide" | "fade" | "scale" | "bounce" | "blur"',
            default: '"slide"',
            description: "Type of entrance animation for items"
          }, {
            name: "enterFrom",
            type: '"top" | "bottom" | "left" | "right"',
            default: '"top"',
            description: "Direction items enter from"
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "false",
            description: "Pause auto-adding when user hovers over the list"
          }, {
            name: "hoverEffect",
            type: '"none" | "scale"',
            default: '"none"',
            description: "Effect when hovering over items"
          }, {
            name: "clickEffect",
            type: '"none" | "ripple" | "press"',
            default: '"none"',
            description: "Effect when clicking items"
          }, {
            name: "fadeEdges",
            type: "boolean",
            default: "true",
            description: "Enable smooth fade at top/bottom edges"
          }, {
            name: "fadeEdgeSize",
            type: "number",
            default: "80",
            description: "Size of fade edges in pixels"
          }, {
            name: "fadeColor",
            type: "string",
            default: '"#0a0a0a"',
            description: "Background color for fade edges"
          }, {
            name: "swipeToDismiss",
            type: "boolean",
            default: "false",
            description: "Enable swiping items to dismiss them"
          }, {
            name: "onDismiss",
            type: "(item: AnimatedListItem) => void",
            default: "undefined",
            description: "Callback when an item is dismissed via swipe"
          }, {
            name: "onItemClick",
            type: "(item: AnimatedListItem) => void",
            default: "undefined",
            description: "Callback function when an item is clicked"
          }, {
            name: "itemGap",
            type: "number",
            default: "12",
            description: "Gap between items in pixels"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes"
          }, {
            name: "renderItem",
            type: "(item: AnimatedListItem) => ReactNode",
            default: "undefined",
            description: "Custom item render function"
          }, {
            name: "height",
            type: "string | number",
            default: '"600px"',
            description: "Height of the container"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const XScene: any = x;

const HView: any = h;

export default p;
