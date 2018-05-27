<template>
  <div id="yapp">
    <img src="./assets/logo.png">
    <HelloWorld msg="YAPP"/>
    <Ballot />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ballot     from './components/Ballot.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Ballot
  }
}
</script>

<style>
#yapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:      #2c3e50;
  margin-top: 60px;
}
</style>
