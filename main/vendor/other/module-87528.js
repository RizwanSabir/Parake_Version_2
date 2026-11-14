// vendor/other/module-87528.js — webpack module 87528
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/other/module-27352 */),
  o = n(64338 /* vendor/other/module-64338 */);
let i = null;
function s() {
  (i = r.GLOBAL_OBJ.onerror),
    (r.GLOBAL_OBJ.onerror = function (e, t, n, r, s) {
      const a = { column: r, error: s, line: n, msg: e, url: t };
      return o.triggerHandlers("error", a), !!i && i.apply(this, arguments);
    }),
    (r.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
t.addGlobalErrorInstrumentationHandler = function (e) {
  const t = "error";
  o.addHandler(t, e), o.maybeInstrument(t, s);
};
