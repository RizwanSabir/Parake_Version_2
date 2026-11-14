// vendor/module-58176.js — webpack module 58176
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useNow = function (e) {
  const t = (0, r.c)(3),
    [n, a] = (0, o.useState)(i);
  let s, l;
  return (
    t[0] !== e
      ? ((s = () => {
          if (null === e) return;
          a(new Date());
          const t = setInterval(() => a(new Date()), e);
          return () => clearInterval(t);
        }),
        (l = [e]),
        (t[0] = e),
        (t[1] = s),
        (t[2] = l))
      : ((s = t[1]), (l = t[2])),
    (0, o.useEffect)(s, l),
    n
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
function i() {
  return new Date();
}
