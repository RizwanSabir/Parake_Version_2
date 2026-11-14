// vendor/other/module-94991.js — webpack module 94991
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(21353 /* vendor/other/module-21353 */),
  s = o.generateInstrumentOnce(
    r.LANGCHAIN_INTEGRATION_NAME,
    (e) => new i.SentryLangChainInstrumentation(e),
  ),
  a = r.defineIntegration((e = {}) => ({
    name: r.LANGCHAIN_INTEGRATION_NAME,
    setupOnce() {
      s(e);
    },
  }));
(t.instrumentLangChain = s), (t.langChainIntegration = a);
