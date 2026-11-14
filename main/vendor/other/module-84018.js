// vendor/other/module-84018.js — webpack module 84018
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(e.exports.isNothing = function (e) {
  return null == e;
}),
  (e.exports.isObject = function (e) {
    return "object" == typeof e && null !== e;
  }),
  (e.exports.repeat = function (e, t) {
    let n = "";
    for (let r = 0; r < t; r += 1) n += e;
    return n;
  }),
  (e.exports.isNegativeZero = function (e) {
    return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
  });
