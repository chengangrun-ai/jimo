'use client';

import { useEffect, useState } from 'react';
import { CopyIcon, CheckIcon, SpinnerIcon, DownloadIcon } from './icons';

type Payload = {
  html: string; code: string; chars: number; sourceLabel: string;
  deps: string[]; original: string; name: string;
};

/**
 * 源码面板：默认显示反编译后的干净 TSX，可切换回原始打包产物。
 */
export function CleanCode({
  kind,
  slug,
  title,
}: {
  kind: 'free' | 'components' | 'blocks' | 'app-ui';
  slug: string;
  title: string;
}) {
  const [clean, setClean] = useState<Payload | null>(null);
  const [raw, setRaw] = useState<Payload | null>(null);
  const [view, setView] = useState<'clean' | 'raw'>('clean');
  const [err, setErr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [wrap, setWrap] = useState(false);

  useEffect(() => {
    let alive = true;
    setClean(null); setRaw(null); setErr(null);
    Promise.all([
      fetch(`/api/tsx/${kind}/${encodeURIComponent(slug)}`).then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))),
      fetch(`/api/code/${kind}/${encodeURIComponent(slug)}`).then(r => r.ok ? r.json() : null).catch(() => null),
    ])
      .then(([c, r]) => {
        if (!alive) return;
        setClean(c);
        setRaw(r ? { ...r, chars: r.code?.length || 0, sourceLabel: 'bundled' } : null);
      })
      .catch(e => { if (alive) setErr(String(e.message || e)); });
    return () => { alive = false; };
  }, [kind, slug]);

  const cur = view === 'clean' ? clean : (raw || clean);

  const doCopy = async () => {
    if (!cur?.code) return;
    try {
      await navigator.clipboard.writeText(cur.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const doDownload = () => {
    if (!cur?.code) return;
    const blob = new Blob([cur.code], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${slug}.tsx`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };

  if (err) {
    return <div className="rounded-xl border border-border bg-[#0d0d0d] p-6 text-sm text-destructive">加载失败：{err}</div>;
  }

  if (!clean) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
          <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <SpinnerIcon className="size-3 animate-spin" /> 正在加载源码…
          </span>
        </div>
        <div className="space-y-2 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-3 rounded" style={{ width: `${40 + (i * 37) % 55}%` }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
      {/* 顶部 */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">{slug}.tsx</span>

        <div className="ml-2 inline-flex items-center gap-0.5 rounded-md border border-border/60 p-0.5">
          <button
            onClick={() => setView('clean')}
            className={`rounded px-2 py-0.5 text-[11px] transition-colors ${view === 'clean' ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            干净 TSX
          </button>
          <button
            onClick={() => setView('raw')}
            disabled={!raw}
            className={`rounded px-2 py-0.5 text-[11px] transition-colors disabled:opacity-40 ${view === 'raw' ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            打包产物
          </button>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setWrap(w => !w)}
            className={`rounded px-2 py-1 text-[11px] transition-colors ${wrap ? 'bg-white/10 text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            自动换行
          </button>
          <button
            onClick={doDownload}
            className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <DownloadIcon className="size-3" /> 下载
          </button>
          <button
            onClick={doCopy}
            className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            {copied ? <CheckIcon className="size-3 text-emerald-400" /> : <CopyIcon className="size-3" />}
            {copied ? '已复制' : '复制'}
          </button>
        </div>
      </div>

      {/* 代码 */}
      <div
        className={`shiki-host max-h-[70vh] overflow-auto scroll-area ${wrap ? '[&_pre]:whitespace-pre-wrap [&_pre]:break-words' : ''}`}
        dangerouslySetInnerHTML={{ __html: cur?.html || '' }}
      />

      {/* 底部 */}
      <div className="flex flex-wrap items-center gap-2 border-t border-border/60 px-4 py-2.5 text-xs text-muted-foreground">
        <span>
          {cur?.chars?.toLocaleString()} 字符 ·{' '}
          {view === 'clean' ? (clean.sourceLabel === 'original' ? '原始源码' : '反编译还原') : 'webpack 打包产物'}
        </span>
        {clean.deps?.length ? (
          <>
            <span className="ml-2">依赖：</span>
            {clean.deps.map(d => <code key={d} className="rounded bg-white/10 px-1.5 py-0.5 text-[11px]">{d}</code>)}
          </>
        ) : null}
        {clean.original && <span className="ml-auto font-mono text-[11px] opacity-60">{clean.original}</span>}
      </div>
    </div>
  );
}
