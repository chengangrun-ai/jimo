import { motion, AnimatePresence } from "motion/react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_17192 from "../_helpers/17192";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Social Proof 8
 * Testimonial slider with progress bars
 * slug: social-proof-8
 * category: Social Proof
 * export: SocialProof8
 * deps: motion
 * original: ts-tailwind/blocks/social-proof/social-proof-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let c = [{
  quote: "The scalability and performance have been game-changing for our organization. We've seen a 50% improvement in response times.",
  name: "Imani Olowe",
  role: "VP of Engineering at Nexus",
  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop"
}, {
  quote: "A simplified workflow that actually works. It has transformed how our cross-functional teams collaborate on daily tasks.",
  name: "David Park",
  role: "Product Manager at Suralink",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
}, {
  quote: "The insights we gain from the analytics dashboard are invaluable. We can now make data-driven decisions with confidence.",
  name: "Sofia Davis",
  role: "CMO at BrightWave",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
}];
function SocialProof8() {
  let [e, t] = (0, React.useState)(0),
    [a, d] = (0, React.useState)(!1),
    m = (0, React.useRef)(null),
    u = (0, __mod_75272.d)(0),
    x = (0, __mod_75272.d)(0),
    h = {
      damping: 20,
      stiffness: 300,
      mass: .5
    },
    g = (0, __mod_17192.z)(u, h),
    p = (0, __mod_17192.z)(x, h),
    f = () => {
      t(e => (e + 1) % c.length);
    };
  return (0, React.useEffect)(() => {
    let e = setInterval(f, 1e4);
    return () => clearInterval(e);
  }, [e]), <section className="w-full py-24 bg-white dark:bg-neutral-950 overflow-hidden flex items-center justify-start select-none px-4 sm:px-6 lg:px-8"><div ref={m} className="max-w-[1400px] mx-auto w-full relative cursor-none" onClick={f} onMouseEnter={() => d(!0)} onMouseLeave={() => d(!1)} onMouseMove={e => {
      if (m.current) {
        let t = m.current.getBoundingClientRect();
        u.set(e.clientX - t.left), x.set(e.clientY - t.top);
      }
    }}><__mod_47962.N>{a && <motion.div initial={{
          opacity: 0,
          scale: 0
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0
        }} transition={{
          duration: .15
        }} style={{
          translateX: g,
          translateY: p,
          position: "absolute",
          top: -20,
          left: -40,
          zIndex: 50
        }} className="pointer-events-none"><div className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl whitespace-nowrap">Next</div></motion.div>}</__mod_47962.N><div className="max-w-6xl mx-auto"><div className="flex flex-col md:flex-row items-stretch gap-6"><div className="w-full md:w-1/3 shrink-0"><div className="relative aspect-[1] w-full max-w-[260px] mx-auto md:mr-auto border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm h-full"><__mod_47962.N mode="wait"><motion.img src={c[e].image} alt={c[e].name} initial={{
                  opacity: 0,
                  scale: 1.05
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: .4
                }} className="h-full w-full object-cover" /></__mod_47962.N></div></div><div className="w-full md:w-2/3 flex flex-col justify-between"><div className="flex-1"><__mod_47962.N mode="wait"><motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: .4
                }}><blockquote className="text-2xl md:text-3xl tracking-tight text-neutral-900 dark:text-white leading-[1.15]">"{c[e].quote}"</blockquote></motion.div></__mod_47962.N></div><div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6"><__mod_47962.N mode="wait"><motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: .4
                }}><h4 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white mb-1">{c[e].name}</h4><p className="text-neutral-500 dark:text-neutral-400 text-base tracking-tight">{c[e].role}</p></motion.div></__mod_47962.N><div className="flex justify-end gap-3 pointer-events-none pb-2">{c.map((t, a) => <div className="relative h-0.5 w-12 bg-neutral-300 dark:bg-neutral-800 overflow-hidden"><motion.div className="absolute inset-0 bg-neutral-900 dark:bg-white" initial={{
                    width: 0
                  }} animate={{
                    width: a === e ? "100%" : "0%"
                  }} transition={{
                    duration: 10 * (a === e),
                    ease: "linear"
                  }} /></div>)}</div></div></div></div></div></div></section>;
}

export default SocialProof8;
