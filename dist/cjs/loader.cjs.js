'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a215a1a.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["new-todo_2.cjs",[[1,"new-todo",{"defaultText":[1,"default-text"],"todo":[32]}],[1,"todo-item",{"todoText":[1,"todo-text"],"checked":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
