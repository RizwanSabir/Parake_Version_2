// vendor/other/module-61690.js — webpack module 61690
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(52860 /* vendor/other/module-52860 */),
  s = o.defineIntegration(() => ({
    name: "Firebase",
    setupOnce() {
      r.tracingChannel &&
        o.waitForTracingChannelBinding(() => {
          i.instrumentFirebase();
        });
    },
  }));
t.firebaseChannelIntegration = s;
