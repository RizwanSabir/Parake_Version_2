// vendor/other/module-40711.js — webpack module 40711
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27134 /* vendor/other/module-27134 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = o.defineIntegration((e = {}) => ({
    name: "NodeFetch",
    setupOnce() {
      const t = o.getClient()?.getOptions();
      r.instrumentUndici({ ...e, spans: s(e, t) });
    },
  }));
function s(e, t = {}) {
  return e.spans ?? (!t.skipOpenTelemetrySetup && o.hasSpansEnabled(t));
}
t.nativeNodeFetchIntegration = i;
