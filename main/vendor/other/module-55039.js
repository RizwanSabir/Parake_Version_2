// vendor/other/module-55039.js — webpack module 55039
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(16928 /* external/path */),
  i = n(68777 /* vendor/other/module-68777 */).mkdirsSync,
  s = n(10958 /* vendor/other/module-10958 */).utimesMillisSync,
  a = n(5039 /* vendor/other/module-5039 */);
function c(e, t, n, i) {
  const s = (i.dereference ? r.statSync : r.lstatSync)(t);
  if (s.isDirectory())
    return (function (e, t, n, o, i) {
      return t
        ? d(n, o, i)
        : (function (e, t, n, o) {
            return r.mkdirSync(n), d(t, n, o), l(n, e);
          })(e.mode, n, o, i);
    })(s, e, t, n, i);
  if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice())
    return (function (e, t, n, o, i) {
      return t
        ? (function (e, t, n, o) {
            if (o.overwrite) return r.unlinkSync(n), u(e, t, n, o);
            if (o.errorOnExist) throw new Error(`'${n}' already exists`);
          })(e, n, o, i)
        : u(e, n, o, i);
    })(s, e, t, n, i);
  if (s.isSymbolicLink())
    return (function (e, t, n, i) {
      let s = r.readlinkSync(t);
      if ((i.dereference && (s = o.resolve(process.cwd(), s)), e)) {
        let e;
        try {
          e = r.readlinkSync(n);
        } catch (e) {
          if ("EINVAL" === e.code || "UNKNOWN" === e.code)
            return r.symlinkSync(s, n);
          throw e;
        }
        if (
          (i.dereference && (e = o.resolve(process.cwd(), e)),
          a.isSrcSubdir(s, e))
        )
          throw new Error(
            `Cannot copy '${s}' to a subdirectory of itself, '${e}'.`,
          );
        if (r.statSync(n).isDirectory() && a.isSrcSubdir(e, s))
          throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
        return (function (e, t) {
          return r.unlinkSync(t), r.symlinkSync(e, t);
        })(s, n);
      }
      return r.symlinkSync(s, n);
    })(e, t, n, i);
  if (s.isSocket()) throw new Error(`Cannot copy a socket file: ${t}`);
  if (s.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${t}`);
  throw new Error(`Unknown file: ${t}`);
}
function u(e, t, n, o) {
  return (
    r.copyFileSync(t, n),
    o.preserveTimestamps &&
      (function (e, t, n) {
        (function (e) {
          return !(128 & e);
        })(e) &&
          (function (e, t) {
            l(e, 128 | t);
          })(n, e),
          (function (e, t) {
            const n = r.statSync(e);
            s(t, n.atime, n.mtime);
          })(t, n);
      })(e.mode, t, n),
    l(n, e.mode)
  );
}
function l(e, t) {
  return r.chmodSync(e, t);
}
function d(e, t, n) {
  r.readdirSync(e).forEach((r) =>
    (function (e, t, n, r) {
      const i = o.join(t, e),
        s = o.join(n, e),
        { destStat: u } = a.checkPathsSync(i, s, "copy", r);
      return (function (e, t, n, r) {
        if (!r.filter || r.filter(t, n)) return c(e, t, n, r);
      })(u, i, s, r);
    })(r, e, t, n),
  );
}
e.exports = function (e, t, n) {
  "function" == typeof n && (n = { filter: n }),
    ((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
    (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
    n.preserveTimestamps &&
      "ia32" === process.arch &&
      process.emitWarning(
        "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
        "Warning",
        "fs-extra-WARN0002",
      );
  const { srcStat: s, destStat: u } = a.checkPathsSync(e, t, "copy", n);
  return (
    a.checkParentPathsSync(e, s, t, "copy"),
    (function (e, t, n, s) {
      if (s.filter && !s.filter(t, n)) return;
      const a = o.dirname(n);
      return r.existsSync(a) || i(a), c(e, t, n, s);
    })(u, e, t, n)
  );
};
