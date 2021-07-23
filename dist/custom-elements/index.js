import { attachShadow, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const newTodoCss = ":host{display:block}input{padding:16px 16px 16px 60px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.03);position:relative;margin:0;width:50%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";

const NewTodo$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.newTodo = createEvent(this, "newTodo", 7);
    this.inputChanged = (event) => {
      console.log('input changed: ', event.target.value);
      this.todo = event.target.value;
      this.newTodoHandler(this.todo);
      this.textInput.value = "";
    };
  }
  newTodoHandler(todo) {
    console.log(`Emitting event ${todo}`);
    this.newTodo.emit(todo);
  }
  render() {
    return (h("div", null, h("input", { type: "text", placeholder: this.defaultText, onChange: this.inputChanged, ref: (el) => this.textInput = el })));
  }
  static get style() { return newTodoCss; }
};

const todoItemCss = ":host{display:block}div{padding:16px 16px 16px 1px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;width:50%;display:flex}.todotext{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.checked{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:grey;text-decoration:line-through;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle{text-align:center;width:40px;height:auto;top:0;bottom:0;margin:auto 0;border:none;}div .delete{visibility:hidden;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete:hover{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:red;transition:color 0.2s ease-out}";

const TodoItem$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.delClicked = createEvent(this, "delClicked", 7);
    this.doneClicked = () => {
      this.checked = !this.checked;
      console.log('done clicked: ', this.checked);
    };
  }
  delClickedHandler(del) {
    console.log(`Emitting event ${del}`);
    this.delClicked.emit(del);
  }
  render() {
    return (h("div", null, h("input", { type: "checkbox", class: "toggle", onClick: this.doneClicked }, " "), h("input", { type: "text", class: this.checked ? "checked" : "todotext", value: this.todoText }), h("button", { class: "delete", onClick: this.delClickedHandler }, "X")));
  }
  static get style() { return todoItemCss; }
};

const NewTodo = /*@__PURE__*/proxyCustomElement(NewTodo$1, [1,"new-todo",{"defaultText":[1,"default-text"],"todo":[32]}]);
const TodoItem = /*@__PURE__*/proxyCustomElement(TodoItem$1, [1,"todo-item",{"todoText":[1,"todo-text"],"checked":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      NewTodo,
  TodoItem
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { NewTodo, TodoItem, defineCustomElements };
