import * as React from "react";
import * as __mod_13955 from "./13955";
import * as __mod_28592 from "./28592";
import * as __mod_73350 from "./73350";
/**
 * 内部辅助模块 39260（自动内联）
 * 被页面区块共享使用。
 */

let o = "preferred-package-manager";
let c = [{
  value: "npm",
  label: "npm"
}, {
  value: "pnpm",
  label: "pnpm"
}, {
  value: "yarn",
  label: "yarn"
}, {
  value: "bun",
  label: "bun"
}];
function Dependencies({
  dependencyList: e
}) {
  let {
      packageManager: t,
      setPackageManager: n,
      isLoaded: d
    } = function () {
      let [e, t] = (0, React.useState)("npm"),
        [n, s] = (0, React.useState)(!1);
      return (0, React.useEffect)(() => {
        try {
          var e;
          let n = localStorage.getItem(o);
          n && (e = n, ["npm", "pnpm", "yarn", "bun"].includes(e)) && t(n);
        } catch (e) {
          console.error("Failed to load package manager preference:", e);
        } finally {
          s(!0);
        }
      }, []), {
        packageManager: e,
        setPackageManager: e => {
          try {
            localStorage.setItem(o, e), t(e);
          } catch (e) {
            console.error("Failed to save package manager preference:", e);
          }
        },
        isLoaded: n
      };
    }(),
    u = "string" == typeof e ? e.trim() : e;
  if (!u || "string" == typeof u && 0 === u.length) return null;
  let p = d ? t : "npm",
    g = "string" == typeof u ? u.split(/\s+/) : [...u];
  for (let [e, t] of [["three", "@types/three"], ["matter-js", "@types/matter-js"]]) g.includes(e) && !g.includes(t) && g.push(t);
  let f = function (e, t) {
    let n = "string" == typeof t ? t : t.join(" ");
    switch (e) {
      case "pnpm":
        return `pnpm add ${n}`;
      case "yarn":
        return `yarn add ${n}`;
      case "bun":
        return `bun add ${n}`;
      default:
        return `npm install ${n}`;
    }
  }(p, g);
  return <div className="mb-6"><div className="flex items-center justify-between mb-3 gap-3 flex-wrap"><h3 className="text-2xl font-semibold tracking-tight">Installation</h3><__mod_13955.I ariaLabel="Package manager" options={c} value={p} onChange={n} /></div><div className="relative border rounded-lg bg-muted/50 overflow-hidden"><__mod_28592.CopyButton value={f} label="Copy install command" size="md" className="absolute top-2 right-2 z-10 bg-background/70 backdrop-blur" /><__mod_73350.b code={f} language="bash" /></div></div>;
}

export { o as default, o };
export { Dependencies };
