// vendor/other/module-79280.js — webpack module 79280
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r = n(16928 /* external/path */).sep;
e.exports = function (e) {
  var t = e.split(r),
    n = t.lastIndexOf("node_modules");
  if (-1 !== n && t[n + 1]) {
    for (
      var o = "@" === t[n + 1][0],
        i = o ? t[n + 1] + "/" + t[n + 2] : t[n + 1],
        s = o ? 3 : 2,
        a = "",
        c = n + s - 1,
        u = 0;
      u <= c;
      u++
    )
      a += u === c ? t[u] : t[u] + r;
    for (var l = "", d = t.length - 1, p = n + s; p <= d; p++)
      l += p === d ? t[p] : t[p] + r;
    return { name: i, basedir: a, path: l };
  }
};
