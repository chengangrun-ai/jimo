/**
 * 内部辅助模块 13195（自动内联）
 * 被页面区块共享使用。
 */


let n = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  },
  B = {};
for (let t in n) B[t] = {
  isEnabled: e => n[t].some(t => !!e[t])
};

export { n as default, n };
export { B };
