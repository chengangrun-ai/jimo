import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Blog 10
 * Editorial archive with a topic rail
 * slug: blog-10
 * category: Blog
 * export: Blog10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/blog/blog-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let d = [.22, 1, .36, 1],
  u = ["All", "Operations", "Design systems", "Research", "Culture"],
  c = [{
    topic: "Research",
    title: "How we choose which customer stories deserve a full teardown",
    excerpt: "A framework for picking the right narrative, finding the transferable lesson, and keeping the piece useful long after launch week.",
    date: "Jul 08, 2026",
    readTime: "7 min read"
  }, {
    topic: "Operations",
    title: "The publishing checklist that ended our last-minute rewrites",
    excerpt: "Evidence, screenshots, ownership, accessibility: the pass we run on every draft before anything reaches the blog.",
    date: "Jun 28, 2026",
    readTime: "5 min read"
  }, {
    topic: "Design systems",
    title: "When a component note should graduate into documentation",
    excerpt: "The signals that tell us a pattern belongs in a release post, a migration guide, or the design system itself.",
    date: "Jun 15, 2026",
    readTime: "6 min read"
  }, {
    topic: "Culture",
    title: "Writing retrospectives people actually reread",
    excerpt: "A compact structure for turning one team's reflection into a durable source of better decisions months later.",
    date: "May 30, 2026",
    readTime: "4 min read"
  }];
function Blog10() {
  let e = (0, __mod_50969.I)(),
    [t, r] = (0, React.useState)("All"),
    h = (0, React.useMemo)(() => "All" === t ? c : c.filter(e => e.topic === t), [t]),
    p = {
      hidden: {
        opacity: 0,
        y: 24 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: d
        }
      }
    },
    m = {
      hidden: {
        opacity: 0,
        y: 14 * !e
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .45,
          ease: d
        }
      }
    },
    f = {
      hover: {
        scale: e ? 1 : 1.04
      }
    },
    x = {
      hover: {
        x: 2 * !e,
        y: e ? 0 : -2
      }
    };
  return <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><motion.div variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .12
          }
        }
      }} initial="hidden" whileInView="visible" viewport={{
        once: !0,
        margin: "-80px"
      }} className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16"><motion.aside variants={p} className="lg:sticky lg:top-8 lg:self-start"><h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white text-balance">The archive</h2><p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">Long-form notes on how we run the studio, filed by the workstream behind each decision.</p><nav aria-label="Filter articles by topic" className="mt-8 flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">{u.map(e => <button onClick={() => r(e)} aria-pressed={t === e} className="group flex shrink-0 cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:hover:bg-neutral-900 dark:focus-visible:ring-white/30 lg:rounded-lg lg:px-2.5"><span className={`h-2 w-2 rounded-full border transition-colors ${t === e ? "border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white" : "border-neutral-300 group-hover:border-neutral-500 dark:border-neutral-600 dark:group-hover:border-neutral-400"}`} /><span className={`transition-colors ${t === e ? "font-medium text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"}`}>{e}</span></button>)}</nav></motion.aside><motion.div variants={p} className="min-w-0"><div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800"><__mod_47962.N mode="wait" initial={!1}><motion.div variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: .06
                  }
                }
              }} initial="hidden" animate="visible" exit={{
                opacity: 0,
                transition: {
                  duration: .15
                }
              }} className="divide-y divide-neutral-200 dark:divide-neutral-800">{h.map(e => <motion.a href="#" variants={m} whileHover="hover" className="group grid grid-cols-1 bg-white transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-900/20 dark:bg-neutral-950 dark:hover:bg-neutral-900/60 dark:focus-visible:ring-white/30 md:grid-cols-[1fr_38%]"><div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-900 sm:h-64 md:order-2 md:h-auto md:min-h-[300px]"><motion.img src="/svg/placeholder.svg" alt="" loading="lazy" variants={f} transition={{
                      duration: .45,
                      ease: d
                    }} className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex flex-col p-6 sm:p-8 md:order-1 lg:p-10"><div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-500"><span className="rounded-full bg-neutral-100 px-2.5 py-1 font-medium text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300">{e.topic}</span><span>{e.date}</span><span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span>{e.readTime}</span></div><h3 className="mt-8 max-w-2xl text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300 text-balance md:mt-14">{e.title}</h3><p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2">{e.excerpt}</p><div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">Read article<motion.span variants={x} transition={{
                        duration: .2,
                        ease: d
                      }} className="inline-flex"><ArrowUpRight className="h-4 w-4" /></motion.span></div></div></motion.a>)}</motion.div></__mod_47962.N></div></motion.div></motion.div></div></section>;
}

export default Blog10;
