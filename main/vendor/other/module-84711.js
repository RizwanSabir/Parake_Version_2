// vendor/other/module-84711.js — webpack module 84711
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(16928 /* external/path */),
  i = n(68777 /* vendor/other/module-68777 */).mkdirs,
  s = n(22281 /* vendor/other/module-22281 */).pathExists,
  a = n(10958 /* vendor/other/module-10958 */).utimesMillis,
  c = n(5039 /* vendor/other/module-5039 */);
function u(e, t, n, r, a) {
  const c = o.dirname(n);
  s(c, (o, s) =>
    o
      ? a(o)
      : s
        ? d(e, t, n, r, a)
        : void i(c, (o) => (o ? a(o) : d(e, t, n, r, a))),
  );
}
function l(e, t, n, r, o, i) {
  Promise.resolve(o.filter(n, r)).then(
    (s) => (s ? e(t, n, r, o, i) : i()),
    (e) => i(e),
  );
}
function d(e, t, n, i, s) {
  (i.dereference ? r.stat : r.lstat)(t, (a, u) =>
    a
      ? s(a)
      : u.isDirectory()
        ? (function (e, t, n, o, i, s) {
            return t
              ? g(n, o, i, s)
              : (function (e, t, n, o, i) {
                  r.mkdir(n, (r) => {
                    if (r) return i(r);
                    g(t, n, o, (t) => (t ? i(t) : h(n, e, i)));
                  });
                })(e.mode, n, o, i, s);
          })(u, e, t, n, i, s)
        : u.isFile() || u.isCharacterDevice() || u.isBlockDevice()
          ? (function (e, t, n, o, i, s) {
              return t
                ? (function (e, t, n, o, i) {
                    if (!o.overwrite)
                      return o.errorOnExist
                        ? i(new Error(`'${n}' already exists`))
                        : i();
                    r.unlink(n, (r) => (r ? i(r) : p(e, t, n, o, i)));
                  })(e, n, o, i, s)
                : p(e, n, o, i, s);
            })(u, e, t, n, i, s)
          : u.isSymbolicLink()
            ? (function (e, t, n, i, s) {
                r.readlink(t, (t, a) =>
                  t
                    ? s(t)
                    : (i.dereference && (a = o.resolve(process.cwd(), a)),
                      e
                        ? void r.readlink(n, (t, u) =>
                            t
                              ? "EINVAL" === t.code || "UNKNOWN" === t.code
                                ? r.symlink(a, n, s)
                                : s(t)
                              : (i.dereference &&
                                  (u = o.resolve(process.cwd(), u)),
                                c.isSrcSubdir(a, u)
                                  ? s(
                                      new Error(
                                        `Cannot copy '${a}' to a subdirectory of itself, '${u}'.`,
                                      ),
                                    )
                                  : e.isDirectory() && c.isSrcSubdir(u, a)
                                    ? s(
                                        new Error(
                                          `Cannot overwrite '${u}' with '${a}'.`,
                                        ),
                                      )
                                    : (function (e, t, n) {
                                        r.unlink(t, (o) =>
                                          o ? n(o) : r.symlink(e, t, n),
                                        );
                                      })(a, n, s)),
                          )
                        : r.symlink(a, n, s)),
                );
              })(e, t, n, i, s)
            : u.isSocket()
              ? s(new Error(`Cannot copy a socket file: ${t}`))
              : u.isFIFO()
                ? s(new Error(`Cannot copy a FIFO pipe: ${t}`))
                : s(new Error(`Unknown file: ${t}`)),
  );
}
function p(e, t, n, o, i) {
  r.copyFile(t, n, (r) =>
    r
      ? i(r)
      : o.preserveTimestamps
        ? (function (e, t, n, r) {
            return (function (e) {
              return !(128 & e);
            })(e)
              ? (function (e, t, n) {
                  return h(e, 128 | t, n);
                })(n, e, (o) => (o ? r(o) : f(e, t, n, r)))
              : f(e, t, n, r);
          })(e.mode, t, n, i)
        : h(n, e.mode, i),
  );
}
function f(e, t, n, o) {
  !(function (e, t, n) {
    r.stat(e, (e, r) => (e ? n(e) : a(t, r.atime, r.mtime, n)));
  })(t, n, (t) => (t ? o(t) : h(n, e, o)));
}
function h(e, t, n) {
  return r.chmod(e, t, n);
}
function g(e, t, n, o) {
  r.readdir(e, (r, i) => (r ? o(r) : m(i, e, t, n, o)));
}
function m(e, t, n, r, i) {
  const s = e.pop();
  return s
    ? (function (e, t, n, r, i, s) {
        const a = o.join(n, t),
          u = o.join(r, t);
        c.checkPaths(a, u, "copy", i, (t, o) => {
          if (t) return s(t);
          const { destStat: c } = o;
          !(function (e, t, n, r, o) {
            r.filter ? l(d, e, t, n, r, o) : d(e, t, n, r, o);
          })(c, a, u, i, (t) => (t ? s(t) : m(e, n, r, i, s)));
        });
      })(e, s, t, n, r, i)
    : i();
}
e.exports = function (e, t, n, r) {
  "function" != typeof n || r
    ? "function" == typeof n && (n = { filter: n })
    : ((r = n), (n = {})),
    (r = r || function () {}),
    ((n = n || {}).clobber = !("clobber" in n) || !!n.clobber),
    (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
    n.preserveTimestamps &&
      "ia32" === process.arch &&
      process.emitWarning(
        "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
        "Warning",
        "fs-extra-WARN0001",
      ),
    c.checkPaths(e, t, "copy", n, (o, i) => {
      if (o) return r(o);
      const { srcStat: s, destStat: a } = i;
      c.checkParentPaths(e, s, t, "copy", (o) =>
        o ? r(o) : n.filter ? l(u, a, e, t, n, r) : u(a, e, t, n, r),
      );
    });
};
