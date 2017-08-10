<template>
  <div>
    <input type="text" placeholder='New task' v-model='newTask' @keyup.enter='addNewTask'>
    <p v-show='!tasks.length'>No tasks!</p>
    <task-list :tasks='tasks'></task-list>
  </div>
</template>

<script>
import TaskList from './TaskList.vue';

export default {
  name: 'tasks',
  components: {
    'task-list' : TaskList
  },
  data () {
    return {
      newTask: '',
      tasks: [
        { title: 'Tarea 1', done: false},
        { title: 'Tarea 2', done: true}
      ]
    }
  },
  methods: {
    addNewTask() {
      var newTaskObj = {
        title: this.newTask,
        done: false
      }
      this.tasks.push(newTaskObj)
      this.newTask = ''
    }
  }
}
</script>

<style>

</style>
