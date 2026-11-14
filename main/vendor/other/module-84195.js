// vendor/other/module-84195.js — webpack module 84195
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(50405 /* vendor/other/module-50405 */),
  s = r.defineIntegration((e = {}) => ({
    name: "Graphql",
    setupOnce() {
      o.tracingChannel &&
        r.waitForTracingChannelBinding(() => {
          i.subscribeGraphqlDiagnosticChannels(o.tracingChannel, e);
        });
    },
  }));
t.graphqlIntegration = s;
