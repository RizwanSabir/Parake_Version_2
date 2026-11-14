// app/components/locked-call-session-screen.js — webpack module 77080
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LockedCallSessionScreen = function (e) {
  const t = (0, o.c)(23),
    { lockVariant: n, onCancelClick: l, onClaimClick: c } = e,
    [u, d] = (0, i.useState)(!1),
    p = s[n];
  let f;
  t[0] !== c
    ? ((f = async function () {
        d(!0);
        try {
          await c();
        } catch {
          d(!1);
        }
      }),
      (t[0] = c),
      (t[1] = f))
    : (f = t[1]);
  const h = f;
  let m, g, y, v;
  t[2] !== p.title
    ? ((m = (0, r.jsx)("h1", {
        className: "text-xl font-medium",
        children: p.title,
      })),
      (t[2] = p.title),
      (t[3] = m))
    : (m = t[3]),
    t[4] !== p.body
      ? ((g = (0, r.jsx)("p", {
          className: "text-muted-foreground text-center",
          children: p.body,
        })),
        (t[4] = p.body),
        (t[5] = g))
      : (g = t[5]),
    t[6] !== m || t[7] !== g
      ? ((y = (0, r.jsxs)("div", {
          className: "flex flex-col items-center justify-center gap-2",
          children: [m, g],
        })),
        (t[6] = m),
        (t[7] = g),
        (t[8] = y))
      : (y = t[8]),
    t[9] !== p.cancelText || t[10] !== u || t[11] !== l
      ? ((v = (0, r.jsx)(a.Button, {
          variant: "outline",
          className: "flex-1",
          onClick: l,
          disabled: u,
          children: p.cancelText,
        })),
        (t[9] = p.cancelText),
        (t[10] = u),
        (t[11] = l),
        (t[12] = v))
      : (v = t[12]);
  const b = u ? p.claimingText : p.claimText;
  let S, _, x;
  return (
    t[13] !== h || t[14] !== u || t[15] !== b
      ? ((S = (0, r.jsx)(a.Button, {
          className: "flex-1",
          onClick: h,
          disabled: u,
          children: b,
        })),
        (t[13] = h),
        (t[14] = u),
        (t[15] = b),
        (t[16] = S))
      : (S = t[16]),
    t[17] !== v || t[18] !== S
      ? ((_ = (0, r.jsxs)("div", {
          className: "flex w-full flex-row gap-2",
          children: [v, S],
        })),
        (t[17] = v),
        (t[18] = S),
        (t[19] = _))
      : (_ = t[19]),
    t[20] !== y || t[21] !== _
      ? ((x = (0, r.jsxs)("div", {
          className:
            "bg-card rounded-window-card flex flex-col items-center justify-center gap-4 border p-4",
          children: [y, _],
        })),
        (t[20] = y),
        (t[21] = _),
        (t[22] = x))
      : (x = t[22]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(99683 /* vendor/module-99683 */),
  s = {
    newcomer: {
      title: "Session active on another device",
      body: "A call session can only run on one device at a time. Taking over will interrupt the session on the other device and continue it here.",
      cancelText: "Cancel",
      claimText: "Take over",
      claimingText: "Taking over...",
    },
    displaced: {
      title: "Session moved to another device",
      body: "A call session can only run on one device at a time. This session was taken over from here — taking it back will interrupt it on the other device and resume here.",
      cancelText: "Leave",
      claimText: "Take it back",
      claimingText: "Taking it back...",
    },
  };
