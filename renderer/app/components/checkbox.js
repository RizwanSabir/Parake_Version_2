// app/components/checkbox.js — webpack module 64671
// params: (e, t, n) = (module, exports, require)
t.Checkbox = function (e) {
  const t = (0, o.c)(10);
  let n, l, c, u, d, p;
  return (
    t[0] !== e
      ? (({ className: n, ...l } = e), (t[0] = e), (t[1] = n), (t[2] = l))
      : ((n = t[1]), (l = t[2])),
    t[3] !== n
      ? ((c = (0, s.cn)(
          "border-input dark:bg-input/30 focus-ring aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error peer data-[checked]:border-foreground data-[checked]:bg-foreground data-[checked]:text-background data-[indeterminate]:border-foreground data-[indeterminate]:bg-foreground data-[indeterminate]:text-background dark:data-[checked]:bg-foreground dark:data-[indeterminate]:bg-foreground inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border shadow-(--shadow-control) transition-[box-shadow,border-color] outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
          n,
        )),
        (t[3] = n),
        (t[4] = c))
      : (c = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = (0, r.jsx)(i.Checkbox.Indicator, {
          "data-slot": "checkbox-indicator",
          className:
            "flex items-center justify-center text-current transition-none data-[indeterminate]:hidden",
          children: (0, r.jsx)(a.CheckIcon, {
            className: "size-3.5",
          }),
        })),
        (t[5] = u))
      : (u = t[5]),
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = (0, r.jsx)(i.Checkbox.Indicator, {
          "data-slot": "checkbox-indicator",
          className:
            "hidden items-center justify-center text-current transition-none data-[indeterminate]:flex",
          children: (0, r.jsx)(a.MinusIcon, {
            className: "size-3.5",
          }),
        })),
        (t[6] = d))
      : (d = t[6]),
    t[7] !== l || t[8] !== c
      ? ((p = (0, r.jsxs)(i.Checkbox.Root, {
          "data-slot": "checkbox",
          className: c,
          ...l,
          children: [u, d],
        })),
        (t[7] = l),
        (t[8] = c),
        (t[9] = p))
      : (p = t[9]),
    p
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(76893 /* vendor/module-76893 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(29113 /* vendor/module-29113 */);
