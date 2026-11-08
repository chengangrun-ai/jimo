import * as React from "react";
import * as __mod_30701 from "./30701";
import * as __mod_19543 from "./19543";
/**
 * 内部辅助模块 73350（自动内联）
 * 被页面区块共享使用。
 */

let l = {
    name: "custom-light",
    type: "light",
    colors: {
      "editor.background": "#ffffff",
      "editor.foreground": "#3d2e52"
    },
    tokenColors: [{
      scope: ["comment", "punctuation.definition.comment", "block-comment", "prolog", "doctype", "cdata"],
      settings: {
        foreground: "#7a6b93"
      }
    }, {
      scope: ["string", "string.quoted", "attr-value"],
      settings: {
        foreground: "#6b4c94"
      }
    }, {
      scope: ["keyword", "storage.type", "storage.modifier", "atrule"],
      settings: {
        foreground: "#3d2456"
      }
    }, {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: {
        foreground: "#4a2f5f"
      }
    }, {
      scope: ["variable", "support.variable", "variable.other"],
      settings: {
        foreground: "#7a5a9e"
      }
    }, {
      scope: ["constant", "support.constant", "constant.language", "constant.numeric"],
      settings: {
        foreground: "#3d2456"
      }
    }, {
      scope: ["entity.name.type", "entity.name.class", "support.class"],
      settings: {
        foreground: "#584776"
      }
    }, {
      scope: ["punctuation"],
      settings: {
        foreground: "#6a5684"
      }
    }, {
      scope: ["entity.name.tag"],
      settings: {
        foreground: "#c7357a"
      }
    }, {
      scope: ["meta.tag"],
      settings: {
        foreground: "#4a2f5f"
      }
    }, {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#4a2f5f"
      }
    }, {
      scope: ["meta.selector", "entity.other.attribute-name.class"],
      settings: {
        foreground: "#3d8c74"
      }
    }, {
      scope: ["constant.numeric", "keyword.other.unit"],
      settings: {
        foreground: "#3f8a9c"
      }
    }, {
      scope: ["constant.language.boolean"],
      settings: {
        foreground: "#4a2f5f"
      }
    }, {
      scope: ["keyword.operator", "entity.name.operator"],
      settings: {
        foreground: "#c7357a"
      }
    }, {
      scope: ["support.type.property-name", "meta.object-literal.key"],
      settings: {
        foreground: "#4a2f5f"
      }
    }, {
      scope: ["entity.name.namespace"],
      settings: {
        foreground: "#3f8a9c"
      }
    }, {
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold"
      }
    }, {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic"
      }
    }]
  },
  i = {
    name: "custom-cyberpunk-balanced",
    type: "dark",
    colors: {
      "editor.background": "#0a0a0a",
      "editor.foreground": "#e8e6f8"
    },
    tokenColors: [{
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6a637a"
      }
    }, {
      scope: ["string", "string.quoted", "attr-value"],
      settings: {
        foreground: "#f7f7ff"
      }
    }, {
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: "#FF9FFC"
      }
    }, {
      scope: ["entity.name.function", "meta.function-call"],
      settings: {
        foreground: "#f7f7ff"
      }
    }, {
      scope: ["variable", "support.variable", "variable.other"],
      settings: {
        foreground: "#e8e6f8"
      }
    }, {
      scope: ["constant.numeric", "constant.language"],
      settings: {
        foreground: "#FF9FFC"
      }
    }, {
      scope: ["entity.name.type", "entity.name.class", "support.class"],
      settings: {
        foreground: "#B19EEF"
      }
    }, {
      scope: ["entity.name.tag"],
      settings: {
        foreground: "#FF9FFC"
      }
    }, {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#f7f7ff"
      }
    }, {
      scope: ["keyword.operator", "entity.name.operator"],
      settings: {
        foreground: "#B19EEF"
      }
    }, {
      scope: ["punctuation"],
      settings: {
        foreground: "#ada7c7"
      }
    }, {
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold"
      }
    }, {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic"
      }
    }]
  };
function c({
  code: e,
  language: t = "tsx"
}) {
  let [n, c] = (0, React.useState)(""),
    [, d] = (0, React.useTransition)(),
    {
      resolvedTheme: u
    } = (0, __mod_30701.D)();
  if ((0, React.useEffect)(() => {
    if (!e) return;
    let n = !1;
    return (async () => {
      try {
        let s = await (0, __mod_19543.Yz)(e, {
          lang: t,
          themes: {
            light: l,
            dark: i
          },
          defaultColor: !1,
          decorations: [{
            start: 0,
            end: e.length,
            properties: {
              class: "line-numbers"
            }
          }]
        });
        n || d(() => {
          c(s);
        });
      } catch (e) {
        console.error("Syntax highlighting error:", e);
      }
    })(), () => {
      n = !0;
    };
  }, [e, t, u]), !n) {
    let t = e.split("\n").length;
    return <div className="relative p-4 overflow-x-auto text-sm rounded-lg bg-[#ffffff] dark:bg-[#0a0a0a]" style={{
      minHeight: `${Math.max(100, 24 * t)}px`
    }} />;
  }
  return <div className="[&>pre]:p-4! [&>pre]:m-0! [&>pre]:overflow-x-auto [&>pre]:text-sm [&>pre]:rounded-lg" dangerouslySetInnerHTML={{
    __html: n
  }} />;
}

export { c as b };
