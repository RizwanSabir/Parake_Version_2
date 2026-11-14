// vendor/other/module-68993.js — webpack module 68993
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */),
  o = Object.prototype.toString;
e.exports = new r("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: function (e) {
    if (null === e) return !0;
    const t = e,
      n = new Array(t.length);
    for (let e = 0, r = t.length; e < r; e += 1) {
      const r = t[e];
      if ("[object Object]" !== o.call(r)) return !1;
      const i = Object.keys(r);
      if (1 !== i.length) return !1;
      n[e] = [i[0], r[i[0]]];
    }
    return !0;
  },
  construct: function (e) {
    if (null === e) return [];
    const t = e,
      n = new Array(t.length);
    for (let e = 0, r = t.length; e < r; e += 1) {
      const r = t[e],
        o = Object.keys(r);
      n[e] = [o[0], r[o[0]]];
    }
    return n;
  },
});
