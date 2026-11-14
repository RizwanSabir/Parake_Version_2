// app/components/checkbox-pill-label.js — webpack module 82104
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CheckboxPillLabel = function (e) {
  const t = (0, o.c)(17),
    {
      checked: n,
      onCheckedChange: c,
      children: u,
      tooltip: d,
      disabled: p,
    } = e,
    f = void 0 !== p && p,
    h = f ? "cursor-not-allowed opacity-70" : "cursor-pointer";
  let m, g, y, v, b, S;
  return (
    t[0] !== h
      ? ((m = (0, a.cn)("inline-flex items-center gap-1.5", h)),
        (t[0] = h),
        (t[1] = m))
      : (m = t[1]),
    t[2] !== c
      ? ((g = (e) => c(!0 === e)), (t[2] = c), (t[3] = g))
      : (g = t[3]),
    t[4] !== n || t[5] !== f || t[6] !== g
      ? ((y = (0, r.jsx)(s.Checkbox, {
          checked: n,
          disabled: f,
          onCheckedChange: g,
        })),
        (t[4] = n),
        (t[5] = f),
        (t[6] = g),
        (t[7] = y))
      : (y = t[7]),
    t[8] !== u || t[9] !== m || t[10] !== y
      ? ((v = (0, r.jsxs)("label", {
          className: m,
          children: [y, u],
        })),
        (t[8] = u),
        (t[9] = m),
        (t[10] = y),
        (t[11] = v))
      : (v = t[11]),
    t[12] !== d
      ? ((b =
          d &&
          (0, r.jsxs)(l.Tooltip, {
            children: [
              (0, r.jsx)(l.TooltipTrigger, {
                render: (0, r.jsx)(i.Info, {
                  className: "text-muted-foreground h-3 w-3",
                }),
              }),
              (0, r.jsx)(l.TooltipContent, {
                className: "max-w-xs text-center",
                children: d,
              }),
            ],
          })),
        (t[12] = d),
        (t[13] = b))
      : (b = t[13]),
    t[14] !== v || t[15] !== b
      ? ((S = (0, r.jsxs)("span", {
          className:
            "inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium",
          children: [v, b],
        })),
        (t[14] = v),
        (t[15] = b),
        (t[16] = S))
      : (S = t[16]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(64671 /* app/components/checkbox */),
  l = n(58055 /* app/components/tooltip */);
