import * as __mod_60091 from "./60091";
import * as __mod_3940 from "./3940";
import * as __mod_26441 from "./26441";
/**
 * 内部辅助模块 9779（自动内联）
 * 被页面区块共享使用。
 */


let s = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
let o = "number",
  l = "color",
  h = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function V(t) {
  let e = t.toString(),
    i = [],
    s = {
      color: [],
      number: [],
      var: []
    },
    r = [],
    a = 0,
    u = e.replace(h, t => (__mod_60091.y.test(t) ? (s.color.push(a), r.push(l), i.push(__mod_60091.y.parse(t))) : t.startsWith("var(") ? (s.var.push(a), r.push("var"), i.push(t)) : (s.number.push(a), r.push(o), i.push(parseFloat(t))), ++a, "${}")).split("${}");
  return {
    values: i,
    split: u,
    indexes: s,
    types: r
  };
}
function d(t) {
  return V(t).values;
}
function c(t) {
  let {
      split: e,
      types: i
    } = V(t),
    s = e.length;
  return t => {
    let r = "";
    for (let h = 0; h < s; h++) if (r += e[h], void 0 !== t[h]) {
      let e = i[h];
      e === o ? r += (0, __mod_3940.a)(t[h]) : e === l ? r += __mod_60091.y.transform(t[h]) : r += t[h];
    }
    return r;
  };
}
let p = t => "number" == typeof t ? 0 : __mod_60091.y.test(t) ? __mod_60091.y.getAnimatableNone(t) : t,
  m = {
    test: function (t) {
      return isNaN(t) && "string" == typeof t && (t.match(__mod_26441.S)?.length || 0) + (t.match(s)?.length || 0) > 0;
    },
    parse: d,
    createTransformer: c,
    getAnimatableNone: function (t) {
      let e = d(t);
      return c(t)(e.map(p));
    }
  };

export { s as default, s };
export { V, m as f };
