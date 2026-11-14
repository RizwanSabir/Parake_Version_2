// vendor/module-99545.js — webpack module 99545
// params: (e, t, n) = (module, exports, require)
t.AccountSharingGateDialog = function (e) {
  const t = (0, o.c)(15),
    {
      open: n,
      onOpenChange: l,
      entry: c,
      liftsOn: u,
      selfUnlockAvailable: d,
      onConfirm: p,
      pending: f,
    } = e,
    [h, m] = (0, i.useState)(!1);
  !n && h && m(!1);
  const g = d && ("unblock" === c || h),
    y = n && !g;
  let v, b;
  t[0] !== d
    ? ((v = d ? () => m(!0) : void 0), (t[0] = d), (t[1] = v))
    : (v = t[1]),
    t[2] !== u || t[3] !== l || t[4] !== y || t[5] !== v
      ? ((b = (0, r.jsx)(a.AccountSharingBlockedDialog, {
          open: y,
          onOpenChange: l,
          liftsOn: u,
          onUnblockClick: v,
        })),
        (t[2] = u),
        (t[3] = l),
        (t[4] = y),
        (t[5] = v),
        (t[6] = b))
      : (b = t[6]);
  const S = n && g;
  let _, x;
  return (
    t[7] !== p || t[8] !== l || t[9] !== f || t[10] !== S
      ? ((_ = (0, r.jsx)(s.SelfUnlockDialog, {
          open: S,
          onOpenChange: l,
          onConfirm: p,
          pending: f,
        })),
        (t[7] = p),
        (t[8] = l),
        (t[9] = f),
        (t[10] = S),
        (t[11] = _))
      : (_ = t[11]),
    t[12] !== b || t[13] !== _
      ? ((x = (0, r.jsxs)(r.Fragment, { children: [b, _] })),
        (t[12] = b),
        (t[13] = _),
        (t[14] = x))
      : (x = t[14]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(2906 /* app/components/on-click */),
  s = n(97593 /* app/components/self-unlock-dialog */);
