import Link from 'next/link';
import { loadIndex } from '@/lib/data';
import { GlobalSearch } from '@/components/global-search';
import { TemplateGrid } from '@/components/template-grid';
import { TaglineReveal } from '@/components/tagline-reveal';
import { FaqList } from '@/components/faq-list';
import {
  TemplateIcon, FileCodeIcon, BlocksIcon, AppWindowIcon, WrenchIcon,
  ArrowRightIcon, ChevronRight, SparklesIcon,
} from '@/components/icons';

export default function Home() {
  const c = loadIndex();
  const totalComponents = c.stats.freeComponents + c.stats.proComponents;
  const totalItems = totalComponents + c.stats.proBlocks + c.stats.proAppUi + c.stats.templates;

  const categories = [
    { label: '组件', count: totalComponents, href: '/docs/components', icon: FileCodeIcon, desc: '动画组件，全部可直接用' },
    { label: '区块', count: c.stats.proBlocks, href: '/docs/blocks', icon: BlocksIcon, desc: '营销区块，22 个分类' },
    { label: '应用界面', count: c.stats.proAppUi, href: '/docs/app-ui', icon: AppWindowIcon, desc: '后台与工具界面' },
    { label: '模板', count: c.stats.templates, href: '/docs/templates', icon: TemplateIcon, desc: '完整落地页模板' },
    { label: '智能体套件', count: 19, href: '/docs/agent-kit', icon: SparklesIcon, desc: '给 AI 用的设计系统' },
    { label: '工具', count: 5, href: '/tools', icon: WrenchIcon, desc: '在线参数编辑器' },
  ];

  const benefits = [
    {
      title: '复制就能跑',
      desc: '每个组件都有能直接运行的源码，不是截图也不是占位。粘进项目里就能看见效果，改起来有底。',
      meta: `${totalComponents} 个组件，全部附源码`,
    },
    {
      title: '按场景找得快',
      desc: '营销页面看区块，后台看应用界面，整站看模板。三个入口分开，不用在一堆文件里翻。',
      meta: `${c.stats.proBlocks + c.stats.proAppUi} 个区块与界面，按分类归好`,
    },
    {
      title: '本地预览，不联网也能用',
      desc: '所有预览和源码都在本机，断网照常打开。想改颜色字号，直接改文件，不用等远端重新渲染。',
      meta: `${totalItems} 项内容，全部离线可用`,
    },
  ];

  const steps = [
    {
      num: '01',
      title: '找到你要的那一块',
      desc: '从组件、区块、应用界面、模板里选一个入口，按分类翻，或者直接搜索。每个条目都能当场预览。',
    },
    {
      num: '02',
      title: '看一眼真实效果',
      desc: '打开详情页就是真实运行的样子，可以点、可以动。觉得对了再往下拿源码，不浪费时间。',
    },
    {
      num: '03',
      title: '复制进你的项目',
      desc: '源码在页面里直接可读可复制。照着依赖说明装好包，粘进去就能用，不需要额外配置。',
    },
  ];

  const faqs = [
    {
      q: '这些都是能直接跑的吗，还是只是效果图？',
      a: '能直接跑。每个组件详情页打开就是真实运行的结果，不是静态图片。源码也都在页面上，可以直接复制走。',
    },
    {
      q: '我能拿去做商业项目吗？',
      a: '可以。做客户方案、公司产品、对外发布的项目都能用。源码在你自己手里，部署到哪都行。',
    },
    {
      q: '需要装什么依赖？',
      a: '组件基本都是 React。少数带动画的要装动画库，带三维的要装三维库，每页的安装说明里会写清楚具体是哪几个包。',
    },
    {
      q: '改颜色、改字号方便吗？',
      a: '方便。样式用的是常见的类名写法，改一个值就生效。想整体换配色，改主题变量那几行就够。',
    },
    {
      q: '断网还能用吗？',
      a: '能。组件源码、预览图、字体全在本机，断网照常打开、照常预览、照常复制。',
    },
    {
      q: '模板拿到手是什么？',
      a: '一套完整的落地页工程，包含页面、样式、脚本和图片。可以直接改内容，也可以当成参考自己重写。',
    },
  ];

  return (
    <>
      <GlobalSearch />
      <main id="main" className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        {/* ============ 1. 英雄区 ============ */}
        <section className="pt-24 pb-16 md:pt-24 md:pb-16">
          <h1 className="hero-heading max-w-[680px] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {totalComponents} 个现成组件
            <br />
            拼出你下一个产品
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-7 text-muted-foreground">
            组件、营销区块、应用界面、完整模板，四个入口分开摆好。每一项都能当场预览、当场复制源码，不用注册就能用。
          </p>
          <div className="mt-8">
            <Link
              href="/docs/components"
              className="gradient-button inline-flex h-11 items-center gap-2 rounded-lg px-5 text-base font-semibold"
            >
              开始挑组件
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 border-y border-border py-6 sm:grid-cols-3">
            <div>
              <dd className="text-3xl font-bold tracking-tight">{totalComponents}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">个界面组件</dt>
            </div>
            <div>
              <dd className="text-3xl font-bold tracking-tight">
                {c.stats.proBlocks + c.stats.proAppUi}
              </dd>
              <dt className="mt-2 text-sm text-muted-foreground">个区块与应用界面</dt>
            </div>
            <div>
              <dd className="text-3xl font-bold tracking-tight">{c.stats.templates}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">套完整落地页模板</dt>
            </div>
          </dl>
        </section>

        {/* ============ 2. 大字揭示 ============ */}
        <TaglineReveal
          text="不用从空白页开始。挑一块顺眼的，换掉文字和配色，剩下的它都替你排好了。"
        />

        {/* ============ 3. 分类入口 ============ */}
        <section className="pb-24">
          <h2 className="text-3xl font-bold tracking-tight">四个入口，按你要做的找</h2>
          <p className="mt-3 max-w-[680px] text-base leading-6 text-muted-foreground">
            每类都标了实际数量。点进去按分类翻，或者用搜索直接定位。
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="card-glow rounded-2xl border border-border bg-card p-6"
                >
                  <Icon className="size-5 text-muted-foreground" />
                  <div className="mt-6 text-3xl font-bold tracking-tight">{item.count}</div>
                  <div className="mt-2 text-base font-semibold">{item.label}</div>
                  <div className="mt-2 text-sm leading-5 text-muted-foreground">{item.desc}</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ============ 4. 收益三条 ============ */}
        <section className="pb-24">
          <h2 className="text-3xl font-bold tracking-tight">为什么省事</h2>
          <p className="mt-3 max-w-[680px] text-base leading-6 text-muted-foreground">
            做界面最花时间的不是写逻辑，是把间距、字号、留白调到顺眼。这些已经调好了。
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{b.desc}</p>
                <p className="mt-6 text-xs font-medium text-muted-foreground">{b.meta}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ============ 5. 怎么做三步 ============ */}
        <section className="pb-24">
          <h2 className="text-3xl font-bold tracking-tight">三步，从挑到用</h2>
          <p className="mt-3 max-w-[680px] text-base leading-6 text-muted-foreground">
            不用读文档，不用配环境。打开就能上手。
          </p>
          <ol className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map((s) => (
              <li key={s.num} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-sm font-bold text-muted-foreground">{s.num}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ 6. 模板展示 ============ */}
        <section className="pb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">整站模板</h2>
              <p className="mt-3 max-w-[680px] text-base leading-6 text-muted-foreground">
                不想一块块拼？这 {c.stats.templates} 套是完整落地页，从首屏到页脚都齐了。
              </p>
            </div>
            <Link
              href="/docs/templates"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              全部 {c.stats.templates} 套
              <ChevronRight className="size-4" />
            </Link>
          </div>
          <TemplateGrid templates={c.pro.templates.slice(0, 6)} />
        </section>

        {/* ============ 7. 问答六条 ============ */}
        <section className="pb-24">
          <h2 className="text-3xl font-bold tracking-tight">你可能想问</h2>
          <FaqList items={faqs} />
        </section>

        {/* ============ 8. 收口按钮 ============ */}
        <section className="pb-24">
          <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-16">
            <h2 className="mx-auto max-w-[680px] text-4xl font-bold tracking-tight">
              挑一块，现在就能用
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-base leading-6 text-muted-foreground">
              {totalComponents} 个组件里总有一个对得上你手上这块。找不到就从区块开始翻。
            </p>
            <div className="mt-8">
              <Link
                href="/docs/components"
                className="gradient-button inline-flex h-11 items-center gap-2 rounded-lg px-5 text-base font-semibold"
              >
                开始挑组件
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
