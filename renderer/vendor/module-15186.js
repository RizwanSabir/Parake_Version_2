// vendor/module-15186.js — webpack module 15186
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { C: () => r });
const r = function (e) {
  if (null == e) return i;
  if ("function" == typeof e) return o(e);
  if ("object" == typeof e)
    return Array.isArray(e)
      ? (function (e) {
          const t = [];
          let n = -1;
          for (; ++n < e.length; ) t[n] = r(e[n]);
          return o(function (...e) {
            let n = -1;
            for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
            return !1;
          });
        })(e)
      : (function (e) {
          const t = e;
          return o(function (n) {
            const r = n;
            let o;
            for (o in e) if (r[o] !== t[o]) return !1;
            return !0;
          });
        })(e);
  if ("string" == typeof e)
    return (
      (t = e),
      o(function (e) {
        return e && e.type === t;
      })
    );
  var t;
  throw new Error("Expected function, string, or object as test");
};
function o(e) {
  return function (t, n, r) {
    return Boolean(
      (function (e) {
        return null !== e && "object" == typeof e && "type" in e;
      })(t) && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0),
    );
  };
}
function i() {
  return !0;
}
