// app/components/step-footer.js — webpack module 51372
// params: (e, t, n) = (module, exports, require)
"use strict";
t.StepFooter = function (e) {
  const t = (0, o.c)(4),
    { nextDisabled: n, nextLabel: a, nextTooltip: s } = e,
    l = n ? s : void 0;
  let c;
  return (
    t[0] !== n || t[1] !== a || t[2] !== l
      ? ((c = (0, r.jsx)("div", {
          className: "flex w-full",
          children: (0, r.jsx)(i.ButtonWithTooltip, {
            type: "submit",
            disabled: n,
            className: "w-full flex-row items-center gap-1",
            tooltip: l,
            children: a,
          }),
        })),
        (t[0] = n),
        (t[1] = a),
        (t[2] = l),
        (t[3] = c))
      : (c = t[3]),
    c
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(47276 /* vendor/module-47276 */);
