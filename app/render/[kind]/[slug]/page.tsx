import { notFound } from 'next/navigation';
import type { RenderKind } from '@/lib/render';
import { getItem } from '@/lib/data';
import { RenderRunner } from '@/components/render-runner';

export const dynamic = 'force-dynamic';

/**
 * 本地组件渲染页：把 data/tsx 里的组件源码编译后在浏览器里真实跑起来。
 *
 * 这是全站离线的关键：详情页的 LivePreview、卡片缩略图都指向这里，
 * 不再依赖 pro.reactbits.dev / reactbits.dev。
 *
 * URL 参数:
 *   ?theme=light|dark   强制亮/暗底（组件源码用 dark: 变体）
 *   ?embed=1            嵌入模式：铺满父容器，不留页面留白
 */
export default async function RenderPage({
  params,
  searchParams,
}: {
  params: Promise<{ kind: string; slug: string }>;
  searchParams: Promise<{ theme?: string; embed?: string }>;
}) {
  const { kind, slug } = await params;
  const sp = await searchParams;

  const k = kind as RenderKind;
  if (!['components', 'blocks', 'app-ui', 'free'].includes(kind)) notFound();

  const dec = decodeURIComponent(slug);
  const item = getItem(k, dec);
  if (!item) notFound();

  const theme = sp.theme === 'dark' ? 'dark' : 'light';
  const embed = sp.embed === '1';

  return (
    <div
      className={theme === 'dark' ? 'dark' : ''}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'auto',
        // 组件渲染环境用中性亮色底（blocks/app-ui 默认 bg-white），与站点暗色外壳分开
        background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
        color: theme === 'dark' ? '#fafafa' : '#111111',
        minHeight: embed ? '100%' : '100vh',
        width: '100%',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
      suppressHydrationWarning
    >
      <RenderRunner kind={k} slug={dec} theme={theme} />
    </div>
  );
}
