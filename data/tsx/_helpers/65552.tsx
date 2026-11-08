/**
 * 内部辅助模块 65552（自动内联）
 * 被页面区块共享使用。
 */


var n = function (e, t) {
  return (n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  })(e, t);
};
function o(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var a = function () {
  return (a = Object.assign || function (e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    return e;
  }).apply(this, arguments);
};
function i(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function l(e, t, r, n) {
  var o,
    a = arguments.length,
    i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
  return a > 3 && i && Object.defineProperty(t, r, i), i;
}
function u(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function c(e, t, r, n, o, a) {
  function i(e) {
    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
    return e;
  }
  for (var l, u = n.kind, c = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, d = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
    var y = {};
    for (var h in n) y[h] = "access" === h ? {} : n[h];
    for (var h in n.access) y.access[h] = n.access[h];
    y.addInitializer = function (e) {
      if (f) throw TypeError("Cannot add initializers after decoration has completed");
      a.push(i(e || null));
    };
    var b = (0, r[p])("accessor" === u ? {
      get: d.get,
      set: d.set
    } : d[c], y);
    if ("accessor" === u) {
      if (void 0 === b) continue;
      if (null === b || "object" != typeof b) throw TypeError("Object expected");
      (l = i(b.get)) && (d.get = l), (l = i(b.set)) && (d.set = l), (l = i(b.init)) && o.unshift(l);
    } else (l = i(b)) && ("field" === u ? o.unshift(l) : d[c] = l);
  }
  s && Object.defineProperty(s, n.name, d), f = !0;
}
function s(e, t, r) {
  for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
  return n ? r : void 0;
}
function d(e) {
  return "symbol" == typeof e ? e : "".concat(e);
}
function f(e, t, r) {
  return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
    configurable: !0,
    value: r ? "".concat(r, " ", t) : t
  });
}
function p(e, t) {
  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}
function y(e, t, r, n) {
  return new (r || (r = Promise))(function (o, a) {
    function i(e) {
      try {
        u(n.next(e));
      } catch (e) {
        a(e);
      }
    }
    function l(e) {
      try {
        u(n.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function u(e) {
      var t;
      e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
        e(t);
      })).then(i, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function h(e, t) {
  var r,
    n,
    o,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    },
    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
  return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
  function l(l) {
    return function (u) {
      var c = [l, u];
      if (r) throw TypeError("Generator is already executing.");
      for (; i && (i = 0, c[0] && (a = 0)), a;) try {
        if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
        switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return a.label++, {
              value: c[1],
              done: !1
            };
          case 5:
            a.label++, n = c[1], c = [0];
            continue;
          case 7:
            c = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
              a = 0;
              continue;
            }
            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
              a.label = c[1];
              break;
            }
            if (6 === c[0] && a.label < o[1]) {
              a.label = o[1], o = c;
              break;
            }
            if (o && a.label < o[2]) {
              a.label = o[2], a.ops.push(c);
              break;
            }
            o[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        c = t.call(e, a);
      } catch (e) {
        c = [6, e], n = 0;
      } finally {
        r = o = 0;
      }
      if (5 & c[0]) throw c[1];
      return {
        value: c[0] ? c[1] : void 0,
        done: !0
      };
    };
  }
}
var b = Object.create ? function (e, t, r, n) {
  void 0 === n && (n = r);
  var o = Object.getOwnPropertyDescriptor(t, r);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
    enumerable: !0,
    get: function () {
      return t[r];
    }
  }), Object.defineProperty(e, n, o);
} : function (e, t, r, n) {
  void 0 === n && (n = r), e[n] = t[r];
};
function v(e, t) {
  for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r);
}
function m(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && "number" == typeof e.length) return {
    next: function () {
      return e && n >= e.length && (e = void 0), {
        value: e && e[n++],
        done: !e
      };
    }
  };
  throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function g(e, t) {
  var r = "function" == typeof Symbol && e[Symbol.iterator];
  if (!r) return e;
  var n,
    o,
    a = r.call(e),
    i = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value);
  } catch (e) {
    o = {
      error: e
    };
  } finally {
    try {
      n && !n.done && (r = a.return) && r.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function w() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
  return e;
}
function x() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), o = 0, t = 0; t < r; t++) for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++) n[o] = a[i];
  return n;
}
function _(e, t, r) {
  if (r || 2 == arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
  return e.concat(n || Array.prototype.slice.call(t));
}
function j(e) {
  return this instanceof j ? (this.v = e, this) : new j(e);
}
function O(e, t, r) {
  if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
  var n,
    o = r.apply(e, t || []),
    a = [];
  return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function (e) {
    return function (t) {
      return Promise.resolve(t).then(e, c);
    };
  }), n[Symbol.asyncIterator] = function () {
    return this;
  }, n;
  function i(e, t) {
    o[e] && (n[e] = function (t) {
      return new Promise(function (r, n) {
        a.push([e, t, r, n]) > 1 || l(e, t);
      });
    }, t && (n[e] = t(n[e])));
  }
  function l(e, t) {
    try {
      var r;
      (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(u, c) : s(a[0][2], r);
    } catch (e) {
      s(a[0][3], e);
    }
  }
  function u(e) {
    l("next", e);
  }
  function c(e) {
    l("throw", e);
  }
  function s(e, t) {
    e(t), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function k(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function (e) {
    throw e;
  }), n("return"), t[Symbol.iterator] = function () {
    return this;
  }, t;
  function n(n, o) {
    t[n] = e[n] ? function (t) {
      return (r = !r) ? {
        value: j(e[n](t)),
        done: !1
      } : o ? o(t) : t;
    } : o;
  }
}
function P(e) {
  if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
  var t,
    r = e[Symbol.asyncIterator];
  return r ? r.call(e) : (e = m(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
    return this;
  }, t);
  function n(r) {
    t[r] = e[r] && function (t) {
      return new Promise(function (n, o) {
        var a, i, l;
        a = n, i = o, l = (t = e[r](t)).done, Promise.resolve(t.value).then(function (e) {
          a({
            value: e,
            done: l
          });
        }, i);
      });
    };
  }
}
function E(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", {
    value: t
  }) : e.raw = t, e;
}
var A = Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e.default = t;
  },
  S = function (e) {
    return (S = Object.getOwnPropertyNames || function (e) {
      var t = [];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
      return t;
    })(e);
  };
