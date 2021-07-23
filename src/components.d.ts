/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NewTodo {
        "defaultText": string;
    }
    interface TodoItem {
        "todoText": string;
    }
}
declare global {
    interface HTMLNewTodoElement extends Components.NewTodo, HTMLStencilElement {
    }
    var HTMLNewTodoElement: {
        prototype: HTMLNewTodoElement;
        new (): HTMLNewTodoElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLElementTagNameMap {
        "new-todo": HTMLNewTodoElement;
        "todo-item": HTMLTodoItemElement;
    }
}
declare namespace LocalJSX {
    interface NewTodo {
        "defaultText"?: string;
        "onNewTodo"?: (event: CustomEvent<String>) => void;
    }
    interface TodoItem {
        "onDelClicked"?: (event: CustomEvent<MouseEvent>) => void;
        "todoText"?: string;
    }
    interface IntrinsicElements {
        "new-todo": NewTodo;
        "todo-item": TodoItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "new-todo": LocalJSX.NewTodo & JSXBase.HTMLAttributes<HTMLNewTodoElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
        }
    }
}
