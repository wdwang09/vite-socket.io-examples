<script setup>
import IsConnected from './IsConnected.vue'
import LastMessage from './LastMessage.vue'
import Button from './Button.vue'

defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <IsConnected />
  <LastMessage />
  <Button />
</template>
