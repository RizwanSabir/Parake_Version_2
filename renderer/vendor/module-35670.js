// vendor/module-35670.js — webpack module 35670
// params: (e, t) = (module, exports, require)
"use strict";
(t.isOffer = void 0),
  (t.checkComputerAudio = function ({
    platform: e,
    moment: t,
    shareState: n,
    callAppOpen: r,
    offerDeclined: o,
    micWordsEnough: i,
    screenPermissionMissing: a = !1,
  }) {
    if ("minute" === t) {
      if ("starting" === n || "failed" === n) return null;
    } else {
      if ("failed" === n || "stopped" === n)
        return "mac" === e && a ? "fix-permission" : "fix-retry";
      if ("starting" === n || !i) return null;
    }
    return "browser" !== e && r
      ? "windows" === e
        ? "answer" === t || "recording" === n
          ? "fix-choose-device"
          : null
        : "answer" === t
          ? "fix-restart"
          : null
      : o
        ? null
        : "browser" === e
          ? "tab-offer"
          : "offer";
  }),
  (t.isOffer = (e) => "offer" === e || "tab-offer" === e);
