import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_87974 from "../_helpers/87974";
import * as __mod_90650 from "../_helpers/90650";
import * as __mod_90761 from "../_helpers/90761";
import * as __mod_56388 from "../_helpers/56388";
/**
 * Tumble Carousel
 * Cards that tumble end over end as the carousel advances
 * slug: tumble-carousel
 * category: carousel
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let f = [{
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=600&auto=format&fit=crop",
    title: "Vanishing Point"
  }, {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    title: "Glass and Gravity"
  }, {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop",
    title: "Cut From the Sky"
  }, {
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=600&auto=format&fit=crop",
    title: "Stacked in White"
  }, {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600&auto=format&fit=crop",
    title: "The Long Curve"
  }, {
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600&auto=format&fit=crop",
    title: "Quiet Lines"
  }, {
    src: "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=600&auto=format&fit=crop",
    title: "Cobalt Facade"
  }, {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=600&auto=format&fit=crop",
    title: "Concrete Chorus"
  }, {
    src: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=600&auto=format&fit=crop",
    title: "City in Motion"
  }, {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
    title: "Water and Stone"
  }],
  b = (e, t, a) => t < 1 ? 0 : a ? (e % t + t) % t : e < 0 ? 0 : e > t - 1 ? t - 1 : e,
  x = (e, t, a) => {
    if (!a || t < 2) return e;
    let n = t / 2,
      r = (e + n) % t - n;
    return r < -n && (r += t), r;
  },
  g = (e, t, a, n) => n ? {
    type: "tween",
    duration: .12,
    ease: "linear"
  } : {
    type: "spring",
    bounce: e,
    duration: t * a,
    velocity: 0
  },
  v = ({
    item: e,
    index: t,
    count: a,
    glide: r,
    tumble: s,
    width: i,
    aspectRatio: c,
    rotation: u,
    drop: d,
    minScale: p,
    radius: h,
    blur: m,
    captioned: f,
    wrap: b,
    range: g,
    onPick: v
  }) => {
    let y = (0, __mod_32923.G)(r, e => x(t - e, a, b)),
      w = (0, __mod_32923.G)(s, e => x(t - e, a, b)),
      j = (0, __mod_32923.G)(y, e => `${100 * e - 50}%`),
      C = (0, __mod_32923.G)(w, e => `${e * d - 50}%`),
      S = (0, __mod_32923.G)(w, e => e * u),
      k = (0, __mod_32923.G)(w, e => 1 - Math.min(Math.abs(e), 1) * (1 - p)),
      M = (0, __mod_32923.G)(w, e => a - Math.round(2 * Math.abs(e))),
      N = (0, __mod_32923.G)(w, e => {
        let t = Math.abs(e) - Math.max(g - .7, 0);
        return t <= 0 ? 1 : Math.max(0, 1 - t / .7);
      }),
      P = (0, __mod_32923.G)(w, e => Math.max(0, 1 - 1.8 * Math.abs(e))),
      A = (0, __mod_32923.G)(w, e => `blur(${Math.min(Math.abs(e), 1) * m}px)`),
      G = (0, __mod_32923.G)(w, e => 10 * Math.min(Math.abs(e), 1));
    return <motion.div className="absolute left-1/2 top-1/2 will-change-[transform]" style={{
      width: i,
      aspectRatio: c,
      x: j,
      y: C,
      rotate: S,
      scale: k,
      zIndex: M,
      opacity: N
    }}><button type="button" onClick={v} aria-label={e.title} style={{
        borderRadius: h
      }} className="relative block h-full w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 shadow-[0_18px_45px_-20px_rgb(0_0_0/0.45)] outline-none focus-visible:[outline:2px_solid_currentColor] focus-visible:[outline-offset:4px]"><img src={e.src} alt={e.alt ?? e.title} draggable={!1} className="pointer-events-none h-full w-full object-cover" />{f && <><motion.span aria-hidden={!0} className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent" style={{
            opacity: P
          }} /><motion.span className="pointer-events-none absolute inset-x-0 bottom-0 block px-4 pb-3.5 text-left text-sm font-medium leading-snug tracking-[-0.01em] text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.35)]" style={{
            opacity: P,
            filter: A,
            y: G
          }}>{e.title}</motion.span></>}</button></motion.div>;
  },
  y = ({
    side: e,
    disabled: t,
    onPress: a
  }) => {
    let r = "prev" === e ? ChevronLeft : ChevronRight;
    return <button type="button" onClick={a} disabled={t} aria-label={"prev" === e ? "Previous card" : "Next card"} className="cursor-pointer p-1 opacity-40 transition-opacity duration-200 hover:opacity-100 disabled:pointer-events-none disabled:opacity-15"><r size={16} strokeWidth={2.25} /></button>;
  },
  w = ({
    items: e = f,
    initialIndex: t = 3,
    cardWidth: a = 200,
    aspectRatio: s = "1 / 1",
    frameHeight: i,
    visibleRange: o = 2.4,
    rotation: p = 30,
    verticalOffset: h = 50,
    inactiveScale: w = .6,
    borderRadius: j = 16,
    titleBlur: C = 2,
    speed: S = 1,
    showTitles: k = !0,
    showControls: M = !0,
    showCounter: N = !0,
    loop: P = !1,
    autoplay: A = !1,
    autoplayDelay: G = 3e3,
    enableDrag: R = !0,
    enableKeyboard: _ = !0,
    className: I,
    onIndexChange: E
  }) => {
    let D = e.length,
      T = (0, __mod_50969.I)() ?? !1,
      q = (0, React.useMemo)(() => b(t, D, !1), [t, D]),
      [B, W] = (0, React.useState)(q),
      F = (0, __mod_75272.d)(q),
      H = (0, __mod_75272.d)(q),
      V = (0, React.useRef)(q),
      L = (0, React.useRef)(!1),
      O = (0, React.useRef)(E);
    (0, React.useEffect)(() => {
      O.current = E;
    }, [E]);
    let $ = (0, React.useCallback)(e => {
        let t = b(e, D, P);
        W(t), O.current?.(t);
        let a = P ? H.get() + x(t - H.get(), D, !0) : t;
        (0, __mod_87974.i)(F, a, g(.1, .8, S, T)), (0, __mod_87974.i)(H, a, g(.2, .8, S, T));
      }, [D, F, P, T, S, H]),
      Q = (0, React.useCallback)(e => $(B + e), [B, $]);
    (0, React.useEffect)(() => {
      if (!A || D <= 1) return;
      let e = window.setInterval(() => {
        (P || !(B >= D - 1)) && $(B + 1);
      }, Math.max(G, 400));
      return () => window.clearInterval(e);
    }, [A, G, D, B, P, $]);
    let U = (0, React.useMemo)(() => {
        if (i) return i;
        let e = a / (e => {
            let [t, a] = e.split("/").map(e => Number(e.trim()));
            return !Number.isFinite(t) || t <= 0 ? 1 : !Number.isFinite(a) || a <= 0 ? t : t / a;
          })(s),
          t = Math.abs(p) * Math.PI / 180,
          n = w * (e * Math.cos(t) + a * Math.sin(t)) / 2;
        return Math.round(2 * (Math.abs(h) / 100 * e * o + n));
      }, [s, a, i, w, p, h, o]),
      z = String(D).length,
      K = !P && 0 === B,
      X = !P && B >= D - 1;
    return <div tabIndex={0} role="group" aria-roledescription="carousel" aria-label="Image carousel" onKeyDown={e => {
      if (!_) return;
      let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
      t && (e.preventDefault(), Q(t));
    }} className={(0, __mod_90650.cn)("relative flex w-full select-none flex-col items-center overflow-hidden text-neutral-900 outline-none dark:text-neutral-100", I)}><motion.div className="relative w-full overflow-hidden" style={{
        height: U,
        touchAction: "pan-y"
      }} onPanStart={R ? () => {
        L.current = !1, F.jump(F.get()), H.jump(H.get()), V.current = H.get();
      } : void 0} onPan={R ? (e, t) => {
        Math.abs(t.offset.x) > 6 && (L.current = !0);
        let n = V.current - t.offset.x / a;
        !P && (n < 0 ? n *= .35 : n > D - 1 && (n = D - 1 + (n - (D - 1)) * .35)), F.set(n), H.set(n);
      } : void 0} onPanEnd={R ? (e, t) => {
        $(Math.round(H.get() - t.velocity.x / a * .12));
      } : void 0}>{e.map((e, t) => <v item={e} index={t} count={D} glide={F} tumble={H} width={a} aspectRatio={s} rotation={p} drop={h} minScale={w} radius={j} blur={C} captioned={k} wrap={P} range={o} onPick={() => {
          !L.current && $(t);
        }} />)}</motion.div>{(M || N) && <div className="mt-6 flex items-center gap-4">{M && <YView side="prev" disabled={K} onPress={() => Q(-1)}/>}{N && <p className="flex items-center gap-1.5 text-xs font-medium tabular-nums tracking-wide"><span>{String(B + 1).padStart(z, "0")}</span><span className="opacity-30">/</span><span className="opacity-40">{String(D).padStart(z, "0")}</span></p>}{M && <y side="next" disabled={X} onPress={() => Q(1)} />}</div>}</div>;
  },
  j = () => {
    let [e, t] = (0, __mod_90761.I)(),
      [a, o] = (0, React.useState)(200),
      [l, c] = (0, React.useState)(30),
      [u, d] = (0, React.useState)(50),
      [p, h] = (0, React.useState)(.6),
      [m, f] = (0, React.useState)(2.4),
      [b, x] = (0, React.useState)(16),
      [g, v] = (0, React.useState)(2),
      [y, j] = (0, React.useState)(1),
      [C, S] = (0, React.useState)(!0),
      [k, M] = (0, React.useState)(!0),
      [N, P] = (0, React.useState)(!0),
      [A, G] = (0, React.useState)(!0),
      [R, _] = (0, React.useState)(!1),
      [I, E] = (0, React.useState)(3e3),
      [D, T] = (0, React.useState)(!0);
    return <div><__mod_56388.Bg /><__mod_56388.VX><__mod_56388.Ec><__mod_56388.Ch onRefresh={t} minHeight={760}><WScene cardWidth={a} rotation={l} verticalOffset={u} inactiveScale={p} visibleRange={m} borderRadius={b} titleBlur={g} speed={y} showTitles={C} showControls={k} showCounter={N} loop={A} autoplay={R} autoplayDelay={I} enableDrag={D} /></__mod_56388.Ch><__mod_56388.IH><__mod_56388.yt title="Card Width" min={120} max={300} step={10} value={a} onChange={o} /><__mod_56388.yt title="Rotation" min={0} max={60} step={5} value={l} onChange={c} /><__mod_56388.yt title="Vertical Offset" min={0} max={90} step={5} value={u} onChange={d} /><__mod_56388.yt title="Inactive Scale" min={.3} max={1} step={.05} value={p} onChange={h} /><__mod_56388.yt title="Visible Range" min={1.4} max={4} step={.2} value={m} onChange={f} /><__mod_56388.yt title="Border Radius" min={0} max={48} step={1} value={b} onChange={x} /><__mod_56388.yt title="Title Blur" min={0} max={10} step={.5} value={g} onChange={v} /><__mod_56388.yt title="Speed" min={.2} max={3} step={.1} value={y} onChange={j} /><__mod_56388.yt title="Autoplay Delay" min={800} max={8e3} step={200} value={I} onChange={E} /><__mod_56388.tl title="Show Titles" checked={C} onChange={S} /><__mod_56388.tl title="Show Controls" checked={k} onChange={M} /><__mod_56388.tl title="Show Counter" checked={N} onChange={P} /><__mod_56388.tl title="Loop" checked={A} onChange={G} /><__mod_56388.tl title="Autoplay" checked={R} onChange={_} /><__mod_56388.tl title="Enable Drag" checked={D} onChange={T} /></__mod_56388.IH><__mod_56388.Ub data={[{
            name: "items",
            type: "TumbleCarouselItem[]",
            default: "10 sample cards",
            description: "Cards rendered by the carousel"
          }, {
            name: "initialIndex",
            type: "number",
            default: "3",
            description: "Card focused on mount"
          }, {
            name: "cardWidth",
            type: "number",
            default: "200",
            description: "Card width in pixels"
          }, {
            name: "aspectRatio",
            type: "string",
            default: '"1 / 1"',
            description: "Aspect ratio of each card"
          }, {
            name: "frameHeight",
            type: "number",
            default: "undefined",
            description: "Height of the visible frame, derived from the card geometry when omitted"
          }, {
            name: "rotation",
            type: "number",
            default: "30",
            description: "Degrees each card tumbles per step away from the focused one"
          }, {
            name: "verticalOffset",
            type: "number",
            default: "50",
            description: "Vertical drop per step as a percentage of card height"
          }, {
            name: "inactiveScale",
            type: "number",
            default: "0.6",
            description: "Scale applied to every unfocused card"
          }, {
            name: "visibleRange",
            type: "number",
            default: "2.4",
            description: "Distance in steps at which cards have faded out completely"
          }, {
            name: "borderRadius",
            type: "number",
            default: "16",
            description: "Corner radius of the cards in pixels"
          }, {
            name: "titleBlur",
            type: "number",
            default: "2",
            description: "Blur applied to unfocused captions in pixels"
          }, {
            name: "speed",
            type: "number",
            default: "1",
            description: "Multiplier for the transition duration"
          }, {
            name: "showTitles",
            type: "boolean",
            default: "true",
            description: "Render the caption over the focused card"
          }, {
            name: "showControls",
            type: "boolean",
            default: "true",
            description: "Show the previous and next buttons"
          }, {
            name: "showCounter",
            type: "boolean",
            default: "true",
            description: "Show the position counter between the buttons"
          }, {
            name: "loop",
            type: "boolean",
            default: "false",
            description: "Tumble endlessly in both directions"
          }, {
            name: "autoplay",
            type: "boolean",
            default: "false",
            description: "Advance on a timer"
          }, {
            name: "autoplayDelay",
            type: "number",
            default: "3000",
            description: "Delay between automatic advances in milliseconds"
          }, {
            name: "enableDrag",
            type: "boolean",
            default: "true",
            description: "Allow dragging across the frame to navigate"
          }, {
            name: "enableKeyboard",
            type: "boolean",
            default: "true",
            description: "Allow arrow keys to navigate when focused"
          }, {
            name: "className",
            type: "string",
            default: "undefined",
            description: "Additional CSS classes"
          }, {
            name: "onIndexChange",
            type: "(index: number) => void",
            default: "undefined",
            description: "Fired whenever the focused card changes"
          }]} /></__mod_56388.Ec><__mod_56388.lT><__mod_56388.Gv /></__mod_56388.lT></__mod_56388.VX></div>;
  };

const WScene: any = w;

const YView: any = y;

export default j;
