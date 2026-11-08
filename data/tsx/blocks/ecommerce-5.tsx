/**
 * Ecommerce 5
 * Four-product comparison
 * slug: ecommerce-5
 * category: Ecommerce
 * export: Ecommerce5
 * deps: motion
 * original: ts-tailwind/blocks/ecommerce/ecommerce-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let r = [{
  name: "2-Slice Toaster",
  price: "$39.99",
  image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80",
  features: ["Extra-wide slots", "High-lift lever"]
}, {
  name: "PRO 2-Slice Toaster",
  price: "$49.99",
  image: "https://images.unsplash.com/photo-1586941962765-d3896cc85ac8?w=800&q=80",
  features: ["High-lift lever", "Anti-jam + auto shutoff"]
}, {
  name: "PRO 4-Slice Toaster",
  price: "$79.99",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  features: ["4 extra-wide slots", "1,800 W motor"]
}, {
  name: "Air Fryer Toaster Oven",
  price: "$129.99",
  image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80",
  features: ["Seven cooking modes", "Easy to clean"]
}];
function n() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full rounded-3xl bg-neutral-50 dark:bg-neutral-900 py-14 px-4 sm:px-8"><motion.h2 initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5
      }} className="text-4xl sm:text-5xl font-medium text-neutral-900 dark:text-white text-center tracking-tight">Which one fits you?</motion.h2><motion.p initial={{
        opacity: 0,
        y: 8
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .5,
        delay: .1
      }} className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 text-center max-w-lg mx-auto">Four morning machines. One to match your appetite.</motion.p><div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">{r.map((e, t) => <motion.article initial={{
          opacity: 0,
          y: 12
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .5,
          delay: .07 * t
        }} whileHover="hover" className="flex flex-col items-center text-center gap-3"><motion.div variants={{
            hover: {
              y: -4
            }
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 22
          }} className="aspect-square w-full max-w-[220px] rounded-2xl bg-white dark:bg-neutral-800 overflow-hidden"><img src={e.image} alt="" className="h-full w-full object-cover" /></motion.div><p className="text-base font-medium text-neutral-900 dark:text-white mt-2">{e.name}</p><p className="text-sm text-neutral-500 dark:text-neutral-500">{e.price}</p><ul className="mt-2 space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300">{e.features.map(e => <li>{e}</li>)}</ul><motion.button variants={{
            hover: {
              scale: 1.04
            }
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }} className="mt-5 px-7 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer">Buy</motion.button></motion.article>)}</div></div></section>;
}

export default n;
