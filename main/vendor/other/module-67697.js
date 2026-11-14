// vendor/other/module-67697.js — webpack module 67697
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform,
  { resolve: o, parse: i } = n(16928 /* external/path */);
e.exports = (e) => {
  if (/\0/.test(e))
    throw Object.assign(
      new TypeError("path must be a string without null bytes"),
      { path: e, code: "ERR_INVALID_ARG_VALUE" },
    );
  if (((e = o(e)), "win32" === r)) {
    const t = /[*|"<>?:]/,
      { root: n } = i(e);
    if (t.test(e.substr(n.length)))
      throw Object.assign(new Error("Illegal characters in path."), {
        path: e,
        code: "EINVAL",
      });
  }
  return e;
};
