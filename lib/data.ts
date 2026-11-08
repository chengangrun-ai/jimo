import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

/**
 * 数据层。
 *
 * 数据分两处：
 *   data/index.json              —— 元数据（0.3 MB），列表页/搜索用，读一次缓存
 *   data/code/<kind>/<slug>.txt  —— 源码，详情页按需读取
 *
 * 这样首页和列表页完全不碰 87 MB 源码，秒开。
 */
const DATA_DIR = path.join(process.cwd(), 'data');
const INDEX_FILE = path.join(DATA_DIR, 'index.json');

export type Item = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug?: string;
  style?: string;
  tier?: string;
  tags?: string[];
  exportName?: string;
  deps?: string[];
  original?: string;
  href?: string;
  lang: string;
  codeFile: string;
  codeLen: number;
};

export type Template = {
  id: string;
  slug: string;
  name: string;
  description: string;
  isNew?: boolean;
  isFree?: boolean;
  dir: string;
  files: number;
};

export type Index = {
  generatedAt: string;
  stats: {
    freeComponents: number;
    proComponents: number;
    proBlocks: number;
    proAppUi: number;
    templates: number;
  };
  free: { categories: string[]; components: Item[] };
  pro: { components: Item[]; blocks: Item[]; appUi: Item[]; templates: Template[] };
};

let cache: Index | null = null;

export function loadIndex(): Index {
  if (cache) return cache;
  cache = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8')) as Index;
  return cache;
}

/**
 * 读某个条目的源码（按需，详情页才调用）。
 *
 * data/code 下的源码在部署时压缩成 .gz（体积从 87MB 降到约 10MB，
 * Netlify 单函数包上限 250MB）。这里优先读 .gz 并解压，读不到再退回原始 .txt。
 */
export function readCode(item: Item | null | undefined): string {
  if (!item?.codeFile) return '';
  const base = path.join(DATA_DIR, item.codeFile);
  try {
    if (fs.existsSync(base + '.gz')) {
      return zlib.gunzipSync(fs.readFileSync(base + '.gz')).toString('utf8');
    }
    return fs.readFileSync(base, 'utf8');
  } catch {
    return '';
  }
}

export type Kind = 'free' | 'components' | 'blocks' | 'app-ui';

export function listItems(kind: Kind): Item[] {
  const c = loadIndex();
  switch (kind) {
    case 'free': return c.free.components;
    case 'components': return c.pro.components;
    case 'blocks': return c.pro.blocks;
    case 'app-ui': return c.pro.appUi;
  }
}

export function listTemplates(): Template[] {
  return loadIndex().pro.templates;
}

export function getItem(kind: Kind, slug: string): Item | null {
  return listItems(kind).find(i => i.slug === slug) || null;
}

export function getTemplate(slug: string): Template | null {
  return loadIndex().pro.templates.find(t => t.slug === slug) || null;
}

export const listLight = listItems;

/** 搜索索引：1028 条，前端一次性拉走 */
export function searchIndex() {
  const c = loadIndex();
  const out: { id: string; title: string; subtitle: string; group: string; href: string }[] = [];
  for (const i of c.free.components) {
    out.push({ id: i.id, title: i.name, subtitle: i.category, group: 'free', href: `/docs/components/free/${i.slug}` });
  }
  for (const i of c.pro.components) {
    out.push({ id: i.id, title: i.name, subtitle: i.category, group: 'component', href: `/docs/components/pro/${i.slug}` });
  }
  for (const i of c.pro.blocks) {
    out.push({ id: i.id, title: i.name, subtitle: i.category, group: 'block', href: `/docs/blocks/${i.slug}` });
  }
  for (const i of c.pro.appUi) {
    out.push({ id: i.id, title: i.name, subtitle: i.category, group: 'app-ui', href: `/docs/app-ui/${i.slug}` });
  }
  for (const t of c.pro.templates) {
    out.push({ id: t.id, title: t.name, subtitle: 'Template', group: 'template', href: `/docs/templates/${t.slug}` });
  }
  return out;
}