import { motion, AnimatePresence } from "motion/react";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Preloader
 * Loading screens in five styles
 * slug: preloader
 * category: loading
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ({
  loading: e,
  variant: t = "stairs",
  position: a = "absolute",
  duration: r = 2500,
  loadingText: l = "Loading your next level experience",
  onComplete: c,
  onLoadingStart: u,
  onLoadingComplete: p,
  className: m = "",
  zIndex: f = 50,
  bgColor: x,
  textClassName: g = "",
  children: b,
  respectReducedMotion: h = !1,
  reducedMotionFallback: v = "fade",
  ariaLabel: y = "Loading content",
  ariaLive: j = "polite",
  textFadeThreshold: C = 99,
  backdropBlur: w = 0,
  customContent: N,
  percentagePosition: k = "center",
  showPercentageSign: S = !0,
  percentageTextClassName: P = "",
  showProgressBar: F = !0,
  progressBarPosition: T = "bottom",
  stairCount: R = 10,
  stairsRevealFrom: L = "left",
  stairsRevealDirection: B = "up"
}) => {
  let E,
    D,
    A,
    I,
    M,
    q,
    U,
    V,
    _,
    z,
    H,
    [W, $] = (0, React.useState)(100 * !e),
    [G, O] = (0, React.useState)(e),
    [X, Z] = (0, React.useState)(!e),
    J = (0, React.useRef)(null),
    K = (0, React.useRef)(!1),
    [Q, Y] = (0, React.useState)(!1),
    ee = (0, React.useRef)(!1);
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
      t = e => {
        Y(e.matches);
      };
    return t(e), e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, [h]), (0, React.useEffect)(() => {
    let a, n;
    if (e) {
      let e = Date.now(),
        t = !0;
      K.current = !1, ee.current || (ee.current = !0, u?.());
      let a = () => {
        if (!t) return;
        let n = (Date.now() - e) / r * 100;
        n > 90 && (n = 90 + .1 * (n - 90)), $(n = Math.min(n, 99)), n >= C && !K.current && (K.current = !0, Z(!0)), J.current = requestAnimationFrame(a);
      };
      return requestAnimationFrame(() => {
        t && (O(!0), Z(!1), $(0), a());
      }), () => {
        t = !1, J.current && (cancelAnimationFrame(J.current), J.current = null);
      };
    }
    if (G) return ee.current = !1, J.current && (cancelAnimationFrame(J.current), J.current = null), J.current = requestAnimationFrame(() => {
      $(100), K.current || (K.current = !0, Z(!0));
    }), a = setTimeout(() => {
      O(!1), n = setTimeout(() => {
        c?.();
      }, 800);
    }, 300 + 2e3 * ("percentage" === t)), () => {
      J.current && (cancelAnimationFrame(J.current), J.current = null), clearTimeout(a), clearTimeout(n);
    };
  }, [e, r, c, u, t, C, G]);
  let et = () => {
    let e = l.split(" ");
    return <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{
      zIndex: f + 1
    }}><div className="flex flex-wrap justify-center gap-x-3 px-8">{e.map((e, t) => <motion.span initial={{
          opacity: 0,
          filter: "blur(10px)"
        }} animate={X ? {
          opacity: 0,
          filter: "blur(10px)"
        } : {
          opacity: 1,
          filter: "blur(0px)"
        }} transition={{
          duration: X ? .3 : .6,
          delay: X ? 0 : .1 * t,
          ease: [.65, 0, .35, 1]
        }} className={(0, __mod_90650.cn)("text-4xl font-bold text-background dark:text-foreground", g)}>{e}</motion.span>)}</div></div>;
  };
  return <div className={(0, __mod_90650.cn)("relative w-full h-full", m)}><__mod_47962.N onExitComplete={p}>{G && <div>{N ? <div className={(0, __mod_90650.cn)("inset-0", "fixed" === a ? "fixed" : "absolute")} style={{
          zIndex: f
        }} role="status" aria-label={y} aria-live={j}>{N(W)}</div> : <>{"stairs" === t && (E = Array.from({
            length: R
          }), D = "up" === B ? "-100%" : "100%", A = !Q || "none" !== v, I = Q && "fade" === v, <div className={(0, __mod_90650.cn)("inset-0 flex overflow-hidden", "fixed" === a ? "fixed" : "absolute")} style={{
            zIndex: f
          }} role="status" aria-label={y} aria-live={j}>{E.map((e, t) => <motion.div initial={{
              y: "0%",
              opacity: 1
            }} animate={{
              y: "0%",
              opacity: 1
            }} exit={I ? {
              opacity: 0
            } : A ? {
              y: D
            } : {
              opacity: 0
            }} transition={{
              duration: I ? .3 : A ? .5 : .3,
              delay: A && !I ? "left" === L ? .06 * t : "right" === L ? (R - 1 - t) * .06 : .06 * Math.abs(t - (R - 1) / 2) : 0,
              ease: [.65, 0, .35, 1]
            }} className="flex-1" style={{
              backgroundColor: x || void 0
            }}>{!x && <div className="w-full h-full bg-black dark:bg-[#5227FF]" />}</motion.div>)}{et()}</div>)}{"percentage" === t && (M = Math.floor(W), <motion.div initial={{
            opacity: 1
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: Q && "none" === v ? .2 : .4,
            ease: "easeInOut"
          }} className={(0, __mod_90650.cn)("inset-0 flex flex-col", "bottom-left" === k ? "justify-end items-start p-8" : "top-left" === k ? "justify-start items-start p-8" : "items-center justify-center", "fixed" === a ? "fixed" : "absolute", x ? "" : "bg-background")} style={{
            zIndex: f,
            backgroundColor: x,
            backdropFilter: w > 0 ? `blur(${w}px)` : void 0
          }} role="progressbar" aria-label={y} aria-live={j} aria-valuenow={M} aria-valuemin={0} aria-valuemax={100}><div className={(0, __mod_90650.cn)("text-[min(25vw,200px)] font-bold leading-none text-foreground tabular-nums tracking-tighter", P)}>{M}{S && <span className="text-[min(12vw,100px)] opacity-50">%</span>}</div>{F && <div className={(0, __mod_90650.cn)("absolute left-0 right-0 h-0.5 bg-border", "top" === T ? "top-0" : "bottom-0")}><motion.div initial={{
                width: "0%"
              }} animate={{
                width: `${W}%`
              }} transition={{
                duration: .05,
                ease: "linear"
              }} className="h-full bg-foreground" /></div>}</motion.div>)}{"circle" === t && (q = !Q || "none" !== v, U = Q && "fade" === v, <div className={(0, __mod_90650.cn)("inset-0 flex items-center justify-center overflow-hidden bg-transparent", "fixed" === a ? "fixed" : "absolute")} style={{
            zIndex: f
          }} role="status" aria-label={y} aria-live={j}><motion.div initial={{
              scale: 1,
              opacity: 1
            }} animate={{
              scale: 1,
              opacity: 1
            }} exit={U ? {
              opacity: 0
            } : q ? {
              scale: 0
            } : {
              opacity: 0
            }} transition={{
              duration: U ? .3 : q ? .7 : .3,
              ease: [.65, 0, .35, 1]
            }} className={(0, __mod_90650.cn)("rounded-full aspect-square", x ? "" : "bg-black dark:bg-[#5227FF]")} style={{
              width: "300vmax",
              height: "300vmax",
              backgroundColor: x
            }} />{et()}</div>)}{"slide" === t && (V = !Q || "none" !== v, _ = Q && "fade" === v, <div className={(0, __mod_90650.cn)("inset-0 flex overflow-hidden", "fixed" === a ? "fixed" : "absolute")} style={{
            zIndex: f
          }} role="status" aria-label={y} aria-live={j}><motion.div initial={{
              x: "0%"
            }} exit={_ ? {
              opacity: 0
            } : V ? {
              x: "100%"
            } : {
              opacity: 0
            }} transition={{
              duration: _ ? .3 : V ? .8 : .3,
              ease: [.65, 0, .35, 1]
            }} className="w-full h-full" style={{
              backgroundColor: x || void 0
            }}>{!x && <div className="w-full h-full bg-black dark:bg-[#5227FF]" />}</motion.div>{et()}</div>)}{"curtain" === t && (z = !Q || "none" !== v, H = Q && "fade" === v, <div className={(0, __mod_90650.cn)("inset-0 flex overflow-hidden", "fixed" === a ? "fixed" : "absolute")} style={{
            zIndex: f
          }} role="status" aria-label={y} aria-live={j}><motion.div initial={{
              x: "0%"
            }} exit={H ? {
              opacity: 0
            } : z ? {
              x: "-100%"
            } : {
              opacity: 0
            }} transition={{
              duration: H ? .3 : z ? .8 : .3,
              ease: [.65, 0, .35, 1]
            }} className="w-1/2 h-full" style={{
              backgroundColor: x || void 0
            }}>{!x && <div className="w-full h-full bg-black dark:bg-[#5227FF]" />}</motion.div><motion.div initial={{
              x: "0%"
            }} exit={H ? {
              opacity: 0
            } : z ? {
              x: "100%"
            } : {
              opacity: 0
            }} transition={{
              duration: H ? .3 : z ? .8 : .3,
              ease: [.65, 0, .35, 1]
            }} className="w-1/2 h-full" style={{
              backgroundColor: x || void 0
            }}>{!x && <div className="w-full h-full bg-black dark:bg-[#5227FF]" />}</motion.div>{et()}</div>)}</>}</div>}</__mod_47962.N><div className={(0, __mod_90650.cn)("w-full h-full", G && "invisible")}>{b}</div></div>;
};
c.displayName = "Preloader";
let u = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, o] = (0, React.useState)(!0),
    [s, d] = (0, React.useState)("stairs"),
    [u, p] = (0, React.useState)(1500),
    [m, f] = (0, React.useState)("#B19EEF"),
    [x, g] = (0, React.useState)(!1),
    [b, h] = (0, React.useState)("fade"),
    [v, y] = (0, React.useState)(99),
    [j, C] = (0, React.useState)(0),
    [w, N] = (0, React.useState)("center"),
    [k, S] = (0, React.useState)(!0),
    [P, F] = (0, React.useState)(!0),
    [T, R] = (0, React.useState)("bottom"),
    [L, B] = (0, React.useState)(10),
    [E, D] = (0, React.useState)("left"),
    [A, I] = (0, React.useState)("up");
  return (0, React.useEffect)(() => {
    let e = setTimeout(() => {
        o(!0);
      }, 0),
      t = setTimeout(() => {
        o(!1);
      }, u + 1e3);
    return () => {
      clearTimeout(e), clearTimeout(t);
    };
  }, [e, u]), <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={() => {
          t();
        }}><c loading={a} variant={s} position="absolute" duration={u} loadingText="loading your experience." bgColor={m || void 0} percentagePosition={w} showPercentageSign={k} showProgressBar={P} progressBarPosition={T} stairCount={L} stairsRevealFrom={E} stairsRevealDirection={A} onComplete={() => console.log("Loading complete!")} onLoadingStart={() => console.log("Loading started!")} onLoadingComplete={() => console.log("Exit animation complete!")} respectReducedMotion={x} reducedMotionFallback={b} ariaLabel="Demo content loading" ariaLive="polite" textFadeThreshold={v} backdropBlur={j}><div className="w-full h-full flex flex-col items-center justify-center p-8 bg-card"><div className="text-center"><h2 className="text-4xl font-medium mb-2 text-foreground">Content Revealed!</h2><p className="text-muted-foreground text-xs">This content was hidden behind the preloader</p></div></div></c></__mod_56388.Ch><__mod_56388.IH><__mod_56388.W7 title="Background Color" value={m} onChange={f} /><__mod_56388.bg title="Variant" value={s} onChange={e => {
            d(e), t();
          }} options={[{
            label: "Stairs",
            value: "stairs"
          }, {
            label: "Percentage",
            value: "percentage"
          }, {
            label: "Circle",
            value: "circle"
          }, {
            label: "Slide",
            value: "slide"
          }, {
            label: "Curtain",
            value: "curtain"
          }]} /><__mod_56388.yt title="Duration (ms)" value={u} onChange={e => {
            p(e), t();
          }} min={1e3} max={5e3} step={100} /><__mod_56388.tl title="Respect Reduced Motion" checked={x} onChange={e => {
            g(e), t();
          }} />{x && <__mod_56388.bg title="Reduced Motion Fallback" value={b} onChange={e => {
            h(e), t();
          }} options={[{
            label: "Fade",
            value: "fade"
          }, {
            label: "None (instant)",
            value: "none"
          }]} />}<__mod_56388.yt title="Text Fade Threshold (%)" value={v} onChange={e => {
            y(e), t();
          }} min={0} max={100} step={1} /><__mod_56388.yt title="Backdrop Blur (px)" value={j} onChange={e => {
            C(e), t();
          }} min={0} max={20} step={1} />{"percentage" === s && <><__mod_56388.bg title="Percentage Position" value={w} onChange={e => {
              N(e), t();
            }} options={[{
              label: "Center",
              value: "center"
            }, {
              label: "Bottom Left",
              value: "bottom-left"
            }, {
              label: "Top Left",
              value: "top-left"
            }]} /><__mod_56388.tl title="Show Percentage Sign" checked={k} onChange={e => {
              S(e), t();
            }} /><__mod_56388.tl title="Show Progress Bar" checked={P} onChange={e => {
              F(e), t();
            }} /><__mod_56388.bg title="Progress Bar Position" value={T} onChange={e => {
              R(e), t();
            }} options={[{
              label: "Bottom",
              value: "bottom"
            }, {
              label: "Top",
              value: "top"
            }]} /></>}{"stairs" === s && <><__mod_56388.yt title="Stair Count" value={L} onChange={e => {
              B(e), t();
            }} min={1} max={20} step={1} /><__mod_56388.bg title="Reveal From" value={E} onChange={e => {
              D(e), t();
            }} options={[{
              label: "Left",
              value: "left"
            }, {
              label: "Right",
              value: "right"
            }, {
              label: "Center",
              value: "center"
            }]} /><__mod_56388.bg title="Reveal Direction" value={A} onChange={e => {
              I(e), t();
            }} options={[{
              label: "Up",
              value: "up"
            }, {
              label: "Down",
              value: "down"
            }]} /></>}</__mod_56388.IH><__mod_56388.Ub data={[{
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Whether the preloader is active"
        }, {
          name: "variant",
          type: '"stairs" | "percentage" | "circle" | "slide" | "curtain"',
          default: '"stairs"',
          description: "Visual variant of the preloader animation"
        }, {
          name: "position",
          type: '"fixed" | "absolute"',
          default: '"absolute"',
          description: "Position type of the preloader container"
        }, {
          name: "duration",
          type: "number",
          default: "2500",
          description: "Duration of the loading animation in milliseconds"
        }, {
          name: "loadingText",
          type: "string",
          default: '"Loading your next level experience"',
          description: "Loading text to display (for stairs and circle variants)"
        }, {
          name: "zIndex",
          type: "number",
          default: "50",
          description: "Z-index for the preloader"
        }, {
          name: "bgColor",
          type: "string",
          default: "undefined",
          description: "Background color (overrides default)"
        }, {
          name: "textClassName",
          type: "string",
          default: '""',
          description: "CSS classes for the loading text"
        }, {
          name: "percentagePosition",
          type: '"center" | "bottom-left" | "top-left"',
          default: '"center"',
          description: "Position of percentage counter (percentage variant only)"
        }, {
          name: "showPercentageSign",
          type: "boolean",
          default: "true",
          description: "Show percentage sign (percentage variant only)"
        }, {
          name: "percentageTextClassName",
          type: "string",
          default: '""',
          description: "CSS classes for percentage text (percentage variant only)"
        }, {
          name: "showProgressBar",
          type: "boolean",
          default: "true",
          description: "Show progress bar (percentage variant only)"
        }, {
          name: "progressBarPosition",
          type: '"top" | "bottom"',
          default: '"bottom"',
          description: "Progress bar position (percentage variant only)"
        }, {
          name: "stairCount",
          type: "number",
          default: "10",
          description: "Number of stairs (stairs variant only)"
        }, {
          name: "stairsRevealFrom",
          type: '"left" | "right" | "center"',
          default: '"left"',
          description: "Direction stairs reveal from (stairs variant only)"
        }, {
          name: "stairsRevealDirection",
          type: '"up" | "down"',
          default: '"up"',
          description: "Direction stairs move when revealing (stairs variant only)"
        }, {
          name: "onComplete",
          type: "() => void",
          default: "undefined",
          description: "Callback function when loading completes"
        }, {
          name: "onLoadingStart",
          type: "() => void",
          default: "undefined",
          description: "Callback function when loading starts"
        }, {
          name: "onLoadingComplete",
          type: "() => void",
          default: "undefined",
          description: "Callback function when exit animation completes"
        }, {
          name: "respectReducedMotion",
          type: "boolean",
          default: "false",
          description: "Respect prefers-reduced-motion system setting"
        }, {
          name: "reducedMotionFallback",
          type: '"fade" | "none"',
          default: '"fade"',
          description: "Fallback behavior when reduced motion is preferred (fade or instant)"
        }, {
          name: "ariaLabel",
          type: "string",
          default: '"Loading content"',
          description: "ARIA label for screen readers"
        }, {
          name: "ariaLive",
          type: '"polite" | "assertive" | "off"',
          default: '"polite"',
          description: "ARIA live region politeness level"
        }, {
          name: "textFadeThreshold",
          type: "number",
          default: "99",
          description: "Progress threshold (0-100) when loading text starts fading out"
        }, {
          name: "backdropBlur",
          type: "number",
          default: "0",
          description: "Backdrop blur amount in pixels"
        }, {
          name: "customContent",
          type: "(progress: number) => ReactNode",
          default: "undefined",
          description: "Custom content render function that receives current progress (0-100)"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for styling"
        }, {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content to show after loading completes"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

export default u;
