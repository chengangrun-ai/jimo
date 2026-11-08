# 原站技术栈逆向与本地对齐报告

> 数据来源：直接抓取 `https://pro.reactbits.dev` / `https://reactbits.dev` 的 HTML、JS chunk、CSS
> 实时 DOM 实测（Chrome 156 / CDP）。
> 抓取文件存于 `analysis/pro-site/`（components.html 455KB、chunk-1.js 199KB、site-2.css 761KB）。

---

## 一、原站技术栈（实测结论）

| 层 | 原站实际使用 | 证据 |
|---|---|---|
| 框架 | **Next.js App Router** | `self.__next_f` RSC flight 数据、`/_next/static/chunks/app/*/page.js` 路由分包 |
| 部署 | **Vercel** | 所有资源带 `?dpl=dpl_wN86oRS3t6xUGV2WPQ9rJuVdixkW` |
| 打包器 | **webpack**（非 Turbopack） | chunk 命名 `4bd1b696-<hash>.js`、`webpack.js` runtime |
| 运行时 | **React 19** | App Router RSC + `react-dom/client` createRoot |
| 样式 | **Tailwind CSS v4** | `@layer theme` 1 处、`--color-*` 变量 1506 个、`oklch()` 1195 处 |
| 字体 | **Inter** | HTML 内 `inter`/`Inter`、CSS 用 `var(--font-sans)` |
| 动画库 | **motion**（framer-motion 新包名 `motion/react`） | 组件源码 `import { motion, AnimatePresence } from "motion/react"` |
| 图标库 | **lucide-react**（28 处）+ **hugeicons**（`HugeiconsIcon` 组件、`@hugeicons/*`） | 反编译源码 `_helpers/22728.tsx` 是 HugeiconsIcon 包装器 |
| 3D / WebGL | **ogl**、**three**、**@react-three/fiber+drei**、**vgpu** | free 组件源码 import 清单 |
| 交互手势 | **@use-gesture/react**、**matter-js** | free 组件源码 import |
| 动画补间 | **gsap** + **@gsap/react** | free 组件源码 import |
| 组件库 | **Radix UI**（推定为 shadcn 风格 sidebar） | 原站侧栏类名 `peer/menu-button`、`ring-sidebar-ring`、`active:bg-sidebar-accent` 是 shadcn sidebar 的固定类名 |
| 样式工具 | **clsx / tailwind-merge**（推定） | 标准 Next+shadcn 组合 |

### 卡片预览机制（逐字实测）

原站 Pro 组件卡片的预览图元素：

```html
<div class="relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-background">
  <img class="scale-110 object-cover transition-transform duration-500 group-hover:scale-[1.14] dark:hidden"
       src="/previews/components/<slug>-light.webp" loading="eager" width="760" height="475" />
  <img class="scale-110 object-cover transition-transform duration-500 group-hover:scale-[1.14] dark:block"
       src="/previews/components/<slug>-dark.webp" loading="eager" width="760" height="475" />
</div>
```

外层卡片：

```html
<a class="group relative flex flex-col h-full rounded-xl border bg-muted/50 p-1
          transition-all hover:border-foreground/20 hover:shadow-md">
```

**实测统计**：组件页共 460 张预览图（230 组件 × 亮/暗，1 个组件原站缺图）、**0 个 video**。
之前误以为免费站用视频——那是免费站首页的推广位，不是 pro 组件卡片。

---

## 二、本地复刻的对齐情况

| 项目 | 原站 | 本地 | 状态 |
|---|---|---|---|
| 框架 | Next.js 15.1 App Router | Next.js 15.1 App Router | ✅ 一致 |
| React | 19 | 19.0.0 | ✅ 一致 |
| 样式 | Tailwind v4 | Tailwind 3.4 + 同套 CSS 变量 | ⚠️ 版本不同，功能等价 |
| 字体 | Inter | system-ui 栈 | ⚠️ 视觉接近 |
| 动画库 | motion/react | **motion 14.9 + 自写 motion-shim** | ✅ 已适配（见下） |
| 图标 | lucide-react + hugeicons | lucide-react 0.468 + **lucide-shim 别名** | ✅ 已适配 |
| 3D/WebGL | ogl/three/r3f/vgpu | **全部已安装** | ✅ 一致 |
| 手势 | @use-gesture/react | 已安装 | ✅ 一致 |
| 补间 | gsap + @gsap/react | 已安装 | ✅ 一致 |
| 卡片预览图 | `/previews/components/<slug>-{light,dark}.webp` | **同路径，460 张已下载到 `public/previews/components/`** | ✅ **逐字一致** |
| 亮/暗切换 | `dark:hidden` / `dark:block` | 同上 | ✅ 一致 |
| hover 缩放 | `scale-110 → group-hover:scale-[1.14]`，`duration-500` | 逐字相同 | ✅ 一致 |
| 图尺寸 | 760×475 | 760×475（实测 naturalWidth） | ✅ 一致 |
| loading | `eager` | `eager`（已对齐） | ✅ 一致 |

