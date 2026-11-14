// vendor/module-15089.js — webpack module 15089
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(92236 /* vendor/module-92236 */),
  o = n(33476 /* vendor/module-33476 */);
function i(e, t, n, o, i) {
  r._INTERNAL_captureLog(
    { level: e, message: t, attributes: n, severityNumber: i },
    o,
  );
}
(t.fmt = o.fmt),
  (t.debug = function (e, t, { scope: n } = {}) {
    i("debug", e, t, n);
  }),
  (t.error = function (e, t, { scope: n } = {}) {
    i("error", e, t, n);
  }),
  (t.fatal = function (e, t, { scope: n } = {}) {
    i("fatal", e, t, n);
  }),
  (t.info = function (e, t, { scope: n } = {}) {
    i("info", e, t, n);
  }),
  (t.trace = function (e, t, { scope: n } = {}) {
    i("trace", e, t, n);
  }),
  (t.warn = function (e, t, { scope: n } = {}) {
    i("warn", e, t, n);
  });
