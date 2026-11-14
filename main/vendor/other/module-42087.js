// vendor/other/module-42087.js — webpack module 42087
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */);
t.growthbookIntegration = ({ growthbookClass: e }) =>
  r.growthbookIntegration({ growthbookClass: e });
