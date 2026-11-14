// vendor/other/module-24228.js — webpack module 24228
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(16928 /* external/path */);
e.exports.checkPath = function (e) {
  if (
    "win32" === process.platform &&
    /[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))
  ) {
    const t = new Error(`Path contains invalid characters: ${e}`);
    throw ((t.code = "EINVAL"), t);
  }
};
