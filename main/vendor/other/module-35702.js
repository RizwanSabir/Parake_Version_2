// vendor/other/module-35702.js — webpack module 35702
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = function (e) {
  if (null === e || "object" != typeof e) return e;
  if (e instanceof Object) var n = { __proto__: t(e) };
  else n = Object.create(null);
  return (
    Object.getOwnPropertyNames(e).forEach(function (t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
    }),
    n
  );
};
var t =
  Object.getPrototypeOf ||
  function (e) {
    return e.__proto__;
  };
