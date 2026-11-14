// vendor/other/module-74304.js — webpack module 74304
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(65120 /* vendor/other/module-65120 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Kafka",
  a = i.generateInstrumentOnce(s, () => new r.KafkaJsInstrumentation()),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.instrumentKafka = a), (t.kafkaIntegration = c);
