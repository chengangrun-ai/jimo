import { motion, AnimatePresence } from "motion/react";
import { Database, Layers, LayoutTemplate, Server } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 16
 * Layer stack that spreads on hover
 * slug: bento-16
 * category: Bento
 * export: Bento16
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-16.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    label: "Data",
    icon: Database,
    meta: "Postgres \xb7 3 replicas"
  }, {
    label: "API",
    icon: Server,
    meta: "Edge \xb7 18 routes"
  }, {
    label: "Interface",
    icon: LayoutTemplate,
    meta: "React \xb7 live preview"
  }],
  m = [.22, 1, .36, 1];
function b() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(!1),
    [c, u] = (0, React.useState)(null),
    [x, b] = (0, React.useState)(!1),
    f = (0, __mod_75272.d)(0),
    g = (0, __mod_75272.d)(0),
    w = (0, __mod_17192.z)((0, __mod_32923.G)(g, [-.5, .5], [8, -8]), {
      stiffness: 160,
      damping: 18
    }),
    k = (0, __mod_17192.z)((0, __mod_32923.G)(f, [-.5, .5], [-10, 10]), {
      stiffness: 160,
      damping: 18
    }),
    v = t ? 48 : 26,
    y = 154;
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
        ease: m
      }} onPointerMove={t => {
        if (e || x) return;
        let a = t.currentTarget.getBoundingClientRect();
        f.set((t.clientX - a.left) / a.width - .5), g.set((t.clientY - a.top) / a.height - .5);
      }} onPointerEnter={() => a(!0)} onPointerLeave={() => {
        b(!1), f.set(0), g.set(0), a(!1), u(null);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: w,
          rotateY: k,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible">{p.map((e, t) => {
              let a = y - t * v,
                n = (c ?? p.length - 1) === t;
              return <motion.g initial={!1} animate={{
                y: a - y
              }} transition={{
                duration: .55,
                ease: m
              }} onMouseEnter={() => u(t)} onPointerEnter={() => b(!0)} onPointerLeave={() => b(!1)}><path d={`M${56} ${y} L120 ${y + 32} V${y + 32 + 10} L${56} ${y + 10} Z`} className={n ? "fill-neutral-700 dark:fill-neutral-300" : "fill-neutral-300 dark:fill-neutral-700"} /><path d={`M120 ${y + 32} L${184} ${y} V${y + 10} L120 ${y + 32 + 10} Z`} className={n ? "fill-neutral-800 dark:fill-neutral-200" : "fill-neutral-200 dark:fill-neutral-800"} /><path d={`M120 ${y - 32} L${184} ${y} L120 ${y + 32} L${56} ${y} Z`} strokeWidth={1} className={`transition-colors duration-300 ${n ? "fill-neutral-900 stroke-neutral-900 dark:fill-white dark:stroke-white" : "fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"}`} />{[-1, 0, 1].map(e => <line x1={56 + 32 * (e + 1)} y1={y - 16 * (e + 1)} x2={120 + 32 * (e + 1)} y2={y + 32 - 16 * (e + 1)} stroke="currentColor" strokeWidth={.75} className={n ? "text-white/20 dark:text-neutral-900/20" : "text-neutral-200 dark:text-neutral-800"} />)}<e.icon x={113} y={y - 7} width={14} height={14} strokeWidth={2} className={n ? "text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400"} /></motion.g>;
            })}</svg>{p.map((e, a) => {
            let n = c === a;
            return <motion.span initial={!1} animate={{
              top: y - a * v - 10,
              opacity: t || n ? 1 : .55
            }} transition={{
              duration: .55,
              ease: m
            }} style={{
              translateZ: 22
            }} className={`pointer-events-none absolute -right-8 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium shadow-sm transition-colors duration-200 ${n ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"}`}>{e.label}</motion.span>;
          })}<motion.span initial={!1} animate={{
            opacity: +(null !== c),
            y: 4 * (null === c)
          }} transition={{
            duration: .2
          }} style={{
            translateZ: 30
          }} className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-medium text-white shadow-sm dark:bg-white dark:text-neutral-900">{null === c ? "" : p[c].meta}</motion.span><motion.span animate={e ? void 0 : {
            y: [0, -5, 0]
          }} transition={{
            duration: 4.2,
            repeat: 1 / 0,
            ease: "easeInOut"
          }} style={{
            translateZ: 22
          }} className="absolute left-[2%] top-[10%] inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"><Layers className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />One deploy</motion.span></motion.div></motion.div><div className="absolute left-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block"><p className="text-[11px] font-medium text-neutral-500">One connected stack</p><p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">From the database to the interface, every layer shares one release.</p><span className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-neutral-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />All layers in sync</span></div><div className="absolute right-6 top-1/2 hidden w-[148px] -translate-y-1/2 @2xl:block">{p.map((e, t) => <button type="button" onPointerEnter={() => {
          u(t), a(!0);
        }} onPointerLeave={() => {
          u(null), a(!1);
        }} onFocus={() => {
          u(t), a(!0);
        }} onBlur={() => {
          u(null), a(!1);
        }} onClick={() => {
          u(t), a(!0);
        }} className="flex w-full cursor-pointer items-start gap-2 rounded-md p-2 text-left transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800"><e.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-500" /><span><span className="block text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{e.label}</span><span className="mt-0.5 block text-[10px] text-neutral-500">{e.meta}</span></span></button>)}</div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Every layer, one platform</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Interface, API and data ship together from a single repo, with the same preview link for all three.</p></div></article>;
}

export default b;
