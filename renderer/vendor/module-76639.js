// vendor/module-76639.js — webpack module 76639
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
})(d, { useMutation: () => m }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = n(14113 /* vendor/module-14113 */);
function m(e, t) {
  const n = (0, h.useQueryClient)(t),
    [r] = p.useState(() => new f.MutationObserver(n, e));
  p.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const o = p.useSyncExternalStore(
      p.useCallback((e) => r.subscribe(f.notifyManager.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    i = p.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(f.noop);
      },
      [r],
    );
  if (o.error && (0, f.shouldThrowError)(r.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: i, mutateAsync: o.mutate };
}
