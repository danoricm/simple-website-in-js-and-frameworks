<template>
    <div class="todo-list">
      <h1>My To-Do List</h1>
      <input v-model="newTaskText" placeholder="Add a new task..." />
      <button @click="addTask">Add</button>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <TodoItem
            :task="task"
            @delete-task="deleteTask"
            @toggle-completed="toggleCompleted"
            @update-task-text="updateTaskText"
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoItem,
    },
    data() {
      return {
        newTaskText: '',
        tasks: [
          { id: 1, text: 'Doctor Appointment', completed: true },
          { id: 2, text: 'Meeting at School', completed: false },
        ],
      };
    },
    methods: {
      addTask() {
        if (this.newTaskText.trim()) {
          this.tasks.push({
            id: Date.now(),
            text: this.newTaskText.trim(),
            completed: false,
          });
          this.newTaskText = '';
        }
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      toggleCompleted(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
          task.completed = !task.completed;
        }
      },
      updateTaskText(id, newText) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
          task.text = newText;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-list {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  input[type="text"] {
    width: calc(100% - 85px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s;
  }
  
  input[type="text"]:focus {
    border-color: #5cb85c;
    outline: none;
  }
  
  button {
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  button:hover {
    background-color: #4cae4c;
    transform: scale(1.05);
  }
  
  button:active {
    background-color: #4cae4c;
    transform: scale(1.02);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  