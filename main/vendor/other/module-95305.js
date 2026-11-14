// vendor/other/module-95305.js — webpack module 95305
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(20566 /* vendor/other/module-20566 */);
e.exports = (e, t) => {
  try {
    return new r(e, t).range || "*";
  } catch (e) {
    return null;
  }
};
