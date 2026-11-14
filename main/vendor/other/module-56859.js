// vendor/other/module-56859.js — webpack module 56859
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { readFileSync: r } = n(73024 /* external/node_fs */),
  { join: o } = n(76760 /* external/node_path */),
  i = new Map();
e.exports = function (e) {
  if (i.has(e)) return i.get(e);
  try {
    const t = o(e, "package.json"),
      n = r(t),
      { version: s } = JSON.parse(n);
    return i.set(e, s), s;
  } catch {
    return process.version.slice(1);
  }
};
