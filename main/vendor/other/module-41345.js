// vendor/other/module-41345.js — webpack module 41345
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(71183 /* vendor/other/module-71183 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "GenericPool",
  a = i.generateInstrumentOnce(s, () => new r.GenericPoolInstrumentation({})),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.genericPoolIntegration = c), (t.instrumentGenericPool = a);
