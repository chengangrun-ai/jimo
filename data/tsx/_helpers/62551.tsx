/**
 * 内部辅助模块 62551（自动内联）
 * 被页面区块共享使用。
 */


"use strict";

function n(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (n = function (e) {
    return e ? r : t;
  })(e);
}
function u(e, t) {
  if (!t && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var r = n(t);
  if (r && r.has(e)) return r.get(e);
  var u = {
      __proto__: null
    },
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
    var o = l ? Object.getOwnPropertyDescriptor(e, a) : null;
    o && (o.get || o.set) ? Object.defineProperty(u, a, o) : u[a] = e[a];
  }
  return u.default = e, r && r.set(e, u), u;
}

export { u as _ };
