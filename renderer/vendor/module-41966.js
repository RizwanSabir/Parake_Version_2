// vendor/module-41966.js — webpack module 41966
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
})(d, { useIsFetching: () => m }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = n(14113 /* vendor/module-14113 */);
function m(e, t) {
  const n = (0, h.useQueryClient)(t),
    r = n.getQueryCache();
  return p.useSyncExternalStore(
    p.useCallback((e) => r.subscribe(f.notifyManager.batchCalls(e)), [r]),
    () => n.isFetching(e),
    () => n.isFetching(e),
  );
}
