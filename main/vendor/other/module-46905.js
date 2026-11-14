// vendor/other/module-46905.js — webpack module 46905
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(5545 /* vendor/other/module-5545 */);
t.setIsolationScope = function (e) {
  const t = o.getScopesFromContext(r.context.active());
  t && (t.isolationScope = e);
};
