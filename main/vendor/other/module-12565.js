// vendor/other/module-12565.js — webpack module 12565
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(95309 /* vendor/other/module-95309 */).fromCallback,
  i = n(42096 /* vendor/other/module-42096 */);
e.exports = {
  remove: o(function (e, t) {
    if (r.rm) return r.rm(e, { recursive: !0, force: !0 }, t);
    i(e, t);
  }),
  removeSync: function (e) {
    if (r.rmSync) return r.rmSync(e, { recursive: !0, force: !0 });
    i.sync(e);
  },
};
