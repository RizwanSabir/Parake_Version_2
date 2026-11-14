// vendor/module-50885.js — webpack module 50885
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useDebounce = function (e, t) {
  const n = (0, r.c)(4),
    i = void 0 === t ? 500 : t,
    [a, s] = (0, o.useState)(e);
  let l, c;
  return (
    n[0] !== i || n[1] !== e
      ? ((l = () => {
          const t = setTimeout(() => {
            s(e);
          }, i);
          return () => {
            clearTimeout(t);
          };
        }),
        (c = [e, i]),
        (n[0] = i),
        (n[1] = e),
        (n[2] = l),
        (n[3] = c))
      : ((l = n[2]), (c = n[3])),
    (0, o.useEffect)(l, c),
    a
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
