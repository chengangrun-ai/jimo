'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import {
  SearchIcon, ChevronRight, GridIcon, FilterIcon,
  TemplateIcon, BlocksIcon, AppWindowIcon, BoxesIcon, FileCodeIcon, FolderIcon, WrenchIcon,
} from './icons';

export type SidebarItem = { label: string; href: string; badge?: string; badgeTone?: 'new' | 'free' };
export type SidebarGroup = { title: string; items: SidebarItem[] };

const GET_STARTED: SidebarItem[] = [
  { label: '介绍', href: '/docs/introduction' },
  { label: '安装', href: '/docs/installation' },
  { label: '落地页搭建器', href: '/builder', badge: '已解锁' },
  { label: 'MCP 服务', href: '/docs/mcp' },
  { label: '已收藏', href: '/docs/saved' },
];

const BROWSE: SidebarItem[] = [
  { label: '组件', href: '/docs/components', badge: '413' },
  { label: '区块', href: '/docs/blocks', badge: '300' },
  { label: '应用界面', href: '/docs/app-ui', badge: '300' },
  { label: '模板', href: '/docs/templates', badge: '15' },
  { label: '智能体套件', href: '/docs/agent-kit', badge: '19' },
  { label: '工具', href: '/tools', badge: '5' },
];

export function Sidebar({
  groups = [],
  activeHref,
  showFilters = true,
  filterPlaceholder = '筛选…',
}: {
  groups?: SidebarGroup[];
  activeHref?: string;
  showFilters?: boolean;
  filterPlaceholder?: string;
}) {
  const pathname = usePathname();
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    if (!q.trim()) return groups;
    const needle = q.toLowerCase();
    return groups
      .map(g => ({ ...g, items: g.items.filter(i => i.label.toLowerCase().includes(needle)) }))
      .filter(g => g.items.length);
  }, [groups, q]);

  const isActive = (href: string) => activeHref === href || pathname === href;

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/40 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto scroll-area">
      <div className="p-3 space-y-3">
        {/* Templates 主入口 */}
        <Link
          href="/docs/templates"
          className={`flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm font-medium transition-colors ${
            isActive('/docs/templates') ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground'
          }`}
        >
          <TemplateIcon className="size-4" />
          <span>模板</span>
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
            15 <ChevronRight className="size-3" />
          </span>
        </Link>

        {/* 过滤框 */}
        {showFilters && (
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder={filterPlaceholder}
              className="h-9 w-full rounded-md border border-border/60 bg-background pl-8 pr-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/20 focus:outline-none"
            />
          </div>
        )}

        {/* 快速开始 */}
        <Group title="快速开始">
          {GET_STARTED.map(i => (
            <Item key={i.href} item={i} active={isActive(i.href)} />
          ))}
        </Group>

        {/* 浏览 */}
        <Group title="浏览">
          {BROWSE.map(i => (
            <Item key={i.href} item={i} active={isActive(i.href)} />
          ))}
        </Group>

        {/* 数据驱动的分组 */}
        {filtered.map(g => (
          <Group key={g.title} title={g.title}>
            {g.items.map(i => (
              <Item key={i.href} item={i} active={isActive(i.href)} />
            ))}
          </Group>
        ))}
      </div>
    </aside>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-2">
      <div className="px-3 pb-1.5 text-xs font-medium text-muted-foreground/80">{title}</div>
      <nav className="flex flex-col gap-0.5">{children}</nav>
    </div>
  );
}

function Item({ item, active }: { item: SidebarItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={`group flex w-full items-center gap-2 rounded-sm border border-transparent p-2 text-left text-sm tracking-tight transition-colors ${
        active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground'
      }`}
    >
      <span className="truncate">{item.label}</span>
      {item.badge && (
        <span className="ml-auto flex items-center gap-1">
          <span
            className={`inline-flex shrink-0 items-center rounded-[5px] border border-border/60 bg-background/95 px-1.5 py-0.5 text-[10px] font-medium leading-none tracking-tight backdrop-blur-sm ${
              item.badgeTone === 'free' ? 'text-emerald-400' : 'text-foreground'
            }`}
          >
            {item.badge}
          </span>
        </span>
      )}
    </Link>
  );
}
