// vendor/module-85944.js — webpack module 85944
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => n });
var i = r(45718 /* vendor/module-45718 */),
  o = r(11028 /* vendor/module-11028 */);
const n = (t, e, r) => {
  const n = o.A.parse(t),
    a = n[e],
    s = i.A.channel.clamp[e](a + r);
  return a !== s && (n[e] = s), o.A.stringify(n);
};
