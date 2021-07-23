import { EventEmitter } from '../../stencil-public-runtime';
export declare class NewTodo {
  defaultText: string;
  todo: string;
  private inputChanged;
  newTodo: EventEmitter<String>;
  newTodoHandler(todo: String): void;
  render(): any;
}
