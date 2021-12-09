// import fs from 'fs/promises'
// import path from 'path'
// import { assert, string } from 'superstruct'

// // console.log(
// //   'inputs:',
// //   process.argv.slice(2, process.argv.length - 1),
// //   'output:',
// //   process.argv[process.argv.length - 1],
// // )

// // const pathFile = path.join(process.cwd(), 'src', 'test.txt')

// // async function readFile() {
// //     return await fs.readFile('test.txt')
// // }

// // fs.readFile(pathFile, 'utf-8').then(data => console.log(data))

// // const inputs = process.argv
// //   .slice(2, process.argv.length - 1)
// //   .map(file => path.join(process.cwd(), file))
// // const out = process.argv[process.argv.length - 1]

// // if (out === undefined) {
// //   console.error('usage: cmd inp1 inp2 ... out')
// //   process.exit(1)
// // }
// // const output = path.join(process.cwd(), out)

// // const filePath = path.join(process.cwd(), 'src')

// async function concatAllDirFiles(dir: string) {
//   const files = []
//   const ls = await fs.readdir(dir)
//   for (const file of ls) {
//     if (!(await fs.stat(path.join(dir, file))).isDirectory()) {
//       files.push(path.join(dir, file))
//     }
//   }
//   return files
// }

// // const outputPath = path.join(process.cwd(), 'src', 'output.txt')

// concatAllDirFiles()
//   .then(files => cat(files, outputPath))
//   .catch(err => console.log(err))

// async function cat(inputs: string[], output: string) {
//   console.log(inputs, output)
//   let contents = ''
//   for (let file of inputs) {
//     const res = await fs.readFile(file)
//     contents += res
//   }
//   assert(output, string())
//   await fs.writeFile(output, contents)
// }

// // async function cat(inputs: string[], output: string) {
// //   const promises = inputs.map(inp => fs.readFile(inp))

// //   return Promise.all(promises)
// //     .then(contents => contents.reduce((acc, prev) => (acc += prev), ''))
// //     .then(content => fs.writeFile(output, content))
// // }

// // cat(inputs, output)
// //   .then(() => console.log('cat successfully'))
// //   .catch(err => console.log(err))

// // const fst = process.argv[2]
// // const snd = process.argv[3]
// // const trd = process.argv[4]
// // const out = process.argv[5]

// // if (fst === undefined || snd === undefined || out === undefined) {
// //   console.error('Usage: cmd fst snd out')
// //   process.exit(1)
// // }

// // const fileOne = path.join(process.cwd(), fst)
// // const fileTwo = path.join(process.cwd(), snd)
// // const fileOut = path.join(process.cwd(), out)

// // fs.readFile(fileOne)
// //   .then(val1 => {
// //     fs.readFile(fileTwo)
// //       .then(val2 => concat(val1, val2))
// //       .then(value => fs.writeFile(fileOut, value))
// //   })
// //   .then(() => console.log('writes successfully'))
// //   .catch(err => console.error(err))
