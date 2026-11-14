// vendor/other/module-56985.js — webpack module 56985
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(77551 /* vendor/other/module-77551 */),
  s = o.defineIntegration((e = {}) => ({
    name: "Express",
    setupOnce() {
      r.tracingChannel &&
        o.waitForTracingChannelBinding(() => {
          i.instrumentExpress(e, r.tracingChannel);
        });
    },
  }));
t.expressChannelIntegration = s;
