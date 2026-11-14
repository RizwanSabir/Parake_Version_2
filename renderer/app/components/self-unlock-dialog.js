// app/components/self-unlock-dialog.js — webpack module 97593
// params: (e, t, n) = (module, exports, require)
t.SelfUnlockDialog = function (e) {
  const t = (0, o.c)(22),
    { open: n, onOpenChange: u, onConfirm: d, pending: p } = e;
  let f, h, m, g, y, v, b, S, _;
  return (
    t[0] !== u || t[1] !== p
      ? ((f = (e) => {
          (p && !e) || u(e);
        }),
        (t[0] = u),
        (t[1] = p),
        (t[2] = f))
      : (f = t[2]),
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((h = (0, r.jsx)(l.DialogTitle, {})),
        (m = (0, r.jsx)(l.DialogDescription, {})),
        (t[3] = h),
        (t[4] = m))
      : ((h = t[3]), (m = t[4])),
    t[5] !== u ? ((g = () => u(!1)), (t[5] = u), (t[6] = g)) : (g = t[6]),
    t[7] !== p || t[8] !== g
      ? ((y = (0, r.jsx)(s.Button, {
          variant: "secondary",
          className: "h-11 flex-1",
          disabled: p,
          onClick: g,
          children: "Cancel",
        })),
        (t[7] = p),
        (t[8] = g),
        (t[9] = y))
      : (y = t[9]),
    t[10] !== d
      ? ((v = () => {
          d();
        }),
        (t[10] = d),
        (t[11] = v))
      : (v = t[11]),
    t[12] !== p || t[13] !== v
      ? ((b = (0, r.jsx)(s.Button, {
          className: "h-11 flex-1",
          loading: p,
          disabled: p,
          onClick: v,
          children: c.UNBLOCK_ACCOUNT_LABEL,
        })),
        (t[12] = p),
        (t[13] = v),
        (t[14] = b))
      : (b = t[14]),
    t[15] !== y || t[16] !== b
      ? ((S = (0, r.jsx)(l.DialogContent, {
          size: "sm",
          showCloseButton: !1,
          className: "flex flex-col items-center gap-6",
          children: (0, r.jsx)(a.DialogPrompt, {
            icon: i.LockKeyhole,
            title: "Unblock your account?",
            titleRender: h,
            bodyRender: m,
            actions: (0, r.jsxs)(r.Fragment, { children: [y, b] }),
            children:
              "Accounts are for one person only. You can unblock your account once. If it gets blocked again, you’ll have to wait until it unblocks automatically.",
          }),
        })),
        (t[15] = y),
        (t[16] = b),
        (t[17] = S))
      : (S = t[17]),
    t[18] !== n || t[19] !== f || t[20] !== S
      ? ((_ = (0, r.jsx)(l.Dialog, {
          open: n,
          onOpenChange: f,
          children: S,
        })),
        (t[18] = n),
        (t[19] = f),
        (t[20] = S),
        (t[21] = _))
      : (_ = t[21]),
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
