import { motion, AnimatePresence } from "motion/react";
import * as __mod_65174 from "../_helpers/65174";
import * as __mod_44647 from "../_helpers/44647";
import * as __mod_96022 from "../_helpers/96022";
import * as __mod_13473 from "../_helpers/13473";
import * as __mod_80071 from "../_helpers/80071";
import * as __mod_83331 from "../_helpers/83331";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_19809 from "../_helpers/19809";
import * as __mod_68142 from "../_helpers/68142";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_18583 from "../_helpers/18583";
import * as __mod_17601 from "../_helpers/17601";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_32406 from "../_helpers/32406";
import * as __mod_53096 from "../_helpers/53096";
import * as __mod_91418 from "../_helpers/91418";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_50969 from "../_helpers/50969";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_52038 from "../_helpers/52038";
import * as __mod_92916 from "../_helpers/92916";
import * as __mod_63285 from "../_helpers/63285";
import * as __mod_71898 from "../_helpers/71898";
import * as __mod_2972 from "../_helpers/2972";
import * as __mod_3175 from "../_helpers/3175";
import * as __mod_18595 from "../_helpers/18595";
import * as __mod_68240 from "../_helpers/68240";
import * as __mod_84831 from "../_helpers/84831";
import * as __mod_15805 from "../_helpers/15805";
import * as __mod_34133 from "../_helpers/34133";
import * as __mod_40170 from "../_helpers/40170";
import * as __mod_45346 from "../_helpers/45346";
import * as __mod_97838 from "../_helpers/97838";
import * as __mod_67812 from "../_helpers/67812";
import * as __mod_71497 from "../_helpers/71497";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_90227 from "../_helpers/90227";
import * as __mod_65525 from "../_helpers/65525";
import * as __mod_58661 from "../_helpers/58661";
import * as __mod_22830 from "../_helpers/22830";
import * as __mod_2605 from "../_helpers/2605";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_55410 from "../_helpers/55410";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_76021 from "../_helpers/76021";
import * as __mod_85018 from "../_helpers/85018";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_48240 from "../_helpers/48240";
import * as __mod_30322 from "../_helpers/30322";
import * as __mod_81320 from "../_helpers/81320";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_57854 from "../_helpers/57854";
import * as __mod_86829 from "../_helpers/86829";
import * as __mod_33126 from "../_helpers/33126";
import * as __mod_78830 from "../_helpers/78830";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_78805 from "../_helpers/78805";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_18327 from "../_helpers/18327";
import * as __mod_54810 from "../_helpers/54810";
import * as __mod_24580 from "../_helpers/24580";
import * as __mod_85585 from "../_helpers/85585";
import * as __mod_27151 from "../_helpers/27151";
import * as __mod_87924 from "../_helpers/87924";
import * as __mod_92190 from "../_helpers/92190";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_68686 from "../_helpers/68686";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_40279 from "../_helpers/40279";
import * as __mod_1836 from "../_helpers/1836";
import * as __mod_41442 from "../_helpers/41442";
import * as __mod_47962 from "../_helpers/47962";
import * as __mod_68656 from "../_helpers/68656";
import * as __mod_96738 from "../_helpers/96738";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_64132 from "../_helpers/64132";
import * as __mod_17771 from "../_helpers/17771";
import * as __mod_22244 from "../_helpers/22244";
import * as __mod_1497 from "../_helpers/1497";
/**
 * App Shell 8
 * slug: app-shell-8
 * category: app-shell
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let y = (...e) => e.filter(Boolean).join(" ");
function j() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let N = "text-neutral-900 dark:text-neutral-100",
  A = "text-neutral-900/78 dark:text-neutral-100/78",
  S = "text-neutral-900/62 dark:text-neutral-100/62",
  z = "text-[15px]/[20px] font-bold",
  C = "text-[13px]/[16px] font-semibold tabular-nums",
  D = "font-mono text-[12px]/[16px] tabular-nums",
  R = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  M = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  E = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  W = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  O = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  T = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  F = "px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  I = "rounded-[calc(var(--rb-r-sm,6px))] transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100",
  L = "text-neutral-900/62 dark:text-neutral-100/62 select-none",
  P = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  q = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  H = "text-right tabular-nums",
  $ = [{
    label: "In transit",
    current: !0
  }, {
    label: "Awaiting pickup",
    current: !1
  }, {
    label: "Delivered",
    current: !1
  }, {
    label: "Cancelled",
    current: !1
  }],
  B = [{
    name: "Newark distribution centre",
    needsAttention: !1
  }, {
    name: "Memphis sortation hub",
    needsAttention: !1
  }, {
    name: "Fresno cross-dock",
    needsAttention: !0
  }, {
    name: "Laredo border yard",
    needsAttention: !1
  }, {
    name: "Rotterdam gateway",
    needsAttention: !1
  }],
  K = [{
    label: "Workspace settings",
    icon: __mod_65174.A
  }, {
    label: "Invite teammate",
    icon: __mod_44647.A
  }, {
    label: "Documentation",
    icon: __mod_96022.A
  }],
  U = [{
    label: "Account settings",
    icon: __mod_65174.A
  }, {
    label: "Notification preferences",
    icon: __mod_13473.A
  }, {
    label: "Keyboard shortcuts",
    icon: __mod_80071.A
  }, {
    label: "Sign out",
    icon: __mod_83331.A
  }],
  V = [{
    label: "On-time delivery",
    value: "94.2%",
    delta: "+1.8 pts vs last week"
  }, {
    label: "Shipments in transit",
    value: "1,284",
    delta: "+96 vs last week"
  }, {
    label: "Average transit time",
    value: "3.4 days",
    delta: "−0.2 days vs last week"
  }, {
    label: "Open claims",
    value: "6",
    delta: "+2 vs last week"
  }],
  J = [{
    reference: "SHP-40912",
    consignee: "Brightwater Municipal Utilities District",
    carrier: "Ardent Freightways",
    status: "In transit",
    eta: "Aug 11",
    value: "$42,180"
  }, {
    reference: "SHP-40908",
    consignee: "Kettleworth Foods",
    carrier: "Novara Lines",
    status: "In transit",
    eta: "Aug 11",
    value: "$8,940"
  }, {
    reference: "SHP-40901",
    consignee: "Halverson Marine Supply",
    carrier: "Ardent Freightways",
    status: "Held",
    eta: "Aug 13",
    value: "$17,620"
  }, {
    reference: "SHP-40897",
    consignee: "Pinegrove Cabinetry",
    carrier: null,
    status: "Awaiting pickup",
    eta: "Aug 12",
    value: "$3,410"
  }, {
    reference: "SHP-40892",
    consignee: "Corsair Metalworks",
    carrier: "Trellis Logistics",
    status: "In transit",
    eta: "Aug 12",
    value: "$26,750"
  }, {
    reference: "SHP-40886",
    consignee: "Delacroix Paper",
    carrier: "Novara Lines",
    status: "In transit",
    eta: "Aug 13",
    value: "$6,205"
  }, {
    reference: "SHP-40881",
    consignee: "Oakhaven Brewing",
    carrier: "Trellis Logistics",
    status: "Delivered",
    eta: "Aug 8",
    value: "$11,340"
  }, {
    reference: "SHP-40877",
    consignee: "Stellamar Seafood",
    carrier: "Ardent Freightways",
    status: "In transit",
    eta: "Aug 14",
    value: "$19,880"
  }, {
    reference: "SHP-40870",
    consignee: "Vandergrift Tooling",
    carrier: "Meridian Carriers",
    status: "Awaiting pickup",
    eta: "Aug 14",
    value: "$4,960"
  }, {
    reference: "SHP-40864",
    consignee: "Cloudbank Textiles",
    carrier: "Novara Lines",
    status: "In transit",
    eta: "Aug 15",
    value: "$9,275"
  }, {
    reference: "SHP-40859",
    consignee: "Rowanberry Organics",
    carrier: "Trellis Logistics",
    status: "Delivered",
    eta: "Aug 9",
    value: "$2,830"
  }, {
    reference: "SHP-40851",
    consignee: "Ferris Point Aggregates",
    carrier: "Meridian Carriers",
    status: "In transit",
    eta: "Aug 15",
    value: "$31,470"
  }, {
    reference: "SHP-40846",
    consignee: "Windhollow Instruments",
    carrier: "Ardent Freightways",
    status: "In transit",
    eta: "Aug 16",
    value: "$7,690"
  }, {
    reference: "SHP-40840",
    consignee: "Juniper Hollow Distillery",
    carrier: "Meridian Carriers",
    status: "In transit",
    eta: "Aug 16",
    value: "$5,120"
  }],
  Q = {
    "In transit": "text-neutral-900 dark:text-neutral-100",
    "Awaiting pickup": "text-neutral-900 dark:text-neutral-100",
    Delivered: "text-neutral-900/78 dark:text-neutral-100/78",
    Held: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  };
function G({
  status: e
}) {
  return <span className={y("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", Q[e], "whitespace-nowrap")}>{"In transit" === e && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{e}</span>;
}
function X({
  onClose: e
}) {
  let {
      ref: a,
      edges: r,
      onScroll: i
    } = j(),
    [o, s] = (0, React.useState)(!0),
    [c, d] = (0, React.useState)(!1),
    [u, v] = (0, React.useState)(!1),
    g = (0, React.useRef)(null),
    w = (0, React.useRef)(null),
    A = (0, React.useRef)(null),
    D = (0, React.useId)(),
    E = e => {
      d(!1), v(!1), e && w.current?.focus({
        preventScroll: !0
      });
    };
  return (0, React.useEffect)(() => {
    if (!c) return;
    let e = g.current,
      a = e?.ownerDocument ?? document,
      r = requestAnimationFrame(() => {
        v(!0), A.current?.querySelector('[role="menuitem"]')?.focus({
          preventScroll: !0
        });
      }),
      t = a => {
        e?.contains(a.target) || E(!1);
      },
      n = e => {
        let r = Array.from(A.current?.querySelectorAll('[role="menuitem"]') ?? []);
        if (0 === r.length) return;
        let t = r.indexOf(a.activeElement);
        "Escape" === e.key ? (e.preventDefault(), E(!0)) : "ArrowDown" === e.key ? (e.preventDefault(), r[t < 0 || t === r.length - 1 ? 0 : t + 1]?.focus({
          preventScroll: !0
        })) : "ArrowUp" === e.key ? (e.preventDefault(), r[t <= 0 ? r.length - 1 : t - 1]?.focus({
          preventScroll: !0
        })) : "Home" === e.key ? (e.preventDefault(), r[0]?.focus({
          preventScroll: !0
        })) : "End" === e.key ? (e.preventDefault(), r[r.length - 1]?.focus({
          preventScroll: !0
        })) : "Tab" === e.key && E(!1);
      };
    return a.addEventListener("pointerdown", t), a.addEventListener("keydown", n), () => {
      cancelAnimationFrame(r), a.removeEventListener("pointerdown", t), a.removeEventListener("keydown", n);
    };
  }, [c]), <><div className="flex h-14 shrink-0 items-center gap-2.5 pl-3 pr-2"><span aria-hidden="true" className={y("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8", z)}>O</span><div className="min-w-0 flex-1"><p className={y(z, "truncate")}>Overland</p><p className={y(C, S, "truncate")}>Freight operations</p></div>{e ? <button type="button" aria-label="Close navigation" onClick={e} className={y(R, M)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button> : <button type="button" aria-label="Workspace options" className={y(R, M)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div><div className="relative min-h-0 flex-1"><nav ref={a} onScroll={i} aria-label="Primary" className="h-full overflow-y-auto px-2 pb-3"><div><p className={F}>Operations</p><ul className="space-y-0.5"><li><a href="#dispatch-board" className={T}><__mod_22728.n icon={__mod_19809.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">Dispatch board</span></a></li><li><button type="button" aria-expanded={o} aria-controls={D} onClick={() => s(e => !e)} className={y(T, "group")}><__mod_22728.n icon={__mod_68142.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">Shipments</span><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button><div id={D} className={y("grid", o ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><ul className={y("-mx-1 min-h-0 space-y-0.5 overflow-hidden px-1", o && "pt-0.5")}>{$.map(e => <li className={o ? void 0 : "invisible"}><a href="#shipments" tabIndex={o ? void 0 : -1} aria-current={e.current ? "page" : void 0} className={y(T, "pl-8")}><span className="min-w-0 flex-1 truncate">{e.label}</span></a></li>)}</ul></div></li><li><a href="#claims" className={T}><__mod_22728.n icon={__mod_18583.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">Claims</span><span className={y("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>6</span></a></li><li><a href="#carriers" className={T}><__mod_22728.n icon={__mod_17601.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">Carriers</span></a></li></ul></div><div><p className={F}>Facilities</p><ul className="space-y-0.5">{B.map(e => <li><a href="#facilities" className={y(T, "pl-8")}><span className="min-w-0 flex-1 truncate">{e.name}</span>{e.needsAttention && <span className={y("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]", "shrink-0")}>Warning<span className="sr-only">, nearing capacity</span></span>}</a></li>)}</ul></div></nav><div aria-hidden="true" className={y("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={y("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div><div ref={g} className={y("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "relative shrink-0 space-y-0.5 p-2")}>{K.map(({
        label: e,
        icon: a
      }) => <a href="#workspace" className={T}><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{e}</span></a>)}<button ref={w} type="button" aria-haspopup="menu" aria-expanded={c} onClick={() => c ? E(!1) : d(!0)} className={y("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "mt-1 w-full gap-2.5 pr-2 pl-1 text-left")}><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">DO</span></span><span className="min-w-0 flex-1"><span className={y(z, N, "block truncate")}>Devon Okafor</span><span className={y(C, S, "block truncate")}>Dispatch lead</span></span><__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className={y("shrink-0", c && "rotate-180")} /></button>{c && <div ref={A} role="menu" aria-label="Account" className={y("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", W, "absolute bottom-[calc(100%-0.25rem)] left-2 right-2 z-30", u ? "opacity-100" : "opacity-0")}>{U.map(({
          label: e,
          icon: a
        }) => <button type="button" role="menuitem" onClick={() => E(!0)} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /><span className="truncate">{e}</span></button>)}</div>}</div></>;
}
let el = (...e) => e.filter(Boolean).join(" ");
function ei() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let eo = "text-neutral-900 dark:text-neutral-100",
  es = "text-neutral-900/62 dark:text-neutral-100/62",
  ec = "text-[13px]/[16px] font-semibold tabular-nums",
  ed = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eu = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  e_ = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  ex = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  eb = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  ep = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eh = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  em = [.2, 0, 0, 1],
  ek = {
    neutral: "text-neutral-900/78 dark:text-neutral-100/78",
    attention: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    critical: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  ef = [{
    name: "Kestrel Freight",
    members: "24 members"
  }, {
    name: "Kestrel Freight Europe",
    members: "9 members"
  }, {
    name: "Pinnacle 3PL Partners",
    members: "6 members"
  }],
  ev = [{
    id: "shipments",
    label: "Shipments",
    icon: __mod_32406.A,
    current: "All shipments",
    title: "Shipments",
    action: "New shipment",
    listTitle: "All shipments",
    listCount: "312",
    groups: [{
      label: "Shipments",
      items: [{
        label: "All shipments",
        count: "312"
      }, {
        label: "In transit",
        count: "48"
      }, {
        label: "Awaiting pickup",
        count: "12"
      }, {
        label: "Delayed",
        count: "5"
      }, {
        label: "Delivered"
      }, {
        label: "Cancelled"
      }]
    }, {
      label: "Saved views",
      items: [{
        label: "Northeast lane"
      }, {
        label: "Reefer loads"
      }, {
        label: "High-value cargo"
      }, {
        label: "Missing paperwork"
      }, {
        label: "Customs hold"
      }, {
        label: "Weekend departures"
      }]
    }, {
      label: "Reference",
      items: [{
        label: "Service map"
      }, {
        label: "Rate table"
      }, {
        label: "Documents"
      }, {
        label: "Exception log"
      }, {
        label: "Carrier directory"
      }, {
        label: "Archive"
      }]
    }],
    rows: [{
      name: "Halvorsen Cold Chain Logistics AB",
      detail: ["KF-40218", "Newark → Montr\xe9al"],
      meta: "14 Mar",
      status: "In transit",
      tone: "neutral"
    }, {
      name: "Brightwater Foods",
      detail: ["KF-40211", "Savannah → Atlanta"],
      meta: "13 Mar",
      status: "Delivered",
      tone: "neutral"
    }, {
      name: "Ardent Medical Supply",
      detail: ["KF-40207", "Houston → El Paso"],
      meta: "14 Mar",
      status: "Delayed",
      tone: "attention"
    }, {
      name: "Corriveau Fr\xe8res Distribution",
      detail: ["KF-40233", "Detroit → Windsor"],
      meta: "15 Mar",
      status: "Customs hold",
      tone: "attention"
    }, {
      name: "Pinewood Building Products",
      detail: ["KF-40199", "Portland → Boise"],
      meta: "12 Mar",
      status: "Delivered",
      tone: "neutral"
    }, {
      name: "Northgate Appliance",
      detail: ["KF-40241", "Chicago → Omaha"],
      meta: null,
      status: "Awaiting pickup",
      tone: "neutral"
    }, {
      name: "Lakeshore Beverage Co.",
      detail: ["KF-40188", "Milwaukee → Fargo"],
      meta: "16 Mar",
      status: "In transit",
      tone: "neutral"
    }, {
      name: "Sable & Finch Furnishings",
      detail: ["KF-40250", "Charlotte → Richmond"],
      meta: "15 Mar",
      status: "Failed delivery",
      tone: "critical"
    }, {
      name: "Tamarack Paper Mills",
      detail: ["KF-40176", "Duluth → Sioux Falls"],
      meta: "13 Mar",
      status: "Delivered",
      tone: "neutral"
    }, {
      name: "Ridgeline Auto Parts",
      detail: ["KF-40262", "Reno → Sacramento"],
      meta: "16 Mar",
      status: "In transit",
      tone: "neutral"
    }, {
      name: "Meridian Home Goods",
      detail: ["KF-40255", "Tampa → Mobile"],
      meta: "17 Mar",
      status: "Awaiting pickup",
      tone: "neutral"
    }]
  }, {
    id: "dispatch",
    label: "Dispatch",
    icon: __mod_53096.A,
    current: "Load board",
    title: "Load board",
    action: "Assign driver",
    listTitle: "Open loads",
    listCount: "61",
    groups: [{
      label: "Dispatch",
      items: [{
        label: "Load board",
        count: "61"
      }, {
        label: "Assigned",
        count: "26"
      }, {
        label: "Needs a driver",
        count: "9"
      }, {
        label: "Check-ins"
      }, {
        label: "Route changes",
        count: "4"
      }, {
        label: "Detention"
      }]
    }, {
      label: "Saved views",
      items: [{
        label: "Same-day pickups"
      }, {
        label: "Owner-operators"
      }, {
        label: "Hazmat certified"
      }, {
        label: "Backhaul candidates"
      }, {
        label: "Weekend coverage"
      }, {
        label: "Night shift"
      }]
    }, {
      label: "Reference",
      items: [{
        label: "Driver roster"
      }, {
        label: "Terminal hours"
      }, {
        label: "Fuel stops"
      }, {
        label: "Escalation policy"
      }, {
        label: "Shift log"
      }, {
        label: "Archive"
      }]
    }],
    rows: [{
      name: "Newark → Montr\xe9al",
      detail: ["DX-8841", "Reefer", "Ivo Petrenko"],
      meta: "14 Mar",
      status: "Assigned",
      tone: "neutral"
    }, {
      name: "Houston → El Paso",
      detail: ["DX-8846", "Dry van", "no driver yet"],
      meta: "14 Mar",
      status: "Needs a driver",
      tone: "attention"
    }, {
      name: "Savannah → Atlanta",
      detail: ["DX-8829", "Dry van", "Rosalind Achebe-Whitfield"],
      meta: "13 Mar",
      status: "Assigned",
      tone: "neutral"
    }, {
      name: "Portland → Boise",
      detail: ["DX-8852", "Flatbed", "Marcus Oyelaran"],
      meta: "15 Mar",
      status: "Tendered",
      tone: "neutral"
    }, {
      name: "Chicago → Omaha",
      detail: ["DX-8858", "Dry van", "no driver yet"],
      meta: null,
      status: "Needs a driver",
      tone: "attention"
    }, {
      name: "Detroit → Windsor",
      detail: ["DX-8837", "Reefer", "Anneke Vos"],
      meta: "15 Mar",
      status: "Running late",
      tone: "attention"
    }, {
      name: "Milwaukee → Fargo",
      detail: ["DX-8863", "Dry van", "Dario Esposito"],
      meta: "16 Mar",
      status: "Assigned",
      tone: "neutral"
    }, {
      name: "Charlotte → Richmond",
      detail: ["DX-8871", "Flatbed", "Priya Raghunathan"],
      meta: "15 Mar",
      status: "Refused",
      tone: "critical"
    }, {
      name: "Duluth → Sioux Falls",
      detail: ["DX-8818", "Dry van", "Colm Brennan"],
      meta: "13 Mar",
      status: "Assigned",
      tone: "neutral"
    }, {
      name: "Reno → Sacramento",
      detail: ["DX-8880", "Reefer", "Yolanda Cruz"],
      meta: "16 Mar",
      status: "Tendered",
      tone: "neutral"
    }, {
      name: "Tampa → Mobile",
      detail: ["DX-8884", "Dry van", "Henrik Lund"],
      meta: "17 Mar",
      status: "Assigned",
      tone: "neutral"
    }]
  }, {
    id: "fleet",
    label: "Fleet",
    icon: __mod_68142.A,
    current: "All units",
    title: "Fleet",
    action: "Add unit",
    listTitle: "All units",
    listCount: "184",
    groups: [{
      label: "Fleet",
      items: [{
        label: "All units",
        count: "184"
      }, {
        label: "In service",
        count: "151"
      }, {
        label: "In shop",
        count: "7"
      }, {
        label: "Idle",
        count: "22"
      }, {
        label: "Out of service",
        count: "4"
      }, {
        label: "Retired"
      }]
    }, {
      label: "Saved views",
      items: [{
        label: "Reefer trailers"
      }, {
        label: "Due for inspection"
      }, {
        label: "High idle time"
      }, {
        label: "Out of region"
      }, {
        label: "Leased units"
      }, {
        label: "Fuel outliers"
      }]
    }, {
      label: "Reference",
      items: [{
        label: "Maintenance plans"
      }, {
        label: "Parts inventory"
      }, {
        label: "Warranty claims"
      }, {
        label: "Fuel cards"
      }, {
        label: "Compliance log"
      }, {
        label: "Archive"
      }]
    }],
    rows: [{
      name: "Unit 2141",
      detail: ["Freightliner Cascadia", "Ivo Petrenko"],
      meta: "22 Mar",
      status: "In service",
      tone: "neutral"
    }, {
      name: "Unit 2158",
      detail: ["Kenworth T680", "Rosalind Achebe-Whitfield"],
      meta: "04 Apr",
      status: "In service",
      tone: "neutral"
    }, {
      name: "Unit 1907",
      detail: ["Volvo VNL 760", "Marcus Oyelaran"],
      meta: "18 Mar",
      status: "Inspection due",
      tone: "attention"
    }, {
      name: "Trailer R-4412",
      detail: ["Utility 3000R reefer", "pool unit"],
      meta: "27 Mar",
      status: "Idle",
      tone: "neutral"
    }, {
      name: "Unit 2203",
      detail: ["Peterbilt 579", "Anneke Vos"],
      meta: null,
      status: "In shop",
      tone: "attention"
    }, {
      name: "Trailer D-8820",
      detail: ["Wabash DuraPlate dry van", "pool unit"],
      meta: "09 Apr",
      status: "In service",
      tone: "neutral"
    }, {
      name: "Unit 1864",
      detail: ["International LT", "Colm Brennan"],
      meta: "16 Mar",
      status: "Out of service",
      tone: "critical"
    }, {
      name: "Unit 2177",
      detail: ["Mack Anthem", "Dario Esposito"],
      meta: "31 Mar",
      status: "In service",
      tone: "neutral"
    }, {
      name: "Trailer F-2290",
      detail: ["Fontaine Infinity flatbed", "pool unit"],
      meta: "12 Apr",
      status: "Idle",
      tone: "neutral"
    }, {
      name: "Unit 2195",
      detail: ["Freightliner Cascadia", "Priya Raghunathan"],
      meta: "25 Mar",
      status: "In service",
      tone: "neutral"
    }, {
      name: "Unit 2088",
      detail: ["Kenworth T680", "Yolanda Cruz"],
      meta: "07 Apr",
      status: "In service",
      tone: "neutral"
    }]
  }, {
    id: "customers",
    label: "Customers",
    icon: __mod_17601.A,
    current: "All accounts",
    title: "Customers",
    action: "Add customer",
    listTitle: "All accounts",
    listCount: "96",
    groups: [{
      label: "Customers",
      items: [{
        label: "All accounts",
        count: "96"
      }, {
        label: "Active",
        count: "78"
      }, {
        label: "Onboarding",
        count: "4"
      }, {
        label: "At risk",
        count: "3"
      }, {
        label: "Past due",
        count: "5"
      }, {
        label: "Closed"
      }]
    }, {
      label: "Saved views",
      items: [{
        label: "Enterprise accounts"
      }, {
        label: "Contract renewals"
      }, {
        label: "Volume commitments"
      }, {
        label: "Missing tax ID"
      }, {
        label: "Referral sources"
      }, {
        label: "Dormant 90 days"
      }]
    }, {
      label: "Reference",
      items: [{
        label: "Contacts"
      }, {
        label: "Contracts"
      }, {
        label: "Service levels"
      }, {
        label: "Credit limits"
      }, {
        label: "Account notes"
      }, {
        label: "Archive"
      }]
    }],
    rows: [{
      name: "Halvorsen Cold Chain Logistics AB",
      detail: ["Nordics", "Iris Renner"],
      meta: "18 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Brightwater Foods",
      detail: ["Southeast", "Theo Amankwah"],
      meta: "24 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Ardent Medical Supply",
      detail: ["Gulf Coast", "Iris Renner"],
      meta: "6 open",
      status: "At risk",
      tone: "attention"
    }, {
      name: "Corriveau Fr\xe8res Distribution",
      detail: ["Great Lakes", "Marguerite Vaillancourt"],
      meta: "11 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Pinewood Building Products",
      detail: ["Pacific Northwest", "Theo Amankwah"],
      meta: "9 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Northgate Appliance",
      detail: ["Midwest", "owner not set"],
      meta: null,
      status: "Onboarding",
      tone: "neutral"
    }, {
      name: "Lakeshore Beverage Co.",
      detail: ["Upper Midwest", "Marguerite Vaillancourt"],
      meta: "14 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Sable & Finch Furnishings",
      detail: ["Mid-Atlantic", "Iris Renner"],
      meta: "3 open",
      status: "Past due",
      tone: "critical"
    }, {
      name: "Tamarack Paper Mills",
      detail: ["Northern Plains", "Theo Amankwah"],
      meta: "7 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Ridgeline Auto Parts",
      detail: ["Mountain West", "Marguerite Vaillancourt"],
      meta: "12 open",
      status: "Active",
      tone: "neutral"
    }, {
      name: "Meridian Home Goods",
      detail: ["Southeast", "Iris Renner"],
      meta: "2 open",
      status: "At risk",
      tone: "attention"
    }]
  }, {
    id: "billing",
    label: "Billing",
    icon: __mod_91418.A,
    current: "All invoices",
    title: "Billing",
    action: "Create invoice",
    listTitle: "Open invoices",
    listCount: "119",
    groups: [{
      label: "Billing",
      items: [{
        label: "All invoices",
        count: "438"
      }, {
        label: "Draft",
        count: "12"
      }, {
        label: "Sent",
        count: "96"
      }, {
        label: "Overdue",
        count: "11"
      }, {
        label: "Paid"
      }, {
        label: "Credit notes"
      }]
    }, {
      label: "Saved views",
      items: [{
        label: "Over 60 days"
      }, {
        label: "Disputed charges"
      }, {
        label: "Accessorial review"
      }, {
        label: "Auto-pay accounts"
      }, {
        label: "Unbilled loads"
      }, {
        label: "Fuel surcharges"
      }]
    }, {
      label: "Reference",
      items: [{
        label: "Rate agreements"
      }, {
        label: "Tax profiles"
      }, {
        label: "Payment methods"
      }, {
        label: "Remittance advice"
      }, {
        label: "Export history"
      }, {
        label: "Archive"
      }]
    }],
    rows: [{
      name: "Halvorsen Cold Chain Logistics AB",
      detail: ["INV-20418", "issued 02 Mar"],
      meta: "$18,240.00",
      status: "Sent",
      tone: "neutral"
    }, {
      name: "Brightwater Foods",
      detail: ["INV-20421", "issued 03 Mar"],
      meta: "$7,905.50",
      status: "Paid",
      tone: "neutral"
    }, {
      name: "Ardent Medical Supply",
      detail: ["INV-20388", "issued 12 Jan"],
      meta: "$12,480.00",
      status: "Overdue",
      tone: "attention"
    }, {
      name: "Corriveau Fr\xe8res Distribution",
      detail: ["INV-20430", "issued 05 Mar"],
      meta: "$4,116.25",
      status: "Sent",
      tone: "neutral"
    }, {
      name: "Pinewood Building Products",
      detail: ["INV-20399", "issued 21 Feb"],
      meta: "$9,760.00",
      status: "Paid",
      tone: "neutral"
    }, {
      name: "Northgate Appliance",
      detail: ["INV-20444", "not issued yet"],
      meta: null,
      status: "Draft",
      tone: "neutral"
    }, {
      name: "Lakeshore Beverage Co.",
      detail: ["INV-20407", "issued 26 Feb"],
      meta: "$21,318.75",
      status: "Sent",
      tone: "neutral"
    }, {
      name: "Sable & Finch Furnishings",
      detail: ["INV-20362", "issued 04 Jan"],
      meta: "$6,540.00",
      status: "Disputed",
      tone: "critical"
    }, {
      name: "Tamarack Paper Mills",
      detail: ["INV-20375", "issued 18 Jan"],
      meta: "$3,289.40",
      status: "Overdue",
      tone: "attention"
    }, {
      name: "Ridgeline Auto Parts",
      detail: ["INV-20436", "issued 06 Mar"],
      meta: "$15,072.00",
      status: "Sent",
      tone: "neutral"
    }, {
      name: "Meridian Home Goods",
      detail: ["INV-20441", "issued 07 Mar"],
      meta: "$2,845.10",
      status: "Sent",
      tone: "neutral"
    }]
  }];
function eg() {
  let [e, a] = (0, React.useState)(ef[0].name),
    [r, i] = (0, React.useState)(!1),
    [o, s] = (0, React.useState)(!1),
    c = (0, React.useRef)(null),
    d = (0, React.useRef)(null),
    u = (0, React.useRef)(null),
    _ = e => {
      i(!1), s(!1), e && d.current?.focus({
        preventScroll: !0
      });
    };
  (0, React.useEffect)(() => {
    if (!r) return;
    let e = c.current?.ownerDocument ?? document,
      a = requestAnimationFrame(() => {
        s(!0), u.current?.querySelector('[role="menuitemradio"]')?.focus({
          preventScroll: !0
        });
      }),
      t = e => {
        c.current?.contains(e.target) || (i(!1), s(!1));
      },
      n = a => {
        let r = Array.from(u.current?.querySelectorAll('[role="menuitemradio"], [role="menuitem"]') ?? []);
        if (0 === r.length) return;
        let t = r.indexOf(e.activeElement);
        "Escape" === a.key ? (a.preventDefault(), _(!0)) : "ArrowDown" === a.key ? (a.preventDefault(), r[t < 0 || t === r.length - 1 ? 0 : t + 1]?.focus({
          preventScroll: !0
        })) : "ArrowUp" === a.key ? (a.preventDefault(), r[t <= 0 ? r.length - 1 : t - 1]?.focus({
          preventScroll: !0
        })) : "Home" === a.key ? (a.preventDefault(), r[0]?.focus({
          preventScroll: !0
        })) : "End" === a.key ? (a.preventDefault(), r[r.length - 1]?.focus({
          preventScroll: !0
        })) : "Tab" === a.key && (i(!1), s(!1));
      };
    return e.addEventListener("pointerdown", t), e.addEventListener("keydown", n), () => {
      cancelAnimationFrame(a), e.removeEventListener("pointerdown", t), e.removeEventListener("keydown", n);
    };
  }, [r]);
  let x = ef.find(a => a.name === e);
  return <div ref={c} className="relative"><button ref={d} type="button" aria-haspopup="menu" aria-expanded={r} onClick={() => r ? _(!1) : i(!0)} className={el("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "w-full pr-2 pl-2 text-left")}><span className={el("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-[28px]")}><span className={e_}>{e.charAt(0)}</span></span><span className="min-w-0 flex-1"><span className={el("text-[15px]/[20px] font-bold", eo, "block truncate")}>{e}</span><span className={el(ec, es, "block truncate")}>{x?.members}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{r && <div ref={u} role="menu" aria-label="Switch workspace" className={el("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", eb, "absolute left-0 right-0 top-[calc(100%+0.25rem)] z-30", o ? "opacity-100" : "opacity-0")}>{ef.map(r => <button type="button" role="menuitemradio" aria-checked={r.name === e} onClick={() => {
        a(r.name), _(!0);
      }} className={ex}><span className="min-w-0 flex-1"><span className="block truncate">{r.name}</span><span className={el(ec, es, "block truncate")}>{r.members}</span></span>{r.name === e && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>)}<div role="separator" className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" /><button type="button" role="menuitem" onClick={() => _(!0)} className={ex}>Add workspace</button></div>}</div>;
}
function ew({
  areaId: e,
  onSelectArea: a,
  onClose: r
}) {
  let [i, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(!1),
    {
      ref: d,
      edges: u,
      onScroll: x
    } = ei(),
    b = (0, React.useRef)(void 0),
    p = (0, React.useRef)(void 0),
    h = (0, React.useRef)(!1),
    m = (0, React.useRef)(!1),
    k = (0, React.useRef)(void 0),
    f = (0, __mod_50969.I)(),
    v = ev.find(a => a.id === e) ?? ev[0],
    g = e => {
      clearTimeout(b.current), cancelAnimationFrame(p.current ?? 0);
      let a = h.current || m.current,
        r = () => {
          h.current = !0, o(e), a ? c(!0) : (c(!1), p.current = requestAnimationFrame(() => c(!0)));
        };
      a ? r() : b.current = setTimeout(r, 400);
    },
    w = () => {
      clearTimeout(b.current), cancelAnimationFrame(p.current ?? 0), h.current && (m.current = !0, clearTimeout(k.current), k.current = setTimeout(() => {
        m.current = !1;
      }, 300)), h.current = !1, o(null), c(!1);
    };
  (0, React.useEffect)(() => () => {
    clearTimeout(b.current), clearTimeout(k.current), cancelAnimationFrame(p.current ?? 0);
  }, []);
  let y = (e, a) => i === e ? <motion.span role="tooltip" initial={!s && !f && {
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: .16,
    ease: em
  }} className={el("pointer-events-none inline-flex min-h-7 w-fit max-w-64 items-center gap-2 rounded-[calc(var(--rb-r-lg,10px))] bg-neutral-900 px-3 py-1 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "absolute left-full top-1/2 z-[70] ml-2 h-7 -translate-y-1/2 whitespace-nowrap")}>{a}</motion.span> : null;
  return <><div className={el(ep, "flex w-14 shrink-0 flex-col items-center gap-1 px-2 py-3")}>{r && <button type="button" aria-label="Close navigation" onClick={r} className={el(ed, eu, "mb-1")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}<nav aria-label="Areas" onMouseLeave={w} className="flex flex-col items-center gap-1">{ev.map(r => {
          let n = r.id === e;
          return <span className="relative"><button type="button" aria-label={r.label} aria-current={n ? "page" : void 0} onClick={() => {
              a(r.id), w();
            }} onMouseEnter={() => g(r.id)} onFocus={() => g(r.id)} onBlur={w} className={el(eh, "justify-center")}><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} aria-hidden="true" /></button>{y(r.id, r.label)}</span>;
        })}</nav><span className="relative mt-auto" onMouseLeave={w}><button type="button" aria-label="Marta Kowalczyk, dispatch manager" onMouseEnter={() => g("account")} onFocus={() => g("account")} onBlur={w} className={el("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer")}><span className={e_}>MK</span></button>{y("account", "Marta Kowalczyk")}</span></div><div className={el(ep, "flex w-64 min-w-0 flex-col")}><div className="shrink-0 px-2 py-1.5"><eg /></div><div className="relative min-h-0 flex-1"><nav ref={d} onScroll={x} aria-label={v.label} className="h-full overflow-y-auto px-2 pb-3"><div>{v.groups.map(e => <div><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.label}</p><ul className="space-y-0.5">{e.items.map(e => {
                  let a = e.label === v.current;
                  return <li><a href={`#${v.id}`} aria-current={a ? "page" : void 0} className={eh}><span className="min-w-0 flex-1 truncate">{e.label}</span>{e.count && <span className={el("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.count}</span>}</a></li>;
                })}</ul></div>)}</div></nav><div aria-hidden="true" className={el("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={el("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div></>;
}
let eM = (...e) => e.filter(Boolean).join(" ");
function eE() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let eW = "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]",
  eO = "text-neutral-900/78 dark:text-neutral-100/78",
  eT = "text-neutral-900/62 dark:text-neutral-100/62",
  eF = "text-[15px]/[20px] font-bold",
  eI = "text-[13px]/[16px] font-semibold tabular-nums",
  eL = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  eP = "inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]",
  eq = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eH = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  e$ = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  eB = "text-neutral-900 dark:text-neutral-100",
  eK = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eU = "min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62",
  eV = "flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]",
  eJ = "text-neutral-900/62 dark:text-neutral-100/62",
  eQ = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  eG = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eX = "border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  eY = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  eZ = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  e0 = "text-right tabular-nums",
  e1 = "app-shell-3-sidebar",
  e2 = "app-shell-3-drawer",
  e5 = [{
    label: "Contracts",
    items: [{
      label: "Contracts",
      icon: __mod_31964.A,
      current: !0
    }, {
      label: "Renewals",
      icon: __mod_52038.A,
      count: "4"
    }, {
      label: "Templates",
      icon: __mod_92916.A
    }, {
      label: "Clause library",
      icon: __mod_63285.A
    }]
  }, {
    label: "Organisation",
    items: [{
      label: "Counterparties",
      icon: __mod_17601.A
    }, {
      label: "Approvals",
      icon: __mod_71898.A,
      count: "2"
    }, {
      label: "Reports",
      icon: __mod_2972.A
    }]
  }],
  e6 = [{
    label: "Help center",
    icon: __mod_3175.A
  }, {
    label: "What's new",
    icon: __mod_18595.A
  }],
  e8 = ["Account settings", "Notification preferences", "Switch workspace", "Sign out"],
  e4 = [{
    label: "Renewing in 90 days",
    value: "4"
  }, {
    label: "Awaiting approval",
    value: "2"
  }, {
    label: "Annual contract value",
    value: "$3.91M"
  }],
  e9 = {
    Active: "text-neutral-900/78 dark:text-neutral-100/78",
    Draft: "text-neutral-900/62 dark:text-neutral-100/62",
    "In review": eB,
    Renewing: "text-neutral-900 dark:text-neutral-100",
    "Needs approval": eB,
    Overdue: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  e3 = [{
    name: "Data processing addendum",
    counterparty: "Corvus Health",
    owner: "Tomas Lindqvist",
    value: null,
    renews: "04 Jan 2026",
    status: "Overdue",
    stage: "attention"
  }, {
    name: "Platform subscription and support renewal for the North American field operations team",
    counterparty: "Halden Manufacturing",
    owner: "Priya Raghunathan",
    value: "$1,120,000",
    renews: "28 Feb 2026",
    status: "Needs approval",
    stage: "attention"
  }, {
    name: "Master services agreement",
    counterparty: "Brightline Logistics Group",
    owner: "Amara Okafor",
    value: "$248,000",
    renews: "12 Mar 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Reseller agreement",
    counterparty: "Kestrel Digital",
    owner: "Amara Okafor",
    value: "$86,500",
    renews: "19 Apr 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Mutual non-disclosure agreement",
    counterparty: "Verity Partners",
    owner: null,
    value: null,
    renews: "22 May 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Statement of work 14",
    counterparty: "Halden Manufacturing",
    owner: "Daniel Whitfield",
    value: "$312,000",
    renews: "30 Jun 2026",
    status: "In review",
    stage: "drafting"
  }, {
    name: "Software licence renewal",
    counterparty: "Northgate Utilities",
    owner: "Priya Raghunathan",
    value: "$455,000",
    renews: "08 Jul 2026",
    status: "Renewing",
    stage: "signed"
  }, {
    name: "Professional services agreement",
    counterparty: "Larkspur Media",
    owner: "Daniel Whitfield",
    value: "$128,400",
    renews: "15 Aug 2026",
    status: "Draft",
    stage: "drafting"
  }, {
    name: "Supply agreement",
    counterparty: "Ironbark Components",
    owner: "Tomas Lindqvist",
    value: "$674,200",
    renews: "01 Sep 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Security addendum",
    counterparty: "Kestrel Digital",
    owner: "Amara Okafor",
    value: "$24,000",
    renews: "11 Oct 2026",
    status: "In review",
    stage: "drafting"
  }, {
    name: "Master services agreement",
    counterparty: "Verity Partners",
    owner: "Priya Raghunathan",
    value: "$198,000",
    renews: "03 Nov 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Hosting and infrastructure agreement",
    counterparty: "Northgate Utilities",
    owner: "Daniel Whitfield",
    value: "$530,000",
    renews: "27 Nov 2026",
    status: "Needs approval",
    stage: "attention"
  }, {
    name: "Consulting retainer",
    counterparty: "Larkspur Media",
    owner: "Tomas Lindqvist",
    value: "$96,000",
    renews: "14 Dec 2026",
    status: "Active",
    stage: "signed"
  }, {
    name: "Equipment lease",
    counterparty: "Ironbark Components",
    owner: "Amara Okafor",
    value: "$41,750",
    renews: "20 Jan 2027",
    status: "Draft",
    stage: "drafting"
  }],
  e7 = [{
    label: "All",
    stage: null
  }, {
    label: "Signed",
    stage: "signed"
  }, {
    label: "Needs attention",
    stage: "attention"
  }];
function ae({
  status: e
}) {
  return <span className={eM("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", e9[e], "whitespace-nowrap")}>{"Renewing" === e && <span className="flex h-lh shrink-0 items-center"><span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" /></span>}{e}</span>;
}
function aa() {
  let [e, a] = (0, React.useState)(!1),
    [r, l] = (0, React.useState)(!1),
    [i, o] = (0, React.useState)(!1),
    s = (0, React.useRef)(null),
    c = (0, React.useRef)(null),
    d = (0, React.useRef)(null),
    u = (0, React.useRef)(void 0),
    _ = () => Array.from(d.current?.querySelectorAll('[role="menuitem"]') ?? []);
  (0, React.useEffect)(() => {
    if (!e) return;
    let r = s.current?.ownerDocument ?? document,
      t = e => {
        s.current?.contains(e.target) || (a(!1), l(!1));
      };
    return r.addEventListener("pointerdown", t), () => r.removeEventListener("pointerdown", t);
  }, [e]), (0, React.useEffect)(() => {
    e && _()[0]?.focus({
      preventScroll: !0
    });
  }, [e]), (0, React.useEffect)(() => () => cancelAnimationFrame(u.current ?? 0), []);
  let x = e => {
      a(!0), o(e), e ? (l(!1), u.current = requestAnimationFrame(() => l(!0))) : l(!0);
    },
    b = (e = !0) => {
      a(!1), l(!1), e && c.current?.focus({
        preventScroll: !0
      });
    };
  return <div ref={s} className="relative shrink-0"><button ref={c} type="button" aria-haspopup="menu" aria-expanded={e} aria-label="Amara Okafor, account menu" onClick={() => e ? b(!1) : x(!0)} onKeyDown={e => {
      ("ArrowDown" === e.key || "ArrowUp" === e.key) && (e.preventDefault(), x(!1));
    }} className={eM("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">AO</span></button>{e && <div ref={d} role="menu" aria-label="Account" onKeyDown={e => {
      let a = _();
      if (0 === a.length) return;
      let r = a.indexOf(e.currentTarget.ownerDocument.activeElement);
      switch (e.key) {
        case "Escape":
          e.preventDefault(), b();
          break;
        case "ArrowDown":
          e.preventDefault(), a[(r + 1) % a.length]?.focus({
            preventScroll: !0
          });
          break;
        case "ArrowUp":
          e.preventDefault(), a[(r - 1 + a.length) % a.length]?.focus({
            preventScroll: !0
          });
          break;
        case "Home":
          e.preventDefault(), a[0]?.focus({
            preventScroll: !0
          });
          break;
        case "End":
          e.preventDefault(), a[a.length - 1]?.focus({
            preventScroll: !0
          });
          break;
        case "Tab":
          b(!1);
      }
    }} className={eM("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", i && eQ, "absolute right-0 top-[calc(100%+0.5rem)] z-30 w-60", r ? "opacity-100" : "opacity-0")}><div role="presentation" className="px-2 pb-2 pt-1"><p className={eM(eF, "truncate")}>Amara Okafor</p><p className={eM(eI, eT, "truncate")}>amara.okafor@sundialclm.com</p></div>{e8.map(e => <button type="button" role="menuitem" tabIndex={-1} onClick={() => b()} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><span className="truncate">{e}</span></button>)}</div>}</div>;
}
function ar({
  collapsed: e,
  onClose: a
}) {
  let {
      ref: r,
      edges: n,
      onScroll: i
    } = eE(),
    o = a => <li><a href="#contracts" aria-current={a.current ? "page" : void 0} aria-label={e ? a.label : void 0} className={eM("flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]", "group relative", e && "justify-center")}><__mod_22728.n icon={a.icon} size={18} strokeWidth={2} aria-hidden="true" />{e ? <span aria-hidden="true" className={eM("pointer-events-none inline-flex min-h-7 w-fit max-w-64 items-center gap-2 rounded-[calc(var(--rb-r-lg,10px))] bg-neutral-900 px-3 py-1 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", eQ, "absolute left-full top-1/2 z-[70] ml-2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100")}>{a.label}</span> : <><span className="min-w-0 flex-1 truncate">{a.label}</span>{a.count && <span className={eM("ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{a.count}</span>}</>}</a></li>;
  return <div className="flex min-h-0 flex-1 flex-col">{a && <div className="flex h-14 shrink-0 items-center gap-2.5 pl-4 pr-2"><span className={eM(eW, "size-8", eF)}>S</span><p className={eM(eF, "min-w-0 flex-1 truncate")}>Sundial</p><button type="button" aria-label="Close navigation" onClick={a} className={eM(eL, eH)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>}<div className="relative flex min-h-0 flex-1 flex-col"><nav ref={r} onScroll={i} aria-label="Primary" className={eM("flex h-full flex-col px-2 py-3", e ? "overflow-visible" : "overflow-y-auto")}><div className={e ? "space-y-4" : void 0}>{e5.map(a => <div>{!e && <p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{a.label}</p>}<ul className="space-y-0.5">{a.items.map(o)}</ul></div>)}</div><ul className="mt-auto space-y-0.5 pt-8">{e6.map(o)}</ul></nav><div aria-hidden="true" className={eM("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", n.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eM("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", n.end ? "opacity-100" : "opacity-0")} /></div></div>;
}
let ak = (...e) => e.filter(Boolean).join(" ");
function af() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let av = "text-neutral-900/78 dark:text-neutral-100/78",
  ag = "text-neutral-900/62 dark:text-neutral-100/62",
  aw = "text-[17px]/[22px] font-extrabold",
  ay = "text-[15px]/[20px] font-bold",
  aj = "text-[13px]/[16px] font-semibold tabular-nums",
  aN = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  aA = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  aS = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  az = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  aC = "text-neutral-900 dark:text-neutral-100",
  aD = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  aR = "min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62",
  aM = "flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]",
  aE = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  aW = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  aO = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  aT = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  aF = "text-right tabular-nums",
  aI = [{
    label: "Editorial",
    items: [{
      label: "Story queue",
      icon: __mod_31964.A,
      count: "16",
      current: !0
    }, {
      label: "Assignments",
      icon: __mod_68240.A,
      count: "6"
    }, {
      label: "Copy desk",
      icon: __mod_84831.A,
      count: "4"
    }, {
      label: "Media library",
      icon: __mod_15805.A
    }]
  }, {
    label: "Desks",
    items: [{
      label: "Metro",
      icon: __mod_17601.A
    }, {
      label: "Business",
      icon: __mod_34133.A
    }, {
      label: "Culture",
      icon: __mod_40170.A
    }, {
      label: "Sport",
      icon: __mod_45346.A
    }, {
      label: "Investigations",
      icon: __mod_97838.A
    }]
  }, {
    label: "Distribution",
    items: [{
      label: "Newsletters",
      icon: __mod_67812.A
    }, {
      label: "Syndication",
      icon: __mod_71497.A
    }, {
      label: "Audience",
      icon: __mod_88366.A
    }]
  }, {
    label: "Saved views",
    items: [{
      label: "My desk",
      icon: __mod_90227.A
    }, {
      label: "Late stories",
      icon: __mod_65525.A,
      count: "2"
    }]
  }],
  aL = {
    Scheduled: aC,
    "In review": aC,
    "Needs edits": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Drafting: "text-neutral-900/62 dark:text-neutral-100/62"
  },
  aP = [{
    title: "Harbor tunnel overruns reach $40m",
    owner: "Priya Raghunathan",
    status: "Needs edits",
    publishOn: "2026-08-12"
  }, {
    title: "Council delays the vacancy tax vote",
    owner: "Tomasz Nowak",
    status: "In review",
    publishOn: "2026-08-12"
  }, {
    title: "The grid contract and winter rates",
    owner: "Ari Chen",
    status: "Scheduled",
    publishOn: "2026-08-13"
  }, {
    title: "Inside the ferry terminal rebuild: three years, two contractors and a berth that still does not fit",
    owner: "Lena Ortiz",
    status: "Drafting",
    publishOn: null
  }, {
    title: "Eastside schools reopen Monday",
    owner: "Devon Okafor",
    status: "Scheduled",
    publishOn: "2026-08-13"
  }, {
    title: "The quiet return of the night bus",
    owner: "Sofia Martins",
    status: "In review",
    publishOn: "2026-08-14"
  }, {
    title: "Port authority names its next chief",
    owner: "Marcus Lund",
    status: "Scheduled",
    publishOn: "2026-08-14"
  }, {
    title: "A year on the hearing aid waitlist",
    owner: "Priya Raghunathan",
    status: "Drafting",
    publishOn: "2026-08-17"
  }, {
    title: "Riverfront market loses half its stalls",
    owner: "Jun Park",
    status: "In review",
    publishOn: "2026-08-17"
  }, {
    title: "The landlord of Fenwick Street",
    owner: "Ari Chen",
    status: "Needs edits",
    publishOn: "2026-08-19"
  }, {
    title: "Fare evasion fines fall again",
    owner: "Tomasz Nowak",
    status: "Scheduled",
    publishOn: "2026-08-19"
  }, {
    title: "One helicopter, a 40-minute gap",
    owner: "Marguerite Oyelaran-Bishop",
    status: "Drafting",
    publishOn: "2026-08-21"
  }, {
    title: "Where the city compost actually goes",
    owner: "Sofia Martins",
    status: "In review",
    publishOn: "2026-08-21"
  }, {
    title: "The last dry dock on the north bank",
    owner: "Marcus Lund",
    status: "Scheduled",
    publishOn: "2026-08-24"
  }, {
    title: "Rent arrears cases double",
    owner: "Jun Park",
    status: "Drafting",
    publishOn: null
  }, {
    title: "A cycle lane that ends in a hedge",
    owner: "Devon Okafor",
    status: "Scheduled",
    publishOn: "2026-08-27"
  }],
  aq = ["All stories", "In review", "Needs edits"],
  aH = [{
    iso: "2026-08-12",
    time: "4:00 PM",
    title: "Evening briefing send",
    slot: "Newsletter"
  }, {
    iso: "2026-08-13",
    time: "6:00 AM",
    title: "The grid contract and winter rates",
    slot: "Homepage lead"
  }, {
    iso: "2026-08-13",
    time: "12:00 PM",
    title: "Eastside schools reopen Monday",
    slot: "Local"
  }, {
    iso: "2026-08-14",
    time: "6:00 AM",
    title: "Port authority names its next chief",
    slot: "Homepage lead"
  }, {
    iso: "2026-08-17",
    time: "5:00 PM",
    title: "Print pages lock",
    slot: "Sunday edition"
  }, {
    iso: "2026-08-19",
    time: "6:00 AM",
    title: "Fare evasion fines fall again",
    slot: "Homepage lead"
  }, {
    iso: "2026-08-21",
    time: "9:00 AM",
    title: "Weekly desk planning",
    slot: "All desks"
  }, {
    iso: "2026-08-24",
    time: "6:00 AM",
    title: "The last dry dock on the north bank",
    slot: "Homepage lead"
  }, {
    iso: "2026-08-27",
    time: "6:00 AM",
    title: "A cycle lane that ends in a hedge",
    slot: "Local"
  }],
  a$ = new Set(aH.map(e => e.iso)),
  aB = "2026-08-12",
  aK = ["S", "M", "T", "W", "T", "F", "S"],
  aU = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function aV(e, a) {
  let r = new Date(Date.UTC(e, a, 1)).getUTCDay();
  return Array.from({
    length: 42
  }, (t, n) => {
    let l = new Date(Date.UTC(e, a, 1 + n - r));
    return {
      iso: l.toISOString().slice(0, 10),
      day: l.getUTCDate(),
      inMonth: l.getUTCMonth() === a
    };
  });
}
let aJ = (e, a) => new Date(Date.UTC(e, a, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }),
  aQ = e => new Date(`${e}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
function aG({
  status: e
}) {
  return <span className={ak("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", aL[e])}>{e}</span>;
}
function aX({
  iso: e
}) {
  return e ? <>{aQ(e)}</> : <span className="text-neutral-900/62 dark:text-neutral-100/62">None</span>;
}
function aY({
  onClose: e
}) {
  return <><div className="flex h-14 shrink-0 items-center gap-2.5 pl-4 pr-2"><span className={ak("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8", ay)}>N</span><div className="min-w-0 flex-1"><p className={ak(ay, "truncate")}>Northline</p><p className={ak(aj, ag, "truncate")}>City desk</p></div>{e && <button type="button" aria-label="Close navigation" onClick={e} className={ak(aA, az)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div><nav aria-label="Primary" className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">{aI.map(e => <div><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.label}</p><ul className="space-y-0.5">{e.items.map(e => <li><a href="#story-queue" aria-current={e.current ? "page" : void 0} className="flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]"><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{e.label}</span>{e.count && <span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.count}</span>}</a></li>)}</ul></div>)}</nav><div className={ak("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "shrink-0 p-2")}><div className="flex items-center gap-2.5 py-2 pl-2"><span className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">MO</span></span><div className="min-w-0 flex-1"><p className={ak(ay, "truncate")}>Marguerite Oyelaran-Bishop</p><p className={ak(aj, ag, "truncate")}>Managing editor</p></div></div></div></>;
}
function aZ({
  onClose: e
}) {
  let {
      ref: a,
      edges: r,
      onScroll: i
    } = af(),
    [o, s] = (0, React.useState)({
      year: 2026,
      month: 7
    }),
    [c, d] = (0, React.useState)(aB),
    u = (0, React.useMemo)(() => aV(o.year, o.month), [o]),
    [x, b] = (0, React.useState)(() => Math.max(0, aV(2026, 7).findIndex(e => e.iso === aB))),
    p = (0, React.useRef)([]),
    m = aH.filter(e => e.iso >= c),
    k = e => {
      let a = new Date(Date.UTC(o.year, o.month + e, 1));
      s({
        year: a.getUTCFullYear(),
        month: a.getUTCMonth()
      }), b(a.getUTCDay());
    },
    f = Array.from({
      length: 6
    }, (e, a) => u.slice(7 * a, 7 * a + 7));
  return <div className="flex h-full w-full min-w-0 flex-col lg:w-80 xl:w-96"><div className="flex h-14 shrink-0 items-center gap-2 px-4"><h2 className={ak(aw, "min-w-0 flex-1 truncate")}>Schedule</h2><button type="button" aria-label="Hide schedule" onClick={e} className={ak(aA, az)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="hidden shrink-0 px-4 pb-4 lg:block"><div className="mb-1 flex items-center gap-2"><p className={ak(ay, "min-w-0 flex-1 truncate")}>{aJ(o.year, o.month)}</p><button type="button" aria-label="Previous month" onClick={() => k(-1)} className={ak(aA, az)}><__mod_22728.n icon={__mod_58661.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Next month" onClick={() => k(1)} className={ak(aA, az)}><__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><table className="w-full border-collapse"><caption className="sr-only">{aJ(o.year, o.month)} publishing schedule</caption><thead><tr>{aK.map((e, a) => <th scope="col" className={ak(aj, ag, "pb-1")}><span aria-hidden="true">{e}</span><span className="sr-only">{aU[a]}</span></th>)}</tr></thead><tbody>{f.map((e, a) => <tr>{e.map((e, r) => {
              let n,
                l = 7 * a + r,
                i = e.iso === aB,
                o = e.iso === c;
              return <td className="p-0 text-center"><button ref={e => {
                  p.current[l] = e;
                }} type="button" tabIndex={l === x ? 0 : -1} aria-label={(n = e.iso, new Date(`${n}T00:00:00`).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                }))} aria-pressed={o} aria-current={i ? "date" : void 0} onClick={() => {
                  d(e.iso), b(l);
                }} onKeyDown={e => ((e, a) => {
                  let r = {
                    ArrowLeft: a - 1,
                    ArrowRight: a + 1,
                    ArrowUp: a - 7,
                    ArrowDown: a + 7,
                    Home: a - a % 7,
                    End: a - a % 7 + 6
                  }[e.key];
                  if (void 0 !== r) {
                    let a;
                    e.preventDefault(), b(a = Math.min(41, Math.max(0, r))), p.current[a]?.focus({
                      preventScroll: !0
                    });
                  }
                })(e, l)} className={ak(i ? "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none" : aA, az, "text-[14px]/[20px] font-medium", "mx-auto tabular-nums")}><span className={e.inMonth || i ? void 0 : ag}>{a$.has(e.iso) && <span aria-hidden="true" className={ak(!i && ag, "absolute left-1/2 top-1 size-1 -translate-x-1/2 bg-current")} />}{e.day}</span></button></td>;
            })}</tr>)}</tbody></table></div><p className={ak(aj, ag, "shrink-0 px-4 pb-1")}>Up next</p><div className="relative min-h-0 flex-1"><div ref={a} onScroll={i} className="h-full overflow-y-auto px-2 pb-4">{0 === m.length ? <div className="px-1 py-8 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing scheduled</p><p className={ak("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>The calendar is clear after {aQ(c)}.</p><button type="button" onClick={() => d(aB)} className={ak(aN, aS, "mt-4")}>Show today</button></div> : <ul className="space-y-0.5">{m.map(e => <li><button type="button" className={ak("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "rounded-[var(--rb-r-4xl,18px)]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer px-2")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={ak(aj, ag)}>{aQ(e.iso)}, {e.time}</span><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.title}</span></span><span data-description={!0} className="line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">{e.slot}</span></span></button></li>)}</ul>}</div><div aria-hidden="true" className={ak("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", r.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ak("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", r.end ? "opacity-100" : "opacity-0")} /></div></div>;
}
let ra = (...e) => e.filter(Boolean).join(" ");
function rr() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let rt = "bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70",
  rn = "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]",
  rl = "text-neutral-900 dark:text-neutral-100",
  ri = "text-neutral-900/78 dark:text-neutral-100/78",
  ro = "text-neutral-900/62 dark:text-neutral-100/62",
  rs = "text-[15px]/[20px] font-bold",
  rc = "text-[14px]/[20px] font-medium",
  rd = "text-[13px]/[16px] font-semibold tabular-nums",
  ru = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  r_ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rx = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  rb = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  rp = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  rh = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  rm = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  rk = "relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16",
  rf = "flex min-w-0 flex-1 flex-col gap-0.5",
  rv = "pointer-events-none inline-flex min-h-7 w-fit max-w-64 items-center gap-2 rounded-[calc(var(--rb-r-lg,10px))] bg-neutral-900 px-3 py-1 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900",
  rg = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  rw = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  ry = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  rj = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  rN = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  rA = [{
    id: "inbox",
    label: "Inbox",
    icon: __mod_22830.A
  }, {
    id: "mentions",
    label: "Mentions",
    icon: __mod_2605.A,
    unread: !0
  }, {
    id: "snoozed",
    label: "Snoozed",
    icon: __mod_29635.A
  }, {
    id: "sent",
    label: "Sent",
    icon: __mod_55410.A
  }, {
    id: "archive",
    label: "Archive",
    icon: __mod_22670.A
  }],
  rS = ["All", "Unread", "Assigned", "Escalated"],
  rz = [{
    id: "c-4821",
    name: "Priya Raghunathan",
    email: "priya.raghunathan@lumenfield-logistics.example",
    subject: "Bulk import of 12,400 supplier records keeps failing at the validation step after the March schema change",
    preview: "We ran the import again last night and it stopped at 3,180 records. Every rejected row has a value in secondary_contact.",
    time: "09:24",
    received: "14 Mar 2025, 09:24",
    unread: !0,
    assigned: !0,
    escalated: !1,
    body: ["We ran the March supplier import last night and it stopped at 3,180 of 12,400 records. The job never fails outright, it sits at the validation step until the two-hour timeout and then reports a partial write.", "Every record it rejects has a value in the secondary_contact column. The same rows imported cleanly on 6 March, so I think this is related to the schema change you shipped on the 11th.", "I have attached the export we are using, trimmed to the first 500 rows so you can reproduce it without waiting for the full file. The shape is unchanged from the one we agreed at onboarding.", "Two questions. Is secondary_contact still accepted, and if it has moved, is there a mapping we should apply before the next run? We have another 9,000 records queued behind this one.", "For context on urgency: the queued records cover the four new depots we open on 24 March, and none of those suppliers can be dispatched against until they exist in Portway. Our planners are currently holding the lane assignments in a spreadsheet.", "If the fix has to wait for a release, a temporary import path that skips validation on that one column would unblock us. We can clean the data afterwards, and I would rather do that than keep the depots on manual entry for another week.", "The Rotterdam team needs them in place before Monday, so if a call today is faster than email I can make time from 14:00 onwards."],
    attachment: {
      name: "supplier-import-sample-500.csv",
      size: "2.4 MB"
    }
  }, {
    id: "c-4820",
    name: "Daniel Okonkwo",
    email: "daniel.okonkwo@brightsea-freight.example",
    subject: "Rate card for the Rotterdam lane is showing last quarter's prices",
    preview: "Our dispatchers are quoting from a card that expired on 28 February. Nothing changed on our side, so I suspect the sync.",
    time: "08:51",
    received: "14 Mar 2025, 08:51",
    unread: !0,
    assigned: !1,
    escalated: !1,
    body: ["Our dispatchers are quoting the Rotterdam to Duisburg lane from a rate card that expired on 28 February. Nothing changed on our side, so I suspect the nightly sync is not picking up the new card.", "The customer-facing quote tool shows the correct prices, which is the confusing part. It is only the dispatch board that is behind.", "We can work around it for a day or two by quoting manually, but I would rather not have twelve people copying numbers out of a spreadsheet."]
  }, {
    id: "c-4819",
    name: "Marta Lindqvist",
    email: "m.lindqvist@nordkust.example",
    subject: "Two drivers cannot sign in after the SSO migration",
    preview: "Both accounts were created before we moved to Okta. They get sent back to the login screen with no error message.",
    time: "Yesterday",
    received: "13 Mar 2025, 16:07",
    unread: !0,
    assigned: !0,
    escalated: !1,
    body: ["Two of our drivers cannot sign in to the mobile app after Tuesday's SSO migration. Both accounts were created before we moved to Okta.", "They get sent back to the login screen with no error message, which makes it hard for them to tell us what went wrong. Everyone else on the same team signs in fine.", "I have their employee numbers if that helps you find the accounts. Let me know what you need and I will get it to you today."]
  }, {
    id: "c-4818",
    name: "Kenji Watanabe",
    email: "k.watanabe@harborline.example",
    subject: "Webhook retries are arriving out of order",
    preview: "We are seeing shipment.updated land before shipment.created for about one delivery in fifty. Our queue handles it, but the ordering guarantee in the docs says this should not happen.",
    time: "Yesterday",
    received: "13 Mar 2025, 11:42",
    unread: !1,
    assigned: !1,
    escalated: !1,
    body: ["We are seeing shipment.updated arrive before shipment.created for roughly one delivery in fifty. Our queue tolerates it, but the ordering guarantee in your documentation says this should not happen.", "It started around the same time we increased our endpoint timeout from two to five seconds, so it may be on our side. I would like to rule out the retry logic first.", "Is there a way to see the delivery attempts for a single event without opening a ticket each time?"]
  }, {
    id: "c-4817",
    name: "Aisha Bello",
    email: "aisha.bello@sahelgroup.example",
    subject: "Read-only access for our finance team",
    preview: "Four people in finance need to see invoices and settlement reports without being able to change a shipment.",
    time: "Mon",
    received: "11 Mar 2025, 14:15",
    unread: !1,
    assigned: !0,
    escalated: !1,
    body: ["Four people in our finance team need to see invoices and settlement reports without being able to change a shipment or a rate.", "The viewer role looks close, but it also hides the settlement export, which is the one thing they actually need.", "Is there a way to grant the export on its own, or should we be looking at a custom role?"]
  }, {
    id: "c-4816",
    name: "Tom\xe1s Ferreira",
    email: "tomas.ferreira@atlanticoport.example",
    subject: "Signed carrier agreement",
    preview: "",
    time: "Mon",
    received: "11 Mar 2025, 09:03",
    unread: !1,
    assigned: !1,
    escalated: !1,
    body: ["Attached is the countersigned carrier agreement for the 2025 season. No changes from the draft you sent on 4 March."],
    attachment: {
      name: "carrier-agreement-2025-signed.pdf",
      size: "812 KB"
    }
  }, {
    id: "c-4815",
    name: "Hannah Weiss",
    email: "h.weiss@genoa-forwarding.example",
    subject: "Customs documents missing from the Genoa shipment",
    preview: "Container GNOA-77412 arrived without the packing list attached in the portal. The paper copy travelled with the driver.",
    time: "12 Mar",
    received: "12 Mar 2025, 08:30",
    unread: !1,
    assigned: !1,
    escalated: !1,
    body: ["Container GNOA-77412 arrived without the packing list attached in the portal. The paper copy travelled with the driver, so nothing was held up, but our broker needs the digital version for the file.", "The upload shows as complete in the shipment timeline, which is why nobody noticed until the container was already on the water.", "Can you check whether the document was stored and simply not linked?"]
  }, {
    id: "c-4814",
    name: "Oliver Grant",
    email: "oliver.grant@meadowbank.example",
    subject: "Invoice 2025-0418 was charged twice",
    preview: "Both charges cleared on 10 March for \xa34,280.00. Our bank shows two separate authorisations, not a pending and a capture.",
    time: "11 Mar",
    received: "11 Mar 2025, 17:48",
    unread: !1,
    assigned: !1,
    escalated: !1,
    body: ["Invoice 2025-0418 was charged twice. Both charges cleared on 10 March for \xa34,280.00, and our bank shows two separate authorisations rather than a pending and a capture.", "I have the reference numbers for both if you need them. A refund of the duplicate would be ideal, but a credit against the April invoice works as well."]
  }, {
    id: "c-4813",
    name: "Sofia Marchetti",
    email: "s.marchetti@viadria.example",
    subject: "Filter the dispatch board by trailer type",
    preview: "We run reefers and dry vans out of the same yard and the planners scroll past most of the board to find the right one.",
    time: "9 Mar",
    received: "9 Mar 2025, 10:12",
    unread: !1,
    assigned: !1,
    escalated: !1,
    body: ["We run reefers and dry vans out of the same yard, and the planners scroll past most of the board to find the right trailer.", "A filter on trailer type would save each of them a few minutes every hour. Saved views would be even better, but the filter alone would be enough.", "Not urgent. I wanted to get it in front of you before the next planning cycle."]
  }],
  rC = [{
    label: "Mark as unread",
    icon: __mod_22830.A
  }, {
    label: "Snooze until Monday",
    icon: __mod_29635.A
  }, {
    label: "Assign to a teammate",
    icon: __mod_44647.A
  }, {
    label: "Mute this sender",
    icon: __mod_13473.A
  }];
function rD(e, a, r, t, l) {
  (0, React.useEffect)(() => {
    if (!e) return;
    let n = a.current,
      i = n?.ownerDocument ?? document,
      o = () => Array.from(n?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
    t.current && (t.current = !1, (l?.current ?? o()[0])?.focus({
      preventScroll: !0
    }));
    let s = e => {
      if ("Escape" === e.key) {
        e.preventDefault(), r();
        return;
      }
      if ("Tab" !== e.key) return;
      let a = o(),
        t = a[0],
        n = a[a.length - 1];
      t && n && (e.shiftKey && i.activeElement === t ? (e.preventDefault(), n.focus({
        preventScroll: !0
      })) : e.shiftKey || i.activeElement !== n || (e.preventDefault(), t.focus({
        preventScroll: !0
      })));
    };
    return i.addEventListener("keydown", s), () => i.removeEventListener("keydown", s);
  }, [e, a, r, t, l]);
}
let rq = (...e) => e.filter(Boolean).join(" ");
function rH() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let r$ = "text-neutral-900 dark:text-neutral-100",
  rB = "text-neutral-900/78 dark:text-neutral-100/78",
  rK = "text-[17px]/[22px] font-extrabold",
  rU = "text-[15px]/[22px] font-medium",
  rV = "text-[15px]/[20px] font-bold",
  rJ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  rQ = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  rG = "inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1",
  rX = "h-10",
  rY = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  rZ = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  r0 = rq(rV, r$, "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]"),
  r1 = [{
    id: "product",
    name: "Product specs",
    docs: [{
      id: "checkout",
      title: "Checkout redesign",
      updated: "6 March 2025",
      author: "Priya Raman",
      words: 1420
    }, {
      id: "saved-methods",
      title: "Saved payment methods",
      updated: "27 February 2025",
      author: "Mara Vogt",
      words: 860
    }, {
      id: "refunds",
      title: "Refund policy for marketplace sellers and connected accounts",
      updated: "12 March 2025",
      author: "Elena Costa",
      words: 2310
    }, {
      id: "disputes",
      title: "Dispute handling",
      updated: "4 March 2025",
      author: "Elena Costa",
      words: 1180
    }, {
      id: "payouts",
      title: "Payout scheduling",
      updated: "19 February 2025",
      author: "Tobias Lindqvist",
      words: 740
    }, {
      id: "onboarding",
      title: "Merchant onboarding",
      updated: "28 January 2025",
      author: "Priya Raman",
      words: 1960
    }, {
      id: "currencies",
      title: "Currency support",
      updated: "11 February 2025",
      author: "Tobias Lindqvist",
      words: 520
    }]
  }, {
    id: "notes",
    name: "Meeting notes",
    docs: [{
      id: "sync-14-mar",
      title: "Weekly sync, 14 March",
      updated: "14 March 2025",
      author: "Elena Costa",
      words: 430
    }, {
      id: "q2-planning",
      title: "Q2 planning",
      updated: "5 March 2025",
      author: "Priya Raman",
      words: 980
    }, {
      id: "postmortem",
      title: "Payout delay postmortem",
      updated: "26 February 2025",
      author: "Tobias Lindqvist",
      words: 1120
    }]
  }, {
    id: "engineering",
    name: "Engineering",
    docs: [{
      id: "webhooks",
      title: "Webhook retry schedule",
      updated: "14 March 2025",
      author: "Mara Vogt",
      words: 812
    }, {
      id: "versioning",
      title: "API versioning",
      updated: "9 March 2025",
      author: "Tobias Lindqvist",
      words: 1340
    }, {
      id: "ledger",
      title: "Ledger migration plan",
      updated: "2 March 2025",
      author: "Priya Raman",
      words: 3080
    }, {
      id: "idempotency",
      title: "Idempotency keys",
      updated: "21 February 2025",
      author: "Mara Vogt",
      words: 690
    }, {
      id: "runbook",
      title: "Incident runbook",
      updated: "13 March 2025",
      author: "Elena Costa",
      words: 1570
    }, {
      id: "rate-limits",
      title: "Rate limits",
      updated: "7 March 2025",
      author: "Tobias Lindqvist",
      words: 640
    }, {
      id: "signing-keys",
      title: "Signing key rotation",
      updated: "24 February 2025",
      author: "Mara Vogt",
      words: 1050
    }, {
      id: "queues",
      title: "Queue backpressure",
      updated: "18 February 2025",
      author: "Priya Raman",
      words: 1490
    }, {
      id: "sandbox",
      title: "Sandbox data reset",
      updated: "9 January 2025",
      author: "",
      words: 210
    }]
  }],
  r2 = r1.flatMap(e => e.docs),
  r5 = "webhooks",
  r6 = [{
    label: "Duplicate",
    icon: __mod_62714.A
  }, {
    label: "Move to folder",
    icon: __mod_76021.A
  }, {
    label: "Version history",
    icon: __mod_85018.A
  }, {
    label: "Export as Markdown",
    icon: __mod_92752.A
  }, {
    label: "Move to trash",
    icon: __mod_96037.A,
    danger: !0
  }],
  r8 = [{
    label: "Bulleted list",
    icon: __mod_48240.A
  }, {
    label: "Quote",
    icon: __mod_30322.A
  }, {
    label: "Code block",
    icon: __mod_81320.A
  }, {
    label: "Link",
    icon: __mod_33786.A
  }],
  r4 = `retry:
  initial_delay: 30s
  multiplier: 3
  max_delay: 6h
  max_attempts: 21
  jitter: 0.2`;
function r9({
  label: e,
  items: a,
  className: r,
  align: i = "end"
}) {
  let [o, s] = (0, React.useState)(!1),
    [c, d] = (0, React.useState)(!1),
    u = (0, React.useRef)(null),
    _ = (0, React.useRef)(null),
    b = (0, React.useRef)(null),
    p = e => {
      s(!1), e && _.current?.focus({
        preventScroll: !0
      });
    };
  (0, React.useEffect)(() => {
    if (!o) return;
    let e = u.current?.ownerDocument ?? document,
      a = () => Array.from(b.current?.querySelectorAll('[role="menuitem"]') ?? []);
    a()[0]?.focus({
      preventScroll: !0
    });
    let r = e => {
        u.current?.contains(e.target) || p(!1);
      },
      t = r => {
        let t = a();
        if (0 === t.length) return;
        let n = t.indexOf(e.activeElement);
        "Escape" === r.key ? (r.preventDefault(), p(!0)) : "ArrowDown" === r.key ? (r.preventDefault(), t[n < 0 || n === t.length - 1 ? 0 : n + 1]?.focus({
          preventScroll: !0
        })) : "ArrowUp" === r.key ? (r.preventDefault(), t[n <= 0 ? t.length - 1 : n - 1]?.focus({
          preventScroll: !0
        })) : "Home" === r.key ? (r.preventDefault(), t[0]?.focus({
          preventScroll: !0
        })) : "End" === r.key ? (r.preventDefault(), t[t.length - 1]?.focus({
          preventScroll: !0
        })) : "Tab" === r.key && p(!1);
      };
    return e.addEventListener("pointerdown", r), e.addEventListener("keydown", t), () => {
      e.removeEventListener("pointerdown", r), e.removeEventListener("keydown", t);
    };
  }, [o]);
  let h = e => {
    d(e), s(!0);
  };
  return <div ref={u} className={rq("relative shrink-0", r)}><button ref={_} type="button" aria-label={e} aria-haspopup="menu" aria-expanded={o} onClick={() => o ? p(!1) : h(!0)} onKeyDown={e => {
      "ArrowDown" !== e.key || o || (e.preventDefault(), h(!1));
    }} className={rq(rJ, rQ)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{o && <div ref={b} role="menu" aria-label={e} className={rq("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", c && rY, "absolute top-full z-30 mt-1 w-56", "start" === i ? "left-0" : "right-0")}>{a.map(({
        label: e,
        icon: a,
        danger: r
      }) => <>{r && <div role="separator" className="mx-1 my-2 h-[1.5px] rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:bg-neutral-100/8" />}<button type="button" role="menuitem" tabIndex={-1} onClick={() => p(!0)} className={r ? "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold outline-none select-none [&_svg]:shrink-0 text-[oklch(51%_0.18_26)] hover:bg-[oklch(96%_0.03_26)] focus-visible:bg-[oklch(96%_0.03_26)] data-[highlighted]:bg-[oklch(96%_0.03_26)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-[oklch(78%_0.13_26)] dark:hover:bg-[oklch(30%_0.065_26)] dark:focus-visible:bg-[oklch(30%_0.065_26)] dark:data-[highlighted]:bg-[oklch(30%_0.065_26)] dark:aria-disabled:text-neutral-100/40" : "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"}><__mod_22728.n icon={a} size={16} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{e}</span></button></>)}</div>}</div>;
}
function r3({
  titles: e,
  expanded: a,
  onToggleFolder: r,
  selectedId: i,
  onSelect: o,
  activeId: s,
  onActivate: c
}) {
  let d = (0, React.useRef)(null),
    u = e => {
      e && (e.focus({
        preventScroll: !0
      }), e.dataset.id && c(e.dataset.id));
    };
  return <ul ref={d} role="tree" aria-label="Documents" onKeyDown={e => {
    let a = Array.from(d.current?.querySelectorAll('[role="treeitem"]') ?? []);
    if (0 === a.length) return;
    let t = d.current?.ownerDocument ?? document,
      n = a.indexOf(t.activeElement),
      l = a[n];
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), u(a[Math.min(n + 1, a.length - 1)]);
        break;
      case "ArrowUp":
        e.preventDefault(), u(a[Math.max(n - 1, 0)]);
        break;
      case "Home":
        e.preventDefault(), u(a[0]);
        break;
      case "End":
        e.preventDefault(), u(a[a.length - 1]);
        break;
      case "ArrowRight":
        {
          if (!l) return;
          e.preventDefault();
          let t = l.getAttribute("aria-expanded");
          "false" === t && l.dataset.id ? r(l.dataset.id) : "true" === t && u(a[n + 1]);
          break;
        }
      case "ArrowLeft":
        {
          if (!l) return;
          if (e.preventDefault(), "true" === l.getAttribute("aria-expanded") && l.dataset.id) {
            r(l.dataset.id);
            break;
          }
          let t = l.dataset.parent;
          if (!t) break;
          u(a.find(e => e.dataset.id === t));
        }
    }
  }} className="space-y-0.5">{r1.map((n, d) => {
      let u = a[n.id];
      return <li role="none"><button type="button" role="treeitem" data-id={n.id} aria-expanded={u} aria-selected={!1} aria-level={1} aria-posinset={d + 1} aria-setsize={r1.length} tabIndex={s === n.id ? 0 : -1} onClick={() => {
          c(n.id), r(n.id);
        }} className={rq(rZ, "group")}><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span><span className="min-w-0 flex-1 truncate text-left">{n.name}</span></button>{u && <ul role="group" aria-label={n.name} className="space-y-0.5 pt-0.5">{n.docs.map((a, r) => {
            let l = a.id === i;
            return <li role="none"><button type="button" role="treeitem" data-id={a.id} data-parent={n.id} aria-level={2} aria-posinset={r + 1} aria-setsize={n.docs.length} aria-selected={l} aria-current={l ? "page" : void 0} tabIndex={s === a.id ? 0 : -1} onClick={() => {
                c(a.id), o(a.id);
              }} className={rq(rZ, "pl-8")}><span className="min-w-0 flex-1 truncate text-left">{e[a.id]}</span></button></li>;
          })}</ul>}</li>;
    })}</ul>;
}
function r7({
  titles: e,
  expanded: a,
  onToggleFolder: r,
  selectedId: n,
  onSelect: i,
  activeId: o,
  onActivate: s,
  onClose: c
}) {
  let {
    ref: d,
    edges: u,
    onScroll: x
  } = rH();
  return <><div className="flex h-14 shrink-0 items-center gap-2 pr-2 pl-4"><p className={rq(rV, "min-w-0 flex-1 truncate")}>Halden docs</p><button type="button" aria-label="New document" className={rq(rJ, rQ)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{c && <button type="button" aria-label="Close documents" onClick={c} className={rq(rJ, rQ)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div><div className="relative min-h-0 flex-1"><nav ref={d} onScroll={x} aria-label="Documents" className="h-full overflow-y-auto px-2 pb-2"><r3 titles={e} expanded={a} onToggleFolder={r} selectedId={n} onSelect={i} activeId={o} onActivate={s} /></nav><div aria-hidden="true" className={rq(c ? "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : "bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={rq(c ? "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : "bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", u.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-2 pb-3 pt-2"><button type="button" className={rZ}><__mod_22728.n icon={__mod_96037.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">Trash</span><span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">6</span></button></div></>;
}
function te({
  label: e,
  icon: a,
  pressed: r,
  onToggle: n
}) {
  return <button type="button" aria-label={e} aria-pressed={r} onClick={n} className={rq(rJ, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /></button>;
}
let to = (...e) => e.filter(Boolean).join(" ");
function ts() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let tc = "text-neutral-900 dark:text-neutral-100",
  td = "text-neutral-900/78 dark:text-neutral-100/78",
  tu = "text-neutral-900/62 dark:text-neutral-100/62",
  t_ = "text-[14px]/[20px] font-medium",
  tx = "text-[15px]/[20px] font-bold",
  tb = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  tp = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  th = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40",
  tm = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  tk = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  tf = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  tv = "shrink-0 text-neutral-900/78 dark:text-neutral-100/78",
  tg = "inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums",
  tw = "text-neutral-900/78 dark:text-neutral-100/78",
  ty = "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
  tj = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  tN = "min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]",
  tA = "relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40",
  tS = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  tz = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  tC = "text-neutral-900/62 dark:text-neutral-100/62 select-none",
  tD = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  tR = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  tM = "text-right tabular-nums",
  tE = ["Northwind Labs", "Halden Group", "Corran Health"],
  tW = [{
    name: "Payments API",
    slug: "payments-api"
  }, {
    name: "Ledger core",
    slug: "ledger-core"
  }, {
    name: "Merchant portal",
    slug: "merchant-portal"
  }, {
    name: "Risk engine",
    slug: "risk-engine"
  }],
  tO = ["Production", "Staging", "Preview"],
  tT = {
    active: "Active",
    syncing: "Syncing",
    paused: "Paused",
    degraded: "Degraded"
  },
  tF = {
    active: tw,
    syncing: "text-neutral-900 dark:text-neutral-100",
    paused: "text-neutral-900/62 dark:text-neutral-100/62",
    degraded: ty
  },
  tI = {
    Production: [{
      suffix: "primary",
      region: "eu-west-1",
      status: "active",
      connections: 184,
      backup: "7 Apr 2026"
    }, {
      suffix: "replica-a",
      region: "eu-west-1",
      status: "active",
      connections: 96,
      backup: "7 Apr 2026"
    }, {
      suffix: "replica-b",
      region: "eu-west-1",
      status: "active",
      connections: 88,
      backup: "7 Apr 2026"
    }, {
      suffix: "read-replica-analytics-frankfurt-standby",
      region: "eu-central-1",
      status: "degraded",
      connections: 41,
      backup: "6 Apr 2026"
    }, {
      suffix: "sessions",
      region: "us-east-1",
      status: "active",
      connections: 310,
      backup: "7 Apr 2026"
    }, {
      suffix: "jobs",
      region: "eu-west-1",
      status: "active",
      connections: 22,
      backup: "7 Apr 2026"
    }, {
      suffix: "audit-log",
      region: "ap-southeast-2",
      status: "active",
      connections: 12,
      backup: "7 Apr 2026"
    }, {
      suffix: "search-index",
      region: "eu-west-1",
      status: "syncing",
      connections: 6,
      backup: null
    }, {
      suffix: "billing",
      region: "eu-west-1",
      status: "active",
      connections: 47,
      backup: "7 Apr 2026"
    }, {
      suffix: "webhooks",
      region: "us-west-2",
      status: "active",
      connections: 31,
      backup: "6 Apr 2026"
    }, {
      suffix: "cache-meta",
      region: "eu-west-1",
      status: "active",
      connections: 15,
      backup: "7 Apr 2026"
    }, {
      suffix: "reporting",
      region: "eu-central-1",
      status: "active",
      connections: 28,
      backup: "7 Apr 2026"
    }, {
      suffix: "archive-2025",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "1 Apr 2026"
    }, {
      suffix: "restore-drill",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "5 Apr 2026"
    }],
    Staging: [{
      suffix: "primary",
      region: "eu-west-1",
      status: "active",
      connections: 24,
      backup: "7 Apr 2026"
    }, {
      suffix: "replica-a",
      region: "eu-west-1",
      status: "active",
      connections: 11,
      backup: "7 Apr 2026"
    }, {
      suffix: "read-replica-analytics-frankfurt-standby",
      region: "eu-central-1",
      status: "active",
      connections: 8,
      backup: "6 Apr 2026"
    }, {
      suffix: "sessions",
      region: "us-east-1",
      status: "active",
      connections: 19,
      backup: "7 Apr 2026"
    }, {
      suffix: "jobs",
      region: "eu-west-1",
      status: "active",
      connections: 5,
      backup: "7 Apr 2026"
    }, {
      suffix: "audit-log",
      region: "ap-southeast-2",
      status: "active",
      connections: 3,
      backup: "6 Apr 2026"
    }, {
      suffix: "search-index",
      region: "eu-west-1",
      status: "syncing",
      connections: 2,
      backup: null
    }, {
      suffix: "billing",
      region: "eu-west-1",
      status: "active",
      connections: 7,
      backup: "7 Apr 2026"
    }, {
      suffix: "webhooks",
      region: "us-west-2",
      status: "active",
      connections: 4,
      backup: "7 Apr 2026"
    }, {
      suffix: "seed-data",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: "5 Apr 2026"
    }, {
      suffix: "load-test",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "2 Apr 2026"
    }, {
      suffix: "archive-2025",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "1 Apr 2026"
    }, {
      suffix: "fixtures",
      region: "eu-west-1",
      status: "active",
      connections: 2,
      backup: "4 Apr 2026"
    }],
    Preview: [{
      suffix: "primary",
      region: "eu-west-1",
      status: "active",
      connections: 3,
      backup: "7 Apr 2026"
    }, {
      suffix: "pr-4821",
      region: "eu-west-1",
      status: "active",
      connections: 2,
      backup: null
    }, {
      suffix: "pr-4817",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: null
    }, {
      suffix: "pr-4802-checkout-redesign-rollback",
      region: "eu-west-1",
      status: "syncing",
      connections: 0,
      backup: null
    }, {
      suffix: "sessions",
      region: "eu-west-1",
      status: "active",
      connections: 2,
      backup: "6 Apr 2026"
    }, {
      suffix: "jobs",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: "6 Apr 2026"
    }, {
      suffix: "search-index",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: "5 Apr 2026"
    }, {
      suffix: "billing",
      region: "eu-central-1",
      status: "active",
      connections: 1,
      backup: "5 Apr 2026"
    }, {
      suffix: "webhooks",
      region: "eu-west-1",
      status: "paused",
      connections: 0,
      backup: "4 Apr 2026"
    }, {
      suffix: "seed-data",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: "4 Apr 2026"
    }, {
      suffix: "pr-4788",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "3 Apr 2026"
    }, {
      suffix: "pr-4771",
      region: "us-east-1",
      status: "paused",
      connections: 0,
      backup: "2 Apr 2026"
    }, {
      suffix: "fixtures",
      region: "eu-west-1",
      status: "active",
      connections: 1,
      backup: "3 Apr 2026"
    }]
  },
  tL = [{
    label: "Project",
    items: [{
      label: "Overview",
      icon: __mod_57854.A
    }, {
      label: "Data",
      icon: __mod_86829.A,
      children: ["Databases", "Backups", "Migrations"]
    }, {
      label: "Deployments",
      icon: __mod_33126.A
    }, {
      label: "Logs",
      icon: __mod_78830.A
    }]
  }, {
    label: "Environment",
    items: [{
      label: "Variables",
      icon: __mod_79698.A
    }, {
      label: "Domains",
      icon: __mod_78805.A
    }, {
      label: "Access",
      icon: __mod_88366.A
    }]
  }],
  tP = [{
    label: "Account settings",
    icon: __mod_65174.A
  }, {
    label: "Notification preferences",
    icon: __mod_13473.A
  }, {
    label: "Help centre",
    icon: __mod_3175.A
  }, {
    label: "Sign out",
    icon: __mod_83331.A
  }];
function tq(e, a, r) {
  let t = (0, React.useRef)(r);
  (0, React.useEffect)(() => {
    t.current = r;
  }), (0, React.useEffect)(() => {
    if (!e) return;
    let r = a.current?.ownerDocument ?? document,
      n = e => {
        a.current?.contains(e.target) || t.current(!1);
      },
      l = e => {
        "Escape" === e.key && (e.preventDefault(), t.current(!0));
      };
    return r.addEventListener("pointerdown", n), r.addEventListener("keydown", l), () => {
      r.removeEventListener("pointerdown", n), r.removeEventListener("keydown", l);
    };
  }, [e, a]);
}
function tH({
  status: e
}) {
  return <span className={to(tg, tF[e])}>{"syncing" === e && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{tT[e]}</span>;
}
function t$({
  id: e,
  label: a,
  display: r,
  sections: i,
  createLabel: o,
  open: s,
  onOpenChange: c,
  className: d,
  triggerMaxWidth: u
}) {
  let [_, b] = (0, React.useState)(!1),
    [p, h] = (0, React.useState)(0),
    m = (0, React.useRef)(null),
    k = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    v = i.flatMap((e, a) => e.options.map(e => ({
      sectionIndex: a,
      name: e
    }))),
    g = v.length + +!!o,
    y = e => {
      c(!1), e && k.current?.focus({
        preventScroll: !0
      });
    };
  tq(s, m, y), (0, React.useEffect)(() => {
    s && f.current?.focus({
      preventScroll: !0
    });
  }, [s]);
  let j = e => {
      let a = v.findIndex(e => i[e.sectionIndex].value === e.name);
      h(a < 0 ? 0 : a), b(e), c(!0);
    },
    N = e => {
      let a = v[e];
      a && i[a.sectionIndex].onSelect(a.name), y(!0);
    };
  return <div ref={m} className={to("relative shrink-0", d)}><button ref={k} type="button" aria-haspopup="menu" aria-expanded={s} aria-label={r ? `${a}: ${r}` : a} onClick={() => s ? y(!1) : j(!0)} onKeyDown={e => {
      ("ArrowDown" === e.key || "ArrowUp" === e.key) && (e.preventDefault(), j(!1), "ArrowUp" === e.key && h(g - 1));
    }} className={r ? to(th, tk) : to(tp, tf)}>{r ? <><span className={to("truncate", u)}>{r}</span><__mod_22728.n icon={__mod_31517.A} size={16} strokeWidth={2} aria-hidden="true" className={tv} /></> : <__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>{s && <div ref={f} role="menu" aria-label={a} aria-activedescendant={`${e}-item-${p}`} tabIndex={-1} onKeyDown={e => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), h(e => (e + 1) % g);
          break;
        case "ArrowUp":
          e.preventDefault(), h(e => (e - 1 + g) % g);
          break;
        case "Home":
          e.preventDefault(), h(0);
          break;
        case "End":
          e.preventDefault(), h(g - 1);
          break;
        case "Enter":
        case " ":
          e.preventDefault(), N(p);
          break;
        case "Tab":
          y(!1);
      }
    }} className={to(tN, _ && tS, "absolute left-0 top-full z-30 mt-2 w-60")}>{i.map((a, r) => {
        let n = i.slice(0, r).reduce((e, a) => e + a.options.length, 0);
        return <div role="group" aria-label={a.label} className={r > 0 ? "mt-1" : void 0}>{i.length > 1 && <p className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{a.label}</p>}{a.options.map((r, i) => {
            let o = n + i,
              s = r === a.value;
            return <button id={`${e}-item-${o}`} type="button" role="menuitemradio" aria-checked={s} tabIndex={-1} data-highlighted={o === p ? "" : void 0} onClick={() => N(o)} onPointerMove={() => h(o)} className={tA}><span className="min-w-0 flex-1 truncate">{r}</span>{s && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>;
          })}</div>;
      })}{o && <button id={`${e}-item-${g - 1}`} type="button" role="menuitem" tabIndex={-1} data-highlighted={p === g - 1 ? "" : void 0} onClick={() => y(!0)} onPointerMove={() => h(g - 1)} className={to(tA, "mt-1")}><__mod_22728.n icon={__mod_89886.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="truncate">{o}</span></button>}</div>}</div>;
}
function tB({
  regions: e,
  degradedRegion: a,
  open: r,
  onOpenChange: l
}) {
  let i = (0, React.useRef)(null),
    o = (0, React.useRef)(null),
    s = e => {
      l(!1), e && o.current?.focus({
        preventScroll: !0
      });
    };
  return tq(r, i, s), <div ref={i} className="relative shrink-0"><button ref={o} type="button" aria-haspopup="dialog" aria-expanded={r} aria-label={a ? `System status: degraded in ${a}` : "System status: operational"} onClick={() => {
      r ? s(!1) : l(!0);
    }} className={to(th, tk)}><span className={to(tg, a ? ty : tw, "truncate")}>{a ? "Degraded" : "Operational"}</span></button>{r && <div role="dialog" aria-label="System status" className={to("flex max-h-80 w-72 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-y-auto rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-4 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", tS, "absolute right-0 top-full z-30 mt-2 w-72")}><p className={to(t_, td)}>{a ? `Write latency is above target in ${a}.` : "All regions are serving traffic normally."}</p><ul>{e.map(e => <li className="flex h-8 items-center justify-between gap-3"><span className="min-w-0 truncate">{e}</span><span className={to(tg, e === a ? ty : tw, "shrink-0")}>{e === a ? "Degraded" : "Operational"}</span></li>)}</ul></div>}</div>;
}
function tK({
  idPrefix: e,
  dataOpen: a,
  onDataToggle: r,
  announcement: i,
  onDismissAnnouncement: o,
  onClose: s
}) {
  let [c, d] = (0, React.useState)(!1),
    {
      ref: u,
      edges: x,
      onScroll: b
    } = ts(),
    p = (0, React.useRef)(null),
    m = (0, React.useRef)(null),
    k = (0, React.useRef)(null),
    f = e => {
      d(!1), e && m.current?.focus({
        preventScroll: !0
      });
    };
  return tq(c, p, f), <><div className="flex shrink-0 items-center gap-2 p-3"><div className={to("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "flex-1")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id={`${e}-search`} type="search" placeholder="Search" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><label className="sr-only" htmlFor={`${e}-search`}>Search this project</label></div>{s && <button type="button" aria-label="Close navigation" onClick={s} className={to(tp, tf)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div><div className="relative min-h-0 flex-1"><nav ref={u} onScroll={b} aria-label="Project" className="h-full overflow-y-auto px-2 pb-2">{tL.map(n => <div><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{n.label}</p><ul className="space-y-0.5">{n.items.map(n => n.children ? <li><button type="button" aria-expanded={a} aria-controls={`${e}-${n.label.toLowerCase()}`} onClick={r} className={to(tz, "group")}><__mod_22728.n icon={n.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{n.label}</span><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button><div id={`${e}-${n.label.toLowerCase()}`} className={to("grid", a ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><ul className="-mx-1 overflow-hidden px-1">{n.children.map((e, a) => <li className="pt-0.5"><a href="#databases" aria-current={0 === a ? "page" : void 0} className={to(tz, "pl-8")}><span className="min-w-0 flex-1 truncate">{e}</span></a></li>)}</ul></div></li> : <li><a href="#databases" className={tz}><__mod_22728.n icon={n.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate">{n.label}</span></a></li>)}</ul></div>)}</nav><div aria-hidden="true" className={to(s ? "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : "bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={to(s ? "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : "bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div>{"gone" !== i && <div className="shrink-0 px-2 pb-2"><div className={to(tj, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "p-3", "leaving" === i ? "opacity-0" : "opacity-100")}><p className={tx}>Point-in-time restore</p><p className={to(t_, td, "mt-1")}>Rewind any database to any point in the last 30 days.</p><div className="mt-2.5 flex items-center gap-2"><button type="button" className={to(tb, tm)}>Read more</button><button type="button" onClick={o} className={to(tb, tm)}>Dismiss</button></div></div></div>}<div ref={p} className="relative shrink-0 px-2 pb-2"><button ref={m} type="button" aria-haspopup="menu" aria-expanded={c} onClick={() => {
        c ? f(!1) : d(!0);
      }} className={to(th, "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold", "h-12 w-full gap-2.5 pr-2 pl-2 text-left")}><span className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">DW</span></span><span className="min-w-0 flex-1"><span className={to(tx, tc, "block truncate")}>Dana Whitfield</span><span className={to("text-[13px]/[16px] font-semibold tabular-nums", tu, "block truncate")}>dana.whitfield@northwindlabs.com</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className={tv} /></button>{c && <div ref={k} role="menu" aria-label="Account" onKeyDown={e => {
        let a = Array.from(k.current?.querySelectorAll('[role="menuitem"]') ?? []);
        if (0 === a.length) return;
        let r = k.current?.ownerDocument ?? document,
          t = a.indexOf(r.activeElement);
        "ArrowDown" === e.key ? (e.preventDefault(), a[t < 0 || t === a.length - 1 ? 0 : t + 1]?.focus({
          preventScroll: !0
        })) : "ArrowUp" === e.key ? (e.preventDefault(), a[t <= 0 ? a.length - 1 : t - 1]?.focus({
          preventScroll: !0
        })) : "Home" === e.key ? (e.preventDefault(), a[0]?.focus({
          preventScroll: !0
        })) : "End" === e.key && (e.preventDefault(), a[a.length - 1]?.focus({
          preventScroll: !0
        }));
      }} className={to(tN, tS, "absolute bottom-[calc(100%-0.5rem)] left-2 right-2 z-30")}>{tP.map(({
          label: e,
          icon: a
        }) => <button type="button" role="menuitem" onClick={() => f(!0)} className={tA}><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /><span className="truncate">{e}</span></button>)}</div>}</div></>;
}
function tU({
  rows: e,
  slug: a
}) {
  return <><table className={to("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "hidden table-fixed md:table")}><caption className="sr-only">Databases in the selected project and environment</caption><thead className={to("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "sticky top-0 z-20")}><tr><th scope="col" className={to(tD, "h-9 w-[32%] sm:first:pl-6")}>Database</th><th scope="col" className={to(tD, "h-9 w-[18%]")}>Region</th><th scope="col" className={to(tD, "h-9 w-[18%]")}>Status</th><th scope="col" className={to(tD, tM, "h-9 w-[16%]")}>Connections</th><th scope="col" className={to(tD, "h-9 w-[16%] sm:last:pr-6")}>Last backup</th></tr></thead><tbody>{e.map(e => <tr className={to("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={to(tR, "truncate sm:first:pl-6")}>{a}-{e.suffix}</td><td className={to(tR, "truncate")}>{e.region}</td><td className={tR}><tH status={e.status} /></td><td className={to(tR, tM)}>{e.connections}</td><td className={to(tR, "truncate tabular-nums sm:last:pr-6")}>{e.backup}</td></tr>)}</tbody></table><ul className="space-y-2 px-4 pb-4 md:hidden">{e.map(e => <li className={to(tj, "p-3")}><p className={to(tx, "truncate")}>{a}-{e.suffix}</p><div className="mt-2 flex items-center justify-between gap-3"><tH status={e.status} /><span className={to(t_, td, "shrink-0")}>{e.region}</span></div><div className={to(t_, td, "mt-1 flex items-center justify-between gap-3")}><span><span className={tu}>Connections </span><span className={to(tc, "tabular-nums")}>{e.connections}</span></span><span className="shrink-0 tabular-nums">{e.backup}</span></div></li>)}</ul></>;
}
let tX = (...e) => e.filter(Boolean).join(" ");
function tY() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let tZ = "rounded-[var(--rb-r-4xl,18px)]",
  t0 = "text-neutral-900 dark:text-neutral-100",
  t1 = "text-neutral-900/78 dark:text-neutral-100/78",
  t2 = "text-neutral-900/62 dark:text-neutral-100/62",
  t5 = "border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  t6 = "text-[14px]/[20px] font-medium",
  t8 = "text-[15px]/[20px] font-bold",
  t4 = "text-[13px]/[16px] font-semibold tabular-nums",
  t9 = "font-mono text-[12px]/[16px] tabular-nums",
  t3 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  t7 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  ne = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  na = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  nr = "relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none",
  nt = "flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]",
  nn = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  nl = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  ni = "border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900",
  no = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  ns = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  nc = {
    Scheduled: "text-neutral-900 dark:text-neutral-100",
    "En route": "text-neutral-900 dark:text-neutral-100",
    "Waiting on parts": "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    Overdue: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]",
    Completed: "text-neutral-900/78 dark:text-neutral-100/78"
  },
  nd = [{
    id: "WO-4821",
    customer: "Ferngate Dental",
    service: "Annual boiler service",
    technician: "Priya Raman",
    window: "08:00 – 10:00",
    status: "Completed",
    day: "today"
  }, {
    id: "WO-4822",
    customer: "Halstead Grocers",
    service: "Walk-in cooler not holding temperature",
    technician: "Dominic Fuchs",
    window: "08:30 – 10:30",
    status: "Completed",
    day: "today"
  }, {
    id: "WO-4823",
    customer: "Riverbend Assisted Living and Rehabilitation Center",
    service: "Rooftop unit 3 compressor fault",
    technician: "Dominic Fuchs",
    window: "09:00 – 12:00",
    status: "En route",
    day: "today"
  }, {
    id: "WO-4824",
    customer: "Northline Logistics",
    service: "Loading bay heater inspection",
    technician: "Amara Osei",
    window: "10:00 – 11:00",
    status: "En route",
    day: "today"
  }, {
    id: "WO-4825",
    customer: "Cobb and Wren Bakery",
    service: "Proofer thermostat replacement",
    technician: null,
    window: "10:30 – 12:30",
    status: "Overdue",
    day: "today"
  }, {
    id: "WO-4826",
    customer: "Aldergate Primary School",
    service: "Boiler room annual certification",
    technician: "Priya Raman",
    window: "11:00 – 13:00",
    status: "Scheduled",
    day: "today"
  }, {
    id: "WO-4827",
    customer: "Pinebrook Veterinary",
    service: "Autoclave leaking at the door seal",
    technician: "Amara Osei",
    window: "12:00 – 14:00",
    status: "Waiting on parts",
    day: "today"
  }, {
    id: "WO-4828",
    customer: "Kestrel Sports Centre",
    service: "Pool dehumidifier service",
    technician: "Joachim Bauer",
    window: "13:00 – 15:00",
    status: "Scheduled",
    day: "today"
  }, {
    id: "WO-4829",
    customer: "Vance and Hollis Solicitors",
    service: "Air handling unit filter change",
    technician: null,
    window: "13:30 – 14:30",
    status: "Scheduled",
    day: "today"
  }, {
    id: "WO-4830",
    customer: "Sablefield Hotel",
    service: "Kitchen extraction fan noise",
    technician: "Joachim Bauer",
    window: "14:00 – 16:00",
    status: "Waiting on parts",
    day: "today"
  }, {
    id: "WO-4831",
    customer: "Orchard Park Clinic",
    service: "Chiller pressure alarm",
    technician: "Dominic Fuchs",
    window: "15:00 – 17:00",
    status: "Scheduled",
    day: "today"
  }, {
    id: "WO-4832",
    customer: "Trenholm Manufacturing",
    service: "Compressed air line leak survey",
    technician: null,
    window: "16:00 – 18:00",
    status: "Scheduled",
    day: "today"
  }, {
    id: "WO-4833",
    customer: "Ashgrove Retail Park",
    service: "Quarterly maintenance, units 1 to 6",
    technician: "Priya Raman",
    window: "08:00 – 11:00",
    status: "Scheduled",
    day: "tomorrow"
  }, {
    id: "WO-4834",
    customer: "Merrow Dental Practice",
    service: "Compressor annual service",
    technician: "Amara Osei",
    window: "09:00 – 10:30",
    status: "Scheduled",
    day: "tomorrow"
  }, {
    id: "WO-4835",
    customer: "Bexley Print Works",
    service: "Humidity control recalibration",
    technician: null,
    window: "10:00 – 12:00",
    status: "Scheduled",
    day: "tomorrow"
  }, {
    id: "WO-4836",
    customer: "Calderwood Care Home",
    service: "Hot water cylinder replacement",
    technician: "Joachim Bauer",
    window: "11:00 – 15:00",
    status: "Waiting on parts",
    day: "tomorrow"
  }, {
    id: "WO-4837",
    customer: "Hollowbrook Leisure",
    service: "Sauna heater fault",
    technician: "Dominic Fuchs",
    window: "13:00 – 14:30",
    status: "Scheduled",
    day: "tomorrow"
  }, {
    id: "WO-4838",
    customer: "Quillon Data Centre",
    service: "Condensate alarm on cooling unit 2",
    technician: "Priya Raman",
    window: "15:00 – 18:00",
    status: "Scheduled",
    day: "tomorrow"
  }, {
    id: "WO-4802",
    customer: "Bramley Court Apartments",
    service: "Communal boiler flue repair",
    technician: "Amara Osei",
    window: "08:00 – 11:00",
    status: "Completed",
    day: "earlier"
  }, {
    id: "WO-4805",
    customer: "Thornecroft Garden Centre",
    service: "Irrigation pump rewire",
    technician: "Joachim Bauer",
    window: "09:30 – 11:30",
    status: "Completed",
    day: "earlier"
  }, {
    id: "WO-4809",
    customer: "Denbury Motors",
    service: "Spray booth extraction service",
    technician: "Priya Raman",
    window: "10:00 – 13:00",
    status: "Completed",
    day: "earlier"
  }, {
    id: "WO-4813",
    customer: "Whitlock Pharmacy",
    service: "Fridge temperature logger fault",
    technician: "Dominic Fuchs",
    window: "11:00 – 12:00",
    status: "Completed",
    day: "earlier"
  }, {
    id: "WO-4816",
    customer: "Eastvale Community Pool",
    service: "Backwash valve replacement",
    technician: "Amara Osei",
    window: "13:00 – 16:00",
    status: "Completed",
    day: "earlier"
  }, {
    id: "WO-4818",
    customer: "Garrick Chambers",
    service: "Split system decommission",
    technician: null,
    window: "15:00 – 16:30",
    status: "Completed",
    day: "earlier"
  }],
  nu = [{
    id: "today",
    label: "Today",
    icon: __mod_68240.A,
    match: e => "today" === e.day,
    emptyTitle: "Nothing booked today",
    emptyHelp: "New jobs land here as soon as they are scheduled."
  }, {
    id: "unassigned",
    label: "Unassigned",
    icon: __mod_22830.A,
    match: e => null === e.technician && "earlier" !== e.day,
    emptyTitle: "Every job has an engineer",
    emptyHelp: "Jobs without an engineer are collected here."
  }, {
    id: "progress",
    label: "In progress",
    icon: __mod_68142.A,
    match: e => "En route" === e.status,
    emptyTitle: "No one is on the road",
    emptyHelp: "Jobs appear here once an engineer starts travelling."
  }, {
    id: "parts",
    label: "Waiting on parts",
    icon: __mod_32406.A,
    match: e => "Waiting on parts" === e.status,
    emptyTitle: "No jobs are held up",
    emptyHelp: "Jobs paused for a part are collected here."
  }, {
    id: "tomorrow",
    label: "Tomorrow",
    icon: __mod_18327.A,
    match: e => "tomorrow" === e.day,
    emptyTitle: "Tomorrow is clear",
    emptyHelp: "Bookings for tomorrow appear here as they come in."
  }, {
    id: "week",
    label: "This week",
    icon: __mod_18327.A,
    match: e => "earlier" !== e.day,
    emptyTitle: "This week is clear",
    emptyHelp: "Bookings for the next seven days appear here."
  }, {
    id: "completed",
    label: "Completed",
    icon: __mod_54810.A,
    match: e => "Completed" === e.status,
    emptyTitle: "No completed jobs yet",
    emptyHelp: "Signed-off jobs move here automatically."
  }, {
    id: "cancelled",
    label: "Cancelled",
    icon: __mod_24580.A,
    match: () => !1,
    emptyTitle: "No cancelled jobs",
    emptyHelp: "Cancelled jobs stay here for 90 days before they are archived."
  }],
  n_ = [{
    label: "Dispatch",
    queues: ["today", "unassigned", "progress", "parts"]
  }, {
    label: "Upcoming",
    queues: ["tomorrow", "week"]
  }, {
    label: "Archive",
    queues: ["completed", "cancelled"]
  }],
  nx = ["today", "unassigned", "progress", "tomorrow", "completed"],
  nb = e => nu.find(a => a.id === e),
  np = [{
    id: "window",
    label: "Time"
  }, {
    id: "customer",
    label: "Customer"
  }];
function nh({
  status: e
}) {
  return <span className={tX("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", nc[e])}>{"En route" === e && <span className="flex h-lh shrink-0 items-center"><span className="inline-block size-3 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin [animation-duration:700ms] motion-reduce:animate-none" aria-hidden="true" /></span>}{e}</span>;
}
function nm({
  flagged: e,
  onToggle: a,
  jobId: r,
  alwaysVisible: n
}) {
  return <span className={n || e ? "flex shrink-0 items-center" : tX("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", "shrink-0")}><button type="button" aria-pressed={e} aria-label={e ? `Clear follow-up on ${r}` : `Flag ${r} for follow-up`} onClick={a} className={tX(t7, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_85585.A} size={18} strokeWidth={2} aria-hidden="true" className={tX(e && "[&_path]:fill-current")} /></button></span>;
}
function nk({
  job: e,
  flagged: a,
  onToggleFlag: r
}) {
  return <li className={tX("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", tZ, "group min-h-11 px-3")}><span className={tX(t9, t2, "hidden w-[4.5rem] shrink-0 lg:block")}>{e.id}</span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={tX(t8, "block truncate")}>{e.customer}</span><span className={tX(t6, t2, "block truncate")}>{e.service}</span></span><span className={tX(t6, t1, "hidden w-32 shrink-0 truncate lg:block")}>{e.technician}</span><span className={tX(t6, t1, "text-right tabular-nums", "w-[6.5rem] shrink-0")}>{e.window}</span><span className="w-32 shrink-0"><nh status={e.status} /></span><nm flagged={a} onToggle={r} jobId={e.id} /></li>;
}
function nf({
  job: e,
  flagged: a,
  onToggleFlag: r
}) {
  return <li className={tX(nn, "p-4")}><div className="flex items-start gap-3"><div className="min-w-0 flex-1"><p className={tX(t8, "truncate")}>{e.customer}</p><p className={tX(t6, t2, "mt-0.5 line-clamp-2")}>{e.service}</p></div><nm flagged={a} onToggle={r} jobId={e.id} alwaysVisible={!0} /></div><dl className={tX("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", tZ, "mt-3 grid grid-cols-2 gap-x-4 px-3 py-2.5")}><div className="min-w-0"><dt className={tX(t4, t2)}>Arrival window</dt><dd className={tX(t6, "mt-0.5 truncate tabular-nums")}>{e.window}</dd></div><div className="min-w-0"><dt className={tX(t4, t2)}>Engineer</dt><dd className={tX(t6, "mt-0.5 truncate")}>{e.technician ?? <span className="text-neutral-900/62 dark:text-neutral-100/62">None</span>}</dd></div></dl><div className="mt-3 flex items-center justify-between gap-3"><nh status={e.status} /><span className={tX(t9, t2, "shrink-0")}>{e.id}</span></div></li>;
}
function nv({
  current: e,
  counts: a,
  onSelect: r
}) {
  return <div>{n_.map(n => <div><p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{n.label}</p><ul className="space-y-0.5">{n.queues.map(n => {
          let i = nb(n),
            o = e === n;
          return <li><button type="button" aria-current={o ? "page" : void 0} onClick={() => r(n)} className={no}><__mod_22728.n icon={i.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{i.label}</span>{a[n] > 0 && <span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{a[n]}</span>}</button></li>;
        })}</ul></div>)}</div>;
}
function ng({
  assigned: e,
  total: a,
  onAssign: r
}) {
  return <div className={tX(nn, "mt-auto p-3")}><p className={tX(t4, t2)}>Shift coverage</p><p className={tX(t8, "mt-1")}><span className="tabular-nums">{e}</span> of <span className="tabular-nums">{a}</span> jobs assigned</p><button type="button" onClick={r} className={tX(t3, ne, "mt-2.5 w-full")}>Assign remaining</button></div>;
}
function nw() {
  return <span className={tX("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "size-8", t8)}>C</span>;
}
let ny = e => {
  let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
  if (!a && "Home" !== e.key && "End" !== e.key) return;
  let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
    t = r.indexOf(e.target);
  if (t < 0) return;
  e.preventDefault();
  let n = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
  r[n].focus(), r[n].click();
};
let nD = (...e) => e.filter(Boolean).join(" ");
function nR() {
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
        scrollHeight: n,
        clientHeight: l
      } = a;
      r({
        start: t > 1,
        end: Math.ceil(t + l) < n - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    t();
    let a = e.current,
      r = a?.ownerDocument.defaultView;
    if (!a || !r?.ResizeObserver) return;
    let n = new r.ResizeObserver(t);
    return n.observe(a), () => n.disconnect();
  }, [t]), {
    ref: e,
    edges: a,
    onScroll: t
  };
}
let nM = "text-neutral-900 dark:text-neutral-100",
  nE = "text-neutral-900/78 dark:text-neutral-100/78",
  nW = "text-neutral-900/62 dark:text-neutral-100/62",
  nO = "text-[17px]/[22px] font-extrabold",
  nT = "text-[14px]/[20px] font-medium",
  nF = "text-[15px]/[20px] font-bold",
  nI = "text-[13px]/[16px] font-semibold tabular-nums",
  nL = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  nP = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  nq = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  nH = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  n$ = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  nB = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  nK = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  nU = "size-10 rounded-[calc(var(--rb-r-full,999px))]",
  nV = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  nJ = "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100",
  nQ = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  nG = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  nX = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]",
  nY = "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]",
  nZ = [{
    id: "atlas",
    name: "Atlas 4",
    note: "Best for hard reasoning",
    icon: __mod_27151.A
  }, {
    id: "wren",
    name: "Wren",
    note: "Fast, good for drafts",
    icon: __mod_78805.A
  }, {
    id: "orbit",
    name: "Orbit",
    note: "Long documents",
    icon: __mod_86829.A
  }],
  n0 = [{
    label: "Draft an email",
    icon: __mod_67812.A
  }, {
    label: "Summarise a file",
    icon: __mod_31964.A
  }, {
    label: "Write a function",
    icon: __mod_81320.A
  }, {
    label: "Plan a trip",
    icon: __mod_87924.A
  }],
  n1 = [{
    id: "revenue",
    title: "Quarterly revenue summary",
    icon: __mod_31964.A,
    model: "Atlas 4",
    count: 12,
    turns: [{
      role: "user",
      text: "Pull the headline numbers out of the Q3 close and tell me what actually moved."
    }, {
      role: "assistant",
      text: "Revenue landed at 4.62m, up 8.4% on Q2. Almost all of the gain is expansion inside existing accounts rather than new logos, which came in flat at 41. Net retention is 114%, the best of the last four quarters."
    }, {
      role: "user",
      text: "What is the risk in that number?"
    }, {
      role: "assistant",
      text: "Concentration. The top six accounts now sit at 38% of ARR, up from 31% a year ago. Two of them renew in the same month, so a single bad renewal window would take more off the top line than the whole quarter's growth put back."
    }]
  }, {
    id: "auth",
    title: "Refactor auth middleware",
    icon: __mod_81320.A,
    model: "Atlas 4",
    count: 24,
    turns: [{
      role: "user",
      text: "The session refresh runs on every request. Can it be cheaper?"
    }, {
      role: "assistant",
      text: "Yes. Refresh only when the token is inside its last five minutes, and keep the decoded claims on the request so downstream handlers stop re-parsing. That takes the common path from one network call to none."
    }]
  }, {
    id: "lisbon",
    title: "Lisbon trip itinerary",
    icon: __mod_87924.A,
    model: "Wren",
    count: 8,
    turns: [{
      role: "user",
      text: "Four days in Lisbon in October, no rental car."
    }, {
      role: "assistant",
      text: "Base yourself in Pr\xedncipe Real so most of it is walkable. Day one Alfama and the viewpoints, day two Bel\xe9m by tram, day three a train out to Sintra, day four the Time Out market and the riverside before your flight."
    }]
  }, {
    id: "launch",
    title: "Launch checklist draft",
    icon: __mod_92190.A,
    model: "Atlas 4",
    count: 5,
    turns: [{
      role: "user",
      text: "What is still open before Thursday?"
    }, {
      role: "assistant",
      text: "Three things: the pricing page copy is unreviewed, the status page has no incident template, and nobody owns the first-hour inbox. The rest is either done or does not block the announcement."
    }]
  }, {
    id: "vector",
    title: "Explain vector search",
    icon: __mod_66575.A,
    model: "Orbit",
    count: 9,
    turns: [{
      role: "user",
      text: "Explain vector search without the marketing words."
    }, {
      role: "assistant",
      text: "You turn each document into a list of numbers that encodes its meaning, then store them. A query becomes the same kind of list, and you return the documents whose lists point in a similar direction. It finds things that mean the same rather than things that spell the same."
    }]
  }, {
    id: "sql",
    title: "Optimise a slow SQL query",
    icon: __mod_86829.A,
    model: "Orbit",
    count: 16,
    turns: [{
      role: "user",
      text: "This join takes eleven seconds. Where do I start?"
    }, {
      role: "assistant",
      text: "Read the plan first. An eleven second join on this row count is almost always a sequential scan on the right-hand table because the join column is not indexed, or is indexed with a different collation than the one you are comparing against."
    }]
  }],
  n2 = [{
    label: "Favourites",
    icon: __mod_12556.A,
    count: 2
  }, {
    label: "Templates",
    icon: __mod_92916.A,
    count: 5
  }, {
    label: "History",
    icon: __mod_85018.A
  }, {
    label: "Clear history",
    icon: __mod_96037.A
  }];
function n5({
  children: e
}) {
  return <p className="px-3 pt-5 pb-1.5 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e}</p>;
}
function n6({
  value: e,
  onChange: a
}) {
  let [r, i] = (0, React.useState)(!1),
    [o, s] = (0, React.useState)(0),
    c = (0, React.useRef)(null),
    d = (0, React.useRef)(null),
    u = (0, React.useRef)([]),
    _ = (0, React.useCallback)(e => {
      i(!1), e && c.current?.focus({
        preventScroll: !0
      });
    }, []);
  (0, React.useEffect)(() => {
    if (!r) return;
    let e = c.current?.ownerDocument ?? document,
      a = e => {
        let a = e.target;
        d.current?.contains(a) || c.current?.contains(a) || i(!1);
      },
      t = e => {
        "Escape" === e.key && (e.preventDefault(), _(!0));
      };
    e.addEventListener("pointerdown", a), e.addEventListener("keydown", t);
    let n = requestAnimationFrame(() => u.current[o]?.focus({
      preventScroll: !0
    }));
    return () => {
      cancelAnimationFrame(n), e.removeEventListener("pointerdown", a), e.removeEventListener("keydown", t);
    };
  }, [r, o, _]);
  let x = e => {
    let a = (e + nZ.length) % nZ.length;
    s(a), u.current[a]?.focus({
      preventScroll: !0
    });
  };
  return <div className="relative"><button ref={c} type="button" aria-haspopup="menu" aria-expanded={r} onClick={() => {
      s(nZ.findIndex(a => a.id === e.id)), i(e => !e);
    }} className={nD(nH, nB)}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" />{e.name}<__mod_22728.n icon={__mod_20148.A} size={16} strokeWidth={2} aria-hidden="true" className={nD("shrink-0 text-neutral-900/78 dark:text-neutral-100/78", r && "rotate-180")} /></button>{r && <div ref={d} role="menu" aria-label="Choose a model" className={nD("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-0 top-[calc(100%+6px)] z-50 w-64")}>{nZ.map((r, n) => {
        let s = r.id === e.id;
        return <button ref={e => {
          u.current[n] = e;
        }} type="button" role="menuitemradio" aria-checked={s} tabIndex={n === o ? 0 : -1} onKeyDown={e => {
          "ArrowDown" === e.key ? (e.preventDefault(), x(n + 1)) : "ArrowUp" === e.key ? (e.preventDefault(), x(n - 1)) : "Home" === e.key ? (e.preventDefault(), x(0)) : "End" === e.key ? (e.preventDefault(), x(nZ.length - 1)) : "Tab" === e.key && i(!1);
        }} onClick={() => {
          a(r), _(!0);
        }} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1"><span className="block truncate">{r.name}</span><span className={nD(nT, nE, "block truncate")}>{r.note}</span></span>{s && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" />}</button>;
      })}</div>}</div>;
}
function n8({
  draft: e,
  onDraft: a,
  model: r,
  inputRef: n
}) {
  return <div className="relative flex w-full min-w-0 flex-col rounded-[calc(min(var(--rb-r-6xl,26px),min(var(--rb-r-full,999px),16px)_+_8px))] border border-transparent bg-white text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] transition-[box-shadow] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:shadow-[0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent),0_8px_22px_-10px_rgb(84_62_32/0.2)] dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] dark:focus-within:shadow-[0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163)),0_0_0_5px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><label htmlFor="halden-composer" className="sr-only">Message Halden</label><div className="px-2 pt-2"><textarea id="halden-composer" ref={n} rows={1} value={e} onChange={e => {
        a(e.target.value);
        let r = e.target;
        r.style.height = "auto", r.style.height = `${Math.min(r.scrollHeight, 160)}px`;
      }} placeholder="Message Halden" className={nD("max-h-40 min-h-6 min-w-0 flex-auto resize-none bg-transparent px-1.5 py-1.5 field-sizing-content text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55", "block w-full")} /></div><div className="flex items-center gap-1 px-2 pb-2 pt-1"><button type="button" aria-label="Add an attachment" className={nD(n$, nK)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-pressed="false" className={nD(n$, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold")}><__mod_22728.n icon={__mod_78805.A} size={18} strokeWidth={2} aria-hidden="true" />Search</button><div className="ml-auto flex items-center gap-1"><span className={nD(nI, nW, "hidden shrink-0 pr-1 sm:block")}>{r.name}</span><button type="button" aria-label="Dictate" className={nD(n$, nK)}><__mod_22728.n icon={__mod_68686.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Send message" disabled={0 === e.trim().length} className={nD(nq, nK)}><__mod_22728.n icon={__mod_40972.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div>;
}
function n4({
  model: e,
  onModel: a,
  chatId: r,
  onChat: n,
  onNew: i,
  onClose: o,
  onCollapse: s,
  collapseRef: c
}) {
  let d = n1[0],
    {
      ref: u,
      edges: x,
      onScroll: b
    } = nR();
  return <><div className="flex h-[60px] shrink-0 items-center gap-2.5 px-3"><span aria-hidden="true" className={nD(nY, "size-8", nF)}>H</span><p className={nD(nO, "min-w-0 flex-1 truncate")}>Halden</p>{o ? <button type="button" aria-label="Close navigation" onClick={o} className={nD(n$, nU)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button> : <button ref={c} type="button" aria-label="Collapse sidebar" aria-expanded={!0} onClick={s} className={nD(n$, nU, "max-lg:hidden")}><__mod_22728.n icon={__mod_40279.A} size={18} strokeWidth={2} aria-hidden="true" /></button>}</div><div className="shrink-0 px-3 pb-3"><button type="button" onClick={i} className={nD(nq, nB, "w-full")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">New chat</span></button></div><div className="relative min-h-0 flex-1"><div ref={u} onScroll={b} className="h-full overflow-y-auto px-3 pb-3"><div><n5>Model</n5><div role="radiogroup" aria-label="Model" className="grid grid-cols-3 gap-1.5">{nZ.map(r => {
              let n = r.id === e.id;
              return <button type="button" role="radio" aria-checked={n} onClick={() => a(r)} className={nD(nP, nL, "rounded-[var(--rb-r-4xl,18px)]", n ? nD("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_0_0_1px_rgb(0_0_0/0.6),0_2px_6px_-1px_rgb(0_0_0/0.6)]", "border-2 border-neutral-900/30 dark:border-neutral-100/34", nM) : nD("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "border border-neutral-900/12 dark:border-neutral-100/14", nE), "flex min-w-0 cursor-pointer flex-col items-center justify-center gap-1.5 px-2 py-2.5 select-none")}><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className={nD("text-[13px]/[16px] font-bold tabular-nums", "w-full truncate text-center")}>{r.name}</span></button>;
            })}</div></div><div><n5>Pinned</n5><button type="button" onClick={() => n(d.id)} className={nD(nV, "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", nL, nP, "w-full px-2.5 py-2 text-left")}><span className="flex items-center gap-2"><__mod_22728.n icon={d.icon} size={18} strokeWidth={2} aria-hidden="true" className={nW} /><span className={nD(nF, "min-w-0 flex-1 truncate")}>{d.title}</span></span><span className="mt-1.5 flex items-center gap-1.5 pl-6"><span className={nD("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>{d.model}</span><span className={nD(nI, nW)}>{d.count} messages</span></span></button></div><div><n5>Recent</n5><ul className="space-y-0.5">{n1.map(e => {
              let a = e.id === r;
              return <li><button type="button" aria-current={a ? "page" : void 0} onClick={() => n(e.id)} className={nQ}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{e.title}</span></button></li>;
            })}</ul></div><div><n5>Quick actions</n5><ul className="space-y-0.5">{n2.map(e => <li><button type="button" className={nQ}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{e.label}</span>{void 0 !== e.count && <span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.count}</span>}</button></li>)}</ul></div></div><div aria-hidden="true" className={nD(o ? "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : nG, "pointer-events-none absolute inset-x-0 top-0 h-8", x.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={nD(o ? "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950" : nX, "pointer-events-none absolute inset-x-0 bottom-0 h-8", x.end ? "opacity-100" : "opacity-0")} /></div><div className="flex h-[60px] shrink-0 items-center gap-2.5 px-3"><span className="relative shrink-0"><span aria-hidden="true" className="relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none"><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">HA</span></span></span><span className="min-w-0 flex-1"><span className={nD(nF, "block truncate")}>Assistant</span><span className={nD(nT, nE, "block truncate")}>Online, replies instantly</span></span></div></>;
}
let n9 = {
    "app-shell-1": function () {
      let [e, a] = (0, React.useState)(!1),
        [r, i] = (0, React.useState)(!1),
        {
          ref: o,
          edges: s,
          onScroll: c
        } = j(),
        d = (0, React.useRef)(!1),
        u = (0, React.useRef)(null),
        _ = (0, React.useRef)(null);
      (0, React.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (u.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)").matches && a(!0);
        });
        return () => cancelAnimationFrame(e);
      }, []), (0, React.useEffect)(() => {
        if (!e) return;
        let r = _.current,
          t = r?.ownerDocument ?? document,
          n = requestAnimationFrame(() => i(!0)),
          l = () => Array.from(r?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        d.current && (l()[0]?.focus({
          preventScroll: !0
        }), d.current = !1);
        let o = e => {
          if ("Escape" === e.key) {
            a(!1), i(!1), u.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let r = l(),
            n = r[0],
            o = r[r.length - 1];
          n && o && (e.shiftKey && t.activeElement === n ? (e.preventDefault(), o.focus({
            preventScroll: !0
          })) : e.shiftKey || t.activeElement !== o || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return t.addEventListener("keydown", o), () => {
          cancelAnimationFrame(n), t.removeEventListener("keydown", o);
        };
      }, [e]);
      let x = () => {
        a(!1), i(!1), u.current?.focus({
          preventScroll: !0
        });
      };
      return <div className={y("bg-white dark:bg-neutral-950", N, "relative flex h-full min-h-[720px] w-full overflow-hidden")}><aside className={y(O, "hidden w-64 shrink-0 flex-col lg:flex")}><X /></aside><div className={y("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col")}><header className={y("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><button ref={u} type="button" aria-label="Open navigation" aria-expanded={e} onClick={() => {
              d.current = !0, a(!0);
            }} className={y(R, M, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><nav aria-label="Breadcrumb" className="min-w-0 flex-1"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li className="hidden items-center gap-1.5 sm:flex"><a href="#operations" className={I}>Operations</a><span aria-hidden="true" className={L}>/</span></li><li className="flex shrink-0 items-center gap-1.5"><a href="#shipments" className={I}>Shipments</a><span aria-hidden="true" className={L}>/</span></li><li className="min-w-0"><span aria-current="page" className={y("font-bold text-neutral-900 dark:text-neutral-100", "block truncate")}>In transit</span></li></ol></nav><label className="relative hidden w-56 shrink-0 md:block"><span className="sr-only">Search shipments</span><span className={y("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input type="search" placeholder="Search shipments" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></span></label><button type="button" aria-label="Book shipment" className={y("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Book shipment</span></button></header><div className="flex min-h-0 flex-1 flex-col p-2"><div className={y(E, "min-h-0 flex-1")}><main ref={o} onScroll={c} className="min-h-0 flex-1 overflow-y-auto"><div className="p-4"><div className="@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1"><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{V.map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className="text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78">{e.label}</p><p className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[34px]/[40px] font-extrabold tracking-[-0.02em] tabular-nums text-neutral-900 dark:text-neutral-100">{e.value}</p><p className={y("text-[14px]/[20px] font-medium text-neutral-900/62 dark:text-neutral-100/62", "mt-auto")}>{e.delta}</p></div>)}</div></div></div><div className="flex h-9 items-center justify-between gap-3 px-4"><h2 className={y(z, "min-w-0 truncate")}>Active shipments</h2><span className={y(C, S, "shrink-0")}>14 of 1,284</span></div><table className={y("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "hidden table-fixed md:table")}><caption className="sr-only">Shipments currently in transit</caption><thead><tr><th scope="col" className={y(P, "h-9 w-[11%]")}>Reference</th><th scope="col" className={y(P, "h-9 w-[22%]")}>Consignee</th><th scope="col" className={y(P, "hidden h-9 w-[24%] lg:table-cell")}>Carrier</th><th scope="col" className={y(P, "h-9 w-[16%]")}>Status</th><th scope="col" className={y(P, H, "h-9 w-[11%]")}>ETA</th><th scope="col" className={y(P, H, "h-9 w-[16%]")}>Value</th></tr></thead><tbody>{J.map(e => <tr className={y("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={q}><span className={y(D, A)}>{e.reference}</span></td><td className={q}><span className={y(z, "block truncate")}>{e.consignee}</span></td><td className={y(q, "hidden lg:table-cell")}>{e.carrier && <span className={y(A, "block truncate")}>{e.carrier}</span>}</td><td className={q}><G status={e.status} /></td><td className={y(q, H)}><span className={A}>{e.eta}</span></td><td className={y(q, H)}>{e.value}</td></tr>)}</tbody></table><ul className="space-y-2 px-4 pb-4 md:hidden">{J.map(e => <li className={y(E, "p-4")}><div className="flex items-start justify-between gap-3"><p className={y(z, "min-w-0 flex-1 truncate")}>{e.consignee}</p><span className={y("text-[14px]/[20px] font-medium", "shrink-0 tabular-nums")}>{e.value}</span></div><div className="mt-2 flex items-center justify-between gap-3"><G status={e.status} /><span className={y(D, S, "shrink-0")}>{e.reference}</span></div><div className="mt-1 flex items-center justify-between gap-3"><span className={y(C, S, "min-w-0 truncate")}>{e.carrier}</span><span className={y(C, S, "shrink-0")}>{e.eta}</span></div></li>)}</ul></main><div aria-hidden="true" className={y("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={y("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div></div></div>{e && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" onClick={x} tabIndex={-1} className={y("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", W, "absolute inset-0 z-30 cursor-pointer", r ? "opacity-100" : "opacity-0")} /><aside ref={_} role="dialog" aria-modal="true" aria-label="Navigation" className={y(O, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", W, "absolute inset-y-0 left-0 z-40 flex w-72 max-w-[85%] flex-col", r ? "opacity-100" : "opacity-0")}><X onClose={x} /></aside></div>}</div>;
    },
    "app-shell-2": function () {
      let [e, a] = (0, React.useState)(ev[0].id),
        [r, i] = (0, React.useState)(!1),
        [o, s] = (0, React.useState)(!1),
        {
          ref: c,
          edges: d,
          onScroll: u
        } = ei(),
        _ = (0, React.useRef)(!1),
        x = (0, React.useRef)(null),
        b = (0, React.useRef)(null),
        p = (0, React.useRef)(null),
        h = ev.find(a => a.id === e) ?? ev[0];
      (0, React.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (x.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)").matches && i(!0);
        });
        return () => cancelAnimationFrame(e);
      }, []), (0, React.useEffect)(() => {
        if (!r) return;
        let e = p.current,
          a = e?.ownerDocument ?? document,
          t = requestAnimationFrame(() => s(!0)),
          n = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        _.current && (n()[0]?.focus({
          preventScroll: !0
        }), _.current = !1);
        let l = e => {
          if ("Escape" === e.key) {
            i(!1), s(!1), b.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let r = n(),
            t = r[0],
            l = r[r.length - 1];
          t && l && (e.shiftKey && a.activeElement === t ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || a.activeElement !== l || (e.preventDefault(), t.focus({
            preventScroll: !0
          })));
        };
        return a.addEventListener("keydown", l), () => {
          cancelAnimationFrame(t), a.removeEventListener("keydown", l);
        };
      }, [r]);
      let m = () => {
        i(!1), s(!1), b.current?.focus({
          preventScroll: !0
        });
      };
      return <div ref={x} className={el("bg-white dark:bg-neutral-950", eo, "relative flex h-full min-h-[800px] w-full overflow-hidden")}><aside className="hidden shrink-0 lg:flex"><ew areaId={e} onSelectArea={a} /></aside><div className={el("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col")}><header className={el("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6")}><button ref={b} type="button" aria-label="Open navigation" aria-expanded={r} onClick={() => {
              _.current = !0, i(!0);
            }} className={el(ed, eu, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><h1 className={el("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "min-w-0 flex-1 truncate")}>{h.title}</h1><button type="button" className={el("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}>{h.action}</button></header><div className="flex min-h-0 flex-1 flex-col p-2"><div className={el("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1")}><main ref={c} onScroll={u} className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><div className="relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]"><div className={el("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "h-12")}><h2 className={el("min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100", "flex-1")}>{h.listTitle}</h2><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{h.listCount}</span></div><ul className={el("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7")}>{h.rows.map(e => <li><button type="button" className={el("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "px-3")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.name}</span></span><span data-description={!0} className={el(ec, es, "flex min-w-0 gap-2")}>{e.detail.map((e, a) => <span className={0 === a ? "shrink-0" : "min-w-0 truncate"}>{e}</span>)}</span></span><span className="flex shrink-0 flex-col items-end"><span className={el("text-[14px]/[20px] font-medium", "block min-h-lh tabular-nums")}>{e.meta}</span><span className={el("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", ek[e.tone])}>{e.status}</span></span></button></li>)}</ul></div></main><div aria-hidden="true" className={el("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={el("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div></div>{r && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" tabIndex={-1} onClick={m} className={el("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", eb, "absolute inset-0 z-30 cursor-pointer", o ? "opacity-100" : "opacity-0")} /><div ref={p} role="dialog" aria-modal="true" aria-label="Navigation" className={el("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", eb, "absolute inset-y-0 left-0 z-40 flex w-[312px] max-w-[calc(100%-3rem)] overflow-hidden", o ? "opacity-100" : "opacity-0")}><ew areaId={e} onSelectArea={a} onClose={m} /></div></div>}</div>;
    },
    "app-shell-3": function () {
      let [e, a] = (0, React.useState)(!1),
        [r, o] = (0, React.useState)(""),
        [s, d] = (0, React.useState)(e7[0].label),
        [u, x] = (0, React.useState)(!1),
        [b, p] = (0, React.useState)(!1),
        [h, m] = (0, React.useState)(!1),
        {
          ref: k,
          edges: f,
          onScroll: y
        } = eE(),
        j = (0, React.useRef)(null),
        N = (0, React.useRef)(null),
        A = (0, React.useRef)(null),
        S = (0, React.useRef)(null),
        z = (0, React.useRef)(null),
        C = (0, React.useRef)(null),
        D = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (C.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)").matches && p(!0);
        });
        return () => cancelAnimationFrame(e);
      }, []), (0, React.useEffect)(() => {
        let e = j.current?.ownerDocument ?? document,
          a = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), N.current?.focus({
              preventScroll: !0
            }));
          };
        return e.addEventListener("keydown", a), () => e.removeEventListener("keydown", a);
      }, []), (0, React.useEffect)(() => {
        if (!b) return;
        let e = S.current,
          a = e?.ownerDocument ?? document,
          r = requestAnimationFrame(() => m(!0)),
          t = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        D.current && (t()[0]?.focus({
          preventScroll: !0
        }), D.current = !1);
        let n = e => {
          if ("Escape" === e.key) {
            p(!1), m(!1), z.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let r = t(),
            n = r[0],
            l = r[r.length - 1];
          n && l && (e.shiftKey && a.activeElement === n ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || a.activeElement !== l || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return a.addEventListener("keydown", n), () => {
          cancelAnimationFrame(r), a.removeEventListener("keydown", n);
        };
      }, [b]), (0, React.useEffect)(() => {
        u && A.current?.focus({
          preventScroll: !0
        });
      }, [u]);
      let R = () => {
          p(!1), m(!1), z.current?.focus({
            preventScroll: !0
          });
        },
        M = (0, React.useMemo)(() => {
          let e = r.trim().toLowerCase(),
            a = e7.find(e => e.label === s)?.stage ?? null;
          return e3.filter(r => (!a || r.stage === a) && (!e || r.name.toLowerCase().includes(e) || r.counterparty.toLowerCase().includes(e)));
        }, [r, s]),
        E = (e, a) => <div className={eM("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className={e$}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input ref={e} type="text" role="searchbox" value={r} onChange={e => o(e.target.value)} onKeyDown={e => {
            "Escape" === e.key && o("");
          }} placeholder="Search contracts and counterparties" aria-label="Search contracts and counterparties" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" />{a && <span data-affix={!0} className={eM(e$, "hidden lg:flex")}><kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">⌘K</kbd></span>}</div>,
        W = M.length === e3.length ? `${e3.length} agreements` : `${M.length} of ${e3.length} agreements`;
      return <div ref={j} className={eM("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[800px] w-full flex-col overflow-hidden")}><header className={eM(eX, "relative z-20 flex h-14 shrink-0 items-center gap-2 px-4 sm:px-6")}><button ref={z} type="button" aria-label="Open navigation" aria-expanded={b} aria-controls={e2} onClick={() => {
            D.current = !0, p(!0);
          }} className={eM(eL, eH, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span className={eM(eW, "size-8", eF)}>S</span><p className={eM(eF, "truncate")}>Sundial</p><button type="button" aria-label={e ? "Expand sidebar" : "Collapse sidebar"} aria-expanded={!e} aria-controls={e1} onClick={() => a(e => !e)} className={eM(eL, eH, "ml-1 max-lg:hidden")}><__mod_22728.n icon={__mod_40279.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="mx-4 hidden min-w-0 flex-1 justify-center md:flex"><div className="w-full max-w-md">{E(N, !0)}</div></div><div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0"><button ref={C} type="button" aria-label="Search contracts" aria-expanded={u} onClick={() => x(e => !e)} className={eM(eL, eH, "md:hidden")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Notifications" className={eM(eL, eH, "max-sm:hidden")}><__mod_22728.n icon={__mod_13473.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Workspace settings" className={eM(eL, eH, "max-sm:hidden")}><__mod_22728.n icon={__mod_65174.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Create contract" className={eM("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eq)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Create</span></button><aa /></div></header>{u && <div className={eM(eX, "flex shrink-0 items-center gap-2 px-4 py-2 md:hidden")}>{E(A, !1)}<button type="button" aria-label="Close search" onClick={() => {
            x(!1), C.current?.focus({
              preventScroll: !0
            });
          }} className={eM(eL, eH)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>}<div className={eM("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-h-0 flex-1")}><aside id={e1} className={eM(eG, "hidden shrink-0 flex-col lg:flex", e ? "w-14" : "w-64")}><ar collapsed={e} /></aside><div className="flex min-h-0 min-w-0 flex-1 p-2"><div className={eM(eK, "min-h-0 flex-1")}><main id="contracts" ref={k} onScroll={y} className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><h1 className="text-[22px]/[28px] font-extrabold tracking-[-0.01em]">Contracts</h1><div className={eM("@container rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)] p-1", "mt-4")}><div className="grid grid-cols-2 gap-1 [&>:last-child:nth-child(odd)]:col-span-full @3xl:grid-flow-col @3xl:grid-cols-none @3xl:auto-cols-fr @3xl:[&>:last-child:nth-child(odd)]:col-auto">{e4.map(e => <div className="flex min-w-0 flex-col gap-2 rounded-[calc(var(--rb-r-5xl,22px))] bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 py-3.5 dark:bg-neutral-100/4"><p className={eM("text-[14px]/[20px] font-bold text-neutral-900/78 dark:text-neutral-100/78", "text-pretty")}>{e.label}</p><p className={eM("flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100", "mt-auto")}>{e.value}</p></div>)}</div></div><div className="mt-6 flex flex-wrap items-center justify-between gap-3"><div className="flex min-w-0 items-baseline gap-2"><h2 className={eF}>Upcoming renewals</h2><span className={eM(eI, eT, "shrink-0")}>{W}</span></div><div role="radiogroup" aria-label="Filter agreements" onKeyDown={e => {
                    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
                    if (0 === a) return;
                    e.preventDefault();
                    let r = e7.findIndex(e => e.label === s),
                      t = e7[(r + a + e7.length) % e7.length];
                    d(t.label);
                    let n = e.currentTarget.querySelectorAll("button");
                    n[e7.indexOf(t)]?.focus({
                      preventScroll: !0
                    });
                  }} className={eM("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{e7.map(e => {
                      let a = e.label === s;
                      return <button type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => d(e.label)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>;
                    })}</div></div>{0 === M.length ? <div className={eM(eK, "mt-3 items-center justify-center px-6 py-12 text-center")}><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No agreements match this search</p><p className={eM("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Try a contract name or a counterparty, such as Kestrel Digital.</p><button type="button" onClick={() => {
                    o(""), d(e7[0].label);
                  }} className={eM("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eq, "mt-4")}>Clear search</button></div> : <><div className={eM("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-3 hidden md:flex")}><table className={eM("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "table-fixed")}><caption className="sr-only">Agreements by renewal date</caption><colgroup><col className="w-[32%]" /><col className="w-[20%]" /><col className="w-[14%]" /><col className="w-[15%]" /><col className="w-[19%]" /></colgroup><thead><tr><th scope="col" className={eM(eY, "h-9")}>Contract</th><th scope="col" className={eM(eY, "h-9")}>Owner</th><th scope="col" className={eM(eY, e0, "h-9")}>Value</th><th scope="col" className={eM(eY, "h-9")}>Renews</th><th scope="col" className={eM(eY, "h-9")}>Status</th></tr></thead><tbody>{M.map(e => <tr className={eM("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={eZ}><div className="min-w-0"><a href="#contracts" className={eM(eP, "max-w-full")}><span className="truncate">{e.name}</span></a><p className={eM(eI, eT, "truncate")}>{e.counterparty}</p></div></td><td className={eZ}>{e.owner && <span className={eM(eO, "block truncate")}>{e.owner}</span>}</td><td className={eM(eZ, e0)}>{e.value}</td><td className={eM(eZ, "tabular-nums")}><span className={eO}>{e.renews}</span></td><td className={eZ}><ae status={e.status} /></td></tr>)}</tbody></table></div><ul className="mt-3 space-y-2 md:hidden">{M.map(e => <li className={eM(eK, "p-4")}><a href="#contracts" className={eM(eP, "max-w-full")}><span className="truncate">{e.name}</span></a><p className={eM(eI, eT, "mt-0.5 truncate")}>{e.counterparty}</p><dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5"><div className="min-w-0"><dt className={eU}>Owner</dt><dd className={eV}>{e.owner ?? <span className={eJ}>None</span>}</dd></div><div className="min-w-0"><dt className={eU}>Value</dt><dd className={eM(eV, "tabular-nums")}>{e.value ?? <span className={eJ}>None</span>}</dd></div><div className="min-w-0"><dt className={eU}>Renews</dt><dd className={eM(eV, "tabular-nums")}>{e.renews}</dd></div><div className="min-w-0"><dt className={eU}>Status</dt><dd className={eV}><ae status={e.status} /></dd></div></dl></li>)}</ul></>}</main><div aria-hidden="true" className={eM("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", f.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eM("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", f.end ? "opacity-100" : "opacity-0")} /></div></div></div>{b && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" tabIndex={-1} onClick={R} className={eM("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", eQ, "absolute inset-0 z-30 cursor-pointer", h ? "opacity-100" : "opacity-0")} /><aside ref={S} id={e2} role="dialog" aria-modal="true" aria-label="Navigation" className={eM(eG, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", eQ, "absolute inset-y-0 left-0 z-40 flex w-72 max-w-[85%] flex-col", h ? "opacity-100" : "opacity-0")}><ar collapsed={!1} onClose={R} /></aside></div>}</div>;
    },
    "app-shell-4": function () {
      let [e, a] = (0, React.useState)("All stories"),
        [r, i] = (0, React.useState)(!1),
        [o, s] = (0, React.useState)("stack"),
        [c, d] = (0, React.useState)(!1),
        [u, _] = (0, React.useState)(!1),
        x = (0, React.useRef)(!1),
        b = (0, React.useRef)(null),
        p = (0, React.useRef)(null),
        h = (0, __mod_50969.I)(),
        {
          ref: m,
          edges: k,
          onScroll: f
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
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: l
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(t);
            return n.observe(a), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }(),
        {
          ref: g,
          edges: y,
          onScroll: j
        } = af();
      (0, React.useEffect)(() => {
        let e = b.current?.ownerDocument.defaultView ?? window,
          a = e.matchMedia("(min-width: 1280px)"),
          r = e.matchMedia("(min-width: 1024px)"),
          t = () => a.matches ? "xl" : r.matches ? "lg" : "stack",
          n = () => s(t()),
          l = requestAnimationFrame(() => {
            let e = t();
            s(e), i("stack" !== e);
          });
        return a.addEventListener("change", n), r.addEventListener("change", n), () => {
          cancelAnimationFrame(l), a.removeEventListener("change", n), r.removeEventListener("change", n);
        };
      }, []), (0, React.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (b.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)").matches && d(!0);
        });
        return () => cancelAnimationFrame(e);
      }, []), (0, React.useEffect)(() => {
        if (!c) return;
        let e = p.current,
          a = requestAnimationFrame(() => _(!0)),
          r = e?.ownerDocument ?? document,
          t = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        x.current && (t()[0]?.focus({
          preventScroll: !0
        }), x.current = !1);
        let n = e => {
          if ("Escape" === e.key) {
            d(!1), _(!1), b.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let a = t(),
            n = a[0],
            l = a[a.length - 1];
          n && l && (e.shiftKey && r.activeElement === n ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || r.activeElement !== l || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return r.addEventListener("keydown", n), () => {
          cancelAnimationFrame(a), r.removeEventListener("keydown", n);
        };
      }, [c]);
      let N = () => {
          d(!1), _(!1), b.current?.focus({
            preventScroll: !0
          });
        },
        A = (0, React.useMemo)(() => "All stories" === e ? aP : aP.filter(a => a.status === e), [e]),
        S = "xl" === o ? 384 : "lg" === o ? 320 : "100%",
        z = h || "stack" === o ? S : 0,
        C = [.2, 0, 0, 1];
      return <div className={ak("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[940px] w-full overflow-hidden")}><aside className={ak(aW, "hidden w-64 shrink-0 flex-col lg:flex")}><aY /></aside><div className={ak("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col lg:flex-row")}><div className="flex min-h-0 min-w-0 flex-1 flex-col p-2"><div className={ak(aD, "min-h-0 flex-1")}><header className="flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6"><button ref={b} type="button" aria-label="Open navigation" aria-expanded={c} onClick={() => {
                  x.current = !0, d(!0);
                }} className={ak(aA, az, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><nav aria-label="Breadcrumb" className="min-w-0 flex-1"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78"><li className="hidden shrink-0 sm:block"><span>Editorial</span></li><li aria-hidden="true" className={ak("text-neutral-900/62 dark:text-neutral-100/62 select-none", "hidden shrink-0 sm:block")}>/</li><li className="min-w-0"><h1 id="story-queue" aria-current="page" className={ak("font-bold text-neutral-900 dark:text-neutral-100", aw, "truncate")}>Story queue</h1></li></ol></nav><button type="button" aria-label="Schedule panel" aria-pressed={r} aria-controls="schedule-panel" onClick={() => i(e => !e)} className={ak(aA, az)}><__mod_22728.n icon={__mod_41442.A} size={18} strokeWidth={2} aria-hidden="true" /></button></header><div className="flex h-12 shrink-0 items-center gap-2 px-4 sm:px-6"><div className="relative -mx-4 min-w-0 flex-1 sm:mx-0"><div ref={m} onScroll={f} className="flex items-center gap-1.5 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:-mx-1 sm:px-1 [&::-webkit-scrollbar]:hidden">{aq.map(r => {
                      let n = e === r;
                      return <button type="button" aria-pressed={n} onClick={() => a(r)} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{r}</button>;
                    })}</div><div aria-hidden="true" className={ak("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-y-0 left-0 w-8", k.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ak("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-y-0 right-0 w-8", k.end ? "opacity-100" : "opacity-0")} /></div><button type="button" aria-label="New story" className={ak(aN, aS)}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" className="sm:hidden" /><span className="hidden sm:inline">New story</span></button></div><div className="relative flex min-h-0 flex-1 flex-col"><main ref={g} onScroll={j} className="h-full overflow-y-auto"><table className={ak("w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium", "hidden min-w-[440px] md:table")}><caption className="sr-only">Stories waiting to be published</caption><thead className={ak("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "sticky top-0 z-20")}><tr><th scope="col" className={ak(aO, "h-9 sm:pl-6")}>Story</th><th scope="col" className={ak(aO, "hidden h-9 w-44 xl:table-cell")}>Owner</th><th scope="col" className={ak(aO, "h-9 w-28")}>Status</th><th scope="col" className={ak(aO, aF, "h-9 w-20 sm:pr-6")}>Publishes</th></tr></thead><tbody>{A.map(e => <tr className={ak("group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", "h-11")}><td className={ak(aT, "max-w-0 sm:pl-6")}><span className="block truncate">{e.title}</span></td><td className={ak(aT, "hidden max-w-0 xl:table-cell")}><span className={ak(av, "block truncate")}>{e.owner}</span></td><td className={aT}><aG status={e.status} /></td><td className={ak(aT, aF, "sm:pr-6")}>{e.publishOn && <span className={av}>{aQ(e.publishOn)}</span>}</td></tr>)}</tbody></table><ul className="space-y-2 p-4 md:hidden">{A.map(e => <li className={ak(aD, "p-4")}><p className={ay}>{e.title}</p><dl className="mt-3 space-y-1.5"><div className="flex items-center justify-between gap-4"><dt className={aR}>Owner</dt><dd className={aM}>{e.owner}</dd></div><div className="flex items-center justify-between gap-4"><dt className={aR}>Status</dt><dd className={aM}><aG status={e.status} /></dd></div><div className="flex items-center justify-between gap-4"><dt className={aR}>Publishes</dt><dd className={ak(aM, "tabular-nums")}><aX iso={e.publishOn} /></dd></div></dl></li>)}</ul></main><div aria-hidden="true" className={ak("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", y.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ak("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", y.end ? "opacity-100" : "opacity-0")} /></div></div></div><__mod_47962.N initial={!1}>{r && <motion.aside id="schedule-panel" aria-label="Schedule" initial={{
              width: z,
              opacity: 0
            }} animate={{
              width: S,
              opacity: 1
            }} exit={{
              width: z,
              opacity: 0,
              transition: {
                duration: h ? .15 : .22,
                ease: C
              }
            }} transition={{
              duration: h ? .15 : .32,
              ease: C
            }} className={ak("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "max-h-[45%] w-full shrink-0 overflow-hidden lg:max-h-none")}><aZ onClose={() => i(!1)} /></motion.aside>}</__mod_47962.N></div>{c && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" onClick={N} tabIndex={-1} className={ak("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", aE, "absolute inset-0 z-30 cursor-pointer", u ? "opacity-100" : "opacity-0")} /><aside ref={p} role="dialog" aria-modal="true" aria-label="Navigation" className={ak(aW, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", aE, "absolute inset-y-0 left-0 z-40 flex w-72 max-w-[85%] flex-col", u ? "opacity-100" : "opacity-0")}><aY onClose={N} /></aside></div>}</div>;
    },
    "app-shell-5": function () {
      let [e, a] = (0, React.useState)("inbox"),
        [r, i] = (0, React.useState)("All"),
        [o, s] = (0, React.useState)(""),
        [c, d] = (0, React.useState)(rz[0].id),
        [u, b] = (0, React.useState)([rz[0].id]),
        [p, h] = (0, React.useState)([]),
        [m, k] = (0, React.useState)([]),
        [f, w] = (0, React.useState)(!1),
        [y, j] = (0, React.useState)(!1),
        [N, A] = (0, React.useState)(!1),
        [S, z] = (0, React.useState)(!1),
        [C, D] = (0, React.useState)(!1),
        [R, M] = (0, React.useState)(!1),
        [E, W] = (0, React.useState)(!1),
        O = (0, React.useRef)(null),
        T = (0, React.useRef)(null),
        F = (0, React.useRef)(null),
        I = (0, React.useRef)(null),
        L = (0, React.useRef)(null),
        P = (0, React.useRef)(null),
        q = (0, React.useRef)(null),
        H = (0, React.useRef)(null),
        $ = (0, React.useRef)(null),
        {
          ref: B,
          edges: K,
          onScroll: U
        } = rr(),
        {
          ref: V,
          edges: J,
          onScroll: Q
        } = rr(),
        {
          ref: G,
          edges: X,
          onScroll: Y
        } = rr(),
        Z = (0, React.useRef)(null),
        ee = (0, React.useRef)(!1),
        ea = (0, React.useRef)(!1),
        er = (0, React.useRef)(!1),
        et = (0, React.useMemo)(() => {
          let e = o.trim().toLowerCase();
          return rz.filter(a => !(p.includes(a.id) || "Unread" === r && u.includes(a.id)) && ("Assigned" !== r || !!a.assigned) && ("Escalated" !== r || !!a.escalated) && (!e || a.name.toLowerCase().includes(e) || a.subject.toLowerCase().includes(e) || a.preview.toLowerCase().includes(e)));
        }, [p, r, o, u]),
        en = rz.find(e => e.id === c) ?? rz[0],
        el = "All" !== r || o.trim().length > 0,
        ei = (e, a) => {
          d(e), b(a => a.includes(e) ? a : [...a, e]), w(!0), er.current = a;
        };
      (0, React.useEffect)(() => {
        if (!f || !er.current) return;
        er.current = !1;
        let e = T.current;
        e && null !== e.offsetParent && e.focus({
          preventScroll: !0
        });
      }, [f, c]);
      let eo = (0, React.useCallback)(() => {
          j(!1), A(!1), F.current?.focus({
            preventScroll: !0
          });
        }, []),
        es = (0, React.useCallback)(() => {
          M(!1), W(!1), H.current?.focus({
            preventScroll: !0
          });
        }, []);
      rD(y, I, eo, ee), rD(R, $, es, ea, Z), (0, React.useEffect)(() => {
        if (!y) return;
        let e = requestAnimationFrame(() => A(!0));
        return () => cancelAnimationFrame(e);
      }, [y]), (0, React.useEffect)(() => {
        if (!R) return;
        let e = requestAnimationFrame(() => W(!0));
        return () => cancelAnimationFrame(e);
      }, [R]), (0, React.useEffect)(() => {
        if (!S) return;
        let e = q.current,
          a = e?.ownerDocument ?? document,
          r = requestAnimationFrame(() => D(!0)),
          t = e => {
            z(!1), D(!1), e && L.current?.focus({
              preventScroll: !0
            });
          },
          n = a => {
            e?.contains(a.target) || t(!1);
          },
          l = e => {
            let r = Array.from(P.current?.querySelectorAll('[role="menuitem"]') ?? []);
            if (0 === r.length) return;
            let n = r.indexOf(a.activeElement);
            "Escape" === e.key ? (e.preventDefault(), t(!0)) : "ArrowDown" === e.key ? (e.preventDefault(), r[n < 0 || n === r.length - 1 ? 0 : n + 1]?.focus({
              preventScroll: !0
            })) : "ArrowUp" === e.key ? (e.preventDefault(), r[n <= 0 ? r.length - 1 : n - 1]?.focus({
              preventScroll: !0
            })) : "Home" === e.key ? (e.preventDefault(), r[0]?.focus({
              preventScroll: !0
            })) : "End" === e.key && (e.preventDefault(), r[r.length - 1]?.focus({
              preventScroll: !0
            }));
          };
        return a.addEventListener("pointerdown", n), a.addEventListener("keydown", l), () => {
          cancelAnimationFrame(r), a.removeEventListener("pointerdown", n), a.removeEventListener("keydown", l);
        };
      }, [S]);
      let ec = m.includes(en.id);
      return <div className={ra("bg-white dark:bg-neutral-950", rl, "relative flex h-full min-h-[720px] w-full overflow-hidden")}><div className={ra(rw, "hidden w-14 shrink-0 flex-col items-center pb-3 lg:flex")}><div className="flex h-14 shrink-0 items-center"><span className={ra(rn, "size-8", rs)}>P</span></div><nav aria-label="Mailboxes"><ul className="flex flex-col items-center gap-1">{rA.map(({
                id: r,
                label: n,
                icon: i,
                unread: o
              }) => {
                let s = r === e;
                return <li className="relative"><button type="button" aria-label={n} aria-current={s ? "page" : void 0} onClick={() => a(r)} className={ra(ry, "peer relative justify-center")}><__mod_22728.n icon={i} size={18} strokeWidth={2} aria-hidden="true" />{o && <span className="sr-only">Unread</span>}</button><span role="tooltip" className={ra(rv, rg, "absolute left-full top-1/2 z-[70] ml-2 h-7 -translate-y-1/2 whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-focus-visible:opacity-100")}>{n}</span></li>;
              })}</ul></nav><div className="relative mt-auto"><button type="button" aria-label="Iris Renner, support lead" className={ra(rp, "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "peer size-9 cursor-pointer")}><span className={rh}>IR</span></button><span role="tooltip" className={ra(rv, rg, "absolute bottom-1 left-full z-[70] ml-2 h-7 whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-focus-visible:opacity-100")}>Iris Renner</span></div></div><div className={ra("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 gap-2 p-2")}><section aria-labelledby="app-shell-5-list-heading" className={ra(rm, "w-full lg:w-80 lg:shrink-0 xl:w-96", f ? "hidden lg:flex" : "flex")}><div className="flex h-14 shrink-0 items-center gap-2 px-3"><button ref={F} type="button" aria-label="Open mailboxes" aria-expanded={y} onClick={() => {
                ee.current = !0, j(!0);
              }} className={ra(r_, rb, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><h2 id="app-shell-5-list-heading" className={rs}>Inbox</h2><span className={ra(rd, ro)}>{et.length}</span><div className="ml-auto flex items-center gap-1"><button type="button" aria-label="Sort conversations" className={ra(r_, rb)}><__mod_22728.n icon={__mod_68656.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Compose a reply" className={ra(r_, rb)}><__mod_22728.n icon={__mod_96738.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className="relative shrink-0 px-3"><label htmlFor="app-shell-5-search" className="sr-only">Search conversations</label><div className={ra("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="app-shell-5-search" type="search" value={o} onChange={e => s(e.target.value)} placeholder="Search conversations" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div></div><div role="radiogroup" aria-label="Filter conversations" className={ra("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "mx-3 my-2.5 shrink-0")}>{rS.map(e => {
                let a = e === r;
                return <button type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => i(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e}</button>;
              })}</div><div className="relative min-h-0 flex-1"><div ref={B} onScroll={U} className="h-full overflow-y-auto">{0 === et.length ? <div className="flex flex-col items-center justify-center px-6 py-12 text-center"><span className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_22830.A} size={20} strokeWidth={2} aria-hidden="true" className={ri} /></span><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">{el ? "No conversations match" : "Inbox is empty"}</p><p className={ra("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{el ? "Nothing in this mailbox matches the current search and filter." : "Everything here has been deleted. Restore it if that was a mistake."}</p><button type="button" onClick={() => {
                    i("All"), s(""), h([]);
                  }} className={ra(ru, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>{el ? "Clear filters" : "Restore conversations"}</button></div> : <ul ref={O} role="listbox" aria-label="Conversations" onKeyDown={e => {
                  if (0 === et.length) return;
                  let a = et.findIndex(e => e.id === c);
                  if ("ArrowDown" === e.key) r = a < 0 ? 0 : Math.min(a + 1, et.length - 1);else if ("ArrowUp" === e.key) r = a <= 0 ? 0 : a - 1;else if ("Home" === e.key) r = 0;else if ("End" === e.key) r = et.length - 1;else {
                    if ("Enter" !== e.key) return;
                    e.preventDefault(), ei(c, !0);
                    return;
                  }
                  e.preventDefault();
                  let t = et[a].id;
                  d(t), b(e => e.includes(t) ? e : [...e, t]), O.current?.querySelector(`[data-conversation="${t}"]`)?.focus({
                    preventScroll: !0
                  });
                }} className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{et.map(e => {
                    let a = e.id === en.id,
                      r = !u.includes(e.id);
                    return <li role="presentation"><button type="button" role="option" aria-selected={a} tabIndex={a ? 0 : -1} data-conversation={e.id} onClick={() => ei(e.id, !0)} className={ra(rk, a ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "cursor-pointer px-3")}><span className={rf}><span className={ra(rs, r ? rl : ri, "block truncate")}>{e.name}</span><span className={ra(rc, "block truncate")}>{e.subject}</span>{e.preview && <span data-description={!0} className={ra("line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5")}>{e.preview}</span>}</span><span className="flex shrink-0 flex-col items-end self-start"><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.time}</span>{r && <span className={ra("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", "bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] text-neutral-900 dark:text-neutral-100 dark:bg-neutral-100/12")}>Unread</span>}</span></button></li>;
                  })}</ul>}</div><div aria-hidden="true" className={ra(rj, "pointer-events-none absolute inset-x-0 top-0 h-8", K.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ra(rN, "pointer-events-none absolute inset-x-0 bottom-0 h-8", K.end ? "opacity-100" : "opacity-0")} /></div></section><main className={ra(rm, "flex-1", f ? "flex" : "hidden lg:flex")}><header className="flex h-14 shrink-0 items-center gap-2 px-4 sm:px-6"><button ref={T} type="button" aria-label="Back to conversations" onClick={() => {
                w(!1);
                let e = O.current?.querySelector('[role="option"][aria-selected="true"]');
                e?.focus({
                  preventScroll: !0
                });
              }} className={ra(r_, rb, "lg:hidden")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><h1 className={ra("text-[17px]/[22px] font-extrabold", "min-w-0 flex-1 truncate")}>{en.subject}</h1><div className="flex items-center gap-1"><button type="button" aria-label="Reply" className={ra(r_, rb)}><__mod_22728.n icon={__mod_96738.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label={ec ? "Remove star" : "Star this conversation"} aria-pressed={ec} onClick={() => k(e => e.includes(en.id) ? e.filter(e => e !== en.id) : [...e, en.id])} className={ra(r_, rb, "max-sm:hidden")}><__mod_22728.n icon={__mod_12556.A} size={18} strokeWidth={2} aria-hidden="true" className={ra(ec && "[&_path]:fill-current")} /></button><button type="button" aria-label="Archive" className={ra(r_, rb, "max-sm:hidden")}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button ref={H} type="button" aria-label="Delete" onClick={() => {
                  ea.current = !0, M(!0);
                }} className={ra(r_, rb, "max-sm:hidden")}><__mod_22728.n icon={__mod_96037.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div ref={q} className="relative"><button ref={L} type="button" aria-label="More actions" aria-haspopup="menu" aria-expanded={S} onClick={() => {
                    S ? (z(!1), D(!1)) : z(!0);
                  }} className={ra(r_, rb)}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button>{S && <div ref={P} role="menu" aria-label="More actions" className={ra("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", rg, "absolute right-0 top-full z-30 mt-1 w-56", C ? "opacity-100" : "opacity-0")}>{rC.map(({
                      label: e,
                      icon: a
                    }) => <button type="button" role="menuitem" onClick={() => {
                      z(!1), D(!1), L.current?.focus({
                        preventScroll: !0
                      });
                    }} className="relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40"><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /><span className="truncate">{e}</span></button>)}</div>}</div></div></header><div className="relative min-h-0 flex-1"><div ref={V} onScroll={Q} className="h-full overflow-y-auto p-4 sm:p-6"><div className="max-w-3xl"><div className="flex items-start justify-between gap-4"><div className="min-w-0"><p className={rs}>{en.name}</p><p className={ra(rc, ro, "mt-0.5 truncate")}>{en.email}</p></div><p className={ra(rd, ro, "shrink-0")}>{en.received}</p></div><p className={ra(rc, ro, "mt-2")}>To Portway support</p><div className={ra("text-[15px]/[22px] font-medium", "mt-5 space-y-4")}>{en.body.map(e => <p>{e}</p>)}</div>{en.attachment && <div className="mt-6"><p className={ra(rd, ro)}>Attachment</p><div className={ra(rm, "mt-2")}><div className={ra(rk, "px-2")}><span className={ra("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-9")}><__mod_22728.n icon={__mod_31964.A} size={18} strokeWidth={2} aria-hidden="true" /></span><span className={rf}><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{en.attachment.name}</span></span><span className={ra("text-[13px]/[16px] font-bold tabular-nums", ro)}>{en.attachment.size}</span></span><span className="relative z-10 flex shrink-0 items-center gap-1"><button type="button" aria-label={`Download ${en.attachment.name}`} className={ra(r_, rb)}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" /></button></span></div></div></div>}</div></div><div aria-hidden="true" className={ra(rj, "pointer-events-none absolute inset-x-0 top-0 h-8", J.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ra(rN, "pointer-events-none absolute inset-x-0 bottom-0 h-8", J.end ? "opacity-100" : "opacity-0")} /></div></main></div>{y && <div className="lg:hidden"><button type="button" aria-label="Close mailboxes overlay" tabIndex={-1} onClick={eo} className={ra(rt, rg, "absolute inset-0 z-30 cursor-pointer", N ? "opacity-100" : "opacity-0")} /><nav ref={I} role="dialog" aria-modal="true" aria-label="Mailboxes" className={ra(rw, "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", rg, "absolute inset-y-0 left-0 z-40 flex w-64 max-w-[85%] flex-col", N ? "opacity-100" : "opacity-0")}><div className="flex h-14 shrink-0 items-center gap-2.5 pr-2 pl-4"><span className={ra(rn, "size-8", rs)}>P</span><p className={ra(rs, "min-w-0 flex-1 truncate")}>Portway</p><button type="button" aria-label="Close mailboxes" onClick={eo} className={ra(r_, rb)}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className="relative min-h-0 flex-1"><ul ref={G} onScroll={Y} className="h-full space-y-0.5 overflow-y-auto px-2 pb-3">{rA.map(({
                  id: r,
                  label: n,
                  icon: i,
                  unread: o
                }) => {
                  let s = r === e;
                  return <li><button type="button" aria-current={s ? "page" : void 0} onClick={() => {
                      a(r), eo();
                    }} className={ry}><__mod_22728.n icon={i} size={18} strokeWidth={2} aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-left">{n}</span>{o && <span className="ms-auto text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">Unread</span>}</button></li>;
                })}</ul><div aria-hidden="true" className={ra("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", X.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ra("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", X.end ? "opacity-100" : "opacity-0")} /></div><div className={ra("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex shrink-0 items-center gap-2.5 py-2 pr-2 pl-4")}><span className={rp}><span className={rh}>IR</span></span><span className="min-w-0 flex-1"><span className={ra(rs, "block truncate")}>Iris Renner</span><span className={ra(rd, ro, "block truncate")}>Support lead</span></span></div></nav></div>}{R && <><div className={ra(rt, rg, "absolute inset-0 z-40", E ? "opacity-100" : "opacity-0")} /><div ref={$} role="dialog" aria-modal="true" aria-labelledby="app-shell-5-confirm-title" aria-describedby="app-shell-5-confirm-body" className={ra("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", rg, "absolute left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2", E ? "opacity-100" : "opacity-0")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={ra("relative flex flex-col gap-2 px-5 pt-6 pb-6 has-[button]:pe-14 [&:has(+*)]:pb-0", "pe-[20px]")}><h2 id="app-shell-5-confirm-title" className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Delete the thread from {en.name}?</h2><p id="app-shell-5-confirm-body" className="text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">It moves to trash and leaves the shared inbox for everyone on the team.</p></div></div><div className={ra("flex min-h-14 flex-wrap items-center justify-end gap-2 px-4 py-2.5 pe-2.5", "flex-col-reverse max-sm:ps-2 sm:flex-row")}><button ref={Z} type="button" onClick={es} className={ra(ru, rx, "w-full sm:w-auto")}>Keep it</button><button type="button" onClick={() => {
                let e = et.filter(e => e.id !== en.id);
                h(e => [...e, en.id]), d(e[0]?.id ?? rz[0].id), M(!1), W(!1), w(!1), F.current?.focus({
                  preventScroll: !0
                });
              }} className={ra("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", rx, "w-full sm:w-auto")}>Delete conversation</button></div></div></>}</div>;
    },
    "app-shell-6": function () {
      let [e, a] = (0, React.useState)(() => Object.fromEntries(r2.map(e => [e.id, e.title]))),
        [r, i] = (0, React.useState)({
          product: !0,
          engineering: !0,
          notes: !1
        }),
        [o, s] = (0, React.useState)(r5),
        [c, d] = (0, React.useState)(r5),
        [u, _] = (0, React.useState)({
          bold: !0,
          italic: !1,
          strikethrough: !1,
          list: !1,
          quote: !1,
          code: !1
        }),
        [x, b] = (0, React.useState)(!1),
        [p, h] = (0, React.useState)(!1),
        m = (0, React.useRef)(!1),
        k = (0, React.useRef)(null),
        f = (0, React.useRef)(null),
        g = (0, React.useRef)(null),
        {
          ref: w,
          edges: y,
          onScroll: j
        } = rH(),
        {
          ref: N,
          edges: A,
          onScroll: S
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
                scrollLeft: t,
                scrollWidth: n,
                clientWidth: l
              } = a;
              r({
                start: t > 1,
                end: Math.ceil(t + l) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let a = e.current,
              r = a?.ownerDocument.defaultView;
            if (!a || !r?.ResizeObserver) return;
            let n = new r.ResizeObserver(t);
            return n.observe(a), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: a,
            onScroll: t
          };
        }();
      (0, React.useEffect)(() => {
        let e = (k.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)"),
          a = !1,
          r = () => {
            !a && e.matches && (a = !0, b(!0));
          },
          t = requestAnimationFrame(r);
        return e.addEventListener("change", r), () => {
          cancelAnimationFrame(t), e.removeEventListener("change", r);
        };
      }, []), (0, React.useEffect)(() => {
        if (!x) return;
        let e = f.current,
          a = requestAnimationFrame(() => h(!0)),
          r = e?.ownerDocument ?? document,
          t = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        m.current && (t()[0]?.focus({
          preventScroll: !0
        }), m.current = !1);
        let n = e => {
          if ("Escape" === e.key) {
            b(!1), h(!1), k.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let a = t(),
            n = a[0],
            l = a[a.length - 1];
          n && l && (e.shiftKey && r.activeElement === n ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || r.activeElement !== l || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return r.addEventListener("keydown", n), () => {
          cancelAnimationFrame(a), r.removeEventListener("keydown", n);
        };
      }, [x]), (0, React.useEffect)(() => {
        g.current?.scrollTo({
          top: 0
        });
      }, [o]);
      let z = () => {
          b(!1), h(!1), k.current?.focus({
            preventScroll: !0
          });
        },
        C = e => {
          i(a => ({
            ...a,
            [e]: !a[e]
          }));
          let a = r1.find(a => a.id === e);
          r[e] && a?.docs.some(e => e.id === c) && c !== e && d(e);
        },
        D = r2.find(e => e.id === o) ?? r2[0],
        R = e[D.id];
      return <div className={rq("bg-white dark:bg-neutral-950", r$, "relative flex h-full min-h-[720px] w-full overflow-hidden")}><aside className={rq("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden w-64 shrink-0 flex-col lg:flex")}><r7 titles={e} expanded={r} onToggleFolder={C} selectedId={o} onSelect={s} activeId={c} onActivate={d} /></aside><div className={rq("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col p-2")}><div className={rq("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1")}><header className="flex h-14 shrink-0 items-center gap-2 px-4 sm:px-6"><button ref={k} type="button" aria-label="Open documents" aria-expanded={x} onClick={() => {
                m.current = !0, b(!0);
              }} className={rq(rJ, rQ, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="min-w-0 flex-1"><input value={R} aria-label="Document title" onChange={e => a(a => ({
                  ...a,
                  [D.id]: e.target.value
                }))} className={rq(r0, "h-8 w-full max-w-[20rem] px-2")} /></div><span aria-live="polite" className={rq("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-neutral-900/78 dark:text-neutral-100/78", "shrink-0 max-sm:hidden")}>Saved</span><button type="button" className={rq("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" />Share</button><r9 label="Document actions" items={r6} /></header><div className={rq("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-12 shrink-0 items-center gap-2 px-4 sm:px-6")}><div role="group" aria-label="Text style" className={rq(rG, rX, "shrink-0")}><te label="Bold" icon={__mod_64132.A} pressed={u.bold} onToggle={() => _(e => ({
                  ...e,
                  bold: !e.bold
                }))} /><te label="Italic" icon={__mod_17771.A} pressed={u.italic} onToggle={() => _(e => ({
                  ...e,
                  italic: !e.italic
                }))} /><te label="Strikethrough" icon={__mod_22244.A} pressed={u.strikethrough} onToggle={() => _(e => ({
                  ...e,
                  strikethrough: !e.strikethrough
                }))} /></div><div role="group" aria-label="Block style" className={rq(rG, rX, "shrink-0 max-md:hidden")}><te label="Bulleted list" icon={__mod_48240.A} pressed={u.list} onToggle={() => _(e => ({
                  ...e,
                  list: !e.list
                }))} /><te label="Quote" icon={__mod_30322.A} pressed={u.quote} onToggle={() => _(e => ({
                  ...e,
                  quote: !e.quote
                }))} /><te label="Code block" icon={__mod_81320.A} pressed={u.code} onToggle={() => _(e => ({
                  ...e,
                  code: !e.code
                }))} /></div><button type="button" aria-label="Insert link" className={rq(rJ, rQ, "max-md:hidden")}><__mod_22728.n icon={__mod_33786.A} size={18} strokeWidth={2} aria-hidden="true" /></button><r9 label="More formatting" items={r8} align="start" className="md:hidden" /><span className={rq("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "ml-auto")}>{String(D.words).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} words</span></div><div className="relative flex min-h-0 flex-1 flex-col"><main ref={e => {
                g.current = e, w.current = e;
              }} onScroll={j} className="h-full overflow-y-auto"><article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6"><h1 className="text-[26px]/[32px] font-extrabold tracking-[-0.015em]">{R}</h1><p className={rq("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62", "mt-2")}>Last edited {D.updated} by {D.author || <span className="text-neutral-900/62 dark:text-neutral-100/62">None</span>}</p><p className={rq(rU, rB, "mt-6")}>Every webhook Halden sends is retried until the endpoint accepts it or the schedule runs out. This page describes the schedule as it behaves in production today, so support and integration engineers can answer a merchant’s question without reading the delivery service.</p><p className={rq(rU, rB, "mt-4")}>Retries are tracked per endpoint rather than per account. If a merchant has three endpoints registered and one of them is unreachable, deliveries to the other two are unaffected and stay on time.</p><h2 className={rq(rK, "mt-8")}>Timing</h2><p className={rq(rU, rB, "mt-3")}>The first retry is sent 30 seconds after a failed attempt. Each attempt after that waits about three times as long as the one before it, up to a ceiling of six hours. A delivery is abandoned after 21 attempts, which works out to just under three days.</p><div className={rq("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mt-4")}><pre ref={N} onScroll={S} className="overflow-auto bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] py-3.5 font-mono text-[13px]/[21px] tabular-nums text-neutral-900 dark:text-neutral-100 [scrollbar-width:thin] dark:bg-neutral-950/60">{r4.split("\n").map((e, a) => <span className="flex px-4"><span className="min-w-0 flex-1 whitespace-pre">{e}</span></span>)}</pre><div aria-hidden="true" className={rq("bg-linear-to-r from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-y-0 left-0 w-8", A.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={rq("bg-linear-to-l from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-y-0 right-0 w-8", A.end ? "opacity-100" : "opacity-0")} /></div><h2 className={rq(rK, "mt-8")}>What counts as a failure</h2><p className={rq(rU, rB, "mt-3")}>An attempt fails when any of the following happens. Everything else, including a slow but successful response, counts as delivered.</p><ul className={rq(rU, rB, "mt-3 list-disc space-y-2 pl-5")}><li>The endpoint returns a status outside the 2xx range, including redirects.</li><li>The connection is not established within 10 seconds.</li><li>The response body has not arrived 30 seconds after the request was sent.</li><li>The TLS certificate cannot be verified against the public trust store.</li></ul><h2 className={rq(rK, "mt-8")}>Replaying a delivery</h2><p className={rq(rU, rB, "mt-3")}>Support can replay a single delivery from the endpoint page. A replay sends the payload as it was recorded when the event happened, so a replayed charge still carries the amount that was charged at the time rather than the amount on the account today.</p><p className={rq(rU, rB, "mt-4")}>Replays do not reset the retry counter and do not extend the three day window. If a merchant needs deliveries older than that, read them from the events API instead and reconcile against the ledger export.</p></article></main><div aria-hidden="true" className={rq("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", y.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={rq("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", y.end ? "opacity-100" : "opacity-0")} /></div></div></div>{x && <div className="lg:hidden"><button type="button" aria-label="Close documents overlay" tabIndex={-1} onClick={z} className={rq("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", rY, "absolute inset-0 z-30 cursor-pointer", p ? "opacity-100" : "opacity-0")} /><aside ref={f} role="dialog" aria-modal="true" aria-label="Documents" className={rq("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", rY, "absolute inset-y-0 left-0 z-40 w-72 max-w-[85%]", p ? "opacity-100" : "opacity-0")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><r7 titles={e} expanded={r} onToggleFolder={C} selectedId={o} onSelect={s} activeId={c} onActivate={d} onClose={z} /></div></aside></div>}</div>;
    },
    "app-shell-7": function () {
      let {
          ref: e,
          edges: a,
          onScroll: r
        } = ts(),
        [i, o] = (0, React.useState)(tE[0]),
        [s, c] = (0, React.useState)(tW[0].name),
        [d, u] = (0, React.useState)(tO[0]),
        [_, x] = (0, React.useState)(null),
        [b, p] = (0, React.useState)(!0),
        [h, m] = (0, React.useState)("shown"),
        k = (0, React.useRef)(void 0),
        [f, g] = (0, React.useState)(!1),
        [y, j] = (0, React.useState)(!1),
        N = (0, React.useRef)(!1),
        A = (0, React.useRef)(null),
        S = (0, React.useRef)(null);
      (0, React.useEffect)(() => () => clearTimeout(k.current), []), (0, React.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (A.current?.ownerDocument.defaultView ?? window).matchMedia("(max-width: 1023px)").matches && g(!0);
        });
        return () => cancelAnimationFrame(e);
      }, []), (0, React.useEffect)(() => {
        if (!f) return;
        let e = S.current,
          a = requestAnimationFrame(() => j(!0)),
          r = e?.ownerDocument ?? document,
          t = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        N.current && (t()[0]?.focus({
          preventScroll: !0
        }), N.current = !1);
        let n = e => {
          if ("Escape" === e.key) {
            g(!1), j(!1), A.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let a = t(),
            n = a[0],
            l = a[a.length - 1];
          n && l && (e.shiftKey && r.activeElement === n ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || r.activeElement !== l || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return r.addEventListener("keydown", n), () => {
          cancelAnimationFrame(a), r.removeEventListener("keydown", n);
        };
      }, [f]);
      let z = () => {
          g(!1), j(!1), A.current?.focus({
            preventScroll: !0
          });
        },
        C = () => {
          m("leaving"), k.current = setTimeout(() => m("gone"), 200);
        },
        D = tI[d],
        R = tW.find(e => e.name === s)?.slug ?? tW[0].slug,
        M = Array.from(new Set(D.map(e => e.region))),
        E = D.find(e => "degraded" === e.status)?.region ?? null,
        W = e => a => x(a ? e : null),
        O = {
          label: "Organisation",
          options: tE,
          value: i,
          onSelect: o
        },
        T = {
          label: "Project",
          options: tW.map(e => e.name),
          value: s,
          onSelect: c
        };
      return <div className={to("bg-white dark:bg-neutral-950", tc, "relative flex h-full min-h-[840px] w-full flex-col overflow-hidden")}><header className={to("border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex h-14 shrink-0 items-center gap-2 px-4 sm:px-6")}><button ref={A} type="button" aria-label="Open navigation" aria-expanded={f} onClick={() => {
            N.current = !0, g(!0);
          }} className={to(tp, tf, "lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span aria-hidden="true" className={to("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] select-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black)]", "text-[13px]/[16px] font-bold tabular-nums", "size-6 max-sm:hidden")}>T</span><span className="sr-only">Tideline</span><nav aria-label="Scope" className="flex min-w-0 flex-1 items-center gap-1"><t$ id="scope-organisation" label="Organisation" display={i} sections={[O]} createLabel="Create organisation" open={"organisation" === _} onOpenChange={W("organisation")} className="hidden md:block" triggerMaxWidth="max-w-[9rem]" /><span aria-hidden="true" className={to(tC, "hidden md:inline")}>/</span><t$ id="scope-project" label="Project" display={s} sections={[T]} createLabel="Create project" open={"project" === _} onOpenChange={W("project")} className="hidden md:block" triggerMaxWidth="max-w-[9rem]" /><t$ id="scope-overflow" label="Organisation and project" sections={[O, T]} open={"overflow" === _} onOpenChange={W("overflow")} className="md:hidden" /><span aria-hidden="true" className={tC}>/</span><t$ id="scope-environment" label="Environment" display={d} sections={[{
              label: "Environment",
              options: tO,
              value: d,
              onSelect: u
            }]} createLabel="Create environment" open={"environment" === _} onOpenChange={W("environment")} triggerMaxWidth="max-w-[7rem]" /></nav><tB regions={M} degradedRegion={E} open={"status" === _} onOpenChange={W("status")} /></header><div className={to("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-h-0 flex-1")}><aside className={to("border-r border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "hidden w-64 shrink-0 flex-col lg:flex")}><tK idPrefix="sidebar" dataOpen={b} onDataToggle={() => p(e => !e)} announcement={h} onDismissAnnouncement={C} /></aside><div className="flex min-w-0 flex-1 p-2"><main className={to(tj, "min-w-0 flex-1")}><div className="flex shrink-0 items-center gap-3 px-4 py-4 sm:px-6"><h1 id="databases" className={to("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", "truncate")}>Databases</h1><span className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{D.length}</span><button type="button" aria-label="Create database" className={to("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", tk, "ml-auto")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="sm:hidden">Create</span><span className="hidden sm:inline">Create database</span></button></div><div className="relative min-h-0 flex-1"><div ref={e} onScroll={r} className="h-full overflow-y-auto"><tU rows={D} slug={R} /></div><div aria-hidden="true" className={to("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", a.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={to("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", a.end ? "opacity-100" : "opacity-0")} /></div></main></div></div>{f && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" tabIndex={-1} onClick={z} className={to("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", tS, "absolute inset-0 z-30 cursor-pointer", y ? "opacity-100" : "opacity-0")} /><aside ref={S} role="dialog" aria-modal="true" aria-label="Navigation" className={to("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", tS, "absolute inset-y-0 left-0 z-40 w-72 max-w-[85%]", y ? "opacity-100" : "opacity-0")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><tK idPrefix="drawer" dataOpen={b} onDataToggle={() => p(e => !e)} announcement={h} onDismissAnnouncement={C} onClose={z} /></div></aside></div>}</div>;
    },
    "app-shell-8": function () {
      let [e, a] = (0, React.useState)("today"),
        [r, i] = (0, React.useState)(""),
        [o, s] = (0, React.useState)(!1),
        [c, d] = (0, React.useState)("window"),
        [u, x] = (0, React.useState)({
          "WO-4825": !0
        }),
        [b, p] = (0, React.useState)(!1),
        [h, m] = (0, React.useState)(!1),
        k = (0, React.useRef)(!1),
        f = (0, React.useRef)(null),
        y = (0, React.useRef)(null),
        j = (0, React.useRef)(null),
        N = (0, React.useRef)(null),
        {
          ref: A,
          edges: S,
          onScroll: z
        } = tY(),
        {
          ref: C,
          edges: D,
          onScroll: R
        } = tY(),
        {
          ref: M,
          edges: E,
          onScroll: W
        } = tY(),
        O = (0, React.useMemo)(() => {
          let e = {};
          for (let a of nu) e[a.id] = nd.filter(a.match).length;
          return e;
        }, []),
        T = nb(e),
        F = r.trim().toLowerCase(),
        I = (0, React.useMemo)(() => {
          let a = nd.filter(nb(e).match),
            r = F ? a.filter(e => `${e.id} ${e.customer} ${e.service} ${e.technician ?? ""}`.toLowerCase().includes(F)) : a;
          return "customer" === c ? [...r].sort((e, a) => e.customer.localeCompare(a.customer)) : r;
        }, [e, c, F]),
        L = O.today,
        P = L - O.unassigned;
      (0, React.useEffect)(() => {
        o && j.current?.focus({
          preventScroll: !0
        });
      }, [o]), (0, React.useEffect)(() => {
        if (!b) return;
        let e = N.current,
          a = requestAnimationFrame(() => m(!0)),
          r = e?.ownerDocument ?? document,
          t = () => Array.from(e?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []).filter(e => !e.hasAttribute("disabled"));
        k.current && (t()[0]?.focus({
          preventScroll: !0
        }), k.current = !1);
        let n = e => {
          if ("Escape" === e.key) {
            e.preventDefault(), p(!1), m(!1), f.current?.focus({
              preventScroll: !0
            });
            return;
          }
          if ("Tab" !== e.key) return;
          let a = t(),
            n = a[0],
            l = a[a.length - 1];
          n && l && (e.shiftKey && r.activeElement === n ? (e.preventDefault(), l.focus({
            preventScroll: !0
          })) : e.shiftKey || r.activeElement !== l || (e.preventDefault(), n.focus({
            preventScroll: !0
          })));
        };
        return r.addEventListener("keydown", n), () => {
          cancelAnimationFrame(a), r.removeEventListener("keydown", n);
        };
      }, [b]);
      let q = () => {
          p(!1), m(!1), f.current?.focus({
            preventScroll: !0
          });
        },
        H = () => {
          i(""), s(!1), y.current?.focus({
            preventScroll: !0
          });
        },
        $ = e => x(a => ({
          ...a,
          [e]: !a[e]
        })),
        B = e => {
          a(e), i("");
        };
      return <div className={tX("bg-white dark:bg-neutral-950", t0, "relative flex h-full min-h-[760px] w-full overflow-hidden")}><aside aria-label="Queues" className={tX(ni, "hidden w-14 shrink-0 flex-col items-center md:flex lg:hidden")}><div className="flex h-14 shrink-0 items-center"><nw /></div><nav aria-label="Queues" className="flex flex-col items-center gap-0.5 px-2">{nu.map(a => {
              let r = e === a.id;
              return <span className="w-8"><button type="button" aria-label={a.label} aria-current={r ? "page" : void 0} onClick={() => B(a.id)} className={tX(no, "group relative justify-center")}><__mod_22728.n icon={a.icon} size={18} strokeWidth={2} aria-hidden="true" /><span aria-hidden="true" className={tX("pointer-events-none inline-flex min-h-7 w-fit max-w-64 items-center gap-2 rounded-[calc(var(--rb-r-lg,10px))] bg-neutral-900 px-3 py-1 text-[13px]/[16px] font-bold tabular-nums text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", nl, "absolute left-full top-1/2 z-[70] ml-2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100")}>{a.label}</span></button></span>;
            })}</nav><div className="mt-auto flex h-14 shrink-0 items-center"><span aria-hidden="true" className={nr}><span className={nt}>RM</span></span><span className="sr-only">Signed in as Rosa Mendel, dispatcher</span></div></aside><aside aria-label="Queues" className={tX(ni, "hidden w-64 shrink-0 flex-col lg:flex")}><div className="flex h-14 shrink-0 items-center gap-2.5 px-3"><nw /><div className="min-w-0 flex-1"><p className={tX(t8, "truncate")}>Calder Field</p><p className={tX(t4, t2, "truncate")}>Dispatch</p></div></div><div className="relative flex min-h-0 flex-1 flex-col"><div ref={A} onScroll={z} className="flex h-full flex-col overflow-y-auto px-2 pb-2"><nav aria-label="Queues"><nv current={e} counts={O} onSelect={B} /></nav><ng assigned={P} total={L} onAssign={() => B("unassigned")} /></div><div aria-hidden="true" className={tX("bg-linear-to-b from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 top-0 h-8", S.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tX("bg-linear-to-t from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-x-0 bottom-0 h-8", S.end ? "opacity-100" : "opacity-0")} /></div><div className={tX(t5, "flex shrink-0 items-center gap-2.5 px-3 py-2.5")}><span aria-hidden="true" className={nr}><span className={nt}>RM</span></span><span className="min-w-0 flex-1"><span className={tX(t8, "block truncate")}>Rosa Mendel</span><span className={tX(t4, t2, "block truncate")}>Dispatcher</span></span></div></aside><div className={tX("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex min-w-0 flex-1 flex-col p-2")}><div className={tX(nn, "min-h-0 flex-1")}><header className="flex h-14 shrink-0 items-center gap-2 px-4 sm:px-6"><button ref={f} type="button" aria-label="Open queues" aria-expanded={b} onClick={() => {
                k.current = !0, p(!0);
              }} className={tX(t7, na, "md:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className="min-w-0 flex-1"><h1 className={tX("text-[17px]/[22px] font-extrabold", "truncate")}>{T.label}</h1><p className={tX(t4, t2, "flex min-w-0 gap-2")}><span className="truncate">Tuesday, 12 March</span><span className="shrink-0">{I.length} {1 === I.length ? "job" : "jobs"}</span></p></div><button ref={y} type="button" aria-label={o ? "Hide search" : "Search jobs"} aria-expanded={o} onClick={() => o ? H() : s(!0)} className={tX(t7, na, "md:hidden")}><__mod_22728.n icon={o ? __mod_89289.A : __mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" className={tX("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", ne, "max-md:hidden")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Book job</button></header><div className={tX("h-12 shrink-0 items-center gap-3 px-4 sm:px-6 md:flex", o ? "flex" : "hidden")}><div className={tX("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "flex-1 md:w-64 md:flex-none")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={16} strokeWidth={2} aria-hidden="true" /></span><input ref={j} type="search" value={r} onChange={e => i(e.target.value)} onKeyDown={e => {
                  "Escape" === e.key && o && H();
                }} aria-label="Search jobs" placeholder="Search jobs" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><div role="radiogroup" aria-label="Sort jobs" onKeyDown={ny} className={tX("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "ml-auto shrink-0 max-md:hidden")}>{np.map(e => {
                  let a = c === e.id;
                  return <button type="button" role="radio" aria-checked={a} tabIndex={a ? 0 : -1} onClick={() => d(e.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>;
                })}</div></div><div className="relative flex min-h-0 flex-1 flex-col"><main ref={C} onScroll={R} className="h-full overflow-y-auto px-4 pb-20 pt-2 sm:px-6 md:pb-4 md:pt-1">{0 === I.length ? <div className="flex h-full min-h-[220px] flex-col items-center justify-center px-6 pb-16 text-center md:pb-4"><__mod_22728.n icon={F ? __mod_66575.A : T.icon} size={24} strokeWidth={2} aria-hidden="true" className={tX(t2, "mb-3")} /><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">{F ? "No jobs match that search" : T.emptyTitle}</p><p className={tX("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-[320px]")}>{F ? "Search covers the customer, the job number and the engineer." : T.emptyHelp}</p>{F && <button type="button" onClick={() => i("")} className={tX(t3, ne, "mt-4")}>Clear search</button>}</div> : <><ul className="flex flex-col gap-3 md:hidden">{I.map(e => <nf job={e} flagged={!!u[e.id]} onToggleFlag={() => $(e.id)} />)}</ul><ul className="hidden flex-col gap-1 md:-mx-3 md:flex">{I.map(e => <nk job={e} flagged={!!u[e.id]} onToggleFlag={() => $(e.id)} />)}</ul></>}</main><div aria-hidden="true" className={tX("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", D.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tX(ns, "pointer-events-none absolute inset-x-0 bottom-0 h-8", D.end ? "opacity-100" : "opacity-0")} /></div></div></div><div aria-hidden="true" className={tX(ns, "pointer-events-none absolute inset-x-2 bottom-16 z-20 h-8 md:hidden")} /><nav aria-label="Queues" className={tX("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", t5, "absolute inset-x-0 bottom-0 z-20 h-16 md:hidden")}><ul className="flex h-full items-stretch px-1">{nx.map(a => {
              let r = nb(a),
                n = e === a;
              return <li className="flex-1"><button type="button" aria-current={n ? "page" : void 0} onClick={() => B(a)} className={tX("active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", n ? t0 : t1, "flex h-full min-h-11 w-full cursor-pointer flex-col items-center justify-center gap-1 px-1")}><__mod_22728.n icon={r.icon} size={20} strokeWidth={2} aria-hidden="true" /><span className={tX(n ? "text-[13px]/[16px] font-bold tabular-nums" : t4, "w-full truncate text-center")}>{r.label}</span></button></li>;
            })}</ul></nav>{b && <div className="md:hidden"><button type="button" aria-label="Close queues overlay" tabIndex={-1} onClick={q} className={tX("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", nl, "absolute inset-0 z-30 cursor-pointer", h ? "opacity-100" : "opacity-0")} /><aside ref={N} role="dialog" aria-modal="true" aria-labelledby="app-shell-8-drawer-title" className={tX("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", nl, "absolute inset-y-0 left-0 z-40 w-72 max-w-[85%]", h ? "opacity-100" : "opacity-0")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className="flex h-14 shrink-0 items-center gap-2.5 pl-3 pr-2"><nw /><div className="min-w-0 flex-1"><p id="app-shell-8-drawer-title" className={tX(t8, "truncate")}>Calder Field</p><p className={tX(t4, t2, "truncate")}>Dispatch</p></div><button type="button" aria-label="Close queues" onClick={q} className={tX(t7, na)}><__mod_22728.n icon={__mod_89289.A} size={16} strokeWidth={2} aria-hidden="true" /></button></div><div className="relative flex min-h-0 flex-1 flex-col"><div ref={M} onScroll={W} className="flex h-full flex-col overflow-y-auto px-2 pb-2"><nav aria-label="All queues"><nv current={e} counts={O} onSelect={e => {
                      B(e), q();
                    }} /></nav><ng assigned={P} total={L} onAssign={() => {
                    B("unassigned"), q();
                  }} /></div><div aria-hidden="true" className={tX("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", E.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={tX("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", E.end ? "opacity-100" : "opacity-0")} /></div></div><div className="flex shrink-0 items-center gap-2.5 px-4 py-2.5"><span aria-hidden="true" className={nr}><span className={nt}>RM</span></span><span className="min-w-0 flex-1"><span className={tX(t8, "block truncate")}>Rosa Mendel</span><span className={tX(t4, t2, "block truncate")}>Dispatcher</span></span></div></aside></div>}</div>;
    },
    "app-shell-9": function () {
      let [e, a] = (0, React.useState)(nZ[0]),
        [r, i] = (0, React.useState)(null),
        [o, s] = (0, React.useState)(""),
        [c, d] = (0, React.useState)(!0),
        [u, _] = (0, React.useState)(!1),
        [x, b] = (0, React.useState)(!1),
        p = (0, React.useRef)(null),
        h = (0, React.useRef)(null),
        m = (0, React.useRef)(null),
        k = (0, React.useRef)(null),
        f = (0, React.useRef)(!1),
        g = (0, React.useRef)(null),
        w = (0, React.useRef)(null),
        {
          ref: y,
          edges: j,
          onScroll: N
        } = nR(),
        {
          ref: A,
          edges: S,
          onScroll: z
        } = nR(),
        C = (0, React.useRef)(null),
        D = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        if (!f.current) return;
        f.current = !1;
        let e = c ? k.current : m.current;
        e?.focus({
          preventScroll: !0
        });
      }, [c]);
      let R = (0, React.useMemo)(() => n1.find(e => e.id === r) ?? null, [r]),
        M = (0, React.useCallback)(() => {
          b(!1), _(!1), D.current && (h.current?.focus({
            preventScroll: !0
          }), D.current = !1);
        }, []);
      (0, React.useEffect)(() => {
        if (!u) return;
        let e = g.current,
          a = e?.ownerDocument ?? document,
          r = requestAnimationFrame(() => b(!0)),
          t = r => {
            if ("Escape" === r.key) {
              r.preventDefault(), M();
              return;
            }
            if ("Tab" !== r.key || !e) return;
            let t = e.querySelectorAll('a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])');
            if (0 === t.length) return;
            let n = t[0],
              l = t[t.length - 1];
            r.shiftKey && a.activeElement === n ? (r.preventDefault(), l.focus({
              preventScroll: !0
            })) : r.shiftKey || a.activeElement !== l || (r.preventDefault(), n.focus({
              preventScroll: !0
            }));
          };
        return a.addEventListener("keydown", t), () => {
          cancelAnimationFrame(r), a.removeEventListener("keydown", t);
        };
      }, [u, M]), (0, React.useEffect)(() => {
        w.current && (w.current.scrollTop = 0);
      }, [r]);
      let E = e => {
          i(e), M();
        },
        W = () => {
          i(null), s(""), M(), C.current?.focus({
            preventScroll: !0
          });
        };
      return <div ref={p} className={nD("bg-white dark:bg-neutral-950", nM, "relative flex h-full min-h-[720px] w-full overflow-hidden")}><div className={nD("bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900", "flex w-full min-w-0 p-3")}><aside inert={!c} className={nD("hidden shrink-0 lg:block", c ? "mr-3 w-72" : "mr-0 w-0 overflow-hidden")}><div className={nD(nV, "h-full w-72")}><n4 model={e} onModel={a} chatId={r} onChat={E} onNew={W} collapseRef={k} onCollapse={() => {
                f.current = !0, d(!1);
              }} /></div></aside><div className={nD(nV, "flex-1")}><header className="flex h-[60px] shrink-0 items-center px-3"><button ref={h} type="button" aria-label="Open navigation" aria-expanded={u} onClick={() => {
                D.current = !0, _(!0);
              }} className={nD(n$, nU, "mr-2 lg:hidden")}><__mod_22728.n icon={__mod_1836.A} size={18} strokeWidth={2} aria-hidden="true" /></button><div className={nD("hidden shrink-0 overflow-hidden lg:block", c ? "mr-0 w-0" : "mr-2 w-9")}><button ref={m} type="button" aria-label="Expand sidebar" aria-expanded={c} tabIndex={c ? -1 : void 0} onClick={() => {
                  f.current = !0, d(!0);
                }} className={nD(n$, nU)}><__mod_22728.n icon={__mod_40279.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><n6 value={e} onChange={a} /><h1 className={nD(nT, nW, "ml-2 hidden min-w-0 flex-1 truncate sm:block")}>{R ? R.title : "New chat"}</h1><span className="flex-1 sm:hidden" /><button type="button" className={nD(nH, nB, "ml-2")}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">Share chat</span></button></header>{R ? <><div className="relative flex min-h-0 flex-1 flex-col"><div ref={e => {
                  w.current = e, y.current = e;
                }} onScroll={N} className="h-full overflow-y-auto px-4 sm:px-6"><div className="mx-auto flex max-w-2xl flex-col gap-5 py-6">{R.turns.map((e, a) => "user" === e.role ? <div className="flex justify-end"><div className="max-w-[85%]"><p className="w-fit max-w-full rounded-[calc(var(--rb-r-6xl,26px))] rounded-br-[var(--rb-r-xs,4px)] border border-transparent bg-[var(--rb-accent,oklch(84%_0.15_165))] px-4 py-2.5 text-[15px]/[22px] font-medium whitespace-pre-wrap text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_2px_6px_-3px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,transparent)] [overflow-wrap:anywhere] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-none">{e.text}</p></div></div> : <p className={nD("flex min-w-0 flex-col gap-4 text-[15px]/[24px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "max-w-[95%]")}>{e.text}</p>)}</div></div><div aria-hidden="true" className={nD(nG, "pointer-events-none absolute inset-x-0 top-0 h-8", j.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={nD(nX, "pointer-events-none absolute inset-x-0 bottom-0 h-8", j.end ? "opacity-100" : "opacity-0")} /></div><div className="shrink-0 px-4 pt-2 sm:px-6"><div className="mx-auto max-w-2xl"><n8 draft={o} onDraft={s} model={e} inputRef={C} /></div></div></> : <div className="relative flex min-h-0 flex-1 flex-col"><div className="flex h-full flex-col items-center justify-center-safe overflow-y-auto px-4 py-6 sm:px-6" ref={A} onScroll={z}><span aria-hidden="true" className={nD(nY, "size-11", nO)}>H</span><h2 className={nD("text-[26px]/[32px] font-extrabold tracking-[-0.015em]", "mt-4")}>How can I help?</h2><p className={nD("text-[15px]/[22px] font-medium", nE, "mt-1.5")}>Start typing, or pick one of these to get going.</p><div className="mt-6 w-full max-w-2xl"><n8 draft={o} onDraft={s} model={e} inputRef={C} /></div><div className="mt-3 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">{n0.map(e => <button type="button" onClick={() => {
                    s(e.label), C.current?.focus({
                      preventScroll: !0
                    });
                  }} className={nD(nH, "h-12 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-6 text-[16px]/[20px] font-extrabold")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={nW} /><span className="min-w-0 flex-1 truncate text-left">{e.label}</span><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" className={nW} /></button>)}</div></div><div aria-hidden="true" className={nD(nG, "pointer-events-none absolute inset-x-0 top-0 h-8", S.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={nD(nX, "pointer-events-none absolute inset-x-0 bottom-0 h-8", S.end ? "opacity-100" : "opacity-0")} /></div>}<p className={nD(nT, nE, "shrink-0 px-4 pb-3 pt-2 text-center sm:px-6")}>Halden can make mistakes. Check anything important.</p></div></div>{u && <div className="lg:hidden"><button type="button" aria-label="Close navigation overlay" onClick={M} tabIndex={-1} className={nD("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", nJ, "absolute inset-0 z-30 cursor-pointer", x ? "opacity-100" : "opacity-0")} /><aside ref={g} role="dialog" aria-modal="true" aria-label="Navigation" className={nD("flex h-full min-h-0 flex-col bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", nJ, "absolute inset-y-0 left-0 z-40 w-72 max-w-[85%]", x ? "opacity-100" : "opacity-0")}><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><n4 model={e} onModel={a} chatId={r} onChat={E} onNew={W} onClose={M} /></div></aside></div>}</div>;
    }
  },
  n3 = {
    "app-shell-1": 720,
    "app-shell-2": 800,
    "app-shell-3": 800,
    "app-shell-4": 940,
    "app-shell-5": 720,
    "app-shell-6": 720,
    "app-shell-7": 840,
    "app-shell-8": 760,
    "app-shell-9": 720
  };

export { n9 as components };
export { n3 as heights };
