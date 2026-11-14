// vendor/other/module-61067.js — webpack module 61067
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */),
  o = n(20566 /* vendor/other/module-20566 */);
e.exports = (e, t, n) => {
  let i = null,
    s = null,
    a = null;
  try {
    a = new o(t, n);
  } catch (e) {
    return null;
  }
  return (
    e.forEach((e) => {
      a.test(e) && ((i && 1 !== s.compare(e)) || ((i = e), (s = new r(i, n))));
    }),
    i
  );
};
