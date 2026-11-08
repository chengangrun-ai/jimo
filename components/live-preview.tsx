/**
 * 组件预览（全离线）。
 *
 * 三种模式，按优先级：
 *   1. 本地静态预览图（components 有原站导出的 webp，亮/暗双图）
 *   2. 本地实时渲染（blocks / app-ui 没有静态图，用 /render 路由把源码真跑起来）
 *   3. iframe 兜底（都没有时指向原站，正常不会走到）
 */
export function LivePreview({
  href,
  height = 520,
  title,
  light,
  dark,
  renderKind,
  slug,
}: {
  href: string;
  height?: number;
  title: string;
  /** 本地亮色预览图路径（public 下），如 /previews/components/xx-light.webp */
  light?: string;
  /** 本地暗色预览图路径（public 下），如 /previews/components/xx-dark.webp */
  dark?: string;
  /** 本地渲染用：类别（blocks / app-ui / components） */
  renderKind?: string;
  /** 本地渲染用：条目 slug */
  slug?: string;
}) {
  // 1) 本地静态图
  if (light || dark) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-lg border border-border bg-[#0b0b0b]"
        style={{ height }}
      >
        {light && (
          <img
            src={light}
            alt={`${title} 预览`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover dark:hidden"
          />
        )}
        {dark && (
          <img
            src={dark}
            alt={`${title} 预览`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 hidden h-full w-full object-cover dark:block"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0b0b0b] to-transparent" />
      </div>
    );
  }

  // 2) 本地实时渲染
  if (renderKind && slug) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-lg border border-border bg-white"
        style={{ height }}
      >
        <iframe
          src={`/render/${renderKind}/${encodeURIComponent(slug)}?theme=light&embed=1`}
          title={title}
          loading="lazy"
          className="h-full w-full border-0"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    );
  }

  // 3) 兜底
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-[#0b0b0b]" style={{ height }}>
      <iframe
        src={href}
        title={title}
        loading="lazy"
        className="h-full w-full border-0"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0b0b0b] to-transparent" />
    </div>
  );
}
