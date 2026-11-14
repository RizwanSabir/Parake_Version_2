// vendor/other/module-98750.js — webpack module 98750
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(69869 /* vendor/other/module-69869 */),
  i = n(53053 /* external/node_diagnostics_channel */),
  s = r.defineIntegration((e = {}) => ({
    name: "VercelAI",
    setupOnce() {
      i.tracingChannel &&
        r.waitForTracingChannelBinding(() => {
          o.subscribeVercelAiTracingChannel(i.tracingChannel, e);
        });
    },
  }));
t.vercelAiIntegration = s;
