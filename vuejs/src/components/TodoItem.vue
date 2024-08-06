<template>
    <div class="todo-item">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle-completed', task.id)"
      />
      <span
        v-if="!isEditing"
        :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
        @dblclick="toggleEdit"
      >
        {{ task.text }}
      </span>
      <input
        v-if="isEditing"
        type="text"
        v-model="editText"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
      />
      <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
    },
    data() {
      return {
        isEditing: false,
        editText: '',
      };
    },
    methods: {
      toggleEdit() {
        this.isEditing = true;
        this.editText = this.task.text;
      },
      saveEdit() {
        if (this.editText.trim()) {
          this.$emit('update-task-text', this.task.id, this.editText.trim());
        }
        this.isEditing = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-item {
    display: flex;
    align-items: center;
    background-color: #f1f3f5;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: background-color 0.3s;
  }
  
  .todo-item input[type='checkbox'] {
    margin-right: 10px;
  }
  
  .todo-item span {
    flex: 1;
    cursor: pointer;
  }
  
  .todo-item span:hover {
    text-decoration: underline;
  }
  
  .todo-item input[type='text'] {
    flex: 1;
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .todo-item button {
    margin-left: 5px;
    background-color: #d9534f;
    border: none;
    padding: 5px 10px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .todo-item button:hover {
    background-color: #c9302c;
  }
  </style>
  