<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { io } from 'socket.io-client'
import LastMessage from './LastMessage.vue'

defineProps({
  msg: String
})

const socket = io('localhost:3001')

const isConnected = ref(false)
const lastMessage = ref('')

onMounted(() => {
  socket.on('connect', () => {
    isConnected.value = true
  })
  socket.on('disconnect', () => {
    isConnected.value = false
  })
  socket.on('message', data => {
    lastMessage.value = data
  })
})

onUnmounted(() => {
  socket.disconnect()
})

function sendMessage() {
  socket.emit('hello!')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>Connected: {{ isConnected }}</p>
  <LastMessage :lastMessage="lastMessage" />
  <button type="button" @click="sendMessage">Say hello!</button>
</template>
