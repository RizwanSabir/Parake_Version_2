// vendor/other/module-30590.js — webpack module 30590
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(57954 /* vendor/other/module-57954 */),
  o = n(93990 /* vendor/other/module-93990 */),
  i = n(73871 /* vendor/other/module-73871 */),
  s = n(67356 /* vendor/other/module-67356 */),
  a = n(59240 /* vendor/other/module-59240 */),
  c = n(31141 /* vendor/other/module-31141 */);
e.exports = (e, t, n, u) => {
  switch (t) {
    case "===":
      return (
        "object" == typeof e && (e = e.version),
        "object" == typeof n && (n = n.version),
        e === n
      );
    case "!==":
      return (
        "object" == typeof e && (e = e.version),
        "object" == typeof n && (n = n.version),
        e !== n
      );
    case "":
    case "=":
    case "==":
      return r(e, n, u);
    case "!=":
      return o(e, n, u);
    case ">":
      return i(e, n, u);
    case ">=":
      return s(e, n, u);
    case "<":
      return a(e, n, u);
    case "<=":
      return c(e, n, u);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
