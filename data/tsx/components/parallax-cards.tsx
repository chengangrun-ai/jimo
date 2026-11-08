import { gsap } from "gsap";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_45949 from "../_helpers/45949";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
import * as __mod_48543 from "../_helpers/48543";
/**
 * Parallax Cards
 * Layered cards that shift in depth with the cursor
 * slug: parallax-cards
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = ({
    images: e,
    cardCount: t,
    perspective: a = 2500,
    mouseSensitivity: o = 3,
    cardWidth: n,
    cardHeight: l,
    animationDuration: s = 1.2,
    enableDepthFog: p = !1,
    fogIntensity: u = 1,
    enableMagneticAttraction: m = !1,
    magneticStrength: b = 50,
    onCardClick: g,
    className: h
  }) => {
    let f = (0, React.useRef)(null),
      v = (0, React.useRef)(null),
      w = (0, React.useRef)([]),
      y = (0, React.useRef)({
        x: 0,
        y: 0
      }),
      [x, S] = (0, React.useState)(!0),
      [C, k] = (0, React.useState)(!1),
      [X, Y] = (0, React.useState)(null),
      j = Math.min(t || e.length, 12),
      E = e.slice(0, j);
    (0, React.useEffect)(() => {
      let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
        t = e => {
          k(e.matches);
        };
      return t(e), e.addEventListener("change", t), () => e.removeEventListener("change", t);
    }, []), (0, React.useEffect)(() => {
      let e = f.current,
        t = new IntersectionObserver(e => {
          e.forEach(e => {
            S(e.isIntersecting);
          });
        }, {
          threshold: .1
        });
      return e && t.observe(e), () => {
        e && t.unobserve(e);
      };
    }, []);
    let P = (0, React.useCallback)(() => {
        let e = window.innerWidth,
          t = window.innerHeight;
        return [{
          posX: -(.25 * e),
          posY: -(.2 * t),
          depth: -200,
          size: .9,
          tiltX: -5,
          tiltY: 5
        }, {
          posX: .25 * e,
          posY: -(.25 * t),
          depth: -300,
          size: .85,
          tiltX: -3,
          tiltY: -4
        }, {
          posX: -(.3 * e),
          posY: .2 * t,
          depth: -400,
          size: .8,
          tiltX: 4,
          tiltY: 6
        }, {
          posX: .3 * e,
          posY: .25 * t,
          depth: -500,
          size: .75,
          tiltX: 5,
          tiltY: -5
        }, {
          posX: 0,
          posY: -(.3 * t),
          depth: -700,
          size: .7,
          tiltX: -6,
          tiltY: 0
        }, {
          posX: -(.35 * e),
          posY: 0,
          depth: -800,
          size: .65,
          tiltX: 0,
          tiltY: 7
        }, {
          posX: .35 * e,
          posY: 0,
          depth: -900,
          size: .6,
          tiltX: 0,
          tiltY: -7
        }, {
          posX: 0,
          posY: .3 * t,
          depth: -1e3,
          size: .55,
          tiltX: 6,
          tiltY: 0
        }, {
          posX: -(.2 * e),
          posY: -(.15 * t),
          depth: -1200,
          size: .5,
          tiltX: -3,
          tiltY: 3
        }, {
          posX: .2 * e,
          posY: -(.15 * t),
          depth: -1300,
          size: .45,
          tiltX: -3,
          tiltY: -3
        }, {
          posX: -(.2 * e),
          posY: .15 * t,
          depth: -1400,
          size: .4,
          tiltX: 3,
          tiltY: 3
        }, {
          posX: .2 * e,
          posY: .15 * t,
          depth: -1500,
          size: .35,
          tiltX: 3,
          tiltY: -3
        }].slice(0, j);
      }, [j]),
      I = (0, React.useCallback)(e => {
        if (!p) return {
          opacity: 1,
          blur: 0
        };
        let t = Math.abs(e) / 1500;
        return {
          opacity: Math.max(.3, 1 - .7 * t * u),
          blur: 8 * t * u
        };
      }, [p, u]),
      z = (0, React.useCallback)(e => {
        let t = P();
        w.current.forEach((a, i) => {
          if (!a || !t[i]) return;
          let r = t[i],
            o = 1e3 - Math.round(Math.abs(r.depth)),
            n = e === i,
            l = I(r.depth);
          gsap.to(a, {
            x: n ? 0 : r.posX,
            y: n ? 0 : r.posY,
            z: n ? 100 : r.depth,
            rotationX: n ? 0 : r.tiltX,
            rotationY: n ? 0 : r.tiltY,
            scale: n ? 1.1 : r.size,
            zIndex: n ? 2e3 : o,
            opacity: n ? 1 : l.opacity,
            filter: n ? "blur(0px)" : `blur(${l.blur}px)`,
            duration: s,
            ease: "power2.inOut"
          });
        });
      }, [P, s, I]),
      N = (0, React.useCallback)(() => {
        if (!m || !x || C) return;
        let e = P();
        w.current.forEach((t, a) => {
          if (!t || !e[a] || X === a) return;
          let i = t.getBoundingClientRect(),
            r = i.left + i.width / 2,
            o = i.top + i.height / 2,
            n = y.current.x - r,
            l = y.current.y - o,
            s = Math.sqrt(n * n + l * l),
            c = Math.max(0, 1 - s / 500),
            p = n / s * c * b,
            u = l / s * c * b,
            m = e[a];
          gsap.to(t, {
            x: m.posX + (isNaN(p) ? 0 : p),
            y: m.posY + (isNaN(u) ? 0 : u),
            duration: .8,
            ease: "power2.out"
          });
        });
      }, [m, b, P, x, C, X]),
      M = (0, React.useCallback)(e => {
        if (!f.current || !v.current || !x || C || (y.current = {
          x: e.clientX,
          y: e.clientY
        }, null !== X)) return;
        let t = f.current.getBoundingClientRect(),
          a = (e.clientX - t.left) / t.width - .5,
          i = (e.clientY - t.top) / t.height - .5;
        gsap.to(v.current, {
          rotationY: a * o,
          rotationX: -i * o,
          duration: 1.2,
          ease: "power1.out"
        }), N();
      }, [o, N, x, C, X]),
      O = (0, React.useCallback)((e, t) => {
        X === e ? (Y(null), z(null)) : (Y(e), z(e)), v.current && gsap.to(v.current, {
          rotationY: 0,
          rotationX: 0,
          duration: s,
          ease: "power2.inOut"
        }), g?.(e, t);
      }, [X, z, s, g]);
    return (0, React.useEffect)(() => {
      if (!x || C) return;
      z(X);
      let e = f.current;
      e && e.addEventListener("mousemove", M);
      let t = () => {
        z(X);
      };
      return window.addEventListener("resize", t), () => {
        e && e.removeEventListener("mousemove", M), window.removeEventListener("resize", t);
      };
    }, [z, M, x, C, X]), (0, React.useEffect)(() => {
      z(X);
    }, [e, t, z, X]), (0, React.useEffect)(() => {
      C && v.current && gsap.set(v.current, {
        rotationY: 0,
        rotationX: 0
      });
    }, [C]), <div ref={f} className={(0, __mod_90650.cn)("relative w-full h-full overflow-hidden", "flex items-center justify-center", h)} style={{
      perspective: `${a}px`
    }} onClick={e => {
      console.log("Wrapper clicked", e.target);
    }}><div ref={v} className="absolute inset-0 flex items-center justify-center" style={{
        transformStyle: "preserve-3d",
        pointerEvents: "none"
      }}>{E.map((e, t) => <button ref={e => {
          w.current[t] = e;
        }} onClick={a => {
          a.stopPropagation(), console.log("Card clicked!", t, e), O(t, e);
        }} type="button" className={(0, __mod_90650.cn)("absolute rounded-lg overflow-hidden shadow-2xl", "bg-cover bg-center cursor-pointer", "will-change-transform transition-opacity", "border-0 outline-none focus:outline-none", X === t && "ring-4 ring-white/50")} style={{
          width: n || "min(430px, 90vw)",
          height: l || "min(610px, 130vw)",
          backgroundImage: `url(${e})`,
          transformStyle: "preserve-3d",
          pointerEvents: "auto",
          userSelect: "none"
        }} />)}</div></div>;
  },
  u = Array.from({
    length: 12
  }, (e, t) => __mod_45949.ag[t % __mod_45949.ag.length]),
  m = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, l] = (0, React.useState)(12),
      [c, d] = (0, React.useState)(2500),
      [m, b] = (0, React.useState)(3),
      [g, h] = (0, React.useState)(1.2),
      [f, v] = (0, React.useState)(!1),
      [w, y] = (0, React.useState)(1),
      [x, S] = (0, React.useState)(!1),
      [C, k] = (0, React.useState)(50),
      [X, Y] = (0, React.useState)("");
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={700}><div className="w-full h-[700px]"><p images={u} cardCount={a} perspective={c} mouseSensitivity={m} cardHeight={350} animationDuration={g} enableDepthFog={f} fogIntensity={w} enableMagneticAttraction={x} magneticStrength={C} onCardClick={(e, t) => {
                console.log("Card clicked:", e, t), Y(`Card ${e + 1}: ${t.slice(0, 50)}...`);
              }} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_48543.PreviewSlider title="Card Count" value={a} onChange={l} min={3} max={12} step={1} /><__mod_48543.PreviewSlider title="Perspective" value={c} onChange={d} min={1e3} max={4e3} step={100} /><__mod_48543.PreviewSlider title="Mouse Sensitivity" value={m} onChange={b} min={0} max={10} step={.5} /><__mod_48543.PreviewSlider title="Animation Duration" value={g} onChange={h} min={.3} max={3} step={.1} /><__mod_48543.PreviewSwitch title="Enable Depth Fog" checked={f} onChange={v} />{f && <__mod_48543.PreviewSlider title="Fog Intensity" value={w} onChange={y} min={0} max={2} step={.1} />}<__mod_48543.PreviewSwitch title="Enable Magnetic Attraction" checked={x} onChange={S} />{x && <__mod_48543.PreviewSlider title="Magnetic Strength" value={C} onChange={k} min={0} max={150} step={10} />}</__mod_56388.IH><__mod_56388.Ub data={[{
            name: "images",
            type: "string[]",
            default: "[]",
            description: "Array of image URLs to display in 3D space"
          }, {
            name: "cardCount",
            type: "number",
            default: "images.length",
            description: "Number of cards to display (max 12, defaults to array length)"
          }, {
            name: "perspective",
            type: "number",
            default: "2500",
            description: "3D perspective strength in pixels (higher = less dramatic)"
          }, {
            name: "mouseSensitivity",
            type: "number",
            default: "3",
            description: "Mouse movement sensitivity multiplier for parallax effect"
          }, {
            name: "cardWidth",
            type: "number",
            default: "undefined",
            description: "Card width in pixels (responsive by default)"
          }, {
            name: "cardHeight",
            type: "number",
            default: "undefined",
            description: "Card height in pixels (responsive by default)"
          }, {
            name: "animationDuration",
            type: "number",
            default: "1.2",
            description: "Duration in seconds for position transition animations"
          }, {
            name: "enableDepthFog",
            type: "boolean",
            default: "false",
            description: "Enable depth fog effect (fade and blur distant cards)"
          }, {
            name: "fogIntensity",
            type: "number",
            default: "1",
            description: "Fog intensity multiplier (0-2)"
          }, {
            name: "enableMagneticAttraction",
            type: "boolean",
            default: "false",
            description: "Enable magnetic attraction to mouse cursor"
          }, {
            name: "magneticStrength",
            type: "number",
            default: "50",
            description: "Magnetic attraction strength in pixels"
          }, {
            name: "onCardClick",
            type: "(index: number, imageUrl: string) => void",
            default: "undefined",
            description: "Callback fired when a card is clicked"
          }, {
            name: "className",
            type: "string",
            default: '""',
            description: "Additional CSS classes for the container"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

export default m;
