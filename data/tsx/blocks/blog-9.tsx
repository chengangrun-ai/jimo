import { ArrowUpRight } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Blog 9
 * Poster-style journal teaser
 * slug: blog-9
 * category: Blog
 * export: Blog9
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/blog/blog-9.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let n = [.22, 1, .36, 1],
  o = [{
    label: "Craft",
    title: "Rebuilding our motion system, one easing curve at a time",
    excerpt: "Why we retired every spring in the product and replaced them with a single, calmer easing language.",
    date: "Jul 02, 2026",
    readTime: "6 min read"
  }, {
    label: "Process",
    title: "Inside the review room where templates earn a release",
    excerpt: "The four passes we run for spacing, responsiveness, accessibility, and motion before anything ships.",
    date: "Jun 20, 2026",
    readTime: "4 min read"
  }, {
    label: "Field notes",
    title: "Why our sharpest prototypes start with fewer options",
    excerpt: "Reducing choices early makes the final interface feel more considered, not smaller. A note on constraints.",
    date: "Jun 09, 2026",
    readTime: "5 min read"
  }];
function Blog9() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .1
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
    d = {
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
      }}><motion.div variants={a} className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10"><div className="max-w-2xl"><h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white text-balance">New from the studio</h2><p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 text-pretty">Three recent essays on the decisions behind the interface: what shipped, what stalled, and what we'd do differently.</p></div><a href="#" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:focus-visible:ring-white/30 sm:w-auto">All posts<ArrowUpRight className="h-4 w-4" /></a></motion.div><motion.div variants={t} className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">{o.map(e => <motion.a href="#" variants={a} whileHover="hover" className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:focus-visible:ring-white/30"><div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"><motion.img src="/svg/placeholder.svg" alt="" loading="lazy" variants={d} transition={{
                duration: .45,
                ease: n
              }} className="h-full w-full object-cover" /><div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/70 bg-white/90 p-3.5 backdrop-blur dark:border-white/10 dark:bg-neutral-950/85"><span className="min-w-0 truncate text-sm font-medium text-neutral-900 dark:text-white">{e.label}</span><motion.span variants={c} transition={{
                  duration: .2,
                  ease: n
                }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"><ArrowUpRight className="h-4 w-4" /></motion.span></div></div><div className="mt-6 flex items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-500"><span>{e.date}</span><span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" /><span>{e.readTime}</span></div><h3 className="mt-3 text-xl lg:text-2xl font-medium leading-snug tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300 text-balance">{e.title}</h3><p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2">{e.excerpt}</p></motion.a>)}</motion.div></motion.div></div></section>;
}

export default Blog9;
