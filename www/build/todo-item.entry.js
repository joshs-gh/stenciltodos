import { r as registerInstance, h } from './index-9459d2ab.js';

const todoItemCss = ":host{display:block}div{padding:16px 16px 16px 1px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;width:50%}.todotext{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.checked{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:grey;text-decoration:line-through;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle{text-align:center;width:40px;height:auto;top:0;bottom:0;margin:auto 0;border:none;}";

const TodoItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.doneClicked = (event) => {
      this.checked = !this.checked;
      console.log('done clicked: ', this.checked);
    };
  }
  render() {
    return (h("div", null, h("input", { type: "checkbox", class: "toggle", onClick: this.doneClicked }, " "), h("input", { type: "text", class: this.checked ? "checked" : "todotext", value: this.todoText })));
  }
};
TodoItem.style = todoItemCss;

export { TodoItem as todo_item };
