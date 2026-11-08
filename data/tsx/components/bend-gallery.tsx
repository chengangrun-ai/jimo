import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_30701 from "../_helpers/30701";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Bend Gallery
 * A column of images that bends away as it scrolls
 * slug: bend-gallery
 * category: gallery
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=900&auto=format&fit=crop"],
  c = (e, t, r) => Math.min(r, Math.max(t, e)),
  d = (e, t) => (e % t + t) % t,
  h = e => "string" == typeof e ? {
    src: e
  } : e,
  p = "(prefers-reduced-motion: reduce)",
  m = e => {
    let t = window.matchMedia(p);
    return t.addEventListener("change", e), () => t.removeEventListener("change", e);
  },
  f = () => window.matchMedia(p).matches,
  g = ({
    images: e = u,
    infinite: t = !0,
    itemWidth: r = 300,
    aspectRatio: i = .8,
    gap: s = -112,
    borderRadius: o = 7,
    grayscale: p = 1,
    perspective: g = 900,
    bendAngle: v = 90,
    bendCurve: b = .6,
    depth: x = 800,
    depthFocus: y = 8,
    lift: w = 40,
    fade: C = 1,
    fadeCurve: j = 3,
    overshoot: S = .2,
    smooth: M = .8,
    wheelSpeed: k = 1,
    dragSpeed: P = 1.5,
    autoScroll: R = 0,
    pauseOnHover: E = !0,
    vignette: I = !1,
    vignetteColor: q = "rgba(0, 0, 0, 0.5)",
    backgroundColor: N = "transparent",
    onIndexChange: F,
    className: U,
    children: D
  }) => {
    let H = (0, React.useRef)(null),
      A = (0, React.useRef)([]),
      L = (0, React.useRef)(0),
      T = (0, React.useRef)(0),
      $ = (0, React.useRef)(0),
      O = (0, React.useRef)(!1),
      W = (0, React.useRef)(0),
      z = (0, React.useRef)(!1),
      B = (0, React.useRef)(!0),
      V = (0, React.useRef)(null),
      G = (0, React.useRef)(0),
      Y = (0, React.useRef)(-1),
      _ = (0, React.useRef)(F);
    _.current = F;
    let [X, K] = (0, React.useState)({
        width: 0,
        height: 0
      }),
      J = (0, React.useSyncExternalStore)(m, f, () => !1),
      Q = (0, React.useMemo)(() => e.map(h), [e]),
      Z = Math.max(40, Math.min(r, X.width - 32)),
      ee = Z / Math.max(.1, i),
      et = Math.max(8, ee + s),
      er = (0, React.useMemo)(() => {
        if (!Q.length) return [];
        if (!t) return Q.map((e, t) => ({
          image: e,
          index: t
        }));
        let e = Math.max(1, Math.ceil((Math.ceil((X.height * (1 + 2 * S) + 2 * ee) / et) + 1) / Q.length)),
          r = [];
        for (let t = 0; t < e; t++) Q.forEach((e, t) => r.push({
          image: e,
          index: t
        }));
        return r;
      }, [Q, t, X.height, S, ee, et]),
      en = er.length * et,
      ea = Math.max(0, (Q.length - 1) * et);
    (0, React.useEffect)(() => {
      let e = H.current;
      if (!e) return;
      let t = new ResizeObserver(() => {
        K({
          width: e.clientWidth,
          height: e.clientHeight
        });
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = H.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => {
        B.current = e.isIntersecting;
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let ei = (0, React.useCallback)(e => {
        let r = X.height;
        if (!r || !er.length) return;
        let n = r / 2 - ee / 2,
          a = ee + r * (1 + 2 * S),
          i = -ee - r * S,
          s = r * (1 + S),
          o = en / 2,
          l = -1,
          u = 1 / 0;
        for (let h = 0; h < er.length; h++) {
          let p = A.current[h];
          if (!p) continue;
          let m = h * et - e,
            f = n + (t ? d(m + o, en) - o : m);
          if (f < i || f > s) {
            p.wrap.style.visibility = "hidden";
            continue;
          }
          p.wrap.style.visibility = "visible", p.wrap.style.transform = `translate3d(0, ${f.toFixed(2)}px, 0)`;
          let g = Math.abs(f - n);
          g < u && (u = g, l = er[h].index);
          let M = c((r * (1 + S) - f) / a, 0, 1),
            k = Math.cos(M * Math.PI),
            P = Math.sin(M * Math.PI),
            R = Math.sign(k) * Math.pow(Math.abs(k), b) * v,
            E = -Math.pow(P, y) * x,
            I = -k * k * w,
            q = 1 - C * (1 - Math.pow(P, j));
          p.tile.style.transform = `translate3d(0, ${I.toFixed(2)}%, ${E.toFixed(1)}px) rotateX(${R.toFixed(2)}deg)`, p.tile.style.filter = C > 0 ? `saturate(${q.toFixed(3)}) brightness(${q.toFixed(3)})` : "none";
        }
        l >= 0 && l !== Y.current && (Y.current = l, _.current?.(l));
      }, [X.height, er, ee, S, en, et, t, b, v, y, x, w, C, j]),
      es = (0, React.useCallback)(e => t ? e : c(e, 0, ea), [t, ea]),
      eo = (0, React.useCallback)(() => {
        if (O.current) return;
        O.current = !0, W.current = 0;
        let e = t => {
          let r = W.current ? Math.min(.05, (t - W.current) / 1e3) : 1 / 60;
          W.current = t;
          let n = 0 !== R && B.current && !(E && z.current) && !V.current;
          n && (L.current = es(L.current + R * r)), Math.abs(G.current) > 1 ? (L.current = es(L.current + G.current * r), G.current *= Math.pow(.02, r)) : G.current = 0;
          let a = 1.5 + (1 - c(M, 0, 1)) * 30,
            i = J ? 1 : 1 - Math.exp(-r * a),
            s = T.current + (L.current - T.current) * i,
            o = .05 > Math.abs(L.current - s);
          T.current = o ? L.current : s, ei(T.current), !o || n || 0 !== G.current ? $.current = requestAnimationFrame(e) : O.current = !1;
        };
        $.current = requestAnimationFrame(e);
      }, [R, E, es, J, M, ei]);
    (0, React.useEffect)(() => (L.current = es(L.current), T.current = es(T.current), ei(T.current), eo(), () => {
      cancelAnimationFrame($.current), O.current = !1;
    }), [ei, es, eo]), (0, React.useEffect)(() => {
      let e = H.current;
      if (!e) return;
      let r = e => {
        let r = 1 === e.deltaMode ? 16 : 2 === e.deltaMode ? X.height : 1,
          n = L.current;
        L.current = es(n + e.deltaY * r * k), (t || L.current !== n) && (e.preventDefault(), G.current = 0, eo());
      };
      return e.addEventListener("wheel", r, {
        passive: !1
      }), () => e.removeEventListener("wheel", r);
    }, [X.height, k, es, t, eo]);
    let el = e => {
        V.current && (V.current = null, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), G.current = c(G.current, -4e3, 4e3), eo());
      },
      eu = {
        width: Z,
        perspective: `${g}px`,
        left: "50%",
        marginLeft: -Z / 2
      };
    return <div ref={H} role="region" aria-roledescription="carousel" aria-label="Image gallery" tabIndex={0} className={(0, __mod_90650.cn)("relative h-full w-full cursor-grab touch-none select-none overflow-hidden outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-inset", U)} style={{
      backgroundColor: N
    }} onPointerDown={e => {
      0 === e.button && (V.current = {
        y: e.clientY,
        moved: 0,
        at: performance.now()
      }, G.current = 0, e.currentTarget.setPointerCapture(e.pointerId));
    }} onPointerMove={e => {
      let t = V.current;
      if (!t) return;
      let r = e.clientY - t.y,
        n = performance.now(),
        a = Math.max(1, n - t.at) / 1e3;
      t.y = e.clientY, t.at = n, t.moved += Math.abs(r), L.current = es(L.current - r * P), G.current = -r * P / a, eo();
    }} onPointerUp={el} onPointerCancel={el} onPointerEnter={() => {
      z.current = !0;
    }} onPointerLeave={() => {
      z.current = !1, eo();
    }} onKeyDown={e => {
      let t = {
        ArrowDown: et,
        ArrowUp: -et,
        PageDown: X.height,
        PageUp: -X.height,
        " ": X.height
      }[e.key];
      void 0 !== t && (e.preventDefault(), L.current = es(L.current + t), eo());
    }}>{er.map(({
        image: e,
        index: t
      }, r) => <div ref={e => {
        let t = e?.firstElementChild;
        e && t ? A.current[r] = {
          wrap: e,
          tile: t
        } : delete A.current[r];
      }} className="invisible absolute top-0" style={eu} aria-hidden={r >= Q.length}><div className="w-full overflow-hidden bg-neutral-800 will-change-[transform,filter] [transform-style:preserve-3d]" style={{
          height: ee,
          borderRadius: o
        }}><img src={e.src} alt={e.alt ?? `Gallery image ${t + 1}`} draggable={!1} loading="lazy" style={{
            filter: p > 0 ? `grayscale(${c(p, 0, 1)})` : void 0
          }} className="h-full w-full object-cover" /></div></div>)}{I ? <div aria-hidden={!0} className="pointer-events-none absolute inset-0 z-[1]" style={{
        background: `radial-gradient(transparent 10%, ${q} 80%)`
      }} /> : null}{D ? <div className="pointer-events-none relative z-[2] h-full w-full">{D}</div> : null}</div>;
  },
  v = () => () => {},
  b = ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=900&auto=format&fit=crop"],
  x = () => {
    let [e, t] = (0, __mod_90761.I)(),
      {
        resolvedTheme: r
      } = (0, __mod_30701.D)(),
      l = (0, React.useSyncExternalStore)(v, () => !0, () => !1),
      [u, c] = (0, React.useState)(!0),
      [d, h] = (0, React.useState)(300),
      [p, m] = (0, React.useState)(.8),
      [f, x] = (0, React.useState)(-112),
      [y, w] = (0, React.useState)(7),
      [C, j] = (0, React.useState)(1),
      [S, M] = (0, React.useState)(900),
      [k, P] = (0, React.useState)(90),
      [R, E] = (0, React.useState)(.6),
      [I, q] = (0, React.useState)(800),
      [N, F] = (0, React.useState)(8),
      [U, D] = (0, React.useState)(40),
      [H, A] = (0, React.useState)(1),
      [L, T] = (0, React.useState)(3),
      [$, O] = (0, React.useState)(.2),
      [W, z] = (0, React.useState)(.8),
      [B, V] = (0, React.useState)(1),
      [G, Y] = (0, React.useState)(1.5),
      [_, X] = (0, React.useState)(0),
      [K, J] = (0, React.useState)(!0),
      [Q, Z] = (0, React.useState)(!1),
      [ee, et] = (0, React.useState)(null),
      er = ee ?? (l && "dark" === r ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)");
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={620}><div className="relative h-full w-full"><GView className="h-full w-full" images={b} infinite={u} itemWidth={d} aspectRatio={p} gap={f} borderRadius={y} grayscale={C} perspective={S} bendAngle={k} bendCurve={R} depth={I} depthFocus={N} lift={U} fade={H} fadeCurve={L} overshoot={$} smooth={W} wheelSpeed={B} dragSpeed={G} autoScroll={_} pauseOnHover={K} vignette={Q} vignetteColor={er}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.tl title="Infinite" checked={u} onChange={c} /><__mod_56388.yt title="Item Width" min={120} max={600} step={10} value={d} onChange={h} valueUnit="px" /><__mod_56388.yt title="Aspect Ratio" min={.5} max={2} step={.05} value={p} onChange={m} /><__mod_56388.yt title="Gap" min={-200} max={120} step={4} value={f} onChange={x} valueUnit="px" /><__mod_56388.yt title="Border Radius" min={0} max={48} step={1} value={y} onChange={w} valueUnit="px" /><__mod_56388.yt title="Grayscale" min={0} max={1} step={.05} value={C} onChange={j} /><__mod_56388.yt title="Perspective" min={300} max={2400} step={50} value={S} onChange={M} valueUnit="px" /><__mod_56388.yt title="Bend Angle" min={0} max={120} step={1} value={k} onChange={P} valueUnit="\xb0" /><__mod_56388.yt title="Bend Curve" min={.1} max={2} step={.05} value={R} onChange={E} /><__mod_56388.yt title="Depth" min={0} max={1500} step={25} value={I} onChange={q} valueUnit="px" /><__mod_56388.yt title="Depth Focus" min={1} max={16} step={.5} value={N} onChange={F} /><__mod_56388.yt title="Lift" min={0} max={80} step={1} value={U} onChange={D} valueUnit="%" /><__mod_56388.yt title="Fade" min={0} max={1} step={.05} value={H} onChange={A} /><__mod_56388.yt title="Fade Curve" min={.5} max={8} step={.25} value={L} onChange={T} /><__mod_56388.yt title="Overshoot" min={0} max={1} step={.05} value={$} onChange={O} /><__mod_56388.yt title="Smooth" min={0} max={1} step={.05} value={W} onChange={z} /><__mod_56388.yt title="Wheel Speed" min={.1} max={3} step={.1} value={B} onChange={V} /><__mod_56388.yt title="Drag Speed" min={.1} max={4} step={.1} value={G} onChange={Y} /><__mod_56388.yt title="Auto Scroll" min={-400} max={400} step={10} value={_} onChange={X} valueUnit="px/s" /><__mod_56388.tl title="Pause On Hover" checked={K} onChange={J} /><__mod_56388.tl title="Vignette" checked={Q} onChange={Z} /><__mod_56388.W7 title="Vignette" value={er} onChange={et} /></__mod_56388.IH><__mod_56388.Ub data={[{
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
            default: "-112",
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
            description: "Perspective distance in pixels, smaller values bend harder."
          }, {
            name: "bendAngle",
            type: "number",
            default: "90",
            description: "Rotation in degrees a tile reaches at the top and bottom edge."
          }, {
            name: "bendCurve",
            type: "number",
            default: "0.6",
            description: "Shape of the bend from 0 for a hard fold to 1 for a smooth arc."
          }, {
            name: "depth",
            type: "number",
            default: "800",
            description: "How far in pixels a tile sinks into the screen while centred."
          }, {
            name: "depthFocus",
            type: "number",
            default: "8",
            description: "How the sinking is spread, higher values keep it to the centre."
          }, {
            name: "lift",
            type: "number",
            default: "40",
            description: "Vertical squeeze towards the centre as a percentage of tile height."
          }, {
            name: "fade",
            type: "number",
            default: "1",
            description: "How strongly edge tiles darken and desaturate from 0 to 1."
          }, {
            name: "fadeCurve",
            type: "number",
            default: "3",
            description: "Curve of the fade, higher values keep the centre bright longer."
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
            default: '"rgba(0, 0, 0, 0.5)"',
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

const GView: any = g;

export default x;
