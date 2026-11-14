// vendor/other/module-4484.js — webpack module 4484
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(71796 /* vendor/other/module-71796 */),
  s = "Amqplib",
  a = o.generateInstrumentOnce(s, () => new i.AmqplibInstrumentation()),
  c = r.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.amqplibIntegration = c), (t.instrumentAmqplib = a);
