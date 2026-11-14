// vendor/module-9617.js — webpack module 9617
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useForcedLogoutCountdown = function (e) {
  const t = (0, r.c)(18),
    {
      enabled: n,
      pollWhileHidden: l,
      onTick: c,
      onExpired: u,
      onDisabled: d,
    } = e,
    p = (0, o.useRef)(!1);
  let f;
  t[0] !== n || t[1] !== l
    ? ((f = {
        enabled: n,
        refetchInterval: s,
        refetchIntervalInBackground: l,
        staleTime: i.FORCED_LOGOUT_POLL_MS,
      }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = f))
    : (f = t[2]);
  const { data: h } = a.api.user.getSessionForcedLogout.useQuery(void 0, f);
  let m;
  t[3] !== h
    ? ((m = h?.isForcedLogout ? h.expires.getTime() : null),
      (t[3] = h),
      (t[4] = m))
    : (m = t[4]);
  const g = m,
    y =
      null === g
        ? null
        : "user_signed_out" === h?.forcedLogoutReason
          ? "You signed out all other devices."
          : "Another device logged into your account.";
  let v;
  t[5] !== d || t[6] !== u || t[7] !== c
    ? ((v = { onTick: c, onExpired: u, onDisabled: d }),
      (t[5] = d),
      (t[6] = u),
      (t[7] = c),
      (t[8] = v))
    : (v = t[8]);
  const b = (0, o.useRef)(v);
  let S, _, x;
  return (
    t[9] !== d || t[10] !== u || t[11] !== c
      ? ((S = () => {
          b.current = { onTick: c, onExpired: u, onDisabled: d };
        }),
        (t[9] = d),
        (t[10] = u),
        (t[11] = c),
        (t[12] = S))
      : (S = t[12]),
    (0, o.useEffect)(S),
    t[13] !== g || t[14] !== n || t[15] !== y
      ? ((_ = () => {
          if (!n) return b.current.onDisabled(), void (p.current = !1);
          if (null === g || null === y || p.current) return;
          let e = null;
          const t = () => {
            const t = g - Date.now();
            t > 0
              ? b.current.onTick(y, Math.ceil(t / 1e3))
              : ((p.current = !0),
                null !== e && clearInterval(e),
                b.current.onExpired());
          };
          return (
            t(),
            p.current
              ? void 0
              : ((e = setInterval(t, 1e3)),
                () => {
                  null !== e && clearInterval(e);
                })
          );
        }),
        (x = [n, g, y]),
        (t[13] = g),
        (t[14] = n),
        (t[15] = y),
        (t[16] = _),
        (t[17] = x))
      : ((_ = t[16]), (x = t[17])),
    (0, o.useEffect)(_, x),
    y
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(46238 /* vendor/module-46238 */),
  a = n(44189 /* vendor/module-44189 */);
function s(e) {
  return !e.state.data?.isForcedLogout && i.FORCED_LOGOUT_POLL_MS;
}
