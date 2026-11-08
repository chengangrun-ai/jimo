import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Check, Paperclip, Sparkles, WandSparkles, X } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 38
 * Prompt composer with typed examples
 * slug: bento-38
 * category: Bento
 * export: Bento38
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-38.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let m = ["Summarise this week's support tickets", "Turn the roadmap into a customer email", "Find every place we hard-coded a price", "Write release notes from these commits", "Which experiments moved retention?"],
  b = [{
    label: "Support summary",
    prompt: m[0]
  }, {
    label: "Roadmap email",
    prompt: m[1]
  }, {
    label: "Hard-coded prices",
    prompt: m[2]
  }],
  h = [.22, 1, .36, 1];
function g() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [g, f] = (0, React.useState)(""),
    [w, v] = (0, React.useState)(!1),
    [k, y] = (0, React.useState)(!1),
    [j, _] = (0, React.useState)(!1),
    N = (0, React.useRef)(null),
    [A, S] = (0, React.useState)(0),
    [C, $] = (0, React.useState)(e ? m[0].length : 0),
    E = (0, React.useRef)(0),
    [P, F] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    if (null === P) return;
    let t = window.setTimeout(() => {
      e || g.length + 2 >= P.length ? (f(P), F(null)) : f(P.slice(0, g.length + 2));
    }, 11 * !e);
    return () => window.clearTimeout(t);
  }, [P, g, e]), (0, React.useEffect)(() => {
    if (!t || e || w) return;
    let a = m[A % m.length],
      r = 0,
      n = performance.now(),
      i = e => {
        var t, l;
        let s, o, d;
        E.current += e - n, n = e;
        let {
          count: u,
          done: c
        } = (t = E.current, d = (o = (s = 36 * (l = a.length)) + 1800) + 16 * l, t < s ? {
          count: Math.floor(t / 36),
          done: !1
        } : t < o ? {
          count: l,
          done: !1
        } : t < d ? {
          count: l - Math.floor((t - o) / 16),
          done: !1
        } : {
          count: 0,
          done: t >= d + 260
        });
        if ($(u), c) {
          E.current = 0, S(e => e + 1);
          return;
        }
        r = requestAnimationFrame(i);
      };
    return r = requestAnimationFrame(i), () => cancelAnimationFrame(r);
  }, [t, e, w, A]);
  let T = m[A % m.length],
    I = Math.max(1, Math.round(g.length / 4));
  (0, React.useEffect)(() => {
    if (!k) return;
    let e = window.setTimeout(() => {
      y(!1), f(""), _(!1), v(!1);
    }, 1600);
    return () => window.clearTimeout(e);
  }, [k]);
  let M = e => {
      k || (v(!0), f(""), F(e), N.current?.focus());
    },
    R = () => {
      !g.trim() || k || P || y(!0);
    },
    q = g.length > 0 || null !== P;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><style>{"@keyframes bento38-sweep { to { transform: rotate(360deg) } }"}</style><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
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
        ease: h
      }} className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5"><div className="group/composer relative w-full max-w-[400px] rounded-xl p-px"><div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden rounded-xl transition-opacity duration-500 ${q || k ? "opacity-100" : "opacity-0 group-focus-within/composer:opacity-60"}`}><div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgb(0_0_0/0.45)_60deg,transparent_120deg,transparent_180deg,rgb(0_0_0/0.25)_240deg,transparent_300deg)] dark:bg-[conic-gradient(from_0deg,transparent_0deg,rgb(255_255_255/0.55)_60deg,transparent_120deg,transparent_180deg,rgb(255_255_255/0.3)_240deg,transparent_300deg)]" style={{
              animation: e ? void 0 : `bento38-sweep ${k ? 1.6 : 4}s linear infinite`
            }} /></div><div className="relative rounded-[11px] border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] transition-[border-color,box-shadow] duration-300 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="relative min-h-[64px] px-3.5 pt-3">{!g && <span aria-hidden="true" className="pointer-events-none absolute inset-x-3.5 top-3 text-[12px] leading-relaxed text-neutral-400 dark:text-neutral-500">{T.split("").map((t, a) => <span className="transition-opacity duration-200 ease-out" style={{
                  opacity: e || a < C ? 1 : 0
                }}>{t}{!e && a === C - 1 && <span className="-mr-[1.5px] ml-px inline-block h-3 w-[1.5px] translate-y-[2px] rounded-full bg-neutral-400 dark:bg-neutral-500" />}</span>)}{!e && 0 === C && <span className="absolute left-0 top-0 inline-block h-3 w-[1.5px] translate-y-[3px] rounded-full bg-neutral-400 dark:bg-neutral-500" />}</span>}<textarea ref={N} readOnly={k} value={g} onFocus={() => v(!0)} onChange={e => {
                v(!0), F(null), f(e.target.value);
              }} onBlur={() => {
                g || v(!1);
              }} onKeyDown={e => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), R());
              }} aria-label="Ask anything" rows={2} className="relative w-full resize-none bg-transparent text-[12px] leading-relaxed text-neutral-900 focus:outline-none dark:text-white" /></div>{j && <button type="button" onClick={() => _(!1)} disabled={k} className="mx-3.5 mb-2 inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"><Paperclip className="h-3 w-3" /> workspace-notes.md <X className="h-3 w-3" /></button>}<div className="flex items-center justify-between px-2 pb-2"><div className="flex items-center gap-0.5 text-neutral-500"><button type="button" aria-label={j ? "Remove sample attachment" : "Attach sample context"} aria-pressed={j} disabled={k} onClick={() => _(e => !e)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white">{j ? <Check className="h-3.5 w-3.5" /> : <Paperclip className="h-3.5 w-3.5" />}</button><button type="button" aria-label="Improve prompt" disabled={k} onClick={() => M(`${g.trim() || T}. Give a concise answer with evidence and next steps.`)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white"><WandSparkles className="h-3.5 w-3.5" /></button><span className={`ml-1 rounded-md px-1.5 py-0.5 font-mono text-[10px] ${q ? "border border-neutral-200 text-neutral-500 dark:border-neutral-800" : "border border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"}`}>atlas-4</span></div><div className="flex items-center gap-2"><span className="text-[10px] tabular-nums text-neutral-400">{g ? `~${I} tokens` : ""}</span><button type="button" aria-label={k ? "Prompt sent" : "Send"} onClick={R} disabled={!g.trim() || k || null !== P} className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-md transition-all duration-200 disabled:cursor-default ${g ? "bg-neutral-900 text-white shadow-sm hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200" : "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600"}`}><__mod_47962.N mode="wait" initial={!1}>{k ? <motion.span initial={{
                      scale: .5,
                      opacity: 0
                    }} animate={{
                      scale: 1,
                      opacity: 1
                    }} exit={{
                      scale: .5,
                      opacity: 0
                    }} transition={{
                      duration: .18
                    }}><Sparkles className="h-3.5 w-3.5" /></motion.span> : <motion.span initial={{
                      scale: .5,
                      opacity: 0
                    }} animate={{
                      scale: 1,
                      opacity: 1
                    }} exit={{
                      scale: .5,
                      opacity: 0
                    }} transition={{
                      duration: .18
                    }}><ArrowUp className="h-3.5 w-3.5" /></motion.span>}</__mod_47962.N></button></div></div><__mod_47962.N>{k && <motion.span aria-hidden="true" initial={{
                scaleX: 0,
                opacity: 1
              }} animate={{
                scaleX: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 1.4,
                ease: h
              }} className="absolute inset-x-3 bottom-0 h-px origin-left bg-neutral-900 dark:bg-white" />}</__mod_47962.N></div></div><div className="flex w-full max-w-[400px] flex-wrap justify-center gap-1.5">{b.map((e, t) => <motion.button type="button" initial={{
            opacity: 0,
            y: 6
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .45,
            ease: h,
            delay: .25 + .06 * t
          }} onClick={() => M(e.prompt)} disabled={k} className={`cursor-pointer rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${g === e.prompt ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:text-white"}`}>{e.label}</motion.button>)}</div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Just ask</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">One box that knows your product, your customers and your codebase. Describe what you need and let it do the digging.</p></div></article>;
}

export default g;
