import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import * as __mod_81106 from "../_helpers/81106";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Simple Graph
 * A smooth animated line graph
 * slug: simple-graph
 * category: visualization
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = TrendingDown;
  p = ({
    data: e,
    lineColor: t = "#5227FF",
    dotColor: a = "#5227FF",
    width: i = "100%",
    height: r = 300,
    animationDuration: p = 2,
    showGrid: x = !0,
    gridStyle: v = "solid",
    gridLines: g = "both",
    gridLineThickness: m = 1,
    showDots: b = !0,
    dotSize: f = 6,
    dotHoverGlow: y = !1,
    curved: j = !0,
    gradientFade: w = !1,
    graphLineThickness: S = 3,
    calculatePercentageDifference: k = !1,
    animateOnScroll: C = !1,
    animateOnce: $ = !0,
    className: D
  }) => {
    let M,
      [N, W] = (0, React.useState)(null),
      [L, T] = (0, React.useState)(0),
      [E, P] = (0, React.useState)(0),
      F = (0, React.useRef)(null),
      G = (0, React.useRef)(null),
      O = (0, __mod_81106.W)(G, {
        once: $,
        amount: .3
      }),
      I = !C || O,
      {
        points: z,
        pathD: A
      } = (0, React.useMemo)(() => {
        if (!e || 0 === e.length) return {
          points: [],
          pathD: ""
        };
        let t = e.map(e => e.value),
          a = Math.min(...t),
          l = Math.max(...t),
          n = l - a || 1,
          i = a - .1 * n,
          r = l + .1 * n - i,
          s = e.map((t, a) => ({
            x: 40 + a / (e.length - 1 || 1) * 720,
            y: 360 - (t.value - i) / r * 320,
            value: t.value,
            label: t.label
          })),
          o = "";
        if (s.length > 0) if (j && s.length > 1) {
          o = `M ${s[0].x},${s[0].y}`;
          for (let e = 0; e < s.length - 1; e++) {
            let t = s[e],
              a = s[e + 1],
              l = t.x + (a.x - t.x) * .5,
              n = t.y,
              i = t.x + (a.x - t.x) * .5,
              r = a.y;
            o += ` C ${l},${n} ${i},${r} ${a.x},${a.y}`;
          }
        } else o = s.map((e, t) => `${0 === t ? "M" : "L"} ${e.x},${e.y}`).join(" ");
        return {
          points: s,
          pathD: o
        };
      }, [e, j]),
      H = "number" == typeof i ? `${i}px` : i,
      U = (0, React.useMemo)(() => {
        if (!w || 0 === z.length) return "";
        let e = `M ${z[0].x},360 L ${z[0].x},${z[0].y}`;
        if (j && z.length > 1) for (let t = 0; t < z.length - 1; t++) {
          let a = z[t],
            l = z[t + 1],
            n = a.x + (l.x - a.x) * .5,
            i = a.y,
            r = a.x + (l.x - a.x) * .5,
            s = l.y;
          e += ` C ${n},${i} ${r},${s} ${l.x},${l.y}`;
        } else for (let t = 1; t < z.length; t++) e += ` L ${z[t].x},${z[t].y}`;
        return e + ` L ${z[z.length - 1].x},360 Z`;
      }, [z, j, w]);
    return <div ref={G} className={(0, __mod_90650.cn)("relative text-gray-900 dark:text-gray-100", D)} style={{
      width: H,
      height: `${r}px`
    }}><svg ref={F} viewBox="0 0 800 400" className="w-full h-full text-gray-900 dark:text-gray-100" style={{
        overflow: "visible"
      }}><defs><linearGradient id="line-gradient" x1="0" y1="40" x2="0" y2="360" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor={t} stopOpacity="0.3" /><stop offset="100%" stopColor={t} stopOpacity="0" /></linearGradient></defs>{x && <g opacity="0.1">{("horizontal" === g || "both" === g) && [0, 1, 2, 3, 4].map(e => <line x1="40" y1={40 + 320 * e / 4} x2="760" y2={40 + 320 * e / 4} stroke="currentColor" strokeWidth={m} strokeDasharray={"dashed" === v ? "5,5" : "dotted" === v ? "1,3" : void 0} />)}{("vertical" === g || "both" === g) && z.map((e, t) => <line x1={e.x} y1="40" x2={e.x} y2="360" stroke="currentColor" strokeWidth={m} strokeDasharray={"dashed" === v ? "5,5" : "dotted" === v ? "1,3" : void 0} />)}</g>}{w && <motion.path d={U} fill="url(#line-gradient)" initial={{
          opacity: 0
        }} animate={{
          opacity: +!!I
        }} transition={{
          duration: .6,
          delay: p,
          ease: "easeInOut"
        }} />}<motion.path d={A} fill="none" stroke={t} strokeWidth={S} strokeLinecap="round" strokeLinejoin="round" initial={{
          pathLength: 0
        }} animate={{
          pathLength: +!!I
        }} transition={{
          duration: p,
          ease: "easeInOut"
        }} />{b && z.map((e, t) => <g onMouseEnter={() => {
          W(t), T(0), P(0);
        }} onMouseLeave={() => W(null)} onMouseMove={e => ((e, t) => {
          if (!F.current) return;
          let a = F.current,
            l = a.createSVGPoint();
          l.x = e.clientX, l.y = e.clientY;
          let n = l.matrixTransform(a.getScreenCTM()?.inverse()),
            i = z[t].x,
            r = n.x - i,
            s = Math.max(-15, Math.min(15, .2 * r)),
            o = Math.max(-20, Math.min(20, .15 * r));
          T(s), P(o);
        })(e, t)} style={{
          cursor: "pointer"
        }}><circle cx={e.x} cy={e.y} r="60" fill="transparent" style={{
            pointerEvents: "all"
          }} />{y && N === t && <motion.circle cx={e.x} cy={e.y} r={2 * f} fill={a} initial={{
            opacity: 0
          }} animate={{
            opacity: .3
          }} exit={{
            opacity: 0
          }} transition={{
            duration: .2
          }} style={{
            filter: "blur(8px)",
            pointerEvents: "none"
          }} />}<motion.circle cx={e.x} cy={e.y} r={f} fill={a} stroke="white" strokeWidth="2" style={{
            pointerEvents: "none"
          }} initial={{
            scale: 0,
            opacity: 0
          }} animate={{
            scale: N === t ? 1.5 : 1,
            opacity: +!!I
          }} transition={{
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 25
            },
            opacity: {
              duration: .3,
              delay: t / (z.length - 1 || 1) * p
            }
          }} /></g>)}<__mod_47962.N>{null !== N && z[N] && !(k && 0 === N) && <foreignObject x={z[N].x - 75} y={z[N].y - 84} width="150" height="84" style={{
            overflow: "visible",
            pointerEvents: "none"
          }}><motion.div initial={{
              opacity: 0,
              scale: .8,
              x: 0
            }} animate={{
              opacity: 1,
              scale: 1,
              x: E,
              rotate: L
            }} exit={{
              opacity: 0,
              scale: .8
            }} transition={{
              duration: .15,
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              rotate: {
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            }} className="flex items-center justify-center" style={{
              pointerEvents: "none"
            }}><div className="relative"><div className="bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 whitespace-nowrap">{k && N > 0 && (M = (t => {
                    if (!k || 0 === t || !e[t - 1]) return null;
                    let a = e[t].value,
                      l = e[t - 1].value;
                    if (0 === l) return null;
                    let n = a - l;
                    return {
                      percentage: Math.abs(n / Math.abs(l) * 100),
                      isIncrease: n >= 0
                    };
                  })(N)) ? <div className="flex items-center gap-1.5">{M.isIncrease ? <TrendingUp className="w-4 h-4 text-green-400" /> : <h className="w-4 h-4 text-red-400" />}<span className={(0, __mod_90650.cn)("text-sm font-semibold", M.isIncrease ? "text-green-400" : "text-red-400")}>{M.isIncrease ? "+" : "-"}{M.percentage.toFixed(1)}%</span></div> : <div className="text-sm font-semibold">{z[N].value.toFixed(2)}</div>}{e[N].label && <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e[N].label}</div>}</div><div className="absolute left-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-[#1a1a1a]" style={{
                  bottom: "-4px",
                  transform: "translateX(-50%)"
                }} /></div></motion.div></foreignObject>}</__mod_47962.N></svg></div>;
  };
