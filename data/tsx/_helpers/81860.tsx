/**
 * 内部辅助模块 81860（自动内联）
 * 被页面区块共享使用。
 */


function i(t) {
  this._context = t;
}
function A(t) {
  return new i(t);
}
i.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function (t, n) {
    switch (t *= 1, n *= 1, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
    }
  }
};

export { i as default, i };
export { A };
