// app/components/label-with-tooltip.js — webpack module 63110
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LabelWithTooltip = function (e) {
  const t = (0, o.c)(11),
    { children: n, tooltip: c, icon: u, className: d } = e;
  let p, f, h, m;
  return (
    t[0] !== d
      ? ((p = (0, a.cn)("flex items-center gap-1", d)), (t[0] = d), (t[1] = p))
      : (p = t[1]),
    t[2] !== n || t[3] !== p
      ? ((f = (0, r.jsx)(s.Label, { className: p, children: n })),
        (t[2] = n),
        (t[3] = p),
        (t[4] = f))
      : (f = t[4]),
    t[5] !== c
      ? ((h =
          c &&
          (0, r.jsxs)(l.Tooltip, {
            children: [
              (0, r.jsx)(l.TooltipTrigger, {
                render: (0, r.jsx)(i.Info, {
                  className: "text-muted-foreground h-3 w-3",
                }),
              }),
              (0, r.jsx)(l.TooltipContent, {
                className: "max-w-xs text-center",
                children: c,
              }),
            ],
          })),
        (t[5] = c),
        (t[6] = h))
      : (h = t[6]),
    t[7] !== u || t[8] !== f || t[9] !== h
      ? ((m = (0, r.jsxs)("div", {
          className: "flex items-center gap-1",
          children: [u, f, h],
        })),
        (t[7] = u),
        (t[8] = f),
        (t[9] = h),
        (t[10] = m))
      : (m = t[10]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(47856 /* app/components/label */),
  l = n(58055 /* app/components/tooltip */);
