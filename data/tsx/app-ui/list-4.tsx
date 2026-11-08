import * as __mod_97872 from "../_helpers/97872";
import * as __mod_59309 from "../_helpers/59309";
import * as __mod_3810 from "../_helpers/3810";
import * as __mod_62955 from "../_helpers/62955";
import * as __mod_1209 from "../_helpers/1209";
import * as __mod_20320 from "../_helpers/20320";
import * as __mod_20484 from "../_helpers/20484";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_78062 from "../_helpers/78062";
import * as __mod_25136 from "../_helpers/25136";
import * as __mod_27796 from "../_helpers/27796";
import * as __mod_19907 from "../_helpers/19907";
import * as __mod_22776 from "../_helpers/22776";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_2605 from "../_helpers/2605";
import * as __mod_3980 from "../_helpers/3980";
import * as __mod_55599 from "../_helpers/55599";
import * as __mod_36474 from "../_helpers/36474";
import * as __mod_80969 from "../_helpers/80969";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_1497 from "../_helpers/1497";
import * as __mod_37502 from "../_helpers/37502";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_89886 from "../_helpers/89886";
import * as __mod_85585 from "../_helpers/85585";
import * as __mod_60041 from "../_helpers/60041";
import * as __mod_99199 from "../_helpers/99199";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_76021 from "../_helpers/76021";
import * as __mod_96037 from "../_helpers/96037";
import * as __mod_89289 from "../_helpers/89289";
import * as __mod_81515 from "../_helpers/81515";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_73516 from "../_helpers/73516";
import * as __mod_22830 from "../_helpers/22830";
import * as __mod_29635 from "../_helpers/29635";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_67812 from "../_helpers/67812";
import * as __mod_52975 from "../_helpers/52975";
import * as __mod_40972 from "../_helpers/40972";
import * as __mod_54345 from "../_helpers/54345";
import * as __mod_56328 from "../_helpers/56328";
import * as __mod_8051 from "../_helpers/8051";
/**
 * List 4
 * slug: list-4
 * category: list
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let x = (...e) => e.filter(Boolean).join(" "),
  b = "text-neutral-900 dark:text-neutral-100",
  p = "text-[14px]/[20px] font-medium",
  h = [{
    id: "7d",
    label: "7 days"
  }, {
    id: "28d",
    label: "28 days"
  }, {
    id: "qtd",
    label: "Quarter"
  }],
  m = [{
    id: "fulfilled",
    label: "Orders fulfilled",
    icon: __mod_97872.A,
    caption: "Picked, packed and handed to a carrier",
    by: {
      "7d": {
        value: "1,284",
        delta: 6.4
      },
      "28d": {
        value: "5,109",
        delta: 11.2
      },
      qtd: {
        value: "14,730",
        delta: 18.9
      }
    }
  }, {
    id: "net",
    label: "Net revenue",
    icon: __mod_59309.A,
    caption: "Gross receipts less discounts and refunds",
    by: {
      "7d": {
        value: "$92.4k",
        delta: 3.1
      },
      "28d": {
        value: "$374.8k",
        delta: 7.8
      },
      qtd: {
        value: "$1.09M",
        delta: 12.4
      }
    }
  }, {
    id: "basket",
    label: "Average basket",
    icon: __mod_3810.A,
    caption: "Net revenue divided by fulfilled orders",
    by: {
      "7d": {
        value: "$71.96",
        delta: -2.9
      },
      "28d": {
        value: "$73.36",
        delta: -1.4
      },
      qtd: {
        value: "$74.02",
        delta: .6
      }
    }
  }, {
    id: "returns",
    label: "Return rate",
    icon: __mod_62955.A,
    caption: "Units sent back within the 30 day window",
    by: {
      "7d": {
        value: "4.1%",
        delta: -.8
      },
      "28d": {
        value: "4.6%",
        delta: .5
      },
      qtd: {
        value: "5.2%",
        delta: 1.7
      }
    }
  }],
  k = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let g = (...e) => e.filter(Boolean).join(" "),
  v = "text-neutral-900 dark:text-neutral-100",
  w = [{
    id: "compute",
    name: "Container compute",
    initials: "CC",
    team: "Platform",
    by: {
      month: {
        spend: 42180,
        delta: 4.2,
        units: "18,400 vCPU hrs"
      },
      quarter: {
        spend: 121460,
        delta: 9.6,
        units: "54,900 vCPU hrs"
      }
    }
  }, {
    id: "storage",
    name: "Object storage",
    initials: "OS",
    team: "Data",
    by: {
      month: {
        spend: 18740,
        delta: -1.8,
        units: "312 TB stored"
      },
      quarter: {
        spend: 57120,
        delta: 2.4,
        units: "938 TB stored"
      }
    }
  }, {
    id: "warehouse",
    name: "Query warehouse",
    initials: "QW",
    team: "Analytics",
    by: {
      month: {
        spend: 15390,
        delta: 12.7,
        units: "9,860 credits"
      },
      quarter: {
        spend: 41870,
        delta: 21.3,
        units: "27,140 credits"
      }
    }
  }, {
    id: "egress",
    name: "Network egress",
    initials: "NE",
    team: "Platform",
    by: {
      month: {
        spend: 9260,
        delta: -6.4,
        units: "74 TB transferred"
      },
      quarter: {
        spend: 30480,
        delta: -3.1,
        units: "241 TB transferred"
      }
    }
  }, {
    id: "search",
    name: "Search cluster",
    initials: "SC",
    team: "Product",
    by: {
      month: {
        spend: 7420,
        delta: .9,
        units: "6 nodes"
      },
      quarter: {
        spend: 22010,
        delta: 5.5,
        units: "6 nodes"
      }
    }
  }, {
    id: "observability",
    name: "Observability",
    initials: "OB",
    team: "Platform",
    by: {
      month: {
        spend: 5130,
        delta: 3.6,
        units: "1.4 TB ingested"
      },
      quarter: {
        spend: 14980,
        delta: 7.2,
        units: "4.1 TB ingested"
      }
    }
  }],
  y = [{
    id: "month",
    label: "Month"
  }, {
    id: "quarter",
    label: "Quarter"
  }],
  j = e => e >= 1e3 ? `$${(e / 1e3).toFixed(1)}k` : `$${e}`,
  N = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let O = (...e) => e.filter(Boolean).join(" "),
  P = "text-neutral-900 dark:text-neutral-100",
  E = "text-neutral-900/78 dark:text-neutral-100/78",
  W = "text-neutral-900/62 dark:text-neutral-100/62",
  B = "text-[14px]/[20px] font-medium",
  L = [{
    day: "Today",
    events: [{
      id: "e-01",
      kind: "signin",
      icon: __mod_1209.A,
      title: "Impossible-travel sign-in blocked",
      actor: "priya.nair@northwind.co",
      target: ["Krak\xf3w, PL then Austin, US in 22 min"],
      time: "2m ago",
      anomaly: !0
    }, {
      id: "e-02",
      kind: "device",
      icon: __mod_20320.A,
      title: "New device approved",
      actor: "marcus.hale",
      target: ["iPhone 15", "iOS 18.2"],
      time: "16m ago"
    }, {
      id: "e-03",
      kind: "permission",
      icon: __mod_20484.A,
      title: "Role raised to Workspace admin",
      actor: "granted by dana.okafor",
      target: ["for lars.eriksson"],
      time: "48m ago"
    }, {
      id: "e-04",
      kind: "permission",
      icon: __mod_79698.A,
      title: "Personal access token issued",
      actor: "marcus.hale",
      target: ["scope: repo, read:org", "expires in 90d"],
      time: "1h ago"
    }, {
      id: "e-05",
      kind: "signin",
      icon: __mod_78062.A,
      title: "Sign-in from a new location",
      actor: "dana.okafor",
      target: ["Lisbon, PT", "Chrome on macOS"],
      time: "2h ago"
    }]
  }, {
    day: "Yesterday",
    events: [{
      id: "e-06",
      kind: "permission",
      icon: __mod_20484.A,
      title: "SSO enforcement enabled",
      actor: "dana.okafor",
      target: ["SAML now required for all members"],
      time: "18:24"
    }, {
      id: "e-07",
      kind: "device",
      icon: __mod_20320.A,
      title: "Device signed out remotely",
      actor: "revoked by dana.okafor",
      target: ["Pixel 8", "last seen 6d ago"],
      time: "14:07"
    }, {
      id: "e-08",
      kind: "permission",
      icon: __mod_25136.A,
      title: "Member removed from workspace",
      actor: "removed by dana.okafor",
      target: ["contractor.wei, access revoked"],
      time: "11:52"
    }, {
      id: "e-09",
      kind: "signin",
      icon: __mod_27796.A,
      title: "Passkey enrolled",
      actor: "lars.eriksson",
      target: ["Touch ID", "MacBook Pro"],
      time: "09:31"
    }]
  }, {
    day: "Tue 3 Feb",
    events: [{
      id: "e-10",
      kind: "permission",
      icon: __mod_79698.A,
      title: "API key rotated",
      actor: "automation",
      target: ["nightly job", "billing-service, previous key revoked"],
      time: "03:00"
    }, {
      id: "e-11",
      kind: "signin",
      icon: __mod_78062.A,
      title: "Sign-in from a trusted device",
      actor: "priya.nair",
      target: ["Krak\xf3w, PL", "Firefox on Windows"],
      time: "08:14"
    }, {
      id: "e-12",
      kind: "permission",
      icon: __mod_20484.A,
      title: "Recovery codes regenerated",
      actor: "marcus.hale",
      target: ["10 new single-use codes"],
      time: "16:45"
    }]
  }],
  $ = [{
    id: "all",
    label: "All"
  }, {
    id: "signin",
    label: "Sign-ins"
  }, {
    id: "permission",
    label: "Permissions"
  }, {
    id: "device",
    label: "Devices"
  }],
  I = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let F = (...e) => e.filter(Boolean).join(" "),
  q = "text-neutral-900 dark:text-neutral-100",
  K = "text-neutral-900/62 dark:text-neutral-100/62",
  U = "text-[14px]/[20px] font-medium",
  V = (e, r, a) => Math.min(a, Math.max(r, e)),
  Y = [{
    id: "a-ssr",
    title: "The quiet return of server-side rendering",
    author: "Nadia Whitfield",
    words: "2,140 words"
  }, {
    id: "a-a11y",
    title: "What our 2026 accessibility audit actually changed",
    author: "Theo Marsh",
    words: "1,780 words"
  }, {
    id: "a-layers",
    title: "Migrating the design system to CSS cascade layers",
    author: "Priya Raman",
    words: "3,020 words"
  }, {
    id: "a-pool",
    title: "A field guide to database connection pooling",
    author: "Owen Castellano",
    words: "2,460 words"
  }, {
    id: "a-flags",
    title: "Why we deleted forty percent of our feature flags",
    author: "Mara Lindqvist",
    words: "1,520 words"
  }, {
    id: "a-hire",
    title: "Interviewing engineers without a take-home",
    author: "Devon Ashby",
    words: "2,890 words"
  }, {
    id: "a-oncall",
    title: "The economics of on-call, three years in",
    author: "Priya Raman",
    words: "1,960 words"
  }, {
    id: "a-onboard",
    title: "Rewriting our onboarding for the fifth time",
    author: "Sasha Bloom",
    words: "2,310 words"
  }],
  G = ["Today 09:00", "Today 13:00", "Today 17:00", "Tue 09:00", "Tue 13:00", "Wed 09:00", "Wed 15:00", "Thu 10:00"],
  Q = e => e.map(e => e.id).join("|"),
  J = Q(Y);
let el = (...e) => e.filter(Boolean).join(" "),
  eo = "text-neutral-900 dark:text-neutral-100",
  es = "text-neutral-900/78 dark:text-neutral-100/78",
  ed = "text-neutral-900/62 dark:text-neutral-100/62",
  ec = "text-[14px]/[20px] font-medium",
  e_ = "text-[15px]/[20px] font-bold",
  eu = "text-[13px]/[16px] font-semibold tabular-nums",
  ex = "relative inline-flex size-[18px] shrink-0 items-center justify-center",
  eb = "peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28",
  ep = "pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]",
  eh = "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-[calc(var(--rb-r-full,999px))] bg-white/12 px-3.5 text-[14px]/[18px] font-bold transition-[background-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] hover:bg-white/20 active:scale-[0.96] active:bg-white/28 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rb-accent,oklch(84%_0.15_165))] dark:bg-neutral-900/10 dark:hover:bg-neutral-900/16 dark:active:bg-neutral-900/24 dark:focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)]",
  em = [{
    id: "hero-loop",
    name: "hero-launch-loop.mp4",
    kind: "video",
    spec: ["1920 \xd7 1080", "1:12"],
    size: "142 MB",
    uploader: "Nadia Whitfield",
    initials: "NW",
    date: "Feb 6, 2026",
    status: "review"
  }, {
    id: "pricing-dark",
    name: "pricing-table-dark.png",
    kind: "image",
    spec: ["2560 \xd7 1440"],
    size: "1.8 MB",
    uploader: "Owen Castellano",
    initials: "OC",
    date: "Feb 6, 2026",
    status: "approved"
  }, {
    id: "onboard-3",
    name: "onboarding-step-3.png",
    kind: "image",
    spec: ["1440 \xd7 900"],
    size: "820 KB",
    uploader: "Priya Raman",
    initials: "PR",
    date: "Feb 5, 2026",
    status: "approved"
  }, {
    id: "tour-full",
    name: "product-tour-full.mp4",
    kind: "video",
    spec: ["3840 \xd7 2160", "3:48"],
    size: "512 MB",
    uploader: "Theo Marsh",
    initials: "TM",
    date: "Feb 5, 2026",
    status: "review"
  }, {
    id: "testimonial",
    name: "testimonial-mara-lindqvist.mp4",
    kind: "video",
    spec: ["1920 \xd7 1080", "0:42"],
    size: "88 MB",
    uploader: "Sasha Bloom",
    initials: "SB",
    date: "Feb 4, 2026",
    status: "approved"
  }, {
    id: "og-spring",
    name: "og-card-spring.png",
    kind: "image",
    spec: ["1200 \xd7 630"],
    size: "340 KB",
    uploader: "Devon Ashby",
    initials: "DA",
    date: "Feb 4, 2026",
    status: "approved"
  }, {
    id: "changelog-hd",
    name: "changelog-header.png",
    kind: "image",
    spec: ["2880 \xd7 1620"],
    size: "2.4 MB",
    uploader: "Nadia Whitfield",
    initials: "NW",
    date: "Feb 3, 2026",
    status: "approved"
  }, {
    id: "feature-grid",
    name: "feature-grid-anim.mp4",
    kind: "video",
    spec: ["2560 \xd7 1440", "1:56"],
    size: "268 MB",
    uploader: "Owen Castellano",
    initials: "OC",
    date: "Feb 3, 2026",
    status: "review"
  }, {
    id: "avatars",
    name: "avatar-set-neutral.png",
    kind: "image",
    spec: ["512 \xd7 512"],
    size: "96 KB",
    uploader: "Priya Raman",
    initials: "PR",
    date: "Feb 2, 2026",
    status: "approved"
  }, {
    id: "docs-auth",
    name: "docs-diagram-auth.png",
    kind: "image",
    spec: ["2048 \xd7 1536"],
    size: "1.1 MB",
    uploader: "Theo Marsh",
    initials: "TM",
    date: "Feb 2, 2026",
    status: "approved"
  }, {
    id: "recap-q1",
    name: "release-recap-q1.mp4",
    kind: "video",
    spec: ["1920 \xd7 1080", "4:20"],
    size: "356 MB",
    uploader: "Sasha Bloom",
    initials: "SB",
    date: "Jan 30, 2026",
    status: "approved"
  }],
  ek = {
    video: __mod_19907.A,
    image: __mod_22776.A
  },
  ef = [{
    id: "all",
    label: "All"
  }, {
    id: "review",
    label: "Needs review"
  }, {
    id: "approved",
    label: "Approved"
  }],
  eg = (e, r) => e.filter(e => "all" === r || e.status === r),
  ev = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let eN = (...e) => e.filter(Boolean).join(" "),
  ez = "text-neutral-900 dark:text-neutral-100",
  eA = "text-neutral-900/62 dark:text-neutral-100/62",
  eS = "text-[14px]/[20px] font-medium",
  eC = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eR = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eM = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  eT = "rounded-[var(--rb-r-4xl,18px)]",
  eD = [{
    id: "msg_2Rk9",
    event: "invoice.finalized",
    host: "hooks.northwind.io",
    attempt: 1,
    status: "200 OK",
    code: 200,
    duration: "142 ms",
    outcome: "delivered",
    request: `POST /v2/events HTTP/1.1
Host: hooks.northwind.io
Content-Type: application/json
Webhook-Id: msg_2Rk9
Webhook-Signature: v1,4f2a8c…9de1`,
    response: `{
  "received": true,
  "event_id": "evt_1P8kQz",
  "queued_at": "2026-08-07T20:14:11Z"
}`
  }, {
    id: "msg_2Rk8",
    event: "customer.subscription.updated",
    host: "api.brightledger.com",
    attempt: 1,
    status: "202 Accepted",
    code: 202,
    duration: "318 ms",
    outcome: "delivered",
    request: `POST /webhooks/billing HTTP/1.1
Host: api.brightledger.com
Content-Type: application/json
Webhook-Id: msg_2Rk8
Webhook-Signature: v1,7b1e0a…c42f`,
    response: `{
  "received": true,
  "handler": "billing.sync",
  "duration_ms": 311
}`
  }, {
    id: "msg_2Rk7",
    event: "payout.paid",
    host: "hooks.meridian.app",
    attempt: 3,
    status: "500 Server Error",
    code: 500,
    duration: "1.24 s",
    outcome: "failed",
    request: `POST /hooks/payouts HTTP/1.1
Host: hooks.meridian.app
Content-Type: application/json
Webhook-Id: msg_2Rk7
Webhook-Signature: v1,d90c31…1aa7`,
    response: `{
  "error": {
    "type": "endpoint_error",
    "message": "Internal server error",
    "status": 500
  }
}`
  }, {
    id: "msg_2Rk6",
    event: "charge.refunded",
    host: "hooks.northwind.io",
    attempt: 1,
    status: "200 OK",
    code: 200,
    duration: "96 ms",
    outcome: "delivered",
    request: `POST /v2/events HTTP/1.1
Host: hooks.northwind.io
Content-Type: application/json
Webhook-Id: msg_2Rk6
Webhook-Signature: v1,52ff7c…8b03`,
    response: `{
  "received": true,
  "event_id": "evt_1P8jTa"
}`
  }, {
    id: "msg_2Rk5",
    event: "customer.created",
    host: "ingest.parcelworks.dev",
    attempt: 1,
    status: "201 Created",
    code: 201,
    duration: "204 ms",
    outcome: "delivered",
    request: `POST /ingest HTTP/1.1
Host: ingest.parcelworks.dev
Content-Type: application/json
Webhook-Id: msg_2Rk5
Webhook-Signature: v1,ab3419…67cd`,
    response: `{
  "received": true,
  "record_id": "cus_9Qh2Lm",
  "created": true
}`
  }, {
    id: "msg_2Rk4",
    event: "invoice.payment_failed",
    host: "api.brightledger.com",
    attempt: 2,
    status: "204 No Content",
    code: 204,
    duration: "173 ms",
    outcome: "delivered",
    request: `POST /webhooks/billing HTTP/1.1
Host: api.brightledger.com
Content-Type: application/json
Webhook-Id: msg_2Rk4
Webhook-Signature: v1,10ce88…44b2`,
    response: `{
  "received": true,
  "handler": "billing.dunning"
}`
  }, {
    id: "msg_2Rk3",
    event: "checkout.session.completed",
    host: "hooks.meridian.app",
    attempt: 5,
    status: "Timed out",
    code: null,
    duration: "30.00 s",
    outcome: "failed",
    request: `POST /hooks/checkout HTTP/1.1
Host: hooks.meridian.app
Content-Type: application/json
Webhook-Id: msg_2Rk3
Webhook-Signature: v1,c7e204…39f0`,
    response: `{
  "error": {
    "type": "timeout",
    "message": "No response after 30000 ms",
    "attempts": 5
  }
}`
  }, {
    id: "msg_2Rk2",
    event: "account.updated",
    host: "ingest.parcelworks.dev",
    attempt: 1,
    status: "200 OK",
    code: 200,
    duration: "128 ms",
    outcome: "delivered",
    request: `POST /ingest HTTP/1.1
Host: ingest.parcelworks.dev
Content-Type: application/json
Webhook-Id: msg_2Rk2
Webhook-Signature: v1,90ab12…7e5c`,
    response: `{
  "received": true,
  "record_id": "acct_4Tz8Wp"
}`
  }],
  eO = [{
    id: "all",
    label: "All"
  }, {
    id: "delivered",
    label: "Delivered"
  }, {
    id: "failed",
    label: "Failed"
  }],
  eP = [{
    value: "all",
    label: "All endpoints"
  }, ...eD.reduce((e, r) => (e.includes(r.host) || e.push(r.host), e), []).map(e => ({
    value: e,
    label: e
  }))],
  eE = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
function eW({
  value: e,
  onChange: r,
  options: a,
  ariaLabel: l
}) {
  let o = (0, React.useId)(),
    [s, d] = (0, React.useState)(!1),
    [c, _] = (0, React.useState)(0),
    [u, x] = (0, React.useState)(!1),
    [b, p] = (0, React.useState)(),
    h = (0, React.useRef)(null),
    m = (0, React.useRef)(null),
    k = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    f = a.findIndex(r => r.value === e),
    g = f >= 0 ? a[f] : void 0,
    v = () => {
      let e = h.current,
        r = e?.ownerDocument.defaultView;
      if (e && r) {
        let t = e.getBoundingClientRect(),
          n = 0,
          i = r.innerHeight;
        for (let a = e.parentElement; a; a = a.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(a).overflowY)) {
          let e = a.getBoundingClientRect();
          n = Math.max(n, e.top), i = Math.min(i, e.bottom);
          break;
        }
        let l = i - t.bottom,
          o = t.top - n,
          s = Math.min(32 * a.length + 8, 264),
          d = l < s + 8 && o > l,
          c = (d ? o : l) - 8;
        x(d), p(c < s ? Math.max(c, 40) : void 0);
      }
      _(f >= 0 ? f : 0), d(!0);
    };
  (0, React.useEffect)(() => {
    if (!s) return;
    let e = h.current,
      r = e?.ownerDocument;
    if (!e || !r) return;
    let a = r => {
      e.contains(r.target) || d(!1);
    };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [s]), (0, React.useEffect)(() => {
    if (!s) return;
    let e = m.current,
      r = e?.querySelector(`[data-index="${c}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [s, c]);
  let w = e => {
    let t = a[e];
    t && (r(t.value), d(!1), h.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={h} className="relative"><button type="button" role="combobox" aria-expanded={s} aria-controls={o} aria-haspopup="listbox" aria-label={l} onClick={() => s ? d(!1) : v()} onKeyDown={e => {
      if (!s) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), v());
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), d(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), _(e => Math.min(e + 1, a.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), _(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), _(0);else if ("End" === e.key) e.preventDefault(), _(a.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), w(c);else if (1 === e.key.length && /\S/.test(e.key)) {
        let r = Date.now(),
          t = k.current;
        t.buffer = r - t.at > 700 ? e.key : t.buffer + e.key, t.at = r;
        let n = a.findIndex(e => e.label.toLowerCase().startsWith(t.buffer.toLowerCase()));
        n >= 0 && _(n);
      }
    }} className="inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40"><span className="grid min-w-0 flex-1 text-left *:[grid-area:1/1]">{a.map(e => <span aria-hidden="true" className="invisible truncate">{e.label}</span>)}<span className="truncate">{g?.label}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{s && <ul ref={m} id={o} role="listbox" tabIndex={-1} style={{
      maxHeight: b
    }} className={eN("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", u ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{a.map((r, a) => <li role="option" aria-selected={r.value === e} data-index={a} data-highlighted={a === c ? "" : void 0} onMouseEnter={() => _(a)} onClick={() => w(a)} className={eN("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{r.label}</span>{r.value === e && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>)}</ul>}</div>;
}
function eB({
  label: e,
  body: r
}) {
  let {
    ref: a,
    edges: i,
    onScroll: l
  } = function () {
    let e = (0, React.useRef)(null),
      [r, a] = (0, React.useState)({
        start: !1,
        end: !1
      }),
      t = (0, React.useCallback)(() => {
        let r = e.current;
        if (!r) return;
        let {
          scrollLeft: t,
          scrollWidth: n,
          clientWidth: i
        } = r;
        a({
          start: t > 1,
          end: Math.ceil(t + i) < n - 1
        });
      }, []);
    return (0, React.useEffect)(() => {
      t();
      let r = e.current,
        a = r?.ownerDocument.defaultView;
      if (!r || !a?.ResizeObserver) return;
      let n = new a.ResizeObserver(t);
      return n.observe(r), () => n.disconnect();
    }, [t]), {
      ref: e,
      edges: r,
      onScroll: t
    };
  }();
  return <div><p className={eN("text-[13px]/[16px] font-semibold tabular-nums", eA, "mb-1")}>{e}</p><div className={eN(eT, "relative overflow-hidden")}><pre ref={a} onScroll={l} style={{
        touchAction: "pan-x"
      }} className={eN("overflow-auto bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] py-3.5 font-mono text-[13px]/[21px] tabular-nums text-neutral-900 dark:text-neutral-100 [scrollbar-width:thin] dark:bg-neutral-950/60", "whitespace-pre px-3")}>{r}</pre><div aria-hidden="true" className={eN("bg-linear-to-r from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 left-0 w-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eN("bg-linear-to-l from-[var(--rb-n-100,oklch(97.7%_0.0055_80))] to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-900", "pointer-events-none absolute inset-y-0 right-0 w-8", i.end ? "opacity-100" : "opacity-0")} /></div></div>;
}
let eI = (...e) => e.filter(Boolean).join(" "),
  eH = "text-neutral-900 dark:text-neutral-100",
  eF = "text-neutral-900/78 dark:text-neutral-100/78",
  eq = "text-neutral-900/62 dark:text-neutral-100/62",
  eK = "text-[14px]/[20px] font-medium",
  eU = "text-[15px]/[20px] font-bold",
  eV = "flex shrink-0 items-center gap-2 text-[15px]/[20px] font-semibold text-neutral-900/62 dark:text-neutral-100/62 select-none first:ps-3.5 last:pe-3.5 has-[button]:first:ps-1 has-[button]:last:pe-1",
  eY = "mx-1 mb-1 flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:has(+*)]:mb-0",
  eG = {
    active: "text-neutral-900/78 dark:text-neutral-100/78",
    draft: "text-neutral-900/62 dark:text-neutral-100/62",
    expiring: "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]",
    expired: "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]"
  },
  eQ = [{
    id: "northwind",
    name: "Northwind Freight Co.",
    initials: "NF",
    location: "Rotterdam, NL",
    since: "Onboarded Mar 2021",
    category: "Logistics",
    contract: "active",
    contractLabel: "Active",
    spend: "$1,240,000",
    delta: "+8.2%",
    up: !0
  }, {
    id: "kraft",
    name: "Kraft & Hollow Packaging",
    initials: "KH",
    location: "Portland, US",
    since: "Onboarded Jul 2019",
    category: "Packaging",
    contract: "expiring",
    contractLabel: "Expiring",
    spend: "$486,500",
    delta: "-3.1%",
    up: !1
  }, {
    id: "meridian",
    name: "Meridian Cloud Systems",
    initials: "MC",
    location: "Dublin, IE",
    since: "Onboarded Jan 2022",
    category: "Cloud",
    contract: "active",
    contractLabel: "Active",
    spend: "$918,300",
    delta: "+14.6%",
    up: !0
  }, {
    id: "brightledger",
    name: "Brightledger Advisory",
    initials: "BA",
    location: "London, UK",
    since: "Onboarded Sep 2020",
    category: "Professional",
    contract: "active",
    contractLabel: "Active",
    spend: "$212,750",
    delta: "+2.4%",
    up: !0
  }, {
    id: "parcelworks",
    name: "Parcelworks Logistics",
    initials: "PL",
    location: "Memphis, US",
    since: "Onboarded Nov 2018",
    category: "Logistics",
    contract: "expired",
    contractLabel: "Expired",
    spend: "$74,900",
    delta: "-18.9%",
    up: !1
  }, {
    id: "atlas",
    name: "Atlas Component Works",
    initials: "AC",
    location: "Stuttgart, DE",
    since: "Onboarded Feb 2020",
    category: "Manufacturing",
    contract: "active",
    contractLabel: "Active",
    spend: "$1,506,200",
    delta: "+6.7%",
    up: !0
  }, {
    id: "verdant",
    name: "Verdant Materials",
    initials: "VM",
    location: "Malm\xf6, SE",
    since: "Onboarded May 2023",
    category: "Manufacturing",
    contract: "draft",
    contractLabel: "In review",
    spend: "$0",
    delta: "0.0%",
    up: !0
  }, {
    id: "harborlight",
    name: "Harborlight Freight",
    initials: "HF",
    location: "Singapore, SG",
    since: "Onboarded Aug 2021",
    category: "Logistics",
    contract: "active",
    contractLabel: "Active",
    spend: "$643,100",
    delta: "+11.3%",
    up: !0
  }, {
    id: "corvid",
    name: "Corvid Cloud Infrastructure",
    initials: "CC",
    location: "Ashburn, US",
    since: "Onboarded Oct 2022",
    category: "Cloud",
    contract: "expiring",
    contractLabel: "Expiring",
    spend: "$355,000",
    delta: "-5.4%",
    up: !1
  }, {
    id: "fold",
    name: "Fold & Crease Cartons",
    initials: "FC",
    location: "Guadalajara, MX",
    since: "Onboarded Apr 2019",
    category: "Packaging",
    contract: "active",
    contractLabel: "Active",
    spend: "$298,400",
    delta: "+4.1%",
    up: !0
  }, {
    id: "sterling",
    name: "Sterling Tax Partners",
    initials: "ST",
    location: "Toronto, CA",
    since: "Onboarded Dec 2020",
    category: "Professional",
    contract: "active",
    contractLabel: "Active",
    spend: "$164,000",
    delta: "+1.2%",
    up: !0
  }, {
    id: "ironvale",
    name: "Ironvale Fabrication",
    initials: "IF",
    location: "Sheffield, UK",
    since: "Onboarded Jun 2017",
    category: "Manufacturing",
    contract: "active",
    contractLabel: "Active",
    spend: "$822,600",
    delta: "+3.8%",
    up: !0
  }, {
    id: "swiftload",
    name: "Swiftload Distribution",
    initials: "SD",
    location: "Lyon, FR",
    since: "Onboarded Feb 2024",
    category: "Logistics",
    contract: "draft",
    contractLabel: "In review",
    spend: "$0",
    delta: "0.0%",
    up: !0
  }, {
    id: "nimbus",
    name: "Nimbus Data Platform",
    initials: "ND",
    location: "Sydney, AU",
    since: "Onboarded Mar 2023",
    category: "Cloud",
    contract: "active",
    contractLabel: "Active",
    spend: "$531,900",
    delta: "+9.5%",
    up: !0
  }],
  eJ = ["All categories", "Logistics", "Packaging", "Cloud", "Manufacturing", "Professional"].map(e => ({
    value: e,
    label: e
  })),
  eX = "grid grid-cols-[minmax(0,1fr)_72px_88px] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_120px_120px] sm:gap-4 md:grid-cols-[minmax(0,1fr)_130px_130px_140px]";
function eZ({
  value: e,
  onChange: r,
  options: a,
  ariaLabel: l
}) {
  let o = (0, React.useId)(),
    [s, d] = (0, React.useState)(!1),
    [c, _] = (0, React.useState)(0),
    [u, x] = (0, React.useState)(!1),
    [b, p] = (0, React.useState)(),
    h = (0, React.useRef)(null),
    m = (0, React.useRef)(null),
    k = (0, React.useRef)({
      buffer: "",
      at: 0
    }),
    f = a.findIndex(r => r.value === e),
    g = f >= 0 ? a[f] : void 0,
    v = () => {
      let e = h.current,
        r = e?.ownerDocument.defaultView;
      if (e && r) {
        let t = e.getBoundingClientRect(),
          n = 0,
          i = r.innerHeight;
        for (let a = e.parentElement; a; a = a.parentElement) if (/auto|scroll|hidden|clip/.test(r.getComputedStyle(a).overflowY)) {
          let e = a.getBoundingClientRect();
          n = Math.max(n, e.top), i = Math.min(i, e.bottom);
          break;
        }
        let l = i - t.bottom,
          o = t.top - n,
          s = Math.min(32 * a.length + 8, 264),
          d = l < s + 8 && o > l,
          c = (d ? o : l) - 8;
        x(d), p(c < s ? Math.max(c, 40) : void 0);
      }
      _(f >= 0 ? f : 0), d(!0);
    };
  (0, React.useEffect)(() => {
    if (!s) return;
    let e = h.current,
      r = e?.ownerDocument;
    if (!e || !r) return;
    let a = r => {
      e.contains(r.target) || d(!1);
    };
    return r.addEventListener("mousedown", a), r.addEventListener("touchstart", a), () => {
      r.removeEventListener("mousedown", a), r.removeEventListener("touchstart", a);
    };
  }, [s]), (0, React.useEffect)(() => {
    if (!s) return;
    let e = m.current,
      r = e?.querySelector(`[data-index="${c}"]`);
    if (!e || !r) return;
    let a = r.offsetTop,
      t = a + r.offsetHeight;
    a < e.scrollTop ? e.scrollTop = a : t > e.scrollTop + e.clientHeight && (e.scrollTop = t - e.clientHeight);
  }, [s, c]);
  let w = e => {
    let t = a[e];
    t && (r(t.value), d(!1), h.current?.querySelector("button")?.focus({
      preventScroll: !0
    }));
  };
  return <div ref={h} className="relative"><button type="button" role="combobox" aria-expanded={s} aria-controls={o} aria-haspopup="listbox" aria-label={l} onClick={() => s ? d(!1) : v()} onKeyDown={e => {
      if (!s) {
        ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key) && (e.preventDefault(), v());
        return;
      }
      if ("Escape" === e.key || "Tab" === e.key) {
        "Escape" === e.key && e.stopPropagation(), d(!1);
        return;
      }
      if ("ArrowDown" === e.key) e.preventDefault(), _(e => Math.min(e + 1, a.length - 1));else if ("ArrowUp" === e.key) e.preventDefault(), _(e => Math.max(e - 1, 0));else if ("Home" === e.key) e.preventDefault(), _(0);else if ("End" === e.key) e.preventDefault(), _(a.length - 1);else if ("Enter" === e.key || " " === e.key) e.preventDefault(), w(c);else if (1 === e.key.length && /\S/.test(e.key)) {
        let r = Date.now(),
          t = k.current;
        t.buffer = r - t.at > 700 ? e.key : t.buffer + e.key, t.at = r;
        let n = a.findIndex(e => e.label.toLowerCase().startsWith(t.buffer.toLowerCase()));
        n >= 0 && _(n);
      }
    }} className="inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40"><span className="grid min-w-0 flex-1 text-left *:[grid-area:1/1]">{a.map(e => <span aria-hidden="true" className="invisible truncate">{e.label}</span>)}<span className="truncate">{g?.label}</span></span><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/78 dark:text-neutral-100/78" /></button>{s && <ul ref={m} id={o} role="listbox" tabIndex={-1} style={{
      maxHeight: b
    }} className={eI("min-w-52 max-w-[min(480px,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] p-2 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute z-30 max-h-[264px] w-full min-w-[100%]", u ? "bottom-full mb-1.5" : "top-full mt-1.5")}>{a.map((r, a) => <li role="option" aria-selected={r.value === e} data-index={a} data-highlighted={a === c ? "" : void 0} onMouseEnter={() => _(a)} onClick={() => w(a)} className={eI("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "pe-8")}><span className="truncate">{r.label}</span>{r.value === e && <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" className="pointer-events-none absolute end-2" />}</li>)}</ul>}</div>;
}
let e9 = (...e) => e.filter(Boolean).join(" "),
  e3 = "text-neutral-900 dark:text-neutral-100",
  e7 = "text-neutral-900/62 dark:text-neutral-100/62",
  re = "text-[14px]/[20px] font-medium",
  rr = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40",
  ra = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rt = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  rn = "size-8 rounded-[calc(var(--rb-r-full,999px))]",
  ri = "relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]",
  rl = [{
    id: "n1",
    icon: __mod_2605.A,
    title: "Priya Nair mentioned you in Checkout v3",
    preview: "Can you take the payment-intent race here? I left a thread on the retry logic and tagged you for the final call.",
    time: "2m"
  }, {
    id: "n2",
    icon: __mod_3980.A,
    title: "Review requested on “Split ledger writes”",
    preview: "Marcus Feld opened a pull request in billing-core and asked for your review before the freeze.",
    time: "11m"
  }, {
    id: "n3",
    icon: __mod_55599.A,
    title: "Deploy succeeded, web-app 4.18.0",
    preview: "Production rollout finished across all three regions. Error rate is flat and latency is within budget.",
    time: "38m"
  }, {
    id: "n4",
    icon: __mod_36474.A,
    title: "API usage at 82% of your monthly quota",
    preview: "At the current rate you will reach the plan limit around Aug 24. Raise the cap to avoid throttled requests.",
    time: "1h"
  }, {
    id: "n5",
    icon: __mod_2605.A,
    title: "Dana Okafor mentioned you in Design review",
    preview: "The empty states look great now. One note on the toast timing that I think is worth a quick pass.",
    time: "3h"
  }, {
    id: "n6",
    icon: __mod_3980.A,
    title: "Your pull request was approved and merged",
    preview: "“Cache supplier lookups” passed review from two reviewers and merged into main a moment ago.",
    time: "5h"
  }, {
    id: "n7",
    icon: __mod_55599.A,
    title: "Staging deploy started, api-gateway 2.9.1",
    preview: "Build 4821 is rolling out to staging. You will get a follow-up when smoke tests complete.",
    time: "Yesterday"
  }, {
    id: "n8",
    icon: __mod_36474.A,
    title: "Certificate for hooks.northwind.io renews in 6 days",
    preview: "Auto-renewal is enabled, but the last attempt was rate-limited. Confirm DNS still points to the load balancer.",
    time: "2d"
  }],
  ro = new Set(["n3", "n6", "n7"]),
  rs = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let r_ = (...e) => e.filter(Boolean).join(" "),
  ru = "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6",
  rx = "text-neutral-900 dark:text-neutral-100",
  rb = "text-neutral-900/62 dark:text-neutral-100/62",
  rp = "text-[14px]/[20px] font-medium",
  rh = "text-[13px]/[16px] font-semibold tabular-nums",
  rm = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  rf = [{
    first: "Amara",
    last: "Adeyemi",
    role: "VP Operations",
    company: "Northwind Trading",
    kind: "customer"
  }, {
    first: "Priya",
    last: "Anand",
    role: "Head of Procurement",
    company: "Kestrel Labs",
    kind: "prospect"
  }, {
    first: "Marcus",
    last: "Bello",
    role: "Finance Director",
    company: "Atlas Freight",
    kind: "customer"
  }, {
    first: "Elena",
    last: "Brandt",
    role: "Account Owner",
    company: "Bright Harbor",
    kind: "customer"
  }, {
    first: "Sofia",
    last: "Cardenas",
    role: "IT Manager",
    company: "Cedar & Vale",
    kind: "prospect"
  }, {
    first: "Daniel",
    last: "Cho",
    role: "Ops Lead",
    company: "Meridian Health",
    kind: "customer"
  }, {
    first: "Nadia",
    last: "Duarte",
    role: "Head of Sales",
    company: "Pinewood Foods",
    kind: "customer"
  }, {
    first: "Grace",
    last: "Fenwick",
    role: "CFO",
    company: "Riverbank Capital",
    kind: "customer"
  }, {
    first: "Oscar",
    last: "Fontaine",
    role: "Procurement Lead",
    company: "Solstice Energy",
    kind: "prospect"
  }, {
    first: "Leah",
    last: "Granger",
    role: "VP Operations",
    company: "Tidewater Logistics",
    kind: "customer"
  }, {
    first: "Tomas",
    last: "Guerra",
    role: "Founder",
    company: "Umbra Studio",
    kind: "prospect"
  }, {
    first: "Ravi",
    last: "Hemani",
    role: "IT Director",
    company: "Vantage Aero",
    kind: "customer"
  }, {
    first: "Imani",
    last: "Hollis",
    role: "Head of Finance",
    company: "Wexford Group",
    kind: "customer"
  }, {
    first: "Yusuf",
    last: "Kaya",
    role: "Ops Manager",
    company: "Ovato Retail",
    kind: "prospect"
  }, {
    first: "Wren",
    last: "Kowalski",
    role: "Account Owner",
    company: "Quill Media",
    kind: "customer"
  }, {
    first: "Bianca",
    last: "Lindqvist",
    role: "VP Finance",
    company: "Lumen Robotics",
    kind: "customer"
  }, {
    first: "Aaron",
    last: "Mbeki",
    role: "Head of Procurement",
    company: "Northwind Trading",
    kind: "customer"
  }, {
    first: "Chloe",
    last: "Marchetti",
    role: "Buyer",
    company: "Cedar & Vale",
    kind: "prospect"
  }, {
    first: "Felix",
    last: "Moreau",
    role: "Operations Lead",
    company: "Atlas Freight",
    kind: "customer"
  }, {
    first: "Sasha",
    last: "Novak",
    role: "Head of IT",
    company: "Kestrel Labs",
    kind: "prospect"
  }, {
    first: "Dana",
    last: "Okonkwo",
    role: "CFO",
    company: "Bright Harbor",
    kind: "customer"
  }, {
    first: "Julian",
    last: "Pereira",
    role: "Account Owner",
    company: "Meridian Health",
    kind: "customer"
  }, {
    first: "Nora",
    last: "Pashkov",
    role: "VP Growth",
    company: "Pinewood Foods",
    kind: "prospect"
  }, {
    first: "Idris",
    last: "Rahman",
    role: "Finance Director",
    company: "Riverbank Capital",
    kind: "customer"
  }, {
    first: "Camila",
    last: "Rossi",
    role: "Procurement Lead",
    company: "Solstice Energy",
    kind: "customer"
  }, {
    first: "Hana",
    last: "Sato",
    role: "Head of Operations",
    company: "Tidewater Logistics",
    kind: "prospect"
  }, {
    first: "Victor",
    last: "Salgado",
    role: "IT Manager",
    company: "Umbra Studio",
    kind: "customer"
  }, {
    first: "Marta",
    last: "Toledo",
    role: "Account Owner",
    company: "Vantage Aero",
    kind: "customer"
  }, {
    first: "Leon",
    last: "Vasquez",
    role: "Founder",
    company: "Wexford Group",
    kind: "prospect"
  }, {
    first: "Greta",
    last: "Wallace",
    role: "VP Operations",
    company: "Ovato Retail",
    kind: "customer"
  }, {
    first: "Owen",
    last: "Whitfield",
    role: "Head of Sales",
    company: "Quill Media",
    kind: "customer"
  }],
  rg = [{
    id: "all",
    label: "All"
  }, {
    id: "customer",
    label: "Customers"
  }, {
    id: "prospect",
    label: "Prospects"
  }],
  rv = e => {
    let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
    if (!r && "Home" !== e.key && "End" !== e.key) return;
    let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
      t = a.indexOf(e.target);
    if (t < 0) return;
    e.preventDefault();
    let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
    a[n].focus(), a[n].click();
  };
let ry = (...e) => e.filter(Boolean).join(" "),
  rj = "text-neutral-900 dark:text-neutral-100",
  rN = "text-neutral-900/62 dark:text-neutral-100/62",
  rz = "text-[14px]/[20px] font-medium",
  rA = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  rS = [{
    title: "Acknowledge the page and declare an incident",
    owner: "On-call primary",
    duration: "2 min"
  }, {
    title: "Open the incident channel and post the first summary",
    owner: "Incident commander",
    duration: "3 min"
  }, {
    title: "Confirm blast radius from the error-rate dashboard",
    owner: "SRE",
    duration: "5 min"
  }, {
    title: "Roll back the checkout service to the last good deploy",
    owner: "Release engineer",
    duration: "8 min"
  }, {
    title: "Verify error rate and latency have recovered",
    owner: "SRE",
    duration: "5 min"
  }, {
    title: "Post customer-facing update to the status page",
    owner: "Support lead",
    duration: "4 min"
  }, {
    title: "Capture the timeline for the postmortem",
    owner: "Incident commander",
    duration: "6 min"
  }, {
    title: "Stand down responders and close the incident",
    owner: "On-call primary",
    duration: "2 min"
  }];
let rM = (...e) => e.filter(Boolean).join(" "),
  rT = "text-neutral-900 dark:text-neutral-100",
  rD = "text-neutral-900/78 dark:text-neutral-100/78",
  rO = "text-neutral-900/62 dark:text-neutral-100/62",
  rP = "text-[14px]/[20px] font-medium",
  rE = "border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7",
  rW = "inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1",
  rB = "h-10",
  rL = "relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40",
  r$ = [{
    id: "nair",
    name: "Priya Nair",
    initials: "PN",
    team: "Tier 2 support",
    w: {
      r: 172,
      rt: 96,
      cs: 4.9
    },
    wd: {
      r: 14,
      rt: -12,
      cs: .2
    },
    m: {
      r: 712,
      rt: 108,
      cs: 4.8
    },
    md: {
      r: 40,
      rt: -18,
      cs: .1
    }
  }, {
    id: "bello",
    name: "Marcus Bello",
    initials: "MB",
    team: "Escalations",
    w: {
      r: 168,
      rt: 132,
      cs: 4.7
    },
    wd: {
      r: 9,
      rt: 8,
      cs: 0
    },
    m: {
      r: 690,
      rt: 140,
      cs: 4.7
    },
    md: {
      r: 22,
      rt: 10,
      cs: 0
    }
  }, {
    id: "sato",
    name: "Hana Sato",
    initials: "HS",
    team: "Tier 1 support",
    w: {
      r: 151,
      rt: 118,
      cs: 4.8
    },
    wd: {
      r: -6,
      rt: -5,
      cs: .1
    },
    m: {
      r: 640,
      rt: 122,
      cs: 4.8
    },
    md: {
      r: -18,
      rt: -8,
      cs: .1
    }
  }, {
    id: "ramos",
    name: "Diego Ramos",
    initials: "DR",
    team: "Billing",
    w: {
      r: 149,
      rt: 205,
      cs: 4.5
    },
    wd: {
      r: 21,
      rt: -22,
      cs: -.1
    },
    m: {
      r: 705,
      rt: 190,
      cs: 4.6
    },
    md: {
      r: 64,
      rt: -30,
      cs: -.1
    }
  }, {
    id: "okoye",
    name: "Amara Okoye",
    initials: "AO",
    team: "Onboarding",
    w: {
      r: 138,
      rt: 176,
      cs: 4.6
    },
    wd: {
      r: -3,
      rt: 6,
      cs: .2
    },
    m: {
      r: 588,
      rt: 168,
      cs: 4.5
    },
    md: {
      r: -11,
      rt: 9,
      cs: .1
    }
  }, {
    id: "fischer",
    name: "Lena Fischer",
    initials: "LF",
    team: "Tier 2 support",
    w: {
      r: 131,
      rt: 149,
      cs: 4.7
    },
    wd: {
      r: 12,
      rt: -9,
      cs: .1
    },
    m: {
      r: 559,
      rt: 155,
      cs: 4.7
    },
    md: {
      r: 33,
      rt: -12,
      cs: .1
    }
  }, {
    id: "whitfield",
    name: "Sam Whitfield",
    initials: "SW",
    team: "Tier 1 support",
    w: {
      r: 120,
      rt: 221,
      cs: 4.4
    },
    wd: {
      r: -8,
      rt: 14,
      cs: -.2
    },
    m: {
      r: 512,
      rt: 210,
      cs: 4.4
    },
    md: {
      r: -25,
      rt: 20,
      cs: -.2
    }
  }, {
    id: "tanaka",
    name: "Yuki Tanaka",
    initials: "YT",
    team: "Escalations",
    w: {
      r: 109,
      rt: 163,
      cs: 4.6
    },
    wd: {
      r: 4,
      rt: -3,
      cs: .1
    },
    m: {
      r: 470,
      rt: 172,
      cs: 4.5
    },
    md: {
      r: 12,
      rt: -6,
      cs: 0
    }
  }, {
    id: "haddad",
    name: "Omar Haddad",
    initials: "OH",
    team: "Billing",
    w: {
      r: 96,
      rt: 258,
      cs: 4.3
    },
    wd: {
      r: 18,
      rt: -18,
      cs: .3
    },
    m: {
      r: 604,
      rt: 226,
      cs: 4.4
    },
    md: {
      r: 48,
      rt: -24,
      cs: .2
    }
  }],
  rI = [{
    id: "resolved",
    label: "Resolved"
  }, {
    id: "response",
    label: "Response time"
  }, {
    id: "csat",
    label: "Satisfaction"
  }],
  rH = [{
    id: "w",
    label: "This week"
  }, {
    id: "m",
    label: "This month"
  }],
  rF = {
    resolved: "r",
    response: "rt",
    csat: "cs"
  },
  rq = {
    resolved: !1,
    response: !0,
    csat: !1
  },
  rK = e => Math.round(10 * e) / 10,
  rU = e => `${Math.floor(e / 60)}:${String(Math.round(e) % 60).padStart(2, "0")}`,
  rV = (e, r) => "w" === r ? e.w : e.m,
  rY = (e, r) => "w" === r ? e.wd : e.md,
  rG = "grid-cols-[28px_36px_minmax(0,1fr)_72px] sm:grid-cols-[28px_60px_minmax(0,1fr)_96px_104px_76px]";
function rQ({
  children: e,
  right: r,
  className: a
}) {
  return <span className={rM("text-[13px]/[16px] font-semibold tabular-nums", rO, r && "text-right", a)}>{e}</span>;
}
function rJ(e, r, a) {
  let t = rF[r],
    n = r$.map(r => {
      let n = rV(r, e)[t],
        i = a ? rK(n - rY(r, e)[t]) : n;
      return {
        id: r.id,
        val: i
      };
    });
  n.sort((e, a) => rq[r] ? e.val - a.val : a.val - e.val);
  let i = {};
  return n.forEach((e, r) => i[e.id] = r + 1), i;
}
let rX = e => {
  let r = "ArrowRight" === e.key || "ArrowDown" === e.key ? 1 : "ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 0;
  if (!r && "Home" !== e.key && "End" !== e.key) return;
  let a = Array.from(e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')),
    t = a.indexOf(e.target);
  if (t < 0) return;
  e.preventDefault();
  let n = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (t + r + a.length) % a.length;
  a[n].focus(), a[n].click();
};
let r8 = (...e) => e.filter(Boolean).join(" "),
  r6 = "text-neutral-900 dark:text-neutral-100",
  r5 = "text-neutral-900/62 dark:text-neutral-100/62",
  r4 = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  r9 = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  r3 = "shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62",
  r7 = [{
    id: "src",
    name: "src",
    type: "folder",
    children: [{
      id: "components",
      name: "components",
      type: "folder",
      children: [{
        id: "button",
        name: "Button.tsx",
        type: "file",
        kind: "code",
        size: "2.4 KB"
      }, {
        id: "modal",
        name: "Modal.tsx",
        type: "file",
        kind: "code",
        size: "3.1 KB"
      }, {
        id: "icons",
        name: "icons",
        type: "folder",
        children: [{
          id: "logo",
          name: "logo.svg",
          type: "file",
          kind: "image",
          size: "1.2 KB"
        }, {
          id: "spinner",
          name: "spinner.svg",
          type: "file",
          kind: "image",
          size: "0.8 KB"
        }]
      }]
    }, {
      id: "hooks",
      name: "hooks",
      type: "folder",
      children: [{
        id: "use-auth",
        name: "use-auth.ts",
        type: "file",
        kind: "code",
        size: "1.6 KB"
      }, {
        id: "use-theme",
        name: "use-theme.ts",
        type: "file",
        kind: "code",
        size: "0.9 KB"
      }]
    }, {
      id: "lib",
      name: "lib",
      type: "folder",
      children: [{
        id: "api",
        name: "api.ts",
        type: "file",
        kind: "code",
        size: "4.2 KB"
      }, {
        id: "format",
        name: "format.ts",
        type: "file",
        kind: "code",
        size: "1.1 KB"
      }]
    }, {
      id: "styles",
      name: "styles.css",
      type: "file",
      kind: "text",
      size: "5.0 KB"
    }, {
      id: "index",
      name: "index.ts",
      type: "file",
      kind: "code",
      size: "0.4 KB"
    }]
  }, {
    id: "public",
    name: "public",
    type: "folder",
    children: [{
      id: "favicon",
      name: "favicon.png",
      type: "file",
      kind: "image",
      size: "4.5 KB"
    }, {
      id: "og",
      name: "og-image.png",
      type: "file",
      kind: "image",
      size: "88 KB"
    }]
  }, {
    id: "readme",
    name: "README.md",
    type: "file",
    kind: "text",
    size: "6.2 KB"
  }, {
    id: "pkg",
    name: "package.json",
    type: "file",
    kind: "code",
    size: "1.9 KB"
  }, {
    id: "tsconfig",
    name: "tsconfig.json",
    type: "file",
    kind: "code",
    size: "0.6 KB"
  }, {
    id: "gitignore",
    name: ".gitignore",
    type: "file",
    kind: "text",
    size: "0.2 KB"
  }],
  ae = {
    code: __mod_80969.A,
    text: __mod_31964.A,
    image: __mod_22776.A
  },
  ar = function e(r, a = []) {
    for (let t of r) "folder" === t.type && (a.push(t.id), e(t.children, a));
    return a;
  }(r7),
  aa = {
    "list-1": function () {
      let [e, r] = (0, React.useState)("28d"),
        [a, l] = (0, React.useState)(null);
      return <div className={x("bg-white dark:bg-neutral-950", b, "flex h-full min-h-[560px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className="mx-auto w-full max-w-[720px] shrink-0"><div className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-3"><div><h2 className={x("text-[17px]/[22px] font-extrabold", b)}>Store performance</h2><p className={x(p, "text-neutral-900/62 dark:text-neutral-100/62", "mt-0.5")}>Compared with the preceding period</p></div><div role="radiogroup" aria-label="Reporting range" onKeyDown={k} className={x("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{h.map(a => {
                let n = a.id === e;
                return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a.label}</button>;
              })}</div></div><div className={x("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "shrink-0 p-2")}>{m.map(r => {
              let {
                  value: n,
                  delta: o
                } = r.by[e],
                s = a === r.id;
              return <div className={x("group/row relative", "rounded-[var(--rb-r-4xl,18px)]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", s ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6")}><div className={x("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "h-16 px-3")}><span className={x("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-10")}><__mod_22728.n icon={r.icon} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><div className="flex items-baseline gap-2"><span className="flex min-w-0 flex-wrap items-baseline gap-x-1 text-[22px]/[28px] font-extrabold tracking-[-0.01em] tabular-nums text-neutral-900 dark:text-neutral-100">{n}</span><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={o > 0 ? __mod_1497.A : o < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{o > 0 ? "Up" : o < 0 ? "Down" : "No change"}</span>{`${o > 0 ? "+" : o < 0 ? "−" : ""}${Math.abs(o)}%`}</span></div><p data-description={!0} className="line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78">{r.label}</p></div><button type="button" aria-expanded={s} aria-label={`${s ? "Hide" : "Show"} how ${r.label.toLowerCase()} is measured`} onClick={() => l(s ? null : r.id)} className={x("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "size-10 rounded-[calc(var(--rb-r-full,999px))]", "group")}><__mod_22728.n icon={__mod_1497.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></button></div><div className={x("grid pr-3 pl-16", s ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><div hidden={!s} className="overflow-hidden"><p className={x(p, "text-neutral-900/78 dark:text-neutral-100/78", "pb-3")}>{r.caption}</p></div></div></div>;
            })}</div></div></div>;
    },
    "list-2": function () {
      let [e, r] = (0, React.useState)("month"),
        [a, l] = (0, React.useState)(null),
        {
          ref: o,
          edges: s,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, React.useMemo)(() => [...w].sort((r, a) => a.by[e].spend - r.by[e].spend), [e]),
        b = (0, React.useMemo)(() => x.reduce((r, a) => r + a.by[e].spend, 0), [x, e]);
      return <div className={g("bg-white dark:bg-neutral-950", v, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className={g("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "mx-auto w-full max-w-[720px] shrink-0")}><div className={g("border-b border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", "flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-3.5")}><div className="min-w-0"><h2 className="min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100">Infrastructure spend</h2><p className={g("text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-0.5 tabular-nums")}>{j(b)} across {x.length} services</p></div><div role="radiogroup" aria-label="Billing period" onKeyDown={N} className={g("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{y.map(a => {
                let n = a.id === e;
                return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a.label}</button>;
              })}</div></div><div className="relative"><div ref={o} onScroll={d} className={g("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex max-h-[292px] flex-col overflow-y-auto px-2 py-1")}>{x.map(r => {
                let {
                    spend: n,
                    delta: o,
                    units: s
                  } = r.by[e],
                  d = a === r.id;
                return <button type="button" aria-pressed={d} onClick={() => l(d ? null : r.id)} className={g("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", d ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "h-14 shrink-0 cursor-pointer px-3")}><span className={g("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-9")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.initials}</span></span><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{r.name}</span></span><span data-description={!0} className={g("text-[14px]/[20px] font-medium", "text-neutral-900/62 dark:text-neutral-100/62", "block truncate")}><span>{r.team}</span><span className="ms-3">{s}</span></span></span><span className="shrink-0 text-right"><span className={g("text-[15px]/[20px] font-bold", v, "block tabular-nums")}>{j(n)}</span><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={o > 0 ? __mod_1497.A : o < 0 ? __mod_37502.A : __mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{o > 0 ? "Up" : o < 0 ? "Down" : "No change"}</span>{`${o > 0 ? "+" : o < 0 ? "−" : ""}${Math.abs(o).toFixed(1)}%`}</span></span></button>;
              })}</div><div aria-hidden="true" className={g("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={g("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><div className="p-2"><button type="button" className={g("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "w-full")}><__mod_22728.n icon={__mod_89886.A} size={18} strokeWidth={2} aria-hidden="true" />Connect a billing account</button></div></div></div>;
    },
    "list-3": function () {
      let [e, r] = (0, React.useState)("all"),
        [a, l] = (0, React.useState)(!1),
        {
          ref: o,
          edges: s,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        c = (0, React.useMemo)(() => "all" !== e || a ? L.map(r => ({
          day: r.day,
          events: r.events.filter(r => ("all" === e || r.kind === e) && (!a || !0 === r.anomaly))
        })).filter(e => e.events.length > 0) : L, [e, a]),
        _ = (0, React.useMemo)(() => c.reduce((e, r) => e + r.events.length, 0), [c]);
      return <div className={O("bg-white dark:bg-neutral-950", P, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className="mx-auto flex w-full max-w-[720px] shrink-0 flex-col"><div className="flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={O("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", P)}>Security activity</h2><p className={O(B, W, "mt-1")}>Access, sign-in and permission events across the workspace.</p></div><div className="flex max-w-full min-w-0 flex-wrap items-center gap-2"><button type="button" aria-pressed={a} onClick={() => l(e => !e)} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40"><__mod_22728.n icon={__mod_85585.A} size={16} strokeWidth={2} aria-hidden="true" />Flagged</button><div role="radiogroup" aria-label="Filter events" onKeyDown={I} className={O("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-9", "shrink-0")}>{$.map(a => {
                  let n = e === a.id;
                  return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a.label}</button>;
                })}</div></div></div><div className={O("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "relative mt-4 shrink-0")}><div ref={o} onScroll={d} className="h-[432px] overflow-y-auto px-2 pb-1">{0 === _ ? <div className="flex h-full flex-col items-center justify-center px-6 text-center"><span className="flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_20484.A} size={20} strokeWidth={2} aria-hidden="true" className={E} /></span><p className={O("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>No matching events</p><p className={O("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Nothing matches this category and flag combination.</p><button type="button" onClick={() => {
                  r("all"), l(!1);
                }} className={O("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Clear filters</button></div> : c.map(e => <section><div className={O("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "text-[13px]/[16px] font-semibold tabular-nums", W, "sticky top-0 z-20 px-3 pb-1.5 pt-2")}>{e.day}</div><ul className={O("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex flex-col px-0 pb-1")}>{e.events.map(e => <li><div className={O("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", e.anomaly ? "bg-[oklch(95.5%_0.03_26/0.55)] hover:bg-[oklch(95.5%_0.03_26/0.8)] dark:bg-[oklch(30%_0.065_26/0.4)] dark:hover:bg-[oklch(30%_0.065_26/0.6)]" : "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "h-14 px-3")}><span className={O("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-10")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} aria-hidden="true" className={e.anomaly ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : void 0} /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><div className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><p className="truncate">{e.title}</p>{e.anomaly && <span className={O("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]", "shrink-0")}>Blocked</span>}</div><p data-description={!0} className={O(B, W, "truncate")}><span className={E}>{e.actor}</span>{e.target.map(e => <span className="ms-3">{e}</span>)}</p></div><time className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{e.time}</time></div></li>)}</ul></section>)}</div><div aria-hidden="true" className={O("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 z-10 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={O("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8", s.end ? "opacity-100" : "opacity-0")} /></div><p className={O(B, W, "mt-3 px-1 tabular-nums")}>{_} {1 === _ ? "event" : "events"} shown</p></div></div>;
    },
    "list-4": function () {
      let [e, r] = (0, React.useState)(Y),
        [a, l] = (0, React.useState)(null),
        [o, d] = (0, React.useState)(!1),
        [c, _] = (0, React.useState)(null),
        [u, x] = (0, React.useState)(""),
        b = (0, React.useRef)(0),
        p = (0, React.useRef)(Y);
      (0, React.useEffect)(() => {
        if (!o) return;
        let e = 0,
          r = requestAnimationFrame(() => {
            e = requestAnimationFrame(() => d(!1));
          });
        return () => {
          cancelAnimationFrame(r), cancelAnimationFrame(e);
        };
      }, [o]);
      let h = e.length,
        m = (0, React.useMemo)(() => Q(e) === J, [e]),
        k = a ? V(a.from + Math.round(a.dy / 57), 0, h - 1) : -1,
        f = (e, a) => {
          r(r => {
            if (a === e) return r;
            let t = [...r],
              [n] = t.splice(e, 1);
            return t.splice(a, 0, n), t;
          });
        },
        g = e => {
          if (!a) return;
          e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
          let r = V(a.from + Math.round(a.dy / 57), 0, h - 1);
          r !== a.from && (f(a.from, r), x(`Moved to position ${r + 1} of ${h}.`), d(!0)), l(null);
        };
      return <div className={F("bg-white dark:bg-neutral-950", q, "flex h-full min-h-[700px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className="mx-auto flex w-full max-w-[720px] shrink-0 flex-col"><div className="flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={F("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", q)}>Publishing queue</h2><p className={F(U, K, "mt-1")}>Drag a handle to change the order these {h} drafts go live.</p></div><button type="button" onClick={() => {
              r(Y), _(null), x("Order reset to the original schedule.");
            }} disabled={m} className={F("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "shrink-0")}><__mod_22728.n icon={__mod_3810.A} size={18} strokeWidth={2} aria-hidden="true" />Reset order</button></div><ul onPointerDown={r => {
            if (0 !== r.button) return;
            let a = r.target;
            if (!a.closest("[data-drag-handle]")) return;
            let t = a.closest("[data-row-id]"),
              n = t?.dataset.rowId;
            if (!n) return;
            let i = e.findIndex(e => e.id === n);
            i < 0 || (r.currentTarget.setPointerCapture(r.pointerId), r.preventDefault(), d(!1), _(null), b.current = r.clientY, l({
              id: n,
              from: i,
              dy: 0
            }));
          }} onPointerMove={e => {
            l(r => r ? {
              ...r,
              dy: e.clientY - b.current
            } : r);
          }} onPointerUp={g} onPointerCancel={g} style={{
            touchAction: "pan-y"
          }} className={F("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-4 shrink-0 p-2", a && "select-none")}>{e.map((n, l) => {
              let s = a?.id === n.id,
                d = c === n.id,
                u = s || d,
                b = 0;
              if (a && !s) {
                let {
                  from: e
                } = a;
                e < k && l > e && l <= k ? b = -57 : k < e && l >= k && l < e && (b = 57);
              }
              let m = s ? a.dy : b;
              return <li data-row-id={n.id} style={{
                transform: m ? `translateY(${m}px)` : void 0,
                zIndex: u ? 10 : void 0
              }} className={F("relative", !o && !s && "transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none")}><div className={F("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", "h-14 py-[0px] pr-2", u && F("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]"))}><button type="button" data-drag-handle={!0} aria-label={d ? `${n.title}, grabbed, position ${l + 1} of ${h}. Use the arrow keys to move, space to drop, escape to cancel.` : `Reorder ${n.title}. Position ${l + 1} of ${h}. Press space or enter to pick up.`} onKeyDown={a => ((a, t) => {
                    let n = e[t];
                    if (n) {
                      if (" " === a.key || "Enter" === a.key) {
                        a.preventDefault(), c === n.id ? (_(null), x(`${n.title} dropped at position ${t + 1} of ${h}.`)) : (p.current = e, _(n.id), x(`${n.title} grabbed, position ${t + 1} of ${h}. Use the arrow keys to move, space to drop, escape to cancel.`));
                        return;
                      }
                      if (c === n.id) if ("ArrowUp" === a.key || "ArrowDown" === a.key) {
                        a.preventDefault();
                        let e = V(t + ("ArrowUp" === a.key ? -1 : 1), 0, h - 1);
                        e !== t && (f(t, e), x(`Moved to position ${e + 1} of ${h}.`));
                      } else "Escape" === a.key && (a.preventDefault(), r(p.current), _(null), x("Reorder cancelled."));
                    }
                  })(a, l)} className={F(K, "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex h-14 shrink-0 touch-none items-center pl-2 pr-1", a ? "cursor-grabbing" : "cursor-grab")}><__mod_22728.n icon={__mod_60041.A} size={18} strokeWidth={2} aria-hidden="true" /></button><span className={F("text-[13px]/[16px] font-semibold tabular-nums", K, "w-4 shrink-0 text-center")}>{l + 1}</span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{n.title}</span></p><p data-description={!0} className={F(U, K, "truncate")}><span className="text-neutral-900/78 dark:text-neutral-100/78">{n.author}</span><span className="ms-3 tabular-nums">{n.words}</span></p></div><time className="shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{G[l]}</time></div></li>;
            })}</ul><p aria-live="polite" className="sr-only">{u}</p></div></div>;
    },
    "list-5": function () {
      let [e, r] = (0, React.useState)(em),
        [a, l] = (0, React.useState)("all"),
        [o, s] = (0, React.useState)(() => new Set()),
        d = (0, React.useRef)(null),
        c = (0, React.useRef)(null),
        {
          ref: _,
          edges: u,
          onScroll: x
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        b = (0, React.useMemo)(() => eg(e, a), [e, a]),
        p = o.size,
        h = b.length > 0 && b.every(e => o.has(e.id)),
        m = p > 0 && !h;
      (0, React.useEffect)(() => {
        c.current && (c.current.indeterminate = m);
      }, [m]);
      let k = (e, r) => {
        let a = b[e]?.id;
        a && (s(t => {
          let n = new Set(t),
            i = d.current;
          if (r && null !== i) {
            let r = Math.min(i, e),
              t = Math.max(i, e),
              l = !n.has(a);
            for (; r <= t; e += 1) {
              let r = b[r].id;
              l ? n.add(r) : n.delete(r);
            }
          } else n.has(a) ? n.delete(a) : n.add(a);
          return n;
        }), d.current = e);
      };
      return <div className={el("bg-white dark:bg-neutral-950", eo, "flex h-full min-h-[640px] w-full flex-col justify-center-safe overflow-y-auto p-6 sm:p-8")}><div className="mx-auto flex w-full max-w-[1100px] shrink-0 flex-col"><div className="flex flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={el("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", eo)}>Asset library</h2><p className={el(ec, ed, "mt-1")}>Uploaded media awaiting review before it ships to production.</p></div><div role="radiogroup" aria-label="Filter by status" onKeyDown={ev} className={el("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{ef.map(r => {
                let n = a === r.id;
                return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => {
                  var a;
                  let t;
                  return l(a = r.id), t = new Set(eg(e, a).map(e => e.id)), void (s(e => {
                    let r = !1,
                      a = new Set();
                    return e.forEach(e => {
                      t.has(e) ? a.add(e) : r = !0;
                    }), r ? a : e;
                  }), d.current = null);
                }} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r.label}</button>;
              })}</div></div><div className="relative mt-4 flex h-11 items-center justify-between gap-3 px-4.25"><label className={el(e_, es, "inline-flex cursor-pointer items-center gap-2.5 select-none")}><span className={ex}><input ref={c} type="checkbox" checked={h} onChange={() => {
                  s(() => h ? new Set() : new Set(b.map(e => e.id))), d.current = null;
                }} aria-label="Select all assets" className={eb} />{h ? <__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={ep} /> : m ? <__mod_22728.n icon={__mod_99199.A} size={14} strokeWidth={2.5} aria-hidden="true" className={ep} /> : null}</span><span className={el(p > 0 && "max-sm:sr-only")}>Select all</span></label><div className="flex items-center"><span aria-hidden={p > 0} className={el(eu, ed, p > 0 ? "opacity-0" : "opacity-100")}>{b.length} {1 === b.length ? "asset" : "assets"}</span><div aria-hidden={0 === p} className={el("flex h-12 max-w-full items-center gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(8px,var(--rb-r-full,999px)))] bg-neutral-900 py-2 ps-5 pe-2 font-bold text-white shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)] dark:bg-neutral-100 dark:text-neutral-900", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "absolute right-0", p > 0 ? "opacity-100" : "pointer-events-none opacity-0")}><span className={el(e_, "mr-1 whitespace-nowrap tabular-nums")}>{p} selected</span><button type="button" tabIndex={p > 0 ? 0 : -1} className={eh}><__mod_22728.n icon={__mod_92752.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">Download</span></button><button type="button" tabIndex={p > 0 ? 0 : -1} className={eh}><__mod_22728.n icon={__mod_76021.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">Move</span></button><button type="button" onClick={() => {
                  r(e => e.filter(e => !o.has(e.id))), s(new Set()), d.current = null;
                }} tabIndex={p > 0 ? 0 : -1} className={eh}><__mod_22728.n icon={__mod_96037.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="max-sm:sr-only">Delete</span></button><button type="button" onClick={() => {
                  s(new Set()), d.current = null;
                }} tabIndex={p > 0 ? 0 : -1} aria-label="Clear selection" className={el(eh, "ml-0.5")}><__mod_22728.n icon={__mod_89289.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div><div className={el("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "relative mt-1 shrink-0")}><div ref={_} onScroll={x} className="h-[454px] overflow-y-auto p-2">{0 === b.length ? <div className="flex h-full flex-col items-center justify-center px-6 text-center"><span className="flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_22776.A} size={20} strokeWidth={2} aria-hidden="true" className={es} /></span><p className={el("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>{0 === e.length ? "The library is empty" : "No assets in this view"}</p><p className={el("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{0 === e.length ? "Every asset has been deleted." : "Nothing matches this status right now."}</p><button type="button" onClick={() => {
                  r(em), l("all"), s(new Set()), d.current = null;
                }} className={el("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-3")}>Restore library</button></div> : <ul className={el("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex flex-col")}>{b.map((e, r) => {
                  let a = o.has(e.id);
                  return <li><label className={el("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", a ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "h-16 cursor-pointer px-2 select-none")}><span className={ex}><input type="checkbox" checked={a} onChange={() => k(r, !1)} onClick={e => {
                          e.shiftKey && (e.preventDefault(), k(r, !0));
                        }} aria-label={`Select ${e.name}`} className={eb} /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className={ep} /></span><span className={el("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-10")}><__mod_22728.n icon={ek[e.kind]} size={18} strokeWidth={2} aria-hidden="true" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.name}</span></p><p data-description={!0} className={el(ec, ed, "truncate tabular-nums")}>{[...e.spec, e.size].map((e, r) => <span className={r > 0 ? "ms-3" : void 0}>{e}</span>)}</p></div><div className="hidden w-40 shrink-0 items-center gap-2 lg:flex"><span aria-hidden="true" className={el("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-[24px]")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{e.initials.charAt(0)}</span></span><span className={el(eu, es, "min-w-0 truncate")}>{e.uploader}</span></div><time className={el("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "hidden w-24 sm:block")}>{e.date}</time><span className={el("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", "review" === e.status ? "text-[oklch(49%_0.1_68)] dark:text-[oklch(80%_0.13_68)]" : "text-neutral-900/78 dark:text-neutral-100/78", "w-24 shrink-0 sm:w-32")}>{"review" === e.status ? "Needs review" : "Approved"}</span></label></li>;
                })}</ul>}</div><div aria-hidden="true" className={el("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 z-10 h-8", u.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={el("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8", u.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "list-6": function () {
      let [e, r] = (0, React.useState)("all"),
        [a, l] = (0, React.useState)("all"),
        [o, s] = (0, React.useState)(null),
        d = eD.filter(r => ("all" === e || r.outcome === e) && ("all" === a || r.host === a)),
        c = (e, a) => {
          if (r(e), l(a), o) {
            let r = eD.find(e => e.id === o);
            r && ("all" === e || r.outcome === e) && ("all" === a || r.host === a) || s(null);
          }
        };
      return <div className={eN("bg-white dark:bg-neutral-950", ez, "flex h-full min-h-[740px] w-full flex-col justify-center-safe overflow-y-auto p-8 sm:p-10")}><div className="mx-auto w-full max-w-[720px] shrink-0"><header className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-3"><div className="min-w-0"><h2 className={eN("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", ez)}>Webhook deliveries</h2><p className={eN(eS, eA, "mt-0.5 truncate")}>Outbound attempts to your customer endpoints</p></div><div className="flex max-w-full min-w-0 flex-wrap items-center gap-2"><eW value={a} onChange={r => c(e, r)} options={eP} ariaLabel="Filter by destination endpoint" /><div role="radiogroup" aria-label="Filter by delivery outcome" onKeyDown={eE} className={eN("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{eO.map(r => {
                  let n = e === r.id;
                  return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => c(r.id, a)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{r.label}</button>;
                })}</div></div></header>{0 === d.length ? <div className={eN(eM, "shrink-0 items-center px-6 py-16 text-center")}><div className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_81515.A} size={20} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No deliveries to show</p><p className={eN("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>No attempts match this outcome and endpoint. Reset the filters to see every delivery.</p><button type="button" onClick={() => c("all", "all")} className={eN(eC, eR, "mt-4")}>Show all deliveries</button></div> : <ul className={eN(eM, "divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "shrink-0 p-2")}>{d.map(e => {
              let r = o === e.id,
                a = "failed" === e.outcome;
              return <li className="overflow-hidden"><button type="button" aria-expanded={r} aria-controls={`delivery-${e.id}`} onClick={() => s(r ? null : e.id)} className={eN("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", eT, "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group h-[56px] px-2")}><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className={eN("font-mono text-[12px]/[16px] tabular-nums", ez, "block truncate")}>{e.event}</span><span data-description={!0} className={eN(eS, eA, "block truncate")}><span>{e.host}</span><span className="ms-3">attempt {e.attempt}</span></span></span><span className="shrink-0 text-right"><span className={eN("inline-flex items-start gap-1 text-[14px]/[20px] font-bold tabular-nums", a ? "text-[oklch(51%_0.18_26)] dark:text-[oklch(76%_0.14_26)]" : "text-neutral-900/78 dark:text-neutral-100/78")}>{e.status}</span><span className={eN("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "mt-0.5 block")}>{e.duration}</span></span><span className="flex size-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span></button><div id={`delivery-${e.id}`} className="grid" style={{
                  gridTemplateRows: r ? "1fr" : "0fr"
                }}><div hidden={!r} className="overflow-hidden"><div className="space-y-3 px-2 pt-1 pb-3"><eB label="Request" body={e.request} /><eB label="Response" body={e.response} /><div className="flex justify-end"><button type="button" className={eN(eC, eR)}><__mod_22728.n icon={__mod_59157.A} size={18} strokeWidth={2} aria-hidden="true" className={eA} />Replay delivery</button></div></div></div></div></li>;
            })}</ul>}</div></div>;
    },
    "list-7": function () {
      let [e, r] = (0, React.useState)(""),
        [a, l] = (0, React.useState)("All categories"),
        {
          ref: o,
          edges: s,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = e.trim().toLowerCase(),
        b = eQ.filter(e => {
          let r = !x || e.name.toLowerCase().includes(x) || e.category.toLowerCase().includes(x),
            t = "All categories" === a || e.category === a;
          return r && t;
        });
      return <div className={eI("bg-white dark:bg-neutral-950", eH, "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-6 sm:p-8")}><div className="mx-auto flex h-full w-full max-w-[1100px] flex-col"><div className={eI("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-[inset_0_0_0_1px_rgb(84_62_32/0.05)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.05)]", "min-h-0 flex-1")}><div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><h2 className={eI("text-[17px]/[22px] font-extrabold", eH)}>Suppliers</h2><p className={eI(eK, eq, "mt-0.5 tabular-nums")}>{b.length} of {eQ.length} suppliers</p></div><div className="flex items-center gap-2"><div className={eI("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10", "flex-1 sm:w-64 sm:flex-none")}><span data-affix={!0} className={eV}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" /></span><input type="text" value={e} onChange={e => r(e.target.value)} placeholder="Search name or category" aria-label="Search suppliers" className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /><span data-affix={!0} className={eV}>{e ? <button type="button" onClick={() => r("")} aria-label="Clear search" className={eI("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-7 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_89289.A} size={16} strokeWidth={2} aria-hidden="true" /></button> : <kbd aria-hidden="true" className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">⌘K</kbd>}</span></div><div className="shrink-0"><eZ value={a} onChange={l} options={eJ} ariaLabel="Filter by category" /></div></div></div><div className={eI(eX, "text-[13px]/[16px] font-semibold tabular-nums", eq, "px-4 pb-2")}><span>Supplier</span><span className="hidden md:block">Category</span><span>Contract</span><span className="text-right">Spend</span></div>{0 === b.length ? <div className={eI(eY, "flex-1 items-center justify-center px-6 py-12 text-center")}><div className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} aria-hidden="true" className={eF} /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No suppliers found</p><p className={eI("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Nothing matches <span className={eH}>“{e || a}”</span>. Try a different name or category.</p><button type="button" onClick={() => {
                r(""), l("All categories");
              }} className={eI("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Clear search</button></div> : <div className={eI(eY, "relative min-h-0 flex-1")}><div ref={o} onScroll={d} style={{
                touchAction: "pan-y"
              }} className={eI("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "flex h-full flex-col overflow-y-auto p-1")}>{b.map(r => {
                  let a = 0 === parseFloat(r.delta);
                  return <div className={eI("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "h-16 shrink-0 px-2")}><div className={eI(eX, "w-full")}><div className="flex min-w-0 items-center gap-3"><span aria-hidden="true" className={eI("relative inline-flex size-8 shrink-0 overflow-hidden rounded-[calc(var(--rb-r-lg,10px))] select-none", "size-10")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.initials}</span></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={eI(eU, eH, "truncate")}>{function (e, r) {
                              let a = r.trim();
                              if (!a) return e;
                              let i = e.toLowerCase(),
                                l = a.toLowerCase(),
                                o = [],
                                s = 0,
                                d = i.indexOf(l, s),
                                c = 0;
                              for (; -1 !== d;) d > s && o.push(e.slice(s, d)), o.push(<mark className={eI("bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]", eH, "rounded-[var(--rb-r-sm,6px)]")}>{e.slice(d, d + l.length)}</mark>), s = d + l.length, d = i.indexOf(l, s);
                              return s < e.length && o.push(e.slice(s)), o.map((e, r) => <>{e}</>);
                            }(r.name, e)}</p><p data-description={!0} className={eI(eK, eq, "truncate")}><span>{r.location}</span><span className="ms-3">{r.since}</span></p></div></div><span className={eI(eK, eF, "hidden truncate md:block")}>{r.category}</span><span className={eI("inline-flex items-start gap-1.5 text-[15px]/[20px] font-bold tabular-nums", eG[r.contract], "min-w-0")}><span className="truncate">{r.contractLabel}</span></span><span className="text-right"><span className={eI(eU, eH, "block tabular-nums")}>{r.spend}</span><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78"><__mod_22728.n icon={a ? __mod_5042.A : r.up ? __mod_1497.A : __mod_37502.A} size={14} strokeWidth={2} aria-hidden="true" /><span className="sr-only">{a ? "No change" : r.up ? "Up" : "Down"}</span>{r.delta} YoY</span></span></div></div>;
                })}</div><div aria-hidden="true" className={eI("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eI("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", s.end ? "opacity-100" : "opacity-0")} /></div>}</div></div></div>;
    },
    "list-8": function () {
      let [e, r] = (0, React.useState)("all"),
        [a, l] = (0, React.useState)(() => new Set(ro)),
        [o, s] = (0, React.useState)(() => new Set()),
        [d, c] = (0, React.useState)(() => new Set()),
        [_, u] = (0, React.useState)(null),
        x = (0, React.useRef)(null),
        b = (0, React.useRef)(null),
        {
          ref: p,
          edges: h,
          onScroll: m
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }();
      (0, React.useEffect)(() => () => {
        x.current && clearTimeout(x.current), b.current && clearTimeout(b.current);
      }, []);
      let k = rl.filter(e => !o.has(e.id) && !a.has(e.id)).length,
        f = rl.filter(r => !(o.has(r.id) || "unread" === e && a.has(r.id) && !d.has(r.id))),
        g = 0 === f.length && "all" === e,
        v = 0 === f.length && "unread" === e;
      return <div className={e9("bg-white dark:bg-neutral-950", e3, "flex h-full min-h-[560px] w-full flex-col overflow-hidden p-8 sm:p-10")}><div className="mx-auto flex h-full w-full max-w-[720px] flex-col"><header className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-3"><div className="min-w-0"><h2 className={e9("text-[22px]/[28px] font-extrabold tracking-[-0.01em]", e3)}>Inbox</h2><p className={e9(re, e7, "mt-0.5 tabular-nums")}>{k > 0 ? `${k} unread` : "You're all caught up"}</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => l(() => new Set(rl.map(e => e.id)))} disabled={0 === k} className={e9(ra, rt)}>Mark all read</button><div role="radiogroup" aria-label="Filter notifications" onKeyDown={rs} className={e9("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{["all", "unread"].map(a => {
                  let n = e === a;
                  return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a)} className={e9("relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40", "capitalize")}>{a}</button>;
                })}</div></div></header><div className="relative min-h-0 flex-1">{g || v ? <div className={e9(ri, "h-full items-center justify-center px-6 text-center")}><div className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_22830.A} size={20} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">{v ? "No unread messages" : "Inbox zero"}</p><p className={e9("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>{v ? "Everything here has been read. Switch to all to see the full history." : "You've archived everything. Restore a message to bring it back."}</p><button type="button" onClick={() => v ? r("all") : s(new Set())} className={e9(ra, rt, "mt-4")}>{v ? "View all" : "Restore archived"}</button></div> : <div className={e9(ri, "relative h-full")}><ul ref={p} onScroll={m} style={{
                touchAction: "pan-y"
              }} className={e9("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "h-full overflow-y-auto p-2")}>{f.map(e => {
                  let r = a.has(e.id),
                    n = d.has(e.id);
                  return <li hidden={n} className="grid"><div className="overflow-hidden"><div className={e9("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", "group px-2 py-2 has-[[data-description]]:min-h-16")}>{!r && <span className="sr-only">Unread</span>}<span aria-hidden="true" className={e9("flex size-9 shrink-0 items-center justify-center text-neutral-900/78 dark:text-neutral-100/78", "size-10")}><__mod_22728.n icon={e.icon} size={18} strokeWidth={2} className={r ? e7 : void 0} /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={e9("text-[15px]/[20px] font-bold", r ? e7 : e3, "truncate")}>{e.title}</p><p data-description={!0} className={r ? e9(re, e7, "line-clamp-2") : "line-clamp-2 text-[14px]/[20px] font-medium text-neutral-900/78 dark:text-neutral-100/78"}>{e.preview}</p></div><time className={e9("shrink-0 text-[14px]/[20px] font-semibold tabular-nums text-neutral-900/62 dark:text-neutral-100/62", "self-start pt-0.5")}>{e.time}</time><div className={e9("flex items-center justify-end gap-0.5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-[180ms]", "shrink-0")}><button type="button" onClick={() => {
                            let r;
                            return r = e.id, l(e => {
                              let a = new Set(e);
                              return a.has(r) ? a.delete(r) : a.add(r), a;
                            });
                          }} aria-label={r ? "Mark as unread" : "Mark as read"} className={e9(rr, rn)}><__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" aria-label="Snooze" className={e9(rr, rn)}><__mod_22728.n icon={__mod_29635.A} size={18} strokeWidth={2} aria-hidden="true" /></button><button type="button" onClick={() => {
                            var r;
                            return r = e.id, void (x.current && clearTimeout(x.current), c(e => new Set(e).add(r)), b.current && clearTimeout(b.current), b.current = setTimeout(() => {
                              s(e => new Set(e).add(r)), c(e => {
                                let a = new Set(e);
                                return a.delete(r), a;
                              });
                            }, 200), u(r), x.current = setTimeout(() => u(null), 5e3));
                          }} aria-label="Archive" className={e9(rr, rn)}><__mod_22728.n icon={__mod_22670.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div></div></div></li>;
                })}</ul><div aria-hidden="true" className={e9("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", h.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={e9("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", h.end ? "opacity-100" : "opacity-0")} /></div>}<div aria-live="polite" className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3">{_ && <div><div className={e9("pointer-events-auto grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3 overflow-hidden rounded-[calc(var(--rb-r-3xl,16px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] py-3.5 ps-4 pe-2 text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-[0.94] starting:opacity-0 motion-reduce:transition-none motion-reduce:starting:scale-100", "h-10 py-[7px]")}><span className={e9("text-[15px]/[20px] font-extrabold", "self-center")}>Message archived</span><button type="button" onClick={() => {
                    _ && (x.current && clearTimeout(x.current), b.current && clearTimeout(b.current), s(e => {
                      let r = new Set(e);
                      return r.delete(_), r;
                    }), c(e => {
                      let r = new Set(e);
                      return r.delete(_), r;
                    }), u(null));
                  }} className={e9(ra, "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums")}>Undo</button></div></div>}</div></div></div></div>;
    },
    "list-9": function () {
      let [e, r] = (0, React.useState)("all"),
        [a, l] = (0, React.useState)("A"),
        {
          ref: o,
          edges: s,
          onScroll: d
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        c = (0, React.useRef)({}),
        _ = (0, React.useRef)(null),
        u = (0, React.useRef)(!1),
        x = (0, React.useMemo)(() => {
          let r = "all" === e ? rf : rf.filter(r => r.kind === e),
            a = new Map();
          for (let e of r) {
            let r = e.last[0].toUpperCase();
            (a.get(r) ?? a.set(r, []).get(r)).push(e);
          }
          return [...a.entries()].map(([e, r]) => ({
            letter: e,
            people: r.sort((e, r) => e.last.localeCompare(r.last))
          })).sort((e, r) => e.letter.localeCompare(r.letter));
        }, [e]),
        b = (0, React.useMemo)(() => new Set(x.map(e => e.letter)), [x]),
        p = (0, React.useMemo)(() => x.reduce((e, r) => e + r.people.length, 0), [x]),
        h = (0, React.useCallback)(e => {
          let r = o.current,
            a = c.current[e];
          r && a && (r.scrollTop = a.getBoundingClientRect().top - r.getBoundingClientRect().top + r.scrollTop);
        }, [o]),
        m = (0, React.useCallback)(() => {
          let e = o.current;
          if (!e) return;
          let r = e.getBoundingClientRect().top,
            a = x[0]?.letter ?? "A";
          for (let e of x) {
            let t = c.current[e.letter];
            if (t) if (t.getBoundingClientRect().top - r <= 12) a = e.letter;else break;
          }
          l(a);
        }, [x, o]);
      (0, React.useEffect)(() => {
        let e = requestAnimationFrame(m);
        return () => cancelAnimationFrame(e);
      }, [m]);
      let k = (0, React.useCallback)(e => {
          let r = _.current;
          if (!r) return null;
          let a = r.getBoundingClientRect(),
            t = (e - a.top) / a.height,
            n = Math.max(0, Math.min(rk.length - 1, Math.floor(t * rk.length)));
          return rk[n];
        }, []),
        f = (0, React.useCallback)(e => {
          let r = k(e);
          r && b.has(r) && h(r);
        }, [k, b, h]);
      return <div className={r_("bg-white dark:bg-neutral-950", rx, "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-8 sm:p-10")}><div className="mx-auto flex h-full w-full max-w-[720px] flex-col"><div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={r_("text-[17px]/[22px] font-extrabold", rx)}>Account contacts</h2><p className={r_(rp, rb, "mt-0.5 tabular-nums")}>{p} {1 === p ? "person" : "people"} across your book</p></div><div role="radiogroup" aria-label="Filter by relationship" onKeyDown={rv} className={r_("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10", "shrink-0")}>{rg.map(a => {
                let n = a.id === e;
                return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a.id)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{a.label}</button>;
              })}</div></div><div className={r_("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "relative min-h-0 flex-1")}>{0 === x.length ? <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center"><div className="mb-3 flex h-10 w-10 items-center justify-center"><__mod_22728.n icon={__mod_88366.A} size={20} strokeWidth={2} aria-hidden="true" className="text-neutral-900/78 dark:text-neutral-100/78" /></div><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No contacts in this view</p><p className={r_("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1")}>Nobody in your book matches this relationship yet.</p><button type="button" onClick={() => r("all")} className={r_(rm, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "mt-4")}>Show everyone</button></div> : <div ref={o} onScroll={() => {
              d(), m();
            }} style={{
              touchAction: "pan-y",
              scrollbarWidth: "none"
            }} className="min-h-0 flex-1 space-y-2 overflow-y-auto pt-1 pr-8 pb-2 pl-2 [&::-webkit-scrollbar]:hidden">{x.map(e => <div ref={r => {
                c.current[e.letter] = r;
              }}><div className={r_("bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", rh, rb, "sticky top-0 z-20 px-3 pb-1 pt-1")}>{e.letter}</div><div className="divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7">{e.people.map(e => <div className={r_("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", ru, "h-14 px-3")}><span aria-hidden="true" className={r_("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-10")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{`${e.first[0]}${e.last[0]}`}</span></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{e.first} {e.last}</span></p><p data-description={!0} className={r_(rp, rb, "truncate")}><span>{e.role}</span><span className="ms-3">{e.company}</span></p></div><button type="button" aria-label={`Email ${e.first} ${e.last}`} className={r_(rm, "size-8 rounded-[calc(var(--rb-r-full,999px))]")}><__mod_22728.n icon={__mod_67812.A} size={18} strokeWidth={2} aria-hidden="true" /></button></div>)}</div></div>)}</div>}<div aria-hidden="true" className={r_("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 z-10 h-8", s.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r_("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8", s.end ? "opacity-100" : "opacity-0")} />{x.length > 0 && <div ref={_} role="navigation" aria-label="Jump to letter" onPointerDown={e => {
              u.current = !0, e.currentTarget.setPointerCapture(e.pointerId), f(e.clientY);
            }} onPointerMove={e => {
              u.current && f(e.clientY);
            }} onPointerUp={e => {
              u.current = !1, e.currentTarget.releasePointerCapture(e.pointerId);
            }} style={{
              touchAction: "none"
            }} className="absolute inset-y-2 right-2.5 z-20 flex w-4 select-none flex-col items-center justify-between">{rk.map(e => {
                let r = b.has(e),
                  n = e === a && r;
                return r ? <button type="button" aria-label={`Jump to ${e}`} onClick={() => h(e)} className={r_(rh, n ? rx : rb, ru, "rounded-[var(--rb-r-sm,6px)]", "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "flex size-4 items-center justify-center")}>{e}</button> : <span aria-hidden="true" className={r_(rh, "text-neutral-900/40 dark:text-neutral-100/40")}>{e}</span>;
              })}</div>}</div></div></div>;
    },
    "list-10": function () {
      let [e, r] = (0, React.useState)(() => rS.map(() => !1)),
        {
          ref: a,
          edges: l,
          onScroll: o
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        s = e.filter(Boolean).length,
        d = s === rS.length,
        c = Math.round(s / rS.length * 100),
        _ = r => 0 === r || e[r - 1];
      return <div className={ry("bg-white dark:bg-neutral-950", rj, "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-8 sm:p-10")}><div className="mx-auto flex h-full w-full max-w-[720px] flex-col"><div className="mb-4 shrink-0"><h2 className={ry("text-[17px]/[22px] font-extrabold", rj)}>Checkout latency spike: SEV2</h2><p className={ry(rz, rN, "mt-1")}>Incident runbook</p><div className="mt-3 flex min-h-[36px] items-center">{d ? <div className="flex w-full items-center gap-2.5"><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_20484.A} size={18} strokeWidth={2} className="text-neutral-900/78 dark:text-neutral-100/78" /></span><p className={ry(rz, rj, "min-w-0 flex-1 truncate")} role="status">All steps complete: incident resolved.</p><button type="button" onClick={() => r(rS.map(() => !1))} className={ry(rA, "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold", "shrink-0")}>Reset runbook</button></div> : <div className="w-full"><div className="flex items-center justify-between gap-3"><div className={ry("relative block h-2.5 w-full overflow-hidden rounded-[calc(var(--rb-r-full,999px))] bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] shadow-[inset_0_1px_2px_rgb(84_62_32/0.12)] dark:bg-neutral-100/12 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]", "h-1.5")} role="progressbar" aria-valuenow={s} aria-valuemin={0} aria-valuemax={rS.length} aria-label="Runbook progress"><div className="block h-full rounded-[calc(var(--rb-r-full,999px))] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_82%,black)] shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none dark:bg-[var(--rb-accent,oklch(81%_0.16_163))]" style={{
                      width: `${c}%`
                    }} /></div><span className={ry(rz, rN, "shrink-0 tabular-nums")}>{s} of {rS.length} steps complete</span></div></div>}</div></div><div className={ry("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "relative min-h-0 flex-1")}><div ref={a} onScroll={o} style={{
              touchAction: "pan-y"
            }} className={ry("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "min-h-0 flex-1 overflow-y-auto p-2")}>{rS.map((a, n) => {
                let l = e[n],
                  o = _(n);
                return <div aria-disabled={!o} className={ry("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", !l && "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", !o && "cursor-not-allowed", "h-14 px-2")}><span className="relative inline-flex size-[18px] shrink-0 items-center justify-center"><input type="checkbox" checked={l} disabled={!o} aria-label={`Mark step ${n + 1} ${l ? "incomplete" : "complete"}: ${a.title}`} onChange={() => {
                      _(n) && r(e => {
                        let r = [...e],
                          a = !r[n];
                        if (r[n] = a, !a) for (let e = n + 1; e < r.length; e++) r[e] = !1;
                        return r;
                      });
                    }} className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--rb-r-sm,6px))] border-2 border-neutral-900/28 bg-white transition-[background-color,border-color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.86] motion-reduce:active:scale-100 hover:not-checked:not-disabled:border-neutral-900/60 active:not-checked:bg-neutral-900/8 checked:border-transparent checked:bg-[var(--rb-accent,oklch(84%_0.15_165))] indeterminate:border-transparent indeterminate:bg-[var(--rb-accent,oklch(84%_0.15_165))] checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] indeterminate:shadow-[inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-1.5px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:border-neutral-900/20 disabled:checked:bg-neutral-900/25 disabled:checked:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:border-neutral-100/34 dark:bg-neutral-900 dark:hover:not-checked:not-disabled:border-neutral-100/70 dark:active:not-checked:bg-neutral-100/10 dark:checked:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:indeterminate:bg-[var(--rb-accent,oklch(81%_0.16_163))] dark:checked:shadow-none dark:indeterminate:shadow-none dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:border-neutral-100/24 dark:disabled:checked:bg-neutral-100/28" /><__mod_22728.n icon={__mod_90987.A} size={14} strokeWidth={2.5} aria-hidden="true" className="pointer-events-none absolute scale-50 text-[var(--rb-accent-fg,oklch(26%_0.06_168))] opacity-0 transition-[opacity,scale] duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:scale-100 peer-checked:opacity-100 peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-active:scale-[0.86] motion-reduce:transition-none dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))]" /></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className={ry("text-[15px]/[20px] font-bold", l || !o ? rN : rj, l && "line-through", "truncate")}>{a.title}</p><p data-description={!0} className={ry(rz, rN, "truncate tabular-nums")}><span>{a.owner}</span><span className="ms-3">{a.duration}</span></p></div><a href="#" aria-label={`Open runbook for: ${a.title}`} className={ry(rA, "h-8 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3.5 text-[14px]/[18px] font-bold", "shrink-0")}>Runbook<__mod_22728.n icon={__mod_52975.A} size={18} strokeWidth={2} aria-hidden="true" /></a></div>;
              })}</div><div aria-hidden="true" className={ry("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", l.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={ry("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", l.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    },
    "list-11": function () {
      let [e, r] = (0, React.useState)("resolved"),
        [a, l] = (0, React.useState)("w"),
        [o, s] = (0, React.useState)(null),
        {
          ref: d,
          edges: c,
          onScroll: _
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        u = (0, React.useMemo)(() => rJ(a, e, !1), [a, e]),
        x = (0, React.useMemo)(() => rJ(a, e, !0), [a, e]),
        b = (0, React.useMemo)(() => Math.max(...r$.map(e => rV(e, a).r)), [a]),
        p = (0, React.useMemo)(() => {
          let e = r$.reduce((e, r) => e + rV(r, a).r, 0);
          return {
            resolved: e,
            rt: r$.reduce((e, r) => e + rV(r, a).rt, 0) / r$.length,
            cs: rK(r$.reduce((e, r) => e + rV(r, a).cs, 0) / r$.length)
          };
        }, [a]);
      return <div className={rM("bg-white dark:bg-neutral-950", rT, "flex h-full min-h-[640px] w-full flex-col overflow-hidden p-6 sm:p-8")}><div className="mx-auto flex h-full w-full max-w-[1100px] flex-col"><div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={rM("text-[17px]/[22px] font-extrabold", rT)}>Support leaderboard</h2><p className={rM(rP, rO, "mt-0.5")}>Ranked by conversations resolved</p></div><div className="flex max-w-full min-w-0 flex-wrap items-center gap-2"><div role="radiogroup" aria-label="Sort by" onKeyDown={rX} className={rM(rW, rB)}>{rI.map(a => {
                  let n = a.id === e;
                  return <button type="button" role="radio" aria-checked={n} tabIndex={n ? 0 : -1} onClick={() => r(a.id)} className={rL}>{a.label}</button>;
                })}</div><div role="radiogroup" aria-label="Period" onKeyDown={rX} className={rM(rW, rB)}>{rH.map(e => {
                  let r = e.id === a;
                  return <button type="button" role="radio" aria-checked={r} tabIndex={r ? 0 : -1} onClick={() => l(e.id)} className={rL}>{e.label}</button>;
                })}</div></div></div><div className={rM("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1")}><div className={rM(rE, rG, "grid shrink-0 items-center gap-3 px-4 py-2")}><rQ>#</rQ><rQ>Trend</rQ><rQ>Agent</rQ><rQ right={!0} className={"resolved" !== e && "max-sm:hidden"}>Resolved</rQ><rQ right={!0} className={"response" !== e && "max-sm:hidden"}>Median FRT</rQ><rQ right={!0} className={"csat" !== e && "max-sm:hidden"}>CSAT</rQ></div><div className="relative min-h-0 flex-1"><div ref={d} onScroll={_} style={{
                touchAction: "pan-y"
              }} className="h-full overflow-y-auto"><div className="relative" style={{
                  height: 64 * r$.length
                }}>{r$.map(r => {
                    let n = u[r.id],
                      l = x[r.id] - n,
                      d = rV(r, a),
                      c = rY(r, a),
                      _ = n <= 3,
                      p = Math.round(d.r / b * 100),
                      h = o === r.id,
                      m = c[rF[e]],
                      k = "resolved" === e ? `${m > 0 ? "+" : "−"}${Math.abs(m)} resolved` : "response" === e ? `${m > 0 ? "+" : "−"}${Math.abs(m)}s response` : `${m > 0 ? "+" : "−"}${Math.abs(rK(m))} CSAT`;
                    return <div style={{
                      transform: `translateY(${(n - 1) * 64}px)`,
                      zIndex: h ? 10 : 1
                    }} className="absolute inset-x-0 top-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none"><div onPointerEnter={() => s(r.id)} onPointerLeave={() => s(e => e === r.id ? null : e)} className={rM("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6", n < r$.length && rE, "h-16 overflow-hidden")}><div aria-hidden="true" className={rM("bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)]", "rounded-[var(--rb-r-4xl,18px)]", "pointer-events-none absolute inset-y-1.5 left-1.5")} style={{
                          width: `max(0px, calc(${p}% - 12px))`
                        }} /><div className={rM(rG, "relative z-10 grid w-full items-center gap-3 px-4")}><span className={rM(rP, _ ? rT : rO, "tabular-nums")}>{n}</span><span className="inline-flex min-w-0 flex-wrap items-baseline gap-x-1 text-[13px]/[18px] font-bold tabular-nums [&>svg]:self-center text-neutral-900/78 dark:text-neutral-100/78">{l > 0 ? <><__mod_22728.n icon={__mod_40972.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="sr-only">Up</span>{l}</> : l < 0 ? <><__mod_22728.n icon={__mod_54345.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="sr-only">Down</span>{Math.abs(l)}</> : <><__mod_22728.n icon={__mod_99199.A} size={16} strokeWidth={2} aria-hidden="true" /><span className="sr-only">No change</span></>}</span><div className="flex min-w-0 items-center gap-3"><span aria-hidden="true" className={rM("relative inline-flex size-8 shrink-0 overflow-hidden rounded-full select-none", "size-10")}><span className="flex size-full items-center justify-center rounded-[inherit] bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_24%,white)] text-[12px]/[16px] font-extrabold tabular-nums text-neutral-900 dark:text-neutral-100 dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_22%,var(--color-neutral-900))]">{r.initials}</span></span><div className="flex min-w-0 flex-1 flex-col gap-0.5"><p className="flex max-w-full min-w-0 items-baseline gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100"><span className="truncate">{r.name}</span></p><p data-description={!0} className={rM(rP, rO, "flex items-center gap-3 truncate")}><span className="truncate">{r.team}</span><span className={rM("transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]", "shrink-0 tabular-nums max-sm:hidden", h ? "opacity-100" : "opacity-0")}>{k} vs last</span></p></div></div><span className={rM(rP, rT, "resolved" !== e && "max-sm:hidden", "text-right tabular-nums")}>{d.r}</span><span className={rM(rP, rD, "response" !== e && "max-sm:hidden", "text-right tabular-nums")}>{rU(d.rt)}</span><span className={rM(rP, rD, "csat" !== e && "max-sm:hidden", "text-right tabular-nums")}>{d.cs.toFixed(1)}</span></div></div></div>;
                  })}</div></div><div aria-hidden="true" className={rM("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={rM("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div><div className={rM("border-t border-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:border-neutral-100/7", rG, "grid shrink-0 items-center gap-3 px-4 py-2.5")}><span className={rM("text-[13px]/[16px] font-bold tabular-nums", rT, "col-span-3 flex gap-3")}><span>Team totals</span><span>{r$.length} agents</span></span><span className={rM(rP, rT, "resolved" !== e && "max-sm:hidden", "text-right tabular-nums")}>{p.resolved.toLocaleString("en-US")}</span><span className={rM(rP, rO, "response" !== e && "max-sm:hidden", "text-right tabular-nums")}>{rU(p.rt)}</span><span className={rM(rP, rO, "csat" !== e && "max-sm:hidden", "text-right tabular-nums")}>{p.cs.toFixed(1)}</span></div></div></div></div>;
    },
    "list-12": function () {
      let [e, r] = (0, React.useState)(() => new Set(["src", "components"])),
        [a, l] = (0, React.useState)(null),
        [o, s] = (0, React.useState)(r7[0].id),
        {
          ref: d,
          edges: c,
          onScroll: _
        } = function () {
          let e = (0, React.useRef)(null),
            [r, a] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            t = (0, React.useCallback)(() => {
              let r = e.current;
              if (!r) return;
              let {
                scrollTop: t,
                scrollHeight: n,
                clientHeight: i
              } = r;
              a({
                start: t > 1,
                end: Math.ceil(t + i) < n - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            t();
            let r = e.current,
              a = r?.ownerDocument.defaultView;
            if (!r || !a?.ResizeObserver) return;
            let n = new a.ResizeObserver(t);
            return n.observe(r), () => n.disconnect();
          }, [t]), {
            ref: e,
            edges: r,
            onScroll: t
          };
        }(),
        x = (0, React.useRef)({}),
        b = (0, React.useRef)(!1),
        p = (0, React.useMemo)(() => function e(r, a, t = 0, n = null, i = []) {
          for (let [l, o] of r.entries()) {
            let s = "folder" === o.type;
            i.push({
              node: o,
              depth: t,
              parentId: n,
              hasChildren: s && o.children.length > 0,
              posInSet: l + 1,
              setSize: r.length
            }), s && a.has(o.id) && e(o.children, a, t + 1, o.id, i);
          }
          return i;
        }(r7, e), [e]),
        h = p.findIndex(e => e.node.id === o),
        m = -1 === h ? 0 : h,
        k = p[m]?.node.id ?? r7[0].id;
      (0, React.useEffect)(() => {
        b.current && (b.current = !1, x.current[k]?.focus({
          preventScroll: !0
        }));
      });
      let f = () => {
          b.current = !0;
        },
        g = e => r(r => {
          let a = new Set(r);
          return a.has(e) ? a.delete(e) : a.add(e), a;
        }),
        v = e => {
          s(e.node.id), "folder" === e.node.type ? g(e.node.id) : l(e.node.id);
        };
      return <div className={r8("bg-white dark:bg-neutral-950", r6, "flex h-full min-h-[700px] w-full flex-col overflow-hidden p-8 sm:p-10")}><div className="mx-auto flex h-full w-full max-w-[720px] flex-col"><div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3"><div className="min-w-0"><h2 className={r8("text-[17px]/[22px] font-extrabold", r6)}>Repository</h2><p className={r8("text-[14px]/[20px] font-medium", r5, "mt-0.5 truncate")}><span>acme/web</span><span className="ms-3">main</span></p></div><div className="flex shrink-0 items-center gap-1"><button type="button" onClick={() => r(new Set(ar))} className={r8(r4, r9)}>Expand all</button><button type="button" onClick={() => {
                r(new Set()), s(r7[0].id);
              }} className={r8(r4, r9)}>Collapse all</button></div></div><div className={r8("relative flex min-w-0 flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-white dark:bg-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))] text-neutral-900 dark:text-neutral-100 shadow-[0_0_0_1px_rgb(84_62_32/0.07),0_1px_2px_rgb(84_62_32/0.06),0_8px_22px_-10px_rgb(84_62_32/0.20)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_0_0_1px_rgb(0_0_0/0.6),0_10px_24px_-12px_rgb(0_0_0/0.8)]", "min-h-0 flex-1")}><div ref={d} onScroll={_} style={{
              touchAction: "pan-y"
            }} className="min-h-0 flex-1 overflow-y-auto p-2"><div role="tree" aria-label="Repository files" onKeyDown={r => {
                let a,
                  t = p[m];
                if (!t) return;
                let n = "folder" === t.node.type,
                  i = n && (a = t.node.id, e.has(a));
                switch (r.key) {
                  case "ArrowDown":
                    r.preventDefault(), s(p[Math.min(m + 1, p.length - 1)].node.id), f();
                    break;
                  case "ArrowUp":
                    r.preventDefault(), s(p[Math.max(m - 1, 0)].node.id), f();
                    break;
                  case "ArrowRight":
                    if (r.preventDefault(), n && !i && t.hasChildren) g(t.node.id);else if (i) {
                      let e = p[m + 1];
                      e && e.parentId === t.node.id && (s(e.node.id), f());
                    }
                    break;
                  case "ArrowLeft":
                    r.preventDefault(), i ? g(t.node.id) : t.parentId && (s(t.parentId), f());
                    break;
                  case "Home":
                    r.preventDefault(), s(p[0].node.id), f();
                    break;
                  case "End":
                    r.preventDefault(), s(p[p.length - 1].node.id), f();
                    break;
                  case "Enter":
                  case " ":
                    r.preventDefault(), v(t);
                }
              }}>{p.map(r => {
                  let n,
                    {
                      node: l,
                      depth: o
                    } = r,
                    s = "folder" === l.type,
                    d = s && (n = l.id, e.has(n)),
                    c = l.id === k,
                    _ = l.id === a,
                    b = s ? d ? __mod_56328.A : __mod_8051.A : ae[l.kind];
                  return <div ref={e => {
                    x.current[l.id] = e;
                  }} role="treeitem" aria-level={o + 1} aria-posinset={r.posInSet} aria-setsize={r.setSize} aria-expanded={s ? d : void 0} aria-selected={s ? void 0 : _} tabIndex={c ? 0 : -1} onClick={() => v(r)} style={{
                    paddingLeft: 8 + 16 * o
                  }} className={r8("relative flex min-h-12 w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-left text-neutral-900 dark:text-neutral-100 transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] has-[[data-description]]:min-h-16", "rounded-[var(--rb-r-4xl,18px)]", _ ? "bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] dark:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)]" : "cursor-pointer hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] dark:hover:bg-neutral-100/6 active:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] dark:active:bg-neutral-100/10", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))]", "group h-11 cursor-pointer gap-x-[6px] pr-2")}>{Array.from({
                      length: o
                    }, (e, r) => <span aria-hidden="true" className={r8("border-r border-transparent", "pointer-events-none absolute top-0 bottom-0")} style={{
                      left: 8 + 16 * r + 8
                    }} />)}{s ? <span aria-hidden="true" className="flex h-4 w-4 shrink-0 items-center justify-center"><__mod_22728.n icon={__mod_5042.A} size={14} strokeWidth={2} className="shrink-0 text-neutral-900/62 dark:text-neutral-100/62 transition-transform duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none group-aria-expanded:rotate-90" /></span> : <span aria-hidden="true" className="h-4 w-4 shrink-0" />}<__mod_22728.n icon={b} size={18} strokeWidth={2} aria-hidden="true" className={r8(r5, "shrink-0")} /><span className={r8("text-[15px]/[20px] font-bold", r6, "min-w-0 flex-1 truncate")}>{l.name}</span>{s ? !d && <span className={r3}>{l.children.length} {1 === l.children.length ? "item" : "items"}</span> : <span className={r3}>{l.size}</span>}</div>;
                })}</div></div><div aria-hidden="true" className={r8("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 top-0 h-8", c.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={r8("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-[color-mix(in_oklab,var(--color-neutral-900)_74%,var(--color-neutral-800))]", "pointer-events-none absolute inset-x-0 bottom-0 h-8", c.end ? "opacity-100" : "opacity-0")} /></div></div></div>;
    }
  },
  at = {
    "list-1": 560,
    "list-2": 640,
    "list-3": 640,
    "list-4": 700,
    "list-5": 640,
    "list-6": 740,
    "list-7": 640,
    "list-8": 560,
    "list-9": 640,
    "list-10": 640,
    "list-11": 640,
    "list-12": 700
  };

export { aa as components };
export { at as heights };
