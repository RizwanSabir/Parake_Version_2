// app/components/slider.js — webpack module 58579
// params: (e, t, n) = (module, exports, require)
t.Slider = function (e) {
  const t = (0, o.c)(25);
  let n, s, l, c, u, d, p, f;
  t[0] !== e
    ? (({
        className: s,
        children: n,
        thumbLabel: u,
        getAriaValueText: l,
        ...c
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u))
    : ((n = t[1]), (s = t[2]), (l = t[3]), (c = t[4]), (u = t[5])),
    t[6] !== s
      ? ((d = (0, a.cn)(
          "relative w-full touch-none select-none data-disabled:opacity-50",
          s,
        )),
        (t[6] = s),
        (t[7] = d))
      : (d = t[7]),
    t[8] !== n
      ? ((p =
          n ??
          (0, r.jsx)(i.Slider.Indicator, {
            className: "bg-foreground absolute h-full",
          })),
        (t[8] = n),
        (t[9] = p))
      : (p = t[9]),
    t[10] !== p
      ? ((f = (0, r.jsx)(i.Slider.Track, {
          "data-slot": "slider-track",
          className:
            "bg-muted relative h-1.5 w-full grow overflow-hidden rounded-full",
          children: p,
        })),
        (t[10] = p),
        (t[11] = f))
      : (f = t[11]);
  const h = c["aria-label"];
  let m, g, y, v;
  return (
    t[12] !== u
      ? ((m =
          null != u &&
          (0, r.jsx)("span", {
            className:
              "bg-foreground text-background absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md px-1.5 py-1 text-xs leading-none font-semibold whitespace-nowrap tabular-nums",
            children: u,
          })),
        (t[12] = u),
        (t[13] = m))
      : (m = t[13]),
    t[14] !== l || t[15] !== h || t[16] !== m
      ? ((g = (0, r.jsx)(i.Slider.Thumb, {
          "data-slot": "slider-thumb",
          "aria-label": h,
          getAriaValueText: l,
          className:
            "bg-foreground focus-ring block size-[18px] rounded-full shadow-md transition-shadow outline-none",
          children: m,
        })),
        (t[14] = l),
        (t[15] = h),
        (t[16] = m),
        (t[17] = g))
      : (g = t[17]),
    t[18] !== f || t[19] !== g
      ? ((y = (0, r.jsxs)(i.Slider.Control, {
          className:
            "flex h-11 w-full cursor-pointer items-center data-disabled:cursor-not-allowed",
          children: [f, g],
        })),
        (t[18] = f),
        (t[19] = g),
        (t[20] = y))
      : (y = t[20]),
    t[21] !== c || t[22] !== d || t[23] !== y
      ? ((v = (0, r.jsx)(i.Slider.Root, {
          "data-slot": "slider",
          className: d,
          ...c,
          children: y,
        })),
        (t[21] = c),
        (t[22] = d),
        (t[23] = y),
        (t[24] = v))
      : (v = t[24]),
    v
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(2121 /* vendor/module-2121 */),
  a = n(29113 /* vendor/module-29113 */);
