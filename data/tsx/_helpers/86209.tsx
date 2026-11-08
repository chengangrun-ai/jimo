import BaseFilterBuilder from "./1703";
/**
 * 内部辅助模块 86209（自动内联）
 * 被页面区块共享使用。
 */

const i = RegExp("[,()]");
class n extends BaseFilterBuilder {
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  in(e, t) {
    let r = Array.from(new Set(t)).map(e => "string" == typeof e && i.test(e) ? `"${e}"` : `${e}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  contains(e, t) {
    return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  containedBy(e, t) {
    return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  overlaps(e, t) {
    return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  textSearch(e, t, {
    config: r,
    type: s
  } = {}) {
    let i = "";
    "plain" === s ? i = "pl" : "phrase" === s ? i = "ph" : "websearch" === s && (i = "w");
    let n = void 0 === r ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this;
  }
  match(e) {
    return Object.entries(e).forEach(([e, t]) => {
      this.url.searchParams.append(e, `eq.${t}`);
    }), this;
  }
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  or(e, {
    foreignTable: t,
    referencedTable: r = t
  } = {}) {
    let s = r ? `${r}.or` : "or";
    return this.url.searchParams.append(s, `(${e})`), this;
  }
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
}
export { n as default, n };