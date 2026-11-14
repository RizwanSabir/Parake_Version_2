// vendor/module-45344.js — webpack module 45344
// params: (e, t, n) = (module, exports, require)
"use strict";
function r(e, t) {
  const n = String(e);
  let r = n.indexOf(t),
    o = r,
    i = 0,
    a = 0;
  if ("string" != typeof t) throw new TypeError("Expected substring");
  for (; -1 !== r; )
    r === o ? ++i > a && (a = i) : (i = 1),
      (o = r + t.length),
      (r = n.indexOf(t, o));
  return a;
}
n.d(t, { D: () => r });
