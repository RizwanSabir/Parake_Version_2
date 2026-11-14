// vendor/other/module-31368.js — webpack module 31368
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */),
  o = Object.prototype.hasOwnProperty;
e.exports = new r("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: function (e) {
    if (null === e) return !0;
    const t = e;
    for (const e in t) if (o.call(t, e) && null !== t[e]) return !1;
    return !0;
  },
  construct: function (e) {
    return null !== e ? e : {};
  },
});
