// vendor/module-31525.js — webpack module 31525
// params: (e, t, n) = (module, exports, require)
(t.UNBLOCK_ACCOUNT_LABEL = void 0),
  (t.AccountSharingHoldBanner = function (e) {
    const n = (0, o.c)(9),
      {
        liftsOn: l,
        selfUnlockAvailable: c,
        onUnblockClick: u,
        className: d,
      } = e;
    let p, f, h;
    return (
      n[0] !== l
        ? ((p = (0, r.jsxs)(r.Fragment, {
            children: [
              "Paid features are blocked for account sharing. They will be unblocked automatically on ",
              l,
              ".",
            ],
          })),
          (n[0] = l),
          (n[1] = p))
        : (p = n[1]),
      n[2] !== u || n[3] !== c
        ? ((f =
            c &&
            (0, r.jsx)(s.Button, {
              onClick: u,
              children: t.UNBLOCK_ACCOUNT_LABEL,
            })),
          (n[2] = u),
          (n[3] = c),
          (n[4] = f))
        : (f = n[4]),
      n[5] !== d || n[6] !== p || n[7] !== f
        ? ((h = (0, r.jsx)(a.AppWarning, {
            icon: i.LockKeyhole,
            title: "Account blocked",
            description: p,
            actions: f,
            className: d,
          })),
          (n[5] = d),
          (n[6] = p),
          (n[7] = f),
          (n[8] = h))
        : (h = n[8]),
      h
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(51912 /* app/components/app-warning */),
  s = n(66244 /* app/components/button-variants */);
t.UNBLOCK_ACCOUNT_LABEL = "Unblock account";
