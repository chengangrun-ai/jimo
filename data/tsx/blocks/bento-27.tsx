import { motion, AnimatePresence } from "motion/react";
import { MousePointer2 } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
/**
 * Bento 27
 * Multiplayer canvas with named cursors
 * slug: bento-27
 * category: Bento
 * export: Bento27
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-27.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = [{
    name: "Maya",
    photo: "45",
    path: [{
      x: 18,
      y: 30
    }, {
      x: 40,
      y: 22
    }, {
      x: 62,
      y: 46
    }, {
      x: 30,
      y: 62
    }, {
      x: 18,
      y: 30
    }],
    duration: 14
  }, {
    name: "Kai",
    photo: "68",
    path: [{
      x: 72,
      y: 66
    }, {
      x: 56,
      y: 76
    }, {
      x: 80,
      y: 30
    }, {
      x: 88,
      y: 58
    }, {
      x: 72,
      y: 66
    }],
    duration: 17
  }, {
    name: "Priya",
    photo: "47",
    path: [{
      x: 44,
      y: 78
    }, {
      x: 24,
      y: 70
    }, {
      x: 48,
      y: 40
    }, {
      x: 66,
      y: 74
    }, {
      x: 44,
      y: 78
    }],
    duration: 12
  }],
  c = [{
    x: 14,
    y: 22,
    w: 22,
    h: 26,
    r: "rounded-lg"
  }, {
    x: 42,
    y: 18,
    w: 34,
    h: 18,
    r: "rounded-md"
  }, {
    x: 48,
    y: 46,
    w: 22,
    h: 30,
    r: "rounded-lg"
  }, {
    x: 16,
    y: 58,
    w: 26,
    h: 20,
    r: "rounded-lg"
  }, {
    x: 74,
    y: 44,
    w: 16,
    h: 36,
    r: "rounded-md"
  }],
  p = [.22, 1, .36, 1];
function h() {
  let e = !!(0, __mod_50969.I)(),
    [t, r] = (0, React.useState)(!1),
    h = (0, __mod_75272.d)(0),
    x = (0, __mod_75272.d)(0),
    f = (0, __mod_17192.z)(h, {
      stiffness: 400,
      damping: 40
    }),
    m = (0, __mod_17192.z)(x, {
      stiffness: 400,
      damping: 40
    }),
    b = e => {
      let t = e.currentTarget.getBoundingClientRect();
      h.set(e.clientX - t.left), x.set(e.clientY - t.top);
    };
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0,
        y: 16 * !e
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .7,
        ease: p
      }} className="absolute inset-x-3 top-3 flex min-h-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"><div className="flex items-center justify-between border-b border-neutral-100 px-3.5 py-2 dark:border-neutral-800/80"><span className="text-[11px] font-semibold text-neutral-900 dark:text-white">Homepage v3</span><div className="flex items-center"><span className="flex -space-x-1.5">{u.map(e => <span className="block h-5 w-5 overflow-hidden rounded-full border-2 border-white dark:border-neutral-950"><img src={`https://i.pravatar.cc/80?img=${e.photo}`} alt={e.name} loading="lazy" className="h-full w-full object-cover" /></span>)}{t && <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-[8px] font-semibold text-white dark:border-neutral-950 dark:bg-white dark:text-neutral-900">You</span>}</span><span className="ml-2 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white dark:text-neutral-900">Share</span></div></div><div onPointerMove={b} onPointerEnter={e => {
          b(e), r(!0);
        }} onPointerLeave={() => r(!1)} className="relative flex-1 cursor-none overflow-hidden bg-[radial-gradient(circle,rgb(0_0_0/0.09)_1px,transparent_1px)] [background-size:14px_14px] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.1)_1px,transparent_1px)]">{c.map((e, t) => <div aria-hidden="true" className={`absolute overflow-hidden border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 ${e.r}`} style={{
            left: `${e.x}%`,
            top: `${e.y}%`,
            width: `${e.w}%`,
            height: `${e.h}%`
          }}><span className="pointer-events-none absolute inset-[18%] flex flex-col justify-center gap-[6%]"><span className="block h-[10%] min-h-[3px] w-1/2 rounded-full bg-neutral-200 dark:bg-neutral-800" /><span className="block h-[10%] min-h-[3px] w-4/5 rounded-full bg-neutral-100 dark:bg-neutral-800/70" /></span></div>)}{u.map((t, r) => <motion.div initial={!1} animate={e ? {
            left: `${t.path[0].x}%`,
            top: `${t.path[0].y}%`
          } : {
            left: t.path.map(e => `${e.x}%`),
            top: t.path.map(e => `${e.y}%`)
          }} transition={{
            duration: t.duration,
            repeat: 1 / 0,
            ease: "easeInOut",
            delay: .7 * r
          }} className="pointer-events-none absolute z-10 text-neutral-500 dark:text-neutral-400"><MousePointer2 className="h-4 w-4 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" strokeWidth={1.5} stroke="white" /><span className="absolute left-3.5 top-3.5 flex items-center gap-1 whitespace-nowrap rounded-full border border-neutral-200 bg-white py-0.5 pl-0.5 pr-2 text-[10px] font-medium text-neutral-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"><span className="block h-3.5 w-3.5 overflow-hidden rounded-full ring-1 ring-white/60"><img src={`https://i.pravatar.cc/80?img=${t.photo}`} alt="" loading="lazy" className="h-full w-full object-cover" /></span>{t.name}</span></motion.div>)}<motion.div style={{
            x: e ? h : f,
            y: e ? x : m,
            opacity: +!!t
          }} className="pointer-events-none absolute left-0 top-0 z-20"><MousePointer2 className="h-4 w-4 fill-neutral-900 text-neutral-900 dark:fill-white dark:text-white" strokeWidth={1.75} /><span className="absolute left-3.5 top-3.5 whitespace-nowrap rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white dark:text-neutral-900">You</span></motion.div></div></motion.div><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900" /></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Design together, live</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Every cursor, selection and comment shows up for the whole team in real time, with no refresh and no version numbers.</p></div></article>;
}

export default h;
