// vendor/other/module-15320.js — webpack module 15320
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31256 /* vendor/other/module-31256 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "Connect",
  a = i.generateInstrumentOnce(s, () => new r.ConnectInstrumentation()),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
function u(e, t, n, r) {
  o.captureException(e, {
    mechanism: { handled: !1, type: "auto.middleware.connect" },
  }),
    r(e);
}
(t.connectIntegration = c),
  (t.instrumentConnect = a),
  (t.setupConnectErrorHandler = (e) => {
    e.use(u), i.ensureIsWrapped(e.use, "connect");
  });
