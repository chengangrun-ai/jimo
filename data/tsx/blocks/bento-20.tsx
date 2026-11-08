import { motion, AnimatePresence } from "motion/react";
import { GitBranch, Rocket, Tag } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 20
 * Rocket launch with a live exhaust plume
 * slug: bento-20
 * category: Bento
 * export: Bento20
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-20.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let p = [{
    x: 96,
    y1: 60,
    y2: 96,
    delay: 0
  }, {
    x: 146,
    y1: 84,
    y2: 128,
    delay: .5
  }, {
    x: 90,
    y1: 128,
    y2: 160,
    delay: .9
  }, {
    x: 154,
    y1: 40,
    y2: 70,
    delay: .3
  }],
  h = [{
    label: "v2.4.0",
    icon: Tag,
    className: "-left-6 top-[14%]",
    delay: 0
  }, {
    label: "main",
    icon: GitBranch,
    className: "-right-6 top-[34%]",
    delay: 1.4
  }],
  m = [.22, 1, .36, 1];
function k() {
  let e = !!(0, __mod_50969.I)(),
    [a, t] = (0, React.useState)(!1),
    u = (0, __mod_75272.d)(0),
    x = (0, __mod_75272.d)(0),
    k = (0, __mod_17192.z)((0, __mod_32923.G)(x, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    y = (0, __mod_17192.z)((0, __mod_32923.G)(u, [-.5, .5], [-12, 12]), {
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
        ease: m
      }} onPointerMove={a => {
        if (e) return;
        let t = a.currentTarget.getBoundingClientRect();
        u.set((a.clientX - t.left) / t.width - .5), x.set((a.clientY - t.top) / t.height - .5);
      }} onPointerEnter={() => t(!0)} onPointerLeave={() => {
        u.set(0), x.set(0), t(!1);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: k,
          rotateY: y,
          width: 240,
          height: 240
        }} className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><motion.div aria-hidden="true" initial={!1} animate={{
            opacity: a ? 1 : .6,
            scale: a ? 1.15 : 1
          }} transition={{
            duration: .6
          }} className="absolute inset-[34px] rounded-full bg-neutral-900/[0.05] blur-2xl dark:bg-white/[0.07]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><line x1={40} y1={200} x2={200} y2={40} stroke="currentColor" strokeDasharray="3 6" className="text-neutral-200 dark:text-neutral-800" /><g transform="rotate(32 120 120)">{p.map(t => <motion.line x1={t.x} x2={t.x} y1={t.y1} y2={t.y2} stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" initial={!1} animate={e ? {
                opacity: 0
              } : a ? {
                opacity: [0, .7, 0],
                y: [-16, 40]
              } : {
                opacity: 0,
                y: -16
              }} transition={{
                duration: .7,
                repeat: 1 / 0,
                ease: "easeIn",
                delay: t.delay
              }} className="text-neutral-400 dark:text-neutral-500" />)}<motion.g initial={!1} animate={e ? {
                y: 0
              } : a ? {
                y: -22
              } : {
                y: [null, -5, 0]
              }} transition={a ? {
                duration: .6,
                ease: m
              } : {
                duration: 3.6,
                repeat: 1 / 0,
                ease: "easeInOut"
              }}>{[{
                  x: 120,
                  len: 34,
                  w: 3,
                  o: .9
                }, {
                  x: 115,
                  len: 22,
                  w: 1.5,
                  o: .5
                }, {
                  x: 125,
                  len: 26,
                  w: 1.5,
                  o: .5
                }].map((t, r) => <motion.line x1={t.x} x2={t.x} y1={166} y2={166 + t.len} stroke="currentColor" strokeWidth={t.w} strokeLinecap="round" initial={!1} animate={e ? {
                  opacity: t.o,
                  scaleY: 1
                } : {
                  scaleY: a ? [null, 2.2, 1.6, 1.4] : [null, 1.1, .7, .9],
                  opacity: a ? [null, 1, t.o, 1] : [null, t.o, .5 * t.o, .8 * t.o]
                }} transition={{
                  duration: a ? .35 : 1.1,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                  delay: .1 * r
                }} style={{
                  originX: `${t.x}px`,
                  originY: "166px"
                }} className="text-neutral-900 dark:text-white" />)}<path d="M107 116 L88 148 L92 160 L107 146 Z" strokeWidth={1} className="fill-neutral-200 stroke-neutral-400 dark:fill-neutral-800 dark:stroke-neutral-600" /><path d="M133 116 L152 148 L148 160 L133 146 Z" strokeWidth={1} className="fill-neutral-200 stroke-neutral-400 dark:fill-neutral-800 dark:stroke-neutral-600" /><path d="M120 34 C127 48 133 64 133 84 V138 L129 154 H111 L107 138 V84 C107 64 113 48 120 34 Z" strokeWidth={1.25} className="fill-white stroke-neutral-400 dark:fill-neutral-950 dark:stroke-neutral-600" /><path d="M126 84 V138 L124 152 H129 L133 138 V84 C133 76 131 68 128 60 C129 68 127 76 126 84 Z" className="fill-neutral-100 dark:fill-neutral-800" /><path d="M120 34 C127 48 132 62 133 80 H107 C108 62 113 48 120 34 Z" className="fill-neutral-900 dark:fill-white" />{[96, 130].map(e => <line x1={107.5} x2={132.5} y1={e} y2={e} stroke="currentColor" strokeWidth={.75} className="text-neutral-300 dark:text-neutral-700" />)}<circle cx={120} cy={110} r={6.5} strokeWidth={2} className="fill-neutral-100 stroke-neutral-900 dark:fill-neutral-800 dark:stroke-white" /><circle cx={118.5} cy={108.5} r={1.75} className="fill-white dark:fill-neutral-500" /><path d="M112 154 H128 L131 164 H109 Z" className="fill-neutral-900 dark:fill-white" /></motion.g></g></svg>{h.map(a => {
            let t = a.icon;
            return <motion.span animate={e ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: a.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${a.className}`}><t className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{a.label}</motion.span>;
          })}<motion.span initial={!1} animate={{
            opacity: 1,
            y: 0
          }} style={{
            translateZ: 30
          }} className="absolute bottom-[4%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] dark:bg-white dark:text-neutral-900 dark:shadow-none"><Rocket className="h-3 w-3" />{a ? "Deploying…" : "Deployed in 38s"}</motion.span></motion.div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Ship in seconds</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Push to main and a production build, preview link and rollback point are live before your coffee cools.</p></div></article>;
}

export default k;
