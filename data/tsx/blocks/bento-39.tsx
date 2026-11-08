import { motion, AnimatePresence } from "motion/react";
import { Check, Trophy } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 39
 * Two models racing to answer one prompt
 * slug: bento-39
 * category: Bento
 * export: Bento39
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-39.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    name: "atlas",
    version: "4",
    answer: "Cancel within 14 days for a full refund; after that you keep access until the period ends and nothing renews.",
    ms: 1900
  }, {
    name: "atlas",
    version: "4 mini",
    answer: "Full refund within 14 days, otherwise access runs to the end of the paid period.",
    ms: 1100
  }],
  c = [.22, 1, .36, 1];
function x({
  text: e,
  count: t,
  caret: a
}) {
  let r = e.split(" ");
  return <>{r.map((e, s) => <span className="transition-opacity duration-300 ease-out" style={{
      opacity: +(s < t)
    }}>{e}{a && s === t - 1 && <span className="-mr-[2px] ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] rounded-full bg-current" />}{s < r.length - 1 ? " " : ""}</span>)}</>;
}
function p() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [p, h] = (0, React.useState)(!1),
    [m, f] = (0, React.useState)(0),
    [g, w] = (0, React.useState)(e ? 1 / 0 : 0),
    [b, j] = (0, React.useState)(null),
    v = e ? 1 / 0 : g,
    k = u.map(e => v >= e.ms),
    y = k.every(Boolean),
    N = u[0].ms <= u[1].ms ? 0 : 1,
    C = b ?? (y ? N : null),
    _ = (0, React.useRef)(0);
  return (0, React.useEffect)(() => {
    if (!t || e || p && y) return;
    if (!y) {
      let e = 0,
        t = performance.now(),
        a = n => {
          _.current += n - t, t = n, w(_.current), e = requestAnimationFrame(a);
        };
      return e = requestAnimationFrame(a), () => cancelAnimationFrame(e);
    }
    let a = window.setTimeout(() => {
      _.current = 0, w(0), j(null), f(e => e + 1);
    }, 3400);
    return () => window.clearTimeout(a);
  }, [t, e, p, y]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden" style={{
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
      }} onViewportEnter={() => a(!0)} transition={{
        duration: .7,
        ease: c
      }} onPointerEnter={() => h(!0)} onPointerLeave={() => h(!1)} onFocusCapture={() => h(!0)} onBlurCapture={e => {
        e.currentTarget.contains(e.relatedTarget) || h(!1);
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Prompt</p><p className="mt-0.5 text-[11px] text-neutral-800 dark:text-neutral-200">Explain our refund policy in one sentence.</p></div><div className="grid flex-1 grid-cols-2 gap-px bg-neutral-100 dark:bg-neutral-800/80">{u.map((t, a) => {
            let r = Math.min(1, v / t.ms),
              s = t.answer.split(" "),
              u = e ? s.length : Math.floor(r * s.length),
              p = C === a;
            return <button type="button" onClick={() => {
              j(a), w(1 / 0);
            }} aria-pressed={p} aria-label={`Prefer ${t.name} ${t.version}`} className={`relative flex cursor-pointer flex-col p-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400 ${p ? "bg-neutral-50 dark:bg-neutral-900" : "bg-white hover:bg-neutral-50/60 dark:bg-neutral-950 dark:hover:bg-neutral-900/60"}`}><div className="flex min-h-5 flex-wrap items-center justify-between gap-1.5"><span className="font-mono text-[10px] text-neutral-500">{t.name}<span className="text-neutral-900 dark:text-white">-{t.version}</span></span><__mod_47962.N>{p && <motion.span initial={{
                    opacity: 0,
                    scale: .7
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} exit={{
                    opacity: 0,
                    scale: .7
                  }} transition={{
                    duration: .25,
                    ease: c
                  }} className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-1.5 py-0.5 text-[9px] font-medium text-white dark:bg-white dark:text-neutral-900"><Trophy className="h-2.5 w-2.5" />{b === a ? "Your pick" : "Fastest"}</motion.span>}</__mod_47962.N></div><p className={`mt-2 min-h-[54px] text-[11px] leading-relaxed transition-colors duration-300 [@container(min-height:420px)]:min-h-[96px] ${null !== C && !p ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-800 dark:text-neutral-200"}`}><x text={t.answer} count={u} caret={!k[a] && !e} /></p><div className="my-5 hidden flex-1 flex-col justify-center gap-5 [@container(min-height:420px)]:flex"><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">Evaluation summary</p>{[["Accuracy", 0 === a ? 98 : 94, 0 === a ? "Includes the refund window and renewal policy." : "Covers the refund window and access period."], ["Clarity", 0 === a ? 92 : 97, 0 === a ? "Keeps the full policy in plain language." : "Delivers the essentials in fewer words."], ["Instruction fit", 0 === a ? 96 : 91, "One sentence, with no extra steps."]].map(([e, t, a]) => <div><div className="mb-2 flex justify-between gap-2 text-[10px] text-neutral-500"><span>{e}</span><span className="tabular-nums">{t}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><div className="h-full rounded-full bg-neutral-400 dark:bg-neutral-500" style={{
                      width: `${t}%`
                    }} /></div><p className="mt-2 text-[10px] leading-relaxed text-neutral-500">{a}</p></div>)}<p className="text-[10px] leading-relaxed text-neutral-500">{0 === a ? "More context for nuanced tasks." : "Concise answers with less waiting."}</p></div><div className="mb-10 mt-auto flex items-center gap-2 pt-3"><span className="relative h-0.5 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><span className="absolute inset-y-0 left-0 rounded-full bg-neutral-900 transition-[width] duration-100 ease-linear dark:bg-white" style={{
                    width: `${100 * r}%`
                  }} /></span><span className="inline-flex w-[42px] shrink-0 items-center justify-end gap-1 text-[10px] tabular-nums text-neutral-500"><__mod_47962.N>{k[a] && <motion.span initial={{
                      opacity: 0,
                      scale: .5
                    }} animate={{
                      opacity: 1,
                      scale: 1
                    }} transition={{
                      duration: .25,
                      ease: c
                    }}><Check className="h-2.5 w-2.5 text-neutral-900 dark:text-white" /></motion.span>}</__mod_47962.N>{(Math.min(v, t.ms) / 1e3).toFixed(1)}s</span></div></button>;
          })}</div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Choose the right model</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Compare answers and latency side by side, then route each task to the model that earns it.</p></div></article>;
}

export default p;
