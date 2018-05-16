<template>
  <div v-on:click="selected = !selected"
       class="vote-card">
    <h3>{{ score }} is selected: {{ selected }}</h3>
  </div>
</template>

<script>
export default {
  name: 'VoteCard',
  props: {
    score: {
      type:     Number,
      required: true
    }
  },
  data: () => ({ selected: false })
}
</script>

<style lang="scss" scoped>
$c: purple;
h3 {
  color: $c;
}
.vote-card {
  display:         flex;
  align-items:     center;
  justify-content: center;
  border:        1px $c solid;
  border-radius: 0.5em 1.1em 0.5em;
}
</style>
