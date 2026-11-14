// vendor/module-56243.js — webpack module 56243
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
})(d, { useBaseQuery: () => b }),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = n(14113 /* vendor/module-14113 */),
  m = n(60942 /* vendor/module-60942 */),
  g = n(29990 /* vendor/module-29990 */),
  y = n(84315 /* vendor/module-84315 */),
  v = n(72421 /* vendor/module-72421 */);
function b(e, t, n) {
  const r = (0, y.useIsRestoring)(),
    o = (0, m.useQueryErrorResetBoundary)(),
    i = (0, h.useQueryClient)(n),
    a = i.defaultQueryOptions(e);
  i.getDefaultOptions().queries?._experimental_beforeQuery?.(a);
  const s = i.getQueryCache().get(a.queryHash),
    l = !1 !== e.subscribed;
  (a._optimisticResults = r ? "isRestoring" : l ? "optimistic" : void 0),
    (0, v.ensureSuspenseTimers)(a),
    (0, g.ensurePreventErrorBoundaryRetry)(a, o, s),
    (0, g.useClearResetErrorBoundary)(o);
  const c = !i.getQueryCache().get(a.queryHash),
    [u] = p.useState(() => new t(i, a)),
    d = u.getOptimisticResult(a),
    b = !r && l;
  if (
    (p.useSyncExternalStore(
      p.useCallback(
        (e) => {
          const t = b ? u.subscribe(f.notifyManager.batchCalls(e)) : f.noop;
          return u.updateResult(), t;
        },
        [u, b],
      ),
      () => u.getCurrentResult(),
      () => u.getCurrentResult(),
    ),
    p.useEffect(() => {
      u.setOptions(a);
    }, [a, u]),
    (0, v.shouldSuspend)(a, d))
  )
    throw (0, v.fetchOptimistic)(a, u, o);
  if (
    (0, g.getHasError)({
      result: d,
      errorResetBoundary: o,
      throwOnError: a.throwOnError,
      query: s,
      suspense: a.suspense,
    })
  )
    throw d.error;
  if (
    (i.getDefaultOptions().queries?._experimental_afterQuery?.(a, d),
    a.experimental_prefetchInRender &&
      !f.environmentManager.isServer() &&
      (0, v.willFetch)(d, r))
  ) {
    const e = c ? (0, v.fetchOptimistic)(a, u, o) : s?.promise;
    e?.catch(f.noop).finally(() => {
      u.updateResult();
    });
  }
  return a.notifyOnChangeProps ? d : u.trackResult(d);
}
