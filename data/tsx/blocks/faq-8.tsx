import { ChevronDown, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * FAQ 8
 * Searchable FAQ with topic filters
 * slug: faq-8
 * category: FAQ
 * export: FAQ8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/faq/faq-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let u = ["All", "Billing", "Account", "API", "Privacy"],
  h = [{
    tag: "Billing",
    question: "Why was my card charged twice this month?",
    answer: "Two charges usually mean a plan change mid-cycle: the prorated difference bills immediately, then the regular renewal follows. Both appear on one invoice in Settings → Billing. If the amounts don't add up, reply to the invoice email and we'll reconcile it within a day."
  }, {
    tag: "Billing",
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Registered nonprofits and accredited educational institutions get 40% off any plan. Submit your documentation through the billing page: approval typically takes one business day and applies retroactively to the current cycle."
  }, {
    tag: "Account",
    question: "How do I transfer ownership of a workspace?",
    answer: "Any current owner can promote another admin to owner from Settings → Members. You'll confirm billing responsibility and recovery contacts during the handoff, and the transfer is recorded in the audit log."
  }, {
    tag: "Account",
    question: "Can I merge two accounts under one email?",
    answer: "Yes. Start a merge from the account you want to keep, verify both email addresses, and we'll combine workspaces, preserving history and permissions. Merges are reversible for 30 days."
  }, {
    tag: "API",
    question: "What are the API rate limits?",
    answer: "Standard keys allow 600 requests per minute with burst headroom, and responses include rate-limit headers so your clients can back off gracefully. Enterprise plans can request dedicated limits per key."
  }, {
    tag: "API",
    question: "Where do I find webhook delivery logs?",
    answer: "Every delivery attempt (payload, response code, latency, and retry schedule) is listed under Developers → Webhooks. Failed events retry with exponential backoff for 24 hours and can be replayed manually."
  }, {
    tag: "Privacy",
    question: "Can I export or delete all my personal data?",
    answer: "Both, at any time. Request a full export from Privacy settings and you'll receive a signed download link within minutes. Deletion requests complete within 30 days and cover backups, in line with GDPR and CCPA."
  }];
function m() {
  let e = (0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(""),
    [m, x] = (0, React.useState)("All"),
    [p, g] = (0, React.useState)(h[0].question),
    f = (0, React.useMemo)(() => {
      let e = t.trim().toLowerCase();
      return h.filter(t => {
        let a = "All" === m || t.tag === m,
          r = !e || `${t.question} ${t.answer}`.toLowerCase().includes(e);
        return a && r;
      });
    }, [t, m]),
    w = {
      hidden: {
        opacity: 0,
        y: 16 * !e
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
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto w-full max-w-[1400px]"><motion.div variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: .08,
            delayChildren: .05
          }
        }
      }} initial="hidden" whileInView="show" viewport={{
        once: !0,
        margin: "-80px"
      }} className="mx-auto w-full max-w-3xl"><motion.div variants={w} className="text-center"><h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">How can we help?</h2></motion.div><motion.div variants={w} className="mt-8"><div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition-colors duration-200 focus-within:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-within:border-neutral-600"><Search className="h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500" /><input value={t} onChange={e => a(e.target.value)} placeholder="Search billing, exports, webhooks…" aria-label="Search frequently asked questions" className="w-full bg-transparent text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none dark:text-white dark:placeholder:text-neutral-500" />{t && <button type="button" onClick={() => a("")} aria-label="Clear search" className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-colors duration-200 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-neutral-500 dark:hover:text-white dark:focus-visible:ring-white"><X className="h-4 w-4" /></button>}</div></motion.div><motion.div variants={w} className="mt-5 flex flex-wrap items-center justify-center gap-2">{u.map(e => {
            let t = m === e;
            return <button type="button" aria-pressed={t} onClick={() => x(e)} className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 ${t ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-white"}`}>{e}</button>;
          })}</motion.div><motion.div variants={w} className="mt-10">{f.length > 0 ? <div className="flex flex-col gap-3">{f.map(e => {
              let t = p === e.question,
                a = `faq8-answer-${e.question.replace(/\W+/g, "-").toLowerCase()}`;
              return <div className={`rounded-2xl border transition-colors duration-200 ${t ? "border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900" : "border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"}`}><button type="button" aria-expanded={t} aria-controls={a} onClick={() => g(t ? "" : e.question)} className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-4.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white sm:px-6 sm:py-5"><span className="flex-1 text-base font-medium leading-snug text-neutral-900 dark:text-white">{e.question}</span><span className="hidden shrink-0 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 sm:block">{e.tag}</span><motion.span animate={{
                    rotate: 180 * !!t
                  }} transition={{
                    duration: .35,
                    ease: [.22, 1, .36, 1]
                  }} className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white"><ChevronDown className="h-4.5 w-4.5" /></motion.span></button><__mod_47962.N initial={!1}>{t && <motion.div id={a} initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: "auto",
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    height: {
                      duration: .4,
                      ease: [.22, 1, .36, 1]
                    },
                    opacity: {
                      duration: .3,
                      ease: [.22, 1, .36, 1]
                    }
                  }} className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:px-6 sm:pb-6 sm:text-base">{e.answer}</p></motion.div>}</__mod_47962.N></div>;
            })}</div> : <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: .3,
            ease: [.22, 1, .36, 1]
          }} className="rounded-2xl border border-dashed border-neutral-300 px-6 py-14 text-center dark:border-neutral-700"><p className="text-base font-medium text-neutral-900 dark:text-white">No results for “{t.trim()}”</p><p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Try a different keyword, or clear the filters to browse all seven answers.</p><button type="button" onClick={() => {
              a(""), x("All");
            }} className="mt-6 cursor-pointer rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900 dark:focus-visible:ring-white">Clear filters</button></motion.div>}</motion.div><motion.p variants={w} className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">Can’t find what you need? <a href="#" className="font-medium text-neutral-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:text-white dark:focus-visible:ring-white">Talk to support</a></motion.p></motion.div></div></section>;
}

export default m;
