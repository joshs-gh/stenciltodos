import { TodoItem } from "../todo-item/todo-item";
export declare class TodoMicroapp {
  todos: TodoItem[];
  newTodoHandler(event: CustomEvent<TodoItem>): void;
  render(): any;
}
