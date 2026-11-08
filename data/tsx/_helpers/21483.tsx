import * as __mod_65552 from "./65552";
import * as __mod_89275 from "./89275";
import * as __mod_86209 from "./86209";
/**
 * 内部辅助模块 21483（自动内联）
 * 被页面区块共享使用。
 */


let i = __mod_65552.__importDefault(__mod_89275),
  n = __mod_65552.__importDefault(__mod_86209);
class a {
  constructor(e, {
    headers: t = {},
    schema: r,
    fetch: s
  } = {}) {
    this.url = e, this.headers = new Headers(t), this.schemaName = r, this.fetch = s;
  }
  from(e) {
    let t = new URL(`${this.url}/${e}`);
    return new i.default(t, {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  schema(e) {
    return new a(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  rpc(e, t = {}, {
    head: r = !1,
    get: s = !1,
    count: i
  } = {}) {
    var a;
    let o,
      l,
      u = new URL(`${this.url}/rpc/${e}`);
    r || s ? (o = r ? "HEAD" : "GET", Object.entries(t).filter(([e, t]) => void 0 !== t).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
      u.searchParams.append(e, t);
    })) : (o = "POST", l = t);
    let h = new Headers(this.headers);
    return i && h.set("Prefer", `count=${i}`), new n.default({
      method: o,
      url: u,
      headers: h,
      schema: this.schemaName,
      body: l,
      fetch: null != (a = this.fetch) ? a : fetch
    });
  }
}

export { a as default, i };