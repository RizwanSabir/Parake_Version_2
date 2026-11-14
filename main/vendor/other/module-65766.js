// vendor/other/module-65766.js — webpack module 65766
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(71079 /* vendor/other/module-71079 */),
  s = "Firebase",
  a = o.generateInstrumentOnce(s, () => new i.FirebaseInstrumentation()),
  c = r.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.firebaseIntegration = c), (t.instrumentFirebase = a);
