import { motion, AnimatePresence } from "motion/react";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 1
 * Classic top nav with dropdown menus
 * slug: navigation-1
 * category: Navigation
 * export: Navigation1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function c() {
  let [e, t] = (0, React.useState)(null),
    [a, c] = (0, React.useState)(!1),
    [x, m] = (0, React.useState)(null),
    h = [{
      name: "Analytics Dashboard",
      href: "#"
    }, {
      name: "Marketing Suite",
      href: "#"
    }, {
      name: "CRM Platform",
      href: "#"
    }, {
      name: "Email Automation",
      href: "#"
    }, {
      name: "Sales Tracking",
      href: "#"
    }, {
      name: "Team Collaboration",
      href: "#"
    }, {
      name: "Project Management",
      href: "#"
    }],
    p = [{
      name: "For Startups",
      href: "#"
    }, {
      name: "For Enterprise",
      href: "#"
    }, {
      name: "For Agencies",
      href: "#"
    }, {
      name: "For Freelancers",
      href: "#"
    }, {
      name: "For E-commerce",
      href: "#"
    }];
  return <nav className="relative w-full bg-white px-4 sm:px-6 lg:px-8 py-4 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"><div className="mx-auto w-full max-w-[1400px]"><motion.div className="flex items-center justify-between" initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: .4,
        ease: [.4, 0, .2, 1]
      }}><div className="flex items-center gap-8"><a href="#" className="text-xl font-medium text-neutral-900 dark:text-white z-50">Flowbase</a><div className="hidden items-center gap-1 lg:flex"><div className="relative" onMouseEnter={() => t("products")} onMouseLeave={() => t(null)}><button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Products<ChevronDown className="h-4 w-4" /></button><__mod_47962.N>{"products" === e && <><div className="absolute left-0 top-full h-2 w-full" /><motion.div initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -10
                  }} transition={{
                    duration: .2,
                    ease: "easeOut"
                  }} className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950"><div className="p-2">{h.map((e, t) => <motion.a href={e.href} initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        duration: .2,
                        delay: .03 * t
                      }} className="block rounded-md px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 no-underline">{e.name}</motion.a>)}</div></motion.div></>}</__mod_47962.N></div><div className="relative" onMouseEnter={() => t("solutions")} onMouseLeave={() => t(null)}><button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Solutions<ChevronDown className="h-4 w-4" /></button><__mod_47962.N>{"solutions" === e && <><div className="absolute left-0 top-full h-2 w-full" /><motion.div initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -10
                  }} transition={{
                    duration: .2,
                    ease: "easeOut"
                  }} className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950"><div className="p-2">{p.map((e, t) => <motion.a href={e.href} initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        duration: .2,
                        delay: .03 * t
                      }} className="block rounded-md px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 no-underline">{e.name}</motion.a>)}</div></motion.div></>}</__mod_47962.N></div><a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white no-underline">Pricing</a></div></div><div className="flex items-center gap-3"><button className="hidden h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-300 lg:flex" aria-label="Notifications"><Bell className="h-5 w-5" /></button><button className="hidden rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900 lg:block">Sign In</button><button className="hidden rounded-md bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 lg:block">Try it FREE</button><button onClick={() => c(!a)} className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 lg:hidden z-50" aria-label={a ? "Close menu" : "Open menu"}>{a ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></motion.div></div><__mod_47962.N>{a && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: .2
      }} className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 lg:hidden"><div className="h-[73px] border-b border-neutral-200 dark:border-neutral-800" /><div className="mx-auto flex h-[calc(100%-73px)] max-w-[1400px] flex-col px-6"><div className="flex flex-1 flex-col gap-8 overflow-y-auto py-8 pb-0"><motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .3,
              delay: .1
            }}><button onClick={() => m("products" === x ? null : "products")} className="flex w-full items-center justify-between text-left text-2xl font-medium text-neutral-900 dark:text-white">Products<ChevronDown className={`h-6 w-6 transition-transform ${"products" === x ? "rotate-180" : ""}`} /></button><__mod_47962.N>{"products" === x && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: .2
                }} className="overflow-hidden"><div className="space-y-2 pt-4">{h.map(e => <a href={e.href} className="block rounded-md px-4 py-3 text-base text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 no-underline">{e.name}</a>)}</div></motion.div>}</__mod_47962.N></motion.div><motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .3,
              delay: .2
            }}><button onClick={() => m("solutions" === x ? null : "solutions")} className="flex w-full items-center justify-between text-left text-2xl font-medium text-neutral-900 dark:text-white">Solutions<ChevronDown className={`h-6 w-6 transition-transform ${"solutions" === x ? "rotate-180" : ""}`} /></button><__mod_47962.N>{"solutions" === x && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: .2
                }} className="overflow-hidden"><div className="space-y-2 pt-4">{p.map(e => <a href={e.href} className="block rounded-md px-4 py-3 text-base text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 no-underline">{e.name}</a>)}</div></motion.div>}</__mod_47962.N></motion.div><motion.a href="#" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .3,
              delay: .3
            }} className="text-2xl font-medium text-neutral-900 dark:text-white no-underline">Pricing</motion.a></div><div className="flex flex-col gap-3 border-t border-neutral-200 py-6 dark:border-neutral-800"><motion.button initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .3,
              delay: .4
            }} className="w-full rounded-md border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900">Sign In</motion.button><motion.button initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: .3,
              delay: .5
            }} className="w-full rounded-md bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Try it FREE</motion.button></div></div></motion.div>}</__mod_47962.N></nav>;
}

export default c;
