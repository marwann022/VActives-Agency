import sharp from 'sharp'
const source = 'public/assets/vactives-logo-original.png'
const logo = await sharp(source).trim({ threshold: 40 }).png().toBuffer()
await sharp(logo).resize({ width: 600 }).toFile('public/brand-logo.png')
for (const [size, name] of [[96, 'favicon.png'], [180, 'apple-touch-icon.png']]) {
  await sharp(logo).resize(size - 12, size - 12, { fit: 'contain', background: '#ffffff' }).extend({ top: 6, bottom: 6, left: 6, right: 6, background: '#ffffff' }).toFile(`public/${name}`)
}
const mark = await sharp(logo).resize(330, 80, { fit: 'contain', background: '#ffffff' }).toBuffer()
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#0b3f35"/><rect x="60" y="48" width="370" height="110" rx="16" fill="white"/><text x="60" y="270" font-family="Arial,sans-serif" font-size="66" font-weight="bold" fill="white">Build a reliable</text><text x="60" y="350" font-family="Arial,sans-serif" font-size="66" font-weight="bold" fill="white">remote team.</text><text x="60" y="425" font-family="Arial,sans-serif" font-size="28" fill="#d4e9df">Virtual recruitment for growing businesses</text><text x="60" y="555" font-family="Arial,sans-serif" font-size="28" fill="#bce36b">VActives Agency · vactives.com</text></svg>`
await sharp(Buffer.from(svg)).composite([{ input: mark, top: 65, left: 80 }]).png().toFile('public/social-preview.png')
