'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  SearchIcon, PlusIcon, TrashIcon, ChevronUp, ChevronDown, EyeIcon, EyeOffIcon,
  UndoIcon, RedoIcon, DownloadIcon, CopyIcon, CheckIcon, BlocksIcon, SpinnerIcon,
} from './icons';

type Block = { slug: string; name: string; category: string; previewHeight?: number; description?: string };
type Section = { key: string; slug: string; name: string; hidden: boolean };

let seq = 0;
const nextKey = () => 's' + (++seq) + '_' + Math.random().toString(36).slice(2, 7);

export function Builder() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('全部');
  const [sections, setSections] = useState<Section[]>([]);
  const [past, setPast] = useState<Section[][]>([]);
  const [future, setFuture] = useState<Section[][]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/list/blocks')
      .then(r => r.json())
      .then((list: Block[]) => {
        setBlocks(list);
        // 默认给一套首屏骨架
        const pick = ['navigation-1', 'hero-1', 'social-proof-1', 'features-1', 'pricing-1', 'faq-1', 'footer-1'];
        const init: Section[] = [];
        for (const s of pick) {
          const b = list.find(x => x.slug === s);
          if (b) init.push({ key: nextKey(), slug: b.slug, name: b.name, hidden: false });
        }
        setSections(init);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const commit = (next: Section[]) => {
    setPast(p => [...p.slice(-40), sections]);
    setFuture([]);
    setSections(next);
  };

  const cats = useMemo(() => {
    const s = new Set(blocks.map(b => b.category));
    return ['全部', ...[...s].sort()];
  }, [blocks]);

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return blocks.filter(b =>
      (cat === '全部' || b.category === cat) &&
      (!k || b.name.toLowerCase().includes(k) || b.slug.includes(k) || (b.description || '').toLowerCase().includes(k))
    );
  }, [blocks, q, cat]);

  const add = (b: Block) => commit([...sections, { key: nextKey(), slug: b.slug, name: b.name, hidden: false }]);
  const del = (key: string) => commit(sections.filter(s => s.key !== key));
  const move = (key: string, dir: -1 | 1) => {
    const i = sections.findIndex(s => s.key === key);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= sections.length) return;
    const next = [...sections];
    [next[i], next[j]] = [next[j], next[i]];
    commit(next);
  };
  const toggleHide = (key: string) => commit(sections.map(s => s.key === key ? { ...s, hidden: !s.hidden } : s));
  const undo = () => {
    if (!past.length) return;
    const prev = past[past.length - 1];
    setPast(p => p.slice(0, -1));
    setFuture(f => [sections, ...f]);
    setSections(prev);
  };
  const redo = () => {
    if (!future.length) return;
    const nx = future[0];
    setFuture(f => f.slice(1));
    setPast(p => [...p, sections]);
    setSections(nx);
  };

  const visible = sections.filter(s => !s.hidden);

  const doExport = async () => {
    if (!visible.length) return;
    setExporting(true);
    try {
      const res = await fetch('/api/builder/export', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sections: visible.map(s => ({ slug: s.slug })), title: 'My Landing Page' }),
      });
      if (!res.ok) throw new Error('导出失败');
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'landing-page.zip';
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    } catch (e) {
      alert(String(e));
    } finally {
      setExporting(false);
    }
  };

  const copyPrompt = async () => {
    const lines = [
      '# 页面搭建任务',
      '',
      `按下面的顺序拼一个落地页，共 ${visible.length} 段：`,
      '',
      ...visible.map((s, i) => `${i + 1}. ${s.name}（\`${s.slug}\`）`),
      '',
      '要求：',
      '- 各段之间样式统一，深浅色跟随系统',
      '- 首屏只留一个主要按钮',
      '- 所有文案换成我的产品，不要占位词',
      '',
      '每段的源码可以从本项目的 /docs/blocks/<slug> 拿到。',
    ];
    try { await navigator.clipboard.writeText(lines.join('\n')); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center gap-2 text-sm text-muted-foreground">
        <SpinnerIcon className="size-4 animate-spin" /> 正在加载区块…
      </div>
    );
  }

  return (
    <div className="grid h-[calc(100vh-69px)] grid-cols-1 lg:grid-cols-[260px_1fr_280px]">
      {/* 左：区块库 */}
      <aside className="hidden min-h-0 flex-col border-r border-border lg:flex">
        <div className="shrink-0 space-y-2 border-b border-border p-3">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder={`搜索 ${blocks.length} 个区块…`}
              className="h-8 w-full rounded-md border border-border bg-background pl-8 pr-2 text-xs outline-none placeholder:text-muted-foreground focus:border-foreground/30"
            />
          </div>
          <select
            value={cat}
            onChange={e => setCat(e.target.value)}
            className="h-8 w-full rounded-md border border-border bg-background px-2 text-xs outline-none"
          >
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="min-h-0 flex-1 overflow-auto scroll-area p-2">
          {filtered.slice(0, 200).map(b => (
            <button
              key={b.slug}
              onClick={() => add(b)}
              className="group mb-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors hover:bg-white/5"
            >
              <BlocksIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{b.name}</span>
              <PlusIcon className="ml-auto size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-70" />
            </button>
          ))}
          {!filtered.length && <div className="p-3 text-xs text-muted-foreground">没有匹配的区块</div>}
        </div>
      </aside>

      {/* 中：画布 */}
      <div className="flex min-h-0 flex-col">
        <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-2">
          <span className="text-sm font-medium">未命名页面</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] text-muted-foreground">{visible.length} 段</span>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={undo} disabled={!past.length} title="撤销"
              className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:opacity-30">
              <UndoIcon className="size-4" />
            </button>
            <button onClick={redo} disabled={!future.length} title="重做"
              className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:opacity-30">
              <RedoIcon className="size-4" />
            </button>
            <button onClick={copyPrompt}
              className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
              {copied ? <CheckIcon className="size-3 text-emerald-400" /> : <CopyIcon className="size-3" />}
              复制给 AI 的指令
            </button>
            <button onClick={doExport} disabled={!visible.length || exporting}
              className="inline-flex items-center gap-1.5 rounded-md gradient-button-static px-3 py-1 text-xs font-semibold text-black disabled:opacity-50">
              {exporting ? <SpinnerIcon className="size-3 animate-spin" /> : <DownloadIcon className="size-3" />}
              导出项目
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto scroll-area p-4">
          {!sections.length && (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              左边点一个区块加进来
            </div>
          )}
          <div className="mx-auto max-w-[900px] space-y-2">
            {sections.map((s, i) => (
              <div
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`group rounded-lg border transition-colors ${active === s.key ? 'border-foreground/40' : 'border-border'} ${s.hidden ? 'opacity-40' : ''} bg-muted/20`}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-5 text-[11px] text-muted-foreground">{i + 1}</span>
                  <span className="text-xs font-medium">{s.name}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{s.slug}</span>
                  <div className="ml-auto flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <button onClick={e => { e.stopPropagation(); move(s.key, -1); }} className="rounded p-1 text-muted-foreground hover:bg-white/10 hover:text-foreground"><ChevronUp className="size-3.5" /></button>
                    <button onClick={e => { e.stopPropagation(); move(s.key, 1); }} className="rounded p-1 text-muted-foreground hover:bg-white/10 hover:text-foreground"><ChevronDown className="size-3.5" /></button>
                    <button onClick={e => { e.stopPropagation(); toggleHide(s.key); }} className="rounded p-1 text-muted-foreground hover:bg-white/10 hover:text-foreground">
                      {s.hidden ? <EyeOffIcon className="size-3.5" /> : <EyeIcon className="size-3.5" />}
                    </button>
                    <button onClick={e => { e.stopPropagation(); del(s.key); }} className="rounded p-1 text-muted-foreground hover:bg-white/10 hover:text-destructive"><TrashIcon className="size-3.5" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右：说明 */}
      <aside className="hidden min-h-0 flex-col border-l border-border lg:flex">
        <div className="border-b border-border p-3 text-sm font-medium">导出说明</div>
        <div className="min-h-0 flex-1 space-y-4 overflow-auto scroll-area p-4 text-xs leading-relaxed text-muted-foreground">
          <p><span className="text-foreground">导出项目</span>：下载一个完整可跑的 Next.js 工程，解开后 <code className="rounded bg-white/10 px-1">npm install && npm run dev</code> 就能看。</p>
          <p><span className="text-foreground">复制指令</span>：把当前排版顺序写成一段话，粘给 AI 让它继续改。</p>
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="mb-1.5 text-[11px] text-foreground">当前 {visible.length} 段</div>
            <ol className="space-y-1 text-[11px]">
              {visible.map((s, i) => <li key={s.key}>{i + 1}. {s.name}</li>)}
            </ol>
          </div>
          <p className="text-[11px] opacity-70">区块源码来自本地反编译还原，导出后可以随意改。</p>
        </div>
      </aside>
    </div>
  );
}