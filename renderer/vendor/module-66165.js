// vendor/module-66165.js — webpack module 66165
// params: (e, t) = (module, exports, require)
"use strict";
t.attachTrackWatchdog = function (
  e,
  {
    reasonKey: t,
    sourceBase: n,
    endedDisplayMessage: r,
    endedSeverity: o = "info",
    onMuteChange: i,
    recoverable: a = !1,
    statusRef: s,
    queueAction: l,
  },
) {
  (e.onended = () => {
    if ("STOPPED" === s.current || "STOPPING" === s.current) return;
    const e = `${t}-ended`,
      i = {
        displayMessage: r,
        source: `${n}.onended`,
        severity: o,
        reason: e,
      };
    l(
      a
        ? { action: "RECOVER_FULL", reason: e, error: i }
        : { action: "STOP", error: i },
    );
  }),
    i &&
      ((e.onmute = () => i(!0)), (e.onunmute = () => i(!1)), e.muted && i(!0));
};
