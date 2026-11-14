// vendor/other/module-44313.js — webpack module 44313
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(16928 /* external/path */),
  o = n(68998 /* vendor/other/module-68998 */),
  i = n(22281 /* vendor/other/module-22281 */).pathExists;
e.exports = {
  symlinkPaths: function (e, t, n) {
    if (r.isAbsolute(e))
      return o.lstat(e, (t) =>
        t
          ? ((t.message = t.message.replace("lstat", "ensureSymlink")), n(t))
          : n(null, { toCwd: e, toDst: e }),
      );
    {
      const s = r.dirname(t),
        a = r.join(s, e);
      return i(a, (t, i) =>
        t
          ? n(t)
          : i
            ? n(null, { toCwd: a, toDst: e })
            : o.lstat(e, (t) =>
                t
                  ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                    n(t))
                  : n(null, { toCwd: e, toDst: r.relative(s, e) }),
              ),
      );
    }
  },
  symlinkPathsSync: function (e, t) {
    let n;
    if (r.isAbsolute(e)) {
      if (((n = o.existsSync(e)), !n))
        throw new Error("absolute srcpath does not exist");
      return { toCwd: e, toDst: e };
    }
    {
      const i = r.dirname(t),
        s = r.join(i, e);
      if (((n = o.existsSync(s)), n)) return { toCwd: s, toDst: e };
      if (((n = o.existsSync(e)), !n))
        throw new Error("relative srcpath does not exist");
      return { toCwd: e, toDst: r.relative(i, e) };
    }
  },
};