function R(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (null != e) for (var r = S(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
  return A(t, e), t;
}
function I(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function C(e, t, r, n) {
  if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
  if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
}
function M(e, t, r, n, o) {
  if ("m" === n) throw TypeError("Private method is not writable");
  if ("a" === n && !o) throw TypeError("Private accessor was defined without a setter");
  if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
  return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}
function T(e, t) {
  if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
  return "function" == typeof e ? t === e : e.has(t);
}
function D(e, t, r) {
  if (null != t) {
    var n, o;
    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
    if (r) {
      if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (void 0 === n) {
      if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose], r && (o = n);
    }
    if ("function" != typeof n) throw TypeError("Object not disposable.");
    o && (n = function () {
      try {
        o.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    }), e.stack.push({
      value: t,
      dispose: n,
      async: r
    });
  } else r && e.stack.push({
    async: !0
  });
  return t;
}
var N = "function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
};
function L(e) {
  function t(t) {
    e.error = e.hasError ? new N(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
  }
  var r,
    n = 0;
  return function o() {
    for (; r = e.stack.pop();) try {
      if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
      if (r.dispose) {
        var a = r.dispose.call(r.value);
        if (r.async) return n |= 2, Promise.resolve(a).then(o, function (e) {
          return t(e), o();
        });
      } else n |= 1;
    } catch (e) {
      t(e);
    }
    if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }();
}
function $(e, t) {
  return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (e, r, n, o, a) {
    return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e;
  }) : e;
}
let V = {
  __extends: o,
  __assign: a,
  __rest: i,
  __decorate: l,
  __param: u,
  __esDecorate: c,
  __runInitializers: s,
  __propKey: d,
  __setFunctionName: f,
  __metadata: p,
  __awaiter: y,
  __generator: h,
  __createBinding: b,
  __exportStar: v,
  __values: m,
  __read: g,
  __spread: w,
  __spreadArrays: x,
  __spreadArray: _,
  __await: j,
  __asyncGenerator: O,
  __asyncDelegator: k,
  __asyncValues: P,
  __makeTemplateObject: E,
  __importStar: R,
  __importDefault: I,
  __classPrivateFieldGet: C,
  __classPrivateFieldSet: M,
  __classPrivateFieldIn: T,
  __addDisposableResource: D,
  __disposeResources: L,
  __rewriteRelativeImportExtension: $
};

export { D as __addDisposableResource };
export { a as __assign };
export { k as __asyncDelegator };
export { O as __asyncGenerator };
export { P as __asyncValues };
export { j as __await };
export { y as __awaiter };
export { C as __classPrivateFieldGet };
export { T as __classPrivateFieldIn };
export { M as __classPrivateFieldSet };
export { b as __createBinding };
export { l as __decorate };
export { L as __disposeResources };
export { c as __esDecorate };
export { v as __exportStar };
export { o as __extends };
export { h as __generator };
export { I as __importDefault };
export { R as __importStar };
export { E as __makeTemplateObject };
export { p as __metadata };
export { u as __param };
export { d as __propKey };
export { g as __read };
export { i as __rest };
export { $ as __rewriteRelativeImportExtension };
export { s as __runInitializers };
export { f as __setFunctionName };
export { w as __spread };
export { _ as __spreadArray };
export { x as __spreadArrays };
export { m as __values };
export default V;
