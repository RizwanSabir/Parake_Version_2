// vendor/other/module-75043.js — webpack module 75043
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(32709 /* vendor/other/module-32709 */),
  s = o.generateInstrumentOnce(
    r.ANTHROPIC_AI_INTEGRATION_NAME,
    (e) => new i.SentryAnthropicAiInstrumentation(e),
  ),
  a = r.defineIntegration((e = {}) => ({
    name: r.ANTHROPIC_AI_INTEGRATION_NAME,
    options: e,
    setupOnce() {
      s(e);
    },
  }));
(t.anthropicAIIntegration = a), (t.instrumentAnthropicAi = s);
