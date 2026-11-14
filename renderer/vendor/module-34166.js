// vendor/module-34166.js — webpack module 34166
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/module-82579 */),
  o = n(44714 /* vendor/module-44714 */),
  i = r.defineIntegration(() => ({
    name: "FeatureFlags",
    processEvent: (e, t, n) => o._INTERNAL_copyFlagsFromScopeToEvent(e),
    addFeatureFlag(e, t) {
      o._INTERNAL_insertFlagToScope(e, t),
        o._INTERNAL_addFeatureFlagToActiveSpan(e, t);
    },
  }));
t.featureFlagsIntegration = i;
