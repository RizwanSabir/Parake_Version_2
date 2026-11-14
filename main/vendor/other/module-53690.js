// vendor/other/module-53690.js — webpack module 53690
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(95309 /* vendor/other/module-95309 */).fromCallback,
  o = n(68998 /* vendor/other/module-68998 */),
  i = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchmod",
    "lchown",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile",
  ].filter((e) => "function" == typeof o[e]);
Object.assign(t, o),
  i.forEach((e) => {
    t[e] = r(o[e]);
  }),
  (t.exists = function (e, t) {
    return "function" == typeof t
      ? o.exists(e, t)
      : new Promise((t) => o.exists(e, t));
  }),
  (t.read = function (e, t, n, r, i, s) {
    return "function" == typeof s
      ? o.read(e, t, n, r, i, s)
      : new Promise((s, a) => {
          o.read(e, t, n, r, i, (e, t, n) => {
            if (e) return a(e);
            s({ bytesRead: t, buffer: n });
          });
        });
  }),
  (t.write = function (e, t, ...n) {
    return "function" == typeof n[n.length - 1]
      ? o.write(e, t, ...n)
      : new Promise((r, i) => {
          o.write(e, t, ...n, (e, t, n) => {
            if (e) return i(e);
            r({ bytesWritten: t, buffer: n });
          });
        });
  }),
  "function" == typeof o.writev &&
    (t.writev = function (e, t, ...n) {
      return "function" == typeof n[n.length - 1]
        ? o.writev(e, t, ...n)
        : new Promise((r, i) => {
            o.writev(e, t, ...n, (e, t, n) => {
              if (e) return i(e);
              r({ bytesWritten: t, buffers: n });
            });
          });
    }),
  "function" == typeof o.realpath.native
    ? (t.realpath.native = r(o.realpath.native))
    : process.emitWarning(
        "fs.realpath.native is not a function. Is fs being monkey-patched?",
        "Warning",
        "fs-extra-WARN0003",
      );
