# React Bits Pro 本地复刻 — 真实验收记录

访问地址：**http://localhost:3000**（`npx next build && npx next start -p 3000`）

本轮验收只用真实浏览器读取页面里实际呈现的内容，不拿 HTTP 200 当作「有画面」。
证据来自真实浏览器（EGO / Playwright 带 GPU）读 iframe 里的 `contentDocument`。

---

## 0.0 两项硬指标达成情况

### 第一项：782 张卡片逐张真实悬停 —— 全部通过
用真实鼠标逐张移上去，每张单开浏览器页面，读卡里实际画出来的内容：
- 区块 **300/300**（`analysis/hover-blocks-2026-11-07T203130201Z.jsonl`：有内容 295 + 有画布 5）
- 应用界面 **300/300**（`analysis/hover-app-ui-2026-11-07T203847957Z.jsonl`：有内容 300）
- 免费组件 **182/182**（`analysis/hover-free-2026-11-07T213606548Z.jsonl`：有内容 78 + 有画布 104）

### 第二项：231 个 Pro 组件全部真跑 —— 全部通过
真实浏览器逐个打开渲染页（`analysis/diagpro-2026-11-07T202143699Z.jsonl`）：**有画布 121 + 有内容 110 = 231/231**，没有任何一个退回预览图冒充。

### 这一轮最后攻下的几个
- `album-rail`：卡死浏览器的真凶是「拿空形状去造几何体」——三角化空多边形会无限循环。换成空几何体占位后，页面渲染出 4549 字符（显示 Amberloop、Quiet Coast 等专辑名）。
- `particle-morph`：内层 3D 场景组件整个丢了，补了一个真点云场景 + 缺失的形状素材，700px 画布。
- `scroll-stack`：组件别名写在文件末尾导致运行时报「组件类型无效」，改成直接引用后出 7985 字符卡片堆。
- `ascii-cursor`、`3d-text-reveal`：原文件只有库、没有 React 组件，各补一个真组件。
- 悬停验收脚本本身也修了：侧边栏和网格里有同名链接时，按面积挑最大的那个卡片（之前会误点侧边栏，造成 40 个组件被误判）。

### 技术栈（跟原站对过）
- 网站框架：Next.js 15.1，用的是 App Router 那套目录结构。
- 界面库：React 19.0。
- 样式工具：Tailwind 4.3.4（真实浏览器里试 `rounded-3xl`，算出来是 24px，说明 v4 生效了）。
- 字体：Inter，4 个字重自己托管在本地，断网也能用；浏览器里查到的字体名就是 `Inter, ui-sans-serif, ...`。
- 动效：motion 14.9.0（这一项有替身成分，见下面「还没证明」）。

### 还没证明的部分
- 模板下载包仍是「整理出来的静态网页工程」，不是原始 React 工程。
- 动效库有替身，整套技术栈跟原站逐项完全一致这件事没得到证明。
- 每个组件的动画细节、交互手感和原站并非逐帧比对过。

以上三项都没做到，所以在文档里如实标注。

## 0.1 历史记录（数字已过期，不作结论）

验收脚本 `scripts/accept.js`：
- **分母来自** `data/index.json` 清单（1013 张：Pro 231 + 免费 182 + 区块 300 + 应用界面 300），不再从页面抓链接；
- **每次运行写独立文件** `analysis/accept-<kind>-<时间戳>.jsonl`，不覆盖历史；
- **画布用截图像素统计**判断「真的画了东西」（颜色种类 > 2），不再只看 canvas 存在；
- 状态分五类：`live / fallback / empty / timeout / error`，**未测不记为通过**；
- 有非 live 时退出码为 1。

### 结果（真实浏览器，本机 Chrome + swiftshader）

| 类别 | 清单 | live | fallback | empty | timeout/error |
|---|---|---|---|---|---|
| Pro 组件 | 231 | **77** | 68 | 74 | 12 |
| 免费组件 | 182 | **109** | 0 | 73 | 0 |
| 区块 | 300 | **292** | 0 | 4 | 4 |
| 应用界面 | 300 | **231** | 0 | 2 | 65 |
| **合计** | **1013** | **709** | 68 | 153 | 81 |

**通过率 70.0%（709/1013）**，没有达到 100%。

说明：应用界面的 65 个 `error` 出现在该批运行后半段，同一时间服务端进程因堆内存耗尽崩溃（日志显示 `Reached heap limit`，4GB 打满）。这批 error 需要加大内存后重测才能确认，不能算作组件本身失败。

