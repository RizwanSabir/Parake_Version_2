// app/components/on-click.js — webpack module 2906
// params: (e, t, n) = (module, exports, require)
t.AccountSharingBlockedDialog = function (e) {
  const t = (0, o.c)(19),
    { open: n, onOpenChange: u, liftsOn: d, onUnblockClick: p } = e;
  let f, h, m, g, y, v, b, S, _;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = (0, r.jsx)(l.DialogTitle, {})),
        (h = (0, r.jsx)(l.DialogDescription, {})),
        (t[0] = f),
        (t[1] = h))
      : ((f = t[0]), (h = t[1])),
    t[2] !== u
      ? ((m = (0, r.jsx)(s.Button, {
          variant: "secondary",
          className: "h-11 flex-1",
          onClick: () => u(!1),
          children: "Close",
        })),
        (t[2] = u),
        (t[3] = m))
      : (m = t[3]),
    t[4] !== p
      ? ((g =
          p &&
          (0, r.jsx)(s.Button, {
            className: "h-11 flex-1",
            onClick: p,
            children: c.UNBLOCK_ACCOUNT_LABEL,
          })),
        (t[4] = p),
        (t[5] = g))
      : (g = t[5]),
    t[6] !== m || t[7] !== g
      ? ((y = (0, r.jsxs)(r.Fragment, { children: [m, g] })),
        (t[6] = m),
        (t[7] = g),
        (t[8] = y))
      : (y = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = (0, r.jsx)("span", {
          children: "Paid features are blocked for account sharing.",
        })),
        (t[9] = v))
      : (v = t[9]),
    t[10] !== d
      ? ((b = (0, r.jsxs)("span", {
          className: "flex flex-col",
          children: [
            v,
            (0, r.jsxs)("span", {
              children: ["They will be unblocked automatically on ", d, "."],
            }),
          ],
        })),
        (t[10] = d),
        (t[11] = b))
      : (b = t[11]),
    t[12] !== y || t[13] !== b
      ? ((S = (0, r.jsx)(l.DialogContent, {
          size: "sm",
          showCloseButton: !1,
          className: "flex flex-col items-center gap-6",
          children: (0, r.jsx)(a.DialogPrompt, {
            icon: i.LockKeyhole,
            title: "Account blocked",
            titleRender: f,
            bodyRender: h,
            actions: y,
            children: b,
          }),
        })),
        (t[12] = y),
        (t[13] = b),
        (t[14] = S))
      : (S = t[14]),
    t[15] !== u || t[16] !== n || t[17] !== S
      ? ((_ = (0, r.jsx)(l.Dialog, {
          open: n,
          onOpenChange: u,
          children: S,
        })),
        (t[15] = u),
        (t[16] = n),
        (t[17] = S),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(56211 /* app/components/dialog-prompt */),
  s = n(66244 /* app/components/button-variants */),
  l = n(98980 /* app/components/dialog */),
  c = n(31525 /* vendor/module-31525 */);
