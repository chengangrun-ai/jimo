'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon, DownloadIcon } from './icons';

/** 极简 Markdown 渲染：标题 / 列表 / 代码块 / 粗体 / 引用 / 分隔线 */
function renderMarkdown(md: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s: string) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="rounded bg-white/10 px-1.5 py-0.5 text-[0.85em]">$1</code>');

  const lines = md.split('\n');
  const out: string[] = [];
  let inCode = false, inList = false, inOl = false;

  const closeList = () => {
    if (inList) { out.push('</ul>'); inList = false; }
    if (inOl) { out.push('</ol>'); inOl = false; }
  };

  for (const raw of lines) {
    const line = raw;
    if (/^```/.test(line)) {
      closeList();
      if (!inCode) { out.push('<pre class="my-4 overflow-x-auto rounded-lg border border-border bg-black/60 p-4 text-xs leading-relaxed"><code>'); inCode = true; }
      else { out.push('</code></pre>'); inCode = false; }
      continue;
    }
    if (inCode) { out.push(esc(line) + '\n'); continue; }

    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      closeList();
      const lvl = h[1].length;
      const cls = lvl === 1 ? 'mt-2 mb-4 text-2xl font-semibold tracking-tight'
        : lvl === 2 ? 'mt-8 mb-3 text-lg font-semibold tracking-tight'
        : 'mt-6 mb-2 text-base font-semibold tracking-tight';
      out.push(`<h${lvl} class="${cls}">${inline(h[2])}</h${lvl}>`);
      continue;
    }
    if (/^---+$/.test(line.trim())) { closeList(); out.push('<hr class="my-8 border-border" />'); continue; }
    if (/^>\s?/.test(line)) { closeList(); out.push(`<blockquote class="my-4 border-l-2 border-border pl-4 text-sm text-muted-foreground">${inline(line.replace(/^>\s?/, ''))}</blockquote>`); continue; }

    const ol = /^(\d+)\.\s+(.*)$/.exec(line);
    if (ol) {
      if (inList) { out.push('</ul>'); inList = false; }
      if (!inOl) { out.push('<ol class="my-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">'); inOl = true; }
      out.push(`<li>${inline(ol[2])}</li>`);
      continue;
    }
    const ul = /^[-*]\s+(.*)$/.exec(line);
    if (ul) {
      if (inOl) { out.push('</ol>'); inOl = false; }
      if (!inList) { out.push('<ul class="my-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">'); inList = true; }
      out.push(`<li>${inline(ul[1])}</li>`);
      continue;
    }
    if (!line.trim()) { closeList(); continue; }
    closeList();
    out.push(`<p class="my-3 text-sm leading-relaxed text-muted-foreground">${inline(line)}</p>`);
  }
  closeList();
  return out.join('\n');
}

export function KitDoc({ markdown, slug, name, isFree }: { markdown: string; slug: string; name: string; isFree: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(markdown); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };
  const download = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${slug}.md`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };

  return (
    <div className="rounded-xl border border-border bg-muted/20">
      <div className="sticky top-[69px] z-10 flex items-center gap-2 rounded-t-xl border-b border-border bg-background/95 px-4 py-2.5 backdrop-blur">
        <span className="font-mono text-xs text-muted-foreground">{slug}.md</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
          {markdown.length.toLocaleString()} 字符
        </span>
        {isFree && (
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">官方原文</span>
        )}
        <div className="ml-auto flex items-center gap-1">
          <button onClick={download} className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground">
            <DownloadIcon className="size-3" /> 下载 .md
          </button>
          <button onClick={copy} className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground">
            {copied ? <CheckIcon className="size-3 text-emerald-400" /> : <CopyIcon className="size-3" />}
            {copied ? '已复制' : '复制全文'}
          </button>
        </div>
      </div>
      <div className="max-h-[75vh] overflow-auto scroll-area px-5 py-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
    </div>
  );
}
