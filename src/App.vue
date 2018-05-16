<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="YAPP"/>
    <VoteCard   v-bind:score="5" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VoteCard   from './components/VoteCard.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    VoteCard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
