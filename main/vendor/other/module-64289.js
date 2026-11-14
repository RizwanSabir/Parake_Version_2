// vendor/other/module-64289.js — webpack module 64289
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/other/module-16973 */),
  o = n(99344 /* vendor/other/module-99344 */);
(t.getAsyncContextStrategy = function (e) {
  const t = r.getSentryCarrier(e);
  return t.acs ? t.acs : o.getStackAsyncContextStrategy();
}),
  (t.setAsyncContextStrategy = function (e) {
    const t = r.getMainCarrier();
    r.getSentryCarrier(t).acs = e;
  });
