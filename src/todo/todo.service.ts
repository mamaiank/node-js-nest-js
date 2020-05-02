import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

    addTodo(todoData: Todo) {
    console.log(`title: ${todoData.title}, subtitle: ${todoData.subtitle}`);
    const todo = new Todo();
    todo.id = Math.random() * 1000000 + '';
    todo.title = todoData.title;
    todo.subtitle = todoData.subtitle;
    this.todoArray.push(todo);
  }

  getTodos() {
    return this.todoArray;
  }

  removeTodoById(id: string) {
    const found = this.todoArray.filter(item => item.id === id);
    if (!!!found.length) {
      throw new NotFoundException(`Todo id: ${id} not found.`);
    }
    this.todoArray = this.todoArray.filter(item => item.id !== id);
    return this.todoArray;
  }
}
