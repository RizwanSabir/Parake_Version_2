// app/components/gold-sheen.js — webpack module 78856
// params: (e, t, n) = (module, exports, require)
"use strict";
t.GoldSheen = function (e) {
  const t = (0, o.c)(4),
    { className: n } = e;
  let a, s;
  return (
    t[0] !== n
      ? ((a = (0, i.cn)(
          "bg-gold-sheen pointer-events-none absolute inset-y-0 left-0 w-[22%] [animation:pk-sheen_7s_cubic-bezier(0.4,0,0.2,1)_infinite] motion-reduce:animate-none",
          n,
        )),
        (t[0] = n),
        (t[1] = a))
      : (a = t[1]),
    t[2] !== a
      ? ((s = (0, r.jsx)("span", {
          "aria-hidden": "true",
          className: a,
        })),
        (t[2] = a),
        (t[3] = s))
      : (s = t[3]),
    s
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */);
