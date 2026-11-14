// vendor/other/module-41711.js — webpack module 41711
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(61969 /* vendor/other/module-61969 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Tedious",
  a = i.generateInstrumentOnce(s, () => new r.TediousInstrumentation({})),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.instrumentTedious = a), (t.tediousIntegration = c);
