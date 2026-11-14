// vendor/other/module-62148.js — webpack module 62148
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
t.registerOrchestrionChannelIntegration = function (e, t) {
  var n;
  const o =
    (n = r.GLOBAL_OBJ).__SENTRY_ORCHESTRION__ ??
    (n.__SENTRY_ORCHESTRION__ = {});
  (o.integrations ?? (o.integrations = new Map())).set(e, t),
    r.getClient()?.addIntegration(t());
};
