// vendor/other/module-19882.js — webpack module 19882
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88183 /* vendor/other/module-88183 */),
  o = r.buildFeedbackIntegration({
    getModalIntegration: () => r.feedbackModalIntegration,
    getScreenshotIntegration: () => r.feedbackScreenshotIntegration,
  });
t.feedbackSyncIntegration = o;
