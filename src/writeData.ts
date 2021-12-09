import fs from 'fs/promises'
import path from 'path'
import {
  boolean,
  Infer,
  nullable,
  number,
  object as obj,
  string,
} from 'superstruct'

const data: Fake[] = [
  { x: 10, y: 'hello', z: null, d: true },
  { x: 2, y: 'world', z: null, d: false },
  { x: 0, y: '', z: null, d: false },
  { x: 9, y: 'bye', z: null, d: null },
]

const fake = obj({
  x: nullable(number()),
  y: nullable(string()),
  z: nullable(string()),
  d: nullable(boolean()),
  // e: nullable(date()),
})

type Fake = Infer<typeof fake>

export const fakeToCsvLine = (fake: object): string => {
  return Object.values(fake).join(',')
}

export const fakeToCsv = (data: Fake[]): string => {
  return data.map(val => fakeToCsvLine(val)).join('\n')
}

export const writingToCsv = async (fileName: string): Promise<void> => {
  const csv = fakeToCsv(data)
  const keys = Object.keys(fake.schema).join(',')
  const totalContent = [keys, csv].join('\n')
  await fs.writeFile(fileName, totalContent, 'utf-8')
}

const filePath = path.join(process.cwd(), 'output.csv')

writingToCsv(filePath)
  .then(() => console.log('write sucessfully'))
  .catch(err => console.error(err))

// console.log(Object.keys(fake.schema))
