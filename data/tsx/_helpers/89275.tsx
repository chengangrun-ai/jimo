import BaseFilterBuilder from "./86209";
/**
 * 内部辅助模块 89275（自动内联）
 * 被页面区块共享使用。
 */


class i {
  constructor(e, {
    headers: t = {},
    schema: r,
    fetch: s
  }) {
    this.url = e, this.headers = new Headers(t), this.schema = r, this.fetch = s;
  }
  select(e, t) {
    let {
        head: r = !1,
        count: i
      } = null != t ? t : {},
      n = !1,
      a = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !n ? "" : ('"' === e && (n = !n), e)).join("");
    return this.url.searchParams.set("select", a), i && this.headers.append("Prefer", `count=${i}`), new BaseFilterBuilder({
      method: r ? "HEAD" : "GET",
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch
    });
  }
  insert(e, {
    count: t,
    defaultToNull: r = !0
  } = {}) {
    var i;
    if (t && this.headers.append("Prefer", `count=${t}`), r || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
      let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
      if (t.length > 0) {
        let e = [...new Set(t)].map(e => `"${e}"`);
        this.url.searchParams.set("columns", e.join(","));
      }
    }
    return new BaseFilterBuilder({
      method: "POST",
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: null != (i = this.fetch) ? i : fetch
    });
  }
  upsert(e, {
    onConflict: t,
    ignoreDuplicates: r = !1,
    count: i,
    defaultToNull: n = !0
  } = {}) {
    var a;
    if (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), void 0 !== t && this.url.searchParams.set("on_conflict", t), i && this.headers.append("Prefer", `count=${i}`), n || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
      let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
      if (t.length > 0) {
        let e = [...new Set(t)].map(e => `"${e}"`);
        this.url.searchParams.set("columns", e.join(","));
      }
    }
    return new BaseFilterBuilder({
      method: "POST",
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: null != (a = this.fetch) ? a : fetch
    });
  }
  update(e, {
    count: t
  } = {}) {
    var r;
    return t && this.headers.append("Prefer", `count=${t}`), new BaseFilterBuilder({
      method: "PATCH",
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: null != (r = this.fetch) ? r : fetch
    });
  }
  delete({
    count: e
  } = {}) {
    var t;
    return e && this.headers.append("Prefer", `count=${e}`), new BaseFilterBuilder({
      method: "DELETE",
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: null != (t = this.fetch) ? t : fetch
    });
  }
}
export { i as default, i };