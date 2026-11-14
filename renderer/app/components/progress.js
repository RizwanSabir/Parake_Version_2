// app/components/progress.js — webpack module 35881
// params: (e, t, n) = (module, exports, require)
t.Progress = function (e) {
  const t = (0, o.c)(9);
  let n, s, l, c, u;
  return (
    t[0] !== e
      ? (({ className: n, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = s))
      : ((n = t[1]), (s = t[2])),
    t[3] !== n
      ? ((l = (0, a.cn)("w-full", n)), (t[3] = n), (t[4] = l))
      : (l = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((c = (0, r.jsx)(i.Progress.Track, {
          "data-slot": "progress-track",
          className:
            "bg-foreground/10 relative h-1.5 w-full overflow-hidden rounded-full",
          children: (0, r.jsx)(i.Progress.Indicator, {
            "data-slot": "progress-indicator",
            className:
              "bg-foreground h-full rounded-full transition-[width] duration-(--duration-slow) ease-(--ease-out-strong) motion-reduce:transition-none",
          }),
        })),
        (t[5] = c))
      : (c = t[5]),
    t[6] !== s || t[7] !== l
      ? ((u = (0, r.jsx)(i.Progress.Root, {
          "data-slot": "progress",
          className: l,
          ...s,
          children: c,
        })),
        (t[6] = s),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29219 /* vendor/module-29219 */),
  a = n(29113 /* vendor/module-29113 */);
