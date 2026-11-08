import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_50969 from "../_helpers/50969";
/**
 * Auth 6
 * Six-digit code verification screen
 * slug: auth-6
 * category: Auth
 * export: Auth6
 * deps: lucide-react, motion
 * original: ts-tailwind/blocks/auth/auth-6.tsx
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let o = [.22, 1, .36, 1];
function Auth6() {
  let [e, t] = (0, React.useState)(Array(6).fill("")),
    [r, d] = (0, React.useState)(30),
    u = (0, React.useRef)([]),
    c = (0, __mod_50969.I)(),
    x = e.every(Boolean);
  (0, React.useEffect)(() => {
    if (0 === r) return;
    let e = setTimeout(() => d(e => e - 1), 1e3);
    return () => clearTimeout(e);
  }, [r]);
  let h = e => {
      u.current[e]?.focus();
    },
    m = e => {
      e.preventDefault();
      let r = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
      r && (t(Array(6).fill("").map((e, t) => r[t] ?? "")), h(Math.min(r.length, 5)));
    },
    f = e => {
      e.target.select();
    },
    b = {
      hidden: {
        opacity: 0,
        y: 14 * !c
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: o
        }
      }
    },
    g = r => <input ref={e => {
      u.current[r] = e;
    }} id={`auth6-digit-${r + 1}`} name={`digit-${r + 1}`} type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} autoComplete={0 === r ? "one-time-code" : "off"} value={e[r]} onChange={e => {
      let a;
      return a = e.target.value.replace(/\D/g, "").slice(-1), void (t(e => {
        let t = [...e];
        return t[r] = a, t;
      }), a && r < 5 && h(r + 1));
    }} onKeyDown={t => {
      "Backspace" === t.key && !e[r] && r > 0 && h(r - 1), "ArrowLeft" === t.key && r > 0 && (t.preventDefault(), h(r - 1)), "ArrowRight" === t.key && r < 5 && (t.preventDefault(), h(r + 1));
    }} onPaste={m} onFocus={f} aria-label={`Digit ${r + 1} of 6`} className={`h-12 w-11 rounded-xl border bg-white text-center text-lg font-semibold tabular-nums text-neutral-900 outline-none transition-colors focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/10 dark:bg-neutral-900 dark:text-white dark:focus:border-white dark:focus:ring-white/10 sm:h-14 sm:w-12 sm:text-xl ${e[r] ? "border-neutral-900 dark:border-white" : "border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"}`} />;
  return <section className="flex min-h-screen w-full items-start justify-center bg-white px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:items-center"><motion.div initial="hidden" animate="visible" variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: .08,
          delayChildren: .05
        }
      }
    }} className="flex w-full max-w-sm flex-col items-center text-center"><motion.span variants={b} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l10 10-10 10L2 12z" /></svg></motion.span><motion.div variants={b} className="mt-6"><h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Check your email</h1><p className="mt-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">Enter the 6-digit code we sent to <span className="font-medium text-neutral-900 dark:text-white">amara@lumen.co</span>. It expires in 10 minutes.</p></motion.div><motion.form variants={b} onSubmit={t => {
        t.preventDefault(), console.log("Verify code:", e.join(""));
      }} className="mt-8 w-full"><fieldset><legend className="sr-only">6-digit verification code</legend><div className="flex items-center justify-center gap-2"><div className="flex gap-2">{[0, 1, 2].map(g)}</div><span className="h-px w-3 shrink-0 bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" /><div className="flex gap-2">{[3, 4, 5].map(g)}</div></div></fieldset><button type="submit" disabled={!x} className="mt-8 flex h-11 w-full cursor-pointer items-center justify-center rounded-xl bg-neutral-900 text-sm font-medium text-white transition-colors enabled:hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-neutral-900 dark:enabled:hover:bg-neutral-200 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950">{x ? "Verify code" : "Enter all 6 digits"}</button></motion.form><motion.p variants={b} className="mt-6 text-sm text-neutral-600 dark:text-neutral-400" aria-live="polite">Didn't receive it? {r > 0 ? <span className="tabular-nums text-neutral-500 dark:text-neutral-500">Resend in {r}s</span> : <button type="button" onClick={() => {
          t(Array(6).fill("")), d(30), h(0);
        }} className="cursor-pointer rounded-lg font-medium text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white dark:hover:text-neutral-300 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950">Resend code</button>}</motion.p><motion.div variants={b} className="mt-12"><a href="#" className="inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-neutral-400 dark:hover:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to sign in</a></motion.div></motion.div></section>;
}

export default Auth6;
