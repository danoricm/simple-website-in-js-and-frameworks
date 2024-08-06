// src/app/todo-item/todo-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule], // Include necessary modules
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() updateText = new EventEmitter<{ id: number; text: string }>();

  isEditing: boolean = false;
  editText: string = '';

  ngOnInit() {
    this.editText = this.task.text;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.editText = this.task.text;
  }

  saveEdit() {
    if (this.editText.trim()) {
      this.updateText.emit({ id: this.task.id, text: this.editText.trim() });
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
