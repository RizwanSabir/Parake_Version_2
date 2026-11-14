// vendor/module-18799.js — webpack module 18799
// params: (e, t) = (module, exports, require)
"use strict";
t.callSessionLockBus = void 0;
let n = null;
t.callSessionLockBus = {
  setHandler(e) {
    n = e;
  },
  clearHandler(e) {
    n === e && (n = null);
  },
  handle: (e) => n?.(e) ?? !1,
};
