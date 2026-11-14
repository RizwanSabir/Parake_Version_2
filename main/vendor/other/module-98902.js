// vendor/other/module-98902.js — webpack module 98902
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function r(e) {
  return Symbol.for(e);
}
n.d(t, { l: () => i, n: () => r });
class o {
  constructor(e) {
    const t = this;
    (t._currentContext = e ? new Map(e) : new Map()),
      (t.getValue = (e) => t._currentContext.get(e)),
      (t.setValue = (e, n) => {
        const r = new o(t._currentContext);
        return r._currentContext.set(e, n), r;
      }),
      (t.deleteValue = (e) => {
        const n = new o(t._currentContext);
        return n._currentContext.delete(e), n;
      });
  }
}
const i = new o();
