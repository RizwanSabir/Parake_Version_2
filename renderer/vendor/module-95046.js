// vendor/module-95046.js — webpack module 95046
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        c.call(e, o) ||
          o === n ||
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(d, { composeRefs: () => h, useComposedRefs: () => m }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
  (n = null != e ? o(l(e)) : {}),
  u(e && e.__esModule ? n : i(n, "default", { value: e, enumerable: !0 }), e)
))(n(14041 /* vendor/module-14041 */));
function f(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
function h(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((e) => {
      const r = f(e, t);
      return n || "function" != typeof r || (n = !0), r;
    });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          "function" == typeof n ? n() : f(e[t], null);
        }
      };
  };
}
function m(...e) {
  return p.useCallback(h(...e), e);
}
