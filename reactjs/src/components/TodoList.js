// TodoList.js

// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; // Import TodoList-specific styles

function TodoList() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      completed: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      completed: false,
    },
  ]);

  // State to manage the input for new tasks
  const [text, setText] = useState('');

  // Function to add a new task
  function addTask(text) {
    const newTask = {
      id: Date.now(), // Unique identifier for the task
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText(''); // Clear input after adding the task
  }

  // Function to delete a task by id
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Function to toggle the completed status of a task
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  // Function to update the text of a task
  function updateTaskText(id, newText) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TodoItem
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
              updateTaskText={updateTaskText}
            />
          </li>
        ))}
      </ul>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default TodoList;
