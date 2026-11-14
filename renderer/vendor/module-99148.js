// vendor/module-99148.js — webpack module 99148
// params: (e) = (module, exports, require)
"use strict";
var t,
  n = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty;
e.exports =
  ((t = {}),
  ((e, t, a, s) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let a of o(t))
        i.call(e, a) ||
          void 0 === a ||
          n(e, a, {
            get: () => t[a],
            enumerable: !(s = r(t, a)) || s.enumerable,
          });
    return e;
  })(n({}, "__esModule", { value: !0 }), t));
