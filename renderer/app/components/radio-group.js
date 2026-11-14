// app/components/radio-group.js — webpack module 8237
// params: (e, t, n) = (module, exports, require)
(t.RadioGroup = function (e) {
  const t = (0, o.c)(8);
  let n, i, s, l;
  return (
    t[0] !== e
      ? (({ className: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = i))
      : ((n = t[1]), (i = t[2])),
    t[3] !== n
      ? ((s = (0, c.cn)("grid gap-3", n)), (t[3] = n), (t[4] = s))
      : (s = t[4]),
    t[5] !== i || t[6] !== s
      ? ((l = (0, r.jsx)(a.RadioGroup, {
          "data-slot": "radio-group",
          className: s,
          ...i,
        })),
        (t[5] = i),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}),
  (t.RadioGroupItem = function (e) {
    const t = (0, o.c)(11);
    let n, a, s, d, p, f;
    return (
      t[0] !== e
        ? (({ className: n, variant: s, ...a } = e),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = s))
        : ((n = t[1]), (a = t[2]), (s = t[3])),
      t[4] !== n || t[5] !== s
        ? ((d = (0, c.cn)(u({ variant: s }), n)),
          (t[4] = n),
          (t[5] = s),
          (t[6] = d))
        : (d = t[6]),
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, r.jsx)(i.Radio.Indicator, {
            "data-slot": "radio-group-indicator",
            className: "relative flex items-center justify-center",
            children: (0, r.jsx)(l.CircleIcon, {
              className:
                "fill-foreground absolute top-1/2 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2",
            }),
          })),
          (t[7] = p))
        : (p = t[7]),
      t[8] !== a || t[9] !== d
        ? ((f = (0, r.jsx)(i.Radio.Root, {
            "data-slot": "radio-group-item",
            className: d,
            ...a,
            children: p,
          })),
          (t[8] = a),
          (t[9] = d),
          (t[10] = f))
        : (f = t[10]),
      f
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(10435 /* vendor/module-10435 */),
  a = n(87729 /* vendor/module-87729 */),
  s = n(1279 /* vendor/module-1279 */),
  l = n(87952 /* vendor/module-87952 */),
  c = n(29113 /* vendor/module-29113 */),
  u = (0, s.cva)(
    "flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border shadow-(--shadow-control) transition-[color,box-shadow,border-color] outline-none focus-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/20 dark:bg-input/30 dark:aria-invalid:ring-error/40",
    {
      variants: {
        variant: {
          default: "border-input text-foreground dark:border-white/20",
          brand:
            "border-primary text-primary [&_[data-slot=radio-group-indicator]>svg]:fill-primary",
          destructive:
            "border-error text-error [&_[data-slot=radio-group-indicator]>svg]:fill-error",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );
