// vendor/other/module-77266.js — webpack module 77266
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
    (this && this.__assign) ||
    function () {
      return (
        (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        r.apply(this, arguments)
      );
    },
  o =
    (this && this.__awaiter) ||
    function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    },
  i =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(a) {
        return function (c) {
          return (function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; i && ((i = 0), a[0] && (s = 0)), s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & a[0]
                        ? r.return
                        : a[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, a[1])).done)
                )
                  return o;
                switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    return s.label++, { value: a[1], done: !1 };
                  case 5:
                    s.label++, (r = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0])
                      )
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                      s.label = a[1];
                      break;
                    }
                    if (6 === a[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = a);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(a);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                a = t.call(e, s);
              } catch (e) {
                (a = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, c]);
        };
      }
    },
  s =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    },
  a = s(n(84157 /* external/electron */)),
  c = s(n(79896 /* external/fs */)),
  u = s(n(88531 /* vendor/other/module-88531 */)),
  l = s(n(16928 /* external/path */)),
  d = s(n(62272 /* vendor/other/module-62272 */)),
  p = n(45250 /* vendor/other/module-45250 */),
  f = {
    atomicSave: !0,
    fileName: "settings.json",
    numSpaces: 2,
    prettify: !1,
  },
  h = r({}, f);
function g() {
  var e;
  return null !== (e = h.dir) && void 0 !== e
    ? e
    : (function () {
        var e,
          t = (function () {
            var e;
            return null !== (e = h.electron) && void 0 !== e ? e : a.default;
          })();
        return null !== (e = t.app) && void 0 !== e ? e : t.remote.app;
      })().getPath("userData");
}
function m() {
  var e = g();
  return l.default.join(e, h.fileName);
}
function _() {
  return ((e = m()),
  new Promise(function (t, n) {
    c.default.stat(e, function (e) {
      e ? ("ENOENT" === e.code ? E({}).then(t, n) : n(e)) : t();
    });
  })).then(function () {
    var e = m();
    return new Promise(function (t, n) {
      c.default.readFile(e, "utf-8", function (e, r) {
        if (e) n(e);
        else
          try {
            t(JSON.parse(r));
          } catch (e) {
            n(e);
          }
      });
    });
  });
  var e;
}
function S() {
  var e = m();
  !(function () {
    var e = m();
    try {
      c.default.statSync(e);
    } catch (e) {
      if (e) {
        if ("ENOENT" !== e.code) throw e;
        y({});
      }
    }
  })();
  var t = c.default.readFileSync(e, "utf-8");
  return JSON.parse(t);
}
function E(e) {
  return ((t = g()),
  new Promise(function (e, n) {
    c.default.stat(t, function (r) {
      r
        ? "ENOENT" === r.code
          ? (0, u.default)(t).then(function () {
              return e();
            }, n)
          : n(r)
        : e();
    });
  })).then(function () {
    var t = m(),
      n = h.prettify ? h.numSpaces : 0,
      r = JSON.stringify(e, null, n);
    return new Promise(function (e, n) {
      h.atomicSave
        ? (0, d.default)(t, r, function (t) {
            return t ? n(t) : e();
          })
        : c.default.writeFile(t, r, function (t) {
            return t ? n(t) : e();
          });
    });
  });
  var t;
}
function y(e) {
  var t = m(),
    n = h.prettify ? h.numSpaces : 0,
    r = JSON.stringify(e, null, n);
  !(function () {
    var e = g();
    try {
      c.default.statSync(e);
    } catch (t) {
      if (!t) throw t;
      "ENOENT" === t.code && u.default.sync(e);
    }
  })(),
    h.atomicSave ? d.default.sync(t, r) : c.default.writeFileSync(t, r);
}
e.exports = {
  file: function () {
    return m();
  },
  configure: function (e) {
    h = r(r({}, h), e);
  },
  reset: function () {
    h = r({}, f);
  },
  has: function (e) {
    return o(this, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, _()];
          case 1:
            return (t = n.sent()), [2, (0, p.has)(t, e)];
        }
      });
    });
  },
  hasSync: function (e) {
    var t = S();
    return (0, p.has)(t, e);
  },
  get: function (e) {
    return o(this, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, _()];
          case 1:
            return (t = n.sent()), e ? [2, (0, p.get)(t, e)] : [2, t];
        }
      });
    });
  },
  getSync: function (e) {
    var t = S();
    return e ? (0, p.get)(t, e) : t;
  },
  set: function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return o(this, void 0, void 0, function () {
      var t, n, r;
      return i(this, function (o) {
        switch (o.label) {
          case 0:
            return 1 !== e.length ? [3, 1] : [2, E((n = e[0]))];
          case 1:
            return (t = e[0]), (n = e[1]), [4, _()];
          case 2:
            return (r = o.sent()), (0, p.set)(r, t, n), [2, E(r)];
        }
      });
    });
  },
  setSync: function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    if (1 === e.length) y((r = e[0]));
    else {
      var n = e[0],
        r = e[1],
        o = S();
      (0, p.set)(o, n, r), y(o);
    }
  },
  unset: function (e) {
    return o(this, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return e ? [4, _()] : [3, 2];
          case 1:
            return (t = n.sent()), (0, p.unset)(t, e), [2, E(t)];
          case 2:
            return [2, E({})];
        }
      });
    });
  },
  unsetSync: function (e) {
    if (e) {
      var t = S();
      (0, p.unset)(t, e), y(t);
    } else y({});
  },
};
