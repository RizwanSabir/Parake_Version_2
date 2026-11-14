// vendor/other/module-43938.js — webpack module 43938
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(98750 /* vendor/other/module-98750 */),
  i = n(53053 /* external/node_diagnostics_channel */),
  s = n(89828 /* vendor/other/module-89828 */),
  a = r.defineIntegration((e = {}) => {
    const t = o.vercelAiIntegration(e);
    return r.extendIntegration(t, {
      options: e,
      setupOnce() {
        i.tracingChannel &&
          r.waitForTracingChannelBinding(() => {
            s.subscribeVercelAiOrchestrionChannels(i.tracingChannel, e);
          });
      },
    });
  });
t.vercelAiChannelIntegration = a;
