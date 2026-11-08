import Link from 'next/link';

export const metadata = {
  title: '隐私政策 — 积木堆',
  description: '积木堆收集什么信息、怎么用、怎么联系。站点本身不追踪访客。',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-6 py-24 sm:px-8">
      <h1 className="text-4xl font-bold tracking-tight">隐私政策</h1>
      <p className="mt-4 text-sm text-muted-foreground">最后更新：2026 年 11 月</p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold">我们收集什么</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            浏览本站不需要注册，也不需要填任何信息。看组件、看源码、复制代码，全程不需要提供
            邮箱或姓名。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">关于 Cookie</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            本站没有装第三方统计工具，也没有广告追踪。浏览器本地可能保存少量与界面偏好相关的
            数据，清除浏览器数据就会一并删掉。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">服务器日志</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            托管服务商可能会记录访问日志，包括访问时间、请求的页面和大致地区。这类日志用于排查
            故障和防止滥用，不会用来识别具体是谁。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">外部链接</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            页面里可能链接到别的网站。那些网站有自己的隐私做法，不在这份政策的范围内。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">联系我们</h2>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            对这份政策有疑问，或者想让我们删除某些信息，写信到 hello@jimo.design。
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
