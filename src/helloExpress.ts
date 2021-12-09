// // import './readData'

// // import 'dotenv/config';
// import cors from 'cors'
// import express from 'express'
// import { v4 as uuidv4 } from 'uuid'
// import { z } from 'zod'

// // const UserId = z.string()
// // const User = z.object({ id: UserId, username: z.string() })
// // const Users = z.record(User.shape.id, User)

// // type User = z.TypeOf<typeof User>
// // type Users = z.TypeOf<typeof Users>

// // let users: Users = {
// //   1: {
// //     id: '1',
// //     username: 'Rob Wieruch',
// //   },
// //   2: {
// //     id: '2',
// //     username: 'Dave Davids',
// //   },
// // }
// // const MessageId = z.string()
// // const Message = z.object({
// //   id: MessageId,
// //   text: z.string(),
// //   userId: User.shape.id,
// // })
// // type Message = z.TypeOf<typeof Message>

// // const Messages = z.record(Message.shape.id, Message)
// // type Messages = z.TypeOf<typeof Messages>

// // let messages: Messages = {
// //   1: {
// //     id: '1',
// //     text: 'Hello World',
// //     userId: '1',
// //   },
// //   2: {
// //     id: '2',
// //     text: 'By World',
// //     userId: '2',
// //   },
// // }

// app.get('/users/:userId', (req, res) => {
//   const id = UserId.parse(req.params.userId)
//   console.log(req.path, id)
//   return res.send(User.parse(users[id]))
// })

// app.get('/messages', (_, res) => {
//   return res.send(Object.values(messages))
// })

// app.get('/messages/:messageId', (req, res) => {
//   return res.send(messages[req.params.messageId])
// })

// app.post('/messages', (req, res) => {
//   const id = uuidv4()
//   const message = Message.parse({ id, message: req.body.text })
//   messages[id] = message

//   return res.send(message)
// })
