import * as __mod_2253 from "./2253";
/**
 * 内部辅助模块 90822（自动内联）
 * 被页面区块共享使用。
 */


"use strict";

function i(e, t, a, i) {
  var s;
  return (s = class extends __mod_2253.BKk {
    constructor(s) {
      for (const i in super({
        vertexShader: t,
        fragmentShader: a,
        ...s
      }), e) this.uniforms[i] = new __mod_2253.nc$(e[i]), Object.defineProperty(this, i, {
        get() {
          return this.uniforms[i].value;
        },
        set(e) {
          this.uniforms[i].value = e;
        }
      });
      this.uniforms = __mod_2253.LlO.clone(this.uniforms), null == i || i(this);
    }
  }).key = __mod_2253.cj9.generateUUID(), s;
}

export { i as b };
