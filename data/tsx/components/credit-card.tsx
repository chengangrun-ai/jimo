import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Credit Card
 * A credit card that tilts in 3D on hover
 * slug: credit-card
 * category: ui
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = ({
    cardNumber: e = "1234 5678 9012 3456",
    cardholderName: t = "JOHN DOE",
    expirationDate: a = "12/25",
    cvv: l = "123",
    cardLogo: i,
    chipImage: h,
    background: x = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    scale: m = 1.2,
    rotationIntensity: f = 1,
    parallaxIntensity: g = 1,
    scaleOnHover: b = 1.05,
    showShine: y = !0,
    showShadow: w = !0,
    borderRadius: j = 16,
    textColor: v = "#ffffff",
    hasTextShadow: N = !0,
    showActionButtons: S = !1,
    className: C,
    cardClassName: $,
    buttonsClassName: k
  }) => {
    let R,
      E = (0, React.useRef)(null),
      T = (0, React.useRef)(null),
      D = (0, React.useRef)(null),
      H = (0, React.useRef)(null),
      I = (0, React.useRef)(null),
      [M, O] = (0, React.useState)(!1),
      [P, Y] = (0, React.useState)(!0),
      [A, B] = (0, React.useState)(!1),
      [_, z] = (0, React.useState)(!1),
      [U, X] = (0, React.useState)(!1),
      V = (e.replace(/\s/g, "").match(/.{1,4}/g) || []).join(" "),
      L = P ? V : 0 === (R = e.replace(/\s/g, "").match(/.{1,4}/g) || []).length ? e : R.map((e, t) => 0 === t ? e : "****").join(" "),
      W = P ? a : "**/**",
      J = 320 * m,
      G = (0, React.useCallback)((e, t) => {
        if (!E.current) return null;
        let a = E.current.getBoundingClientRect(),
          s = E.current.clientWidth,
          n = E.current.clientHeight,
          l = .5 - (e - a.left) / s,
          i = .5 - (t - a.top) / n;
        return {
          normalizedX: l,
          normalizedY: i,
          deltaX: e - a.left - s / 2,
          deltaY: t - a.top - n / 2,
          relativeY: t - a.top,
          width: s,
          height: n
        };
      }, []),
      F = (0, React.useCallback)(e => {
        if (!E.current || !T.current) return;
        let t = "touches" in e,
          a = G(t ? e.touches[0].pageX : e.pageX, t ? e.touches[0].pageY : e.pageY);
        if (!a) return;
        let {
            normalizedX: s,
            normalizedY: n,
            deltaX: l,
            deltaY: i,
            relativeY: r,
            width: o,
            height: d
          } = a,
          c = 320 / o,
          u = .08 * c * f,
          p = .06 * c * f * (s - l),
          h = (i - n) * u,
          x = _ ? `rotateY(${180 + p}deg) rotateX(${h}deg)` : `rotateX(${h}deg) rotateY(${p}deg)`;
        M && (x += ` scale3d(${b}, ${b}, ${b})`), T.current.style.transform = x;
        let m = 180 * Math.atan2(i, l) / Math.PI - 90;
        if (m < 0 && (m += 360), D.current) {
          D.current.style.background = `linear-gradient(${m}deg, rgba(255,255,255,${r / d * .35 + .05}) 0%, rgba(255,255,255,0) 75%)`;
          let e = _ ? " rotateY(180deg)" : "";
          D.current.style.transform = `translateX(${2 * s - .15}px) translateY(${2 * n - .15}px)${e}`;
        }
        if (!_) {
          let e = 2.8 * g;
          H.current && (H.current.style.transform = `translate3d(${2 * s * (0 * e) / c}px, ${2 * n * (0 * e) / c}px, 0)`), I.current && (I.current.style.transform = `translate3d(${2 * s * e / c}px, ${2 * n * e / c}px, 0)`);
        }
      }, [_, M, G, f, g, b, 320]),
      q = (0, React.useCallback)(() => {
        O(!0);
      }, []),
      K = (0, React.useCallback)(() => {
        O(!1), T.current && (T.current.style.transform = _ ? "rotateY(180deg)" : ""), D.current && (D.current.style.cssText = ""), H.current && (H.current.style.transform = ""), I.current && (I.current.style.transform = "");
      }, [_]),
      Q = (0, React.useCallback)(() => {
        O(!0);
      }, []),
      Z = (0, React.useCallback)(() => {
        K();
      }, [K]),
      ee = (0, React.useCallback)(() => {
        P && (navigator.clipboard.writeText(e), B(!0), setTimeout(() => B(!1), 2e3));
      }, [e, P]),
      et = (0, React.useCallback)(() => {
        X(!0), z(e => !e), setTimeout(() => X(!1), 600);
      }, []),
      ea = {
        cardNumber: `${20 * m}px`,
        label: `${10 * m}px`,
        text: `${12 * m}px`
      },
      es = {
        padding: `${24 * m}px`,
        gap: `${12 * m}px`,
        chipWidth: `${40 * m}px`,
        chipHeight: `${32 * m}px`,
        logoHeight: `${32 * m}px`
      };
    return <motion.div className={(0, __mod_90650.cn)("inline-flex flex-col items-center gap-4", C)} initial={{
      opacity: 0,
      scale: .8,
      y: 20
    }} animate={{
      opacity: 1,
      scale: 1,
      y: 0
    }} transition={{
      duration: .6,
      ease: [.34, 1.56, .64, 1]
    }}><div ref={E} className="relative inline-block touch-none cursor-pointer transform-3d" style={{
        width: `${J}px`,
        height: `${200 * m}px`,
        borderRadius: `${j}px`,
        transform: `perspective(${3 * J}px)`
      }} onMouseMove={F} onMouseEnter={q} onMouseLeave={K} onTouchStart={Q} onTouchMove={F} onTouchEnd={Z} onClick={et}><motion.div ref={T} className={(0, __mod_90650.cn)("relative w-full h-full will-change-transform transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform-3d", M && "active-state", $)} style={{
          borderRadius: `${j}px`
        }} animate={{
          rotateY: 180 * !!_
        }} transition={{
          duration: .6,
          ease: "easeInOut"
        }}>{w && <motion.div className={(0, __mod_90650.cn)("absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-transparent transition-all duration-200 ease-out", M ? "shadow-[0_45px_100px_rgba(14,21,47,0.4),0_16px_40px_rgba(14,21,47,0.4)]" : "shadow-[0_8px_30px_rgba(14,21,47,0.6)]")} style={{
            borderRadius: `${j}px`
          }} animate={{
            opacity: +!U
          }} transition={{
            duration: .3,
            ease: "easeInOut"
          }} />}<div className="absolute inset-0 w-full h-full overflow-hidden transform-3d backface-hidden" style={{
            borderRadius: `${j}px`
          }}><div ref={H} className="absolute inset-0 w-full h-full" style={{
              background: x,
              borderRadius: `${j}px`
            }} /><div ref={I} className="absolute inset-0 w-full h-full flex flex-col justify-between" style={{
              borderRadius: `${j}px`,
              color: v,
              padding: es.padding
            }}><div className="flex justify-between items-start"><div className="flex items-center" style={{
                  gap: es.gap
                }}>{h && <img src={h} alt="Card chip" className="object-contain" style={{
                    width: es.chipWidth,
                    height: es.chipHeight
                  }} />}</div>{i && <img src={i} alt="Card logo" className="object-contain" style={{
                  height: es.logoHeight
                }} />}</div><div className="w-full flex justify-between font-mono font-medium" style={{
                fontSize: ea.cardNumber,
                textShadow: N ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none"
              }}>{L.split(" ").map((e, t) => <span className="inline-flex tracking-wider">{e.split("").map((e, a) => <motion.span initial={{
                    scale: 0,
                    opacity: 0
                  }} animate={{
                    scale: 1,
                    opacity: 1
                  }} exit={{
                    scale: 0,
                    opacity: 0
                  }} transition={{
                    duration: .2,
                    delay: (4 * t + a) * .02,
                    ease: "easeOut"
                  }} className="inline-block">{e}</motion.span>)}</span>)}</div><div className="flex justify-between items-end" style={{
                fontSize: ea.text
              }}><div className="flex flex-col"><span className="opacity-70" style={{
                    fontSize: ea.label,
                    marginBottom: `${4 * m}px`
                  }}>CARDHOLDER</span><span className="uppercase font-medium tracking-wide" style={{
                    textShadow: N ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none"
                  }}>{t}</span></div><div className="flex flex-col items-end"><span className="opacity-70" style={{
                    fontSize: ea.label,
                    marginBottom: `${4 * m}px`
                  }}>EXPIRES</span><span className="inline-flex" style={{
                    textShadow: N ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none"
                  }}>{W.split("").map((e, t) => <motion.span initial={{
                      scale: 0,
                      opacity: 0
                    }} animate={{
                      scale: 1,
                      opacity: 1
                    }} exit={{
                      scale: 0,
                      opacity: 0
                    }} transition={{
                      duration: .2,
                      delay: .03 * t,
                      ease: "easeOut"
                    }} className="inline-block">{e}</motion.span>)}</span></div></div></div></div><div className="absolute inset-0 w-full h-full overflow-hidden transform-3d backface-hidden" style={{
            borderRadius: `${j}px`,
            transform: "rotateY(180deg)"
          }}><div className="absolute inset-0 w-full h-full" style={{
              background: x,
              borderRadius: `${j}px`
            }} /><div className="absolute inset-0 w-full h-full flex flex-col" style={{
              borderRadius: `${j}px`,
              color: v
            }}><div className="w-full bg-black" style={{
                height: `${40 * m}px`,
                marginTop: `${20 * m}px`
              }} /><div className="flex-1 flex items-center justify-start" style={{
                paddingLeft: es.padding
              }}><div className="bg-white flex flex-col items-start justify-center" style={{
                  width: `${120 * m}px`,
                  height: `${40 * m}px`,
                  paddingLeft: `${12 * m}px`,
                  borderRadius: `${4 * m}px`
                }}><span className="text-gray-500" style={{
                    fontSize: ea.label,
                    marginBottom: `${2 * m}px`
                  }}>CVV</span><span className="text-gray-900 font-mono font-semibold tracking-wider" style={{
                    fontSize: ea.text
                  }}>{P ? l : "***"}</span></div></div></div></div>{y && <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{
            borderRadius: `${j}px`
          }}><div ref={D} className="absolute inset-0 w-full h-full" style={{
              background: "linear-gradient(135deg, rgba(255,255,255,.25) 0%, rgba(255,255,255,0) 60%)"
            }} /></div>}</motion.div></div>{S && <div className={(0, __mod_90650.cn)("flex gap-2", k)}><button onClick={() => Y(!P)} className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center" title={P ? "Hide details" : "Show details"}>{P ? <Eye className="w-5 h-5 text-gray-700" /> : <EyeOff className="w-5 h-5 text-gray-700" />}</button><button onClick={ee} disabled={!P} className={(0, __mod_90650.cn)("w-10 h-10 rounded-full bg-white shadow-md transition-all duration-200 flex items-center justify-center", P ? "hover:shadow-lg cursor-pointer" : "opacity-50 cursor-not-allowed")} title={P ? A ? "Copied!" : "Copy card number" : "Show details to copy"}>{A ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-700" />}</button></div>}</motion.div>;
  },
  x = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, r] = (0, React.useState)("1234 5678 9012 3456"),
      [o, d] = (0, React.useState)("JOHN DOE"),
      [c, u] = (0, React.useState)("12/25"),
      [p, x] = (0, React.useState)("123"),
      [m, f] = (0, React.useState)("linear-gradient(45deg, #fff 0%, #c4c4c4 100%)"),
      [g, b] = (0, React.useState)("#000000"),
      [y, w] = (0, React.useState)(!0),
      [j, v] = (0, React.useState)(1.2),
      [N, S] = (0, React.useState)(16),
      [C, $] = (0, React.useState)(1),
      [k, R] = (0, React.useState)(1),
      [E, T] = (0, React.useState)(1.05),
      [D, H] = (0, React.useState)(!0),
      [I, M] = (0, React.useState)(!0),
      [O, P] = (0, React.useState)(!1);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><HComp cardNumber={a} cardholderName={o} expirationDate={c} cvv={p} background={m || void 0} textColor={g} hasTextShadow={y} scale={j} borderRadius={N} rotationIntensity={C} parallaxIntensity={k} scaleOnHover={E} showShine={D} showShadow={I} showActionButtons={O} /></__mod_56388.Ch><__mod_56388.IH><__mod_56388.UD title="Card Number" value={a} onChange={e => r(e)} placeholder="1234 5678 9012 3456" /><__mod_56388.UD title="Cardholder Name" value={o} onChange={e => d(e)} placeholder="JOHN DOE" /><__mod_56388.UD title="Expiration Date" value={c} onChange={e => u(e)} placeholder="12/25" /><__mod_56388.UD title="CVV" value={p} onChange={e => x(e)} placeholder="123" /><__mod_56388.W7 title="Text Color" value={g} onChange={e => b(e)} /><__mod_56388.UD title="Background" value={m} onChange={e => f(e)} placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" /><__mod_56388.yt title="Scale" value={j} onChange={v} min={.5} max={2} step={.1} /><__mod_56388.yt title="Border Radius" value={N} onChange={S} min={0} max={32} step={1} valueUnit="px" /><__mod_56388.tl title="Text Shadow" checked={y} onChange={w} /><__mod_56388.yt title="Rotation Intensity" value={C} onChange={$} min={0} max={2} step={.1} /><__mod_56388.yt title="Parallax Intensity" value={k} onChange={R} min={0} max={2} step={.1} /><__mod_56388.yt title="Scale on Hover" value={E} onChange={T} min={1} max={1.2} step={.01} /><__mod_56388.tl title="Show Shine" checked={D} onChange={H} /><__mod_56388.tl title="Show Shadow" checked={I} onChange={M} /><__mod_56388.tl title="Show Action Buttons" checked={O} onChange={P} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "cardNumber",
            type: "string",
            default: '"1234 5678 9012 3456"',
            description: "Card number (will be automatically formatted with spaces)"
          }, {
            name: "cardholderName",
            type: "string",
            default: '"JOHN DOE"',
            description: "Name of the cardholder displayed on the card"
          }, {
            name: "expirationDate",
            type: "string",
            default: '"12/25"',
            description: "Card expiration date in MM/YY format"
          }, {
            name: "cvv",
            type: "string",
            default: '"123"',
            description: "CVV code (3 digits) shown on the back when card is flipped"
          }, {
            name: "cardLogo",
            type: "string",
            default: "undefined",
            description: "URL for card company logo (Visa, Mastercard, etc.)"
          }, {
            name: "chipImage",
            type: "string",
            default: "undefined",
            description: "URL for card chip image (optional)"
          }, {
            name: "background",
            type: "string",
            default: "random gradient",
            description: "CSS gradient or color for card background"
          }, {
            name: "textColor",
            type: "string",
            default: '"#ffffff"',
            description: "Color for all text on the card"
          }, {
            name: "hasTextShadow",
            type: "boolean",
            default: "true",
            description: "Enable text shadow on card number, name, and expiration date"
          }, {
            name: "scale",
            type: "number",
            default: "1.2",
            description: "Scale factor for card size (maintains aspect ratio)"
          }, {
            name: "rotationIntensity",
            type: "number",
            default: "1",
            description: "Multiplier for the 3D rotation effect intensity (0-2)"
          }, {
            name: "parallaxIntensity",
            type: "number",
            default: "1",
            description: "Multiplier for the parallax layer movement intensity (0-2)"
          }, {
            name: "scaleOnHover",
            type: "number",
            default: "1.05",
            description: "Scale factor applied when hovering over the card"
          }, {
            name: "showShine",
            type: "boolean",
            default: "true",
            description: "Enable or disable the dynamic shine gradient effect"
          }, {
            name: "showShadow",
            type: "boolean",
            default: "true",
            description: "Enable or disable the shadow effect"
          }, {
            name: "borderRadius",
            type: "number",
            default: "16",
            description: "Border radius of the card in pixels"
          }, {
            name: "showActionButtons",
            type: "boolean",
            default: "false",
            description: "Show action buttons below card (eye to toggle visibility, copy to clipboard)"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes to apply to the wrapper"
          }, {
            name: "cardClassName",
            type: "string",
            default: '""',
            description: "Additional CSS classes to apply to the card element"
          }, {
            name: "buttonsClassName",
            type: "string",
            default: '""',
            description: "Additional CSS classes to apply to the action buttons container"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const HComp: any = h;

export default x;
