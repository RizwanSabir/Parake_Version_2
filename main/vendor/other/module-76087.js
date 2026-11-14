// vendor/other/module-76087.js — webpack module 76087
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromCallback,
  o = n(16928 /* external/path */),
  i = n(68998 /* vendor/other/module-68998 */),
  s = n(68777 /* vendor/other/module-68777 */),
  a = n(22281 /* vendor/other/module-22281 */).pathExists,
  { areIdentical: c } = n(5039 /* vendor/other/module-5039 */);
e.exports = {
  createLink: r(function (e, t, n) {
    function r(e, t) {
      i.link(e, t, (e) => {
        if (e) return n(e);
        n(null);
      });
    }
    i.lstat(t, (u, l) => {
      i.lstat(e, (i, u) => {
        if (i)
          return (i.message = i.message.replace("lstat", "ensureLink")), n(i);
        if (l && c(u, l)) return n(null);
        const d = o.dirname(t);
        a(d, (o, i) =>
          o
            ? n(o)
            : i
              ? r(e, t)
              : void s.mkdirs(d, (o) => {
                  if (o) return n(o);
                  r(e, t);
                }),
        );
      });
    });
  }),
  createLinkSync: function (e, t) {
    let n;
    try {
      n = i.lstatSync(t);
    } catch {}
    try {
      const t = i.lstatSync(e);
      if (n && c(t, n)) return;
    } catch (e) {
      throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
    }
    const r = o.dirname(t);
    return i.existsSync(r) || s.mkdirsSync(r), i.linkSync(e, t);
  },
};
