// app/components/skeleton.js — webpack module 81817
// params: (e, t, n) = (module, exports, require)
"use strict";
t.Skeleton = function (e) {
  const t = (0, o.c)(11);
  let n, a, s, l;
  t[0] !== e
    ? (({ className: n, onTint: a, soft: l, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = a),
      (t[3] = s),
      (t[4] = l))
    : ((n = t[1]), (a = t[2]), (s = t[3]), (l = t[4]));
  const c = a
    ? l
      ? "bg-background/35"
      : "bg-background/60"
    : l
      ? "bg-accent/60"
      : "bg-accent";
  let u, d;
  return (
    t[5] !== n || t[6] !== c
      ? ((u = (0, i.cn)("animate-pulse rounded-(--radius-item)", c, n)),
        (t[5] = n),
        (t[6] = c),
        (t[7] = u))
      : (u = t[7]),
    t[8] !== s || t[9] !== u
      ? ((d = (0, r.jsx)("div", {
          "data-slot": "skeleton",
          className: u,
          ...s,
        })),
        (t[8] = s),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */);
