// app/components/end-session-dialog.js — webpack module 16107
// params: (e, t, n) = (module, exports, require)
t.EndSessionDialog = function (e) {
  const t = (0, o.c)(55),
    {
      isOpen: n,
      onOpenChange: f,
      endSession: h,
      isEndingSession: m,
      exitSession: g,
      isExitingSession: y,
      layout: v,
      timeLeft: b,
    } = e,
    S = void 0 !== y && y,
    _ = void 0 === v ? "split" : v,
    [x, w] = (0, a.useState)("end");
  if ("tiles" === _) {
    const e = m || S;
    let o, a, c, y, v;
    t[0] !== f ? ((o = () => f(!1)), (t[0] = f), (t[1] = o)) : (o = t[1]),
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(i.X, {})), (t[2] = a))
        : (a = t[2]),
      t[3] !== o
        ? ((c = (0, r.jsx)(l.Button, {
            variant: "ghost",
            size: "icon-lg",
            "aria-label": "Close",
            className: "absolute top-7 right-4 z-10",
            onClick: o,
            children: a,
          })),
          (t[3] = o),
          (t[4] = c))
        : (c = t[4]),
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (0, r.jsx)(u.DrawerTitle, {
            className: "mx-10 text-center",
            children: "Leave or end session?",
          })),
          (t[5] = y))
        : (y = t[5]),
      t[6] !== e || t[7] !== b
        ? ((v = (0, r.jsx)(p.ChoiceTile, {
            value: "leave",
            icon: i.LogOut,
            name: "Leave for now",
            figure: b,
            detail: "Timer keeps running",
            disabled: e,
          })),
          (t[6] = e),
          (t[7] = b),
          (t[8] = v))
        : (v = t[8]);
    const _ = b && "Stop now";
    let E, T;
    t[9] !== e || t[10] !== _
      ? ((E = (0, r.jsx)(p.ChoiceTile, {
          value: "end",
          icon: i.PhoneOff,
          name: "End session",
          figure: _,
          detail: "Timer stops",
          disabled: e,
        })),
        (t[9] = e),
        (t[10] = _),
        (t[11] = E))
      : (E = t[11]),
      t[12] !== x || t[13] !== v || t[14] !== E
        ? ((T = (0, r.jsxs)(p.ChoiceTiles, {
            ariaLabel: "Leave or end",
            value: x,
            onValueChange: w,
            children: [v, E],
          })),
          (t[12] = x),
          (t[13] = v),
          (t[14] = E),
          (t[15] = T))
        : (T = t[15]);
    const k =
      "leave" === x
        ? "Back to the dashboard. You can rejoin before time runs out."
        : `You’ll have ${s.SESSION_RECENTLY_ENDED_WINDOW_MINUTES} minutes to resume it for ${s.SESSION_CREDIT_COST} credits.`;
    let C, I, A, O, R, M;
    return (
      t[16] !== k
        ? ((C = (0, r.jsx)(d.Typography, {
            variant: "body",
            className: "text-muted-foreground text-center",
            children: k,
          })),
          (t[16] = k),
          (t[17] = C))
        : (C = t[17]),
      t[18] !== T || t[19] !== C
        ? ((I = (0, r.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [T, C],
          })),
          (t[18] = T),
          (t[19] = C),
          (t[20] = I))
        : (I = t[20]),
      t[21] !== h || t[22] !== g || t[23] !== m || t[24] !== S || t[25] !== x
        ? ((A =
            "leave" === x
              ? (0, r.jsx)(l.Button, {
                  variant: "secondary",
                  size: "xl",
                  className: "w-full",
                  onClick: g,
                  loading: S,
                  disabled: m,
                  children: "Leave for now",
                })
              : (0, r.jsx)(l.Button, {
                  variant: "destructive",
                  size: "xl",
                  className: "w-full",
                  onClick: h,
                  loading: m,
                  disabled: S,
                  children: "End session",
                })),
          (t[21] = h),
          (t[22] = g),
          (t[23] = m),
          (t[24] = S),
          (t[25] = x),
          (t[26] = A))
        : (A = t[26]),
      t[27] !== I || t[28] !== A
        ? ((O = (0, r.jsxs)("div", {
            className:
              "flex min-h-0 flex-col gap-6 overflow-y-auto p-4 pt-7 pb-8",
            children: [y, I, A],
          })),
          (t[27] = I),
          (t[28] = A),
          (t[29] = O))
        : (O = t[29]),
      t[30] !== O || t[31] !== c
        ? ((R = (0, r.jsxs)(u.DrawerContent, {
            initialFocus: !1,
            children: [c, O],
          })),
          (t[30] = O),
          (t[31] = c),
          (t[32] = R))
        : (R = t[32]),
      t[33] !== n || t[34] !== f || t[35] !== R
        ? ((M = (0, r.jsx)(u.Drawer, {
            open: n,
            onOpenChange: f,
            showSwipeHandle: !0,
            children: R,
          })),
          (t[33] = n),
          (t[34] = f),
          (t[35] = R),
          (t[36] = M))
        : (M = t[36]),
      M
    );
  }
  let E, T, k, C, I, A, O;
  return (
    t[37] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)(c.DialogHeader, {
          align: "center",
          className: "items-center",
          children: (0, r.jsx)(c.DialogTitle, {
            children: "Leave or end session?",
          }),
        })),
        (t[37] = E))
      : (E = t[37]),
    t[38] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = (0, r.jsx)(i.LogOut, { className: "size-5" })), (t[38] = T))
      : (T = t[38]),
    t[39] !== g || t[40] !== m || t[41] !== S
      ? ((k = (0, r.jsx)(p.ChoiceCard, {
          surface: "split",
          icon: T,
          title: "Leave for now",
          description:
            "Return to the dashboard while your timer continues. You can rejoin before time runs out.",
          action: (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "xl",
            className: "w-full",
            onClick: g,
            loading: S,
            disabled: m,
            children: "Leave for now",
          }),
        })),
        (t[39] = g),
        (t[40] = m),
        (t[41] = S),
        (t[42] = k))
      : (k = t[42]),
    t[43] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = (0, r.jsx)(i.PhoneOff, { className: "size-5" })), (t[43] = C))
      : (C = t[43]),
    t[44] !== h || t[45] !== m || t[46] !== S
      ? ((I = (0, r.jsx)(p.ChoiceCard, {
          surface: "split",
          icon: C,
          title: "End session",
          description: `End the session and stop the timer. You’ll have ${s.SESSION_RECENTLY_ENDED_WINDOW_MINUTES} minutes to resume it for ${s.SESSION_CREDIT_COST} credits.`,
          action: (0, r.jsx)(l.Button, {
            variant: "destructive",
            size: "xl",
            className: "w-full",
            loading: m,
            disabled: S,
            onClick: h,
            children: "End session",
          }),
        })),
        (t[44] = h),
        (t[45] = m),
        (t[46] = S),
        (t[47] = I))
      : (I = t[47]),
    t[48] !== k || t[49] !== I
      ? ((A = (0, r.jsxs)(c.DialogContent, {
          size: "lg",
          children: [E, (0, r.jsxs)(p.ChoiceSplit, { children: [k, I] })],
        })),
        (t[48] = k),
        (t[49] = I),
        (t[50] = A))
      : (A = t[50]),
    t[51] !== n || t[52] !== f || t[53] !== A
      ? ((O = (0, r.jsx)(c.Dialog, {
          open: n,
          onOpenChange: f,
          children: A,
        })),
        (t[51] = n),
        (t[52] = f),
        (t[53] = A),
        (t[54] = O))
      : (O = t[54]),
    O
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(46852 /* vendor/module-46852 */),
  l = n(66244 /* app/components/button-variants */),
  c = n(98980 /* app/components/dialog */),
  u = n(6207 /* app/components/drawer */),
  d = n(34483 /* app/components/typography-variants */),
  p = n(50993 /* app/components/choice-card */);
