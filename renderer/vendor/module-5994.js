// vendor/module-5994.js — webpack module 5994
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { useSuspenseQueries: () => d }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r))),
  n(12827 /* vendor/module-12827 */);
var c = n(40662 /* vendor/module-40662 */),
  u = n(72421 /* vendor/module-72421 */);
function d(e, t) {
  return (0, c.useQueries)(
    {
      ...e,
      queries: e.queries.map((e) => ({
        ...e,
        suspense: !0,
        throwOnError: u.defaultThrowOnError,
        enabled: !0,
        placeholderData: void 0,
      })),
    },
    t,
  );
}
