import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Twisting Gallery
 * Images that twist and sway as they scroll past
 * slug: twisting-gallery
 * category: gallery
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=900&auto=format&fit=crop"],
  c = (e, t, r) => Math.min(r, Math.max(t, e)),
  d = (e, t) => (e % t + t) % t,
  p = e => "string" == typeof e ? {
    src: e
  } : e,
  h = (e, t, r) => {
    let n = Math.sin((e + 1) * 12.9898 + 78.233 * t + 37.719 * r);
    return 43758.5453 * n - Math.floor(43758.5453 * n);
  },
  m = "(prefers-reduced-motion: reduce)",
  f = e => {
    let t = window.matchMedia(m);
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  g = () => window.matchMedia(m).matches,
  x = ({
    images: e = u,
    infinite: t = !0,
    itemWidth: r = 300,
    aspectRatio: i = .8,
    gap: s = 80,
    borderRadius: l = 7,
    grayscale: m = 1,
    perspective: x = 900,
    sway: v = .2,
    tilt: b = 10,
    twistMin: y = 200,
    twistMax: w = 290,
    roll: S = 10,
    depth: C = 150,
    blur: j = 15,
    blurSensitivity: M = 40,
    desaturate: R = 1,
    seed: P = 1,
    overshoot: k = .2,
    smooth: E = .8,
    wheelSpeed: I = 1,
    dragSpeed: q = 1.5,
    autoScroll: N = 0,
    pauseOnHover: U = !0,
    vignette: F = !1,
    vignetteColor: D = "rgba(255, 255, 255, 0.6)",
    backgroundColor: T = "transparent",
    onIndexChange: H,
    className: $,
    children: L
  }) => {
    let z = (0, React.useRef)(null),
      O = (0, React.useRef)([]),
      A = (0, React.useRef)(0),
      W = (0, React.useRef)(0),
      B = (0, React.useRef)(0),
      G = (0, React.useRef)(!1),
      V = (0, React.useRef)(0),
      Y = (0, React.useRef)(!1),
      _ = (0, React.useRef)(!0),
      X = (0, React.useRef)(null),
      K = (0, React.useRef)(0),
      Z = (0, React.useRef)(0),
      J = (0, React.useRef)(-1),
      Q = (0, React.useRef)(H);
    Q.current = H;
    let [ee, et] = (0, React.useState)({
        width: 0,
        height: 0
      }),
      er = (0, React.useSyncExternalStore)(f, g, () => !1),
      en = (0, React.useMemo)(() => e.map(p), [e]),
      ea = Math.max(40, Math.min(r, ee.width - 32)),
      ei = ea / Math.max(.1, i),
      es = Math.max(8, ei + s),
      el = (0, React.useMemo)(() => {
        if (!en.length) return [];
        if (!t) return en.map((e, t) => ({
          image: e,
          index: t
        }));
        let e = Math.max(1, Math.ceil((Math.ceil((ee.height * (1 + 2 * k) + 2 * ei) / es) + 1) / en.length)),
          r = [];
        for (let t = 0; t < e; t++) en.forEach((e, t) => r.push({
          image: e,
          index: t
        }));
        return r;
      }, [en, t, ee.height, k, ei, es]),
      eo = (0, React.useMemo)(() => el.map((e, t) => ({
        x: (2 * h(t, 1, P) - 1) * b,
        y: y + h(t, 2, P) * (w - y),
        z: (2 * h(t, 3, P) - 1) * S,
        shift: Math.sin(t) * v
      })), [el, P, b, y, w, S, v]),
      eu = el.length * es,
      ec = Math.max(0, (en.length - 1) * es);
    (0, React.useEffect)(() => {
      let e = z.current;
      if (!e) return;
      let t = new ResizeObserver(() => {
        et({
          width: e.clientWidth,
          height: e.clientHeight
        });
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = z.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => {
        _.current = e.isIntersecting;
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let ed = (0, React.useCallback)((e, r) => {
        let n = ee.height;
        if (!n || !el.length) return;
        let a = j > 0 ? c(r / j, 0, 1) : 0,
          i = r > .05 ? `blur(${r.toFixed(2)}px) saturate(${(1 - a * R).toFixed(3)})` : "none",
          s = n / 2 - ei / 2,
          l = ei + n * (1 + 2 * k),
          o = -ei - n * k,
          u = n * (1 + k),
          p = eu / 2,
          h = -1,
          m = 1 / 0;
        for (let r = 0; r < el.length; r++) {
          let a = O.current[r];
          if (!a) continue;
          let f = r * es - e,
            g = s + (t ? d(f + p, eu) - p : f);
          if (g < o || g > u) {
            a.wrap.style.visibility = "hidden";
            continue;
          }
          let x = eo[r];
          a.wrap.style.visibility = "visible", a.wrap.style.transform = `translate3d(${(x.shift * ee.width).toFixed(2)}px, ${g.toFixed(2)}px, 0)`;
          let v = Math.abs(g - s);
          v < m && (m = v, h = el[r].index);
          let b = c((n * (1 + k) - g) / l, 0, 1),
            y = 1 - 2 * b,
            w = -Math.sin(b * Math.PI) * C;
          a.tile.style.transform = `translate3d(0, 0, ${w.toFixed(1)}px) rotateX(${(x.x * y).toFixed(2)}deg) rotateY(${(x.y * y).toFixed(2)}deg) rotateZ(${(x.z * y).toFixed(2)}deg)`, a.tile.style.filter = i;
        }
        h >= 0 && h !== J.current && (J.current = h, Q.current?.(h));
      }, [ee.height, el, ei, k, eu, es, t, ee.width, eo, C, j, R]),
      ep = (0, React.useCallback)(e => t ? e : c(e, 0, ec), [t, ec]),
      eh = (0, React.useCallback)(() => {
        if (G.current) return;
        G.current = !0, V.current = 0;
        let e = t => {
          let r = V.current ? Math.min(.05, (t - V.current) / 1e3) : 1 / 60;
          V.current = t;
          let n = 0 !== N && _.current && !(U && Y.current) && !X.current;
          n && (A.current = ep(A.current + N * r)), Math.abs(K.current) > 1 ? (A.current = ep(A.current + K.current * r), K.current *= Math.pow(.02, r)) : K.current = 0;
          let a = 1.5 + (1 - c(E, 0, 1)) * 30,
            i = er ? 1 : 1 - Math.exp(-r * a),
            s = W.current + (A.current - W.current) * i,
            l = .05 > Math.abs(A.current - s),
            o = Math.abs(s - W.current) / (60 * r);
          W.current = l ? A.current : s;
          let u = er ? 0 : c(o / Math.max(1, M), 0, 1) * j;
          Z.current += (u - Z.current) * (1 - Math.pow(.55, 60 * r)), Z.current < .02 && (Z.current = 0), ed(W.current, Z.current), !l || n || 0 !== K.current || Z.current > 0 ? B.current = requestAnimationFrame(e) : G.current = !1;
        };
        B.current = requestAnimationFrame(e);
      }, [N, U, ep, er, E, M, j, ed]);
    (0, React.useEffect)(() => (A.current = ep(A.current), W.current = ep(W.current), ed(W.current, Z.current), eh(), () => {
      cancelAnimationFrame(B.current), G.current = !1;
    }), [ed, ep, eh]), (0, React.useEffect)(() => {
      let e = z.current;
      if (!e) return;
      let r = e => {
        let r = 1 === e.deltaMode ? 16 : 2 === e.deltaMode ? ee.height : 1,
          n = A.current;
        A.current = ep(n + e.deltaY * r * I), (t || A.current !== n) && (e.preventDefault(), K.current = 0, eh());
      };
      return e.addEventListener("wheel", r, {
        passive: !1
      }), () => e.removeEventListener("wheel", r);
    }, [ee.height, I, ep, t, eh]);
    let em = e => {
        X.current && (X.current = null, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), K.current = c(K.current, -4e3, 4e3), eh());
      },
      ef = {
        width: ea,
        perspective: `${x}px`,
        left: "50%",
        marginLeft: -ea / 2
      };
    return <div ref={z} role="region" aria-roledescription="carousel" aria-label="Image gallery" tabIndex={0} className={(0, __mod_90650.cn)("relative h-full w-full cursor-grab touch-none select-none overflow-hidden outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-inset", $)} style={{
      backgroundColor: T
    }} onPointerDown={e => {
      0 === e.button && (X.current = {
        y: e.clientY,
        moved: 0,
        at: performance.now()
      }, K.current = 0, e.currentTarget.setPointerCapture(e.pointerId));
    }} onPointerMove={e => {
      let t = X.current;
      if (!t) return;
      let r = e.clientY - t.y,
        n = performance.now(),
        a = Math.max(1, n - t.at) / 1e3;
      t.y = e.clientY, t.at = n, t.moved += Math.abs(r), A.current = ep(A.current - r * q), K.current = -r * q / a, eh();
    }} onPointerUp={em} onPointerCancel={em} onPointerEnter={() => {
      Y.current = !0;
    }} onPointerLeave={() => {
      Y.current = !1, eh();
    }} onKeyDown={e => {
      let t = {
        ArrowDown: es,
        ArrowUp: -es,
        PageDown: ee.height,
        PageUp: -ee.height,
        " ": ee.height
      }[e.key];
      void 0 !== t && (e.preventDefault(), A.current = ep(A.current + t), eh());
    }}>{el.map(({
        image: e,
        index: t
      }, r) => <div ref={e => {
        let t = e?.firstElementChild;
        e && t ? O.current[r] = {
          wrap: e,
          tile: t
        } : delete O.current[r];
      }} className="invisible absolute top-0" style={ef} aria-hidden={r >= en.length}><div className="w-full overflow-hidden bg-neutral-200 will-change-[transform,filter] [transform-style:preserve-3d]" style={{
          height: ei,
          borderRadius: l
        }}><img src={e.src} alt={e.alt ?? `Gallery image ${t + 1}`} draggable={!1} loading="lazy" style={{
            filter: m > 0 ? `grayscale(${c(m, 0, 1)})` : void 0
          }} className="h-full w-full object-cover" /></div></div>)}{F ? <div aria-hidden={!0} className="pointer-events-none absolute inset-0 z-[1]" style={{
        background: `radial-gradient(transparent 10%, ${D} 80%)`
      }} /> : null}{L ? <div className="pointer-events-none relative z-[2] h-full w-full">{L}</div> : null}</div>;
  },
  v = () => () => {},
  b = ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=900&auto=format&fit=crop"],
  y = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: r
      } = (0, __mod_30701.D)(),
      o = (0, React.useSyncExternalStore)(v, () => !0, () => !1),
      [u, c] = (0, React.useState)(!0),
      [d, p] = (0, React.useState)(300),
      [h, m] = (0, React.useState)(.8),
      [f, g] = (0, React.useState)(80),
      [y, w] = (0, React.useState)(7),
      [S, C] = (0, React.useState)(1),
      [j, M] = (0, React.useState)(900),
      [R, P] = (0, React.useState)(.2),
      [k, E] = (0, React.useState)(10),
      [I, q] = (0, React.useState)(200),
      [N, U] = (0, React.useState)(290),
      [F, D] = (0, React.useState)(10),
      [T, H] = (0, React.useState)(150),
      [$, L] = (0, React.useState)(15),
      [z, O] = (0, React.useState)(40),
      [A, W] = (0, React.useState)(1),
      [B, G] = (0, React.useState)(1),
      [V, Y] = (0, React.useState)(.2),
      [_, X] = (0, React.useState)(.8),
      [K, Z] = (0, React.useState)(1),
      [J, Q] = (0, React.useState)(1.5),
      [ee, et] = (0, React.useState)(0),
      [er, en] = (0, React.useState)(!0),
      [ea, ei] = (0, React.useState)(!1),
      [es, el] = (0, React.useState)(null),
      eo = es ?? (o && "dark" === r ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)");
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={620}><div className="relative h-full w-full"><XView className="h-full w-full" images={b} infinite={u} itemWidth={d} aspectRatio={h} gap={f} borderRadius={y} grayscale={S} perspective={j} sway={R} tilt={k} twistMin={I} twistMax={N} roll={F} depth={T} blur={$} blurSensitivity={z} desaturate={A} seed={B} overshoot={V} smooth={_} wheelSpeed={K} dragSpeed={J} autoScroll={ee} pauseOnHover={er} vignette={ea} vignetteColor={eo}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.tl title="Infinite" checked={u} onChange={c} /><__mod_56388.yt title="Item Width" min={120} max={600} step={10} value={d} onChange={p} valueUnit="px" /><__mod_56388.yt title="Aspect Ratio" min={.5} max={2} step={.05} value={h} onChange={m} /><__mod_56388.yt title="Gap" min={-120} max={240} step={4} value={f} onChange={g} valueUnit="px" /><__mod_56388.yt title="Border Radius" min={0} max={48} step={1} value={y} onChange={w} valueUnit="px" /><__mod_56388.yt title="Grayscale" min={0} max={1} step={.05} value={S} onChange={C} /><__mod_56388.yt title="Perspective" min={300} max={2400} step={50} value={j} onChange={M} valueUnit="px" /><__mod_56388.yt title="Sway" min={0} max={.45} step={.01} value={R} onChange={P} /><__mod_56388.yt title="Tilt" min={0} max={45} step={1} value={k} onChange={E} valueUnit="\xb0" /><__mod_56388.yt title="Twist Min" min={0} max={360} step={5} value={I} onChange={q} valueUnit="\xb0" /><__mod_56388.yt title="Twist Max" min={0} max={360} step={5} value={N} onChange={U} valueUnit="\xb0" /><__mod_56388.yt title="Roll" min={0} max={45} step={1} value={F} onChange={D} valueUnit="\xb0" /><__mod_56388.yt title="Depth" min={0} max={600} step={10} value={T} onChange={H} valueUnit="px" /><__mod_56388.yt title="Blur" min={0} max={30} step={1} value={$} onChange={L} valueUnit="px" /><__mod_56388.yt title="Blur Sensitivity" min={5} max={120} step={5} value={z} onChange={O} /><__mod_56388.yt title="Desaturate" min={0} max={1} step={.05} value={A} onChange={W} /><__mod_56388.yt title="Seed" min={1} max={20} step={1} value={B} onChange={G} /><__mod_56388.yt title="Overshoot" min={0} max={1} step={.05} value={V} onChange={Y} /><__mod_56388.yt title="Smooth" min={0} max={1} step={.05} value={_} onChange={X} /><__mod_56388.yt title="Wheel Speed" min={.1} max={3} step={.1} value={K} onChange={Z} /><__mod_56388.yt title="Drag Speed" min={.1} max={4} step={.1} value={J} onChange={Q} /><__mod_56388.yt title="Auto Scroll" min={-400} max={400} step={10} value={ee} onChange={et} valueUnit="px/s" /><__mod_56388.tl title="Pause On Hover" checked={er} onChange={en} /><__mod_56388.tl title="Vignette" checked={ea} onChange={ei} /><__mod_56388.W7 title="Vignette" value={eo} onChange={el} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "images",
            type: "(string | { src: string; alt?: string })[]",
            default: "built-in set",
            description: "Images shown in the column, as URLs or objects with alt text."
          }, {
            name: "infinite",
            type: "boolean",
            default: "true",
            description: "Loop the column so it can be scrolled forever in either direction."
          }, {
            name: "itemWidth",
            type: "number",
            default: "300",
            description: "Maximum width of a tile in pixels, shrinks to fit narrow containers."
          }, {
            name: "aspectRatio",
            type: "number",
            default: "0.8",
            description: "Tile width divided by height."
          }, {
            name: "gap",
            type: "number",
            default: "80",
            description: "Vertical gap between tiles in pixels, negative values overlap them."
          }, {
            name: "borderRadius",
            type: "number",
            default: "7",
            description: "Corner radius of the tiles in pixels."
          }, {
            name: "grayscale",
            type: "number",
            default: "1",
            description: "How far the images are drained of colour from 0 to 1."
          }, {
            name: "perspective",
            type: "number",
            default: "900",
            description: "Perspective distance in pixels, smaller values twist harder."
          }, {
            name: "sway",
            type: "number",
            default: "0.2",
            description: "Horizontal sway of the column as a fraction of the container width."
          }, {
            name: "tilt",
            type: "number",
            default: "10",
            description: "Maximum random forward tilt in degrees a tile starts and ends with."
          }, {
            name: "twistMin",
            type: "number",
            default: "200",
            description: "Smallest turn in degrees a tile spins through while passing."
          }, {
            name: "twistMax",
            type: "number",
            default: "290",
            description: "Largest turn in degrees a tile spins through while passing."
          }, {
            name: "roll",
            type: "number",
            default: "10",
            description: "Maximum random roll in degrees a tile starts and ends with."
          }, {
            name: "depth",
            type: "number",
            default: "150",
            description: "How far in pixels a tile sinks into the screen while centred."
          }, {
            name: "blur",
            type: "number",
            default: "15",
            description: "Maximum motion blur in pixels at full scroll speed, 0 to disable."
          }, {
            name: "blurSensitivity",
            type: "number",
            default: "40",
            description: "Scroll speed in pixels per frame that counts as full speed."
          }, {
            name: "desaturate",
            type: "number",
            default: "1",
            description: "How much colour drains at full speed from 0 to 1."
          }, {
            name: "seed",
            type: "number",
            default: "1",
            description: "Seed for the per tile rotations."
          }, {
            name: "overshoot",
            type: "number",
            default: "0.2",
            description: "Fraction of the viewport height beyond the edges a tile keeps animating."
          }, {
            name: "smooth",
            type: "number",
            default: "0.8",
            description: "Scroll follow damping from 0 for instant to 1 for very loose."
          }, {
            name: "wheelSpeed",
            type: "number",
            default: "1",
            description: "Multiplier applied to wheel and trackpad deltas."
          }, {
            name: "dragSpeed",
            type: "number",
            default: "1.5",
            description: "Multiplier applied to pointer drag deltas."
          }, {
            name: "autoScroll",
            type: "number",
            default: "0",
            description: "Pixels per second the column drifts by itself, 0 to disable."
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "true",
            description: "Stop the drift while the pointer is over the gallery."
          }, {
            name: "vignette",
            type: "boolean",
            default: "false",
            description: "Draw a radial vignette over the gallery."
          }, {
            name: "vignetteColor",
            type: "string",
            default: '"rgba(255, 255, 255, 0.6)"',
            description: "Colour of the vignette edge, usually semi transparent."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"transparent"',
            description: "Colour behind the tiles, transparent by default so the page shows through."
          }, {
            name: "onIndexChange",
            type: "(index: number) => void",
            default: "undefined",
            description: "Fired when the tile nearest the centre changes."
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Extra classes for the outer container."
          }, {
            name: "children",
            type: "ReactNode",
            default: "undefined",
            description: "Content layered above the gallery."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const XView: any = x;

export default y;
