// app/lib/create-query-client.js — webpack module 83169
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createQueryClient = t.handleUnauthorized = void 0);
const o = n(24383 /* vendor/module-24383 */),
  i = n(44572 /* vendor/module-44572 */),
  a = r(n(87639 /* vendor/module-87639 */)),
  s = n(18799 /* vendor/module-18799 */),
  l = n(44171 /* vendor/module-44171 */),
  c = n(96241 /* vendor/module-96241 */),
  u = n(89639 /* vendor/module-89639 */),
  d = n(353 /* vendor/module-353 */),
  p = n(86819 /* app/lib/handle-client-update-required */),
  f = n(95741 /* app/lib/show-error-toast */);
(t.handleUnauthorized = (e) => {
  e.invalidateQueries({ queryKey: [["user", "get"]] });
}),
  (t.createQueryClient = () => {
    const e = new o.QueryClient({
      queryCache: new o.QueryCache({
        onError: (n, r) => {
          if (d.ServerError.isError(n, "CLIENT_UPDATE_REQUIRED"))
            (0, p.handleClientUpdateRequired)();
          else if (
            !d.ServerError.isCallSessionLockedToOtherClient(n) ||
            !s.callSessionLockBus.handle(n)
          )
            if (d.ServerError.isUnauthorized(n)) {
              const n = r.queryKey;
              (Array.isArray(n) &&
                Array.isArray(n[0]) &&
                "user" === n[0][0] &&
                "get" === n[0][1]) ||
                (0, t.handleUnauthorized)(e);
            } else
              (0, u.isSilentErrorQuery)(r.meta) || (0, f.showErrorToast)(n);
        },
      }),
      mutationCache: new o.MutationCache({
        onError: (n, r, o, a) => {
          const u = (0, l.handleAccountSharingHoldMutationError)(
            e,
            n,
            a.meta,
            i.toast.error,
          );
          (0, c.isFireAndForgetMutation)(a.meta) ||
            (d.ServerError.isError(n, "CLIENT_UPDATE_REQUIRED")
              ? (0, p.handleClientUpdateRequired)()
              : (d.ServerError.isCallSessionLockedToOtherClient(n) &&
                  s.callSessionLockBus.handle(n)) ||
                (u || (0, f.showErrorToast)(n),
                d.ServerError.isUnauthorized(n) &&
                  (0, t.handleUnauthorized)(e)));
        },
      }),
      defaultOptions: {
        queries: {
          staleTime: 3e4,
          retry: (e, t) =>
            !d.ServerError.isUnauthorized(t) &&
            !d.ServerError.isError(t, "CLIENT_UPDATE_REQUIRED") &&
            e < 3,
        },
        dehydrate: {
          serializeData: a.default.serialize,
          shouldDehydrateQuery: (e) =>
            (0, o.defaultShouldDehydrateQuery)(e) ||
            "pending" === e.state.status,
        },
        hydrate: { deserializeData: a.default.deserialize },
      },
    });
    return e;
  });
