import { motion, AnimatePresence } from "motion/react";
import { Gauge, Layers, Sparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 31
 * Chip die with pulses along its traces
 * slug: bento-31
 * category: Bento
 * export: Bento31
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-31.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = e => Math.round(100 * e) / 100,
  h = [{
    d: "M120 8 L120 " + 76,
    delay: 0,
    pad: [120, 8]
  }, {
    d: `M232 120 L${164} 120`,
    delay: .9,
    pad: [232, 120]
  }, {
    d: `M8 120 L${76} 120`,
    delay: 2.7,
    pad: [8, 120]
  }, {
    d: `M${c(42)} 14 L${c(42)} ${c(54)} L${c(90)} ${c(54)} L${c(90)} ${76}`,
    delay: .45,
    pad: [c(42), 14]
  }, {
    d: `M226 ${c(42)} L${c(186)} ${c(42)} L${c(186)} ${c(90)} L${164} ${c(90)}`,
    delay: 1.35,
    pad: [226, c(42)]
  }, {
    d: `M${c(198)} 226 L${c(198)} ${c(186)} L${c(150)} ${c(186)} L${c(150)} ${164}`,
    delay: 2.25,
    pad: [c(198), 226]
  }, {
    d: `M14 ${c(198)} L${c(54)} ${c(198)} L${c(54)} ${c(150)} L${76} ${c(150)}`,
    delay: 3.15,
    pad: [14, c(198)]
  }],
  m = [{
    label: "1M context",
    icon: Layers,
    className: "-left-8 top-[14%]",
    delay: 0
  }, {
    label: "212 tok/s",
    icon: Gauge,
    className: "-right-10 top-[26%]",
    delay: 1.2
  }],
  b = [.22, 1, .36, 1];
function g() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(.62),
    [p, u] = (0, React.useState)(!1),
    c = {
      onPointerEnter: () => u(!0),
      onPointerLeave: () => u(!1)
    };
  (0, React.useEffect)(() => {
    if (e) return;
    let t = window.setInterval(() => {
      a(e => Math.min(.94, Math.max(.28, e + (Math.random() - .5) * .18)));
    }, 1800);
    return () => window.clearInterval(t);
  }, [e]);
  let g = (0, __mod_75272.d)(0),
    _ = (0, __mod_75272.d)(0),
    f = (0, __mod_17192.z)((0, __mod_32923.G)(_, [-.5, .5], [12, -12]), {
      stiffness: 160,
      damping: 18
    }),
    k = (0, __mod_17192.z)((0, __mod_32923.G)(g, [-.5, .5], [-14, 14]), {
      stiffness: 160,
      damping: 18
    }),
    v = Math.round(100 * t);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: b
      }} onPointerMove={t => {
        if (e || p) return;
        let a = t.currentTarget.getBoundingClientRect();
        g.set((t.clientX - a.left) / a.width - .5), _.set((t.clientY - a.top) / a.height - .5);
      }} onPointerLeave={() => {
        g.set(0), _.set(0);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><div className="pointer-events-none absolute left-8 top-1/2 hidden w-36 -translate-y-1/2 space-y-3 @2xl:block"><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">Inference</p><p className="text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">212 <span className="text-xs font-normal text-neutral-500">tok/s</span></p><div className="flex h-8 items-end gap-1">{[34, 54, 42, 72, 61, 82, 76, 92, 85, 100].map((e, t) => <span className="flex-1 rounded-t-sm bg-neutral-200 dark:bg-neutral-700" style={{
              height: `${e}%`
            }} />)}</div></div><div className="pointer-events-none absolute right-8 top-1/2 hidden w-36 -translate-y-1/2 space-y-3 @2xl:block"><p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">Your environment</p>{["Private by default", "No data leaves", "Always available"].map(e => <p className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-400"><span className="h-1 w-1 rounded-full bg-neutral-400" />{e}</p>)}</div><motion.div style={{
          rotateX: f,
          rotateY: k,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><motion.div aria-hidden="true" animate={{
            scale: .9 + .35 * t,
            opacity: .5 + .5 * t
          }} transition={{
            duration: 1.6,
            ease: b
          }} className="absolute inset-[52px] rounded-full bg-neutral-900/10 blur-2xl dark:bg-white/15" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible">{h.map((t, a) => <g><path d={t.d} fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="text-neutral-200 dark:text-neutral-800" />{!e && <motion.path d={t.d} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" pathLength={100} strokeDasharray="14 200" initial={{
                strokeDashoffset: 14
              }} animate={{
                strokeDashoffset: [14, -100]
              }} transition={{
                duration: 1.8,
                repeat: 1 / 0,
                repeatDelay: 1.6,
                delay: t.delay,
                ease: "easeIn"
              }} className="text-neutral-900 dark:text-white" />}<circle cx={t.pad[0]} cy={t.pad[1]} r={2.5} className="fill-neutral-300 dark:fill-neutral-700" /></g>)}</svg><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"><div className="relative flex items-center justify-center rounded-[18px] border border-neutral-300 bg-gradient-to-br from-neutral-100 via-white to-neutral-200 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-neutral-700 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 dark:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)]" style={{
              width: 88,
              height: 88
            }}><div aria-hidden="true" className="absolute inset-[7px] rounded-[12px] bg-[linear-gradient(to_right,rgb(0_0_0/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.045)_1px,transparent_1px)] [background-size:8px_8px] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)]" /><div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-900 text-white shadow-[0_2px_6px_-2px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-neutral-700 dark:bg-white dark:text-neutral-900 dark:shadow-[0_2px_6px_-2px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"><Sparkles className="h-4 w-4" />{!e && <motion.span aria-hidden="true" animate={{
                  opacity: [.2, .7, .2]
                }} transition={{
                  duration: 2.4,
                  repeat: 1 / 0,
                  ease: "easeInOut"
                }} className="absolute inset-0 rounded-xl ring-1 ring-neutral-400/60 dark:ring-white/30" />}</div></div><div className="absolute left-1/2 top-full mt-4 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-medium tabular-nums text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"><span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-ping" /><span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>{v}% utilised</div></div>{m.map(t => {
            let a = t.icon;
            return <div {...c} className={`group/chip absolute ${t.className} [transform:translateZ(28px)]`}><motion.span animate={e ? void 0 : {
                y: [null, -5, 0]
              }} transition={{
                duration: 4.2,
                repeat: 1 / 0,
                delay: t.delay,
                ease: "easeInOut"
              }} className="pointer-events-none flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-[0_6px_16px_-8px_rgba(0,0,0,0.25)] transition-colors group-hover/chip:border-neutral-900 group-hover/chip:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:group-hover/chip:border-white dark:group-hover/chip:text-white"><a className="h-3 w-3 text-neutral-500 transition-colors group-hover/chip:text-inherit" />{t.label}</motion.span></div>;
          })}</motion.div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Run models privately</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Run inference on your own hardware, with room for the whole codebase and none of your data leaving the building.</p></div></article>;
}

export default g;
