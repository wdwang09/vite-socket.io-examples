<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { io } from 'socket.io-client'
import HelloWorld from './components/HelloWorld.vue'

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
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Provide and Inject!" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
