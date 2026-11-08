import { motion, AnimatePresence } from "motion/react";
import { ChevronsLeftRight, Sparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_97835 from "../_helpers/97835";
import * as __mod_87974 from "../_helpers/87974";
/**
 * Bento 42
 * Before and after slider, wireframe to UI
 * slug: bento-42
 * category: Bento
 * export: Bento42
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-42.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function p({
  finished: e
}) {
  return <div className={`absolute inset-0 flex flex-col gap-3 px-4 pb-8 pt-10 ${e ? "bg-white dark:bg-neutral-950" : "bg-neutral-50 dark:bg-neutral-900"}`}><div className="hidden items-center justify-between border-b border-neutral-200 pb-3 [@container(min-height:420px)]:flex text-[10px] dark:border-neutral-800"><span className={`font-semibold tracking-wide ${e ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>NORTHSTAR</span><span className="text-neutral-400">Overview · 2026</span></div><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] text-neutral-500">Monthly revenue</p><p className={`mt-1 text-3xl font-semibold tabular-nums tracking-tight @sm:text-4xl ${e ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`}>{e ? "$48,290" : "$00,000"}</p></div><span className={`mb-1 rounded-full px-2 py-1 text-[10px] ${e ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border border-dashed border-neutral-300 text-neutral-400 dark:border-neutral-700"}`}>{e ? "+24.8%" : "+00.0%"}</span></div><div className={`relative flex min-h-[90px] flex-1 flex-col rounded-lg p-3 ${e ? "bg-neutral-100 dark:bg-neutral-900" : "border border-dashed border-neutral-300 dark:border-neutral-700"}`}><div className="flex justify-between text-[9px] text-neutral-400"><span>{e ? "Revenue growth" : "Chart placeholder"}</span><span>6 months</span></div><div className="mt-4 flex min-h-[40px] flex-1 items-end gap-2">{[28, 46, 38, 59, 75, 94].map((t, a) => <div className="flex h-full flex-1 items-end"><div className={`w-full rounded-t-md ${e ? 5 === a ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700" : "border border-dashed border-neutral-300 dark:border-neutral-700"}`} style={{
            height: `${e ? t : 48}%`
          }} /></div>)}</div><div className="mt-2 flex justify-between text-[9px] text-neutral-400"><span>Jan</span><span>Jun</span></div></div><div className="hidden grid-cols-3 gap-2 [@container(min-height:420px)]:grid">{[["Customers", "2,410"], ["Retention", "98.2%"], ["Growth", "+24.8%"]].map(([t, a]) => <div className={`rounded-lg p-2 ${e ? "border border-neutral-200 dark:border-neutral-800" : "border border-dashed border-neutral-300 dark:border-neutral-700"}`}><p className="truncate text-[9px] text-neutral-500">{t}</p><p className={`mt-1 text-xs font-medium tabular-nums ${e ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`}>{e ? a : "\xb7\xb7\xb7"}</p></div>)}</div></div>;
}
let m = [.22, 1, .36, 1];
function b() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [b, f] = (0, React.useState)(!1),
    g = (0, React.useRef)(null),
    w = (0, __mod_75272.d)(58),
    k = (0, __mod_17192.z)(w, {
      stiffness: 320,
      damping: 34,
      mass: .6
    }),
    v = e ? w : k,
    y = (0, __mod_32923.G)(v, e => `inset(0 ${100 - e}% 0 0)`),
    j = (0, __mod_32923.G)(v, e => `${e}%`),
    N = (0, __mod_32923.G)(v, [14, 26], [0, 1]),
    _ = (0, __mod_32923.G)(v, [74, 86], [1, 0]),
    [P, S] = (0, React.useState)(58);
  (0, __mod_97835.L)(v, "change", e => S(Math.round(e))), (0, React.useEffect)(() => {
    if (!t || e || b) return;
    let a = (0, __mod_87974.i)(w, [w.get(), 30, 72, 58], {
      duration: 9,
      ease: "easeInOut",
      repeat: 1 / 0,
      repeatType: "mirror"
    });
    return () => a.stop();
  }, [t, e, b, w]);
  let $ = e => {
      let t = g.current?.getBoundingClientRect();
      if (!t) return;
      let a = (e - t.left) / t.width * 100;
      w.set(Math.max(4, Math.min(96, a)));
    },
    A = (0, React.useRef)(!1);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden" style={{
      containerType: "size"
    }}><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: m
      }} className="absolute inset-x-3 -bottom-3 top-3"><div ref={g} role="slider" aria-label="Compare before and after" aria-valuemin={4} aria-valuemax={96} aria-valuenow={P} aria-valuetext={`${P}% wireframe, ${100 - P}% finished interface`} onFocus={() => f(!0)} onBlur={() => f(!1)} tabIndex={0} onKeyDown={e => {
          let t = e.shiftKey ? 10 : 3;
          "ArrowLeft" === e.key && w.set(Math.max(4, w.get() - t)), "ArrowRight" === e.key && w.set(Math.min(96, w.get() + t)), "Home" === e.key && w.set(4), "End" === e.key && w.set(96), ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key) && (e.preventDefault(), f(!0));
        }} onPointerEnter={() => f(!0)} onPointerLeave={() => {
          A.current = !1, f(!1);
        }} onPointerDown={e => {
          f(!0), A.current = !0, e.currentTarget.setPointerCapture(e.pointerId), $(e.clientX);
        }} onPointerMove={e => {
          A.current && $(e.clientX);
        }} onPointerUp={e => {
          A.current = !1, e.currentTarget.releasePointerCapture(e.pointerId), "mouse" !== e.pointerType && f(!1);
        }} onPointerCancel={() => {
          A.current = !1, f(!1);
        }} onLostPointerCapture={() => {
          A.current = !1;
        }} className="relative h-full w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950"><p finished={!0} /><motion.div style={{
            clipPath: y
          }} className="absolute inset-0"><p finished={!1} /></motion.div><motion.span style={{
            opacity: N
          }} className="pointer-events-none absolute left-3 top-3 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">Wireframe</motion.span><motion.span style={{
            opacity: _
          }} className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"><Sparkles className="h-2.5 w-2.5" />Finished</motion.span><motion.div style={{
            left: j
          }} className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-neutral-400 dark:bg-neutral-600 shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_0_12px_rgba(0,0,0,0.25)]"><span className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)] transition-[width,height] duration-200 ease-out ${b ? "h-9 w-9" : "h-8 w-8"}`}><ChevronsLeftRight className="h-4 w-4" /></span></motion.div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">From draft to finished</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Drag to reveal the finished interface. The same structure, brought into focus with clear hierarchy and considered details.</p></div></article>;
}

export default b;
