// task.service.ts

import { Injectable } from '@angular/core';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false }
  ];

  getTasks(): Task[] {
    return [...this.tasks];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleCompleted(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  updateTask(id: number, newText: string): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.text = newText;
    }
  }
}

