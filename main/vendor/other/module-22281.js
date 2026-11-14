// vendor/other/module-22281.js — webpack module 22281
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromPromise,
  o = n(53690 /* vendor/other/module-53690 */);
e.exports = {
  pathExists: r(function (e) {
    return o
      .access(e)
      .then(() => !0)
      .catch(() => !1);
  }),
  pathExistsSync: o.existsSync,
};
