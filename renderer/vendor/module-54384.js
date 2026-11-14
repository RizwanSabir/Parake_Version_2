// vendor/module-54384.js — webpack module 54384
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useRejoinCountdown = function (e) {
  const t = (0, r.c)(6),
    n =
      e.isExtendable && e.endedOrExpiredAt
        ? e.endedOrExpiredAt.getTime() + i
        : null,
    [s, l] = (0, o.useState)(a),
    c = null === n ? 0 : Math.max(0, n - s),
    u = e.isEndedOrExpired && null !== n && c > 0;
  let d, p, f;
  return (
    t[0] !== u
      ? ((d = () => {
          if (!u) return;
          const e = setInterval(() => l(Date.now()), 1e3);
          return () => clearInterval(e);
        }),
        (p = [u]),
        (t[0] = u),
        (t[1] = d),
        (t[2] = p))
      : ((d = t[1]), (p = t[2])),
    (0, o.useEffect)(d, p),
    t[3] !== u || t[4] !== c
      ? ((f = { canRejoin: u, msLeft: c }), (t[3] = u), (t[4] = c), (t[5] = f))
      : (f = t[5]),
    f
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i =
    60 *
    n(46852 /* vendor/module-46852 */).SESSION_RECENTLY_ENDED_WINDOW_MINUTES *
    1e3;
function a() {
  return Date.now();
}
