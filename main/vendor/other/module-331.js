// vendor/other/module-331.js — webpack module 331
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(39629 /* vendor/other/module-39629 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = i.generateInstrumentOnce("Koa", r.KoaInstrumentation, (e = {}) => ({
    ignoreLayersType: e.ignoreLayersType,
  })),
  a = o.defineIntegration((e = {}) => ({
    name: "Koa",
    setupOnce() {
      s(e);
    },
  }));
(t.instrumentKoa = s),
  (t.koaIntegration = a),
  (t.setupKoaErrorHandler = (e) => {
    e.use(async (e, t) => {
      try {
        await t();
      } catch (e) {
        throw (
          (o.captureException(e, {
            mechanism: { handled: !1, type: "auto.middleware.koa" },
          }),
          e)
        );
      }
    }),
      i.ensureIsWrapped(e.use, "koa");
  });
