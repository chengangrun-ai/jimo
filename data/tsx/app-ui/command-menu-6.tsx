import * as __mod_29635 from "../_helpers/29635";
import * as __mod_57854 from "../_helpers/57854";
import * as __mod_31964 from "../_helpers/31964";
import * as __mod_88366 from "../_helpers/88366";
import * as __mod_29719 from "../_helpers/29719";
import * as __mod_44647 from "../_helpers/44647";
import * as __mod_52038 from "../_helpers/52038";
import * as __mod_79698 from "../_helpers/79698";
import * as __mod_5642 from "../_helpers/5642";
import * as __mod_73804 from "../_helpers/73804";
import * as __mod_55171 from "../_helpers/55171";
import * as __mod_62714 from "../_helpers/62714";
import * as __mod_90121 from "../_helpers/90121";
import * as __mod_30553 from "../_helpers/30553";
import * as __mod_80469 from "../_helpers/80469";
import * as __mod_48419 from "../_helpers/48419";
import * as __mod_33212 from "../_helpers/33212";
import * as __mod_34951 from "../_helpers/34951";
import * as __mod_92881 from "../_helpers/92881";
import * as __mod_59157 from "../_helpers/59157";
import * as __mod_22670 from "../_helpers/22670";
import * as __mod_95735 from "../_helpers/95735";
import * as __mod_92752 from "../_helpers/92752";
import * as __mod_22728 from "../_helpers/22728";
import * as __mod_66575 from "../_helpers/66575";
import * as __mod_68820 from "../_helpers/68820";
import * as __mod_18976 from "../_helpers/18976";
import * as __mod_90987 from "../_helpers/90987";
import * as __mod_5042 from "../_helpers/5042";
import * as __mod_31517 from "../_helpers/31517";
import * as __mod_73516 from "../_helpers/73516";
import * as __mod_36586 from "../_helpers/36586";
import * as __mod_20148 from "../_helpers/20148";
import * as __mod_4086 from "../_helpers/4086";
/**
 * Command Menu 6
 * slug: command-menu-6
 * category: command-menu
 * 由 webpack 产物反编译还原（React Bits Pro）。
 */import * as React from "react";

let h = (...e) => e.filter(Boolean).join(" "),
  m = "text-[14px]/[20px] font-medium",
  f = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  k = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  g = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  v = h(m, "text-neutral-900/78 dark:text-neutral-100/78"),
  w = h(m, "text-neutral-900/62 dark:text-neutral-100/62"),
  y = [{
    id: "recent-readiness",
    group: "Recent",
    title: "Launch readiness review",
    detail: "Opened 6 minutes ago",
    shortcut: "1",
    icon: __mod_29635.A
  }, {
    id: "recent-incident",
    group: "Recent",
    title: "Incident 4821, checkout latency",
    detail: "Opened yesterday",
    shortcut: "2",
    icon: __mod_29635.A
  }, {
    id: "recent-roadmap",
    group: "Recent",
    title: "Q3 roadmap draft",
    detail: "Opened 2 days ago",
    shortcut: "3",
    icon: __mod_29635.A
  }, {
    id: "go-overview",
    group: "Navigation",
    title: "Release overview",
    shortcut: "G O",
    icon: __mod_57854.A
  }, {
    id: "go-docs",
    group: "Navigation",
    title: "Runbooks and docs",
    shortcut: "G D",
    icon: __mod_31964.A
  }, {
    id: "go-people",
    group: "Navigation",
    title: "Team directory",
    shortcut: "G P",
    icon: __mod_88366.A
  }, {
    id: "go-settings",
    group: "Navigation",
    title: "Workspace settings",
    shortcut: "G S",
    icon: __mod_29719.A
  }, {
    id: "do-invite",
    group: "Actions",
    title: "Invite a teammate",
    detail: "Send a workspace invite by email",
    shortcut: "I",
    icon: __mod_44647.A
  }, {
    id: "do-schedule",
    group: "Actions",
    title: "Schedule a launch review",
    detail: "Hold a slot with product and infra",
    shortcut: "S",
    icon: __mod_52038.A
  }, {
    id: "do-rotate",
    group: "Actions",
    title: "Rotate an API key",
    detail: "Retire a key and issue a replacement",
    shortcut: "R",
    icon: __mod_79698.A
  }],
  j = ["Recent", "Navigation", "Actions"];
