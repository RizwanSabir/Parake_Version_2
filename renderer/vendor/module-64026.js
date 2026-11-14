// vendor/module-64026.js — webpack module 64026
// params: (e, t, n) = (module, exports, require)
t.PaymentFailedBanner = function (e) {
  const t = (0, o.c)(6),
    { onUpdateClick: n, loading: l, className: c } = e,
    u = void 0 !== l && l;
  let d, p;
  return (
    t[0] !== u || t[1] !== n
      ? ((d = (0, r.jsx)(s.Button, {
          onClick: n,
          loading: u,
          children: "Update payment method",
        })),
        (t[0] = u),
        (t[1] = n),
        (t[2] = d))
      : (d = t[2]),
    t[3] !== c || t[4] !== d
      ? ((p = (0, r.jsx)(a.AppWarning, {
          icon: i.CreditCard,
          title: "Payment failed",
          description:
            "Your last subscription payment didn't go through. Update your payment method, or your plan will end.",
          actions: d,
          className: c,
        })),
        (t[3] = c),
        (t[4] = d),
        (t[5] = p))
      : (p = t[5]),
    p
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(51912 /* app/components/app-warning */),
  s = n(66244 /* app/components/button-variants */);
