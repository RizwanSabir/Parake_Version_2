// vendor/other/module-35997.js — webpack module 35997
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(26132 /* vendor/other/module-26132 */),
  s = n(23819 /* vendor/other/module-23819 */),
  a = "Dataloader",
  c = o.generateInstrumentOnce(a, () => new s.DataloaderInstrumentation()),
  u = r.defineIntegration(() => ({
    name: a,
    setupOnce() {
      i.isOrchestrionInjected()
        ? i.dataloaderChannelIntegration().setupOnce?.()
        : c();
    },
  }));
(t.dataloaderIntegration = u), (t.instrumentDataloader = c);
