// vendor/module-38560.js — webpack module 38560
// params: (e) = (module, exports, require)
"use strict";
var t,
  n = Object.defineProperty,
  r = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty,
  a = {};
((e, t) => {
  for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
})(a, {
  dataTagErrorSymbol: () => l,
  dataTagSymbol: () => s,
  unsetMarker: () => c,
}),
  (e.exports =
    ((t = a),
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
    })(n({}, "__esModule", { value: !0 }), t)));
var s = Symbol("dataTagSymbol"),
  l = Symbol("dataTagErrorSymbol"),
  c = Symbol("unsetMarker");
