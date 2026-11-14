// vendor/module-61182.js — webpack module 61182
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { I: () => c });
var r = n(35772 /* vendor/module-35772 */),
  o = n(22092 /* vendor/module-22092 */),
  i = n(46738 /* vendor/module-46738 */);
const a = /[A-Z]/g,
  s = /-[a-z]/g,
  l = /^data[-\w.:]+$/i;
function c(e, t) {
  const n = (0, i.S)(t);
  let c = t,
    p = o.R;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && "data" === n.slice(0, 4) && l.test(t)) {
    if ("-" === t.charAt(4)) {
      const e = t.slice(5).replace(s, d);
      c = "data" + e.charAt(0).toUpperCase() + e.slice(1);
    } else {
      const e = t.slice(4);
      if (!s.test(e)) {
        let n = e.replace(a, u);
        "-" !== n.charAt(0) && (n = "-" + n), (t = "data" + n);
      }
    }
    p = r.E;
  }
  return new p(c, t);
}
function u(e) {
  return "-" + e.toLowerCase();
}
function d(e) {
  return e.charAt(1).toUpperCase();
}
