// vendor/other/module-52335.js — webpack module 52335
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function t(e) {
  return "string" != typeof e ? e : e.toLowerCase();
}
e.exports = function (e, n) {
  if (e === n) return !0;
  for (const t of ["altKey", "ctrlKey", "shiftKey", "metaKey"]) {
    const [r, o] = [e[t], n[t]];
    if (Boolean(r) !== Boolean(o)) return !1;
  }
  return (
    (t(e.key) === t(n.key) && void 0 !== e.key) ||
    (e.code === n.code && void 0 !== e.code)
  );
};
