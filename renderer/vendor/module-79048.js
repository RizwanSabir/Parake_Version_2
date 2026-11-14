// vendor/module-79048.js — webpack module 79048
// params: (e, t, n) = (module, exports, require)
"use strict";
t.showErrorToast = function (
  e,
  { toastError: t, writeClipboard: n },
  { context: l } = {},
) {
  const u = (function (e) {
    if (c(e) && "offline" === r.connectivityService.getSnapshot().status)
      return {
        message: i.OFFLINE_REQUEST_FAILED_MESSAGE,
        kind: "offline",
      };
    const t = (0, o.renderLocalDateTokens)(
      (function (e) {
        return e instanceof Error ? (0, a.unwrapErrorMessage)(e) : String(e);
      })(e),
    );
    return { message: t, kind: s.test(t) ? "unexpected" : "handled" };
  })(e);
  if ("offline" === u.kind)
    return void t(u.message, { id: i.OFFLINE_TOAST_ID });
  const d = u.message,
    p = l ? `${l}: ${d}` : d;
  "unexpected" === u.kind
    ? t(p, {
        duration: 1e4,
        action: {
          label: "Copy",
          onClick: () => {
            n(p);
          },
        },
      })
    : t(p);
};
const r = n(63506 /* vendor/module-63506 */),
  o = n(30124 /* vendor/module-30124 */),
  i = n(39752 /* vendor/module-39752 */),
  a = n(353 /* vendor/module-353 */),
  s = /^\[Request ID: [^\]]+\]/,
  l =
    /failed to fetch|load failed|networkerror|fetch failed|network request failed/i;
function c(e) {
  return e instanceof TypeError
    ? l.test(e.message)
    : e instanceof Error && void 0 !== e.cause && c(e.cause);
}
