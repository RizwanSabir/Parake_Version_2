// vendor/module-36135.js — webpack module 36135
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => n });
var i = r(45718 /* vendor/module-45718 */),
  o = r(11028 /* vendor/module-11028 */);
const n = (t, e) => {
  const r = o.A.parse(t);
  for (const t in e) r[t] = i.A.channel.clamp[t](e[t]);
  return o.A.stringify(r);
};
