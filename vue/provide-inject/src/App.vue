<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SocketIO from './components/SocketIO.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SocketIO>
    <HelloWorld msg="Hello Provide and Inject!" />
  </SocketIO>
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
