// vendor/other/module-91157.js — webpack module 91157
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromCallback,
  o = n(68998 /* vendor/other/module-68998 */),
  i = n(16928 /* external/path */),
  s = n(68777 /* vendor/other/module-68777 */),
  a = n(22281 /* vendor/other/module-22281 */).pathExists;
e.exports = {
  outputFile: r(function (e, t, n, r) {
    "function" == typeof n && ((r = n), (n = "utf8"));
    const c = i.dirname(e);
    a(c, (i, a) =>
      i
        ? r(i)
        : a
          ? o.writeFile(e, t, n, r)
          : void s.mkdirs(c, (i) => {
              if (i) return r(i);
              o.writeFile(e, t, n, r);
            }),
    );
  }),
  outputFileSync: function (e, ...t) {
    const n = i.dirname(e);
    if (o.existsSync(n)) return o.writeFileSync(e, ...t);
    s.mkdirsSync(n), o.writeFileSync(e, ...t);
  },
};
