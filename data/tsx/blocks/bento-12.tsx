import { motion, AnimatePresence } from "motion/react";
import { Earth, Zap } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 12
 * Globe with pulses between regions
 * slug: bento-12
 * category: Bento
 * export: Bento12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    name: "Frankfurt",
    ms: "12ms",
    x: 108,
    y: 88,
    chip: "-left-10 top-[22%]",
    delay: 0
  }, {
    name: "S\xe3o Paulo",
    ms: "54ms",
    x: 94,
    y: 154,
    chip: "-left-6 bottom-[8%]",
    delay: 1.4
  }, {
    name: "Tokyo",
    ms: "38ms",
    x: 170,
    y: 118,
    chip: "-right-10 top-[44%]",
    delay: 2.6
  }],
  h = {
    x: 120,
    y: 32
  },
  m = e => {
    let t = e.x < 120 ? -40 : 40;
    return `M${e.x} ${e.y} Q${(e.x + h.x) / 2 + t} ${(e.y + h.y) / 2 - 20} ${h.x} ${h.y}`;
  },
  p = [.22, 1, .36, 1];
function k() {
  let e = (0, React.useRef)(null),
    [t, r] = (0, React.useState)(!1),
    [k, b] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let t = e.current;
    if (!t) return;
    let a = new ResizeObserver(([e]) => {
      r(e.contentRect.height >= 440 && e.contentRect.width >= 430), b(e.contentRect.height >= 440 && e.contentRect.width >= 820);
    });
    return a.observe(t), () => a.disconnect();
  }, []);
  let f = !!(0, __mod_50969.I)(),
    [y, g] = (0, React.useState)(null),
    [w, j] = (0, React.useState)(!1),
    v = {
      onPointerEnter: () => j(!0),
      onPointerLeave: () => j(!1)
    },
    N = (0, __mod_75272.d)(0),
    _ = (0, __mod_75272.d)(0),
    $ = (0, __mod_17192.z)((0, __mod_32923.G)(_, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    C = (0, __mod_17192.z)((0, __mod_32923.G)(N, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    });
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={e} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !f
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: p
      }} onPointerMove={e => {
        if (f || w) return;
        let t = e.currentTarget.getBoundingClientRect();
        N.set((e.clientX - t.left) / t.width - .5), _.set((e.clientY - t.top) / t.height - .5);
      }} onPointerLeave={() => {
        N.set(0), _.set(0);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: $,
          rotateY: C,
          width: t ? 312 : 240,
          height: t ? 312 : 240
        }} className="relative max-w-full shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[10px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_70s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[40px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><circle cx={120} cy={120} r={88} className="fill-neutral-100 stroke-neutral-300 dark:fill-neutral-800 dark:stroke-neutral-700" strokeWidth={1.25} />{[.2, .55, .85].map(e => <ellipse cx={120} cy={120} rx={88 * e} ry={88} fill="none" stroke="currentColor" className="text-neutral-300 dark:text-neutral-700" />)}<line x1={120} y1={32} x2={120} y2={208} stroke="currentColor" className="text-neutral-300 dark:text-neutral-700" />{[-.6, -.3, 0, .3, .6].map(e => {
              let t = 120 + 88 * e,
                r = Math.sqrt(7744 - (88 * e) ** 2);
              return <line x1={120 - r} x2={120 + r} y1={t} y2={t} stroke="currentColor" className="text-neutral-300 dark:text-neutral-700" />;
            })}{c.map(e => {
              let t = y === e.name;
              return <g><path d={m(e)} fill="none" stroke="currentColor" strokeWidth={t ? 1.5 : 1} strokeDasharray={t ? void 0 : "3 3"} className={`transition-colors duration-300 ${t ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`} />{!f && <motion.path d={m(e)} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" pathLength={100} strokeDasharray="12 88" animate={{
                  strokeDashoffset: [100, 0]
                }} transition={{
                  duration: 2.6,
                  repeat: 1 / 0,
                  ease: "linear",
                  delay: .5 * e.delay
                }} className="text-neutral-900 dark:text-white" />}{!f && <motion.circle cx={e.x} cy={e.y} initial={{
                  r: 4,
                  opacity: .5
                }} animate={{
                  r: [4, 12],
                  opacity: [.5, 0]
                }} transition={{
                  duration: 2.2,
                  repeat: 1 / 0,
                  delay: .5 * e.delay,
                  ease: "easeOut"
                }} className="fill-neutral-900 dark:fill-white" />}<circle cx={e.x} cy={e.y} r={t ? 4.5 : 3.5} className="fill-neutral-900 stroke-white transition-all duration-300 dark:fill-white dark:stroke-neutral-950" strokeWidth={2} /></g>;
            })}<circle cx={h.x} cy={h.y} r={8} strokeWidth={3} className="fill-neutral-900 stroke-white dark:fill-white dark:stroke-neutral-900" /><Zap x={h.x - 4} y={h.y - 4} width={8} height={8} strokeWidth={2.5} className="text-white dark:text-neutral-900" /></svg>{c.map(e => {
            let t = y === e.name;
            return <button type="button" onClick={() => g(e.name)} onMouseEnter={() => g(e.name)} onMouseLeave={() => g(null)} onFocus={() => g(e.name)} onBlur={() => g(null)} {...v} className={`absolute cursor-pointer focus-visible:outline-none ${e.chip}`}><motion.span animate={f ? void 0 : {
                y: [0, -5, 0]
              }} transition={{
                duration: 4.2,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: e.delay
              }} className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium shadow-sm transition-colors duration-200 will-change-transform ${t ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"}`}><Earth className={`h-3 w-3 ${t ? "text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400"}`} />{e.name}<span className={`tabular-nums ${t ? "text-neutral-300 dark:text-neutral-500" : "text-neutral-400 dark:text-neutral-500"}`}>{e.ms}</span></motion.span></button>;
          })}</motion.div></motion.div>{k && <><div className="pointer-events-none absolute left-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Routing live</p><div className="mt-3 space-y-4">{c.map(e => <div><div className="flex items-center justify-between text-[11px]"><span className="text-neutral-600 dark:text-neutral-400">{e.name}</span><span className="tabular-nums text-neutral-900 dark:text-white">{e.ms}</span></div><div className="mt-1.5 h-1 rounded-full bg-neutral-100 dark:bg-neutral-800"><div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-600" style={{
                  width: `${100 - parseInt(e.ms)}%`
                }} /></div></div>)}</div></div><div className="pointer-events-none absolute right-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />All regions healthy</div><p className="mt-4 text-[11px] text-neutral-500">Requests this minute</p><p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">12,480</p><div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-3 text-[11px] dark:border-neutral-800"><span className="text-neutral-500">Cache hit rate</span><span className="tabular-nums text-neutral-700 dark:text-neutral-300">98.6%</span></div></div></>}</div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Close to every user</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Requests are served from the edge nearest your visitor, in 30 regions you never have to configure.</p></div></article>;
}

export default k;
