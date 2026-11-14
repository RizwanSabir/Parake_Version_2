// vendor/other/module-6316.js — webpack module 6316
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(32314 /* vendor/other/module-32314 */),
  o = n(51774 /* vendor/other/module-51774 */),
  i = n(78315 /* vendor/other/module-78315 */);
t.localVariablesIntegration = (e = {}) =>
  r.NODE_VERSION.major < 19
    ? i.localVariablesSyncIntegration(e)
    : o.localVariablesAsyncIntegration(e);
