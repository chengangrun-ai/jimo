import { motion, AnimatePresence } from "motion/react";
import { Archive, BellOff, Sparkles } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_32923 from "../_helpers/32923";
/**
 * Bento 13
 * Envelope that fans out letters on hover
 * slug: bento-13
 * category: Bento
 * export: Bento13
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-13.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = `M48 ${102} L${120} ${44} L${192} ${102} Z`,
  m = [{
    label: "3 need a reply",
    icon: Sparkles,
    className: "-left-8 top-[8%]",
    delay: 0
  }, {
    label: "Archived 12",
    icon: Archive,
    className: "-right-10 top-[26%]",
    delay: 1.3
  }, {
    label: "Muted",
    icon: BellOff,
    className: "-left-4 bottom-[10%]",
    delay: 2.4
  }],
  p = [{
    from: "Priya",
    subject: "Q3 numbers are in",
    z: 0
  }, {
    from: "Design",
    subject: "Onboarding v2 review",
    z: 1
  }, {
    from: "Kai",
    subject: "Re: pricing page copy",
    z: 2
  }],
  b = [.22, 1, .36, 1];
function f() {
  let e = (0, React.useRef)(null),
    [t, a] = (0, React.useState)(!1),
    [u, c] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let t = e.current;
    if (!t) return;
    let r = new ResizeObserver(([e]) => {
      a(e.contentRect.height >= 440 && e.contentRect.width >= 430), c(e.contentRect.height >= 440 && e.contentRect.width >= 820);
    });
    return r.observe(t), () => r.disconnect();
  }, []);
  let x = !!(0, __mod_50969.I)(),
    [f, k] = (0, React.useState)(!1),
    g = (0, __mod_75272.d)(0),
    j = (0, __mod_75272.d)(0),
    w = (0, __mod_17192.z)((0, __mod_32923.G)(j, [-.5, .5], [10, -10]), {
      stiffness: 160,
      damping: 18
    }),
    N = (0, __mod_17192.z)((0, __mod_32923.G)(g, [-.5, .5], [-12, 12]), {
      stiffness: 160,
      damping: 18
    });
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><div ref={e} className="@container relative min-h-[220px] flex-1 overflow-hidden"><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]" /><motion.div initial={{
        opacity: 0,
        y: 12 * !x
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
        if (x) return;
        let t = e.currentTarget.getBoundingClientRect();
        g.set((e.clientX - t.left) / t.width - .5), j.set((e.clientY - t.top) / t.height - .5);
      }} onPointerEnter={() => k(!0)} onPointerLeave={() => {
        g.set(0), j.set(0), k(!1);
      }} className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"><motion.div style={{
          rotateX: w,
          rotateY: N,
          width: t ? 312 : 240,
          height: t ? 312 : 240
        }} className="relative max-w-full shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"><div aria-hidden="true" className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700" /><div aria-hidden="true" className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]" /><svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible"><path d={h} strokeWidth={1.25} className="fill-neutral-50 stroke-neutral-300 dark:fill-neutral-900 dark:stroke-neutral-700" /><rect x={48} y={96} width={144} height={96} rx={10} strokeWidth={1.25} className="fill-neutral-100 stroke-neutral-300 dark:fill-neutral-800 dark:stroke-neutral-700" />{p.map((e, t) => {
              let a;
              return <motion.g initial={!1} animate={{
                y: x ? -50 - 6 * t : (a = e.z, f ? -80 - 8 * a : -34 - 6 * a),
                x: f ? (t - 1) * 14 : 0,
                rotate: f ? (t - 1) * 5 : 0
              }} transition={{
                duration: .6,
                ease: b
              }} style={{
                originX: .5,
                originY: 1
              }}><rect x={64} y={114} width={112} height={72} rx={6} strokeWidth={1} className="fill-white stroke-neutral-200 dark:fill-neutral-950 dark:stroke-neutral-800" /><text x={74} y={130} fontSize={8.5} fontWeight={600} className="fill-neutral-900 dark:fill-white">{e.from}</text><text x={74} y={142} fontSize={7.5} className="fill-neutral-500">{e.subject}</text><rect x={74} y={150} width={70} height={3} rx={1.5} className="fill-neutral-200 dark:fill-neutral-800" /><rect x={74} y={157} width={48} height={3} rx={1.5} className="fill-neutral-200 dark:fill-neutral-800" /></motion.g>;
            })}<path d={`M48 ${124} L${120} ${166} L${192} ${124} V${182} a10 10 0 0 1 -10 10 H${58} a10 10 0 0 1 -10 -10 Z`} strokeWidth={1.25} className="fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700" /></svg>{m.map(e => {
            let t = e.icon;
            return <motion.span animate={x ? void 0 : {
              y: [0, -5, 0]
            }} transition={{
              duration: 4.2,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: e.delay
            }} style={{
              translateZ: 22
            }} className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 ${e.className}`}><t className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />{e.label}</motion.span>;
          })}<motion.span initial={{
            scale: x ? 1 : .6,
            opacity: +!!x
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} viewport={{
            once: !0
          }} transition={{
            duration: .5,
            delay: .5,
            ease: b
          }} style={{
            translateZ: 30
          }} className="absolute right-[14%] top-[40%] flex h-7 min-w-7 items-center justify-center rounded-full border-[3px] border-white bg-neutral-900 px-1.5 text-[10px] font-semibold tabular-nums text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] dark:border-neutral-900 dark:bg-white dark:text-neutral-900 dark:shadow-none">3</motion.span></motion.div></motion.div>{u && <><div className="pointer-events-none absolute left-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Needs your reply</p><div className="mt-3 space-y-3">{p.map(e => <div className="border-t border-neutral-100 pt-2 dark:border-neutral-800"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{e.from}</p><p className="mt-1 text-[11px] leading-relaxed text-neutral-500">{e.subject}</p></div>)}</div></div><div className="pointer-events-none absolute right-6 top-1/2 w-[156px] -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">Handled quietly</p><div className="mt-3 space-y-3 text-[11px]"><div className="flex justify-between"><span className="text-neutral-500">Newsletters filed</span><span className="tabular-nums text-neutral-700 dark:text-neutral-300">12</span></div><div className="flex justify-between"><span className="text-neutral-500">Threads muted</span><span className="tabular-nums text-neutral-700 dark:text-neutral-300">8</span></div><div className="flex justify-between"><span className="text-neutral-500">Duplicates removed</span><span className="tabular-nums text-neutral-700 dark:text-neutral-300">4</span></div></div><p className="mt-4 border-t border-neutral-200 pt-3 text-[11px] leading-relaxed text-neutral-500 dark:border-neutral-800">Only the conversations that need you reach the top.</p></div></>}</div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">An inbox that sorts itself</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Replies that matter float to the top, newsletters file themselves, and nothing pings you twice.</p></div></article>;
}

export default f;
