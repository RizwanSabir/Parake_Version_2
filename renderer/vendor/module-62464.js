// vendor/module-62464.js — webpack module 62464
// params: (e, t, n) = (module, exports, require)
t.CallSessionDuration = function (e) {
  const t = (0, o.c)(22),
    {
      session: n,
      variant: c,
      className: u,
      fallback: d,
      lowTimeWarning: p,
    } = e,
    f = void 0 === c ? "body" : c,
    h = void 0 === d ? "—" : d,
    m = void 0 !== p && p,
    g = !n.isEndedOrExpired && null !== n.activatedAt,
    y = (0, i.useNow)(g ? 1e3 : null);
  let v, b, S, _, x, w;
  if (
    t[0] !== u ||
    t[1] !== h ||
    t[2] !== g ||
    t[3] !== m ||
    t[4] !== y ||
    t[5] !== n ||
    t[6] !== f
  ) {
    const e = (0, a.getCallSessionTimerMs)(n, y),
      r = m && g && n.isLimitedSession && null !== e && e < 3e5;
    (v = l.Typography), (b = f), (S = !0);
    const o = null === e && "text-muted-foreground",
      i = r && "text-warning-ink font-medium";
    t[12] !== u || t[13] !== o || t[14] !== i
      ? ((_ = (0, s.cn)(o, i, u)),
        (t[12] = u),
        (t[13] = o),
        (t[14] = i),
        (t[15] = _))
      : (_ = t[15]),
      (x =
        null === e
          ? h
          : g
            ? (0, a.formatCallSessionDuration)(e)
            : (0, a.formatCallSessionDuration)(e).replace(/( 0[hms])+$/, "")),
      (t[0] = u),
      (t[1] = h),
      (t[2] = g),
      (t[3] = m),
      (t[4] = y),
      (t[5] = n),
      (t[6] = f),
      (t[7] = v),
      (t[8] = b),
      (t[9] = S),
      (t[10] = _),
      (t[11] = x);
  } else (v = t[7]), (b = t[8]), (S = t[9]), (_ = t[10]), (x = t[11]);
  return (
    t[16] !== v || t[17] !== b || t[18] !== S || t[19] !== _ || t[20] !== x
      ? ((w = (0, r.jsx)(v, {
          variant: b,
          suppressHydrationWarning: S,
          className: _,
          children: x,
        })),
        (t[16] = v),
        (t[17] = b),
        (t[18] = S),
        (t[19] = _),
        (t[20] = x),
        (t[21] = w))
      : (w = t[21]),
    w
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(58176 /* vendor/module-58176 */),
  a = n(75613 /* vendor/module-75613 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(34483 /* app/components/typography-variants */);
