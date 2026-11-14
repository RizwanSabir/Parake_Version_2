// vendor/other/module-23439.js — webpack module 23439
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(49140 /* external/constants */),
  o = process.cwd,
  i = null,
  s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function () {
  return i || (i = o.call(process)), i;
};
try {
  process.cwd();
} catch (e) {}
if ("function" == typeof process.chdir) {
  var a = process.chdir;
  (process.chdir = function (e) {
    (i = null), a.call(process, e);
  }),
    Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a);
}
e.exports = function (e) {
  function t(t) {
    return t
      ? function (n, r, o) {
          return t.call(e, n, r, function (e) {
            u(e) && (e = null), o && o.apply(this, arguments);
          });
        }
      : t;
  }
  function n(t) {
    return t
      ? function (n, r) {
          try {
            return t.call(e, n, r);
          } catch (e) {
            if (!u(e)) throw e;
          }
        }
      : t;
  }
  function o(t) {
    return t
      ? function (n, r, o, i) {
          return t.call(e, n, r, o, function (e) {
            u(e) && (e = null), i && i.apply(this, arguments);
          });
        }
      : t;
  }
  function i(t) {
    return t
      ? function (n, r, o) {
          try {
            return t.call(e, n, r, o);
          } catch (e) {
            if (!u(e)) throw e;
          }
        }
      : t;
  }
  function a(t) {
    return t
      ? function (n, r, o) {
          function i(e, t) {
            t &&
              (t.uid < 0 && (t.uid += 4294967296),
              t.gid < 0 && (t.gid += 4294967296)),
              o && o.apply(this, arguments);
          }
          return (
            "function" == typeof r && ((o = r), (r = null)),
            r ? t.call(e, n, r, i) : t.call(e, n, i)
          );
        }
      : t;
  }
  function c(t) {
    return t
      ? function (n, r) {
          var o = r ? t.call(e, n, r) : t.call(e, n);
          return (
            o &&
              (o.uid < 0 && (o.uid += 4294967296),
              o.gid < 0 && (o.gid += 4294967296)),
            o
          );
        }
      : t;
  }
  function u(e) {
    return (
      !e ||
      "ENOSYS" === e.code ||
      !(
        (process.getuid && 0 === process.getuid()) ||
        ("EINVAL" !== e.code && "EPERM" !== e.code)
      )
    );
  }
  var l;
  r.hasOwnProperty("O_SYMLINK") &&
    process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
    (function (e) {
      (e.lchmod = function (t, n, o) {
        e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function (t, r) {
          t
            ? o && o(t)
            : e.fchmod(r, n, function (t) {
                e.close(r, function (e) {
                  o && o(t || e);
                });
              });
        });
      }),
        (e.lchmodSync = function (t, n) {
          var o,
            i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
            s = !0;
          try {
            (o = e.fchmodSync(i, n)), (s = !1);
          } finally {
            if (s)
              try {
                e.closeSync(i);
              } catch (e) {}
            else e.closeSync(i);
          }
          return o;
        });
    })(e),
    e.lutimes ||
      (function (e) {
        r.hasOwnProperty("O_SYMLINK") && e.futimes
          ? ((e.lutimes = function (t, n, o, i) {
              e.open(t, r.O_SYMLINK, function (t, r) {
                t
                  ? i && i(t)
                  : e.futimes(r, n, o, function (t) {
                      e.close(r, function (e) {
                        i && i(t || e);
                      });
                    });
              });
            }),
            (e.lutimesSync = function (t, n, o) {
              var i,
                s = e.openSync(t, r.O_SYMLINK),
                a = !0;
              try {
                (i = e.futimesSync(s, n, o)), (a = !1);
              } finally {
                if (a)
                  try {
                    e.closeSync(s);
                  } catch (e) {}
                else e.closeSync(s);
              }
              return i;
            }))
          : e.futimes &&
            ((e.lutimes = function (e, t, n, r) {
              r && process.nextTick(r);
            }),
            (e.lutimesSync = function () {}));
      })(e),
    (e.chown = o(e.chown)),
    (e.fchown = o(e.fchown)),
    (e.lchown = o(e.lchown)),
    (e.chmod = t(e.chmod)),
    (e.fchmod = t(e.fchmod)),
    (e.lchmod = t(e.lchmod)),
    (e.chownSync = i(e.chownSync)),
    (e.fchownSync = i(e.fchownSync)),
    (e.lchownSync = i(e.lchownSync)),
    (e.chmodSync = n(e.chmodSync)),
    (e.fchmodSync = n(e.fchmodSync)),
    (e.lchmodSync = n(e.lchmodSync)),
    (e.stat = a(e.stat)),
    (e.fstat = a(e.fstat)),
    (e.lstat = a(e.lstat)),
    (e.statSync = c(e.statSync)),
    (e.fstatSync = c(e.fstatSync)),
    (e.lstatSync = c(e.lstatSync)),
    e.chmod &&
      !e.lchmod &&
      ((e.lchmod = function (e, t, n) {
        n && process.nextTick(n);
      }),
      (e.lchmodSync = function () {})),
    e.chown &&
      !e.lchown &&
      ((e.lchown = function (e, t, n, r) {
        r && process.nextTick(r);
      }),
      (e.lchownSync = function () {})),
    "win32" === s &&
      (e.rename =
        "function" != typeof e.rename
          ? e.rename
          : (function (t) {
              function n(n, r, o) {
                var i = Date.now(),
                  s = 0;
                t(n, r, function a(c) {
                  if (
                    c &&
                    ("EACCES" === c.code ||
                      "EPERM" === c.code ||
                      "EBUSY" === c.code) &&
                    Date.now() - i < 6e4
                  )
                    return (
                      setTimeout(function () {
                        e.stat(r, function (e, i) {
                          e && "ENOENT" === e.code ? t(n, r, a) : o(c);
                        });
                      }, s),
                      void (s < 100 && (s += 10))
                    );
                  o && o(c);
                });
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
            })(e.rename)),
    (e.read =
      "function" != typeof e.read
        ? e.read
        : (function (t) {
            function n(n, r, o, i, s, a) {
              var c;
              if (a && "function" == typeof a) {
                var u = 0;
                c = function (l, d, p) {
                  if (l && "EAGAIN" === l.code && u < 10)
                    return u++, t.call(e, n, r, o, i, s, c);
                  a.apply(this, arguments);
                };
              }
              return t.call(e, n, r, o, i, s, c);
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
          })(e.read)),
    (e.readSync =
      "function" != typeof e.readSync
        ? e.readSync
        : ((l = e.readSync),
          function (t, n, r, o, i) {
            for (var s = 0; ; )
              try {
                return l.call(e, t, n, r, o, i);
              } catch (e) {
                if ("EAGAIN" === e.code && s < 10) {
                  s++;
                  continue;
                }
                throw e;
              }
          }));
};
