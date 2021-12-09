import express from 'express'
import { JSONFile, Low } from 'lowdb'
import path from 'path'
import cors from 'cors'
import { z } from 'zod'
import { dbSchema } from './specs'
import immer, { produce } from 'immer'
import assert from 'assert'

type DB = z.infer<typeof dbSchema>

const adapter = new JSONFile<DB>(path.join(process.cwd(), 'db.json'))

const db = new Low<DB>(adapter)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', (_, res) => {
  res.json(db.data?.users)
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id === undefined) {
    res.status(400)
  }
  const users = db.data?.users
  res.json(users![id!])
})

app.post('/users', async (req, res) => {
  const id = 1000
  const newUser = { id, ...req.body }
  db.data?.users.push(newUser)
  await db.write()
  res.json(newUser)
})

app.put('/users/:id', async (req, res) => {
  assert(db.data !== undefined && db.data !== null)

  const id = req.params.id
  let users = db.data.users
  const idx = users?.findIndex(u => u.id?.toString() === id)
  if (idx === -1) {
    return res.json(res.status(400))
  }

  users = produce(users, draft => {
    draft[idx] = req.body
  })
  db.data.users = users

  await db.write()

  return res.json(users[idx])
})

app.delete('/users/:id', async (req, res) => {
  assert(db.data !== undefined && db.data !== null)

  const id = req.params.id
  let users = db.data.users
  const idx = users?.findIndex(u => u.id?.toString() === id)
  if (idx === -1) {
    return res.json(res.status(400))
  }
  const deleted = users[idx]
  users = produce(users, draft => {
    draft.splice(idx, 1)
  })
  db.data.users = users

  await db.write()
  return res.json(deleted)
})

app.listen(8080, async () => {
  await db.read()
  console.log(`Example app listening on port 8080!`)
})
