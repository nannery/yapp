<template>
  <section>
    <h3 v-if="task === null" class='task-input-show task-input-show_null'>
      Cool and fun task, man
    </h3>
    <h3 v-if="task !== null" class='task-input-show task-input-show_nonnull'>
      {{ task }}
    </h3>
    <input v-model='task'
           class='task-input'
           placeholder='Enter a task'>
  </section>
</template>

<script>
export default {
  name: 'Task',
  data: () => ({ task: null })
}
</script>

<style lang='scss' scoped>
$c: purple;
h3 {
  color: $c;
}
.task {
  border: 1px $c solid;
}
</style>
