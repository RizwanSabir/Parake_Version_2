// vendor/module-28913.js — webpack module 28913
// params: (e, t, n) = (module, exports, require)
"use strict";
t.callSessionListPollMs = function (e, t) {
  const n = e.flatMap((e) => e.data),
    o =
      (n.some(
        (e) =>
          (null !== e.activatedAt && !e.isEndedOrExpired) ||
          e.isRecentlyEndedOrExpired,
      )
        ? r.CALL_SESSION_LIST_LIVE_POLL_MS
        : r.CALL_SESSION_LIST_IDLE_POLL_MS) * Math.max(1, e.length);
  return n.reduce((e, n) => {
    const r = (function (e) {
        return e.isEndedOrExpired
          ? e.isRecentlyEndedOrExpired
            ? e.continueWindowEndsAt
            : null
          : e.endedOrExpiredAt;
      })(n),
      o = r ? r.getTime() - t : 0;
    return o > 0 ? Math.min(e, o + 1e3) : e;
  }, o);
};
const r = n(46852 /* vendor/module-46852 */);
