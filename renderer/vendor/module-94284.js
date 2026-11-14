// vendor/module-94284.js — webpack module 94284
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.severityLevelFromString = function (e) {
    return "warn" === e
      ? "warning"
      : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
        ? e
        : "log";
  });
