// vendor/other/module-34882.js — webpack module 34882
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.generateUniqueID = () =>
    `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`);
