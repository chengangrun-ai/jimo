import { ArrowRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * CTA 12
 * Launch CTA over a blueprint grid
 * slug: cta-12
 * category: Call To Action
 * export: CTA12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/cta/cta-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = "npx atlas init",
  c = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .09,
        delayChildren: .1
      }
    }
  },
  u = {
    hidden: {
      opacity: 0,
      y: 18
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  m = {
    hover: {
      x: 3,
      transition: {
        duration: .2,
        ease: [.22, 1, .36, 1]
      }
    }
  };
function x() {
  let e = (0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(0),
    x = (0, React.useRef)(!1),
    h = e ? d.length : t,
    p = h < d.length;
  return <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:bg-neutral-950"><div aria-hidden="true" className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.06)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_50%,transparent_25%,black_80%)] dark:[background-image:linear-gradient(to_right,rgba(245,245,245,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,245,245,0.05)_1px,transparent_1px)]" /><div className="relative mx-auto w-full max-w-[1400px]"><div className="relative"><div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60"><motion.div variants={c} initial="hidden" whileInView="show" onViewportEnter={() => {
            if (x.current || e) return;
            x.current = !0;
            let t = 0,
              r = () => {
                a(t += 1), t < d.length && window.setTimeout(r, 90 + 70 * Math.random());
              };
            window.setTimeout(r, 450);
          }} viewport={{
            once: !0,
            margin: "-80px"
          }} className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center sm:px-10 sm:py-28"><motion.div variants={u} className="flex items-center gap-4"><span aria-hidden="true" className="hidden font-mono text-sm text-neutral-300 sm:block dark:text-neutral-700">//</span><span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"><Terminal className="h-4 w-4 text-neutral-900 dark:text-white" />Start building</span><span aria-hidden="true" className="hidden font-mono text-sm text-neutral-300 sm:block dark:text-neutral-700">\\</span></motion.div><motion.h2 variants={u} className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-white">Ready when you are.</motion.h2><motion.p variants={u} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">Create a project and make your first call to the Atlas API in under a minute. 10,000 requests a month on the free tier: no credit card, no expiry.</motion.p><motion.div variants={u} className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><motion.a href="#" whileHover="hover" whileTap={{
                scale: .98
              }} transition={{
                duration: .2,
                ease: [.22, 1, .36, 1]
              }} className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 sm:w-auto dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900">Create free account<motion.span variants={m} className="flex"><ArrowRight className="h-4 w-4" aria-hidden="true" /></motion.span></motion.a><motion.a href="#" whileTap={{
                scale: .98
              }} transition={{
                duration: .2,
                ease: [.22, 1, .36, 1]
              }} className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 sm:w-auto dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900">Compare plans</motion.a></motion.div><motion.div variants={u} className="mt-10 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2.5 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400"><span className="text-neutral-400 dark:text-neutral-600">$</span><span className="whitespace-pre text-neutral-900 dark:text-neutral-100">{d.slice(0, h)}</span><motion.span aria-hidden="true" animate={e || p ? {
                opacity: 1
              } : {
                opacity: [1, 1, 0, 0]
              }} transition={e || p ? {
                duration: 0
              } : {
                duration: 1.1,
                repeat: 1 / 0,
                times: [0, .5, .5, 1],
                ease: "linear"
              }} className="-ml-1 h-3.5 w-[7px] bg-neutral-900 dark:bg-neutral-100" /></motion.div></motion.div></div></div></div></section>;
}

export default x;
