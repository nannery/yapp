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
  text-align: center;
  color:      $c;
  margin:     40px 0 0;
}
</style>
