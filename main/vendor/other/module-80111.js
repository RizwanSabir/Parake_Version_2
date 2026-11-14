// vendor/other/module-80111.js — webpack module 80111
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(16928 /* external/path */),
  i = n(62940 /* vendor/other/module-62940 */).copy,
  s = n(12565 /* vendor/other/module-12565 */).remove,
  a = n(68777 /* vendor/other/module-68777 */).mkdirp,
  c = n(22281 /* vendor/other/module-22281 */).pathExists,
  u = n(5039 /* vendor/other/module-5039 */);
function l(e, t, n, r, o) {
  return r
    ? d(e, t, n, o)
    : n
      ? s(t, (r) => (r ? o(r) : d(e, t, n, o)))
      : void c(t, (r, i) =>
          r ? o(r) : i ? o(new Error("dest already exists.")) : d(e, t, n, o),
        );
}
function d(e, t, n, o) {
  r.rename(e, t, (r) =>
    r
      ? "EXDEV" !== r.code
        ? o(r)
        : (function (e, t, n, r) {
            i(e, t, { overwrite: n, errorOnExist: !0 }, (t) =>
              t ? r(t) : s(e, r),
            );
          })(e, t, n, o)
      : o(),
  );
}
e.exports = function (e, t, n, r) {
  "function" == typeof n && ((r = n), (n = {}));
  const i = (n = n || {}).overwrite || n.clobber || !1;
  u.checkPaths(e, t, "move", n, (n, s) => {
    if (n) return r(n);
    const { srcStat: c, isChangingCase: d = !1 } = s;
    u.checkParentPaths(e, c, t, "move", (n) =>
      n
        ? r(n)
        : (function (e) {
              const t = o.dirname(e);
              return o.parse(t).root === t;
            })(t)
          ? l(e, t, i, d, r)
          : void a(o.dirname(t), (n) => (n ? r(n) : l(e, t, i, d, r))),
    );
  });
};
