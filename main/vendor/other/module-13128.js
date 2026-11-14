// vendor/other/module-13128.js — webpack module 13128
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */);
e.exports = (e, t, n) => {
  const o = new r(e, n),
    i = new r(t, n);
  return o.compare(i) || o.compareBuild(i);
};
