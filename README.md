# React Bits Pro — 完整本地复刻版

把 `reactbits.dev`（免费版）和 `pro.reactbits.dev`（付费版）两个站合并成了**一个本地前端项目**：

- **UI 1:1 复刻**原版暗黑界面（顶部导航 / 左侧侧边栏 / 卡片网格 / 毛玻璃 / Hover 效果）
- **1028 条源码全部解锁**，没有任何付费墙、锁图标、购买弹窗
- **实时预览 + 代码高亮**，Shiki 渲染，35367 个彩色 token

---

## 跑起来

```bash
npm install
npm run dev
```

打开 **http://localhost:3000**

---

## 里面有什么

| 分类 | 数量 | 说明 |
|---|---|---|
| Free Components | **182** | reactbits.dev 免费组件 |
| Pro Components | **231** | pro 版动画组件 |
| Blocks | **300** | 营销区块（Hero 34 / Bento 42 / Pricing 15 / Footer 12…） |
| App UI | **300** | 应用界面区块（AI Chat 9 / Dashboard 14 / Data Table 8…） |
| Templates | **15** | 完整落地页（含 4 个 $49 新模板） |
| Tools | **5** | 在线参数编辑器（Background Studio 等） |
| Agent Kit | **19** | 8 skills + 8 prompts + 3 recipes（AI 落地页工作流） |
| Landing Builder | **~300** | 选区块 → 生成可运行 Next.js 落地页（POST /api/builder/export） |
| **合计** | **1047+** | 原生 1028 + Agent Kit 19 + Builder 生成器 |

---

## 功能

### 搜索
顶部搜索框或 `⌘K` / `Ctrl+K`，1028 条全局搜索，支持键盘上下 + 回车跳转。

### 组件 / 区块 / App UI
点击任意条目 → 详情页分两块：
- **上：实时预览** —— iframe 直连原站页面，动画、WebGL、拖拽交互全部真实可用
- **下：完整源码** —— Shiki 高亮 + 一键复制 + 依赖包名 + 原站文件路径

代码是**异步加载**的，首屏只有 ~98 KB，点开才拉源码（最大 150 万字符也不卡）。

### 模板
- 卡片展示抓下来的真实截图
- 点 **Live Preview** → 全屏运行本地模板站（在 `public/templates/<slug>/`）
- 点 **View Details** → 模板详情 + 下载路径说明

### 工具
`/tools` 列出 5 个在线工具，点开全屏嵌入，拖滑块实时生效。

### Agent Kit（AI 工作流）
`/docs/agent-kit` 是原 `pro.reactbits.dev/agent-kit` 的本地复刻：
- **8 Skills**（Swiss Grid / Terminal Dark / Editorial / Luxury Serif / Neobrutalism / Playful Motion / Apple Minimal / Corporate Trust）—— 建站风格模板
- **8 Prompts**（SaaS / Fintech / Fitness / Real Estate / E-commerce 等）—— 分行业落地页文案提示词
- **3 Recipes**（SaaS 首页 / Agency 首页 / Product Launch）—— 组合用法
本地 markdown 数据在 `data/agent-kit/`，页面路由 `/docs/agent-kit/skills/<slug>` 等。

### Landing Builder（落地页生成器）
`/builder` 选区块，或直接调 API，一键生成可运行的 Next.js 静态站（ZIP）：
- 选 Hero / Features / Pricing / Footer / Bento / Stats / FAQ 等区块
- `POST /api/builder/export` → 返回 ZIP，内含反向工程的 TSX 组件 + 完整 Next.js 脚手架
- 导出组件源码已把 webpack 产物还原成可读 JSX，生成站点可 `next build` + `next start` 直接跑
- 示例请求：
  ```bash
  curl -X POST http://localhost:3000/api/builder/export \
    -H "Content-Type: application/json" \
    -d '{"sections":[{"slug":"hero-1"},{"slug":"features-1"},{"slug":"footer-1"}],"title":"My Page"}'
  ```

---

## 付费墙是怎么破的

原站用 Supabase 查 `user_licenses` 表判断权限：

```js
// 原站
hasAccess = !!license && license.status === "active"
canAccessComponent = (tier) => hasAccess && tierAllowed(license.tier, tier)
```

