var componentTaskItem = {
  template: '#task-item-template',
  props: ['task'],
  methods: {
    onClickRemove: function (task) {
      this.$emit('click-remove-task', task)
    }
  }
}

var componentTaskList = {
  template: '#task-list-template',
  components: {
    'task-item' : componentTaskItem
  },
  props: ['tasks'],
  methods: {
    removeTask: function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }
}

Vue.component('tasks', {
  template: '#tasks-template',
  components: {
    'task-list' : componentTaskList
  },
  data: function () {
    return {
      newTask: '',
      tasks: [
        { title: 'Tarea 1', done: false},
        { title: 'Tarea 2', done: true}
      ]
    }
  },
  methods: {
    addNewTask: function() {
      var newTaskObj = {
        title: this.newTask,
        done: false
      }
      this.tasks.push(newTaskObj);
      this.newTask = '';
    }
  }
})

new Vue({
  el: '#app'
});