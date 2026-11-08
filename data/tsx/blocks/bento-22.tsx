import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Video } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 22
 * Calendar week where meetings slot in
 * slug: bento-22
 * category: Bento
 * export: Bento22
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-22.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = ["Mon", "Tue", "Wed", "Thu", "Fri"],
  x = ["9", "10", "11", "12", "1", "2"],
  u = [{
    id: "standup",
    day: 0,
    start: 0,
    span: 1,
    title: "Standup",
    people: ["12", "47"]
  }, {
    id: "design",
    day: 1,
    start: 1,
    span: 2,
    title: "Design review",
    people: ["33", "5"]
  }, {
    id: "1on1",
    day: 3,
    start: 0,
    span: 1,
    title: "1:1 with Kai",
    people: ["68"]
  }, {
    id: "planning",
    day: 4,
    start: 3,
    span: 2,
    title: "Sprint planning",
    people: ["56", "26", "45"]
  }],
  p = [{
    id: "sync",
    day: 2,
    start: 2,
    span: 1,
    title: "Partner sync",
    people: ["45"],
    suggested: !0
  }, {
    id: "interview",
    day: 0,
    start: 3,
    span: 1,
    title: "Interview",
    people: ["12"],
    suggested: !0
  }, {
    id: "demo",
    day: 3,
    start: 4,
    span: 1,
    title: "Customer demo",
    people: ["33", "68"],
    suggested: !0
  }],
  h = [.22, 1, .36, 1];
