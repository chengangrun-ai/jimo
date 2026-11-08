import * as __mod_8051 from "../_helpers/8051";
import * as __mod_80969 from "../_helpers/80969";
import * as __mod_64801 from "../_helpers/64801";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_19907 from "../_helpers/19907";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_12556 from "../_helpers/12556";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_95819 from "../_helpers/95819";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_13449 from "../_helpers/13449";
import * as __mod_6097 from "../_helpers/6097";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_48240 from "../_helpers/48240";
import * as __mod_19809 from "../_helpers/19809";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_59649 from "../_helpers/59649";
import * as __mod_27323 from "../_helpers/27323";
import * as __mod_92652 from "../_helpers/92652";
import * as __mod_71497 from "../_helpers/71497";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_67358 from "../_helpers/67358";
import * as __mod_78805 from "../_helpers/78805";
import * as __mod_33786 from "../_helpers/33786";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_40190 from "../_helpers/40190";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_81520 from "../_helpers/81520";
import * as __mod_48318 from "../_helpers/48318";
/**
 * File Manager 1
 * slug: file-manager-1
 * category: file-manager
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let z = (...e) => e.filter(Boolean).join(" "),
  A = "text-neutral-900 dark:text-neutral-100",
  S = "text-neutral-900/62 dark:text-neutral-100/62",
  M = "text-[14px]/[20px] font-medium",
  C = "text-[15px]/[20px] font-bold",
  P = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  B = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  T = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  D = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  W = "relative inline-flex size-[18px] shrink-0 items-center justify-center",
  L = "peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28",
  $ = "pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]",
  O = "flex h-10 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-left text-[15px]/[20px] font-semibold text-neutral-900/75 transition-[background-color,box-shadow,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:shrink-0 hover:bg-neutral-900/5 hover:text-neutral-900 aria-[current=page]:bg-white aria-[current=page]:font-bold aria-[current=page]:text-neutral-900 aria-[current=page]:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:text-neutral-100/75 dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:aria-[current=page]:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-[current=page]:text-neutral-100 dark:aria-[current=page]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)]",
  R = "h-10 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] px-3 text-left align-middle text-[13px]/[16px] font-bold tabular-nums whitespace-nowrap text-neutral-900/62 dark:text-neutral-100/62 first:ps-4 last:pe-4 dark:bg-neutral-100/4",
  F = "h-12 border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] px-3 align-middle whitespace-nowrap text-neutral-900 dark:text-neutral-100 group-last:border-b-0 first:ps-4 last:pe-4 dark:border-neutral-100/6",
  G = "text-right tabular-nums",
  V = z(M, S),
  I = z("text-[13px]/[16px] font-semibold tabular-nums", S),
  E = z(M, "text-neutral-900/78 dark:text-neutral-100/78"),
  K = z("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", P),
  q = z("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", P),
  H = z("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "border-2 border-neutral-900/30 dark:border-neutral-100/34", "rounded-[var(--rb-r-6xl,26px)]", A),
  U = [{
    id: "drive",
    name: "My Drive",
    children: [{
      id: "deliverables",
      name: "Client Deliverables",
      children: [{
        id: "northwind",
        name: "Northwind Rebrand"
      }, {
        id: "harbor",
        name: "Harbor Coffee"
      }]
    }, {
      id: "brand",
      name: "Brand Library",
      children: [{
        id: "logos",
        name: "Logos"
      }, {
        id: "type",
        name: "Typefaces"
      }]
    }, {
      id: "spring",
      name: "Spring Campaign",
      children: [{
        id: "assets",
        name: "Assets"
      }]
    }, {
      id: "ops",
      name: "Studio Operations"
    }]
  }],
  Y = [{
    id: "r1",
    parent: "drive",
    folderId: "brand",
    name: "Brand Library",
    icon: __mod_8051.A,
    owner: "Theo Park",
    initials: "TP",
    bytes: 1022e5,
    size: "102.2 MB",
    sub: "8 items",
    modified: "Last week",
    rank: 1
  }, {
    id: "r2",
    parent: "drive",
    folderId: "deliverables",
    name: "Client Deliverables",
    icon: __mod_8051.A,
    owner: "Priya Patel",
    initials: "PP",
    bytes: 4822e5,
    size: "482.2 MB",
    sub: "11 items",
    modified: "Yesterday",
    rank: 3,
    starred: !0
  }, {
    id: "r3",
    parent: "drive",
    folderId: "spring",
    name: "Spring Campaign",
    icon: __mod_8051.A,
    owner: "Leo Grant",
    initials: "LG",
    bytes: 9882e5,
    size: "988.2 MB",
    sub: "10 items",
    modified: "Today",
    rank: 4,
    starred: !0
  }, {
    id: "r4",
    parent: "drive",
    folderId: "ops",
    name: "Studio Operations",
    icon: __mod_8051.A,
    owner: "Nora Vale",
    initials: "NV",
    bytes: 246e6,
    size: "246.0 MB",
    sub: "4 items",
    modified: "2 days ago",
    rank: 2
  }, {
    id: "r5",
    parent: "brand",
    name: "brand-tokens.json",
    icon: __mod_80969.A,
    owner: "Kenji Tan",
    initials: "KT",
    bytes: 64e3,
    size: "64.0 KB",
    modified: "Last week",
    rank: 1
  }, {
    id: "r6",
    parent: "logos",
    name: "wordmark-lockup.png",
    icon: __mod_64801.A,
    owner: "Theo Park",
    initials: "TP",
    bytes: 28e5,
    size: "2.8 MB",
    modified: "Last week",
    rank: 1
  }, {
    id: "r7",
    parent: "ops",
    name: "New Hire Onboarding.pdf",
    icon: __mod_31964.A,
    owner: "Mira Stone",
    initials: "MS",
    bytes: 16e6,
    size: "16.0 MB",
    modified: "3 weeks ago",
    rank: 0
  }, {
    id: "r8",
    parent: "ops",
    name: "Q3 Studio Plan.pdf",
    icon: __mod_31964.A,
    owner: "Nora Vale",
    initials: "NV",
    bytes: 11e6,
    size: "11.0 MB",
    modified: "Today",
    rank: 4,
    starred: !0
  }, {
    id: "r9",
    parent: "assets",
    name: "Studio Reel 2026.mp4",
    icon: __mod_19907.A,
    owner: "Leo Grant",
    initials: "LG",
    bytes: 64e6,
    size: "64.0 MB",
    modified: "Today",
    rank: 4
  }, {
    id: "r10",
    parent: "northwind",
    name: "Northwind key visual.png",
    icon: __mod_64801.A,
    owner: "Priya Patel",
    initials: "PP",
    bytes: 124e5,
    size: "12.4 MB",
    modified: "Today",
    rank: 4
  }, {
    id: "r11",
    parent: "harbor",
    name: "Harbor menu board.pdf",
    icon: __mod_31964.A,
    owner: "Mira Stone",
    initials: "MS",
    bytes: 54e5,
    size: "5.4 MB",
    modified: "2 days ago",
    rank: 2
  }, {
    id: "r12",
    parent: "type",
    name: "specimen-grotesk.pdf",
    icon: __mod_31964.A,
    owner: "Kenji Tan",
    initials: "KT",
    bytes: 31e5,
    size: "3.1 MB",
    modified: "Yesterday",
    rank: 3
  }],
  Q = [{
    id: "shared",
    icon: __mod_88366.A,
    label: "Shared with me"
  }, {
    id: "recent",
    icon: __mod_29635.A,
    label: "Recent"
  }, {
    id: "starred",
    icon: __mod_12556.A,
    label: "Starred"
  }, {
    id: "bin",
    icon: __mod_96037.A,
    label: "Bin"
  }],
  Z = new Map();
!function e(a) {
  a.forEach(a => {
    Z.set(a.id, a.name), a.children && e(a.children);
  });
}(U);
let J = new Map();
!function e(a) {
  let r = [a.id];
  return a.children?.forEach(a => r.push(...e(a))), J.set(a.id, r), r;
}(U[0]);
let X = e => {
  let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
  if (!a && "Home" !== e.key && "End" !== e.key) return;
  let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
    t = r.indexOf(e.target);
  if (t < 0) return;
  e.preventDefault();
  let l = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
  r[l].focus(), r[l].click();
};
let en = (...e) => e.filter(Boolean).join(" "),
  ei = "bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8",
  eo = "text-neutral-900 dark:text-neutral-100",
  es = "rounded-[var(--rb-r-4xl,18px)]",
  ec = "text-neutral-900/62 dark:text-neutral-100/62",
  ed = "text-[15px]/[20px] font-bold",
  e_ = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  eb = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  ex = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eu = "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[calc(var(--rb-r-full,999px))] bg-white/12 px-3.5 text-[14px]/[18px] font-bold transition-[background-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] hover:bg-white/20 active:scale-[0.96] active:bg-white/28 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rb-accent,oklch(84%_0.15_165))] dark:bg-neutral-900/10 dark:hover:bg-neutral-900/16 dark:active:bg-neutral-900/24 dark:focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)]",
  ep = en("text-[14px]/[20px] font-medium", ec),
  eh = en("text-[13px]/[16px] font-semibold tabular-nums", ec),
  em = en("hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", eb),
  ek = en("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", eb),
  ev = en("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "border-2 border-neutral-900/30 dark:border-neutral-100/34", "rounded-[var(--rb-r-6xl,26px)]", eo),
  ef = ["Halcyon Drive", "Spring Campaign", "Assets"],
  eg = [{
    id: "d1",
    name: "Key art"
  }, {
    id: "d2",
    name: "Social cutdowns"
  }, {
    id: "d3",
    name: "Print exports"
  }],
  ew = [{
    id: "f1",
    name: "hero-still-a.png",
    ext: "PNG",
    bytes: 4.2,
    icon: __mod_64801.A,
    kind: "image",
    folder: "d1"
  }, {
    id: "f2",
    name: "hero-still-b.png",
    ext: "PNG",
    bytes: 3.9,
    icon: __mod_64801.A,
    kind: "image",
    folder: "d1"
  }, {
    id: "f3",
    name: "teaser-15s.mp4",
    ext: "MP4",
    bytes: 88,
    icon: __mod_19907.A,
    kind: "video",
    folder: "d2"
  }, {
    id: "f4",
    name: "campaign-brief.pdf",
    ext: "PDF",
    bytes: 1.1,
    icon: __mod_31964.A,
    kind: "doc",
    folder: "d1"
  }, {
    id: "f5",
    name: "billboard-2400.png",
    ext: "PNG",
    bytes: 12.4,
    icon: __mod_64801.A,
    kind: "image",
    folder: "d3"
  }, {
    id: "f6",
    name: "press-kit.zip",
    ext: "ZIP",
    bytes: 240,
    icon: __mod_95819.A,
    kind: "archive",
    folder: "d3"
  }, {
    id: "f7",
    name: "storyboard-v4.pdf",
    ext: "PDF",
    bytes: 6.7,
    icon: __mod_31964.A,
    kind: "doc",
    folder: "d3"
  }, {
    id: "f8",
    name: "sizzle-30s.mp4",
    ext: "MP4",
    bytes: 164,
    icon: __mod_19907.A,
    kind: "video",
    folder: "d2"
  }],
  ej = [{
    label: "All",
    kind: null
  }, {
    label: "Images",
    kind: "image"
  }, {
    label: "Video",
    kind: "video"
  }, {
    label: "Documents",
    kind: "doc"
  }],
  ey = e => {
    let a = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!a && "Home" !== e.key && "End" !== e.key) return;
    let r = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = r.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let l = "Home" === e.key ? 0 : "End" === e.key ? r.length - 1 : (t + a + r.length) % r.length;
    r[l].focus(), r[l].click();
  };
let eC = (...e) => e.filter(Boolean).join(" "),
  eP = "rounded-[var(--rb-r-4xl,18px)]",
  eB = "text-neutral-900 dark:text-neutral-100",
  eT = "text-neutral-900/62 dark:text-neutral-100/62",
  eD = "text-[14px]/[20px] font-medium",
  eW = "text-[15px]/[20px] font-bold",
  eL = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  e$ = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eO = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eR = eC(eD, eT),
  eF = eC("text-[13px]/[16px] font-semibold tabular-nums", eT),
  eG = {
    name: "Priya Patel",
    initials: "PP",
    role: "Owner"
  },
  eV = {
    name: "Theo Park",
    initials: "TP",
    role: "Can edit"
  },
  eI = {
    name: "Nora Vale",
    initials: "NV",
    role: "Can view"
  },
  eE = {
    name: "Mira Stone",
    initials: "MS",
    role: "Can comment"
  },
  eK = [{
    id: "a1",
    name: "Northwind key visual.png",
    meta: ["PNG", "12.4 MB"],
    icon: __mod_64801.A,
    version: ["Version 4", "12.4 MB"],
    details: [{
      label: "Type",
      value: "PNG image"
    }, {
      label: "Size",
      value: "12.4 MB"
    }, {
      label: "Dimensions",
      value: "4000 \xd7 2500"
    }, {
      label: "Owner",
      value: "Priya Patel"
    }, {
      label: "Modified",
      value: "Today, 09:24"
    }, {
      label: "Location",
      value: "Client Deliverables"
    }],
    people: [eG, eV, eI],
    activity: [{
      id: "v1",
      who: "Priya Patel",
      what: "uploaded version 4",
      at: "Today"
    }, {
      id: "v2",
      who: "Theo Park",
      what: "left a comment",
      at: "Yesterday"
    }, {
      id: "v3",
      who: "Nora Vale",
      what: "shared with the studio",
      at: "Tue"
    }]
  }, {
    id: "a2",
    name: "Brand guidelines.pdf",
    meta: ["PDF", "8.1 MB"],
    icon: __mod_31964.A,
    version: ["Version 12", "8.1 MB"],
    details: [{
      label: "Type",
      value: "PDF document"
    }, {
      label: "Size",
      value: "8.1 MB"
    }, {
      label: "Pages",
      value: "64"
    }, {
      label: "Owner",
      value: "Theo Park"
    }, {
      label: "Modified",
      value: "Yesterday, 17:02"
    }, {
      label: "Location",
      value: "Client Deliverables"
    }],
    people: [eV, eG, eE],
    activity: [{
      id: "v1",
      who: "Theo Park",
      what: "replaced page 41",
      at: "Yesterday"
    }, {
      id: "v2",
      who: "Mira Stone",
      what: "resolved 3 comments",
      at: "Mon"
    }]
  }, {
    id: "a3",
    name: "Launch film master.mp4",
    meta: ["MP4", "1.2 GB"],
    icon: __mod_19907.A,
    version: ["Version 2", "1.2 GB"],
    details: [{
      label: "Type",
      value: "MP4 video"
    }, {
      label: "Size",
      value: "1.2 GB"
    }, {
      label: "Duration",
      value: "1:48"
    }, {
      label: "Owner",
      value: "Leo Grant"
    }, {
      label: "Modified",
      value: "2 days ago"
    }, {
      label: "Location",
      value: "Client Deliverables"
    }],
    people: [{
      name: "Leo Grant",
      initials: "LG",
      role: "Owner"
    }, eG, eI, eE],
    activity: [{
      id: "v1",
      who: "Leo Grant",
      what: "uploaded the grade",
      at: "2d ago"
    }, {
      id: "v2",
      who: "Priya Patel",
      what: "requested captions",
      at: "2d ago"
    }]
  }, {
    id: "a4",
    name: "Typography specimen.pdf",
    meta: ["PDF", "2.6 MB"],
    icon: __mod_31964.A,
    version: ["Version 1", "2.6 MB"],
    details: [{
      label: "Type",
      value: "PDF document"
    }, {
      label: "Size",
      value: "2.6 MB"
    }, {
      label: "Pages",
      value: "18"
    }, {
      label: "Owner",
      value: "Kenji Tan"
    }, {
      label: "Modified",
      value: "Last week"
    }, {
      label: "Location",
      value: "Brand Library"
    }],
    people: [{
      name: "Kenji Tan",
      initials: "KT",
      role: "Owner"
    }, eI],
    activity: [{
      id: "v1",
      who: "Kenji Tan",
      what: "created the file",
      at: "Last week"
    }]
  }, {
    id: "a5",
    name: "Packaging mock.png",
    meta: ["PNG", "9.8 MB"],
    icon: __mod_64801.A,
    version: ["Version 7", "9.8 MB"],
    details: [{
      label: "Type",
      value: "PNG image"
    }, {
      label: "Size",
      value: "9.8 MB"
    }, {
      label: "Dimensions",
      value: "3200 \xd7 3200"
    }, {
      label: "Owner",
      value: "Mira Stone"
    }, {
      label: "Modified",
      value: "Today, 08:10"
    }, {
      label: "Location",
      value: "Client Deliverables"
    }],
    people: [eE, eG, eV, eI],
    activity: [{
      id: "v1",
      who: "Mira Stone",
      what: "uploaded version 7",
      at: "Today"
    }, {
      id: "v2",
      who: "Theo Park",
      what: "approved the mock",
      at: "Today"
    }]
  }];
let eQ = (...e) => e.filter(Boolean).join(" "),
  eZ = "rounded-[var(--rb-r-4xl,18px)]",
  eJ = "text-neutral-900/62 dark:text-neutral-100/62",
  eX = "text-[15px]/[20px] font-bold",
  e0 = "text-[13px]/[16px] font-semibold tabular-nums",
  e1 = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]",
  e2 = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  e5 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  e6 = "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold",
  e8 = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  e4 = eQ("text-[14px]/[20px] font-medium", eJ),
  e9 = eQ(e0, eJ),
  e3 = eQ("border-2 border-dashed border-neutral-900/16 dark:border-neutral-100/18", eZ, "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", e2, e1),
  e7 = eQ("border-2 border-neutral-900/30 dark:border-neutral-100/34", eZ, "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", e2, e1),
  ae = [{
    id: "u1",
    name: "hero-still-a.png",
    mb: 4.2,
    icon: __mod_64801.A,
    progress: 100,
    state: "done"
  }, {
    id: "u2",
    name: "campaign-brief.pdf",
    mb: 1.1,
    icon: __mod_31964.A,
    progress: 100,
    state: "done"
  }, {
    id: "u3",
    name: "sizzle-30s.mp4",
    mb: 164,
    icon: __mod_19907.A,
    progress: 62,
    state: "uploading"
  }, {
    id: "u4",
    name: "press-kit.zip",
    mb: 240,
    icon: __mod_95819.A,
    progress: 0,
    state: "queued"
  }, {
    id: "u5",
    name: "billboard-2400.png",
    mb: 12.4,
    icon: __mod_64801.A,
    progress: 34,
    state: "failed"
  }],
  aa = [{
    name: "teaser-15s.mp4",
    mb: 88,
    icon: __mod_19907.A
  }, {
    name: "storyboard-v4.pdf",
    mb: 6.7,
    icon: __mod_31964.A
  }, {
    name: "hero-still-b.png",
    mb: 3.9,
    icon: __mod_64801.A
  }],
  ar = {
    "file-manager-1": function () {
      let [e, a] = (0, React.useState)(["drive", "deliverables"]),
        [r, o] = (0, React.useState)("drive"),
        [s, c] = (0, React.useState)(null),
        [d, _] = (0, React.useState)(""),
        [b, u] = (0, React.useState)([]),
        [M, P] = (0, React.useState)("list"),
        [ee, ea] = (0, React.useState)({
          key: "name",
          asc: !0
        }),
        [er, et] = (0, React.useState)(Y.filter(e => e.starred).map(e => e.id)),
        el = (0, React.useMemo)(() => {
          let e;
          if ("starred" === s) e = Y.filter(e => er.includes(e.id));else if ("recent" === s) e = Y.filter(e => e.rank >= 3);else if ("shared" === s) e = Y.filter(e => "Nora Vale" !== e.owner);else if ("bin" === s) e = [];else {
            let a = J.get(r) ?? [r];
            e = Y.filter(e => a.includes(e.parent));
          }
          let a = d.trim().toLowerCase();
          a && (e = e.filter(e => e.name.toLowerCase().includes(a)));
          let t = ee.asc ? 1 : -1;
          return [...e].sort((e, a) => "size" === ee.key ? (e.bytes - a.bytes) * t : "modified" === ee.key ? (e.rank - a.rank) * t : e.name.localeCompare(a.name) * t);
        }, [r, s, d, ee, er]),
        en = el.map(e => e.id),
        ei = en.length > 0 && en.every(e => b.includes(e)),
        {
          ref: eo,
          edges: es,
          onScroll: ec
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            n = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: l,
                clientHeight: n
              } = e;
              t({
                start: r > 1,
                end: Math.ceil(r + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            n();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(n);
            return t.observe(e), () => t.disconnect();
          }, [e, n]), {
            ref: a,
            edges: r,
            onScroll: n
          };
        }(`${M}:${en.join()}`),
        ed = e => u(a => a.includes(e) ? a.filter(a => a !== e) : [...a, e]),
        e_ = e => {
          o(e), c(null), u([]), _(""), a(a => a.includes(e) ? a : [...a, e]);
        },
        eb = (l, o = 0) => l.map(l => {
          let c = e.includes(l.id),
            d = !s && r === l.id;
          return <li><div aria-current={d ? "page" : void 0} style={{
              paddingLeft: 4 + 14 * o
            }} className={z(O, "relative")}>{l.children ? <button type="button" aria-label={`${c ? "Collapse" : "Expand"} ${l.name}`} aria-expanded={c} onClick={() => a(e => e.includes(l.id) ? e.filter(e => e !== l.id) : [...e, l.id])} className={z("focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "rounded-[var(--rb-r-sm,6px)]", "group relative z-10 inline-flex size-5 shrink-0 cursor-pointer items-center justify-center")}><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button> : <span aria-hidden={!0} className="size-5 shrink-0" />}<button type="button" aria-current={d ? "page" : void 0} onClick={() => e_(l.id)} className={z("min-w-0 truncate outline-none after:absolute after:inset-0 after:rounded-[calc(var(--rb-r-lg,10px))] after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:after:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex flex-1 cursor-pointer items-center gap-2 text-left")}><__mod_22728.n icon={__mod_8051.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="truncate">{l.name}</span></button></div>{l.children && c && <ul className="space-y-0.5">{eb(l.children, o + 1)}</ul>}</li>;
        }),
        ex = s ? Q.find(e => e.id === s)?.label ?? "Files" : Z.get(r) ?? "My Drive";
      return <div className={z("bg-white dark:bg-neutral-950", A, "flex h-full min-h-[860px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={z("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1 gap-1")}><div className={z("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "flex-wrap justify-between gap-3 py-3 has-[button]:pe-4")}><div className="min-w-0"><h2 className={z("text-[17px]/[22px] font-extrabold", "truncate")}>Halcyon Drive</h2><p className={z(V, "mt-0.5 truncate")}>Shared studio files and folders</p></div><div className="flex shrink-0 items-center gap-2"><button type="button" className={z(B, D)}><__mod_22728.n icon={__mod_13449.A} size={18} strokeWidth={2} aria-hidden="true" />New folder</button><button type="button" className={z("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", D)}><__mod_22728.n icon={__mod_6097.A} size={18} strokeWidth={2} aria-hidden="true" />Upload</button></div></div><div className="grid min-h-0 flex-1 gap-1 lg:grid-cols-[248px_1fr]"><aside className="hidden min-h-0 flex-col lg:flex"><div className="min-h-0 flex-1 overflow-y-auto p-2"><ul className="space-y-0.5">{eb(U)}</ul><ul className="mt-4 space-y-0.5">{Q.map(({
                    id: e,
                    icon: a,
                    label: r
                  }) => <li><button type="button" aria-current={s === e ? "page" : void 0} onClick={() => {
                      c(e), u([]), _("");
                    }} className={O}><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /><span className="truncate">{r}</span></button></li>)}</ul></div><div className={z("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "p-3")}><div className="px-1"><p className="flex items-baseline justify-between gap-2"><span className="text-[13px]/[16px] font-bold tabular-nums">Storage</span><span className={I}>88% full</span></p><div role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} aria-label="Storage used" className={z("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-2")}><div style={{
                      width: "88%"
                    }} className={z("bg-[oklch(80%_0.152_68)] dark:bg-[oklch(80%_0.152_68)]", "h-full")} /></div><p className={z(I, "mt-2")}>1.77 TB of 2.00 TB used</p></div></div></aside><div className="flex min-h-0 min-w-0 flex-col gap-1"><div className="flex flex-wrap items-center justify-between gap-2 px-5 py-2"><p className={C}>{ex}</p><div className="flex flex-1 items-center justify-end gap-2"><label htmlFor="file-manager-1-search" className="sr-only">Search files</label><div className={z("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "max-w-[240px] flex-1")}><span data-affix={!0} className="flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1"><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input id="file-manager-1-search" value={d} onChange={e => _(e.target.value)} placeholder="Search files" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div><div role="radiogroup" aria-label="View mode" onKeyDown={X} className={z("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{[{
                      key: "list",
                      icon: __mod_48240.A,
                      label: "List view"
                    }, {
                      key: "grid",
                      icon: __mod_19809.A,
                      label: "Grid view"
                    }].map(({
                      key: e,
                      icon: a,
                      label: r
                    }) => <button type="button" role="radio" aria-label={r} aria-checked={M === e} tabIndex={M === e ? 0 : -1} onClick={() => P(e)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40"><__mod_22728.n icon={a} size={18} strokeWidth={2} aria-hidden="true" /></button>)}</div></div></div><div className={z("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={eo} onScroll={ec} className="min-h-0 flex-1 overflow-x-auto overflow-y-auto">{0 === el.length ? <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center"><__mod_22728.n icon={__mod_8051.A} size={24} strokeWidth={2} aria-hidden="true" className={S} /><p className={z("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>Nothing here</p><div className="mt-1 max-w-[280px]"><p className="max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78">{d ? `No files match “${d}” in this location.` : "This location is empty."}</p></div>{d && <button type="button" onClick={() => _("")} className={z(B, D, "mt-3")}>Clear search</button>}</div> : "grid" === M ? <ul className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{el.map(e => {
                      let a = b.includes(e.id);
                      return <li><button type="button" aria-pressed={e.folderId ? void 0 : a} onClick={() => e.folderId ? e_(e.folderId) : ed(e.id)} className={z(a && !e.folderId ? H : "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "relative flex w-full min-w-0 cursor-pointer flex-col overflow-hidden text-left")}><span className={z(a && !e.folderId ? q : K, "flex flex-col p-2")}><span className={z("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", "rounded-[var(--rb-r-4xl,18px)]", "flex aspect-[4/3] items-center justify-center")}><__mod_22728.n icon={e.icon} size={24} strokeWidth={2} aria-hidden="true" className={S} /></span><span className="block px-2 pt-3 pb-2"><span className={z(C, "block truncate")}>{e.name}</span><span className={z(I, "mt-0.5 flex gap-x-2 truncate")}><span>{e.size}</span><span>{e.modified}</span></span></span></span></button></li>;
                    })}</ul> : <table className="w-full border-separate border-spacing-0 text-left text-[15px]/[22px] font-medium"><caption className="sr-only">Files in {ex}</caption><thead><tr><th scope="col" className={z(R, "w-9")}><span className={W}><input type="checkbox" aria-label="Select all files" checked={ei} onChange={() => u(ei ? [] : en)} className={L} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={$} /></span></th>{[{
                          key: "name",
                          label: "Name",
                          cls: "w-1/2",
                          end: !1
                        }, {
                          key: "size",
                          label: "Size",
                          cls: "hidden sm:table-cell",
                          end: !0
                        }, {
                          key: "modified",
                          label: "Modified",
                          cls: "hidden lg:table-cell",
                          end: !0
                        }].map(({
                          key: e,
                          label: a,
                          cls: r,
                          end: l
                        }) => {
                          let i = <__mod_22728.n icon={ee.key === e ? ee.asc ? __mod_40972.A : __mod_54345.A : __mod_31517.A} size={14} strokeWidth={2} aria-hidden="true" />;
                          return <th scope="col" aria-sort={ee.key === e ? ee.asc ? "ascending" : "descending" : "none"} className={z(R, r)}><div className={z("flex", l && "justify-end")}><button type="button" onClick={() => ea(a => a.key === e ? {
                                key: e,
                                asc: !a.asc
                              } : {
                                key: e,
                                asc: !0
                              })} data-sorted={ee.key === e ? "" : void 0} className="-mx-1.5 inline-flex h-8 min-w-0 cursor-pointer items-center gap-1 rounded-[calc(var(--rb-r-full,999px))] px-1.5 transition-[background-color,color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-neutral-900/5 hover:text-neutral-900 data-sorted:text-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:bg-neutral-100/6 dark:hover:text-neutral-100 dark:data-sorted:text-neutral-100">{l && i}{a}{!l && i}</button></div></th>;
                        })}<th scope="col" className={z(R, "hidden md:table-cell")}>Owner</th><th scope="col" className={z(R, "w-10")}><span className="sr-only">Actions</span></th></tr></thead><tbody>{el.map(e => {
                        let a = b.includes(e.id),
                          r = er.includes(e.id);
                        return <tr aria-selected={a} className="group transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-aria-selected:bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:hover:not-aria-selected:bg-neutral-100/4 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]"><td className={F}><span className={W}><input type="checkbox" aria-label={`Select ${e.name}`} checked={a} onChange={() => ed(e.id)} className={L} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={$} /></span></td><td className={F}><span className="flex min-w-0 items-center gap-2"><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={z(S, "shrink-0")} />{e.folderId ? <button type="button" onClick={() => e_(e.folderId)} className={z("inline-flex min-h-6 items-center gap-1 rounded-[calc(var(--rb-r-sm,6px))] text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100 underline decoration-[var(--rb-accent,oklch(84%_0.15_165))] decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:decoration-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:decoration-[var(--rb-accent,oklch(81%_0.16_163))]", "min-w-0 cursor-pointer")}><span className="truncate">{e.name}</span></button> : <span className={z(C, "truncate")}>{e.name}</span>}<button type="button" aria-label={r ? `Unstar ${e.name}` : `Star ${e.name}`} aria-pressed={r} onClick={() => et(a => a.includes(e.id) ? a.filter(a => a !== e.id) : [...a, e.id])} className={z(T, "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_12556.A} size={18} strokeWidth={2} aria-hidden="true" className={r ? z(A, "[&_path]:fill-current") : S} /></button></span></td><td className={z(F, G, "hidden py-2.5 sm:table-cell")}><span className={z(E, "block")}>{e.size}</span>{e.sub && <span className={z(I, "mt-0.5 block")}>{e.sub}</span>}</td><td className={z(F, G, "hidden lg:table-cell")}><span className={E}>{e.modified}</span></td><td className={z(F, "hidden md:table-cell")}><span className="flex items-center gap-2"><span aria-hidden={!0} className={z("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials.slice(0, 1)}</span></span><span className={z(E, "truncate")}>{e.owner}</span></span></td><td className={F}><button type="button" aria-label={`Actions for ${e.name}`} className={z(T, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_59649.A} size={18} strokeWidth={2} aria-hidden="true" /></button></td></tr>;
                      })}</tbody></table>}</div><div aria-hidden="true" className={z("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", es.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={z("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", es.end ? "opacity-100" : "opacity-0")} /></div>{b.length > 0 && <div role="status" className={z("flex h-12 max-w-full items-center gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(8px,var(--rb-r-full,999px)))] bg-neutral-900 py-2 ps-5 pe-2 font-bold text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "mx-2 mb-2 justify-between gap-2")}><p className={C}><span className="tabular-nums">{b.length}</span> selected</p><button type="button" onClick={() => u([])} className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[calc(var(--rb-r-full,999px))] bg-white/12 px-3.5 text-[14px]/[18px] font-bold transition-[background-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] hover:bg-white/20 active:scale-[0.96] active:bg-white/28 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rb-accent,oklch(84%_0.15_165))] dark:bg-neutral-900/10 dark:hover:bg-neutral-900/16 dark:active:bg-neutral-900/24 dark:focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)]">Clear</button></div>}</div></div></div></div>;
    },
    "file-manager-2": function () {
      let [e, a] = (0, React.useState)(ew),
        [r, o] = (0, React.useState)(null),
        [c, d] = (0, React.useState)("All"),
        [_, b] = (0, React.useState)(!0),
        [x, p] = (0, React.useState)(["f1", "f3"]),
        h = eg.find(e => e.id === r),
        m = h ? [...ef, h.name] : ef,
        k = (0, React.useMemo)(() => {
          let a = ej.find(e => e.label === c)?.kind ?? null;
          return [...e.filter(e => (null === r || e.folder === r) && (null === a || e.kind === a))].sort((e, a) => e.name.localeCompare(a.name) * (_ ? 1 : -1));
        }, [e, r, c, _]),
        v = null === r ? eg.length : 0,
        f = k.reduce((e, a) => e + a.bytes, 0),
        {
          ref: g,
          edges: w,
          onScroll: j
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            n = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: l,
                clientHeight: n
              } = e;
              t({
                start: r > 1,
                end: Math.ceil(r + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            n();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(n);
            return t.observe(e), () => t.disconnect();
          }, [e, n]), {
            ref: a,
            edges: r,
            onScroll: n
          };
        }(`${r}:${k.map(e => e.id).join()}`),
        y = e => {
          o(e), p([]), d("All");
        };
      return <div className={en("bg-white dark:bg-neutral-950", eo, "flex h-full min-h-[740px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={en("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1 gap-1")}><div className="px-4 py-3"><nav aria-label="Breadcrumb"><ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[15px]/[20px] font-semibold text-neutral-900/78 dark:text-neutral-100/78">{m.map((e, a) => <li className="flex items-center gap-2">{a > 0 && <span aria-hidden="true" className="text-neutral-900/62 dark:text-neutral-100/62 select-none">/</span>}{a === m.length - 1 ? <span aria-current="page" className="font-bold text-neutral-900 dark:text-neutral-100">{e}</span> : <button type="button" onClick={() => y(null)} className={en("rounded-[calc(var(--rb-r-sm,6px))] transition-[color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:text-neutral-100", "cursor-pointer")}>{e}</button>}</li>)}</ol></nav><div className="mt-2 flex flex-wrap items-center justify-between gap-3"><div className="min-w-0"><h2 className={en("text-[17px]/[22px] font-extrabold", "truncate")}>{h ? h.name : "Assets"}</h2><p className={en(ep, "mt-0.5 flex flex-wrap gap-x-3 tabular-nums")}><span>{v} folders</span><span>{k.length} files</span><span>{f.toFixed(1)} MB</span></p></div><div className="flex items-center gap-2"><div role="radiogroup" aria-label="Filter by type" onKeyDown={ey} className={en("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "max-sm:hidden")}>{ej.map(e => <button type="button" role="radio" aria-checked={c === e.label} tabIndex={c === e.label ? 0 : -1} onClick={() => d(e.label)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{e.label}</button>)}</div><button type="button" onClick={() => b(e => !e)} aria-label={`Sort by name, ${_ ? "ascending" : "descending"}`} className={en("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold")}><__mod_22728.n icon={_ ? __mod_27323.A : __mod_92652.A} size={18} strokeWidth={2} aria-hidden="true" />Name</button></div></div></div><div className={en("mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0", "relative min-h-0 flex-1")}><div ref={g} onScroll={j} className="min-h-0 flex-1 overflow-y-auto p-3">{null === r && <><p className={eh}>Folders</p><ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{eg.map(a => {
                    let r = e.filter(e => e.folder === a.id).length;
                    return <li><button type="button" onClick={() => y(a.id)} className={en(ex, e_, "w-full cursor-pointer text-left")}><span className={en(em, "flex items-center gap-3 p-2 pe-4")}><span aria-hidden={!0} className={en(ei, es, ec, "flex size-11 shrink-0 items-center justify-center")}><__mod_22728.n icon={__mod_8051.A} size={20} strokeWidth={2} /></span><span className="min-w-0"><span className={en(ed, "block truncate")}>{a.name}</span><span className={en(eh, "mt-0.5 block")}>{r} items</span></span></span></button></li>;
                  })}</ul></>}<p className={en(eh, null === r && "mt-5")}>Files</p>{0 === k.length ? <div className="mt-2 flex flex-col items-center justify-center px-6 py-10 text-center"><__mod_22728.n icon={__mod_64801.A} size={20} strokeWidth={2} aria-hidden="true" className={ec} /><p className={en("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-2")}>No files to show</p><p className={en("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Nothing here matches the “{c}” filter.</p></div> : <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{k.map(e => {
                  let a = x.includes(e.id);
                  return <li><button type="button" aria-pressed={a} onClick={() => {
                      let a;
                      return a = e.id, p(e => e.includes(a) ? e.filter(e => e !== a) : [...e, a]);
                    }} className={en(a ? ev : ex, e_, "relative flex w-full min-w-0 cursor-pointer flex-col overflow-hidden text-left")}><span className={en(a ? ek : em, "flex flex-col p-2")}><span className={en(ei, es, "flex aspect-[4/3] items-center justify-center")}><__mod_22728.n icon={e.icon} size={24} strokeWidth={2} aria-hidden="true" className={ec} /></span><span className="block px-2 pt-3 pb-2"><span className={en(ed, "block truncate")}>{e.name}</span><span className={en(eh, "mt-0.5 flex gap-x-2 truncate")}><span>{e.ext}</span><span>{e.bytes.toFixed(1)} MB</span></span></span></span></button></li>;
                })}</ul>}</div><div aria-hidden="true" className={en("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", w.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={en("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", w.end ? "opacity-100" : "opacity-0")} /></div>{x.length > 0 && <div role="status" className={en("flex h-12 max-w-full items-center gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(8px,var(--rb-r-full,999px)))] bg-neutral-900 py-2 ps-5 pe-2 font-bold text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "mx-2 mb-2 justify-between gap-2")}><p className={ed}><span className="tabular-nums">{x.length}</span> selected</p><div className="flex items-center gap-1.5">{[{
                icon: __mod_71497.A,
                label: "Share",
                onClick: () => {}
              }, {
                icon: __mod_96037.A,
                label: "Delete",
                onClick: () => {
                  a(e => e.filter(e => !x.includes(e.id))), p([]);
                }
              }, {
                icon: __mod_59649.A,
                label: "More",
                onClick: () => {}
              }].map(({
                icon: e,
                label: a,
                onClick: r
              }) => <button type="button" onClick={r} className={eu}><__mod_22728.n icon={e} size={18} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">{a}</span></button>)}<button type="button" aria-label="Clear selection" onClick={() => p([])} className={eu}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div>}</div></div>;
    },
    "file-manager-3": function () {
      let [e, a] = (0, React.useState)("a1"),
        [r, i] = (0, React.useState)(!0),
        [o, s] = (0, React.useState)(!1),
        c = (0, React.useRef)(null);
      (0, React.useEffect)(() => () => {
        c.current && clearTimeout(c.current);
      }, []);
      let d = eK.find(a => a.id === e) ?? eK[0],
        {
          ref: _,
          edges: b,
          onScroll: x
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            n = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: l,
                clientHeight: n
              } = e;
              t({
                start: r > 1,
                end: Math.ceil(r + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            n();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(n);
            return t.observe(e), () => t.disconnect();
          }, [e, n]), {
            ref: a,
            edges: r,
            onScroll: n
          };
        }(e);
      return <div className={eC("bg-white dark:bg-neutral-950", eB, "flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eC("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "grid min-h-0 flex-1 lg:grid-cols-[1fr_320px]")}><div className="flex min-h-[300px] min-w-0 flex-col gap-1 lg:min-h-0"><div className="px-4 py-3"><h2 className="text-[17px]/[22px] font-extrabold">Client Deliverables</h2><p className={eC(eR, "mt-0.5 flex gap-x-3 tabular-nums")}><span>{eK.length} files</span><span>1.24 GB</span></p></div><div className={eC(eO, "min-h-0 flex-1 overflow-y-auto lg:me-0")}><ul className={eC("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "p-1")}>{eK.map(r => {
                  let l = r.id === e;
                  return <li><button type="button" aria-current={l ? "true" : void 0} onClick={() => {
                      a(r.id), s(!1);
                    }} className={eC("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", l ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", eP, "px-3")}><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} aria-hidden="true" className={eC(eT, "shrink-0")} /><span className="min-w-0 flex-1"><span className={eC(eW, "block truncate")}>{r.name}</span><span className={eC(eF, "mt-0.5 flex gap-x-2 truncate")}>{r.meta.map(e => <span>{e}</span>)}</span></span></button></li>;
                })}</ul></div></div><aside className="flex min-h-0 min-w-0 flex-col gap-1"><div className={eC(eO, "shrink-0 p-2.5 lg:mt-1")}><div className={eC("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-100/8", eP, "flex aspect-[4/3] items-center justify-center max-lg:max-h-32")}><__mod_22728.n icon={d.icon} size={28} strokeWidth={2} aria-hidden="true" className={eT} /></div><h3 className={eC(eW, "mt-3 truncate")}>{d.name}</h3><p className={eC(eF, "mt-0.5 flex gap-x-2")}>{d.version.map(e => <span>{e}</span>)}</p><div className="mt-3 flex items-center gap-2"><button type="button" className={eC("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e$, "flex-1")}><__mod_22728.n icon={__mod_92752.A} size={18} strokeWidth={2} aria-hidden="true" />Download</button><button type="button" aria-label={`Share ${d.name}`} className={eC(eL, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_71497.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div><div className={eC(eO, "relative min-h-0 flex-1")}><div ref={_} onScroll={x} className="min-h-0 flex-1 overflow-y-auto p-3"><h4 className={eF}>Details</h4><dl className="mt-2 space-y-1.5">{d.details.map(e => <div className="flex items-baseline gap-3"><dt className={eC("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "w-[86px] shrink-0")}>{e.label}</dt><dd className={eC("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "flex-1")}>{e.value}</dd></div>)}</dl><h4 className={eC(eF, "mt-5")}>Shared with</h4><ul className="mt-2 space-y-1.5">{d.people.map(e => <li className="flex items-center gap-2.5"><span aria-hidden={!0} className={eC("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[28px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials}</span></span><span className={eC(eD, "min-w-0 flex-1 truncate")}>{e.name}</span><span className={eC(eF, "shrink-0")}>{e.role}</span></li>)}</ul><div className="mt-3 flex items-center gap-2"><button type="button" aria-pressed={!r} onClick={() => i(e => !e)} className={eC("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900/78 dark:text-neutral-100/78 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] hover:not-disabled:text-neutral-900 active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-expanded:text-neutral-900 disabled:text-neutral-900/40 dark:hover:not-disabled:bg-neutral-100/8 dark:hover:not-disabled:text-neutral-100 dark:active:not-disabled:bg-neutral-100/12 dark:aria-expanded:bg-neutral-100/8 dark:aria-expanded:text-neutral-100 dark:disabled:text-neutral-100/40", "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums", "-ms-2 min-w-0 flex-1 justify-start")}><__mod_22728.n icon={r ? __mod_67358.A : __mod_78805.A} size={16} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 truncate text-left">{r ? "Restricted to invited people" : "Anyone with the link can view"}</span></button><button type="button" aria-label="Copy link" onClick={() => {
                    s(!0), c.current && clearTimeout(c.current), c.current = setTimeout(() => s(!1), 1600);
                  }} className={eC("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "-me-1.5")}><__mod_22728.n icon={o ? __mod_90987.A : __mod_33786.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><p role="status" className={eC(eF, "mt-1 h-4")}>{o ? "Link copied to clipboard" : ""}</p><h4 className={eC(eF, "mt-4")}>Activity</h4><ul className="mt-2 space-y-2">{d.activity.map(e => <li className={eC(eD, "text-neutral-900/78 dark:text-neutral-100/78", "flex items-start gap-2")}><span aria-hidden={!0} className="mt-[0.5lh] size-2 shrink-0 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" /><p><span className={eB}>{e.who}</span> {e.what}<span className={eC(eT, "ms-2")}>{e.at}</span></p></li>)}</ul><button type="button" className={eC(eL, e$, "mt-4 w-full")}><__mod_22728.n icon={__mod_62714.A} size={18} strokeWidth={2} aria-hidden="true" />Make a copy</button></div><div aria-hidden="true" className={eC("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", b.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eC("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", b.end ? "opacity-100" : "opacity-0")} /></div></aside></div></div>;
    },
    "file-manager-4": function () {
      let [e, a] = (0, React.useState)(!1),
        [r, i] = (0, React.useState)(ae),
        o = (0, React.useRef)(0);
      (0, React.useEffect)(() => {
        let e = setInterval(() => {
          i(e => e.some(e => "uploading" === e.state) ? e.map(e => {
            if ("uploading" !== e.state) return e;
            let a = e.progress + 3;
            return a >= 100 ? {
              ...e,
              progress: 100,
              state: "done"
            } : {
              ...e,
              progress: a
            };
          }) : e);
        }, 900);
        return () => clearInterval(e);
      }, []);
      let s = r.filter(e => "done" === e.state).length,
        {
          ref: c,
          edges: d,
          onScroll: _
        } = function (e) {
          let a = (0, React.useRef)(null),
            [r, t] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            n = (0, React.useCallback)(() => {
              let e = a.current;
              if (!e) return;
              let {
                scrollTop: r,
                scrollHeight: l,
                clientHeight: n
              } = e;
              t({
                start: r > 1,
                end: Math.ceil(r + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            n();
            let e = a.current,
              r = e?.ownerDocument.defaultView;
            if (!e || !r?.ResizeObserver) return;
            let t = new r.ResizeObserver(n);
            return t.observe(e), () => t.disconnect();
          }, [e, n]), {
            ref: a,
            edges: r,
            onScroll: n
          };
        }(r.map(e => `${e.id}:${e.state}`).join()),
        b = r.reduce((e, a) => e + a.mb, 0),
        x = r.reduce((e, a) => e + a.mb * a.progress / 100, 0),
        u = () => {
          let e = aa[o.current % aa.length];
          o.current += 1, i(a => [...a, {
            ...e,
            id: `n${o.current}`,
            progress: 0,
            state: a.some(e => "uploading" === e.state) ? "queued" : "uploading"
          }]);
        };
      return <div className={eQ("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "flex h-full min-h-[720px] w-full flex-col overflow-hidden p-4 sm:p-6")}><div className={eQ("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "mx-auto min-h-0 w-full max-w-[720px] flex-1 gap-1")}><div className={eQ("flex min-h-12 min-w-0 shrink-0 items-center gap-2 px-4 has-[button]:pe-2.5", "justify-between gap-3 py-3 has-[button]:pe-4")}><div className="min-w-0"><h2 className={eQ("text-[17px]/[22px] font-extrabold", "truncate")}>Upload to Spring Campaign</h2><p className={eQ(e4, "mt-0.5 flex gap-x-3 truncate tabular-nums")}><span>{s} of {r.length} complete</span><span>{b.toFixed(1)} MB total</span></p></div><button type="button" aria-label="Close uploader" className={eQ(e5, "size-10 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div><div className={eQ(e8, "p-2.5")}><button type="button" onClick={u} onDragOver={e => {
              e.preventDefault(), a(!0);
            }} onDragLeave={() => a(!1)} onDrop={e => {
              e.preventDefault(), a(!1), u();
            }} className={eQ(e ? e7 : e3, "flex w-full cursor-pointer flex-col items-center justify-center border-dashed px-4 py-7 text-center")}><__mod_22728.n icon={__mod_40190.A} size={24} strokeWidth={2} aria-hidden="true" className={eJ} /><p className={eQ(eX, "mt-2.5")}>Drop files here or click to browse</p><p className={eQ(e4, "mt-1")}>Up to 2 GB per file. Images, video, PDF and archives.</p></button></div><div className={eQ(e8, "relative min-h-0 flex-1")}><div ref={c} onScroll={_} className="min-h-0 flex-1 overflow-y-auto"><p className={eQ(e9, "px-4 pt-3")}>Queue</p>{0 === r.length ? <div className="mt-2 flex flex-col items-center justify-center px-6 py-10 text-center"><__mod_22728.n icon={__mod_40190.A} size={20} strokeWidth={2} aria-hidden="true" className={eJ} /><p className={eQ("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-2")}>Queue is empty</p><p className={eQ("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Drop files above to start a new upload.</p></div> : <ul className={eQ("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-2 px-1 pb-1")}>{r.map(e => {
                  let a = (e => {
                    if ("done" === e.state) return ["Uploaded"];
                    if ("failed" === e.state) return ["Connection lost"];
                    if ("paused" === e.state) return [`Paused at ${Math.round(e.progress)}%`];
                    if ("queued" === e.state) return ["Waiting"];
                    let a = Math.max(1, Math.round((100 - e.progress) / 100 * 60));
                    return [`${Math.round(e.progress)}%`, `${a} s left`];
                  })(e);
                  return <li><div className={eQ("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "failed" === e.state && "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]", eZ, "px-3")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={eQ(eJ, "shrink-0")} /><div className="min-w-0 flex-1"><p className="flex items-baseline justify-between gap-3"><span className={eQ(eX, "truncate")}>{e.name}</span><span className={eQ(e9, "shrink-0")}>{e.mb.toFixed(1)} MB</span></p>{"done" === e.state ? <p className={eQ(e9, "mt-1 flex items-center gap-1.5")}><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" />{a[0]}</p> : <><div role="progressbar" aria-valuenow={Math.round(e.progress)} aria-valuemin={0} aria-valuemax={100} aria-label={`Upload progress for ${e.name}`} className={eQ("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "mt-1.5")}><div style={{
                              width: `${e.progress}%`
                            }} className={"failed" === e.state ? eQ("bg-[oklch(65.2%_0.219_26)] dark:bg-[oklch(65.2%_0.219_26)]", "h-full") : "block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]"} /></div><p className={eQ(e0, "failed" === e.state ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : eJ, "mt-1 flex gap-x-2")}>{a.map(e => <span>{e}</span>)}</p></>}</div><button type="button" onClick={() => {
                        i(a => a.flatMap(a => a.id !== e.id ? [a] : "uploading" === a.state ? [{
                          ...a,
                          state: "paused"
                        }] : "paused" === a.state || "queued" === a.state ? [{
                          ...a,
                          state: "uploading"
                        }] : "failed" === a.state ? [{
                          ...a,
                          progress: 0,
                          state: "uploading"
                        }] : []));
                      }} aria-label={"failed" === e.state ? `Retry ${e.name}` : "uploading" === e.state ? `Pause ${e.name}` : "paused" === e.state || "queued" === e.state ? `Start ${e.name}` : `Remove ${e.name}`} className={eQ(e5, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={"failed" === e.state ? __mod_59157.A : "uploading" === e.state ? __mod_81520.A : "paused" === e.state || "queued" === e.state ? __mod_48318.A : __mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></li>;
                })}</ul>}</div><div aria-hidden="true" className={eQ("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eQ("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div><div className={eQ("flex min-h-12 min-w-0 items-center gap-2 px-4 py-2 text-[14px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 has-[button]:justify-end has-[button]:pe-2.5", "flex-wrap")}><p className="me-auto tabular-nums">{x.toFixed(1)} MB of {b.toFixed(1)} MB transferred</p><div className="flex items-center gap-2"><button type="button" onClick={() => i([])} className={eQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", e6)}>Cancel all</button><button type="button" onClick={() => i(e => e.filter(e => "done" !== e.state))} className={eQ("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", e6)}>Clear completed</button></div></div></div></div>;
    }
  },
  at = {
    "file-manager-1": 860,
    "file-manager-2": 740,
    "file-manager-3": 720,
    "file-manager-4": 720
  };

export { ar as components };
export { at as heights };
