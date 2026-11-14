// vendor/other/module-37113.js — webpack module 37113
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/other/module-82579 */),
  o = n(44714 /* vendor/other/module-44714 */),
  i = n(68020 /* vendor/other/module-68020 */),
  s = r.defineIntegration(({ growthbookClass: e }) => ({
    name: "GrowthBook",
    setupOnce() {
      const t = e.prototype;
      "function" == typeof t.isOn && i.fill(t, "isOn", a),
        "function" == typeof t.getFeatureValue &&
          i.fill(t, "getFeatureValue", a);
    },
    processEvent: (e, t, n) => o._INTERNAL_copyFlagsFromScopeToEvent(e),
  }));
function a(e) {
  return function (...t) {
    const n = t[0],
      r = e.apply(this, t);
    return (
      "string" == typeof n &&
        "boolean" == typeof r &&
        (o._INTERNAL_insertFlagToScope(n, r),
        o._INTERNAL_addFeatureFlagToActiveSpan(n, r)),
      r
    );
  };
}
t.growthbookIntegration = s;
