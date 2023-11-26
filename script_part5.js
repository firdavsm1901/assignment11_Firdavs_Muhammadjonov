new Vue({
    el: '#taskTodo',
    data: {
      newTask: '',
      tasks: []
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ title: this.newTask, completed: false });
          this.newTask = '';
  
          window.scrollTo(0, document.body.scrollHeight - 100);
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });