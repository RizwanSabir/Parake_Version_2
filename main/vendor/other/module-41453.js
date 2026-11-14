// vendor/other/module-41453.js — webpack module 41453
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = r.defineIntegration(() => ({
    name: "OpenFeature",
    processEvent: (e, t, n) => r._INTERNAL_copyFlagsFromScopeToEvent(e),
  }));
(t.OpenFeatureIntegrationHook = class {
  after(e, t) {
    r._INTERNAL_insertFlagToScope(t.flagKey, t.value),
      r._INTERNAL_addFeatureFlagToActiveSpan(t.flagKey, t.value);
  }
  error(e, t, n) {
    r._INTERNAL_insertFlagToScope(e.flagKey, e.defaultValue),
      r._INTERNAL_addFeatureFlagToActiveSpan(e.flagKey, e.defaultValue);
  }
}),
  (t.openFeatureIntegration = o);
