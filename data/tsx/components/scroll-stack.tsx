import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Scroll Stack
 * Cards that stack and fade away as you scroll
 * slug: scroll-stack
 * category: scroll
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
    eyebrow: "01. Survey",
    title: "Read the site before it exists",
    body: "Sightlines, prevailing wind and the path of the sun set the footprint long before a wall is drawn.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    accent: "#9bd1ff"
  }, {
    eyebrow: "02. Massing",
    title: "Volume answers to light",
    body: "Blocks are pushed and pulled until every occupied room borrows daylight from two directions.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    accent: "#ffd9a0"
  }, {
    eyebrow: "03. Structure",
    title: "A grid you can feel",
    body: "The frame is tuned so the span reads as calm repetition rather than raw engineering.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1200&auto=format&fit=crop",
    accent: "#c7b8ff"
  }, {
    eyebrow: "04. Envelope",
    title: "Skin that keeps its temper",
    body: "Glass, shade and thermal mass are balanced until the building holds steady without working hard.",
    image: "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=1200&auto=format&fit=crop",
    accent: "#a8e6cf"
  }, {
    eyebrow: "05. Detail",
    title: "The last millimetre",
    body: "Reveals, shadow gaps and junctions decide whether the whole thing looks considered or merely finished.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    accent: "#ffb3ba"
  }],
  c = (e, t, a) => Math.min(a, Math.max(t, e)),
  d = e => e * e * (3 - 2 * e),
  u = (e, t, a) => {
    let r = [];
    return a > .01 && r.push(`blur(${(e * a).toFixed(2)}px)`), t > .001 && r.push(`brightness(${(1 - e * t).toFixed(3)})`), r.length ? r.join(" ") : "none";
  },
  m = (e, t, a, r) => {
    let i = `inset(0 0 0 0 round ${r.radius}px)`,
      n = a % 2 == 0 ? 1 : -1;
    if (t < 0) {
      let a = c(t + 1, 0, 1),
        s = d(a);
      switch (e) {
        case "fade":
          return {
            transform: `translate3d(0,0,0) scale(${(1.06 - .06 * s).toFixed(4)})`,
            opacity: s,
            filter: "none",
            clip: i
          };
        case "flip":
          return {
            transform: `translate3d(0,${((1 - s) * 26).toFixed(2)}%,0) rotateX(${(-((1 - s) * 72)).toFixed(2)}deg)`,
            opacity: c(1.6 * s, 0, 1),
            filter: "none",
            clip: i
          };
        case "zoom":
          return {
            transform: `translate3d(0,0,0) scale(${(.52 + .48 * s).toFixed(4)})`,
            opacity: c(1.4 * s, 0, 1),
            filter: r.blur > .01 ? `blur(${((1 - s) * r.blur).toFixed(2)}px)` : "none",
            clip: i
          };
        case "reveal":
          return {
            transform: "translate3d(0,0,0)",
            opacity: 1,
            filter: "none",
            clip: `inset(${((1 - a) * 100).toFixed(2)}% 0 0 0 round ${r.radius}px)`
          };
        case "deck":
          return {
            transform: `translate3d(0,${((1 - a) * (r.enter + 6)).toFixed(2)}%,0) rotate(${((1 - s) * 4 * n).toFixed(2)}deg)`,
            opacity: 1,
            filter: "none",
            clip: i
          };
        default:
          return {
            transform: `translate3d(0,${((1 - a) * r.enter).toFixed(2)}%,0)`,
            opacity: 1,
            filter: "none",
            clip: i
          };
      }
    }
    let s = d(c(t, 0, 1));
    switch (e) {
      case "fade":
        return {
          transform: `translate3d(0,0,0) scale(${(1 - .06 * s).toFixed(4)})`,
          opacity: 1 - s,
          filter: u(s, r.dim, r.blur),
          clip: i
        };
      case "flip":
        return {
          transform: `translate3d(0,${(-(26 * s)).toFixed(2)}%,0) rotateX(${(72 * s).toFixed(2)}deg)`,
          opacity: 1 - s,
          filter: u(s, r.dim, 0),
          clip: i
        };
      case "zoom":
        return {
          transform: `translate3d(0,0,0) scale(${(1 + .42 * s).toFixed(4)})`,
          opacity: 1 - s,
          filter: r.blur > .01 ? `blur(${(s * r.blur * 1.4).toFixed(2)}px)` : "none",
          clip: i
        };
      case "reveal":
        return {
          transform: `translate3d(0,${(-t * r.peek * .5).toFixed(2)}px,0) scale(${(1 - t * r.scaleStep * .7).toFixed(4)})`,
          opacity: 1,
          filter: u(t, r.dim, r.blur),
          clip: i
        };
      case "deck":
        return {
          transform: `translate3d(0,${(-t * r.peek * .75).toFixed(2)}px,0) rotate(${(4.5 * t * n).toFixed(2)}deg) scale(${(1 - t * r.scaleStep * .85).toFixed(4)})`,
          opacity: 1,
          filter: u(t, r.dim, r.blur),
          clip: i
        };
      default:
        return {
          transform: `translate3d(0,${(-t * r.peek).toFixed(2)}px,0) scale(${(1 - t * r.scaleStep).toFixed(4)})`,
          opacity: 1,
          filter: u(t, r.dim, r.blur),
          clip: i
        };
    }
  },
  p = ({
    items: e = o,
    children: t,
    variant: a = "stack",
    scrollLength: n = 1,
    peek: s = 26,
    scaleStep: d = .07,
    blur: u = 4,
    dim: p = .28,
    smooth: x = .16,
    depth: f = 3,
    cardWidth: b = 880,
    cardHeight: g = .68,
    borderRadius: v = 22,
    perspective: y = 1400,
    showProgress: w = !0,
    showCounter: k = !0,
    onIndexChange: j,
    className: S
  }) => {
    let C = (0, React.useMemo)(() => React.Children.toArray(t).filter(e => (0, React.isValidElement)(e)), [t]),
      F = C.length > 0 ? C : e,
      $ = F.length,
      N = (0, React.useRef)(null),
      M = (0, React.useRef)([]),
      E = (0, React.useRef)(null),
      R = (0, React.useRef)(0),
      P = (0, React.useRef)(0),
      L = (0, React.useRef)(0),
      H = (0, React.useRef)(!1),
      z = (0, React.useRef)(-1),
      _ = (0, React.useRef)(j),
      [I, U] = (0, React.useState)(0),
      [D, T] = (0, React.useState)(!1);
    (0, React.useEffect)(() => {
      _.current = j;
    }, [j]), (0, React.useEffect)(() => {
      if (!window.matchMedia) return;
      let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
        t = () => T(e.matches);
      return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
    }, []);
    let V = (0, React.useMemo)(() => ({
        peek: Math.max(0, s),
        scaleStep: c(d, 0, .4),
        blur: D ? 0 : Math.max(0, u),
        dim: c(p, 0, 1),
        radius: Math.max(0, v),
        enter: (1 + 1 / c(g, .2, .95)) / 2 * 100 + 3
      }), [s, d, u, p, v, D, g]),
      q = (0, React.useCallback)(e => {
        let t = Math.max(1, Math.round(f));
        for (let r = 0; r < $; r += 1) {
          let i = M.current[r];
          if (!i) continue;
          let n = e - r;
          if (n < -1.0005 || n > t) {
            "hidden" !== i.style.visibility && (i.style.visibility = "hidden");
            continue;
          }
          "hidden" === i.style.visibility && (i.style.visibility = "");
          let s = m(a, n, r, V);
          i.style.transform = s.transform, i.style.opacity = s.opacity.toFixed(4), i.style.filter = s.filter, i.style.clipPath = s.clip;
        }
        if (E.current && $ > 1) {
          let t = c(e / ($ - 1), 0, 1);
          E.current.style.transform = `scaleX(${t.toFixed(4)})`;
        }
        let r = c(Math.round(e), 0, $ - 1);
        r !== z.current && (z.current = r, U(r), _.current?.(r));
      }, [$, f, V, a]),
      B = (0, React.useCallback)(() => {
        let e = N.current;
        if (!e || $ < 1) return 0;
        let t = e.ownerDocument.defaultView,
          a = t ? t.innerHeight : 0,
          r = e.getBoundingClientRect(),
          i = r.height - a;
        return i <= 0 ? 0 : c(-r.top / i, 0, 1) * ($ - 1);
      }, [$]);
    (0, React.useEffect)(() => {
      let e = N.current;
      if (!e) return;
      let t = e.ownerDocument,
        a = t.defaultView;
      if (!a) return;
      let r = D ? 0 : c(x, 0, .95),
        i = e => {
          let t = P.current || e,
            n = Math.min(.05, Math.max(0, (e - t) / 1e3));
          P.current = e;
          let s = B(),
            l = R.current,
            o = l + (s - l) * (r > 0 ? 1 - Math.pow(1 - r, 60 * n) : 1);
          R.current = o, q(o), Math.abs(s - o) > 4e-4 ? L.current = a.requestAnimationFrame(i) : (R.current = s, q(s), H.current = !1);
        },
        n = () => {
          H.current || (H.current = !0, P.current = 0, L.current = a.requestAnimationFrame(i));
        };
      R.current = B(), q(R.current), a.addEventListener("scroll", n, {
        passive: !0
      }), t.addEventListener("scroll", n, {
        passive: !0,
        capture: !0
      }), a.addEventListener("resize", n);
      let s = new ResizeObserver(n);
      return s.observe(e), () => {
        a.cancelAnimationFrame(L.current), H.current = !1, a.removeEventListener("scroll", n), t.removeEventListener("scroll", n, {
          capture: !0
        }), a.removeEventListener("resize", n), s.disconnect();
      };
    }, [B, q, x, D]);
    let W = 100 + Math.max(0, $ - 1) * Math.max(.2, n) * 100;
    return <section ref={N} aria-label="Scrolling card stack" className={(0, __mod_90650.cn)("relative w-full", S)} style={{
      height: `${W}vh`
    }}><div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-8" style={{
        perspective: `${Math.max(200, y)}px`
      }}><div className="relative w-full" style={{
          maxWidth: `${Math.max(200, b)}px`,
          height: `${100 * c(g, .2, .95)}vh`
        }}>{F.map((e, t) => <div ref={e => {
            M.current[t] = e;
          }} className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform,opacity]" style={{
            zIndex: t
          }}>{C.length > 0 ? e : React.createElement(h, { item: e, index: t, total: $, radius: V.radius })}</div>)}</div>{(w || k) && $ > 1 && <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-4 px-6 sm:bottom-8">{w && <span className="relative h-px w-28 overflow-hidden bg-current/20 sm:w-44"><span ref={E} className="absolute inset-0 origin-left bg-current" style={{
              transform: "scaleX(0)"
            }} /></span>}{k && <span className="text-[11px] font-medium tabular-nums tracking-widest opacity-60">{String(I + 1).padStart(2, "0")} / {String($).padStart(2, "0")}</span>}</div>}</div></section>;
  },
  h = ({
    item: e,
    index: t,
    total: a,
    radius: i
  }) => <article className="relative flex h-full w-full flex-col justify-end overflow-hidden border border-neutral-200 bg-neutral-100 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.45)] dark:border-neutral-800 dark:bg-neutral-900" style={{
    borderRadius: `${i}px`
  }}>{e.image && <><img src={e.image} alt="" loading="lazy" decoding="async" draggable={!1} className="absolute inset-0 h-full w-full object-cover" /><span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" /></>}<span className={(0, __mod_90650.cn)("absolute right-5 top-5 text-[11px] font-medium tabular-nums tracking-widest sm:right-7 sm:top-7", e.image ? "text-white/55" : "text-neutral-400 dark:text-neutral-500")}>{String(t + 1).padStart(2, "0")}/{String(a).padStart(2, "0")}</span><div className="relative flex flex-col gap-3 p-6 sm:gap-4 sm:p-9">{e.eyebrow && <span className={(0, __mod_90650.cn)("text-[11px] font-medium uppercase tracking-[0.2em]", !e.accent && (e.image ? "text-white/70" : "text-neutral-500 dark:text-neutral-400"))} style={e.accent ? {
        color: e.accent
      } : void 0}>{e.eyebrow}</span>}{e.title && <h3 className={(0, __mod_90650.cn)("max-w-[22ch] text-balance text-2xl font-medium leading-[1.15] tracking-tight sm:text-3xl md:text-4xl", e.image ? "text-white" : "text-neutral-900 dark:text-white")}>{e.title}</h3>}{e.body && <p className={(0, __mod_90650.cn)("max-w-[46ch] text-sm leading-relaxed sm:text-base", e.image ? "text-white/70" : "text-neutral-600 dark:text-neutral-400")}>{e.body}</p>}</div></article>,
  x = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, l] = (0, React.useState)("stack"),
      [o, c] = (0, React.useState)(1),
      [d, u] = (0, React.useState)(26),
      [m, h] = (0, React.useState)(.07),
      [x, f] = (0, React.useState)(4),
      [b, g] = (0, React.useState)(.28),
      [v, y] = (0, React.useState)(.16),
      [w, k] = (0, React.useState)(3),
      [j, S] = (0, React.useState)(880),
      [C, F] = (0, React.useState)(.68),
      [$, N] = (0, React.useState)(22),
      [M, E] = (0, React.useState)(1400),
      [R, P] = (0, React.useState)(!0),
      [L, H] = (0, React.useState)(!0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={620} enableResponsive={!0}>{React.createElement(p, { variant: a, scrollLength: o, peek: d, scaleStep: m, blur: x, dim: b, smooth: v, depth: w, cardWidth: j, cardHeight: C, borderRadius: $, perspective: M, showProgress: R, showCounter: L })}</__mod_56388.Ch><__mod_56388.IH><__mod_56388.bg title="Variant" value={a} onChange={e => l(e)} options={[{
              value: "stack",
              label: "Stack"
            }, {
              value: "deck",
              label: "Deck"
            }, {
              value: "fade",
              label: "Fade"
            }, {
              value: "flip",
              label: "Flip"
            }, {
              value: "zoom",
              label: "Zoom"
            }, {
              value: "reveal",
              label: "Reveal"
            }]} /><__mod_56388.yt title="Scroll Length" value={o} onChange={c} min={.4} max={2.5} step={.1} valueUnit="vh" /><__mod_56388.yt title="Peek" value={d} onChange={u} min={0} max={80} step={1} valueUnit="px" /><__mod_56388.yt title="Scale Step" value={m} onChange={h} min={0} max={.25} step={.005} /><__mod_56388.yt title="Blur" value={x} onChange={f} min={0} max={16} step={.5} valueUnit="px" /><__mod_56388.yt title="Dim" value={b} onChange={g} min={0} max={1} step={.02} /><__mod_56388.yt title="Smooth" value={v} onChange={y} min={0} max={.6} step={.01} /><__mod_56388.yt title="Depth" value={w} onChange={k} min={1} max={6} step={1} /><__mod_56388.yt title="Card Width" value={j} onChange={S} min={320} max={1200} step={10} valueUnit="px" /><__mod_56388.yt title="Card Height" value={C} onChange={F} min={.3} max={.92} step={.01} /><__mod_56388.yt title="Border Radius" value={$} onChange={N} min={0} max={48} step={1} valueUnit="px" /><__mod_56388.yt title="Perspective" value={M} onChange={E} min={400} max={3e3} step={50} valueUnit="px" /><__mod_56388.tl title="Show Progress" checked={R} onChange={P} /><__mod_56388.tl title="Show Counter" checked={L} onChange={H} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "items",
            type: "ScrollStackItem[]",
            default: "5 cards",
            description: "Cards rendered by the built-in layout. Each accepts eyebrow, title, body, image and accent."
          }, {
            name: "children",
            type: "ReactNode",
            default: "undefined",
            description: "Custom cards, one per child. Supplying children replaces the built-in card layout entirely."
          }, {
            name: "variant",
            type: '"stack" | "deck" | "fade" | "flip" | "zoom" | "reveal"',
            default: '"stack"',
            description: "Which stacking animation runs as the cards change over."
          }, {
            name: "scrollLength",
            type: "number",
            default: "1",
            description: "Viewport heights of scrolling assigned to each card."
          }, {
            name: "peek",
            type: "number",
            default: "26",
            description: "Pixels a covered card slides up so its edge peeks out."
          }, {
            name: "scaleStep",
            type: "number",
            default: "0.07",
            description: "How much a covered card shrinks per step, from 0 to 1."
          }, {
            name: "blur",
            type: "number",
            default: "4",
            description: "Maximum blur in pixels applied to covered cards. Set 0 to disable the filter entirely."
          }, {
            name: "dim",
            type: "number",
            default: "0.28",
            description: "How far covered cards darken, from 0 to 1."
          }, {
            name: "smooth",
            type: "number",
            default: "0.16",
            description: "Scroll follow damping. 0 tracks the scrollbar exactly, higher values trail behind it."
          }, {
            name: "depth",
            type: "number",
            default: "3",
            description: "How many covered cards stay mounted behind the active one. Lower is cheaper to render."
          }, {
            name: "cardWidth",
            type: "number",
            default: "880",
            description: "Maximum card width in pixels."
          }, {
            name: "cardHeight",
            type: "number",
            default: "0.68",
            description: "Card height as a fraction of the viewport."
          }, {
            name: "borderRadius",
            type: "number",
            default: "22",
            description: "Corner radius of the cards in pixels."
          }, {
            name: "perspective",
            type: "number",
            default: "1400",
            description: "Perspective depth in pixels used by the flip variant."
          }, {
            name: "showProgress",
            type: "boolean",
            default: "true",
            description: "Show the progress rail under the stack."
          }, {
            name: "showCounter",
            type: "boolean",
            default: "true",
            description: "Show the numeric counter under the stack."
          }, {
            name: "onIndexChange",
            type: "(index: number) => void",
            default: "undefined",
            description: "Fired whenever the frontmost card changes."
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Extra classes for the outer section."
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const H: any = h;

const ScrollStackView: any = p;
export default x;
