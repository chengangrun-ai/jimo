import { ArrowUpRight, Check, Copy, PackageCheck, ShieldCheck, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_47962 from "../_helpers/47962";
/**
 * Download 8
 * Terminal installer with a copy command
 * slug: download-8
 * category: Download
 * export: Download8
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/download/download-8.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .08,
        delayChildren: .05
      }
    }
  },
  p = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .6,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  w = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .07
      }
    }
  },
  b = {
    hidden: {
      opacity: 0,
      y: 6
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .35,
        ease: [.22, 1, .36, 1]
      }
    }
  },
  f = [{
    id: "macos",
    label: "macOS",
    command: "brew install orbit-cli",
    output: ["Downloading orbit 3.12.0 \xb7 darwin-arm64", "Signature verified \xb7 minisign", "Installed to /opt/homebrew/bin/orbit"]
  }, {
    id: "linux",
    label: "Linux",
    command: "curl -fsSL https://get.orbit.dev | sh",
    output: ["Detecting platform \xb7 linux-x86_64", "Signature verified \xb7 minisign", "Installed to /usr/local/bin/orbit"]
  }, {
    id: "windows",
    label: "Windows",
    command: "winget install Orbit.CLI",
    output: ["Resolving package \xb7 Orbit.CLI 3.12.0", "Authenticode signature verified", "Installed to %LOCALAPPDATA%\\Orbit\\orbit.exe"]
  }],
  g = [{
    icon: ShieldCheck,
    title: "Signed binaries",
    text: "Every artifact ships with a minisign signature and checksums published on the releases page."
  }, {
    icon: Terminal,
    title: "Shell completions",
    text: "Completions for bash, zsh, fish, and PowerShell install automatically on first run."
  }, {
    icon: PackageCheck,
    title: "Pinned releases",
    text: "Lock your team to a known version and roll forward on your own schedule."
  }];
function Download8() {
  let [e, t] = (0, React.useState)(f[0].id),
    [i, s] = (0, React.useState)(!1),
    l = (0, React.useRef)(null),
    r = (0, __mod_50969.I)(),
    v = f.find(t => t.id === e) ?? f[0];
  (0, React.useEffect)(() => () => {
    null !== l.current && window.clearTimeout(l.current);
  }, []);
  let j = async () => {
    try {
      await navigator.clipboard.writeText(v.command), s(!0), null !== l.current && window.clearTimeout(l.current), l.current = window.setTimeout(() => s(!1), 1800);
    } catch {
      s(!1);
    }
  };
  return <section className="w-full bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><motion.div variants={h} initial="hidden" whileInView="visible" viewport={{
      once: !0,
      margin: "-80px"
    }} className="mx-auto flex w-full max-w-[1400px] flex-col items-center"><motion.h2 variants={p} className="max-w-3xl text-center text-3xl font-medium tracking-tight text-neutral-900 text-balance dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">Install the command center in one line.</motion.h2><motion.p variants={p} className="mt-6 max-w-xl text-center text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">Releases, environment checks, and team scripts: run from the terminal your engineers already live in.</motion.p><motion.div variants={p} className="mt-12 w-full max-w-3xl"><div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-xl shadow-neutral-900/10 dark:border-neutral-800 dark:shadow-black/40"><div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5"><div className="flex items-center gap-3"><span className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /></span><span className="hidden font-mono text-xs text-neutral-500 sm:inline">orbit · install</span></div><div className="flex rounded-full border border-white/10 bg-white/5 p-1">{f.map(i => <button type="button" onClick={() => t(i.id)} aria-pressed={e === i.id} className="relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">{e === i.id && <motion.span layoutId="orbit-active-tab" style={{
                  borderRadius: 9999
                }} transition={{
                  duration: .35,
                  ease: [.22, 1, .36, 1]
                }} className="absolute inset-0 bg-white" />}<span className={`relative z-10 transition-colors ${e === i.id ? "text-neutral-900" : "text-neutral-400 hover:text-white"}`}>{i.label}</span></button>)}</div></div><div className="px-5 py-6 sm:px-7 sm:py-7"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><p className="min-w-0 break-words font-mono text-sm leading-relaxed text-neutral-100 sm:text-[15px]"><span className="select-none text-neutral-500">$ </span>{v.command}{r ? <span aria-hidden="true" className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100" /> : <motion.span aria-hidden="true" className="ml-1.5 inline-block h-[1.05em] w-[7px] align-middle bg-neutral-100" animate={{
                  opacity: [1, 1, 0, 0]
                }} transition={{
                  duration: 1.1,
                  repeat: 1 / 0,
                  times: [0, .5, .5, 1],
                  ease: "linear"
                }} />}</p><button type="button" onClick={j} className="inline-flex h-9 min-w-[104px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-xs font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"><__mod_47962.N mode="wait" initial={!1}>{i ? <motion.span initial={{
                    opacity: 0,
                    y: 4
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -4
                  }} transition={{
                    duration: .18,
                    ease: [.22, 1, .36, 1]
                  }} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5" aria-hidden="true" />Copied</motion.span> : <motion.span initial={{
                    opacity: 0,
                    y: 4
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -4
                  }} transition={{
                    duration: .18,
                    ease: [.22, 1, .36, 1]
                  }} className="inline-flex items-center gap-2"><Copy className="h-3.5 w-3.5" aria-hidden="true" />Copy</motion.span>}</__mod_47962.N></button></div><div className="mt-6 border-t border-white/10 pt-5"><div className="min-h-[132px] sm:min-h-[120px]"><__mod_47962.N mode="wait" initial={!1}><motion.ul variants={w} initial="hidden" animate="visible" exit={{
                    opacity: 0,
                    transition: {
                      duration: .15
                    }
                  }} className="space-y-2.5 font-mono text-[13px]">{v.output.map(e => <motion.li variants={b} className="flex items-center gap-2.5 text-neutral-400"><Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" /><span className="min-w-0 break-words">{e}</span></motion.li>)}<motion.li variants={b} className="pt-1.5 text-neutral-100">→ run <span className="rounded-md bg-white/10 px-1.5 py-0.5">orbit init</span> to link your workspace</motion.li></motion.ul></__mod_47962.N></div></div></div></div></motion.div><motion.div variants={p} className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-xs text-neutral-500 dark:text-neutral-500"><span>v3.12.0</span><span aria-hidden="true">·</span><span>sha256 + minisign</span><span aria-hidden="true">·</span><span>macos / linux / windows</span></motion.div><motion.a variants={p} href="#" className="mt-8 inline-flex cursor-pointer items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:text-white dark:hover:text-neutral-300 dark:focus-visible:ring-white/30">Prefer signed binaries? Direct downloads<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></motion.a><div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">{g.map(e => <motion.div variants={p}><e.icon className="h-5 w-5 text-neutral-900 dark:text-white" aria-hidden="true" /><h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">{e.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{e.text}</p></motion.div>)}</div></motion.div></section>;
}

export default Download8;
