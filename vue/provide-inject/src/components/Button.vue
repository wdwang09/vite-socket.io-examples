<script setup>
import { inject } from 'vue'

const sendMessage = inject('sendMessage')
</script>

<template>
  <button type="button" @click="sendMessage">Say hello!</button>
</template>
