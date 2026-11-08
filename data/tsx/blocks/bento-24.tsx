import { motion, AnimatePresence } from "motion/react";
import { Languages, Mic, Pause, Play } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 24
 * Live waveform with a typing transcript
 * slug: bento-24
 * category: Bento
 * export: Bento24
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-24.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    speaker: "Maya",
    photo: "45",
    text: "Let's ship the editor on Thursday and hold the pricing change a week.",
    at: "00:12"
  }, {
    speaker: "Kai",
    photo: "68",
    text: "Works for me. I'll draft the changelog and flag the two breaking bits.",
    at: "00:31"
  }, {
    speaker: "Priya",
    photo: "47",
    text: "Can we add a summary at the top? Support keeps asking for one.",
    at: "00:48"
  }, {
    speaker: "Maya",
    photo: "45",
    text: "Yes, and let's make it the default view for new workspaces.",
    at: "01:04"
  }],
  u = Array.from({
    length: 48
  }, (e, t) => .25 + .55 * Math.abs(Math.sin(.9 * t) * Math.cos(.37 * t))),
  h = [.22, 1, .36, 1];
function p() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [p, m] = (0, React.useState)(!0),
    [f, b] = (0, React.useState)(0),
    [g, w] = (0, React.useState)(0),
    k = (0, React.useRef)(0),
    [j, N] = (0, React.useState)(0);
  (0, React.useEffect)(() => {
    if (!t || e || !p) return;
    let a = !1,
      r = 0,
      s = c[f % c.length].text.length,
      l = k.current,
      n = () => {
        a || (k.current = l += 1, w(l), r = l < s ? window.setTimeout(n, 26) : window.setTimeout(() => {
          a || (w(0), k.current = 0, b(e => e + 1));
        }, 900));
      };
    return r = window.setTimeout(n, 200), () => {
      a = !0, window.clearTimeout(r);
    };
  }, [t, e, p, f]), (0, React.useEffect)(() => {
    if (!t || e || !p) return;
    let a = window.setInterval(() => N(e => (e + 1) % u.length), 140);
    return () => window.clearInterval(a);
  }, [t, e, p]);
  let v = c[f % c.length],
    y = f % c.length,
    _ = e ? v.text : v.text.slice(0, g);
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
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] @2xl:flex-row dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex flex-col border-b border-neutral-100 p-3.5 @2xl:w-[44%] @2xl:shrink-0 @2xl:border-b-0 @2xl:border-r dark:border-neutral-800/80"><div className="flex items-center justify-between"><span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-neutral-900 dark:text-white"><span className="relative flex h-1.5 w-1.5">{p && <span className="absolute inset-0 rounded-full bg-red-500 motion-safe:animate-ping" />}<span className="relative h-1.5 w-1.5 rounded-full bg-red-500" /></span>Weekly sync</span><span className="text-[10px] tabular-nums text-neutral-500">{v.at} / 42:10</span></div><div className="mt-3 flex h-10 shrink-0 items-center gap-[2px] @2xl:h-16">{u.map((t, a) => {
              let s = a <= j,
                l = a === j;
              return <motion.span initial={!1} animate={{
                scaleY: p && !e && l ? 1.15 : t
              }} transition={{
                duration: .2
              }} className={`h-full w-full origin-center rounded-full ${s ? "bg-neutral-900 dark:bg-white" : "bg-neutral-200 dark:bg-neutral-800"}`} />;
            })}</div><div className="mt-3 flex items-center justify-between"><button type="button" onClick={() => m(e => !e)} aria-label={p ? "Pause" : "Play"} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900">{p ? <Pause className="h-3.5 w-3.5" strokeWidth={2.5} /> : <Play className="ml-0.5 h-3.5 w-3.5" strokeWidth={2.5} />}</button><div className="flex items-center gap-1.5"><span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"><Mic className="h-3 w-3" />3 speakers</span><span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"><Languages className="h-3 w-3" />EN</span></div></div><div className="hidden pt-5 @2xl:block"><p className="text-[10px] font-medium text-neutral-500">Action items</p><ul className="mt-1.5 space-y-1.5">{["Ship editor Thursday", "Hold pricing change one week", "Add summary to top of notes"].map((e, t) => <li className="flex items-center gap-2 text-[10px] text-neutral-700 dark:text-neutral-300"><span className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border ${0 === t ? "border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white" : "border-neutral-300 dark:border-neutral-700"}`}>{0 === t && <span className="h-1 w-1.5 -translate-y-px rotate-[-45deg] border-b border-l border-white dark:border-neutral-900" />}</span><span className={0 === t ? "line-through opacity-60" : ""}>{e}</span></li>)}</ul></div></div><div className="flex min-w-0 flex-1 flex-col p-3.5"><div className="mb-3 hidden items-center justify-between text-[10px] font-medium text-neutral-500 @2xl:flex"><span>Transcript</span><span>Click a line to replay</span></div><div className="space-y-1">{c.map((t, a) => {
              let s = a === y;
              return <button type="button" onClick={() => {
                k.current = 0, w(0), b(e => (Math.floor(e / c.length) + 1) * c.length + a), m(!0);
              }} aria-label={`Replay ${t.speaker} at ${t.at}`} aria-pressed={s} className={`flex w-full cursor-pointer gap-2.5 rounded-lg p-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${s ? "bg-neutral-100 dark:bg-neutral-900" : "hover:bg-neutral-50 dark:hover:bg-neutral-900/60"}`}><span className={`block h-6 w-6 shrink-0 overflow-hidden rounded-full ${s ? "ring-2 ring-neutral-900 ring-offset-1 ring-offset-neutral-100 dark:ring-white dark:ring-offset-neutral-900" : ""}`}><img src={`https://i.pravatar.cc/80?img=${t.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span><span className="min-w-0 flex-1 leading-tight"><span className="flex items-center justify-between text-[10px] font-medium text-neutral-700 dark:text-neutral-300">{t.speaker}<span className="tabular-nums text-neutral-400">{t.at}</span></span><span className={`mt-1 block min-h-[2.6rem] text-[11px] leading-relaxed ${s ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"}`}>{s ? _ : t.text}{s && p && !e && <span className="ml-px inline-block h-[11px] w-[2px] translate-y-[1px] bg-neutral-900 motion-safe:animate-pulse dark:bg-white" />}</span></span></button>;
            })}</div><div className="mt-4 border-t border-neutral-100 px-2 pb-6 pt-3 dark:border-neutral-800/80"><p className="text-[10px] font-medium text-neutral-500">Meeting notes</p><p className="mt-1.5 text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300">The editor ships Thursday. Pricing stays unchanged for another week, and new workspaces will open with a summary of their notes.</p><span className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-neutral-500"><Mic className="h-3 w-3" />3 speakers · Notes saved automatically</span></div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Every word, captured</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Live transcription with speaker labels in 40 languages, plus a summary and action items when the call ends.</p></div></article>;
}

export default p;
