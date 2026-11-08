import { BookOpen, CircleQuestionMark, MessageCircle } from "lucide-react";
/**
 * Contact 1
 * Three contact cards with pill badges
 * slug: contact-1
 * category: Contact
 * export: Contact1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/contact/contact-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function s() {
  let e = [{
    icon: CircleQuestionMark,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    pillText: "Documentation",
    pillBg: "bg-white dark:bg-neutral-950",
    pillTextColor: "text-blue-700 dark:text-blue-400",
    linkText: "Learn how to build with our API",
    linkColor: "text-blue-600 dark:text-blue-400",
    href: "#"
  }, {
    icon: BookOpen,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    pillText: "Community",
    pillBg: "bg-white dark:bg-neutral-950",
    pillTextColor: "text-emerald-700 dark:text-emerald-400",
    linkText: "Join developers building the future",
    linkColor: "text-emerald-600 dark:text-emerald-400",
    href: "#"
  }, {
    icon: MessageCircle,
    iconColor: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    pillText: "Get in touch",
    pillBg: "bg-white dark:bg-neutral-950",
    pillTextColor: "text-pink-700 dark:text-pink-400",
    linkText: "Have a question? Our team is here to help",
    linkColor: "text-pink-600 dark:text-pink-400",
    href: "#"
  }];
  return <section className="w-full bg-white py-16 dark:bg-neutral-950 sm:py-24 px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-[1400px]"><motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: !0
      }} transition={{
        duration: .4
      }} className="mb-6 text-4xl tracking-tight font-medium leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:mb-16 lg:text-6xl">Let's work together</motion.h2><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{e.map((e, t) => <motion.a href={e.href} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .1 * t
        }} className={`group flex flex-col justify-between rounded-3xl p-4 transition-shadow duration-300 hover:shadow-lg sm:p-6 ${e.bgColor} ${2 === t ? "sm:col-span-2 lg:col-span-2" : ""}`}><div className="mb-12 sm:mb-16 lg:mb-20"><div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${e.pillBg}`}><e.icon className={`h-4 w-4 ${e.iconColor}`} /><span className={`text-sm font-medium ${e.pillTextColor}`}>{e.pillText}</span></div></div><div><p className={`text-lg font-medium transition-all duration-300 group-hover:scale-[1.02] sm:text-xl ${e.linkColor}`}>{e.linkText}</p></div></motion.a>)}</div></div></section>;
}

export default s;
