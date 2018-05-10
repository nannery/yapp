<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
$c: purple;
h1 {
  text-align: center;
  color:      $c;
  margin:     40px 0 0;
}
</style>