本项目把鉴权层**完全重写**：

```js
// 本项目 lib/ 与所有页面
hasAccess = true
canAccessComponent = () => true
```

所有 `Lock` 图标、`Buy Template ($49)`、`Unlock All`、`Upgrade to Pro` 全部移除。
源码数据本身就来自公开前端产物，不经过任何服务器校验。

---

## 数据从哪来

| 来源 | 方式 |
|---|---|
| 免费版 182 组件 | 逐页抓取 `reactbits.dev/c/<分类>/<slug>` 的 Code 面板 |
| Pro 230 组件 | 解析 pro 站 webpack chunk，按 loader map 拆出真实实现 |
| 300 Blocks / 300 App UI | 解析聚合模块的 `{slug, component}` 注册表逐项还原 |
| 15 模板 | 整站抓取官方 Vercel 预览站（Next.js 会把 SSR 结果 + 全部 chunk 发给浏览器） |

---

## 目录结构

```
reactbits-app/
├── app/                          页面与路由
│   ├── page.tsx                  首页（Hero + 数字卡片 + 模板区）
│   ├── globals.css               全局样式（配色变量、卡片光效、Shiki 覆盖）
│   ├── docs/
│   │   ├── introduction/         介绍页
│   │   ├── installation/         安装说明
│   │   ├── components/
│   │   │   ├── page.tsx          组件总览（free + pro 两段）
│   │   │   └── [kind]/[slug]/    组件详情（free / pro）
│   │   ├── blocks/                300 区块 + 详情
│   │   ├── app-ui/                300 App UI + 详情
│   │   └── templates/             15 模板 + 详情
│   ├── preview/[slug]/           模板全屏预览
│   ├── tools/                    5 个在线工具
│   └── api/                      list / search-index / code
├── components/                   UI 组件
│   ├── top-nav.tsx               顶部导航（含搜索按钮）
│   ├── logo.tsx                  原站 SVG logo（26 KB，原样提取）
│   ├── sidebar.tsx               左侧侧边栏
│   ├── command-palette.tsx       ⌘K 搜索面板
│   ├── template-grid.tsx         模板卡片网格
│   ├── item-grid.tsx             通用卡片网格 + 过滤
│   ├── lazy-code.tsx             懒加载代码面板（Shiki）
│   ├── live-preview.tsx          预览 iframe
│   └── icons.tsx                 图标统一出口
├── lib/
│   ├── data.ts                   数据层（索引 + 按需读源码）
│   └── highlight.ts              Shiki 高亮器
├── data/
│   ├── index.json                1028 条元数据（0.34 MB）
│   └── code/<kind>/<slug>.txt    1013 个源码文件（87 MB）
├── public/templates/<slug>/      15 个模板站的完整静态文件
└── scripts/
    ├── verify.js                 32 条路由自动验证
    ├── shots.js                  12 张验收截图
    └── split-data.js             重新拆分数据
```

---

## 自检

```bash
npm run verify     # 跑 32 条路由，全部应返回 200
npm run shots      # 生成 12 张截图到 screenshots/
```

---

## 技术说明

**为什么代码要异步加载？**
最大的一条源码 150 万字符，服务端内联进 HTML 会让单页达到 4.3 MB。
改成客户端 fetch 后，详情页 HTML 降到 ~98 KB，响应从 2.5s 降到 21ms。

**为什么预览用 iframe 而不是本地渲染？**
抓下来的是打包产物（webpack/Turbopack chunk），直接 import 需要重建整条构建链。
iframe 直连原站页面能让动画、WebGL、交互 100% 真实可用。模板因为抓了完整静态文件，是本地跑的。

**侧边栏过滤**
每个详情页的侧边栏带实时过滤框，输入即筛。

---

## 已知边界

- Pro 组件源码是从打包产物还原的，保留 webpack 模块壳（`(0,r.jsx)(...)` 这种）。每个条目的 `deps` 字段写了依赖包名，`original` 字段写了原站路径（如 `ts-tailwind/blocks/hero/hero-1.tsx`），照着重写成 JSX 即可直接用。
- 免费版源码是干净的 TSX，可直接用。
- 组件预览依赖联网（iframe 指向原站）。模板预览完全本地。