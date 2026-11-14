// vendor/other/module-96108.js — webpack module 96108
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = r.defineIntegration(({ featureFlagClient: e }) => ({
    name: "Statsig",
    setup(t) {
      e.on("gate_evaluation", (e) => {
        r._INTERNAL_insertFlagToScope(e.gate.name, e.gate.value),
          r._INTERNAL_addFeatureFlagToActiveSpan(e.gate.name, e.gate.value);
      });
    },
    processEvent: (e, t, n) => r._INTERNAL_copyFlagsFromScopeToEvent(e),
  }));
t.statsigIntegration = o;
