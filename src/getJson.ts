import fs from 'fs/promises'
import got from 'got'
import path from 'path'

if (process.argv.length <= 3) {
  console.log('Usage: npm run n <url> <file>')
  process.exit(1)
}

const url = process.argv[2]!
const filename = process.argv[3]!

async function main() {
  const data = JSON.stringify(await got.get(url).json(), null, 2)
  await fs.writeFile(path.join(process.cwd(), filename), data)
}

main().catch(err => console.error(err))
