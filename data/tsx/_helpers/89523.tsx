import * as __mod_18543 from "./18543";
import * as __mod_18893 from "./18893";
import * as __mod_82786 from "./82786";
/**
 * 内部辅助模块 89523（自动内联）
 * 被页面区块共享使用。
 */


let Q2 = ["Components", "Blocks", "Application UI", "Templates", "Agent Kit"],
  o = {
    component: "Components",
    block: "Blocks",
    "app-ui": "Application UI",
    template: "Templates",
    skill: "Agent Kit",
    prompt: "Agent Kit",
    recipe: "Agent Kit"
  };
function d(e) {
  let t = new Map();
  for (let r of e) for (let e of r.variants ?? []) t.set(e.slug, {
    categorySlug: r.slug,
    categoryName: r.name,
    description: e.description ?? r.description
  });
  return t;
}
let l = d(__mod_18543.Bz),
  c = d(__mod_18543.un);
function u(e) {
  return l.has(e) ? "block" : c.has(e) ? "app-ui" : null;
}
function Lk(e, t) {
  let r = o[e];
  if ("component" === e) {
    let n = __mod_18543.f5.find(e => e.slug === t);
    return n ? {
      kind: e,
      slug: t,
      title: n.name,
      context: "Components",
      description: n.description,
      url: `/docs/components/${n.slug}`,
      section: r
    } : null;
  }
  if ("template" === e) {
    let n = __mod_18543.IT.find(e => e.slug === t);
    return n ? {
      kind: e,
      slug: t,
      title: n.name,
      context: "Templates",
      description: n.description,
      url: `/docs/templates/${n.slug}`,
      section: r,
      videoUrl: n.videoUrl
    } : null;
  }
  if ("block" === e || "app-ui" === e) {
    let a = "block" === e,
      n = (a ? l : c).get(t);
    return n ? {
      kind: e,
      slug: t,
      title: t,
      context: `${a ? "Blocks" : "Application UI"} \xb7 ${n.categoryName}`,
      description: n.description,
      url: `${a ? "/docs/blocks" : "/docs/app-ui"}/${n.categorySlug}/${t}`,
      section: r,
      categorySlug: n.categorySlug
    } : null;
  }
  let s = __mod_18893.K_.find(r => r.kind === e && r.slug === t);
  return s ? {
    kind: e,
    slug: t,
    title: s.name,
    context: `Agent Kit \xb7 ${s.category}`,
    description: s.summary,
    url: `${__mod_82786.$t}/${__mod_18893.b4[s.kind]}/${s.slug}`,
    section: r,
    showcaseSlug: s.showcase?.[0]?.slug
  } : null;
}

// 自动移除：s 在本模块不存在
export { u as ic };
export { s as Q2 };
export { Lk };