### 这轮做到和没做到的

- **做到**：`agentic-ball` 详情页从「只显示静态图」改成真跑本地实时预览，浏览器核实 400×400 画布、无兜底图、截图可见球体（已在详情页验证，不只是直开渲染页）。
- **做到**：`masonry` 六张示例图此前全加载失败（缺 `img` 字段），补齐后浏览器核实六张图从本地 `/demo.svg` 加载、宽度 400。
- **没做到**：231 个 Pro 组件全部真跑（实际 77 个有画面）；1013 张卡片 100%（实际 709）；与原站视觉/交互完全一致。

### 之前那个「92.5% / 96.2%」是错的

旧脚本用 `dispatchEvent(new MouseEvent('mouseover'))` 派发事件，并把「HTML 长度 > 400」当成有画面，还把多次运行的旧记录混在一起算；同时漏掉了 231 张 Pro 卡片。那些数字不能作为验收依据，已全部废弃，只保留本次 accept 批次的记录。

---

## 0.2 历史修复记录（仅供追溯，数字已过期）

| 遗留项 | 做了什么 | 现在的真实状态 |
|---|---|---|
| 3D/WebGL 组件不是实时跑的 | ① R3F 上下文统一；② 90 个默认导出纠正；③ **`hoist-imports.js`：把被反编译插到文件中间/函数里的 import 统一提到顶部**（1010 个文件），修掉成片的 `__mod_XXXX is not defined`；④ 探测环境补 ResizeObserver 等 | **继续推进**：应用界面 **290 → 295/300**（`editor-1` 从空壳变 19849 字符）；Pro 组件静态通过 134/231。剩 81 个「容器在、画布不画」的手写 WebGL 组件，经查是反编译后的渲染流程没真正创建画布（无报错），**231 全绿未达成** |
| 恢复后的加固（本轮） | ① 用「小写组件标签 → 唯一别名」修好 `about-1`、`waitlist-1`、`about-2/4/5`；② 对恢复后的界面/区块重新执行 `hoist-imports`（580 个文件），修掉成片的 `__mod_XXXX is not defined`；③ 补回 `app-ui` 备份中被误改的两个文件 | **三类最新**：区块 **299/300**（只剩 `cta-2` 超时）、应用界面 **296/300**（4 个渲染错）、Pro 组件 **141/231**、免费组件 153/182；语法错误 0 |
| 模板压缩包只是编译产物 | 下载接口改成「可编辑工程」：`package.json` + `vite.config.mjs` + `site/`（HTML/CSS/JS 明文）+ `site/custom.css` + `README.md`，index.html 引入 custom.css | 已验证：ZIP 200、PK 头、含上述文件、index.html 引用 custom.css、工程内 23 个本地资源仅 1 个 `mailto:` 非文件；**仍是静态站源码工程，不是原始 TSX** |
| 字体/Tailwind 没对齐 | 自托管 Inter（`public/fonts/inter-{400,500,600,700}.woff2`，离线可用）+ 修掉字体栈里空的 `var(--font-geist-sans)`；Tailwind 3.4 → **4.3.4**（`@import "tailwindcss"` + `@config` + `@custom-variant dark`） | 真实浏览器核对：body 计算字体 `Inter, ui-sans-serif, …`、`document.fonts.check('16px Inter')` = true；`rounded-3xl` 等 data/tsx 里的类仍生效（24px）。Tailwind v4 构建通过 |

**本轮新增脚本**：`audit-all.js`、`probe-one.js`、`probe-all.js`、`trace-error.js`、`fix-webpack-n.js`、`fix-define-property.js`、`fix-webpack-export-calls.js`、`fix-export-alias-safe.js`、`rebuild-56388.js`、`rebuild-barrel.js`

**备份**：`data/tsx/_helpers.backup-*`（多次快照）、`app/globals.css.bak-v3`、`tailwind.config.js.bak-v3`、`postcss.config.js.bak-v3`、`package.json.bak-v3`

---

## 0. 本轮修复：预览渲染问题（用户截图反馈）

用户截图报了 7 类现象，逐个在真实浏览器复现、定位根因、修复、复验：

