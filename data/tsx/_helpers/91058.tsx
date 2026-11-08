/**
 * 内部辅助模块 91058（自动内联）
 * 被页面区块共享使用。
 */


"use strict";

let n = [{
    name: "Starter",
    lifetime: 129,
    annual: 79
  }, {
    name: "Pro",
    lifetime: 249,
    annual: 149
  }, {
    name: "Ultimate",
    lifetime: 349,
    annual: 199
  }],
  B$ = .35,
  N$ = .3,
  MB = Math.round(35),
  l = Math.round(30);
n.map(e => Math.floor(e.lifetime * B$));

export { n as s$ };
export { l as qG };
export { B$, MB, N$ };
