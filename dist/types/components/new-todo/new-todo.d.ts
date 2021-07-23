import { EventEmitter } from '../../stencil-public-runtime';
export declare class NewTodo {
  defaultText: string;
  todo: string;
  textInput: HTMLInputElement;
  private inputChanged;
  newTodo: EventEmitter<String>;
  newTodoHandler(todo: String): void;
  render(): any;
}
