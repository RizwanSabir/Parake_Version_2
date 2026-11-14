// vendor/module-47021.js — webpack module 47021
// params: (e, t, n) = (module, exports, require)
"use strict";
t.DialogFooterButtons = function (e) {
  const t = (0, o.c)(11),
    {
      cancelLabel: n,
      onCancel: s,
      confirmLabel: l,
      onConfirm: c,
      confirmType: u,
      confirmDisabled: d,
    } = e,
    p = void 0 === n ? "Cancel" : n,
    f = void 0 === u ? "button" : u;
  let h, m, g;
  return (
    t[0] !== p || t[1] !== s
      ? ((h = s
          ? (0, r.jsx)(i.Button, {
              type: "button",
              variant: "secondary",
              onClick: s,
              children: p,
            })
          : (0, r.jsx)("div", { className: "hidden sm:block" })),
        (t[0] = p),
        (t[1] = s),
        (t[2] = h))
      : (h = t[2]),
    t[3] !== d || t[4] !== l || t[5] !== f || t[6] !== c
      ? ((m = (0, r.jsx)(i.Button, {
          type: f,
          onClick: c,
          disabled: d,
          children: l,
        })),
        (t[3] = d),
        (t[4] = l),
        (t[5] = f),
        (t[6] = c),
        (t[7] = m))
      : (m = t[7]),
    t[8] !== h || t[9] !== m
      ? ((g = (0, r.jsxs)(a.DialogFooter, { children: [h, m] })),
        (t[8] = h),
        (t[9] = m),
        (t[10] = g))
      : (g = t[10]),
    g
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(66244 /* app/components/button-variants */),
  a = n(98980 /* app/components/dialog */);
