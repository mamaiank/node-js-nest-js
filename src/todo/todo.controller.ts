import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}
  @Get()
  getTodo() {
    return this.appService.getTodos();
  }

  @Get('param')
  get(@Query() params) {
    console.log(params);
    return `Hello ${params.test} Your code: ${Math.round(
      Math.random() * 100000,
    )}`;
  }

  @Post()
  postTodo(@Body() todoData: Todo) {
    return this.appService.addTodo(todoData);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    console.log(`delete: ${id}`);
    return this.appService.removeTodoById(id);
  }
}
