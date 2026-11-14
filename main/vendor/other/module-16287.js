// vendor/other/module-16287.js — webpack module 16287
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const t =
  "object" == typeof process &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ? (...e) => {}
    : () => {};
e.exports = t;
