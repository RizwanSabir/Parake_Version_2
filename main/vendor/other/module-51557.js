// vendor/other/module-51557.js — webpack module 51557
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(96137 /* vendor/other/module-96137 */);
t.setupOpenTelemetryLogger = function () {
  r.diag.disable(),
    r.diag.setLogger(
      {
        error: o.debug.error,
        warn: o.debug.warn,
        info: o.debug.log,
        debug: o.debug.log,
        verbose: o.debug.log,
      },
      r.DiagLogLevel.DEBUG,
    );
};
