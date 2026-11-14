// app/components/setting-row.js — webpack module 78390
// params: (e, t, n) = (module, exports, require)
"use strict";
t.SettingRow = function (e) {
  const t = (0, o.c)(30),
    {
      icon: n,
      title: l,
      titleAside: c,
      description: u,
      control: d,
      controlId: p,
      onDrill: f,
      drillValue: h,
      drillDisabled: m,
    } = e;
  let g, y, v, b, S, _;
  t[0] !== n
    ? ((g = (0, r.jsx)(n, {
        className: "text-muted-foreground size-4 shrink-0",
      })),
      (t[0] = n),
      (t[1] = g))
    : (g = t[1]),
    t[2] !== p
      ? ((y = p
          ? (0, r.jsx)("label", {
              htmlFor: p,
              className: "w-fit cursor-pointer",
            })
          : void 0),
        (t[2] = p),
        (t[3] = y))
      : (y = t[3]),
    t[4] !== y || t[5] !== l
      ? ((v = (0, r.jsx)(s.Typography, {
          variant: "meta",
          className: "font-medium",
          render: y,
          children: l,
        })),
        (t[4] = y),
        (t[5] = l),
        (t[6] = v))
      : (v = t[6]),
    t[7] !== v || t[8] !== c
      ? ((b = (0, r.jsxs)("div", {
          className: "flex items-center gap-1.5",
          children: [v, c],
        })),
        (t[7] = v),
        (t[8] = c),
        (t[9] = b))
      : (b = t[9]),
    t[10] !== u
      ? ((S = (0, r.jsx)(s.Typography, {
          variant: "meta",
          className: "text-muted-foreground",
          children: u,
        })),
        (t[10] = u),
        (t[11] = S))
      : (S = t[11]),
    t[12] !== b || t[13] !== S
      ? ((_ = (0, r.jsxs)("div", {
          className: "flex min-w-0 flex-1 flex-col gap-1.5",
          children: [b, S],
        })),
        (t[12] = b),
        (t[13] = S),
        (t[14] = _))
      : (_ = t[14]);
  const x = f && "max-sm:hidden";
  let w, E, T, k;
  return (
    t[15] !== x
      ? ((w = (0, a.cn)("shrink-0", x)), (t[15] = x), (t[16] = w))
      : (w = t[16]),
    t[17] !== d || t[18] !== w
      ? ((E = (0, r.jsx)("div", { className: w, children: d })),
        (t[17] = d),
        (t[18] = w),
        (t[19] = E))
      : (E = t[19]),
    t[20] !== m || t[21] !== h || t[22] !== f || t[23] !== l
      ? ((T =
          f &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className:
                  "text-muted-foreground flex min-w-0 items-center gap-1 sm:hidden",
                children: [
                  h &&
                    (0, r.jsx)(s.Typography, {
                      className: "min-w-0 truncate",
                      children: h,
                    }),
                  (0, r.jsx)(i.ChevronRight, {
                    className: "size-4 shrink-0",
                  }),
                ],
              }),
              (0, r.jsx)("button", {
                type: "button",
                onClick: f,
                disabled: m,
                className:
                  "focus-ring absolute inset-0 rounded-md outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:hidden",
                children: (0, r.jsx)("span", {
                  className: "sr-only",
                  children: h ? `${l}, ${h}` : l,
                }),
              }),
            ],
          })),
        (t[20] = m),
        (t[21] = h),
        (t[22] = f),
        (t[23] = l),
        (t[24] = T))
      : (T = t[24]),
    t[25] !== g || t[26] !== T || t[27] !== _ || t[28] !== E
      ? ((k = (0, r.jsxs)("div", {
          className: "relative flex items-center gap-3",
          children: [g, _, E, T],
        })),
        (t[25] = g),
        (t[26] = T),
        (t[27] = _),
        (t[28] = E),
        (t[29] = k))
      : (k = t[29]),
    k
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(34483 /* app/components/typography-variants */);
