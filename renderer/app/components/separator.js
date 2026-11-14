// app/components/separator.js — webpack module 68571
// params: (e, t, n) = (module, exports, require)
t.Separator = function (e) {
  const t = (0, o.c)(10);
  let n, s, l;
  t[0] !== e
    ? (({ className: n, orientation: l, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = l))
    : ((n = t[1]), (s = t[2]), (l = t[3]));
  const c = void 0 === l ? "horizontal" : l;
  let u, d;
  return (
    t[4] !== n
      ? ((u = (0, a.cn)(
          "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
          n,
        )),
        (t[4] = n),
        (t[5] = u))
      : (u = t[5]),
    t[6] !== c || t[7] !== s || t[8] !== u
      ? ((d = (0, r.jsx)(i.Separator, {
          "data-slot": "separator",
          orientation: c,
          className: u,
          ...s,
        })),
        (t[6] = c),
        (t[7] = s),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(11903 /* vendor/module-11903 */),
  a = n(29113 /* vendor/module-29113 */);
