import { Building2, Check, User, Users, X } from "lucide-react";
import * as React from "react";
/**
 * Comparison 2
 * Pricing table with a plan toggle
 * slug: comparison-2
 * category: Comparison
 * export: Comparison2
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/comparison/comparison-2.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function x() {
  let [e, t] = (0, React.useState)("individual"),
    a = [{
      id: "individual",
      icon: User,
      label: "Individual"
    }, {
      id: "team",
      icon: Users,
      label: "Team"
    }, {
      id: "enterprise",
      icon: Building2,
      label: "Enterprise"
    }],
    x = {
      individual: [{
        title: "Monthly pricing",
        description: "How much it costs per month",
        brand1: "$12/mo",
        brand2: "$24/mo"
      }, {
        title: "Projects & workspaces",
        description: "How many projects and workspaces you can create",
        brand1: "10 projects",
        brand2: "5 projects"
      }, {
        title: "Team members",
        description: "Number of team members you can invite",
        brand1: "5 members",
        brand2: "3 members"
      }, {
        title: "Storage space",
        description: "File storage for attachments and documents",
        brand1: "50 GB",
        brand2: "20 GB"
      }, {
        title: "Advanced reporting",
        description: "Custom reports and analytics dashboards",
        brand1: !1,
        brand2: !1
      }, {
        title: "API access",
        description: "Connect with third-party tools and integrations",
        brand1: !1,
        brand2: !1
      }],
      team: [{
        title: "Monthly pricing",
        description: "How much it costs per month",
        brand1: "$29/mo",
        brand2: "$49/mo"
      }, {
        title: "Projects & workspaces",
        description: "How many projects and workspaces you can create",
        brand1: "50 projects",
        brand2: "25 projects"
      }, {
        title: "Team members",
        description: "Number of team members you can invite",
        brand1: "25 members",
        brand2: "15 members"
      }, {
        title: "Storage space",
        description: "File storage for attachments and documents",
        brand1: "500 GB",
        brand2: "200 GB"
      }, {
        title: "Advanced reporting",
        description: "Custom reports and analytics dashboards",
        brand1: !0,
        brand2: !1
      }, {
        title: "API access",
        description: "Connect with third-party tools and integrations",
        brand1: !0,
        brand2: !1
      }],
      enterprise: [{
        title: "Monthly pricing",
        description: "How much it costs per month",
        brand1: "$79/mo",
        brand2: "$129/mo"
      }, {
        title: "Projects & workspaces",
        description: "How many projects and workspaces you can create",
        brand1: "Unlimited",
        brand2: "100 projects"
      }, {
        title: "Team members",
        description: "Number of team members you can invite",
        brand1: "Unlimited",
        brand2: "50 members"
      }, {
        title: "Storage space",
        description: "File storage for attachments and documents",
        brand1: "Unlimited",
        brand2: "2 TB"
      }, {
        title: "Advanced reporting",
        description: "Custom reports and analytics dashboards",
        brand1: !0,
        brand2: !0
      }, {
        title: "API access",
        description: "Connect with third-party tools and integrations",
        brand1: !0,
        brand2: !0
      }]
    }[e];
  return <section className="relative w-full bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-neutral-950 md:py-24 lg:py-32"><div className="mx-auto w-full max-w-[1400px]"><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6
      }} className="mb-16 text-center"><h2 className="mb-6 text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">Taskflo vs. Projecto</h2><p className="mx-auto mb-6 max-w-2xl px-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:px-0 sm:text-base md:text-lg">Taskflo is the #1 alternative to Projecto. With Taskflo, you get a more powerful and intuitive project management platform at a fraction of the cost.</p><motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: .98
        }} className="rounded-full bg-neutral-950 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">Start for Free</motion.button></motion.div><motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .6,
        delay: .2
      }} className="relative overflow-hidden rounded-3xl bg-neutral-100 p-1 dark:bg-neutral-900"><div className="flex flex-col gap-4 lg:hidden"><div className="rounded-2xl bg-white p-6 dark:bg-neutral-950"><div className="flex items-center justify-between mb-4"><h3 className="text-lg font-medium text-neutral-950 dark:text-white">Compare plans</h3><p className="text-sm text-neutral-600 dark:text-neutral-400">{a.find(t => t.id === e)?.label}</p></div><div className="flex gap-3">{a.map(a => {
                let n = a.icon;
                return <motion.button onClick={() => t(a.id)} whileTap={{
                  scale: .95
                }} className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${e === a.id ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"}`}><n className="h-6 w-6" strokeWidth={2} /></motion.button>;
              })}</div></div>{x.map((t, a) => <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: .3,
            delay: .05 * a
          }} className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-950"><div className="border-b border-neutral-100 p-6 dark:border-neutral-800"><div className="text-lg font-bold text-neutral-950 dark:text-white">{t.title}</div><div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.description}</div></div><div className="grid grid-cols-2 gap-px bg-neutral-100 dark:bg-neutral-800"><div className="bg-white p-6 dark:bg-neutral-950"><div className="mb-3 text-base font-bold text-neutral-950 dark:text-white">Taskflo</div><div className="flex items-center justify-start">{"boolean" == typeof t.brand1 ? t.brand1 ? <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 dark:bg-white"><Check className="h-6 w-6 text-white dark:text-neutral-950" strokeWidth={3} /></div> : <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800"><X className="h-6 w-6 text-neutral-400 dark:text-neutral-600" strokeWidth={3} /></div> : <span className="text-lg font-semibold text-neutral-950 dark:text-white">{t.brand1}</span>}</div></div><div className="bg-white p-6 dark:bg-neutral-950"><div className="mb-3 text-base font-bold text-neutral-950 dark:text-white">Projecto</div><div className="flex items-center justify-start">{"boolean" == typeof t.brand2 ? t.brand2 ? <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 dark:bg-white"><Check className="h-6 w-6 text-white dark:text-neutral-950" strokeWidth={3} /></div> : <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800"><X className="h-6 w-6 text-neutral-400 dark:text-neutral-600" strokeWidth={3} /></div> : <span className="text-lg font-semibold text-neutral-600 dark:text-neutral-400">{t.brand2}</span>}</div></div></div></motion.div>)}</div><div className="hidden lg:block"><div className="grid grid-cols-[2fr_1fr_1fr] gap-1 border-b-4 border-neutral-100 dark:border-neutral-900"><div className="flex gap-6 items-center justify-between rounded-tl-3xl bg-white p-8 dark:bg-neutral-950"><div><h3 className="mb-1 text-lg font-bold text-neutral-950 dark:text-white">Compare plans</h3><p className="text-sm text-neutral-600 dark:text-neutral-400">{a.find(t => t.id === e)?.label}</p></div><div className="flex gap-2">{a.map(a => {
                  let n = a.icon;
                  return <motion.button onClick={() => t(a.id)} whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: .95
                  }} className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${e === a.id ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"}`}><n className="h-5 w-5" strokeWidth={2} /></motion.button>;
                })}</div></div><div className="relative overflow-hidden px-12 py-8"><div className="absolute inset-0 z-0" style={{
                background: "radial-gradient(165% 165% at 50% 90%, #fff 40%, #7c3aed 100%)"
              }} /><div className="absolute inset-0 z-0 dark:block hidden" style={{
                background: "radial-gradient(100% 150% at 50% 90%, #0a0a0a 40%, #7c3aed 100%)"
              }} /><div className="relative z-10 text-center"><div className="mb-1 text-2xl font-bold text-neutral-950 dark:text-white">Taskflo</div><div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">PRO ↗</div></div></div><div className="rounded-tr-3xl bg-white px-12 py-8 dark:bg-neutral-950"><div className="text-center"><div className="mb-1 text-2xl font-bold text-neutral-950 dark:text-white">Projecto</div><div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">BUSINESS</div></div></div></div>{x.map((t, a) => <div className="grid grid-cols-[2fr_1fr_1fr] gap-1"><div className={`bg-white p-8 dark:bg-neutral-950 ${a === x.length - 1 ? "rounded-bl-3xl" : ""}`}><div className="font-semibold text-neutral-950 dark:text-white">{t.title}</div><div className="mt-1 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">{t.description}</div></div><div className="bg-white px-12 py-8 dark:bg-neutral-950"><motion.div initial={{
                opacity: 0,
                scale: .9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: .3
              }} className="flex items-center justify-center">{"boolean" == typeof t.brand1 ? t.brand1 ? <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 dark:bg-white"><Check className="h-5 w-5 text-white dark:text-neutral-950" strokeWidth={3} /></div> : <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800"><X className="h-5 w-5 text-neutral-400 dark:text-neutral-600" strokeWidth={3} /></div> : <span className="text-center font-semibold text-neutral-950 dark:text-white">{t.brand1}</span>}</motion.div></div><div className={`bg-white px-12 py-8 dark:bg-neutral-950 ${a === x.length - 1 ? "rounded-br-3xl" : ""}`}><motion.div initial={{
                opacity: 0,
                scale: .9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: .3
              }} className="flex items-center justify-center">{"boolean" == typeof t.brand2 ? t.brand2 ? <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 dark:bg-white"><Check className="h-5 w-5 text-white dark:text-neutral-950" strokeWidth={3} /></div> : <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800"><X className="h-5 w-5 text-neutral-400 dark:text-neutral-600" strokeWidth={3} /></div> : <span className="text-center font-semibold text-neutral-600 dark:text-neutral-400">{t.brand2}</span>}</motion.div></div></div>)}</div></motion.div></div></section>;
}

export default x;
