// vendor/other/module-59091.js — webpack module 59091
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(20566 /* vendor/other/module-20566 */);
e.exports = (e, t, n) => {
  try {
    t = new r(t, n);
  } catch (e) {
    return !1;
  }
  return t.test(e);
};
