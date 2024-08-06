// TodoItem.js

// TodoItem.js

import React, { useState } from 'react';
import './TodoItem.css'; // Import TodoItem-specific styles

function TodoItem({ task, deleteTask, toggleCompleted, updateTaskText }) {
  // State to manage edit mode and input text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditText(task.text); // Reset edit text to current task text
  };

  // Handle task text update
  const handleUpdate = () => {
    updateTaskText(task.id, editText); // Update task text
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => toggleCompleted(task.id)}
        >
          {task.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={handleEditToggle}>Edit</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