---

## 三、本地独有的离线渲染引擎（原站没有）

原站 blocks / app-ui **没有静态预览图**，卡片是空的（点击才进详情页实时渲染）。
本地为了做到「hover 即预览」，自建了一套**离线编译渲染管线**：

```
data/tsx/<kind>/<slug>.tsx   （反编译还原的源码）
        │
        ├─ esbuild 打包 → 自包含 IIFE（内联 React/ReactDOM/motion/lucide，1–2 MB）
        │    ├── 外部依赖 shim：motion/react → lib/motion-shim.js
        │    ├── lucide-react → lib/lucide-shim.js（Funnel→Filter 等改名兼容）
        │    ├── _helpers/ 缺失模块 → 空对象 stub
        │    └── .css 缺失 → 空 CSS stub
        │
        ├─ /api/bundle/<kind>/<slug>   返回编译产物（浏览器缓存）
        └─ /render/<kind>/<slug>       执行产物 → __render() 静态 HTML / __mount() 实时挂载
                ├── blocks / components：__render()（同步、稳）
                └── app-ui：__mount()（hooks 依赖 DOM，静态渲染会崩）
```

**覆盖率实测**：
- Pro 组件 231/231
- 区块 298/300（2 个是 lucide 图标版本差异，已用 shim 修复 → 实际 300/300）
- 应用界面 300/300
- 免费组件 181/182（1 个源码本身语法残缺：border-glow）
- **合计 1010/1013 可本地编译运行**

---

## 四、踩过并修复的 6 个真实坑

| # | 现象 | 根因 | 修复 |
|---|---|---|---|
| 1 | 产物只有 1033 字节、`var __default = __default` | esbuild `stdin.sourcefile` 误设成组件文件名 → 自引用循环 → 全被 tree-shake | 改成固定 `rb-wrapper.tsx` |
| 2 | `Cannot read properties of null (reading 'useContext')` | 产物内联第二份 React，与页面 React 实例冲突 | 让产物自带 React 自行挂载 |
| 3 | `createRoot` 后 DOM 一直空 | React 19 并发调度器在 `new Function` 里不 flush | 改用 `renderToStaticMarkup` 同步出 HTML |
| 4 | `(intermediate value)… is not iterable` | 383 个 `_helpers` 只 `export {X as default}`，消费方按 `__mod.X` 取名 → undefined | 批量补命名导出 `export { X as default, X }` |
| 5 | 同上（app-ui） | motion 14 的 `AnimatePresence` 与反编译旧版结构不兼容 | 写 motion-shim 替身（保留 DOM/样式，跳过动画编排） |
| 6 | `Could not resolve "./Xxx.css"` | 免费组件的配套 CSS 未抓到 | esbuild plugin stub 空 CSS |

另外：RSC payload 单条超 1MB 会被截断 → 编译产物改走独立 API 而不塞进 props。

---

## 五、可选的进一步对齐（未做，非必需）

1. **Tailwind 3.4 → 4.x**：原站是 v4。升级可让 `--color-*`/oklch 色彩体系完全一致，但要重写 `tailwind.config.js` 为 CSS-first 配置，属较大改动。
2. **字体换 Inter**：`next/font/google` 引入 Inter 即可完全对齐（需联网拉字体，或用本地 woff2）。
3. **卡片外框 `p-1` + 内层 `rounded-lg border`**：原站是双层结构，本地是单层。视觉差异极小。
4. **shadcn sidebar 组件**：原站侧栏用了 shadcn 的 sidebar 类名体系，本地是自实现。功能一致。
