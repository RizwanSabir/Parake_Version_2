// vendor/module-47276.js — webpack module 47276
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ButtonWithTooltip = function (e) {
  const t = (0, o.c)(22);
  let n, c, u, d, p, f, h;
  t[0] !== e
    ? (({
        tooltip: p,
        tooltipOpen: f,
        onTooltipOpenChange: d,
        disabled: u,
        className: c,
        ...n
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = c),
      (t[3] = u),
      (t[4] = d),
      (t[5] = p),
      (t[6] = f))
    : ((n = t[1]), (c = t[2]), (u = t[3]), (d = t[4]), (p = t[5]), (f = t[6])),
    t[7] !== n || t[8] !== c || t[9] !== u
      ? ((h = (0, r.jsx)(a.Button, {
          disabled: u,
          className: c,
          ...n,
        })),
        (t[7] = n),
        (t[8] = c),
        (t[9] = u),
        (t[10] = h))
      : (h = t[10]);
  const m = h;
  if (!p) return m;
  let g, y, v;
  return (
    t[11] !== m || t[12] !== c || t[13] !== u
      ? ((g = (0, r.jsx)(s.TooltipTrigger, {
          render: u
            ? (0, r.jsx)("span", {
                className: (0, i.cn)("block", c),
                onClick: l,
                children: m,
              })
            : m,
        })),
        (t[11] = m),
        (t[12] = c),
        (t[13] = u),
        (t[14] = g))
      : (g = t[14]),
    t[15] !== p
      ? ((y = (0, r.jsx)(s.TooltipContent, {
          className: "max-w-xs text-center",
          children: p,
        })),
        (t[15] = p),
        (t[16] = y))
      : (y = t[16]),
    t[17] !== d || t[18] !== g || t[19] !== y || t[20] !== f
      ? ((v = (0, r.jsxs)(s.Tooltip, {
          open: f,
          onOpenChange: d,
          children: [g, y],
        })),
        (t[17] = d),
        (t[18] = g),
        (t[19] = y),
        (t[20] = f),
        (t[21] = v))
      : (v = t[21]),
    v
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(66244 /* app/components/button-variants */),
  s = n(58055 /* app/components/tooltip */);
function l(e) {
  return e.stopPropagation();
}
