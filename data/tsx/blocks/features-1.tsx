import { Database, Eye, FileCheck, Fingerprint, Lock, Shield, ShieldCheck, TriangleAlert } from "lucide-react";
/**
 * Features 1
 * Eight-item icon grid with descriptions
 * slug: features-1
 * category: Features
 * export: Features1
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/features/features-1.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

function Features1() {
  let e = [{
    icon: Shield,
    title: "Threat Detection",
    description: "Real-time monitoring for suspicious activities."
  }, {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for sensitive data."
  }, {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 surveillance of your infrastructure."
  }, {
    icon: Database,
    title: "Secure Backups",
    description: "Automated backups with instant recovery."
  }, {
    icon: TriangleAlert,
    title: "Breach Prevention",
    description: "Proactive defense against cyber attacks."
  }, {
    icon: FileCheck,
    title: "Compliance Management",
    description: "GDPR, SOC 2, and ISO compliance tools."
  }, {
    icon: Fingerprint,
    title: "Identity Protection",
    description: "Multi-factor authentication and access control."
  }, {
    icon: ShieldCheck,
    title: "Vulnerability Scanning",
    description: "Continuous scanning to identify security gaps."
  }];
  return <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"><div className="max-w-[1400px] mx-auto"><div className="mb-12 md:mb-16 lg:mb-20"><motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4
        }} className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">Enterprise Security Platform</motion.p><motion.h2 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .1
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 dark:text-white mb-6">Protect what matters most</motion.h2><motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: !0
        }} transition={{
          duration: .4,
          delay: .2
        }} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">Comprehensive cybersecurity solutions that protect your business from evolving threats while ensuring complete compliance.</motion.p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">{e.map((e, t) => {
          let a = e.icon;
          return <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: !0
          }} transition={{
            duration: .4,
            delay: .05 * t
          }} className="flex flex-col"><div className="flex items-center gap-3 mb-2"><div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg"><a className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 dark:text-white" /></div><h3 className="text-base tracking-tight font-light text-neutral-900 dark:text-white">{e.title}</h3></div><p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">{e.description}</p></motion.div>;
        })}</div></div></section>;
}

export default Features1;
