// vendor/other/module-42096.js — webpack module 42096
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */),
  o = n(16928 /* external/path */),
  i = n(42613 /* external/assert */),
  s = "win32" === process.platform;
function a(e) {
  ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
    (e[t] = e[t] || r[t]), (e[(t += "Sync")] = e[t] || r[t]);
  }),
    (e.maxBusyTries = e.maxBusyTries || 3);
}
function c(e, t, n) {
  let r = 0;
  "function" == typeof t && ((n = t), (t = {})),
    i(e, "rimraf: missing path"),
    i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
    i.strictEqual(typeof n, "function", "rimraf: callback function required"),
    i(t, "rimraf: invalid options argument provided"),
    i.strictEqual(typeof t, "object", "rimraf: options should be object"),
    a(t),
    u(e, t, function o(i) {
      if (i) {
        if (
          ("EBUSY" === i.code ||
            "ENOTEMPTY" === i.code ||
            "EPERM" === i.code) &&
          r < t.maxBusyTries
        )
          return r++, setTimeout(() => u(e, t, o), 100 * r);
        "ENOENT" === i.code && (i = null);
      }
      n(i);
    });
}
function u(e, t, n) {
  i(e),
    i(t),
    i("function" == typeof n),
    t.lstat(e, (r, o) =>
      r && "ENOENT" === r.code
        ? n(null)
        : r && "EPERM" === r.code && s
          ? l(e, t, r, n)
          : o && o.isDirectory()
            ? p(e, t, r, n)
            : void t.unlink(e, (r) => {
                if (r) {
                  if ("ENOENT" === r.code) return n(null);
                  if ("EPERM" === r.code)
                    return s ? l(e, t, r, n) : p(e, t, r, n);
                  if ("EISDIR" === r.code) return p(e, t, r, n);
                }
                return n(r);
              }),
    );
}
function l(e, t, n, r) {
  i(e),
    i(t),
    i("function" == typeof r),
    t.chmod(e, 438, (o) => {
      o
        ? r("ENOENT" === o.code ? null : n)
        : t.stat(e, (o, i) => {
            o
              ? r("ENOENT" === o.code ? null : n)
              : i.isDirectory()
                ? p(e, t, n, r)
                : t.unlink(e, r);
          });
    });
}
function d(e, t, n) {
  let r;
  i(e), i(t);
  try {
    t.chmodSync(e, 438);
  } catch (e) {
    if ("ENOENT" === e.code) return;
    throw n;
  }
  try {
    r = t.statSync(e);
  } catch (e) {
    if ("ENOENT" === e.code) return;
    throw n;
  }
  r.isDirectory() ? h(e, t, n) : t.unlinkSync(e);
}
function p(e, t, n, r) {
  i(e),
    i(t),
    i("function" == typeof r),
    t.rmdir(e, (s) => {
      !s ||
      ("ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code)
        ? s && "ENOTDIR" === s.code
          ? r(n)
          : r(s)
        : (function (e, t, n) {
            i(e),
              i(t),
              i("function" == typeof n),
              t.readdir(e, (r, i) => {
                if (r) return n(r);
                let s,
                  a = i.length;
                if (0 === a) return t.rmdir(e, n);
                i.forEach((r) => {
                  c(o.join(e, r), t, (r) => {
                    if (!s)
                      return r ? n((s = r)) : void (0 === --a && t.rmdir(e, n));
                  });
                });
              });
          })(e, t, r);
    });
}
function f(e, t) {
  let n;
  a((t = t || {})),
    i(e, "rimraf: missing path"),
    i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
    i(t, "rimraf: missing options"),
    i.strictEqual(typeof t, "object", "rimraf: options should be object");
  try {
    n = t.lstatSync(e);
  } catch (n) {
    if ("ENOENT" === n.code) return;
    "EPERM" === n.code && s && d(e, t, n);
  }
  try {
    n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e);
  } catch (n) {
    if ("ENOENT" === n.code) return;
    if ("EPERM" === n.code) return s ? d(e, t, n) : h(e, t, n);
    if ("EISDIR" !== n.code) throw n;
    h(e, t, n);
  }
}
function h(e, t, n) {
  i(e), i(t);
  try {
    t.rmdirSync(e);
  } catch (r) {
    if ("ENOTDIR" === r.code) throw n;
    if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code)
      !(function (e, t) {
        if (
          (i(e), i(t), t.readdirSync(e).forEach((n) => f(o.join(e, n), t)), !s)
        )
          return t.rmdirSync(e, t);
        {
          const n = Date.now();
          do {
            try {
              return t.rmdirSync(e, t);
            } catch {}
          } while (Date.now() - n < 500);
        }
      })(e, t);
    else if ("ENOENT" !== r.code) throw r;
  }
}
(e.exports = c), (c.sync = f);
