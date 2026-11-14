// vendor/module-64289.js — webpack module 64289
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/module-16973 */),
  o = n(99344 /* vendor/module-99344 */);
(t.getAsyncContextStrategy = function (e) {
  const t = r.getSentryCarrier(e);
  return t.acs ? t.acs : o.getStackAsyncContextStrategy();
}),
  (t.setAsyncContextStrategy = function (e) {
    const t = r.getMainCarrier();
    r.getSentryCarrier(t).acs = e;
  });
