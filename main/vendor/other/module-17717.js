// vendor/other/module-17717.js — webpack module 17717
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.parseVersionParts = function (e) {
  if (!e) return null;
  const t = e
    .split(".")
    .map(Number)
    .filter((e) => !Number.isNaN(e));
  return 3 !== t.length ? null : t;
};
