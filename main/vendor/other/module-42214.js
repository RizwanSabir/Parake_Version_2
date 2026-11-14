// vendor/other/module-42214.js — webpack module 42214
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(54274 /* vendor/other/module-54274 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(15280 /* vendor/other/module-15280 */),
  a = "Hapi",
  c = i.generateInstrumentOnce(a, () => new r.HapiInstrumentation()),
  u = o.defineIntegration(() => ({
    name: a,
    setupOnce() {
      c();
    },
  })),
  l = {
    name: "SentryHapiErrorPlugin",
    version: o.SDK_VERSION,
    register: async function (e) {
      e.events.on({ name: "request", channels: ["error"] }, (e, t) => {
        if (o.getIsolationScope() !== o.getDefaultIsolationScope()) {
          const t = e.route;
          t.path &&
            o
              .getIsolationScope()
              .setTransactionName(`${t.method.toUpperCase()} ${t.path}`);
        } else
          s.DEBUG_BUILD &&
            o.debug.warn(
              "Isolation scope is still the default isolation scope - skipping setting transactionName",
            );
        var n;
        (function (e) {
          return !!(e && "object" == typeof e && "error" in e && e.error);
        })(t) &&
          ((n = t.error),
          o.captureException(n, {
            mechanism: { type: "auto.function.hapi", handled: !1 },
          }));
      });
    },
  };
(t.hapiErrorPlugin = l),
  (t.hapiIntegration = u),
  (t.instrumentHapi = c),
  (t.setupHapiErrorHandler = async function (e) {
    await e.register(l), i.ensureIsWrapped(e.register, "hapi");
  });
