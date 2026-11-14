// vendor/module-32640.js — webpack module 32640
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.resolveAutoExtendStatus = function ({
  session: e,
  isExtending: t,
  canExtend: n,
  isArmed: r,
}) {
  return e.isMock
    ? "mock"
    : e.isPlanSession
      ? "plan"
      : t
        ? "extending"
        : r
          ? e.autoExtend
            ? "will-extend"
            : "switched-off"
          : e.isFreeSession
            ? n
              ? "free"
              : "free-no-credits"
            : n
              ? "idle"
              : "no-credits";
}),
  (t.isAutoExtendArmed = function (e) {
    return "will-extend" === e || "switched-off" === e;
  }),
  (t.describeAutoExtendStatus = function (e) {
    switch (e) {
      case "mock":
        return "Mock interviews run on a fixed clock and can't be extended.";
      case "plan":
        return "This session has no time limit. It will end when inactivity is detected.";
      case "extending":
        return "The session is extending...";
      case "will-extend":
        return `When the timer reaches 0 this session will auto extend: ${r.MAX_CALL_DURATION_MINUTES} more minutes for ${r.SESSION_CREDIT_COST} credit.`;
      case "switched-off":
        return "Auto Extend is off. The session ends when the timer reaches 0.";
      case "free":
        return `This is a free session. Extending will add ${r.FREE_SESSION_EXTENSION_MINUTES} minutes (${r.SESSION_CREDIT_COST} credit).`;
      case "free-no-credits":
        return "This is a free session. Purchase credits to extend.";
      case "no-credits":
        return "This session will not auto extend because you have no call credits left.";
      case "idle":
        return null;
    }
  }),
  (t.extensionConfirmedMessage = function (e) {
    return `Extended · ${e} minutes added · ${r.SESSION_CREDIT_COST} credit`;
  });
const r = n(46852 /* vendor/module-46852 */);