function N({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let W = (...e) => e.filter(Boolean).join(" "),
  F = "text-[14px]/[20px] font-medium",
  I = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  B = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  O = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  P = W(F, "text-neutral-900/78 dark:text-neutral-100/78"),
  H = W(F, "text-neutral-900/62 dark:text-neutral-100/62"),
  q = [{
    id: "p-northwind",
    title: "Northwind",
    detail: "Updated 4m ago",
    icon: __mod_5642.A
  }, {
    id: "p-aurora",
    title: "Aurora mobile",
    detail: "Updated 1h ago",
    icon: __mod_5642.A
  }, {
    id: "p-ledger",
    title: "Ledger billing",
    detail: "Updated yesterday",
    icon: __mod_5642.A
  }, {
    id: "p-atlas",
    title: "Atlas search platform",
    detail: "Updated 2 days ago",
    icon: __mod_5642.A
  }, {
    id: "p-relay",
    title: "Relay notifications",
    detail: "Updated 3 days ago",
    icon: __mod_5642.A
  }, {
    id: "p-vault",
    title: "Vault access control",
    detail: "Updated last week",
    icon: __mod_5642.A
  }],
  U = {
    root: {
      id: "root",
      title: "Home",
      placeholder: "Search or run a command",
      items: [{
        id: "switch-project",
        title: "Switch project",
        icon: __mod_5642.A,
        to: "project"
      }, {
        id: "set-theme",
        title: "Change theme",
        icon: __mod_73804.A,
        to: "theme"
      }, {
        id: "set-status",
        title: "Set your status",
        icon: __mod_55171.A,
        to: "status"
      }, {
        id: "copy-link",
        title: "Copy link to this view",
        icon: __mod_62714.A
      }, {
        id: "shortcuts",
        title: "Open keyboard shortcuts",
        icon: __mod_90121.A
      }]
    },
    project: {
      id: "project",
      title: "Switch project",
      placeholder: "Find a project",
      items: q
    },
    theme: {
      id: "theme",
      title: "Change theme",
      placeholder: "Choose a theme",
      items: [{
        id: "t-system",
        title: "System",
        detail: "Follows your device",
        icon: __mod_30553.A
      }, {
        id: "t-light",
        title: "Light",
        icon: __mod_80469.A
      }, {
        id: "t-dark",
        title: "Dark",
        icon: __mod_48419.A
      }]
    },
    status: {
      id: "status",
      title: "Set your status",
      placeholder: "Choose a status",
      items: [{
        id: "s-active",
        title: "Active",
        icon: __mod_55171.A
      }, {
        id: "s-away",
        title: "Away",
        detail: "Clears when you return",
        icon: __mod_29635.A
      }, {
        id: "s-dnd",
        title: "Do not disturb",
        detail: "Mutes notifications",
        icon: __mod_33212.A
      }, {
        id: "s-meeting",
        title: "In a meeting",
        detail: "Clears after 1 hour",
        icon: __mod_52038.A
      }]
    }
  };
function V({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let Q = (...e) => e.filter(Boolean).join(" "),
  X = "text-[14px]/[20px] font-medium",
  Y = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  Z = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  ee = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  et = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  er = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ea = Q(X, "text-neutral-900/78 dark:text-neutral-100/78"),
  el = Q(X, "text-neutral-900/62 dark:text-neutral-100/62");
function en() {
  let e = (0, React.useRef)(null),
    [t, r] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    a = (0, React.useCallback)(() => {
      let t = e.current;
      if (!t) return;
      let {
        scrollTop: a,
        scrollHeight: l,
        clientHeight: n
      } = t;
      r({
        start: a > 1,
        end: Math.ceil(a + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    a();
    let t = e.current,
      r = t?.ownerDocument.defaultView;
    if (!t || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(a);
    return l.observe(t), () => l.disconnect();
  }, [a]), {
    ref: e,
    edges: t,
    onScroll: a
  };
}
let eo = {
    Doc: __mod_31964.A,
    Person: __mod_34951.A,
    Workflow: __mod_92881.A
  },
  ei = {
    Doc: "bg-[oklch(93%_0.06_220)] text-[oklch(38%_0.11_220)] dark:bg-[oklch(32%_0.07_220)] dark:text-[oklch(88%_0.08_220)]",
    Person: "bg-[oklch(93%_0.06_345)] text-[oklch(38%_0.11_345)] dark:bg-[oklch(32%_0.07_345)] dark:text-[oklch(88%_0.08_345)]",
    Workflow: "bg-[oklch(93%_0.06_250)] text-[oklch(38%_0.11_250)] dark:bg-[oklch(32%_0.07_250)] dark:text-[oklch(88%_0.08_250)]"
  },
  es = [{
    id: "r-readiness",
    kind: "Doc",
    title: "Launch readiness review",
    subtitle: ["Runbook", "Aurora mobile 2.4"],
    facts: [{
      label: "Owner",
      value: "Priya Anand"
    }, {
      label: "Section",
      value: "Release"
    }, {
      label: "Updated",
      value: "6m ago"
    }],
    summary: "Gate checklist covering rollout stages, alerting thresholds, and the rollback owner for the 2.4 launch."
  }, {
    id: "r-latency",
    kind: "Doc",
    title: "Checkout latency postmortem",
    subtitle: ["Incident 4821"],
    facts: [{
      label: "Owner",
      value: "Marcus Reed"
    }, {
      label: "Section",
      value: "Reliability"
    }, {
      label: "Updated",
      value: "1h ago"
    }],
    summary: "Root cause of the p95 spike at checkout, the mitigation shipped, and follow-up work to prevent recurrence."
  }, {
    id: "r-rollback",
    kind: "Doc",
    title: "Rollback procedure for staged deploys",
    subtitle: ["Runbook", "Platform"],
    facts: [{
      label: "Owner",
      value: "Priya Anand"
    }, {
      label: "Section",
      value: "Release"
    }, {
      label: "Updated",
      value: "3 days ago"
    }],
    summary: "Step-by-step revert for a canary that fails its error gate, including who to page and what to post."
  }, {
    id: "r-priya",
    kind: "Person",
    title: "Priya Anand",
    subtitle: ["Staff engineer", "Release"],
    facts: [{
      label: "Team",
      value: "Release"
    }, {
      label: "Timezone",
      value: "GMT+1"
    }, {
      label: "Reviews",
      value: "18"
    }],
    summary: "Owns launch readiness for mobile. Point of contact for rollout gates and staged deploys."
  }, {
    id: "r-marcus",
    kind: "Person",
    title: "Marcus Reed",
    subtitle: ["Senior engineer", "Reliability"],
    facts: [{
      label: "Team",
      value: "Reliability"
    }, {
      label: "Timezone",
      value: "GMT−5"
    }, {
      label: "Reviews",
      value: "24"
    }],
    summary: "Runs the incident rotation this week. Best reached in the reliability channel for pages."
  }, {
    id: "r-deploy",
    kind: "Workflow",
    title: "Staged deploy to production",
    subtitle: ["Runs on merge to main"],
    facts: [{
      label: "Last run",
      value: "Passed"
    }, {
      label: "Duration",
      value: "6m 40s"
    }, {
      label: "Steps",
      value: "9"
    }],
    summary: "Promotes a build through canary and full rollout with automatic rollback if error rate exceeds the gate."
  }, {
    id: "r-rotate",
    kind: "Workflow",
    title: "Rotate signing keys",
    subtitle: ["Runs weekly, Mondays"],
    facts: [{
      label: "Last run",
      value: "Passed"
    }, {
      label: "Duration",
      value: "48s"
    }, {
      label: "Steps",
      value: "4"
    }],
    summary: "Issues a fresh signing key, updates the secret store, and revokes the previous key after a grace window."
  }, {
    id: "r-backup",
    kind: "Workflow",
    title: "Nightly database backup",
    subtitle: ["Runs daily, 02:00 UTC"],
    facts: [{
      label: "Last run",
      value: "Passed"
    }, {
      label: "Duration",
      value: "11m 02s"
    }, {
      label: "Steps",
      value: "3"
    }],
    summary: "Snapshots the primary cluster to cold storage and verifies the restore path against a scratch instance."
  }],
  ec = [{
    id: "all",
    label: "All"
  }, {
    id: "Doc",
    label: "Docs"
  }, {
    id: "Person",
    label: "People"
  }, {
    id: "Workflow",
    label: "Workflows"
  }];
function ed({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let eb = (...e) => e.filter(Boolean).join(" "),
  ep = "text-neutral-900/62 dark:text-neutral-100/62",
  eh = "text-[14px]/[20px] font-medium",
  em = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  ef = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none",
  ek = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eg = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  ev = "mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1",
  ew = "bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ey = "bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950",
  ej = eb(eh, "text-neutral-900/78 dark:text-neutral-100/78"),
  eN = eb(eh, ep);
function eS() {
  let e = (0, React.useRef)(null),
    [t, r] = (0, React.useState)({
      start: !1,
      end: !1
    }),
    a = (0, React.useCallback)(() => {
      let t = e.current;
      if (!t) return;
      let {
        scrollTop: a,
        scrollHeight: l,
        clientHeight: n
      } = t;
      r({
        start: a > 1,
        end: Math.ceil(a + n) < l - 1
      });
    }, []);
  return (0, React.useEffect)(() => {
    a();
    let t = e.current,
      r = t?.ownerDocument.defaultView;
    if (!t || !r?.ResizeObserver) return;
    let l = new r.ResizeObserver(a);
    return l.observe(t), () => l.disconnect();
  }, [a]), {
    ref: e,
    edges: t,
    onScroll: a
  };
}
let eD = [{
    id: "invite",
    title: "Invite a teammate",
    detail: "Add someone to Northwind",
    icon: __mod_44647.A,
    cta: "Send invite",
    fields: [{
      id: "email",
      label: "Email address",
      kind: "text",
      placeholder: "name@company.com"
    }, {
      id: "role",
      label: "Role",
      kind: "select",
      options: ["Viewer", "Editor", "Admin"]
    }],
    summary: e => `Invite ${e.email || "this person"} to Northwind as ${(e.role || "a member").toLowerCase()}.`
  }, {
    id: "rerun",
    title: "Rerun a workflow",
    detail: "Trigger a fresh run",
    icon: __mod_59157.A,
    cta: "Start run",
    fields: [{
      id: "workflow",
      label: "Workflow",
      kind: "select",
      options: ["Staged deploy", "Rotate signing keys", "Nightly backup"]
    }, {
      id: "ref",
      label: "Git ref",
      kind: "text",
      placeholder: "main"
    }],
    summary: e => `Run ${e.workflow || "a workflow"} on ${e.ref || "main"}.`
  }, {
    id: "archive",
    title: "Archive a project",
    detail: "Hide it from the workspace",
    icon: __mod_22670.A,
    cta: "Archive project",
    destructive: !0,
    fields: [{
      id: "project",
      label: "Project",
      kind: "select",
      options: ["Ledger billing", "Relay notifications", "Beacon status page"]
    }],
    summary: e => `Archive ${e.project || "a project"}. Members lose access until it is restored.`
  }],
  eA = {
    invite: {
      email: "erin.walsh@northwind.io",
      role: "Editor"
    },
    rerun: {
      workflow: "Staged deploy",
      ref: "main"
    },
    archive: {
      project: "Ledger billing"
    }
  };
function eC({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let eT = (...e) => e.filter(Boolean).join(" "),
  eM = "text-neutral-900/78 dark:text-neutral-100/78",
  eL = "text-neutral-900/62 dark:text-neutral-100/62",
  eK = "text-[14px]/[20px] font-medium",
  eW = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  eF = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eI = eT(eK, eM),
  eB = eT(eK, eL),
  eO = [{
    id: "invite",
    title: "Invite a teammate",
    detail: "Add someone to the workspace",
    shortcut: "I",
    icon: __mod_44647.A
  }, {
    id: "billing",
    title: "Open billing settings",
    detail: "Plan, invoices, and payment method",
    shortcut: "B",
    icon: __mod_95735.A
  }, {
    id: "export",
    title: "Export usage report",
    detail: "Download last month as a CSV",
    shortcut: "E",
    icon: __mod_92752.A
  }],
  eP = ["Billing settings", "Invite a teammate", "Usage report"];
function eH({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let eV = (...e) => e.filter(Boolean).join(" "),
  eG = "text-neutral-900/62 dark:text-neutral-100/62",
  eJ = "text-[14px]/[20px] font-medium",
  eQ = "transition-[color,background-color,border-color,box-shadow,outline-color,opacity,scale,translate] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms]",
  eX = "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40",
  eY = "h-10 gap-2 rounded-[calc(var(--rb-r-full,999px))] px-5 text-[15px]/[20px] font-bold",
  eZ = eV(eJ, "text-neutral-900/78 dark:text-neutral-100/78"),
  e0 = eV(eJ, eG),
  e1 = [{
    id: "northwind",
    name: "Northwind",
    meta: "Active now",
    shortcut: "1"
  }, {
    id: "aurora",
    name: "Aurora mobile",
    meta: "Active 4m ago",
    shortcut: "2"
  }, {
    id: "ledger",
    name: "Ledger billing",
    meta: "Active 1h ago",
    shortcut: "3"
  }, {
    id: "atlas",
    name: "Atlas search platform",
    meta: "Active yesterday",
    shortcut: "4"
  }, {
    id: "relay",
    name: "Relay notifications",
    meta: "Active 2 days ago",
    shortcut: "5"
  }, {
    id: "vault",
    name: "Vault access control",
    meta: "Active last week",
    shortcut: "6"
  }];
function e2({
  children: e
}) {
  return <kbd className="inline-flex min-h-5.5 min-w-5.5 w-fit items-center justify-center gap-1 rounded-[calc(var(--rb-r-md,8px))] bg-white px-1.5 font-mono text-[12px]/[16px] font-semibold tabular-nums text-neutral-900/78 dark:text-neutral-100/78 shadow-[0_0_0_1px_rgb(84_62_32/0.14),inset_0_-2px_0_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.06)] select-none dark:bg-neutral-800 dark:shadow-[0_0_0_1px_rgb(0_0_0/0.6),inset_0_-2px_0_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.08)]">{e}</kbd>;
}
let e5 = {
    "command-menu-1": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: l,
                clientHeight: n
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(a);
            return l.observe(t), () => l.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        _ = (0, React.useRef)(void 0),
        u = (0, React.useRef)(void 0),
        [x, m] = (0, React.useState)(!0),
        [S, D] = (0, React.useState)(!0),
        [A, C] = (0, React.useState)(""),
        [R, z] = (0, React.useState)(0),
        $ = `${e}-listbox`,
        E = (0, React.useMemo)(() => y.filter(e => {
          let t;
          return !(t = A.trim().toLowerCase()) || `${e.title} ${e.detail ?? ""} ${e.group}`.toLowerCase().includes(t);
        }), [A]),
        T = E[R],
        M = T ? `${e}-${T.id}` : void 0;
      (0, React.useEffect)(() => {
        x && c.current?.focus({
          preventScroll: !0
        });
      }, [x]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = t.closest('[role="group"]'),
          a = (r?.querySelector('[role="option"]') === t && r ? r : t).getBoundingClientRect().top,
          l = e.getBoundingClientRect(),
          n = t.getBoundingClientRect();
        if (a < l.top + 32) {
          let t = e.scrollTop - (l.top + 32 - a);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (n.bottom > l.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            r = e.scrollTop + (n.bottom - l.bottom + 32);
          e.scrollTop = r > t - 32 ? t : r;
        }
      }, [R, A, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(_.current ?? 0), clearTimeout(u.current);
      }, []);
      let L = (0, React.useCallback)(e => {
          clearTimeout(u.current), m(!0), e ? (D(!1), _.current = requestAnimationFrame(() => D(!0))) : D(!0);
        }, []),
        K = (0, React.useCallback)(() => {
          D(!1), clearTimeout(u.current), u.current = setTimeout(() => {
            m(!1), d.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), L(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [L]);
      let W = (0, React.useCallback)(() => {
          C(""), z(0), K();
        }, [K]),
        F = e => {
          z(t => {
            let r = E.length;
            return 0 === r ? 0 : (t + e + r) % r;
          });
        };
      return <section ref={t} className={h("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={d} type="button" aria-haspopup="dialog" aria-expanded={x} onClick={() => L(!0)} className={h(k, g, "w-72 max-w-full")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 truncate text-left">Search or run a command</span><N>⌘K</N></button>{x && <><button type="button" tabIndex={-1} aria-label="Close menu" onClick={K} className={h("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", S ? "opacity-100" : h(f, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), K();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={h("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[12%] z-50 max-h-[min(76%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2", S ? "opacity-100" : h(f, "opacity-0"))}><h2 id={`${e}-title`} className="sr-only">Search or run a command</h2><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={h("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><label htmlFor={`${e}-input`} className="sr-only">Search or run a command</label><input ref={c} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={$} aria-activedescendant={M} aria-autocomplete="list" value={A} onChange={e => {
                  C(e.target.value), z(0);
                }} onKeyDown={e => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), F(1);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), F(-1);
                      break;
                    case "Home":
                      e.preventDefault(), z(0);
                      break;
                    case "End":
                      e.preventDefault(), z(Math.max(E.length - 1, 0));
                      break;
                    case "Enter":
                      if (!T) break;
                      e.preventDefault(), W();
                  }
                }} placeholder="Search or run a command" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="relative flex min-h-0 flex-1 flex-col"><div ref={o} onScroll={s} className="min-h-0 flex-1 overflow-y-auto p-2">{E.length > 0 ? <div id={$} role="listbox" aria-label="Commands">{j.map(t => {
                      let r = E.filter(e => e.group === t);
                      if (0 === r.length) return null;
                      let l = `${e}-${t}`;
                      return <div role="group" aria-labelledby={l} className="mb-1 last:mb-0"><p id={l} className="px-3 pt-2.5 pb-1 text-[13px]/[16px] font-bold tabular-nums text-neutral-900/62 dark:text-neutral-100/62">{t}</p>{r.map(t => {
                          let r = E.indexOf(t),
                            l = r === R;
                          return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => z(r)} onMouseDown={e => {
                            e.preventDefault(), z(r), W();
                          }} className={h("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={t.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.title}</span>{t.detail && <span className={h(v, "truncate")}>{t.detail}</span>}</span><N>{t.shortcut}</N></button>;
                        })}</div>;
                    })}</div> : <div className="flex flex-col items-center px-2.5 py-10 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No command matches “{A.trim()}”</p><p className={h("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs text-balance")}>Check the spelling, or clear the search to see everything.</p><button type="button" onMouseDown={e => {
                      e.preventDefault(), C(""), z(0), c.current?.focus({
                        preventScroll: !0
                      });
                    }} className={h(k, g, "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={h("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={h("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div><div className={h(w, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="hidden items-center gap-1.5 sm:inline-flex"><N>↑</N><N>↓</N>to navigate</span><span className="inline-flex items-center gap-1.5"><N><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></N>to open</span><span className="inline-flex items-center gap-1.5"><N>esc</N>to close</span><span className="ml-auto shrink-0 tabular-nums">{E.length} {1 === E.length ? "result" : "results"}</span></div></div></>}</section>;
    },
    "command-menu-2": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: l,
                clientHeight: n
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(a);
            return l.observe(t), () => l.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        _ = (0, React.useRef)(void 0),
        u = (0, React.useRef)(void 0),
        [x, h] = (0, React.useState)(!0),
        [m, f] = (0, React.useState)(!0),
        [k, g] = (0, React.useState)(["root"]),
        [v, w] = (0, React.useState)(""),
        [y, j] = (0, React.useState)(0),
        [N, S] = (0, React.useState)("Northwind"),
        [D, A] = (0, React.useState)("System"),
        [C, R] = (0, React.useState)("Active"),
        z = k[k.length - 1],
        $ = U[z],
        E = k.length > 1,
        T = `${e}-listbox`,
        F = "project" === z ? N : "theme" === z ? D : "status" === z ? C : void 0,
        q = (0, React.useCallback)(e => "project" === e.to ? `Currently ${N}` : "theme" === e.to ? `Currently ${D.toLowerCase()}` : "status" === e.to ? `Currently ${C.toLowerCase()}` : e.detail, [N, D, C]),
        G = (0, React.useMemo)(() => {
          let e = v.trim().toLowerCase();
          return e ? $.items.filter(t => `${t.title} ${t.detail ?? ""}`.toLowerCase().includes(e)) : $.items;
        }, [$, v]),
        J = G[y],
        Q = J ? `${e}-${J.id}` : void 0;
      (0, React.useEffect)(() => {
        x && c.current?.focus({
          preventScroll: !0
        });
      }, [x]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        if (a.top < r.top + 32) {
          let t = e.scrollTop - (r.top + 32 - a.top);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (a.bottom > r.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            l = e.scrollTop + (a.bottom - r.bottom + 32);
          e.scrollTop = l > t - 32 ? t : l;
        }
      }, [y, v, z, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(_.current ?? 0), clearTimeout(u.current);
      }, []);
      let X = (0, React.useCallback)(e => {
          clearTimeout(u.current), h(!0), e ? (f(!1), _.current = requestAnimationFrame(() => f(!0))) : f(!0);
        }, []),
        Y = (0, React.useCallback)(() => {
          f(!1), clearTimeout(u.current), u.current = setTimeout(() => {
            h(!1), g(["root"]), d.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), X(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [X]);
      let Z = (0, React.useCallback)(() => {
          g(e => e.length > 1 ? e.slice(0, -1) : e), w(""), j(0), c.current?.focus({
            preventScroll: !0
          });
        }, []),
        ee = (0, React.useCallback)(e => {
          if (e.to) {
            g(t => [...t, e.to]), w(""), j(0), c.current?.focus({
              preventScroll: !0
            });
            return;
          }
          "project" === z && S(e.title), "theme" === z && A(e.title), "status" === z && R(e.title), w(""), j(0), Y();
        }, [Y, z]),
        et = e => {
          j(t => {
            let r = G.length;
            return 0 === r ? 0 : (t + e + r) % r;
          });
        };
      return <section ref={t} className={W("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[500px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={d} type="button" aria-haspopup="dialog" aria-expanded={x} onClick={() => X(!0)} className={W(B, O, "w-72 max-w-full")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 truncate text-left">Search or run a command</span><V>⌘K</V></button>{x && <><button type="button" tabIndex={-1} aria-label="Close menu" onClick={Y} className={W("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", m ? "opacity-100" : W(I, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), Y();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={W("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[12%] z-50 max-h-[min(76%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2", m ? "opacity-100" : W(I, "opacity-0"))}><h2 id={`${e}-title`} className="sr-only">{$.title}</h2><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={W("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" />{E && <button type="button" onClick={Z} className={W(B, "h-7 gap-1.5 rounded-[calc(var(--rb-r-full,999px))] px-3 text-[13px]/[16px] font-bold tabular-nums", "max-w-[9rem]")}><__mod_22728.n icon={__mod_18976.A} size={14} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="truncate">{$.title}</span><span className="sr-only">: go back</span></button>}<label htmlFor={`${e}-input`} className="sr-only">{$.placeholder}</label><input ref={c} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={T} aria-activedescendant={Q} aria-autocomplete="list" value={v} onChange={e => {
                  w(e.target.value), j(0);
                }} onKeyDown={e => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), et(1);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), et(-1);
                      break;
                    case "Home":
                      e.preventDefault(), j(0);
                      break;
                    case "End":
                      e.preventDefault(), j(Math.max(G.length - 1, 0));
                      break;
                    case "Enter":
                      if (!J) break;
                      e.preventDefault(), ee(J);
                      break;
                    case "Backspace":
                      if ("" !== v || !E) break;
                      e.preventDefault(), Z();
                  }
                }} placeholder={$.placeholder} className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={s} className="h-full overflow-y-auto p-2">{G.length > 0 ? <div id={T} role="listbox" aria-label={$.title}>{G.map((t, r) => {
                      let l = r === y,
                        o = q(t),
                        i = F === t.title;
                      return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => j(r)} onMouseDown={e => {
                        e.preventDefault(), j(r), ee(t);
                      }} className={W("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={t.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.title}</span>{o && <span className={W(P, "truncate")}>{o}</span>}</span>{i ? <__mod_22728.n icon={__mod_90987.A} size={18} strokeWidth={2} aria-hidden="true" /> : t.to ? <__mod_22728.n icon={__mod_5042.A} size={18} strokeWidth={2} aria-hidden="true" /> : null}</button>;
                    })}</div> : <div className="flex flex-col items-center px-2.5 py-10 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">Nothing here matches “{v.trim()}”</p><p className={W("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs text-balance")}>Clear the search to see everything on this page.</p><button type="button" onMouseDown={e => {
                      e.preventDefault(), w(""), j(0), c.current?.focus({
                        preventScroll: !0
                      });
                    }} className={W(B, O, "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={W("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={W("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div><div className={W(H, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="inline-flex items-center gap-1.5"><V><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></V>to select</span><span className="inline-flex items-center gap-1.5"><V>esc</V>to close</span>{E && <span className="ml-auto inline-flex shrink-0 items-center gap-1.5"><V>⌫</V>to go back</span>}</div></div></>}</section>;
    },
    "command-menu-3": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = en(),
        {
          ref: c,
          edges: d,
          onScroll: _
        } = en(),
        u = (0, React.useRef)(null),
        x = (0, React.useRef)(null),
        h = (0, React.useRef)(void 0),
        m = (0, React.useRef)(void 0),
        [f, k] = (0, React.useState)(!0),
        [g, v] = (0, React.useState)(!0),
        [w, y] = (0, React.useState)(""),
        [j, N] = (0, React.useState)("all"),
        [S, D] = (0, React.useState)(0),
        A = `${e}-listbox`,
        C = (0, React.useMemo)(() => {
          let e = w.trim().toLowerCase();
          return es.filter(t => ("all" === j || t.kind === j) && (!e || `${t.title} ${t.subtitle.join(" ")} ${t.summary}`.toLowerCase().includes(e)));
        }, [w, j]),
        R = Math.min(S, Math.max(C.length - 1, 0)),
        z = C[R],
        $ = z ? `${e}-${z.id}` : void 0;
      (0, React.useEffect)(() => {
        f && u.current?.focus({
          preventScroll: !0
        });
      }, [f]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        if (a.top < r.top + 32) {
          let t = e.scrollTop - (r.top + 32 - a.top);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (a.bottom > r.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            l = e.scrollTop + (a.bottom - r.bottom + 32);
          e.scrollTop = l > t - 32 ? t : l;
        }
      }, [R, w, j, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(h.current ?? 0), clearTimeout(m.current);
      }, []);
      let E = (0, React.useCallback)(e => {
          clearTimeout(m.current), k(!0), e ? (v(!1), h.current = requestAnimationFrame(() => v(!0))) : v(!0);
        }, []),
        T = (0, React.useCallback)(() => {
          v(!1), clearTimeout(m.current), m.current = setTimeout(() => {
            k(!1), x.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), E(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [E]);
      let M = (0, React.useCallback)(() => {
          y(""), D(0), T();
        }, [T]),
        L = e => {
          let t = C.length;
          0 !== t && D((R + e + t) % t);
        };
      return <section ref={t} className={Q("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[640px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={x} type="button" aria-haspopup="dialog" aria-expanded={f} onClick={() => E(!0)} className={Q(Z, ee, "w-80 max-w-full")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 truncate text-left">Search docs, people, workflows</span><ed>⌘K</ed></button>{f && <><button type="button" tabIndex={-1} aria-label="Close search" onClick={T} className={Q("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", g ? "opacity-100" : Q(Y, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), T();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={Q("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[10%] z-50 max-h-[min(80%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2", g ? "opacity-100" : Q(Y, "opacity-0"))}><h2 id={`${e}-title`} className="sr-only">Search everything</h2><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={Q("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><label htmlFor={`${e}-input`} className="sr-only">Search everything</label><input ref={u} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={A} aria-activedescendant={$} aria-autocomplete="list" value={w} onChange={e => {
                  y(e.target.value), D(0);
                }} onKeyDown={e => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), L(1);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), L(-1);
                      break;
                    case "Home":
                      e.preventDefault(), D(0);
                      break;
                    case "End":
                      e.preventDefault(), D(Math.max(C.length - 1, 0));
                      break;
                    case "Enter":
                      if (!z) break;
                      e.preventDefault(), M();
                  }
                }} placeholder="Search everything" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="shrink-0 px-4 py-2"><div role="radiogroup" aria-label="Result type" className={Q("inline-flex w-fit max-w-full items-stretch gap-1 rounded-[calc(var(--rb-r-full,999px)_+_min(4px,var(--rb-r-full,999px)))] bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] p-1", "h-10")}>{ec.map((t, r) => {
                    let l = j === t.id;
                    return <button id={`${e}-filter-${t.id}`} type="button" role="radio" aria-checked={l} tabIndex={l ? 0 : -1} onClick={() => {
                      N(t.id), D(0);
                    }} onKeyDown={t => ((t, r) => {
                      if ("ArrowRight" !== t.key && "ArrowLeft" !== t.key) return;
                      t.preventDefault();
                      let a = (r + ("ArrowRight" === t.key ? 1 : -1) + ec.length) % ec.length;
                      N(ec[a].id), D(0);
                      let l = t.currentTarget.ownerDocument;
                      l.getElementById(`${e}-filter-${ec[a].id}`)?.focus({
                        preventScroll: !0
                      });
                    })(t, r)} className="relative inline-flex min-w-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap [&_svg]:shrink-0 rounded-[calc(var(--rb-r-full,999px))] px-4 text-[14px]/[18px] font-bold text-neutral-900/78 dark:text-neutral-100/78 select-none transition-[background-color,color,box-shadow,outline-color,scale] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:scale-[0.96] motion-reduce:active:scale-100 hover:not-aria-checked:text-neutral-900 aria-checked:bg-white aria-checked:text-neutral-900 aria-checked:shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_2px_rgb(84_62_32/0.10),0_3px_8px_-2px_rgb(84_62_32/0.20)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:hover:not-aria-checked:text-neutral-100 dark:aria-checked:bg-[color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800))] dark:aria-checked:text-neutral-100 dark:aria-checked:shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_0_0_1px_rgb(0_0_0/0.6),0_2px_5px_-1px_rgb(0_0_0/0.6)] dark:disabled:text-neutral-100/40">{t.label}</button>;
                  })}</div></div><div className="flex min-h-0 flex-1"><div className="relative min-h-0 w-full sm:w-1/2 sm:shrink-0"><div ref={o} onScroll={s} className="h-full overflow-y-auto p-2">{C.length > 0 ? <div id={A} role="listbox" aria-label="Results">{C.map((t, r) => {
                        let l = r === R;
                        return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => D(r)} onMouseDown={e => {
                          e.preventDefault(), D(r), M();
                        }} className={Q("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={eo[t.kind]} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.title}</span><span className={Q(ea, "flex min-w-0 gap-3")}>{t.subtitle.map(e => <span className="truncate">{e}</span>)}</span></span></button>;
                      })}</div> : <div className="flex flex-col items-center px-2.5 py-10 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No matches in {"all" === j ? "anything" : "this type"}</p><p className={Q("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs text-balance")}>Try another term, or widen the filter back to everything.</p><button type="button" onMouseDown={e => {
                        e.preventDefault(), y(""), N("all"), D(0), u.current?.focus({
                          preventScroll: !0
                        });
                      }} className={Q(Z, ee, "mt-4")}>Reset search</button></div>}</div><div aria-hidden="true" className={Q(et, "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={Q(er, "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div><div className="relative my-2 hidden min-h-0 min-w-0 flex-1 overflow-hidden sm:block"><div ref={c} onScroll={_} aria-live="polite" className="h-full overflow-y-auto px-4 pt-1.5 pb-4">{z ? <div className="flex flex-col"><p className={Q("inline-flex h-5.5 min-w-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] px-2.5 text-[12px]/[16px] font-bold tabular-nums", ei[z.kind])}>{z.kind}</p><h3 className={Q("text-[17px]/[22px] font-extrabold", "mt-1")}>{z.title}</h3><p className={Q(ea, "mt-0.5 flex flex-wrap gap-x-3")}>{z.subtitle.map(e => <span>{e}</span>)}</p><dl className={Q("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-4 flex flex-col")}>{z.facts.map(e => <div className="flex min-h-10 min-w-0 items-center justify-between gap-4"><dt className={Q("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.label}</dt><dd className={Q("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "justify-end text-right tabular-nums")}>{e.value}</dd></div>)}</dl><p className={Q(ea, "mt-4")}>{z.summary}</p></div> : <div className={Q(el, "flex h-full items-center justify-center px-6 text-center")}>Nothing to preview yet.</div>}</div><div aria-hidden="true" className={Q(et, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={Q(er, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div></div><div className={Q(el, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="hidden items-center gap-1.5 sm:inline-flex"><ed>↑</ed><ed>↓</ed>to move</span><span className="inline-flex items-center gap-1.5"><ed><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></ed>to open</span><span className="inline-flex items-center gap-1.5"><ed>esc</ed>to close</span><span className="ml-auto shrink-0 tabular-nums">{C.length} of {es.length}</span></div></div></>}</section>;
    },
    "command-menu-4": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = eS(),
        {
          ref: c,
          edges: d,
          onScroll: _
        } = eS(),
        u = (0, React.useRef)(null),
        x = (0, React.useRef)(null),
        h = (0, React.useRef)(null),
        m = (0, React.useRef)(void 0),
        f = (0, React.useRef)(void 0),
        [k, g] = (0, React.useState)(!0),
        [v, w] = (0, React.useState)(!0),
        [y, j] = (0, React.useState)("form"),
        [N, S] = (0, React.useState)("invite"),
        [D, A] = (0, React.useState)(""),
        [C, R] = (0, React.useState)(0),
        [z, $] = (0, React.useState)(() => JSON.parse(JSON.stringify(eA))),
        E = `${e}-listbox`,
        T = eD.find(e => e.id === N) ?? eD[0],
        L = z[N] ?? {},
        K = (0, React.useMemo)(() => {
          let e = D.trim().toLowerCase();
          return e ? eD.filter(t => `${t.title} ${t.detail}`.toLowerCase().includes(e)) : eD;
        }, [D]),
        W = K[C],
        F = W ? `${e}-${W.id}` : void 0;
      (0, React.useEffect)(() => {
        k && ("select" === y ? u.current?.focus({
          preventScroll: !0
        }) : h.current?.focus({
          preventScroll: !0
        }));
      }, [k, y]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        if (a.top < r.top + 32) {
          let t = e.scrollTop - (r.top + 32 - a.top);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (a.bottom > r.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            l = e.scrollTop + (a.bottom - r.bottom + 32);
          e.scrollTop = l > t - 32 ? t : l;
        }
      }, [C, D, y, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(m.current ?? 0), clearTimeout(f.current);
      }, []);
      let I = (0, React.useCallback)(e => {
          clearTimeout(f.current), g(!0), e ? (w(!1), m.current = requestAnimationFrame(() => w(!0))) : w(!0);
        }, []),
        B = (0, React.useCallback)(() => {
          w(!1), clearTimeout(f.current), f.current = setTimeout(() => {
            g(!1), x.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), I(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [I]);
      let O = (0, React.useCallback)(e => {
          S(e.id), j("form"), A("");
        }, []),
        P = (e, t) => {
          $(r => ({
            ...r,
            [N]: {
              ...r[N],
              [e]: t
            }
          }));
        },
        H = e => {
          let t = K.length;
          0 !== t && R(r => (r + e + t) % t);
        };
      return <section ref={t} className={eb("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[400px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={x} type="button" aria-haspopup="dialog" aria-expanded={k} onClick={() => I(!0)} className={eb(ek, eg)}>Run an action<eC>⌘K</eC></button>{k && <><button type="button" tabIndex={-1} aria-label="Close menu" onClick={B} className={eb("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", v ? "opacity-100" : eb(em, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), B();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={eb("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[12%] z-50 max-h-[min(76%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-md -translate-x-1/2", v ? "opacity-100" : eb(em, "opacity-0"))}>{"select" === y ? <><h2 id={`${e}-title`} className="sr-only">Run an action</h2><div className={ev}><div className={eb("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><label htmlFor={`${e}-input`} className="sr-only">Find an action</label><input ref={u} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={E} aria-activedescendant={F} aria-autocomplete="list" value={D} onChange={e => {
                    A(e.target.value), R(0);
                  }} onKeyDown={e => {
                    switch (e.key) {
                      case "ArrowDown":
                        e.preventDefault(), H(1);
                        break;
                      case "ArrowUp":
                        e.preventDefault(), H(-1);
                        break;
                      case "Home":
                        e.preventDefault(), R(0);
                        break;
                      case "End":
                        e.preventDefault(), R(Math.max(K.length - 1, 0));
                        break;
                      case "Enter":
                        if (!W) break;
                        e.preventDefault(), O(W);
                    }
                  }} placeholder="Find an action" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={s} className="h-full overflow-y-auto p-2">{K.length > 0 ? <div id={E} role="listbox" aria-label="Actions">{K.map((t, r) => {
                        let l = r === C;
                        return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => R(r)} onMouseDown={e => {
                          e.preventDefault(), O(t);
                        }} className={eb("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={t.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.title}</span><span className={eb(ej, "truncate")}>{t.detail}</span></span></button>;
                      })}</div> : <div className="flex flex-col items-center px-2.5 py-8 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No action matches “{D.trim()}”</p><button type="button" onMouseDown={e => {
                        e.preventDefault(), A(""), R(0), u.current?.focus({
                          preventScroll: !0
                        });
                      }} className={eb(ek, eg, "mt-3")}>Clear search</button></div>}</div><div aria-hidden="true" className={eb(ew, "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eb(ey, "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div></> : <form onSubmit={e => {
              e.preventDefault(), "form" === y ? j("confirm") : B();
            }} className="flex min-h-0 flex-1 flex-col"><div className={ev}><div className="flex h-12 shrink-0 items-center gap-3 px-4"><button type="button" aria-label={"confirm" === y ? "Back to details" : "Back to actions"} onClick={() => "confirm" === y ? j("form") : j("select")} className={eb("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-transparent text-neutral-900 hover:not-disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] active:not-disabled:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] disabled:text-neutral-900/40 dark:text-neutral-100 dark:hover:not-disabled:bg-neutral-100/8 dark:active:not-disabled:bg-neutral-100/12 dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:disabled:text-neutral-100/40", "size-8 rounded-[calc(var(--rb-r-full,999px))]", "-ml-1.5")}><__mod_22728.n icon={__mod_18976.A} size={18} strokeWidth={2} aria-hidden="true" /></button><h2 id={`${e}-title`} className={eb("min-w-0 truncate text-[16px]/[20px] font-extrabold text-neutral-900 dark:text-neutral-100", "flex-1")}>{T.title}</h2><span className={eb("text-[13px]/[16px] font-semibold tabular-nums", ep, "shrink-0")}>{"form" === y ? "Step 1 of 2" : "Step 2 of 2"}</span></div><div className="relative min-h-0 flex-1"><div ref={c} onScroll={_} className="h-full overflow-y-auto px-4 pt-1 pb-4">{"form" === y ? <div className="flex flex-col gap-4">{T.fields.map((t, r) => <div className="flex flex-col gap-2"><label htmlFor={`${e}-${t.id}`} className="flex w-fit items-center gap-2 text-[15px]/[20px] font-bold text-neutral-900 dark:text-neutral-100">{t.label}</label>{"text" === t.kind ? <div className={eb("relative flex w-full min-w-0 cursor-text items-center rounded-[calc(var(--rb-r-xl,12px))] data-concentric:rounded-[var(--rb-r-5xl,22px)] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] text-[15px]/[20px] font-medium text-neutral-900 transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-within:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] has-[[aria-invalid=true]]:border-[oklch(60%_0.236_26)] has-[[aria-invalid=true]]:bg-[oklch(97.5%_0.016_26)] has-[input:disabled]:cursor-not-allowed has-[input:disabled]:text-neutral-900/40 has-[input:disabled]:shadow-none has-[input[readonly]]:cursor-default has-[input[readonly]]:shadow-none dark:text-neutral-100 dark:hover:not-focus-within:not-has-[[aria-invalid=true]]:not-has-[input:disabled]:not-has-[input[readonly]]:bg-neutral-900 dark:focus-within:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-within:bg-neutral-900 dark:focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:has-[[aria-invalid=true]]:border-[oklch(65.2%_0.219_26)] dark:has-[[aria-invalid=true]]:bg-[oklch(26%_0.04_26)] dark:has-[input:disabled]:text-neutral-100/40", "h-10")}><input ref={0 === r ? h : void 0} id={`${e}-${t.id}`} value={L[t.id] ?? ""} onChange={e => P(t.id, e.target.value)} placeholder={t.placeholder} className="h-full w-full min-w-0 flex-1 bg-transparent px-3.5 outline-none [[data-affix]+&]:ps-2 [&:has(+[data-affix])]:pe-2 placeholder:font-medium placeholder:text-neutral-900/55 disabled:cursor-not-allowed disabled:placeholder:text-neutral-900/30 dark:placeholder:text-neutral-100/55 dark:disabled:placeholder:text-neutral-100/30 dark:[color-scheme:dark]" /></div> : <div className="relative"><select ref={0 === r ? h : void 0} id={`${e}-${t.id}`} value={L[t.id] ?? t.options[0]} onChange={e => P(t.id, e.target.value)} className={eb("inline-flex h-10 w-fit min-w-40 cursor-pointer items-center justify-between gap-2 rounded-[calc(var(--rb-r-xl,12px))] border border-transparent bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] dark:bg-neutral-950 shadow-[inset_0_1px_2px_rgb(84_62_32/0.09),inset_0_0_0_1px_rgb(84_62_32/0.035)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(255_255_255/0.045)] px-3.5 text-left text-[15px]/[20px] font-semibold whitespace-nowrap text-neutral-900 outline-none select-none transition-[border-color,box-shadow,background-color] duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] focus-visible:bg-white focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-expanded:border-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-white aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-invalid:border-[oklch(60%_0.236_26)] disabled:cursor-not-allowed disabled:text-neutral-900/40 disabled:shadow-none dark:text-neutral-100 dark:hover:not-disabled:not-aria-invalid:not-aria-expanded:bg-neutral-900 dark:focus-visible:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:focus-visible:bg-neutral-900 dark:focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-expanded:border-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-900 dark:aria-expanded:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-invalid:border-[oklch(65.2%_0.219_26)] dark:disabled:text-neutral-100/40", "w-full appearance-none pr-8")}>{t.options.map(e => <option value={e}>{e}</option>)}</select><__mod_22728.n icon={__mod_31517.A} size={18} strokeWidth={2} aria-hidden="true" className={eb("shrink-0 text-neutral-900/78 dark:text-neutral-100/78", "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2")} /></div>}</div>)}</div> : <div><p className={eh}>{T.summary(L)}</p><dl className={eb("divide-y divide-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_88%,white)] dark:divide-neutral-100/7", "mt-3 flex flex-col")}>{T.fields.map(e => <div className="flex min-h-10 min-w-0 items-center justify-between gap-4"><dt className={eb("min-w-0 text-[15px]/[20px] font-bold text-neutral-900/62 dark:text-neutral-100/62", "shrink-0")}>{e.label}</dt><dd className={eb("flex min-w-0 flex-wrap items-center gap-2 text-[15px]/[22px] font-medium text-neutral-900 dark:text-neutral-100 [overflow-wrap:anywhere]", "justify-end text-right")}>{L[e.id] || <span className="text-neutral-900/62 dark:text-neutral-100/62">None</span>}</dd></div>)}</dl></div>}</div><div aria-hidden="true" className={eb(ew, "pointer-events-none absolute inset-x-0 top-0 h-8", d.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eb(ey, "pointer-events-none absolute inset-x-0 bottom-0 h-8", d.end ? "opacity-100" : "opacity-0")} /></div></div><div className={eb(eN, "flex h-14 shrink-0 items-center gap-4 ps-5 pe-3")}><span className="inline-flex items-center gap-1.5"><eC><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></eC>{"form" === y ? "to review" : "to confirm"}</span><span className="hidden items-center gap-1.5 sm:inline-flex"><eC>esc</eC>to close</span>{"form" === y ? <button type="submit" className={eb(ef, eg, "ml-auto")}>Review</button> : <button type="button" onClick={B} className={eb(T.destructive ? "relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-[oklch(51%_0.18_26)] hover:not-disabled:bg-none hover:not-disabled:bg-[oklch(96%_0.03_26)] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:text-[oklch(80%_0.13_26)] dark:hover:not-disabled:bg-[oklch(32%_0.07_26)] dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40" : ef, eg, "ml-auto")}>{T.cta}</button>}</div></form>}{"select" === y && <div className={eb(eN, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="inline-flex items-center gap-1.5"><eC><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></eC>to choose</span><span className="inline-flex items-center gap-1.5"><eC>esc</eC>to close</span></div>}</div></>}</section>;
    },
    "command-menu-5": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: l,
                clientHeight: n
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(a);
            return l.observe(t), () => l.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        _ = (0, React.useRef)(void 0),
        u = (0, React.useRef)(void 0),
        [x, h] = (0, React.useState)(!0),
        [m, f] = (0, React.useState)(!0),
        [k, g] = (0, React.useState)("quarterly burn rate by team"),
        [v, w] = (0, React.useState)(0),
        y = `${e}-listbox`,
        j = (0, React.useMemo)(() => {
          let e = k.trim().toLowerCase();
          return e ? eO.filter(t => `${t.title} ${t.detail}`.toLowerCase().includes(e)) : eO;
        }, [k]),
        N = 0 === j.length,
        S = k.trim(),
        D = Math.min(v, Math.max(j.length - 1, 0)),
        A = j[D],
        C = A ? `${e}-${A.id}` : void 0;
      (0, React.useEffect)(() => {
        x && c.current?.focus({
          preventScroll: !0
        });
      }, [x]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        if (a.top < r.top + 32) {
          let t = e.scrollTop - (r.top + 32 - a.top);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (a.bottom > r.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            l = e.scrollTop + (a.bottom - r.bottom + 32);
          e.scrollTop = l > t - 32 ? t : l;
        }
      }, [D, k, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(_.current ?? 0), clearTimeout(u.current);
      }, []);
      let R = (0, React.useCallback)(e => {
          clearTimeout(u.current), h(!0), e ? (f(!1), _.current = requestAnimationFrame(() => f(!0))) : f(!0);
        }, []),
        z = (0, React.useCallback)(() => {
          f(!1), clearTimeout(u.current), u.current = setTimeout(() => {
            h(!1), d.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), R(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [R]);
      let $ = (0, React.useCallback)(() => {
          g(""), w(0), z();
        }, [z]),
        E = e => {
          let t = j.length;
          0 !== t && w((D + e + t) % t);
        };
      return <section ref={t} className={eT("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[560px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={d} type="button" aria-haspopup="dialog" aria-expanded={x} onClick={() => R(!0)} className={eT("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] text-neutral-900 dark:text-neutral-100 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] active:not-disabled:translate-y-px active:not-disabled:shadow-[inset_0_1px_3px_rgb(84_62_32/0.16),0_0_0_1px_rgb(84_62_32/0.10)] dark:active:not-disabled:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14),0_0_0_1px_rgb(84_62_32/0.10)] dark:aria-expanded:bg-neutral-800 dark:aria-expanded:shadow-[inset_0_1px_3px_rgb(0_0_0/0.6),0_0_0_1px_rgb(0_0_0/0.6)] disabled:bg-none disabled:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_58%,white)] disabled:text-neutral-900/40 disabled:shadow-none dark:disabled:bg-neutral-800/60 dark:disabled:text-neutral-100/40", eF, "w-64 max-w-full")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="min-w-0 flex-1 truncate text-left">Search or ask</span><eH>⌘K</eH></button>{x && <><button type="button" tabIndex={-1} aria-label="Close menu" onClick={z} className={eT("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", m ? "opacity-100" : eT(eW, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), z();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={eT("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[12%] z-50 max-h-[min(80%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2", m ? "opacity-100" : eT(eW, "opacity-0"))}><h2 id={`${e}-title`} className="sr-only">Search or ask</h2><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={eT("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><label htmlFor={`${e}-input`} className="sr-only">Search or ask</label><input ref={c} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={y} aria-activedescendant={C} aria-autocomplete="list" value={k} onChange={e => {
                  g(e.target.value), w(0);
                }} onKeyDown={e => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), E(1);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), E(-1);
                      break;
                    case "Home":
                      e.preventDefault(), w(0);
                      break;
                    case "End":
                      e.preventDefault(), w(Math.max(j.length - 1, 0));
                      break;
                    case "Enter":
                      e.preventDefault(), $();
                  }
                }} placeholder="Search or ask" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={s} className="h-full overflow-y-auto">{N ? <div className="flex flex-col items-center px-6 pb-6 pt-8 text-center sm:pt-10"><div className={eT(eM, "flex h-10 w-10 items-center justify-center")}><__mod_22728.n icon={__mod_73516.A} size={20} strokeWidth={2} aria-hidden="true" /></div><p className={eT("text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100", "mt-3")}>No commands match</p><p className={eT("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-sm text-balance")}>Nothing in this workspace matches that. Ask the assistant to answer it from your data instead.</p><button type="button" onMouseDown={e => {
                      e.preventDefault(), $();
                    }} className={eT("relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none transition-[color,background-color,border-color,box-shadow,outline-color,scale,translate,filter] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:duration-[90ms] motion-reduce:active:translate-y-0 disabled:cursor-not-allowed aria-busy:cursor-progress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_68%,white),var(--rb-accent,oklch(84%_0.15_165)))] text-[var(--rb-accent-fg,oklch(26%_0.06_168))] shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_4px_10px_-4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_80%,transparent)] hover:not-disabled:-translate-y-px hover:not-disabled:brightness-[1.04] hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black),0_7px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_85%,transparent)] active:not-disabled:translate-y-px active:not-disabled:brightness-[0.98] active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_55%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_70%,black)] motion-reduce:hover:translate-y-0 disabled:opacity-45 disabled:shadow-none dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_78%,white),var(--rb-accent,oklch(81%_0.16_163)))] dark:text-[var(--rb-accent-fg,oklch(26%_0.06_168))] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_6px_16px_-6px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,transparent)] dark:hover:not-disabled:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-2px_0_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_58%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black),0_9px_22px_-8px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_60%,transparent)] dark:active:not-disabled:shadow-[inset_0_2px_4px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_45%,black),0_0_0_1px_color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_55%,black)] dark:disabled:shadow-none", eF, "mt-4 max-w-full")}><__mod_22728.n icon={__mod_36586.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><span className="truncate">Ask about “{S}”</span></button><p className={eT("text-[13px]/[16px] font-semibold tabular-nums", eL, "mt-6 sm:mt-8")}>Try instead</p><div className="mt-2 flex flex-wrap justify-center gap-2">{eP.map(e => <button type="button" onMouseDown={t => {
                        t.preventDefault(), g(e), w(0), c.current?.focus({
                          preventScroll: !0
                        });
                      }} className="relative inline-flex h-8 max-w-full min-w-0 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-[calc(var(--rb-r-full,999px))] border border-transparent bg-[linear-gradient(180deg,#ffffff,var(--rb-n-100,oklch(97.7%_0.0055_80)))] dark:bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)),var(--color-neutral-800))] shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] px-3.5 text-[14px]/[18px] font-bold text-neutral-900 dark:text-neutral-100 select-none transition-[background-color,border-color,box-shadow,color,scale,translate,outline-color] duration-[240ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] active:translate-y-px active:duration-[90ms] motion-reduce:active:translate-y-0 hover:not-disabled:bg-[linear-gradient(180deg,#ffffff,color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white))] dark:hover:not-disabled:bg-[linear-gradient(180deg,var(--color-neutral-700),color-mix(in_oklab,var(--color-neutral-700)_55%,var(--color-neutral-800)))] aria-pressed:bg-none aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-pressed:shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] aria-expanded:bg-none aria-expanded:bg-[var(--rb-n-200,oklch(92.8%_0.009_76))] aria-expanded:shadow-[inset_0_1px_3px_rgb(84_62_32/0.14)] disabled:cursor-not-allowed disabled:text-neutral-900/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_58%,black)] dark:focus-visible:outline-[var(--rb-accent,oklch(81%_0.16_163))] dark:aria-pressed:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-pressed:shadow-[inset_0_0_0_1.5px_var(--rb-accent,oklch(81%_0.16_163))] dark:aria-expanded:bg-neutral-800 dark:disabled:text-neutral-100/40">{e}</button>)}</div></div> : <div id={y} role="listbox" aria-label="Commands" className="p-2">{j.map((t, r) => {
                      let l = r === D;
                      return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => w(r)} onMouseDown={e => {
                        e.preventDefault(), w(r), $();
                      }} className={eT("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={t.icon} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.title}</span><span className={eT(eI, "truncate")}>{t.detail}</span></span><eH>{t.shortcut}</eH></button>;
                    })}</div>}</div><div aria-hidden="true" className={eT("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eT("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div><div className={eT(eB, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="inline-flex items-center gap-1.5"><eH><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></eH>{N ? "to ask" : "to run"}</span><span className="inline-flex items-center gap-1.5"><eH>esc</eH>to close</span><span className="ml-auto shrink-0 tabular-nums">{j.length} of {eO.length}</span></div></div></>}</section>;
    },
    "command-menu-6": function () {
      let e = (0, React.useId)(),
        t = (0, React.useRef)(null),
        r = (0, React.useRef)(null),
        {
          ref: o,
          edges: i,
          onScroll: s
        } = function () {
          let e = (0, React.useRef)(null),
            [t, r] = (0, React.useState)({
              start: !1,
              end: !1
            }),
            a = (0, React.useCallback)(() => {
              let t = e.current;
              if (!t) return;
              let {
                scrollTop: a,
                scrollHeight: l,
                clientHeight: n
              } = t;
              r({
                start: a > 1,
                end: Math.ceil(a + n) < l - 1
              });
            }, []);
          return (0, React.useEffect)(() => {
            a();
            let t = e.current,
              r = t?.ownerDocument.defaultView;
            if (!t || !r?.ResizeObserver) return;
            let l = new r.ResizeObserver(a);
            return l.observe(t), () => l.disconnect();
          }, [a]), {
            ref: e,
            edges: t,
            onScroll: a
          };
        }(),
        c = (0, React.useRef)(null),
        d = (0, React.useRef)(null),
        _ = (0, React.useRef)(void 0),
        u = (0, React.useRef)(void 0),
        [x, h] = (0, React.useState)(!0),
        [m, f] = (0, React.useState)(!0),
        [k, g] = (0, React.useState)("northwind"),
        [v, w] = (0, React.useState)(""),
        [y, j] = (0, React.useState)(0),
        N = `${e}-listbox`,
        S = (0, React.useMemo)(() => {
          let e = v.trim().toLowerCase();
          return e ? e1.filter(t => t.name.toLowerCase().includes(e)) : e1;
        }, [v]),
        D = Math.min(y, Math.max(S.length - 1, 0)),
        A = S[D],
        C = A ? `${e}-${A.id}` : void 0,
        R = e1.find(e => e.id === k) ?? e1[0];
      (0, React.useEffect)(() => {
        x && c.current?.focus({
          preventScroll: !0
        });
      }, [x]), (0, React.useEffect)(() => {
        let e = o.current,
          t = e?.querySelector('[data-active="true"]');
        if (!e || !t) return;
        let r = e.getBoundingClientRect(),
          a = t.getBoundingClientRect();
        if (a.top < r.top + 32) {
          let t = e.scrollTop - (r.top + 32 - a.top);
          e.scrollTop = t < 32 ? 0 : t;
        } else if (a.bottom > r.bottom - 32) {
          let t = e.scrollHeight - e.clientHeight,
            l = e.scrollTop + (a.bottom - r.bottom + 32);
          e.scrollTop = l > t - 32 ? t : l;
        }
      }, [D, v, o]), (0, React.useEffect)(() => () => {
        cancelAnimationFrame(_.current ?? 0), clearTimeout(u.current);
      }, []);
      let z = (0, React.useCallback)(e => {
          clearTimeout(u.current), h(!0), e ? (f(!1), _.current = requestAnimationFrame(() => f(!0))) : f(!0);
        }, []),
        $ = (0, React.useCallback)(() => {
          f(!1), clearTimeout(u.current), u.current = setTimeout(() => {
            h(!1), d.current?.focus({
              preventScroll: !0
            });
          }, 140);
        }, []);
      (0, React.useEffect)(() => {
        let e = t.current?.ownerDocument ?? document,
          r = e => {
            (e.metaKey || e.ctrlKey) && "k" === e.key.toLowerCase() && (e.preventDefault(), z(!1));
          };
        return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r);
      }, [z]);
      let E = (0, React.useCallback)(e => {
          g(e.id), w(""), j(0), $();
        }, [$]),
        T = e => {
          let t = S.length;
          0 !== t && j((D + e + t) % t);
        };
      return <section ref={t} className={eV("bg-white dark:bg-neutral-950", "text-neutral-900 dark:text-neutral-100", "relative flex h-full min-h-[540px] w-full items-center justify-center overflow-hidden p-4 sm:p-6")}><button ref={d} type="button" aria-haspopup="dialog" aria-expanded={x} onClick={() => z(!0)} className={eV(eX, eY, "max-w-full")}><span className="max-w-40 truncate">{R.name}</span><__mod_22728.n icon={__mod_20148.A} size={18} strokeWidth={2} aria-hidden="true" className={eV(eG, "shrink-0")} /><e2>⌘K</e2></button>{x && <><button type="button" tabIndex={-1} aria-label="Close menu" onClick={$} className={eV("bg-[oklch(28%_0.02_70/0.3)] dark:bg-neutral-950/70", "absolute inset-0 z-40 cursor-default", m ? "opacity-100" : eV(eQ, "opacity-0"))} /><div ref={r} role="dialog" aria-modal="true" aria-labelledby={`${e}-title`} onKeyDown={e => {
            if ("Escape" === e.key) {
              e.preventDefault(), $();
              return;
            }
            if ("Tab" !== e.key) return;
            let t = r.current;
            if (!t) return;
            let a = Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
            if (0 === a.length) return;
            let l = a[0],
              n = a[a.length - 1],
              o = t.ownerDocument.activeElement;
            e.shiftKey && o === l ? (e.preventDefault(), n.focus({
              preventScroll: !0
            })) : e.shiftKey || o !== n || (e.preventDefault(), l.focus({
              preventScroll: !0
            }));
          }} className={eV("flex max-h-[calc(100%-4rem)] flex-col overflow-hidden rounded-[calc(var(--rb-r-6xl,26px))] border border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none shadow-[0_0_0_1px_rgb(84_62_32/0.08),0_24px_56px_-20px_rgb(84_62_32/0.34),0_6px_16px_-8px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.65),0_24px_56px_-16px_rgb(0_0_0/0.8)]", "absolute left-1/2 top-[10%] z-50 max-h-[min(86%,calc(100%-4rem))] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2", m ? "opacity-100" : eV(eQ, "opacity-0"))}><h2 id={`${e}-title`} className="sr-only">Switch room</h2><div className="mx-1 mt-1 flex min-h-0 flex-1 flex-col overflow-y-auto rounded-[calc(var(--rb-r-5xl,22px))] border border-transparent bg-white dark:bg-neutral-950 shadow-[0_0_0_1px_rgb(84_62_32/0.10),0_1px_1px_rgb(84_62_32/0.07),0_2px_5px_-2px_rgb(84_62_32/0.14)] dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.07),0_0_0_1px_rgb(0_0_0/0.6),0_2px_4px_-1px_rgb(0_0_0/0.5)] [&:last-child]:mb-1"><div className={eV("flex min-h-12 shrink-0 items-center gap-2.5 border-b border-transparent bg-[var(--rb-n-100,oklch(97.7%_0.0055_80))] ps-4 pe-2 text-neutral-900/62 dark:text-neutral-100/62 dark:bg-neutral-100/4", "h-12")}><__mod_22728.n icon={__mod_66575.A} size={18} strokeWidth={2} aria-hidden="true" className="shrink-0" /><label htmlFor={`${e}-input`} className="sr-only">Find a room</label><input ref={c} id={`${e}-input`} role="combobox" aria-expanded="true" aria-controls={N} aria-activedescendant={C} aria-autocomplete="list" value={v} onChange={e => {
                  w(e.target.value), j(0);
                }} onKeyDown={e => {
                  if ("" === v && /^[1-6]$/.test(e.key)) {
                    let t = e1.find(t => t.shortcut === e.key);
                    if (t) {
                      e.preventDefault(), E(t);
                      return;
                    }
                  }
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault(), T(1);
                      break;
                    case "ArrowUp":
                      e.preventDefault(), T(-1);
                      break;
                    case "Home":
                      e.preventDefault(), j(0);
                      break;
                    case "End":
                      e.preventDefault(), j(Math.max(S.length - 1, 0));
                      break;
                    case "Enter":
                      if (!A) break;
                      e.preventDefault(), E(A);
                  }
                }} placeholder="Find a room" className="h-full min-w-0 flex-1 bg-transparent text-[16px]/[20px] font-semibold text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-900/55 dark:placeholder:text-neutral-100/55" /></div><div className="relative min-h-0 flex-1"><div ref={o} onScroll={s} className="h-full overflow-y-auto p-2">{S.length > 0 ? <div id={N} role="listbox" aria-label="Rooms">{S.map((t, r) => {
                      let l = r === D,
                        o = t.id === k;
                      return <button id={`${e}-${t.id}`} role="option" aria-selected={l} data-active={l} data-highlighted={l || void 0} type="button" tabIndex={-1} onPointerMove={() => j(r)} onMouseDown={e => {
                        e.preventDefault(), E(t);
                      }} className={eV("relative flex min-h-10 w-full cursor-default items-center gap-2.5 rounded-[calc(var(--rb-r-md,8px))] px-3 py-2 text-left text-[15px]/[20px] font-semibold text-neutral-900 outline-none select-none [&_svg]:shrink-0 [&_svg]:text-neutral-900/70 hover:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] focus-visible:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] data-[highlighted]:bg-[color-mix(in_oklab,var(--rb-n-200,oklch(92.8%_0.009_76))_74%,white)] aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(84%_0.15_165))_22%,transparent)] aria-disabled:cursor-not-allowed aria-disabled:text-neutral-900/40 dark:text-neutral-100 dark:[&_svg]:text-neutral-100/70 dark:hover:bg-neutral-100/7 dark:focus-visible:bg-neutral-100/7 dark:data-[highlighted]:bg-neutral-100/7 dark:aria-selected:bg-[color-mix(in_oklab,var(--rb-accent,oklch(81%_0.16_163))_18%,transparent)] dark:aria-disabled:text-neutral-100/40", "min-h-11")}><__mod_22728.n icon={__mod_4086.A} size={18} strokeWidth={2} aria-hidden="true" /><span className="flex min-w-0 flex-1 flex-col gap-0.5"><span className="truncate">{t.name}</span><span className={eV(eZ, "truncate")}>{o ? "Current room" : t.meta}</span></span><e2>{t.shortcut}</e2></button>;
                    })}</div> : <div className="flex flex-col items-center px-2.5 py-10 text-center"><p className="text-[19px]/[24px] font-extrabold tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">No room by that name</p><p className={eV("max-w-[48ch] text-[15px]/[22px] font-medium text-neutral-900/78 dark:text-neutral-100/78", "mt-1 max-w-xs text-balance")}>Clear the search to see all six rooms.</p><button type="button" onMouseDown={e => {
                      e.preventDefault(), w(""), j(0), c.current?.focus({
                        preventScroll: !0
                      });
                    }} className={eV(eX, eY, "mt-4")}>Clear search</button></div>}</div><div aria-hidden="true" className={eV("bg-linear-to-b from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 top-0 h-8", i.start ? "opacity-100" : "opacity-0")} /><div aria-hidden="true" className={eV("bg-linear-to-t from-white to-transparent transition-opacity duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-neutral-950", "pointer-events-none absolute inset-x-0 bottom-0 h-8", i.end ? "opacity-100" : "opacity-0")} /></div></div><div className={eV(e0, "flex h-10 shrink-0 items-center gap-4 px-5")}><span className="inline-flex items-center gap-1.5"><e2><__mod_22728.n icon={__mod_68820.A} size={14} strokeWidth={2} aria-hidden="true" /></e2>to switch</span><span className="ml-auto inline-flex shrink-0 items-center gap-1.5"><e2>1</e2><span aria-hidden="true">–</span><e2>6</e2>to jump</span></div></div></>}</section>;
    }
  },
  e8 = {
    "command-menu-1": 560,
    "command-menu-2": 500,
    "command-menu-3": 640,
    "command-menu-4": 400,
    "command-menu-5": 560,
    "command-menu-6": 540
  };

export { e5 as components };
export { e8 as heights };
