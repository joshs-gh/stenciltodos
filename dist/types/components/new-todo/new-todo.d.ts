import { EventEmitter } from "../../stencil-public-runtime";
import { TodoItem } from "../todo-item/todo-item";
export declare class NewTodo {
  defaultText: string;
  todo: TodoItem;
  textInput: HTMLInputElement;
  private inputChanged;
  newTodo: EventEmitter<TodoItem>;
  newTodoHandler(todo: TodoItem): void;
  render(): any;
}
