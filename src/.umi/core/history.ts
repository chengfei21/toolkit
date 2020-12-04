// @ts-nocheck
import { createBrowserHistory } from '/Users/luojinghui/work/xylink/tools/xy-toolkit/node_modules/@umijs/runtime';

let options = {
  "basename": "/toolkit"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: any = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
