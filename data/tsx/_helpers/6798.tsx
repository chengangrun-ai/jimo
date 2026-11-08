/**
 * 内部辅助模块 6798（自动内联）
 * 被页面区块共享使用。
 */


let i = Math.PI,
  r = 2 * i,
  o = r - 1e-6;
function u(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
}
class s {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == t ? u : function (t) {
      let n = Math.floor(t);
      if (!(n >= 0)) throw Error(`invalid digits: ${t}`);
      if (n > 15) return u;
      let e = 10 ** n;
      return function (t) {
        this._ += t[0];
        for (let n = 1, i = t.length; n < i; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
      };
    }(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, e, i) {
    this._append`Q${+t},${+n},${this._x1 = +e},${this._y1 = +i}`;
  }
  bezierCurveTo(t, n, e, i, r, o) {
    this._append`C${+t},${+n},${+e},${+i},${this._x1 = +r},${this._y1 = +o}`;
  }
  arcTo(t, n, e, r, o) {
    if (t *= 1, n *= 1, e *= 1, r *= 1, (o *= 1) < 0) throw Error(`negative radius: ${o}`);
    let u = this._x1,
      s = this._y1,
      c = e - t,
      l = r - n,
      h = u - t,
      a = s - n,
      f = h * h + a * a;
    if (null === this._x1) this._append`M${this._x1 = t},${this._y1 = n}`;else if (f > 1e-6) if (Math.abs(a * c - l * h) > 1e-6 && o) {
      let p = e - u,
        y = r - s,
        d = c * c + l * l,
        _ = Math.sqrt(d),
        x = Math.sqrt(f),
        k = o * Math.tan((i - Math.acos((d + f - (p * p + y * y)) / (2 * _ * x))) / 2),
        A = k / x,
        g = k / _;
      Math.abs(A - 1) > 1e-6 && this._append`L${t + A * h},${n + A * a}`, this._append`A${o},${o},0,0,${+(a * p > h * y)},${this._x1 = t + g * c},${this._y1 = n + g * l}`;
    } else this._append`L${this._x1 = t},${this._y1 = n}`;
  }
  arc(t, n, e, u, s, c) {
    if (t *= 1, n *= 1, e *= 1, c = !!c, e < 0) throw Error(`negative radius: ${e}`);
    let l = e * Math.cos(u),
      h = e * Math.sin(u),
      a = t + l,
      f = n + h,
      p = 1 ^ c,
      y = c ? u - s : s - u;
    null === this._x1 ? this._append`M${a},${f}` : (Math.abs(this._x1 - a) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && this._append`L${a},${f}`, e && (y < 0 && (y = y % r + r), y > o ? this._append`A${e},${e},0,1,${p},${t - l},${n - h}A${e},${e},0,1,${p},${this._x1 = a},${this._y1 = f}` : y > 1e-6 && this._append`A${e},${e},0,${+(y >= i)},${p},${this._x1 = t + e * Math.cos(s)},${this._y1 = n + e * Math.sin(s)}`);
  }
  rect(t, n, e, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${e *= 1}v${+i}h${-e}Z`;
  }
  toString() {
    return this._;
  }
}
function c(t) {
  let n = 3;
  return t.digits = function (e) {
    if (!arguments.length) return n;
    if (null == e) n = null;else {
      let t = Math.floor(e);
      if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
      n = t;
    }
    return t;
  }, () => new s(n);
}
s.prototype;

export { c as i };
