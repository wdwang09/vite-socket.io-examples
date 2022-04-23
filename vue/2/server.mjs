// https://github.com/socketio/socket.io/blob/main/examples/create-react-app-example/server.js

// // CommonJS
// const io = require('socket.io')({
//     cors: {
//         origin: ['http://localhost:3000']
//     }
// });

import { Server } from 'socket.io'

const io = new Server({
  cors: {
    origin: ['http://localhost:3000']
  }
})

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`)

  socket.on('hello!', () => {
    console.log(`hello from ${socket.id}`)
  })

  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`)
  })
})

io.listen(3001)

setInterval(() => {
  io.emit('message', new Date().toISOString())
}, 1000)
