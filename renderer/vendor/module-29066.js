// vendor/module-29066.js — webpack module 29066
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/module-27352 */),
  o = n(64338 /* vendor/module-64338 */);
let i = null;
function a() {
  (i = r.GLOBAL_OBJ.onunhandledrejection),
    (r.GLOBAL_OBJ.onunhandledrejection = function (e) {
      const t = e;
      return (
        o.triggerHandlers("unhandledrejection", t),
        !i || i.apply(this, arguments)
      );
    }),
    (r.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
t.addGlobalUnhandledRejectionInstrumentationHandler = function (e) {
  const t = "unhandledrejection";
  o.addHandler(t, e), o.maybeInstrument(t, a);
};
