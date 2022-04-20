<script setup>
import { inject } from 'vue'

const lastMessage = inject('lastMessage')
</script>

<template>
  <p>Last message: {{ lastMessage || '-' }}</p>
</template>
