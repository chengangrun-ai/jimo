import { motion, AnimatePresence } from "motion/react";
import { Check, Database, Mail, RotateCcw, Workflow } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 4
 * Step-by-step onboarding workflow
 * slug: bento-4
 * category: Bento
 * export: Bento4
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-4.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [700, 700, 1100, 550, 160, 3200],
  m = [.22, 1, .36, 1],
  h = [{
    name: "Save contact",
    result: "Contact saved",
    icon: Database,
    phase: 4
  }, {
    name: "Send welcome",
    result: "Email delivered",
    icon: Mail,
    phase: 5
  }],
  p = [{
    label: "Signup received",
    detail: "maya@nova.app",
    time: "0 ms",
    phase: 1
  }, {
    label: "Contact created",
    detail: "Customers / Maya Chen",
    time: "38 ms",
    phase: 4
  }, {
    label: "Welcome delivered",
    detail: "Getting started",
    time: "1.2 s",
    phase: 5
  }];
function w({
  d: e,
  active: t,
  reduce: a
}) {
  return <><path d={e} fill="none" stroke="currentColor" strokeWidth={1.25} className="text-neutral-200 dark:text-neutral-800" /><motion.path d={e} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" initial={!1} animate={{
      pathLength: +!!t,
      opacity: +!!t
    }} transition={{
      duration: a ? 0 : t ? .5 : .2,
      ease: m
    }} className="text-neutral-500 dark:text-neutral-400" /></>;
}
function f() {
  let e = !!(0, __mod_50969.I)(),
    t = (0, React.useRef)(null),
    [a, i] = (0, React.useState)(!1),
    [d, f] = (0, React.useState)(!1),
    [g, b] = (0, React.useState)(0),
    [j, v] = (0, React.useState)(1),
    k = e ? 5 : g,
    N = 5 === k;
  return (0, React.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let a = new ResizeObserver(([e]) => {
      i(e.contentRect.height > 520);
    });
    return a.observe(e), () => a.disconnect();
  }, []), (0, React.useEffect)(() => {
    if (e || !d) return;
    let t = window.setTimeout(() => {
      g === o.length - 1 ? (v(e => e + 1), b(0)) : b(e => e + 1);
    }, o[g]);
    return () => window.clearTimeout(t);
  }, [g, j, e, d]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={t} className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 10 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} onViewportEnter={() => f(!0)} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .6,
        ease: m
      }} className="absolute inset-0 flex flex-col items-center justify-center px-5 py-1.5 @sm:px-6 @sm:py-3"><div className="grid w-full max-w-[340px] items-center @2xl:max-w-[760px] @2xl:grid-cols-[1fr_36px_1.15fr_44px_1fr]"><div className="mx-auto flex w-[188px] max-w-full items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @sm:py-2 @2xl:w-full dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><img src="https://i.pravatar.cc/80?img=47" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full object-cover grayscale" /><div className="min-w-0"><p className="text-[11px] font-medium leading-4 text-neutral-900 dark:text-white">Maya joined</p><p className="truncate text-[10px] leading-3.5 text-neutral-500">maya@nova.app</p></div><motion.span initial={!1} animate={{
              opacity: k >= 1 ? 1 : .2
            }} transition={{
              duration: .3 * !e
            }} className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"><Check className="h-2.5 w-2.5 text-neutral-500 dark:text-neutral-400" /></motion.span></div><div aria-hidden="true" className="relative h-3 @sm:h-5 @2xl:h-[132px]"><svg viewBox="0 0 340 20" className="h-full w-full @2xl:hidden"><w d="M170 0V20" active={k >= 1} reduce={e} /></svg><svg viewBox="0 0 36 132" className="hidden h-full w-full @2xl:block"><w d="M0 66H36" active={k >= 1} reduce={e} /></svg></div><div className="relative mx-auto flex h-12 w-[224px] max-w-full items-center gap-2.5 overflow-hidden rounded-xl bg-neutral-900 px-3.5 text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] @sm:h-[54px] @2xl:w-full dark:bg-white dark:text-neutral-900 dark:shadow-none"><Workflow className="h-4 w-4 shrink-0 opacity-80" strokeWidth={1.7} /><div className="min-w-0"><p className="whitespace-nowrap text-[11px] font-medium leading-4">Customer onboarding</p><p className="text-[10px] leading-4 text-white/55 dark:text-neutral-500">{N ? "Run complete" : k >= 3 ? "Delivering actions" : 2 === k ? "Preparing actions" : 1 === k ? "Signup received" : "Waiting for a signup"}</p></div><div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10 dark:bg-neutral-900/10"><motion.div initial={!1} animate={{
                scaleX: +(k >= 2)
              }} transition={{
                duration: e ? 0 : 2 === k ? 1.1 : .2,
                ease: "linear"
              }} className="h-full origin-left bg-white/60 dark:bg-neutral-900/50" /></div></div><div aria-hidden="true" className="relative h-7 @2xl:h-[132px]"><svg viewBox="0 0 340 28" className="h-full w-full @2xl:hidden"><w d="M170 0V4Q170 12 162 12H90Q82 12 82 20V28" active={k >= 3} reduce={e} /><w d="M170 0V4Q170 12 178 12H250Q258 12 258 20V28" active={k >= 3} reduce={e} /></svg><svg viewBox="0 0 44 132" className="hidden h-full w-full @2xl:block"><w d="M0 66H14Q22 66 22 58V38Q22 30 30 30H44" active={k >= 3} reduce={e} /><w d="M0 66H14Q22 66 22 74V94Q22 102 30 102H44" active={k >= 3} reduce={e} /></svg></div><div className="grid grid-cols-2 gap-3 @2xl:grid-cols-1">{h.map(t => {
              let a = k >= t.phase,
                l = t.icon;
              return <div className="flex h-[52px] items-center gap-2 rounded-xl border border-neutral-200 bg-white px-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @sm:h-[60px] @sm:px-3 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"><motion.span initial={{
                    opacity: +!!e,
                    scale: e ? 1 : .85
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    duration: .25,
                    ease: m
                  }}>{a ? <Check className="h-3 w-3" /> : <l className="h-3 w-3" />}</motion.span></div><div className="min-w-0"><p className="whitespace-nowrap text-[11px] font-medium leading-4 text-neutral-800 dark:text-neutral-200">{t.name}</p><p className="whitespace-nowrap text-[10px] leading-4 text-neutral-500">{a ? t.result : k >= 3 ? "Delivering…" : "Ready"}</p></div></div>;
            })}</div></div><div className="mt-2 flex h-5 w-full max-w-[340px] items-center justify-between gap-3 @sm:mt-4 @sm:h-6 @2xl:mt-6 @2xl:max-w-[760px]"><div className="flex min-w-0 items-center gap-1.5 text-[10px] tabular-nums text-neutral-500"><span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${N ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-600"}`} /><span className="truncate">{N ? `Run ${String(j).padStart(3, "0")} completed \xb7 1.2 s` : k > 0 ? "One signup, two actions" : "Listening for a signup"}</span></div><button type="button" onClick={() => {
            b(0), v(e => e + 1);
          }} aria-label="Replay onboarding run" className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"><RotateCcw className="h-3 w-3" />Replay</button></div>{a && <div className="mt-8 w-full max-w-[340px] rounded-xl border border-neutral-200 bg-white px-4 py-3.5 @2xl:mt-10 @2xl:max-w-[760px] dark:border-neutral-800 dark:bg-neutral-950"><div className="mb-4 flex items-center justify-between gap-3 text-[10px]"><span className="font-medium text-neutral-700 dark:text-neutral-300">Run details</span><span className="font-mono tabular-nums text-neutral-400 dark:text-neutral-500">#{String(j).padStart(4, "0")}</span></div><div className="space-y-4 @2xl:grid @2xl:grid-cols-3 @2xl:gap-5 @2xl:space-y-0">{p.map(e => {
              let t = k >= e.phase;
              return <div className="flex items-start gap-2.5"><span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${t ? "border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300" : "border-neutral-200 text-transparent dark:border-neutral-800"}`}><Check className="h-2.5 w-2.5" /></span><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2 text-[10px]"><span className={t ? "font-medium text-neutral-700 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-600"}>{e.label}</span><span className="shrink-0 font-mono tabular-nums text-neutral-400 dark:text-neutral-500">{t ? e.time : "--"}</span></div><p className="mt-0.5 truncate text-[10px] text-neutral-400 dark:text-neutral-500">{e.detail}</p></div></div>;
            })}</div></div>}</motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Automate the busywork</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Turn every signup into a saved contact and a timely welcome, with one workflow that runs itself.</p></div></article>;
}

export default f;
