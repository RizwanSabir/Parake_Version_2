// vendor/module-12827.js — webpack module 12827
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let l of a(t))
        s.call(e, l) ||
          l === n ||
          o(e, l, {
            get: () => t[l],
            enumerable: !(r = i(t, l)) || r.enumerable,
          });
    return e;
  },
  c = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(c, {
  CancelledError: () => x.CancelledError,
  InfiniteQueryObserver: () => f.InfiniteQueryObserver,
  Mutation: () => k.Mutation,
  MutationCache: () => h.MutationCache,
  MutationObserver: () => m.MutationObserver,
  QueriesObserver: () => v.QueriesObserver,
  Query: () => C.Query,
  QueryCache: () => b.QueryCache,
  QueryClient: () => S.QueryClient,
  QueryObserver: () => _.QueryObserver,
  defaultScheduler: () => g.defaultScheduler,
  defaultShouldDehydrateMutation: () => p.defaultShouldDehydrateMutation,
  defaultShouldDehydrateQuery: () => p.defaultShouldDehydrateQuery,
  dehydrate: () => p.dehydrate,
  environmentManager: () => d.environmentManager,
  experimental_streamedQuery: () => T.streamedQuery,
  focusManager: () => u.focusManager,
  hashKey: () => E.hashKey,
  hydrate: () => p.hydrate,
  isCancelledError: () => x.isCancelledError,
  isServer: () => E.isServer,
  keepPreviousData: () => E.keepPreviousData,
  matchMutation: () => E.matchMutation,
  matchQuery: () => E.matchQuery,
  noop: () => E.noop,
  notifyManager: () => g.notifyManager,
  onlineManager: () => y.onlineManager,
  partialMatchKey: () => E.partialMatchKey,
  replaceEqualDeep: () => E.replaceEqualDeep,
  shouldThrowError: () => E.shouldThrowError,
  skipToken: () => E.skipToken,
  timeoutManager: () => w.timeoutManager,
}),
  (e.exports = ((r = c), l(o({}, "__esModule", { value: !0 }), r)));
var u = n(35652 /* vendor/module-35652 */),
  d = n(89425 /* vendor/module-89425 */),
  p = n(99121 /* vendor/module-99121 */),
  f = n(62989 /* vendor/module-62989 */),
  h = n(81038 /* vendor/module-81038 */),
  m = n(79934 /* vendor/module-79934 */),
  g = n(46783 /* vendor/module-46783 */),
  y = n(71433 /* vendor/module-71433 */),
  v = n(25133 /* vendor/module-25133 */),
  b = n(57715 /* vendor/module-57715 */),
  S = n(25038 /* vendor/module-25038 */),
  _ = n(50033 /* vendor/module-50033 */),
  x = n(77664 /* vendor/module-77664 */),
  w = n(97167 /* vendor/module-97167 */),
  E = n(26036 /* vendor/module-26036 */),
  T = n(25290 /* vendor/module-25290 */),
  k = n(95080 /* vendor/module-95080 */),
  C = n(51523 /* vendor/module-51523 */);
((e, t, n) => {
  l(e, t, "default"), n && l(n, t, "default");
})(c, n(38560 /* vendor/module-38560 */), e.exports);
