import * as __mod_61487 from "./61487";
/**
 * 内部辅助模块 1703（自动内联）
 * 被页面区块共享使用。
 */

const s = __mod_61487.default;
class i extends s {
  select(e) {
    let t = !1,
      r = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)).join("");
    return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
  }
  order(e, {
    ascending: t = !0,
    nullsFirst: r,
    foreignTable: s,
    referencedTable: i = s
  } = {}) {
    let n = i ? `${i}.order` : "order",
      a = this.url.searchParams.get(n);
    return this.url.searchParams.set(n, `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  limit(e, {
    foreignTable: t,
    referencedTable: r = t
  } = {}) {
    let s = void 0 === r ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(s, `${e}`), this;
  }
  range(e, t, {
    foreignTable: r,
    referencedTable: s = r
  } = {}) {
    let i = void 0 === s ? "offset" : `${s}.offset`,
      n = void 0 === s ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(n, `${t - e + 1}`), this;
  }
  abortSignal(e) {
    return this.signal = e, this;
  }
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return "GET" === this.method ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
  }
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  explain({
    analyze: e = !1,
    verbose: t = !1,
    settings: r = !1,
    buffers: s = !1,
    wal: i = !1,
    format: n = "text"
  } = {}) {
    var a;
    let o = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|"),
      l = null != (a = this.headers.get("Accept")) ? a : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`), this;
  }
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  returns() {
    return this;
  }
  maxAffected(e) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
  }
}
export { i as default, i };