import * as React from "react";
import * as __mod_61459 from "./61459";
import * as __mod_20565 from "./20565";
/**
 * 内部辅助模块 56268（自动内联）
 * 被页面区块共享使用。
 */

let o = (0, React.createContext)({
  hasAccess: !0,
  tier: "ultimate",
  license: null,
  loading: !1,
  canAccessComponent: () => !0,
  refreshLicense: async () => {}
});
function P({
  children: e
}) {
  let [t, r] = (0, React.useState)(null),
    [l, d] = (0, React.useState)(!0),
    c = (0, React.useRef)(!0),
    u = (0, React.useMemo)(() => (0, __mod_61459.U)(), []),
    f = (0, React.useCallback)(async () => {
      try {
        let {
          data: {
            user: e
          },
          error: t
        } = await u.auth.getUser();
        if (!c.current) return;
        if (t || !e?.email) {
          r(null), d(!1);
          return;
        }
        let a = e.email.trim().toLowerCase(),
          {
            data: i,
            error: n
          } = await u.from("user_licenses").select("*").eq("email", a).single();
        if (!c.current) return;
        n ? (console.error("Error fetching license:", n), r(null)) : r(i);
      } catch (e) {
        console.error("Unexpected error fetching license:", e), c.current && r(null);
      } finally {
        c.current && d(!1);
      }
    }, [u]);
  (0, React.useEffect)(() => {
    c.current = !0, f();
    let {
      data: {
        subscription: e
      }
    } = u.auth.onAuthStateChange((e, t) => {
      t?.user?.email ? f() : (r(null), d(!1));
    });
    return () => {
      c.current = !1, e.unsubscribe();
    };
  }, [u, f]);
  let m = (0, React.useCallback)(e => !!t && !0 && (0, __mod_20565.lq)(t.tier, e), [t]),
    p = (0, React.useMemo)(() => ({
      hasAccess: !0,
      tier: "ultimate",
      license: t,
      loading: l,
      canAccessComponent: m,
      refreshLicense: f
    }), [t, l, m, f]);
  return <o.Provider value={p}>{e}</o.Provider>;
}
function H() {
  let e = (0, React.useContext)(o);
  if (void 0 === e) throw Error("useUserAccess must be used within a UserAccessProvider");
  return e;
}

export { o as default, o };
export { H, P };
