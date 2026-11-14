// vendor/other/module-41636.js — webpack module 41636
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
t.addOriginToSpan = function (e, t) {
  e.setAttribute(r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, t);
};
