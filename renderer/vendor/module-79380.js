// vendor/module-79380.js — webpack module 79380
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(68540 /* vendor/module-68540 */);
function i(e, t, n, i) {
  const a = r.getClient();
  r._INTERNAL_captureLog(
    { level: e, message: t, attributes: n, severityNumber: i },
    r.getCurrentScope(),
    (e, t) => o.getIPC(a).sendStructuredLog(t),
  );
}
(t.fmt = r.fmt),
  (t.debug = function (e, t) {
    i("debug", e, t);
  }),
  (t.error = function (e, t) {
    i("error", e, t);
  }),
  (t.fatal = function (e, t) {
    i("fatal", e, t);
  }),
  (t.info = function (e, t) {
    i("info", e, t);
  }),
  (t.trace = function (e, t) {
    i("trace", e, t);
  }),
  (t.warn = function (e, t) {
    i("warn", e, t);
  });
