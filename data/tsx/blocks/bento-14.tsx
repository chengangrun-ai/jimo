import { motion, AnimatePresence } from "motion/react";
import { Coffee, Focus, Pause, Play } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 14
 * Live focus timer with a pause button
 * slug: bento-14
 * category: Bento
 * export: Bento14
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-14.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = [{
    label: "Product planning",
    minutes: 25
  }, {
    label: "Design review",
    minutes: 25
  }, {
    label: "Documentation",
    minutes: 15
  }],
  p = [{
    label: "Deep work",
    icon: Focus,
    className: "-left-6 top-[12%]",
    delay: 0
  }, {
    label: "Break in 9m",
    icon: Coffee,
    className: "-right-8 top-[26%]",
    delay: 1.3
  }],
  b = [.22, 1, .36, 1];
function f() {
  let e = (0, React.useRef)(null),
    [t, a] = (0, React.useState)(!1),
    [u, f] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let t = e.current;
    if (!t) return;
    let r = new ResizeObserver(([e]) => {
      a(e.contentRect.height >= 440 && e.contentRect.width >= 430), f(e.contentRect.height >= 440 && e.contentRect.width >= 820);
    });
    return r.observe(t), () => r.disconnect();
  }, []);
  let k = !!(0, __mod_50969.I)(),
    [g, w] = (0, React.useState)(!0),
    [v, j] = (0, React.useState)(556),
    [N, y] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    if (!g || k) return;
    let e = window.setInterval(() => j(e => e <= 1 ? 1500 : e - 1), 1e3);
    return () => window.clearInterval(e);
  }, [g, k]);
  let _ = (0, __mod_75272.d)(0),
    M = (0, __mod_75272.d)(0),
    P = (0, __mod_17192.z)((0, __mod_32923.G)(M, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    S = (0, __mod_17192.z)((0, __mod_32923.G)(_, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    }),
    C = String(Math.floor(v / 60)).padStart(2, "0"),
    I = String(v % 60).padStart(2, "0"),
    R = 1 - v / 1500,
    A = 2 * Math.PI * 82;
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={e} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !k
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: b
      }} onPointerMove={e => {
        if (k || N) return;
        let t = e.currentTarget.getBoundingClientRect();
        _.set((e.clientX - t.left) / t.width - .5), M.set((e.clientY - t.top) / t.height - .5);
      }} onPointerLeave={() => {
        _.set(0), M.set(0);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: P,
          rotateY: S,
          width: t ? 312 : 240,
          height: t ? 312 : 240
        }} className="relative max-w-full shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[6px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><circle cx={120} cy={120} r={94} className="fill-white stroke-neutral-200 dark:fill-neutral-950 dark:stroke-neutral-800" strokeWidth={1.25} />{Array.from({
              length: 60
            }, (e, t) => {
              let a = t / 60 * Math.PI * 2 - Math.PI / 2,
                s = t % 5 == 0,
                n = 82 - (s ? 10 : 6),
                l = Math.round((120 + Math.cos(a) * n) * 100) / 100,
                i = Math.round((120 + Math.sin(a) * n) * 100) / 100,
                d = Math.round((120 + 80 * Math.cos(a)) * 100) / 100,
                o = Math.round((120 + 80 * Math.sin(a)) * 100) / 100;
              return <line x1={l} y1={i} x2={d} y2={o} stroke="currentColor" strokeWidth={s ? 1.5 : 1} className={s ? "text-neutral-400 dark:text-neutral-500" : "text-neutral-200 dark:text-neutral-800"} />;
            })}<circle cx={120} cy={120} r={82} fill="none" stroke="currentColor" strokeWidth={4} className="text-neutral-100 dark:text-neutral-800" /><motion.circle cx={120} cy={120} r={82} fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeDasharray={A} initial={!1} animate={{
              strokeDashoffset: A * (1 - R)
            }} transition={{
              duration: .9,
              ease: "linear"
            }} transform="rotate(-90 120 120)" className="text-neutral-900 dark:text-white" /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-[28px] font-semibold leading-none tabular-nums tracking-tight text-neutral-900 dark:text-white">{C}:{I}</span><span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">{g ? "focusing" : "paused"}</span><button type="button" onClick={() => w(e => !e)} {...{
              onPointerEnter: () => y(!0),
              onPointerLeave: () => y(!1)
            }} aria-label={g ? "Pause timer" : "Start timer"} aria-pressed={g} className="mt-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:shadow-none">{g ? <Pause className="h-3.5 w-3.5" strokeWidth={2.5} /> : <Play className="ml-0.5 h-3.5 w-3.5" strokeWidth={2.5} />}</button></div>{p.map(e => {
            let t = e.icon;
            return <motion.span animate={k ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: e.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${e.className}`}><t className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{e.icon === Coffee ? g ? `Break in ${Math.ceil(v / 60)}m` : "Session paused" : e.label}</motion.span>;
          })}</motion.div></motion.div>{u && <><div className="pointer-events-none absolute left-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Focus, today</p><p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">{h.reduce((e, t) => e + t.minutes, 0) + Math.floor((1500 - v) / 60)}<span className="ml-1 text-xs font-medium text-neutral-500">min</span></p><div className="mt-4 flex h-14 items-end gap-2">{h.map(e => <div className="flex-1 rounded-t-md bg-neutral-200 dark:bg-neutral-700" style={{
              height: `${e.minutes / 25 * 100}%`
            }} />)}<div className="flex-1 rounded-t-md bg-neutral-300 dark:bg-neutral-600" style={{
              height: `${100 * R}%`
            }} /></div><p className="mt-2 text-[11px] text-neutral-500">{h.length} sessions completed</p></div><div className="pointer-events-none absolute right-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Earlier sessions</p><div className="mt-3 space-y-4">{h.map(e => <div><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{e.label}</p><p className="mt-1 text-[11px] tabular-nums text-neutral-500">{e.minutes} min · Completed</p></div>)}</div></div></>}</div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Time, accounted for</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Focus sessions, breaks and billable hours tracked automatically, so the timesheet writes itself.</p></div></article>;
}

export default f;
