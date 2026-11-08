'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Template } from '@/lib/data';
import { DownloadIcon, ExternalLinkIcon, ArrowRightIcon, LockIcon, EyeIcon } from './icons';

const SORTS = [
  { value: 'newest', label: '最新' },
  { value: 'az', label: 'A–Z' },
  { value: 'za', label: 'Z–A' },
] as const;

export function TemplateGrid({ templates }: { templates: Template[] }) {
  const [sort, setSort] = useState<(typeof SORTS)[number]['value']>('newest');

  const sorted = useMemo(() => {
    const list = [...templates];
    if (sort === 'newest') list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    else if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [templates, sort]);

  return (
    <>
      <div className="flex items-center justify-between mb-6 gap-3">
        <p className="inline-flex h-10 items-center gap-1 rounded-lg border border-border/50 bg-muted/40 px-3.5 text-xs font-medium text-muted-foreground">
          <span className="text-foreground">{templates.length}</span>
          个模板
        </p>

        <div
          role="radiogroup"
          aria-label="模板排序"
          className="inline-flex items-center gap-1 p-1 rounded-lg border border-border/50 bg-muted/40 h-10"
        >
          {SORTS.map(s => {
            const active = sort === s.value;
            return (
              <button
                key={s.value}
                role="radio"
                aria-checked={active}
                onClick={() => setSort(s.value)}
                className={`px-3 h-8 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
        {sorted.map(t => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>
    </>
  );
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-muted/50 overflow-hidden card-glow">
      <div className="p-1">
        <div className="relative aspect-video bg-muted overflow-hidden rounded-lg border border-border">
          {/* 预览图：直接用本地抓下来的模板首页截图 */}
          <img
            src={`/templates/${template.slug}/_preview.png`}
            alt={template.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={e => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* 卡片浮层按钮 */}
          <div className="absolute inset-x-1 bottom-1 flex items-center gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <Link
              href={`/preview/${template.slug}/`}
              className="inline-flex items-center h-8 rounded-sm px-2.5 text-[13px] bg-background/95 backdrop-blur-sm text-foreground hover:bg-background shadow-sm border border-border/60"
            >
              <EyeIcon className="h-3.5 w-3.5 mr-1.5" />
              实时预览
            </Link>
            <Link
              href={`/docs/templates/${template.slug}`}
              className="inline-flex items-center h-8 rounded-sm px-2.5 text-[13px] bg-background/95 backdrop-blur-sm text-foreground hover:bg-background shadow-sm border border-border/60"
            >
              查看详情
            </Link>
          </div>

          {/* 角标 */}
          <div className="absolute top-1 left-1 flex items-center gap-1.5">
            {template.isNew && (
              <span className="inline-flex items-center shrink-0 rounded-sm border border-border/60 bg-background/95 backdrop-blur-sm shadow-sm px-1.5 py-0.5 text-[10px] font-medium tracking-tight leading-none">
                新
              </span>
            )}
            {template.isFree && (
              <span className="inline-flex items-center shrink-0 rounded-sm border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm shadow-sm px-1.5 py-0.5 text-[10px] font-medium tracking-tight leading-none text-emerald-400">
                免费
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-4 pt-3 pb-4">
        <h3 className="text-base font-semibold tracking-tight">{template.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">{template.description}</p>

        <div className="mt-4 pt-0">
          <div className="flex flex-col gap-2">
            <a
              href={`/api/download/template/${template.slug}`}
              className="inline-flex w-full h-10 items-center justify-center rounded-lg gradient-button gradient-button-static text-sm font-semibold text-black"
            >
              <DownloadIcon className="h-4 w-4 mr-2" />
              {template.isFree ? '免费下载' : '下载'}
            </a>
            <Link
              href={`/preview/${template.slug}/`}
              className="inline-flex w-full h-10 items-center justify-center rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              或实时预览
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
