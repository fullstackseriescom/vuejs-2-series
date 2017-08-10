<template>
  <ul id="list-tasks">
    <task-item v-for="(task, index) in tasks" :task='task' :key="index" @click-remove-task='removeTask'></task-item>
  </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'task-list',
    components: {
      'task-item' : TaskItem
    },
  props: ['tasks'],
  methods: {
    removeTask(task) {
      var index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
