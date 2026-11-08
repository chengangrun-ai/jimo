import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
/**
 * Pricing 6
 * Three cards with a highlighted middle
 * slug: pricing-6
 * category: Pricing
 * export: Pricing6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let n = [{
  name: "Starter",
  price: {
    monthly: 0,
    annual: 0
  },
  description: "Perfect for side projects and learning the platform",
  features: ["Up to 3 projects", "5GB storage", "Community support", "Basic analytics dashboard"],
  popular: !1
}, {
  name: "Pro",
  price: {
    monthly: 29,
    annual: 24
  },
  description: "Everything you need to build and scale your applications",
  features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "API access"],
  popular: !0
}, {
  name: "Enterprise",
  price: {
    monthly: 99,
    annual: 82
  },
  description: "Advanced features with dedicated support for mission-critical apps.",
  features: ["Unlimited everything", "1TB storage", "24/7 phone support", "Advanced security", "Dedicated account manager"],
  popular: !1
}];
function Pricing6() {
  let [e, t] = (0, React.useState)("monthly"),
    r = {
      hidden: {
        opacity: 0,
        y: 30
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .5,
          ease: [.25, .1, .25, 1]
        }
      }
    };
  return <section className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden"><div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center"><div className="text-center mb-12 space-y-4"><h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.1]">Choose Your Plan – <br />Build Faster, Scale Smarter</h2></div><div className="flex items-center justify-center mb-16"><div className="p-1 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center relative w-60"><motion.div className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-purple-600 dark:bg-purple-500 rounded-full shadow-sm" style={{
            left: "0.25rem"
          }} animate={{
            x: "monthly" === e ? 0 : "100%"
          }} transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
            mass: .8
          }} /><button onClick={() => t("monthly")} className={`relative cursor-pointer z-10 flex-1 py-2 text-sm font-medium rounded-full transition-colors duration-200 text-center ${"monthly" === e ? "text-white" : "text-neutral-500 dark:text-neutral-400"}`}>Monthly</button><button onClick={() => t("annual")} className={`relative cursor-pointer z-10 flex-1 py-2 text-sm font-medium rounded-full transition-colors duration-200 text-center ${"annual" === e ? "text-white" : "text-neutral-500 dark:text-neutral-400"}`}>Annual</button></div></div><motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center w-full max-w-6xl" variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .15,
            delayChildren: .1
          }
        }
      }} initial="hidden" animate="visible">{n.map((t, l) => <motion.div variants={r} className={`
                relative p-6 rounded-2xl flex flex-col overflow-hidden
                ${t.popular ? "bg-linear-to-t from-purple-500/25 to-transparent lg:py-6 lg:-my-4 shadow-xl z-10 ring-1 ring-purple-500/20" : "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm"}
              `}><div className="relative z-10 flex justify-between items-center mb-4"><h3 className={`text-xl font-medium ${t.popular ? "text-purple-600 dark:text-purple-500" : "text-neutral-600 dark:text-neutral-400"}`}>{t.name}</h3>{t.popular && <div className="bg-purple-600/20 dark:bg-purple-500/20 text-purple-600 dark:text-purple-500 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Most Popular</div>}</div><div className="relative z-10 flex items-baseline gap-1 mb-4"><span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">$ {"monthly" === e ? t.price.monthly : t.price.annual},00</span></div><p className={`relative z-10 text-sm mb-8 leading-relaxed ${t.popular ? "text-neutral-500 dark:text-neutral-300" : "text-neutral-500 dark:text-neutral-400"}`}>{t.description}</p><button className={`relative z-10 w-full py-3.5 rounded-xl font-medium transition-all duration-200 mb-8
                ${t.popular, "bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-500 dark:hover:bg-purple-600 hover:scale-[1.02]"}`}>{0 === l ? "Get Started Free" : "Start 14-day Trial"}</button><div className="relative z-10 space-y-4"><p className={`text-sm font-medium ${t.popular, "text-neutral-900 dark:text-white"}`}>What's included :</p><ul className="space-y-3">{t.features.map((e, r) => <li className="flex items-center gap-3"><div className={`rounded-full p-1 ${t.popular ? "bg-purple-600 dark:bg-purple-500 text-white" : "bg-neutral-900 dark:bg-white text-white dark:text-black"}`}><Check className="w-3 h-3" strokeWidth={3} /></div><span className={`text-sm ${t.popular ? "text-neutral-600 dark:text-neutral-300" : "text-neutral-600 dark:text-neutral-400"}`}>{e}</span></li>)}</ul></div></motion.div>)}</motion.div></div></section>;
}

export default Pricing6;
