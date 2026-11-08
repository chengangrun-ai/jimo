import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 5
 * Bottom nav that expands into a full menu
 * slug: navigation-5
 * category: Navigation
 * export: Navigation5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Navigation5() {
  let [e, t] = (0, React.useState)(!1),
    a = (0, React.useRef)(null),
    o = [{
      title: "Homepage",
      image: "/svg/placeholder.svg",
      href: "#"
    }, {
      title: "About",
      image: "/svg/placeholder.svg",
      href: "#"
    }, {
      title: "Work",
      image: "/svg/placeholder.svg",
      href: "#"
    }, {
      title: "Contact",
      image: "/svg/placeholder.svg",
      href: "#"
    }];
  return <div className="min-h-[var(--rb-section-min-h,100vh)] w-full relative bg-white dark:bg-neutral-950"><div className="absolute inset-0 z-0 dark:hidden" style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
      opacity: .3
    }} /><div className="absolute inset-0 z-0 hidden dark:block" style={{
      background: "radial-gradient(125% 125% at 50% 10%, #0a0a0a 40%, #6366f1 100%)",
      opacity: .3
    }} /><div className="relative z-10 p-8"><div className="max-w-[1400px] mx-auto"><h1 className="text-4xl text-center font-medium tracking-tight text-neutral-900 dark:text-white mb-2">Main Content Area</h1><p className="text-neutral-600 tracking-tight text-center dark:text-neutral-400">Click the navigation at the bottom.</p></div></div><__mod_47962.N>{e && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: .2
      }} onClick={() => t(!1)} className="fixed inset-0 bg-black/20 backdrop-blur-md z-50 cursor-pointer" />}</__mod_47962.N><motion.nav initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .5,
      ease: [.4, 0, .2, 1]
    }} className="fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none"><div className="max-w-2xl mx-auto pointer-events-auto"><div ref={a} className="rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden"><__mod_47962.N>{e && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: "auto",
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: .3,
              ease: [.4, 0, .2, 1]
            }} className="overflow-hidden"><div className="p-4 space-y-4"><motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: .3,
                  delay: .1
                }} className="w-10 h-10 bg-neutral-900 dark:bg-white rounded-sm flex items-center justify-center"><svg className="w-6 h-6 text-white dark:text-neutral-900" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8z" /></svg></motion.div><motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: .3,
                  delay: .15
                }} className="flex items-center justify-between"><div className="text-2xl font-medium text-neutral-900 dark:text-white leading-tight">This is Trok</div><a href="#" className="px-4 py-2 rounded-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors no-underline">Let's talk</a></motion.div><motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  duration: .3,
                  delay: .2
                }} className="-mx-4">{o.map((e, t) => <motion.a href={e.href} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: .3,
                    delay: .25 + .05 * t
                  }} className={`flex items-center justify-between px-4 py-3 border-t hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors no-underline group cursor-pointer ${t === o.length - 1 ? "border-neutral-200 dark:border-neutral-800 border-b" : "border-neutral-200 dark:border-neutral-800"}`}><div className="flex items-center gap-3"><div className="w-16 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden shrink-0 group-hover:w-[84px] transition-all duration-200"><img src={e.image} alt={e.title} className="w-full h-full object-cover" /></div><span className="text-base font-light text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{e.title}</span></div>{e.tags && <div className="flex items-center gap-2">{e.tags.map(e => <span className="text-xs text-neutral-500 dark:text-neutral-400">{e}</span>)}</div>}</motion.a>)}</motion.div><motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: .3,
                  delay: .5
                }} className="space-y-1 pt-2">{[{
                    name: "LinkedIn",
                    href: "#"
                  }, {
                    name: "Instagram",
                    href: "#"
                  }, {
                    name: "Facebook",
                    href: "#"
                  }, {
                    name: "Trok on X",
                    href: "#"
                  }].map(e => <a href={e.href} className="block text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors no-underline">{e.name}</a>)}</motion.div></div></motion.div>}</__mod_47962.N><button onClick={() => t(!e)} className="w-full flex items-center justify-between px-6 py-4 cursor-pointer transition-colors"><div className="flex items-center gap-2 text-neutral-900 dark:text-white">{e ? <><ChevronDown className="w-5 h-5" /><span className="text-sm font-medium">Close Menu</span></> : <><ChevronUp className="w-5 h-5" /><span className="text-sm font-medium">Open Menu</span></>}</div><div className="text-sm font-medium text-neutral-500 dark:text-neutral-500">Home</div></button></div></div></motion.nav></div>;
}

export default Navigation5;
