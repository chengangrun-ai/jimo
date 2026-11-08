/**
 * 把 data/code 下的源码文本压缩成 .gz。
 *
 * 为什么要压缩：这些是 webpack 打包后的代码文本，单个文件最大 8MB，
 * 全部加起来 87MB。Netlify 单个函数包上限 250MB，压缩后能省下约 75MB。
 *
 * 运行时由 lib/data.ts 的 readCode 自动解压，不用改其它代码。
 * 原始 .txt 文件保留在本地（Git 里只提交 .gz，.txt 加进 .gitignore）。
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const CODE_DIR = path.join(process.cwd(), 'data', 'code');
let count = 0;
let before = 0;
let after = 0;

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (name.endsWith('.txt')) {
      const raw = fs.readFileSync(p);
      const gz = zlib.gzipSync(raw, { level: 9 });
      fs.writeFileSync(p + '.gz', gz);
      before += raw.length;
      after += gz.length;
      count++;
    }
  }
}

walk(CODE_DIR);
console.log('压缩文件数:', count);
console.log('压缩前:', Math.round(before / 1024 / 1024), 'MB');
console.log('压缩后:', Math.round(after / 1024 / 1024), 'MB');
console.log('省下:', Math.round((before - after) / 1024 / 1024), 'MB');
