// app/components/session-timer.js — webpack module 30590
// params: (e, t, n) = (module, exports, require)
"use strict";
t.SessionTimer = function (e) {
  const t = (0, o.c)(44),
    {
      callSession: n,
      autoExtendStatus: h,
      isExtendingSession: m,
      autoExtendSetting: g,
    } = e;
  let y;
  t[0] !== h || t[1] !== n
    ? ((y = {
        callSession: n,
        autoExtendStatus: h,
        onExtended: a.toast.success,
      }),
      (t[0] = h),
      (t[1] = n),
      (t[2] = y))
    : (y = t[2]);
  const {
    clock: v,
    tooltip: b,
    isPromptInPlay: S,
    isPromptOpen: _,
    closePrompt: x,
    togglePrompt: w,
    holdPrompt: E,
  } = (0, d.useLiveSessionTimer)(y);
  let T, k;
  if (
    (t[3] !== x || t[4] !== _
      ? ((T = () => {
          if (_)
            return (
              window.addEventListener("blur", x),
              () => window.removeEventListener("blur", x)
            );
        }),
        (k = [_, x]),
        (t[3] = x),
        (t[4] = _),
        (t[5] = T),
        (t[6] = k))
      : ((T = t[5]), (k = t[6])),
    (0, i.useEffect)(T, k),
    !v)
  )
    return null;
  const C = !S,
    I = !S && "cursor-default opacity-70 hover:bg-transparent";
  let A, O, R, M;
  t[7] !== I
    ? ((A = (0, p.cn)("flex h-8 flex-row items-center", I)),
      (t[7] = I),
      (t[8] = A))
    : (A = t[8]),
    t[9] !== S || t[10] !== w
      ? ((O = () => {
          S && w();
        }),
        (t[9] = S),
        (t[10] = w),
        (t[11] = O))
      : (O = t[11]),
    t[12] !== n.isFreeSession || t[13] !== v || t[14] !== m
      ? ((R = (0, r.jsx)("span", {
          className: "flex items-center gap-1.5",
          children: (0, r.jsx)(l.SessionTimerFace, {
            clock: v,
            isFreeSession: n.isFreeSession,
            isExtendingSession: m,
          }),
        })),
        (t[12] = n.isFreeSession),
        (t[13] = v),
        (t[14] = m),
        (t[15] = R))
      : (R = t[15]),
    t[16] !== C || t[17] !== A || t[18] !== O || t[19] !== R
      ? ((M = (0, r.jsx)(f.LiveSessionButton, {
          transparent: !0,
          "aria-disabled": C,
          className: A,
          onClick: O,
          children: R,
        })),
        (t[16] = C),
        (t[17] = A),
        (t[18] = O),
        (t[19] = R),
        (t[20] = M))
      : (M = t[20]);
  const P = M;
  if (_ && g) {
    let e, n, o, i, a;
    return (
      t[21] !== x
        ? ((e = (e) => {
            e || x();
          }),
          (t[21] = x),
          (t[22] = e))
        : (e = t[22]),
      t[23] !== P
        ? ((n = (0, r.jsx)(c.PopoverTrigger, { render: P })),
          (t[23] = P),
          (t[24] = n))
        : (n = t[24]),
      t[25] !== g.isUpdating ||
      t[26] !== g.onChange ||
      t[27] !== g.value ||
      t[28] !== x
        ? ((o = (0, r.jsx)(s.AutoExtendSwitchCard, {
            isOn: g.value,
            onChange: g.onChange,
            isUpdating: g.isUpdating,
            onClose: x,
          })),
          (t[25] = g.isUpdating),
          (t[26] = g.onChange),
          (t[27] = g.value),
          (t[28] = x),
          (t[29] = o))
        : (o = t[29]),
      t[30] !== E || t[31] !== o
        ? ((i = (0, r.jsx)(c.PopoverContent, {
            side: "bottom",
            className: "z-30 w-80 rounded-2xl",
            initialFocus: !1,
            onPointerEnter: E,
            children: o,
          })),
          (t[30] = E),
          (t[31] = o),
          (t[32] = i))
        : (i = t[32]),
      t[33] !== e || t[34] !== n || t[35] !== i
        ? ((a = (0, r.jsxs)(c.Popover, {
            open: !0,
            onOpenChange: e,
            children: [n, i],
          })),
          (t[33] = e),
          (t[34] = n),
          (t[35] = i),
          (t[36] = a))
        : (a = t[36]),
      a
    );
  }
  let N, D, j;
  return (
    t[37] !== P
      ? ((N = (0, r.jsx)(u.TooltipTrigger, { render: P })),
        (t[37] = P),
        (t[38] = N))
      : (N = t[38]),
    t[39] !== b
      ? ((D =
          null !== b &&
          (0, r.jsx)(u.TooltipContent, {
            className: "z-20 max-w-3xs text-center",
            children: b,
          })),
        (t[39] = b),
        (t[40] = D))
      : (D = t[40]),
    t[41] !== N || t[42] !== D
      ? ((j = (0, r.jsxs)(u.Tooltip, { children: [N, D] })),
        (t[41] = N),
        (t[42] = D),
        (t[43] = j))
      : (j = t[43]),
    j
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(21221 /* app/components/auto-extend-switch-card */),
  l = n(85090 /* app/components/session-timer-face */),
  c = n(35973 /* app/components/popover */),
  u = n(58055 /* app/components/tooltip */),
  d = n(55406 /* vendor/module-55406 */),
  p = n(29113 /* vendor/module-29113 */),
  f = n(11575 /* app/components/live-session-button */);
