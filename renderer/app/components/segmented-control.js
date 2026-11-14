// app/components/segmented-control.js — webpack module 69738
// params: (e, t, n) = (module, exports, require)
(t.SegmentedControl = function (e) {
  const t = (0, o.c)(10);
  let n, i, l;
  t[0] !== e
    ? (({ className: n, onGold: l, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = l))
    : ((n = t[1]), (i = t[2]), (l = t[3]));
  const c = void 0 !== l && l ? "bg-gold-ink/15" : "bg-muted dark:bg-muted/60";
  let u, d;
  return (
    t[4] !== n || t[5] !== c
      ? ((u = (0, s.cn)(
          "grid auto-cols-fr grid-flow-col gap-0.5 rounded-(--radius-surface) p-0.75",
          c,
          n,
        )),
        (t[4] = n),
        (t[5] = c),
        (t[6] = u))
      : (u = t[6]),
    t[7] !== i || t[8] !== u
      ? ((d = (0, r.jsx)(a.RadioGroup, {
          "data-slot": "segmented-control",
          className: u,
          ...i,
        })),
        (t[7] = i),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}),
  (t.SegmentedControlItem = function (e) {
    const t = (0, o.c)(10);
    let n, a, l;
    t[0] !== e
      ? (({ className: n, size: l, ...a } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = a),
        (t[3] = l))
      : ((n = t[1]), (a = t[2]), (l = t[3]));
    const c = void 0 === l ? "default" : l,
      u =
        "sm" === c
          ? "h-7"
          : "compact" === c
            ? "h-(--control-h-sm) md:h-(--control-h-md)"
            : "h-(--control-h-xl) md:h-(--control-h-md)";
    let d, p;
    return (
      t[4] !== n || t[5] !== u
        ? ((d = (0, s.cn)(
            "text-muted-foreground hover:text-foreground data-[checked]:bg-background data-[checked]:text-foreground dark:data-[checked]:bg-foreground/10 focus-ring flex cursor-pointer items-center justify-center rounded-(--radius-control) px-3 text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[checked]:shadow-(--shadow-raised)",
            u,
            n,
          )),
          (t[4] = n),
          (t[5] = u),
          (t[6] = d))
        : (d = t[6]),
      t[7] !== a || t[8] !== d
        ? ((p = (0, r.jsx)(i.Radio.Root, {
            "data-slot": "segmented-control-item",
            className: d,
            ...a,
          })),
          (t[7] = a),
          (t[8] = d),
          (t[9] = p))
        : (p = t[9]),
      p
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(10435 /* vendor/module-10435 */),
  a = n(87729 /* vendor/module-87729 */),
  s = n(29113 /* vendor/module-29113 */);
