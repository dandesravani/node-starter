import fs from 'fs/promises'
import path from 'path'
// import { object } from 'superstruct'

interface CSVLines {
  keys: string[]
  values: any[][]
}

export const readLines = async (fileName: string): Promise<CSVLines> => {
  const data = await fs.readFile(fileName, 'utf-8')
  const [first, ...rest] = data.split('\n')
  const keys = first?.split(',')
  const values = rest.map(val => val.split(','))
  return { keys: keys!, values }
}

const pathFile = path.join(process.cwd(), 'output.csv')

// readALine(pathFile).then(data => console.log(data))

export const constructObj = (keys: string[], values: any[]): object => {
  let result: any = {}
  for (let i = 0; i < keys.length; i += 1) {
    result[keys[i] as any] = values[i]
  }
  return result
}

export const csvToObjects = async (): Promise<object[]> => {
  const result: object[] = []
  const { keys, values } = await readLines(pathFile)
  for (let val of values) {
    const newObj = constructObj(keys, val)
    result.push(newObj)
  }
  return result
}

const obj = constructObj(['x', 'y', 'z', 'd'], [10, 'hello', , true])

// console.log(data, 'data')

csvToObjects()
  .then(data => console.log(data))
  .catch(err => console.error(err))
// console.log(constructObj(['x', 'y', 'z', 'd'], [10, 'hello', , true]))
