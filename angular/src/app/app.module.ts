// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component'; // Import TodoItemComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent // Declare TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

