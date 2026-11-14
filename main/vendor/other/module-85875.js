// vendor/other/module-85875.js — webpack module 85875
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(26806 /* vendor/other/module-26806 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = "Mongoose",
  c = i.generateInstrumentOnce(a, () => new r.MongooseInstrumentation()),
  u = o.defineIntegration(() =>
    o.extendIntegration(s.mongooseIntegration(), {
      name: a,
      setupOnce() {
        c();
      },
    }),
  );
(t.instrumentMongoose = c), (t.mongooseIntegration = u);
