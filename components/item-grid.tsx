'use client';

import Link from 'next/link';
import { useMemo, useState, useDeferredValue } from 'react';
import { SearchIcon, LockIcon, ChevronDown } from './icons';

export type CardItem = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug?: string;
  tags?: string[];
  kind?: string;
  lang: string;
};

const PAGE = 48;

export function ItemGrid({
  items,
  basePath,
  groupByCategory = true,
  previewType,
  renderKind,
}: {
  items: CardItem[];
  basePath: string;
  groupByCategory?: boolean;
  /** 对应 public/previews/<type>/ 下的组件预览图目录（components/blocks/app-ui） */
  previewType?: string;
  /** 没有静态预览图的类别（blocks / app-ui）：hover 时用本地实时渲染做预览 */
  renderKind?: string;
}) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('all');
  const [shown, setShown] = useState(PAGE);
  const [hovered, setHovered] = useState<string | null>(null);
  const deferred = useDeferredValue(q);

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const i of items) map.set(i.category, (map.get(i.category) || 0) + 1);
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [items]);

  const filtered = useMemo(() => {
    const needle = deferred.trim().toLowerCase();
    return items.filter(i => {
      if (cat !== 'all' && i.category !== cat) return false;
      if (!needle) return true;
      return (
        i.name.toLowerCase().includes(needle) ||
        i.slug.includes(needle) ||
        (i.description || '').toLowerCase().includes(needle) ||
        (i.tags || []).some(t => t.toLowerCase().includes(needle))
      );
    });
  }, [items, deferred, cat]);

  const visible = filtered.slice(0, shown);

  return (
    <>
      {/* 过滤条 */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <p className="inline-flex h-10 items-center gap-1 rounded-lg border border-border/50 bg-muted/40 px-3.5 text-xs font-medium text-muted-foreground">
          <span className="text-foreground">{filtered.length}</span>
          {filtered.length === items.length ? ' 个' : ` / ${items.length} 个`}
        </p>

        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={e => { setQ(e.target.value); setShown(PAGE); }}
            placeholder="搜索…"
            className="h-10 w-56 rounded-lg border border-border/50 bg-muted/40 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/20 focus:outline-none"
          />
        </div>

        <select
          value={cat}
          onChange={e => { setCat(e.target.value); setShown(PAGE); }}
          className="h-10 rounded-lg border border-border/50 bg-muted/40 px-3 text-xs font-medium text-foreground focus:outline-none"
        >
          <option value="all">全部分类</option>
          {categories.map(([c, n]) => (
            <option key={c} value={c}>{c} ({n})</option>
          ))}
        </select>
      </div>

      {/* 网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pb-12">
        {visible.map(item => (
          <Link
            key={item.id}
            href={`${basePath}/${item.slug}`}
            onMouseEnter={() => setHovered(item.slug)}
            onMouseLeave={() => setHovered(h => (h === item.slug ? null : h))}
            className="group relative flex h-full flex-col rounded-xl border border-border bg-muted/50 p-1 transition-all hover:border-foreground/20 hover:shadow-md"
          >
            {/* 预览区：与原站同构，rounded-lg + border，aspect 16/10 */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-[#0d0d0d]">
              <ItemThumb item={item} previewType={previewType} renderKind={renderKind} active={hovered === item.slug} />
              {item.tags?.includes('locked') && (
                <span className="absolute top-2 left-2 z-10 rounded bg-black/70 p-1.5 backdrop-blur-sm">
                  <LockIcon className="size-3.5 text-white" />
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col px-3 pt-3 pb-2">
              <h3 className="text-sm font-semibold tracking-tight">{item.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
              <span className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                {item.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {shown < filtered.length && (
        <div className="flex justify-center pb-16">
          <button
            onClick={() => setShown(s => s + PAGE)}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border/60 px-5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            加载更多（还有 {filtered.length - shown} 个）
            <ChevronDown className="size-3.5" />
          </button>
        </div>
      )}
    </>
  );
}

function ItemThumb({
  item,
  previewType,
  renderKind,
  active,
}: {
  item: CardItem;
  previewType?: string;
  renderKind?: string;
  active?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  /**
   * 预览优先级：
   *   1. 有静态预览图（components）→ 亮/暗双图 + hover 放大，与原站一致
   *   2. 没有静态图（blocks / app-ui）→ hover 时挂载本地实时渲染 iframe
   *   3. 都没有 → 色块占位
   */
  const hasPreview = previewType && item.slug && !failed;
  const light = previewType ? `/previews/${previewType}/${item.slug}-light.webp` : null;
  const dark = previewType ? `/previews/${previewType}/${item.slug}-dark.webp` : null;

  if (hasPreview) {
    return (
      <>
        {/* 亮色预览图 */}
        <img
          src={light!}
          alt={`${item.name} preview`}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:scale-[1.14] dark:hidden"
        />
        {/* 暗色预览图 */}
        <img
          src={dark!}
          alt={`${item.name} preview`}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 hidden h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:scale-[1.14] dark:block"
        />
      </>
    );
  }

  // 没有静态图但有本地实时渲染（blocks / app-ui）：hover 时挂载 iframe 真渲染
  if (renderKind && item.slug) {
    return (
      <>
        {/* 底层色块（iframe 加载前的占位） */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 120% at 30% 10%, hsl(${
              [...item.slug].reduce((a, c) => a + c.charCodeAt(0), 0) % 360
            } 40% 14%) 0%, #101010 70%)`,
          }}
        />
        {/* 只有 hover 过才挂载 iframe，避免一页几十个 iframe 同时跑 */}
        {active && (
          <iframe
            src={`/render/${renderKind}/${encodeURIComponent(item.slug)}?theme=light&embed=1`}
            title={`${item.name} 预览`}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0 bg-white"
          />
        )}
        {/* hover 提示角标 */}
        <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          实时预览
        </span>
      </>
    );
  }

  // 回退：用 slug 首字母做视觉占位（不依赖外网图片）
  const hue = [...item.slug].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
      style={{
        background: `radial-gradient(120% 120% at 30% 10%, hsl(${hue} 60% 18%) 0%, #0d0d0d 60%)`,
      }}
    >
      <span className="select-none font-mono text-[11px] uppercase tracking-widest text-white/25">
        {item.category}
      </span>
    </div>
  );
}
