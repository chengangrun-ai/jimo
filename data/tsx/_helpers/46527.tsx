import * as React from "react";
import * as __mod_61459 from "./61459";
/**
 * 内部辅助模块 46527（自动内联）
 * 被页面区块共享使用。
 */

function s(e, t) {
  return `${e}:${t}`;
}
let o = (0, React.createContext)(null);
function HM({
  children: e
}) {
  let t = (0, React.useMemo)(() => (0, __mod_61459.U)(), []),
    [r, l] = (0, React.useState)([]),
    [d, c] = (0, React.useState)([]),
    [u, f] = (0, React.useState)(null),
    [m, p] = (0, React.useState)(!0),
    h = (0, React.useRef)(!0),
    g = (0, React.useCallback)(async () => {
      try {
        let {
            data: {
              user: e
            }
          } = await t.auth.getUser(),
          r = e?.email?.trim().toLowerCase() ?? null;
        if (!h.current) return;
        if (f(r), !r) {
          l([]), c([]), p(!1);
          return;
        }
        let [a, i, n] = await Promise.all([t.from("user_favorites").select("id, kind, slug, created_at").eq("email", r).order("created_at", {
          ascending: !1
        }), t.from("user_favorite_folders").select("id, name, created_at, updated_at").eq("email", r).order("created_at", {
          ascending: !0
        }), t.from("user_favorite_folder_items").select("favorite_id, folder_id")]);
        if (!h.current) return;
        if (a.error || i.error || n.error) console.warn("Favorites unavailable:", a.error?.message ?? i.error?.message ?? n.error?.message), l([]), c([]);else {
          let e = new Map();
          for (let t of n.data ?? []) {
            let r = t.favorite_id,
              a = e.get(r) ?? [];
            a.push(t.folder_id), e.set(r, a);
          }
          l((a.data ?? []).map(t => ({
            id: t.id,
            kind: t.kind,
            slug: t.slug,
            folderIds: e.get(t.id) ?? [],
            createdAt: t.created_at
          }))), c((i.data ?? []).map(e => ({
            id: e.id,
            name: e.name,
            createdAt: e.created_at,
            updatedAt: e.updated_at
          })));
        }
      } catch (e) {
        console.warn("Favorites fetch failed:", e), h.current && l([]);
      } finally {
        h.current && p(!1);
      }
    }, [t]);
  (0, React.useEffect)(() => {
    h.current = !0, g();
    let {
      data: {
        subscription: e
      }
    } = t.auth.onAuthStateChange(() => {
      g();
    });
    return () => {
      h.current = !1, e.unsubscribe();
    };
  }, [t, g]);
  let x = (0, React.useMemo)(() => new Set(r.map(e => s(e.kind, e.slug))), [r]),
    b = (0, React.useCallback)((e, t) => x.has(s(e, t)), [x]),
    v = (0, React.useCallback)(async (e, a) => {
      if (!u) return !1;
      let i = x.has(s(e, a)),
        n = !i,
        o = `optimistic:${s(e, a)}`;
      if (l(t => n ? [{
        id: o,
        kind: e,
        slug: a,
        folderIds: [],
        createdAt: new Date().toISOString()
      }, ...t] : t.filter(t => t.kind !== e || t.slug !== a)), n) {
        let {
          data: n,
          error: s
        } = await t.from("user_favorites").upsert({
          email: u,
          kind: e,
          slug: a
        }, {
          onConflict: "email,kind,slug"
        }).select("id, created_at").single();
        return s || !n ? (console.warn("Could not update favorite:", s?.message), h.current && l(r), i) : (h.current && l(e => e.map(e => e.id === o ? {
          ...e,
          id: n.id,
          createdAt: n.created_at
        } : e)), !0);
      }
      let {
        error: d
      } = await t.from("user_favorites").delete().eq("email", u).eq("kind", e).eq("slug", a);
      return !!d && (console.warn("Could not update favorite:", d.message), h.current && l(r), i);
    }, [u, r, x, t]),
    w = (0, React.useCallback)(async (e, a, i) => {
      if (!u) return !1;
      let n = r.find(t => t.kind === e && t.slug === a),
        o = n?.folderIds.includes(i) ?? !1,
        d = !o,
        c = new Date().toISOString(),
        f = `optimistic:${s(e, a)}`;
      l(t => t.some(t => t.kind === e && t.slug === a) ? t.map(t => t.kind === e && t.slug === a ? {
        ...t,
        folderIds: d ? [...t.folderIds, i] : t.folderIds.filter(e => e !== i)
      } : t) : [{
        id: f,
        kind: e,
        slug: a,
        folderIds: [i],
        createdAt: c
      }, ...t]);
      let m = n?.id,
        p = !1;
      if (!m) {
        let {
          data: i,
          error: n
        } = await t.from("user_favorites").upsert({
          email: u,
          kind: e,
          slug: a
        }, {
          onConflict: "email,kind,slug"
        }).select("id, created_at").single();
        if (n || !i) return console.warn("Could not save favorite:", n?.message), h.current && l(r), o;
        if (m = i.id, p = !0, h.current) {
          l(t => t.map(t => t.id === f ? {
            ...t,
            id: m,
            createdAt: i.created_at
          } : t));
        }
      }
      let {
        error: g
      } = d ? await t.from("user_favorite_folder_items").upsert({
        favorite_id: m,
        folder_id: i
      }, {
        onConflict: "favorite_id,folder_id"
      }) : await t.from("user_favorite_folder_items").delete().eq("favorite_id", m).eq("folder_id", i);
      return g ? (console.warn("Could not update folder membership:", g.message), p && (await t.from("user_favorites").delete().eq("id", m).eq("email", u)), h.current && l(r), o) : d;
    }, [u, r, t]),
    j = (0, React.useCallback)(async e => {
      if (!u) return null;
      let r = e.trim().replace(/\s+/g, " ").slice(0, 60);
      if (!r) return null;
      let {
        data: a,
        error: i
      } = await t.from("user_favorite_folders").insert({
        email: u,
        name: r
      }).select("id, name, created_at, updated_at").single();
      if (i || !a) return console.warn("Could not create favorite folder:", i?.message), null;
      let n = {
        id: a.id,
        name: a.name,
        createdAt: a.created_at,
        updatedAt: a.updated_at
      };
      return h.current && c(e => [...e, n]), n;
    }, [u, t]),
    k = (0, React.useCallback)(async (e, r) => {
      if (!u) return !1;
      let a = r.trim().replace(/\s+/g, " ").slice(0, 60);
      if (!a) return !1;
      c(t => t.map(t => t.id === e ? {
        ...t,
        name: a,
        updatedAt: new Date().toISOString()
      } : t));
      let {
        error: i
      } = await t.from("user_favorite_folders").update({
        name: a,
        updated_at: new Date().toISOString()
      }).eq("id", e).eq("email", u);
      return !i || (console.warn("Could not rename favorite folder:", i.message), h.current && c(d), !1);
    }, [u, d, t]),
    N = (0, React.useCallback)(async e => {
      if (!u) return !1;
      c(t => t.filter(t => t.id !== e)), l(t => t.map(t => ({
        ...t,
        folderIds: t.folderIds.filter(t => t !== e)
      })));
      let {
        error: a
      } = await t.from("user_favorite_folders").delete().eq("id", e).eq("email", u);
      return !a || (console.warn("Could not delete favorite folder:", a.message), h.current && (c(d), l(r)), !1);
    }, [u, d, r, t]),
    C = (0, React.useMemo)(() => ({
      items: r,
      folders: d,
      count: r.length,
      loading: m,
      canSave: !!u,
      isSaved: b,
      toggle: v,
      toggleFolder: w,
      createFolder: j,
      renameFolder: k,
      deleteFolder: N
    }), [r, d, m, u, b, v, w, j, k, N]);
  return <o.Provider value={C}>{e}</o.Provider>;
}
function d() {
  return (0, React.useContext)(o);
}

export { s as qc };
export { d as rB };
export { HM };
