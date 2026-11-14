// vendor/module-87528.js — webpack module 87528
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/module-27352 */),
  o = n(64338 /* vendor/module-64338 */);
let i = null;
function a() {
  (i = r.GLOBAL_OBJ.onerror),
    (r.GLOBAL_OBJ.onerror = function (e, t, n, r, a) {
      const s = { column: r, error: a, line: n, msg: e, url: t };
      return o.triggerHandlers("error", s), !!i && i.apply(this, arguments);
    }),
    (r.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
t.addGlobalErrorInstrumentationHandler = function (e) {
  const t = "error";
  o.addHandler(t, e), o.maybeInstrument(t, a);
};
