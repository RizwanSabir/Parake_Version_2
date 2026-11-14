// vendor/module-10660.js — webpack module 10660
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { y: () => i });
var r = n(43890 /* vendor/module-43890 */);
const o = {}.hasOwnProperty;
function i(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) a(t, e[n]);
  return t;
}
function a(e, t) {
  let n;
  for (n in t) {
    const r = (o.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      i = t[n];
    let a;
    if (i)
      for (a in i) {
        o.call(r, a) || (r[a] = []);
        const e = i[a];
        s(r[a], Array.isArray(e) ? e : e ? [e] : []);
      }
  }
}
function s(e, t) {
  let n = -1;
  const o = [];
  for (; ++n < t.length; ) ("after" === t[n].add ? e : o).push(t[n]);
  (0, r.m)(e, 0, 0, o);
}
