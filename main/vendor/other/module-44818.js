// vendor/other/module-44818.js — webpack module 44818
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(65486 /* vendor/other/module-65486 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = "Mysql2",
  c = i.generateInstrumentOnce(a, () => new r.MySQL2Instrumentation()),
  u = o.defineIntegration(() =>
    o.extendIntegration(s.mysql2Integration(), {
      name: a,
      setupOnce() {
        c();
      },
    }),
  );
(t.instrumentMysql2 = c), (t.mysql2Integration = u);
