// vendor/other/module-66049.js — webpack module 66049
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(2029 /* vendor/other/module-2029 */),
  s = r.defineIntegration((e = {}) => ({
    name: "Redis",
    setupOnce() {
      o.tracingChannel &&
        r.waitForTracingChannelBinding(() => {
          i.subscribeRedisDiagnosticChannels(o.tracingChannel, e.responseHook);
        });
    },
  }));
t.redisIntegration = s;
