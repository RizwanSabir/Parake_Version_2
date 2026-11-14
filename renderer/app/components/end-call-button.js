// app/components/end-call-button.js — webpack module 98958
// params: (e, t, n) = (module, exports, require)
"use strict";
t.EndCallButton = function (e) {
  const t = (0, o.c)(18),
    {
      callSession: n,
      endSession: l,
      isEndingSession: c,
      isExitingSession: u,
      exitSession: d,
      isExtendingSession: p,
    } = e,
    [f, h] = (0, i.useState)(!1),
    m = n.isPlanSession,
    g = c || p;
  let y;
  t[0] !== l || t[1] !== m
    ? ((y = () => {
        m ? l() : h(!0);
      }),
      (t[0] = l),
      (t[1] = m),
      (t[2] = y))
    : (y = t[2]);
  const v = m ? "End" : "Exit";
  let b, S, _;
  return (
    t[3] !== g || t[4] !== y || t[5] !== v
      ? ((b = (0, r.jsx)(s.LiveSessionButton, {
          transparent: !0,
          className:
            "flex h-8 flex-row items-center bg-red-500/50 hover:bg-red-500 dark:bg-red-500/50 dark:hover:bg-red-500",
          disabled: g,
          onClick: y,
          children: v,
        })),
        (t[3] = g),
        (t[4] = y),
        (t[5] = v),
        (t[6] = b))
      : (b = t[6]),
    t[7] !== n.activatedAt ||
    t[8] !== l ||
    t[9] !== d ||
    t[10] !== f ||
    t[11] !== c ||
    t[12] !== u ||
    t[13] !== m
      ? ((S =
          n.activatedAt &&
          (0, r.jsx)(a.EndSessionDialog, {
            isOpen: f && !m,
            onOpenChange: h,
            endSession: l,
            isEndingSession: c,
            isExitingSession: u,
            exitSession: d,
          })),
        (t[7] = n.activatedAt),
        (t[8] = l),
        (t[9] = d),
        (t[10] = f),
        (t[11] = c),
        (t[12] = u),
        (t[13] = m),
        (t[14] = S))
      : (S = t[14]),
    t[15] !== b || t[16] !== S
      ? ((_ = (0, r.jsxs)(r.Fragment, { children: [b, S] })),
        (t[15] = b),
        (t[16] = S),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(16107 /* app/components/end-session-dialog */),
  s = n(11575 /* app/components/live-session-button */);
