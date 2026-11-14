// vendor/other/module-56071.js — webpack module 56071
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = (e, t = process.argv) => {
  const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
    r = t.indexOf(n + e),
    o = t.indexOf("--");
  return -1 !== r && (-1 === o || r < o);
};
