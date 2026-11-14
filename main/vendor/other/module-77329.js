// vendor/other/module-77329.js — webpack module 77329
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88183 /* vendor/other/module-88183 */),
  o = n(21646 /* vendor/other/module-21646 */),
  i = r.buildFeedbackIntegration({
    lazyLoadIntegration: o.lazyLoadIntegration,
  });
t.feedbackAsyncIntegration = i;
