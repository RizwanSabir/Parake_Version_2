// vendor/module-29990.js — webpack module 29990
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
})(d, {
  ensurePreventErrorBoundaryRetry: () => h,
  getHasError: () => g,
  useClearResetErrorBoundary: () => m,
}),
  (e.exports = ((r = d), u(i({}, "__esModule", { value: !0 }), r)));
var p = ((e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(i(n, "default", { value: e, enumerable: !0 }), e)
  ))(n(14041 /* vendor/module-14041 */)),
  f = n(12827 /* vendor/module-12827 */),
  h = (e, t, n) => {
    const r =
      n?.state.error && "function" == typeof e.throwOnError
        ? (0, f.shouldThrowError)(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  m = (e) => {
    p.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  g = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: o,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((o && void 0 === e.data) || (0, f.shouldThrowError)(n, [e.error, r]));
