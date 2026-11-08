import * as __mod_26441 from "./26441";
/**
 * 内部辅助模块 91206（自动内联）
 * 被页面区块共享使用。
 */


let s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  r = (t, e) => i => !!("string" == typeof i && s.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
  a = (t, e, i) => s => {
    if ("string" != typeof s) return s;
    let [r, a, o, l] = s.match(__mod_26441.S);
    return {
      [t]: parseFloat(r),
      [e]: parseFloat(a),
      [i]: parseFloat(o),
      alpha: void 0 !== l ? parseFloat(l) : 1
    };
  };

export { r as $ };
export { a as q };
