import Link from 'next/link';
import { GlobalSearch } from '@/components/global-search';
import { loadAgentKit, KIND_LABEL } from '@/lib/agent-kit';
import { SparklesIcon, FileCodeIcon, ChevronRight } from '@/components/icons';

export const dynamic = 'force-static';
export const metadata = { title: '智能体套件 | React Bits Pro' };

const GROUPS = [
  { key: 'skills' as const, kind: 'skill', title: '技能（Skills）', desc: '成套的设计系统，喂给 AI 后按规则产出页面' },
  { key: 'prompts' as const, kind: 'prompt', title: '提示词（Prompts）', desc: '按行业写好的落地页提示词' },
  { key: 'recipes' as const, kind: 'recipe', title: '配方（Recipes）', desc: '从零到成品的完整操作流程' },
];

export default function AgentKitPage() {
  const kit = loadAgentKit();
  const all = [...kit.skills, ...kit.prompts, ...kit.recipes];

  return (
    <>
      <GlobalSearch />
      <main className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground">
              <SparklesIcon className="size-3" />
              全部已解锁
            </span>
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
              {kit.total} 项
            </span>
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">智能体套件</h1>
          <p className="mt-1.5 max-w-2xl text-muted-foreground">
            给 AI 助手用的成套材料：设计系统、行业提示词、操作配方。每一项都能直接复制粘贴。
          </p>
        </div>

        {/* 总览数字 */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: '技能', value: kit.skills.length, href: '#skills' },
            { label: '提示词', value: kit.prompts.length, href: '#prompts' },
            { label: '配方', value: kit.recipes.length, href: '#recipes' },
            { label: '合计', value: kit.total, href: '#skills' },
          ].map(s => (
            <a key={s.label} href={s.href} className="rounded-xl border border-border bg-muted/30 p-4 card-glow">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </a>
          ))}
        </div>

        {GROUPS.map(g => {
          const items = kit[g.key];
          return (
            <section key={g.key} id={g.key} className="mb-12 scroll-mt-24">
              <div className="mb-4 flex items-baseline gap-3">
                <h2 className="text-xl font-semibold tracking-tight">{g.title}</h2>
                <span className="text-sm text-muted-foreground">{g.desc}</span>
                <span className="ml-auto text-sm text-muted-foreground">{items.length} 项</span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map(it => (
                  <Link
                    key={it.kind + it.slug}
                    href={`/docs/agent-kit/${it.kind}s/${it.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-muted/30 p-4 card-glow"
                  >
                    <div className="flex items-center gap-2">
                      <FileCodeIcon className="size-4 text-muted-foreground" />
                      <h3 className="text-sm font-semibold tracking-tight">{it.name}</h3>
                      {it.isFree && (
                        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                          官方原文
                        </span>
                      )}
                      <ChevronRight className="ml-auto size-4 opacity-0 transition-opacity group-hover:opacity-60" />
                    </div>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{it.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="rounded bg-white/10 px-1.5 py-0.5">{it.category}</span>
                      <span>{it.sections} 节</span>
                      <span>{it.version}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
