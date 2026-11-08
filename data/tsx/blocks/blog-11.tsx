import { ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Blog 11
 * Featured essay with a reading list
 * slug: blog-11
 * category: Blog
 * export: Blog11
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/blog/blog-11.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = [.22, 1, .36, 1],
  d = [{
    tag: "Guides",
    title: "A better brief for customer-facing launch posts",
    date: "Jul 07, 2026",
    readTime: "5 min read"
  }, {
    tag: "Notes",
    title: "What belongs above the fold in a changelog",
    date: "Jun 24, 2026",
    readTime: "4 min read"
  }, {
    tag: "Interviews",
    title: "Three teams, one release: a retro in three voices",
    date: "Jun 11, 2026",
    readTime: "6 min read"
  }, {
    tag: "Guides",
    title: "Screenshots that explain themselves",
    date: "May 29, 2026",
    readTime: "3 min read"
  }];
function Blog11() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .12
        }
      }
    },
    a = {
      hidden: {
        opacity: 0,
        y: 24 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: n
        }
      }
    },
    o = {
      hover: {
        scale: e ? 1 : 1.05
      }
    },
    c = {
      hover: {
        x: 2 * !e,
        y: e ? 0 : -2
      }
    };
  return <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div variants={t} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }}><motion.div variants={a} className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12"><div className="max-w-2xl"><h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white text-balance">Notes from the build</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">Essays on the systems, rituals, and small editorial decisions that keep product communication calm.</p></div><a href="#" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white/40 sm:w-auto">Browse the journal<ArrowUpRight className="h-4 w-4" /></a></motion.div><motion.div variants={t} className="mt-12 grid grid-cols-1 items-start gap-10 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"><motion.a href="#" variants={a} whileHover="hover" className="group block rounded-3xl border border-neutral-200 bg-neutral-50 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-visible:ring-white/30"><div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-950"><motion.img src="/svg/placeholder.svg" alt="" loading="lazy" variants={o} transition={{
                duration: .45,
                ease: n
              }} className="h-full w-full object-cover" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 shadow-sm backdrop-blur dark:bg-neutral-950/80 dark:text-white">Featured essay</span></div><div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-7"><div className="flex items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-500"><span>Jul 14, 2026</span><span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span>8 min read</span></div><h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300 text-balance">How we plan a month of product stories without losing the thread</h3><p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">A look inside the calendar, the review rituals, and the editorial constraints that keep publishing steady while product work accelerates.</p><div className="mt-8 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-[11px] font-semibold text-white dark:bg-white dark:text-neutral-900">MC</span><span className="flex flex-col"><span className="text-sm font-medium text-neutral-900 dark:text-white">Mara Chen</span><span className="text-xs text-neutral-500 dark:text-neutral-500">Editorial lead</span></span></div></div></motion.a><motion.div variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: .08
              }
            }
          }} className="lg:pt-2"><motion.p variants={a} className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">More this month</motion.p><div className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">{d.map(e => <motion.a href="#" variants={a} whileHover="hover" className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-900/20 dark:focus-visible:ring-white/30 sm:gap-5 sm:py-6"><div className="w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 sm:w-28"><div className="aspect-[4/3]"><motion.img src="/svg/placeholder.svg" alt="" loading="lazy" variants={o} transition={{
                      duration: .45,
                      ease: n
                    }} className="h-full w-full object-cover" /></div></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500"><span className="font-medium text-neutral-900 dark:text-white">{e.tag}</span><span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span>{e.date}</span><span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span>{e.readTime}</span></div><h3 className="mt-2 text-base sm:text-lg font-medium leading-snug tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300 line-clamp-2">{e.title}</h3></div><motion.span variants={c} transition={{
                  duration: .2,
                  ease: n
                }} className="inline-flex text-neutral-400 transition-colors group-hover:text-neutral-900 dark:text-neutral-600 dark:group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></motion.span></motion.a>)}</div></motion.div></motion.div></motion.div></div></section>;
}

export default Blog11;
