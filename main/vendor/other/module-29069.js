// vendor/other/module-29069.js — webpack module 29069
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(79896 /* external/fs */),
  o = n(16928 /* external/path */);
function i(...e) {
  if (e[0])
    try {
      const t = (function (e, t) {
        let n = t;
        for (;;) {
          const t = o.parse(n),
            i = t.root,
            s = t.dir;
          if (r.existsSync(o.join(n, e))) return o.resolve(o.join(n, e));
          if (n === i) return null;
          n = s;
        }
      })("package.json", o.join(...e));
      if (!t) return;
      const n = JSON.parse(r.readFileSync(t, "utf8")),
        i = n?.productName || n?.name;
      if (!i || "electron" === i.toLowerCase()) return;
      return i ? { name: i, version: n?.version } : void 0;
    } catch (e) {
      return;
    }
}
e.exports = {
  findAndReadPackageJson: function () {
    return (
      i(
        (function () {
          try {
            return n.c[n.s]?.filename;
          } catch {
            return;
          }
        })(),
      ) ||
      i(
        (function () {
          const e = process.argv.filter(
            (e) => 0 === e.indexOf("--user-data-dir="),
          );
          return 0 === e.length || "string" != typeof e[0]
            ? null
            : e[0].replace("--user-data-dir=", "");
        })(),
      ) ||
      i(process.resourcesPath, "app.asar") ||
      i(process.resourcesPath, "app") ||
      i(process.cwd()) || { name: void 0, version: void 0 }
    );
  },
  tryReadJsonAt: i,
};
