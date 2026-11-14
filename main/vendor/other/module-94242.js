// vendor/other/module-94242.js — webpack module 94242
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(53053 /* external/node_diagnostics_channel */),
  i = n(72739 /* vendor/other/module-72739 */),
  s = r.defineIntegration(() => ({
    name: "Mysql2",
    setupOnce() {
      o.tracingChannel &&
        r.waitForTracingChannelBinding(() => {
          i.subscribeMysql2DiagnosticChannels(o.tracingChannel);
        });
    },
  }));
t.mysql2Integration = s;
