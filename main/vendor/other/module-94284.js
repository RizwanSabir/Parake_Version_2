// vendor/other/module-94284.js — webpack module 94284
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.severityLevelFromString = function (e) {
    return "warn" === e
      ? "warning"
      : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
        ? e
        : "log";
  });
