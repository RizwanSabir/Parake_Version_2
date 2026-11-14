// vendor/other/module-23385.js — webpack module 23385
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(87528 /* vendor/other/module-87528 */),
  i = n(29066 /* vendor/other/module-29066 */),
  s = n(58637 /* vendor/other/module-58637 */),
  a = n(38862 /* vendor/other/module-38862 */),
  c = n(19648 /* vendor/other/module-19648 */);
let u = !1;
t.registerSpanErrorInstrumentation = function () {
  function e() {
    const e = a.getActiveSpan(),
      t = e && a.getRootSpan(e);
    if (t) {
      const e = "internal_error";
      r.DEBUG_BUILD &&
        s.debug.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: c.SPAN_STATUS_ERROR, message: e });
    }
  }
  u ||
    ((u = !0),
    o.addGlobalErrorInstrumentationHandler(e),
    i.addGlobalUnhandledRejectionInstrumentationHandler(e));
};
