// vendor/module-39752.js — webpack module 39752
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.wt =
  t.OFFLINE_REQUEST_FAILED_MESSAGE =
  t.OFFLINE_RECOVERING_MESSAGE =
  t.Wv =
  t.OFFLINE_TOAST_ID =
    void 0),
  (t.resolveReportSeverity = function ({
    severity: e,
    reason: t,
    contextData: n,
  }) {
    return "error" !== (e ?? "error")
      ? { severity: e }
      : a(t, n)
        ? { severity: i[t], demotedFrom: "error" }
        : { severity: e };
  }),
  (t.resolveUserFacingStopError = function ({
    reason: e,
    displayMessage: n,
    contextData: o,
    error: i,
  }) {
    return (function (e) {
      return (
        null !== e &&
        "object" == typeof e &&
        r.ServerError.isError(e, "CALL_SESSION_ENDED")
      );
    })(i)
      ? { kind: "error", message: t.wt }
      : a(e, o)
        ? { kind: "offline", message: t.Wv }
        : { kind: "error", message: n };
  });
const r = n(353 /* vendor/module-353 */),
  o = n(42811 /* vendor/module-42811 */),
  i = {
    "audio-added-stale": "info",
    "socket-closed": "info",
    "socket-not-open": "info",
    "on-audio-frame-throw": "info",
    "server-ended-unexpectedly": "info",
    "recognition-error": "warning",
    "start-failed": "warning",
    "restart-failed": "warning",
  };
function a(e, t) {
  if (
    void 0 === e ||
    !(function (e) {
      return Object.hasOwn(i, e);
    })(e)
  )
    return !1;
  const n = t?.[o.CONNECTIVITY_CONTEXT_KEY];
  return "offline" === (null !== n && "object" == typeof n ? n.status : void 0);
}
(t.OFFLINE_TOAST_ID = "transcription-offline"),
  (t.Wv =
    "You appear to be offline — live transcription stopped. Restart it once your connection is back."),
  (t.OFFLINE_RECOVERING_MESSAGE =
    "You appear to be offline — trying to reestablish the transcription connection…"),
  (t.OFFLINE_REQUEST_FAILED_MESSAGE =
    "You appear to be offline — check your internet connection and try again."),
  (t.wt = "This call session has ended — live transcription stopped.");
