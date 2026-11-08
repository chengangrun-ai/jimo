import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Navigation 7
 * Rounded top nav with dropdowns
 * slug: navigation-7
 * category: Navigation
 * export: Navigation7
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/navigation/navigation-7.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

function Navigation7() {
  let [e, t] = (0, React.useState)(null),
    [a, c] = (0, React.useState)(!1),
    [u, m] = (0, React.useState)(null),
    h = [{
      label: "Product",
      dropdown: {
        title: "PLATFORM OVERVIEW",
        items: [{
          title: "AI Analysis",
          description: "Automatic analysis to turn raw feedback to structured intelligence",
          href: "#ai-analysis"
        }, {
          title: "AI Dashboards",
          description: "Visualize customer trends alongside key business metrics",
          badge: "BETA",
          href: "#ai-dashboards"
        }, {
          title: "AI Chat and search",
          description: "Get instant answers and discover anything across customer data",
          href: "#ai-chat"
        }, {
          title: "AI Docs",
          description: "Create shareable AI outputs to drive decisions and action",
          badge: "BETA",
          href: "#ai-docs"
        }, {
          title: "API and integrations",
          description: "Connect your stack end-to-end: data in, intelligence out",
          href: "#api"
        }, {
          title: "AI Agents",
          description: "Transform customer signals into intelligent, automated action",
          badge: "BETA",
          href: "#ai-agents"
        }]
      }
    }, {
      label: "Resources",
      dropdown: {
        title: "LEARN & EXPLORE",
        items: [{
          title: "Documentation",
          description: "Get started with guides and API references",
          href: "#docs"
        }, {
          title: "Blog",
          description: "Latest insights and product updates",
          href: "#blog"
        }, {
          title: "Case Studies",
          description: "Learn how teams succeed with our platform",
          href: "#case-studies"
        }, {
          title: "Webinars",
          description: "Join live sessions and watch recordings",
          href: "#webinars"
        }]
      }
    }, {
      label: "Enterprise",
      dropdown: {
        title: "ENTERPRISE SOLUTIONS",
        items: [{
          title: "Enterprise Plan",
          description: "Advanced features and dedicated support",
          href: "#enterprise-plan"
        }, {
          title: "Security",
          description: "Enterprise-grade security and compliance",
          href: "#security"
        }, {
          title: "Custom Integration",
          description: "Tailored solutions for your organization",
          href: "#custom-integration"
        }, {
          title: "White Glove Setup",
          description: "Dedicated onboarding and implementation",
          href: "#white-glove"
        }]
      }
    }, {
      label: "Customers",
      dropdown: {
        title: "SUCCESS STORIES",
        items: [{
          title: "Customer Stories",
          description: "See how organizations transform with AI",
          href: "#stories"
        }, {
          title: "Wall of Love",
          description: "What our customers are saying",
          href: "#testimonials"
        }, {
          title: "Community",
          description: "Connect with other users and experts",
          href: "#community"
        }, {
          title: "Partner Network",
          description: "Find certified implementation partners",
          href: "#partners"
        }]
      }
    }];
  return <><nav className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-transparent"><div className="max-w-[1400px] mx-auto w-full flex items-center justify-between gap-8"><div className="flex items-center gap-2"><a href="#" className="flex items-center justify-center aspect-square h-10 bg-neutral-200 dark:bg-neutral-900 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors" aria-label="Home"><div className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-white" /></a><div className="hidden md:flex items-center gap-2">{h.map(a => <div className="relative" onMouseEnter={() => t(a.label)} onMouseLeave={() => t(null)}><button className="flex items-center gap-1.5 px-4 h-10 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md transition-colors text-sm tracking-tight font-medium text-neutral-900 dark:text-neutral-100" aria-expanded={e === a.label} aria-haspopup="true">{a.label}</button><__mod_47962.N>{e === a.label && a.dropdown && <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: 10
                }} transition={{
                  duration: .2,
                  ease: [.4, 0, .2, 1]
                }} className="absolute top-full left-0 pt-2 z-50"><div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl py-2 min-w-[500px]"><div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 tracking-wider my-4 px-4">{a.dropdown.title}</div><div className="grid grid-cols-2 gap-3 px-2">{a.dropdown.items.map((e, t) => <motion.a href={e.href} initial={{
                        opacity: 0,
                        y: 10
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        duration: .2,
                        delay: .03 * t,
                        ease: [.4, 0, .2, 1]
                      }} className="group p-3 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"><div className="flex items-center gap-2 mb-1"><h3 className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">{e.title}</h3>{e.badge && <span className="text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">{e.badge}</span>}</div><p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.description}</p></motion.a>)}</div></div></motion.div>}</__mod_47962.N></div>)}</div></div><div className="flex items-center gap-3"><button className="hidden md:block px-4 h-10 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors">Log in</button><button className="px-4 h-10 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-md text-sm font-medium tracking-tight transition-colors">Try Free</button><button onClick={() => c(!0)} className="md:hidden px-4 h-10 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors flex items-center gap-2" aria-label="Open menu"><Menu className="w-4 h-4" /></button></div></div></nav><__mod_47962.N>{a && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: .3
      }} className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 md:hidden"><div className="flex items-center justify-between py-6 px-4"><div className="flex items-center justify-center aspect-square h-10 bg-neutral-200 dark:bg-neutral-900 rounded-md"><div className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-white" /></div><button onClick={() => {
            c(!1), m(null);
          }} className="flex items-center gap-2 px-4 h-10 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors" aria-label="Close menu"><X className="w-4 h-4" /></button></div><div className="overflow-y-auto h-[calc(100vh-240px)] p-4 sm:p-6"><nav className="space-y-2">{h.map((e, t) => <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: .3,
              delay: .05 * t,
              ease: [.4, 0, .2, 1]
            }}><button onClick={() => m(u === e.label ? null : e.label)} className="w-full flex items-center justify-between px-4 py-3 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md text-left transition-colors"><span className="font-medium text-neutral-900 dark:text-neutral-100">{e.label}</span><motion.div animate={{
                  rotate: 180 * (u === e.label)
                }} transition={{
                  duration: .2
                }}><ChevronDown className="w-5 h-5 text-neutral-500 dark:text-neutral-400" /></motion.div></button><__mod_47962.N>{u === e.label && e.dropdown && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: .2,
                  ease: [.4, 0, .2, 1]
                }} className="overflow-hidden"><div className="pt-2 pb-1 space-y-1">{e.dropdown.items.map((e, t) => <motion.a href={e.href} initial={{
                      opacity: 0,
                      x: -10
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      duration: .2,
                      delay: .03 * t
                    }} onClick={() => {
                      c(!1), m(null);
                    }} className="block p-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"><div className="flex items-center gap-2 mb-1"><h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{e.title}</h3>{e.badge && <span className="text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">{e.badge}</span>}</div><p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.description}</p></motion.a>)}</div></motion.div>}</__mod_47962.N></motion.div>)}</nav></div><motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: .3,
          delay: .2
        }} className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 space-y-3 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"><button className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md text-sm font-medium text-neutral-900 dark:text-neutral-100 transition-colors">Log in</button><button className="w-full px-4 py-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-md text-sm font-medium transition-colors">Try For Free</button></motion.div></motion.div>}</__mod_47962.N></>;
}

export default Navigation7;
