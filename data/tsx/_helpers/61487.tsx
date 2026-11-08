import * as __mod_65552 from "./65552";
import * as __mod_8794 from "./8794";
/**
 * 内部辅助模块 61487（自动内联）
 * 被页面区块共享使用。
 */

const s = __mod_65552.__importDefault(__mod_8794);
class i {
  constructor(e) {
    var t, r;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = null != (t = e.shouldThrowOnError) && t, this.signal = e.signal, this.isMaybeSingle = null != (r = e.isMaybeSingle) && r, e.fetch ? this.fetch = e.fetch : this.fetch = fetch;
  }
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  setHeader(e, t) {
    return this.headers = new Headers(this.headers), this.headers.set(e, t), this;
  }
  then(e, t) {
    void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), "GET" !== this.method && "HEAD" !== this.method && this.headers.set("Content-Type", "application/json");
    let r = (0, this.fetch)(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async e => {
      var t, r, i, n;
      let a = null,
        o = null,
        l = null,
        u = e.status,
        h = e.statusText;
      if (e.ok) {
        if ("HEAD" !== this.method) {
          let r = await e.text();
          "" === r || (o = "text/csv" === this.headers.get("Accept") || this.headers.get("Accept") && (null == (t = this.headers.get("Accept")) ? void 0 : t.includes("application/vnd.pgrst.plan+text")) ? r : JSON.parse(r));
        }
        let s = null == (r = this.headers.get("Prefer")) ? void 0 : r.match(/count=(exact|planned|estimated)/),
          n = null == (i = e.headers.get("content-range")) ? void 0 : i.split("/");
        s && n && n.length > 1 && (l = parseInt(n[1])), this.isMaybeSingle && "GET" === this.method && Array.isArray(o) && (o.length > 1 ? (a = {
          code: "PGRST116",
          details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, o = null, l = null, u = 406, h = "Not Acceptable") : o = 1 === o.length ? o[0] : null);
      } else {
        let t = await e.text();
        try {
          a = JSON.parse(t), Array.isArray(a) && 404 === e.status && (o = [], a = null, u = 200, h = "OK");
        } catch (r) {
          404 === e.status && "" === t ? (u = 204, h = "No Content") : a = {
            message: t
          };
        }
        if (a && this.isMaybeSingle && (null == (n = null == a ? void 0 : a.details) ? void 0 : n.includes("0 rows")) && (a = null, u = 200, h = "OK"), a && this.shouldThrowOnError) throw new s.default(a);
      }
      return {
        error: a,
        data: o,
        count: l,
        status: u,
        statusText: h
      };
    });
    return this.shouldThrowOnError || (r = r.catch(e => {
      var t, r, s;
      return {
        error: {
          message: `${null != (t = null == e ? void 0 : e.name) ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
          details: `${null != (r = null == e ? void 0 : e.stack) ? r : ""}`,
          hint: "",
          code: `${null != (s = null == e ? void 0 : e.code) ? s : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), r.then(e, t);
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
}
export { i as default, i };