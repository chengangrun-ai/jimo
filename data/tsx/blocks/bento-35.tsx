import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, RefreshCw, Sparkles, ThumbsUp } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 35
 * AI analyst streaming a reply with data
 * slug: bento-35
 * category: Bento
 * export: Bento35
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-35.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = [{
    user: "Why did checkout conversion drop last week?",
    assistant: "Mobile Safari fell 18%. The postcode validator rejects spaces and blocks Pay. Accept spaces to recover checkout."
  }, {
    user: "Draft a two-line release note for the fix.",
    assistant: "Fixed: UK postcodes with spaces now work at checkout. Refresh the page to continue your purchase."
  }, {
    user: "Which customers should we email about it?",
    assistant: "412 accounts hit the error twice without ordering. A draft in Campaigns is ready for your review."
  }],
  h = [.22, 1, .36, 1];
function p(e, t) {
  let a = 7919 * t % 23 - 11;
  return /[.!?]$/.test(e) ? 210 + a : /[,;:]$/.test(e) ? 100.8 + a : 42 + a;
}
function f({
  text: e,
  count: t,
  caret: a
}) {
  let r = e.split(" ");
  return <>{r.map((e, s) => <span className="transition-opacity duration-300 ease-out" style={{
      opacity: +(s < t)
    }}>{e}{a && s === t - 1 && <span className="-mr-[2px] ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] rounded-full bg-current" />}{s < r.length - 1 ? " " : ""}</span>)}</>;
}
function g() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [g, b] = (0, React.useState)(!1),
    [j, w] = (0, React.useState)(!1),
    [k, y] = (0, React.useState)(0),
    [N, v] = (0, React.useState)(!1),
    [A, C] = (0, React.useState)(1),
    [S, _] = (0, React.useState)("idle"),
    [P, T] = (0, React.useState)(e ? 1 / 0 : 0),
    [F, $] = (0, React.useState)(e ? "done" : "asking"),
    E = (g || j) && "done" === F,
    G = m[k % m.length],
    I = (0, React.useMemo)(() => G.assistant.split(" "), [G]),
    M = (0, React.useMemo)(() => I.reduce((e, t, a) => (e.push((e[a - 1] ?? 0) + p(t, a)), e), []), [I]),
    R = (0, React.useRef)(0);
  return (0, React.useEffect)(() => {
    if (!t || e || E || "streaming" === F) return;
    let a = 0;
    return a = "asking" === F ? window.setTimeout(() => $("thinking"), 700) : "thinking" === F ? window.setTimeout(() => $("streaming"), 1100) : window.setTimeout(() => {
      R.current = 0, y(e => e + 1), C(1), T(0), v(!1), _("idle"), $("asking");
    }, 3800), () => window.clearTimeout(a);
  }, [t, e, E, F]), (0, React.useEffect)(() => {
    if (!t || e || E || "streaming" !== F) return;
    let a = 0,
      n = performance.now(),
      r = e => {
        R.current += e - n, n = e;
        let t = 0;
        for (; t < M.length && M[t] <= R.current;) t++;
        (T(t), t >= I.length) ? $("done") : a = requestAnimationFrame(r);
      };
    return a = requestAnimationFrame(r), () => cancelAnimationFrame(a);
  }, [t, e, E, F, M, I.length]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden" style={{
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
        ease: h
      }} onPointerEnter={() => b(!0)} onPointerLeave={() => b(!1)} onFocusCapture={() => w(!0)} onBlurCapture={e => {
        e.currentTarget.contains(e.relatedTarget) || w(!1);
      }} className="absolute inset-x-3 -bottom-3 top-3 flex flex-col rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex shrink-0 items-center justify-between gap-2 border-b border-neutral-100 px-3.5 py-2.5 dark:border-neutral-800/80"><div className="flex items-center gap-2"><span className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"><Sparkles className="h-3 w-3" /></span><span className="text-[11px] font-semibold text-neutral-900 dark:text-white">Analyst</span></div><span className="rounded-full border border-neutral-200 px-2 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-800">atlas-4 · 128k</span></div><div className="flex min-h-0 flex-1 flex-col gap-3 p-3.5 pb-8 @2xl:grid @2xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"><div className="hidden min-h-0 flex-1 flex-col justify-center rounded-lg border border-neutral-100 p-3 dark:border-neutral-800 @2xl:flex [@container(min-height:420px)]:flex [@container(min-height:420px)]:p-5"><div className="flex items-center justify-between gap-2 text-[10px] text-neutral-500"><span>Checkout conversion</span><span>Last 7 days</span></div><div className="mt-1 flex items-baseline gap-2"><p className="text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">3.42<span className="text-sm text-neutral-400">%</span></p><span className="text-[10px] text-neutral-500">from 4.17%</span></div><div className="relative mt-2 flex min-h-[44px] flex-1 items-end gap-2 [@container(min-height:420px)]:mt-5 [@container(min-height:420px)]:max-h-[180px]">{[82, 88, 79, 91, 64, 59, 63].map((e, t) => <div className="h-full flex-1 content-end"><div className={`rounded-t-md ${6 === t ? "bg-neutral-500 dark:bg-neutral-400" : "bg-neutral-200 dark:bg-neutral-800"}`} style={{
                  height: `${e}%`
                }} /></div>)}</div><div className="mt-1 flex justify-between text-[10px] text-neutral-400"><span>Mon</span><span>Sun</span></div><div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-neutral-500"><span>24k sessions</span><span aria-hidden="true">·</span><span>3 sources checked</span></div><div className="mt-5 hidden space-y-3 border-t border-neutral-100 pt-4 text-[11px] dark:border-neutral-800 [@container(min-height:420px)]:block"><div className="flex items-center justify-between gap-3"><span className="text-neutral-500">Mobile Safari</span><span className="font-medium tabular-nums text-neutral-700 dark:text-neutral-300">−18%</span></div><div className="flex items-center justify-between gap-3"><span className="text-neutral-500">Affected accounts</span><span className="font-medium tabular-nums text-neutral-700 dark:text-neutral-300">412</span></div></div></div><div className="relative flex min-h-0 flex-1 flex-col justify-center gap-2 [@container(min-height:420px)]:flex-none"><__mod_47962.N mode="popLayout" initial={!1}><motion.div initial={{
                opacity: 0,
                y: 8 * !e
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: e ? 0 : -8
              }} transition={{
                duration: .35,
                ease: h
              }} className="flex justify-end"><p className="max-w-[90%] rounded-lg bg-neutral-900 px-3 py-2 text-[11px] leading-relaxed text-white dark:bg-white dark:text-neutral-900">{G.user}</p></motion.div><motion.div initial={{
                opacity: 0,
                y: 8 * !e
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: e ? 0 : -8
              }} transition={{
                duration: .35,
                ease: h
              }} className="flex min-h-[116px] items-start gap-2 @sm:min-h-[100px]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"><Sparkles className="h-2.5 w-2.5" /></span><div className="min-w-0 flex-1">{"asking" !== F && "thinking" !== F || e ? <p className="rounded-lg bg-neutral-100 px-3 py-2 text-[11px] leading-relaxed text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"><f text={G.assistant} count={e ? I.length : P} caret={"streaming" === F} /></p> : <span className="inline-flex min-h-[30px] items-center gap-1 rounded-lg bg-neutral-100 px-3 dark:bg-neutral-800"><span className="mr-1 text-[11px] text-neutral-500">Checking sources</span>{[0, 1, 2].map(e => <motion.span animate={{
                      opacity: [.25, 1, .25]
                    }} transition={{
                      duration: 1,
                      repeat: 1 / 0,
                      delay: .18 * e
                    }} className="h-1.5 w-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400" />)}</span>}<__mod_47962.N>{("done" === F || e) && <motion.div initial={{
                      opacity: 0,
                      y: 4 * !e
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} exit={{
                      opacity: 0
                    }} transition={{
                      duration: .3,
                      ease: h
                    }} className="mt-1.5 flex items-center gap-1 text-neutral-400">{[{
                        Icon: Copy,
                        label: "Copy"
                      }, {
                        Icon: ThumbsUp,
                        label: "Good answer"
                      }, {
                        Icon: RefreshCw,
                        label: "Regenerate"
                      }].map(({
                        Icon: t,
                        label: a
                      }) => <button type="button" aria-label={a} title={a} aria-pressed={"Good answer" === a ? N : void 0} onClick={async () => {
                        if ("Good answer" === a) return void v(e => !e);
                        if ("Regenerate" === a) {
                          R.current = 0, T(0), C(e => e + 1), v(!1), _("idle"), w(!1), $(e ? "done" : "thinking");
                          return;
                        }
                        try {
                          await navigator.clipboard.writeText(G.assistant), _("copied");
                        } catch {
                          _("failed");
                        }
                      }} className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">{"Copy" === a && "copied" === S || "Good answer" === a && N ? <Check className="h-3 w-3 text-neutral-900 dark:text-white" /> : <t className="h-3 w-3" />}</button>)}<span className="ml-1 text-[10px] tabular-nums">{"copied" === S ? "Copied \xb7 " : "failed" === S ? "Copy unavailable \xb7 " : ""}{A > 1 ? `Reply ${A} \xb7 ` : ""}{I.length} words · {((I.reduce((e, t, a) => e + p(t, a), 0) + 1100) / 1e3).toFixed(1)}s</span></motion.div>}</__mod_47962.N></div></motion.div></__mod_47962.N><div className="ml-7 mt-4 hidden rounded-lg border border-neutral-100 p-3 dark:border-neutral-800 [@container(min-height:420px)]:block"><p className="text-[10px] font-medium text-neutral-500">Grounded in your data</p><div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-700 dark:text-neutral-300"><Check className="h-3 w-3 shrink-0 text-neutral-400" /><span>Checkout events</span><span className="ml-auto text-[10px] text-neutral-400">Live</span></div><div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-700 dark:text-neutral-300"><Check className="h-3 w-3 shrink-0 text-neutral-400" /><span>Browser error logs</span><span className="ml-auto text-[10px] text-neutral-400">Synced</span></div></div></div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Ask the data a question</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Plain-language answers grounded in your own numbers, with the reasoning shown and the next step already drafted.</p></div></article>;
}

export default g;
