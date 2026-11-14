// vendor/module-43890.js — webpack module 43890
// params: (e, t, n) = (module, exports, require)
"use strict";
function r(e, t, n, r) {
  const o = e.length;
  let i,
    a = 0;
  if (
    ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (i = Array.from(r)), i.unshift(t, n), e.splice(...i);
  else
    for (n && e.splice(t, n); a < r.length; )
      (i = r.slice(a, a + 1e4)),
        i.unshift(t, 0),
        e.splice(...i),
        (a += 1e4),
        (t += 1e4);
}
function o(e, t) {
  return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
}
n.d(t, { V: () => o, m: () => r });
