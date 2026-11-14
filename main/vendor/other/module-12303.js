// vendor/other/module-12303.js — webpack module 12303
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = r.defineIntegration(({ featureFlagClientClass: e }) => ({
    name: "Unleash",
    setupOnce() {
      const t = e.prototype;
      r.fill(t, "isEnabled", s);
    },
    processEvent: (e, t, n) => r._INTERNAL_copyFlagsFromScopeToEvent(e),
  }));
function s(e) {
  return function (...t) {
    const n = t[0],
      i = e.apply(this, t);
    return (
      "string" == typeof n && "boolean" == typeof i
        ? (r._INTERNAL_insertFlagToScope(n, i),
          r._INTERNAL_addFeatureFlagToActiveSpan(n, i))
        : o.DEBUG_BUILD &&
          r.debug.error(
            `[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${i} (${typeof i})`,
          ),
      i
    );
  };
}
t.unleashIntegration = i;
