/**
 * 精确回滚：只删「修复脚本后来加的」export 行。
 *
 * 做法：拿 data/tsx/_helpers.backup-* 最新备份作为基准，
 * 对比每个文件，删掉「当前存在但备份里不存在」的 export 行。
 * 这样原始的 export（哪怕不含 default）都保留。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HELPER_DIR = path.join(ROOT, 'data', 'tsx', '_helpers');
const DRY = !process.argv.includes('--apply');

// 找最新的备份目录
const tsxDir = path.join(ROOT, 'data', 'tsx');
const backups = fs.readdirSync(tsxDir)
  .filter(d => d.startsWith('_helpers.backup-'))
  .sort()
  .reverse();
if (!backups.length) {
  console.error('找不到备份目录 _helpers.backup-*');
  process.exit(1);
}
const BACKUP_DIR = path.join(tsxDir, backups[0]);
console.log(`基准备份: ${backups[0]}`);

let removedLines = 0;
let touchedFiles = 0;
const detail = [];

const files = fs.readdirSync(HELPER_DIR).filter(f => f.endsWith('.tsx'));
for (const f of files) {
  const curPath = path.join(HELPER_DIR, f);
  const bakPath = path.join(BACKUP_DIR, f);
  if (!fs.existsSync(bakPath)) continue;

  const curLines = fs.readFileSync(curPath, 'utf8').split('\n');
  const bakLines = new Set(fs.readFileSync(bakPath, 'utf8').split('\n').map(l => l.trim()));

  // 找出当前有、备份里没有的 export 行
  const toRemove = new Set();
  for (const line of curLines) {
    const t = line.trim();
    if (!/^export\s*\{/.test(t)) continue;
    if (!bakLines.has(t)) toRemove.add(line);
  }
  if (!toRemove.size) continue;

  const kept = curLines.filter(l => !toRemove.has(l));
  removedLines += toRemove.size;
  touchedFiles++;
  if (detail.length < 10) detail.push(`${f}: 移除 ${toRemove.size} 行 (${[...toRemove].map(s => s.trim()).slice(0, 2).join(' ')})`);

  if (!DRY) fs.writeFileSync(curPath, kept.join('\n'), 'utf8');
}

console.log(`${DRY ? '[预演]' : '[已写入]'} ${touchedFiles} 个文件，移除 ${removedLines} 行多余 export`);
detail.forEach(d => console.log(`  ${d}`));
if (DRY) console.log('\n加 --apply 实际写入');
