'use strict';

const index = require('./index-3a215a1a.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('todo.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["new-todo_2.cjs",[[1,"new-todo",{"defaultText":[1,"default-text"],"todo":[32]}],[1,"todo-item",{"todoText":[1,"todo-text"],"checked":[32]}]]]], options);
});
