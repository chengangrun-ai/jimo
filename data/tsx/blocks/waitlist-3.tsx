import { motion, AnimatePresence } from "motion/react";
/**
 * Waitlist 3
 * Rounded waitlist card with an image
 * slug: waitlist-3
 * category: Waitlist
 * export: Waitlist3
 * deps: motion
 * original: ts-tailwind/blocks/waitlist/waitlist-3.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function l() {
  let [e, t] = (0, React.useState)(""),
    [a, l] = (0, React.useState)(!1),
    n = async a => {
      a.preventDefault(), l(!0), await new Promise(e => setTimeout(e, 1e3)), console.log("Email submitted:", e), l(!1), t("");
    };
  return <section className="w-full flex items-start lg:items-center py-12 mt-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto w-full"><div className="flex items-center justify-center"><motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6
        }} className="w-full max-w-xl relative"><div className="absolute top-px left-1/2 -translate-x-1/2 -translate-y-full z-10"><svg width="756" height="86" viewBox="0 0 756 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200px] sm:w-[280px] md:w-[300px] h-auto"><path d="M378 0H620.709C643.31 0 663.485 8.35584 672.03 20.8335C706.133 70.6268 726.465 85.9951 756 86H378V0Z" fill="currentColor" className="text-neutral-100 dark:text-neutral-900" /><path d="M378 0H135.291C112.69 0 92.5152 8.35584 83.9696 20.8335C49.8674 70.6268 29.535 85.9951 0 86H378V0Z" fill="currentColor" className="text-neutral-100 dark:text-neutral-900" /></svg></div><div className="w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-8 sm:p-12"><div className="flex flex-col items-center space-y-6"><div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800"><img src="/svg/placeholder.svg" alt="Waitlist preview" className="w-full h-full object-cover" /></div><h2 className="text-xl sm:text-2xl font-normal tracking-tight text-neutral-600 dark:text-neutral-400 text-center">Join the waitlist for early access.</h2><p className="text-sm sm:text-base tracking-tight text-neutral-600 dark:text-neutral-400 text-center leading-relaxed max-w-md">Be among the first to experience our new platform. Join our exclusive waitlist and get notified when we launch.</p><form onSubmit={n} className="w-full max-w-md space-y-3"><input type="email" value={e} onChange={e => t(e.target.value)} placeholder="Enter your email" required={!0} disabled={a} aria-label="Email address" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 disabled:opacity-50" /><button type="submit" disabled={a} aria-label={a ? "Submitting" : "Join the waitlist"} className="w-full px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium text-sm tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">{a ? "Joining..." : "Join the waitlist"}</button></form></div></div></motion.div></div></div></section>;
}

export default l;
