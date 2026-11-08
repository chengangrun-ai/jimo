import { motion, AnimatePresence } from "motion/react";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_51114 from "../_helpers/51114";
/**
 * Staggered Text
 * Text that staggers in by letter, word or line
 * slug: staggered-text
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = (0, React.forwardRef)(({
  text: e,
  className: t = "",
  as: n = "p",
  segmentBy: i = "words",
  separator: l,
  delay: s = 80,
  duration: u = .6,
  easing: c = e => e,
  threshold: d = .1,
  rootMargin: p = "0px",
  direction: m = "top",
  blur: f = !0,
  from: h,
  to: g,
  staggerDirection: b = "forward",
  respectReducedMotion: v = !0,
  exitOnScrollOut: x = !1,
  onAnimationComplete: y,
  onExitComplete: w
}, C) => {
  let S,
    j,
    E = (0, React.useRef)(null),
    [M, k] = (0, React.useState)(!1),
    [O, I] = (0, React.useState)(!1),
    [D, N] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!v) return;
    let e = window.matchMedia("(prefers-reduced-motion: reduce)");
    N(e.matches);
    let t = e => {
      N(e.matches);
    };
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, [v]), (0, React.useImperativeHandle)(C, () => ({
    replay: () => {
      I(!1), k(!1), requestAnimationFrame(() => {
        k(!0);
      });
    },
    exit: () => {
      I(!0);
    }
  })), (0, React.useEffect)(() => {
    if (!E.current) return;
    let e = new IntersectionObserver(([t]) => {
      t.isIntersecting ? (k(!0), I(!1), !x && E.current && e.unobserve(E.current)) : x && M && I(!0);
    }, {
      threshold: d,
      rootMargin: p
    });
    return e.observe(E.current), () => e.disconnect();
  }, [d, p, x, M]);
  let T = (0, React.useMemo)(() => {
      let e = {
        opacity: 0
      };
      return "top" === m || "bottom" === m ? e.y = "top" === m ? -40 : 40 : e.x = "left" === m ? -40 : 40, f && (e.filter = "blur(10px)"), e;
    }, [m, f]),
    A = (0, React.useMemo)(() => {
      let e = "left" === m || "right" === m ? "x" : "y";
      return f ? [{
        opacity: .7,
        [e]: "top" === m || "left" === m ? 5 : -5,
        filter: "blur(5px)"
      }, {
        opacity: 1,
        [e]: 0,
        filter: "blur(0px)"
      }] : [{
        opacity: 1,
        [e]: 0
      }];
    }, [m, f]),
    B = (0, React.useMemo)(() => h ?? T, [h, T]),
    P = (0, React.useMemo)(() => g ? Array.isArray(g) ? g : [g] : A, [g, A]),
    R = P.length + 1,
    L = (0, React.useMemo)(() => Array.from({
      length: R
    }, (e, t) => 1 === R ? 0 : t / (R - 1)), [R]),
    {
      rowsSegments: U,
      totalSegments: H
    } = (0, React.useMemo)(() => {
      if (!e) return {
        rowsSegments: [],
        totalSegments: 0
      };
      let t = (l && l.length > 0 ? e.split(l) : e.split(/\r?\n/)).map(e => {
          switch (i) {
            case "chars":
              return e.split("");
            case "lines":
              return [e];
            default:
              return e.split(" ");
          }
        }),
        n = t.reduce((e, t) => e + t.length, 0);
      return {
        rowsSegments: t,
        totalSegments: n
      };
    }, [e, i, l]);
  if (!e) return null;
  let $ = (S = new Set([...Object.keys(B), ...P.flatMap(e => Object.keys(e))]), j = {}, S.forEach(e => {
      j[e] = [B[e], ...P.map(t => t[e])];
    }), j),
    F = 0,
    _ = U.length > 1;
  return <n ref={E} className={`staggered-text ${_ || "lines" === i ? "block" : "flex flex-wrap"} whitespace-pre-wrap ${t}`}>{U.map((e, t) => <>{e.map((n, r) => {
        let l = F++,
          d = l === H - 1,
          p = D ? {
            duration: .01,
            delay: 0
          } : {
            duration: u,
            times: L,
            delay: ((e, t) => {
              if (D) return 0;
              switch (b) {
                case "reverse":
                  return (t - 1 - e) * s / 1e3;
                case "center":
                  return Math.abs(e - (t - 1) / 2) * s / 1e3;
                default:
                  return e * s / 1e3;
              }
            })(l, H),
            ease: c
          };
        return <motion.span initial={B} animate={O ? B : M ? $ : B} transition={p} onAnimationComplete={d ? () => {
          O ? w?.() : y?.();
        } : void 0} style={{
          display: "lines" === i ? "block" : "inline-block",
          willChange: "transform, filter, opacity"
        }}>{"chars" === i && " " === n ? "\xa0" : n}{"words" === i && r < e.length - 1 && "\xa0"}</motion.span>;
      })}{t < U.length - 1 && "lines" !== i && <br />}</>)}</n>;
});
u.displayName = "StaggeredText";
let c = {
    linear: e => e,
    easeIn: e => e * e,
    easeOut: e => e * (2 - e),
    easeInOut: e => e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
    elastic: e => {
      let t = 2 * Math.PI / 3;
      return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * t) + 1;
    },
    bounce: e => e < .36363636363636365 ? 7.5625 * e * e : e < .7272727272727273 ? 7.5625 * (e -= .5454545454545454) * e + .75 : e < .9090909090909091 ? 7.5625 * (e -= .8181818181818182) * e + .9375 : 7.5625 * (e -= .9545454545454546) * e + .984375,
    anticipate: e => 2.70158 * e * e * e - 1.70158 * e * e
  },
  d = () => {
    let [e, t] = (0, React.useState)("Build faster|than ever"),
      [n, o] = (0, React.useState)("chars"),
      [d, p] = (0, React.useState)("|"),
      [m, f] = (0, React.useState)(1),
      [h, g] = (0, React.useState)(80),
      [b, v] = (0, React.useState)("top"),
      [x, y] = (0, React.useState)(!0),
      [w, C] = (0, React.useState)("anticipate"),
      [S, j] = (0, React.useState)("forward"),
      [E, M] = (0, React.useState)(!1),
      [k, O] = (0, __mod_90761.I)();
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={O}><u text={e} segmentBy={n} separator={d} as="p" className="text-6xl text-center font-bold tracking-tighter" direction={b} delay={h} duration={m} blur={x} easing={c[w]} staggerDirection={S} exitOnScrollOut={!1} onAnimationComplete={E ? () => __mod_51114.oR.success("Animation complete!") : void 0} onExitComplete={E ? () => __mod_51114.oR.info("Exit complete!") : void 0} /></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Text" value={e} onChange={e => {
              t(e), O();
            }} placeholder="Enter text to animate" /><__mod_56388.UD title="Separator" value={d} onChange={e => {
              p(e), O();
            }} placeholder="e.g., | or ///" /><__mod_56388.bg title="Segment By" value={n} options={[{
              label: "Characters",
              value: "chars"
            }, {
              label: "Words",
              value: "words"
            }, {
              label: "Lines",
              value: "lines"
            }]} onChange={e => {
              o(e), O();
            }} /><__mod_56388.bg title="Stagger Direction" value={S} options={[{
              label: "Forward",
              value: "forward"
            }, {
              label: "Reverse",
              value: "reverse"
            }, {
              label: "Center Out",
              value: "center"
            }]} onChange={e => {
              j(e), O();
            }} /><__mod_56388.bg title="Direction" value={b} options={[{
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
            }]} onChange={e => {
              v(e), O();
            }} /><__mod_56388.bg title="Easing" value={w} options={[{
              label: "Linear",
              value: "linear"
            }, {
              label: "Ease In",
              value: "easeIn"
            }, {
              label: "Ease Out",
              value: "easeOut"
            }, {
              label: "Ease In Out",
              value: "easeInOut"
            }, {
              label: "Elastic",
              value: "elastic"
            }, {
              label: "Bounce",
              value: "bounce"
            }, {
              label: "Anticipate",
              value: "anticipate"
            }]} onChange={e => {
              C(e), O();
            }} /><__mod_56388.yt title="Duration" value={m} onChange={e => {
              f(e), O();
            }} min={.1} max={2} step={.1} valueUnit="s" /><__mod_56388.yt title="Delay" value={h} onChange={e => {
              g(e), O();
            }} min={10} max={200} step={10} valueUnit="ms" /><__mod_56388.tl title="Blur Effect" checked={x} onChange={e => {
              y(e), O();
            }} /><__mod_56388.tl title="Show Callback" checked={E} onChange={e => {
              M(e), O();
            }} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "text",
            type: "string",
            default: '""',
            description: "The text content to animate with staggered effect."
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes to apply to the container."
          }, {
            name: "as",
            type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"',
            default: '"p"',
            description: "The HTML element to render as."
          }, {
            name: "segmentBy",
            type: '"chars" | "words" | "lines"',
            default: '"words"',
            description: "How to split the text for staggered animation."
          }, {
            name: "separator",
            type: "string",
            default: "undefined",
            description: "Custom separator to split text into rows/lines before segmenting."
          }, {
            name: "delay",
            type: "number",
            default: "80",
            description: "Delay between each segment animation in milliseconds."
          }, {
            name: "duration",
            type: "number",
            default: "0.6",
            description: "Duration of each segment animation in seconds."
          }, {
            name: "easing",
            type: "Easing | Easing[]",
            default: "(t) => t",
            description: "Motion easing function (single or per-keyframe)."
          }, {
            name: "threshold",
            type: "number",
            default: "0.1",
            description: "IntersectionObserver threshold for scroll trigger."
          }, {
            name: "rootMargin",
            type: "string",
            default: '"0px"',
            description: "IntersectionObserver rootMargin for scroll trigger."
          }, {
            name: "direction",
            type: '"top" | "bottom" | "left" | "right"',
            default: '"top"',
            description: "Direction of movement for the animation."
          }, {
            name: "blur",
            type: "boolean",
            default: "true",
            description: "Enable blur effect in the default animation."
          }, {
            name: "staggerDirection",
            type: '"forward" | "reverse" | "center"',
            default: '"forward"',
            description: "Direction of stagger: forward (start to end), reverse (end to start), or center (middle out)."
          }, {
            name: "respectReducedMotion",
            type: "boolean",
            default: "true",
            description: "Respect user's prefers-reduced-motion setting."
          }, {
            name: "exitOnScrollOut",
            type: "boolean",
            default: "false",
            description: "Automatically trigger exit animation when component scrolls out of view."
          }, {
            name: "from",
            type: "MotionStyle",
            default: "undefined",
            description: "Override default initial animation state."
          }, {
            name: "to",
            type: "MotionStyle | MotionStyle[]",
            default: "undefined",
            description: "Override default final animation state(s)."
          }, {
            name: "onAnimationComplete",
            type: "() => void",
            default: "undefined",
            description: "Callback fired when the last segment finishes animating."
          }, {
            name: "onExitComplete",
            type: "() => void",
            default: "undefined",
            description: "Callback fired when exit animation completes."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default u;