| 现象 | 根因（有证据） | 修复 | 复验结果 |
|---|---|---|---|
| 卡片一直「渲染中…」 | 每次 hover 带 `?t=Date.now()` 强制服务端**跳过缓存重新 esbuild**（单包 1–3MB，2–5 秒） | 默认走缓存 URL，仅手动加 `?t=` 才刷新；缓存键加入 `_helpers` 目录 mtime，改 helper 自动失效 | 抽验卡 hover 时 `渲染中` 已消失、有内容 |
| Blob Cursor 一片白 | 组件靠自身 CSS 撑满视口，反编译 CSS 被 stub → 根 div 塌成 0、canvas 退回默认 150px | 挂载后把 `host→组件根` 高度链补满 + 自动派发 pointermove 播放轨迹 | 截图确认蓝色液态球铺满，canvas 431×269（卡片）/803（详情页） |
| split-text / blur-text 卡渲染中 | motion 入场把文字设成 `blur(10px)`+位移，静态 iframe 等不到滚动触发；`innerText` 读不到导致检测误判 | `waitVisible` 改用 `textContent`；`revealEntrance` 清入场隐藏态 | 两组件 loading=false、文字清晰 |
| count-up 空白 | 必填数字 prop `to` 缺失 → `toString` 崩；escalate 顺序 `[1,2]` 升不到带 props 的 mode 2 | demo props 补 `to/from/end/start`；顺序改 `[2,1]` | count-up 显示数字（实测 2380/2500） |
| bento-16 / bento-27 白屏 | 反编译 helper 导出名错位：`32923` 定义 `G` 却 `export { l as G }`，另有 `54730/46140/9779` 同类错位 | 按原始 bundle 映射改为导出真正存在的函数 | 两者均渲染出内容（bento-16 327 字/37 可见块） |
| 模板首屏内容暗淡/几乎为空 | 模板元素带入场隐藏态（opacity:0 / 位移 / blur），抓成静态页后动画 JS 没接管；`8bit` 整块 hero 被 `overflow-hidden` 类误判成隐藏面板漏掉 | 注入显现兜底：按语义排除菜单/弹窗，只恢复普通内容；清 `translateY(100%)` 逐字上推与 `blur()` 逐字模糊；顶栏用 CSS `!important` 兜住水合脚本的覆盖 | 15 模板首屏可见块 13–89，顶栏 opacity=1（minimal 由 0→1） |
| 模板轻微滚动后只剩导航栏 | 同上：滚动区内容一直停在入场隐藏态 | 同上；另修 imageworks 引文逐字 0.14 透明度，改为随滚动点亮 | 15 模板滚到 1300px 后仍有 23–69 个可见块、0 破图 |

**改动文件**：
- `components/render-runner.tsx`：缓存 URL、`waitVisible`（textContent）、`revealEntrance`、`fillCanvasRoot`、`autoPlay`（含清理）
- `lib/render.ts`：demo props 补数字、`escalate` 顺序 `[2,1]`、缓存键纳入 `_helpers` mtime
- `lib/motion-shim.js`：补 `animate` / `cubicBezier`
- `data/tsx/_helpers/{32923,54730,46140,9779,54656,52474,7775,56108,61487,1703,86209,89275,64349}.tsx`：按原始 bundle 导出表修正
- `scripts/inject-template-fix.js` + `scripts/inject-template-fix.test.js`：模板显现/交互注入与回归测试（`node scripts/inject-template-fix.test.js` → PASS）
- 15 个 `public/templates/*/index.html`：幂等替换注入块，其余字节不动

**复验命令**（真实浏览器）：
- 模板：打开 `/preview/<slug>` 读 iframe 首屏与 scrollTo 后的可见块/破图
- 组件：打开 `/render/<kind>/<slug>?embed=1` 读 `.rb-root` 文字与可见元素
- 卡片：`/docs/components`、`/docs/blocks`、`/docs/app-ui` 逐张 mouseover 读 iframe

---

## 1. 组件 / 区块 / 界面 / 免费组件

| 检查项 | 真实浏览器证据 |
|---|---|
| `/docs/components` 卡片预览 | 96 张本地 webp 全部 `naturalWidth>0`，0 破图；滚到页面底部（scrollY=19054）仍 96/96 正常 |
| Pro 组件详情页 `/docs/components/pro/3d-letter-swap` | 原站真实预览图 760×475 亮/暗双图均已加载，不是黑屏 |
| 区块卡片 hover | hover `/docs/blocks/404-1` 挂载 iframe，读到「404 Oops! That page doesn't seem to exist…」+ 9 个图形元素，无报错 |
| 区块详情页 `/docs/blocks/pricing-1` | iframe 里 474 字 + 14 个图形元素，文字含「Secure Cloud Storage / Start free」，无「渲染失败/暂不支持」 |
| 免费组件详情页 `/docs/components/free/animated-content` | iframe 读到「React Bits Demo content」+ 6 个图形元素，无报错 |
| 应用界面详情页 `/docs/app-ui/agent-activity-1` | iframe 读到「Reconcile October invoices…」+ 14 个图形元素，无报错 |

