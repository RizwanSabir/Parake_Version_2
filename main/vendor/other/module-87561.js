// vendor/other/module-87561.js — webpack module 87561
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */);
e.exports = (e, t, n = !1) => {
  if (e instanceof r) return e;
  try {
    return new r(e, t);
  } catch (e) {
    if (!n) return null;
    throw e;
  }
};
