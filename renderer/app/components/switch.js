// app/components/switch.js — webpack module 88364
// params: (e, t, n) = (module, exports, require)
t.Switch = function (e) {
  const t = (0, o.c)(15);
  let n, s, l;
  t[0] !== e
    ? (({ className: n, size: l, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l))
    : ((n = t[1]), (s = t[2]), (l = t[3]));
  const c = void 0 === l ? "default" : l,
    u = "lg" === c ? "h-7 w-12" : "h-[1.15rem] w-8";
  let d;
  t[4] !== n || t[5] !== u
    ? ((d = (0, a.cn)(
        u,
        "peer data-[unchecked]:bg-input focus-ring dark:data-[unchecked]:bg-muted-foreground/30 data-[checked]:bg-foreground inline-flex shrink-0 cursor-pointer items-center rounded-(--radius-switch) border border-transparent shadow-(--shadow-control) transition-[background-color,border-color,box-shadow] outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
        n,
      )),
      (t[4] = n),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  const p = "lg" === c ? "size-6" : "size-4";
  let f, h, m;
  return (
    t[7] !== p
      ? ((f = (0, a.cn)(
          p,
          "bg-background dark:data-[unchecked]:bg-foreground pointer-events-none block rounded-(--radius-switch) ring-0 transition-transform data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0",
        )),
        (t[7] = p),
        (t[8] = f))
      : (f = t[8]),
    t[9] !== f
      ? ((h = (0, r.jsx)(i.Switch.Thumb, {
          "data-slot": "switch-thumb",
          className: f,
        })),
        (t[9] = f),
        (t[10] = h))
      : (h = t[10]),
    t[11] !== s || t[12] !== d || t[13] !== h
      ? ((m = (0, r.jsx)(i.Switch.Root, {
          "data-slot": "switch",
          className: d,
          ...s,
          children: h,
        })),
        (t[11] = s),
        (t[12] = d),
        (t[13] = h),
        (t[14] = m))
      : (m = t[14]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(39760 /* vendor/module-39760 */),
  a = n(29113 /* vendor/module-29113 */);
