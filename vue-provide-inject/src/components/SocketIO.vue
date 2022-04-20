<script setup>
import { io } from 'socket.io-client'
import { ref, onMounted, onUnmounted, provide } from 'vue'

const isConnected = ref(false)
const lastMessage = ref(null)

const socket = io()

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

provide('isConnected', isConnected)
provide('lastMessage', lastMessage)
provide('sendMessage', sendMessage)
</script>

<template>
  <slot />
</template>
