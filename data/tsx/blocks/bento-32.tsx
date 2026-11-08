import { motion, AnimatePresence } from "motion/react";
import { Check, FileSearch, GitPullRequest, Play, Sparkles, Terminal, Wrench } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 32
 * Agent run from tool calls to pull request
 * slug: bento-32
 * category: Bento
 * export: Bento32
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-32.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [{
    tool: "read",
    icon: FileSearch,
    action: "Reading the failing test and the module it covers",
    result: "3 files \xb7 found an off-by-one in date rounding",
    ms: 1500
  }, {
    tool: "edit",
    icon: Wrench,
    action: "Patching roundToPeriod() and adding a regression test",
    result: "+14 −3 across 2 files",
    ms: 1900
  }, {
    tool: "shell",
    icon: Terminal,
    action: "npm test -- billing",
    result: "42 passed \xb7 0 failed \xb7 1.8s",
    ms: 1700
  }],
  b = [.22, 1, .36, 1];
function f() {
  let e = !!(0, __mod_50969.I)(),
    [t, n] = (0, React.useState)(!1),
    [d, o] = (0, React.useState)({
      kind: "idle"
    }),
    [c, f] = (0, React.useState)(!1),
    [g, k] = (0, React.useState)(0),
    [j, N] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!t || e || c && "pr" === d.kind || j) return;
    let n = 0;
    return n = window.setTimeout(() => {
      "pr" === d.kind && k(e => e + 1), o(e => "idle" === e.kind ? {
        kind: "running",
        step: 0
      } : "running" === e.kind ? {
        kind: "done",
        step: e.step
      } : "done" === e.kind ? e.step + 1 < m.length ? {
        kind: "running",
        step: e.step + 1
      } : {
        kind: "pr"
      } : {
        kind: "idle"
      });
    }, "idle" === d.kind ? 0 === g ? 900 : 250 : "running" === d.kind ? m[d.step].ms : "done" === d.kind ? 650 : 3800), () => window.clearTimeout(n);
  }, [t, e, c, d, g, j]);
  let w = "idle" === d.kind ? e ? m.length : 0 : "pr" === d.kind ? m.length : d.step + 1,
    y = t => e || "pr" === d.kind || "done" === d.kind && t <= d.step || "running" === d.kind && t < d.step,
    v = e || "pr" === d.kind;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden" style={{
      containerType: "size"
    }}><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => n(!0)} transition={{
        duration: .7,
        ease: b
      }} onPointerEnter={() => f(!0)} onPointerLeave={() => f(!1)} className="absolute inset-x-3 -bottom-3 top-3 flex flex-col rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center gap-2.5 border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"><Sparkles className="h-3 w-3" /></span><div className="min-w-0 flex-1 leading-tight"><p className="truncate text-[11px] font-semibold text-neutral-900 dark:text-white">Fix the flaky billing test</p><p className="truncate text-[10px] text-neutral-500">Agent run · {"pr" === d.kind || e ? "finished" : "idle" === d.kind ? "queued" : "working"}</p></div><button type="button" disabled={!v} aria-pressed={v ? j : void 0} onClick={() => N(e => !e)} className={`inline-flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${v ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}`}>{v ? <Check className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5" />}{v ? j ? "Back to run" : "Review PR" : `${Math.min(w, m.length)}/${m.length}`}</button></div><div className={`mx-3 mt-3 min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-neutral-100 dark:border-neutral-800 ${j ? "flex" : "hidden [@container(min-height:420px)]:flex"}`}><div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2 text-[10px] dark:border-neutral-800"><span className="font-mono text-neutral-600 dark:text-neutral-400">billing/period.ts</span><span className="tabular-nums text-neutral-500">+14 −3</span></div><div tabIndex={j ? 0 : void 0} className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-neutral-50 p-4 font-mono text-[11px] leading-loose text-neutral-600 [@container(min-height:420px)]:justify-center dark:bg-neutral-900 dark:text-neutral-400"><span className="text-neutral-400">// Align every invoice to a full day</span><span>function roundToPeriod(date) {"{"}</span><span className="pl-3 text-neutral-400 line-through">return Math.round(date / period);</span><span className="-mx-4 border-l-2 border-neutral-900 bg-neutral-200/70 px-4 py-1 text-neutral-900 dark:border-white dark:bg-neutral-800 dark:text-white">return startOfDay(date);</span><span>{"}"}</span><div className="mt-5 hidden border-t border-neutral-200 pt-3 font-sans text-[10px] [@container(min-height:420px)]:block dark:border-neutral-800"><p className="mb-2 font-medium text-neutral-500">Regression checks</p>{["Midnight boundaries", "Month-end invoices", "Timezone offsets"].map(e => <div className="flex items-center justify-between gap-3 py-1"><span>{e}</span><span className="flex items-center gap-1 text-neutral-500">{y(2) ? <Check className="h-3 w-3 text-emerald-500" /> : <span className="h-1 w-1 rounded-full bg-neutral-400" />}{y(2) ? "Passed" : "Pending"}</span></div>)}</div></div></div><div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-[45px] z-10 h-8 bg-gradient-to-b from-white to-transparent dark:from-neutral-950 ${w > 1 || v ? "" : "hidden"}`} /><ol className={`flex min-h-0 flex-col justify-end gap-2 overflow-hidden p-3 pb-12 ${j ? "hidden" : "flex-1 [@container(min-height:420px)]:flex-none"}`}><__mod_47962.N initial={!1}>{m.map((t, n) => {
              let r = t.icon,
                i = y(n),
                d = n >= w;
              return <motion.li layout={!e && "position"} initial={{
                opacity: 0,
                y: 8 * !e
              }} animate={{
                opacity: d ? .45 : 1,
                y: 0
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .35,
                ease: b
              }} className={`flex gap-2.5 rounded-lg border border-neutral-100 px-2.5 dark:border-neutral-800/80 ${d ? "items-center py-1.5" : "items-start py-2"}`}><span className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors duration-300 ${i ? "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300" : "border border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"}`}><r className="h-3 w-3" /></span><div className="min-w-0 flex-1 leading-tight"><p className={`${d ? "hidden" : "flex"} items-center gap-1.5 text-[10px] text-neutral-500`}><span className="font-mono">{t.tool}</span>{!i && !d && !e && <span className="inline-flex gap-0.5">{[0, 1, 2].map(e => <motion.span animate={{
                        opacity: [.2, 1, .2]
                      }} transition={{
                        duration: 1,
                        repeat: 1 / 0,
                        delay: .18 * e
                      }} className="h-1 w-1 rounded-full bg-neutral-400" />)}</span>}</p><p className={`truncate text-[11px] ${"shell" === t.tool ? "font-mono" : ""} text-neutral-800 dark:text-neutral-200`}>{t.action}</p><__mod_47962.N initial={!1}>{i && <motion.p initial={{
                      opacity: 0,
                      height: 0
                    }} animate={{
                      opacity: 1,
                      height: "auto"
                    }} exit={{
                      opacity: 0,
                      height: 0
                    }} transition={{
                      duration: .3,
                      ease: b
                    }} className="truncate pt-0.5 text-[10px] text-neutral-500"><Check className="mr-1 inline h-2.5 w-2.5 text-emerald-500" />{t.result}</motion.p>}</__mod_47962.N></div></motion.li>;
            })}{v && <motion.li layout={!e && "position"} initial={{
              opacity: 0,
              y: 10 * !e,
              scale: e ? 1 : .98
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: .45,
              ease: b
            }} className="flex items-center gap-2.5 rounded-lg bg-neutral-900 px-3 py-2.5 text-white dark:bg-white dark:text-neutral-900"><GitPullRequest className="h-4 w-4 shrink-0" /><div className="min-w-0 flex-1 leading-tight"><p className="truncate text-[11px] font-semibold">Opened #482 · fix: round billing periods to the day</p><p className="truncate text-[10px] opacity-70">2 files · tests green · ready for review</p></div><button type="button" aria-pressed={j} onClick={() => N(e => !e)} className="shrink-0 cursor-pointer rounded-md bg-white/15 px-2 py-1 text-[10px] font-medium transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 dark:bg-neutral-900/10 dark:hover:bg-neutral-900/20 dark:focus-visible:ring-neutral-900/40">{j ? "Back" : "Review"}</button></motion.li>}</__mod_47962.N></ol></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Turn tickets into changes</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">An agent that reads the code, makes the change, runs the tests and opens a pull request you can actually review.</p></div></article>;
}

export default f;
