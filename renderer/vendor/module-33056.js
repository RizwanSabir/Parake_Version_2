// vendor/module-33056.js — webpack module 33056
// params: (e, t, n) = (module, exports, require)
"use strict";
t.callSessionRefetchInterval = function (e) {
  const { data: t, dataUpdatedAt: n } = e.state;
  if (!t) return o;
  if (t.isEndedOrExpired) return !!t.isRecentlyEndedOrExpired && 3e4;
  if (null === t.timeLeft) return o;
  const i = t.timeLeft - (Date.now() - n);
  return i > r
    ? Math.min(o, i - r + 250)
    : i > 0
      ? Math.min(5e3, i + 250)
      : 5e3;
};
const r = 1e3 * n(46852 /* vendor/module-46852 */).AUTO_EXTEND_HEADROOM_SECONDS,
  o = 15e3;
