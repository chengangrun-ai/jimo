/**
 * 内部辅助模块 19451（自动内联）
 * 被页面区块共享使用。
 */


var r = new WeakMap(),
  o = new WeakMap(),
  i = {},
  a = 0,
  l = function (e) {
    return e && (e.host || l(e.parentNode));
  },
  u = function (e, t, n, u) {
    var c = (Array.isArray(e) ? e : [e]).map(function (e) {
      if (t.contains(e)) return e;
      var n = l(e);
      return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null);
    }).filter(function (e) {
      return !!e;
    });
    i[n] || (i[n] = new WeakMap());
    var s = i[n],
      d = [],
      f = new Set(),
      p = new Set(c),
      m = function (e) {
        !e || f.has(e) || (f.add(e), m(e.parentNode));
      };
    c.forEach(m);
    var v = function (e) {
      !e || p.has(e) || Array.prototype.forEach.call(e.children, function (e) {
        if (f.has(e)) v(e);else try {
          var t = e.getAttribute(u),
            i = null !== t && "false" !== t,
            a = (r.get(e) || 0) + 1,
            l = (s.get(e) || 0) + 1;
          r.set(e, a), s.set(e, l), d.push(e), 1 === a && i && o.set(e, !0), 1 === l && e.setAttribute(n, "true"), i || e.setAttribute(u, "true");
        } catch (t) {
          console.error("aria-hidden: cannot operate on ", e, t);
        }
      });
    };
    return v(t), f.clear(), a++, function () {
      d.forEach(function (e) {
        var t = r.get(e) - 1,
          i = s.get(e) - 1;
        r.set(e, t), s.set(e, i), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), i || e.removeAttribute(n);
      }), --a || (r = new WeakMap(), r = new WeakMap(), o = new WeakMap(), i = {});
    };
  },
  Eq = function (e, t, n) {
    void 0 === n && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), u(r, o, n, "aria-hidden")) : function () {
      return null;
    };
  };

// 自动移除：c 在本模块不存在
export { c as Eq };
