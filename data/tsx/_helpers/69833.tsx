import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import * as __mod_32963 from "./32963";
import * as __mod_47962 from "./47962";
/**
 * 内部辅助模块 69833（自动内联）
 * 被页面区块共享使用。
 */

let d = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: .7
};
function A({
  children: e
}) {
  return <__mod_32963.Kq delayDuration={250} skipDelayDuration={400}>{e}</__mod_32963.Kq>;
}
function P({
  label: e,
  children: t,
  sideOffset: r = 8
}) {
  let [l, c] = React.useState(!1);
  return <__mod_32963.bL open={l} onOpenChange={c}><__mod_32963.l9 asChild={!0}>{t}</__mod_32963.l9><__mod_47962.N>{l && <__mod_32963.ZL forceMount={!0}><__mod_32963.UC side="top" align="center" sideOffset={r} collisionPadding={12} className="z-50"><motion.div initial={{
            opacity: 0,
            y: 4,
            scale: .96
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} exit={{
            opacity: 0,
            y: 2,
            scale: .98
          }} transition={d} className="pointer-events-none w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md bg-foreground px-2 py-1 text-[11px] font-medium tracking-tight text-background shadow-sm select-none">{e}</motion.div></__mod_32963.UC></__mod_32963.ZL>}</__mod_47962.N></__mod_32963.bL>;
}

export { d as default, d };
export { A, P };
