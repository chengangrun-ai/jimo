import fs from 'fs';
import path from 'path';

export type KitItem = {
  kind: 'skill' | 'prompt' | 'recipe';
  slug: string;
  name: string;
  category: string;
  sections: number;
  words: number;
  version: string;
  isFree: boolean;
  description: string;
  produces: string[];
  toc: { n: number; title: string }[];
  preview: string;
  changelog: string;
  href: string;
  contentFile: string | null;
};

export type AgentKit = {
  generatedAt: string;
  total: number;
  freeCount: number;
  skills: KitItem[];
  prompts: KitItem[];
  recipes: KitItem[];
};

let cache: AgentKit | null = null;

export function loadAgentKit(): AgentKit {
  if (cache) return cache;
  cache = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'agent-kit.json'), 'utf8'));
  return cache;
}

export function getKitItem(kind: string, slug: string): KitItem | null {
  const k = loadAgentKit();
  const group = kind === 'skill' ? k.skills : kind === 'prompt' ? k.prompts : kind === 'recipe' ? k.recipes : null;
  return group ? group.find(i => i.slug === slug) || null : null;
}

/** 读某个条目的完整文档 */
export function readKitDoc(item: KitItem | null): string {
  if (!item?.contentFile) return '';
  try {
    return fs.readFileSync(path.join(process.cwd(), 'data', item.contentFile), 'utf8');
  } catch {
    return '';
  }
}

export const KIND_LABEL: Record<string, string> = {
  skill: '技能',
  prompt: '提示词',
  recipe: '配方',
};
