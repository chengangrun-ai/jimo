import { motion, AnimatePresence } from "motion/react";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_47650 from "../_helpers/47650";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Modal Cards
 * Cards that expand into full-screen modals
 * slug: modal-cards
 * category: modal
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    id: "abstract-rose-balance",
    imageUrl: "/demo-media/abstract-rose-balance.webp",
    title: "Rose balance",
    description: "A raspberry rectangle tilts toward a small tangerine disc. Their offset positions turn a simple pink field into a playful study of weight and balance.",
    gradientColor: "#cd427b"
  }, {
    id: "abstract-amber-loop",
    imageUrl: "/demo-media/abstract-amber-loop.webp",
    title: "Amber loop",
    description: "An amber loop holds an open center against a raspberry-purple field. A warm gradient and fine grain give this simple gesture a soft, printed texture.",
    gradientColor: "#c66a2a"
  }, {
    id: "abstract-fuchsia-wave",
    imageUrl: "/demo-media/abstract-fuchsia-wave.webp",
    title: "Fuchsia wave",
    description: "A broad fuchsia band bends through deep plum in one continuous curve. Coral light moves across its surface while the open background keeps the shape clear.",
    gradientColor: "#a52b8c"
  }],
  p = {
    slow: {
      duration: .6,
      springStiffness: 200,
      springDamping: 25
    },
    normal: {
      duration: .4,
      springStiffness: 300,
      springDamping: 30
    },
    fast: {
      duration: .2,
      springStiffness: 400,
      springDamping: 35
    },
    none: {
      duration: 0,
      springStiffness: 500,
      springDamping: 50
    }
  },
  m = ({
    cards: e = u,
    className: t,
    gradientColor: a = "#6366f1",
    animationSpeed: r = "normal",
    springStiffness: o,
    springDamping: m,
    animationVariant: f = "scale",
    closeOnBackdropClick: h = !0,
    closeOnEscape: g = !0,
    showCloseButton: b = !0,
    ariaLabel: y = "Card details modal",
    backdropGradientPosition: v = "50% 10%",
    modalClassName: x,
    backdropClassName: w
  }) => {
    let [j, C] = (0, React.useState)(null),
      [k, N] = (0, React.useState)(!1),
      [S, P] = (0, React.useState)(new Set()),
      I = p[r],
      E = o ?? I.springStiffness,
      A = m ?? I.springDamping,
      $ = "none" === r,
      B = {
        type: "spring",
        stiffness: E,
        damping: A
      },
      T = {
        type: "spring",
        stiffness: 1.3 * E,
        damping: 1.2 * A
      };
    return (0, React.useEffect)(() => {
      let e = setTimeout(() => N(!0), 0);
      return () => clearTimeout(e);
    }, []), (0, React.useEffect)(() => (j ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
      document.body.style.overflow = "";
    }), [j]), (0, React.useEffect)(() => {
      if (!g || !j) return;
      let e = e => {
        "Escape" === e.key && C(null);
      };
      return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
    }, [j, g]), <div className={(0, __mod_90650.cn)("relative w-full @container", t)}><div className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-6 p-4">{e.map(e => <motion.div layoutId={`card-${e.id}`} onClick={() => C(e)} className="relative cursor-pointer rounded-2xl overflow-hidden group border aspect-4/3" whileTap={$ ? void 0 : {
          scale: .98
        }} transition={$ ? {
          duration: 0
        } : T}><motion.img layoutId={`image-${e.id}`} src={e.imageUrl} alt={e.title} className={(0, __mod_90650.cn)("w-full h-full object-cover transition-opacity duration-500", S.has(e.id) ? "opacity-100" : "opacity-0")} onLoad={() => {
            var t;
            return t = e.id, void P(e => {
              let a = new Set(e);
              return a.add(t), a;
            });
          }} /><motion.div layoutId={`overlay-${e.id}`} className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-6 pt-12"><div className="flex items-end justify-between"><motion.h3 layoutId={`title-${e.id}`} className="text-white text-xl font-bold">{e.title}</motion.h3><motion.div layoutId={`icon-${e.id}`} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/30 transition-colors"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></motion.div></div></motion.div></motion.div>)}</div>{k && (0, __mod_47650.createPortal)(<__mod_47962.N mode="wait">{j && <><motion.div initial={$ ? {
            opacity: 1
          } : {
            opacity: 0,
            backdropFilter: "blur(0px)"
          }} animate={$ ? {
            opacity: 1
          } : {
            opacity: 1,
            backdropFilter: "blur(8px)"
          }} exit={$ ? {
            opacity: 1
          } : {
            opacity: 0,
            backdropFilter: "blur(0px)"
          }} transition={$ ? {
            duration: 0
          } : {
            duration: I.duration,
            ease: [.32, .72, 0, 1]
          }} onClick={() => {
            h && C(null);
          }} className={(0, __mod_90650.cn)("fixed inset-0 z-999999", h && "cursor-pointer", w)} style={{
            background: `radial-gradient(125% 125% at ${v}, light-dark(#fff, #0a0a0a) 40%, ${j.gradientColor || a} 100%)`
          }} role="button" aria-label={h ? "Close modal" : void 0} tabIndex={h ? 0 : -1} /><div className="fixed inset-0 z-1000000 flex items-center justify-center p-8 pointer-events-none" role="dialog" aria-modal="true" aria-label={y}><motion.div layoutId={"scale" === f ? `card-${j.id}` : void 0} initial={(() => {
              if ($) return {
                opacity: 1
              };
              switch (f) {
                case "fade":
                  return {
                    opacity: 0
                  };
                case "slide":
                  return {
                    opacity: 0,
                    y: 50
                  };
                default:
                  return {
                    opacity: 0,
                    scale: .9
                  };
              }
            })()} animate={(() => {
              if ($) return {
                opacity: 1
              };
              switch (f) {
                case "fade":
                  return {
                    opacity: 1
                  };
                case "slide":
                  return {
                    opacity: 1,
                    y: 0
                  };
                default:
                  return {
                    opacity: 1,
                    scale: 1
                  };
              }
            })()} exit={(() => {
              if ($) return {
                opacity: 1
              };
              switch (f) {
                case "fade":
                  return {
                    opacity: 0
                  };
                case "slide":
                  return {
                    opacity: 0,
                    y: 50
                  };
                default:
                  return {
                    opacity: 0,
                    scale: .9
                  };
              }
            })()} className={(0, __mod_90650.cn)("relative rounded-2xl overflow-hidden max-w-3xl w-full max-h-[80vh] bg-white shadow-2xl pointer-events-auto", x)} style={{
              backgroundColor: "light-dark(#fff, #0a0a0a)"
            }} onClick={e => e.stopPropagation()} transition={$ ? {
              duration: 0
            } : B}><motion.div className="relative h-96"><motion.img layoutId={"scale" === f ? `image-${j.id}` : void 0} src={j.imageUrl} alt={j.title} className="w-full h-full object-cover" transition={$ ? {
                  duration: 0
                } : B} /><motion.div layoutId={"scale" === f ? `overlay-${j.id}` : void 0} className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-6 pt-12" transition={$ ? {
                  duration: 0
                } : B}><div className="flex items-end justify-between"><motion.h3 layoutId={"scale" === f ? `title-${j.id}` : void 0} className="text-white text-3xl font-bold" transition={$ ? {
                      duration: 0
                    } : B}>{j.title}</motion.h3>{b && <motion.button layoutId={"scale" === f ? `icon-${j.id}` : void 0} onClick={e => {
                      e.stopPropagation(), C(null);
                    }} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors" whileHover={$ ? void 0 : {
                      scale: 1.1,
                      rotate: 90
                    }} whileTap={$ ? void 0 : {
                      scale: .9
                    }} transition={$ ? {
                      duration: 0
                    } : T} aria-label="Close modal"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></motion.button>}</div></motion.div></motion.div><motion.div className="p-8 overflow-y-auto" initial={$ ? {
                opacity: 1
              } : {
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={$ ? {
                opacity: 1
              } : {
                opacity: 0
              }} transition={$ ? {
                duration: 0
              } : {
                duration: .75 * I.duration,
                delay: .375 * I.duration,
                ease: [.32, .72, 0, 1]
              }}><motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed" initial={$ ? {
                  opacity: 1,
                  y: 0
                } : {
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={$ ? {
                  opacity: 1,
                  y: 0
                } : {
                  opacity: 0,
                  y: 10
                }} transition={$ ? {
                  duration: 0
                } : {
                  type: "spring",
                  stiffness: .7 * E,
                  damping: .9 * A
                }}>{j.description}</motion.p></motion.div></motion.div></div></>}</__mod_47962.N>, document.body)}</div>;
  };
