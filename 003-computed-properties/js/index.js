new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      { title: 'Tarea 1', done: false},
      { title: 'Tarea 2', done: true}
    ]
  },
  computed: {
    doneTasks: function() {
      return this.tasks.filter(function(task) {
        return task.done === true;
      });
    },
    undoneTasks: function() {
      return this.tasks.filter(function(task) {
        return task.done === false;
      });
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
    },
    removeTask: function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }
});