// vendor/other/module-57693.js — webpack module 57693
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */);
e.exports = {
  symlinkType: function (e, t, n) {
    if (
      ((n = "function" == typeof t ? t : n), (t = "function" != typeof t && t))
    )
      return n(null, t);
    r.lstat(e, (e, r) => {
      if (e) return n(null, "file");
      (t = r && r.isDirectory() ? "dir" : "file"), n(null, t);
    });
  },
  symlinkTypeSync: function (e, t) {
    let n;
    if (t) return t;
    try {
      n = r.lstatSync(e);
    } catch {
      return "file";
    }
    return n && n.isDirectory() ? "dir" : "file";
  },
};
