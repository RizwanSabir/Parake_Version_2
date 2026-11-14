// vendor/module-48312.js — webpack module 48312
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useInfiniteListQuery = function (e, t, n) {
  const [o, i] = (0, r.useState)(!1),
    a = e.useInfiniteQuery(t, {
      getNextPageParam: (e) => e.nextCursor,
      refetchInterval: ({ state: e }) => {
        return (
          ("error" !== e.status || void 0 !== e.data) &&
          ((t = n?.refetchInterval),
          (r = e.data),
          "function" == typeof t ? t(r?.pages ?? []) : (t ?? !1))
        );
        var t, r;
      },
      placeholderData: (e) => e,
      initialData: n?.initialData,
    });
  return {
    rows: a.data?.pages.flatMap((e) => e.data) ?? [],
    totalCount: a.data?.pages.at(-1)?.totalCount,
    latestPage: a.data?.pages.at(-1),
    isLoading: a.isLoading,
    isError: a.isError || o,
    isPlaceholderData: a.isPlaceholderData,
    refetch: () => {
      i(!0), a.refetch().finally(() => i(!1));
    },
    isRetrying: o,
    hasNextPage: a.hasNextPage,
    isFetchingNextPage: a.isFetchingNextPage,
    fetchNextPage: a.fetchNextPage,
  };
};
const r = n(14041 /* vendor/module-14041 */);
