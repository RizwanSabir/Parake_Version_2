// vendor/other/module-68998.js — webpack module 68998
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r,
  o,
  i = n(79896 /* external/fs */),
  s = n(23439 /* vendor/other/module-23439 */),
  a = n(29012 /* vendor/other/module-29012 */),
  c = n(35702 /* vendor/other/module-35702 */),
  u = n(39023 /* external/util */);
function l(e, t) {
  Object.defineProperty(e, r, {
    get: function () {
      return t;
    },
  });
}
"function" == typeof Symbol && "function" == typeof Symbol.for
  ? ((r = Symbol.for("graceful-fs.queue")),
    (o = Symbol.for("graceful-fs.previous")))
  : ((r = "___graceful-fs.queue"), (o = "___graceful-fs.previous"));
var d,
  p = function () {};
if (
  (u.debuglog
    ? (p = u.debuglog("gfs4"))
    : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      (p = function () {
        var e = u.format.apply(u, arguments);
        e = "GFS4: " + e.split(/\n/).join("\nGFS4: ");
      }),
  !i[r])
) {
  var f = global[r] || [];
  l(i, f),
    (i.close = (function (e) {
      function t(t, n) {
        return e.call(i, t, function (e) {
          e || m(), "function" == typeof n && n.apply(this, arguments);
        });
      }
      return Object.defineProperty(t, o, { value: e }), t;
    })(i.close)),
    (i.closeSync = (function (e) {
      function t(t) {
        e.apply(i, arguments), m();
      }
      return Object.defineProperty(t, o, { value: e }), t;
    })(i.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
      process.on("exit", function () {
        p(i[r]), n(42613 /* external/assert */).equal(i[r].length, 0);
      });
}
function h(e) {
  s(e),
    (e.gracefulify = h),
    (e.createReadStream = function (t, n) {
      return new e.ReadStream(t, n);
    }),
    (e.createWriteStream = function (t, n) {
      return new e.WriteStream(t, n);
    });
  var t = e.readFile;
  e.readFile = function (e, n, r) {
    return (
      "function" == typeof n && ((r = n), (n = null)),
      (function e(n, r, o, i) {
        return t(n, r, function (t) {
          !t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
            ? "function" == typeof o && o.apply(this, arguments)
            : g([e, [n, r, o], t, i || Date.now(), Date.now()]);
        });
      })(e, n, r)
    );
  };
  var n = e.writeFile;
  e.writeFile = function (e, t, r, o) {
    return (
      "function" == typeof r && ((o = r), (r = null)),
      (function e(t, r, o, i, s) {
        return n(t, r, o, function (n) {
          !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
            ? "function" == typeof i && i.apply(this, arguments)
            : g([e, [t, r, o, i], n, s || Date.now(), Date.now()]);
        });
      })(e, t, r, o)
    );
  };
  var r = e.appendFile;
  r &&
    (e.appendFile = function (e, t, n, o) {
      return (
        "function" == typeof n && ((o = n), (n = null)),
        (function e(t, n, o, i, s) {
          return r(t, n, o, function (r) {
            !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
              ? "function" == typeof i && i.apply(this, arguments)
              : g([e, [t, n, o, i], r, s || Date.now(), Date.now()]);
          });
        })(e, t, n, o)
      );
    });
  var o = e.copyFile;
  o &&
    (e.copyFile = function (e, t, n, r) {
      return (
        "function" == typeof n && ((r = n), (n = 0)),
        (function e(t, n, r, i, s) {
          return o(t, n, r, function (o) {
            !o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
              ? "function" == typeof i && i.apply(this, arguments)
              : g([e, [t, n, r, i], o, s || Date.now(), Date.now()]);
          });
        })(e, t, n, r)
      );
    });
  var i = e.readdir;
  e.readdir = function (e, t, n) {
    "function" == typeof t && ((n = t), (t = null));
    var r = c.test(process.version)
      ? function (e, t, n, r) {
          return i(e, o(e, t, n, r));
        }
      : function (e, t, n, r) {
          return i(e, t, o(e, t, n, r));
        };
    return r(e, t, n);
    function o(e, t, n, o) {
      return function (i, s) {
        !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
          ? (s && s.sort && s.sort(),
            "function" == typeof n && n.call(this, i, s))
          : g([r, [e, t, n], i, o || Date.now(), Date.now()]);
      };
    }
  };
  var c = /^v[0-5]\./;
  if ("v0.8" === process.version.substr(0, 4)) {
    var u = a(e);
    (m = u.ReadStream), (_ = u.WriteStream);
  }
  var l = e.ReadStream;
  l &&
    ((m.prototype = Object.create(l.prototype)),
    (m.prototype.open = function () {
      var e = this;
      E(e.path, e.flags, e.mode, function (t, n) {
        t
          ? (e.autoClose && e.destroy(), e.emit("error", t))
          : ((e.fd = n), e.emit("open", n), e.read());
      });
    }));
  var d = e.WriteStream;
  d &&
    ((_.prototype = Object.create(d.prototype)),
    (_.prototype.open = function () {
      var e = this;
      E(e.path, e.flags, e.mode, function (t, n) {
        t ? (e.destroy(), e.emit("error", t)) : ((e.fd = n), e.emit("open", n));
      });
    })),
    Object.defineProperty(e, "ReadStream", {
      get: function () {
        return m;
      },
      set: function (e) {
        m = e;
      },
      enumerable: !0,
      configurable: !0,
    }),
    Object.defineProperty(e, "WriteStream", {
      get: function () {
        return _;
      },
      set: function (e) {
        _ = e;
      },
      enumerable: !0,
      configurable: !0,
    });
  var p = m;
  Object.defineProperty(e, "FileReadStream", {
    get: function () {
      return p;
    },
    set: function (e) {
      p = e;
    },
    enumerable: !0,
    configurable: !0,
  });
  var f = _;
  function m(e, t) {
    return this instanceof m
      ? (l.apply(this, arguments), this)
      : m.apply(Object.create(m.prototype), arguments);
  }
  function _(e, t) {
    return this instanceof _
      ? (d.apply(this, arguments), this)
      : _.apply(Object.create(_.prototype), arguments);
  }
  Object.defineProperty(e, "FileWriteStream", {
    get: function () {
      return f;
    },
    set: function (e) {
      f = e;
    },
    enumerable: !0,
    configurable: !0,
  });
  var S = e.open;
  function E(e, t, n, r) {
    return (
      "function" == typeof n && ((r = n), (n = null)),
      (function e(t, n, r, o, i) {
        return S(t, n, r, function (s, a) {
          !s || ("EMFILE" !== s.code && "ENFILE" !== s.code)
            ? "function" == typeof o && o.apply(this, arguments)
            : g([e, [t, n, r, o], s, i || Date.now(), Date.now()]);
        });
      })(e, t, n, r)
    );
  }
  return (e.open = E), e;
}
function g(e) {
  p("ENQUEUE", e[0].name, e[1]), i[r].push(e), _();
}
function m() {
  for (var e = Date.now(), t = 0; t < i[r].length; ++t)
    i[r][t].length > 2 && ((i[r][t][3] = e), (i[r][t][4] = e));
  _();
}
function _() {
  if ((clearTimeout(d), (d = void 0), 0 !== i[r].length)) {
    var e = i[r].shift(),
      t = e[0],
      n = e[1],
      o = e[2],
      s = e[3],
      a = e[4];
    if (void 0 === s) p("RETRY", t.name, n), t.apply(null, n);
    else if (Date.now() - s >= 6e4) {
      p("TIMEOUT", t.name, n);
      var c = n.pop();
      "function" == typeof c && c.call(null, o);
    } else {
      var u = Date.now() - a,
        l = Math.max(a - s, 1);
      u >= Math.min(1.2 * l, 100)
        ? (p("RETRY", t.name, n), t.apply(null, n.concat([s])))
        : i[r].push(e);
    }
    void 0 === d && (d = setTimeout(_, 0));
  }
}
global[r] || l(global, i[r]),
  (e.exports = h(c(i))),
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
    !i.__patched &&
    ((e.exports = h(i)), (i.__patched = !0));
