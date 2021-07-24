import { EventEmitter } from "../../stencil-public-runtime";
export declare class TodoItem {
  todoText: string;
  checked: boolean;
  private doneClicked;
  delClicked: EventEmitter<MouseEvent>;
  private delClickedHandler;
  render(): any;
}
