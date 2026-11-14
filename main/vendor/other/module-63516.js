// vendor/other/module-63516.js — webpack module 63516
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const { dirname: r } = n(16928 /* external/path */),
  o = (e, t, n = void 0) =>
    n === t
      ? Promise.resolve()
      : e.statAsync(t).then(
          (e) => (e.isDirectory() ? n : void 0),
          (n) => ("ENOENT" === n.code ? o(e, r(t), t) : void 0),
        ),
  i = (e, t, n = void 0) => {
    if (n !== t)
      try {
        return e.statSync(t).isDirectory() ? n : void 0;
      } catch (n) {
        return "ENOENT" === n.code ? i(e, r(t), t) : void 0;
      }
  };
e.exports = { findMade: o, findMadeSync: i };
