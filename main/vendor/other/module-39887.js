// vendor/other/module-39887.js — webpack module 39887
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = globalThis;
t.setGlobalTracingHelper = function (e) {
  const t = { helper: e };
  (n.V7_PRISMA_INSTRUMENTATION = t), (n.PRISMA_INSTRUMENTATION = t);
};
