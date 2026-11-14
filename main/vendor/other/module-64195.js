// vendor/other/module-64195.js — webpack module 64195
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(61337 /* vendor/other/module-61337 */),
  s = r.defineIntegration(() => ({
    name: "Mongoose",
    setupOnce() {
      o.tracingChannel &&
        r.waitForTracingChannelBinding(() => {
          i.subscribeMongooseDiagnosticChannels(o.tracingChannel);
        });
    },
  }));
t.mongooseIntegration = s;
