<template>
  <main>
    <Task v-bind:task='task'/>
    <section v-on:click='ready = !ready'
             class='ballot'>
      <h3 v-show='ready'>Vote!</h3>
      <h3 v-show='!ready'>Voting Over</h3>

      <div class='vote-cards'>
        <VoteCard v-bind:score='1' />
        <VoteCard v-bind:score='2' />
        <VoteCard v-bind:score='3' />
        <VoteCard v-bind:score='5' />
        <VoteCard v-bind:score='8' />
        <VoteCard v-bind:score='13' />
      </div>
    </section>
  </main>
</template>

<script>
import Task     from './Task.vue'
import VoteCard from './VoteCard.vue'

export default {
  name:       'Ballot',
  components: {
    Task,
    VoteCard
  },
  data: () => ({ ready: false })
}
</script>

<style lang='scss' scoped>
$c: purple;
h3 {
  text-align: center;
  color:      $c;
  margin:     40px 0 0;
}
.ballot {
  border: 1px $c solid;
}
.vote-cards {
  display:               grid;
  grid-auto-rows:        7em;
  grid-gap:              1em;
  grid-template-columns: repeat(4, 8em);
}
</style>
