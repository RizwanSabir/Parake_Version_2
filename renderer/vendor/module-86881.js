// vendor/module-86881.js — webpack module 86881
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */);
t.getNavigationEntry = (e = !0) => {
  const t = r.WINDOW.performance?.getEntriesByType?.("navigation")[0];
  if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
    return t;
};
