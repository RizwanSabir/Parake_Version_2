// app/components/notification.js — webpack module 50341
// params: (e, t, n) = (module, exports, require)
"use strict";
t.Notification = function (e) {
  const t = (0, o.c)(29),
    {
      title: n,
      body: d,
      primaryAction: p,
      secondaryAction: f,
      footer: h,
      duration: m,
      onClose: g,
    } = e,
    y = void 0 === m ? 1e4 : m,
    [v, b] = (0, a.useState)(!1);
  let S, _;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = () => b(!0)), (_ = () => b(!1)), (t[0] = S), (t[1] = _))
    : ((S = t[0]), (_ = t[1]));
  const x = h ? "items-start" : "items-center";
  let w, E, T, k, C, I, A, O, R, M;
  return (
    t[2] !== x
      ? ((w = (0, l.cn)("flex flex-row gap-4", x)), (t[2] = x), (t[3] = w))
      : (w = t[3]),
    t[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)(c.Logo, { square: !0 })), (t[4] = E))
      : (E = t[4]),
    t[5] !== n
      ? ((T = (0, r.jsx)(s.Typography, {
          className: "text-foreground font-medium",
          children: n,
        })),
        (t[5] = n),
        (t[6] = T))
      : (T = t[6]),
    t[7] !== d
      ? ((k =
          d &&
          (0, r.jsx)(s.Typography, {
            className: "text-muted-foreground text-xs leading-4",
            children: d,
          })),
        (t[7] = d),
        (t[8] = k))
      : (k = t[8]),
    t[9] !== T || t[10] !== k
      ? ((C = (0, r.jsxs)("div", {
          className: "flex min-w-0 flex-1 flex-row items-center gap-2",
          children: [
            E,
            (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col",
              children: [T, k],
            }),
          ],
        })),
        (t[9] = T),
        (t[10] = k),
        (t[11] = C))
      : (C = t[11]),
    t[12] !== g
      ? ((I =
          g &&
          (0, r.jsx)(u.Button, {
            variant: "ghost",
            size: "icon",
            className: "h-6 w-6",
            onClick: g,
            "aria-label": "Dismiss",
            children: (0, r.jsx)(i.X, { className: "h-4 w-4" }),
          })),
        (t[12] = g),
        (t[13] = I))
      : (I = t[13]),
    t[14] !== p || t[15] !== f || t[16] !== I
      ? ((A = (0, r.jsxs)("div", {
          className: "flex shrink-0 flex-row items-center gap-2",
          children: [p, f, I],
        })),
        (t[14] = p),
        (t[15] = f),
        (t[16] = I),
        (t[17] = A))
      : (A = t[17]),
    t[18] !== A || t[19] !== w || t[20] !== C
      ? ((O = (0, r.jsxs)("div", { className: w, children: [C, A] })),
        (t[18] = A),
        (t[19] = w),
        (t[20] = C),
        (t[21] = O))
      : (O = t[21]),
    t[22] !== y || t[23] !== v
      ? ((R =
          Number.isFinite(y) &&
          (0, r.jsx)("div", {
            className: "bg-foreground/10 absolute right-0 bottom-0 left-0 h-1",
            children: (0, r.jsx)("div", {
              className: "bg-primary h-full",
              style: {
                animation: `notification-progress ${y / 1e3}s linear forwards`,
                animationPlayState: v ? "paused" : "running",
              },
            }),
          })),
        (t[22] = y),
        (t[23] = v),
        (t[24] = R))
      : (R = t[24]),
    t[25] !== h || t[26] !== O || t[27] !== R
      ? ((M = (0, r.jsxs)("div", {
          className:
            "bg-popover rounded-window relative flex w-full max-w-full flex-col gap-3 overflow-hidden border p-3",
          onMouseEnter: S,
          onMouseLeave: _,
          children: [O, h, R],
        })),
        (t[25] = h),
        (t[26] = O),
        (t[27] = R),
        (t[28] = M))
      : (M = t[28]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(34483 /* app/components/typography-variants */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(55233 /* app/components/logo */),
  u = n(99683 /* vendor/module-99683 */);
