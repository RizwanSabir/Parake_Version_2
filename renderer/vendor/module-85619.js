// vendor/module-85619.js — webpack module 85619
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAutoExtendCreditSession = function (e) {
  const t = (0, r.c)(12),
    {
      canExtend: n,
      callSession: s,
      isShareTranscribing: l,
      isMicrophoneTranscribing: c,
      isExtendingSession: u,
      extendLimitedSession: d,
    } = e,
    [p, f] = (0, o.useState)(!0),
    h = s?.isEndedOrExpired && null === s.activatedBySessionToken,
    m = !(
      u ||
      h ||
      s?.isLockedByOtherClient ||
      !n ||
      !s?.isExtendable ||
      !s?.isCreditSession ||
      (!l && !c) ||
      !p
    ),
    g = m && !!s?.autoExtend;
  let y, v, b;
  t[0] !== s || t[1] !== d || t[2] !== g
    ? ((y = () => {
        g &&
          s &&
          null !== s.timeLeft &&
          s.timeLeft < 1e3 * a.AUTO_EXTEND_HEADROOM_SECONDS &&
          (d({ callSessionId: s.id }), f(!1));
      }),
      (v = [g, d, s]),
      (t[0] = s),
      (t[1] = d),
      (t[2] = g),
      (t[3] = y),
      (t[4] = v))
    : ((y = t[3]), (v = t[4])),
    (0, o.useEffect)(y, v),
    t[5] !== s || t[6] !== n || t[7] !== m || t[8] !== u
      ? ((b = s
          ? (0, i.resolveAutoExtendStatus)({
              session: s,
              isExtending: u,
              canExtend: n,
              isArmed: m,
            })
          : "idle"),
        (t[5] = s),
        (t[6] = n),
        (t[7] = m),
        (t[8] = u),
        (t[9] = b))
      : (b = t[9]);
  const S = b;
  let _;
  return (
    t[10] !== S
      ? ((_ = {
          autoExtendStatus: S,
          setHasChatActivitySinceLastExtension: f,
        }),
        (t[10] = S),
        (t[11] = _))
      : (_ = t[11]),
    _
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(32640 /* vendor/module-32640 */),
  a = n(46852 /* vendor/module-46852 */);
