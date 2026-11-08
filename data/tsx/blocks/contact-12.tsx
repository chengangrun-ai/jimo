import { BookOpen, CalendarClock, Handshake, KeyRound, MessagesSquare, PhoneCall } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Contact 12
 * Six animated support option cards
 * slug: contact-12
 * category: Contact
 * export: Contact12
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/contact/contact-12.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import { motion, AnimatePresence } from "motion/react";

let u = [{
  icon: CalendarClock,
  title: "Book a demo",
  description: "See the platform live in a 25-minute walkthrough shaped around your workflows.",
  cta: "Pick a time"
}, {
  icon: MessagesSquare,
  title: "Talk to sales",
  description: "Pricing, integrations, rollout plans: get straight answers from a specialist.",
  cta: "Start a conversation"
}, {
  icon: Handshake,
  title: "Partnerships",
  description: "Build on our API or join the referral program alongside 200+ integration partners.",
  cta: "Explore partnerships"
}, {
  icon: KeyRound,
  title: "Account & sign-in",
  description: "Locked out or managing seats? Resolve access issues in a couple of minutes.",
  cta: "Get access help"
}, {
  icon: BookOpen,
  title: "Help center",
  description: "Guides, release notes, and playbooks: most questions are answered in one search.",
  cta: "Browse articles"
}, {
  icon: PhoneCall,
  title: "Urgent line",
  description: "Production down? Call the 24/7 line and reach an on-call engineer directly.",
  cta: "Call the line"
}];
function p() {
  let e = (0, __mod_50969.I)(),
    t = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: .07,
          delayChildren: .05
        }
      }
    },
    a = {
      hidden: {
        opacity: 0,
        y: 20 * !e
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: [.22, 1, .36, 1]
        }
      }
    };
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={t} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><motion.h2 variants={a} className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">How can we help?</motion.h2><motion.p variants={a} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Whatever the question, there's a direct route to the right team. Pick a path: no ticket queues, no dead ends.</motion.p></div><motion.div variants={a} className="shrink-0 lg:pb-1 lg:text-right"><p className="text-3xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-white">4 min</p><p className="mt-1 text-sm text-neutral-500">median first reply, this quarter</p></motion.div></motion.div><motion.div variants={t} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">{u.map(e => <motion.div variants={a} className="flex flex-col rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900 sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"><e.icon className="h-5 w-5 text-neutral-900 dark:text-white" strokeWidth={1.75} /></div><h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{e.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.description}</p><div className="mt-auto pt-8"><a href="#" className="inline-flex cursor-pointer items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-900">{e.cta}</a></div></motion.div>)}</motion.div></div></section>;
}

export default p;