function m() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [m, b] = (0, React.useState)(0),
    [f, g] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    if (!t || e) return;
    let a = window.setInterval(() => b(e => (e + 1) % (p.length + 3)), 3200);
    return () => window.clearInterval(a);
  }, [t, e]);
  let j = e ? p.length : Math.min(m, p.length),
    w = [...u, ...p.slice(0, j)],
    k = p[j];
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: h
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><div className="flex shrink-0 items-center gap-2"><span className="text-[11px] font-semibold text-neutral-900 dark:text-white">September</span><span className="hidden rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-500 @sm:inline dark:border-neutral-800">Week 36</span></div><__mod_47962.N mode="wait">{k && !e && <motion.span initial={{
              opacity: 0,
              y: 4
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -4
            }} className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"><Sparkles className="h-3 w-3 shrink-0" /><span className="truncate">Scheduling {k.title}</span></motion.span>}</__mod_47962.N></div><div className="flex flex-1 flex-col @2xl:flex-row"><div className="min-w-0 @2xl:flex-1"><div className="grid h-[296px] shrink-0 grid-cols-[28px_repeat(3,minmax(0,1fr))] grid-rows-[32px_264px] @sm:grid-cols-[28px_repeat(5,minmax(0,1fr))] @2xl:grid-cols-[36px_repeat(5,minmax(0,1fr))]"><div />{c.map((e, t) => <div className={`${t >= 3 ? "hidden @sm:block" : ""} whitespace-nowrap border-l border-neutral-100 px-1 py-1.5 text-center text-[10px] font-medium dark:border-neutral-800/80 ${2 === t ? "text-neutral-900 dark:text-white" : "text-neutral-500"}`}>{e}<span className={`ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full tabular-nums ${2 === t ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : ""}`}>{t + 2}</span></div>)}<div className="relative">{x.map((e, t) => <span className="absolute right-1.5 -translate-y-1/2 text-[9px] tabular-nums text-neutral-400" style={{
                  top: `${t / x.length * 100}%`
                }}>{e}</span>)}</div>{c.map((t, a) => <div className={`relative border-l border-neutral-100 dark:border-neutral-800/80 ${a >= 3 ? "hidden @sm:block" : ""}`}>{x.map((e, t) => <div className="absolute inset-x-0 border-t border-dashed border-neutral-100 dark:border-neutral-800/60" style={{
                  top: `${t / x.length * 100}%`
                }} />)}<__mod_47962.N>{w.filter(e => e.day === a).map(a => {
                    let l = f === a.id;
                    return <motion.button type="button" layout={!0} initial={!!a.suggested && {
                      opacity: 0,
                      scale: e ? 1 : .9,
                      y: e ? 0 : -8
                    }} animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0
                    }} exit={{
                      opacity: 0,
                      scale: e ? 1 : .96
                    }} transition={{
                      duration: .45,
                      ease: h
                    }} onMouseEnter={() => g(a.id)} onMouseLeave={() => g(null)} onFocus={() => g(a.id)} onBlur={() => g(null)} onClick={() => g(e => e === a.id ? null : a.id)} aria-label={`${a.title}, ${t}, ${x[a.start]} o’clock`} title={`${a.title} \xb7 ${x[a.start]}:00`} className={`absolute inset-x-1 flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border px-1.5 py-1 text-left transition-[box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${a.suggested ? "border-dashed border-neutral-400 bg-white dark:border-neutral-500 dark:bg-neutral-950" : "border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"} ${l ? "z-10 border-neutral-900 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] dark:border-white" : ""}`} style={{
                      top: `calc(${a.start / x.length * 100}% + 2px)`,
                      height: `calc(${a.span / x.length * 100}% - 4px)`
                    }}><span className="truncate text-[9px] font-medium leading-none text-neutral-900 @2xl:text-[10px] dark:text-white">{a.title}</span><span className="flex items-center justify-between"><span className="flex -space-x-1">{a.people.map(e => <span className="block h-3.5 w-3.5 overflow-hidden rounded-full border border-white dark:border-neutral-900"><img src={`https://i.pravatar.cc/80?img=${e}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span>)}</span>{a.suggested ? <Sparkles className="h-2.5 w-2.5 text-neutral-500" /> : <Video className="h-2.5 w-2.5 text-neutral-400" />}</span></motion.button>;
                  })}</__mod_47962.N>{2 === a && <div className="pointer-events-none absolute inset-x-0 flex items-center" style={{
                  top: `${1.6 / x.length * 100}%`
                }}><span className="h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-white" /><span className="h-px flex-1 bg-neutral-900 dark:bg-white" /></div>}</div>)}</div><div className="hidden border-t border-neutral-100 p-4 @2xl:block dark:border-neutral-800/80"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Available windows</p><div className="mt-3 space-y-3">{c.map((e, t) => {
                  let a = x.length - w.filter(e => e.day === t).reduce((e, t) => e + t.span, 0);
                  return <div className="flex items-center gap-3 text-[10px] text-neutral-500"><span className="w-6">{e}</span><span className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900"><span className="block h-full rounded-full bg-neutral-300 transition-[width] duration-500 dark:bg-neutral-600" style={{
                        width: `${a / x.length * 100}%`
                      }} /></span><span className="w-10 text-right tabular-nums">{a}h free</span></div>;
                })}</div></div></div><div className="border-t border-neutral-100 p-4 @2xl:w-[272px] @2xl:shrink-0 @2xl:border-l @2xl:border-t-0 dark:border-neutral-800/80"><div className="flex items-center justify-between"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Scheduling queue</p><Sparkles className="h-3.5 w-3.5 text-neutral-400" /></div><div className="mt-3 space-y-2">{p.map((e, t) => {
                let a = t < j;
                return <button type="button" onClick={() => {
                  b(e => Math.max(e, t + 1)), g(e.id);
                }} onPointerEnter={() => g(e.id)} onPointerLeave={() => g(null)} onFocus={() => g(e.id)} onBlur={() => g(null)} aria-label={`${a ? "Show" : "Schedule"} ${e.title}`} className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-neutral-200 p-3 text-left transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:hover:bg-neutral-900"><span className="block h-7 w-7 shrink-0 overflow-hidden rounded-full"><img src={`https://i.pravatar.cc/80?img=${e.people[0]}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span><span className="min-w-0 flex-1"><span className="block truncate text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{e.title}</span><span className="mt-1 block text-[10px] text-neutral-500">{c[e.day]} · {x[e.start]}:00 · {a ? "Booked" : "Suggested"}</span></span><span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-700"}`} /></button>;
              })}</div><div className="mt-5 hidden border-t border-neutral-100 pt-4 @2xl:block dark:border-neutral-800/80"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Your preferences</p><dl className="mt-3 space-y-3 text-[10px]"><div className="flex items-center justify-between gap-2"><dt className="text-neutral-500">Working hours</dt><dd className="tabular-nums text-neutral-700 dark:text-neutral-300">09:00 – 17:00</dd></div><div className="flex items-center justify-between gap-2"><dt className="text-neutral-500">Between meetings</dt><dd className="text-neutral-700 dark:text-neutral-300">15 minute buffer</dd></div><div className="flex items-center justify-between gap-2"><dt className="text-neutral-500">Time zone</dt><dd className="text-neutral-700 dark:text-neutral-300">Each guest’s local time</dd></div></dl><p className="mt-4 text-[10px] leading-relaxed text-neutral-500">Suggestions respect everyone’s working hours and keep time open for focused work.</p></div></div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Meetings that book themselves</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Share one link and the calendar finds a slot everyone can make, in everyone's time zone, without the back and forth.</p></div></article>;
}

export default m;
