// app/components/account-sharing-hold-notice.js — webpack module 34456
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AccountSharingHoldNotice = function (e) {
  const t = (0, o.c)(8),
    { className: n } = e,
    {
      hold: s,
      selfUnlockAvailable: l,
      openUnblock: c,
      gateDialog: u,
    } = (0, a.useAccountSharingGate)();
  if (!s) return null;
  let d, p;
  return (
    t[0] !== n || t[1] !== s.liftsOn || t[2] !== c || t[3] !== l
      ? ((d = (0, r.jsx)(i.AccountSharingHoldBanner, {
          liftsOn: s.liftsOn,
          selfUnlockAvailable: l,
          onUnblockClick: c,
          className: n,
        })),
        (t[0] = n),
        (t[1] = s.liftsOn),
        (t[2] = c),
        (t[3] = l),
        (t[4] = d))
      : (d = t[4]),
    t[5] !== u || t[6] !== d
      ? ((p = (0, r.jsxs)(r.Fragment, { children: [d, u] })),
        (t[5] = u),
        (t[6] = d),
        (t[7] = p))
      : (p = t[7]),
    p
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(31525 /* vendor/module-31525 */),
  a = n(1081 /* app/components/open-gate */);
