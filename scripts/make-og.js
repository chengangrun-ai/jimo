const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const svg = fs.readFileSync('public/og-image.svg');
  const info = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer();
  fs.writeFileSync('public/og-image.png', info);
  console.log('og-image.png 已生成', Math.round(info.length / 1024) + ' KB');
})().catch((e) => {
  console.log('失败:', e.message);
  process.exit(1);
});