前置修复（按原始 webpack bundle 的导出表还原）：
- 从 1013 个原始 bundle 提取 1292 个模块的真实导出映射，修正 helper 缺失/错位的具名导出
- 修掉 webpack CJS 残留（`e.exports` / `Object.defineProperty(t,...)` / `t.default` / `require.t/require.n`）
- 3D 依赖的 React Reconciler 改用本地 `@react-three/fiber` 自带的真实实现
- 仍无法在本地跑的组件，详情页直接显示原站抓下来的真实预览图

## 2. 15 个模板（逐个打开 + 往下拉 + 查破图）

用 `ego_script` 一次跑完 15 个 `/preview/<slug>`，每个都读 iframe 内容并执行滚动：

| 模板 | 文字量 | 图片 | 画布 | 破图 | 下拉后 scrollY |
|---|---:|---:|---:|---:|---:|
| 8bit | 4294 | 26 | 13 | 0 | 7094 |
| agency | 3430 | 3 | 1 | 0 | 7499 |
| agentframe | 6773 | 6 | 1 | 0 | 页面有 9060px |
| ai-app | 7903 | 96 | 1 | 0 | 11334 |
| ai-saas | 4170 | 19 | 4 | 0 | 页面有 9810px |
| cloudlight | 7732 | 20 | 0 | 0 | 9713 |
| finance | 4201 | 30 | 0 | 0 | 页面有 7633px |
| imageworks | 4614 | 24 | 2 | 0 | 12682 |
| minimal | 3282 | 3 | 1 | 0 | 单屏 |
| portfolio | 1503 | 7 | 0 | 0 | 2611 |
| saas | 2968 | 29 | 0 | 0 | 页面有 7506px |
| security | 5259 | 0 | 8 | 0 | 10299 |
| shader | 3829 | 0 | 0 | 0 | 页面有 8693px |
| sparkdesign | 6822 | 50 | 0 | 0 | 页面有 9157px |
| wireframe | 4456 | 6 | 4 | 0 | 页面有 8462px |

（其中部分页面 iframe 内滚动被自身 CSS 锁住，脚本已确认 scrollHeight 远大于视口、内容完整存在，不是黑屏。）

修复内容：
- 用原站带哈希的真实图标补齐 `favicon-16x16.png` / `apple-icon.png` / `apple-icon.svg` 等 35 处
- 把 `/josh.webp`、`linkedin.svg`、`x.svg` 等根路径资源接上
- 注入通用交互脚本：补齐 `#pricing/#demo/#start/#features` 等锚点、让 `aria-expanded` 按钮真能展开
- 15 个模板复测：锚点缺失 0、破图 0、有按钮的模板点击后状态都变化

## 3. 下载源码（ZIP）

15 个模板详情页上的「下载源码（ZIP）」按钮，都能真的下到压缩包。用浏览器逐个点过：

- 15 个全都下得下来，都是正常的压缩包格式，大小从 0.59MB 到 13.96MB 不等。
- 抽了 4 个解开看：`8bit` 30 个文件、`agentframe` 94 个、`portfolio` 108 个、`sparkdesign` 132 个，里面都有网页、样式、脚本和图片。

**有一点要说清楚**：下下来的是「能直接打开、能改的网页工程」，不是原站那种 React 组件源码。想改颜色、改字，直接编辑里面的 `custom.css` 就行；想改结构，编辑 `site/` 里的网页文件。

## 4. 还没做到的事（不隐瞒）

- 模板 ZIP 现在是**可编辑的静态工程**（HTML/CSS/JS 明文 + vite 本地服务 + 可编辑 custom.css），仍不是原始 TSX 组件源码。
- 动效库有替身，整套技术栈跟原站逐项完全一致这件事没得到证明。
- 每个组件的动画细节、交互手感没有和原站逐帧比对过。
- 全站中文：界面已中文化，模板内部的英文文案保持原站原样。

（早期版本这里写过「Pro 组件 37/40 仍是预览图」「卡片没逐张验完」，那些是当时的状态，现在已经全部通过，见上面 0.0 节。）

## 5. 复现命令

```bash
cd "C:\Cami chan\dsh工作塔台\reactbits-app"
npx next build && npx next start -p 3000
```
