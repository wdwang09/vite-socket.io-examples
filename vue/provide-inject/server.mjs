import { env } from 'process'
import { createServer as createHttpServer } from 'http'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import { Server } from 'socket.io'

async function server() {
  const productionRootPath = 'dist'
  const isProductionMode = env.NODE_ENV === 'production'

  const app = express()
  if (!isProductionMode) {
    console.log('> Development Mode')
    const vite = await createViteServer({
      server: { middlewareMode: 'html' }
    })
    app.use(vite.middlewares)
  } else {
    console.log('> Production Mode')
    app.use(express.static(productionRootPath))
  }

  const httpServer = createHttpServer(app)
  const io = new Server(httpServer)

  io.on('connection', socket => {
    console.log(`connect: ${socket.id}`)

    socket.on('hello!', () => {
      console.log(`hello from ${socket.id}`)
    })

    socket.on('disconnect', () => {
      console.log(`disconnect: ${socket.id}`)
    })
  })

  setInterval(() => {
    io.emit('message', new Date().toISOString())
  }, 1000)

  httpServer.listen(3000)
  console.log('> Local: http://localhost:3000/')
}

server()
