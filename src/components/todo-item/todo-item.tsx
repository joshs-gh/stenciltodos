import { Component, h, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "todo-item",
  styleUrl: "todo-item.css",
  shadow: true,
})
export class TodoItem {
  @Prop() todoText: string;
  @State() checked: boolean;

  private doneClicked = () => {
    this.checked = !this.checked;
    console.log("done clicked: ", this.checked);
  };

  @Event({
    eventName: "delClicked",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  delClicked: EventEmitter<MouseEvent>;

  private delClickedHandler = (del: MouseEvent) => {
    console.log(`Emitting event ${del}`);
    this.delClicked.emit(del);
  };

  render() {
    return (
      <div>
        <input type="checkbox" class="toggle" onClick={this.doneClicked}>
          {" "}
        </input>
        <input
          type="text"
          class={this.checked ? "checked" : "todotext"}
          value={this.todoText}
        ></input>
        <button class="delete" onClick={this.delClickedHandler}>
          X
        </button>
      </div>
    );
  }
}
