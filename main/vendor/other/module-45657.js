// vendor/other/module-45657.js — webpack module 45657
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = r.defineIntegration(() => ({
    name: "LaunchDarkly",
    processEvent: (e, t, n) => r._INTERNAL_copyFlagsFromScopeToEvent(e),
  }));
(t.buildLaunchDarklyFlagUsedHandler = function () {
  return {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: !0,
    method: (e, t, n) => {
      r._INTERNAL_insertFlagToScope(e, t.value),
        r._INTERNAL_addFeatureFlagToActiveSpan(e, t.value);
    },
  };
}),
  (t.launchDarklyIntegration = o);
