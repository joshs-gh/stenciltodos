import { r as registerInstance, h } from './index-0ae0b5b5.js';

const todoMicroappCss = ":host{display:block}";

const TodoMicroapp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  newTodoHandler(event) {
    console.log("Received the custom new todo event: ", event.detail);
    this.todos = [...this.todos, event.detail];
  }
  render() {
    return (h("div", null, h("slot", { name: "todo-input" }), this.todos &&
      this.todos.map((todo) => (h("todo-item", { "todo-text": todo.todoText })))));
  }
};
TodoMicroapp.style = todoMicroappCss;

export { TodoMicroapp as todo_microapp };
