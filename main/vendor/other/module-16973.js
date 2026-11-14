// vendor/other/module-16973.js — webpack module 16973
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(24499 /* vendor/other/module-24499 */),
  o = n(27352 /* vendor/other/module-27352 */);
function i(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return (
    (t.version = t.version || r.SDK_VERSION),
    (t[r.SDK_VERSION] = t[r.SDK_VERSION] || {})
  );
}
(t.getGlobalSingleton = function (e, t, n = o.GLOBAL_OBJ) {
  const i = (n.__SENTRY__ = n.__SENTRY__ || {}),
    s = (i[r.SDK_VERSION] = i[r.SDK_VERSION] || {});
  return s[e] || (s[e] = t());
}),
  (t.getMainCarrier = function () {
    return i(o.GLOBAL_OBJ), o.GLOBAL_OBJ;
  }),
  (t.getSentryCarrier = i);
