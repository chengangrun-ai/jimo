import * as React from "react";
import * as __mod_57504 from "./57504";
import * as __mod_36250 from "./36250";
/**
 * 内部辅助模块 10168（自动内联）
 * 被页面区块共享使用。
 */

function o(e) {
  var t;
  let r,
    i = (t = e, (r = React.forwardRef((e, t) => {
      let {
        children: r,
        ...i
      } = e;
      if (React.isValidElement(r)) {
        var s;
        let e,
          o,
          a = (s = r, (o = (e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? s.ref : (o = (e = Object.getOwnPropertyDescriptor(s, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
          u = function (e, t) {
            let r = {
              ...t
            };
            for (let n in t) {
              let i = e[n],
                l = t[n];
              /^on[A-Z]/.test(n) ? i && l ? r[n] = (...e) => {
                let t = l(...e);
                return i(...e), t;
              } : i && (r[n] = i) : "style" === n ? r[n] = {
                ...i,
                ...l
              } : "className" === n && (r[n] = [i, l].filter(Boolean).join(" "));
            }
            return {
              ...e,
              ...r
            };
          }(i, r.props);
        return r.type !== React.Fragment && (u.ref = t ? (0, __mod_57504.t)(t, a) : a), React.cloneElement(r, u);
      }
      return React.Children.count(r) > 1 ? React.Children.only(null) : null;
    })).displayName = `${t}.SlotClone`, r),
    o = React.forwardRef((e, t) => {
      let {
          children: r,
          ...l
        } = e,
        o = React.Children.toArray(r),
        a = o.find(u);
      if (a) {
        let e = a.props.children,
          r = o.map(t => t !== a ? t : React.Children.count(e) > 1 ? React.Children.only(null) : React.isValidElement(e) ? e.props.children : null);
        return <i {...l} ref={t}>{React.isValidElement(e) ? React.cloneElement(e, void 0, r) : null}</i>;
      }
      return <i {...l} ref={t}>{r}</i>;
    });
  return o.displayName = `${e}.Slot`, o;
}
var a = Symbol("radix.slottable");
function u(e) {
  return React.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === a;
}
function N(e) {
  let t = e + "CollectionProvider",
    [r, a] = (0, __mod_36250.A)(t),
    [u, f] = r(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map()
    }),
    c = e => {
      let {
          scope: t,
          children: r
        } = e,
        i = React.useRef(null),
        l = React.useRef(new Map()).current;
      return <u scope={t} itemMap={l} collectionRef={i}>{r}</u>;
    };
  c.displayName = t;
  let d = e + "CollectionSlot",
    h = o(d),
    p = React.forwardRef((e, t) => {
      let {
          scope: r,
          children: n
        } = e,
        i = f(d, r),
        o = (0, __mod_57504.s)(t, i.collectionRef);
      return <H ref={o}>{n}</H>;
    });
  p.displayName = d;
  let y = e + "CollectionItemSlot",
    m = "data-radix-collection-item",
    v = o(y),
    w = React.forwardRef((e, t) => {
      let {
          scope: r,
          children: i,
          ...o
        } = e,
        a = React.useRef(null),
        u = (0, __mod_57504.s)(t, a),
        c = f(y, r);
      return React.useEffect(() => (c.itemMap.set(a, {
        ref: a,
        ...o
      }), () => void c.itemMap.delete(a))), <v {...{
        [m]: ""
      }} ref={u}>{i}</v>;
    });
  return w.displayName = y, [{
    Provider: c,
    Slot: p,
    ItemSlot: w
  }, function (t) {
    let r = f(e + "CollectionConsumer", t);
    return React.useCallback(() => {
      let e = r.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${m}]`));
      return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
    }, [r.collectionRef, r.itemMap]);
  }, a];
}
var c = new WeakMap();
function d(e, t) {
  var r, n;
  let i, l, s;
  if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
  let o = (r = e, n = t, i = r.length, (s = (l = h(n)) >= 0 ? l : i + l) < 0 || s >= i ? -1 : s);
  return -1 === o ? void 0 : e[o];
}
function h(e) {
  return e != e || 0 === e ? 0 : Math.trunc(e);
}
(class e extends Map {
  #e;
  constructor(e) {
    super(e), this.#e = [...super.keys()], c.set(this, !0);
  }
  set(e, t) {
    return c.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
  }
  insert(e, t, r) {
    let n,
      i = this.has(t),
      l = this.#e.length,
      s = h(e),
      o = s >= 0 ? s : l + s,
      a = o < 0 || o >= l ? -1 : o;
    if (a === this.size || i && a === this.size - 1 || -1 === a) return this.set(t, r), this;
    let u = this.size + +!i;
    s < 0 && o++;
    let f = [...this.#e],
      c = !1;
    for (; o < u; o++) if (o === o) {
      let l = f[o];
      f[o] === t && (l = f[o + 1]), i && this.delete(t), n = this.get(l), this.set(t, r);
    } else {
      c || f[o - 1] !== t || (c = !0);
      let r = f[c ? o : o - 1];
      n = this.get(r), this.delete(r), this.set(r, n);
    }
    return this;
  }
  with(t, r, n) {
    let i = new e(this);
    return i.insert(t, r, n), i;
  }
  before(e) {
    let t = this.#e.indexOf(e) - 1;
    if (!(t < 0)) return this.entryAt(t);
  }
  setBefore(e, t, r) {
    let n = this.#e.indexOf(e);
    return -1 === n ? this : this.insert(n, t, r);
  }
  after(e) {
    let t = this.#e.indexOf(e);
    if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t);
  }
  setAfter(e, t, r) {
    let n = this.#e.indexOf(e);
    return -1 === n ? this : this.insert(n + 1, t, r);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return this.#e = [], super.clear();
  }
  delete(e) {
    let t = super.delete(e);
    return t && this.#e.splice(this.#e.indexOf(e), 1), t;
  }
  deleteAt(e) {
    let t = this.keyAt(e);
    return void 0 !== t && this.delete(t);
  }
  at(e) {
    let t = d(this.#e, e);
    if (void 0 !== t) return this.get(t);
  }
  entryAt(e) {
    let t = d(this.#e, e);
    if (void 0 !== t) return [t, this.get(t)];
  }
  indexOf(e) {
    return this.#e.indexOf(e);
  }
  keyAt(e) {
    return d(this.#e, e);
  }
  from(e, t) {
    let r = this.indexOf(e);
    if (-1 === r) return;
    let n = r + t;
    return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n);
  }
  keyFrom(e, t) {
    let r = this.indexOf(e);
    if (-1 === r) return;
    let n = r + t;
    return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n);
  }
  find(e, t) {
    let r = 0;
    for (let n of this) {
      if (Reflect.apply(e, t, [n, r, this])) return n;
      r++;
    }
  }
  findIndex(e, t) {
    let r = 0;
    for (let n of this) {
      if (Reflect.apply(e, t, [n, r, this])) return r;
      r++;
    }
    return -1;
  }
  filter(t, r) {
    let n = [],
      i = 0;
    for (let e of this) Reflect.apply(t, r, [e, i, this]) && n.push(e), i++;
    return new e(n);
  }
  map(t, r) {
    let n = [],
      i = 0;
    for (let e of this) n.push([e[0], Reflect.apply(t, r, [e, i, this])]), i++;
    return new e(n);
  }
  reduce(...e) {
    let [t, r] = e,
      n = 0,
      i = r ?? this.at(0);
    for (let r of this) i = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [i, r, n, this]), n++;
    return i;
  }
  reduceRight(...e) {
    let [t, r] = e,
      n = r ?? this.at(-1);
    for (let r = this.size - 1; r >= 0; r--) {
      let i = this.at(r);
      n = r === this.size - 1 && 1 === e.length ? i : Reflect.apply(t, this, [n, i, r, this]);
    }
    return n;
  }
  toSorted(t) {
    return new e([...this.entries()].sort(t));
  }
  toReversed() {
    let t = new e();
    for (let e = this.size - 1; e >= 0; e--) {
      let r = this.keyAt(e),
        n = this.get(r);
      t.set(r, n);
    }
    return t;
  }
  toSpliced(...t) {
    let r = [...this.entries()];
    return r.splice(...t), new e(r);
  }
  slice(t, r) {
    let n = new e(),
      i = this.size - 1;
    if (void 0 === t) return n;
    t < 0 && (t += this.size), void 0 !== r && r > 0 && (i = r - 1);
    for (; t <= i; t++) {
      let t = this.keyAt(t),
        r = this.get(t);
      n.set(t, r);
    }
    return n;
  }
  every(e, t) {
    let r = 0;
    for (let n of this) {
      if (!Reflect.apply(e, t, [n, r, this])) return !1;
      r++;
    }
    return !0;
  }
  some(e, t) {
    let r = 0;
    for (let n of this) {
      if (Reflect.apply(e, t, [n, r, this])) return !0;
      r++;
    }
    return !1;
  }
});

// 自动移除：f 在本模块不存在
const H: any = h;

export { N };
