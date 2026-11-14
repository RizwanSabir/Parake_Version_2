// vendor/other/module-88305.js — webpack module 88305
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromCallback,
  o = n(16928 /* external/path */),
  i = n(68998 /* vendor/other/module-68998 */),
  s = n(68777 /* vendor/other/module-68777 */);
e.exports = {
  createFile: r(function (e, t) {
    function n() {
      i.writeFile(e, "", (e) => {
        if (e) return t(e);
        t();
      });
    }
    i.stat(e, (r, a) => {
      if (!r && a.isFile()) return t();
      const c = o.dirname(e);
      i.stat(c, (e, r) => {
        if (e)
          return "ENOENT" === e.code
            ? s.mkdirs(c, (e) => {
                if (e) return t(e);
                n();
              })
            : t(e);
        r.isDirectory()
          ? n()
          : i.readdir(c, (e) => {
              if (e) return t(e);
            });
      });
    });
  }),
  createFileSync: function (e) {
    let t;
    try {
      t = i.statSync(e);
    } catch {}
    if (t && t.isFile()) return;
    const n = o.dirname(e);
    try {
      i.statSync(n).isDirectory() || i.readdirSync(n);
    } catch (e) {
      if (!e || "ENOENT" !== e.code) throw e;
      s.mkdirsSync(n);
    }
    i.writeFileSync(e, "");
  },
};
