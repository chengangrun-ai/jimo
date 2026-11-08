import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
/**
 * How It Works 1
 * Step carousel with images
 * slug: how-it-works-1
 * category: How It Works
 * export: HowItWorks1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/how-it-works/how-it-works-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [{
  index: 1,
  title: "Create your account",
  description: "Sign up in seconds with your email or social accounts. No credit card required to get started.",
  image1: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
}, {
  index: 2,
  title: "Customize your workspace",
  description: "Set up your dashboard with the tools and integrations that fit your workflow perfectly.",
  image1: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  image2: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
}, {
  index: 3,
  title: "Launch and scale",
  description: "Go live with confidence. Our platform grows with you from startup to enterprise.",
  image1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  image2: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
}];
function HowItWorks1() {
  let [e, t] = (0, React.useState)(0),
    a = (0, React.useRef)(null),
    [d, c] = (0, React.useState)(400),
    [u, m] = (0, React.useState)(124),
    [x, h] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = () => {
        if (a.current) {
          let e = a.current.offsetWidth;
          e < 640 ? (c(e - 32), m(24), h(!0)) : (e < 1024 ? c(Math.min(380, .45 * e)) : c(Math.min(420, .32 * e)), m(124), h(!1));
        }
      },
      t = new ResizeObserver(e);
    return a.current && t.observe(a.current), e(), () => t.disconnect();
  }, []);
  let p = e > 0,
    g = e < o.length - 1;
  return <section className="w-full py-12 bg-white dark:bg-neutral-950 px-4 sm:px-6 lg:px-8" aria-label="How it works"><div className="max-w-[1400px] mx-auto w-full"><motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .5
      }} className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"><span className="text-xs uppercase text-neutral-500 dark:text-neutral-500 font-medium">How it works</span><div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8"><h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.15] max-w-xl">Get started in three simple steps right now</h2><motion.button whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: .98
          }} className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-purple-500 text-white font-medium text-sm sm:text-base hover:bg-purple-400 transition-colors duration-200 cursor-pointer self-start flex-shrink-0">Get started</motion.button></div></motion.div></div><div ref={a} className="overflow-hidden pl-4 sm:pl-6 lg:pl-8" role="region" aria-label="Steps carousel"><div className="max-w-[1400px] mx-auto"><motion.div className="flex" animate={{
          x: -(e * (d + u))
        }} transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }} style={{
          gap: u
        }}>{o.map((e, t) => <motion.article className="flex-shrink-0" style={{
            width: d
          }} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .5,
            delay: .1 * t
          }} aria-label={`Step ${e.index}: ${e.title}`}><div className="flex flex-col gap-2"><span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-medium">{e.index}</span><h3 className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight line-clamp-2">{e.title}</h3><p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed h-[3em] line-clamp-2">{e.description}</p><div className="relative mt-4" style={{
                height: d * (x ? 1.1 : 1.15)
              }}><motion.div className="absolute top-0 left-0 overflow-hidden rounded-2xl shadow-lg" style={{
                  height: .75 * d,
                  width: x ? d : d + 100
                }} whileHover={{
                  scale: 1.02
                }} transition={{
                  duration: .3
                }}><img src={e.image1} alt="" className="w-full h-full object-cover" loading="lazy" /></motion.div><motion.div className="absolute overflow-hidden rounded-2xl shadow-xl" style={{
                  width: .65 * d,
                  height: .65 * d,
                  top: .375 * d,
                  left: (x ? d : d + 100) / 2,
                  transform: "translateX(-50%)"
                }} whileHover={{
                  scale: 1.02
                }} transition={{
                  duration: .3
                }}><img src={e.image2} alt="" className="w-full h-full object-cover" loading="lazy" /></motion.div></div></div></motion.article>)}</motion.div></div></div><div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8"><motion.nav initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: .5,
        delay: .3
      }} className="flex items-center justify-center gap-2 mt-2" aria-label="Carousel navigation"><motion.button whileHover={p ? {
          scale: 1.05
        } : {}} whileTap={p ? {
          scale: .95
        } : {}} onClick={() => {
          p && t(e => e - 1);
        }} disabled={!p} className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${p ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer" : "bg-transparent text-neutral-300 dark:text-neutral-700 cursor-not-allowed"}`} aria-label="Previous slide"><ChevronLeft className="w-5 h-5" /></motion.button><div className="flex items-center justify-center gap-1.5 px-4 h-9 bg-neutral-100 dark:bg-neutral-900 rounded-full" role="tablist" aria-label="Slide indicators">{o.map((a, i) => <div onClick={() => t(i)} onKeyDown={e => {
            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), t(i));
          }} className={`rounded-full transition-all duration-300 cursor-pointer ${i === e ? "bg-neutral-900 dark:bg-white w-2 h-2" : "bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-500 w-1.5 h-1.5"}`} role="tab" tabIndex={0} aria-selected={i === e} aria-label={`Go to slide ${i + 1}`} />)}</div><motion.button whileHover={g ? {
          scale: 1.05
        } : {}} whileTap={g ? {
          scale: .95
        } : {}} onClick={() => {
          g && t(e => e + 1);
        }} disabled={!g} className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${g ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer" : "bg-transparent text-neutral-300 dark:text-neutral-700 cursor-not-allowed"}`} aria-label="Next slide"><ChevronRight className="w-5 h-5" /></motion.button></motion.nav></div></section>;
}

export default HowItWorks1;
