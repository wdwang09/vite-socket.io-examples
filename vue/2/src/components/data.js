import { io } from 'socket.io-client'
import { ref } from 'vue'

const socket = io('localhost:3001')

const isConnected = ref(false)
const lastMessage = ref('')

socket.on('connect', () => {
  isConnected.value = true
})

socket.on('disconnect', () => {
  isConnected.value = false
})

socket.on('message', data => {
  lastMessage.value = data
})

function sendMessage() {
  socket.emit('hello!')
}

export { isConnected, lastMessage, sendMessage }
