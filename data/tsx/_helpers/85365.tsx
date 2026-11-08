/**
 * 内部辅助模块 85365（自动内联）
 * 被页面区块共享使用。
 */


class n {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise(t => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
}

export { n as q };
