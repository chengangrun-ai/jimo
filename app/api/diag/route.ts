import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

/** 诊断：云端函数里 cwd / vendor / esbuild 二进制的实际情况 */
export async function GET() {
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, 'vendor', 'esbuild-linux-x64', 'bin', 'esbuild'),
    path.join(__dirname, '..', 'vendor', 'esbuild-linux-x64', 'bin', 'esbuild'),
    '/var/task/vendor/esbuild-linux-x64/bin/esbuild',
    '/var/task/node_modules/@esbuild/linux-x64/bin/esbuild',
  ];
  const found = candidates.map((p) => ({ p, exists: fs.existsSync(p) }));
  // 列出 /var/task 下的内容（如果存在）
  let taskDir: string[] = [];
  try { taskDir = fs.readdirSync('/var/task').slice(0, 20); } catch (e) {}

  return NextResponse.json({
    platform: process.platform,
    cwd,
    __dirname,
    envBinary: process.env.ESBUILD_BINARY_PATH || null,
    envNetlify: process.env.NETLIFY || null,
    found,
    taskDir,
  });
}
