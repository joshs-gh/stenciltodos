import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {

  @Prop() todoText: string;
  @State() checked: boolean;

  private doneClicked = (event: Event) => {
    this.checked = !this.checked;
    console.log('done clicked: ', this.checked);
  }

  render() {
    return (
      <div>
        <input type="checkbox" class="toggle" onClick={this.doneClicked}> </input>
        <input type="text" class={this.checked ? "checked" : "todotext"} value={this.todoText}></input>
      </div>
    );
  }

}
