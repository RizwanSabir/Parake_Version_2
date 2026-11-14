// vendor/other/module-32535.js — webpack module 32535
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { K: () => a });
var r = n(71895 /* vendor/other/module-71895 */);
class o {
  constructor(e) {
    this._namespace = e.namespace || "DiagComponentLogger";
  }
  debug(...e) {
    return i("debug", this._namespace, e);
  }
  error(...e) {
    return i("error", this._namespace, e);
  }
  info(...e) {
    return i("info", this._namespace, e);
  }
  warn(...e) {
    return i("warn", this._namespace, e);
  }
  verbose(...e) {
    return i("verbose", this._namespace, e);
  }
}
function i(e, t, n) {
  const o = (0, r.mS)("diag");
  if (o) return o[e](t, ...n);
}
var s = n(79232 /* vendor/other/module-79232 */);
class a {
  static instance() {
    return this._instance || (this._instance = new a()), this._instance;
  }
  constructor() {
    function e(e) {
      return function (...t) {
        const n = (0, r.mS)("diag");
        if (n) return n[e](...t);
      };
    }
    const t = this;
    (t.setLogger = (e, n = { logLevel: s.u.INFO }) => {
      var o, i, a;
      if (e === t) {
        const e = new Error(
          "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
        );
        return (
          t.error(null !== (o = e.stack) && void 0 !== o ? o : e.message), !1
        );
      }
      "number" == typeof n && (n = { logLevel: n });
      const c = (0, r.mS)("diag"),
        u = (function (e, t) {
          function n(n, r) {
            const o = t[n];
            return "function" == typeof o && e >= r
              ? o.bind(t)
              : function () {};
          }
          return (
            e < s.u.NONE ? (e = s.u.NONE) : e > s.u.ALL && (e = s.u.ALL),
            (t = t || {}),
            {
              error: n("error", s.u.ERROR),
              warn: n("warn", s.u.WARN),
              info: n("info", s.u.INFO),
              debug: n("debug", s.u.DEBUG),
              verbose: n("verbose", s.u.VERBOSE),
            }
          );
        })(null !== (i = n.logLevel) && void 0 !== i ? i : s.u.INFO, e);
      if (c && !n.suppressOverrideMessage) {
        const e =
          null !== (a = new Error().stack) && void 0 !== a
            ? a
            : "<failed to generate stacktrace>";
        c.warn(`Current logger will be overwritten from ${e}`),
          u.warn(
            `Current logger will overwrite one already registered from ${e}`,
          );
      }
      return (0, r.$G)("diag", u, t, !0);
    }),
      (t.disable = () => {
        (0, r.kv)("diag", t);
      }),
      (t.createComponentLogger = (e) => new o(e)),
      (t.verbose = e("verbose")),
      (t.debug = e("debug")),
      (t.info = e("info")),
      (t.warn = e("warn")),
      (t.error = e("error"));
  }
}
