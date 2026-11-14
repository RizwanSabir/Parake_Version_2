// vendor/other/module-70927.js — webpack module 70927
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(87561 /* vendor/other/module-87561 */);
e.exports = (e, t) => {
  const n = r(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
