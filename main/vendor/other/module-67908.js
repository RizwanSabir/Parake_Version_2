// vendor/other/module-67908.js — webpack module 67908
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(13538 /* vendor/other/module-13538 */),
  s = o.generateInstrumentOnce(
    r.GOOGLE_GENAI_INTEGRATION_NAME,
    (e) => new i.SentryGoogleGenAiInstrumentation(e),
  ),
  a = r.defineIntegration((e = {}) => ({
    name: r.GOOGLE_GENAI_INTEGRATION_NAME,
    setupOnce() {
      s(e);
    },
  }));
(t.googleGenAIIntegration = a), (t.instrumentGoogleGenAI = s);
