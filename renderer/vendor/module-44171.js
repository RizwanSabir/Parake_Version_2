// vendor/module-44171.js — webpack module 44171
// params: (e, t, n) = (module, exports, require)
"use strict";
t.handleAccountSharingHoldMutationError = function (e, t, n, s) {
  return (
    !!r.ServerError.isError(t, "ACCOUNT_SHARING_HOLD") &&
    (e.invalidateQueries({ queryKey: a }),
    !(0, o.isFireAndForgetMutation)(n) &&
      !(0, i.isHandledErrorMutation)(n) &&
      (s(
        (function (e) {
          return e
            .getQueriesData({ queryKey: a })
            .some(([, e]) => !1 === e?.selfUnlockAvailable);
        })(e)
          ? "Account blocked again"
          : "Account blocked",
        { description: t.message },
      ),
      !0))
  );
};
const r = n(353 /* vendor/module-353 */),
  o = n(96241 /* vendor/module-96241 */),
  i = n(90375 /* vendor/module-90375 */),
  a = [["user", "accountSharingStatus"]];
