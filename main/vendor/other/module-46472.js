// vendor/other/module-46472.js — webpack module 46472
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromCallback,
  o = n(16928 /* external/path */),
  i = n(53690 /* vendor/other/module-53690 */),
  s = n(68777 /* vendor/other/module-68777 */),
  a = s.mkdirs,
  c = s.mkdirsSync,
  u = n(44313 /* vendor/other/module-44313 */),
  l = u.symlinkPaths,
  d = u.symlinkPathsSync,
  p = n(57693 /* vendor/other/module-57693 */),
  f = p.symlinkType,
  h = p.symlinkTypeSync,
  g = n(22281 /* vendor/other/module-22281 */).pathExists,
  { areIdentical: m } = n(5039 /* vendor/other/module-5039 */);
function _(e, t, n, r) {
  l(e, t, (s, c) => {
    if (s) return r(s);
    (e = c.toDst),
      f(c.toCwd, n, (n, s) => {
        if (n) return r(n);
        const c = o.dirname(t);
        g(c, (n, o) =>
          n
            ? r(n)
            : o
              ? i.symlink(e, t, s, r)
              : void a(c, (n) => {
                  if (n) return r(n);
                  i.symlink(e, t, s, r);
                }),
        );
      });
  });
}
e.exports = {
  createSymlink: r(function (e, t, n, r) {
    (r = "function" == typeof n ? n : r),
      (n = "function" != typeof n && n),
      i.lstat(t, (o, s) => {
        !o && s.isSymbolicLink()
          ? Promise.all([i.stat(e), i.stat(t)]).then(([o, i]) => {
              if (m(o, i)) return r(null);
              _(e, t, n, r);
            })
          : _(e, t, n, r);
      });
  }),
  createSymlinkSync: function (e, t, n) {
    let r;
    try {
      r = i.lstatSync(t);
    } catch {}
    if (r && r.isSymbolicLink()) {
      const n = i.statSync(e),
        r = i.statSync(t);
      if (m(n, r)) return;
    }
    const s = d(e, t);
    (e = s.toDst), (n = h(s.toCwd, n));
    const a = o.dirname(t);
    return i.existsSync(a) || c(a), i.symlinkSync(e, t, n);
  },
};
