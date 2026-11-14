// vendor/other/module-21042.js — webpack module 21042
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getDefaultExport = function (e) {
    return (!!e && "object" == typeof e && "default" in e && e.default) || e;
  });
