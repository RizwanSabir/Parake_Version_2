// vendor/module-4274.js — webpack module 4274
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TopBarIconButton = function (e) {
  const t = (0, o.c)(11),
    {
      icon: n,
      tooltip: s,
      ariaLabel: l,
      variant: c,
      onClick: u,
      onPointerDown: d,
    } = e,
    p = void 0 === c ? "outline" : c;
  let f, h, m;
  return (
    t[0] !== l || t[1] !== n || t[2] !== u || t[3] !== d || t[4] !== p
      ? ((f = (0, r.jsx)(i.TooltipTrigger, {
          render: (0, r.jsx)(a.Button, {
            "aria-label": l,
            variant: p,
            size: "icon",
            className: "h-8 w-8",
            onClick: u,
            onPointerDown: d,
            children: n,
          }),
        })),
        (t[0] = l),
        (t[1] = n),
        (t[2] = u),
        (t[3] = d),
        (t[4] = p),
        (t[5] = f))
      : (f = t[5]),
    t[6] !== s
      ? ((h = (0, r.jsx)(i.TooltipContent, { children: s })),
        (t[6] = s),
        (t[7] = h))
      : (h = t[7]),
    t[8] !== f || t[9] !== h
      ? ((m = (0, r.jsxs)(i.Tooltip, { children: [f, h] })),
        (t[8] = f),
        (t[9] = h),
        (t[10] = m))
      : (m = t[10]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(58055 /* app/components/tooltip */),
  a = n(99683 /* vendor/module-99683 */);
