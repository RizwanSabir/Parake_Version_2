// vendor/other/module-85437.js — webpack module 85437
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(54731 /* vendor/other/module-54731 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Postgres",
  a = i.generateInstrumentOnce(s, r.PgInstrumentation, (e) => ({
    ignoreConnectSpans: e?.ignoreConnectSpans ?? !1,
  })),
  c = o.defineIntegration((e) => ({
    name: s,
    setupOnce() {
      a(e);
    },
  }));
(t.instrumentPostgres = a), (t.postgresIntegration = c);
