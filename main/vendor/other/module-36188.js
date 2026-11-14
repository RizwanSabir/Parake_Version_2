// vendor/other/module-36188.js — webpack module 36188
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const t = /^[0-9]+$/,
  n = (e, n) => {
    if ("number" == typeof e && "number" == typeof n)
      return e === n ? 0 : e < n ? -1 : 1;
    const r = t.test(e),
      o = t.test(n);
    return (
      r && o && ((e = +e), (n = +n)),
      e === n ? 0 : r && !o ? -1 : o && !r ? 1 : e < n ? -1 : 1
    );
  };
e.exports = {
  compareIdentifiers: n,
  rcompareIdentifiers: (e, t) => n(t, e),
};
