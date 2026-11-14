// vendor/module-24383.js — webpack module 24383
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
  c = (e, t, n) => (l(e, t, "default"), n && l(n, t, "default")),
  u = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(u, {
  HydrationBoundary: () => _.HydrationBoundary,
  IsRestoringProvider: () => I.IsRestoringProvider,
  QueryClientContext: () => S.QueryClientContext,
  QueryClientProvider: () => S.QueryClientProvider,
  QueryErrorResetBoundary: () => x.QueryErrorResetBoundary,
  infiniteQueryOptions: () => b.infiniteQueryOptions,
  mutationOptions: () => k.mutationOptions,
  queryOptions: () => v.queryOptions,
  useInfiniteQuery: () => C.useInfiniteQuery,
  useIsFetching: () => w.useIsFetching,
  useIsMutating: () => E.useIsMutating,
  useIsRestoring: () => I.useIsRestoring,
  useMutation: () => T.useMutation,
  useMutationState: () => E.useMutationState,
  usePrefetchInfiniteQuery: () => y.usePrefetchInfiniteQuery,
  usePrefetchQuery: () => g.usePrefetchQuery,
  useQueries: () => d.useQueries,
  useQuery: () => p.useQuery,
  useQueryClient: () => S.useQueryClient,
  useQueryErrorResetBoundary: () => x.useQueryErrorResetBoundary,
  useSuspenseInfiniteQuery: () => h.useSuspenseInfiniteQuery,
  useSuspenseQueries: () => m.useSuspenseQueries,
  useSuspenseQuery: () => f.useSuspenseQuery,
}),
  (e.exports = ((r = u), l(o({}, "__esModule", { value: !0 }), r))),
  c(u, n(12827 /* vendor/module-12827 */), e.exports),
  c(u, n(99148 /* vendor/module-99148 */), e.exports);
var d = n(40662 /* vendor/module-40662 */),
  p = n(59590 /* vendor/module-59590 */),
  f = n(78354 /* vendor/module-78354 */),
  h = n(58038 /* vendor/module-58038 */),
  m = n(5994 /* vendor/module-5994 */),
  g = n(28869 /* vendor/module-28869 */),
  y = n(89173 /* vendor/module-89173 */),
  v = n(8639 /* vendor/module-8639 */),
  b = n(98507 /* vendor/module-98507 */),
  S = n(14113 /* vendor/module-14113 */),
  _ = n(28899 /* vendor/module-28899 */),
  x = n(60942 /* vendor/module-60942 */),
  w = n(41966 /* vendor/module-41966 */),
  E = n(85858 /* vendor/module-85858 */),
  T = n(76639 /* vendor/module-76639 */),
  k = n(38718 /* vendor/module-38718 */),
  C = n(73474 /* vendor/module-73474 */),
  I = n(84315 /* vendor/module-84315 */);
