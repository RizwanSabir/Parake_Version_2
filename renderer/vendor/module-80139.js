// vendor/module-80139.js — webpack module 80139
// params: (e, t) = (module, exports, require)
"use strict";
(t.resolveLiveSessionStep = function (e) {
  return e.hasActivePlan ||
    e.isActivated ||
    e.hasPickedSessionType ||
    e.isPlanLoading
    ? e.isEndedOrExpired
      ? "ended"
      : e.isTranscribing || e.hasConnectedOnce
        ? "live"
        : "connect"
    : "activate";
}),
  (t.themeScopeForStep = function (e) {
    return "live" === e ? "liveCall" : "shell";
  });
