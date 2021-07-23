import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true,
})
export class TodoItem {

  @Prop() todoText: string;
  @State() checked: boolean;

  render() {
    return (
      <div>
        <input type="checkbox" class="toggle"> </input>
        <input type="text" class="todotext" value={this.todoText}></input>
      </div>
    );
  }

}
