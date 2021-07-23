import { p as promiseResolve, b as bootstrapLazy } from './index-496fe756.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["new-todo_2",[[1,"new-todo",{"defaultText":[1,"default-text"],"todo":[32]}],[1,"todo-item",{"todoText":[1,"todo-text"],"checked":[32]}]]]], options);
});
