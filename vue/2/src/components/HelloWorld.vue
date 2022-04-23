<script setup>
import { isConnected, lastMessage, sendMessage } from './data'

defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>Connected: {{ isConnected }}</p>
  <p>Last message: {{ lastMessage || '-' }}</p>
  <button type="button" @click="sendMessage">Say hello!</button>
</template>
