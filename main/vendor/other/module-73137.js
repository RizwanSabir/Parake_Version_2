// vendor/other/module-73137.js — webpack module 73137
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
let n, r;
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.isDiagnosticsChannelInjectionEnabled = function () {
    return !!n;
  }),
  (t.resolveDiagnosticsChannelInjection = function () {
    if (n) return r ?? (r = n());
  }),
  (t.setDiagnosticsChannelInjectionLoader = function (e) {
    n = e;
  });
