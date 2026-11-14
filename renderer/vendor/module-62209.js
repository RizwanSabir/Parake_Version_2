// vendor/module-62209.js — webpack module 62209
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => s });
var i = r(45718 /* vendor/module-45718 */),
  o = r(63545 /* vendor/module-63545 */),
  n = r(11028 /* vendor/module-11028 */),
  a = r(36135 /* vendor/module-36135 */);
const s = (t, e, r = 0, s = 1) => {
  if ("number" != typeof t) return (0, a.A)(t, { a: e });
  const l = o.A.set({
    r: i.A.channel.clamp.r(t),
    g: i.A.channel.clamp.g(e),
    b: i.A.channel.clamp.b(r),
    a: i.A.channel.clamp.a(s),
  });
  return n.A.stringify(l);
};
