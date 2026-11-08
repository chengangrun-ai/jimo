import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Bell, Braces, Database, FileText, GitCommitHorizontal, Globe, KeyRound, Layers, Rocket, ShieldCheck, Smartphone, Sparkles, Terminal, Users, Zap } from "lucide-react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Bento 40
 * Ticker of metrics and changelog chips
 * slug: bento-40
 * category: Bento
 * export: Bento40
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/bento/bento-40.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let b = [[{
    icon: Rocket,
    text: "v4.2 shipped",
    tag: "release"
  }, {
    icon: GitCommitHorizontal,
    text: "Edge caching for API routes",
    tag: "new"
  }, {
    icon: ShieldCheck,
    text: "SOC 2 Type II renewed",
    tag: "trust"
  }, {
    icon: Globe,
    text: "S\xe3o Paulo region live",
    tag: "infra"
  }, {
    icon: Braces,
    text: "TypeScript SDK 3.0",
    tag: "sdk"
  }], [{
    icon: Zap,
    text: "Cold starts down 41%",
    tag: "perf"
  }, {
    icon: Users,
    text: "Team seats now unlimited",
    tag: "plans"
  }, {
    icon: Database,
    text: "Point-in-time restore",
    tag: "new"
  }, {
    icon: Bell,
    text: "Slack alerts for incidents",
    tag: "integrations"
  }, {
    icon: Sparkles,
    text: "Assistant answers in your data",
    tag: "ai"
  }], [{
    icon: Terminal,
    text: "CLI login without a browser",
    tag: "cli"
  }, {
    icon: KeyRound,
    text: "Scoped API keys",
    tag: "security"
  }, {
    icon: Smartphone,
    text: "iOS app in the store",
    tag: "mobile"
  }, {
    icon: Layers,
    text: "Environments per branch",
    tag: "new"
  }, {
    icon: FileText,
    text: "Audit log export",
    tag: "compliance"
  }]],
  M = {
    release: "A new release, ready for your next deployment.",
    new: "Included in every workspace, starting today.",
    trust: "Independent controls reviewed for another year.",
    infra: "Your application, closer to your customers.",
    sdk: "Typed requests and clearer errors, out of the box.",
    perf: "Less waiting between a request and a response.",
    plans: "Bring the whole team into the same workspace.",
    integrations: "The right people hear about incidents first.",
    ai: "Answers that cite the source, inside your workspace.",
    cli: "Authenticate securely from your terminal.",
    security: "Give each integration only the access it needs.",
    mobile: "Keep your workspace with you, wherever you go.",
    compliance: "A complete record, ready when you need it."
  },
  j = [.22, 1, .36, 1];
function N({
  items: e,
  duration: t,
  reverse: a,
  reduce: i,
  selected: l,
  onSelect: o
}) {
  let [s, d] = (0, React.useState)(!1),
    c = [...e, ...e];
  return <div className="relative overflow-hidden py-0.5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" onPointerEnter={() => d(!0)} onPointerLeave={() => d(!1)}><div className="flex w-max items-center will-change-transform" style={{
      animation: i ? void 0 : `${a ? "bento40-right" : "bento40-left"} ${t}s linear infinite`,
      animationPlayState: s ? "paused" : "running"
    }}>{c.map((t, a) => {
        let n = t.icon;
        return <button type="button" aria-pressed={l === t.text} onClick={() => o(t)} onFocus={() => d(!0)} onBlur={() => d(!1)} tabIndex={a >= e.length ? -1 : 0} className="group/item mx-1 flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 bg-white py-1.5 pl-2.5 pr-3 text-[11px] font-medium text-neutral-600 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-[border-color,color,transform] duration-200 hover:border-neutral-900 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:shadow-none dark:hover:border-white dark:hover:text-white"><n className="h-3.5 w-3.5 text-neutral-400 transition-colors group-hover/item:text-inherit" />{t.text}<span className="rounded-full bg-neutral-100 px-1.5 py-px text-[9px] font-medium uppercase tracking-wider text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">{t.tag}</span><ArrowUpRight className="h-3 w-3 text-neutral-300 transition-colors group-hover/item:text-inherit dark:text-neutral-600" /></button>;
      })}</div></div>;
}
function z() {
  let e = !!(0, __mod_50969.I)(),
    [t, a] = (0, React.useState)(b[0][0]);
  return <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"><style>{`
        @keyframes bento40-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes bento40-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style><div className="@container relative min-h-[220px] flex-1 overflow-hidden"><motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: !0,
        amount: .3
      }} transition={{
        duration: .8,
        ease: j
      }} className="absolute inset-0 flex flex-col justify-center gap-2 @2xl:gap-3"><N items={b[0]} duration={48} reduce={e} selected={t.text} onSelect={a} /><N items={b[1]} duration={40} reverse={!0} reduce={e} selected={t.text} onSelect={a} /><N items={b[2]} duration={54} reduce={e} selected={t.text} onSelect={a} /><div className="mx-auto mt-2 flex w-[calc(100%-3rem)] max-w-[400px] items-center gap-3 rounded-xl bg-neutral-900 px-3.5 py-3 text-white dark:bg-white dark:text-neutral-900"><t.icon className="h-4 w-4 shrink-0" /><div className="min-w-0"><p className="truncate text-[11px] font-medium">{t.text}</p><p className="mt-1 truncate text-[10px] opacity-60">{M[t.tag] ?? "Now available in your workspace."}</p></div></div></motion.div></div><div className="px-6 pb-6 pt-2"><h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">Always shipping</h3><p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">A live feed of what changed and how the platform is doing, so the state of things is never a mystery.</p></div></article>;
}

export default z;
