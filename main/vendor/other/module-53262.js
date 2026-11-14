// vendor/other/module-53262.js — webpack module 53262
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37290 /* vendor/other/module-37290 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(26132 /* vendor/other/module-26132 */),
  a = "Knex",
  c = i.generateInstrumentOnce(a, () => new r.KnexInstrumentation()),
  u = o.defineIntegration(() => ({
    name: a,
    setupOnce() {
      s.isOrchestrionInjected()
        ? s.knexChannelIntegration().setupOnce?.()
        : c();
    },
  }));
(t.instrumentKnex = c), (t.knexIntegration = u);
