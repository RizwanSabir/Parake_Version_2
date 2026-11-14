// vendor/other/module-52520.js — webpack module 52520
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(14052 /* vendor/other/module-14052 */),
  i = n(95870 /* vendor/other/module-95870 */),
  s = ["trace", "debug", "info", "warn", "error", "fatal"],
  a = Symbol.for("level"),
  c = Symbol.for("message"),
  u = Symbol.for("splat"),
  l = {
    silly: "trace",
    debug: "debug",
    verbose: "debug",
    http: "debug",
    info: "info",
    notice: "info",
    warn: "warn",
    warning: "warn",
    error: "error",
    emerg: "fatal",
    alert: "fatal",
    crit: "fatal",
  };
t.createSentryWinstonTransport = function (e, t) {
  return class extends e {
    constructor(e) {
      super(e), (this._levels = new Set(t?.levels ?? s));
    }
    log(e, n) {
      try {
        if (
          (setImmediate(() => {
            this.emit("logged", e);
          }),
          !r.isObjectLike(e))
        )
          return;
        const n = e[a],
          { level: s, message: d, timestamp: p, ...f } = e;
        (f[a] = void 0), (f[c] = void 0), (f[u] = void 0);
        const h = t?.customLevelMap?.[n],
          g = l[n],
          m = h ?? g ?? "info";
        this._levels.has(m)
          ? i.captureLog(m, d, {
              ...f,
              "sentry.origin": "auto.log.winston",
            })
          : h ||
            g ||
            (o.DEBUG_BUILD &&
              r.debug.log(
                `Winston log level ${n} is not captured by Sentry. Please add ${n} to the "customLevelMap" option of the Sentry Winston transport.`,
              ));
      } catch {}
      n && n();
    }
  };
};
