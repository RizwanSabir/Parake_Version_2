// vendor/other/module-39.js — webpack module 39
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(16928 /* external/path */),
  i = n(62940 /* vendor/other/module-62940 */).copySync,
  s = n(12565 /* vendor/other/module-12565 */).removeSync,
  a = n(68777 /* vendor/other/module-68777 */).mkdirpSync,
  c = n(5039 /* vendor/other/module-5039 */);
function u(e, t, n) {
  try {
    r.renameSync(e, t);
  } catch (r) {
    if ("EXDEV" !== r.code) throw r;
    return (function (e, t, n) {
      return i(e, t, { overwrite: n, errorOnExist: !0 }), s(e);
    })(e, t, n);
  }
}
e.exports = function (e, t, n) {
  const i = (n = n || {}).overwrite || n.clobber || !1,
    { srcStat: l, isChangingCase: d = !1 } = c.checkPathsSync(e, t, "move", n);
  return (
    c.checkParentPathsSync(e, l, t, "move"),
    (function (e) {
      const t = o.dirname(e);
      return o.parse(t).root === t;
    })(t) || a(o.dirname(t)),
    (function (e, t, n, o) {
      if (o) return u(e, t, n);
      if (n) return s(t), u(e, t, n);
      if (r.existsSync(t)) throw new Error("dest already exists.");
      return u(e, t, n);
    })(e, t, i, d)
  );
};
