import { Component, h, Listen, State } from "@stencil/core";
import { TodoItem } from "../todo-item/todo-item";

@Component({
  tag: "todo-microapp",
  styleUrl: "todo-microapp.css",
  shadow: true,
})
export class TodoMicroapp {
  @State() todos: TodoItem[];

  @Listen("newTodo")
  newTodoHandler(event: CustomEvent<TodoItem>) {
    console.log("Received the custom new todo event: ", event.detail);
    this.todos = [...this.todos, event.detail];
  }

  render() {
    return (
      <div>
        <slot name="todo-input"></slot>
        {this.todos &&
          this.todos.map((todo) => (
            <todo-item todo-text={todo.todoText}></todo-item>
          ))}
      </div>
    );
  }
}
