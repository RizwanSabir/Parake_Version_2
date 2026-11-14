// vendor/other/module-92725.js — webpack module 92725
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(84518 /* vendor/other/module-84518 */),
  s = n(40711 /* vendor/other/module-40711 */),
  a = n(85425 /* vendor/other/module-85425 */),
  c = n(73137 /* vendor/other/module-73137 */),
  u = n(79809 /* vendor/other/module-79809 */);
function l() {
  return o
    .getDefaultIntegrations()
    .filter((e) => "Http" !== e.name && "NodeFetch" !== e.name)
    .concat(i.httpIntegration(), s.nativeNodeFetchIntegration());
}
function d(e) {
  return [
    ...l(),
    ...(r.hasSpansEnabled(e) ? a.getAutoPerformanceIntegrations() : []),
  ];
}
function p(e = {}, t) {
  r.applySdkMetadata(e, "node");
  const n =
    c.isDiagnosticsChannelInjectionEnabled() && r.hasSpansEnabled(e)
      ? c.resolveDiagnosticsChannelInjection()
      : void 0;
  n && n.register();
  let i = e.defaultIntegrations ?? t(e);
  if (n && Array.isArray(i) && i.length > 0) {
    const e = new Set(n.replacedOtelIntegrationNames);
    i = [...i.filter((t) => !e.has(t.name)), ...n.integrations];
  }
  const s = o.init({ ...e, defaultIntegrations: i });
  return (
    s &&
      !e.skipOpenTelemetrySetup &&
      (u.initOpenTelemetry(s, {
        spanProcessors: e.openTelemetrySpanProcessors,
      }),
      o.validateOpenTelemetrySetup()),
    n && n.detect(),
    s
  );
}
(t.applyDiagnosticsChannelInjectionIntegrations = function (e, t) {
  if (c.isDiagnosticsChannelInjectionEnabled() && r.hasSpansEnabled(t)) {
    const t = c.resolveDiagnosticsChannelInjection();
    if (t) {
      const n = new Set(t.replacedOtelIntegrationNames);
      return [...e.filter((e) => !n.has(e.name)), ...t.integrations];
    }
  }
  return e;
}),
  (t.getDefaultIntegrations = d),
  (t.getDefaultIntegrationsWithoutPerformance = l),
  (t.init = function (e = {}) {
    return p(e, d);
  }),
  (t.initWithoutDefaultIntegrations = function (e = {}) {
    return p(e, () => []);
  });
