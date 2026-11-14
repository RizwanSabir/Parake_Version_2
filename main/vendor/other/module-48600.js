// vendor/other/module-48600.js — webpack module 48600
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(90862 /* vendor/other/module-90862 */),
  s = o.generateInstrumentOnce(
    r.OPENAI_INTEGRATION_NAME,
    (e) => new i.SentryOpenAiInstrumentation(e),
  ),
  a = r.defineIntegration((e = {}) => ({
    name: r.OPENAI_INTEGRATION_NAME,
    setupOnce() {
      s(e);
    },
  }));
(t.instrumentOpenAi = s), (t.openAIIntegration = a);
