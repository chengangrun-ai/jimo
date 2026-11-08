import { motion, AnimatePresence } from "motion/react";
/**
 * Pricing 5
 * Joined cards with a glowing button
 * slug: pricing-5
 * category: Pricing
 * export: Pricing5
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/pricing/pricing-5.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { Check } from "lucide-react";

let i = [{
  name: "Hobby",
  price: "$0",
  label: "forever",
  features: ["5,000 monthly API calls", "Basic analytics", "Community support", "1 project"]
}, {
  name: "Pro",
  price: "$49",
  label: "per month",
  features: ["100,000 monthly API calls", "Advanced analytics", "Priority email support", "Unlimited projects"]
}, {
  name: "Enterprise",
  price: "$499+",
  label: "per month",
  features: ["Unlimited API calls", "Dedicated success manager", "99.99% Uptime SLA", "Custom contracts"]
}];
function Pricing5() {
  let e = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5
      }
    }
  };
  return <section className="w-full flex items-start lg:items-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><motion.div className="max-w-[1400px] mx-auto w-full flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{
      once: !0
    }} variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: .1,
          delayChildren: .2
        }
      }
    }}><div className="text-center mb-16"><motion.span variants={e} className="text-purple-600 dark:text-purple-500 font-medium tracking-wider uppercase text-sm mb-4 block">API Pricing</motion.span><motion.h2 variants={e} className="text-4xl sm:text-5xl text-neutral-900 dark:text-white tracking-tight max-w-2xl mx-auto leading-[1.1]">Infrastructure that scales, <span className="text-neutral-500 dark:text-neutral-400">from prototype to production.</span></motion.h2></div><motion.div variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0
          }
        }
      }} className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl mx-auto gap-4 lg:gap-0">{i.map((t, r) => <motion.div variants={e} className={`
                relative p-8 sm:p-10 flex flex-col
                border-neutral-200 dark:border-neutral-800
                bg-transparent
                rounded-2xl border
                lg:rounded-none lg:mb-0
                lg:border-y lg:border-l lg:border-r-0
                lg:first:rounded-l-3xl
                lg:last:rounded-r-3xl lg:last:border-r

                transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/40
              `} style={{
          WebkitFlexBasis: "auto",
          flexBasis: "auto"
        }}><div className="mb-8"><h3 className="text-purple-600 dark:text-purple-500 font-medium text-xl mb-2">{t.name}</h3><div className="flex items-baseline gap-2"><span className="text-4xl sm:text-5xl font-medium text-neutral-900 dark:text-white">{t.price}</span><span className="px-2 py-1 rounded-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium uppercase tracking-wide">{t.label}</span></div></div><ul className="space-y-4">{t.features.map((e, t) => <li className="flex items-start gap-3"><Check className="w-5 h-5 text-purple-600 dark:text-purple-500 shrink-0 mt-0.5" /><span className="text-neutral-600 dark:text-neutral-300 text-lg">{e}</span></li>)}</ul></motion.div>)}</motion.div><motion.div variants={e} className="mt-16 relative group"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-purple-600/40 rounded-full blur-[60px]" /><button className="cursor-pointer relative px-8 py-4 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100">Get Started</button></motion.div></motion.div></section>;
}

export default Pricing5;
