<template>
  <li>
    <input type="checkbox" v-model='task.done'> 
    <span v-bind:class="{'task-done' : task.done}">{{ task.title }}</span>
    <button v-on:click='onClickRemove(task)'>x</button>
  </li>
</template>

<script>
export default {
  name: 'task-item',
  props: ['task'],
  methods: {
    onClickRemove(task) {
      this.$emit('click-remove-task', task)
    }
  }
}
</script>

<style>
.task-done {
  text-decoration:line-through;
}
</style>
