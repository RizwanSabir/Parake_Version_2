// vendor/module-75613.js — webpack module 75613
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.getCallSessionTimerMs = function (e, t) {
  const n = !e.isEndedOrExpired && null !== e.activatedAt,
    o = (0, r.sessionClockEndsAt)(e);
  return n && e.isLimitedSession && o
    ? Math.max(0, o.getTime() - t.getTime())
    : (function (e, t) {
        return e.activatedAt
          ? (e.endedOrExpiredAt && e.endedOrExpiredAt <= t
              ? e.endedOrExpiredAt
              : t
            ).getTime() - e.activatedAt.getTime()
          : null;
      })(e, t);
}),
  (t.getCallSessionCreditsUsed = function (e) {
    return "credit" !== e.activationType || null === e.activatedAt
      ? null
      : e.creditsUsed;
  }),
  (t.formatCallSessionDuration = function (e) {
    const t = Math.max(0, Math.floor(e / 1e3)),
      n = Math.floor(t / 3600),
      r = Math.floor((t % 3600) / 60),
      o = t % 60;
    return n > 0 ? `${n}h ${r}m ${o}s` : r > 0 ? `${r}m ${o}s` : `${o}s`;
  });
const r = n(3275 /* vendor/module-3275 */);
