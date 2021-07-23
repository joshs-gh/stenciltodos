import { r as registerInstance, e as createEvent, h } from './index-82f68bd2.js';

const todoItemCss = ":host{display:block}div{padding:16px 16px 16px 1px;border:none;background:rgba(0, 0, 0, 0.003);box-shadow:inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;width:50%;display:flex}.todotext{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.checked{position:relative;margin:0;font-size:24px;font-family:inherit;font-weight:inherit;border:0;color:grey;text-decoration:line-through;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle{text-align:center;width:40px;height:auto;top:0;bottom:0;margin:auto 0;border:none;}div .delete{visibility:hidden;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:#cc9a9a;transition:color 0.2s ease-out}div:hover .delete:hover{visibility:visible;top:0;border:none;background:none;margin-left:auto;bottom:0;font-size:20px;color:red;transition:color 0.2s ease-out}";

const TodoItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
TodoItem.style = todoItemCss;

export { TodoItem as todo_item };
