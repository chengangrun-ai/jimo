import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

const LANGS = ['tsx', 'jsx', 'typescript', 'javascript', 'css', 'json', 'bash', 'html'] as const;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark-default'],
      langs: [...LANGS],
    });
  }
  return highlighterPromise;
}

/**
 * 把源码高亮成 HTML（服务端调用）。
 */
export async function highlight(code: string, lang: string = 'tsx'): Promise<string> {
  const hl = await getHighlighter();
  const useLang = (LANGS as readonly string[]).includes(lang) ? lang : 'tsx';
  try {
    return hl.codeToHtml(code, {
      lang: useLang,
      theme: 'github-dark-default',
    });
  } catch {
    // 语言不认识就退回纯文本
    return hl.codeToHtml(code, { lang: 'typescript', theme: 'github-dark-default' });
  }
}
