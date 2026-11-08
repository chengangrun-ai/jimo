import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, House } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 8
 * Blurred bottom nav with image previews
 * slug: navigation-8
 * category: Navigation
 * export: Navigation8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Navigation8() {
  let [e, t] = (0, React.useState)(null),
    [a, o] = (0, React.useState)(null),
    [c, u] = (0, React.useState)(!1),
    x = [{
      label: "Personal",
      dropdown: [{
        title: "Profile",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=300&fit=crop",
        href: "#profile"
      }, {
        title: "Settings",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
        href: "#settings"
      }]
    }, {
      label: "Business",
      dropdown: [{
        title: "Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        href: "#dashboard"
      }, {
        title: "Analytics",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        href: "#analytics"
      }]
    }, {
      label: "Company",
      href: "#company"
    }];
  return <div className="min-h-[var(--rb-section-min-h,100vh)] w-full relative bg-white dark:bg-neutral-950"><div className="relative z-10 p-8"><div className="max-w-[1400px] mx-auto"><h1 className="text-4xl text-center font-medium tracking-tight text-neutral-900 dark:text-white mb-2">Main Content Area</h1><p className="text-neutral-600 tracking-tight text-center dark:text-neutral-400">Click the navigation at the bottom.</p></div></div><__mod_47962.N>{e && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: .2
      }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />}</__mod_47962.N><motion.nav initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: .5,
      ease: [.4, 0, .2, 1]
    }} className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center"><div className="mx-auto pointer-events-auto inline-block"><div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 rounded-3xl shadow-xl overflow-hidden" onMouseLeave={() => {
          t(null), o(null), u(!1);
        }}><__mod_47962.N>{e && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: "auto",
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: .25,
              ease: [.4, 0, .2, 1]
            }} className="overflow-hidden"><div className="flex min-w-full"><div className="flex-1 p-1.5 sm:p-2 min-w-0" onMouseLeave={() => o(null)}>{x.find(t => t.label === e)?.dropdown?.map((e, t) => <motion.a href={e.href} initial={{
                    opacity: 0,
                    x: -10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: .2,
                    delay: .04 * t
                  }} onMouseEnter={() => {
                    o(e), u(!0);
                  }} className="block p-2.5 sm:p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors group"><div className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">{e.title}</div></motion.a>)}</div><div className="hidden sm:block w-28 p-2 shrink-0"><div className={`w-24 h-full rounded-xl overflow-hidden relative transition-colors ${c && a ? "bg-neutral-100 dark:bg-neutral-900" : "bg-transparent"}`}><__mod_47962.N mode="wait">{c && a && <motion.img src={a.image} alt={a.title} initial={{
                        opacity: 0,
                        scale: 1.05
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} exit={{
                        opacity: 0,
                        scale: .98
                      }} transition={{
                        duration: .2
                      }} className="w-full h-full object-cover" />}</__mod_47962.N></div></div></div></motion.div>}</__mod_47962.N><div className="pl-1.5 pr-3 sm:pl-2 sm:pr-6 py-1.5 sm:py-2"><div className="flex items-center justify-center gap-2 sm:gap-4"><a href="#" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors" aria-label="Home"><House className="w-4 h-4 sm:w-5 sm:h-5" /></a><div className="flex items-center gap-2 sm:gap-4">{x.map(a => a.dropdown ? <div className="relative" onMouseEnter={() => {
                  t(a.label), o(null);
                }}><button className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap">{a.label}<motion.div animate={{
                      rotate: 180 * (e === a.label)
                    }} transition={{
                      duration: .2
                    }}><ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /></motion.div></button></div> : <a href={a.href} className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap">{a.label}</a>)}</div></div></div></div></div></motion.nav></div>;
}

export default Navigation8;
