// vendor/other/module-74706.js — webpack module 74706
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(24340 /* vendor/other/module-24340 */),
  s = o.generateInstrumentOnce(
    r.LANGGRAPH_INTEGRATION_NAME,
    (e) => new i.SentryLangGraphInstrumentation(e),
  ),
  a = r.defineIntegration((e = {}) => ({
    name: r.LANGGRAPH_INTEGRATION_NAME,
    setupOnce() {
      s(e);
    },
  }));
(t.instrumentLangGraph = s), (t.langGraphIntegration = a);
