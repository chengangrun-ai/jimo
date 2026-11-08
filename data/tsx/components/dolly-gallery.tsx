import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Dolly Gallery
 * Images stacked in depth that you fly through on scroll
 * slug: dolly-gallery
 * category: gallery
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=900&auto=format&fit=crop"],
  u = (e, t, r) => Math.min(r, Math.max(t, e)),
  c = (e, t) => (e % t + t) % t,
  d = (e, t) => {
    let r = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t);
    return r - Math.floor(r);
  },
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
    images: e = o,
    infinite: t = !0,
    itemWidth: r = 340,
    aspectRatio: i = .8,
    borderRadius: s = 7,
    grayscale: p = 1,
    perspective: g = 1e3,
    spacing: x = 800,
    spread: v = .8,
    scatter: y = .1,
    revealRange: b = 1.5,
    passRange: w = 1,
    parallaxX: S = .12,
    parallaxY: C = .06,
    parallaxSmooth: j = .85,
    tilt: M = 4,
    pulse: R = .03,
    drift: P = .08,
    smooth: I = .85,
    wheelSpeed: k = 1,
    dragSpeed: E = 1.5,
    autoScroll: N = 0,
    pauseOnHover: H = !0,
    backgroundColor: D = "transparent",
    onIndexChange: F,
    className: T,
    children: q
  }) => {
    let A = (0, React.useRef)(null),
      L = (0, React.useRef)([]),
      Y = (0, React.useRef)(0),
      $ = (0, React.useRef)(0),
      U = (0, React.useRef)(0),
      O = (0, React.useRef)(0),
      X = (0, React.useRef)(0),
      W = (0, React.useRef)(!1),
      B = (0, React.useRef)(0),
      z = (0, React.useRef)(!1),
      G = (0, React.useRef)(!0),
      _ = (0, React.useRef)(null),
      V = (0, React.useRef)(0),
      K = (0, React.useRef)({
        x: 0,
        y: 0
      }),
      J = (0, React.useRef)({
        x: 0,
        y: 0
      }),
      Q = (0, React.useRef)(-1),
      Z = (0, React.useRef)(F);
    Z.current = F;
    let [ee, et] = (0, React.useState)({
        width: 0,
        height: 0
      }),
      er = (0, React.useSyncExternalStore)(m, f, () => !1),
      ea = (0, React.useMemo)(() => e.map(h), [e]),
      en = Math.max(40, Math.min(r, ee.width - 32)),
      ei = en / Math.max(.1, i),
      es = Math.max(40, x),
      el = (0, React.useMemo)(() => {
        if (!ea.length) return [];
        if (!t) return ea.map((e, t) => ({
          image: e,
          index: t
        }));
        let e = Math.max(1, Math.ceil((Math.ceil(b + w) + 2 + 1) / ea.length)),
          r = [];
        for (let t = 0; t < e; t++) ea.forEach((e, t) => r.push({
          image: e,
          index: t
        }));
        return r;
      }, [ea, t, b, w]),
      eo = el.length * es,
      eu = Math.max(0, (ea.length - 1) * es);
    (0, React.useEffect)(() => {
      let e = A.current;
      if (!e) return;
      let t = new ResizeObserver(() => {
        et({
          width: e.clientWidth,
          height: e.clientHeight
        });
      });
      return t.observe(e), () => t.disconnect();
    }, []), (0, React.useEffect)(() => {
      let e = A.current;
      if (!e || "undefined" == typeof IntersectionObserver) return;
      let t = new IntersectionObserver(([e]) => {
        G.current = e.isIntersecting;
      });
      return t.observe(e), () => t.disconnect();
    }, []);
    let ec = (0, React.useCallback)(e => {
        if (!ee.height || !el.length) return;
        let r = eo / 2,
          a = u(Math.abs(U.current) / 2500, 0, 1),
          n = J.current.x,
          i = J.current.y,
          s = -1,
          l = 1 / 0;
        for (let o = 0; o < el.length; o++) {
          let h = L.current[o];
          if (!h) continue;
          let p = o * es - e,
            m = t ? c(p + r, eo) - r : p,
            f = m / es,
            x = f >= 0 ? 1 - u(f / Math.max(.01, b), 0, 1) : 1 - u(-f / Math.max(.01, w), 0, 1);
          if (x <= .002 || -m >= .95 * g) {
            h.style.visibility = "hidden";
            continue;
          }
          h.style.visibility = "visible";
          let j = Math.abs(m);
          j < l && (l = j, s = el[o].index);
          let I = (o % 2 == 0 ? -1 : 1) * v * (.7 + .3 * d(o, 1)) * en,
            k = (2 * d(o, 2) - 1) * y * ei,
            E = I + n * S * en * x,
            N = k + i * C * ei * x + O.current * P * ei,
            H = 1 + R * a * x,
            D = -i * M * a * x,
            F = n * M * a * x;
          h.style.opacity = x.toFixed(3), h.style.transform = `translate3d(${E.toFixed(2)}px, ${N.toFixed(2)}px, ${(-m).toFixed(1)}px) rotateX(${D.toFixed(2)}deg) rotateY(${F.toFixed(2)}deg) scale(${H.toFixed(4)})`;
        }
        s >= 0 && s !== Q.current && (Q.current = s, Z.current?.(s));
      }, [ee.height, el, eo, es, t, b, w, g, v, y, en, ei, S, C, P, R, M]),
      ed = (0, React.useCallback)(e => t ? e : u(e, 0, eu), [t, eu]),
      eh = (0, React.useCallback)(() => {
        if (W.current) return;
        W.current = !0, B.current = 0;
        let e = t => {
          let r = B.current ? Math.min(.05, (t - B.current) / 1e3) : 1 / 60;
          B.current = t;
          let a = 0 !== N && G.current && !(H && z.current) && !_.current;
          a && (Y.current = ed(Y.current + N * r)), Math.abs(V.current) > 1 ? (Y.current = ed(Y.current + V.current * r), V.current *= Math.pow(.02, r)) : V.current = 0;
          let n = 1.5 + (1 - u(I, 0, 1)) * 30,
            i = er ? 1 : 1 - Math.exp(-r * n),
            s = $.current + (Y.current - $.current) * i,
            l = s - $.current;
          $.current = s;
          let o = er ? 0 : l / r,
            c = 1 - Math.exp(-(8 * r));
          U.current += (o - U.current) * c, O.current += (u(-o / 2500, -1, 1) - O.current) * c * .6;
          let d = 2 + (1 - u(j, 0, 1)) * 40,
            h = er ? 1 : 1 - Math.exp(-r * d);
          J.current.x += (K.current.x - J.current.x) * h, J.current.y += (K.current.y - J.current.y) * h, ec($.current), Math.abs(Y.current - $.current) > .05 || Math.abs(U.current) > 1 || Math.abs(O.current) > .001 || Math.abs(K.current.x - J.current.x) > .001 || Math.abs(K.current.y - J.current.y) > .001 || a || 0 !== V.current ? X.current = requestAnimationFrame(e) : ($.current = Y.current, U.current = 0, O.current = 0, ec($.current), W.current = !1);
        };
        X.current = requestAnimationFrame(e);
      }, [N, H, ed, er, I, j, ec]);
    (0, React.useEffect)(() => (Y.current = ed(Y.current), $.current = ed($.current), ec($.current), eh(), () => {
      cancelAnimationFrame(X.current), W.current = !1;
    }), [ec, ed, eh]), (0, React.useEffect)(() => {
      let e = A.current;
      if (!e) return;
      let r = e => {
        let r = 1 === e.deltaMode ? 16 : 2 === e.deltaMode ? ee.height : 1,
          a = Y.current;
        Y.current = ed(a + e.deltaY * r * k), (t || Y.current !== a) && (e.preventDefault(), V.current = 0, eh());
      };
      return e.addEventListener("wheel", r, {
        passive: !1
      }), () => e.removeEventListener("wheel", r);
    }, [ee.height, k, ed, t, eh]);
    let ep = e => {
        _.current && (_.current = null, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), V.current = u(V.current, -4e3, 4e3), eh());
      },
      em = {
        width: en,
        height: ei,
        left: "50%",
        top: "50%",
        marginLeft: -en / 2,
        marginTop: -ei / 2,
        borderRadius: s
      };
    return <div ref={A} role="region" aria-roledescription="carousel" aria-label="Image gallery" tabIndex={0} className={(0, __mod_90650.cn)("relative h-full w-full cursor-grab touch-none select-none overflow-hidden outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-inset", T)} style={{
      backgroundColor: D
    }} onPointerDown={e => {
      0 === e.button && (_.current = {
        y: e.clientY,
        at: performance.now()
      }, V.current = 0, e.currentTarget.setPointerCapture(e.pointerId));
    }} onPointerMove={e => {
      let t;
      t = e.currentTarget.getBoundingClientRect(), K.current.x = u((e.clientX - t.left) / t.width * 2 - 1, -1, 1), K.current.y = u((e.clientY - t.top) / t.height * 2 - 1, -1, 1);
      let r = _.current;
      if (!r) return void eh();
      let a = e.clientY - r.y,
        n = performance.now(),
        i = Math.max(1, n - r.at) / 1e3;
      r.y = e.clientY, r.at = n, Y.current = ed(Y.current - a * E), V.current = -a * E / i, eh();
    }} onPointerUp={ep} onPointerCancel={ep} onPointerEnter={() => {
      z.current = !0;
    }} onPointerLeave={() => {
      z.current = !1, K.current.x = 0, K.current.y = 0, eh();
    }} onKeyDown={e => {
      let t = {
        ArrowDown: es,
        ArrowUp: -es,
        ArrowRight: es,
        ArrowLeft: -es,
        PageDown: es,
        PageUp: -es,
        " ": es
      }[e.key];
      void 0 !== t && (e.preventDefault(), Y.current = ed(Y.current + t), eh());
    }}><div className="absolute inset-0 [transform-style:preserve-3d]" style={{
        perspective: `${g}px`
      }}>{el.map(({
          image: e,
          index: t
        }, r) => <div ref={e => {
          e ? L.current[r] = e : delete L.current[r];
        }} className="invisible absolute overflow-hidden bg-neutral-800 will-change-[transform,opacity] [backface-visibility:hidden]" style={em} aria-hidden={r >= ea.length}><img src={e.src} alt={e.alt ?? `Gallery image ${t + 1}`} draggable={!1} loading="lazy" style={{
            filter: p > 0 ? `grayscale(${u(p, 0, 1)})` : void 0
          }} className="h-full w-full object-cover" /></div>)}</div>{q ? <div className="pointer-events-none relative z-[2] h-full w-full">{q}</div> : null}</div>;
  },
  x = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [r, l] = (0, React.useState)(!0),
      [o, u] = (0, React.useState)(340),
      [c, d] = (0, React.useState)(.8),
      [h, p] = (0, React.useState)(7),
      [m, f] = (0, React.useState)(1),
      [x, v] = (0, React.useState)(1e3),
      [y, b] = (0, React.useState)(800),
      [w, S] = (0, React.useState)(.8),
      [C, j] = (0, React.useState)(.1),
      [M, R] = (0, React.useState)(1.5),
      [P, I] = (0, React.useState)(1),
      [k, E] = (0, React.useState)(.12),
      [N, H] = (0, React.useState)(.06),
      [D, F] = (0, React.useState)(.85),
      [T, q] = (0, React.useState)(4),
      [A, L] = (0, React.useState)(.03),
      [Y, $] = (0, React.useState)(.08),
      [U, O] = (0, React.useState)(.85),
      [X, W] = (0, React.useState)(1),
      [B, z] = (0, React.useState)(1.5),
      [G, _] = (0, React.useState)(0),
      [V, K] = (0, React.useState)(!0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={620}><div className="relative h-full w-full"><GView className="h-full w-full" infinite={r} itemWidth={o} aspectRatio={c} borderRadius={h} grayscale={m} perspective={x} spacing={y} spread={w} scatter={C} revealRange={M} passRange={P} parallaxX={k} parallaxY={N} parallaxSmooth={D} tilt={T} pulse={A} drift={Y} smooth={U} wheelSpeed={X} dragSpeed={B} autoScroll={G} pauseOnHover={V}/></div></__mod_56388.Ch><__mod_56388.IH><__mod_56388.tl title="Infinite" checked={r} onChange={l} /><__mod_56388.yt title="Item Width" min={120} max={600} step={10} value={o} onChange={u} /><__mod_56388.yt title="Aspect Ratio" min={.5} max={1.8} step={.05} value={c} onChange={d} /><__mod_56388.yt title="Border Radius" min={0} max={40} step={1} value={h} onChange={p} /><__mod_56388.yt title="Grayscale" min={0} max={1} step={.05} value={m} onChange={f} /><__mod_56388.yt title="Perspective" min={400} max={2e3} step={50} value={x} onChange={v} /><__mod_56388.yt title="Spacing" min={200} max={2e3} step={50} value={y} onChange={b} /><__mod_56388.yt title="Spread" min={0} max={1.5} step={.05} value={w} onChange={S} /><__mod_56388.yt title="Scatter" min={0} max={.5} step={.01} value={C} onChange={j} /><__mod_56388.yt title="Reveal Range" min={.5} max={3} step={.1} value={M} onChange={R} /><__mod_56388.yt title="Pass Range" min={.2} max={2} step={.1} value={P} onChange={I} /><__mod_56388.yt title="Parallax X" min={0} max={.5} step={.01} value={k} onChange={E} /><__mod_56388.yt title="Parallax Y" min={0} max={.3} step={.01} value={N} onChange={H} /><__mod_56388.yt title="Parallax Smooth" min={0} max={1} step={.05} value={D} onChange={F} /><__mod_56388.yt title="Tilt" min={0} max={20} step={.5} value={T} onChange={q} /><__mod_56388.yt title="Pulse" min={0} max={.15} step={.005} value={A} onChange={L} /><__mod_56388.yt title="Drift" min={0} max={.4} step={.01} value={Y} onChange={$} /><__mod_56388.yt title="Smooth" min={0} max={1} step={.05} value={U} onChange={O} /><__mod_56388.yt title="Wheel Speed" min={.2} max={3} step={.1} value={X} onChange={W} /><__mod_56388.yt title="Drag Speed" min={.2} max={4} step={.1} value={B} onChange={z} /><__mod_56388.yt title="Auto Scroll" min={-600} max={600} step={20} value={G} onChange={_} /><__mod_56388.tl title="Pause On Hover" checked={V} onChange={K} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "images",
            type: "(string | { src: string; alt?: string })[]",
            default: "8 Unsplash photos",
            description: "Images stacked into the depth, as URLs or objects with alt text."
          }, {
            name: "infinite",
            type: "boolean",
            default: "true",
            description: "Loop the stack so it can be scrolled forever in either direction."
          }, {
            name: "itemWidth",
            type: "number",
            default: "340",
            description: "Maximum width of an image in pixels at the focus depth. Shrinks to fit narrow containers."
          }, {
            name: "aspectRatio",
            type: "number",
            default: "0.8",
            description: "Image width divided by height."
          }, {
            name: "borderRadius",
            type: "number",
            default: "7",
            description: "Corner radius of the images in pixels."
          }, {
            name: "grayscale",
            type: "number",
            default: "1",
            description: "How far the images are drained of colour, 0 to 1."
          }, {
            name: "perspective",
            type: "number",
            default: "1000",
            description: "Perspective distance in pixels. Smaller values exaggerate the depth."
          }, {
            name: "spacing",
            type: "number",
            default: "800",
            description: "Depth in pixels between consecutive images. Also the scroll distance per image."
          }, {
            name: "spread",
            type: "number",
            default: "0.8",
            description: "Sideways offset of each image as a fraction of its width, alternating sides."
          }, {
            name: "scatter",
            type: "number",
            default: "0.1",
            description: "Vertical scatter of each image as a fraction of its height."
          }, {
            name: "revealRange",
            type: "number",
            default: "1.5",
            description: "Images this many steps deeper than the focus are still faintly visible."
          }, {
            name: "passRange",
            type: "number",
            default: "1",
            description: "Images this many steps in front of the focus are still faintly visible."
          }, {
            name: "parallaxX",
            type: "number",
            default: "0.12",
            description: "How far the focused image follows the pointer sideways, as a fraction of its width."
          }, {
            name: "parallaxY",
            type: "number",
            default: "0.06",
            description: "How far the focused image follows the pointer vertically, as a fraction of its height."
          }, {
            name: "parallaxSmooth",
            type: "number",
            default: "0.85",
            description: "Pointer follow damping. 0 snaps, 1 trails far behind."
          }, {
            name: "tilt",
            type: "number",
            default: "4",
            description: "Degrees the focused image tilts towards the pointer while scrolling fast."
          }, {
            name: "pulse",
            type: "number",
            default: "0.03",
            description: "How much the focused image swells while scrolling fast. 0.03 is 3 percent."
          }, {
            name: "drift",
            type: "number",
            default: "0.08",
            description: "How far the stack drifts against the scroll direction, as a fraction of image height."
          }, {
            name: "smooth",
            type: "number",
            default: "0.85",
            description: "Scroll follow damping. 0 is instant, 1 is very loose."
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
            description: "Pixels per second the camera travels by itself. 0 disables."
          }, {
            name: "pauseOnHover",
            type: "boolean",
            default: "true",
            description: "Stop the travel while the pointer is over the gallery."
          }, {
            name: "backgroundColor",
            type: "string",
            default: '"transparent"',
            description: "Colour behind the images."
          }, {
            name: "onIndexChange",
            type: "(index: number) => void",
            default: "—",
            description: "Fired when the image nearest the focus depth changes."
          }, {
            name: "className",
            type: "string",
            default: "—",
            description: "Extra classes for the outer container."
          }, {
            name: "children",
            type: "ReactNode",
            default: "—",
            description: "Content layered above the gallery."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const GView: any = g;

export default x;
