import * as React from "react";
import * as __mod_39431 from "./39431";
import * as __mod_30701 from "./30701";
import * as __mod_48050 from "./48050";
/**
 * 内部辅助模块 83670（自动内联）
 * 被页面区块共享使用。
 */

"use strict";

class l extends React.Component {
  static getDerivedStateFromError() {
    return {
      hasError: !0
    };
  }
  componentDidCatch(e, t) {}
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
  constructor(...e) {
    super(...e), this.state = {
      hasError: !1
    };
  }
}
// 原始代码用 next/dynamic 懒加载 48050 这个 3D 分块；本地没有按需分包机制，
// 已把该模块从原始 bundle 抽出成本地 helper，这里改成直接引用。
let o = (__mod_48050 as any).default || (__mod_48050 as any),
  c = {
    color: "#b487f0",
    pitch: 4,
    fill: 1,
    shape: "square",
    feather: 1,
    speed: .2,
    warp: .85,
    warpScale: 4,
    detailScale: 2,
    waveScale: 2,
    falloff: 5.5,
    brightness: 5,
    ambient: 0,
    gamma: 3,
    vignette: 1,
    opacity: 1,
    cursorPull: .1,
    cursorGlow: .06,
    cursorReach: .25
  },
  d = {
    dark: {
      ...c,
      hotColor: "#0b0410"
    },
    light: {
      ...c,
      hotColor: "#ffffff"
    }
  },
  u = () => () => {},
  m = null;
function p() {
  if (null !== m) return m;
  try {
    let e = document.createElement("canvas").getContext("webgl2", {
      failIfMajorPerformanceCaveat: !1
    });
    m = null !== e && !e.isContextLost(), e?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    m = !1;
  }
  return m;
}
function X({
  className: e,
  cursorInteraction: t = !0
}) {
  let {
      resolvedTheme: r
    } = (0, __mod_30701.D)(),
    a = (0, React.useSyncExternalStore)(u, () => !0, () => !1),
    c = (0, React.useSyncExternalStore)(u, p, () => !1),
    m = d[!a || "dark" === r ? "dark" : "light"];
  return c ? <l fallback={null} label="MosaicWavesBackdrop"><O className={e} backgroundColor="transparent" cursorInteraction={t} {...m} /></l> : null;
}

export { l as default, l };
const O: any = o;

export { X };
