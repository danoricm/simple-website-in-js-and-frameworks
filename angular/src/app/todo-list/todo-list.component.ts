// src/app/todo-list/todo-list.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component'; // Import as standalone

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule, TodoItemComponent], // Include TodoItemComponent if standalone
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskText: string = '';

  constructor() {
    this.tasks = [
      { id: 1, text: 'Doctor Appointment', completed: true },
      { id: 2, text: 'Meeting at School', completed: false },
    ];
  }

  addTask() {
    if (this.newTaskText.trim()) {
      this.tasks.push({
        id: Date.now(),
        text: this.newTaskText.trim(),
        completed: false,
      });
      this.newTaskText = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleCompleted(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  updateTaskText(id: number, newText: string) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.text = newText;
    }
  }
}