import Link from 'next/link';

export const metadata = {
  title: '用户协议 — 积木堆',
  description: '积木堆的使用条款：内容授权范围、允许的用法、以及不承担的责任。',
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-6 py-24 sm:px-8">
      <h1 className="text-4xl font-bold tracking-tight">用户协议</h1>
      <p className="mt-4 text-sm text-muted-foreground">最后更新：2026 年 11 月</p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold">你可以拿这些内容做什么</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            本站的组件、区块、应用界面和模板，你都可以用在自己的项目里，包括商业项目。做客户方案、
            公司产品、对外发布的项目都行，不需要额外付费，也不需要标注来源。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">你不能做什么</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            不能把本站内容原样打包再当成自己的组件库卖。改过之后作为你自己项目的一部分去交付，
            没有问题；把整站内容复刻一份对外销售，不行。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">关于第三方内容</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            部分示例里用到的图片、图标和字体，归各自的作者所有。你正式上线前，建议把示例图片换成
            自己的素材，避免版权问题。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">内容按现状提供</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            本站内容按现状提供。我们会尽量保证每个组件都能正常运行，但不承诺它一定符合你项目的
            全部要求。上线前请自己测一遍，特别是浏览器兼容和可访问性。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">协议变更</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            如果这份协议有改动，会更新页面顶部的日期。已经按旧版协议用出去的内容，不受影响。
          </p>
        </section>
      </div>

      <div className="mt-16">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-base font-medium transition-colors duration-300 hover:bg-muted/50"
        >
          回到首页
        </Link>
      </div>
    </main>
  );
}
