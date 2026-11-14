// vendor/other/module-98050.js — webpack module 98050
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.safeUnref = function (e) {
    return "object" == typeof e && "function" == typeof e.unref && e.unref(), e;
  });
