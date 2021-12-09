// import fs from 'fs/promises'
// import path from 'path'

// const l = (v: any) => console.log(v)

// const toPath = (...paths: string[]) => path.join(process.cwd(), ...paths)

// console.assert(process.argv.length === 4)

// export const filesInDir = async (dir: string): Promise<string[]> => {
//   const files: string[] = []
//   const all = await fs.readdir(dir)
//   for (const file of all) {
//     const f = path.join(dir, file)
//     const s = await fs.stat(f)
//     if (!s.isDirectory()) {
//       files.push(f)
//     }
//   }
//   return files
// }

// export const concatFiles = async (files: string[]): Promise<string> => {
//   let result = ''
//   for (const file of files) {
//     const content = await fs.readFile(file, 'utf-8')
//     result += content
//   }
//   return result
// }

// export const cat = async (inDir: string, outFile: string): Promise<void> => {
//   const files = await filesInDir(inDir)
//   const total = await concatFiles(files)
//   fs.writeFile(outFile, total)
// }

// const inDir = toPath(process.argv[2]!)
// const outFile = toPath(process.argv[3]!)

// cat(inDir, outFile).catch(console.log)
