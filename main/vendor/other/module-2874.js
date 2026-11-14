// vendor/other/module-2874.js — webpack module 2874
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(87862 /* vendor/other/module-87862 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Mongo",
  a = i.generateInstrumentOnce(s, () => new r.MongoDBInstrumentation()),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.instrumentMongo = a), (t.mongoIntegration = c);
