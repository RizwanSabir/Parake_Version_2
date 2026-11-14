// vendor/other/module-24842.js — webpack module 24842
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */);
e.exports = (e, t, n, o, i) => {
  "string" == typeof n && ((i = o), (o = n), (n = void 0));
  try {
    return new r(e instanceof r ? e.version : e, n).inc(t, o, i).version;
  } catch (e) {
    return null;
  }
};
