// vendor/module-3275.js — webpack module 3275
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.hasAutoExtendSwitch = o),
  (t.sessionClockEndsAt = i),
  (t.readSessionClock = function (e, t) {
    if (!e.activatedAt) return null;
    const n = i(e);
    if (e.isLimitedSession && n) {
      const e = n.getTime() - t;
      return { direction: "down", timeLeftMs: e, face: a(e) };
    }
    return {
      direction: "up",
      timeLeftMs: null,
      face: a((e.planSessionEndedAt?.getTime() ?? t) - e.activatedAt.getTime()),
    };
  });
const r = 1e3 * n(46852 /* vendor/module-46852 */).AUTO_EXTEND_HEADROOM_SECONDS;
function o(e) {
  return "credit" === e.activationType && !e.isMock;
}
function i(e) {
  return e.limitedSessionExpiresAt
    ? new Date(
        e.limitedSessionExpiresAt.getTime() -
          (function (e) {
            return o(e) ? r : 0;
          })(e),
      )
    : null;
}
function a(e) {
  if (e < 0) return "00:00";
  const t = Math.floor(e / 1e3),
    n = Math.floor(t / 3600),
    r = t % 60,
    o = `${Math.floor((t % 3600) / 60)
      .toString()
      .padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
  return n > 0 ? `${n}:${o}` : o;
}
