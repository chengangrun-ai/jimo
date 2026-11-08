'use client';

import { useEffect, useState, useDeferredValue } from 'react';
import Link from 'next/link';
import { SearchIcon, XIcon, FileCodeIcon, BlocksIcon, AppWindowIcon, TemplateIcon } from './icons';

type Entry = {
  id: string;
  title: string;
  subtitle: string;
  group: 'free' | 'component' | 'block' | 'app-ui' | 'template';
  href: string;
};

const GROUP_META = {
  free: { icon: FileCodeIcon, label: '免费组件', tone: 'text-emerald-400' },
  component: { icon: FileCodeIcon, label: 'Pro 组件', tone: 'text-sky-400' },
  block: { icon: BlocksIcon, label: '区块', tone: 'text-violet-400' },
  'app-ui': { icon: AppWindowIcon, label: '应用界面', tone: 'text-amber-400' },
  template: { icon: TemplateIcon, label: '模板', tone: 'text-rose-400' },
} as const;

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [index, setIndex] = useState<Entry[]>([]);
  const [active, setActive] = useState(0);
  const deferred = useDeferredValue(q);

  // 打开时加载索引（一次性）
  useEffect(() => {
    if (!open || index.length) return;
    fetch('/api/search-index')
      .then(r => r.json())
      .then(d => setIndex(d.items || []))
      .catch(() => {});
  }, [open, index.length]);

  useEffect(() => {
    if (!open) { setQ(''); setActive(0); return; }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => a + 1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(0, a - 1)); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useDeferredValue(
    (() => {
      const needle = deferred.trim().toLowerCase();
      if (!needle) return index.slice(0, 30);
      const scored: { e: Entry; s: number }[] = [];
      for (const e of index) {
        const t = e.title.toLowerCase();
        let s = -1;
        if (t === needle) s = 100;
        else if (t.startsWith(needle)) s = 80;
        else if (t.includes(needle)) s = 60;
        else if (e.subtitle.toLowerCase().includes(needle)) s = 30;
        if (s >= 0) scored.push({ e, s });
      }
      scored.sort((a, b) => b.s - a.s);
      return scored.slice(0, 60).map(x => x.e);
    })()
  );

  useEffect(() => { setActive(0); }, [deferred]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-border/80 bg-[#0d0d0d] shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && results[active]) {
                window.location.href = results[active].href;
              }
            }}
            placeholder="搜索组件、区块、App UI、模板…"
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
          />
          <button onClick={onClose} className="rounded p-1 text-muted-foreground hover:text-foreground" aria-label="Close">
            <XIcon className="size-3.5" />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto scroll-area p-2">
          {results.length === 0 && (
            <div className="px-3 py-8 text-center text-sm text-muted-foreground">
              {q ? '没有匹配结果' : '正在加载…'}
            </div>
          )}
          {results.map((e, i) => {
            const meta = GROUP_META[e.group];
            const Icon = meta.icon;
            return (
              <Link
                key={e.id}
                href={e.href}
                onClick={onClose}
                onMouseEnter={() => setActive(i)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  i === active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`size-4 shrink-0 ${meta.tone}`} />
                <span className="truncate text-foreground">{e.title}</span>
                <span className="ml-auto shrink-0 text-[11px] text-muted-foreground">{meta.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 border-t border-border/60 px-4 py-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><kbd className="rounded bg-white/10 px-1">↑</kbd><kbd className="rounded bg-white/10 px-1">↓</kbd> 选择</span>
          <span className="flex items-center gap-1"><kbd className="rounded bg-white/10 px-1">↵</kbd> 打开</span>
          <span className="flex items-center gap-1"><kbd className="rounded bg-white/10 px-1">esc</kbd> 关闭</span>
          <span className="ml-auto">共 {index.length} 条</span>
        </div>
      </div>
    </div>
  );
}
