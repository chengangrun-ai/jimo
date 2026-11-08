import { motion, AnimatePresence } from "motion/react";
import * as React from "react";
import * as __mod_75272 from "../_helpers/75272";
import * as __mod_26 from "../_helpers/26";
import * as __mod_32923 from "../_helpers/32923";
import * as __mod_49629 from "../_helpers/49629";
/**
 * Pricing 1
 * Three tiers with a billing toggle
 * slug: pricing-1
 * category: Pricing
 * export: Pricing1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { Check, Info } from "lucide-react";

let o = ({
  children: e,
  duration: t = 3e3,
  rx: a,
  ry: l
}) => {
  let r = (0, React.useRef)(null),
    o = (0, __mod_75272.d)(0);
  (0, __mod_26.N)(e => {
    let a = r.current?.getTotalLength();
    a && o.set(a / t * e % a);
  });
  let u = (0, __mod_32923.G)(o, e => r.current?.getPointAtLength(e).x),
    h = (0, __mod_32923.G)(o, e => r.current?.getPointAtLength(e).y),
    b = (0, __mod_49629.E)`translateX(${u}px) translateY(${h}px) translateX(-50%) translateY(-50%)`;
  return <><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx={a} ry={l} ref={r} /></svg><motion.div style={{
      position: "absolute",
      top: 0,
      left: 0,
      display: "inline-block",
      transform: b
    }}>{e}</motion.div></>;
};
function u() {
  let [e, t] = (0, React.useState)(!0),
    [a, n] = (0, React.useState)(!0);
  return <section className="relative w-full bg-white dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px] w-full"><motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6
      }} className="text-center mb-8 sm:mb-12 lg:mb-16"><h1 className="text-3xl tracking-tight font-medium text-neutral-900 dark:text-white leading-tight mb-2">Secure Cloud Storage</h1><p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Store, sync, and share files securely</p></motion.div><motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .6,
        delay: .1
      }} className="max-w-xl mx-auto mb-16"><div className="relative overflow-hidden p-0.5 rounded-3xl"><div className="absolute inset-0" style={{
            borderRadius: "1.5rem"
          }}><o duration={5e3} rx="30%" ry="30%"><div className="h-48 w-48 bg-[radial-gradient(#10b981_15%,transparent_80%)] opacity-[0.5]" /></o></div><div className="relative bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl pl-6 pr-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div className="flex items-start gap-2 sm:gap-3"><div><h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-1">Start free</h3><div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><span className="text-xs">10 GB storage included</span><button className="text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors"><Info className="w-4 h-4" /></button></div></div></div><button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">Get Started</button></div></div></motion.div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"><motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .2
        }} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 flex flex-col"><div className="flex items-center justify-between mb-6"><h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Pro</h3><div className="flex items-center gap-2"><span className="text-xs font-medium text-neutral-900 dark:text-white">{e ? "Yearly" : "Monthly"}</span><button onClick={() => t(!e)} className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${e ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-neutral-900 rounded-full transition-transform duration-200 ${e ? "translate-x-0" : "translate-x-5"}`} /></button></div></div><div className="mb-6"><p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base mb-4">Individual storage for</p><div className="flex items-baseline gap-1"><span className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">${e ? "16" : "20"}</span><span className="text-neutral-600 dark:text-neutral-400 text-sm">per seat /month</span></div></div><div className="flex-1" /><div className="space-y-3 mb-6 mt-12"><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">100 GB secure storage</span></div><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">File versioning</span></div><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">2FA security</span></div></div><button className="w-full px-6 py-2 rounded-sm bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">Get Pro</button></motion.div><motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .3
        }} className="rounded-3xl p-5 flex flex-col relative overflow-hidden border border-green-500/20 dark:border-green-500/30"><div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity" style={{
            background: "radial-gradient(125% 125% at 50% 10%, #fafafa 40%, #10b981 100%)"
          }} /><div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity" style={{
            background: "radial-gradient(125% 125% at 50% 10%, #171717 40%, #10b981 100%)"
          }} /><div className="relative z-10 flex flex-col flex-1"><div className="flex items-center justify-between mb-6"><h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Team</h3><div className="flex items-center gap-2"><span className="text-xs font-medium text-neutral-900 dark:text-white">{a ? "Yearly" : "Monthly"}</span><button onClick={() => n(!a)} className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${a ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-neutral-900 rounded-full transition-transform duration-200 ${a ? "translate-x-0" : "translate-x-5"}`} /></button></div></div><div className="mb-6"><p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base mb-4">Team collaboration for</p><div className="flex items-baseline gap-1"><span className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">${a ? "48" : "60"}</span><span className="text-neutral-600 dark:text-neutral-400 text-sm">per seat /month</span></div></div><div className="flex-1" /><div className="mb-6"><p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-3">Everything in Pro, plus:</p><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">1 TB team storage</span></div></div><button className="w-full px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">Get Team Plan</button></div></motion.div><motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .6,
          delay: .4
        }} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 flex flex-col"><h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">Enterprise</h3><p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base mb-8">Unlimited storage with advanced admin controls</p><div className="flex-1" /><div className="space-y-3 mb-6"><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">Unlimited storage</span></div><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">Advanced permissions</span></div><div className="flex items-start gap-3"><Check className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" /><span className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">24/7 priority support</span></div></div><button className="w-full px-6 py-2 rounded-sm bg-black dark:bg-white text-white dark:text-black font-medium text-sm sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200">Schedule a call</button></motion.div></div></div></section>;
}

export default u;
