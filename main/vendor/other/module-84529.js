// vendor/other/module-84529.js — webpack module 84529
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(53690 /* vendor/other/module-53690 */),
  { checkPath: o } = n(24228 /* vendor/other/module-24228 */),
  i = (e) => ("number" == typeof e ? e : { mode: 511, ...e }.mode);
(e.exports.makeDir = async (e, t) => (
  o(e), r.mkdir(e, { mode: i(t), recursive: !0 })
)),
  (e.exports.makeDirSync = (e, t) => (
    o(e), r.mkdirSync(e, { mode: i(t), recursive: !0 })
  ));
