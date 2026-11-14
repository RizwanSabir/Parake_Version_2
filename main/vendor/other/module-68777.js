// vendor/other/module-68777.js — webpack module 68777
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromPromise,
  { makeDir: o, makeDirSync: i } = n(84529 /* vendor/other/module-84529 */),
  s = r(o);
e.exports = {
  mkdirs: s,
  mkdirsSync: i,
  mkdirp: s,
  mkdirpSync: i,
  ensureDir: s,
  ensureDirSync: i,
};
