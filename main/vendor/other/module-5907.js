// vendor/other/module-5907.js — webpack module 5907
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(95870 /* vendor/other/module-95870 */),
  o = n(96137 /* vendor/other/module-96137 */);
(t.fmt = o.fmt),
  (t.debug = function (...e) {
    r.captureLog("debug", ...e);
  }),
  (t.error = function (...e) {
    r.captureLog("error", ...e);
  }),
  (t.fatal = function (...e) {
    r.captureLog("fatal", ...e);
  }),
  (t.info = function (...e) {
    r.captureLog("info", ...e);
  }),
  (t.trace = function (...e) {
    r.captureLog("trace", ...e);
  }),
  (t.warn = function (...e) {
    r.captureLog("warn", ...e);
  });
