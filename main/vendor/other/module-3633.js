// vendor/other/module-3633.js — webpack module 3633
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { stringify: r } = n(13393 /* vendor/other/module-13393 */),
  { outputFileSync: o } = n(91157 /* vendor/other/module-91157 */);
e.exports = function (e, t, n) {
  const i = r(t, n);
  o(e, i, n);
};
