// vendor/module-55406.js — webpack module 55406
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useLiveSessionTimer = function (e) {
  const t = (0, r.c)(23),
    { callSession: n, autoExtendStatus: c, onExtended: u } = e,
    d = (0, s.useNow)(1e3);
  let p;
  t[0] !== n || t[1] !== d
    ? ((p = (0, a.readSessionClock)(n, d.getTime())),
      (t[0] = n),
      (t[1] = d),
      (t[2] = p))
    : (p = t[2]);
  const f = p;
  let h;
  t[3] !== n.limitedSessionExpiresAt
    ? ((h = n.limitedSessionExpiresAt?.getTime() ?? null),
      (t[3] = n.limitedSessionExpiresAt),
      (t[4] = h))
    : (h = t[4]);
  const m = h,
    g = (0, o.useRef)(null);
  let y, v;
  t[5] !== m || t[6] !== u
    ? ((y = () => {
        const e = g.current;
        if (((g.current = m), null === e || null === m || m <= e)) return;
        const t = Math.max(e, Date.now());
        u((0, i.extensionConfirmedMessage)(Math.round((m - t) / 6e4)));
      }),
      (v = [m, u]),
      (t[5] = m),
      (t[6] = u),
      (t[7] = y),
      (t[8] = v))
    : ((y = t[7]), (v = t[8])),
    (0, o.useEffect)(y, v);
  const b = n.id,
    S = f?.timeLeftMs ?? null;
  let _, x;
  t[9] !== c
    ? ((_ = (0, i.isAutoExtendArmed)(c)), (t[9] = c), (t[10] = _))
    : (_ = t[10]),
    t[11] !== n.autoExtend ||
    t[12] !== n.id ||
    t[13] !== m ||
    t[14] !== S ||
    t[15] !== _
      ? ((x = {
          callSessionId: b,
          expiresAt: m,
          clockTimeLeftMs: S,
          isAutoExtendArmed: _,
          autoExtend: n.autoExtend,
        }),
        (t[11] = n.autoExtend),
        (t[12] = n.id),
        (t[13] = m),
        (t[14] = S),
        (t[15] = _),
        (t[16] = x))
      : (x = t[16]);
  const w = (0, l.useAutoExtendPrompt)(x);
  let E, T;
  return (
    t[17] !== c
      ? ((E = (0, i.describeAutoExtendStatus)(c)), (t[17] = c), (t[18] = E))
      : (E = t[18]),
    t[19] !== f || t[20] !== w || t[21] !== E
      ? ((T = { clock: f, tooltip: E, ...w }),
        (t[19] = f),
        (t[20] = w),
        (t[21] = E),
        (t[22] = T))
      : (T = t[22]),
    T
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(32640 /* vendor/module-32640 */),
  a = n(3275 /* vendor/module-3275 */),
  s = n(58176 /* vendor/module-58176 */),
  l = n(52564 /* vendor/module-52564 */);
