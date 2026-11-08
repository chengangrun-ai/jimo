import Link from 'next/link';

export const metadata = {
  title: '页面不存在 — 积木堆',
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
      <p className="text-sm font-bold tracking-tight text-muted-foreground">404</p>
      <h1 className="mt-6 max-w-[680px] text-4xl font-bold tracking-tight">
        这个页面找不到了
      </h1>
      <p className="mt-4 max-w-[680px] text-base leading-6 text-muted-foreground">
        可能是链接过期，也可能是我们挪动了位置。回到首页重新找，或者直接去组件库翻。
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="gradient-button inline-flex h-11 items-center gap-2 rounded-lg px-5 text-base font-semibold"
        >
          回到首页
        </Link>
        <Link
          href="/docs/components"
          className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-base font-medium transition-colors duration-300 hover:bg-muted/50"
        >
          浏览组件
        </Link>
      </div>
    </main>
  );
}
