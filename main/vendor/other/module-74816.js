// vendor/other/module-74816.js — webpack module 74816
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.isElement = function (e) {
    if ("undefined" == typeof Element) return !1;
    try {
      return e instanceof Element;
    } catch {
      return !1;
    }
  });
