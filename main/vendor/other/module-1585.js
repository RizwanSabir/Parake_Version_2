// vendor/other/module-1585.js — webpack module 1585
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(15280 /* vendor/other/module-15280 */),
  a = n(14640 /* vendor/other/module-14640 */),
  c = "Express",
  u = [">=4.0.0 <6"],
  l = o.generateInstrumentOnce(c, (e) => new d(e));
class d extends r.InstrumentationBase {
  constructor(e = {}) {
    super("sentry-express", i.SDK_VERSION, e);
  }
  init() {
    return new r.InstrumentationNodeModuleDefinition(
      "express",
      u,
      (e) => {
        try {
          i.patchExpressModule(e, () => ({
            ...this.getConfig(),
            onRouteResolved(e) {
              e && a.setHttpServerSpanRouteAttribute(e);
            },
          }));
        } catch (e) {
          s.DEBUG_BUILD && i.debug.error("Failed to patch express module:", e);
        }
        return e;
      },
      (e) => e,
    );
  }
}
const p = i.defineIntegration((e) => ({
  name: c,
  setupOnce() {
    l(e);
  },
}));
(t.expressErrorHandler = i.expressErrorHandler),
  (t.ExpressInstrumentation = d),
  (t.expressIntegration = p),
  (t.instrumentExpress = l),
  (t.setupExpressErrorHandler = function (e, t) {
    i.setupExpressErrorHandler(e, t), o.ensureIsWrapped(e.use, "express");
  });
