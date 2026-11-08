import * as __mod_56191 from "./56191";
import * as __mod_18543 from "./18543";
import * as __mod_93022 from "./93022";
import * as __mod_82786 from "./82786";
import * as __mod_18893 from "./18893";
/**
 * 内部辅助模块 98359（自动内联）
 * 被页面区块共享使用。
 */


function s(e = []) {
  return e.includes("text") ? "Text" : e.includes("cursor") ? "Cursor Effects" : e.includes("background") ? "Backgrounds" : e.includes("shader") || e.includes("3d") || e.includes("webgl") || e.includes("particles") ? "3D & Shaders" : "UI & Cards";
}
let u = ["Text", "Backgrounds", "3D & Shaders", "Cursor Effects", "UI & Cards"],
  SW = ["AI & Agents", "Navigation", "Data", "Forms", "Overlays", "Auth & Onboarding", "Workflows"];
function d(e) {
  return e.filter(e => !e.hidden).reduce((e, t) => e + (t.variants?.length ?? 0), 0);
}
let p = [{
  id: "getting-started",
  title: "Get Started",
  items: [{
    title: "Introduction",
    url: "/docs/introduction"
  }, {
    title: "Installation",
    url: "/docs/installation"
  }, {
    title: "MCP Server",
    url: "/docs/mcp"
  }]
}, {
  id: "components",
  title: "Components",
  routePrefix: "/docs/components",
  browseUrl: "/docs/components",
  browseNewCount: __mod_56191.xw,
  groups: function () {
    let e = new Map();
    for (let t of __mod_18543.f5) {
      if (t.hidden) continue;
      let r = s(t.tags),
        n = e.get(r) ?? [];
      n.push({
        title: t.name,
        url: `/docs/components/${t.slug}`,
        ...(t.isNew && {
          isNew: !0
        })
      }), e.set(r, n);
    }
    return u.filter(t => e.has(t)).map(t => ({
      title: t,
      items: e.get(t).sort((e, t) => e.title.localeCompare(t.title))
    }));
  }()
}, {
  id: "blocks",
  title: "Blocks",
  routePrefix: "/docs/blocks",
  browseUrl: "/docs/blocks",
  browseNewCount: __mod_56191.BZ,
  totalCount: d(__mod_18543.Bz),
  items: __mod_18543.Bz.filter(e => !e.hidden).map(e => {
    let t = e.newCount ?? e.variants?.filter(e => e.isNew).length ?? 0;
    return {
      title: e.name,
      url: `/docs/blocks/${e.slug}`,
      count: e.variants?.length ?? 0,
      ...(t && {
        newCount: t
      })
    };
  }),
  hideGroupCounts: !0,
  groups: [{
    title: __mod_93022.PF,
    items: __mod_93022.lv,
    pinned: !0
  }]
}, {
  id: "app-ui",
  title: "Application UI",
  routePrefix: "/docs/app-ui",
  browseUrl: "/docs/app-ui",
  totalCount: d(__mod_18543.un),
  hideGroupCounts: !0,
  items: [{
    title: "Theming",
    url: "/docs/app-ui/theming"
  }],
  groups: function () {
    let e = new Map();
    for (let t of __mod_18543.un) {
      if (t.hidden) continue;
      let r = t.category ?? "Workflows",
        n = e.get(r) ?? [];
      n.push({
        title: t.name,
        url: `/docs/app-ui/${t.slug}`,
        count: t.variants?.length ?? 0,
        ...(t.newCount && {
          newCount: t.newCount
        })
      }), e.set(r, n);
    }
    return [...SW.filter(t => e.has(t)), ...[...e.keys()].filter(e => !SW.includes(e))].map(t => ({
      title: t,
      items: e.get(t)
    }));
  }()
}, {
  id: "templates",
  title: "Templates",
  routePrefix: "/docs/templates",
  browseUrl: "/docs/templates",
  browseNewCount: __mod_56191._I,
  items: __mod_18543.IT.map(e => ({
    title: e.name,
    url: `/docs/templates/${e.slug}`,
    ...(e.isNew && {
      isNew: !0
    }),
    ...(e.isFree && {
      isFree: !0
    })
  }))
}, {
  id: "agent-kit",
  title: __mod_82786.SU,
  routePrefix: __mod_82786.$t,
  browseUrl: __mod_82786.$t,
  browseLabel: "Everything",
  hideGroupCounts: !0,
  groups: function () {
    let e = [{
      title: "Setup",
      items: [{
        title: __mod_82786.ii.name,
        url: __mod_82786.ii.href
      }]
    }];
    for (let {
      kind: t,
      title: r
    } of [{
      kind: "skill",
      title: "Design Skills"
    }, {
      kind: "prompt",
      title: "Prompts"
    }, {
      kind: "recipe",
      title: "Recipes"
    }]) {
      let n = __mod_18893.K_.filter(e => e.kind === t).map(e => ({
        title: e.name,
        url: `${__mod_82786.$t}/${__mod_18893.b4[t]}/${e.slug}`
      }));
      n.length && e.push({
        title: r,
        items: n
      });
    }
    return e;
  }()
}];
function f(e) {
  let t = p.find(t => t.id === e);
  return t ? t.items ? t.items.map(e => ({
    name: e.title,
    url: e.url
  })) : (t.groups ?? []).flatMap(e => e.items.map(t => ({
    name: t.title,
    url: t.url,
    group: e.title
  }))) : [];
}
(p.find(e => "Components" === e.title)?.groups ?? []).flatMap(e => e.items.map(t => ({
  name: t.title,
  slug: t.url.split("/").pop() ?? "",
  group: e.title
})));
let UC = p.flatMap(e => [...(e.items ?? []).map(t => ({
  ...t,
  section: e.title
})), ...(e.groups ?? []).flatMap(t => t.items.map(r => ({
  ...r,
  section: e.title,
  group: t.title
})))]);

export { f as bs };
export { s as dj };
export { p as hp };
export { u as z4 };
export { SW, UC };
