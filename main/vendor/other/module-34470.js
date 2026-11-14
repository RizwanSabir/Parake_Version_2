// vendor/other/module-34470.js — webpack module 34470
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(26132 /* vendor/other/module-26132 */),
  o = n(23306 /* vendor/other/module-23306 */),
  i = n(56943 /* vendor/other/module-56943 */),
  s = n(73137 /* vendor/other/module-73137 */);
(t.diagnosticsChannelInjectionIntegrations = function () {
  return r.channelIntegrations;
}),
  (t.experimentalUseDiagnosticsChannelInjection = function (e) {
    s.setDiagnosticsChannelInjectionLoader(() => {
      const t = Object.values(r.channelIntegrations).map((e) => e()),
        n = t.map((e) => e.name);
      return {
        integrations: [
          ...t,
          r.ioredisChannelIntegration({
            responseHook: i.cacheResponseHook,
          }),
          r.redisChannelIntegration({
            responseHook: i.cacheResponseHook,
          }),
        ],
        replacedOtelIntegrationNames: n,
        register: () => o.registerDiagnosticsChannelInjection(e),
        detect: r.detectOrchestrionSetup,
      };
    });
  });
