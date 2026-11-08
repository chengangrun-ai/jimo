import { motion, AnimatePresence } from "motion/react";
import { Activity, Server } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 15
 * Cloud feeding three regional servers
 * slug: bento-15
 * category: Bento
 * export: Bento15
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-15.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
    x: 78,
    label: "eu-1"
  }, {
    x: 120,
    label: "us-2"
  }, {
    x: 162,
    label: "ap-1"
  }],
  h = [{
    label: "Auto-scale",
    icon: Activity,
    className: "left-[2%] top-[12%]",
    delay: 0
  }, {
    label: "3 regions",
    icon: Server,
    className: "right-[2%] top-[22%]",
    delay: 1.4
  }],
  m = [24, 36, 28, 48, 40, 60, 52, 76, 64, 88, 80, 100],
  p = [.22, 1, .36, 1];
function f() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(null),
    [u, x] = (0, React.useState)(!1),
    f = (0, __mod_75272.d)(0),
    b = (0, __mod_75272.d)(0),
    k = (0, __mod_17192.z)((0, __mod_32923.G)(b, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    g = (0, __mod_17192.z)((0, __mod_32923.G)(f, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    });
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
        ease: p
      }} onPointerMove={t => {
        if (e || u) return;
        let a = t.currentTarget.getBoundingClientRect();
        f.set((t.clientX - a.left) / a.width - .5), b.set((t.clientY - a.top) / a.height - .5);
      }} onPointerLeave={() => {
        x(!1), f.set(0), b.set(0), a(null);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: k,
          rotateY: g,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><path d={`M120 140 V160 M${c[0].x} 160 H${c[2].x}`} fill="none" stroke="currentColor" strokeWidth={1} className="text-neutral-300 dark:text-neutral-700" />{!e && <motion.line x1={120} y1={140} x2={120} y2={160} stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" pathLength={100} strokeDasharray="30 70" animate={{
              strokeDashoffset: [100, 0]
            }} transition={{
              duration: 1.2,
              repeat: 1 / 0,
              ease: "linear"
            }} className="text-neutral-900 dark:text-white" />}{c.map((r, s) => {
              let n = t === s;
              return <g><line x1={r.x} y1={160} x2={r.x} y2={186} stroke="currentColor" strokeWidth={n ? 1.5 : 1} className={`transition-colors duration-300 ${n ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-700"}`} />{!e && <motion.line x1={r.x} y1={160} x2={r.x} y2={186} stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" pathLength={100} strokeDasharray="22 78" animate={{
                  strokeDashoffset: [100, 0]
                }} transition={{
                  duration: 1.6,
                  repeat: 1 / 0,
                  ease: "linear",
                  delay: .5 * s,
                  repeatDelay: .4
                }} className="text-neutral-900 dark:text-white" />}<g onMouseEnter={() => a(s)} onPointerEnter={() => x(!0)} onPointerLeave={() => x(!1)}><rect x={r.x - 16} y={186} width={32} height={28} rx={6} strokeWidth={1.25} className={`transition-colors duration-300 ${n ? "fill-neutral-900 stroke-neutral-900 dark:fill-white dark:stroke-white" : "fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"}`} />{[0, 1, 2].map(e => <rect x={r.x - 10} y={192 + 6 * e} width={2 === e ? 8 : 20} height={2.5} rx={1.25} className={n ? "fill-white/70 dark:fill-neutral-900/70" : "fill-neutral-200 dark:fill-neutral-800"} />)}<circle cx={r.x + 9} cy={205.5} r={1.75} className="fill-emerald-500" /><text x={r.x} y={226} textAnchor="middle" fontSize={7.5} fontWeight={500} className="fill-neutral-500">{r.label}</text></g></g>;
            })}<path d="M90 140 H150 A24 24 0 0 0 151.4 92 A32 32 0 0 0 88.6 92 A24 24 0 0 0 90 140 Z" strokeWidth={1.25} className="fill-neutral-100 stroke-neutral-300 dark:fill-neutral-800 dark:stroke-neutral-700" />{[0, 1, 2, 3, 4].map(t => <motion.rect x={104 + 8 * t} width={4} rx={1} initial={!1} animate={e ? {
              y: 106,
              height: 18
            } : {
              height: [10, 22, 14, 20, 10],
              y: [114, 102, 110, 104, 114]
            }} transition={{
              duration: 3.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: .25 * t
            }} className="fill-neutral-900 dark:fill-white" />)}</svg>{h.map(t => {
            let a = t.icon;
            return <motion.span animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: t.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${t.className}`}><a className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{t.label}</motion.span>;
          })}<motion.span initial={!1} animate={{
            opacity: +(null !== t),
            y: 4 * (null === t)
          }} transition={{
            duration: .2
          }} style={{
            translateZ: 30
          }} className="pointer-events-none absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-medium tabular-nums text-white shadow-sm dark:bg-white dark:text-neutral-900">{null === t ? "" : `${c[t].label} \xb7 4 instances \xb7 31% load`}</motion.span></motion.div></motion.div><div className="absolute left-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block"><p className="text-[11px] font-medium text-neutral-500">Requests per minute</p><p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">12,840</p><div className="mt-3 flex h-10 items-end gap-1" aria-hidden="true">{m.map((e, t) => <span className="flex-1 rounded-t-sm bg-neutral-200 dark:bg-neutral-700" style={{
            height: `${e}%`
          }} />)}</div><p className="mt-2 text-[11px] text-neutral-500">Capacity adjusts in real time</p></div><div className="absolute right-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block"><p className="mb-2 text-[11px] font-medium text-neutral-500">Region health</p>{c.map((e, t) => <button type="button" onPointerEnter={() => a(t)} onPointerLeave={() => a(null)} onFocus={() => a(t)} onBlur={() => a(null)} onClick={() => a(t)} className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-2 text-[11px] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800"><span className="font-medium text-neutral-700 dark:text-neutral-300">{e.label}</span><span className="inline-flex items-center gap-1.5 text-neutral-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Healthy</span></button>)}</div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Scales while you sleep</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Capacity follows traffic across regions automatically, and you only pay for the minutes you actually used.</p></div></article>;
}

export default f;
