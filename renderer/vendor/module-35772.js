// vendor/module-35772.js — webpack module 35772
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { E: () => a });
var r = n(22092 /* vendor/module-22092 */),
  o = n(41167 /* vendor/module-41167 */);
const i = Object.keys(o);
class a extends r.R {
  constructor(e, t, n, r) {
    let a = -1;
    if ((super(e, t), s(this, "space", r), "number" == typeof n))
      for (; ++a < i.length; ) {
        const e = i[a];
        s(this, i[a], (n & o[e]) === o[e]);
      }
  }
}
function s(e, t, n) {
  n && (e[t] = n);
}
a.prototype.defined = !0;
