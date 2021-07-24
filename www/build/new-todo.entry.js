import { r as registerInstance, e as createEvent, h } from './index-0ae0b5b5.js';

const newTodoCss = ":host{display:block}input{padding:16px 16px 16px 60px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.03);position:relative;margin:0;width:50%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";

const NewTodo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.newTodo = createEvent(this, "newTodo", 7);
    this.inputChanged = (event) => {
      console.log("input changed: ", event.target.value);
      // this.todo = new TodoItem();
      this.todo.todoText = event.target.value;
      this.newTodoHandler(this.todo);
      this.textInput.value = "";
    };
  }
  newTodoHandler(todo) {
    console.log(`Emitting event ${todo}`);
    this.newTodo.emit(todo);
  }
  render() {
    return (h("div", null, h("input", { type: "text", placeholder: this.defaultText, onChange: this.inputChanged, ref: (el) => (this.textInput = el) })));
  }
};
NewTodo.style = newTodoCss;

export { NewTodo as new_todo };
