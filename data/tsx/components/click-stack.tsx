import { gsap } from "gsap";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Click Stack
 * A stack of cards you click through
 * slug: click-stack
 * category: animation
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ["01", "02", "03", "04", "05", "06"].map(e => <div style={{
    background: "#ffffff",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    fontSize: 56,
    fontWeight: 700,
    fontFamily: "system-ui, sans-serif",
    userSelect: "none"
  }}>{e}</div>),
  u = ({
    items: e,
    cardWidth: t = 250,
    cardHeight: a = 300,
    spreadX: n = 20,
    spreadY: s = -20,
    duration: l = .35,
    ease: u = "power3.out",
    borderRadius: p = 24,
    shadowBlur: f = 30,
    shadowOpacity: h = .3,
    cardColor: m = "#ffffff",
    visibleCount: y = 5,
    depthScale: x = .08,
    depthOpacity: v = 0,
    className: b,
    cardClassName: g,
    opacity: C = 1
  }) => {
    let S = e ?? c,
      w = S.length,
      j = Math.min(y, w),
      k = (0, React.useRef)([]),
      I = (0, React.useRef)(!1),
      N = (0, React.useRef)([]),
      O = (0, React.useRef)({
        spreadX: n,
        spreadY: s,
        depthScale: x,
        depthOpacity: v,
        vis: j,
        duration: l,
        ease: u
      }),
      E = (0, React.useRef)(null);
    (0, React.useEffect)(() => {
      O.current = {
        spreadX: n,
        spreadY: s,
        depthScale: x,
        depthOpacity: v,
        vis: j,
        duration: l,
        ease: u
      };
    });
    let A = (0, React.useCallback)(e => {
      let t = O.current;
      k.current.forEach((a, r) => {
        let i = N.current[a];
        if (!i) return;
        if (r >= t.vis) return void gsap.set(i, {
          opacity: 0,
          visibility: "hidden",
          zIndex: -1
        });
        let n = {
          x: r * t.spreadX,
          y: r * t.spreadY,
          scale: 1 - r * t.depthScale,
          opacity: Math.max(0, 1 - r * t.depthOpacity),
          visibility: "visible",
          zIndex: t.vis - r,
          rotation: 0
        };
        e ? gsap.to(i, {
          ...n,
          duration: t.duration,
          ease: t.ease
        }) : gsap.set(i, n);
      });
    }, []);
    (0, React.useEffect)(() => {
      k.current = Array.from({
        length: w
      }, (e, t) => t), I.current = !1, A(!1), E.current && (E.current.style.visibility = "visible");
    }, [w, A]), (0, React.useEffect)(() => {
      k.current.length > 0 && A(!1);
    }, [n, s, x, v, j, A]), (0, React.useEffect)(() => {
      let e = N.current;
      return () => {
        e.forEach(e => {
          e && gsap.killTweensOf(e);
        });
      };
    }, []);
    let R = (0, React.useCallback)(() => {
      if (I.current || w < 2) return;
      I.current = !0;
      let e = O.current,
        t = k.current[0],
        a = N.current[t];
      if (!a) {
        I.current = !1;
        return;
      }
      gsap.timeline({
        onComplete: () => {
          I.current = !1;
        }
      }).to(a, {
        scale: 1.04,
        opacity: 0,
        duration: .55 * e.duration,
        ease: "power2.in",
        onComplete: () => {
          let e = k.current.shift();
          k.current.push(e);
          let t = O.current;
          gsap.set(N.current[e], {
            opacity: 0,
            visibility: "hidden",
            zIndex: -1
          }), k.current.forEach((a, r) => {
            if (a === e) return;
            let i = N.current[a];
            if (i) {
              if (r >= t.vis) return void gsap.set(i, {
                opacity: 0,
                visibility: "hidden",
                zIndex: -1
              });
              gsap.to(i, {
                x: r * t.spreadX,
                y: r * t.spreadY,
                scale: 1 - r * t.depthScale,
                opacity: Math.max(0, 1 - r * t.depthOpacity),
                visibility: "visible",
                zIndex: t.vis - r,
                duration: .65 * t.duration,
                ease: "power2.out"
              });
            }
          });
          let a = k.current.indexOf(e),
            r = N.current[e];
          a < t.vis && r && (gsap.set(r, {
            x: a * t.spreadX,
            y: a * t.spreadY,
            scale: 1 - a * t.depthScale,
            opacity: 0,
            visibility: "visible",
            zIndex: t.vis - a
          }), gsap.to(r, {
            opacity: Math.max(0, 1 - a * t.depthOpacity),
            duration: .5 * t.duration,
            delay: .2 * t.duration,
            ease: "power1.out"
          }));
        }
      });
    }, [w]);
    return <div ref={E} onClick={R} className={(0, __mod_90650.cn)("relative flex h-full w-full items-center justify-center overflow-hidden cursor-pointer", b)} style={{
      opacity: C,
      visibility: "hidden"
    }}>{S.map((e, i) => <div ref={e => {
        N.current[i] = e;
      }} className={(0, __mod_90650.cn)("absolute overflow-hidden", g)} style={{
        width: t,
        height: a,
        borderRadius: p,
        background: m,
        boxShadow: `0 ${Math.round(.15 * f)}px ${Math.round(.5 * f)}px rgba(0,0,0,${(.5 * h).toFixed(2)}), 0 ${Math.round(.4 * f)}px ${f}px rgba(0,0,0,${h})`,
        willChange: "transform, opacity"
      }}>{e}</div>)}</div>;
  };
