// app/components/dialog-prompt.js — webpack module 56211
// params: (e, t, n) = (module, exports, require)
"use strict";
t.DialogPrompt = function (e) {
  const t = (0, o.c)(27),
    {
      icon: n,
      title: c,
      children: u,
      actions: d,
      content: p,
      tone: f,
      titleRender: h,
      bodyRender: m,
      className: g,
    } = e,
    y = void 0 === f ? "default" : f,
    { circle: v, icon: b } = l[y];
  let S, _, x, w, E, T, k, C, I;
  return (
    t[0] !== g
      ? ((S = (0, i.cn)("flex flex-col items-center gap-4", g)),
        (t[0] = g),
        (t[1] = S))
      : (S = t[1]),
    t[2] !== n || t[3] !== v || t[4] !== b
      ? ((_ =
          n &&
          (0, r.jsx)("div", {
            className: (0, i.cn)(
              "flex items-center rounded-(--radius-disc) p-3.5",
              v,
            ),
            children: (0, r.jsx)(a.BrandIcon, {
              icon: n,
              className: (0, i.cn)("size-7", b),
              pixelClassName: (0, i.cn)("size-6", b),
            }),
          })),
        (t[2] = n),
        (t[3] = v),
        (t[4] = b),
        (t[5] = _))
      : (_ = t[5]),
    t[6] !== h
      ? ((x = h ?? (0, r.jsx)("h2", {})), (t[6] = h), (t[7] = x))
      : (x = t[7]),
    t[8] !== x || t[9] !== c
      ? ((w = (0, r.jsx)(s.Typography, {
          variant: "title-sm",
          render: x,
          children: c,
        })),
        (t[8] = x),
        (t[9] = c),
        (t[10] = w))
      : (w = t[10]),
    t[11] !== m || t[12] !== u
      ? ((E = (0, r.jsx)(s.Typography, {
          variant: "body",
          className: "text-muted-foreground",
          render: m,
          children: u,
        })),
        (t[11] = m),
        (t[12] = u),
        (t[13] = E))
      : (E = t[13]),
    t[14] !== w || t[15] !== E
      ? ((T = (0, r.jsxs)("div", {
          className: "flex w-full flex-col items-center gap-1 text-center",
          children: [w, E],
        })),
        (t[14] = w),
        (t[15] = E),
        (t[16] = T))
      : (T = t[16]),
    t[17] !== _ || t[18] !== T
      ? ((k = (0, r.jsxs)("div", {
          className: "flex w-full flex-col items-center gap-5",
          children: [_, T],
        })),
        (t[17] = _),
        (t[18] = T),
        (t[19] = k))
      : (k = t[19]),
    t[20] !== d
      ? ((C = (0, r.jsx)("div", {
          className:
            "grid w-full grid-cols-1 gap-2 sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none [&>*:first-child]:order-last sm:[&>*:first-child]:order-none",
          children: d,
        })),
        (t[20] = d),
        (t[21] = C))
      : (C = t[21]),
    t[22] !== p || t[23] !== S || t[24] !== k || t[25] !== C
      ? ((I = (0, r.jsxs)("div", {
          className: S,
          children: [k, p, C],
        })),
        (t[22] = p),
        (t[23] = S),
        (t[24] = k),
        (t[25] = C),
        (t[26] = I))
      : (I = t[26]),
    I
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(69893 /* app/components/brand-icon */),
  s = n(34483 /* app/components/typography-variants */),
  l = {
    default: { circle: "bg-accent", icon: "" },
    destructive: { circle: "bg-error/10", icon: "text-error" },
  };
