import { X } from "lucide-react";
/**
 * CTA 10
 * Floating join card with an email input
 * slug: cta-10
 * category: Call To Action
 * export: Cta10
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/cta/cta-10.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function n() {
  return <section className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><motion.div initial={{
      opacity: 0,
      y: 16,
      scale: .98
    }} whileInView={{
      opacity: 1,
      y: 0,
      scale: 1
    }} viewport={{
      once: !0
    }} transition={{
      duration: .5,
      ease: [.22, 1, .36, 1]
    }} className="relative w-full max-w-5xl rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden grid grid-cols-1 md:grid-cols-[5fr_7fr] p-2"><button className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors z-10 cursor-pointer border border-neutral-200 dark:border-neutral-700" aria-label="Close"><X className="h-4 w-4" /></button><div className="relative aspect-4/5 md:aspect-auto md:min-h-[440px] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 grid place-items-center"><img src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1200&auto=format&fit=crop" alt="" className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex flex-col justify-center p-6 sm:p-10 gap-5"><h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">Stay in the loop</h2><p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">Monthly field notes on what we’re shipping, what we’re learning, and the occasional deep dive — straight to your inbox, no fluff.</p><form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:p-1 sm:rounded-full sm:bg-white sm:dark:bg-neutral-800 sm:border sm:border-neutral-200 sm:dark:border-neutral-700 max-w-md"><input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 sm:py-2.5 rounded-full sm:rounded-none bg-white dark:bg-neutral-800 sm:bg-transparent sm:dark:bg-transparent border border-neutral-200 dark:border-neutral-700 sm:border-0 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:outline-none" /><button type="submit" className="px-5 py-3 sm:py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">Subscribe</button></form></div></motion.div></section>;
}

export default n;
