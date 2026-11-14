// vendor/other/module-6113.js — webpack module 6113
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { stringify: r } = n(13393 /* vendor/other/module-13393 */),
  { outputFile: o } = n(91157 /* vendor/other/module-91157 */);
e.exports = async function (e, t, n = {}) {
  const i = r(t, n);
  await o(e, i, n);
};
