// vendor/other/module-54174.js — webpack module 54174
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(2678 /* vendor/other/module-2678 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = "Fastify",
  c = o.generateInstrumentOnce(
    `${a}.v3`,
    () => new i.FastifyInstrumentationV3(),
  ),
  u = r.defineIntegration((e = {}) =>
    ((e) => {
      const t = s.fastifyIntegration(e);
      return r.extendIntegration(t, {
        setupOnce() {
          c();
        },
      });
    })(e),
  );
(t.instrumentFastify = s.instrumentFastify),
  (t.fastifyIntegration = u),
  (t.instrumentFastifyV3 = c),
  (t.setupFastifyErrorHandler = function (e, t) {
    t?.shouldHandleError &&
      (function () {
        const e = r.getClient();
        return e ? e.getIntegrationByName(a) : void 0;
      })()?.setShouldHandleError(t.shouldHandleError);
    const n = Object.assign(
      function (e, t, n) {
        e.addHook("onError", async (e, t, n) => {
          s.handleFastifyError.call(
            s.handleFastifyError,
            n,
            e,
            t,
            "onError-hook",
          );
        }),
          n();
      },
      {
        [Symbol.for("skip-override")]: !0,
        [Symbol.for("fastify.display-name")]: "sentry-fastify-error-handler",
      },
    );
    e.register(n);
  });
