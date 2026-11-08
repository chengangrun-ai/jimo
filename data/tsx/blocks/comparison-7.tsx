import { motion, AnimatePresence } from "motion/react";
import { Check, CircleDashed, Clock4, Layers2, MoveHorizontal } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Comparison 7
 * Draggable before and after wipe
 * slug: comparison-7
 * category: Comparison
 * export: Comparison7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [.22, 1, .36, 1],
  u = [{
    title: "Launch brief",
    before: "4 drafts across 3 tools",
    after: "One brief, live owners"
  }, {
    title: "Risk review",
    before: "Raised during the call",
    after: "Flagged 6 days early"
  }, {
    title: "Customer signals",
    before: "Buried in shared inboxes",
    after: "Routed to the right team"
  }, {
    title: "Executive update",
    before: "Rebuilt every Friday",
    after: "Generated from the work"
  }],
  h = [{
    icon: Clock4,
    value: "4.8 days",
    label: "returned per launch cycle"
  }, {
    icon: Layers2,
    value: "12 → 1",
    label: "tools collapsed into one surface"
  }];
function p({
  variant: e
}) {
  let t = "after" === e;
  return <div className={`absolute inset-0 flex flex-col p-5 sm:p-6 ${t ? "bg-neutral-950 dark:bg-white" : "bg-neutral-100 dark:bg-neutral-950"}`}><div className="flex items-center justify-between"><span className={`text-sm font-semibold ${t ? "text-white dark:text-neutral-950" : "text-neutral-500 dark:text-neutral-400"}`}>{t ? "After Portico" : "Before Portico"}</span><span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${t ? "border border-transparent bg-white/10 text-white dark:bg-neutral-950/10 dark:text-neutral-950" : "border border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"}`}>{t ? "Live system" : "7 tools"}</span></div><div className="mt-5 flex flex-1 flex-col gap-3">{u.map(e => <div className={`flex flex-1 items-center gap-3.5 rounded-2xl px-4 ${t ? "bg-white/[0.08] dark:bg-neutral-950/[0.05]" : "border border-dashed border-neutral-300 bg-white/60 dark:border-neutral-700/80 dark:bg-white/[0.03]"}`}><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${t ? "bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white" : "border border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"}`}>{t ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <CircleDashed className="h-4 w-4" />}</span><span className="min-w-0"><span className={`block truncate text-sm ${t ? "font-semibold text-white dark:text-neutral-950" : "font-medium text-neutral-600 dark:text-neutral-300"}`}>{e.title}</span><span className={`mt-0.5 block truncate text-xs ${t ? "text-white/60 dark:text-neutral-950/60" : "text-neutral-500 dark:text-neutral-400"}`}>{t ? e.after : e.before}</span></span></div>)}</div></div>;
}
function b() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null),
    a = (0, React.useRef)(!1),
    [n, d] = (0, React.useState)(56),
    [o, c] = (0, React.useState)(!1),
    u = (0, __mod_50969.I)(),
    b = (0, React.useCallback)(t => {
      let a = e.current;
      if (!a) return;
      let r = a.getBoundingClientRect();
      0 === r.width || d(Math.min(100, Math.max(0, (t - r.left) / r.width * 100)));
    }, []),
    g = o || u ? {
      duration: 0
    } : {
      duration: .5,
      ease: m
    };
  return <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:bg-neutral-950"><div className="mx-auto w-full max-w-[1400px]"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16"><motion.div initial={{
          opacity: 0,
          y: 16
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0,
          margin: "-80px"
        }} transition={{
          duration: .6,
          ease: m
        }}><h2 className="text-balance text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">Drag the divider. Watch the handoff clean itself up.</h2><p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">Portico takes a launch process spread across seven tools and folds it into one shared command surface: same work, one record.</p><div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">{h.map(e => {
              let t = e.icon;
              return <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900"><t className="h-5 w-5 text-neutral-400 dark:text-neutral-500" /><p className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">{e.value}</p><p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{e.label}</p></div>;
            })}</div></motion.div><motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0,
          margin: "-80px"
        }} transition={{
          duration: .65,
          ease: m
        }}><div className="rounded-3xl border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-950/5 sm:p-3 dark:border-white/10 dark:bg-neutral-900 dark:shadow-black/40"><div ref={e} onPointerDown={e => {
              let r = t.current?.contains(e.target) ?? !1;
              ("touch" !== e.pointerType || r) && (a.current = !0, c(!0), e.currentTarget.setPointerCapture(e.pointerId), b(e.clientX));
            }} onPointerMove={e => {
              a.current && b(e.clientX);
            }} onPointerUp={() => {
              a.current = !1, c(!1);
            }} onPointerCancel={() => {
              a.current = !1, c(!1);
            }} className="relative h-[480px] cursor-ew-resize select-none rounded-2xl sm:h-[540px]"><div className="absolute inset-0 overflow-hidden rounded-2xl"><p variant="before" /><motion.div initial={{
                  clipPath: "inset(0 100% 0 0)"
                }} whileInView={{
                  clipPath: `inset(0 ${100 - n}% 0 0)`
                }} viewport={{
                  once: !0,
                  margin: "-80px"
                }} transition={g} className="absolute inset-0 z-10"><p variant="after" /></motion.div></div><motion.div initial={{
                left: "0%",
                opacity: 0
              }} whileInView={{
                left: `${n}%`,
                opacity: 1
              }} viewport={{
                once: !0,
                margin: "-80px"
              }} transition={g} className="absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white dark:bg-neutral-950" /><motion.div initial={{
                left: "0%",
                opacity: 0
              }} whileInView={{
                left: `${n}%`,
                opacity: 1
              }} viewport={{
                once: !0,
                margin: "-80px"
              }} transition={g} className="absolute top-1/2 z-30"><button ref={t} type="button" role="slider" aria-label="Reveal the after state" aria-orientation="horizontal" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(n)} aria-valuetext={`${Math.round(n)}% revealed`} onKeyDown={e => {
                  "ArrowLeft" === e.key || "ArrowDown" === e.key ? (e.preventDefault(), d(e => Math.max(0, e - 6))) : "ArrowRight" === e.key || "ArrowUp" === e.key ? (e.preventDefault(), d(e => Math.min(100, e + 6))) : "Home" === e.key ? (e.preventDefault(), d(0)) : "End" === e.key && (e.preventDefault(), d(100));
                }} className="flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-lg shadow-neutral-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-neutral-950 dark:text-white dark:shadow-black/40 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900"><MoveHorizontal className="h-5 w-5" /></button></motion.div></div></div><p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400"><MoveHorizontal className="h-3.5 w-3.5" />Drag the divider, or focus it and use the arrow keys</p></motion.div></div></div></section>;
}

export default b;
