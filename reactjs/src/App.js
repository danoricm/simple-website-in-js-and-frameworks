// App.js

import React from 'react';
import TodoList from './components/TodoList';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
