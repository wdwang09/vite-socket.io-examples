<script setup>
import { inject } from 'vue'

const isConnected = inject('isConnected')
</script>

<template>
  <p>Connected: {{ isConnected }}</p>
</template>
