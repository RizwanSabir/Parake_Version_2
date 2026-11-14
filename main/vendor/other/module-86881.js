// vendor/other/module-86881.js — webpack module 86881
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */);
t.getNavigationEntry = (e = !0) => {
  const t = r.WINDOW.performance?.getEntriesByType?.("navigation")[0];
  if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
    return t;
};
