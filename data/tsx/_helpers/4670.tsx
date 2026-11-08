/**
 * 内部辅助模块 4670（自动内联）
 * 被页面区块共享使用。
 */


function i(t, n, e) {
  var i = t._x1 - t._x0,
    r = n - t._x1,
    o = (t._y1 - t._y0) / (i || r < 0 && -0),
    u = (e - t._y1) / (r || i < 0 && -0);
  return ((o < 0 ? -1 : 1) + (u < 0 ? -1 : 1)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs((o * r + u * i) / (i + r))) || 0;
}
function r(t, n) {
  var e = t._x1 - t._x0;
  return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
}
function o(t, n, e) {
  var i = t._x0,
    r = t._y0,
    o = t._x1,
    u = t._y1,
    s = (o - i) / 3;
  t._context.bezierCurveTo(i + s, r + s * n, o - s, u - s * e, o, u);
}
function u(t) {
  this._context = t;
}
function s(t) {
  this._context = t;
}
function G(t) {
  return new u(t);
}
u.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        o(this, this._t0, r(this, this._t0));
    }
    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function (t, n) {
    if (n *= 1, (t *= 1) !== this._x1 || n !== this._y1) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, o(this, r(this, e = i(this, t, n)), NaN);
          break;
        default:
          o(this, this._t0, e = i(this, t, n));
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = NaN;
    }
  }
}, (function (t) {
  this._context = new s(t);
}.prototype = Object.create(u.prototype)).point = function (t, n) {
  u.prototype.point.call(this, n, t);
}, s.prototype = {
  moveTo: function (t, n) {
    this._context.moveTo(n, t);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (t, n) {
    this._context.lineTo(n, t);
  },
  bezierCurveTo: function (t, n, e, i, r, o) {
    this._context.bezierCurveTo(n, t, i, e, o, r);
  }
};

export { i as default, i };
export { G };
