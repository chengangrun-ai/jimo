import * as __mod_14727 from "./14727";
/**
 * 内部辅助模块 8671（自动内联）
 * 被页面区块共享使用。
 */


class s {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (0, __mod_14727.Kq)(this.subscriptions, t), () => (0, __mod_14727.Ai)(this.subscriptions, t);
  }
  notify(t, e, i) {
    let n = this.subscriptions.length;
    if (n) if (1 === n) this.subscriptions[0](t, e, i);else for (let s = 0; s < n; s++) {
      let n = this.subscriptions[s];
      n && n(t, e, i);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}

export { s as v };
