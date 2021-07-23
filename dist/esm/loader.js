import { p as promiseResolve, b as bootstrapLazy } from './index-496fe756.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["new-todo_2",[[1,"new-todo",{"defaultText":[1,"default-text"],"todo":[32]}],[1,"todo-item",{"todoText":[1,"todo-text"],"checked":[32]}]]]], options);
  });
};

export { defineCustomElements };
