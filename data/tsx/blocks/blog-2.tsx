import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Blog 2
 * Recent posts with animated pagination
 * slug: blog-2
 * category: Blog
 * export: Blog2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/blog/blog-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
  id: 1,
  title: "7 best expense management software in December 2025",
  excerpt: "Expense management software helps streamline your finance operations. See our picks for today's best options...",
  date: "Dec 12",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop"
}, {
  id: 2,
  title: "The 7 best productivity alternatives in December 2025",
  excerpt: "Finding the right productivity tool is essential for modern teams. If you're looking for an alternative, see our...",
  date: "Dec 12",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop"
}, {
  id: 3,
  title: "What is a business card? How it works, key benefits, and best options for small businesses",
  excerpt: "A business card requires full monthly payment and has no preset limit. Learn how they work, key pros and cons,...",
  date: "Dec 12",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=150&fit=crop"
}, {
  id: 4,
  title: "The best instant or pre-approved business credit cards in December 2025",
  excerpt: "Discover the top instant or pre-approved business credit cards. Get the best options for business credit card...",
  date: "Dec 12",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=150&fit=crop"
}, {
  id: 5,
  title: "Economic order quantity (EOQ): Definition, formula, and examples",
  excerpt: "Economic order quantity (EOQ) is the optimal order quantity to minimize your total inventory costs. Learn how to...",
  date: "Dec 12",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop"
}];
function d({
  currentPage: e,
  totalPages: t,
  onPageChange: r
}) {
  let n = t <= 7 ? Array.from({
    length: t
  }, (e, t) => t + 1) : e <= 4 ? [1, 2, 3, 4, 5, "ellipsis", t] : e >= t - 3 ? [1, "ellipsis", t - 4, t - 3, t - 2, t - 1, t] : [1, "ellipsis", e - 1, e, e + 1, "ellipsis", t];
  return <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 sm:mt-12"><button onClick={() => r(Math.max(1, e - 1))} disabled={1 === e} className="p-2 rounded-lg text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"><ChevronLeft className="w-4 h-4" /></button>{n.map((t, n) => "ellipsis" === t ? <span className="w-8 h-8 flex items-center justify-center text-neutral-400 dark:text-neutral-500">...</span> : <button onClick={() => r(t)} className={`min-w-[2rem] h-8 px-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${e === t ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}>{t}</button>)}<button onClick={() => r(Math.min(t, e + 1))} disabled={e === t} className="p-2 rounded-lg text-neutral-400 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"><ChevronRight className="w-4 h-4" /></button></div>;
}
function Blog2() {
  let [[e, t], r] = (0, React.useState)([1, 0]);
  return <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950" aria-label="Blog articles"><div className="max-w-[900px] mx-auto w-full"><motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5
      }} className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-10 sm:mb-14">Recently published</motion.h1><div className="border-t border-neutral-200 dark:border-neutral-800 overflow-hidden"><__mod_47962.N mode="wait" custom={t}><motion.div custom={t} variants={{
            enter: e => ({
              x: e > 0 ? 100 : -100,
              opacity: 0
            }),
            center: {
              x: 0,
              opacity: 1
            },
            exit: e => ({
              x: e > 0 ? -100 : 100,
              opacity: 0
            })
          }} initial="enter" animate="center" exit="exit" transition={{
            x: {
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            opacity: {
              duration: .2
            }
          }}>{c.map((t, r) => <motion.a href="#" initial={{
              opacity: 0,
              y: 15
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .35,
              delay: .05 * r,
              ease: [.4, 0, .2, 1]
            }} className="group flex gap-4 sm:gap-6 py-5 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/50 -mx-4 px-4 transition-colors"><div className="flex-shrink-0 w-24 sm:w-32 md:w-40 aspect-[4/3] rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800"><img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /></div><div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5"><h3 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-white leading-snug line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t.title}</h3><p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 hidden sm:block">{t.excerpt}</p></div><div className="flex-shrink-0 flex items-center"><span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 whitespace-nowrap">{t.date}</span></div></motion.a>)}</motion.div></__mod_47962.N></div><d currentPage={e} totalPages={20} onPageChange={t => {
        r([t, t > e ? 1 : -1]);
      }} /></div></section>;
}

export default Blog2;
