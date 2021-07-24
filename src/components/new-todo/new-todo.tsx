import { Component, h, Prop, State, Event, EventEmitter } from "@stencil/core";
import { TodoItem } from "../todo-item/todo-item";

@Component({
  tag: "new-todo",
  styleUrl: "new-todo.css",
  shadow: true,
})
export class NewTodo {
  @Prop() defaultText: string;
  @State() todo: TodoItem;
  textInput!: HTMLInputElement;

  private inputChanged = (event: Event) => {
    console.log("input changed: ", (event.target as HTMLInputElement).value);
    // this.todo = new TodoItem();
    this.todo.todoText = (event.target as HTMLInputElement).value;
    this.newTodoHandler(this.todo);
    this.textInput.value = "";
  };

  @Event({
    eventName: "newTodo",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  newTodo: EventEmitter<TodoItem>;

  newTodoHandler(todo: TodoItem) {
    console.log(`Emitting event ${todo}`);
    this.newTodo.emit(todo);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.defaultText}
          onChange={this.inputChanged}
          ref={(el) => (this.textInput = el as HTMLInputElement)}
        ></input>
      </div>
    );
  }
}
