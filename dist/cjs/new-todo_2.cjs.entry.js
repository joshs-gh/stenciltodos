'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a215a1a.js');

const newTodoCss = ":host{display:block}input{padding:16px 16px 16px 60px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.03);position:relative;margin:0;width:50%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";

const NewTodo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.newTodo = index.createEvent(this, "newTodo", 7);
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
    return (index.h("div", null, index.h("input", { type: "text", placeholder: this.defaultText, onChange: this.inputChanged, ref: (el) => this.textInput = el })));
  }
};
NewTodo.style = newTodoCss;

const todoItemCss = ":host{display:block}div{padding:16px 16px 16px 1px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;width:50%;display:flex}.todotext{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.checked{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:grey;text-decoration:line-through;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle{text-align:center;width:40px;height:auto;top:0;bottom:0;margin:auto 0;border:none;}div .delete{visibility:hidden;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete:hover{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:red;transition:color 0.2s ease-out}";

const TodoItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.delClicked = index.createEvent(this, "delClicked", 7);
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
    return (index.h("div", null, index.h("input", { type: "checkbox", class: "toggle", onClick: this.doneClicked }, " "), index.h("input", { type: "text", class: this.checked ? "checked" : "todotext", value: this.todoText }), index.h("button", { class: "delete", onClick: this.delClickedHandler }, "X")));
  }
};
TodoItem.style = todoItemCss;

exports.new_todo = NewTodo;
exports.todo_item = TodoItem;
