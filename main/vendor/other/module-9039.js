// vendor/other/module-9039.js — webpack module 9039
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */),
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.toString;
e.exports = new r("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: function (e) {
    if (null === e) return !0;
    const t = {},
      n = e;
    for (let e = 0, r = n.length; e < r; e += 1) {
      const r = n[e];
      let s,
        a = !1;
      if ("[object Object]" !== i.call(r)) return !1;
      for (s in r)
        if (o.call(r, s)) {
          if (a) return !1;
          a = !0;
        }
      if (!a) return !1;
      if (o.call(t, s)) return !1;
      Object.defineProperty(t, s, { value: !0 });
    }
    return !0;
  },
  construct: function (e) {
    return null !== e ? e : [];
  },
});
