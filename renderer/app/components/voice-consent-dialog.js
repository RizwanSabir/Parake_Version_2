// app/components/voice-consent-dialog.js — webpack module 36531
// params: (e, t, n) = (module, exports, require)
t.VoiceConsentDialog = function (e) {
  const t = (0, o.c)(25),
    { open: n, onOpenChange: l, onAgree: c, isAgreeing: u } = e,
    { brandName: d, privacyPolicyUrl: p } = (0, s.useVoicePlatform)();
  let f, h, m, g, y, v, b, S, _;
  return (
    t[0] !== d
      ? ((f = (0, r.jsxs)(a.DialogTitle, {
          children: ["Allow ", d, " to store your voice?"],
        })),
        (t[0] = d),
        (t[1] = f))
      : (f = t[1]),
    t[2] !== p
      ? ((h = (0, r.jsx)("a", {
          href: p,
          target: "_blank",
          rel: "noreferrer",
          className: "text-foreground underline underline-offset-2",
          children: "Privacy Policy",
        })),
        (t[2] = p),
        (t[3] = h))
      : (h = t[3]),
    t[4] !== d || t[5] !== h
      ? ((m = (0, r.jsxs)(a.DialogDescription, {
          children: [
            "To tell your speech apart from other people, ",
            d,
            " keeps your voice recordings and the voice signatures made from them with your account, one per language you record. Both are deleted when you delete that voice profile. See our",
            " ",
            h,
            " ",
            "for details.",
          ],
        })),
        (t[4] = d),
        (t[5] = h),
        (t[6] = m))
      : (m = t[6]),
    t[7] !== f || t[8] !== m
      ? ((g = (0, r.jsxs)("div", {
          className: "flex w-full flex-col items-center gap-1 text-center",
          children: [f, m],
        })),
        (t[7] = f),
        (t[8] = m),
        (t[9] = g))
      : (g = t[9]),
    t[10] !== u
      ? ((y = (0, r.jsx)(a.DialogClose, {
          render: (0, r.jsx)(i.Button, {
            variant: "secondary",
            size: "xl",
            disabled: u,
            children: "Cancel",
          }),
        })),
        (t[10] = u),
        (t[11] = y))
      : (y = t[11]),
    t[12] !== u || t[13] !== c
      ? ((v = (0, r.jsx)(i.Button, {
          size: "xl",
          loading: u,
          onClick: c,
          children: "I agree",
        })),
        (t[12] = u),
        (t[13] = c),
        (t[14] = v))
      : (v = t[14]),
    t[15] !== y || t[16] !== v
      ? ((b = (0, r.jsxs)(a.DialogFooter, {
          layout: "stretch",
          className: "grid-cols-2 [&>*:first-child]:order-none",
          children: [y, v],
        })),
        (t[15] = y),
        (t[16] = v),
        (t[17] = b))
      : (b = t[17]),
    t[18] !== g || t[19] !== b
      ? ((S = (0, r.jsxs)(a.DialogContent, {
          size: "sm",
          showCloseButton: !1,
          className: "flex flex-col gap-6",
          children: [g, b],
        })),
        (t[18] = g),
        (t[19] = b),
        (t[20] = S))
      : (S = t[20]),
    t[21] !== l || t[22] !== n || t[23] !== S
      ? ((_ = (0, r.jsx)(a.Dialog, {
          open: n,
          onOpenChange: l,
          children: S,
        })),
        (t[21] = l),
        (t[22] = n),
        (t[23] = S),
        (t[24] = _))
      : (_ = t[24]),
    _
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(66244 /* app/components/button-variants */),
  a = n(98980 /* app/components/dialog */),
  s = n(68972 /* vendor/module-68972 */);