u.displayName = "ClickStack";
let p = () => {
  let [e, t] = (0, __mod_90761.I)(),
    {
      resolvedTheme: a
    } = (0, __mod_30701.D)(),
    [d, o] = (0, React.useState)(250),
    [c, p] = (0, React.useState)(300),
    [f, h] = (0, React.useState)(20),
    [m, y] = (0, React.useState)(-20),
    [x, v] = (0, React.useState)(5),
    [b, g] = (0, React.useState)(24),
    [C, S] = (0, React.useState)(30),
    [w, j] = (0, React.useState)(.3),
    [k, I] = (0, React.useState)(1),
    [N, O] = (0, React.useState)(null),
    E = (0, React.useMemo)(() => null !== N ? N : "dark" === a ? "#1a1a1a" : "#ffffff", [a, N]),
    [A, R] = (0, React.useState)(.35),
    [M, z] = (0, React.useState)(.08),
    [P, X] = (0, React.useState)(0),
    H = (0, React.useMemo)(() => {
      let e = E && 128 > parseInt(E.replace("#", "").slice(0, 2), 16) ? "#ffffff" : "#000000";
      return ["01", "02", "03", "04", "05", "06"].map(t => <div style={{
        background: E,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: e,
        fontSize: 56,
        fontWeight: 700,
        fontFamily: "system-ui, sans-serif",
        userSelect: "none"
      }}>{t}</div>);
    }, [E]);
  return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t}><div className="relative h-full w-full"><UScene items={H} cardWidth={d} cardHeight={c} spreadX={f} spreadY={m} duration={A} borderRadius={b} shadowBlur={C} shadowOpacity={w} cardColor={E} visibleCount={x} depthScale={M} depthOpacity={P} opacity={k} /></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Card Width" value={d} onChange={o} min={100} max={500} step={10} /><__mod_56388.yt title="Card Height" value={c} onChange={p} min={100} max={500} step={10} /><__mod_56388.yt title="Spread X" value={f} onChange={h} min={-50} max={50} step={1} /><__mod_56388.yt title="Spread Y" value={m} onChange={y} min={-50} max={50} step={1} /><__mod_56388.yt title="Visible Count" value={x} onChange={v} min={1} max={10} step={1} /><__mod_56388.yt title="Border Radius" value={b} onChange={g} min={0} max={50} step={1} /><__mod_56388.yt title="Shadow Blur" value={C} onChange={S} min={0} max={100} step={1} /><__mod_56388.yt title="Shadow Opacity" value={w} onChange={j} min={0} max={1} step={.05} /><__mod_56388.yt title="Opacity" value={k} onChange={I} min={0} max={1} step={.05} /><__mod_56388.W7 title="Card Color" value={E} onChange={e => O(e)} /><__mod_56388.yt title="Duration" value={A} onChange={R} min={.1} max={2} step={.05} /><__mod_56388.yt title="Depth Scale" value={M} onChange={z} min={0} max={.3} step={.01} /><__mod_56388.yt title="Depth Opacity" value={P} onChange={X} min={0} max={1} step={.05} /></__mod_56388.IH><__mod_56388.Ub data={[{
          name: "items",
          type: "ReactNode[]",
          default: "built-in cards",
          description: "Renderable content for each card: images, text, JSX, or any React node"
        }, {
          name: "cardWidth",
          type: "number",
          default: "250",
          description: "Width of each card in pixels"
        }, {
          name: "cardHeight",
          type: "number",
          default: "300",
          description: "Height of each card in pixels"
        }, {
          name: "spreadX",
          type: "number",
          default: "20",
          description: "Horizontal offset between stacked depth levels"
        }, {
          name: "spreadY",
          type: "number",
          default: "-20",
          description: "Vertical offset between stacked depth levels"
        }, {
          name: "duration",
          type: "number",
          default: "0.35",
          description: "Transition duration in seconds (0.1–2.0)"
        }, {
          name: "ease",
          type: "string",
          default: '"power3.out"',
          description: "GSAP easing string for card repositioning"
        }, {
          name: "borderRadius",
          type: "number",
          default: "24",
          description: "Card corner radius in pixels (0–50)"
        }, {
          name: "shadowBlur",
          type: "number",
          default: "30",
          description: "Card shadow blur radius (0–100)"
        }, {
          name: "shadowOpacity",
          type: "number",
          default: "0.3",
          description: "Card shadow opacity (0–1)"
        }, {
          name: "cardColor",
          type: "string",
          default: '"#ffffff"',
          description: "Fallback background color for card surfaces"
        }, {
          name: "visibleCount",
          type: "number",
          default: "5",
          description: "Maximum number of cards shown in the stack (1–10)"
        }, {
          name: "depthScale",
          type: "number",
          default: "0.08",
          description: "Scale reduction per depth level (0–0.3)"
        }, {
          name: "depthOpacity",
          type: "number",
          default: "0",
          description: "Opacity reduction per depth level (0–1)"
        }, {
          name: "className",
          type: "string",
          default: '""',
          description: "CSS class for the outer container"
        }, {
          name: "cardClassName",
          type: "string",
          default: '""',
          description: "CSS class applied to each card wrapper"
        }, {
          name: "opacity",
          type: "number",
          default: "1",
          description: "Overall container opacity (0–1)"
        }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
};

const UScene: any = u;

export default p;
