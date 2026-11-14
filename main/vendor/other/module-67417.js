// vendor/other/module-67417.js — webpack module 67417
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = global.process;
const o = function (e) {
  return (
    e &&
    "object" == typeof e &&
    "function" == typeof e.removeListener &&
    "function" == typeof e.emit &&
    "function" == typeof e.reallyExit &&
    "function" == typeof e.listeners &&
    "function" == typeof e.kill &&
    "number" == typeof e.pid &&
    "function" == typeof e.on
  );
};
if (o(r)) {
  var i,
    s = n(42613 /* external/assert */),
    a = n(91888 /* vendor/other/module-91888 */),
    c = /^win/i.test(r.platform),
    u = n(24434 /* external/events */);
  "function" != typeof u && (u = u.EventEmitter),
    r.__signal_exit_emitter__
      ? (i = r.__signal_exit_emitter__)
      : (((i = r.__signal_exit_emitter__ = new u()).count = 0),
        (i.emitted = {})),
    i.infinite || (i.setMaxListeners(1 / 0), (i.infinite = !0)),
    (e.exports = function (e, t) {
      if (!o(global.process)) return function () {};
      s.equal(
        typeof e,
        "function",
        "a callback must be provided for exit handler",
      ),
        !1 === f && h();
      var n = "exit";
      return (
        t && t.alwaysLast && (n = "afterexit"),
        i.on(n, e),
        function () {
          i.removeListener(n, e),
            0 === i.listeners("exit").length &&
              0 === i.listeners("afterexit").length &&
              l();
        }
      );
    });
  var l = function () {
    f &&
      o(global.process) &&
      ((f = !1),
      a.forEach(function (e) {
        try {
          r.removeListener(e, p[e]);
        } catch (e) {}
      }),
      (r.emit = _),
      (r.reallyExit = g),
      (i.count -= 1));
  };
  e.exports.unload = l;
  var d = function (e, t, n) {
      i.emitted[e] || ((i.emitted[e] = !0), i.emit(e, t, n));
    },
    p = {};
  a.forEach(function (e) {
    p[e] = function () {
      o(global.process) &&
        r.listeners(e).length === i.count &&
        (l(),
        d("exit", null, e),
        d("afterexit", null, e),
        c && "SIGHUP" === e && (e = "SIGINT"),
        r.kill(r.pid, e));
    };
  }),
    (e.exports.signals = function () {
      return a;
    });
  var f = !1,
    h = function () {
      !f &&
        o(global.process) &&
        ((f = !0),
        (i.count += 1),
        (a = a.filter(function (e) {
          try {
            return r.on(e, p[e]), !0;
          } catch (e) {
            return !1;
          }
        })),
        (r.emit = S),
        (r.reallyExit = m));
    };
  e.exports.load = h;
  var g = r.reallyExit,
    m = function (e) {
      o(global.process) &&
        ((r.exitCode = e || 0),
        d("exit", r.exitCode, null),
        d("afterexit", r.exitCode, null),
        g.call(r, r.exitCode));
    },
    _ = r.emit,
    S = function (e, t) {
      if ("exit" === e && o(global.process)) {
        void 0 !== t && (r.exitCode = t);
        var n = _.apply(this, arguments);
        return d("exit", r.exitCode, null), d("afterexit", r.exitCode, null), n;
      }
      return _.apply(this, arguments);
    };
} else
  e.exports = function () {
    return function () {};
  };
