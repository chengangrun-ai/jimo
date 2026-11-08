import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_6450 from "../_helpers/6450";
import * as __mod_55299 from "../_helpers/55299";
/**
 * Onboarding 4
 * slug: onboarding-4
 * category: onboarding
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let s = (...e) => e.filter(Boolean).join(" "),
  _ = "text-neutral-900/62 dark:text-neutral-100/62",
  d = "text-[14px]/[20px] font-medium",
  b = "text-[13px]/[16px] font-semibold tabular-nums",
  x = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  u = "h-10",
  p = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  h = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  k = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  m = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]";
function v({
  id: e,
  value: a,
  onChange: r,
  options: c,
  disabled: d,
  placeholder: x = "Select…",
  className: u,
  triggerClassName: p,
  leading: h,
  ariaLabel: k
}) {
  let m = (0, React.useId)(),
    [v, f] = (0, React.useState)(!1),
    [g, w] = (0, React.useState)(0),
    [y, j] = (0, React.useState)(!1),
    [N, C] = (0, React.useState)(),
    S = (0, React.useRef)(null),
    z = (0, React.useRef)(null),
    A = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    L = c.findIndex(e => e.value === a),
    E = L >= 0 ? c[L] : void 0,
    W = e => {
      if (d) return;
      let a = S.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          o = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), o = Math.min(o, a.bottom);
          break;
        }
        let l = o - e.bottom,
          n = e.top - t,
          i = Math.min(32 * c.length + 8, 264),
          s = l < i + 8 && n > l,
          _ = (s ? n : l) - 8;
        j(s), C(_ < i ? Math.max(_, 40) : void 0);
      }
      w(e ?? (L >= 0 ? L : 0)), f(!0);
    };
  (0, React.useEffect)(() => {
    if (!v) return;
    let e = S.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || f(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [v]), (0, React.useEffect)(() => {
    if (!v) return;
    let e = z.current,
      a = e?.querySelector(`[data-index="${g}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [v, g]);
  let M = e => {
    let a = c[e];
    a && (r(a.value), f(!1), S.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={S} className={s("relative", u)}><button id={e} type="button" role="combobox" aria-expanded={v} aria-controls={m} aria-haspopup="listbox" disabled={d} onClick={() => v ? f(!1) : W()} onKeyDown={e => {
      if (!d) {
        if (!v) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), W());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), f(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), w(e => Math.min(e + 1, c.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), w(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), w(0);else if ("End" === e.key) e.preventDefault(), w(c.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), M(g);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = A.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = c.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && w(t);
        }
      }
    }} aria-label={k} className={s("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", p)}><span className="flex min-w-0 items-center gap-2">{h}<span className={s("truncate", !E && "text-neutral-900/62 dark:text-neutral-100/62")}>{E ? E.label : x}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{v && <ul ref={z} id={m} role="listbox" tabIndex={-1} style={{
      maxHeight: N
    }} className={s("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", y ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{c.map((e, r) => {
        let o = e.value === a;
        return <li role="option" aria-selected={o} data-index={r} data-highlighted={r === g ? "" : void 0} onMouseEnter={() => w(r)} onClick={() => M(r)} className={s("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={s(b, _, "shrink-0")}>{e.hint}</span>}</span>{o && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let f = [{
  value: "lisbon",
  label: "Lisbon (GMT+0)",
  short: "Lisbon"
}, {
  value: "berlin",
  label: "Berlin (GMT+1)",
  short: "Berlin"
}, {
  value: "new-york",
  label: "New York (GMT−5)",
  short: "New York"
}, {
  value: "singapore",
  label: "Singapore (GMT+8)",
  short: "Singapore"
}];
let w = (...e) => e.filter(Boolean).join(" "),
  y = "text-neutral-900 dark:text-neutral-100",
  j = "text-neutral-900/62 dark:text-neutral-100/62",
  N = "text-[15px]/[20px] font-bold",
  C = "text-[13px]/[16px] font-semibold tabular-nums",
  S = "rounded-[var(--rb-r-4xl,18px)]",
  z = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  A = "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold",
  L = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  E = "h-10",
  W = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  M = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  D = "size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28",
  T = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  R = "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10",
  B = "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]",
  H = [{
    id: "profile",
    label: "Profile",
    blurb: "Basic profile details."
  }, {
    id: "role",
    label: "Role",
    blurb: "Tune starter views."
  }, {
    id: "source",
    label: "Source",
    blurb: "Optional discovery signal."
  }, {
    id: "workspace",
    label: "Workspace",
    blurb: "Name the workspace."
  }, {
    id: "goals",
    label: "Goals",
    blurb: "Pick first workflows."
  }, {
    id: "invite",
    label: "Invite",
    blurb: "Add teammates."
  }],
  I = ["Engineering", "Design", "Product", "Operations"],
  P = ["Search", "Social", "A colleague", "Conference talk"],
  F = ["Track work across teams", "Automate handoffs", "Report on delivery", "Centralise documents"],
  q = {
    profile: {
      title: "Set up your profile",
      blurb: "Add the details teammates will see across the workspace."
    },
    role: {
      title: "What do you work on?",
      blurb: "We use this to pick the starter views you land on."
    },
    source: {
      title: "How did you find us?",
      blurb: "Optional, and it only ever shapes what we build next."
    },
    workspace: {
      title: "Name your workspace",
      blurb: "This appears in invitations and in the sidebar."
    },
    goals: {
      title: "What should we set up first?",
      blurb: "Pick as many as you like. You can change these later."
    },
    invite: {
      title: "Bring your team in",
      blurb: "Invitations stay open for 14 days."
    }
  };
let $ = (...e) => e.filter(Boolean).join(" "),
  O = "text-neutral-900/62 dark:text-neutral-100/62",
  U = "text-[14px]/[20px] font-medium",
  V = $(U, O, "line-clamp-2"),
  G = [{
    id: "profile",
    title: "Complete your profile",
    blurb: "A name and photo make review threads easier to follow.",
    action: "Edit profile"
  }, {
    id: "workspace",
    title: "Name your workspace",
    blurb: "Appears in invitations and in everyone's sidebar.",
    action: "Rename"
  }, {
    id: "import",
    title: "Import your first project",
    blurb: "Bring in a CSV or connect an existing tracker.",
    action: "Start import"
  }, {
    id: "invite",
    title: "Invite two teammates",
    blurb: "Workspaces with three or more people get shared views.",
    action: "Send invites"
  }, {
    id: "integration",
    title: "Connect your repository",
    blurb: "Link branches and pull requests to the work that opened them.",
    action: "Connect"
  }, {
    id: "notifications",
    title: "Choose how you're notified",
    blurb: "Pick the events worth interrupting you for.",
    action: "Open settings"
  }],
  J = (...e) => e.filter(Boolean).join(" "),
  K = "text-neutral-900/62 dark:text-neutral-100/62",
  Z = "text-[14px]/[20px] font-medium",
  Q = "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold",
  X = [{
    id: "roadmap",
    title: "Plan a roadmap",
    blurb: "Quarterly themes, dated milestones and a view leadership can read."
  }, {
    id: "sprints",
    title: "Run sprints",
    blurb: "Cycles, capacity and a board that clears itself every two weeks."
  }, {
    id: "requests",
    title: "Triage requests",
    blurb: "One intake queue for bugs, questions and customer escalations."
  }, {
    id: "docs",
    title: "Write things down",
    blurb: "Specs and decision records that stay attached to the work."
  }, {
    id: "handoffs",
    title: "Automate handoffs",
    blurb: "Move work between teams without anyone chasing a status update."
  }, {
    id: "reporting",
    title: "Report on delivery",
    blurb: "Cycle time, throughput and where things actually get stuck."
  }],
  ee = ["Just me", "2–10", "11–50", "50+"],
  ea = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = r.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let o = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
    r[o].focus(), r[o].click();
  };
let eo = (...e) => e.filter(Boolean).join(" "),
  el = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  en = "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold",
  ei = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  ec = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100";
function es({
  id: e,
  value: a,
  onChange: r,
  options: c,
  disabled: s,
  placeholder: _ = "Select…",
  className: d,
  triggerClassName: b,
  leading: x,
  ariaLabel: u
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [f, g] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    C = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    S = c.findIndex(e => e.value === a),
    z = S >= 0 ? c[S] : void 0,
    A = e => {
      if (s) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          o = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), o = Math.min(o, a.bottom);
          break;
        }
        let l = o - e.bottom,
          n = e.top - t,
          i = Math.min(32 * c.length + 8, 264),
          s = l < i + 8 && n > l,
          _ = (s ? n : l) - 8;
        g(s), y(_ < i ? Math.max(_, 40) : void 0);
      }
      v(e ?? (S >= 0 ? S : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let L = e => {
    let a = c[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={eo("relative", d)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={s} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!s) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, c.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(c.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), L(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = C.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = c.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={u} className={eo("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{x}<span className={eo("truncate", !z && "text-neutral-900/62 dark:text-neutral-100/62")}>{z ? z.label : _}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={eo("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", f ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{c.map((e, r) => {
        let o = e.value === a;
        return <li role="option" aria-selected={o} data-index={r} data-highlighted={r === m ? "" : void 0} onMouseEnter={() => v(r)} onClick={() => L(r)} className={eo("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={eo("text-[13px]/[16px] font-semibold tabular-nums", "text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.hint}</span>}</span>{o && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let e_ = ["Member", "Admin", "Viewer"].map(e => ({
    value: e,
    label: e
  })),
  ed = 3;
let eu = (...e) => e.filter(Boolean).join(" "),
  ep = "text-neutral-900 dark:text-neutral-100",
  eh = "text-neutral-900/62 dark:text-neutral-100/62",
  ek = "text-[14px]/[20px] font-medium",
  em = "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold",
  ev = [{
    label: "Workspace",
    value: "Northwind"
  }, {
    label: "Members invited",
    value: "4"
  }, {
    label: "Starter template",
    value: "Sprint board"
  }, {
    label: "Plan",
    value: "Team trial, 14 days"
  }],
  ef = (...e) => e.filter(Boolean).join(" "),
  eg = "text-neutral-900 dark:text-neutral-100",
  ew = "text-neutral-900/62 dark:text-neutral-100/62",
  ey = "text-[14px]/[20px] font-medium",
  ej = "text-[15px]/[20px] font-bold",
  eN = "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold",
  eC = "relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40",
  eS = "h-10",
  ez = "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]",
  eA = "flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100",
  eL = "max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78";
function eE({
  id: e,
  value: a,
  onChange: r,
  options: c,
  disabled: s,
  placeholder: _ = "Select…",
  className: d,
  triggerClassName: b,
  leading: x,
  ariaLabel: u
}) {
  let p = (0, React.useId)(),
    [h, k] = (0, React.useState)(!1),
    [m, v] = (0, React.useState)(0),
    [f, g] = (0, React.useState)(!1),
    [w, y] = (0, React.useState)(),
    j = (0, React.useRef)(null),
    N = (0, React.useRef)(null),
    C = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    S = c.findIndex(e => e.value === a),
    z = S >= 0 ? c[S] : void 0,
    A = e => {
      if (s) return;
      let a = j.current,
        r = a?.ownerDocument.defaultView;
      if (a && r) {
        let e = a.getBoundingClientRect(),
          t = 0,
          o = r.innerHeight;
        for (let e = a.parentElement; e; e = e.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(e).overflowY)) {
          let a = e.getBoundingClientRect();
          t = Math.max(t, a.top), o = Math.min(o, a.bottom);
          break;
        }
        let l = o - e.bottom,
          n = e.top - t,
          i = Math.min(32 * c.length + 8, 264),
          s = l < i + 8 && n > l,
          _ = (s ? n : l) - 8;
        g(s), y(_ < i ? Math.max(_, 40) : void 0);
      }
      v(e ?? (S >= 0 ? S : 0)), k(!0);
    };
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = j.current,
      a = e?.ownerDocument;
    if (!a) return;
    let r = a => {
      e.contains(a.target) || k(!1);
    };
    return a.addEventListener("mousedown", r), a.addEventListener("touchstart", r), () => {
      a.removeEventListener("mousedown", r), a.removeEventListener("touchstart", r);
    };
  }, [h]), (0, React.useEffect)(() => {
    if (!h) return;
    let e = N.current,
      a = e?.querySelector(`[data-index="${m}"]`);
    if (!e || !a) return;
    let r = a.offsetTop,
      t = r + a.offsetHeight;
    r < e.scrollTop ? e.scrollTop = r : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [h, m]);
  let L = e => {
    let a = c[e];
    a && (r(a.value), k(!1), j.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={j} className={ef("relative", d)}><button id={e} type="button" role="combobox" aria-expanded={h} aria-controls={p} aria-haspopup="listbox" disabled={s} onClick={() => h ? k(!1) : A()} onKeyDown={e => {
      if (!s) {
        if (!h) {
          ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), A());
          return;
        }
        if ("Escape" === e.key || "Tab" === e.key) {
          "Escape" === e.key && e.stopPropagation(), k(!1);
          return;
        }
        if ("ArrowDown" === e.key) e.preventDefault(), v(e => Math.min(e + 1, c.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), v(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), v(0);else if ("End" === e.key) e.preventDefault(), v(c.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), L(m);else if (1 === e.key.length && /\S/.test(e.key)) {
          let a = Date.now(),
            r = C.current;
          r.buffer = a - r.at > 700 ? e.key : r.buffer + e.key, r.at = a;
          let t = c.findIndex(e => e.label.toLowerCase().startsWith(r.buffer.toLowerCase()));
          t >= 0 && v(t);
        }
      }
    }} aria-label={u} className={ef("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full min-w-[100%]", b)}><span className="flex min-w-0 items-center gap-2">{x}<span className={ef("truncate", !z && "text-neutral-900/62 dark:text-neutral-100/62")}>{z ? z.label : _}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{h && <ul ref={N} id={p} role="listbox" tabIndex={-1} style={{
      maxHeight: w
    }} className={ef("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", f ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{c.map((e, r) => {
        let o = e.value === a;
        return <li role="option" aria-selected={o} data-index={r} data-highlighted={r === m ? "" : void 0} onMouseEnter={() => v(r)} onClick={() => L(r)} className={ef("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="flex min-w-0 items-baseline gap-2"><span className="truncate">{e.label}</span>{e.hint && <span className={ef("text-[13px]/[16px] font-semibold tabular-nums", ew, "shrink-0")}>{e.hint}</span>}</span>{o && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>;
      })}</ul>}</div>;
}
let eW = ["Account", "Workspace", "Team", "Finish"],
  eM = ["United States (us-east)", "Europe (eu-central)", "Asia Pacific (ap-southeast)"],
  eD = eM.map(e => ({
    value: e,
    label: e
  })),
  eT = {
    "onboarding-1": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: o,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              o = r ? new r(t) : null;
            return o?.observe(a), () => o?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [n, g] = (0, React.useState)("Sam Rivera"),
        [w, y] = (0, React.useState)("Product Engineer"),
        [j, N] = (0, React.useState)("berlin"),
        [C, S] = (0, React.useState)(!0),
        z = n.trim().split(/\s+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase()).join("") || "-",
        A = f.find(e => e.value === j)?.short;
      return <div className={s("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full overflow-hidden")}><div className="relative flex min-w-0 flex-1 flex-col lg:max-w-[46%]"><form ref={e} onScroll={r} onSubmit={e => e.preventDefault()} className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 sm:p-10"><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Set up your profile</h2><p className={s(d, _, "mt-1.5")}>Add the details teammates will see across the workspace.</p><div className="mt-8 flex items-center gap-4"><span aria-hidden="true" className={s(k, "size-14")}><span className={m}><__mod_22728.n icon={__mod_34951.A} size={24} strokeWidth={2} className={_} /></span></span><div className="min-w-0"><button type="button" className={s("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>Upload photo</button><p className={s("max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-2")}>PNG or JPG, at least 400 × 400 px, up to 10 MB.</p></div></div><div className="mt-6 space-y-4"><div className="flex flex-col gap-2"><label htmlFor="ob1-name" className={h}>Full name<span aria-hidden="true" className={_}>*</span></label><div className={s(x, u)}><input id="ob1-name" required={!0} value={n} onChange={e => g(e.target.value)} placeholder="Your name" className={p} /></div></div><div className="flex flex-col gap-2"><label htmlFor="ob1-title" className={h}>Job title</label><div className={s(x, u)}><input id="ob1-title" value={w} onChange={e => y(e.target.value)} placeholder="What you do" className={p} /></div></div><div className="flex flex-col gap-2"><label htmlFor="ob1-zone" className={h}>Timezone</label><v id="ob1-zone" value={j} onChange={N} options={f} placeholder="Select a timezone" /></div><label className="flex cursor-pointer items-center gap-2"><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={C} onChange={e => S(e.target.checked)} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className={s(d, "text-neutral-900/78 dark:text-neutral-100/78")}>Send me product updates and workspace tips.</span></label></div><button type="submit" disabled={"" === n.trim()} className={s("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "mt-8 w-full")}>Continue</button></form><div aria-hidden="true" className={s("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={s("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div><aside className={s("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden min-w-0 flex-1 items-center justify-center p-10 lg:flex")}><div className="w-full max-w-[320px]"><p className={s(b, _)}>Directory preview</p><div className={s("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-2")}><div className="flex items-center gap-3 p-4"><span aria-hidden="true" className={s(k, "size-10")}><span className={m}>{z}</span></span><div className="min-w-0 flex-1"><p className={s("text-[15px]/[20px] font-bold", "truncate")}>{n.trim() || "Your name"}</p><p className={s(d, _, "mt-0.5 truncate")}>{w.trim() || "Job title"}</p></div></div><dl className="grid grid-cols-2 gap-1"><div className="px-4 py-3"><dt className={s(b, _, "truncate")}>Timezone</dt><dd className={s(d, "mt-0.5 truncate")}>{A ?? <span className="text-neutral-900/62 dark:text-neutral-100/62">None</span>}</dd></div><div className="px-4 py-3"><dt className={s(b, _, "truncate")}>Updates</dt><dd className={s(d, "mt-0.5 truncate")}>{C ? "Subscribed" : "Off"}</dd></div></dl></div><p className={s(d, _, "mt-3")}>This is how teammates will see you. You can change any of it later from your account settings.</p></div></aside></div>;
    },
    "onboarding-2": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = function () {
          let e = (0, React.useRef)(null),
            [a, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let a = e.current;
              if (!a) return;
              let {
                scrollTop: t,
                scrollHeight: o,
                clientHeight: l
              } = a;
              r({
                start: t > 1,
                end: t + l < o - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            let a = e.current;
            if (!a) return;
            t();
            let r = a.ownerDocument.defaultView?.ResizeObserver,
              o = r ? new r(t) : null;
            return o?.observe(a), () => o?.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        [n, c] = (0, React.useState)(0),
        [s, _] = (0, React.useState)("Sam Rivera"),
        [d, b] = (0, React.useState)("Product Lead"),
        [x, u] = (0, React.useState)("Product"),
        [p, h] = (0, React.useState)(""),
        [k, m] = (0, React.useState)("Northwind"),
        [v, f] = (0, React.useState)([F[0]]),
        [Y, $] = (0, React.useState)(["", ""]),
        O = H[n],
        U = q[O.id],
        V = n === H.length - 1,
        G = k.trim().toLowerCase().replace(/\s+/g, "-") || "workspace";
      return <div className={w("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", y, "relative flex h-full min-h-[720px] w-full overflow-hidden")}><div className="hidden w-64 shrink-0 flex-col justify-center px-6 lg:flex"><ol className="space-y-0">{H.map((e, a) => {
              let r = a < n,
                o = a === n;
              return <li><button type="button" onClick={() => c(a)} aria-current={o ? "step" : void 0} className={w("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", S, "flex w-full cursor-pointer items-start gap-3 px-1 py-1.5 text-left")}><span aria-hidden="true" className={w("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", r ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : o ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10", "mt-0.5")}>{r ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : a + 1}</span><span className="min-w-0"><span className={w(N, "block truncate", o || r ? y : j)}>{e.label}{r && <span className="sr-only">, done</span>}{o && <span className="sr-only">, current</span>}</span><span className={w(C, j, "block truncate")}>{e.blurb}</span></span></button>{a < H.length - 1 && <span aria-hidden="true" className={w("border-r border-transparent", "ml-4 block h-3 w-px")} />}</li>;
            })}</ol></div><div className="flex min-w-0 flex-1 p-4 sm:p-6"><div className={w("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-w-0 flex-1")}><form ref={e} onScroll={r} onSubmit={e => {
              e.preventDefault(), V || c(e => e + 1);
            }} className="flex h-full w-full flex-col overflow-y-auto p-6 sm:p-10"><div className="mx-auto flex w-full max-w-[440px] flex-1 flex-col"><p className={w(C, j, "lg:hidden")}>Step {n + 1} of {H.length}</p><h2 className={w("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "mt-2 lg:mt-0")}>{U.title}</h2><p className={w("text-[14px]/[20px] font-medium", j, "mt-1.5")}>{U.blurb}</p><div className="mt-8 space-y-4">{"profile" === O.id && <><div className="flex flex-col gap-2"><label htmlFor="ob2-name" className={M}>Full name</label><div className={w(L, E)}><input id="ob2-name" value={s} onChange={e => _(e.target.value)} placeholder="Your name" className={W} /></div></div><div className="flex flex-col gap-2"><label htmlFor="ob2-title" className={M}>Job title</label><div className={w(L, E)}><input id="ob2-title" value={d} onChange={e => b(e.target.value)} placeholder="What you do" className={W} /></div></div></>}{"role" === O.id && <div role="radiogroup" aria-label="Role" className="flex flex-col gap-1">{I.map(e => {
                      let a = e === x;
                      return <label className={w(T, a ? B : R, S, "px-3")}><input type="radio" name="ob2-role" value={e} checked={a} onChange={() => u(e)} className={D} /><span className={w(N, "min-w-0 flex-1 truncate")}>{e}</span></label>;
                    })}</div>}{"source" === O.id && <div role="radiogroup" aria-label="Source" className="flex flex-col gap-1">{P.map(e => {
                      let a = e === p;
                      return <label className={w(T, a ? B : R, S, "px-3")}><input type="radio" name="ob2-source" value={e} checked={a} onChange={() => h(e)} className={D} /><span className={w(N, "min-w-0 flex-1 truncate")}>{e}</span></label>;
                    })}</div>}{"workspace" === O.id && <div className="flex flex-col gap-2"><label htmlFor="ob2-ws" className={M}>Workspace name</label><div className={w(L, E)}><input id="ob2-ws" value={k} onChange={e => m(e.target.value)} placeholder="Acme" aria-describedby="ob2-ws-hint" className={W} /></div><p id="ob2-ws-hint" className="max-w-[60ch] text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">Your team will reach it at northwind.app/{G}</p></div>}{"goals" === O.id && <div className="flex flex-col gap-1">{F.map(e => {
                      let a = v.includes(e);
                      return <label className={w(T, a ? B : R, S, "px-3")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={a} onChange={() => f(a => a.includes(e) ? a.filter(a => a !== e) : [...a, e])} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><span className={w(N, "min-w-0 flex-1 truncate")}>{e}</span></label>;
                    })}</div>}{"invite" === O.id && <>{Y.map((e, a) => <div className="flex flex-col gap-2"><label htmlFor={`ob2-invite-${a}`} className={M}>Email address {a + 1}</label><div className={w(L, E)}><input id={`ob2-invite-${a}`} type="email" value={e} onChange={e => $(r => r.map((r, t) => t === a ? e.target.value : r))} placeholder="teammate@company.com" className={W} /></div></div>)}<button type="button" onClick={() => $(e => [...e, ""])} className={w(z, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add another</button></>}</div><div className="mt-8 flex shrink-0 items-center gap-2 pt-4">{n > 0 && <button type="button" onClick={() => c(e => e - 1)} className={w(z, A)}>Back</button>}<button type="submit" className={w("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", A, "flex-1")}>{V ? "Finish setup" : "Continue"}</button></div></div></form><div aria-hidden="true" className={w("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={w("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "onboarding-3": function () {
      let [e, a] = (0, React.useState)(() => new Set(["profile", "workspace"])),
        r = Math.round(e.size / G.length * 100);
      return <div className={$("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative h-full min-h-[640px] w-full overflow-y-auto p-6 sm:p-8")}><div className="mx-auto w-full max-w-2xl"><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Get set up</h2><p className={$(U, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5")}>Six things that take about ten minutes and make everything after them easier.</p><div className="mt-5 flex items-center gap-3"><div role="progressbar" aria-valuenow={r} aria-valuemin={0} aria-valuemax={100} aria-label="Setup progress" className={$("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "min-w-0 flex-1")}><div style={{
                width: `${r}%`
              }} className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /></div><p className={$("text-[13px]/[16px] font-semibold tabular-nums", O, "shrink-0")}>{e.size} of {G.length} done</p></div><ul className={$("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-5")}>{G.map(r => {
              let o = e.has(r.id);
              return <li className={$("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "px-4 py-3")}><span className={$("relative inline-flex size-[18px] shrink-0 items-center justify-center", "size-5")}><input type="checkbox" checked={o} onChange={() => {
                    let e;
                    return e = r.id, a(a => {
                      let r = new Set(a);
                      return r.has(e) ? r.delete(e) : r.add(e), r;
                    });
                  }} aria-label={`Mark ${r.title} complete`} className={$("peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28", "size-5")} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><div className={$("flex min-w-0 flex-1 flex-col gap-0.5", "max-sm:basis-[calc(100%-2rem)]")}><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className={$("truncate", o && $(O, "line-through"))}>{r.title}</span></p><p data-description={!0} className={o ? V : "line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78"}>{r.blurb}</p></div><a href="#" className={$("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "max-sm:ms-8")}>{r.action}<__mod_22728.n icon={__mod_1497.A} size={16} strokeWidth={2} aria-hidden="true" /></a></li>;
            })}</ul><p className={$(U, O, "mt-4")}>You can leave this and come back to it from the workspace menu.</p></div></div>;
    },
    "onboarding-4": function () {
      let [e, a] = (0, React.useState)("sprints"),
        [r, l] = (0, React.useState)("2–10");
      return <div className={J("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[660px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto my-auto w-full max-w-[720px] shrink-0"><p className={J("text-[13px]/[16px] font-semibold tabular-nums", K)}>Step 2 of 4</p><h2 className={J("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "mt-2")}>What will you use this for first?</h2><p className={J(Z, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5")}>We'll open the matching workspace template. Everything else stays available.</p><div role="radiogroup" aria-label="Primary use case" className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">{X.map(r => {
              let o = r.id === e;
              return <label className={J("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "cursor-pointer text-left")}><input type="radio" name="ob4-use-case" value={r.id} checked={o} onChange={() => a(r.id)} className={J("size-[18px] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,border-width,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-[6px] checked:border-[var(--rb-accent,oklch(84%_0.15_165))] checked:bg-white checked:shadow-[0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:border-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:bg-neutral-900 dark:checked:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:border-neutral-100/28", "absolute end-4 top-4")} /><span className={J(o ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "flex flex-1 flex-col p-4")}><span className={J("text-[15px]/[20px] font-bold", "pr-6")}>{r.title}</span><span className={J(Z, K, "mt-1")}>{r.blurb}</span></span></label>;
            })}</div><fieldset className="mt-6"><legend id="ob4-team-size" className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">How many people will join you?</legend><div role="radiogroup" aria-labelledby="ob4-team-size" onKeyDown={ea} className={J("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "mt-2")}>{ee.map(e => {
                let a = e === r;
                return <button type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => l(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>;
              })}</div></fieldset><div className="mt-8 flex items-center gap-2"><button type="button" className={J("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", Q)}>Back</button><button type="button" className={J("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", Q, "flex-1")}>Continue</button></div></div></div>;
    },
    "onboarding-5": function () {
      let [e, a] = (0, React.useState)([{
          id: 1,
          email: "priya@northwind.co",
          role: "Admin"
        }, {
          id: 2,
          email: "",
          role: "Member"
        }]),
        [r, n] = (0, React.useState)(!1),
        c = (0, React.useRef)(null);
      (0, React.useEffect)(() => () => {
        c.current && clearTimeout(c.current);
      }, []);
      let s = (e, r) => a(a => a.map(a => a.id === e ? {
          ...a,
          ...r
        } : a)),
        _ = e.filter(e => e.email.trim()).length;
      return <div className={eo("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto my-auto w-full max-w-[560px] shrink-0"><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Invite your team</h2><p className={eo("text-[14px]/[20px] font-medium", "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5")}>Invitations stay open for 14 days. Anyone you add can be removed later.</p><div className={eo("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-6")}><div className="p-4"><div className="flex items-center justify-between gap-3"><p className="text-[15px]/[20px] font-bold">Invite link</p><button type="button" onClick={() => {
                  n(!0), c.current && clearTimeout(c.current), c.current = setTimeout(() => n(!1), 1600);
                }} className={eo(el, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={r ? __mod_90987.A : __mod_62714.A} size={16} strokeWidth={2} aria-hidden="true" />{r ? "Copied" : "Copy"}</button></div><div className={eo(ei, "h-8", "mt-2")}><input readOnly={!0} value="northwind.app/join/9f2c-41ab" aria-label="Invite link" className={eo("h-full w-full min-w-0 flex-1 bg-transparent px-3 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]", "font-mono text-[12px]/[16px] tabular-nums", "truncate")} /></div><span role="status" className="sr-only">{r ? "Copied" : ""}</span></div><div className="flex flex-col gap-3 p-4">{e.map((r, o) => <div className="flex items-end gap-2"><div className="flex min-w-0 flex-1 flex-col gap-2">{0 === o && <label htmlFor={`ob5-email-${r.id}`} className={ec}>Email address</label>}<div className={eo(ei, "h-10")}><input id={`ob5-email-${r.id}`} type="email" value={r.email} onChange={e => s(r.id, {
                      email: e.target.value
                    })} placeholder="teammate@company.com" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div className="flex w-[120px] shrink-0 flex-col gap-2">{0 === o && <label htmlFor={`ob5-role-${r.id}`} className={ec}>Role</label>}<es id={`ob5-role-${r.id}`} value={r.role} onChange={e => s(r.id, {
                    role: e
                  })} options={e_} /></div><button type="button" onClick={() => a(e => e.filter(e => e.id !== r.id))} disabled={1 === e.length} aria-label="Remove invitation" className={eo("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>)}<button type="button" onClick={() => a(e => [...e, {
                id: ed++,
                email: "",
                role: "Member"
              }])} className={eo(el, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "w-fit")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Add another</button></div></div><div className="mt-6 flex items-center gap-2"><button type="button" className={eo(el, en)}>Skip for now</button><button type="button" disabled={0 === _} className={eo("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", en, "flex-1")}>{_ > 0 ? `Send ${_} invitation${_ > 1 ? "s" : ""}` : "Send invitations"}</button></div></div></div>;
    },
    "onboarding-6": function () {
      return <div className={eu("bg-white dark:bg-neutral-950", ep, "relative flex h-full min-h-[580px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto my-auto w-full max-w-[420px] shrink-0 text-center"><span aria-hidden="true" className="mx-auto flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_6450.A} size={40} strokeWidth={2} className={ep} /></span><h2 className={eu("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "mt-4")}>Your workspace is ready</h2><p className={eu(ek, "text-neutral-900/78 dark:text-neutral-100/78", "mx-auto mt-1.5 max-w-[340px]")}>We've set everything up from your answers. All of it is editable from workspace settings.</p><dl className={eu("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-6 text-left")}>{ev.map(e => <div className="flex items-baseline justify-between gap-3 px-4 py-3"><dt className={eu(ek, eh, "truncate")}>{e.label}</dt><dd className={eu("text-[15px]/[20px] font-bold", "truncate tabular-nums")}>{e.value}</dd></div>)}</dl><div className="mt-6 flex flex-col gap-2"><button type="button" className={eu("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", em, "w-full")}>Open workspace<__mod_22728.n icon={__mod_55299.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" className={eu("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", em, "w-full")}>Take the two-minute tour</button></div><p className={eu(ek, eh, "mt-4")}>A copy of your setup summary is in your inbox.</p></div></div>;
    },
    "onboarding-7": function () {
      let [e, a] = (0, React.useState)(1),
        [r, n] = (0, React.useState)("Northwind"),
        [c, s] = (0, React.useState)("northwind"),
        [_, d] = (0, React.useState)(eM[1]),
        [b, x] = (0, React.useState)(!0),
        u = c.trim().toLowerCase().replace(/\s+/g, "-") || "workspace";
      return <div className={ef("bg-white dark:bg-neutral-950", eg, "relative flex h-full min-h-[680px] w-full flex-col overflow-y-auto")}><header className={ef("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0 px-6 py-5 sm:px-8")}><ol className="mx-auto flex w-full max-w-[640px] items-center">{eW.map((r, o) => {
              let n = o < e,
                c = o === e;
              return <li className={ef("flex min-w-0 items-center gap-2", o < eW.length - 1 && "flex-1")}><button type="button" onClick={() => a(o)} aria-current={c ? "step" : void 0} className={ef("focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "rounded-[var(--rb-r-4xl,18px)]", "flex min-w-0 cursor-pointer items-center gap-2 px-1 py-0.5")}><span aria-hidden="true" className={ef("grid size-7 shrink-0 place-items-center rounded-full border-2 text-[13px]/[16px] font-extrabold tabular-nums", n ? "border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none" : c ? "border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] text-neutral-900 dark:text-neutral-100 dark:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "border-transparent bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/10")}>{n ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} /> : o + 1}</span><span className={ef(ej, "hidden truncate sm:block", n || c ? eg : ew)}>{r}{n && <span className="sr-only">, done</span>}{c && <span className="sr-only">, current</span>}</span></button>{o < eW.length - 1 && <span aria-hidden="true" className={n ? "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" : "h-1 min-w-4 flex-1 rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:bg-neutral-100/10"} />}</li>;
            })}</ol></header><div className="flex flex-1 items-center justify-center p-6 sm:p-8"><form onSubmit={e => e.preventDefault()} className="mx-auto w-full max-w-[440px]"><h2 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Create your workspace</h2><p className={ef(ey, "text-neutral-900/78 dark:text-neutral-100/78", "mt-1.5")}>This is the container for your projects, documents and members.</p><div className="mt-6 space-y-4"><div className="flex flex-col gap-2"><label htmlFor="ob7-name" className={eA}>Workspace name</label><div className={ef(eC, eS)}><input id="ob7-name" value={r} onChange={e => n(e.target.value)} placeholder="Acme" className={ez} /></div></div><div className="flex flex-col gap-2"><label htmlFor="ob7-slug" className={eA}>Workspace URL</label><div className={ef(eC, eS)}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1">northwind.app/</span><input id="ob7-slug" value={c} onChange={e => s(e.target.value)} placeholder="workspace" aria-describedby="ob7-slug-hint" className={ez} /></div><p id="ob7-slug-hint" className={eL}>Members will reach it at northwind.app/{u}</p></div><div className="flex flex-col gap-2"><label htmlFor="ob7-region" className={eA}>Data region</label><eE id="ob7-region" value={_} onChange={d} options={eD} /><p className={eL}>Region is permanent once the workspace is created.</p></div><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]"><div className="flex items-start justify-between gap-4 p-4"><div className="min-w-0"><p className={ej}>Private workspace</p><p className={ef(ey, ew, "mt-0.5")}>Only invited members can find or join it.</p></div><button type="button" role="switch" aria-checked={b} aria-label="Private workspace" onClick={() => x(e => !e)} className={ef("group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] p-0.5 shadow-[inset_0_1px_2px_rgb(84_62_32/0.14),inset_0_0_0_1px_rgb(84_62_32/0.05)] transition-[background-color,box-shadow,outline-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:aria-[checked=false]:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_94%,black)] aria-checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] aria-checked:shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),inset_0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_75%,black)] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:bg-neutral-100/16 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)] dark:hover:aria-[checked=false]:not-disabled:bg-neutral-100/24 dark:aria-checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-checked:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]", "-mt-0.5")}><span aria-hidden="true" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)] transition-[translate,width] duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-active:w-6 group-aria-checked:translate-x-4 group-aria-checked:group-active:translate-x-3 group-disabled:shadow-none dark:bg-white" /></button></div></div></div><div className="mt-8 flex items-center gap-2"><button type="button" onClick={() => a(e => Math.max(0, e - 1))} className={ef("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eN)}>Back</button><button type="submit" onClick={() => a(e => Math.min(eW.length - 1, e + 1))} className={ef("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eN, "flex-1")}>Continue</button></div></form></div></div>;
    }
  },
  eR = {
    "onboarding-1": 640,
    "onboarding-2": 720,
    "onboarding-3": 640,
    "onboarding-4": 660,
    "onboarding-5": 640,
    "onboarding-6": 580,
    "onboarding-7": 680
  };

export { eT as components };
export { eR as heights };
