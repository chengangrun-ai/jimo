import { motion, AnimatePresence } from "motion/react";
import { Mic, Sparkles, Volume2 } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Bento 41
 * Voice assistant with a live waveform
 * slug: bento-41
 * category: Bento
 * export: Bento41
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-41.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    heard: "Move my two o'clock with Priya to tomorrow morning.",
    reply: "Done. Priya is free at 9:30 tomorrow, so I moved it there and let her know."
  }, {
    heard: "What did we ship last week?",
    reply: "Four releases: edge caching, the S\xe3o Paulo region, faster cold starts and unlimited seats."
  }, {
    heard: "Remind me to review the billing PR after lunch.",
    reply: "I'll remind you at 1:30. The PR is #482, tests are green."
  }],
  h = [.22, 1, .36, 1];
function p(e) {
  let t = 43758.5453 * Math.sin(12.9898 * e);
  return t - Math.floor(t);
}
function f({
  text: e,
  count: t,
  caret: r
}) {
  let a = e.split(" ");
  return <>{a.map((e, i) => <span className="transition-opacity duration-300 ease-out" style={{
      opacity: +(i < t)
    }}>{e}{r && i === t - 1 && <span className="-mr-[2px] ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] rounded-full bg-current" />}{i < a.length - 1 ? " " : ""}</span>)}</>;
}
function m() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(!1),
    [m, x] = (0, React.useState)(!1),
    [g, w] = (0, React.useState)(0),
    [y, k] = (0, React.useState)(e ? "replying" : "listening"),
    [b, v] = (0, React.useState)(e ? 1 / 0 : 0),
    [j, N] = (0, React.useState)(0),
    M = c[g % c.length],
    _ = M.heard.split(" "),
    A = "listening" === y || "typing" === y,
    E = (0, React.useRef)(0);
  return (0, React.useEffect)(() => {
    if (!t || e || m || "typing" !== y) return;
    let r = 0,
      n = performance.now(),
      a = e => {
        E.current += e - n, n = e;
        let t = Math.min(_.length, Math.floor(E.current / 82));
        (v(t), t >= _.length) ? k("thinking") : r = requestAnimationFrame(a);
      };
    return r = requestAnimationFrame(a), () => cancelAnimationFrame(r);
  }, [t, e, m, y, _.length]), (0, React.useEffect)(() => {
    if (!t || e || m || "typing" === y) return;
    let r = 0;
    return r = "listening" === y ? window.setTimeout(() => k("typing"), 700) : "thinking" === y ? window.setTimeout(() => k("replying"), 900) : window.setTimeout(() => {
      E.current = 0, w(e => e + 1), v(0), k("listening");
    }, 3200), () => window.clearTimeout(r);
  }, [t, e, m, y]), (0, React.useEffect)(() => {
    if (!t || e || m || "thinking" === y) return;
    let r = window.setInterval(() => N(e => e + 1), 90);
    return () => window.clearInterval(r);
  }, [t, e, m, y]), (0, React.useEffect)(() => {
    let e = window.setTimeout(() => N(0), 0);
    return () => window.clearTimeout(e);
  }, [y]), <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} onViewportEnter={() => r(!0)} transition={{
        duration: .7,
        ease: h
      }} className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6"><div className="flex w-full max-w-[380px] items-center gap-3"><button type="button" aria-label="Restart the exchange" onClick={() => {
            E.current = 0, w(e => e + 1), v(0), k(e ? "replying" : "listening"), x(!1);
          }} onPointerEnter={() => x(!0)} onPointerLeave={() => x(!1)} className={`relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${A ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border border-neutral-200 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200"}`}>{A && !e && <motion.span aria-hidden="true" animate={{
              scale: [1, 1.5],
              opacity: [.35, 0]
            }} transition={{
              duration: 1.4,
              repeat: 1 / 0,
              ease: "easeOut"
            }} className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white" />}<Mic className="relative h-4 w-4" /></button><div aria-hidden="true" className="flex h-11 flex-1 items-center justify-between">{Array.from({
              length: 28
            }, (t, r) => <span className={`block h-full w-[3px] origin-center rounded-full ${A ? "bg-neutral-900 dark:bg-white" : "replying" === y ? "bg-neutral-500 dark:bg-neutral-400" : "bg-neutral-300 dark:bg-neutral-700"}`} style={{
              transform: `scaleY(${e ? .3 : Math.round(1e3 * function (e, t, r) {
                let n = .3 + .7 * Math.sin(e / 27 * Math.PI);
                switch (r) {
                  case "listening":
                    return .12 + .12 * p(28 * t + e) * n;
                  case "typing":
                    return n * (.22 + .78 * p(28 * t + e));
                  case "replying":
                    return .14 + Math.max(0, 1 - t / 26) * n * (.15 + .6 * Math.abs(Math.sin(.42 * t + .33 * e)));
                  default:
                    return .14;
                }
              }(r, j, y)) / 1e3})`,
              transition: "transform 110ms ease-out, background-color 500ms ease"
            }} />)}</div></div><div className="w-full max-w-[380px]"><p className="relative h-[40px] overflow-hidden text-[12px] leading-relaxed text-neutral-700 dark:text-neutral-300"><span className="mr-1.5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">You</span><f text={M.heard} count={e ? _.length : b} caret={"typing" === y} /></p><div className="relative mt-2 h-[92px] @sm:h-[76px]"><__mod_47962.N initial={!1}>{"thinking" === y && <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .25,
                ease: h
              }} className="absolute inset-x-0 top-0 flex h-8 items-center gap-1.5 text-[11px] text-neutral-400"><Sparkles className="h-3 w-3" />Thinking<span className="inline-flex gap-0.5">{[0, 1, 2].map(e => <motion.span animate={{
                    opacity: [.2, 1, .2]
                  }} transition={{
                    duration: 1,
                    repeat: 1 / 0,
                    delay: .18 * e
                  }} className="h-1 w-1 rounded-full bg-neutral-400" />)}</span></motion.div>}{("replying" === y || e) && <motion.div initial={{
                opacity: 0,
                y: 6 * !e
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0
              }} transition={{
                duration: .4,
                ease: h
              }} className="absolute inset-0 flex items-start gap-2.5 overflow-hidden rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"><Volume2 className="h-3 w-3" /></span><p className="text-[11px] leading-relaxed text-neutral-800 dark:text-neutral-200">{M.reply}</p></motion.div>}</__mod_47962.N></div></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Say it, it’s done</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Talk to your workspace like a colleague. It hears the request, does the work and tells you what changed.</p></div></article>;
}

export default m;