m.displayName = "ModalCards";
let f = () => {
  let [e, t] = (0, __mod_90761.I)(),
    [a, s] = (0, React.useState)("normal"),
    [l, d] = (0, React.useState)("scale"),
    [c, u] = (0, React.useState)(!0),
    [p, f] = (0, React.useState)(!0),
    [h, g] = (0, React.useState)(!0);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="w-full flex items-center justify-center py-12"><MScene animationSpeed={a} animationVariant={l} closeOnBackdropClick={c} closeOnEscape={p} showCloseButton={h} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Animation Speed" value={a} onChange={e => s(e)} options={[{
            value: "slow",
            label: "Slow"
          }, {
            value: "normal",
            label: "Normal"
          }, {
            value: "fast",
            label: "Fast"
          }, {
            value: "none",
            label: "None"
          }]} /><__mod_56388.bg title="Animation Variant" value={l} onChange={e => d(e)} options={[{
            value: "scale",
            label: "Scale (with morphing)"
          }, {
            value: "fade",
            label: "Fade"
          }, {
            value: "slide",
            label: "Slide"
          }]} /><__mod_56388.tl title="Close on Backdrop Click" checked={c} onChange={u} /><__mod_56388.tl title="Close on Escape" checked={p} onChange={f} /><__mod_56388.tl title="Show Close Button" checked={h} onChange={g} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "cards",
          type: "CardData[]",
          default: "defaultCards",
          description: "Array of card data to display (id, imageUrl, title, description, gradientColor)"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "Additional CSS classes for the container"
        }, {
          name: "gradientColor",
          type: "string",
          default: '"#6366f1"',
          description: "Default gradient color for all cards (can be overridden per card)"
        }, {
          name: "animationSpeed",
          type: '"slow" | "normal" | "fast" | "none"',
          default: '"normal"',
          description: "Animation speed preset controlling all animation timings"
        }, {
          name: "springStiffness",
          type: "number",
          default: "undefined",
          description: "Override spring stiffness for animations (affects bounce/snap)"
        }, {
          name: "springDamping",
          type: "number",
          default: "undefined",
          description: "Override spring damping for animations (affects smoothness)"
        }, {
          name: "animationVariant",
          type: '"scale" | "fade" | "slide"',
          default: '"scale"',
          description: "Animation variant for modal entry (scale uses layoutId morphing)"
        }, {
          name: "closeOnBackdropClick",
          type: "boolean",
          default: "true",
          description: "Close modal when clicking the backdrop"
        }, {
          name: "closeOnEscape",
          type: "boolean",
          default: "true",
          description: "Close modal when pressing the Escape key"
        }, {
          name: "showCloseButton",
          type: "boolean",
          default: "true",
          description: "Show close button (\xd7) in the modal"
        }, {
          name: "ariaLabel",
          type: "string",
          default: '"Card details modal"',
          description: "Aria label for modal accessibility"
        }, {
          name: "backdropGradientPosition",
          type: "string",
          default: '"50% 10%"',
          description: "Position of backdrop radial gradient center"
        }, {
          name: "modalClassName",
          type: "string",
          default: '""',
          description: "Custom CSS classes for the modal container"
        }, {
          name: "backdropClassName",
          type: "string",
          default: '""',
          description: "Custom CSS classes for the backdrop"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const MScene: any = m;

export default f;
