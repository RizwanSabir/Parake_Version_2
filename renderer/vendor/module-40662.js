// vendor/module-40662.js — webpack module 40662
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
})(d, { useQueries: () => b }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = n(14113 /* vendor/module-14113 */),
  m = n(84315 /* vendor/module-84315 */),
  g = n(60942 /* vendor/module-60942 */),
  y = n(29990 /* vendor/module-29990 */),
  v = n(72421 /* vendor/module-72421 */);
function b({ queries: e, ...t }, n) {
  const r = (0, h.useQueryClient)(n),
    o = (0, m.useIsRestoring)(),
    i = (0, g.useQueryErrorResetBoundary)(),
    a = p.useMemo(
      () =>
        e.map((e) => {
          const t = r.defaultQueryOptions(e);
          return (t._optimisticResults = o ? "isRestoring" : "optimistic"), t;
        }),
      [e, r, o],
    );
  a.forEach((e) => {
    (0, v.ensureSuspenseTimers)(e);
    const t = r.getQueryCache().get(e.queryHash);
    (0, y.ensurePreventErrorBoundaryRetry)(e, i, t);
  }),
    (0, y.useClearResetErrorBoundary)(i);
  const [s] = p.useState(() => new f.QueriesObserver(r, a, t)),
    [l, c, u] = s.getOptimisticResult(a, t.combine),
    d = !o && !1 !== t.subscribed;
  p.useSyncExternalStore(
    p.useCallback(
      (e) => (d ? s.subscribe(f.notifyManager.batchCalls(e)) : f.noop),
      [s, d],
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult(),
  ),
    p.useEffect(() => {
      s.setQueries(a, t);
    }, [a, t, s]);
  const b = l.some((e, t) => (0, v.shouldSuspend)(a[t], e))
    ? l.flatMap((e, t) => {
        const n = a[t];
        if (n && (0, v.shouldSuspend)(n, e)) {
          const e = new f.QueryObserver(r, n);
          return (0, v.fetchOptimistic)(n, e, i);
        }
        return [];
      })
    : [];
  if (b.length > 0) throw Promise.all(b);
  const S = l.find((e, t) => {
    const n = a[t];
    return (
      n &&
      (0, y.getHasError)({
        result: e,
        errorResetBoundary: i,
        throwOnError: n.throwOnError,
        query: r.getQueryCache().get(n.queryHash),
        suspense: n.suspense,
      })
    );
  });
  if (S?.error) throw S.error;
  return c(u());
}
