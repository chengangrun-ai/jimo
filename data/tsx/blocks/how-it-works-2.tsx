import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
/**
 * How It Works 2
 * Step cards with an image hover
 * slug: how-it-works-2
 * category: How It Works
 * export: HowItWorks2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/how-it-works/how-it-works-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
  number: 1,
  title: "Connect Your Stack",
  link: "View integrations",
  items: ["API configuration", "OAuth setup", "Webhook events"],
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
}, {
  number: 2,
  title: "Deploy Infrastructure",
  link: "Explore architecture",
  items: ["Auto-scaling clusters", "Edge networks", "Database replication", "Load balancing"],
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
}, {
  number: 3,
  title: "Ship with Confidence",
  link: "Security overview",
  items: ["Zero-trust security", "Real-time monitoring"],
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
}];
function HowItWorks2() {
  let [e, t] = (0, React.useState)(null);
  return <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950" aria-label="How it works"><div className="max-w-[1400px] mx-auto w-full"><motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5
      }} className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-10 sm:mb-12 lg:mb-16">How It Works</motion.h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">{n.map((a, i) => <motion.article initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .5,
          delay: .1 * i
        }} className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col cursor-pointer" onMouseEnter={() => t(a.number)} onMouseLeave={() => t(null)} aria-label={`Step ${a.number}: ${a.title}`}><motion.div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${a.image})`
          }} initial={{
            opacity: 0,
            scale: 1.1
          }} animate={{
            opacity: +(e === a.number),
            scale: e === a.number ? 1 : 1.1
          }} transition={{
            duration: .5,
            ease: "easeOut"
          }} /><motion.div className="absolute inset-0 bg-black/60" initial={{
            opacity: 0
          }} animate={{
            opacity: +(e === a.number)
          }} transition={{
            duration: .4,
            ease: "easeOut"
          }} /><div className="relative z-10 flex flex-col h-full pt-6 sm:pt-8 px-6 sm:px-8"><div className="flex-1"><div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 transition-colors duration-300 ${e === a.number ? "bg-white text-neutral-900" : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"}`}>{a.number}</div><h3 className={`text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-tight mb-2 transition-colors duration-300 ${e === a.number ? "text-white" : "text-neutral-900 dark:text-white"}`}>{a.title}</h3><a href="#" className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 group ${e === a.number ? "text-white/90 hover:text-white" : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}>{a.link}<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" /></a></div><div className="mt-auto -mx-6 sm:-mx-8">{a.items.map((t, i) => <div className={`py-3 px-6 border-t transition-colors duration-300 ${e === a.number ? "border-white/20 text-white/90" : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"}`}><span className="text-sm">{t}</span></div>)}</div></div></motion.article>)}</div><motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: .5,
        delay: .4
      }} className="text-center"><a href="#" className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 group"><span className="text-sm sm:text-base">Start building today. Get your API keys and deploy in under 5 minutes.</span><ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" /></a></motion.div></div></section>;
}

export default HowItWorks2;
