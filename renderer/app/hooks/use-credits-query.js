// app/hooks/use-credits-query.js — webpack module 71107
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCreditsQuery = function () {
  return o.api.user.get.useQuery(void 0, {
    refetchInterval: (e) =>
      (!e.state.error ||
        !r.ServerError.isError(e.state.error, "UNAUTHORIZED")) &&
      1e4,
    refetchIntervalInBackground: !0,
  });
};
const r = n(353 /* vendor/module-353 */),
  o = n(46998 /* app/components/trpcreact-provider */);
