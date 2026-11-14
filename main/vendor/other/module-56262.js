// vendor/other/module-56262.js — webpack module 56262
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(20566 /* vendor/other/module-20566 */);
e.exports = (e, t) =>
  new r(e, t).set.map((e) =>
    e
      .map((e) => e.value)
      .join(" ")
      .trim()
      .split(" "),
  );
