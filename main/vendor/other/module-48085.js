// vendor/other/module-48085.js — webpack module 48085
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const { dirname: r } = n(16928 /* external/path */),
  o = (e, t, n) => {
    t.recursive = !1;
    const i = r(e);
    return i === e
      ? t.mkdirAsync(e, t).catch((e) => {
          if ("EISDIR" !== e.code) throw e;
        })
      : t.mkdirAsync(e, t).then(
          () => n || e,
          (r) => {
            if ("ENOENT" === r.code) return o(i, t).then((n) => o(e, t, n));
            if ("EEXIST" !== r.code && "EROFS" !== r.code) throw r;
            return t.statAsync(e).then(
              (e) => {
                if (e.isDirectory()) return n;
                throw r;
              },
              () => {
                throw r;
              },
            );
          },
        );
  },
  i = (e, t, n) => {
    const o = r(e);
    if (((t.recursive = !1), o === e))
      try {
        return t.mkdirSync(e, t);
      } catch (e) {
        if ("EISDIR" !== e.code) throw e;
        return;
      }
    try {
      return t.mkdirSync(e, t), n || e;
    } catch (r) {
      if ("ENOENT" === r.code) return i(e, t, i(o, t, n));
      if ("EEXIST" !== r.code && "EROFS" !== r.code) throw r;
      try {
        if (!t.statSync(e).isDirectory()) throw r;
      } catch (e) {
        throw r;
      }
    }
  };
e.exports = { mkdirpManual: o, mkdirpManualSync: i };
