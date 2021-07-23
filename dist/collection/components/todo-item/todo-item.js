import { Component, h, Prop, State, Event } from '@stencil/core';
export class TodoItem {
  constructor() {
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
    return (h("div", null,
      h("input", { type: "checkbox", class: "toggle", onClick: this.doneClicked }, " "),
      h("input", { type: "text", class: this.checked ? "checked" : "todotext", value: this.todoText }),
      h("button", { class: "delete", onClick: this.delClickedHandler }, "X")));
  }
  static get is() { return "todo-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["todo-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["todo-item.css"]
  }; }
  static get properties() { return {
    "todoText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "todo-text",
      "reflect": false
    }
  }; }
  static get states() { return {
    "checked": {}
  }; }
  static get events() { return [{
      "method": "delClicked",
      "name": "delClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
}
