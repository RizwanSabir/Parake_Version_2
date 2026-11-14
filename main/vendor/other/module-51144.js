// vendor/other/module-51144.js — webpack module 51144
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(54920 /* vendor/other/module-54920 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Mysql",
  a = i.generateInstrumentOnce(s, () => new r.MySQLInstrumentation({})),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.instrumentMysql = a), (t.mysqlIntegration = c);