p.displayName = "SimpleGraph";
let x = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, s] = (0, React.useState)(500),
    [o, d] = (0, React.useState)(2),
    [u, c] = (0, React.useState)(!0),
    [h, x] = (0, React.useState)("dashed"),
    [v, g] = (0, React.useState)("horizontal"),
    [m, b] = (0, React.useState)(2),
    [f, y] = (0, React.useState)(!0),
    [j, w] = (0, React.useState)(10),
    [S, k] = (0, React.useState)(!1),
    [C, $] = (0, React.useState)(!0),
    [D, M] = (0, React.useState)(!1),
    [N, W] = (0, React.useState)(3),
    [L, T] = (0, React.useState)(!0),
    [E, P] = (0, React.useState)(!1),
    [F, G] = (0, React.useState)(!1),
    [O, I] = (0, React.useState)("#B19EEF"),
    [z, A] = (0, React.useState)("#B19EEF"),
    [H, U] = (0, React.useState)("trending");
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={450}><div className="w-full max-w-3xl"><p data={{
              trending: [{
                value: 45,
                label: "Jan"
              }, {
                value: 32,
                label: "Feb"
              }, {
                value: 58,
                label: "Mar"
              }, {
                value: 52,
                label: "Apr"
              }, {
                value: 71,
                label: "May"
              }, {
                value: 89,
                label: "Jun"
              }],
              volatile: [{
                value: 20,
                label: "Week 1"
              }, {
                value: 65,
                label: "Week 2"
              }, {
                value: 30,
                label: "Week 3"
              }, {
                value: 75,
                label: "Week 4"
              }, {
                value: 45,
                label: "Week 5"
              }, {
                value: 82,
                label: "Week 6"
              }, {
                value: 55,
                label: "Week 7"
              }],
              steady: [{
                value: 100,
                label: "Q1"
              }, {
                value: 105,
                label: "Q2"
              }, {
                value: 110,
                label: "Q3"
              }, {
                value: 115,
                label: "Q4"
              }],
              detailed: [{
                value: 12,
                label: "Mon"
              }, {
                value: 19,
                label: "Tue"
              }, {
                value: 15,
                label: "Wed"
              }, {
                value: 25,
                label: "Thu"
              }, {
                value: 22,
                label: "Fri"
              }, {
                value: 30,
                label: "Sat"
              }, {
                value: 28,
                label: "Sun"
              }, {
                value: 35,
                label: "Mon"
              }, {
                value: 32,
                label: "Tue"
              }, {
                value: 40,
                label: "Wed"
              }]
            }[H]} lineColor={O} dotColor={z} height={a} animationDuration={o} showGrid={u} gridStyle={h} gridLines={v} gridLineThickness={m} showDots={f} dotSize={j} dotHoverGlow={S} curved={C} gradientFade={D} graphLineThickness={N} calculatePercentageDifference={L} animateOnScroll={E} animateOnce={F} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.W7 title="Line Color" value={O} onChange={I} /><__mod_56388.W7 title="Dot Color" value={z} onChange={A} /><__mod_56388.bg title="Grid Style" value={h} onChange={x} options={[{
            value: "solid",
            label: "Solid"
          }, {
            value: "dashed",
            label: "Dashed"
          }, {
            value: "dotted",
            label: "Dotted"
          }]} /><__mod_56388.bg title="Grid Lines" value={v} onChange={g} options={[{
            value: "both",
            label: "Both"
          }, {
            value: "horizontal",
            label: "Horizontal"
          }, {
            value: "vertical",
            label: "Vertical"
          }]} /><__mod_56388.bg title="Data Set" value={H} onChange={U} options={[{
            value: "trending",
            label: "Trending Growth"
          }, {
            value: "volatile",
            label: "Volatile Data"
          }, {
            value: "steady",
            label: "Steady Progress"
          }, {
            value: "detailed",
            label: "Detailed View"
          }]} /><__mod_56388.yt title="Height" value={a} onChange={s} min={200} max={500} step={10} valueUnit="px" /><__mod_56388.yt title="Animation Duration" value={o} onChange={d} min={.5} max={5} step={.5} valueUnit="s" /><__mod_56388.yt title="Grid Line Thickness" value={m} onChange={b} min={.5} max={3} step={.5} valueUnit="px" /><__mod_56388.yt title="Graph Line Thickness" value={N} onChange={W} min={1} max={6} step={.5} valueUnit="px" /><__mod_56388.yt title="Dot Size" value={j} onChange={w} min={3} max={12} step={1} valueUnit="px" /><__mod_56388.tl title="Show Grid" checked={u} onChange={c} /><__mod_56388.tl title="Show Dots" checked={f} onChange={y} /><__mod_56388.tl title="Dot Hover Glow" checked={S} onChange={k} /><__mod_56388.tl title="Curved Line" checked={C} onChange={$} /><__mod_56388.tl title="Gradient Fade" checked={D} onChange={M} /><__mod_56388.tl title="Percentage Difference" checked={L} onChange={T} /><__mod_56388.tl title="Animate On Scroll" checked={E} onChange={P} /><__mod_56388.tl title="Animate Once" checked={F} onChange={G} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "data",
          type: "DataPoint[]",
          default: "[]",
          description: "Array of data points with value and optional label properties"
        }, {
          name: "lineColor",
          type: "string",
          default: '"#5227FF"',
          description: "Color of the line (CSS color value)"
        }, {
          name: "dotColor",
          type: "string",
          default: '"#5227FF"',
          description: "Color of the dots at each data point (CSS color value)"
        }, {
          name: "width",
          type: "string | number",
          default: '"100%"',
          description: "Width of the graph container"
        }, {
          name: "height",
          type: "number",
          default: "300",
          description: "Height of the graph in pixels"
        }, {
          name: "animationDuration",
          type: "number",
          default: "2",
          description: "Duration of the line draw animation in seconds"
        }, {
          name: "showGrid",
          type: "boolean",
          default: "true",
          description: "Whether to show background grid lines"
        }, {
          name: "gridStyle",
          type: '"solid" | "dashed" | "dotted"',
          default: '"solid"',
          description: "Style of the grid lines"
        }, {
          name: "gridLines",
          type: '"vertical" | "horizontal" | "both"',
          default: '"both"',
          description: "Which grid lines to display"
        }, {
          name: "gridLineThickness",
          type: "number",
          default: "1",
          description: "Thickness of grid lines in pixels"
        }, {
          name: "showDots",
          type: "boolean",
          default: "true",
          description: "Whether to show dots at each data point"
        }, {
          name: "dotSize",
          type: "number",
          default: "6",
          description: "Size of the dots in pixels"
        }, {
          name: "dotHoverGlow",
          type: "boolean",
          default: "false",
          description: "Show glow effect behind dots when hovering"
        }, {
          name: "curved",
          type: "boolean",
          default: "true",
          description: "Whether to curve the line between points using bezier curves"
        }, {
          name: "gradientFade",
          type: "boolean",
          default: "false",
          description: "Show gradient fill under the line that fades from line color to transparent"
        }, {
          name: "graphLineThickness",
          type: "number",
          default: "3",
          description: "Thickness of the main graph line in pixels"
        }, {
          name: "calculatePercentageDifference",
          type: "boolean",
          default: "false",
          description: "Display percentage difference between periods with trend arrows instead of absolute values"
        }, {
          name: "animateOnScroll",
          type: "boolean",
          default: "false",
          description: "Trigger animation when the graph is scrolled into view"
        }, {
          name: "animateOnce",
          type: "boolean",
          default: "true",
          description: "Only animate once when scrolled into view (requires animateOnScroll to be true)"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for the wrapper element"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default x;
