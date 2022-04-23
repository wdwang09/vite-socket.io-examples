<script setup>
defineProps({
  lastMessage: String
})
</script>

<template>
  <p>Last message: {{ lastMessage || '-' }}</p>
</template>
