import { Component, h, Prop, State, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'new-todo',
  styleUrl: 'new-todo.css',
  shadow: true,
})
export class NewTodo {

  @Prop() defaulttext: string;
  @State() todo: string; 

  private inputChanged = (event: Event) => {
    console.log('input changed: ', (event.target as HTMLInputElement).value);
    this.todo = (event.target as HTMLInputElement).value;
    this.newTodoHandler(this.todo)
  }

  @Event({
    eventName: 'newTodo',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) newTodo: EventEmitter<String>;

  newTodoHandler(todo: String) {
    console.log(`Emitting event ${todo}`)
    this.newTodo.emit(todo);
  }
  
  render() {
    return (
      <div>
        <input type="text" placeholder={this.defaulttext} onChange={this.inputChanged}></input>
      </div>
    );
  }

}
