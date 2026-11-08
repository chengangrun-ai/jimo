import * as __mod_7775 from "./7775";
/**
 * 内部辅助模块 62129（自动内联）
 * 被页面区块共享使用。
 */


let r;
var i = __mod_7775.hp;
class a extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
}
function o() {
  return "undefined" != typeof performance ? performance.now() : Date.now();
}
let s = (e, t) => e + (t - e % t) % t;
async function l(e) {
  let t,
    n,
    r = {};
  function i(e) {
    n = e, r.HEAPU8 = new Uint8Array(e), r.HEAPU32 = new Uint32Array(e);
  }
  let a = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function l(e, t) {
    return e ? function (e, t, n = 1024) {
      let r = t + n;
      for (; e[t] && !(t >= r);) ++t;
      if (t - t > 16 && e.buffer && a) return a.decode(e.subarray(t, t));
      let o = "";
      for (; t < t;) {
        let n = e[t++];
        if (!(128 & n)) {
          o += String.fromCharCode(n);
          continue;
        }
        let r = 63 & e[t++];
        if ((224 & n) == 192) {
          o += String.fromCharCode((31 & n) << 6 | r);
          continue;
        }
        let i = 63 & e[t++];
        if ((n = (240 & n) == 224 ? (15 & n) << 12 | r << 6 | i : (7 & n) << 18 | r << 12 | i << 6 | 63 & e[t++]) < 65536) o += String.fromCharCode(n);else {
          let e = n - 65536;
          o += String.fromCharCode(55296 | e >> 10, 56320 | 1023 & e);
        }
      }
      return o;
    }(r.HEAPU8, e, t) : "";
  }
  let u = {
    emscripten_get_now: o,
    emscripten_memcpy_big: function (e, t, n) {
      r.HEAPU8.copyWithin(e, t, t + n);
    },
    emscripten_resize_heap: function (e) {
      let a = r.HEAPU8.length;
      if ((e >>>= 0) > 0x80000000) return !1;
      for (let r = 1; r <= 4; r *= 2) {
        let o = a * (1 + .2 / r);
        if (o = Math.min(o, e + 0x6000000), function (e) {
          try {
            return t.grow(e - n.byteLength + 65535 >>> 16), i(t.buffer), 1;
          } catch {}
        }(Math.min(0x80000000, s(Math.max(e, o), 65536)))) return !0;
      }
      return !1;
    },
    fd_write: () => 0
  };
  async function c() {
    let n = await e({
      env: u,
      wasi_snapshot_preview1: u
    });
    i((t = n.memory).buffer), Object.assign(r, n), r.UTF8ToString = l;
  }
  return await c(), r;
}
var u = Object.defineProperty,
  c = (e, t, n) => {
    let r;
    return (r = "symbol" != typeof t ? t + "" : t) in e ? u(e, r, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[r] = n;
  };
let h = null;
class d {
  constructor(e) {
    c(this, "utf16Length"), c(this, "utf8Length"), c(this, "utf16Value"), c(this, "utf8Value"), c(this, "utf16OffsetToUtf8"), c(this, "utf8OffsetToUtf16");
    const t = e.length,
      n = d._utf8ByteLength(e),
      r = n !== t,
      i = r ? new Uint32Array(t + 1) : null;
    r && (i[t] = n);
    const a = r ? new Uint32Array(n + 1) : null;
    r && (a[n] = t);
    const o = new Uint8Array(n);
    let s = 0;
    for (let n = 0; n < t; n++) {
      const l = e.charCodeAt(n);
      let c = !1;
      if (l >= 55296 && l <= 56319 && n + 1 < t) {
        const t = e.charCodeAt(n + 1);
        t >= 56320 && t <= 57343 && (u = (l - 55296 << 10) + 65536 | t - 56320, c = !0);
      }
      r && (i[n] = s, c && (i[n + 1] = s), l <= 127 ? a[s + 0] = n : l <= 2047 ? (a[s + 0] = n, a[s + 1] = n) : l <= 65535 ? (a[s + 0] = n, a[s + 1] = n, a[s + 2] = n) : (a[s + 0] = n, a[s + 1] = n, a[s + 2] = n, a[s + 3] = n)), l <= 127 ? o[s++] = l : (l <= 2047 ? o[s++] = 192 | (1984 & l) >>> 6 : (l <= 65535 ? o[s++] = 224 | (61440 & l) >>> 12 : (o[s++] = 240 | (1835008 & l) >>> 18, o[s++] = 128 | (258048 & l) >>> 12), o[s++] = 128 | (4032 & l) >>> 6), o[s++] = 128 | (63 & l) >>> 0), c && n++;
    }
    this.utf16Length = t, this.utf8Length = n, this.utf16Value = e, this.utf8Value = o, this.utf16OffsetToUtf8 = i, this.utf8OffsetToUtf16 = a;
  }
  static _utf8ByteLength(e) {
    let t = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let i = e.charCodeAt(n),
        o = !1;
      if (i >= 55296 && i <= 56319 && n + 1 < r) {
        let t = e.charCodeAt(n + 1);
        t >= 56320 && t <= 57343 && (a = (i - 55296 << 10) + 65536 | t - 56320, o = !0);
      }
      i <= 127 ? t += 1 : i <= 2047 ? t += 2 : i <= 65535 ? t += 3 : t += 4, o && n++;
    }
    return t;
  }
  createString(e) {
    let t = e.omalloc(this.utf8Length);
    return e.HEAPU8.set(this.utf8Value, t), t;
  }
}
let p = class e {
  constructor(t) {
    if (c(this, "id", ++e.LAST_ID), c(this, "_onigBinding"), c(this, "content"), c(this, "utf16Length"), c(this, "utf8Length"), c(this, "utf16OffsetToUtf8"), c(this, "utf8OffsetToUtf16"), c(this, "ptr"), !h) throw new a("Must invoke loadWasm first.");
    this._onigBinding = h, this.content = t;
    const n = new d(t);
    this.utf16Length = n.utf16Length, this.utf8Length = n.utf8Length, this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16, this.utf8Length < 1e4 && !e._sharedPtrInUse ? (e._sharedPtr || (e._sharedPtr = h.omalloc(1e4)), e._sharedPtrInUse = !0, h.HEAPU8.set(n.utf8Value, e._sharedPtr), this.ptr = e._sharedPtr) : this.ptr = n.createString(h);
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
  }
  dispose() {
    this.ptr === e._sharedPtr ? e._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
  }
};
c(p, "LAST_ID", 0), c(p, "_sharedPtr", 0), c(p, "_sharedPtrInUse", !1);
class m {
  constructor(e) {
    if (c(this, "_onigBinding"), c(this, "_ptr"), !h) throw new a("Must invoke loadWasm first.");
    const t = [],
      n = [];
    for (let r = 0, i = e.length; r < i; r++) {
      const i = new d(e[r]);
      t[r] = i.createString(h), n[r] = i.utf8Length;
    }
    const r = h.omalloc(4 * e.length);
    h.HEAPU32.set(t, r / 4);
    const i = h.omalloc(4 * e.length);
    h.HEAPU32.set(n, i / 4);
    const o = h.createOnigScanner(r, i, e.length);
    for (let n = 0, r = e.length; n < r; n++) h.ofree(t[n]);
    h.ofree(i), h.ofree(r), 0 === o && function (e) {
      throw new a(e.UTF8ToString(e.getLastOnigError()));
    }(h), this._onigBinding = h, this._ptr = o;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e, t, n) {
    let r = 0;
    if ("number" == typeof n && (r = n), "string" == typeof e) {
      e = new p(e);
      let n = this._findNextMatchSync(e, t, !1, r);
      return e.dispose(), n;
    }
    return this._findNextMatchSync(e, t, !1, r);
  }
  _findNextMatchSync(e, t, n, r) {
    let i = this._onigBinding,
      a = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(t), r);
    if (0 === a) return null;
    let o = i.HEAPU32,
      s = a / 4,
      l = o[s++],
      u = o[s++],
      c = [];
    for (let t = 0; t < u; t++) {
      let n = e.convertUtf8OffsetToUtf16(o[s++]),
        r = e.convertUtf8OffsetToUtf16(o[s++]);
      c[t] = {
        start: n,
        end: r,
        length: r - n
      };
    }
    return {
      index: l,
      captureIndices: c
    };
  }
}
function g(e) {
  return r || (r = async function () {
    h = await l(async t => {
      if ("function" == typeof (n = await e) && (n = await e(t)), "function" == typeof e && (n = await e(t)), "function" == typeof e.instantiator) n = await e.instantiator(t);else if ("function" == typeof e.default) n = await e.default(t);else {
        var r, a, o, s;
        if (void 0 !== e.data && (n = e.data), r = e, "undefined" != typeof Response && r instanceof Response) {
          n = "function" == typeof WebAssembly.instantiateStreaming ? await (o = e, e => WebAssembly.instantiateStreaming(o, e))(t) : await (s = e, async e => {
            let t = await s.arrayBuffer();
            return WebAssembly.instantiate(t, e);
          })(t);
        } else (a = e, "undefined" != typeof ArrayBuffer && (a instanceof ArrayBuffer || ArrayBuffer.isView(a)) || void 0 !== i && i.isBuffer?.(a) || "undefined" != typeof SharedArrayBuffer && a instanceof SharedArrayBuffer || "undefined" != typeof Uint32Array && a instanceof Uint32Array || e instanceof WebAssembly.Module) ? n = await f(e)(t) : "default" in e && e.default instanceof WebAssembly.Module && (n = await f(e.default)(t));
      }
      return "instance" in e && (n = e.instance), "exports" in e && (n = e.exports), e;
    });
  }());
}
function f(e) {
  return t => WebAssembly.instantiate(e, t);
}
async function Mk(e) {
  return e && (await g(e)), {
    createScanner: e => new m(e.map(e => "string" == typeof e ? e : e.source)),
    createString: e => new p(e)
  };
}

export { g as ti };
export { Mk };
