import { r as registerInstance, h } from './index-9459d2ab.js';

const todoItemCss = ":host{display:block}.todotext{padding:16px 16px 16px 60px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.03);position:relative;margin:0;width:50%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle{text-align:center;width:40px;height:auto;top:0;bottom:0;margin:auto 0;border:none;}";

const TodoItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("input", { type: "checkbox", class: "toggle" }, " "), h("input", { type: "text", class: "todotext", value: this.todoText })));
  }
};
TodoItem.style = todoItemCss;

export { TodoItem as todo_item };
