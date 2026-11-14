// vendor/other/module-41295.js — webpack module 41295
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const { dirname: r } = n(16928 /* external/path */),
  { findMade: o, findMadeSync: i } = n(63516 /* vendor/other/module-63516 */),
  { mkdirpManual: s, mkdirpManualSync: a } = n(
    48085 /* vendor/other/module-48085 */,
  );
e.exports = {
  mkdirpNative: (e, t) => (
    (t.recursive = !0),
    r(e) === e
      ? t.mkdirAsync(e, t)
      : o(t, e).then((n) =>
          t
            .mkdirAsync(e, t)
            .then(() => n)
            .catch((n) => {
              if ("ENOENT" === n.code) return s(e, t);
              throw n;
            }),
        )
  ),
  mkdirpNativeSync: (e, t) => {
    if (((t.recursive = !0), r(e) === e)) return t.mkdirSync(e, t);
    const n = i(t, e);
    try {
      return t.mkdirSync(e, t), n;
    } catch (n) {
      if ("ENOENT" === n.code) return a(e, t);
      throw n;
    }
  },
};
