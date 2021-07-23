import { Component, h, Prop, State, Event } from '@stencil/core';
export class NewTodo {
  constructor() {
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
    return (h("div", null,
      h("input", { type: "text", placeholder: this.defaultText, onChange: this.inputChanged, ref: (el) => this.textInput = el })));
  }
  static get is() { return "new-todo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["new-todo.css"]
  }; }
  static get styleUrls() { return {
    "$": ["new-todo.css"]
  }; }
  static get properties() { return {
    "defaultText": {
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
      "attribute": "default-text",
      "reflect": false
    }
  }; }
  static get states() { return {
    "todo": {}
  }; }
  static get events() { return [{
      "method": "newTodo",
      "name": "newTodo",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "String",
        "resolved": "String",
        "references": {
          "String": {
            "location": "global"
          }
        }
      }
    }]; }
}
