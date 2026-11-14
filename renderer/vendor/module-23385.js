// vendor/module-23385.js — webpack module 23385
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(87528 /* vendor/module-87528 */),
  i = n(29066 /* vendor/module-29066 */),
  a = n(58637 /* vendor/module-58637 */),
  s = n(38862 /* vendor/module-38862 */),
  l = n(19648 /* vendor/module-19648 */);
let c = !1;
t.registerSpanErrorInstrumentation = function () {
  function e() {
    const e = s.getActiveSpan(),
      t = e && s.getRootSpan(e);
    if (t) {
      const e = "internal_error";
      r.DEBUG_BUILD &&
        a.debug.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: l.SPAN_STATUS_ERROR, message: e });
    }
  }
  c ||
    ((c = !0),
    o.addGlobalErrorInstrumentationHandler(e),
    i.addGlobalUnhandledRejectionInstrumentationHandler(e));
};
