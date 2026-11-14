// vendor/other/module-87856.js — webpack module 87856
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */),
  o = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
  i = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$",
  );
e.exports = new r("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: function (e) {
    return null !== e && (null !== o.exec(e) || null !== i.exec(e));
  },
  construct: function (e) {
    let t = 0,
      n = null,
      r = o.exec(e);
    if ((null === r && (r = i.exec(e)), null === r))
      throw new Error("Date resolve error");
    const s = +r[1],
      a = +r[2] - 1,
      c = +r[3];
    if (!r[4]) return new Date(Date.UTC(s, a, c));
    const u = +r[4],
      l = +r[5],
      d = +r[6];
    if (r[7]) {
      for (t = r[7].slice(0, 3); t.length < 3; ) t += "0";
      t = +t;
    }
    r[9] &&
      ((n = 6e4 * (60 * +r[10] + +(r[11] || 0))), "-" === r[9] && (n = -n));
    const p = new Date(Date.UTC(s, a, c, u, l, d, t));
    return n && p.setTime(p.getTime() - n), p;
  },
  instanceOf: Date,
  represent: function (e) {
    return e.toISOString();
  },
});
