// vendor/other/module-16240.js — webpack module 16240
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const { promisify: r } = n(39023 /* external/util */),
  o = n(79896 /* external/fs */);
e.exports = (e) => {
  if (e)
    if ("object" == typeof e) e = { mode: 511, fs: o, ...e };
    else if ("number" == typeof e) e = { mode: e, fs: o };
    else {
      if ("string" != typeof e) throw new TypeError("invalid options argument");
      e = { mode: parseInt(e, 8), fs: o };
    }
  else e = { mode: 511, fs: o };
  return (
    (e.mkdir = e.mkdir || e.fs.mkdir || o.mkdir),
    (e.mkdirAsync = r(e.mkdir)),
    (e.stat = e.stat || e.fs.stat || o.stat),
    (e.statAsync = r(e.stat)),
    (e.statSync = e.statSync || e.fs.statSync || o.statSync),
    (e.mkdirSync = e.mkdirSync || e.fs.mkdirSync || o.mkdirSync),
    e
  );
};
