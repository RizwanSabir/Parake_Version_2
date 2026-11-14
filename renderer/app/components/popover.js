// app/components/popover.js — webpack module 35973
// params: (e, t, n) = (module, exports, require)
(t.Popover = function (e) {
  const t = (0, o.c)(4);
  let n, a;
  return (
    t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
    t[2] !== n
      ? ((a = (0, r.jsx)(i.Popover.Root, {
          "data-slot": "popover",
          ...n,
        })),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}),
  (t.PopoverTrigger = function (e) {
    const t = (0, o.c)(4);
    let n, a;
    return (
      t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
      t[2] !== n
        ? ((a = (0, r.jsx)(i.Popover.Trigger, {
            "data-slot": "popover-trigger",
            ...n,
          })),
          (t[2] = n),
          (t[3] = a))
        : (a = t[3]),
      a
    );
  }),
  (t.PopoverContent = function (e) {
    const t = (0, o.c)(22);
    let n, s, l, c;
    t[0] !== e
      ? (({ className: n, align: l, sideOffset: c, ...s } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = s),
        (t[3] = l),
        (t[4] = c))
      : ((n = t[1]), (s = t[2]), (l = t[3]), (c = t[4]));
    const u = void 0 === l ? "center" : l,
      d = void 0 === c ? 4 : c;
    let p, f, h, m, g, y, v;
    return (
      t[5] !== s
        ? (({ alignOffset: p, side: m, anchor: f, ...h } = s),
          (t[5] = s),
          (t[6] = p),
          (t[7] = f),
          (t[8] = h),
          (t[9] = m))
        : ((p = t[6]), (f = t[7]), (h = t[8]), (m = t[9])),
      t[10] !== n
        ? ((g = (0, a.cn)(
            "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--transform-origin) rounded-(--radius-popup) border p-4 shadow-(--shadow-popup) duration-(--duration-fast) ease-(--ease-out-strong) outline-none data-[closed]:duration-(--duration-exit-fast)",
            n,
          )),
          (t[10] = n),
          (t[11] = g))
        : (g = t[11]),
      t[12] !== h || t[13] !== g
        ? ((y = (0, r.jsx)(i.Popover.Popup, {
            "data-slot": "popover-content",
            className: g,
            ...h,
          })),
          (t[12] = h),
          (t[13] = g),
          (t[14] = y))
        : (y = t[14]),
      t[15] !== u ||
      t[16] !== p ||
      t[17] !== f ||
      t[18] !== m ||
      t[19] !== d ||
      t[20] !== y
        ? ((v = (0, r.jsx)(i.Popover.Portal, {
            children: (0, r.jsx)(i.Popover.Positioner, {
              align: u,
              alignOffset: p,
              side: m,
              sideOffset: d,
              anchor: f,
              className: "isolate z-50",
              children: y,
            }),
          })),
          (t[15] = u),
          (t[16] = p),
          (t[17] = f),
          (t[18] = m),
          (t[19] = d),
          (t[20] = y),
          (t[21] = v))
        : (v = t[21]),
      v
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(54097 /* vendor/module-54097 */),
  a = n(29113 /* vendor/module-29113 */);
